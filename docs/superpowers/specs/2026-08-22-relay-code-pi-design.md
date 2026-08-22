# relay-code-pi — design

**Status:** implemented (v0.1.0) · **Date:** 2026-08-22

A Pi coding-agent package that lets a non-expert "automater" build and deploy
production-ready Modal.com + Trigger.dev automations end-to-end, by mirroring
the `relay-code` framework's three-phase lifecycle and turning its conventions
from prose into **enforced, deterministic Pi tools**.

---

## 1. Problem

The `relay-code` framework runs today as a Claude Code project. Its conventions
— the lazy-env pattern, the schema contract, the `ALLOWED_TASKS` sync, the
deploy order, secret handling — live as **prose in `CLAUDE.md` and skill files**,
enforced only by the model remembering to read them. Advisory conventions are
unreliable: a model can forget a memoised-getter pattern, forget to sync
`ALLOWED_TASKS` when adding a task, or leak a secret. Non-expert automaters need
the agent to build and deploy *safely* without depending on the model's memory.

## 2. Goals & non-goals

**Goals**
- Maximize determinism: mechanical/convention behaviors become Pi **tools**
  (deterministic, schema-validated) rather than **skills** (non-deterministic
  instructions the model interprets).
- Faithful mirror of the framework — same lifecycle, same artifact locations;
  no reinvention.
- End-to-end build + deploy for a non-expert, with hard safety gates.
- No MCP anywhere — every tool wraps a CLI or the framework's own mechanism.

**Non-goals**
- Reinventing the lifecycle or artifact store (`docs/specs/`, `docs/plans/`,
  `.claude/automation/<plan>/progress.md`, `src/trigger/`, `src/config.ts`,
  `src/schema.ts`, `modal_bridge.py`, `scripts/` all stay where the framework
  puts them).
- Airtable-specific tools — the `airtable-agent` owns `npm run migrate`; the
  schema-field tool only adds constants, never migrates.
- v1 covers Trigger.dev + Modal core only; the six integration sub-agents exist
  and fan out per-automation.

## 3. Architecture (three layers, descending determinism)

1. **Deterministic tools** (`extensions/relay-tools.ts`, via `pi.registerTool`) —
   the mechanical backbone; the model calls these, they return structured
   results and **enforce** conventions.
2. **Instructional skills** (`skills/`) — the judgment: brainstorm/plan/execute/
   update orchestration that *calls* the tools, plus vendored integration API
   references (progressive disclosure).
3. **Constitution** (`prompts/relay-code.md` + a `before_agent_start` handler) —
   always-on system-prompt injection of the framework's rules every turn.
4. **Interaction substrate** — 9 extensions (bundled deps) + 6 sub-agents
   (`agents/`) fanned out via `pi-subagents`.

Data flow is unchanged from relay-code. The blueprint's three-tier framing is
adopted and **extended** by converting its advisory convention-skills
(`lazy-env-pattern`, `airtable-contract`, `modal-bridge-ops`) into enforced
`relay_add_*` tools — the motivated supersession the blueprint left open.

## 4. Components

### 4.1 Deterministic tools — 11 total

Each tool sets `promptSnippet` + `promptGuidelines` so the model learns when to
call it. Each `execute` body is **thin glue** around an exported pure function
in `src/cores.ts` (side-effect-free, unit-tested with Vitest fixtures, no Pi
runtime).

**Action tools (wrap CLIs / existing scripts via `pi.exec`):**

| Tool | Wraps | Notes |
|---|---|---|
| `relay_locate_automation` | `node scripts/locate-automation.mjs` | Resolves spec/plan/ledger/progress; lists all when no slug. |
| `relay_test` | `npm test` (vitest) | Pass/fail + failure summary. |
| `relay_dev_worker` | `npm run trigger:dev` | `up` = pre-flight → launch durable via pi-background-tasks → poll until ready → snapshot; `status`; `down`. |
| `relay_deploy_trigger` | `npm run trigger:deploy` | Deploys against `.env.production`; returns task ids. |
| `relay_smoke_test` | trigger one task + poll run | The deploy-order gate; writes the `deploy-gate` marker on `COMPLETED`. |
| `relay_deploy_modal` | `modal deploy modal_bridge.py` | **Refuses (throws) until the smoke-test gate marker exists.** |
| `relay_setup` | sentinel fills | Writes `trigger.config.ts` `project`, `modal_bridge.py` `App(...)`, `schema.ts` `BASE_ID`, `package.json` name, `.env`/`.env.production`, `AGENTS.md` env table. Interactive CLI auth stays persona-guided. |

