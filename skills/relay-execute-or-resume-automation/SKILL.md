---
name: relay-execute-or-resume-automation
description: Use when an approved implementation plan exists in docs/plans/ and the user wants to build, continue, or resume the automation. Triggers on "build the automation", "resume the automation", "execute the plan", "resume the plan", or /skill:relay-execute-or-resume-automation <slug>. Do not use to design or plan — use /skill:relay-research-automation and /skill:relay-plan-automation first. Owns the local Trigger.dev dev worker bring-up (via relay_dev_worker) and the production deploy order (relay_deploy_trigger → relay_smoke_test → relay_deploy_modal).
---

# /skill:relay-execute-or-resume-automation

Build, continue, or retry a Modal + Trigger.dev automation from an approved plan in `docs/plans/`. This is the third phase of **brainstorm → plan → execute**. It dispatches the domain sub-agents task-by-task via **`pi-subagents`**, reviews each task's diff, runs a fix loop on failures, and tracks progress in a ledger that survives `/clear` (mirrored live by **rpiv-todo**). The integrations the automation uses are decided by the spec and plan; the relevant add-on agents self-validate when they're in scope.

**Adapted from `superpowers:subagent-driven-development` (slim).** The domain agents already self-validate (trigger-dev-agent runs `relay_test` + `relay_dev_worker`, modal-agent deploys the bridge, add-on agents validate their own integration contracts), so the **controller reviews each task's diff itself** rather than dispatching a separate reviewer subagent. Keep the ledger, fix loop, per-task gates, and branch guard.

This skill owns the **Trigger.dev dev-worker bring-up** (via `relay_dev_worker`) and **both deploy runbooks** (dev + prod, via the `relay_deploy_*` + `relay_smoke_test` tools). There is no separate dev-up / prod-up / deploy skill.

## Input

Optionally pass a slug: `/skill:relay-execute-or-resume-automation <slug>`. If none is given, call **`relay_locate_automation`** (no slug) to list candidates, then use the **AskUserQuestion tool** (rpiv-ask-user-question) to let the user pick.

## Setup

1. **Locate the automation.** Call **`relay_locate_automation`** with the slug (or without one to list candidates, then ask the user to pick). Use its output to resolve the plan path, ledger path, and resume progress. If no plan exists for the slug, stop and tell the user to run `/skill:relay-plan-automation <slug>` first. If a ledger exists, note how many tasks are already complete — you will resume at the first incomplete task.

2. **Dev worker pre-flight (required — do not skip).** This phase writes and tests Trigger.dev tasks against the local dev worker, so the worker must be running.
   - Call **`relay_dev_worker`** with `action: "status"`.
   - If it reports the worker is running, continue to step 3.
   - If it reports not running, call **`relay_dev_worker`** with `action: "up"`. It launches the worker detached, polls its log for a readiness marker, and returns one of: **ready** (proceed), **exited prematurely** (surface the log tail it returns and **stop** — do not dispatch any implementation agent), or **no readiness marker within 90s** (it may still be starting; check `.pi/relay-dev-worker.log` and the Trigger.dev dashboard before proceeding).
   - If bring-up fails because `.env` is missing or a required secret is unset, `relay_dev_worker up` will report the premature exit. Discover the required env-var names by reading `src/config.ts` (every `required("X")` and `memo(() => required("X"))` is a required key; `TRIGGER_SECRET_KEY` is always required). Confirm each appears as a `KEY=value` line in `.env` **by line prefix only — never echo the value**. Tell the user which are missing and stop. `TRIGGER_PROJECT_ID` is **not** an env var — it lives in `trigger.config.ts` (`project:` field), not `.env`; if the worker complains about a missing project ref, check `trigger.config.ts` instead.
   - **Do not dispatch any implementation agent until the dev worker is up.** Do not start a second worker while one is already running — call `relay_dev_worker` with `action: "down"` first.

3. **Git branch guard.** Refuse to implement on `master` without explicit user consent (AskUserQuestion). Create and switch to a feature branch `feat/<slug>` first. Never start implementation on `master` unprompted.

4. **Resolve the per-plan ledger.** Use the ledger path from step 1.
   - Workspace dir: `docs/automations/<plan-basename>/` (committed alongside the spec and plan under `docs/`; tracked by git — do not gitignore it). `<plan-basename>` is the plan filename without `.md`.
   - Ledger path: `docs/automations/<plan-basename>/progress.md`.
   - If the ledger exists and its first line is `# Automation ledger — plan: docs/plans/<plan-basename>.md`, tasks with a `Task <N>: complete` line are **DONE — do not re-dispatch them**; resume at the first task without one. A task whose last line is a fix round is mid-loop: resume the loop at the next round.
   - A ledger naming a *different* plan is another plan's progress — leave it in place, start your own fresh.
   - Create the ledger with `# Automation ledger — plan: docs/plans/<plan-basename>.md` as the first line. Mirror the task list in **rpiv-todo** so the user sees live progress.

