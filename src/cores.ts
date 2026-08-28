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
 * in a scaffolded relay-code project (which ships AGENTS.md, merged with the
 * constitution by relay-system-setup) without a manual
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
  /** First line of output — the unmissable progress signal (⚠️/📋 banner or greenfield). */
  progressBanner: string | null;
  listMode: boolean;
  raw: string;
}

/** Parse the human-readable output of `node scripts/locate-automation.mjs [slug]`. */
export function parseLocateOutput(text: string): LocateResult {
  const out = text.trim();
  if (out.startsWith("[locate-automation] no slug given") || out.startsWith("[locate-automation] no automations")) {
    return { slug: null, specPath: null, specExists: false, planPath: null, planStatus: null, ledgerPath: null, ledgerExists: false, progress: null, progressBanner: null, listMode: true, raw: text };
  }
  const m = (re: RegExp): RegExpMatchArray | null => out.match(re);
  const slugM = m(/^\[locate-automation\] slug:\s*(.+)$/m);
  const specM = m(/^spec:\s*(\S+)\s*\((exists|not found)\)/m);
  const planM = m(/^plan:\s*(\S+)\s*\(status:\s*(.+?)\)/m);
  const ledgerM = m(/^ledger:\s*(\S+)\s*\((exists|not found)\)/m);
  const progressM = m(/^progress:\s*(.+)$/m);
  // The banner is always the first line of output (see locate-automation.mjs).
  const bannerM = out.match(/^(?:⚠️ AUTOMATION IN PROGRESS — .+|📋 AUTOMATION PLANNED — .+|No in-progress automation — greenfield\.)/);
  return {
    slug: slugM ? slugM[1] : null,
    specPath: specM ? specM[1] : null,
    specExists: specM ? specM[2] === "exists" : false,
    planPath: planM ? planM[1] : null,
    planStatus: planM ? planM[2] : null,
    ledgerPath: ledgerM ? ledgerM[1] : null,
    ledgerExists: ledgerM ? ledgerM[2] === "exists" : false,
    progress: progressM ? progressM[1] : null,
    progressBanner: bannerM ? bannerM[0] : null,
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
// relay_smoke_test / relay_deploy_modal — the deploy-gate marker (.pi/relay-deploy-gate.json)
// ---------------------------------------------------------------------------

/** The `.pi` state dir shared by the dev worker, the deploy gate, and relay_lint. */
export const RELAY_STATE_DIR = ".pi";

/** Path of the deploy-gate marker, relative to the project root. */
export const DEPLOY_GATE_RELATIVE_PATH = `${RELAY_STATE_DIR}/relay-deploy-gate.json`;

/** The hard deploy order (relay_deploy_modal refuses before the smoke-test gate passes). */
export const DEPLOY_ORDER = "relay_deploy_trigger → relay_smoke_test → relay_deploy_modal";

/** Run statuses that end the smoke-test poll loop. */
export const TERMINAL_RUN_STATUSES = [
  "COMPLETED",
  "FAILED",
  "CANCELED",
  "CRASHED",
  "SYSTEM_FAILURE",
] as const;
export type TerminalRunStatus = (typeof TERMINAL_RUN_STATUSES)[number];

export interface DeployGate {
  task: string;
  runId: string;
  status: string; // always "COMPLETED" in practice
  ts: string;
}

/** True when a run status ends the smoke-test poll loop. */
export function isTerminalRunStatus(status: string): boolean {
  return TERMINAL_RUN_STATUSES.includes(status as TerminalRunStatus);
}

/** Build the marker a passed smoke test writes. */
export function buildDeployGate(task: string, runId: string, ts = new Date().toISOString()): DeployGate {
  return { task, runId, status: "COMPLETED", ts };
}

/**
 * Parse a gate marker's text. Returns null when the text isn't a valid gate
 * (so the glue can tell "corrupted" from "missing", which is a read failure).
 */
export function parseDeployGate(text: string): DeployGate | null {
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    return null;
  }
  if (typeof data !== "object" || data === null) return null;
  const o = data as Record<string, unknown>;
  if (typeof o.task !== "string" || typeof o.runId !== "string" || typeof o.status !== "string") return null;
  return { task: o.task, runId: o.runId, status: o.status, ts: typeof o.ts === "string" ? o.ts : "" };
}

/** True when a parsed gate says the smoke test passed. Lenient: case-insensitive, missing status = not deployable. */
export function isGateDeployable(gate: DeployGate | null): boolean {
  return gate !== null && String(gate.status ?? "").toUpperCase() === "COMPLETED";
}

// ---------------------------------------------------------------------------
// relay_dev_worker — the dev-worker pid marker + readiness-poll state machine
// ---------------------------------------------------------------------------

/** Filenames of the dev-worker marker and log, relative to RELAY_STATE_DIR. */
export const DEV_WORKER_PID_FILENAME = "relay-dev-worker.pid";
export const DEV_WORKER_LOG_FILENAME = "relay-dev-worker.log";

/** Readiness markers for `npm run trigger:dev` stdout. */
export const DEV_WORKER_READY_RE = /registered|listening|worker.*ready|started\s+worker| Watching /i;

/** Poll cadence and deadline for the readiness marker. */
export const DEV_WORKER_POLL_INTERVAL_MS = 2000;
export const DEV_WORKER_READY_DEADLINE_MS = 90000;

/** A single readiness-poll round's verdict. */
export type DevWorkerPollVerdict =
  | { state: "ready" }    // readiness marker seen — worker is up
  | { state: "exited" }   // process died before ready
  | { state: "timeout" }  // deadline passed, still alive, no marker
  | { state: "waiting" }; // keep polling

/** Parse the pid marker file's text. Null unless the whole text is a positive integer. */
export function parsePidMarker(text: string): number | null {
  const trimmed = text.trim();
  const n = parseInt(trimmed, 10);
  return Number.isInteger(n) && n > 0 && String(n) === trimmed ? n : null;
}

/** Verdict for one readiness-poll round: ready beats exited beats timeout. */
export function devWorkerPollVerdict(opts: {
  log: string;
  alive: boolean;
  deadlineExceeded: boolean;
}): DevWorkerPollVerdict {
  if (DEV_WORKER_READY_RE.test(opts.log)) return { state: "ready" };
  if (!opts.alive) return { state: "exited" };
  if (opts.deadlineExceeded) return { state: "timeout" };
  return { state: "waiting" };
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

// ---------------------------------------------------------------------------
// relay_automation_info (+ the deploy-tool identity echo) — automation identity
//
// Identity = the directory: one Trigger.dev project (`trigger.config.ts`
// `project:` field) + one Modal app (`modal_bridge.py` `App("…")`) + the
// automation name (`package.json` "name"). All inputs are file CONTENT
// (strings), never paths — the extension glue reads the files and passes null
// for anything missing. The prod secret is reduced to presence + prefix flags;
// the value never enters a ProjectIdentity.
// Known limits (documented, not fixed): a non-literal `project:` value
// (`project: process.env.X`) or an `App(` inside a Python comment parses as
// "field not found" — the report says so rather than guessing.
// ---------------------------------------------------------------------------

/** A Trigger.dev project ref, e.g. proj_abc123 — the same shape the
 * relay-system-setup skill validates against (^proj_[a-z0-9]+$). */
export const PROJECT_REF_RE = /^proj_[a-z0-9]+$/;

/** Sentinels shipped by the relay-system-setup templates. A sentinel means
 * "not configured yet", never "configured to this value". */
export const SENTINEL_AUTOMATION_NAME = "REPLACE-ME-via-system-setup";
export const SENTINEL_MODAL_APP = "REPLACE-ME-bridge";
export const SENTINEL_BASE_ID = "REPLACE-ME";

/** Extract the string literals from a Python `varName: set[str] = {…}` (or
 * `set()`). Returns null when the declaration is absent. */
export function parsePyStringSet(source: string, varName: string): string[] | null {
  const m = source.match(
    new RegExp(`${escapeRegex(varName)}\\s*:\\s*set\\[str\\]\\s*=\\s*(set\\(\\)|\\{[^}]*\\})`),
  );
  if (!m) return null;
  return m[1] === "set()" ? [] : [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]);
}

/** Everything optional — null/undefined means "file missing or unreadable";
 * the glue decides which files to read. */
export interface ProjectIdentityInput {
  dirName?: string;
  triggerConfig?: string | null;
  packageJson?: string | null;
  modalBridge?: string | null;
  schemaTs?: string | null;
  envProduction?: string | null;
  triggerTaskIds?: string[];
}

export interface ProjectIdentity {
  dirName: string;
  triggerConfigPresent: boolean;
  packageJsonPresent: boolean;
  modalBridgePresent: boolean;
  /** proj_… ref, or null when the field is absent/empty/invalid. */
  projectRef: string | null;
  /** Raw `project:` literal — the "" sentinel, an invalid value, or null. */
  projectRefRaw: string | null;
  projectRefFieldPresent: boolean;
  automationName: string | null;
  automationNameIsSentinel: boolean;
  modalAppName: string | null;
  modalAppNameIsSentinel: boolean;
  baseId: string | null;
  baseIdIsSentinel: boolean;
  /** modal_bridge.py ALLOWED_TASKS (empty when the bridge is missing). */
  tasks: string[];
  /** modal_bridge.py TASK_REQUIRES_RECORD_ID. */
  rowScopedTasks: string[];
  /** Task ids scaffolded under src/trigger/ (glue-provided). */
  triggerTaskIds: string[];
  /** Scaffolded under src/trigger/ but missing from ALLOWED_TASKS. */
  tasksMissingFromBridge: string[];
  envProdPresent: boolean;
  envProdHasTriggerSecret: boolean;
  /** Prefix only — "tr_prod_" | "tr_dev_" | "other"; never the value. */
  envProdTriggerSecretPrefix: "tr_prod_" | "tr_dev_" | "other" | null;
  /** project ref + automation name + Modal app all set, no sentinels. */
  identityComplete: boolean;
}

/** Parse an automation directory's identity from file contents. Missing or
 * malformed input degrades to null fields — never throws. */
export function parseProjectIdentity(input: ProjectIdentityInput): ProjectIdentity {
  const triggerConfig = input.triggerConfig ?? null;
  const projectField = triggerConfig
    ? triggerConfig.match(/^\s*project:\s*(["'])([^"']*)\1/m)
    : null;
  const projectRefRaw = projectField ? projectField[2] : null;
  const projectRef =
    projectRefRaw && PROJECT_REF_RE.test(projectRefRaw) ? projectRefRaw : null;

  let automationName: string | null = null;
  if (input.packageJson != null) {
    try {
      const name = (JSON.parse(input.packageJson) as { name?: unknown }).name;
      automationName = typeof name === "string" && name ? name : null;
    } catch {
      automationName = input.packageJson.match(/"name"\s*:\s*"([^"]*)"/)?.[1] ?? null;
    }
  }

  const modalBridge = input.modalBridge ?? null;
  const modalAppName = modalBridge?.match(/\bApp\(\s*(["'])([^"']+)\1/)?.[2] ?? null;
  const tasks = modalBridge
    ? (parsePyStringSet(modalBridge, "ALLOWED_TASKS") ?? [])
    : [];
  const rowScopedTasks = modalBridge
    ? (parsePyStringSet(modalBridge, "TASK_REQUIRES_RECORD_ID") ?? [])
    : [];

  const baseId = input.schemaTs?.match(/^export const BASE_ID\s*=\s*["']([^"']*)["']/m)?.[1] ?? null;

  const envProd = input.envProduction != null ? parseDotenv(input.envProduction) : null;
  const secret = envProd?.TRIGGER_SECRET_KEY;
  const envProdTriggerSecretPrefix = secret
    ? secret.startsWith("tr_prod_")
      ? "tr_prod_"
      : secret.startsWith("tr_dev_")
        ? "tr_dev_"
        : "other"
    : null;

  const triggerTaskIds = input.triggerTaskIds ?? [];

  return {
    dirName: input.dirName ?? "",
    triggerConfigPresent: triggerConfig !== null,
    packageJsonPresent: input.packageJson != null,
    modalBridgePresent: modalBridge !== null,
    projectRef,
    projectRefRaw,
    projectRefFieldPresent: projectField !== null,
    automationName,
    automationNameIsSentinel: automationName === SENTINEL_AUTOMATION_NAME,
    modalAppName,
    modalAppNameIsSentinel: modalAppName === SENTINEL_MODAL_APP,
    baseId,
    baseIdIsSentinel: baseId === SENTINEL_BASE_ID,
    tasks,
    rowScopedTasks,
    triggerTaskIds,
    tasksMissingFromBridge: triggerTaskIds.filter((id) => !tasks.includes(id)),
    envProdPresent: envProd !== null,
    envProdHasTriggerSecret: Boolean(secret),
    envProdTriggerSecretPrefix,
    identityComplete:
      projectRef !== null &&
      automationName !== null &&
      automationName !== SENTINEL_AUTOMATION_NAME &&
      modalAppName !== null &&
      modalAppName !== SENTINEL_MODAL_APP,
  };
}

/** One human string per identity blocker; each names the step that fixes it. */
export function identityBlockers(identity: ProjectIdentity): string[] {
  const blockers: string[] = [];
  if (identity.projectRef === null) {
    blockers.push(
      identity.projectRefFieldPresent
        ? `Trigger.dev project id is not a proj_… ref (trigger.config.ts \`project: "${identity.projectRefRaw ?? ""}"\`) → /skill:relay-system-setup Part A Phase 2`
        : "Trigger.dev project id not found (no literal `project: \"…\"` in trigger.config.ts) → /skill:relay-system-setup Part A Phase 2",
    );
  }
  if (identity.automationName === null || identity.automationNameIsSentinel) {
    blockers.push(
      'automation name not set (package.json "name" missing or the sentinel) → /skill:relay-system-setup Part B',
    );
  }
  if (identity.modalAppName === null || identity.modalAppNameIsSentinel) {
    blockers.push(
      'Modal app name not set (modal_bridge.py App("…") missing or the sentinel) → /skill:relay-system-setup Part B',
    );
  }
  return blockers;
}

/** Full identity report, content-in → text-out. */
export function formatIdentityReport(identity: ProjectIdentity, opts?: { dir?: string }): string {
  if (
    !identity.triggerConfigPresent &&
    !identity.packageJsonPresent &&
    !identity.modalBridgePresent
  ) {
    return opts?.dir
      ? `No relay-code automation found in ${opts.dir} — trigger.config.ts, package.json, and modal_bridge.py are all missing.`
      : "No relay-code automation found in this directory — trigger.config.ts, package.json, and modal_bridge.py are all missing.";
  }

  const lines: string[] = [];
  lines.push(`Automation identity — ${identity.dirName}`);
  if (opts?.dir) lines.push(`directory: ${opts.dir}`);

  lines.push(
    identity.projectRef !== null
      ? `Trigger.dev project: ${identity.projectRef}`
      : identity.projectRefFieldPresent && (identity.projectRefRaw ?? "") === ""
        ? 'Trigger.dev project: (not set — trigger.config.ts `project: ""`)'
        : identity.projectRefFieldPresent
          ? `Trigger.dev project: (invalid: "${identity.projectRefRaw}")`
          : 'Trigger.dev project: (not found — no literal `project: "…"`)',
  );
  lines.push(
    identity.automationName === null
      ? "automation name: (not found in package.json)"
      : identity.automationNameIsSentinel
        ? `automation name: (sentinel — ${identity.automationName})`
        : `automation name: ${identity.automationName}`,
  );
  lines.push(
    !identity.modalBridgePresent
      ? "Modal app: (no modal_bridge.py)"
      : identity.modalAppName === null
        ? 'Modal app: (not found — no App("…") literal)'
        : identity.modalAppNameIsSentinel
          ? `Modal app: (sentinel — ${identity.modalAppName})`
          : `Modal app: ${identity.modalAppName}`,
  );
  lines.push(
    identity.baseId === null
      ? "Airtable BASE_ID: (not found in src/schema.ts)"
      : identity.baseIdIsSentinel
        ? `Airtable BASE_ID: (sentinel — ${identity.baseId})`
        : `Airtable BASE_ID: ${identity.baseId}`,
  );

  const bridgeMissing = !identity.modalBridgePresent;
  const idsText = identity.triggerTaskIds.length ? identity.triggerTaskIds.join(", ") : "(none scaffolded)";
  lines.push(
    `ALLOWED_TASKS: ${bridgeMissing ? "(no modal_bridge.py)" : identity.tasks.length ? identity.tasks.join(", ") : "(none)"}`,
  );
  lines.push(
    `row-scoped tasks: ${bridgeMissing ? "(no modal_bridge.py)" : identity.rowScopedTasks.length ? identity.rowScopedTasks.join(", ") : "(none)"}`,
  );
  if (bridgeMissing) {
    lines.push(`src/trigger tasks: ${idsText}`);
  } else if (identity.tasksMissingFromBridge.length > 0) {
    lines.push(
      `src/trigger tasks: ${idsText} — NOT in ALLOWED_TASKS: ${identity.tasksMissingFromBridge.join(", ")}`,
    );
  } else if (identity.triggerTaskIds.length === 0) {
    lines.push("src/trigger tasks: (none scaffolded)");
  } else {
    lines.push(`src/trigger tasks: ${identity.triggerTaskIds.join(", ")} — all registered`);
  }

  lines.push(
    !identity.envProdPresent
      ? ".env.production: not found"
      : !identity.envProdHasTriggerSecret
        ? ".env.production: TRIGGER_SECRET_KEY not set"
        : `.env.production: TRIGGER_SECRET_KEY present (${identity.envProdTriggerSecretPrefix}…)`,
  );

  const blockers = identityBlockers(identity);
  if (blockers.length === 0) {
    lines.push("ready: yes — identity complete");
  } else {
    lines.push(`ready: no — ${blockers.length} blocker(s):`);
    for (const b of blockers) lines.push(`  - ${b}`);
    if (!identity.envProdHasTriggerSecret) {
      lines.push("  - (info) .env.production has no TRIGGER_SECRET_KEY → /skill:env-storage (Load)");
    }
  }
  return lines.join("\n");
}

/** Single-line identity echo for the deploy tools' output. */
export function formatIdentityEcho(identity: ProjectIdentity): string {
  const parts: string[] = [];
  if (identity.projectRef !== null) {
    parts.push(`project ${identity.projectRef}`);
  } else if (identity.projectRefFieldPresent && (identity.projectRefRaw ?? "") === "") {
    parts.push('⚠ Trigger.dev project id NOT SET (trigger.config.ts `project: ""`)');
  } else if (identity.projectRefFieldPresent) {
    parts.push(`⚠ Trigger.dev project id invalid (trigger.config.ts \`project: "${identity.projectRefRaw}"\`)`);
  } else {
    parts.push('⚠ Trigger.dev project id not found (no literal `project: "…"` in trigger.config.ts)');
  }
  parts.push(
    identity.automationName === null
      ? "name (not found)"
      : identity.automationNameIsSentinel
        ? "name (sentinel)"
        : identity.automationName,
  );
  parts.push(
    !identity.modalBridgePresent
      ? "modal app (no modal_bridge.py)"
      : identity.modalAppName === null
        ? "modal app (not found)"
        : identity.modalAppNameIsSentinel
          ? "modal app (sentinel)"
          : `modal app ${identity.modalAppName}`,
  );
  return `[identity] ${parts.join(" · ")}`;
}

// ---------------------------------------------------------------------------
// relay_automation_info fleet scan — one row per automation directory
// ---------------------------------------------------------------------------

/** A directory qualifying as an automation, with its parsed identity. */
export interface FleetRow {
  dir: string;
  isCurrent: boolean;
  identity: ProjectIdentity;
}

const FLEET_CELL_CAP = 28;
const FLEET_TASKS_CAP = 60;

function fleetCell(value: string, cap = FLEET_CELL_CAP): string {
  return value.length > cap ? `${value.slice(0, cap - 1)}…` : value;
}

/** Aligned one-level fleet table. Rows are sorted by directory name; the scan
 * root is echoed on the first line. Paths should arrive forward-slashed. */
export function formatFleetTable(opts: { scanRoot: string; rows: FleetRow[] }): string {
  const header = `Fleet scan — ${opts.rows.length} automation(s) under ${opts.scanRoot}`;
  const sorted = [...opts.rows].sort((a, b) => a.dir.localeCompare(b.dir));
  const cells = sorted.map((r) => {
    const id = r.identity;
    const appCell = !id.modalBridgePresent
      ? "(no modal_bridge.py)"
      : id.modalAppName === null
        ? "(not found)"
        : id.modalAppNameIsSentinel
          ? "(sentinel)"
          : id.modalAppName;
    const nameCell =
      id.automationName === null
        ? "(not found)"
        : id.automationNameIsSentinel
          ? "(sentinel)"
          : id.automationName;
    const tasksCell = !id.modalBridgePresent
      ? "(no modal_bridge.py)"
      : id.tasks.length
        ? id.tasks.join(", ")
        : "(none)";
    return [
      fleetCell(r.isCurrent ? `${r.dir} (current)` : r.dir),
      fleetCell(id.projectRef ?? "(not set)"),
      fleetCell(appCell),
      fleetCell(nameCell),
      fleetCell(tasksCell, FLEET_TASKS_CAP),
    ];
  });
  const headerRow = ["directory", "project ref", "modal app", "name", "tasks"];
  const widths = [0, 1, 2, 3].map((i) =>
    Math.min(
      FLEET_CELL_CAP,
      Math.max(...[headerRow, ...cells].map((row) => Math.min(row[i].length, FLEET_CELL_CAP))),
    ),
  );
  const render = (row: string[]) =>
    row.map((c, i) => (i < row.length - 1 ? c.padEnd(widths[i]) : c)).join("  ");
  return [header, render(headerRow), ...cells.map(render)].join("\n");
}

// ---------------------------------------------------------------------------
// relay_lint — conformance checks for skill-produced specs/plans
//
// The relay_lint tool (in extensions/relay-tools.ts) reads docs/specs and
// docs/plans from the project cwd and runs these pure checks. The rules mirror
// the constitution (prompts/AGENTS.md) and
// the relay-plan / relay-execute skills: every plan
// carries `status` frontmatter from a closed set and an `**Agents:** <name>`
// line per task naming only the six ported domain agents; every spec carries
// slug/name/trigger_type/created frontmatter.
//
// The contract has two homes by design: enforced here (PLAN_STATUS_VALUES,
// VALID_AGENT_NAMES, and the spec field set in lintSpec below) and restated as
// prompt prose in prompts/AGENTS.md (Lifecycle + Sub-agents), the research
// skill's spec template (step 7), the plan skill (step 4 roster + template +
// step 10), the execute skill's step 10, and the update-or-fix skill's step 3.
// Prose can't import the constants, so it must stay consistent by hand — when
// you change a value below, update every prose home in the same commit.
// ---------------------------------------------------------------------------

export const PLAN_STATUS_VALUES = ["planned", "in_progress", "paused", "completed"] as const;
export const VALID_AGENT_NAMES = [
  "airtable-agent",
  "apify-agent",
  "composio-agent",
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

// ---------------------------------------------------------------------------
// constitution delivery (main agent only)
// ---------------------------------------------------------------------------

/**
 * True when this pi process is a pi-subagents child (the runner sets
 * PI_SUBAGENT_CHILD=1 in the child env). Sub-agents stay plan/progress-driven —
 * they never receive the constitution; only the main agent does.
 */
export function isSubagentChildEnv(env: NodeJS.ProcessEnv): boolean {
  return env.PI_SUBAGENT_CHILD === "1";
}

/**
 * Append the constitution to a system prompt as its own final section.
 * Idempotent: a prompt already carrying the same constitution text is returned
 * unchanged, so chained before_agent_start handlers (or a retried run) can't
 * stack duplicates.
 */
export function appendConstitution(systemPrompt: string, constitution: string): string {
  if (!constitution) return systemPrompt;
  if (systemPrompt.includes(constitution)) return systemPrompt;
  return systemPrompt + (systemPrompt.endsWith("\n") ? "\n" : "\n\n") + constitution;
}