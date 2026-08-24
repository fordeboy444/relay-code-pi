---
name: relay-system-setup
description: First-run setup for a relay-code automation repo (Modal.com + Trigger.dev). Scaffolds a brand-new or empty repo from bundled template files, then installs/authenticates the Trigger.dev, Modal, and Context7 CLIs, captures the project identity (cleartext identifiers only — never secrets), writes them into `trigger.config.ts`, `modal_bridge.py`, `package.json`, `src/schema.ts`, and `prompts/AGENTS.md`, and refreshes the Trigger.dev + Modal CLIs and pinned `@trigger.dev/*` SDKs to their latest patch versions. Secrets are NOT captured here — the user loads them into `.env` / `.env.production` via the `.env-storage` skill before running this. Run once on a fresh repo; re-run Part C any time to refresh tooling. TRIGGER_PROJECT_ID is written to `trigger.config.ts` only (not `.env`/`.env.production`). Service-specific secrets (Airtable, Unipile, Apify, GHL, Notion, Buffer, Serper, Exa, Instantly, etc.) are NOT captured here — their owning agents add them when an automation actually uses the service.
---

# relay-system-setup

First-run setup for a relay-code automation repo. One skill, four parts in sequence:

- **Part 0 — Scaffold.** If the repo is empty/new, populate it from the bundled template tree.
- **Part A — Verify secrets + sign in.** Confirm the user has loaded their secrets via `.env-storage`, verify all three CLIs (Trigger.dev, Modal, Context7) are installed, then sign in headless in order **context7 → modal → trigger.dev**.
- **Part B — Capture project identity** (cleartext identifiers only — never secrets) and write the files.
- **Part C — Refresh** the Trigger.dev + Modal CLIs and pinned `@trigger.dev/*` SDKs to their latest patch versions.

Derive the project root from `CLAUDE_PROJECT_DIR` (or CWD). Use `Edit`, not whole-file `Write`, wherever a targeted replace suffices. **Never echo secret values back** to the user — confirm only the prefix (`tr_dev_…`, `tr_prod_…`, `ak-…`, `as-…`). This skill never captures or writes a secret value: secrets live in `.env` / `.env.production`, loaded by the `.env-storage` skill.

Every Part B step is **sentinel-gated**: if the value is already present (no `REPLACE-ME`, the project field is already filled, the `.env` line already exists), the skill skips that prompt and leaves the existing value untouched. This keeps the skill safe to re-run on an already-configured project.

---

## Part 0 — Scaffold a new/empty repo

**Migration check (runs first, even on an already-scaffolded repo).** If the project
root has an `AGENTS.md` from a prior scaffold (the old constitution location) and no
`prompts/AGENTS.md` yet, move it: create the `prompts/` folder and move `AGENTS.md` →
`prompts/AGENTS.md` **verbatim** (the old file carries the project's Environment table
and Project identity block — keep them; the standing rules still apply). Report the
migration, then continue.

Detect an empty/new repo: **no `trigger.config.ts` at the project root** (and no `package.json`, or a `package.json` without `@trigger.dev/sdk`). If the repo already has `trigger.config.ts`, skip the scaffold below — it is already scaffolded; go straight to Part A.

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
  | `prompts/AGENTS.md` | `prompts/AGENTS.md` |
  | `.gitignore` | `.gitignore` |
  | `.env` | `.env` |
  | `.env.production` | `.env.production` |
  | `docs/specs/.gitkeep` | `docs/specs/.gitkeep` |
  | `docs/plans/.gitkeep` | `docs/plans/.gitkeep` |
  | `docs/automations/.gitkeep` | `docs/automations/.gitkeep` |
  | `scripts/locate-automation.mjs` | `scripts/locate-automation.mjs` |

