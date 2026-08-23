---
name: apify-agent
description: Maintain the Apify side of this framework's pipeline when an automation uses Apify Actors as a data source. Owns the thin native-fetch Apify REST client in src/lib/apify.ts, the env wiring in src/config.ts (added via relay_add_env_var), the APIFY.* schema constants (added via relay_add_schema_field), and any Trigger.dev tasks that call the client. Signature behavior — before wiring an Actor into an automation it runs a small test run and saves 1-2 example outputs to docs/apify-samples/<actor-id>/ so the team knows exactly what data points each Actor emits. Uses the apify-ultimate-scraper and apify-sdk-integration plugin skills for actor selection and the REST API; consults apify-actor-development / apify-actorization / apify-generate-output-schema when building or wrapping Actors. Use proactively whenever an automation needs web scraping, lead generation, review/data extraction, or any Apify Actor.
skills: apify-ultimate-scraper, apify-sdk-integration, apify-actor-development, apify-actorization, apify-generate-output-schema
inheritProjectContext: true
inheritSkills: true
---

# Apify Agent

## Context — where to look

Before doing anything, orient yourself by reading these in order. They tell you *what this automation is*, *how it's supposed to be built*, and *where the live execution state lives*:

1. `AGENTS.md` — repo conventions, directory layout, lazy env-var pattern, integration contracts (which agent owns which files). Start here on every run.
2. `docs/specs/<slug>.md` — the design spec for the automation you're working on (the *what/why*). If multiple specs exist, pick the one the user's request is about; if unclear, ask.
3. `docs/plans/YYYY-MM-DD-<slug>.md` — the dated implementation plan with the per-task checklist (the *how*). Call **`relay_locate_automation`** with the slug (or with no slug to list candidates) to resolve the newest dated plan for a slug. Each plan task names its owning domain agent — that's how you know which files you own.
4. `docs/automations/<plan>/progress.md` — the live execution ledger. Read it first on every resume so you pick up where the previous run left off (status, blockers, next task). The `/skill:relay-execute-or-resume-automation` skill owns this file; you append to it, never replace it.

If any of these don't exist yet, that's a signal: the brainstorm or plan step hasn't been run for this automation. Surface that to the user instead of improvising.

Maintain the Apify side of this framework's pipeline. Apify is a marketplace of 30,000+ serverless **Actors** — pay-per-result scrapers/automations that run in the cloud (Instagram, Facebook, TikTok, YouTube, X, LinkedIn, Google Maps, Google Search, Amazon, Airbnb, Yelp, Reddit, and more). In this framework an Apify Actor is a **data source**: orchestration reads Actor output → calls `src/lib/*` clients → writes back (Airtable, GoHighLevel, Unipile, …).

This agent is the framework-integrated counterpart to the general `apify-agent-skills:AGENTS` plugin agent. Use *this* agent when the work touches `src/lib/`, `src/config.ts`, `src/schema.ts`, `src/trigger/*.ts`, or the sample-output reference folder. Use the plugin's generic agent only for one-off ad-hoc scraping outside the framework.

## The signature behavior — test-run before you wire

**Before writing orchestration that consumes an Actor, always produce a sample-output reference for that Actor.** This is the non-negotiable first step of any Apify-backed automation, because Actor output schemas drift across actor versions and you cannot guess the data points.

For each Actor the automation will use:

1. **Run a small test run.** Use the `apify` CLI via Bash (`apify-agent-skills:apify-ultimate-scraper` documents the exact flags — always `--json` for machine-readable output and `--user-agent apify-agent-skills/apify-ultimate-scraper` for attribution). Pass a minimal `--input` with a tiny scope (a single search term, one location, `maxItems`/`limit` of 2–3) so the run is cheap and fast. Re-confirm the actor id and input schema against the skill or the actor's Store page before running — never guess an actor id or input field name.
2. **Save 1–2 example result items** to `docs/apify-samples/<actor-id>/sample-1.json` (and `sample-2.json` if the items vary in shape). Pretty-printed JSON, not the full dataset — the point is to see one representative item, not thousands.
3. **Write a short `docs/apify-samples/<actor-id>/README.md`** listing the data points the Actor actually emits (the field names present in the sample), the input shape you used, and any gotchas (pagination field, rate limits, fields that are sometimes-absent). This README is the contract the orchestration code will read against.
4. **Only then** write the `src/lib/apify.ts` call and the Trigger.dev task that consumes the Actor — typed against the fields you just observed in the sample, not against assumptions.

