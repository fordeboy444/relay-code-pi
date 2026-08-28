# relay-code-pi

A [Pi](https://pi.dev) coding-agent package for the
[relay-code](https://github.com/fordeboy444/relay-code) automation framework
— Modal.com + Trigger.dev. It lets a non-expert "automater" build and deploy
production-ready automations end-to-end by mirroring the framework's three-phase
lifecycle (research → plan → execute) and turning its conventions
(lazy-env pattern, schema contract, `ALLOWED_TASKS` sync, deploy order, secret
handling) from advisory prose into **enforced, deterministic Pi tools**.

## Install

Project-local (recommended — installs to `.pi/settings.json`, shareable with your team, auto-installs on trust):

```sh
pi install npm:relay-code-pi@latest -l
```

Global (installs to `~/.pi/agent/settings.json`):

```sh
pi install npm:relay-code-pi@latest
```

Use `-l` for project-local (writes `.pi/settings.json`, shareable with your team, auto-installs on trust). Drop `-l` for the global user install.

Requires [Pi](https://pi.dev) ≥ 0.80.6 (for `@narumitw/pi-goal` `agent_settled`).

## What it ships

- **10 deterministic tools** (`extensions/relay-tools.ts`) — action tools that
  wrap the framework's CLIs (`relay_test`, `relay_deploy_trigger`,
  `relay_deploy_modal`, `relay_smoke_test`, `relay_dev_worker`,
  `relay_locate_automation`) + convention-enforcing tools
  (`relay_add_task`, `relay_add_env_var`, `relay_add_schema_field`) +
  a conformance `relay_lint`. A `/plan` command toggles Plannotator plan mode.
- **Skills** (`skills/`) — setup + lifecycle orchestration
  (`relay-system-setup` / `relay-research-automation` / `relay-plan-automation` /
  `relay-execute-or-resume-automation` / `relay-update-or-fix-automation` /
  `relay-sub-agent-builder`) and vendored integration API docs.
- **Constitution** — the framework's security rules and deploy order, shipped in the
  package as `prompts/AGENTS.md`, which Pi injects from the installed package into the
  system prompt every turn. It carries no project state; per-project progress lives in
  `docs/automations/<plan>/progress.md`, read on demand via `relay_locate_automation`.
- **7 sub-agents** (`agents/`) — gated fan-out via `pi-subagents`
  (airtable, apify, composio, gohighlevel, modal, trigger-dev, unipile).

## Safety gates

- `relay_deploy_modal` **refuses** until `relay_smoke_test` writes the
  deploy-gate marker — the deploy order is mechanically enforced, not advisory.
- Secret values live in `.env` / `.env.production`. The user installs the
  user-level `env-storage` skill at `~/.pi/agent/skills/env-storage/` (a
  separate Pi skill, **not shipped with this package**) and runs
  `/skill:env-storage` (Load) BEFORE invoking `relay-system-setup` — or
  pastes Modal + Trigger.dev keys directly into the project's `.env` /
  `.env.production`. The agent never types a secret value into a tool
  input, so secrets never enter the model context.
- File-mutating tools run inside `withFileMutationQueue` and throw on a
  missing anchor rather than silently corrupting a hand-edited file.

## Develop

```sh
npm install
npm test          # vitest — pure-core unit tests
pi -e .           # package-load smoke gate (expect SMOKE_OK)
```

## Installing env-storage

The `env-storage` skill is a **separate** Pi package (`env-storage-user-skill`),
installed once per machine at the user level. It does NOT ship with this
package. To install:

```sh
pi install npm:env-storage-user-skill@latest
```

The skill content is dropped into `~/.pi/agent/skills/env-storage/`, where
Pi auto-discovers it globally. From any project, run `/skill:env-storage`
to **Load** the user's master `.env` + `.env.production` secrets into the
project, or **Update** the masters from the project. Run Load **before**
invoking `/skill:relay-system-setup`.

## Upgrading from ≤ 0.4.1

Earlier versions of `relay-code-pi` shipped `skills/env-storage/` inside
the package. That folder is now removed — `pi update` / `npm update` of
this package will no longer carry the skill. If you relied on the
package-shipped env-storage skill, install it separately:

```sh
pi install npm:env-storage-user-skill@latest
```

Existing user-data masters at `~/.pi/agent/skills/env-storage/.env` and
`.env.production` are preserved across the upgrade — the new package
install only adds the skill files (`SKILL.md` + `assets/`).

## Version history

Current version: **0.6.0**. The publish flow keeps this table in sync — every release appends
a row (see `CLAUDE.md` → Publishing). Versions marked "(published; no matching git commit —
pre-reconcile drift)" exist on npm but were never recorded as a git commit on `main`; do not
create commits or tags for them retroactively.

| Version | What changed |
| --- | --- |
| 0.1.0 | Initial release — deterministic relay-code tools, lifecycle skills, 6 sub-agents, and the constitution. |
| 0.1.1 | Bundled third-party pi-extensions into the tarball so they load after `pi install`; added the `files` whitelist + MIT LICENSE. |
| 0.2.0 | Restructured lifecycle skills (consultation / plan / execute / sub-agent-builder); added the `apify-actor-development` skill; dropped the Telegram extension; stopped tracking `.pyc` bytecode. |
| 0.2.1 | Bundled `pi-context-usage` for `/context` visualization. |
| 0.3.0 | Dropped `before_agent_start` constitution injection and the bundled pi-goal / plannotator / pi-web-access packages. |
| 0.3.1 | Fixed the published tarball to include `patches/`. |
| 0.4.0 | Removed pi-secret-mask; shipped the `.env-storage` skill in-package; moved the constitution into `prompts/`. |
| 0.4.1 | Scaffolded dotfiles now ship as `*.template` (npm drops bare dotfiles); `.env-storage` now manages `.env.production`. |
| 0.5.0 | Split `env-storage` into its own user-level npm package (`env-storage-user-skill`) and dropped it from this package. |
| 0.5.1 | (published; no matching git commit — pre-reconcile drift) |
| 0.5.2 | (published; no matching git commit — pre-reconcile drift) |
| 0.5.3 | Deleted the dependency-bundling field (deprecated-spelling cleanup); added the pi-claude-marketplace extension; added the `health-check` starter task and `maxDuration` defaults to the scaffold; added `prompts/` to the publish whitelist. |
| 0.5.4 | Dropped the pi-claude-marketplace extension added in 0.5.3 (no consumer in the package). |
| 0.5.5 | (published; no matching git commit — pre-reconcile drift; the release in which `@llblab/pi-telegram` was re-added without `bundleDependencies`, so it hoisted and its tools stopped loading) |
| 0.5.6 | Restored `bundleDependencies` (correct spelling, all 6 external pi packages listed) and re-added `@llblab/pi-telegram` to the manifest, fixing the pi-telegram load failure that first appeared after 0.5.5. |
| 0.5.7 | Architecture deepening from the codebase review (no behavior change): deploy-gate + dev-worker state machines moved into pure cores (`src/cores.ts`), new `mutateFile` mutation adapter in the tool glue, spec/plan/roster/deploy-order prose anchored to their canonical constants, and the six-agent "Context — where to look" preamble template aligned to the shipped agents. |
| 0.6.0 | Dev-docs updates (no behavior change): documented `pi install . -l` project-local setup and clarified the local-check gotcha for running `pi` from inside the checkout. |

## License

MIT