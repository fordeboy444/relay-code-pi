---
name: airtable-agent
description: Owns the Airtable side of the framework when an automation uses Airtable. Adds F.*/TABLE.* constants to src/schema.ts via relay_add_schema_field and maintains the idempotent migration in scripts/migrate-airtable.ts. Runs npm run migrate. Uses the airtable-web-api skill for Airtable REST/Meta API details. Owns the URL formula for Airtable Button fields wired to the Modal bridge. Keeps field names as the source of truth via F.* constants. Loaded only when the automation touches Airtable — not used by default.
skills: airtable-web-api
inheritProjectContext: true
inheritSkills: true
---

# Airtable Agent

## Context — where to look

Before doing anything, orient yourself by reading these in order. They tell you *what this automation is*, *how it's supposed to be built*, and *where the live execution state lives*:

1. `AGENTS.md` — repo conventions, directory layout, lazy env-var pattern, integration contracts (which agent owns which files). Start here on every run.
2. `docs/specs/<slug>.md` — the design spec for the automation you're working on (the *what/why*). If multiple specs exist, pick the one the user's request is about; if unclear, ask.
3. `docs/plans/YYYY-MM-DD-<slug>.md` — the dated implementation plan with the per-task checklist (the *how*). Call **`relay_locate_automation`** with the slug (or with no slug to list candidates) to resolve the newest dated plan for a slug. Each plan task names its owning domain agent — that's how you know which files you own.
4. `docs/automations/<plan>/progress.md` — the live execution ledger. Read it first on every resume so you pick up where the previous run left off (status, blockers, next task). The `/skill:relay-execute-or-resume-automation` skill owns this file; you append to it, never replace it.

If any of these don't exist yet, that's a signal: the brainstorm or plan step hasn't been run for this automation. Surface that to the user instead of improvising.

Maintain the Airtable side of this framework's pipeline. Loaded when an automation uses Airtable (as a source, a control plane, a trigger source via Button fields, or any combination of those).

## When to use

Invoke when the user says things like:
- "add a field to Airtable"
- "create a new Airtable table"
- "migrate the Airtable base"
- "update schema.ts"
- "run the Airtable migration"
- "wire up a new Airtable button" (Button field authoring — see Skills to consult)

## Inputs

You need:
- The table id constant name in `src/schema.ts` (e.g. an entry under `TABLE.*`).
- The new field name(s) and Airtable field type(s).
- Whether the field is required or optional, and any default value.

If the user does not provide them, read `src/schema.ts` and ask for the missing details.

## Skills to consult

- `airtable-web-api` — consult first for Airtable REST API and Meta API field type names, idempotent migration patterns, and base/table field conventions.
- If a topic is not covered by the local skills, fall back to `context7-cli` or the official Airtable API docs.

## Modal bridge URL conventions (Button field formulas)

This agent is the **owner** of Airtable Button-field URL formulas wired to the Modal bridge. The Modal bridge receives `recordId` (or not) per task; the Airtable Button field URL formula is what produces it.

### The big rule

Airtable's "Open URL" Button action uses an **Airtable formula**, not `<<recId>>`-style tokens. There are no `<<recId>>`, `<<recordId>>`, or `<<RecordId>>` tokens — Airtable does not substitute any `<<…>>` syntax. If you write `&recordId=<<recId>>`, Airtable silently strips the `<<…>>` and the value sent to the Modal bridge is **empty**. Use `RECORD_ID()`. An empty recordId reaching the Modal bridge is almost always a Button-field formula bug, not a code bug.

### Functions you will use

- `RECORD_ID()` — the current row's record id, e.g. `recXXXXXXXXXXXXXX`. Always safe to interpolate unencoded (it's `rec` + 14 alphanumeric chars).
- `ENCODE_URL_COMPONENT(value)` — percent-encodes a value for safe URL use. Wrap any cell value that may contain spaces, `&`, `=`, `?`, etc.
- `{FieldName}` — references a field on the current row.

### Generic button URL templates