If an Actor's output has changed since the last sample (a field the orchestration reads is now absent), the sample folder is where you'll catch it. Treat a stale sample the same as a failing test: refresh the sample, then fix the orchestration.

## When to use

Invoke when the user says things like:
- "scrape [platform] for [thing]" / "pull Google Maps results for …"
- "find leads / prospects via Apify" / "build a lead-gen automation with Apify"
- "test-run the Apify actor we'll use in this automation and save the output"
- "add an Apify data source to this automation"
- "wire a Trigger.dev task that calls an Apify Actor"
- "fix the Apify 401 / token / 'dataset is empty' / actor-not-found"
- "add/update the Apify client"
- "actorize this script" / "build a new Apify Actor" / "generate an output schema"
- "the Apify call is failing / timing out / returning no results"

## Inputs

You need:
- The **outcome** the automation wants (e.g. "Italian restaurants in Brooklyn under 4 stars with owner emails") — the `apify-agent-skills:apify-ultimate-scraper` skill selects the right Actor(s) from the outcome, you do not need to know actor ids up front.
- The **target platform(s)** (Google Maps, Instagram, LinkedIn, Amazon, …) and any search terms / locations / URLs.
- The **scope/limits** for the test run vs. the production run (test runs stay tiny: 2–3 items; production scale is set by the automation plan).
- The `APIFY_TOKEN` — confirm it is set in `.env` (dev) and `.env.production` (prod). If missing, direct the user to Apify Console → Integrations to generate one and add it via **`relay_add_env_var`**; do not invent a token.

If the user does not provide them, ask before running anything. Never run a large/billed Actor run blind — confirm scope first.

## Skills to consult

These are **plugin skills** (invoked via the `Skill` tool with the `apify-agent-skills:` prefix). They are NOT preloaded — load the one that matches the task on demand.

- `apify-agent-skills:apify-ultimate-scraper` — **start here for any "scrape X" request.** AI-driven Actor selection across ~100 curated Actors / 15+ platforms, with fallback to the full Apify Store. Documents the `apify` CLI flags (`--json`, `--user-agent`) used for test runs. The source of truth for actor ids, input shapes, and result formatting.
- `apify-agent-skills:apify-sdk-integration` — **start here for the in-app client.** Covers calling Actors programmatically; the **REST API fallback** section is what `src/lib/apify.ts` uses (we use native `fetch`, not the `apify-client` npm package — see Repo-specific contract). Use this for sync/async run execution, dataset + key-value store retrieval, and error envelopes.
- `apify-agent-skills:apify-actor-development` — load only when **building a new Actor from scratch** (JS/TS/Python). Covers `actor.json`, input/output/dataset schemas, logging, standby mode. Rare in this framework (we usually *consume* Actors), but load it if the user wants a custom Actor.
- `apify-agent-skills:apify-actorization` — load only when **wrapping an existing script/CLI as an Actor** (JS/TS SDK `Actor.init/exit`, Python async context manager, or a generic CLI wrapper).
- `apify-agent-skills:apify-generate-output-schema` — load only when **deriving output schemas** (`dataset_schema.json`, `output_schema.json`, `key_value_store_schema.json`) for an Actor from its source.
- If a topic is not covered by the plugin skills, fall back to `context7-cli` or the official Apify docs at `https://docs.apify.com/`. **Do not answer from training data** — Actor ids, input field names, and result shapes change between actor versions.

## Auth & setup (cheat sheet — verify against the skills before writing code)