**Convention-enforcing tools (each `execute` in `withFileMutationQueue`; throw on a missing anchor):**

| Tool | Enforces | Effect |
|---|---|---|
| `relay_add_task` | task shape + `ALLOWED_TASKS` sync | Scaffolds `src/trigger/<kebab>.ts` in the canonical `task({ id, run })` shape; appends the id to `modal_bridge.py` `ALLOWED_TASKS` (+ `TASK_REQUIRES_RECORD_ID` when row-scoped). **Closes the manual-sync gap.** |
| `relay_add_env_var` | lazy-env pattern | required → `memo(()=>required("X"))` + `config` getter; optional → inline `process.env.X ?? "default"` getter; optional auth-header fn; + `AGENTS.md` env-table row. |
| `relay_add_schema_field` | schema contract (constants only — no migration) | Edits the namespace object keeping `as const`. |

**Conformance tool:**

| Tool | Enforces | Effect |
|---|---|---|
| `relay_lint` | spec/plan conformance | Scans `docs/specs/*.md` + `docs/plans/*.md`; checks spec frontmatter (`slug`/`name`/`trigger_type`/`created`), plan `status` ∈ {planned, in_progress, paused, completed}, and that every `**Agents:**` line names only the six ported agents. Returns findings as text so the agent self-checks, fixes, and re-calls until clean; writes `.pi/relay-lint-report.md`. |

> **Tool count.** The plan originally locked 10 tools. The conformance lint was
> first delivered as a `/relay-lint` command to respect that cap; the user then
> preferred the agent self-check automatically, so `relay_lint` became the 11th
> tool. The closed set is now **11** (7 action + 3 convention-enforcing + 1
> conformance). Commands do not count toward the tool count.

### 4.2 Instructional skills — `skills/`
- **Ported (judgment shells that call tools):** `relay-brainstorm`,
  `relay-plan`, `relay-execute`, `relay-update` ← from the four `system-*`
  lifecycle skills; they shrink to orchestration + design judgment and instruct
  the agent to call `relay_lint` before handoff/finish.
- **Vendored as-is** (frontmatter added where missing): `airtable-web-api`,
  `gohighlevel-api`, `unipile-api`, `google-drive-api`, `google-sheets-api`,
  `modal-docs`, `trigger-dev-api` + its sub-skills, `pi-api`, `context7-cli`.
- **New:** `relay-arch` (thin layout/one-responsibility quick-reference).
- **Folded into tools, NOT shipped as skills:** the blueprint's
  `lazy-env-pattern.md`, `airtable-contract.md`, `modal-bridge-ops.md` → become
  the `relay_add_*` tools' enforcement logic + `promptGuidelines`. This is the
  determinism win.

### 4.3 Constitution — `prompts/relay-code.md` + `before_agent_start`
Always-on injection: env table, lazy-env rule, schema-contract steps, deploy
order, security rules (bridge reads `.env.production` not `.env`; no
`--project-ref`; auth headers inside functions; ack 200 / never block a webhook
sender; never hardcode ids/tokens outside `src/lib`/`config.ts`/`schema.ts`;
never echo secrets — confirm prefix only; `recordId` must start `rec`), the
three-phase lifecycle + `**Agents:** <name>` plan convention, plan `status`
values, and the `relay_lint` self-check.

### 4.4 Sub-agents — `agents/` (via `pi-subagents`)
The six gated agents (`airtable`, `apify`, `gohighlevel`, `modal`,
`trigger-dev`, `unipile`), each keeping its "Context — where to look" preamble +
specialized body + preloaded skill. These six names are the closed set
`relay_lint` validates `**Agents:**` lines against.

