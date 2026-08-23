---
name: relay-system-setup
description: First-run setup for a relay-code automation repo (Modal.com + Trigger.dev). Scaffolds a brand-new or empty repo from bundled template files, then installs/authenticates the Trigger.dev, Modal, and Context7 CLIs, captures the project identity + core secrets via request_secret (pi-secret-mask — the model never sees secret values), writes them into `.env`, `.env.production`, `trigger.config.ts`, `modal_bridge.py`, `package.json`, `src/schema.ts`, and `AGENTS.md`, and refreshes the Trigger.dev + Modal CLIs and pinned `@trigger.dev/*` SDKs to their latest patch versions. Run once on a fresh repo; re-run Part C any time to refresh tooling. TRIGGER_PROJECT_ID is written to `trigger.config.ts` only (not `.env`/`.env.production`). Service-specific secrets (Airtable, Unipile, Apify, GHL, Notion, Buffer, Serper, Exa, Instantly, etc.) are NOT captured here — their owning agents add them when an automation actually uses the service.
---

# /system-setup

First-run setup for a relay-code automation repo. One skill, four parts in sequence:

- **Part 0 — Scaffold.** If the repo is empty/new, populate it from the bundled template tree.
- **Part A — Install + authenticate** the three CLIs (Trigger.dev, Modal, Context7).
- **Part B — Capture project identity + core secrets** and write the files. Secrets are collected with the `request_secret` tool (pi-secret-mask) so the model only ever sees `__SECRET_*__` placeholders — never real values.
- **Part C — Refresh** the Trigger.dev + Modal CLIs and pinned `@trigger.dev/*` SDKs to their latest patch versions.

Derive the project root from `CLAUDE_PROJECT_DIR` (or CWD). Use `Edit`, not whole-file `Write`, wherever a targeted replace suffices. **Never echo secret values back** to the user — confirm only the prefix (`tr_dev_…`, `tr_prod_…`, `ak-…`, `as-…`). With `request_secret`, you never receive a real value to echo; you only handle `__SECRET_*__` placeholders.

Every Part B step is **sentinel-gated**: if the value is already present (no `REPLACE-ME`, the project field is already filled, the `.env` line already exists), the skill skips that prompt and leaves the existing value untouched. This keeps the skill safe to re-run on an already-configured project.

---

## Part 0 — Scaffold a new/empty repo

Run this first. Detect an empty/new repo: **no `trigger.config.ts` at the project root** (and no `package.json`, or a `package.json` without `@trigger.dev/sdk`). If the repo already has `trigger.config.ts`, skip Part 0 entirely — it is already scaffolded; go straight to Part A.

Copy the bundled template tree from this skill's `references/templates/` directory into the project root, preserving the structure. The templates carry the sentinels Part B fills (`REPLACE-ME-via-system-setup`, `project: ""`, `BASE_ID = "REPLACE-ME"`, `App("REPLACE-ME-bridge"`).

- The template files and their target paths (all relative to the project root):

  | Template | Target |
  |---|---|
  | `trigger.config.ts` | `trigger.config.ts` |
  | `modal_bridge.py` | `modal_bridge.py` |
  | `src/config.ts` | `src/config.ts` |
  | `src/schema.ts` | `src/schema.ts` |
  | `package.json` | `package.json` |
  | `tsconfig.json` | `tsconfig.json` |
  | `AGENTS.md` | `AGENTS.md` |
  | `.gitignore` | `.gitignore` |
  | `.env` | `.env` |
  | `.env.production` | `.env.production` |
  | `docs/specs/.gitkeep` | `docs/specs/.gitkeep` |
  | `docs/plans/.gitkeep` | `docs/plans/.gitkeep` |
  | `docs/automations/.gitkeep` | `docs/automations/.gitkeep` |
  | `scripts/locate-automation.mjs` | `scripts/locate-automation.mjs` |