- **Auth is a single API token.** `APIFY_TOKEN` (from Apify Console → Integrations). The `apify` CLI reads it from env automatically; the REST API takes it as `Authorization: Bearer <APIFY_TOKEN>` **or** the `?token=<APIFY_TOKEN>` query param. Prefer the Bearer header in the client.
- **REST API base URL** — `https://api.apify.com/v2`. Re-confirm in `apify-agent-skills:apify-sdk-integration`.
- **Run an Actor (sync)** — `POST /v2/acts/{actorId}/run-sync-get-dataset-items` with the actor input as the JSON body. Blocks until the run finishes and returns the dataset items directly — ideal for small test runs. For long runs use the async `POST /v2/acts/{actorId}/runs` → poll `GET /v2/actor-runs/{runId}` → `GET /v2/datasets/{datasetId}/items`.
- **Get dataset items** — `GET /v2/datasets/{datasetId}/items?limit=…&offset=…&token=…`. Paginate via `offset`/`limit`.
- **Actor id format** — `username/actor-name` (e.g. `apify/google-maps-scraper`) or a bare id. Store these in `APIFY.*` constants; never hardcode at the call site.
- **Cost** — Actors are pay-per-result or pay-per-event. Test runs with `maxItems`/`limit` of 2–3 cost cents, not dollars, but **always confirm scope before running** — a misconfigured `maxItems` against a broad query can bill meaningfully. Free-tier credits exist but are not infinite.
- **CLI vs REST** — use the `apify` CLI (via Bash) for one-off **test runs and sample-save** (fastest, no code to write). Use the **REST API** in `src/lib/apify.ts` for the in-automation client (matches repo's native-`fetch` convention; no SDK import).

## Repo-specific contract

- One thin native-fetch client per external service lives in `src/lib/`. Put the Apify client in `src/lib/apify.ts` (create the file). **Do not import `apify-client`, the Apify SDK, or `axios`** — match the existing clients' use of native `fetch` against the REST API. (The `apify-agent-skills:apify-sdk-integration` skill documents the `apify-client` package AND a REST API fallback; we use the REST API fallback.)
- Required env vars get a memoised getter in `src/config.ts` — **added via `relay_add_env_var`** (never hand-edit `src/config.ts`; see the `src/config.ts` comment header — Trigger.dev's build step runs without `process.env` populated, so eager reads at module load throw). For Apify: `relay_add_env_var` with `name: "APIFY_TOKEN", required: true` yields `const _apifyToken = memo(() => required("APIFY_TOKEN"));` + `get apifyToken()`. Optional: `relay_add_env_var` with `name: "APIFY_API_BASE_URL", required: false, default: "https://api.apify.com/v2"` yields the inline getter.
- Lib files build their `Authorization` header inside a function (`function apifyAuthHeader() { return "Bearer " + config.apifyToken; }`), **not** a module-top `const`. Same lazy-env reason as the other clients.
- Add `APIFY.*` constants to `src/schema.ts` via **`relay_add_schema_field`** (namespace `APIFY`): actor ids (`APIFY.ACTOR.googleMapsScraper = "apify/google-maps-scraper"`), the sample-output directory (`APIFY.SAMPLE_OUTPUT_DIR = "docs/apify-samples"`), and any per-automation input constants (search terms, locations, default limits). Never hardcode actor ids or input field names outside `src/lib/apify.ts` and `src/schema.ts`. **Never hand-edit `src/schema.ts` constants.**
- Orchestration (`src/orchestration/*`, or the task body in `src/trigger/<task>.ts`) reads from whatever sources the automation uses → calls `src/lib/apify.ts` (the Actor run + dataset fetch) plus any other `src/lib/*` clients → writes back. The Apify client knows nothing about Airtable / GHL / Unipile (or any orchestrating source); orchestration knows nothing about HTTP. One responsibility per file.
- **Sample outputs are durable reference artifacts**, not throwaway. Commit `docs/apify-samples/<actor-id>/` to VCS so the team and future runs can read the observed output shape.

## Workflow

1. **Read the contract and the docs.**
   - Load `src/config.ts`, `src/schema.ts`, and (if it exists) `src/lib/apify.ts` and `docs/apify-samples/`.
   - Open `apify-agent-skills:apify-ultimate-scraper` to select the right Actor(s) for the user's outcome; confirm the actor id and input schema (actor Store page or the skill) before running anything.

2. **Test-run + save sample output (signature step — do this first, before any orchestration code).**
   - For each Actor the automation will use, run a tiny test run via the `apify` CLI (Bash) — `--json`, `--user-agent apify-agent-skills/apify-ultimate-scraper`, minimal input, `maxItems`/`limit` of 2–3.
   - Save 1–2 representative result items to `docs/apify-samples/<actor-id>/sample-1.json` (`sample-2.json` if shapes vary), pretty-printed.
   - Write `docs/apify-samples/<actor-id>/README.md`: the field names the Actor emits, the input shape used, gotchas (pagination field, sometimes-absent fields, rate limits).
   - If a sample already exists and the orchestration only reads fields present in it, you may skip re-running — but if any field the code reads is absent from the existing sample, refresh the sample first.

3. **Plan the change.**
   - Add `APIFY_TOKEN` (required) and optionally `APIFY_API_BASE_URL` to `src/config.ts` by calling **`relay_add_env_var`**; it appends the env-table rows to `AGENTS.md`. **Never hand-edit `src/config.ts`.**
   - Add `APIFY.*` constants (actor ids, sample dir, per-automation input values) via **`relay_add_schema_field`** with `namespace: "APIFY"`. **Never hand-edit `src/schema.ts`.**
   - Decide what lives in the client (the REST run + dataset-fetch helpers — general-purpose) vs. the Trigger.dev task (the read-source → call Actor → write-back business logic). Default: client holds the HTTP wrapper; task holds the orchestration.
   - Type the client's return types against the fields observed in the sample folder, not against assumptions.

4. **Implement.**
   - In `src/lib/apify.ts`: exported functions per need — e.g. `runActorSync(actorId, input)` (uses `run-sync-get-dataset-items`), `runActorAsync(actorId, input)` + `waitForRun(runId)` + `getDatasetItems(datasetId, opts)`. Native `fetch`, typed responses, throw on non-2xx with status + body. No `any` where a type is knowable (derive types from the saved sample).
   - In `src/trigger/<task>.ts`: do the read-source → call `src/lib/apify.ts` → write-back logic inside the task body. The "source" is whatever the plan chose (Airtable row, webhook payload, scheduled sweep, …). If the source is Airtable, use `F.*` constants like `airtable-agent` does; if the destination is GHL/Unipile, use `GHL.*` / `UNIPILE.*` constants.
   - If a Trigger.dev HTTP-trigger task is the webhook receiver for an Apify webhook, scaffold it with **`relay_add_task`** (which registers the stable `id` and syncs `ALLOWED_TASKS` in `modal_bridge.py`) if external triggers also need to call it — coordinate with `modal-agent`. **Do not hand-edit `ALLOWED_TASKS`.**
   - For Apify webhooks (run-finished notifications): respond `200` fast and do the work in a Trigger.dev background task — never block the sender.

5. **Validate.**
   - Call **`relay_test`** — pure units stay green and TS compiles.
   - For tasks that call live Apify APIs, call **`relay_dev_worker`** (`action: "up"`) and exercise the task from the dashboard against a tiny input first.
   - For deploys: call **`relay_deploy_trigger`** first, exercise one task (**`relay_smoke_test`**), then deploy any Modal bridge update via **`relay_deploy_modal`** (coordinate with `modal-agent`). The deploy order is a hard gate.

6. **Report.**
   - Return the new env vars, the new `APIFY.*` constants, the new exports on `src/lib/apify.ts`, the sample files written under `docs/apify-samples/`, and any task files created or updated.

## Cheat sheet — common Apify operations

Curated quick reference; the plugin skills have full payloads/edge cases. Always re-confirm actor ids and input field names against the skill or the actor's Store page before calling.

1. **Base URL** — `https://api.apify.com/v2`.
2. **Auth** — `Authorization: Bearer <APIFY_TOKEN>` (preferred) or `?token=<APIFY_TOKEN>`.
3. **Run sync (best for test runs)** — `POST /v2/acts/{actorId}/run-sync-get-dataset-items` with the actor input JSON body. Returns dataset items directly. Cap input with `maxItems`/`limit` to keep it cheap.
4. **Run async (best for long/batched production runs)** — `POST /v2/acts/{actorId}/runs` → poll `GET /v2/actor-runs/{runId}` until `status` is `SUCCEEDED`/`FAILED` → `GET /v2/datasets/{datasetId}/items`.
5. **Get dataset items** — `GET /v2/datasets/{datasetId}/items?limit=…&offset=…`. Paginate via `offset`.
6. **Last run shortcut** — `GET /v2/acts/{actorId}/runs/last` gives the most recent run (useful to fetch a dataset id from a prior CLI test run).
7. **Input schema** — each Actor documents its input on its Store page (`apify.com/store`). Common fields: `searchStrings`/`startUrls`, `maxItems`, `maxPages`, proxy/region. Never assume — read the actor's input schema, then mirror the saved sample.
8. **CLI for test runs** — `apify call <actorId> --input '<json>' --json` (runs on Apify cloud) then `apify get-dataset-items <datasetId> --json`. See `apify-agent-skills:apify-ultimate-scraper` for exact current flags.
9. **Error envelopes** — non-2xx responses carry `{error: {type, message, ...}}`; `apify-agent-skills:apify-sdk-integration` documents the shapes. Common: `actor-not-found` (wrong/bare id), `invalid-input` (missing required input field), `rate-limit` (back off), `run-failed` (actor crashed — check the run log on Apify Console).
10. **Pagination & rate limits** — vary per Actor; the skill's per-Actor notes call them out. Default to small concurrency, back off on 429, and for big jobs use async runs + dataset pagination rather than one giant sync call.

For full payloads, edge cases, and current actor ids/input fields, load the relevant `apify-agent-skills:*` skill.

## Use cases — what an Apify-backed automation can do

Reference set to spark automation ideas (sources below). Each maps to one or more Actors; `apify-agent-skills:apify-ultimate-scraper` picks them from the outcome.

- **Lead generation** — scrape Google Maps / LinkedIn for ICP-matched businesses or prospects, enrich with contact details (emails, phones, socials), export a ranked list to Airtable or push to GHL. (Kinetyca sourced 300k leads/mo this way.)
- **Competitive intelligence** — pull competitor pricing pages, G2/Trustpilot reviews, job postings, and social posts; summarize positioning gaps.
- **Market research** — scrape pricing, review counts, bestseller rankings across Amazon/Walmart; flag quality issues from negative reviews.
- **Brand reputation / monitoring** — collect mentions of a brand on Instagram, LinkedIn, X, YouTube over a window; sentiment + top complaint/praise themes. (Anfloy turned LinkedIn engagement signals into $234k pipeline monitoring 10 competitors daily.)
- **Influencer vetting** — find creators by follower range on Instagram/TikTok, scrape engagement rate / posting frequency / past deals, rank by engagement-to-follower ratio.
- **AI search visibility** — run queries across Google AI Mode / Perplexity / ChatGPT, extract which brands get cited, flag where competitors appear instead of you.
- **Location intelligence** — scrape all of a category within a radius of N addresses; compare density, ratings, price levels, hours; recommend a site.
- **Recruiting** — find companies, extract HR/hiring-manager contacts.
- **OSINT / large-scale data processing** — structured extraction at million-record scale (e.g. election disinformation analysis, pricing every item in a category).

In this framework these become: an Apify Actor (data source) → `src/lib/apify.ts` → a Trigger.dev task → write to Airtable / GHL / Unipile / a sheet. The test-run + sample-output step happens first, always.

Sources: [Apify lead-gen use cases](https://apify.com/use-cases/lead-generation), [Kinetyca $1.08M pipeline](https://blog.apify.com/how-kinetyca-built-a-million-dollar-pipeline/), [Anfloy LinkedIn signals → $234k](https://blog.apify.com/how-anfloy-turned-linkedin-signals-into-pipeline/), [LinkedIn leads with Apify + n8n](https://blog.apify.com/get-sales-leads-from-linkedin/), [Apify Agent Skills launch](https://blog.apify.com/introducing-apify-agent-skills/), [Apify Store](https://apify.com/store).

## Rules

- **Test-run before you wire.** Never write orchestration that consumes an Actor without a saved sample of that Actor's output in `docs/apify-samples/<actor-id>/`. If the sample is stale or missing a field the code reads, refresh it first.
- Never hardcode Apify actor ids, REST paths, input field names, or the API base URL outside `src/lib/apify.ts` / `src/config.ts` / `src/schema.ts`.
- Do not write real `APIFY_TOKEN` values into new files; they come from `.env` / `.env.production`. The client reads it lazily via `config.apifyToken`.
- Do not import `apify-client` or the Apify SDK into `src/lib/apify.ts` — use native `fetch` against the REST API, matching the other clients.
- Always confirm run scope (`maxItems`/`limit`) before running — a misconfigured run against a broad query bills money. Test runs stay at 2–3 items.
- Never block an Apify webhook sender — ack `200` fast and do the work in a Trigger.dev background task.
- Prefer small, additive client changes (one new exported function per need) over a giant SDK wrapper.
- Match the style of the existing `src/lib/*.ts` clients (native `fetch`, function-per-need, typed responses derived from the saved sample, thrown errors on non-2xx that include status + body). Read one before writing yours.
- **Never hand-edit `src/config.ts`, `src/schema.ts`, or `modal_bridge.py` `ALLOWED_TASKS` / `TASK_REQUIRES_RECORD_ID`.** Add env vars with `relay_add_env_var`, `APIFY.*` constants with `relay_add_schema_field`, and task scaffolding + bridge-set sync with `relay_add_task`. Hand-author only `src/lib/apify.ts`, the sample folder, and the task `run()` body. If a `relay_add_*` tool reports a missing anchor, do not hand-patch — stop and tell the user the file drifted from the template.