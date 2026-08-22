import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

import {
  camelFromEnvName,
  camelFromKebab,
  addEnvVarToConfig,
  addEnvVarRowToAgents,
  addSchemaField,
  scaffoldTaskFile,
  addToPySet,
  syncAllowedTasks,
  parseLocateOutput,
  parseRunIdFromTrigger,
  fillTriggerConfigProject,
  fillModalAppName,
  fillSchemaBaseId,
  fillPackageJsonName,
  parseDotenv,
  dotenvContent,
  lintSpec,
  lintPlan,
  PLAN_STATUS_VALUES,
  VALID_AGENT_NAMES,
  pickContextFile,
  CONTEXT_FILE_PRECEDENCE,
  DEFAULT_CONTEXT_FILE,
} from "../src/cores";

const fixtures = join(dirname(fileURLToPath(import.meta.url)), "fixtures");
const load = (name: string): string => readFileSync(join(fixtures, name), "utf8");

describe("camelFromEnvName", () => {
  it("converts SNAKE_UPPER to camelCase", () => {
    expect(camelFromEnvName("TRIGGER_SECRET_KEY")).toBe("triggerSecretKey");
    expect(camelFromEnvName("AIRTABLE_TOKEN")).toBe("airtableToken");
    expect(camelFromEnvName("GHL_LOCATION_ID")).toBe("ghlLocationId");
    expect(camelFromEnvName("APIFY_TOKEN")).toBe("apifyToken");
  });
  it("handles digits", () => {
    expect(camelFromEnvName("OPENAI_API_KEY_2")).toBe("openaiApiKey2");
  });
});

describe("camelFromKebab", () => {
  it("converts kebab to camel", () => {
    expect(camelFromKebab("hello-world")).toBe("helloWorld");
    expect(camelFromKebab("send-welcome-email")).toBe("sendWelcomeEmail");
    expect(camelFromKebab("sync")).toBe("sync");
  });
});

// ---------------------------------------------------------------------------
// addEnvVarToConfig
// ---------------------------------------------------------------------------

