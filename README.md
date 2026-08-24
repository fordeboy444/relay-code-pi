# relay-code-pi

A [Pi](https://pi.dev) coding-agent package for the
[relay-code](https://github.com/fordeboy444/relay-code) automation framework
— Modal.com + Trigger.dev. It lets a non-expert "automater" build and deploy
production-ready automations end-to-end by mirroring the framework's three-phase
lifecycle (research → plan → execute) and turning its conventions
(lazy-env pattern, schema contract, `ALLOWED_TASKS` sync, deploy order, secret
handling) from advisory prose into **enforced, deterministic Pi tools**.

## Install

```sh
pi install npm:relay-code-pi@latest  # from the npm gallery
# or, project-local from a checkout:
pi install -l ./relay-code-pi
```

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
- **Constitution** — the framework's security rules and deploy order, scaffolded by
  `relay-system-setup` as the project-root `prompts/AGENTS.md`, which Pi auto-discovers
  and bundles into the system prompt every turn. It carries no project state; per-project
  progress lives in `docs/automations/<plan>/progress.md`, read on demand via
  `relay_locate_automation`.
- **6 sub-agents** (`agents/`) — gated fan-out via `pi-subagents`
  (airtable, apify, gohighlevel, modal, trigger-dev, unipile).

## Safety gates

- `relay_deploy_modal` **refuses** until `relay_smoke_test` writes the
  deploy-gate marker — the deploy order is mechanically enforced, not advisory.
- Secret values live in `.env` / `.env.production`, written by the
  `.env-storage` skill — the agent never types a secret value into a tool
  input, so secrets never enter the model context.
- File-mutating tools run inside `withFileMutationQueue` and throw on a
  missing anchor rather than silently corrupting a hand-edited file.

## Develop

```sh
npm install
npm test          # vitest — pure-core unit tests
pi -e .           # package-load smoke gate (expect SMOKE_OK)
```

See `docs/e2e-runbook.md` for the account-gated end-to-end run, and
`docs/superpowers/specs/2026-08-22-relay-code-pi-design.md` for the design.

## License

MIT