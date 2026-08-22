---
name: relay-update
description: Use when an existing automation needs a behavior or code change — adding a column, swapping an actor id, changing dedupe logic, splitting a task, retitling output, etc. Triggers on "/relay-update <slug>", "update the <x> automation", "change the dedupe on <x>", "swap the actor id for <x>", "add a column to <x>", "extend <x>" followed by a behavior change. Do NOT use for brand-new automations (use /relay-brainstorm first), small typo / cosmetic / comment edits (just make them and call relay_test), pure spec-text edits with no code change (edit docs/specs/<slug>.md directly), or operational requests like deploy / dev-server-up (use the runbooks inside /relay-execute). Locates the parent spec, frames the follow-up plan as a delta against it (a verbatim ## Spec block + a required "Spec — fold this change in" terminal task), dispatches via /relay-plan + /relay-execute, and verifies the parent spec was actually updated before declaring success.
---

# /relay-update

> **Naming note.** This skill delegates to `/relay-execute` (the registered execute skill). Use the long names everywhere.

Use this command when an automation already shipped, has a spec at `docs/specs/<slug>.md`, and now needs a **behavior or code change**. It is the update-side twin of the **brainstorm → plan → execute** lifecycle: it does not write a new spec, it does not design from scratch, and it does not own the dispatch loop. It owns only what is genuinely different for an update — locating the parent spec, framing the follow-up plan as a delta against that spec, requiring a "fold changes into the parent spec" terminal task, and verifying that the parent spec was actually edited.

This skill delegates to two existing skills for the heavy lifting:

- `/relay-plan <slug>` writes the follow-up plan under `docs/plans/YYYY-MM-DD-<slug>-update-<descriptor>.md` (a follow-up uses the `-update-<descriptor>` suffix, not a bare `YYYY-MM-DD-<slug>.md`, and never overwrites the original plan).
- `/relay-execute <slug>` dispatches the agent roster via `pi-subagents`, runs the fix loop, writes the ledger under `.claude/automation/<plan-basename>/progress.md`, and ships the commits (then deploys via `relay_deploy_trigger` → `relay_smoke_test` → `relay_deploy_modal`).

What this skill adds on top of those two is: **parent-spec framing** (verbatim follow-up `## Spec` block), the **required "Spec — fold this change in" terminal task**, **post-execute spec verification** (three checks: landed / removed / consistent), and the **one-line `AGENTS.md` Notes bullet** for the parent automation.

## Input

The user supplies:

- `<slug>` — the kebab-case slug of the existing automation. It matches the `slug:` frontmatter of `docs/specs/<slug>.md` and the `id:` export of its `src/trigger/<slug>.ts` file (when one exists).
- A one-paragraph description of the behavior change: what is changing, what triggered it, what the user expects to see when done. This becomes the seed for the follow-up plan's **`Goal:`** section.

If `/relay-update` is invoked without supplying either, ask (AskUserQuestion):

> Which automation do you want to update, and what is changing? Pass `<slug>` and a one-paragraph description of the behavior change.

## When NOT to use this skill

Read the request and check these gates before doing anything else. If any gate fails, decline with the matching message — **do not proceed to the workflow**.

| Shape of request | What to do |
|---|---|
| No spec at `docs/specs/<slug>.md` | Decline: "No spec found for `<slug>`. Run `/relay-brainstorm <slug>` first — that skill writes the spec; this one only updates existing specs." |
| A brand-new automation | Decline: "That sounds like a new automation. Run `/relay-brainstorm` to design it." |
| Typo, one-line fix, cosmetic rename, comment change | Decline: "That's a small edit — make it directly and call `relay_test`. This skill is for behavior changes that touch schema, lib clients, orchestration, or trigger entrypoints." |
| Pure spec-text edit with no code change | Decline: "No code is changing — edit `docs/specs/<slug>.md` directly. This skill only runs when behavior changes." |
| Operational / procedural request (deploy, dev server up) | Decline with a pointer to the matching runbook inside `/relay-execute` (the deploy-order tools, `relay_dev_worker`). |
| A follow-up plan already exists covering this exact change | Decline: "There's already a follow-up plan covering this — run `/relay-execute <slug>` to resume it, or pick a different change." |

When in doubt: if the change touches `src/`, `scripts/`, `modal_bridge.py`, or any `F.*` / `TABLE.*` / `APIFY.*` / `UNIPILE.*` / `GHL.*` constant, run this skill. Anything else, decline.

## Workflow

### 1. Resolve the parent spec and the original plan.

Call **`relay_locate_automation`** with the slug. Confirm the spec exists (a parent spec is required — that is what makes this an update, not a new automation). Capture:

- `specPath` — `docs/specs/<slug>.md` (the parent spec).
- The **newest** `YYYY-MM-DD-<slug>.md` for this slug (date-prefix sort). Read this plan's `**Agents:**` lines per task — that roster is the default dispatch for the follow-up.
- The earliest-dated `YYYY-MM-DD-<slug>.md` in `docs/plans/` — the **original plan**. This one is historical and must not be modified; the follow-up will live next to it as a separate file.

If `relay_locate_automation` returns nothing usable, fall back to a direct directory listing of `docs/specs/` and `docs/plans/`.

### 2. Check for existing follow-up plans.

List `docs/plans/` for any `YYYY-MM-DD-<slug>-update-*.md`. For each, read the final **Plan deviation note.** block and the parent spec's `## Open issues` section if present. The history in any prior follow-up must inform this one — do not silently redo a pivot a previous follow-up already documented as resolved.

**Decline gate:** if a follow-up plan **already exists** whose `**Goal:**` matches the requested change, decline with the already-covered message above and point the user at `/relay-execute <slug>`.

### 3. Read the parent spec and surface scope questions.

Read `docs/specs/<slug>.md`. Confirm frontmatter has `slug:`, `name:`, `trigger_type:`, `created:`. The `slug:` value must equal the one the user passed.

Ask the user any scope questions that cannot be inferred from the spec — **one at a time**, prefer multiple-choice via AskUserQuestion. Common ones:

- **Open issues.** Does the parent spec's `## Open issues` (if present) still reflect reality? **On-demand rule:** if the parent spec has no `## Open issues` section, the fold-in task will create one; do not block on this.
- **New agent in scope?** Does the change touch a file no existing agent from the original plan's roster owns? If yes, the new agent must be created under `.claude/agents/<name>.md` and added to the roster with explicit user approval. Never silently expand the roster.
- **Live-data verification?** Default to **no** unless the change alters a write path, adds a new column that must round-trip, or the user says otherwise.

### 4. Invoke `/relay-plan` with the follow-up preamble.

Prepend this preamble to whatever `/relay-plan` produces. The preamble is required so the plan skill writes the right file with the right framing:

```
This is a follow-up update, not a new build.
Parent spec: docs/specs/<slug>.md
Original plan (do not modify): docs/plans/<earliest YYYY-MM-DD-<slug>.md>
Existing follow-up plans to read for context (do not overwrite):
  - <list of docs/plans/YYYY-MM-DD-<slug>-update-*.md here, if any>

Plan filename MUST be: docs/plans/<YYYY-MM-DD>-<slug>-update-<descriptor>.md
Do NOT overwrite the original plan. The descriptor is a kebab-case summary of
the change (e.g. -tiktok-plays, -dedupe, -new-column). If that filename
already exists, suffix -2, -3, …

Use the agent roster from the original plan's **Agents:** lines, unless the
user explicitly approved a new agent in step 3.

The terminal task MUST be titled exactly "Spec — fold this change in" (see
step 5 below).
```

The follow-up plan's `## Spec` section must read, **verbatim**:

> See [docs/specs/<slug>.md](../specs/<slug>.md) — this plan is a follow-up to the original spec, not a replacement. Where this plan contradicts the spec, this plan wins (it will be folded into the spec under the final "fold-in" task).

The plan skill today produces a one-liner — that is wrong for a follow-up. **After `/relay-plan` writes the file, replace the plan's `## Spec` block with the verbatim follow-up block above**, before handing off to execute. Do not paraphrase it — it is a load-bearing contract.

### 5. Verify the terminal "fold-in" task landed.

The follow-up plan's last task must be titled exactly `### Task N: Spec — fold this change in`. If it is not, edit the plan before approval to add the task; this skill refuses to proceed without it. Required content for the fold-in task:

- **Spec edits:** which `## Behavior` step gains or changes wording (paste the new wording); which `## Open issues` entry gets resolved (with today's date); which `## Files changed` entry gets appended.
- **Files:** include `Modify: docs/specs/<slug>.md` in the `**Files:**` block.
- **On-demand `## Open issues`:** if the spec has no `## Open issues` section, this task creates one. If it already has one, the task edits the existing entry.
- **Validation:** list the three post-execute checks (landed / removed / consistent — see step 8) as step-checkboxes, not prose.

Approximate template:

```markdown
### Task N: Spec — fold this change in

**Agents:** <the spec-owning agent — airtable-agent for schema-only,
apify-agent for lib-client, trigger-dev-agent for orchestration/trigger>
*(sequential multi-agent: `agent-a → agent-b` if the spec spans sections)*

**Files:**
- Modify: `docs/specs/<slug>.md`
- Read: `docs/plans/YYYY-MM-DD-<slug>-update-<descriptor>.md` (this plan)

**Interfaces:**
- Consumes: the implementation diff from the prior tasks
- Produces: a consistent parent spec at `docs/specs/<slug>.md`

- [ ] **Step 1: Re-read the spec and the implementation diff.**
- [ ] **Step 2: Apply spec edits** — paste new Behavior wording; mark Open
       issues `Resolved, <YYYY-MM-DD>`; append the Files-changed line. If
       the spec had no `## Open issues` section, create one.
- [ ] **Step 3: Three-check verification** — (a) grep the spec for the new
       Behavior wording + the new Files-changed line; (b) grep for any old
       / contradictory text the follow-up plan said to remove; (c) confirm
       `## Open issues` is consistent. All three must pass.
- [ ] **Step 4: Commit** — `git commit -m "docs(spec): fold <descriptor>
       change into <slug>"`
```

### 6. Ask the user to approve.

`/relay-plan` already enforces an approval gate (via @plannotator). Do not bypass it. This skill simply waits for the plan to be approved before continuing to step 7.

### 7. Hand off to `/relay-execute`.

Pass it the new plan path. Add these instructions explicitly:

- **Branch override.** The execute skill's default branch is `feat/<slug>`. For this follow-up, use `feat/<slug>-<descriptor>` instead — the original `feat/<slug>` may already be active from a prior follow-up, and follow-ups need their own branch so multiple follow-ups can run in parallel. The override applies only to follow-ups.
- **Spec verification is mandatory at Finish.** The execute skill's Finish step normally covers deploy + an AGENTS.md subsection. This follow-up adds a **post-execute spec verification gate** (step 8 below) that must also pass before the execute skill reports completion. Surface it as a concern if the execute skill skips it.
- **Deploy via the tools.** When the execute skill reaches its deploy runbook, it uses `relay_deploy_trigger` → `relay_smoke_test` → `relay_deploy_modal` as usual.

The execute skill owns its own mechanics (branch guard, `relay_dev_worker` bring-up, per-task brief/report files in `.claude/automation/<plan-basename>/`, fix loop max 5 rounds, ledger, plan checkbox ticking, deploy-order tools). This skill does not reimplement any of that. If a task lands `DONE_WITH_CONCERNS`, the execute skill handles it; only escalate back to the user if the concern is "the parent spec didn't get folded in" (handled in step 8).

### 8. Post-execute spec verification — mandatory, do not skip.

After the execute skill reports all tasks complete, re-read `docs/specs/<slug>.md` and confirm **all three checks**:

- **(a) Landed.** The fold-in edits from step 5 are present: grep for the new `## Behavior` wording; grep for the new `## Files changed` line; grep for the new / resolved `## Open issues` entry.
- **(b) Removed.** Any old / contradictory text the follow-up plan said to remove is actually gone.
- **(c) Consistent.** `## Open issues` is consistent with the change: resolved entries are dated (`Resolved, <YYYY-MM-DD>`), new issues are added if the change created any.

If **any** check fails, refuse to mark the update complete. Dispatch a one-off fix-loop task (via `pi-subagents`) to the agent that owns the relevant section of the spec:

- **Schema-only changes** → `airtable-agent` (or the matching add-on agent).
- **Lib-client changes** → `apify-agent` / `gohighlevel-agent` / etc.
- **Orchestration / trigger changes** → `trigger-dev-agent`.

The dispatched agent runs a quick edit + the three checks again. Re-verify. **Do not declare success until the spec is consistent.**

### 9. Append the `AGENTS.md` Notes bullet.

Find the parent automation's section in `AGENTS.md`. Search order:

1. `### Automations` (the heading the execute skill's Finish step points at — if present, append under it).
2. If absent, append to a dedicated `# Follow-ups` section under the parent automation's slug.
3. If neither exists, create `# Follow-ups` once.

Format the line:

```
- Follow-up plan docs/plans/<YYYY-MM-DD>-<slug>-update-<descriptor>.md <one-line summary>; landed in commits <base7>..<head7>.
```

If `### Automations` is still inside an unfilled HTML comment block, edit the comment text in place so the user's next pass knows the block is being populated. If the heading is live prose with no per-automation subsection, append a `# Follow-ups` section right below it.

## What never to do

- **Never write the follow-up spec as a new file under `docs/specs/`.** The parent spec stays the only spec; follow-ups go into `docs/plans/`. If the user wants a separate doc per change, redirect them to `/relay-brainstorm`.
- **Never modify the original plan** (`docs/plans/<earliest YYYY-MM-DD-<slug>.md`). It is historical. Future updates are recorded as new follow-up plans.
- **Never let the follow-up plan skip the "Spec — fold this change in" terminal task.** Edit the plan to add it before approval if `/relay-plan` produced a plan without it.
- **Never merge a follow-up into `master` directly.** The execute skill's git branch guard enforces this; do not bypass it.
- **Never dispatch a different agent roster from the original build** unless the follow-up genuinely touches a file the original agents didn't own, and the user explicitly approved the new agent in step 3.
- **Never skip step 8 (post-execute spec verification).** A successful build with an unfocused spec is a half-finished update.
- **Never paraphrase the verbatim `## Spec` block.** Copy it exactly.

## Guardrails

- Always call `relay_locate_automation` before trusting anything about the automation's state; its output is the source of truth for spec / plan / ledger.
- Always check for existing follow-up plans (step 2) before invoking the plan skill — silently overwriting a prior follow-up is one of the worst failure modes.
- The post-execute spec verification (step 8) is not optional; do not skip it because the implementation "looks clean."
- The `AGENTS.md` Notes bullet (step 9) is the only place this skill writes to `AGENTS.md`.
- The follow-up plan's filename must use the `-update-<descriptor>` suffix. A bare `YYYY-MM-DD-<slug>.md` is the original plan and must not be overwritten.