describe("addEnvVarToConfig — required var (memoised)", () => {
  const base = load("config.ts");
  const r = addEnvVarToConfig(base, { name: "STRIPE_API_KEY", required: true });

  it("adds the memoised getter above `export const config`", () => {
    expect(r.memoGetterAdded).toBe(true);
    expect(r.content).toContain(
      `const _stripeApiKey = memo(() => required("STRIPE_API_KEY"));`,
    );
    // memo line sits immediately above the config object.
    expect(r.content).toMatch(
      /const _stripeApiKey = memo\(\(\) => required\("STRIPE_API_KEY"\)\);\n\nexport const config = \{/,
    );
  });

  it("adds the config accessor before `};`", () => {
    expect(r.configGetterAdded).toBe(true);
    expect(r.content).toContain(
      `  get stripeApiKey(): string { return _stripeApiKey(); },`,
    );
    expect(r.content).toMatch(
      /get unipileApiKey\(\): string \{ return _unipileApiKey\(\); \},\n  get stripeApiKey\(\)/,
    );
  });

  it("preserves the existing getters and the object close", () => {
    expect(r.content).toContain(`get triggerSecretKey(): string { return _triggerSecretKey(); },`);
    expect(r.content).toContain(`get unipileApiKey(): string { return _unipileApiKey(); },`);
    expect(r.content).toMatch(/export const config = \{[\s\S]*?\n\};/);
  });

  it("does not add an auth header when none requested", () => {
    expect(r.authHeaderAdded).toBe(false);
    expect(r.content).not.toContain("stripeAuthHeader");
  });
});

describe("addEnvVarToConfig — required var + auth header", () => {
  const base = load("config.ts");
  const r = addEnvVarToConfig(base, {
    name: "STRIPE_API_KEY",
    required: true,
    authHeaderName: "stripeAuthHeader",
  });

  it("appends a lazy auth-header function", () => {
    expect(r.authHeaderAdded).toBe(true);
    expect(r.content).toContain(`export function stripeAuthHeader(): string {`);
    expect(r.content).toContain(`return "Bearer " + config.stripeApiKey;`);
    // built inside a function, not a module-top const
    expect(r.content).toMatch(
      /export function stripeAuthHeader\(\): string \{\n  return "Bearer " \+ config\.stripeApiKey;\n\}/,
    );
  });

  it("supports a custom header format (X-API-KEY style)", () => {
    const r2 = addEnvVarToConfig(load("config.ts"), {
      name: "UNIPILE_API_KEY",
      required: true,
      getterName: "unipileApiKey", // already exists -> only header added
      authHeaderName: "unipileApiKeyHeaderAlt",
      headerFormat: `config.unipileApiKey`,
    });
    expect(r2.content).toContain(`return config.unipileApiKey;`);
  });
});

describe("addEnvVarToConfig — optional var (inline getter)", () => {
  const base = load("config.ts");
  const r = addEnvVarToConfig(base, {
    name: "OPENAI_API_KEY",
    required: false,
    default: "",
  });

  it("does NOT add a memoised getter (optional vars have none)", () => {
    expect(r.memoGetterAdded).toBe(false);
    expect(r.content).not.toContain("_openaiApiKey = memo");
  });

  it('adds an inline `process.env.X ?? "default"` accessor', () => {
    expect(r.configGetterAdded).toBe(true);
    expect(r.content).toContain(
      `  get openaiApiKey(): string { return process.env.OPENAI_API_KEY ?? ""; },`,
    );
  });
});

describe("addEnvVarToConfig — idempotency", () => {
  const base = load("config.ts");
  const once = addEnvVarToConfig(base, { name: "STRIPE_API_KEY", required: true });
  const twice = addEnvVarToConfig(once.content, { name: "STRIPE_API_KEY", required: true });

  it("second call is a no-op", () => {
    expect(twice.memoGetterAdded).toBe(false);
    expect(twice.configGetterAdded).toBe(false);
    expect(twice.content).toBe(once.content);
  });

  it("auth header is also idempotent", () => {
    const a = addEnvVarToConfig(base, { name: "STRIPE_API_KEY", required: true, authHeaderName: "stripeAuthHeader" });
    const b = addEnvVarToConfig(a.content, { name: "STRIPE_API_KEY", required: true, authHeaderName: "stripeAuthHeader" });
    expect(b.authHeaderAdded).toBe(false);
    expect(b.content).toBe(a.content);
  });
});

describe("addEnvVarToConfig — anchor errors", () => {
  it("throws when the config object anchor is missing", () => {
    expect(() =>
      addEnvVarToConfig("export const notConfig = {};", { name: "X", required: true }),
    ).toThrow(/anchor "export const config = \{" not found/);
  });
});

// ---------------------------------------------------------------------------
// addEnvVarRowToAgents
// ---------------------------------------------------------------------------

describe("addEnvVarRowToAgents", () => {
  const base = load("AGENTS.md");

  it("appends a row after the last table row, before the trailing text", () => {
    const out = addEnvVarRowToAgents(base, { name: "STRIPE_API_KEY", required: true, notes: "Stripe REST" });
    expect(out).toContain("| `STRIPE_API_KEY` | yes | Stripe REST |");
    // row lands between the last table row and the `.env` paragraph
    expect(out).toMatch(
      /\| `TRIGGER_BASE_URL` \| no \|.*\n\| `STRIPE_API_KEY` \| yes \| Stripe REST \|\n\n`.env` may also carry/,
    );
  });

  it("marks optional vars as 'if needed'", () => {
    const out = addEnvVarRowToAgents(base, { name: "SENTRY_DSN", required: false, notes: "error tracking" });
    expect(out).toContain("| `SENTRY_DSN` | if needed | error tracking |");
  });

  it("is idempotent by name (existing TRIGGER_SECRET_KEY row)", () => {
    const out = addEnvVarRowToAgents(base, { name: "TRIGGER_SECRET_KEY", required: true, notes: "dup" });
    expect(out).toBe(base); // unchanged — already present
  });

  it("throws when ## Environment is missing", () => {
    expect(() => addEnvVarRowToAgents("no env section here", { name: "X", required: true })).toThrow(/## Environment/);
  });
});

// ---------------------------------------------------------------------------
// addSchemaField
// ---------------------------------------------------------------------------

describe("addSchemaField — into an existing uncommented block (F)", () => {
  const base = load("schema.ts");
  const out = addSchemaField(base, { namespace: "F", key: "contactName", value: "Name" });

  it("inserts the constant inside the block, preserving `as const`", () => {
    expect(out).toContain(`  contactName: "Name",`);
    expect(out).toMatch(/export const F = \{[\s\S]*?contactName: "Name",\n\} as const;/);
  });
  it("does not touch other blocks", () => {
    expect(out).toContain("export const BASE_ID = \"REPLACE-ME\";");
    expect(out).toContain("export const TABLE = {");
  });
  it("is idempotent", () => {
    const twice = addSchemaField(out, { namespace: "F", key: "contactName", value: "Name" });
    expect(twice).toBe(out);
  });
});

describe("addSchemaField — uncommenting a commented placeholder (GHL)", () => {
  const base = load("schema.ts");
  const out = addSchemaField(base, { namespace: "GHL", key: "locationId", value: "REPLACE-ME" });

  it("replaces the commented placeholder with a real `as const` block", () => {
    expect(out).toContain("export const GHL = {");
    expect(out).toContain(`  locationId: "REPLACE-ME",`);
    expect(out).toMatch(/export const GHL = \{\n  locationId: "REPLACE-ME",\n\} as const;/);
    expect(out).not.toMatch(/\/\/ export const GHL = /);
  });
  it("leaves the UNIPILE commented placeholder intact", () => {
    expect(out).toContain("// export const UNIPILE = { ... }");
  });
});

describe("addSchemaField — absent namespace appended (APIFY)", () => {
  const base = load("schema.ts");
  const out = addSchemaField(base, { namespace: "APIFY", key: "actorId", value: "abc123" });

  it("appends a new block at end of file", () => {
    expect(out).toMatch(/export const APIFY = \{\n  actorId: "abc123",\n\} as const;\n$/);
  });
  it("does not duplicate on second add (idempotent)", () => {
    const twice = addSchemaField(out, { namespace: "APIFY", key: "actorId", value: "abc123" });
    expect(twice).toBe(out);
  });
});

// ---------------------------------------------------------------------------
// scaffoldTaskFile
// ---------------------------------------------------------------------------

describe("scaffoldTaskFile", () => {
  it("scaffolds in the hello-world.ts shape", () => {
    const out = scaffoldTaskFile({ id: "send-welcome-email" });
    expect(out).toContain(`import { task, logger } from "@trigger.dev/sdk";`);
    expect(out).toContain(`export const sendWelcomeEmail = task({`);
    expect(out).toContain(`  id: "send-welcome-email",`);
    expect(out).toContain(`  run: async (payload: Record<string, unknown>) => {`);
    expect(out).toContain(`    logger.info("task send-welcome-email started");`);
    expect(out).toContain(`    return {};`);
  });

  it("honours a custom payload shape and export name", () => {
    const out = scaffoldTaskFile({ id: "sync", name: "syncRows", payloadShape: "{ since: string }" });
    expect(out).toContain(`export const syncRows = task({`);
    expect(out).toContain(`  run: async (payload: { since: string }) => {`);
  });

  it("rejects non-kebab ids", () => {
    expect(() => scaffoldTaskFile({ id: "Bad_ID" })).toThrow(/kebab-case/);
    expect(() => scaffoldTaskFile({ id: "with space" })).toThrow(/kebab-case/);
  });

  it("is deterministic — same input yields identical output", () => {
    const a = scaffoldTaskFile({ id: "send-welcome-email" });
    const b = scaffoldTaskFile({ id: "send-welcome-email" });
    expect(a).toBe(b);
  });
});

// ---------------------------------------------------------------------------
// addToPySet / syncAllowedTasks
// ---------------------------------------------------------------------------

describe("addToPySet — empty set()", () => {
  const base = load("modal_bridge.py");
  const r = addToPySet(base, "ALLOWED_TASKS", "hello-world");
  it("turns set() into {\"hello-world\"}", () => {
    expect(r.added).toBe(true);
    expect(r.content).toContain(`ALLOWED_TASKS: set[str] = {"hello-world"}`);
  });
});

describe("addToPySet — populated set, sorted append", () => {
  const base = load("modal_bridge.py")
    .replace('ALLOWED_TASKS: set[str] = set()', 'ALLOWED_TASKS: set[str] = {"zebra", "apple"}');
  const r = addToPySet(base, "ALLOWED_TASKS", "mango");
  it("inserts and re-sorts", () => {
    expect(r.added).toBe(true);
    expect(r.content).toContain(`ALLOWED_TASKS: set[str] = {"apple", "mango", "zebra"}`);
  });
  it("is idempotent", () => {
    const twice = addToPySet(r.content, "ALLOWED_TASKS", "mango");
    expect(twice.added).toBe(false);
    expect(twice.content).toBe(r.content);
  });
});

describe("syncAllowedTasks — rowScoped", () => {
  const base = load("modal_bridge.py");
  const r = syncAllowedTasks(base, "send-welcome-email", true);
  it("adds to ALLOWED_TASKS and TASK_REQUIRES_RECORD_ID", () => {
    expect(r.allowedAdded).toBe(true);
    expect(r.requiresAdded).toBe(true);
    expect(r.content).toContain(`ALLOWED_TASKS: set[str] = {"send-welcome-email"}`);
    expect(r.content).toContain(`TASK_REQUIRES_RECORD_ID: set[str] = {"send-welcome-email"}`);
  });
});

describe("syncAllowedTasks — not rowScoped", () => {
  const base = load("modal_bridge.py");
  const r = syncAllowedTasks(base, "daily-batch", false);
  it("adds only to ALLOWED_TASKS", () => {
    expect(r.allowedAdded).toBe(true);
    expect(r.requiresAdded).toBe(false);
    expect(r.content).toContain(`ALLOWED_TASKS: set[str] = {"daily-batch"}`);
    expect(r.content).toContain(`TASK_REQUIRES_RECORD_ID: set[str] = set()`);
  });
});

describe("addToPySet — anchor error", () => {
  it("throws when the var declaration is missing", () => {
    expect(() => addToPySet("ALLOWED_TASKS = []", "ALLOWED_TASKS", "x")).toThrow(/anchor "ALLOWED_TASKS: set\[str\] = …" not found/);
  });
});

// ---------------------------------------------------------------------------
// parseLocateOutput
// ---------------------------------------------------------------------------

describe("parseLocateOutput — single slug", () => {
  const text = [
    "[locate-automation] slug: send-welcome-email",
    "spec: docs/specs/send-welcome-email.md (exists)",
    "plan: docs/plans/2026-08-22-send-welcome-email.md (status: in_progress)",
    "ledger: .claude/automation/2026-08-22-send-welcome-email/progress.md (exists)",
    "progress: 2/5 tasks complete — next: Task 3",
  ].join("\n");

  const r = parseLocateOutput(text);
  it("parses all fields", () => {
    expect(r.listMode).toBe(false);
    expect(r.slug).toBe("send-welcome-email");
    expect(r.specPath).toBe("docs/specs/send-welcome-email.md");
    expect(r.specExists).toBe(true);
    expect(r.planPath).toBe("docs/plans/2026-08-22-send-welcome-email.md");
    expect(r.planStatus).toBe("in_progress");
    expect(r.ledgerPath).toBe(".claude/automation/2026-08-22-send-welcome-email/progress.md");
    expect(r.ledgerExists).toBe(true);
    expect(r.progress).toBe("2/5 tasks complete — next: Task 3");
  });
});

describe("parseLocateOutput — not-found states", () => {
  const text = [
    "[locate-automation] slug: ghost",
    "spec: docs/specs/ghost.md (not found)",
    "plan: docs/plans/2026-08-22-ghost.md (status: planned)",
    "ledger: .claude/automation/2026-08-22-ghost/progress.md (not found)",
    "progress: 0/0 tasks complete — next: (none)",
  ].join("\n");
  const r = parseLocateOutput(text);
  it("reports not-found flags", () => {
    expect(r.specExists).toBe(false);
    expect(r.ledgerExists).toBe(false);
    expect(r.planStatus).toBe("planned");
  });
});

describe("parseLocateOutput — list mode", () => {
  it("flags listMode for the no-slug banner", () => {
    const r = parseLocateOutput("[locate-automation] no slug given\n");
    expect(r.listMode).toBe(true);
    expect(r.slug).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// parseRunIdFromTrigger
// ---------------------------------------------------------------------------

describe("parseRunIdFromTrigger", () => {
  it("prefers id", () => {
    expect(parseRunIdFromTrigger('{"id":"run_123"}')).toBe("run_123");
  });
  it("falls back to runId", () => {
    expect(parseRunIdFromTrigger('{"runId":"run_456"}')).toBe("run_456");
  });
  it("throws on missing id/runId", () => {
    expect(() => parseRunIdFromTrigger('{"foo":"bar"}')).toThrow(/no id\/runId/);
  });
  it("throws on bad JSON", () => {
    expect(() => parseRunIdFromTrigger("not json")).toThrow(/could not parse/);
  });
});

// ---------------------------------------------------------------------------
// relay_setup sentinel fillers
// ---------------------------------------------------------------------------

describe("fillTriggerConfigProject", () => {
  const cfg = `import { defineConfig } from "@trigger.dev/sdk";
export default defineConfig({
  project: "",
  dirs: ["./src/trigger"],
});`;
  it("fills the empty project ref", () => {
    expect(fillTriggerConfigProject(cfg, "proj_abc")).toContain(`project: "proj_abc"`);
  });
  it("is idempotent (already-filled left alone)", () => {
    const filled = fillTriggerConfigProject(cfg, "proj_abc");
    expect(fillTriggerConfigProject(filled, "proj_other")).toBe(filled);
  });
});

describe("fillModalAppName", () => {
  it("replaces the REPLACE-ME bridge name", () => {
    const py = 'app = App("REPLACE-ME-bridge", image=image)';
    expect(fillModalAppName(py, "acme")).toBe('app = App("acme-bridge", image=image)');
  });
});

describe("fillSchemaBaseId", () => {
  it("replaces BASE_ID sentinel", () => {
    const s = 'export const BASE_ID = "REPLACE-ME";';
    expect(fillSchemaBaseId(s, "appXXXX")).toBe('export const BASE_ID = "appXXXX";');
  });
});

describe("fillPackageJsonName", () => {
  it("replaces the package name sentinel", () => {
    const pj = `{ "name": "REPLACE-ME-via-system-setup", "version": "0.1.0" }`;
    expect(fillPackageJsonName(pj, "acme-automation")).toBe(
      `{ "name": "acme-automation", "version": "0.1.0" }`,
    );
  });
});

// ---------------------------------------------------------------------------
// parseDotenv / dotenvContent
// ---------------------------------------------------------------------------

describe("parseDotenv", () => {
  it("parses key=value lines, ignoring comments and blanks", () => {
    const text = [
      "# a comment",
      "",
      "TRIGGER_PROJECT_ID=proj_abc",
      'TRIGGER_SECRET_KEY="tr_dev_secret"',
      "NOTE='with spaces'",
    ].join("\n");
    expect(parseDotenv(text)).toEqual({
      TRIGGER_PROJECT_ID: "proj_abc",
      TRIGGER_SECRET_KEY: "tr_dev_secret",
      NOTE: "with spaces",
    });
  });
  it("ignores lines without =", () => {
    expect(parseDotenv("BOGUS\nKEY=val")).toEqual({ KEY: "val" });
  });
});

describe("dotenvContent", () => {
  it("renders KEY=VALUE lines", () => {
    expect(dotenvContent({ A: "1", B: "2" })).toBe("A=1\nB=2\n");
  });
});

describe("pickContextFile", () => {
  const has = (names: string[]) => (n: string) => names.includes(n);
  it("prefers AGENTS.override.md over AGENTS.md and CLAUDE.md", () => {
    expect(pickContextFile(has(["AGENTS.md", "CLAUDE.md", "AGENTS.override.md"]))).toBe("AGENTS.override.md");
  });
  it("falls back to AGENTS.md when no override is present", () => {
    expect(pickContextFile(has(["CLAUDE.md", "AGENTS.md"]))).toBe("AGENTS.md");
  });
  it("falls back to CLAUDE.md for a scaffolded project that ships only CLAUDE.md", () => {
    expect(pickContextFile(has(["CLAUDE.md"]))).toBe("CLAUDE.md");
  });
  it("defaults to AGENTS.md when no context file exists yet (fresh Pi-native project)", () => {
    expect(pickContextFile(has([]))).toBe(DEFAULT_CONTEXT_FILE);
    expect(DEFAULT_CONTEXT_FILE).toBe("AGENTS.md");
  });
  it("precedence order is override → AGENTS → CLAUDE", () => {
    expect([...CONTEXT_FILE_PRECEDENCE]).toEqual(["AGENTS.override.md", "AGENTS.md", "CLAUDE.md"]);
  });
});

describe("lintSpec", () => {
  it("passes a spec with all required frontmatter", () => {
    const content = `---
slug: send-ghl-email
name: Send GHL Email
trigger_type: webhook
created: 2026-08-22
---
# Body`;
    expect(lintSpec({ file: "docs/specs/send-ghl-email.md", content })).toEqual([]);
  });

  it("errors on missing frontmatter block", () => {
    const out = lintSpec({ file: "docs/specs/x.md", content: "# no frontmatter" });
    expect(out).toHaveLength(1);
    expect(out[0].severity).toBe("error");
    expect(out[0].message).toMatch(/missing YAML frontmatter/);
  });

  it("errors per missing key", () => {
    const content = `---
slug: only-slug
---
body`;
    const out = lintSpec({ file: "docs/specs/x.md", content });
    const keys = out.map((f) => f.message);
    expect(keys.some((m) => m.includes("missing `name:`"))).toBe(true);
    expect(keys.some((m) => m.includes("missing `trigger_type:`"))).toBe(true);
    expect(keys.some((m) => m.includes("missing `created:`"))).toBe(true);
    expect(keys.some((m) => m.includes("missing `slug:`"))).toBe(false);
  });
});

describe("lintPlan", () => {
  const goodPlan = `---
status: in_progress
---
## Task 1
**Agents:** trigger-dev-agent
- do something

## Task 2
**Agents:** airtable-agent → modal-agent
- chain`;
  const good = (content: string) => lintPlan({ file: "docs/plans/p.md", content });

  it("passes a valid plan with single + chained agents", () => {
    expect(good(goodPlan)).toEqual([]);
  });

  it("errors on missing status", () => {
    const out = good(`---\nother: x\n---\n**Agents:** modal-agent`);
    expect(out.some((f) => f.message.match(/missing `status:`/))).toBe(true);
  });

  it("errors on invalid status value", () => {
    const out = good(`---\nstatus: draft\n---\n**Agents:** modal-agent`);
    expect(out.some((f) => f.message.match(/invalid plan status/) && f.severity === "error")).toBe(true);
    expect(PLAN_STATUS_VALUES).toContain("in_progress");
  });

  it("errors when no **Agents:** line exists", () => {
    const out = good(`---\nstatus: planned\n---\n## Task 1\n- no agents named`);
    expect(out.some((f) => f.message.includes("no `**Agents:**"))).toBe(true);
  });

  it("warns on unknown agent names (hyphens preserved)", () => {
    const out = good(`---\nstatus: planned\n---\n**Agents:** fake-agent`);
    expect(out.some((f) => f.severity === "warning" && f.message.includes("fake-agent"))).toBe(true);
    expect(VALID_AGENT_NAMES).toContain("modal-agent");
  });

  it("strips trailing parenthetical comments on the Agents line", () => {
    const out = good(`---\nstatus: planned\n---\n**Agents:** modal-agent *(deploys the bridge)*`);
    // modal-agent is valid, so no finding for it
    expect(out.some((f) => f.message.includes("modal-agent") && f.severity === "warning")).toBe(false);
  });

  it("handles -> ASCII arrow chains", () => {
    const out = good(`---\nstatus: planned\n---\n**Agents:** airtable-agent -> trigger-dev-agent`);
    expect(out.filter((f) => f.severity === "warning")).toEqual([]);
  });
});