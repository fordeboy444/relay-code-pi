// Pure, side-effect-free cores for the relay-code-pi tools.
//
// Each tool's `execute` body (in extensions/relay-tools.ts) is thin glue around
// a function exported here. These functions take file CONTENT (strings) and
// params, and return new content — they never touch the filesystem or the Pi
// runtime, so they unit-test with plain Vitest fixtures and no Pi install.
//
// Conventions enforced (mirroring relay-code/AGENTS.md):
//   - lazy-env pattern: required var = `memo(() => required("X"))` + `config` getter;
//     optional var = inline `process.env.X ?? "default"` getter.
//   - schema contract: namespaced `as const` objects in src/schema.ts.
//   - ALLOWED_TASKS / TASK_REQUIRES_RECORD_ID sync in modal_bridge.py.

/** TRIGGER_SECRET_KEY -> triggerSecretKey */
export function camelFromEnvName(name: string): string {
  const lower = name.toLowerCase();
  return lower.replace(/_([a-z0-9])/g, (_, c) => c.toUpperCase());
}

/** hello-world -> helloWorld ; foo -> foo */
export function camelFromKebab(id: string): string {
  return id.replace(/-([a-z0-9])/gi, (_, c) => c.toUpperCase());
}

// ---------------------------------------------------------------------------
// relay_add_env_var — config.ts transform
// ---------------------------------------------------------------------------

export interface AddEnvVarParams {
  name: string;            // e.g. "STRIPE_API_KEY"
  required: boolean;       // required (memoised) vs optional (inline)
  default?: string;        // for optional vars
  getterName?: string;     // config.<getterName>; defaults to camelFromEnvName(name)
  authHeaderName?: string; // e.g. "stripeAuthHeader" -> also adds an auth-header fn
  headerFormat?: string;   // e.g. `"Bearer " + config.stripeApiKey`; defaults to Bearer
}

export interface AddEnvVarResult {
  content: string;
  memoGetterAdded: boolean;
  configGetterAdded: boolean;
  authHeaderAdded: boolean;
}

const CONFIG_OBJAnchor = "export const config = {";

export function addEnvVarToConfig(content: string, p: AddEnvVarParams): AddEnvVarResult {
  const getter = p.getterName ?? camelFromEnvName(p.name);
  const memoName = `_${getter}`;
  const result: AddEnvVarResult = {
    content,
    memoGetterAdded: false,
    configGetterAdded: false,
    authHeaderAdded: false,
  };

  if (!content.includes(CONFIG_OBJAnchor)) {
    throw new Error(
      `relay_add_env_var: anchor "${CONFIG_OBJAnchor}" not found in src/config.ts — the file may have been hand-edited away from the framework template.`,
    );
  }

  // 1. Required vars: add the memoised getter above `export const config`.
  if (p.required) {
    if (!content.includes(`${memoName} = memo(`)) {
      const memoLine = `const ${memoName} = memo(() => required("${p.name}"));`;
      result.content = result.content.replace(
        CONFIG_OBJAnchor,
        `${memoLine}\n\n${CONFIG_OBJAnchor}`,
      );
      result.memoGetterAdded = true;
    }
  }

  // 2. Add the `config` accessor, unless it already exists.
  const getterSignature = `get ${getter}():`;
  if (!result.content.includes(getterSignature)) {
    const getterLine = p.required
      ? `  ${getterSignature} string { return ${memoName}(); },`
      : `  ${getterSignature} string { return process.env.${p.name} ?? ${JSON.stringify(p.default ?? "")}; },`;
    const closeIdx = result.content.indexOf("\n};", result.content.indexOf(CONFIG_OBJAnchor));
    if (closeIdx < 0) {
      throw new Error(
        "relay_add_env_var: could not find the closing `};` of the `config` object in src/config.ts.",
      );
    }
    result.content =
      result.content.slice(0, closeIdx) + `\n${getterLine}` + result.content.slice(closeIdx);
    result.configGetterAdded = true;
  }

  // 3. Optional auth-header function (built inside a function — lazy-env safe).
  if (p.authHeaderName) {
    if (!result.content.includes(`export function ${p.authHeaderName}(`)) {
      const fmt = p.headerFormat ?? `"Bearer " + config.${getter}`;
      const fn =
        `\nexport function ${p.authHeaderName}(): string {\n` +
        `  return ${fmt};\n` +
        `}\n`;
      result.content = result.content.trimEnd() + "\n" + fn;
      result.authHeaderAdded = true;
    }
  }

  return result;
}

