---
name: relay-system-setup
description: "First-run setup for a relay-code automation repo (Modal.com + Trigger.dev). Scaffolds an empty repo from bundled template files, verifies the three CLIs are installed and signed in (context7 → modal → trigger.dev), and captures the one cleartext identifier this skill owns: `TRIGGER_PROJECT_ID` (written to `trigger.config.ts`). Modal/Trigger.dev secrets are owned by the user's CLI sign-in and the user-level env-storage skill — this skill never captures or writes a secret value."
---

# relay-system-setup

First-run setup for a relay-code automation repo. Three parts in sequence:
**Part 0** scaffolds an empty repo from the bundled template tree.
**Part A** gets the tooling ready (install + sign in to all three CLIs), then captures the one cleartext identifier this skill owns: `TRIGGER_PROJECT_ID`.
**Part B** writes the remaining config files (sentinel-gated).
**Part C** reports what ran.

Derive the project root from `CLAUDE_PROJECT_DIR` (or CWD). Use `Edit`, not whole-file `Write`, wherever a targeted replace suffices.

## Secrets

This skill never captures or writes a secret value. It confirms CLI sign-in via `whoami`; it never reads `.env` / `.env.production`. Secret values reach the user's project through two channels, both outside this skill:

- **CLI sign-in.** `modal token set` (writes `~/.modal.toml`) and `trigger login` (writes `~/.trigger.dev/`) authenticate the CLIs themselves. Setup only verifies these are in place.
- **`/skill:env-storage` (Load).** The user-level `env-storage` skill (`pi install npm:env-storage-user-skill@latest`) loads `TRIGGER_SECRET_KEY` (dev into `.env`, prod into `.env.production`), `MODAL_TOKEN_ID`, and `MODAL_TOKEN_SECRET` into the project from `~/.pi/agent/skills/env-storage/`. The user runs Load before smoke-test or deploy.

`TRIGGER_PROJECT_ID` is **not a secret** — it is a public project externalRef. It lives in `trigger.config.ts` only (the `project:` field), never in `.env` / `.env.production`. Never pass `--project-ref` on the CLI. Per-service tokens (Airtable, Unipile, Apify, GHL, Notion, Buffer, Serper, Exa, Instantly, etc.) are owned by their per-software agents and added via `relay_add_env_var` when an automation actually uses the service.

---

## Part 0 — Scaffold a new/empty repo

**Empty-repo detection.** If `trigger.config.ts` is already at the project root, skip Part 0 — the repo is already scaffolded; go straight to Part A.

**Copy the template tree** from this skill's `references/templates/` to the project root, preserving structure. Templates carry the sentinels Part B fills (`REPLACE-ME-via-system-setup`, `project: ""`, `BASE_ID = "REPLACE-ME"`, `App("REPLACE-ME-bridge"`).

| Template | Target |
|---|---|
| `trigger.config.ts` | `trigger.config.ts` |
| `modal_bridge.py` | `modal_bridge.py` |
| `src/config.ts` | `src/config.ts` |
| `src/schema.ts` | `src/schema.ts` |
| `src/trigger/health-check.ts` | `src/trigger/health-check.ts` |
| `package.json` | `package.json` |
| `tsconfig.json` | `tsconfig.json` |
| `.gitignore.template` | `.gitignore` |
| `.env.template` | `.env` |
| `docs/specs/.gitkeep` | `docs/specs/.gitkeep` |
| `docs/plans/.gitkeep` | `docs/plans/.gitkeep` |
| `docs/automations/.gitkeep` | `docs/automations/.gitkeep` |
| `scripts/locate-automation.mjs` | `scripts/locate-automation.mjs` |

`src/trigger/health-check.ts` is the **starter task** — it ships pre-registered in `modal_bridge.py`'s `ALLOWED_TASKS` so the Trigger.dev dev worker always has something to load (avoids `Error: No trigger files found` on `npm run trigger:dev`) and `relay_smoke_test` has a real target for the first deploy-order gate. Replace it (or remove + re-add via `relay_add_task`) once your first real automation is ready.

