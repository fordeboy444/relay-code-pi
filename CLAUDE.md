# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

`relay-code-pi` is a **Pi coding-agent package** — an extension bundle installed into the
[Pi](https://pi.dev) agent (`pi install npm:relay-code-pi` or `pi install -l ./relay-code-pi`)
to help a non-expert build and deploy **relay-code** automations (Modal.com + Trigger.dev).
It is *not* a standalone app and *not* an automation project itself; it ships the tools, skills,
agents, and constitution that Pi uses *inside* a relay-code project's working directory.

The package turns the framework's advisory conventions (lazy-env, schema contract,
`ALLOWED_TASKS` sync, deploy order, secret handling) into **enforced, deterministic Pi tools**
rather than prose for the model to follow.

## Commands

```sh
npm install            # resolve the 9 Pi extension peer/deps under node_modules/
npm test               # vitest run — pure-core unit tests (the primary gate; TS pipeline exercised here)
npm run test:watch     # vitest watch
pi -e .               # package-load smoke gate — expect SMOKE_OK (loads 10 tools + 8 extensions)
pi -p "Reply with exactly SMOKE_OK and nothing else."   # full-stack host load check
```

Run a single test or group:

```sh
npx vitest run -t "addEnvVarToConfig"          # by describe/it name (substring match)
npx vitest run tests/cores.test.ts            # the whole file (there is only one test file)
```

`npm test` is the gate you should run after any change to `src/` or `tests/`. The project's
`tsconfig.json` type-checks `src/**/*.ts` + `tests/**/*.ts` only — **`extensions/` is excluded**
from the project's TS compilation because it imports Pi runtime APIs
(`@earendil-works/pi-coding-agent`, `pi-secret-mask`, etc.) resolved only inside a Pi host.
There is no build step; `noEmit: true`.

There is no account-gated E2E test in CI. The account-gated run (real Trigger.dev + Modal +
Airtable) is manual — see `docs/e2e-runbook.md`, run once per release.

## Architecture

### The pure-core / thin-glue split (the central design rule)

Every convention-enforcing tool is split across two layers, and you must keep them split:

- **`src/cores.ts`** — pure, side-effect-free functions. They take file **content** (strings) +
  params and return new content. They never touch the filesystem or the Pi runtime, so they
  unit-test with plain Vitest fixtures and **no Pi install**. Every transform (env-var getter,
  schema constant, task scaffold, `ALLOWED_TASKS` sync, locate-output parse, smoke-test
  trigger-parse, dotenv parse, spec/plan lint) lives here.
- **`extensions/relay-tools.ts`** — one file, one default export factory, many
  `pi.registerTool` calls. Each tool's `execute` body is **thin glue**: read file → call a
  pure core → write back, all inside `withFileMutationQueue`, or shell out via `pi.exec` /
  `fetch` for action tools. The glue **never** holds logic that could be a pure function.

When you add or change a tool's behavior, **add the logic to `src/cores.ts` and test it with a
fixture**, then wire it in `extensions/relay-tools.ts`. The reverse (logic in the extension)
breaks testability — the extension can't be unit-tested without a running Pi host.

Fixtures in `tests/fixtures/` (`config.ts`, `schema.ts`, `modal_bridge.py`, `AGENTS.md`) mirror
the real framework template files; tests load them and assert the transformed output.

### What the package ships

- **10 tools** (registered in `extensions/relay-tools.ts`): convention-enforcers
  (`relay_add_env_var`, `relay_add_schema_field`, `relay_add_task`) that mutate the project's
  `src/config.ts`, `src/schema.ts`, `modal_bridge.py`, and context-file env table; action tools
  (`relay_locate_automation`, `relay_test`, `relay_dev_worker`, `relay_deploy_trigger`,
  `relay_smoke_test`, `relay_deploy_modal`) that shell out or fetch — **never MCP**; and
  `relay_lint` (conformance checker the agent self-calls on its own specs/plans).
  A `/plan` **command** (not a tool — does not count toward the tool set) toggles Plannotator
  plan mode via its event bus.
