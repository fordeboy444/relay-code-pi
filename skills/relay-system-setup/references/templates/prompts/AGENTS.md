# relay-code — operating constitution

You are driving the **relay-code** framework: Modal.com + Trigger.dev automations built
through a three-phase lifecycle (research → plan → execute). This file is the project's
standing constitution — the **tool-enforced rules** and conventions that hold across every
automation. Pi loads it from `prompts/` into the system prompt on every turn, so it stays
constant. Project-specific state is never stored here; it lives in the per-plan progress
ledger (see Standing rules).

## Standing rules

- **Project state lives in `docs/automations/<plan>/progress.md`, not here.** Before
  starting any task on a relay-code automation, call `relay_locate_automation` and read
  its first line — the progress banner — to learn where the automation currently stands.
  Do not re-dispatch tasks already marked complete. Update the progress ledger whenever
  you make meaningful progress. The constitution itself is stable across projects;
  progress is not.

## Use the tools — do not hand-edit these files

These files have a strict internal shape. The `relay_*` tools generate that shape
deterministically and idempotently. Never open them with `edit`/`write` to add a
var, a schema constant, or a task — call the tool instead. If a tool reports a
missing anchor, the file was hand-edited away from the template: stop and tell the
user rather than patching it by hand.

- `relay_add_env_var` — adds an env var to `src/config.ts` in the lazy-env pattern
  (memoised getter for required vars; inline `process.env.X ?? "default"` for
  optional). Call this whenever an automation introduces a new env var (API keys,
  base URLs, etc.).
- `relay_add_schema_field` — adds a constant to a namespaced `as const` block in
  `src/schema.ts` (`F`, `TABLE`, `GHL`, `UNIPILE`, `APIFY`). Call this for every
  new field name, table id, or integration constant. This adds the **constant only**;
  the Airtable `FieldSpec` + `npm run migrate` are owned by the `airtable-agent` —
  do NOT use this tool or any other to do Airtable migration.
- `relay_add_task` — scaffolds `src/trigger/<kebab-id>.ts` in the canonical
  `task({ id, run })` shape **and** appends the id to `modal_bridge.py`
  `ALLOWED_TASKS` (and `TASK_REQUIRES_RECORD_ID` when the task is row-scoped).
  Call this for every new Trigger.dev task. This closes the manual-sync gap —
  never edit `ALLOWED_TASKS` by hand.

## Action tools (wrap CLIs / framework scripts — never MCP)

- `relay_locate_automation` — resolve an automation's spec/plan/ledger/progress
  (or list all). Call this first when resuming work after `/clear`. Its first line
  of output is the canonical progress signal.
- `relay_test` — run `npm test` (the primary quality gate; TS type errors surface here).
- `relay_dev_worker` — bring the local Trigger.dev dev worker `up` / check `status` /
  take it `down`. Bring it up before exercising a task locally.
- `relay_deploy_trigger` — `npm run trigger:deploy` to the Trigger.dev prod env.
- `relay_smoke_test` — trigger one task and poll its run (the deploy-order
  "exercise one task" gate). On pass it writes a deploy-gate marker. recordId, when
  passed, MUST start with `rec`.
- `relay_deploy_modal` — `modal deploy modal_bridge.py`. **Refuses until
  `relay_smoke_test` has passed** (reads the deploy-gate marker). Never deploy Modal
  before Trigger.dev.
- `relay_lint` — check that every spec/plan conforms (spec frontmatter, plan
  `status`, `**Agents:**` names). Call it after writing/updating a spec or plan
  and before handoff or deploy; fix every error it reports and re-call until clean.

## Deploy order is a hard gate

1. `relay_deploy_trigger` (Trigger.dev prod).
2. `relay_smoke_test` (exercise one task — writes the deploy-gate marker on pass).
3. `relay_deploy_modal` (refuses before the gate; succeeds after).

Never reverse this order. The Modal bridge must read `.env.production` (prod), never
`.env` (dev) — otherwise dispatches hit the empty dev env and every run crashes.

## Security invariants