5. **Read the plan and spec.** Read the plan's frontmatter and task checklist (path from step 1), and the linked spec at `docs/specs/<slug>.md`. Note the Global Constraints and the per-task `Agents:` assignment.

6. **Pre-flight scan.** Before dispatching Task 1, scan the plan once for: tasks that contradict each other or the Global Constraints, or anything the plan mandates that a review would flag as a defect. Batch everything you find into one **AskUserQuestion** to the user — each finding beside the plan text that mandates it — before execution begins. If the scan is clean, proceed without comment.

## The task loop

For each task, in order. **Continuous execution:** do not pause to check in with the user between tasks. Execute all tasks without stopping. The only reasons to stop are: a BLOCKED status you cannot resolve, ambiguity that genuinely prevents progress, or all tasks complete.

### 1. Record BASE
Before dispatching, record `BASE = git rev-parse HEAD`. The review and fix-round diffs need it.

### 2. Dispatch the domain agent (via pi-subagents)
- **Extract the task brief:** copy the task's full text (Files, Interfaces, steps, Global Constraints) to `docs/automations/<plan-basename>/task-N-brief.md`. The agent reads the brief — never the whole plan file.
- **Dispatch the agent named in the task's `Agents:` line** through `pi-subagents` (e.g. `trigger-dev-agent`). For a sequential multi-agent task (`agent-a → agent-b`), dispatch the first now; later agents run in step 3.
- Hand the agent: (1) one line on where this task fits; (2) the brief path — "read this first, it is your requirements, use the exact values verbatim"; (3) interfaces/decisions from earlier tasks the brief cannot know; (4) your resolution of any ambiguity you noticed; (5) a report-file path `docs/automations/<plan-basename>/task-N-report.md` and the report contract. Tell the agent which `relay_*` tools to call for the mechanical edits (scaffold the task with `relay_add_task`, add env vars with `relay_add_env_var`, add schema constants with `relay_add_schema_field`) — and that it must **never hand-edit** `src/config.ts`, `src/schema.ts`, `modal_bridge.py`, or `src/trigger/*.ts` scaffolding.
- **Report contract:** the agent writes its full report to the report file and returns only: status, commits, a one-line test summary, and concerns.
- Record the agent identity from the dispatch result — fix-loop rounds 1-3 resume this agent.
- Never dispatch multiple implementation agents in parallel (file conflicts). Sequential multi-agent tasks run one at a time.

### 3. Multi-agent task (if `Agents: a → b → …`)
After the first agent reports DONE, dispatch the next agent in the chain, giving it the prior agent's interfaces (the `Produces:` block) and the same brief/report contract (its own report file). Continue until the chain completes. Then review the **combined** diff once in step 5.

### 4. Handle the report
- **DONE** → proceed to review (step 5).
- **DONE_WITH_CONCERNS** → read the concerns; if they are about correctness/scope, address before review; if observations, note them and proceed to review.
- **NEEDS_CONTEXT** → provide the missing context and re-dispatch the same agent.
- **BLOCKED** → assess: context problem → re-dispatch same agent with more context; needs more reasoning → re-dispatch a more capable model; task too large → split it; plan itself wrong → escalate to the user. Never ignore an escalation or force the same model to retry unchanged.

If the agent asks questions (before or mid-task), answer them clearly and completely before it implements.