// ---------------------------------------------------------------------------
// relay_add_env_var — project-context env-table row
// ---------------------------------------------------------------------------

/** Pi loads the project context file as `AGENTS.override.md` → `AGENTS.md` →
 * `CLAUDE.md` (skills/pi-api: "Pi loads AGENTS.md or CLAUDE.md"). The env-table
 * tool must write to whichever of these the project actually uses, so it works
 * in a scaffolded relay-code project (which ships CLAUDE.md) without a manual
 * rename. `pickContextFile` encodes that precedence; pass an existence check. */
export const CONTEXT_FILE_PRECEDENCE = ["AGENTS.override.md", "AGENTS.md", "CLAUDE.md"] as const;
export const DEFAULT_CONTEXT_FILE = "AGENTS.md";
export function pickContextFile(has: (name: string) => boolean): string {
  for (const name of CONTEXT_FILE_PRECEDENCE) {
    if (has(name)) return name;
  }
  return DEFAULT_CONTEXT_FILE;
}

export interface AddEnvVarRowParams {
  name: string;
  required: boolean;
  notes?: string;
}

/** Insert a row into the `## Environment` table in the project context file
 * (AGENTS.md, or CLAUDE.md when that's the file Pi loads). Idempotent by `name`. */
export function addEnvVarRowToAgents(doc: string, p: AddEnvVarRowParams): string {
  const sectIdx = doc.indexOf("## Environment");
  if (sectIdx < 0) {
    throw new Error(
      'relay_add_env_var: "## Environment" section not found in the project context file — cannot update the env table.',
    );
  }
  const sepIdx = doc.indexOf("|---|", sectIdx);
  if (sepIdx < 0) {
    throw new Error(
      "relay_add_env_var: env table separator row (|---|) not found under ## Environment in the project context file.",
    );
  }

  // Walk forward from the separator line by line; the table ends at the first
  // line that does not start with `|`. Robust to CRLF (we scan on `\n`).
  let tableEndAbs = -1;
  let nl = doc.indexOf("\n", sepIdx);
  while (nl >= 0) {
    const nextStart = nl + 1;
    if (doc.slice(nextStart).trimStart().startsWith("|")) {
      nl = doc.indexOf("\n", nextStart);
    } else {
      tableEndAbs = nextStart; // start of the first non-table line
      break;
    }
  }
  if (tableEndAbs < 0) {
    throw new Error(
      "relay_add_env_var: could not find the end of the env table in the project context file.",
    );
  }

  // Idempotency: a row for this var already exists (matches bare or
  // backtick-wrapped names — the real context-file table wraps names in backticks).
  const tableBlock = doc.slice(sepIdx, tableEndAbs);
  if (new RegExp(`^\\| \`?${escapeRegex(p.name)}\`? \\|`, "m").test(tableBlock)) {
    return doc; // already present
  }

  const requiredCol = p.required ? "yes" : "if needed";
  const notesCol = p.notes ?? "";
  const row = `| \`${p.name}\` | ${requiredCol} | ${notesCol} |\n`;
  return doc.slice(0, tableEndAbs) + row + doc.slice(tableEndAbs);
}

// ---------------------------------------------------------------------------
// relay_add_schema_field — src/schema.ts transform
// ---------------------------------------------------------------------------

export type SchemaNamespace = "F" | "TABLE" | "GHL" | "UNIPILE" | "APIFY";

export interface AddSchemaFieldParams {
  namespace: SchemaNamespace;
  key: string;   // e.g. "example_Name" (F) or "contacts" (TABLE)
  value: string; // rendered as a JSON string literal
}

const NS_BLOCK_RE = (ns: string) =>
  new RegExp(`^export const ${ns} = \\{`, "m");

