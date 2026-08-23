# Fixture: the ## Environment region of relay-code/AGENTS.md.

## Environment

Values in `.env` (dev) and `.env.production` (prod), both gitignored. `src/config.ts` reads these and throws on missing **required** vars. `TRIGGER_PROJECT_ID` is **not** an env var — it lives in `trigger.config.ts` (`project:` field), read by the Trigger.dev CLI. Never pass `--project-ref` on the CLI.

| Var | Required? | Notes |
|---|---|---|
| `TRIGGER_SECRET_KEY` | yes | dev `tr_dev_…`, prod `tr_prod_…` |
| `AIRTABLE_TOKEN` | if using Airtable | Airtable control plane |
| `UNIPILE_API_BASE` / `UNIPILE_API_KEY` | if using Unipile | base URL (port required) + `X-API-KEY` |
| `GHL_PRIVATE_INTEGRATION_TOKEN` / `GHL_LOCATION_ID` | if using GoHighLevel | LeadConnector auth |
| `APIFY_TOKEN` | if using Apify | Apify REST API |
| `TRIGGER_BASE_URL` | no | Modal bridge only; default `https://api.trigger.dev` |

`.env` may also carry LLM keys (`OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GEMINI_API_KEY`, etc.) — these are not wired into code by the template.

## Next section after the table