# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

`relay-code-pi` is a **Pi coding-agent package** — an extension bundle installed into the
[Pi](https://pi.dev) agent (`pi install npm:relay-code-pi@latest -l` for project-local, or
`pi install npm:relay-code-pi@latest` for the global user install)
to help a non-expert build and deploy **relay-code** automations (Modal.com + Trigger.dev).
It is *not* a standalone app and *not* an automation project itself; it ships the tools, skills,
agents, and constitution that Pi uses *inside* a relay-code project's working directory.

The package turns the framework's advisory conventions (lazy-env, schema contract,
`ALLOWED_TASKS` sync, deploy order, secret handling) into **enforced, deterministic Pi tools**
rather than prose for the model to follow.

## Start every task by loading the `pi-api` skill

Before any task, load the **`pi-api` skill** (`.claude/skills/pi-api/SKILL.md`) — no
exceptions. Every task in this repo is Pi-related (the Pi CLI, `pi install` / `pi run`, the
`package.json` `"pi"` manifest), and the skill's `references/` documents the current CLI
surface instead of training-data guesses. Scan the command table in `SKILL.md`, then read the
relevant `references/*.md` file before answering anything about Pi commands, flags,
install/auth, or configuration.

## Commands

```sh
npm install            # resolve the Pi extension peer/deps under node_modules/
npm test               # vitest run — pure-core unit tests (the primary gate; TS pipeline exercised here)
npm run test:watch     # vitest watch
pi install . -l        # set up this repo as a project-local Pi package (writes .pi/settings.json)
pi -e .               # package-load smoke gate — expect SMOKE_OK (loads 10 relay tools + 8 extensions)
pi -p "Reply with exactly SMOKE_OK and nothing else."   # full-stack host load check
```

Run a single test or group:

```sh
npx vitest run -t "addEnvVarToConfig"          # by describe/it name (substring match)
npx vitest run tests/cores.test.ts            # pure-core transform tests (src/cores.ts)
npx vitest run tests/skills.test.ts           # relay-* SKILL.md frontmatter YAML sweep (js-yaml)
```

`npm test` is the gate you should run after any change to `src/` or `tests/`. The project's
`tsconfig.json` type-checks `src/**/*.ts` + `tests/**/*.ts` only — **`extensions/` is excluded**
from the project's TS compilation because it imports Pi runtime APIs
(`@earendil-works/pi-coding-agent`, `pi-subagents`, etc.) resolved only inside a Pi host.
There is no build step; `noEmit: true`.

There is no account-gated E2E test in CI. The account-gated run (real Trigger.dev + Modal +
Airtable) is manual, run once per release.

A local-check gotcha: if `npm:relay-code-pi@latest` is in your Pi `settings.json` (the global
install), running `pi` from inside this checkout loads the package **twice** (global + local) and
the duplicate tool registrations conflict. To avoid this while developing locally (using
`pi install . -l`), drop the `packages` entry from your global `settings.json`. For a one-time
smoke gate without modifying settings, use `pi -e .` with an isolated `HOME`.
`pi -p` needs Pi OAuth credentials (the account-gated check); it can't run unauthenticated.

## Architecture

### The pure-core / thin-glue split (the central design rule)

Every convention-enforcing tool is split across two layers, and you must keep them split:

- **`src/cores.ts`** — pure, side-effect-free functions. They take file **content** (strings) +
  params and return new content. They never touch the filesystem or the Pi runtime, so they
  unit-test with plain Vitest fixtures and **no Pi install**. Every transform (env-var getter,
  schema constant, task scaffold, `ALLOWED_TASKS` sync, locate-output parse, smoke-test
  trigger-parse, dotenv parse, spec/plan lint) lives here.
- **`extensions/relay-tools.ts`** — one file, one default export factory, many
  `pi.registerTool` calls. Each tool's `execute` body is **thin glue**: a file mutation is
  one `mutateFile(path, core)` call — the shared adapter that runs read → pure core → write
  inside `withFileMutationQueue`, so the queue is never skipped — or it shells out via
  `pi.exec` / `fetch` for action tools. The glue **never** holds logic that could be a pure
  function.

When you add or change a tool's behavior, **add the logic to `src/cores.ts` and test it with a
fixture**, then wire it in `extensions/relay-tools.ts`. The reverse (logic in the extension)
breaks testability — the extension can't be unit-tested without a running Pi host.