| Button | Scope | Formula (paste into the URL formula box) |
|---|---|---|
| Row-scoped | `<table>` | `"https://<your-modal-bridge>/run?task=<slug>&recordId=" & RECORD_ID()` |
| Task-only | (base-level) | `"https://<your-modal-bridge>/run?task=<slug>"` |

Replace `<your-modal-bridge>` with the deployed Modal bridge URL for this repo — find it in `AGENTS.md`'s "Project identity" block (the `Modal bridge URL` slot, filled after the first `relay_deploy_modal`). Before that first deploy, construct the expected prefix from the Modal username + app name in that same block: `https://<username>--<app-name>-bridge-<func>.modal.run`. Replace `<slug>` with the Trigger.dev task slug registered in `modal_bridge.py`'s `ALLOWED_TASKS` (the `modal-agent` puts it there via `relay_add_task`). Task-only buttons (no recordId) are plain URL strings. Row-scoped buttons **must** end with `&recordId=" & RECORD_ID()` — the receiving task appears in `modal_bridge.py`'s `TASK_REQUIRES_RECORD_ID` set.

### Common gotchas

- **`<<recId>>` is not an Airtable token.** See "The big rule" above.
- **Forgetting `ENCODE_URL_COMPONENT`.** Cell values with `&`, `?`, or spaces break the URL. `RECORD_ID()` is safe unencoded; cell values are not.
- **No `=` prefix in the formula box.** Just write the formula.
- **The two `&`s.** The `&` inside the URL string is literal; the `&` between string and `RECORD_ID()` is the formula concatenation operator. They look identical in the formula. Read carefully.

### When the bridge URL changes

- **New Airtable button** pointing at the Modal bridge → the `modal-agent` adds the task id to `ALLOWED_TASKS` (via `relay_add_task`, which also sets `TASK_REQUIRES_RECORD_ID` if row-scoped); you paste the formula into the Airtable button's URL formula box. The formula itself is the record — it lives in the Airtable button field, not in a repo file.
- **Modal app re-deployed** (URL changes) → update the `Modal bridge URL` slot in `AGENTS.md`'s "Project identity" block, then update any Airtable button formulas that embed the old host.
- **`RECORD_ID()` starts returning something different** → check the Airtable formula docs; the formula lives in the button field.

### Verifying a button formula

1. Open the button field's URL formula box and paste the formula.
2. Airtable usually shows a "Test" or "Preview" — use it on a known row.
3. Save the button. Click it on a real row.
4. The browser address bar shows the **resolved** URL. That is ground truth: if `recordId=` is empty or the `<<…>>` is visible, the formula is wrong.
5. The Modal page should show "X Triggered" with a run id. If it shows `Missing or invalid Airtable record id: '<>'`, the `RECORD_ID()` formula is missing or has a typo.

### Related

- `AGENTS.md` "Project identity" block — home of the deployed `Modal bridge URL` (filled after the first `relay_deploy_modal`).
- `modal_bridge.py` — the receiving side. `ALLOWED_TASKS`, `TASK_REQUIRES_RECORD_ID`, and the `recordId` validation.
- `src/trigger/*.ts` — the Trigger.dev task implementations. They use `RECORD_ID()` server-side to look up the row.
- the `modal-agent` — owns `modal_bridge.py`; coordinates with this agent when a button is added.

## Repo-specific contract

- `BASE_ID` and table ids live in `src/schema.ts` under `TABLE.*`; `F.*` field-name constants are the contract — every read/write goes through them; `scripts/migrate-airtable.ts` is idempotent (lists existing fields, skips them).
- Run migrations with `npm run migrate`. (There is **no** `relay_*` migration tool — by design. This agent owns `npm run migrate` and hand-edits `scripts/migrate-airtable.ts`.)

## Workflow

1. **Read the contract and docs.**
   - Load `src/schema.ts`.
   - Load `scripts/migrate-airtable.ts`.
   - Use the `airtable-web-api` skill to confirm the correct Meta API field type names and payload shapes.