/** Add a constant to a namespaced `as const` block, creating/uncommenting it if needed. */
export function addSchemaField(content: string, p: AddSchemaFieldParams): string {
  const ns = p.namespace;
  const keyPattern = new RegExp(`^\\s*${escapeRegex(p.key)}\\s*:`, "m");

  // Case 1: an uncommented `export const <NS> = {` block exists -> insert into it.
  const blockMatch = content.match(NS_BLOCK_RE(ns));
  if (blockMatch && blockMatch.index != null) {
    const blockStart = blockMatch.index;
    const closeIdx = content.indexOf("} as const;", blockStart);
    if (closeIdx < 0) {
      throw new Error(`relay_add_schema_field: block for ${ns} has no \`} as const;\` close.`);
    }
    const blockText = content.slice(blockStart, closeIdx);
    if (keyPattern.test(blockText)) return content; // idempotent
    const line = `  ${p.key}: ${JSON.stringify(p.value)},\n`;
    return content.slice(0, closeIdx) + line + content.slice(closeIdx);
  }

  // Case 2: a commented placeholder line exists -> replace it with a real block.
  const commentedRe = new RegExp(
    `^//\\s*export const ${ns} = \\{[^\\n]*\\}[^\\n]*$`,
    "m",
  );
  const commented = content.match(commentedRe);
  if (commented && commented.index != null) {
    const block =
      `export const ${ns} = {\n` +
      `  ${p.key}: ${JSON.stringify(p.value)},\n` +
      `} as const;`;
    return content.slice(0, commented.index) + block + content.slice(commented.index + commented[0].length);
  }

  // Case 3: absent -> append a new block at end of file.
  if (keyPattern.test(content)) return content; // defensive idempotency
  const block =
    `\nexport const ${ns} = {\n` +
    `  ${p.key}: ${JSON.stringify(p.value)},\n` +
    `} as const;\n`;
  return content.trimEnd() + "\n" + block;
}

// ---------------------------------------------------------------------------
// relay_add_task — scaffold src/trigger/<id>.ts
// ---------------------------------------------------------------------------

export interface ScaffoldTaskParams {
  id: string;             // kebab-case task id, e.g. "send-welcome-email"
  name?: string;          // exported const name; defaults to camelFromKebab(id)
  payloadShape?: string;  // TS type for `payload`; defaults to Record<string, unknown>
}

export function scaffoldTaskFile(p: ScaffoldTaskParams): string {
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.id)) {
    throw new Error(
      `relay_add_task: id must be kebab-case (lowercase, hyphen-separated); got ${JSON.stringify(p.id)}.`,
    );
  }
  const exportName = p.name ?? camelFromKebab(p.id);
  const payload = p.payloadShape ?? "Record<string, unknown>";
  return (
    `import { task, logger } from "@trigger.dev/sdk";\n\n` +
    `/**\n` +
    ` * Task: ${p.id}\n` +
    ` * TODO: implement. Replace the payload type and body with this automation's logic.\n` +
    ` */\n` +
    `export const ${exportName} = task({\n` +
    `  id: "${p.id}",\n` +
    `  run: async (payload: ${payload}) => {\n` +
    `    logger.info("task ${p.id} started");\n` +
    `    // TODO: implement\n` +
    `    return {};\n` +
    `  },\n` +
    `});\n`
  );
}

// ---------------------------------------------------------------------------
// relay_add_task — sync modal_bridge.py ALLOWED_TASKS / TASK_REQUIRES_RECORD_ID
// ---------------------------------------------------------------------------

export interface SyncAllowedResult {
  content: string;
  allowedAdded: boolean;
  requiresAdded: boolean;
}

/** Add an id to a `set[str]` Python var. Handles empty `set()` and populated `{"a","b"}`. */
export function addToPySet(
  source: string,
  varName: string,
  id: string,
): { content: string; added: boolean } {
  const re = new RegExp(`(${escapeRegex(varName)}: set\\[str\\] = )(set\\(\\)|\\{[^}]*\\})`);
  const m = source.match(re);
  if (!m) {
    throw new Error(
      `relay_add_task: anchor "${varName}: set[str] = …" not found in modal_bridge.py — the file may have been hand-edited.`,
    );
  }
  const [full, prefix, literal] = m;
  let ids: string[];
  if (literal === "set()") {
    ids = [];
  } else {
    ids = [...literal.matchAll(/"([^"]+)"/g)].map((x) => x[1]);
  }
  if (ids.includes(id)) {
    return { content: source, added: false };
  }
  ids.push(id);
  ids.sort();
  const newLiteral = `{"${ids.join('", "')}"}`;
  const newFull = prefix + newLiteral;
  return { content: source.replace(full, newFull), added: true };
}

export function syncAllowedTasks(source: string, id: string, rowScoped: boolean): SyncAllowedResult {
  const allowed = addToPySet(source, "ALLOWED_TASKS", id);
  let requires = { content: allowed.content, added: false };
  if (rowScoped) {
    requires = addToPySet(allowed.content, "TASK_REQUIRES_RECORD_ID", id);
  }
  return { content: requires.content, allowedAdded: allowed.added, requiresAdded: requires.added };
}

