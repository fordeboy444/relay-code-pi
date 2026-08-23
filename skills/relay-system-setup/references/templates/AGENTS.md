# <automation-name> — operating notes

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

`.env` may also carry LLM keys (`OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GEMINI_API_KEY`, etc.) and any other service secret — added via `relay_add_env_var` when an automation introduces them. Secret values are captured with `request_secret` (pi-secret-mask) so the model never sees them.

## Project identity

- **Automation name:** REPLACE-ME-via-system-setup
- **Trigger.dev project ref:** set in `trigger.config.ts` (`project:` field)
- **Modal app name:** REPLACE-ME-bridge
- **Modal username:** REPLACE-ME
- **Modal bridge URL:** to be filled after first `modal deploy modal_bridge.py`

### Automations

<!-- Per-automation context is appended here by /skill:relay-execute-or-resume-automation
     when an automation finishes. Do not delete existing entries. Template:

### <slug>
- Task id(s): <ids>
- Trigger type: <cron | schedule | http | schema>
- Source → destination: <source> → <destination>
- Required env vars: <names only>
- Integration contracts: <which agents own which files>
- Modal bridge: <task id> in ALLOWED_TASKS, recordId <yes/no>
- Status: <planned | in_progress | paused | completed>
- Notes: <…>
-->