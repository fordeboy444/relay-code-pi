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

## Commands

```sh
npm install            # resolve the Pi extension peer/deps under node_modules/
npm test               # vitest run — pure-core unit tests (the primary gate; TS pipeline exercised here)
npm run test:watch     # vitest watch
pi -e .               # package-load smoke gate — expect SMOKE_OK (loads 10 tools + 7 extensions)
pi -p "Reply with exactly SMOKE_OK and nothing else."   # full-stack host load check
```

Run a single test or group:

```sh
npx vitest run -t "addEnvVarToConfig"          # by describe/it name (substring match)
npx vitest run tests/cores.test.ts            # the whole file (there is only one test file)
```

`npm test` is the gate you should run after any change to `src/` or `tests/`. The project's
`tsconfig.json` type-checks `src/**/*.ts` + `tests/**/*.ts` only — **`extensions/` is excluded**
from the project's TS compilation because it imports Pi runtime APIs
(`@earendil-works/pi-coding-agent`, `pi-subagents`, etc.) resolved only inside a Pi host.
There is no build step; `noEmit: true`.

There is no account-gated E2E test in CI. The account-gated run (real Trigger.dev + Modal +
Airtable) is manual — see `docs/e2e-runbook.md`, run once per release.

A local-check gotcha: if `npm:relay-code-pi@latest` is in your Pi `settings.json` (the global
install), running `pi` from inside this checkout loads the package **twice** (global + local) and
the duplicate tool registrations conflict. For a clean local smoke gate, run `pi -e .` with an
isolated `HOME`, or drop the `packages` entry from `settings.json` while developing locally.
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
  `pi.registerTool` calls. Each tool's `execute` body is **thin glue**: read file → call a
  pure core → write back, all inside `withFileMutationQueue`, or shell out via `pi.exec` /
  `fetch` for action tools. The glue **never** holds logic that could be a pure function.

When you add or change a tool's behavior, **add the logic to `src/cores.ts` and test it with a
fixture**, then wire it in `extensions/relay-tools.ts`. The reverse (logic in the extension)
breaks testability — the extension can't be unit-tested without a running Pi host.

Fixtures in `tests/fixtures/` (`config.ts`, `schema.ts`, `modal_bridge.py`, `AGENTS.md`) mirror
the real framework template files; tests load them and assert the transformed output.

### What the package ships

- **10 tools** (registered in `extensions/relay-tools.ts`): convention-enforcers
  (`relay_add_env_var`, `relay_add_schema_field`, `relay_add_task`) that mutate the project's
  `src/config.ts`, `src/schema.ts`, `modal_bridge.py`, and context-file env table; action tools
  (`relay_locate_automation`, `relay_test`, `relay_dev_worker`, `relay_deploy_trigger`,
  `relay_smoke_test`, `relay_deploy_modal`) that shell out or fetch — **never MCP**; and
  `relay_lint` (conformance checker the agent self-calls on its own specs/plans).
  A `/plan` **command** (not a tool — does not count toward the tool set) toggles Plannotator
  plan mode via its event bus.
- **Constitution** (`skills/relay-system-setup/references/templates/prompts/AGENTS.md`) — the
  always-on ruleset (tool-use rules, deploy order, security invariants, lifecycle conventions).
  `relay-system-setup` scaffolds it as the project-root `prompts/AGENTS.md`, which Pi
  auto-discovers and bundles into the system prompt on every turn — there is **no**
  `before_agent_start` injection handler. It carries **no project state**; per-project state
  lives in `docs/automations/<plan>/progress.md`, and the agent reads it on demand via
  `relay_locate_automation` (whose first output line is the progress banner). If you change a
  rule in the template, it changes the agent's behavior in every project scaffolded after
  that; already-scaffolded projects carry their own copy.
- **Skills** (`skills/`) — the setup + lifecycle orchestration
  (`relay-system-setup` → `relay-research-automation` → `relay-plan-automation` →
  `relay-execute-or-resume-automation`), `relay-update-or-fix-automation` (delta vs an existing
  spec/plan), `relay-sub-agent-builder` (author new sub-agents), and vendored integration API docs
  (Modal, Trigger.dev, Airtable, GoHighLevel, Unipile, Google, Context7, Pi).