For most templates the source and target names match, so `cp -r <skill>/references/templates/. <project-root>/` (or `Copy-Item -Recurse` on Windows) copies them in one shot. **Exception — two dotfiles ship under `*.template` because npm drops bare `.gitignore` / `.env` from the tarball;** `Read` each `.X.template` and `Write` it to `.X` (the bundled `.gitignore.template` itself ignores `.env` so it doubles as the project's `.gitignore`). Never overwrite an existing file.

`.env` is scaffolded as a **comment-only stub** listing per-service env-var slots. The user populates it (and `.env.production`) before running `relay_smoke_test` or `relay_deploy_modal` — see Secrets.

After scaffolding, proceed to Part A.

---

## Part A — Tooling ready, then identity (in that order)

Two phases, run sequentially:

**Phase 1 — Tooling ready (install + sign in, in order: ctx7 → modal → trigger).** Get every CLI present and authenticated before asking the user any questions. For each, check `--version`; if missing, install it. Then verify the existing sign-in.

- **Context7:** `ctx7 --version`; install `npm install -g ctx7@latest`. Sign in headless: `ctx7 login --no-browser` (prints a URL the user opens on any device; CLI polls). Verify with `ctx7 whoami`. Fallback: set `CONTEXT7_API_KEY` as an env var instead of OAuth.
- **Modal:** `python -m modal --version`; install `python -m pip install --upgrade "modal>=1.5,<2.0"`. The Modal CLI is typically already signed in via `modal token set` (writes `~/.modal.toml`) or `modal setup` (browser). Verify with `python -m modal profile current`; capture the Modal username for the report. If sign-in is missing, direct the user to `modal setup` (browser) — **do not** paste keys into `.env`; this skill no longer writes secrets.
- **Trigger.dev:** `trigger --version`; install `npm install -g trigger.dev@latest`. Sign in: `trigger login` (no headless flag — opens a browser). If the harness cannot show a browser, instruct the user to complete the login in their browser and report back; verify with `trigger projects list` (or `trigger whoami`). Alternative: set `TRIGGER_ACCESS_TOKEN` as an env var.

If a CLI is already installed **and** already authenticated, skip both steps for it. Do not advance to Phase 2 until all three CLIs are green.

**Phase 2 — Capture `TRIGGER_PROJECT_ID`** (sentinel-gated — skip if already filled).

Only if `trigger.config.ts` still contains `project: ""`.

- `AskUserQuestion` (cleartext): "What's your Trigger.dev project ID? (looks like `proj_…` — copy it from the Trigger.dev dashboard URL for the project.)"
- Validate `^proj_[a-z0-9]+$`; re-ask on mismatch.
- `Edit` `trigger.config.ts`: `project: ""` → `project: "<ref>"` (only if the sentinel is still present).

---

## Part B — Write the remaining config files

Every step is sentinel-gated — if the sentinel value is already filled in, the step is skipped and the existing value is left untouched. `TRIGGER_PROJECT_ID` was written in Part A Phase 2; this part does not re-prompt for it.

### What this skill writes

| Value | Target | Captured by | Sentinel |
|---|---|---|---|
| Automation name | `package.json#name`, `modal_bridge.py` `App("…")` | `AskUserQuestion` (cleartext) | `REPLACE-ME-via-system-setup` in `package.json` |
| Airtable `BASE_ID` (`app…`) | `src/schema.ts` | `AskUserQuestion` (cleartext; optional) | `BASE_ID = "REPLACE-ME"` in `src/schema.ts` |

This skill writes **no secrets** — see Secrets. Per-service tokens beyond the above are owned by their per-software agents.

### Steps

1. **Automation name** — only if `package.json` still contains `"REPLACE-ME-via-system-setup"`. `AskUserQuestion`; default suggestion: the repo directory name, lowercased and kebab-cased. Used in steps 3 + 4.
2. **Airtable base id** (optional) — only if `src/schema.ts` still contains `BASE_ID = "REPLACE-ME"`. Ask whether the first automation uses Airtable. If no, leave the sentinel for `airtable-agent` to fill later. If yes, capture the base id (`app…`) via `AskUserQuestion` and validate the `app` prefix. `AIRTABLE_TOKEN` is not captured here.
3. `Edit` `package.json`: `"name": "REPLACE-ME-via-system-setup"` → `"name": "<automation-name>"` (only if the sentinel is still present).
4. `Edit` `modal_bridge.py`: `App("REPLACE-ME-bridge"` → `App("<automation-name>-bridge"` (only if the sentinel is still present).
5. `Edit` `src/schema.ts`: `BASE_ID = "REPLACE-ME"` → `BASE_ID = "<base id>"` (only if Airtable was captured in step 2).
6. Run `npm install` (generates `package-lock.json` + `node_modules/`). Confirms the SDK pins resolve.

No `.env` / `.env.production` edits happen in this part.

---

## Part C — Report

Print, in this order:

1. **Scaffold** — whether Part 0 ran and which template files it wrote, or "Repo already scaffolded — skipped Part 0."
2. **CLI versions + auth status** — `trigger --version`, `modal --version`, `ctx7 --version`.
3. **Project identity** — call **`relay_automation_info`** and report what it prints: Trigger.dev project ref, automation name, Modal app name, BASE_ID, and whether any sentinel is still unfilled.
4. **Env vars validated** — names only, never a value or prefix. (See Secrets.)
5. **What Part B wrote** — every sentinel replacement that actually happened, or `No changes — project already configured.`
6. **Next steps:**
   > Next: run `/skill:relay-research-automation` to design your first automation, then `/skill:relay-plan-automation <slug>` to write the plan, then `/skill:relay-execute-or-resume-automation <slug>` to build it. The execute skill brings up the local Trigger.dev dev worker and owns both deploy runbooks (dev + prod); deploy the Modal bridge separately with `modal deploy modal_bridge.py`. Before the first `relay_smoke_test` or `relay_deploy_modal` run, execute `/skill:env-storage` (Load) so `TRIGGER_SECRET_KEY` (prod) reaches `.env.production`.

---

## Rules of the road

- **Never overwrite an existing value** in `.env` / `.env.production` / `trigger.config.ts` / `modal_bridge.py` / `package.json` / `src/schema.ts`. Sentinel-detect, ask, then targeted `Edit`.
- **Never run `modal deploy`** from this skill — the bridge URL is reported after the first deploy; the constitution carries no project identity block.
