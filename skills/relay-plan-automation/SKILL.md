---
name: relay-plan-automation
description: Use when a design spec already exists in docs/specs/ and the user wants a step-by-step implementation plan before any code is written. Triggers on "write the plan", "plan the implementation", or /skill:relay-plan-automation <slug>. Do not use to design the automation itself — use /skill:relay-research-automation for that.
---

# /skill:relay-plan-automation

Use this command when an automation already has an approved design spec under `docs/specs/` and the user wants a detailed, step-by-step implementation plan before any code is written.

This is the second phase of the three-skill flow: **research → plan → execute**. It consumes the spec (the *what*/*why*, from `/skill:relay-research-automation`) and produces the plan (the *how*). `/skill:relay-execute-or-resume-automation` then builds it.

## Input

Pass a slug: `/skill:relay-plan-automation <slug>`. If no slug is given, list `docs/specs/*.md` and use the **AskUserQuestion tool** (rpiv-ask-user-question) to let the user pick.

Read the spec at `docs/specs/<slug>.md`. If no spec exists for the slug, stop and tell the user to run `/skill:relay-research-automation` first — this skill does **not** design automations.

## Workflow

0. **Locate the automation.** Call **`relay_locate_automation`** with the slug (or without one to list candidates, then ask the user to pick). Confirm the spec exists; if not, stop and tell the user to run `/skill:relay-research-automation` first. If a plan for this slug already exists, ask whether to overwrite, create a new dated version, or open the existing one.

1. **Read the spec and note its contract.**
   - Carry forward verbatim: trigger type, task id, env var names, integration field names/types, Modal bridge requirements, deploy notes.
   - Note the `## Sub-agents` section — the agents the spec says will implement this automation.

2. **Scope check.**
   - If the spec covers multiple independent automations, suggest splitting into separate plans (one per subsystem), each producing working, testable software on its own. Do not plan two automations in one file.

3. **Map the file structure** before defining tasks. List every file to create or modify and its one responsibility:
   - `src/trigger/<slug>.ts` — the task (scaffolded by `relay_add_task`)
   - `src/config.ts` — env var constants (added by `relay_add_env_var`; memoised getters)
   - `src/schema.ts` — per-integration constants (added by `relay_add_schema_field`)
   - `src/lib/<integration>.ts` — thin native-fetch client (one per external service; create only those the spec actually uses)
   - `scripts/migrate-airtable.ts` — Airtable field specs (only if Airtable; airtable-agent owns `npm run migrate`)
   - `modal_bridge.py` — `ALLOWED_TASKS` / `TASK_REQUIRES_RECORD_ID` (synced by `relay_add_task`, only if Modal-bridge triggered)
   - `tests/...` — unit tests for pure transforms
   Lock decomposition here; each file should have one clear responsibility.

4. **Confirm the sub-agent roster.**
   - Default to the agents named in the spec's `## Sub-agents` section. Primary agents (`modal-agent`, `trigger-dev-agent`) are assumed unless the spec omits them; add-on agents appear only when the spec adds them. Every name on a task's `**Agents:**` line must be one of the six in `VALID_AGENT_NAMES` (`airtable-agent`, `apify-agent`, `gohighlevel-agent`, `modal-agent`, `trigger-dev-agent`, `unipile-agent`) — `relay_lint` rejects anything else, so do not put built-in agent types like `Explore` on an `**Agents:**` line.
   - If any task touches software no listed agent covers, use AskUserQuestion to ask which sub-agent should be used or created. New agents are authored under `.claude/agents/<name>.md` with the `context7-cli` skill appended (see Sub-agent creation rule) before finalizing the plan.

5. **Right-size the tasks.**
   - A task is the smallest unit that carries its own validation cycle and is worth a fresh review gate. Fold setup, config, scaffolding, and docs into the task whose deliverable needs them.
   - **One domain agent per task by default.** If a task genuinely needs 2+ agents, list them in sequential dependency order (`Agents: airtable-agent → trigger-dev-agent`); `/skill:relay-execute-or-resume-automation` runs them sequentially and reviews the combined diff once.
   - Each task ends with an independently validatable deliverable.

6. **Write bite-sized steps within each task** (each step is one action, ~2-5 min): write the failing test → run it to confirm it fails → implement the minimal code → run the tests to confirm they pass → commit. Show the actual test code and implementation, not a description of it. **Where a step adds an env var, schema constant, or task, the step says "call `relay_add_env_var` / `relay_add_schema_field` / `relay_add_task`" — do not instruct hand-editing those files.**

7. **Write the plan** to `docs/plans/YYYY-MM-DD-<slug>.md` using this structure:

   ````markdown
   ---
   slug: <slug>
   name: <human-readable name>
   trigger_type: scheduled | http
   created: <YYYY-MM-DD>
   status: planned
   ---

   # Plan: <name>

   > **For agentic workers:** REQUIRED SUB-SKILL: `/skill:relay-execute-or-resume-automation` implements this plan task-by-task via `pi-subagents`. Steps use `- [ ]` checkboxes for tracking; the live todo overlay (rpiv-todo) mirrors the progress ledger.

   **Goal:** [one sentence]
   **Architecture:** [2-3 sentences]
   **Tech Stack:** Trigger.dev SDK, Modal, Airtable REST/Meta API, Vitest

   ## Spec
   See [docs/specs/<slug>.md](../specs/<slug>.md).

   ## Global Constraints
   [Copied verbatim from the spec — env var names, field names/types, naming rules, the deploy order (relay_deploy_trigger → relay_smoke_test → relay_deploy_modal), the lazy env-var getter rule, the "never hand-edit config.ts/schema.ts/modal_bridge.py/trigger/* — use the relay_add_* tools" rule. Every task implicitly includes these.]

   ---

   ### Task N: [Component Name]

   **Agents:** trigger-dev-agent   *(or `agent-a → agent-b` for a sequential multi-agent task)*

   **Files:**
   - Create: `src/trigger/<slug>.ts`
   - Modify: `src/config.ts`
   - Test: `tests/trigger/<slug>.test.ts`

   **Interfaces:**
   - Consumes: [what this task uses from earlier tasks — exact signatures]
   - Produces: [what later tasks rely on — exact function names, parameter and return types]

   - [ ] **Step 1: Write the failing test**
   ```typescript
   // the actual test
   ```
   - [ ] **Step 2: Run test to verify it fails** — `npx vitest run tests/trigger/<slug>.test.ts` → expected FAIL
   - [ ] **Step 3: Write minimal implementation** — [actual code]
   - [ ] **Step 4: Run test to verify it passes** → expected PASS
   - [ ] **Step 5: Commit** — `git commit -m "feat(<slug>): ..."`
   ````

   Map the spec's tasks roughly to:
   - Scaffold `src/trigger/<slug>.ts` + sync `ALLOWED_TASKS` (call `relay_add_task`) — trigger-dev-agent
   - Add env vars/defaults to `src/config.ts` (call `relay_add_env_var`) — trigger-dev-agent or the relevant add-on agent
   - Update per-integration contracts in `src/schema.ts` (call `relay_add_schema_field`) + migrate (airtable-agent) — if needed
   - Validate with `relay_dev_worker up` + `relay_test`

8. **Self-review** the plan against the spec with fresh eyes:
   - **Spec coverage:** skim each spec requirement — can you point to a task that implements it? Add a task for any gap.
   - **Placeholder scan:** search for "TBD", "TODO", "implement later", "add appropriate error handling", "write tests for the above" without code, "similar to Task N". These are plan failures — fix them with real content.
   - **Type consistency:** do function names, signatures, and field names in later tasks match what earlier tasks defined?
   - **Tool-use correctness:** every step that touches `config.ts`/`schema.ts`/`modal_bridge.py`/`trigger/*.ts` says to call the matching `relay_add_*` tool, not hand-edit.
   - Fix issues inline; no re-review needed.

9. **Ask for approval.**
   - Present the plan to the user in chat (paste the plan + spec paths). Ask: approve, revise, or reject. Do **not** spawn any implementation agent before approval.

10. **Self-check conformance, then hand off.** Once approved, set plan `status: planned`. Call **`relay_lint`** and confirm it is clean — it checks the plan's `status` frontmatter, that every `**Agents:**` line names only the six ported agents, and that the spec has `slug`/`name`/`trigger_type`/`created` frontmatter. Fix every error it reports (edit the named file), then re-call `relay_lint` until clean. Do **not** auto-invoke the next skill. Stop and tell the user:
    > The plan is written to `docs/plans/YYYY-MM-DD-<slug>.md`. Run `/clear` to clear the context, then run `/skill:relay-execute-or-resume-automation <slug>` to start (or resume) the implementation. Execute writes and tests the Trigger.dev task against the **local dev worker** (it calls `relay_dev_worker up` itself); when all tasks are done, execute deploys to production via `relay_deploy_trigger` → `relay_smoke_test` → `relay_deploy_modal`.

## Sub-agent creation rule

Any new sub-agent identified in step 4 is authored under `.claude/agents/<name>.md` with the Input / Workflow / Rules structure of the existing agents, and **must have `context7-cli` appended to its `skills:` frontmatter** so it fetches official documentation via Context7 instead of web search. Domain doc-skills can be added alongside it. Matches the framework's doc-lookup order: local skill → context7-cli → web search — never training data.

## Guardrails

- **Plan-only:** never write the spec here — that is `/skill:relay-research-automation`'s job. If no spec exists, refuse and point the user there.
- Never write application code (`src/*`, `modal_bridge.py`, `scripts/*`) in this skill — delegate to the agents during `/skill:relay-execute-or-resume-automation`. The plan may *instruct* calling `relay_add_*` tools but does not call them itself.
- Never write real secret values into plans. Confirm prefixes only.
- No placeholders — every step contains the actual content an implementer needs (real test code, real implementation, real commands).
- Each task names the domain agent (or sequential agent chain) that will implement it.
- Always pause for explicit user approval in chat before handing off to `/skill:relay-execute-or-resume-automation`.
- If a plan with the same slug already exists, ask whether to overwrite, create a new version, or open the existing one.