Fixtures in `tests/fixtures/` (`config.ts`, `schema.ts`, `modal_bridge.py`, `AGENTS.md`) mirror
the real framework template files; tests load them and assert the transformed output.

### What the package ships

The `package.json` `"pi"` block is the manifest Pi reads — `extensions`, `skills`, `prompts`,
`subagents` arrays. Adding a new tool/skill/agent means adding its path there. The 10 tools
are registered in `extensions/relay-tools.ts`; their authoritative list and categories live
there, not here.

The **constitution** (`prompts/AGENTS.md` at the repo root) is the authoritative list of
tool-use rules, deploy order, and security invariants — Pi auto-loads it into the system
prompt on every turn. **That file is the rule book**; if a CLAUDE.md line and an AGENTS.md
line disagree, AGENTS.md wins (it runs in the agent's prompt, CLAUDE.md runs in the
developer's session). The constitution is no longer per-project scaffolded — Pi injects it
from the installed package.

### The deploy-order gate (mechanically enforced, not advisory)

`relay_deploy_modal` **refuses** unless `relay_smoke_test` has written the deploy-gate marker
(`.pi/relay-deploy-gate.json`, status `COMPLETED`). The order is hard:

1. `relay_deploy_trigger` (Trigger.dev prod, reads `.env.production`)
2. `relay_smoke_test` (trigger one task, poll the run; writes the gate marker on pass)
3. `relay_deploy_modal` (refuses before the gate; succeeds after)

Never reverse this. The Modal bridge must read `.env.production` (prod), never `.env` (dev).

### Tool idempotency and anchor errors

All `relay_add_*` tools are **idempotent** — re-running with the same params is a no-op, and the
pure cores detect "already present" before mutating. They throw on a **missing anchor** (e.g.
`export const config = {`, `ALLOWED_TASKS: set[str] = …`) rather than silently corrupting a
hand-edited file. A tool reporting a missing anchor means the project file was hand-edited away
from the framework template — surface this to the user; do not patch it by hand.

### Scaffold templates ship as `*.template` (npm excludes bare dotfiles)

`relay-system-setup` scaffolds a new project from `skills/relay-system-setup/references/templates/`.
Two of those templates are dotfiles — `.gitignore`, `.env` — that **cannot ship under their bare
names**: npm always drops `.gitignore` from the tarball, and the bundled `.gitignore` (which
doubles as the scaffolded project's `.gitignore`, so it must keep ignoring `.env` to protect real
project secrets) would also drop `.env`. So they ship as `.gitignore.template` / `.env.template`,
and `relay-system-setup` Part 0 reads each `*.template` and writes it to the real target name.
The `cp -r templates/. <root>` shortcut does **not** handle these two — they need a name-remapping
Read→Write. Do not "fix" this by renaming them back to bare names or removing the ignore rules —
either breaks shipping or leaks project secrets. `.env` is a comment-only stub listing
per-service env-var slots; real values reach `.env` and `.env.production` via the user-level
`env-storage` skill (Load), which the user runs **after** `relay-system-setup` completes.

### Template defaults: `maxDuration` and the starter task

Two template-level defaults keep `npm run trigger:dev` clean from the first run
(observed in 0.5.x: both were missing and the dev worker died with
`Error: The "maxDuration" trigger.config option is now required, and must be at
least 5 seconds` followed by `Error: No trigger files found`):

- `trigger.config.ts` ships with `maxDuration: 300` (5 minutes — a safe default
  for a starter automation). Trigger.dev CLI ≥ 4.5 requires this option; do not
  remove it from the template. Individual tasks may override per-task.
- `src/trigger/health-check.ts` ships as a real (not TODO) starter task and is
  pre-registered in `modal_bridge.py`'s `ALLOWED_TASKS`. Without a trigger file
  under `dirs`, the dev worker fails to start. The starter task also gives
  `relay_smoke_test` a real target for the first deploy-order gate. Real
  automations replace it (or add alongside via `relay_add_task`).

### Context-file resolution

Pi loads a project's context as `AGENTS.override.md` → `AGENTS.md` → `CLAUDE.md` (default
`AGENTS.md`). `relay_add_env_var` writes its env-table row into whichever of these exists
(`cores.pickContextFile`). A scaffolded relay-code project ships **no** root context file —
the constitution lives in `prompts/AGENTS.md` (system-prompt injection, not a context file) —
so the env-table write degrades gracefully (the env var still lands in `src/config.ts`, the
authoritative record; the extension reports "env table NOT updated"). `.env` is scaffolded as
a comment-only stub (no `KEY=value` lines yet); real values reach it via the user-level
`env-storage` skill (Load) or by direct paste, both done **before** `relay-system-setup`. The
`.env.template` under `skills/relay-system-setup/references/templates/` is user-edited (do not
auto-edit it). `.env.production` is no longer scaffolded — the user owns that file (load via
`env-storage` Load or direct paste) if their automation needs it. `TRIGGER_PROJECT_ID` lives in
`trigger.config.ts` (not `.env`).

