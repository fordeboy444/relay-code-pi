---
name: composio-api
description: "Reference for the Composio API. Use whenever the user asks about the Composio HTTP API, REST endpoints, webhooks, authentication/API tokens, or needs developer/product documentation for Composio. Cite source URLs when giving API details."
---

# Composio Skill

You are a helpful assistant with deep knowledge of **Composio**.

## Local CLI on this machine (WSL)

The `composio` CLI exists only inside WSL Ubuntu. There is no Windows binary. Invoke it directly as root — do not modify `$PATH`:

```powershell
wsl -d Ubuntu -u root -- /root/.local/bin/composio <command>
```

### Login flow (headless-safe)

1. Run `composio login --no-wait --no-skill-install`. It prints a URL of the form `https://dashboard.composio.dev/?cliKey=<uuid>` and caches the pending key.
2. Show the URL to the user. They open it in the Windows browser and log in.
3. Run `composio login --poll` in the background. It polls for up to 10 minutes, then saves the credentials and prints the account JSON (email, org, switch command).

### Local CLI notes

- Binary location: `/root/.local/bin/composio`, a symlink to `/root/.composio/composio`. It is on root's PATH only.
- `composio whoami` prints nothing with exit 0 when logged out, and prints JSON when logged in. Use `--version` to check the binary works.
- Never run `bash -lc "export PATH=$PATH:..."` from PowerShell. The Windows PATH contains spaces, the escaping breaks, and the export fails. Call the binary by absolute path instead.
- Version 0.4.0 as of 2026-08-28. Logged in as taroforde12@gmail.com, org `taroforde`.

### Tool and trigger inventories

- `composio tools list <toolkit>` — full JSON list of a toolkit's tools (slug, name, description, tags). This command is hidden from the default `--help`; it appears only in `--help full`.
- `composio tools info <slug>` — tool summary plus cached schema.
- `composio triggers list <toolkit>` — trigger types for a toolkit.
- Do not use `composio search` for a full inventory. It is semantic and caps near 15 results per query, so it misses tools.

### Executing tools (CLI)

```powershell
wsl -d Ubuntu -u root -- /root/.local/bin/composio execute <SLUG> -d '{"param":"value"}'
```

- `-d` is required even when there are no arguments — pass `-d '{}'`.
- `execute <SLUG> --get-schema` prints the input schema. Read it before the first use of any tool; do not guess parameter names.
- `execute <SLUG> --dry-run` validates without executing. `--account <id>` picks one connected account.
- The CLI validates inputs and checks the connection itself; its errors tell you what to fix.
- The result wraps the provider response: check `successful: true` and the inner payload's `ok`/error fields before declaring success.

### Auth: CLI vs REST

The CLI is logged in and needs no key. Its stored key (`uak…` in `/root/.composio/user_data.json`) does **not** authenticate the REST API — `x-api-key` and `Authorization: Bearer` both return 401 `APIKey_InvalidAPIKey`. REST calls need a project API key from dashboard.composio.dev → Project Settings → API Keys, stored as `COMPOSIO_API_KEY` in the workspace `.env` (currently empty). Default to the CLI path; it covers every tool. `composio whoami` never prints a key.

### Building a toolkit skill (recipe)

Worked example: `.claude/skills/composio-telegram/` (SKILL.md + scripts/composio.sh). Pattern:

1. Inventory the toolkit: `composio tools list <toolkit>` (full list; not `search`).
2. Verify the connection by running one read-only tool (for example `<TOOLKIT>_GET_ME`), and record the connected account identity in the skill.
3. Write `SKILL.md` with: a trigger-focused `description` ("Use when the user wants any <toolkit> action..."), invocation snippets, a workflow (verify connection → pick tool → read schema → execute → check result), a full tool catalog table with each tool's gotcha, and the toolkit's error quirks.
4. Add a REST helper script only when needed; it requires the project key above. jq is not installed in WSL — parse JSON with python3.

### Windows ↔ WSL invocation gotchas

- The Bash tool mangles WSL paths (MSYS turns `/root/...` into `C:/Program Files/Git/root/...`). Use the PowerShell tool, or `wsl.exe -d Ubuntu -u root -- sh -c "..."` from Bash.
- Piping a PowerShell here-string into `wsl ... -- sh` re-adds CRLF line endings, which breaks `head -n 20` and any jq filter. For reliable hand-off, base64-encode on the PowerShell side and decode inside WSL: `[Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($s))` then `echo <b64> | base64 -d | sh`.

## Topic folders

