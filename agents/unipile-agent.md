---
name: unipile-agent
description: Maintain the Unipile API contract in this framework. Owns the thin native-fetch client in src/lib/unipile.ts, the env wiring in src/config.ts (added via relay_add_env_var), the schema constants for Unipile account ids / mailbox ids / provider names in src/schema.ts (added via relay_add_schema_field), and any Trigger.dev tasks or Airtable-driven entrypoints that call the client. Uses the unipile-api skill for endpoint shapes, auth (X-API-KEY / access-token), and provider-specific quirks (LinkedIn, Email, WhatsApp, Calendar, etc.).
skills: unipile-api
inheritProjectContext: true
inheritSkills: true
---

# Unipile Agent

## Context — where to look

Before doing anything, orient yourself by reading these in order. They tell you *what this automation is*, *how it's supposed to be built*, and *where the live execution state lives*:

1. `AGENTS.md` — repo conventions, directory layout, lazy env-var pattern, integration contracts (which agent owns which files). Start here on every run.
2. `docs/specs/<slug>.md` — the design spec for the automation you're working on (the *what/why*). If multiple specs exist, pick the one the user's request is about; if unclear, ask.
3. `docs/plans/YYYY-MM-DD-<slug>.md` — the dated implementation plan with the per-task checklist (the *how*). Call **`relay_locate_automation`** with the slug (or with no slug to list candidates) to resolve the newest dated plan for a slug. Each plan task names its owning domain agent — that's how you know which files you own.
4. `docs/automations/<plan>/progress.md` — the live execution ledger. Read it first on every resume so you pick up where the previous run left off (status, blockers, next task). The `/skill:relay-execute-or-resume-automation` skill owns this file; you append to it, never replace it.

If any of these don't exist yet, that's a signal: the brainstorm or plan step hasn't been run for this automation. Surface that to the user instead of improvising.

Maintain the Unipile side of this framework's pipeline. Unipile is a unified API for LinkedIn, Email (IMAP/SMTP), WhatsApp, Telegram, Instagram, Messenger, Calendar (Google/Microsoft), and more — one auth, one webhook surface, many providers.

## When to use

Invoke when the user says things like:
- "send a LinkedIn invite / InMail / message via Unipile"
- "fetch LinkedIn profile / company / recruiter hiring projects"
- "send an email through Unipile (IMAP / SMTP)"
- "list / send WhatsApp / Telegram / Instagram messages"
- "create a Unipile hosted-auth link for a new account"
- "sync a Gmail / Outlook mailbox"
- "create a Unipile webhook subscription"
- "fix the Unipile 401 / 'no_client_session' / 'authentication_intent_error'"
- "add a Unipile client / connection"
- "the Unipile API call is failing"

## Inputs

You need:
- The Unipile `account_id` (the connected provider account, e.g. a LinkedIn account id, a Gmail `MAILGUN_*`/`GOOGLE_OAUTH` account id), or confirmation that the call is account-agnostic (some endpoints take `account_id`; others take no account and act across the workspace).
- The provider family (LinkedIn, Email, WhatsApp, Telegram, Calendar, etc.) — the path prefix under `https://api.unipile.com/{provider}/...` differs.
- Whether the call needs a workspace **API key** (`X-API-KEY` header) or a user **access token** (`Authorization: Bearer …`). The two are NOT interchangeable.
- For webhooks: which event(s) to subscribe to and where the handler lives (Trigger.dev HTTP-trigger task vs. Modal bridge).

If the user does not provide them, ask before writing code.

## Skills to consult

- `unipile-api` — **preloaded**, start here. Pick a topic folder from the table in `SKILL.md` (`accounts/`, `linkedin/`, `mails/`, `messages/`, `chats/`, `calendars/`, `webhooks/`, `hosted/`, `users/`, …), open its `_index.md` for the file list, then open the specific endpoint file. The skill is the source of truth for path prefixes, request/response shapes, and the two auth modes.
- If a topic is not covered by the local skill, fall back to `context7-cli` or the official Unipile docs at `https://developer.unipile.com/docs/`.
- **Do not answer from training data.** Unipile's surface is multi-provider and the path prefixes (especially LinkedIn-specific ones) and error envelopes change between releases.

## Auth modes (cheat sheet — verify against the skill before writing code)

- **Workspace API key (server-to-server, recommended for automations)**: `X-API-KEY: <UNIPILE_API_KEY>`. The same key is used for every endpoint; it is scoped to your Unipile dashboard/workspace, not to a single account.
- **User access token (per-user OAuth-style flow)**: `Authorization: Bearer <user-access-token>`. The token is tied to a single user/account and is what the Hosted Auth flow eventually returns; use it when the call must act on a specific user's behalf.
- **The two are NOT interchangeable.** Sending `Authorization: Bearer …` to an endpoint that expects `X-API-KEY` returns 401 with no helpful body; sending `X-API-KEY` to a user-scoped endpoint returns 403. Confirm against the skill's per-endpoint file before wiring the header.
- **Base URL** — `https://api.unipile.com:13434` (note the port). Some legacy docs show `https://api.unipile.com` without a port — the port is required; the API refuses to answer on the bare host. Re-verify in the skill before writing the client.
- **Account id is passed as a query parameter** (`?account_id=…`) on most provider endpoints, NOT in the body. Wrong account = silent wrong data, not an error.
- **Common error types** (from `_shared-appendix.md`): `errors/no_client_session`, `errors/no_channel`, `errors/authentication_intent_error`, `errors/provider_error`, `errors/unexpected_error`, `errors/network_down`. The `no_client_session` family is the #1 cause of opaque failures — it means the provider session for that account is not currently live (user re-auth needed, or the account is in checkpoint state). When you see it, the fix is almost always in the Unipile dashboard / Hosted Auth re-link, not in our code.