## Conventions to follow when editing this repo

- **Keep cores pure.** New transform → `src/cores.ts` + a fixture-backed test in
  `tests/cores.test.ts`; the extension just reads, calls, writes. No `fs`, no `pi.*`, no
  `process.env` inside `src/cores.ts`.
- **Windows is a first-class host** (`process.platform === "win32"` paths exist in the
  extension: `npm.cmd`, `taskkill /T /F`, `shell: true` for the detached dev worker). Don't
  remove them.
- **Secrets handling is governed by the constitution** — see `prompts/AGENTS.md`
  (Security invariants + the `env-storage` references in Skills). The agent never types a
  secret value into a tool input; when describing secrets in tool output or docs, confirm
  only the prefix (`tr_dev_…`, `tr_prod_…`, `ak-…`, `as-…`).
- The `package.json` `"pi"` block is the manifest Pi reads — `extensions`, `skills`, `prompts`,
  `subagents` arrays. Adding a new extension/skill/agent means adding its path here.

## Key references in-repo

- `prompts/AGENTS.md` — the constitution (repo root, also shipped in the npm tarball);
  the authoritative list of tool-use rules. Pi auto-injects it into the system prompt on
  every turn.

## Publishing this package (and its sibling `env-storage-user-skill`)

`relay-code-pi` is published as `npm:relay-code-pi`; its sibling user-level skill is published
as `npm:env-storage-user-skill`. Both publish flows are identical.

**Auth — granular access token with Bypass-2FA.** The maintainer account has 2FA enabled, so
`npm login` + `npm publish` from a non-interactive shell fails with `code EOTP`. Use a
**granular access token** (legacy "Automation" tokens were killed in November 2025) with
**Bypass-2FA** enabled at creation, restricted to **publish only this package** and **only to
the `latest` dist-tag**. Register it once per machine:

```sh
npm config set //registry.npmjs.org/:_authToken=npm_xxxxxxxxxxxxxxxxxxxx
```

npm writes the line to `~/.npmrc` silently — `npm config get` returns `protected` rather than
the value, by design. **Revoke the token on https://www.npmjs.com → Access Tokens when you
stop using it** — Bypass-2FA tokens are high-value credentials. Note: Bypass-2FA tokens **lose
direct-publish access in January 2027**; rotate to OIDC-from-CI or interactive OTP before then.

**Per-version publish.** From the package root (`relay-code-pi/` or `env-storage-user-skill/`):

1. Bump `version` in `package.json` by hand (never `npm version` on a Pi package — keep the
   diff reviewable). Patch for typo / copy fixes, minor for new SKILL.md sections or assets,
   major for breaking changes to the Load/Update or scaffold contract.
2. Update the README **Version history** table — append a row for the new version.
3. Commit, tag, and push the release on `main` — **every npm version must exist on GitHub**.
   A version published with no matching git commit is unrecoverable drift (see the
   0.5.1/0.5.2/0.5.5 rows in the README):
   ```sh
   git add package.json README.md    # add ONLY the release files — never `git add -A`
   git commit -m "0.6.0"             # bare version, matching the existing convention
   git tag v0.6.0
   git push origin main && git push origin --tags
   ```
   (Optional pre-flight: `npm pack --dry-run` before committing catches a bad `files` list
   early; the required order is commit → tag → push → dry-run → publish.)
4. `npm pack --dry-run` — confirm only the intended files ship. For relay-code-pi that means
   `extensions/`, `src/`, `skills/`, `agents/`, `prompts/`, plus `package.json` + `README.md` +
   `LICENSE`, **plus the bundled `node_modules/` of the 6 external pi packages** (`pi-subagents`,
   `pi-background-tasks`, `pi-context-usage`, `@juicesharp/rpiv-ask-user-question`,
   `@juicesharp/rpiv-todo`, `@llblab/pi-telegram` — see the bundle note below). The `npm pack`
   dry-run summary prints `bundled files: 0`, which is a **misleading npm display bug**; the
   real tarball *does* contain `node_modules/` (verify with `tar tzf <pkg>.tgz | grep node_modules`).
   For env-storage-user-skill it means only what `package.json`'s `"files": ["skills"]`
   allows (`skills/` + `package.json` + `README.md`). **Never** ship real `.env` files —
   accidental `npm publish` of a secrets-bearing `.env` is unrecoverable.