### 4.5 Interaction extensions — 9, as install-time dependencies
Declared in `dependencies` (NOT `bundledDependencies`) and referenced through
`node_modules/<pkg>/<path>` entries in the `pi` manifest (Pi does not
auto-discover a dep's resources — you must point at them). Core pi packages
(`@earendil-works/*`, `typebox`) stay in `peerDependencies: "*"` and are never
installed by this package.

**Why not bundled (verified 2026-08-22).** The Pi docs prescribe
`dependencies` + `bundledDependencies`, but that ships the 9 extensions *and
their full transitive trees* (193 packages) in the tarball — 57 MB / 241 MB
unpacked, near npm's size limits. Empirical test proved bundling is
unnecessary: with `bundledDependencies` removed and only `dependencies`
kept, packing gives a 3 MB tarball; extracting it into a fresh dir and
running `npm install` (exactly what Pi does at install time) populates all 9
deps nested in the package's own `node_modules/<pkg>/`, and `pi -e .` from
that layout returns `SMOKE_OK` (all 11 tools + 9 extensions + skills +
constitution load). So Pi's install-time `npm install` is sufficient; the
deps are fetched after publish, not shipped. Trade-off: consumers get the
`^`-range latest-compatible rather than the exact versions we tested —
acceptable for a 0.1.0 first publish; pin to exact ranges if reproducibility
matters.

1. `pi-subagents` — gated fan-out to the 6 sub-agents.
2. `@juicesharp/rpiv-ask-user-question` — typed-option brainstorm menus.
3. `@juicesharp/rpiv-todo` — live todo overlay mirroring the progress ledger.
4. `@plannotator/pi-extension` — interactive plan review/approve/deny UI. This
   package adds a short **`/plan`** command (a `pi.registerCommand`, not a tool)
   that toggles Plannotator plan mode via its documented event bus
   (`PLANNOTATOR_REQUEST_CHANNEL`, action `plan-mode`). Pi has no
   `?name=plan` runtime-config syntax on package sources (verified against the
   live pi.dev docs, `pi install --help`, and an empirical `pi -e npm:…?name=plan`
   that npm rejects as ENOENT), so the `/plan` entry point is delivered as a
   thin command instead. `/plan` is distinct from the `relay-plan` *skill*.
5. `pi-web-access` — doc lookup beyond context7.
6. `pi-background-tasks` — durable `relay_dev_worker up`.
7. `@llblab/pi-telegram` — Telegram runtime adapter (mobile operator surface).
8. `pi-secret-mask` — masks secrets before the provider request; substitutes
   back for bash/write/edit. **Enforces "never echo secrets" as a hook.**
9. `@narumitw/pi-goal` — autonomous `/goal` completion (requires Pi ≥ 0.80.6 for
   `agent_settled`).

### 4.6 Package manifest — `package.json`
`keywords: ["pi-package"]`; `pi` manifest lists `extensions`, `skills`,
`prompts`, `subagents`; `peerDependencies` for the core pi packages (never
installed); the 9 extensions in `dependencies` only — not bundled (see §4.5);
they are fetched by Pi's install-time `npm install`. Install project-local:
`pi install -l ./relay-code-pi` → target project's `.pi/settings.json`.

## 5. Data flow & artifact locations

Unchanged from relay-code — the package writes where the framework expects:
specs → `docs/specs/<slug>.md`; plans → `docs/plans/YYYY-MM-DD-<slug>.md`;
ledger → `.claude/automation/<plan>/progress.md` (a framework artifact path,
deliberately **not** renamed despite the `AGENTS.md` convention); tasks →
`src/trigger/<kebab>.ts`; config/schema → `src/config.ts` / `src/schema.ts`;
bridge → `modal_bridge.py`; lint report → `.pi/relay-lint-report.md`;
deploy-gate marker → `.pi/relay-deploy-gate.json`.

## 6. Error handling & safety gates

- **Tools throw** (`isError: true`) with actionable messages.
- **File-mutating tools:** whole read-modify-write inside
  `withFileMutationQueue`; throw a precise "anchor not found, file hand-edited"
  if a sentinel/anchor is missing; idempotent.
- **Mechanical deploy-order gate:** `relay_deploy_modal` refuses until
  `relay_smoke_test` writes the `deploy-gate` marker.
- **Bounded waits:** `relay_dev_worker up` / `relay_smoke_test` poll with
  timeout → return failure + log tail, never hang.
- **No-leak invariant:** `pi-secret-mask` hook enforces it regardless of model
  behavior.
- **Sub-agent failure halts the task** (writes to ledger, does not proceed to
  deploy); `@narumitw/pi-goal` treats it as blocked/wait.
- **Cancellation:** all tools thread `signal`; `relay_dev_worker down` tears
  down; pi-background-tasks durability survives session crash.

## 7. Testing & verification

- **Pure-function unit tests (Vitest, no Pi runtime):** 60/60 — fixture-based
  assertions for each tool's pure core: exact lazy-env/schema insertion, anchor
  detection, idempotency, `as const` preserved, `ALLOWED_TASKS` sync,
  locate/smoke parse logic, and the `relay_lint` conformance rules.
- **Package-load smoke gate:** `pi -e .` → `SMOKE_OK` exit 0 — all 11 tools +
  9 extensions + bundled skills/prompts + constitution load; agent turn
  completes.
- **Host install gate:** `pi install -l` into a throwaway copy of a relay-code
  project → `package.json` unchanged (only `.pi/settings.json` added), host
  `npm test` still green, and `pi -p …` → `SMOKE_OK` (full installed stack
  loads in the host).
- **Plain-project regression:** with the package installed but not invoked, the
  host's `npm test`, `npm run trigger:dev`, `npm run migrate` are untouched
  (account-gated scripts fold into the e2e runbook).
- **e2e runbook** (`docs/e2e-runbook.md`): account-gated, exercises the real
  Trigger.dev + Modal + Airtable paths — scaffold → install → auth → lifecycle
  → deploy-order gate (refuse-before-smoke / succeed-after) → live bridge
  trigger → secret-mask spot-check.

## 8. File layout

```
relay-code-pi/
├── package.json              # pi-package manifest + peerDeps + 9 bundled deps
├── extensions/
│   └── relay-tools.ts        # 11 registerTool + /plan registerCommand + before_agent_start
├── src/
│   └── cores.ts              # pure cores for all 11 tools (unit-tested)
├── skills/                   # 4 ported lifecycle + relay-arch + vendored refs
├── prompts/
│   └── relay-code.md         # constitution prompt template
├── agents/                   # 6 gated sub-agents
├── tests/                    # cores.test.ts + fixtures
└── docs/
    ├── e2e-runbook.md
    └── superpowers/specs/2026-08-22-relay-code-pi-design.md   # this doc
```

## 9. Context-file resolution

The `install-relay-code` scaffolder still ships `CLAUDE.md` + `.claude/`, while
a fresh Pi-native project uses `AGENTS.md`. Pi loads `AGENTS.md` **or**
`CLAUDE.md` as the project context file (with `AGENTS.override.md` taking
precedence), and this package resolves the same way: the pure core
`pickContextFile(has)` returns the first present of `AGENTS.override.md` →
`AGENTS.md` → `CLAUDE.md`, defaulting to `AGENTS.md` for a fresh project.
`relay_add_env_var` writes its env-table row into whichever file that resolves
to — so a scaffolded `CLAUDE.md` project works as-is, with **no manual
rename/symlink needed**. The package's own references (docs, prompts, tool
guidelines) say "AGENTS.md" per the convention, but the *runtime* never
diverges into a second file. The `.claude/automation/<plan>/` ledger path is a
separate framework artifact and stays as-is.

## 10. Out of scope / future

- Additional integration sub-agents beyond the six ported ones.
- A build/compile step (none today — Pi loads TS via jiti; the standalone e2e
  is driven through `pi`).