### 5. Controller reviews the diff (slim — no separate reviewer subagent)
Run `git diff <BASE>..HEAD` (the stat summary plus the full diff with `-U10` context). Check the diff against the brief and Global Constraints for:
- **Spec compliance:** every requirement in the brief met; nothing extra that wasn't asked for.
- **Tool-use compliance:** env vars / schema constants / task scaffolding were added via the `relay_add_*` tools, not hand-edited. (A hand-edited `config.ts` getter that isn't memoised, or a hand-added `ALLOWED_TASKS` entry, is a defect — send it back.)
- **Task quality:** real tests that assert something; no magic numbers; naming/types match the Interfaces block; lazy env-var getters where the spec requires them; per-integration constants in `src/schema.ts` used wherever the spec names a field / id.

This replaces SDD's task-reviewer dispatch. If the review is clean, go to step 7.

### 6. Fix loop (when the review finds spec gaps or Critical/Important issues)
A fix round is one fix dispatch + one scoped re-check. Five rounds max per task.
- **Rounds 1-3 — resume the same agent** that did the task. Send it the open findings verbatim; its context is intact. It fixes, re-runs the covering tests (`relay_test` or `npx vitest run <file>`), appends a fix report to the same report file, and returns the short contract. Name the covering test files in the fix message.
- **Rounds 4-5 — dispatch a fresh agent** (capability bump if available) with the brief path, report-file path, open findings, and: "A prior agent attempted this task [N] times; you own it now. Read the report file for what was tried."
- **Re-check:** run `git diff <FIX_BASE>..HEAD` (FIX_BASE = the HEAD the previous review saw) and re-review the scoped diff only. New Critical/Important breakage in the fix diff joins the open findings; out-of-scope observations go to the ledger as deferred minors.
- **The breaker (round 5 still open):** stop dispatching. Adjudicate each open finding yourself — you hold the plan and cross-task context the agent lacks:
  - Reviewer wrong / contestable → park: `Task <N>: parked — <finding> — ruling: <why the code stands>`.
  - Real but nothing downstream builds on it → park with a ruling that it's deferred.
  - Real and load-bearing → STOP: append `Task <N>: BLOCKED — <reason>` and report to the user with the finding, the plan text it collides with, and the fix history.
- Record Minor findings in the ledger as you go (`Task <N>: minor (deferred): <one-liner>`); they never enter the loop. A finding that conflicts with what the plan text requires is the user's decision — present the finding and the plan text, ask which governs.
- **Never fix findings yourself in the controller session** — your context stays clean for coordination, and controller fixes skip review.

### 7. Complete the task
When the review is clean — or every open finding is parked with a ruling at the cap — append to the ledger:
- `Task <N>: complete (commits <base7>..<head7>, review clean)` or
- `Task <N>: complete (commits <base7>..<head7>, <K> parked)`
Then tick the rpiv-todo item and the plan file's `- [ ]` to `- [x]`. Move to the next task.

## Final review

After the last task, run one consolidated whole-branch review: `git diff <merge-base>..HEAD` where merge-base = `git merge-base master HEAD`. The controller reviews the full branch against the spec. For subtle/large changes, optionally dispatch a reviewer agent on the most capable available model — otherwise review it yourself.

If the final review returns findings, dispatch **one** fix agent with the complete findings list (not one per finding), then exactly one scoped re-check. Adjudicate residuals as in the task loop's breaker. There is no second fix wave — residual load-bearing findings surface to the user at finish.

## Finish

1. Update the plan frontmatter: `status: completed` (or `status: paused` if blocked).
2. Ensure all task checkboxes are `- [x]`.
3. Call **`relay_lint`** to confirm the finished plan + spec still conform; fix every error it reports and re-call until clean before deploying.
4. Append a new subsection to `AGENTS.md`'s `### Automations` section using the template in the `<!-- … -->` block there (per-automation context): task id(s), trigger type, source → destination, required env vars, integration contracts, Modal bridge (`in ALLOWED_TASKS` + recordId yes/no), status, and notes. Do not invent fields the template doesn't define.
5. **Deploy to production** by calling the deploy-order tools in sequence — **`relay_deploy_trigger` → `relay_smoke_test` → `relay_deploy_modal`**. `relay_smoke_test` is the blocking gate: it triggers one task and polls the run, and writes the deploy-gate marker only on `COMPLETED`. `relay_deploy_modal` **refuses** until that marker exists. Do not deploy the Modal bridge until a task has run green in prod.

   ### Production deploy runbook

   A fixed, repeatable runbook — now three tool calls. Do not deploy from a tree that has not been verified locally.

   **Pre-flight (required — do not skip).** If any of these fail, stop and tell the user what is missing. Do not deploy.

   a. **Code is locally green.** The dev worker reached ready for the current tree, and a test run completed for every task you intend to ship. Call **`relay_test`** first — it's the project's primary quality gate and surfaces TypeScript errors. If anything fails, stop and report.
   b. **`.env.production` exists and is populated.** `TRIGGER_SECRET_KEY` is always required and **must start with `tr_prod_`** for the prod deploy. Confirm the prefix without printing the rest of the key (e.g. `grep -qE '^TRIGGER_SECRET_KEY=tr_prod_'`). Discover the other required keys from `src/config.ts`. Never deploy with the dev key (`tr_dev_…`).
   c. **No new required env vars unseeded in prod.** If this change set added a new integration env var, it must also exist in the prod environment (dashboard or API) — the Trigger CLI does not create placeholder values. Seed placeholders via the dashboard **after** deploy, not before. Never push real secrets programmatically.
   d. **Working tree is committed.** You can deploy an uncommitted tree, but the dashboard cannot roll back to an unrecorded commit. If the deploy is risky, commit first.

   **Procedure.**

   1. **Test gate:** call **`relay_test`**. If anything fails, stop — do not proceed.
   2. **Deploy tasks:** call **`relay_deploy_trigger`** (runs `npm run trigger:deploy` against `.env.production`). It throws on non-zero exit with the stderr/stdout tail; on success it returns the deploy output. If it reports an auth/project error, tell the user to check `TRIGGER_SECRET_KEY` (`tr_prod_…`) in `.env.production` and `TRIGGER_PROJECT_ID` in `trigger.config.ts` (`project:` field). If it reports unresolved secret references, tell the user which to add to the prod environment in the dashboard.
   3. **Smoke test (blocking gate):** call **`relay_smoke_test`** with the task id (and a throwaway `recordId` starting `rec` if the task is row-scoped). It triggers the task, polls the run, and on `COMPLETED` writes the deploy-gate marker (`.pi/relay-deploy-gate.json`). If it reports the run did not pass, **stop** — fix the task and re-run. Do not proceed to the Modal deploy.
   4. **Deploy the bridge (if it changed):** call **`relay_deploy_modal`** (runs `modal deploy modal_bridge.py`). It **refuses** until the smoke-test marker exists; once the marker is present it deploys and returns the output. Then remind the user to update any external trigger sources that point at the bridge (Airtable Button URL formulas owned by `airtable-agent`, third-party webhook URLs) if the bridge endpoint changed.

   **What never to do.** Never deploy with a dev secret. Never push real secret values to git (`.env.production` is gitignored — never `git add` it, never paste its contents into logs/reports). Never skip `relay_test` even when the change "looks trivial". Never auto-deploy a change that introduces a new env-var placeholder requirement without telling the user. Never reverse the deploy order — the gate enforces it, but do not try to bypass it.

6. Report: changed files, task id, bridge status, validation results, and next steps.

## Resume

Re-invoking `/skill:relay-execute-or-resume-automation <slug>` after `/clear` calls `relay_locate_automation` to find the plan and ledger, skips tasks marked complete, and resumes at the first incomplete task (or mid-loop at the next fix round). The ledger is the recovery map: the commits it names exist in git even when your context no longer remembers creating them. Trust the ledger and `git log` over your own recollection.

## Output during implementation

```markdown
## Building: <name>
Progress: N/M tasks complete
Working on: Task <N> — <name> [agent: trigger-dev-agent]
[agent output summarized here]
✓ Task complete (commits <base7>..<head7>, review clean)
```

## Output on completion

```markdown
## Implementation complete
**Plan:** docs/plans/YYYY-MM-DD-<slug>.md
**Spec:** docs/specs/<slug>.md
**Progress:** N/M tasks complete ✓
### Completed this session
- [x] Create src/trigger/<slug>.ts
- [x] Wire Modal bridge
Next steps:
- Deploy to production: relay_deploy_trigger → relay_smoke_test → relay_deploy_modal
- Update any external trigger sources (e.g. Airtable Button URL formulas owned by `airtable-agent`)
```

## Output on pause / blocker

```markdown
## Implementation paused
**Plan:** docs/plans/YYYY-MM-DD-<slug>.md
**Progress:** N/M tasks complete
### Blocker
<description>
Options:
1. Fix the blocker and run `/skill:relay-execute-or-resume-automation <slug>` again (the ledger resumes where it left off).
2. Update the spec/plan first with `/skill:relay-plan-automation <slug>`.
```

## Guardrails

- Always read the spec before dispatching agents.
- Never implement application code inline — delegate to the domain agents via `pi-subagents`; never fix findings yourself in the controller session.
- The mechanical convention edits (env vars, schema constants, task scaffolding, `ALLOWED_TASKS` sync) go through the `relay_add_*` tools — instruct every dispatched agent to use them and never hand-edit those files.
- One agent per task by default; sequential multi-agent tasks run one agent at a time, then one combined review.
- Update the plan checkboxes, the rpiv-todo overlay, and the ledger immediately after each task completes.
- Pause on errors, blockers, or unclear requirements — do not guess. Never ignore an agent escalation.
- The controller reviews every task's diff — never skip the review, and never accept a report without checking spec compliance + quality + tool-use compliance.
- Do not write real secret values into any file. Confirm env-var presence by line prefix only; never echo the value side.
- Never start implementation on `master` without explicit user consent.
- Do not delete another plan's ledger directory; each plan owns its own workspace.
- Do not start a second `trigger dev` worker while one is already running — `relay_dev_worker down` the prior one first.