5. `npm publish`.
6. Verify with `npm view <package>` — there is a registry propagation lag after publish.
   The HTTP PUT returns **202 Accepted** immediately, but the tarball then has to be uploaded
   to the CDN, indexed, and the `latest` dist-tag rolled forward. For a small package (~5
   files, a few KB) it's usually ~30 seconds; for a large tarball (relay-code-pi at ~7.6 MB /
   ~6.7k files, own + bundled `node_modules/`) it took **25 minutes** in observed practice — plan for 10-30 minutes before
   giving up. `npm view` will 404 the entire time, and `curl -sI https://registry.npmjs.org/<pkg>/-/<pkg>-<version>.tgz`
   will return 404. The publish itself was committed the moment npm's log showed
   `http fetch PUT 202` + `verbose exit 0` + `info ok` — that's the success signal; the
   long wait is CDN/index propagation, not a publish failure. **Do NOT re-run `npm publish`
   while waiting** — the version is committed server-side and a retry will fail with
   `EPUBLISH` the moment the original surfaces. Confirm `version`, `maintainers`, and
   `dist.tarball` (a fresh `registry.npmjs.org/...` URL with a new `shasum` integrity hash)
   once they appear.

**What each package's tarball contains** (constrained by `"files"` + `package.json` `"pi"` block):

- `relay-code-pi`: `extensions/`, `src/`, `skills/`, `agents/`, `prompts/`, `package.json`,
  `README.md`, `LICENSE`, **plus the bundled `node_modules/` of the 6 external pi packages**
  (see the bundle note below). `src/` must ship — `extensions/relay-tools.ts` imports
  `../src/cores`; dropping it from the `"files"` whitelist would break every tool after
  install. The `"pi"` block tells Pi which paths to register at install.

**Why relay-code-pi must `bundleDependencies` its external pi packages.** The `pi` manifest
references external pi packages via literal `node_modules/<pkg>` paths
(`node_modules/@llblab/pi-telegram/index.ts`, `node_modules/pi-subagents/skills`, …). Pi loads
each installed package with its **own module root** and does **not** walk up to the shared
parent `node_modules` ("separate module roots, so separate installs do not collide or share
modules"). So a dep that npm **hoists** out of the package's own `node_modules` becomes
invisible to Pi — its extension + skills silently fail to load (this is why `@llblab/pi-telegram`
was missing after 0.5.5: it was hoisted, so `/skill:telegram-*` and its tools never registered).
`bundleDependencies` forces all 6 listed packages (and their transitive deps) into the
package's own `node_modules/` in the tarball, so the literal manifest paths always resolve.

**Spelling gotcha — use `bundleDependencies` (no "d").** The older `bundledDependencies`
spelling is **deprecated**: npm 9 warns, npm 10 **throws**. (That deprecation noise is what
prompted 0.5.3 to delete the field entirely — the wrong cure; the right one was to rename it.)
Keep the field spelled `bundleDependencies` and keep all 6 packages listed whenever you add or
remove a `node_modules/<pkg>` reference from the `pi` manifest — a referenced-but-not-bundled
package will hoist and silently fail to load.
- `env-storage-user-skill`: only `skills/env-storage/{SKILL.md, assets/.env,
  assets/.env.production}` + `package.json` + `README.md` (the `"files": ["skills"]` field
  prevents the rest of the repo from going into the tarball). The `pi.skills: ["./skills"]`
  manifest tells Pi to auto-discover the `skills/env-storage/` subfolder and install it at the
  user level (`~/.pi/agent/skills/env-storage/`).

**Re-install safety.** A user re-running `pi install npm:env-storage-user-skill@latest` gets
fresh `SKILL.md` + `assets/` from the tarball but the **user-data `.env` + `.env.production`
masters at `~/.pi/agent/skills/env-storage/` are never touched** — Pi's package install only
manages skill files, not user data. Same protection for relay-code-pi: a re-install overwrites
the project's `extensions/`, `skills/`, `agents/`, `prompts/`, but never the project's own
`.env` / `.env.production`.