- Secret values live in `.env` / `.env.production` only. The **env-storage**
  skill (a separate npm package, `env-storage-user-skill`, installed at
  `~/.pi/agent/skills/env-storage/`, NOT shipped with this package) loads
  Modal + Trigger.dev master secrets into the project on demand — the user
  runs `/skill:env-storage` (Load) BEFORE invoking `relay-system-setup`,
  or pastes keys directly. The agent never types a secret value into a
  tool input.
- Never pass `--project-ref` on the Trigger.dev CLI — it reads `TRIGGER_PROJECT_ID`.
- `TRIGGER_PROJECT_ID` lives in `trigger.config.ts` (`project:` field), **not** `.env` or
  `.env.production` — the Trigger.dev CLI reads it from there. The `relay-system-setup`
  skill writes it on first run; never duplicate it into an env file.
- Build auth headers inside functions, never as module-top `const` (lazy-env rule —
  the Trigger.dev build step runs without `process.env`).
- Never hardcode endpoints/ids/tokens outside `src/lib`, `src/config.ts`,
  `src/schema.ts`.
- Never echo a secret value back to the user — confirm only its prefix
  (`tr_dev_…`, `tr_prod_…`, `ak-…`, `as-…`).
- Never block a webhook sender — ack `200` immediately, do work in a Trigger.dev task.
- A `recordId` must start with `rec`.

## Lifecycle + plan conventions

- Phase 1 research → `docs/specs/<slug>.md` (no code). Phase 2 plan →
  `docs/plans/YYYY-MM-DD-<slug>.md` with `status` frontmatter
  (`planned` | `in_progress` | `paused` | `completed`) and an `**Agents:** <name>`
  line per task (`trigger-dev-agent`, `modal-agent`, `airtable-agent`,
  `gohighlevel-agent`, `unipile-agent`, or `apify-agent`). Phase 3 execute
  → `docs/automations/<plan>/progress.md`. Each phase writes its artifact and stops.
  Run `relay_lint` after producing a spec/plan and before handoff — it enforces the
  `status` values and `**Agents:**` names above deterministically.
- Dispatch specialist sub-agents task-by-task via `pi-subagents`; a sub-agent failure
  halts the task (write to the ledger, do not proceed to deploy).
- Doc-lookup order: local skill → context7-cli → web search. Never fall back to
  training data for API shapes.

## Skills (lifecycle orchestration)

Six relay-code skills drive the lifecycle, each invoked as `/skill:<name>` (args after
the command are passed to the skill):

- `relay-system-setup` — first run: scaffold an empty repo from bundled templates,
  capture the project identity (Trigger.dev project ID + automation name), and
  write `TRIGGER_PROJECT_ID` into `trigger.config.ts`. Modal + Trigger.dev
  keys are loaded BEFORE running this skill via the user-level `env-storage`
  skill (Load), or pasted directly into `.env` / `.env.production`. The agent
  never types a secret value.
- `relay-research-automation` — Phase 1 (research): explore the automation and write
  `docs/specs/<slug>.md` (no code).
- `relay-plan-automation` — Phase 2 (plan): write `docs/plans/YYYY-MM-DD-<slug>.md`
  (frontmatter `status`, `**Agents:**` per task).
- `relay-execute-or-resume-automation` — Phase 3 (execute): dispatch sub-agents
  task-by-task via `pi-subagents`, append to the ledger, and resume after `/clear`.
  Owns `docs/automations/<plan>/progress.md`.
- `relay-update-or-fix-automation` — delta an existing spec/plan and re-run the fix
  loop (reuses the execute skill's mechanics).
- `relay-sub-agent-builder` — author a new specialist sub-agent when the six below
  don't cover an integration.

## Sub-agents (specialist dispatch)

Six specialist sub-agents, dispatched task-by-task via `pi-subagents`. Every name on
a plan's `**Agents:**` line must be one of these — `relay_lint` rejects anything else:

- `trigger-dev-agent` — Trigger.dev tasks, `relay_add_task`, deploy order.
- `modal-agent` — Modal.com `modal_bridge.py` and `relay_deploy_modal`.
- `airtable-agent` — Airtable `FieldSpec` + `npm run migrate` (owns migration;
  `relay_add_schema_field` adds the constant only).
- `apify-agent` — Apify scrapers / actors.
- `gohighlevel-agent` — GoHighLevel CRM.
- `unipile-agent` — Unipile integration.