- **Constitution** (`prompts/AGENTS.md`) — injected into the system prompt **every turn** by
  a `before_agent_start` handler. This is the always-on ruleset (tool-use rules, deploy order,
  security invariants, lifecycle conventions). If you change a rule there, it changes the
  agent's behavior on every turn.
- **Skills** (`skills/`) — the setup + lifecycle orchestration
  (`relay-system-setup` → `relay-research-automation` → `relay-plan-automation` →
  `relay-execute-or-resume-automation`), `relay-update-or-fix-automation` (delta vs an existing
  spec/plan), `relay-sub-agent-builder` (author new sub-agents), and vendored integration API docs
  (Modal, Trigger.dev, Airtable, GoHighLevel, Unipile, Google, Context7, Pi).
- **6 sub-agents** (`agents/*.md`) — gated fan-out via `pi-subagents`:
  `airtable-agent`, `apify-agent`, `gohighlevel-agent`, `modal-agent`, `trigger-dev-agent`,
  `unipile-agent`. These are the only agent names `relay_lint` accepts on a plan's `**Agents:**`
  lines (`VALID_AGENT_NAMES` in `src/cores.ts`).

### The deploy-order gate (mechanically enforced, not advisory)

`relay_deploy_modal` **refuses** unless `relay_smoke_test` has written the deploy-gate marker
(`.pi/relay-deploy-gate.json`, status `COMPLETED`). The order is hard:

1. `relay_deploy_trigger` (Trigger.dev prod, reads `.env.production`)
2. `relay_smoke_test` (trigger one task, poll the run; writes the gate marker on pass)
3. `relay_deploy_modal` (refuses before the gate; succeeds after)

Never reverse this. The Modal bridge must read `.env.production` (prod), never `.env` (dev).

### Tool idempotency and anchor errors

All `relay_add_*` tools are **idempotent** — re-running with the same params is a no-op, and the
pure cores detect "already present" before mutating. They throw on a **missing anchor** (e.g.
`export const config = {`, `ALLOWED_TASKS: set[str] = …`) rather than silently corrupting a
hand-edited file. A tool reporting a missing anchor means the project file was hand-edited away
from the framework template — surface this to the user; do not patch it by hand.

### Context-file resolution

Pi loads a project's context as `AGENTS.override.md` → `AGENTS.md` → `CLAUDE.md` (default
`AGENTS.md`). `relay_add_env_var` writes its env-table row into whichever of these exists
(`cores.pickContextFile`), so it works in a scaffolded relay-code project (which ships
`AGENTS.md`) with no manual rename. The `relay-system-setup` skill scaffolds that `AGENTS.md`
— including its `## Environment` table and `## Project identity` block — from bundled
templates; `TRIGGER_PROJECT_ID` lives in `trigger.config.ts` (not `.env`).

## Conventions to follow when editing this repo

- **Keep cores pure.** New transform → `src/cores.ts` + a fixture-backed test in
  `tests/cores.test.ts`; the extension just reads, calls, writes. No `fs`, no `pi.*`, no
  `process.env` inside `src/cores.ts`.
- **Windows is a first-class host** (`process.platform === "win32"` paths exist in the
  extension: `npm.cmd`, `taskkill /T /F`, `shell: true` for the detached dev worker). Don't
  remove them.
- **Secrets are never echoed** — the `pi-secret-mask` hook masks before the provider request and
  substitutes back for bash/write/edit. When describing secrets in tool output or docs, confirm
  only the prefix (`tr_dev_…`, `tr_prod_…`, `ak-…`, `as-…`).
- `.pi/` is git-ignored runtime scratch (dev-worker pid/log, deploy-gate marker, lint report);
  never commit it.
- The `package.json` `"pi"` block is the manifest Pi reads — `extensions`, `skills`, `prompts`,
  `subagents` arrays. Adding a new extension/skill/agent means adding its path here.

## Key references in-repo

- `docs/e2e-runbook.md` — the account-gated end-to-end run (Trigger.dev + Modal + Airtable).
- `docs/superpowers/specs/2026-08-22-relay-code-pi-design.md` — the design doc.
- `prompts/AGENTS.md` — the injected constitution; the authoritative list of tool-use rules.