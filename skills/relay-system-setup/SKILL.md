---
name: relay-system-setup
description: First-run setup for a relay-code automation repo (Modal.com + Trigger.dev). Scaffolds a brand-new or empty repo from bundled template files, captures the project identity (cleartext identifiers only — never secrets), captures `TRIGGER_PROJECT_ID` and writes it to `trigger.config.ts`, walks the user through placing Trigger.dev keys (`TRIGGER_SECRET_KEY` dev + prod) directly into `.env` / `.env.production`, validates that Modal keys (`MODAL_TOKEN_ID` + `MODAL_TOKEN_SECRET`) are already present in `.env` (the user runs `/skill:env-storage` BEFORE invoking this skill to load them, or pastes them directly), installs/authenticates the Trigger.dev, Modal, and Context7 CLIs, writes the remaining config files (`modal_bridge.py`, `package.json`, `src/schema.ts`, `prompts/AGENTS.md`), and refreshes the Trigger.dev + Modal CLIs and pinned `@trigger.dev/*` SDKs to their latest patch versions. Secrets are NEVER captured by this skill — Trigger.dev keys are pasted by the user in Part A step 2; Modal keys are expected to already be in `.env` (loaded via `env-storage` Load BEFORE running this skill, or pasted directly). TRIGGER_PROJECT_ID is written to `trigger.config.ts` only (not `.env`/`.env.production`). Service-specific secrets (Airtable, Unipile, Apify, GHL, Notion, Buffer, Serper, Exa, Instantly, etc.) are NOT captured here — their owning agents add them when an automation actually uses the service.
---

# relay-system-setup

First-run setup for a relay-code automation repo. One skill, four parts in sequence:

- **Part 0 — Scaffold.** If the repo is empty/new, populate it from the bundled template tree.
- **Part A — Capture project identity + secrets, verify the CLIs, then sign in.** Capture `TRIGGER_PROJECT_ID` and write it to `trigger.config.ts`; walk the user through placing Trigger.dev keys (`TRIGGER_SECRET_KEY` dev + prod) into `.env` / `.env.production`; validate that Modal keys (`MODAL_TOKEN_ID` + `MODAL_TOKEN_SECRET`) are present in `.env` (the user runs `/skill:env-storage` BEFORE invoking this skill to populate them, or pastes them into `.env` directly). Verify all three CLIs (Trigger.dev, Modal, Context7) are installed, then sign in headless in order **context7 → modal → trigger.dev**.
- **Part B — Capture project identity** (cleartext identifiers only — never secrets) and write the files.
- **Part C — Refresh** the Trigger.dev + Modal CLIs and pinned `@trigger.dev/*` SDKs to their latest patch versions.

Derive the project root from `CLAUDE_PROJECT_DIR` (or CWD). Use `Edit`, not whole-file `Write`, wherever a targeted replace suffices. **Never echo secret values back** to the user — confirm only the prefix (`tr_dev_…`, `tr_prod_…`, `ak-…`, `as-…`). This skill never captures or writes a secret value: Trigger.dev keys live in `.env` / `.env.production` (pasted by the user in Part A step 2); Modal keys are expected to already be in `.env` before this skill runs (loaded via `/skill:env-storage` Load beforehand, or pasted directly — this skill validates presence but does not write them).

**Before you begin.** Before invoking this skill, the user must have populated `.env` + `.env.production` with their secrets. The standard path is: (1) **once per machine**, install the env-storage user-level skill globally: `pi install npm:env-storage-user-skill@latest` (no `-l` — install to `~/.pi/agent/settings.json`, not project-local). The skill itself lives at `~/.pi/agent/skills/env-storage/` after install. (2) Then `/skill:env-storage` (Load) to copy the user's master secrets into this project's `.env` + `.env.production`. If the user doesn't have env-storage installed, they can paste Modal + Trigger.dev keys directly into `.env` / `.env.production` before continuing — Part A step 2 walks the user through the Trigger.dev paste, and step 3 just validates Modal's presence.

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
  | `.gitignore.template` | `.gitignore` |
  | `.env.template` | `.env` |
  | `.env.production.template` | `.env.production` |
  | `docs/specs/.gitkeep` | `docs/specs/.gitkeep` |
  | `docs/plans/.gitkeep` | `docs/plans/.gitkeep` |
  | `docs/automations/.gitkeep` | `docs/automations/.gitkeep` |
  | `scripts/locate-automation.mjs` | `scripts/locate-automation.mjs` |