// ---------------------------------------------------------------------------
// relay_locate_automation — parse scripts/locate-automation.mjs text output
// ---------------------------------------------------------------------------

export interface LocateResult {
  slug: string | null;
  specPath: string | null;
  specExists: boolean;
  planPath: string | null;
  planStatus: string | null;
  ledgerPath: string | null;
  ledgerExists: boolean;
  progress: string | null;
  listMode: boolean;
  raw: string;
}

/** Parse the human-readable output of `node scripts/locate-automation.mjs [slug]`. */
export function parseLocateOutput(text: string): LocateResult {
  const out = text.trim();
  if (out.startsWith("[locate-automation] no slug given") || out.startsWith("[locate-automation] no automations")) {
    return { slug: null, specPath: null, specExists: false, planPath: null, planStatus: null, ledgerPath: null, ledgerExists: false, progress: null, listMode: true, raw: text };
  }
  const m = (re: RegExp): RegExpMatchArray | null => out.match(re);
  const slugM = m(/^\[locate-automation\] slug:\s*(.+)$/m);
  const specM = m(/^spec:\s*(\S+)\s*\((exists|not found)\)/m);
  const planM = m(/^plan:\s*(\S+)\s*\(status:\s*(.+?)\)/m);
  const ledgerM = m(/^ledger:\s*(\S+)\s*\((exists|not found)\)/m);
  const progressM = m(/^progress:\s*(.+)$/m);
  return {
    slug: slugM ? slugM[1] : null,
    specPath: specM ? specM[1] : null,
    specExists: specM ? specM[2] === "exists" : false,
    planPath: planM ? planM[1] : null,
    planStatus: planM ? planM[2] : null,
    ledgerPath: ledgerM ? ledgerM[1] : null,
    ledgerExists: ledgerM ? ledgerM[2] === "exists" : false,
    progress: progressM ? progressM[1] : null,
    listMode: false,
    raw: text,
  };
}

// ---------------------------------------------------------------------------
// relay_smoke_test — parse a Trigger.dev run trigger + poll outcome
// ---------------------------------------------------------------------------

/** Parse the JSON body returned by POST /api/v1/tasks/{id}/trigger. */
export function parseRunIdFromTrigger(triggerBody: string): string {
  let data: unknown;
  try {
    data = JSON.parse(triggerBody);
  } catch {
    throw new Error(`relay_smoke_test: could not parse Trigger.dev trigger response as JSON: ${triggerBody.slice(0, 200)}`);
  }
  if (typeof data === "object" && data !== null) {
    const obj = data as Record<string, unknown>;
    if (typeof obj.id === "string") return obj.id;
    if (typeof obj.runId === "string") return obj.runId;
  }
  throw new Error(`relay_smoke_test: trigger response had no id/runId: ${triggerBody.slice(0, 200)}`);
}

// ---------------------------------------------------------------------------
// relay_setup — fill REPLACE-ME project-identity sentinels (pure transforms)
// ---------------------------------------------------------------------------

/** `project: ""` -> `project: "<projectRef>"` in trigger.config.ts. Idempotent. */
export function fillTriggerConfigProject(content: string, projectRef: string): string {
  if (!content.includes('project: ""')) {
    // already filled (or hand-edited) — leave alone
    return content;
  }
  return content.replace('project: ""', `project: "${projectRef}"`);
}

/** `App("REPLACE-ME-bridge"` -> `App("<appName>-bridge"` in modal_bridge.py. Idempotent. */
export function fillModalAppName(content: string, appName: string): string {
  return content.replace('App("REPLACE-ME-bridge"', `App("${appName}-bridge"`);
}

/** `BASE_ID = "REPLACE-ME"` -> `BASE_ID = "<baseId>"` in schema.ts. Idempotent. */
export function fillSchemaBaseId(content: string, baseId: string): string {
  return content.replace('export const BASE_ID = "REPLACE-ME";', `export const BASE_ID = "${baseId}";`);
}

/** `"name": "REPLACE-ME-via-system-setup"` -> `"name": "<name>"` in package.json. Idempotent. */
export function fillPackageJsonName(content: string, name: string): string {
  return content.replace('"name": "REPLACE-ME-via-system-setup"', `"name": "${name}"`);
}

// ---------------------------------------------------------------------------
// .env parsing / rendering (relay_smoke_test reads the prod secret without
// relying on process.env being populated in the Pi process)
// ---------------------------------------------------------------------------

