---
name: relay-research-automation
description: Use when the user wants to design or spec a new Modal + Trigger.dev (relay-code) automation before any code is written. Triggers on "design an automation", "spec out a new task", "I want to add an automation", or /skill:relay-research-automation. Do not use when a spec already exists in docs/specs/ — use /skill:relay-plan-automation instead.
---

# /skill:relay-research-automation

Use this command when the user wants to explore a new Modal + Trigger.dev automation and review a written design spec before any code is written. The framework's core is Modal + Trigger.dev; **which integrations the automation uses** (Airtable, GoHighLevel, Unipile, custom webhook sources, or none) is decided per-automation by this skill.

This is the first phase of the three-skill flow: **research → plan → execute**. It produces the *what* and *why* (the spec). `/skill:relay-plan-automation` then produces the *how* (the plan); `/skill:relay-execute-or-resume-automation` builds it.

## Input

The user should describe the automation they have in mind. If they only typed `/skill:relay-research-automation`, ask (via the AskUserQuestion tool, provided by rpiv-ask-user-question):

> What automation do you want to add? Describe what it should do, what triggers it, and what it changes.

## Workflow

1. **Explore project context** (before asking detailed questions)
   - Read `AGENTS.md` (per-automation context, conventions, env vars).
   - List `src/trigger/*.ts` and read `trigger.config.ts` to learn existing tasks and slug conventions.
   - Read `modal_bridge.py` `ALLOWED_TASKS` to see which tasks are already wired.
   - Call **`relay_locate_automation`** with no slug to list existing specs/plans — this surfaces slug collisions and any in-progress work to reuse. If the user already gave a candidate slug, call `relay_locate_automation` with it to confirm no spec with that slug already exists.

2. **Ask clarifying questions one at a time** (prefer multiple-choice via AskUserQuestion). Derive each missing item:
   - **Trigger type:** `scheduled` (cron), `http/schema` (Modal bridge from an Airtable Button field, webhook sender, or manual HTTP call), or other.
   - **Slug:** kebab-case, unique under `src/trigger/*.ts`.
   - **Name** and one-line purpose.
   - **Source** and **destination** systems — these decide which integrations are in scope.
   - **Required environment variable names** (names only — never values).
   - **Schema changes needed per integration?** Ask separately for each integration the automation uses.
   - **Modal bridge involved?** If yes, which trigger source and whether the bridge call carries a `recordId` (must start with `rec`).
   - **Which sub-agents should be used or created?** Default to the primary agents (`modal-agent`, `trigger-dev-agent`, `Explore`). Surface the add-on agents only when the source/destination system actually needs them. New agents are authored under `.claude/agents/<name>.md` with the `context7-cli` skill appended (see Sub-agent creation rule) before finishing the spec.

3. **Validate slug uniqueness**
   - Confirm no existing task in `src/trigger/*.ts` exports `id: "<slug>"`. If there is a collision, ask for a different slug.

4. **Propose approaches** — offer 1-2 architecture/trigger options with a recommendation. The user picks.

5. **Present the design in sections**, asking after each whether it looks right:
   Overview · Trigger · Behavior · Files changed · Environment variables · Integration contracts · Modal bridge contract · Tests · Deployment (the exact structure is the spec template in step 7).

6. **Self-review** the assembled spec with fresh eyes:
   - **Placeholder scan:** any "TBD"/"TODO"/vague requirement? Fix it.
   - **Internal consistency:** do any sections contradict each other?
   - **Scope check:** does this describe multiple independent automations? If so, suggest decomposing.
   - **Ambiguity:** could any requirement be read two ways? Pick one and make it explicit.
   - Fix issues inline; no re-review needed.