- For each template, `Read` it (relative to this skill: `references/templates/<path>`) and `Write` it to the same relative path under the project root, creating parent directories as needed. (Equivalently, if you can resolve this skill's absolute directory, a single `cp -r <skill>/references/templates/. <project-root>/` does it — use `Copy-Item -Recurse` on Windows.) Never overwrite an existing file; if a target already exists, leave it.
- `prompts/AGENTS.md` is the **standing constitution** (tool-use rules, deploy order, security invariants, lifecycle conventions) — Pi loads it from `prompts/` into the system prompt on every turn. It carries **no project state**; per-project state lives in `docs/automations/<plan>/progress.md` (see the constitution's Standing rules).
- `.env` and `.env.production` are scaffolded as comment-only stubs (no `KEY=value` lines yet). The user populates them via the `.env-storage` skill (Load) — this skill never writes secret values.

After scaffolding, proceed to Part A.

---

## Part A — Verify secrets, verify the CLIs, then sign in (context7 → modal → trigger.dev)

Order matters: the user's secrets must already be in `.env` / `.env.production` (loaded via `.env-storage`) before the Modal CLI can authenticate, and the three CLIs must be present before sign-in. Sign-in order is **context7 → modal → trigger.dev** (headless where a flag exists).

1. **Confirm secrets are loaded via `.env-storage` (do this first).** Ask the user a yes/no `AskUserQuestion`: *"Have you already saved your Modal and Trigger.dev secrets in the `.env-storage` skill?"*
   - **If yes:** validate the on-disk files **by line prefix only — never read values into context**. Confirm `.env` has `MODAL_TOKEN_ID=`, `MODAL_TOKEN_SECRET=`, and `TRIGGER_SECRET_KEY=` lines, and `.env.production` has a `TRIGGER_SECRET_KEY=` line. Use a count-only check that never prints values, e.g. `grep -cE '^MODAL_TOKEN_ID=' .env` — never `cat`/`type`/`Read` the file. If any is missing, tell the user which **names** are missing and stop — they should run `/skill:.env-storage` (Load) to populate them, then re-invoke this skill.
   - **If no:** instruct the user to run `/skill:.env-storage` (Load) to load their master `.env` into this project, then **stop this skill** — it can be re-invoked once the secrets are in place.

2. **Verify all three CLIs are installed — this is the main gate.** For each, check the `--version`; if missing, install it. Report which were already present vs newly installed. Do not proceed to sign-in until all three report a version:
   - **Trigger.dev:** `trigger --version`; install `npm install -g trigger.dev@latest`.
   - **Modal:** `python -m modal --version`; install `python -m pip install --upgrade "modal>=1.5,<2.0"`.
   - **Context7:** `ctx7 --version`; install `npm install -g ctx7@latest`. (Context7 is the preferred doc source over web search.)

3. **Sign in Context7 (headless — no local browser needed).** Run `ctx7 login --no-browser`. It prints a URL; the user opens it on any device (phone, another machine) and the CLI polls until authenticated. Verify with `ctx7 whoami`. Fallback if headless is unavailable or the user prefers a key: set `CONTEXT7_API_KEY` (from the Context7 dashboard) as an env var instead of the OAuth login, then verify with `ctx7 whoami`.

4. **Sign in Modal (headless via `modal token set`, reading `.env` — values never enter context).** The Modal credentials are already in `.env` (validated in step 1). Sign in by reading them into shell variables without echoing — the command contains only the var names, never the values:
   ```bash
   MODAL_TOKEN_ID=$(grep -E '^MODAL_TOKEN_ID=' .env | head -1 | cut -d= -f2-)
   MODAL_TOKEN_SECRET=$(grep -E '^MODAL_TOKEN_SECRET=' .env | head -1 | cut -d= -f2-)
   modal token set --token-id "$MODAL_TOKEN_ID" --token-secret "$MODAL_TOKEN_SECRET"
   ```
   (On Windows, run the snippet in Git Bash, or use PowerShell: `$env:MODAL_TOKEN_ID = (Select-String -Path .env -Pattern '^MODAL_TOKEN_ID=').Line.Split('=')[1]` and the same for `MODAL_TOKEN_SECRET`, then `modal token set --token-id $env:MODAL_TOKEN_ID --token-secret $env:MODAL_TOKEN_SECRET`.) The values never appear in tool output. Verify with `python -m modal profile current` and capture the Modal username (reported in Part D). Fallback if `modal token set` fails: `modal setup` (opens a browser — user completes manually if the harness can't show one).

5. **Sign in Trigger.dev.** Run `trigger login`. There is no headless flag — it opens a browser. If the harness cannot show a browser, instruct the user to complete the login in their browser and report back; verify you are authenticated by running an authenticated subcommand (`trigger projects list`, or `trigger whoami` if the CLI supports it). Alternative non-interactive path: set `TRIGGER_ACCESS_TOKEN` (from the Trigger.dev dashboard → API Keys) as an env var, which `trigger` reads without a login flow.

If any sign-in is already complete, skip that step and report it as already authenticated.

---

## Part B — Capture project identity + core secrets and write the files

This part only asks for values whose sentinel is still present. Existing values in `.env`, `.env.production`, `trigger.config.ts`, `modal_bridge.py`, `package.json`, `src/schema.ts` are **left alone**.

### What this skill writes (and nothing else)

| Value | Where it goes | How it is captured | Sentinel that triggers the prompt |
|---|---|---|---|
| Automation name | `package.json#name`, `modal_bridge.py` `App("…")` | `AskUserQuestion` (cleartext) | `REPLACE-ME-via-system-setup` in `package.json` |
| `TRIGGER_PROJECT_ID` (e.g. `proj_…`) | `trigger.config.ts` `project:` field **only** — never `.env`/`.env.production` | `AskUserQuestion` (cleartext; not a secret) | `project: ""` in `trigger.config.ts` |
| Airtable `BASE_ID` (`app…`) | `src/schema.ts` | `AskUserQuestion` (cleartext; not a secret) — optional | `BASE_ID = "REPLACE-ME"` in `src/schema.ts` |

Secrets (`MODAL_TOKEN_ID`, `MODAL_TOKEN_SECRET`, `TRIGGER_SECRET_KEY` dev/prod, `AIRTABLE_TOKEN`, and any service token) are **not** written by this skill — the user owns them via `.env-storage` (validated in Part A step 1). Per-automation required env vars for any other service (`UNIPILE_*`, `APIFY_TOKEN`, `GHL_*`, `NOTION_API_KEY`, `BUFFER_*`, `OLLAMA_API_KEY`, `SERPER_API_KEY`, `EXA_API_KEY`, `INSTANTLY_API_KEY`, etc.) are **out of scope** — they are added by their owning agents (via `relay_add_env_var`) when an automation actually uses that service. The Modal CLI's own auth is satisfied by `MODAL_TOKEN_ID` + `MODAL_TOKEN_SECRET` from `.env` (Part A step 4); the framework runtime never reads them.

> **`TRIGGER_PROJECT_ID` is not a secret** — it is a public project externalRef. It lives in `trigger.config.ts` (`project:` field), the only place the `trigger` CLI reads it. Do **not** write it to `.env` or `.env.production`. Never pass `--project-ref` on the CLI.

### Steps

1. **Automation name** (`AskUserQuestion`) — only if `package.json` still contains `"REPLACE-ME-via-system-setup"`. Default suggestion: the repo directory name, lowercased and kebab-cased. Used in steps 5 + 6 below.

2. **Trigger.dev project externalRef** (`AskUserQuestion`, cleartext) — only if `trigger.config.ts` still contains `project: ""`. Validate `^proj_[a-z0-9]+$`; re-ask on mismatch. Do not ask the user to paste the value on the same line as the request — many dashboards let you copy it from the URL.

3. **Airtable base id** (optional) — only if `src/schema.ts` still contains `BASE_ID = "REPLACE-ME"`. Ask via `AskUserQuestion` whether the first automation uses Airtable. If no, skip and leave the sentinel; the `airtable-agent` fills it later. If yes, capture the Airtable **base id** (`app…`, from the base URL / API docs) via `AskUserQuestion` (cleartext); validate the `app` prefix. `AIRTABLE_TOKEN` is **not** captured here — it is expected to already be in `.env` via `.env-storage`.

4. `Edit` `trigger.config.ts`: `project: ""` → `project: "<ref>"` (only if the sentinel is still present). This is the **only** place `TRIGGER_PROJECT_ID` is written.

5. `Edit` `package.json`: `"name": "REPLACE-ME-via-system-setup"` → `"name": "<automation-name>"` (only if the sentinel is still present).

6. `Edit` `modal_bridge.py`: `App("REPLACE-ME-bridge"` → `App("<automation-name>-bridge"` (only if the sentinel is still present).

7. `Edit` `src/schema.ts`: `BASE_ID = "REPLACE-ME"` → `BASE_ID = "<base id>"` (only if Airtable was captured in step 3).

8. Run `npm install` (generates `package-lock.json` + `node_modules/`). Confirms the SDK pins resolve.

No `.env` / `.env.production` edits happen in this part — secret values are owned by the user via `.env-storage` (Load), and this skill never writes a secret. The constitution (`prompts/AGENTS.md`) carries no project identity block; the Modal username is reported in Part D and the bridge URL is reported after the first `modal deploy`.

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
4. **Verified `.env` contains** — list the env-var **names** whose presence was confirmed in Part A step 1 (`MODAL_TOKEN_ID`, `MODAL_TOKEN_SECRET`, `TRIGGER_SECRET_KEY` in `.env`; `TRIGGER_SECRET_KEY` in `.env.production`). Names only — never echo a value or a prefix of one.
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

- **Secrets are never captured or written by this skill.** They live in `.env` / `.env.production`, loaded by the `.env-storage` skill (validated in Part A step 1). The model never sees a secret value — it only ever confirms env-var **names** by line-prefix count.
- Never echo a secret value back to the user — confirm only the prefix (`tr_dev_…`, `tr_prod_…`, `ak-…`, `as-…`), and only when a value was shown to you (with `.env-storage` it is not).
- Never run `modal deploy` — the bridge URL is reported after the first deploy; the constitution (`prompts/AGENTS.md`) carries no project identity block.
- Never write real secrets into committed files — `.env` and `.env.production` are gitignored.
- `TRIGGER_PROJECT_ID` is written to `trigger.config.ts` **only** — never to `.env` or `.env.production`.
- Never overwrite an existing value in `.env` / `.env.production` / `trigger.config.ts` / `modal_bridge.py` / `package.json` / `src/schema.ts`. Sentinel-detect, ask, then targeted `Edit`.
- Never auto-bump a major or minor version in Part C. Patch only by default.
- Service-specific secrets for Airtable (beyond the first base), Unipile, Apify, Ollama, GHL, Notion, Buffer, Serper, Exa, Instantly, etc. are **owned by their per-software agents** — do not add them to `.env` from this skill. The `airtable-agent` is the only exception; Part B step 3 captures the very first Airtable base, after which subsequent Airtable setups are also owned by `airtable-agent`.