2. **Plan the change.**
   - Add or update `F.*` constants in `src/schema.ts` by calling **`relay_add_schema_field`** with `namespace: "F"`. Add or update `TABLE.*` entries by calling it with `namespace: "TABLE"`. **Do not hand-edit `src/schema.ts` constants** — the `as const` shape is tool-enforced.
   - Update `scripts/migrate-airtable.ts` by hand to create missing fields (skip existing) — this is this agent's hand-owned file (no `relay_*` migration tool, by design).
   - If the change involves a Button field (e.g. wiring a new button to the Modal bridge), follow the Modal bridge URL conventions above and paste the **formula** (e.g. `…&recordId=" & RECORD_ID()`), not a resolved URL, into the Airtable button's URL formula box. Task-only buttons are plain URL strings; row-scoped buttons must use `RECORD_ID()`.

3. **Implement.**
   - Keep field names consistent between `F.*`, `TABLE.*`, and the migration script.
   - Use Airtable field type names accepted by the Meta API.
   - Preserve idempotency: check existing fields before creating.

4. **Validate.**
   - Run `npm run migrate` and report the result.
   - Call **`relay_test`** if TypeScript files changed.

5. **Report.**
   - Return the added/updated `F.*` and `TABLE.*` entries and any migration output.

## Cheat sheet — common Airtable operations

Curated quick reference; the `airtable-web-api` skill has full payloads/edge cases.

1. **List records** — `GET /v0/{base}/{table}?filterByFormula=&sort[]=&pageSize=100&offset=`; paginate via `offset`. Gotcha: `filterByFormula` can't reliably filter linked-record fields by record id — fetch and filter client-side.
2. **Get record** — `GET /v0/{base}/{table}/{id}` → `{id, fields, createdTime}`.
3. **Find / create-or-get** — list with a formula; if empty `POST /v0/{base}/{table}` with `{records:[{fields}]}`. Gotcha: `Name` is the default primary field.
4. **Update / upsert** — `PATCH /v0/{base}/{table}/{id}` with `{fields}`; upsert via `?performUpsert=true&fieldsToMergeOn=...`.
5. **Delete** — `DELETE /v0/{base}/{table}/{id}`.
6. **Create field (Meta)** — `POST /meta/bases/{base}/tables/{table}/fields` with `{name,type,options}`. Gotcha: add the `F.*` constant via **`relay_add_schema_field`** (namespace `F`) FIRST — the field **name** is the contract.
7. **Patch field (add choices)** — `PATCH /meta/bases/{base}/tables/{table}/fields/{fieldId}` with `{options:{choices:[...]}}` (use the shared `COLORS` palette from `scripts/migrate-airtable.ts`).
8. **Create a Button field → Modal bridge task** — type `button`, `options.url` = an Airtable formula. Row-scoped MUST end with `&recordId=" & RECORD_ID()` — never `<<recId>>`. See the "Modal bridge URL conventions" section above; paste the **formula** (not a resolved URL) into the Airtable button's URL formula box.
9. **List tables / fields (Meta)** — `GET /meta/bases/{base}/tables` (this is what `loadExisting()` uses for idempotency).
10. **Rate limit** — 5 req/sec per base; batch; `pageSize` max 100.
11. **Attachments** — `POST /v0/{base}/{record}/{field}/uploadAttachment` (≤5 MB) or by URL in the fields payload.

For full payloads/edge cases read the `airtable-web-api` skill (`records/_index.md`, `fields/_index.md`, `tables/_index.md`).

## Rules

- Never hardcode Airtable field name strings outside `src/schema.ts`.
- Do not write real Airtable tokens or base ids into new files; they come from `.env`.
- Migrations must be safe to re-run.
- Prefer small, additive schema changes over destructive renames.
- **Add `F.*` / `TABLE.*` constants via `relay_add_schema_field` — never hand-edit `src/schema.ts`.** The migration script (`scripts/migrate-airtable.ts`) and `npm run migrate` remain this agent's hand-owned responsibility (no `relay_*` migration tool, by design). If `relay_add_schema_field` reports a missing anchor, do not hand-patch `src/schema.ts` — stop and tell the user the file drifted from the template.