- For each template, `Read` it (relative to this skill: `references/templates/<template>`) and `Write` it to its target path under the project root, creating parent directories as needed. For most templates the source and target names match, so a single `cp -r <skill>/references/templates/. <project-root>/` (or `Copy-Item -Recurse` on Windows) copies them in one shot — **except** the three dotfiles below, whose source carries a `.template` suffix the target drops: `Read` `.gitignore.template` → `Write` `.gitignore`; `Read` `.env.template` → `Write` `.env`; `Read` `.env.production.template` → `Write` `.env.production`. They ship under `*.template` names because npm excludes bare `.gitignore` / `.env` / `.env.production` from the published tarball (npm always drops `.gitignore`; the bundled `.gitignore.template` itself ignores `.env` / `.env.production` so it can double as the scaffolded project's `.gitignore`). Never overwrite an existing file; if a target already exists, leave it.
- `prompts/AGENTS.md` is the **standing constitution** (tool-use rules, deploy order, security invariants, lifecycle conventions) — Pi loads it from `prompts/` into the system prompt on every turn. It carries **no project state**; per-project state lives in `docs/automations/<plan>/progress.md` (see the constitution's Standing rules).
- `.env` and `.env.production` are scaffolded as comment-only stubs (no `KEY=value` lines yet). The user populates them BEFORE Part A: by running `/skill:env-storage` (Load) to copy their master secrets, or by direct paste. Part A step 2 walks the user through the Trigger.dev paste; step 3 validates Modal's presence. This skill never writes a secret value.

After scaffolding, proceed to Part A.

---

## Part A — Capture project identity + secrets, verify CLIs, then sign in (context7 → modal → trigger.dev)

Order matters: TRIGGER_PROJECT_ID is captured first (so `trigger.config.ts` is set before the Trigger.dev CLI is exercised); Trigger.dev keys go in `.env` / `.env.production` directly (Modal keys are expected to already be there from a prior `/skill:env-storage` Load or direct paste). Then the three CLIs are verified, then sign-in runs in order **context7 → modal → trigger.dev** (headless where a flag exists). Every step below is sentinel-gated — if a value is already present, the step is skipped.

### Step 1 — Capture `TRIGGER_PROJECT_ID`

Only if `trigger.config.ts` still contains `project: ""` (sentinel-detect). If the sentinel is gone, skip this step entirely.

- `AskUserQuestion` (cleartext, not a secret): "What's your Trigger.dev project ID? (looks like `proj_…` — copy it from the Trigger.dev dashboard URL for the project.)"
- Validate `^proj_[a-z0-9]+$` against the response. Re-ask on mismatch.
- `Edit` `trigger.config.ts`: `project: ""` → `project: "<ref>"` (only if the sentinel is still present — never overwrite an existing value).
- `TRIGGER_PROJECT_ID` is a **public** project externalRef, not a secret. It lives in `trigger.config.ts` only. Never write it to `.env` or `.env.production`. Never pass `--project-ref` on the CLI.

### Step 2 — Capture Trigger.dev dev + prod keys (user pastes directly into `.env` / `.env.production`)

This step handles the `TRIGGER_SECRET_KEY` lines in **both** `.env` (dev) and `.env.production` (prod). Sentinel-detect each: `grep -cE '^TRIGGER_SECRET_KEY=' .env` and `grep -cE '^TRIGGER_SECRET_KEY=' .env.production` — if either is already ≥ 1, skip that file.

For each file that needs the key, instruct the user and **wait for explicit confirmation before continuing**:

> "Open `<file>` in your editor. Replace the `TRIGGER_SECRET_KEY=tr_dev_REPLACE-ME...` (or `tr_prod_REPLACE-ME...`) placeholder with your actual key from the Trigger.dev dashboard (Settings → API Keys → Development for the dev key, or Production for the prod key). Save and close. Let me know when done."

Stop here. Do not advance to step 3 until the user replies (e.g. "done", "placed", or any other affirmative) **and** the line-prefix count for each file is ≥ 1. Re-validate after the user replies; if either line is still missing, ask whether they want to skip it (with a warning) or retry.

**Never `cat`/`type`/`Read` `.env` or `.env.production`** during this step — use only the `grep -cE` line-prefix check. The model must never see a secret value.

### Step 3 — Validate Modal keys are present in `.env`

This step assumes Modal keys (`MODAL_TOKEN_ID` + `MODAL_TOKEN_SECRET`) are already in `.env` — populated either by the user running `/skill:env-storage` (Load) before this skill, or by the user pasting them directly. This skill does not route the user through either flow.

For each key, count-only via `grep -cE '^KEY=' .env` (never read values):

```bash
grep -cE '^MODAL_TOKEN_ID=' .env
grep -cE '^MODAL_TOKEN_SECRET=' .env
```

If either count is 0, stop and tell the user which env var is missing and how to fix it:

> "Modal keys aren't in `.env`. Run `/skill:env-storage` (Load) to copy them from `~/.pi/agent/skills/env-storage/.env`, or paste `MODAL_TOKEN_ID=ak-...` and `MODAL_TOKEN_SECRET=as-...` (from modal.com/settings/tokens) directly into `.env`. Let me know when done."

Wait for user confirmation, then re-check. Do not proceed until both counts are ≥ 1. Never `cat`/`Read` `.env` — line-prefix count only.

### Step 4 — Verify all three CLIs are installed — this is the main gate

For each, check the `--version`; if missing, install it. Report which were already present vs newly installed. Do not proceed to sign-in until all three report a version:

- **Trigger.dev:** `trigger --version`; install `npm install -g trigger.dev@latest`.
- **Modal:** `python -m modal --version`; install `python -m pip install --upgrade "modal>=1.5,<2.0"`.
- **Context7:** `ctx7 --version`; install `npm install -g ctx7@latest`. (Context7 is the preferred doc source over web search.)

### Step 5 — Sign in Context7 (headless — no local browser needed)

Run `ctx7 login --no-browser`. It prints a URL; the user opens it on any device (phone, another machine) and the CLI polls until authenticated. Verify with `ctx7 whoami`. Fallback if headless is unavailable or the user prefers a key: set `CONTEXT7_API_KEY` (from the Context7 dashboard) as an env var instead of the OAuth login, then verify with `ctx7 whoami`.

### Step 6 — Sign in Modal (headless via `modal token set`, reading `.env` — values never enter context)

The Modal credentials are already in `.env` (validated in step 3). Sign in by reading them into shell variables without echoing — the command contains only the var names, never the values:

```bash
MODAL_TOKEN_ID=$(grep -E '^MODAL_TOKEN_ID=' .env | head -1 | cut -d= -f2-)
MODAL_TOKEN_SECRET=$(grep -E '^MODAL_TOKEN_SECRET=' .env | head -1 | cut -d= -f2-)
modal token set --token-id "$MODAL_TOKEN_ID" --token-secret "$MODAL_TOKEN_SECRET"
```

(On Windows, run the snippet in Git Bash, or use PowerShell: `$env:MODAL_TOKEN_ID = (Select-String -Path .env -Pattern '^MODAL_TOKEN_ID=').Line.Split('=')[1]` and the same for `MODAL_TOKEN_SECRET`, then `modal token set --token-id $env:MODAL_TOKEN_ID --token-secret $env:MODAL_TOKEN_SECRET`.) The values never appear in tool output. Verify with `python -m modal profile current` and capture the Modal username (reported in Part D). Fallback if `modal token set` fails: `modal setup` (opens a browser — user completes manually if the harness can't show one).

### Step 7 — Sign in Trigger.dev

Run `trigger login`. There is no headless flag — it opens a browser. If the harness cannot show a browser, instruct the user to complete the login in their browser and report back; verify you are authenticated by running an authenticated subcommand (`trigger projects list`, or `trigger whoami` if the CLI supports it). Alternative non-interactive path: set `TRIGGER_ACCESS_TOKEN` (from the Trigger.dev dashboard → API Keys) as an env var, which `trigger` reads without a login flow.

If any sign-in is already complete, skip that step and report it as already authenticated.

---

## Part B — Capture project identity + write the remaining config files

This part only asks for values whose sentinel is still present. Existing values in `trigger.config.ts`, `modal_bridge.py`, `package.json`, `src/schema.ts` are **left alone**. (`TRIGGER_PROJECT_ID` was already captured and written to `trigger.config.ts` in Part A step 1; this part does not duplicate that work.)

### What this skill writes (and nothing else)

| Value | Where it goes | How it is captured | Sentinel that triggers the prompt |
|---|---|---|---|
| Automation name | `package.json#name`, `modal_bridge.py` `App("…")` | `AskUserQuestion` (cleartext) | `REPLACE-ME-via-system-setup` in `package.json` |
| Airtable `BASE_ID` (`app…`) | `src/schema.ts` | `AskUserQuestion` (cleartext; not a secret) — optional | `BASE_ID = "REPLACE-ME"` in `src/schema.ts` |

`TRIGGER_PROJECT_ID` is **already written in Part A step 1** (the `project: ""` sentinel in `trigger.config.ts`); this part does not re-prompt for it.

Secrets (`MODAL_TOKEN_ID`, `MODAL_TOKEN_SECRET`, `TRIGGER_SECRET_KEY` dev/prod, `AIRTABLE_TOKEN`, and any service token) are **not** written by this skill — the user owns them: Modal + Trigger.dev keys must already be in `.env` / `.env.production` BEFORE this skill runs (loaded via `/skill:env-storage` Load beforehand, or pasted directly). Part A step 2 walks the user through the Trigger.dev paste if not yet done; step 3 validates Modal's presence. Per-automation required env vars for any other service (`UNIPILE_*`, `APIFY_TOKEN`, `GHL_*`, `NOTION_API_KEY`, `BUFFER_*`, `OLLAMA_API_KEY`, `SERPER_API_KEY`, `EXA_API_KEY`, `INSTANTLY_API_KEY`, etc.) are **out of scope** — they are added by their owning agents (via `relay_add_env_var`) when an automation actually uses that service. The Modal CLI's own auth is satisfied by `MODAL_TOKEN_ID` + `MODAL_TOKEN_SECRET` from `.env` (Part A step 6); the framework runtime never reads them.

> **`TRIGGER_PROJECT_ID` is not a secret** — it is a public project externalRef. It lives in `trigger.config.ts` (`project:` field), the only place the `trigger` CLI reads it. Do **not** write it to `.env` or `.env.production`. Never pass `--project-ref` on the CLI.

### Steps

1. **Automation name** (`AskUserQuestion`) — only if `package.json` still contains `"REPLACE-ME-via-system-setup"`. Default suggestion: the repo directory name, lowercased and kebab-cased. Used in steps 3 + 4 below.

2. **Airtable base id** (optional) — only if `src/schema.ts` still contains `BASE_ID = "REPLACE-ME"`. Ask via `AskUserQuestion` whether the first automation uses Airtable. If no, skip and leave the sentinel; the `airtable-agent` fills it later. If yes, capture the Airtable **base id** (`app…`, from the base URL / API docs) via `AskUserQuestion` (cleartext); validate the `app` prefix. `AIRTABLE_TOKEN` is **not** captured here — it is expected to already be in `.env` (or added by `airtable-agent` later).

3. `Edit` `package.json`: `"name": "REPLACE-ME-via-system-setup"` → `"name": "<automation-name>"` (only if the sentinel is still present).

4. `Edit` `modal_bridge.py`: `App("REPLACE-ME-bridge"` → `App("<automation-name>-bridge"` (only if the sentinel is still present).

5. `Edit` `src/schema.ts`: `BASE_ID = "REPLACE-ME"` → `BASE_ID = "<base id>"` (only if Airtable was captured in step 2).

6. Run `npm install` (generates `package-lock.json` + `node_modules/`). Confirms the SDK pins resolve.

No `.env` / `.env.production` edits happen in this part — secret values are owned by the user (Part A), and this skill never writes a secret. The constitution (`prompts/AGENTS.md`) carries no project identity block; the Modal username is reported in Part D and the bridge URL is reported after the first `modal deploy`.

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
4. **Validated `.env` contains** — list the env-var **names** whose presence was confirmed in Part A: `TRIGGER_SECRET_KEY` in `.env` (step 2), `TRIGGER_SECRET_KEY` in `.env.production` (step 2), and `MODAL_TOKEN_ID` + `MODAL_TOKEN_SECRET` in `.env` (step 3 — assumed populated before this skill ran, via `/skill:env-storage` Load or direct paste). Names only — never echo a value or a prefix of one.
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

- **Secrets are never captured or written by this skill.** They live in `.env` / `.env.production`, owned by the user. The user populates `.env` / `.env.production` BEFORE invoking this skill — typically by running `/skill:env-storage` (Load) which copies their master secrets from `~/.pi/agent/skills/env-storage/`; or by pasting Modal + Trigger.dev keys directly. Part A step 2 walks the user through the Trigger.dev paste; step 3 validates Modal's presence. The model never sees a secret value — it only ever confirms env-var **names** by line-prefix count.
- Never echo a secret value back to the user — confirm only the prefix (`tr_dev_…`, `tr_prod_…`, `ak-…`, `as-…`), and only when a value was shown to you (with `env-storage` it is not).
- Never run `modal deploy` — the bridge URL is reported after the first deploy; the constitution (`prompts/AGENTS.md`) carries no project identity block.
- Never write real secrets into committed files — `.env` and `.env.production` are gitignored.
- `TRIGGER_PROJECT_ID` is written to `trigger.config.ts` **only** — never to `.env` or `.env.production`.
- Never overwrite an existing value in `.env` / `.env.production` / `trigger.config.ts` / `modal_bridge.py` / `package.json` / `src/schema.ts`. Sentinel-detect, ask, then targeted `Edit`.
- Never auto-bump a major or minor version in Part C. Patch only by default.
- Service-specific secrets for Airtable (beyond the first base), Unipile, Apify, Ollama, GHL, Notion, Buffer, Serper, Exa, Instantly, etc. are **owned by their per-software agents** — do not add them to `.env` from this skill. The `airtable-agent` is the only exception; Part B step 3 captures the very first Airtable base, after which subsequent Airtable setups are also owned by `airtable-agent`.