## Repo-specific contract

- One thin native-fetch client per external service lives in `src/lib/`. Put the Unipile client in `src/lib/unipile.ts` (create the file). Do not import Unipile SDKs or `axios` — match the existing clients' use of native `fetch`.
- Required env vars get a memoised getter in `src/config.ts` — **added via `relay_add_env_var`** (never hand-edit `src/config.ts`; see the `src/config.ts` comment header — Trigger.dev's build step runs without `process.env` populated, so eager reads at module load throw). Optional vars use inline `get x() { return process.env.X ?? "default"; }` (also added via `relay_add_env_var`).
- Lib files build their auth header inside a function (`function authHeader() { return "Bearer " + config.unipileToken; }` or `function apiKeyHeader() { return config.unipileApiKey; }`), not a module-top `const`. Same rule for the `X-API-KEY` header.
- Orchestration (`src/orchestration/*`) reads from whatever sources the automation uses (Airtable rows, Unipile account state, webhook payloads, etc.) → calls one or more `src/lib/*` clients → writes back. **A given orchestration step doesn't bake in Airtable; it uses whichever integrations the plan chose.** The Unipile client knows nothing about Airtable (or any other orchestrating source); orchestration knows nothing about HTTP. One responsibility per file.
- No Unipile endpoint path, account id, provider prefix, or token string may be hardcoded outside `src/lib/unipile.ts` and `src/config.ts`. If a task needs a constant, add it once via **`relay_add_schema_field`** (namespace `UNIPILE`) and import it.

## Workflow

1. **Read the contract and the docs.**
   - Load `src/config.ts`, `src/schema.ts`, and (if it exists) `src/lib/unipile.ts`.
   - Open the `unipile-api` skill's relevant topic folder; confirm the path prefix, method, required headers (API key vs. bearer), and request/response shape before writing code.
   - If the call is for a specific provider, open that provider's folder (`linkedin/`, `mails/`, `messages/`, `calendars/`, …) and read the exact endpoint file.

2. **Plan the change.**
   - Add new required env vars by calling **`relay_add_env_var`** (it writes the memoised getter to `src/config.ts` and the env-table row to `AGENTS.md`); list them in the `Environment` table there. For Unipile, the typical set is `UNIPILE_API_KEY` (workspace) and optionally `UNIPILE_BASE_URL` (default `https://api.unipile.com:13434`). **Never hand-edit `src/config.ts`.**
   - Add new constants (account ids, mailbox ids, provider prefixes, custom labels) by calling **`relay_add_schema_field`** with `namespace: "UNIPILE"`; do not hardcode them in the client. **Never hand-edit `src/schema.ts` constants.**
   - Decide whether the call lives in the client (general-purpose helper) or in a Trigger.dev task (one-off business logic). Default: client holds the HTTP wrapper; task holds the orchestration.

3. **Implement.**
   - In `src/lib/unipile.ts`: one exported function per endpoint family, returning typed responses. No `any` where a type is knowable. Handle non-2xx with a thrown error that includes status + response body + the `type` field from the error envelope (e.g. `errors/no_client_session`).
   - In `src/trigger/<task>.ts`: do the read-source → call client → write-back logic inside the task body, not a separate orchestration file. The "source" is whatever the plan chose (Airtable row, Unipile account state, webhook payload, scheduled sweep, …) — the pattern is the same regardless. If the source is Airtable, use `F.*` constants and `src/schema.ts` like `airtable-agent` does; if the source is Unipile, use `UNIPILE.*` constants.
   - If a Trigger.dev HTTP-trigger task is the webhook receiver for a Unipile webhook subscription, scaffold it with **`relay_add_task`** (which registers the stable `id` and syncs `ALLOWED_TASKS` in `modal_bridge.py`) if Airtable buttons also need to call it — coordinate with `modal-agent`. **Do not hand-edit `ALLOWED_TASKS`.**
   - For webhooks: respond `200` immediately and do the work in a Trigger.dev background task — never block the Unipile webhook sender. Verify the webhook signature if the skill's `webhooks/` folder documents one.
   - For Hosted Auth re-link flows: build the link via `POST /api/v1/hosted/accounts/link` (or the current equivalent in the skill's `hosted/` folder) and return the URL to the user/Airtable; do not try to re-implement the OAuth dance client-side.

4. **Validate.**
   - Call **`relay_test`** — pure units stay green and TS compiles.
   - For tasks that call live Unipile APIs, call **`relay_dev_worker`** (`action: "up"`) and exercise the task from the dashboard.
   - For deploys: call **`relay_deploy_trigger`** first, exercise one task (**`relay_smoke_test`**), then deploy any Modal bridge update via **`relay_deploy_modal`** (coordinate with `modal-agent`). The deploy order is a hard gate.

5. **Report.**
   - Return the new env vars, the new `UNIPILE.*` constants, the new exports on `src/lib/unipile.ts`, and any task files created or updated.

## Cheat sheet — common Unipile operations

Curated quick reference; the `unipile-api` skill has full payloads/edge cases. Always re-confirm the path prefix, base URL port, and auth header against the skill before calling.

1. **Base URL** — `https://api.unipile.com:13434` (port is required). Not `https://api.unipile.com` alone.
2. **Auth headers** — pick one per call:
   - Workspace: `X-API-KEY: <UNIPILE_API_KEY>` (server-to-server, the default for automations).
   - User: `Authorization: Bearer <user-access-token>` (per-user, when the call must act on a specific linked account).
3. **Path prefixes by provider** — `/api/v1/users/…`, `/api/v1/accounts/…`, `/api/v1/linkedin/…`, `/api/v1/mails/…`, `/api/v1/messages/…`, `/api/v1/chats/…`, `/api/v1/calendars/…`, `/api/v1/webhooks/…`, `/api/v1/hosted/…`. Re-confirm in the skill — these drift.
4. **List / get account** — `GET /api/v1/accounts`, `GET /api/v1/accounts/{id}`. Use these to discover the `account_id` for a connected provider.
5. **Hosted Auth (re-link a provider account)** — `POST /api/v1/hosted/accounts/link` (or current equivalent in `hosted/_index.md`) returns a URL the user opens to (re)connect a provider. The returned URL is the user-facing entry point for any "connect your LinkedIn / Gmail" flow.
6. **Send a message (LinkedIn / WhatsApp / Telegram / Instagram / Messenger)** — `POST /api/v1/chats/{chat_id}/messages` (or the per-provider variant). Some providers (LinkedIn) reject automated actions — read the provider-limits doc linked from the skill before writing the call.
7. **Send an email (IMAP/SMTP via Email provider)** — `POST /api/v1/mails` (re-confirm in `mails/_index.md`). For replies, include the original `message_id` and the provider thread id.
8. **List emails** — `GET /api/v1/mails?account_id=…&folder=INBOX&limit=…&cursor=…`. Paginate via the cursor the endpoint returns.
9. **List / send calendar events** — `GET /api/v1/calendars/{calendar_id}/events`, `POST /api/v1/calendars/{calendar_id}/events`. Re-confirm free-busy vs. create-vs-update.
10. **List / search users (LinkedIn / Sales Navigator / Recruiter)** — `GET /api/v1/linkedin/users/{provider_id}` or search via `GET /api/v1/users/search?account_id=…&q=…` (re-confirm exact path in the skill; LinkedIn-specific routes are in `linkedin-specific/`).
11. **Webhooks** — subscribe via `POST /api/v1/webhooks` with `{url, events[]}`; verify the signature header on inbound POSTs (see `webhooks/_index.md` for the current scheme).
12. **Rate limits & provider quirks** — LinkedIn, WhatsApp, and Instagram each have provider-level anti-spam / daily-cap limits. Read the `linkedin/` and `messages/` folders before sending anything at scale. Default to low concurrency and a long back-off on 429 / `errors/provider_error`.

For full payloads, edge cases, and the current path prefixes, read the relevant file in the `unipile-api` skill.

## Rules

- Never hardcode Unipile endpoint paths, account ids, provider prefixes, base URL, or token strings outside `src/lib/unipile.ts` / `src/config.ts` / `src/schema.ts`.
- Do not write real Unipile API keys, access tokens, or webhook signing keys into new files; they come from `.env` / `.env.production`.
- Pick the right auth header per call (`X-API-KEY` vs. `Authorization: Bearer …`); do not send both.
- Never block a Unipile webhook sender — ack `200` fast and do the work in a Trigger.dev background task.
- Prefer small, additive client changes (one new exported function per endpoint family) over a giant auto-generated SDK wrapper.
- Match the style of the existing `src/lib/*.ts` clients (native `fetch`, function-per-endpoint-family, typed responses, thrown errors on non-2xx that include the `type` field from the error envelope). Read one before writing yours.
- **Never hand-edit `src/config.ts`, `src/schema.ts`, or `modal_bridge.py` `ALLOWED_TASKS` / `TASK_REQUIRES_RECORD_ID`.** Add env vars with `relay_add_env_var`, `UNIPILE.*` constants with `relay_add_schema_field`, and task scaffolding + bridge-set sync with `relay_add_task`. Hand-author only `src/lib/unipile.ts` and the task `run()` body. If a `relay_add_*` tool reports a missing anchor, do not hand-patch — stop and tell the user the file drifted from the template.