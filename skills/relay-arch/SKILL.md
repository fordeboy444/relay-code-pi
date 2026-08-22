---
name: relay-arch
description: Quick reference for the relay-code (Modal + Trigger.dev) project layout, the one-responsibility rule, and which file is owned by which relay_* tool or sub-agent. Consult when deciding where a new piece of code or a constant belongs, or when a relay_add_* tool reports a missing anchor.
---

# relay-arch — layout & ownership quick reference

The relay-code framework is Modal + Trigger.dev. Convention enforcement is **tool-driven**, not prose-driven: the `relay_*` tools generate the exact shapes and refuse to hand-edit. This skill is the map of what lives where and who owns it, so you place things correctly on the first try.

## File layout

```
src/
├── config.ts        # env loading + memoised getters (one `config` object) — relay_add_env_var
├── schema.ts        # BASE_ID, TABLE/F/GHL/UNIPILE/APIFY `as const` blocks — relay_add_schema_field
├── lib/             # one thin native-fetch client per external service — <service>-agent
├── mappers/         # pure transforms
├── prompts/         # pure prompt builders
├── orchestration/   # coordinates clients + schema per automation
└── trigger/         # Trigger.dev task entrypoints — relay_add_task scaffolds; trigger-dev-agent implements
scripts/migrate-airtable.ts        # idempotent Airtable field migration — airtable-agent owns `npm run migrate`
scripts/locate-automation.mjs       # resolve/resume an automation — wrapped by relay_locate_automation
tests/                              # Vitest
trigger.config.ts                   # reads TRIGGER_PROJECT_ID, scans ./src/trigger — relay_setup fills `project`
modal_bridge.py                     # Modal FastAPI bridge: ALLOWED_TASKS / TASK_REQUIRES_RECORD_ID — relay_add_task syncs; modal-agent owns the file body
```

## Ownership matrix

| File / concern | Owner | Mutated by |
|---|---|---|
| `src/config.ts` lazy-env getters + auth-header fns | trigger-dev-agent | `relay_add_env_var` only — never hand-edit |
| `src/schema.ts` namespaced `as const` constants | the matching add-on agent | `relay_add_schema_field` only — never hand-edit |
| `src/schema.ts` `BASE_ID` sentinel | — | `relay_setup` (first run) |
| `src/trigger/<slug>.ts` task scaffold + `ALLOWED_TASKS` sync | trigger-dev-agent | `relay_add_task` scaffolds + syncs; body implemented by the agent |
| `modal_bridge.py` `ALLOWED_TASKS` / `TASK_REQUIRES_RECORD_ID` | modal-agent | `relay_add_task` syncs the sets; modal-agent owns the rest |
| `modal_bridge.py` `App("…-bridge")` sentinel | — | `relay_setup` (first run) |
| `scripts/migrate-airtable.ts` FieldSpecs | airtable-agent | hand-edited by airtable-agent (no relay_* migration tool — by design) |
| `src/lib/<service>.ts` clients | the matching add-on agent | hand-authored by that agent |
| `trigger.config.ts` `project` sentinel | — | `relay_setup` (first run) |
| `package.json` `name` sentinel | — | `relay_setup` (first run) |
| `docs/specs/<slug>.md`, `docs/plans/…`, `.claude/automation/<plan>/progress.md` | the lifecycle skills | hand-written by `/relay-brainstorm`, `/relay-plan`, `/relay-execute` |

## The one-responsibility rule

- Clients in `lib/` know nothing about orchestration; orchestration coordinates clients + schema; prompts/mappers are pure.
- Reference integration fields by name via the namespaced constants in `schema.ts` — the single source of truth. Never hardcode field-name strings outside `lib/`/`config.ts`/`schema.ts`.
- One external service = one client file in `lib/`. Do not mix two services in one client.
- Pure units get unit tests (Vitest); external-API clients and orchestration are exercised with live smoke tests (`relay_smoke_test`).

## Lazy env-var pattern (what `relay_add_env_var` generates)

`src/config.ts` exposes `config` with **memoised getters**, not eager reads — the Trigger.dev build step runs without `process.env`.

- Required var: `const _x = memo(() => required("X"));` above `export const config = {`, then `get x(): string { return _x(); },` inside the object.
- Optional var: inline `get x(): string { return process.env.X ?? "default"; },` inside the object.
- Auth headers: built inside a function (`export function xAuthHeader(): string { return "Bearer " + config.x; }`), **never** a module-top `const`.

## When a `relay_add_*` tool reports a missing anchor

The tools anchor on sentinels from the framework template (`export const config = {`, the `as const` blocks, `ALLOWED_TASKS: set[str] = …`). A "missing anchor" error means the file was hand-edited away from the template. **Do not patch it by hand** to make the tool pass — stop and tell the user the file drifted from the template, and ask whether to restore the template shape. Hand-patching to satisfy an anchor hides the real problem (a convention violation).

## Deploy order (enforced by the gate)

```
relay_deploy_trigger  →  relay_smoke_test (writes deploy-gate marker on pass)  →  relay_deploy_modal (refuses before the marker)
```

`relay_deploy_modal` reads `.pi/relay-deploy-gate.json`; it throws until `relay_smoke_test` has passed. The Modal bridge reads `.env.production` (prod), never `.env` (dev).

## Doc-lookup order

local skill → context7-cli → web search. Never fall back to training data for API shapes.