Reference material is organized into topic folders. Pick a topic, read its folder `_index.md`, then open the specific file you need.

| Folder | Index | Description | Pages |
| --- | --- | --- | --- |
| Api Reference | [api-reference/_index.md](api-reference/_index.md) | Webhook delivery subscriptions. Outbound URLs Composio posts trigger events to, plus signing secret rotation and event-type filters. Per-OAuth-app webhook ingress endpoints. Inbound URLs the provider posts to, plus signing secret storage and verification. Trigger management and execution | 15 |
| Auth Configuration | [auth-configuration/_index.md](auth-configuration/_index.md) | Remove Composio branding from your auth flows Move Composio-managed OAuth flows off the legacy POST /api/v3/connected_accounts endpoint and onto link() before the 2026-05-08 / 2026-07-03 cutover. Inject custom credentials in headers or parameters | 5 |
| Authenticating To Composio | [authenticating-to-composio/_index.md](authenticating-to-composio/_index.md) | Choose which project resources a scoped API key can access. Authenticate requests to the Composio API with an API key | 2 |
| Authentication | [authentication/_index.md](authentication/_index.md) | Understand how Composio handles user authentication to toolkits | 1 |
| Claude Code Plugin | [claude-code-plugin/_index.md](claude-code-plugin/_index.md) | Act on 1,000+ apps from Claude Code — Slack, GitHub, Gmail, Notion, Linear, and more — with fully managed OAuth. Installs in two commands. | 1 |
| Cli | [cli/_index.md](cli/_index.md) | Use the Composio CLI inside Claude Code for knowledge work, debugging, and developer workflows. | 1 |
| Composio Connect | [composio-connect/_index.md](composio-connect/_index.md) | Add Composio tools to your AI agent via MCP | 1 |
| Configuring Sessions | [configuring-sessions/_index.md](configuring-sessions/_index.md) | Enable toolkits, set auth configs, and select connected accounts | 1 |
| Controlling Scopes | [controlling-scopes/_index.md](controlling-scopes/_index.md) | Override the default OAuth scopes Composio requests for a toolkit | 1 |
| Custom App Vs Managed App | [custom-app-vs-managed-app/_index.md](custom-app-vs-managed-app/_index.md) | Decide when to use Composio managed authentication and how to configure your own credentials | 1 |
| Errors | [errors/_index.md](errors/_index.md) | Composio API error codes, HTTP status codes, and troubleshooting guide | 1 |
| Extending Sessions | [extending-sessions/_index.md](extending-sessions/_index.md) | Call any API endpoint on a toolkit from a session and let Composio inject the authenticated credentials for you Define local tools that run in-process alongside remote Composio tools | 2 |
| General Agent With Pi | [general-agent-with-pi/_index.md](general-agent-with-pi/_index.md) | Build a general-purpose agent with Pi and Composio, then drop it into Slack so a whole team can use it. Triggers, per-user sessions, a shared workspace connection, redirected auth links, and raw API access. | 1 |
| Glossary | [glossary/_index.md](glossary/_index.md) | Definitions of key Composio terms and concepts. | 1 |
| How Composio Works | [how-composio-works/_index.md](how-composio-works/_index.md) | What Composio sessions do, and how they scope users, tools, toolkits, auth, MCP, and workbench state | 1 |
| Imessage Agent | [imessage-agent/_index.md](imessage-agent/_index.md) | Walk through an agent that texts on your behalf from your own Mac. A Composio custom toolkit wraps local iMessage in-process, and the eve provider puts it on the same session as the whole Composio catalog. | 1 |
| Importing Existing Connections | [importing-existing-connections/_index.md](importing-existing-connections/_index.md) | Pass existing API keys, bearer tokens, or other credentials into Composio so your users don't need to re-authenticate | 1 |
| Index | [index/_index.md](index/_index.md) | Give your AI agent 1000+ pre-authenticated toolkits, per-user sessions, authentication, triggers, and a sandbox, so you can ship agents that turn intent into action. Browse all toolkits supported by Composio Composio REST API and SDK reference for AI agent tool execution, authentication, and... | 4 |
| Local Sandbox Pr Reviewer | [local-sandbox-pr-reviewer/_index.md](local-sandbox-pr-reviewer/_index.md) | Composio usually runs your tools for you. A local sandbox is for when you need to run them yourself, on your filesystem, in your shell, inside your security boundary. Build a GitHub PR reviewer that runs checks in a sandbox you own and posts one grounded comment. | 1 |
| Managed Auth | [managed-auth/_index.md](managed-auth/_index.md) | Find out which toolkits work with Composio managed authentication and when you need your own credentials | 1 |
| Managing Multiple Connected Accounts | [managing-multiple-connected-accounts/_index.md](managing-multiple-connected-accounts/_index.md) | Handle users with multiple accounts for the same toolkit using multi-account mode and aliases | 1 |
| Manually Authenticating | [manually-authenticating/_index.md](manually-authenticating/_index.md) | Authenticate and manage user connections to toolkits outside of chat | 1 |
| Meta Tools | [meta-tools/_index.md](meta-tools/_index.md) | Tool Server Info: Composio connects 500+ apps—Slack, GitHub, Notion, Google Workspace (Gmail, Sheets, Drive, Calendar... Process REMOTE FILES or script BULK TOOL EXECUTIONS using Python code IN A REMOTE SANDBOX Execute bash commands in a REMOTE sandbox for file operations, data processing, and... | 7 |
| Migration Guide | [migration-guide/_index.md](migration-guide/_index.md) | Migrate to the new toolkit versioning system Learn more about Composio's next generation SDKs and how to migrate Guides for migrating to newer versions of Composio | 6 |
| Pro Tools | [pro-tools/_index.md](pro-tools/_index.md) | Pricing and limits for pro tools in Composio | 1 |
| Programmatic Auth Configs | [programmatic-auth-configs/_index.md](programmatic-auth-configs/_index.md) | Create auth configs in code and pass them to a session | 1 |
| Providers | [providers/_index.md](providers/_index.md) | Build an agent with Vercel AI SDK and enable it to use 1000+ tools with Composio. Build an agent with any TypeScript framework and enable it to use 1000+ tools with Composio. Build an agent with any Python framework and enable it to use 1000+ tools with Composio. | 15 |
| Quickstart | [quickstart/_index.md](quickstart/_index.md) | Build an AI agent with access to 1000+ tools | 1 |
| Rate Limits | [rate-limits/_index.md](rate-limits/_index.md) | Composio API rate limits by plan, rate limit headers, and best practices | 1 |
| Sandbox | [sandbox/_index.md](sandbox/_index.md) | A persistent Python sandbox where your agent writes code, calls tools programmatically, and processes data Run Composio tools in a sandbox you own (your filesystem, your shell, your security boundary), while Composio keeps managed auth and tool discovery. | 2 |
| Sdk Reference | [sdk-reference/_index.md](sdk-reference/_index.md) | Complete API reference for the Composio TypeScript SDK (@composio/core). Triggers (instance) class Trigger (Instance) class | 22 |
| Sessions Via Mcp | [sessions-via-mcp/_index.md](sessions-via-mcp/_index.md) | Connect any MCP-compatible client to a Composio session | 1 |
| Sessions Vs Direct Execution | [sessions-vs-direct-execution/_index.md](sessions-vs-direct-execution/_index.md) | When to use session-based meta tools vs direct tool fetching and execution | 1 |
| Setting Up Triggers | [setting-up-triggers/_index.md](setting-up-triggers/_index.md) | Get trigger events locally with an SDK subscription or in production over your webhook URL List, enable, disable, and delete trigger instances Register Composio's ingress URL when you bring your own OAuth app | 4 |
| Shared Connections | [shared-connections/_index.md](shared-connections/_index.md) | Make a connected account usable by multiple users with a per-user access control list | 1 |
| Single Toolkit Mcp | [single-toolkit-mcp/_index.md](single-toolkit-mcp/_index.md) | Create MCP servers for specific toolkits | 1 |
| Standup Slackbot | [standup-slackbot/_index.md](standup-slackbot/_index.md) | A Slack bot that writes each teammate's standup from their own connected tools. Build your own white-labelled bot, give it native Slack interactions with Composio's proxy, and let a tool-router agent write the draft. | 1 |
| Tools Direct | [tools-direct/_index.md](tools-direct/_index.md) | Pin specific tool versions for consistent behavior in production Customize how tools appear to agents Fetch and filter tools, and inspect schemas | 7 |
| Triggers | [triggers/_index.md](triggers/_index.md) | React to events in connected apps. Composio delivers them to your app as structured payloads. | 1 |
| White Labeling Authentication | [white-labeling-authentication/_index.md](white-labeling-authentication/_index.md) | Remove Composio branding from your auth flows | 1 |

## How to use this skill

1. Find the relevant topic folder in the table above.
2. Read that folder's `_index.md` to see the files it contains.
3. Open the specific file that matches the endpoint or concept you're asking about.
4. Cite the source URL when giving API details.
5. If the user asks about something not covered, say so.