- **6 sub-agents** (`agents/*.md`) — gated fan-out via `pi-subagents`:
  `airtable-agent`, `apify-agent`, `gohighlevel-agent`, `modal-agent`, `trigger-dev-agent`,
  `unipile-agent`. These are the only agent names `relay_lint` accepts on a plan's `**Agents:**`
  lines (`VALID_AGENT_NAMES` in `src/cores.ts`).

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
Three of those templates are dotfiles — `.gitignore`, `.env`, `.env.production` — that **cannot
ship under their bare names**: npm always drops `.gitignore` from the tarball, and the bundled
`.gitignore` (which doubles as the scaffolded project's `.gitignore`, so it must keep ignoring
`.env` / `.env.production` to protect real project secrets) would also drop `.env` /
`.env.production`. So they ship as `.gitignore.template` / `.env.template` /
`.env.production.template`, and `relay-system-setup` Part 0 reads each `*.template` and writes it
to the real target name. The `cp -r templates/. <root>` shortcut does **not** handle these three
— they need a name-remapping Read→Write. Do not "fix" this by renaming them back to bare names or
removing the ignore rules — either breaks shipping or leaks project secrets. `.env` and
`.env.production` are comment-only stubs; real values reach them via `env-storage` (Load) or
direct paste during `relay-system-setup`.

### Context-file resolution

Pi loads a project's context as `AGENTS.override.md` → `AGENTS.md` → `CLAUDE.md` (default
`AGENTS.md`). `relay_add_env_var` writes its env-table row into whichever of these exists
(`cores.pickContextFile`). A scaffolded relay-code project ships **no** root context file —
the constitution lives in `prompts/AGENTS.md` (system-prompt injection, not a context file) —
so the env-table write degrades gracefully (the env var still lands in `src/config.ts`, the
authoritative record; the extension reports "env table NOT updated"). `.env` and
`.env.production` are scaffolded as comment-only stubs (no `KEY=value` lines yet); real
values reach them via the user-level `env-storage` skill (Load) or by direct paste, both
done **before** `relay-system-setup`. The `.env` / `.env.production` templates under
`skills/relay-system-setup/references/templates/` are user-edited (do not auto-edit them).
`TRIGGER_PROJECT_ID`
lives in `trigger.config.ts` (not `.env`).

## Conventions to follow when editing this repo

- **Keep cores pure.** New transform → `src/cores.ts` + a fixture-backed test in
  `tests/cores.test.ts`; the extension just reads, calls, writes. No `fs`, no `pi.*`, no
  `process.env` inside `src/cores.ts`.
- **Windows is a first-class host** (`process.platform === "win32"` paths exist in the
  extension: `npm.cmd`, `taskkill /T /F`, `shell: true` for the detached dev worker). Don't
  remove them.
- **Secrets are never echoed** — secret values live in `.env` / `.env.production`. The
  `env-storage` skill is a **separate** Pi package (`env-storage-user-skill`), installed once
  per machine at the user level (`~/.pi/agent/skills/env-storage/`, NOT shipped with this
  package). The user runs `/skill:env-storage` (Load) BEFORE invoking `relay-system-setup`
  to copy their master `.env` + `.env.production` into the project, OR pastes Modal +
  Trigger.dev keys directly into the project's `.env` / `.env.production`. The agent never
  types a secret value into a tool input. When describing secrets in tool output or docs,
  confirm only the prefix (`tr_dev_…`, `tr_prod_…`, `ak-…`, `as-…`).
- `.pi/` is git-ignored runtime scratch (dev-worker pid/log, deploy-gate marker, lint report);
  never commit it.
- The `package.json` `"pi"` block is the manifest Pi reads — `extensions`, `skills`, `prompts`,
  `subagents` arrays. Adding a new extension/skill/agent means adding its path here.

## Key references in-repo

- `docs/e2e-runbook.md` — the account-gated end-to-end run (Trigger.dev + Modal + Airtable).
- `docs/superpowers/specs/2026-08-22-relay-code-pi-design.md` — the design doc.
- `skills/relay-system-setup/references/templates/prompts/AGENTS.md` — the constitution
  template; `relay-system-setup` scaffolds it as the project-root `prompts/AGENTS.md`. The
  authoritative list of tool-use rules.

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
2. `npm pack --dry-run` — confirm only the intended files ship. For relay-code-pi that means
   `extensions/`, `skills/`, `agents/`, `prompts/`, plus `package.json` + `README.md` +
   `LICENSE`. For env-storage-user-skill it means only what `package.json`'s `"files":
   ["skills"]` allows (`skills/` + `package.json` + `README.md`). **Never** ship real
   `.env` files — accidental `npm publish` of a secrets-bearing `.env` is unrecoverable.
3. `npm publish`.
4. Verify with `npm view <package>` — there is a ~5s registry propagation lag right after
   publish (the first `npm view` may 404; just retry). Confirm `version`, `maintainers`, and
   `dist.tarball` (a fresh `registry.npmjs.org/...` URL with a new `shasum` integrity hash).

**What each package's tarball contains** (constrained by `"files"` + `package.json` `"pi"` block):

- `relay-code-pi`: `extensions/`, `skills/`, `agents/`, `prompts/`, `package.json`,
  `README.md`, `LICENSE`. The `"pi"` block tells Pi which paths to register at install.
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