7. **Write the spec** to `docs/specs/<slug>.md`:

   ```markdown
   ---
   slug: <slug>
   name: <human-readable name>
   trigger_type: scheduled | http
   created: <YYYY-MM-DD>
   ---

   # Spec: <name>

   ## Overview
   One paragraph: what this automation does and why.

   ## Trigger
   - Type: `scheduled` or `http/schema`
   - Task id: `<slug>`
   - Cron (if scheduled): e.g. `0 9 * * 1`
   - HTTP payload / Zod schema (if http/schema): list fields

   ## Behavior
   Step-by-step description of the run() logic.

   ## Files changed
   - `src/trigger/<slug>.ts` — new task (scaffolded by `relay_add_task`)
   - `src/config.ts` — env var constants (added by `relay_add_env_var`)
   - `src/schema.ts` — per-integration constants (added by `relay_add_schema_field`)
   - `src/lib/<integration>.ts` — new client (one per external service)
   - `scripts/migrate-airtable.ts` — Airtable field specs (only if Airtable; the airtable-agent owns `npm run migrate`)
   - `modal_bridge.py` — `ALLOWED_TASKS` / `TASK_REQUIRES_RECORD_ID` (synced by `relay_add_task`, only if Modal-bridge triggered)

   ## Environment variables
   - `VAR_NAME` — required/optional, what it is for.

   ## Integration contracts
   One subsection per integration the automation uses. Omit the section entirely if the automation has none.

   ### Airtable (if used)
   - Table(s) affected, field names, field types, any new dropdown options.

   ### GoHighLevel (if used)
   - Sub-account(s), custom field ids, pipeline / calendar ids, webhook event names.

   ### Unipile (if used)
   - Provider(s), `account_id`(s), webhook event names.

   ### <Other> (if used)
   - Whatever the integration's contract looks like; mirror its add-on agent's contract section.

   ## Modal bridge contract (if applicable)
   - Task id in `ALLOWED_TASKS`
   - Requires an opaque trigger id (e.g. `recordId` for Airtable Button fields)? yes/no
   - Expected trigger URL / formula (owned by `airtable-agent`)

   ## Sub-agents
   - Which agents implement this automation. Default to primary agents; add add-on agents as needed. Note any new agent created and its `skills:` list.

   ## Tests
   - Unit tests for pure transforms (if any).
   - Live smoke test via `relay_smoke_test` (the deploy-order gate).

   ## Deployment
   - `relay_dev_worker up` for local validation
   - Deploy order: `relay_deploy_trigger` → `relay_smoke_test` → `relay_deploy_modal`
   - Any trigger-source updates (e.g. Airtable Button URL formulas owned by `airtable-agent`)
   ```

8. **Ask the user to review** the written spec (AskUserQuestion: approve / change). Wait for approval or changes; re-run step 6 if they request changes.

9. **Hand off** — once the spec is approved, do **not** auto-invoke the next skill. Stop and tell the user:
   > The spec is written to `docs/specs/<slug>.md`. Run `/clear` to clear the context, then run `/skill:relay-plan-automation <slug>` to write the implementation plan.

## Sub-agent creation rule

Any new sub-agent created during the research phase is authored under `.claude/agents/<name>.md` with the Input / Workflow / Rules structure of the existing agents, and **must have `context7-cli` appended to its `skills:` frontmatter** so it fetches official documentation via Context7 instead of web search. Domain doc-skills can be added alongside it. Matches the framework's doc-lookup order: local skill → context7-cli → web search — never training data.

## Guardrails

- **HARD-GATE:** never write application code (`src/*`, `modal_bridge.py`, `scripts/*`) during the research phase — only the spec. The convention files (`src/config.ts`, `src/schema.ts`, `modal_bridge.py`, `src/trigger/*.ts`) are mutated **only** by the `relay_add_*` tools during `/skill:relay-execute-or-resume-automation` — never hand-edit them.
- Never write real secret values into the spec. Confirm only prefixes (`tr_dev_…`, `tr_prod_…`, `ak-…`, `as-…`).
- Ask one clarifying question at a time; do not dump a form.
- If a spec with the same slug already exists, ask whether to overwrite, create a new version, or open the existing one.
- Keep the spec concise but complete enough that `/skill:relay-plan-automation` can produce a plan from it without re-asking.