- For each template, `Read` it (relative to this skill: `references/templates/<path>`) and `Write` it to the same relative path under the project root, creating parent directories as needed. (Equivalently, if you can resolve this skill's absolute directory, a single `cp -r <skill>/references/templates/. <project-root>/` does it — use `Copy-Item -Recurse` on Windows.) Never overwrite an existing file; if a target already exists, leave it.
- `.env` and `.env.production` are scaffolded as comment-only stubs (no `KEY=value` lines yet) — Part B fills them. They are gitignored by the scaffolded `.gitignore`.

After scaffolding, proceed to Part A.

---

## Part A — Install + authenticate the CLIs

1. **Trigger.dev CLI** — `npm install -g trigger.dev@latest`; verify `trigger --version`.
2. **Authenticate Trigger.dev** — `trigger login` (opens a browser; if the harness cannot show it, instruct the user to complete it manually and report back).
3. **Modal CLI** — `python -m pip install --upgrade "modal>=1.5,<2.0"`; verify `python -m modal --version`.
4. **Authenticate Modal** — `modal setup` (browser; user completes manually if needed); capture the Modal username with `python -m modal profile current`.
5. **Context7 CLI** — install the `ctx7` CLI per the `context7-cli` skill (run `npx -y ctx7 --help` first to confirm the install command — it may be `npm install -g ctx7`); authenticate if the skill requires it. Context7 is the preferred doc source over web search.

If any CLI is already installed and authenticated, skip its step (verify with the `--version` / `profile current` check) and report it as already set up.

---

## Part B — Capture project identity + core secrets and write the files

This part only asks for values whose sentinel is still present. Existing values in `.env`, `.env.production`, `trigger.config.ts`, `modal_bridge.py`, `package.json`, `src/schema.ts` are **left alone**.

### What this skill writes (and nothing else)

| Value | Where it goes | How it is captured | Sentinel that triggers the prompt |
|---|---|---|---|
| Automation name | `package.json#name`, `modal_bridge.py` `App("…")` | `AskUserQuestion` (cleartext) | `REPLACE-ME-via-system-setup` in `package.json` |
| `TRIGGER_PROJECT_ID` (e.g. `proj_…`) | `trigger.config.ts` `project:` field **only** — never `.env`/`.env.production` | `AskUserQuestion` (cleartext; not a secret) | `project: ""` in `trigger.config.ts` |
| `TRIGGER_SECRET_KEY` (dev, `tr_dev_…`) | `.env` | `request_secret` → `__SECRET_TRIGGER_SECRET_KEY_DEV__` | no `TRIGGER_SECRET_KEY=` line in `.env` |
| `TRIGGER_SECRET_KEY` (prod, `tr_prod_…`) | `.env.production` | `request_secret` → `__SECRET_TRIGGER_SECRET_KEY_PROD__` | no `TRIGGER_SECRET_KEY=` line in `.env.production` |
| `MODAL_TOKEN_ID` (`ak-…`) | `.env` | `request_secret` → `__SECRET_MODAL_TOKEN_ID__` | no `MODAL_TOKEN_ID=` line in `.env` |
| `MODAL_TOKEN_SECRET` (`as-…`) | `.env` | `request_secret` → `__SECRET_MODAL_TOKEN_SECRET__` | no `MODAL_TOKEN_SECRET=` line in `.env` |
| `AIRTABLE_TOKEN` + `BASE_ID` | `.env` (`AIRTABLE_TOKEN`) + `src/schema.ts` (`BASE_ID`) | `request_secret` (token) + `AskUserQuestion` (`BASE_ID`, cleartext `app…`) — optional | `BASE_ID = "REPLACE-ME"` in `src/schema.ts` |

Per-automation required env vars for any other service (`UNIPILE_*`, `APIFY_TOKEN`, `GHL_*`, `NOTION_API_KEY`, `BUFFER_*`, `OLLAMA_API_KEY`, `SERPER_API_KEY`, `EXA_API_KEY`, `INSTANTLY_API_KEY`, etc.) are **out of scope** — they are added by their owning agents (via `relay_add_env_var`) when an automation actually uses that service. The Modal CLI's own auth is satisfied by `MODAL_TOKEN_ID` + `MODAL_TOKEN_SECRET`; the framework runtime never reads them.

> **`TRIGGER_PROJECT_ID` is not a secret** — it is a public project externalRef. It lives in `trigger.config.ts` (`project:` field), the only place the `trigger` CLI reads it. Do **not** write it to `.env` or `.env.production`. Never pass `--project-ref` on the CLI.

### Steps

1. **Automation name** (`AskUserQuestion`) — only if `package.json` still contains `"REPLACE-ME-via-system-setup"`. Default suggestion: the repo directory name, lowercased and kebab-cased. Used in steps 9 + 10 below.

2. **Trigger.dev project externalRef** (`AskUserQuestion`, cleartext) — only if `trigger.config.ts` still contains `project: ""`. Validate `^proj_[a-z0-9]+$`; re-ask on mismatch. Do not ask the user to paste the value on the same line as the request — many dashboards let you copy it from the URL.

3. **Trigger.dev dev secret key** (`request_secret`) — only if `.env` has no `TRIGGER_SECRET_KEY=` line (check by line prefix only; the value, if any, is masked to a `__SECRET_*__` placeholder by pi-secret-mask). Call:
   ```
   request_secret({ name: "TRIGGER_SECRET_KEY_DEV", purpose: "Trigger.dev DEV secret key (starts with tr_dev_)" })
   ```
   It returns a placeholder `__SECRET_TRIGGER_SECRET_KEY_DEV__`. Remember it for step 8.

4. **Trigger.dev prod secret key** (`request_secret`) — only if `.env.production` has no `TRIGGER_SECRET_KEY=` line. Call:
   ```
   request_secret({ name: "TRIGGER_SECRET_KEY_PROD", purpose: "Trigger.dev PROD secret key (starts with tr_prod_)" })
   ```
   Returns `__SECRET_TRIGGER_SECRET_KEY_PROD__`. **`.env.production` is also read by the Modal bridge** via `Secret.from_dotenv(__file__, filename=".env.production")` — never put the dev key here, or dispatches hit the empty dev env and every run crashes with `TASK_PROCESS_EXITED_WITH_NON_ZERO_CODE`.

5. **Modal token id** (`request_secret`) — only if `.env` has no `MODAL_TOKEN_ID=` line. Call:
   ```
   request_secret({ name: "MODAL_TOKEN_ID", purpose: "Modal token id (starts with ak-)" })
   ```
   Returns `__SECRET_MODAL_TOKEN_ID__`.

6. **Modal token secret** (`request_secret`) — only if `.env` has no `MODAL_TOKEN_SECRET=` line. Call:
   ```
   request_secret({ name: "MODAL_TOKEN_SECRET", purpose: "Modal token secret (starts with as-)" })
   ```
   Returns `__SECRET_MODAL_TOKEN_SECRET__`.

7. **Airtable** (optional) — only if `src/schema.ts` still contains `BASE_ID = "REPLACE-ME"`. Ask via `AskUserQuestion` whether the first automation uses Airtable. If no, skip and leave the sentinel; the `airtable-agent` fills it later. If yes:
   - Capture `AIRTABLE_TOKEN` via `request_secret({ name: "AIRTABLE_TOKEN", purpose: "Airtable Personal Access Token" })` → `__SECRET_AIRTABLE_TOKEN__`.
   - Capture the Airtable **base id** (`app…`, from the base URL / API docs) via `AskUserQuestion` (cleartext); validate the `app` prefix.

8. **Write the env files.** Use targeted `Edit` calls, not whole-file `Write`. Each `Edit` only adds a line if it isn't already there — never overwrite. Write the `__SECRET_*__` placeholder verbatim; pi-secret-mask substitutes the real value onto disk when the `Edit`/`Write` executes (and masks it again in tool output), so the on-disk file holds the real secret while you only ever see the placeholder. Order of keys inside each file doesn't matter.
   - `.env`: append as needed — `TRIGGER_SECRET_KEY=__SECRET_TRIGGER_SECRET_KEY_DEV__`, `MODAL_TOKEN_ID=__SECRET_MODAL_TOKEN_ID__`, `MODAL_TOKEN_SECRET=__SECRET_MODAL_TOKEN_SECRET__`; if Airtable was captured, also `AIRTABLE_TOKEN=__SECRET_AIRTABLE_TOKEN__`. **Never put `TRIGGER_PROJECT_ID` in `.env`.**
   - `.env.production`: append `TRIGGER_SECRET_KEY=__SECRET_TRIGGER_SECRET_KEY_PROD__` (only if missing). **`TRIGGER_PROJECT_ID` does not go here either** — only the prod `TRIGGER_SECRET_KEY`.

9. `Edit` `trigger.config.ts`: `project: ""` → `project: "<ref>"` (only if the sentinel is still present). This is the **only** place `TRIGGER_PROJECT_ID` is written.

10. `Edit` `package.json`: `"name": "REPLACE-ME-via-system-setup"` → `"name": "<automation-name>"` (only if the sentinel is still present).

11. `Edit` `modal_bridge.py`: `App("REPLACE-ME-bridge"` → `App("<automation-name>-bridge"` (only if the sentinel is still present).

12. `Edit` `src/schema.ts`: `BASE_ID = "REPLACE-ME"` → `BASE_ID = "<base id>"` (only if Airtable was captured in step 7).

13. Run `npm install` (generates `package-lock.json` + `node_modules/`). Confirms the SDK pins resolve.

14. `Edit` the `AGENTS.md` "Project identity" block: fill the automation name, Modal app name (`<automation-name>-bridge`), and Modal username (from Part A step 4). The Trigger.dev project ref line points at `trigger.config.ts` (do not duplicate the value here). Leave "Modal bridge URL" as "to be filled after first `modal deploy modal_bridge.py`" — the URL is constructed from `<username>--<app-name>-bridge-<func>.modal.run` and back-filled after the first deploy. (Pi loads `AGENTS.md` as the project context — precedence over `CLAUDE.md` — so this is the single source of truth for project identity; do not also maintain a `CLAUDE.md` block.)

---

## Part C — Refresh Trigger.dev + Modal tooling

Bumps the global `trigger` CLI, the `@trigger.dev/sdk` + `@trigger.dev/build` pins in `package.json`, and the global `modal` Python client to their latest **patch** versions.

> **Patch only by default.** Major / minor bumps require explicit user approval — the Trigger.dev SDK has shipped breaking changes between minors historically.

### Pre-flight (do not skip)

1. **Read current versions — never guess:**
   ```bash
   npm list -g --depth=0 | grep trigger.dev        # global CLI
   npm view trigger.dev version                    # latest published
   grep -E '"@trigger\.dev/(sdk|build)"' package.json
   npm view @trigger.dev/sdk version               # latest SDK
   python -m modal --version
   python -m pip index versions modal 2>/dev/null || pip install modal==  # latest
   ```
2. **Bump scope check.** If target differs from current **only in patch** (`x.y.Z`), proceed. If major or minor, **stop** and ask the user.
3. **Live dev server.** If a `npm run trigger:dev` worker is currently running (check with `TaskList` for a background task on that command), decide whether the bump forces a restart:
   - Bumping SDKs in `package.json` past the global CLI version → restart required.
   - Bumping only the global CLI, or only Modal → no restart needed.

### Procedure

Run these in order.

1. **Trigger.dev global CLI** (only if behind):
   ```bash
   npm install -g "trigger.dev@<target-patch>"
   trigger --version
   ```
2. **Repo SDK pins** (in `package.json`):
   - `Edit` `@trigger.dev/sdk` line and `@trigger.dev/build` line to the same target patch. Use one `Edit` per line, `replace_all: false`, to preserve JSON formatting.
   - `npm install` to refresh the lockfile. Confirm `npm install` prints "changed N packages" with N small (single-digit for a patch bump). If N is in the hundreds, stop and inspect.
3. **Modal Python client** (only if behind):
   ```bash
   python -m pip install --upgrade "modal>=1.5,<2.0"
   python -m modal --version
   ```
   Pip may complain about unrelated packages in the same Python env (`trigger-automations-ingress` etc.); ignore unless the user asks.
4. **Restart only if forced.** If the CLI upgrade moved it past the SDKs, or vice versa, `TaskStop` the previous dev-worker background task and re-launch with `npm run trigger:dev` (`run_in_background: true`). Capture the new task id. If only Modal changed, no restart is needed.
5. **Snapshot the log** (only if the dev server was restarted):
   ```bash
   cp "$LIVE_OUTPUT_PATH" \
     "$CLAUDE_PROJECT_DIR/.claude/runs/trigger-dev-<UTC-timestamp>.log"
   ```
   UTC timestamp format: `2026-07-31T17-00-00Z`.

---

## Part D — Report

Print, in this order:

1. **Scaffold** — whether Part 0 ran and which template files it wrote, or "Repo already scaffolded — skipped Part 0."
2. **CLI versions + auth status** — `trigger --version`, `modal --version`, `ctx7 --version` (or "installed but unauthenticated" if applicable).
3. **Project identity** — Trigger.dev project ref (from `trigger.config.ts`), Modal app name, Modal username.
4. **Secrets captured** — list each `request_secret` call by **placeholder name only** (`TRIGGER_SECRET_KEY_DEV`, `TRIGGER_SECRET_KEY_PROD`, `MODAL_TOKEN_ID`, `MODAL_TOKEN_SECRET`, and `AIRTABLE_TOKEN` if captured). Never echo a real value or even a prefix of one — the user entered it directly into the secret prompt; you only ever saw the `__SECRET_*__` placeholder.
5. **What Part B wrote** — list every sentinel replacement that actually happened, or `No changes — project already configured.` when everything was already filled in.
6. **What Part C did** (only if Part C ran) — bump table:

   | Component | Before | After |
   |---|---|---|
   | `trigger.dev` (global CLI) | … | … |
   | `@trigger.dev/sdk` | … | … |
   | `@trigger.dev/build` | … | … |
   | `modal` (Python client) | … | … |

   + whether the dev server was restarted, why (or why not), the new background task id if it was, and any unrelated pip resolver warnings.
7. **Next steps:**
   > Next: run `/skill:relay-research-automation` to design your first automation, then `/skill:relay-plan-automation <slug>` to write the plan, then `/skill:relay-execute-or-resume-automation <slug>` to build it. The execute skill brings up the local Trigger.dev dev worker and owns both deploy runbooks (dev + prod); deploy the Modal bridge separately with `modal deploy modal_bridge.py`.

---

## Rules of the road

- **Secrets are captured with `request_secret` (pi-secret-mask).** The model never sees real values — only `__SECRET_*__` placeholders. Use the placeholder verbatim in `Edit`/`Write` inputs; pi-secret-mask substitutes the real value onto disk and masks it again in tool output. Never invent a placeholder name; never request the same secret twice.
- Never echo a secret value back to the user (only prefixes, and only when a value was shown to you — with `request_secret` it is not).
- Never run `modal deploy` — the URL is back-filled in `CLAUDE.md` after the first deploy.
- Never write real secrets into committed files — `.env` and `.env.production` are gitignored.
- `TRIGGER_PROJECT_ID` is written to `trigger.config.ts` **only** — never to `.env` or `.env.production`.
- Never overwrite an existing value in `.env` / `.env.production` / `trigger.config.ts` / `modal_bridge.py` / `package.json` / `src/schema.ts`. Sentinel-detect, ask (or `request_secret`), then targeted `Edit`.
- Never auto-bump a major or minor version in Part C. Patch only by default.
- Service-specific secrets for Airtable (beyond the first base), Unipile, Apify, Ollama, GHL, Notion, Buffer, Serper, Exa, Instantly, etc. are **owned by their per-software agents** — do not add them to `.env` from this skill. The `airtable-agent` is the only exception; Part B step 7 captures the very first Airtable base, after which subsequent Airtable setups are also owned by `airtable-agent`.