/** Parse KEY=VALUE lines from a dotenv file. Ignores comments/blanks; strips quotes. */
export function parseDotenv(text: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq < 0) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (key) out[key] = val;
  }
  return out;
}

/** Render a dotenv body from an ordered vars map. */
export function dotenvContent(vars: Record<string, string>): string {
  return Object.entries(vars).map(([k, v]) => `${k}=${v}`).join("\n") + "\n";
}

// ---------------------------------------------------------------------------
// relay_lint — conformance checks for skill-produced specs/plans
//
// The relay_lint tool (in extensions/relay-tools.ts) reads docs/specs and
// docs/plans from the project cwd and runs these pure checks. The rules mirror
// prompts/relay-code.md and the relay-plan / relay-execute skills: every plan
// carries `status` frontmatter from a closed set and an `**Agents:** <name>`
// line per task naming only the six ported domain agents; every spec carries
// slug/name/trigger_type/created frontmatter.
// ---------------------------------------------------------------------------

export const PLAN_STATUS_VALUES = ["planned", "in_progress", "paused", "completed"] as const;
export const VALID_AGENT_NAMES = [
  "airtable-agent",
  "apify-agent",
  "gohighlevel-agent",
  "modal-agent",
  "trigger-dev-agent",
  "unipile-agent",
] as const;

export interface LintFinding {
  file: string;
  severity: "error" | "warning";
  message: string;
}

/** Extract the YAML frontmatter block (text between the first two `---` fences). */
function extractFrontmatter(content: string): string | null {
  const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return m ? m[1] : null;
}

/** Read a `key: value` line from frontmatter text (strips surrounding quotes). */
function frontmatterValue(fm: string, key: string): string | null {
  const m = fm.match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
  return m ? m[1].trim().replace(/^["']|["']$/g, "") : null;
}

/** Lint a spec file's content (`docs/specs/<slug>.md`). Returns findings (empty = conformant). */
export function lintSpec(p: { file: string; content: string }): LintFinding[] {
  const findings: LintFinding[] = [];
  const fm = extractFrontmatter(p.content);
  if (!fm) {
    findings.push({ file: p.file, severity: "error", message: "missing YAML frontmatter (`---` block)" });
    return findings;
  }
  for (const key of ["slug", "name", "trigger_type", "created"]) {
    if (!frontmatterValue(fm, key)) {
      findings.push({ file: p.file, severity: "error", message: `frontmatter missing \`${key}:\`` });
    }
  }
  return findings;
}

/** Lint a plan file's content (`docs/plans/YYYY-MM-DD-<slug>.md`). Returns findings (empty = conformant). */
export function lintPlan(p: { file: string; content: string }): LintFinding[] {
  const findings: LintFinding[] = [];
  const fm = extractFrontmatter(p.content);
  if (!fm) {
    findings.push({ file: p.file, severity: "error", message: "missing YAML frontmatter (`---` block)" });
    return findings;
  }
  const status = frontmatterValue(fm, "status");
  if (!status) {
    findings.push({ file: p.file, severity: "error", message: "frontmatter missing `status:`" });
  } else if (!(PLAN_STATUS_VALUES as readonly string[]).includes(status)) {
    findings.push({
      file: p.file,
      severity: "error",
      message: `invalid plan status \`${status}\`; must be one of ${PLAN_STATUS_VALUES.join(" | ")}`,
    });
  }

  // Every task must declare an **Agents:** line; each named agent must be one of the six.
  const agentLines = [...p.content.matchAll(/\*\*Agents:\*\*\s*(.+)/g)].map((m) => m[1].trim());
  if (agentLines.length === 0) {
    findings.push({ file: p.file, severity: "error", message: "no `**Agents:** <name>` line found in any task" });
  }
  const valid = VALID_AGENT_NAMES as readonly string[];
  for (const line of agentLines) {
    // Support sequential chains "agent-a → agent-b" (unicode arrow) or "agent-a -> agent-b".
    // Note: agent names themselves contain hyphens, so split on the arrow, not on `-`.
    const parts = line.split(/→|->/).map((s) => s.trim()).filter(Boolean);
    for (const part of parts) {
      const name = part.split(/\s+/)[0]; // first whitespace token; ignores trailing *(notes)*
      if (name && !valid.includes(name)) {
        findings.push({
          file: p.file,
          severity: "warning",
          message: `\`**Agents:**\` references unknown agent \`${name}\`; expected one of ${VALID_AGENT_NAMES.join(", ")}`,
        });
      }
    }
  }
  return findings;
}

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}