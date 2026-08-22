# relay-code-pi — end-to-end runbook

Account-gated: this runbook exercises the real Trigger.dev + Modal + Airtable
paths, so it needs live sandbox credentials. It is the manual counterpart to the
automated pure-core unit tests (`npm test`, 65/65) and the package-load smoke
gate (`pi -e .` → `SMOKE_OK`). Run it once per release before publishing.

The happy path under test: a non-expert automater asks the agent to build a
trivial **Airtable-button-triggered hello-world** — one Trigger.dev task that
logs a greeting, fronted by the Modal bridge. This exercises every tool, the
deploy-order gate, and the secret-mask hook end to end.

---

## 0. Prerequisites

- **Trigger.dev** — a sandbox org + project; `TRIGGER_PROJECT_ID` and a dev
  (`tr_dev_…`) and prod (`tr_prod_…`) `TRIGGER_SECRET_KEY`. CLI logged in
  (`trigger login`).
- **Modal** — a sandbox workspace; `modal token new` completed.
- **Airtable** — a dev base + personal access token (`airtableToken`, `ak-…` /
  `pat…`) and a table with a Button field whose webhook can fire the bridge.
- **Pi** — installed globally (≥ 0.80.6 for `@narumitw/pi-goal` `agent_settled`).
- **relay-code-pi** — built/checked out at
  `…/pi-agent-buiilder/relay-code-pi` with `npm install` already run there
  (the 9 extension deps resolve under its `node_modules/`).
- **No global `@ollama/pi-web-search`** — it registers a `web_search` tool that
  collides with the bundled `pi-web-access` (both register `web_search`) and
  makes pi fatally refuse to load. Confirm
  `~/.pi/agent/settings.json` `packages` does not include it; if present,
  `pi remove npm:@ollama/pi-web-search`.

> **Context-file resolution.** The framework scaffolder (`install-relay-code`)
> ships `CLAUDE.md` + `.claude/`. Pi loads `AGENTS.md` **or** `CLAUDE.md` as the
> project context file, and so does this package: `relay_add_env_var` writes the
> env-table row into whichever of `AGENTS.override.md` → `AGENTS.md` → `CLAUDE.md`
> the project has (defaulting to `AGENTS.md` for a fresh Pi-native project). So
> **no manual rename is needed** — a scaffolded project works as-is, writing the
> env table into its `CLAUDE.md`. (The `.claude/automation/<plan>/progress.md`
> ledger path is a separate framework artifact and stays as-is.)

---

## 1. Scaffold a fresh automation project

```sh
mkdir hello-button && cd hello-button
npx install-relay-code          # copies the framework template, git init, npm install
pi install -l …/pi-agent-buiilder/relay-code-pi   # project-local; writes .pi/settings.json
```

Verify the install is non-destructive:

```sh
git diff -- package.json        # must be empty — pi install never touches the host package.json
npm test                        # the scaffolded project's own vitest must still pass
```

Then confirm the full installed stack loads in the host:

```sh
pi -p "Reply with exactly SMOKE_OK and nothing else."
# expect: SMOKE_OK, exit 0  (11 relay_* tools + 9 extensions load)
```

---

## 2. Persona-guided auth + setup

Have the user (not the agent) run the interactive CLIs, then call
**`relay_setup`** with the sandbox values: `projectRef` (Trigger project id),
`baseId` (Airtable base), `appName` (Modal app name), and the package name. It
fills `trigger.config.ts` `project`, `modal_bridge.py` `App(...)`, `schema.ts`
`BASE_ID`, `package.json` `name`, and the `.env` / `.env.production` skeletons.

Then seed the real secrets **by hand** (never via the agent):
- `.env` → `TRIGGER_SECRET_KEY=tr_dev_…`
- `.env.production` → `TRIGGER_SECRET_KEY=tr_prod_…` (prod deploy requires the
  `tr_prod_` prefix — `relay_deploy_trigger` checks it)
- Airtable token, Modal token per the framework's env table.

Confirm **only the prefix** in chat — never the full value:
`grep -qE '^TRIGGER_SECRET_KEY=tr_prod_' .env.production && echo ok`.

---

## 3. Drive the lifecycle (brainstorm → plan → execute)

Either interactively or over `pi --mode rpc` (event stream):

1. `/relay-brainstorm send-ghl-hello` → produces a spec at
   `docs/specs/send-ghl-hello.md` (frontmatter `slug`/`name`/`trigger_type`/`created`).
2. `/relay-plan send-ghl-hello` → produces a plan at
   `docs/plans/YYYY-MM-DD-send-ghl-hello.md` with `status: planned` and a
   `**Agents:** trigger-dev-agent` (→ `modal-agent`) task line.
3. The agent calls **`relay_lint`** itself → confirm the spec + plan conform
   (0 errors). The report writes to `.pi/relay-lint-report.md`.
4. `/relay-execute send-ghl-hello` → the controller dispatches `trigger-dev-agent`
   (writes + tests the task against the local dev worker) then `modal-agent`
   (bridge), reviews diffs, and finishes.

### Assertions on the resulting files
- `src/trigger/<id>.ts` exists in the canonical
  `export const <camel> = task({ id, run })` shape (`@trigger.dev/sdk` 4.5.11).
- `modal_bridge.py` `ALLOWED_TASKS` contains the task id; if row-scoped,
  `TASK_REQUIRES_RECORD_ID` contains it too (`relay_add_task` synced both).
- `src/config.ts` has a memoised getter (`memo(()=>required("X"))` for required,
  `process.env.X ?? "default"` for optional) — not a bare `process.env` read.
- `src/schema.ts` has the new constant in the right `as const` namespace.
- `.claude/automation/<plan-basename>/progress.md` ledger shows
  `Task 1: complete (commits <base7>..<head7>, review clean)`.
- Plan frontmatter flipped to `status: completed`.

---

## 4. Deploy-order gate (the core safety check)

From a locally-green, committed tree:

1. **`relay_test`** — `npm test` passes (the primary quality gate; surfaces TS errors).
2. **`relay_dev_worker`** `action: "up"` → polls until the dev worker is ready.
3. **`relay_deploy_trigger`** → deploys tasks against `.env.production`.
4. **`relay_deploy_modal`** *before* smoke → **must refuse** with the
   "deploy-gate marker not present" error. This is the gate working.
5. **`relay_smoke_test`** with the task id (+ a throwaway `recordId` starting
   `rec` if row-scoped) → triggers one task, polls the run. On `COMPLETED` it
   writes `.pi/relay-deploy-gate.json`. If it does not pass, **stop** — fix and
   re-run; do not proceed.
6. **`relay_deploy_modal`** *after* smoke → now succeeds and deploys the bridge.

Then trigger the live path: hit the bridge
`/run?task=<id>&recordId=rec…` from the Airtable Button (or curl), and confirm
the run executes in the Trigger.dev dashboard.

---

## 5. Secret-mask spot-check

Inject a fake secret into the conversation (e.g. mention `sk-test-FAKE-1234`)
and have the agent do something that would echo it. Confirm:
- the outbound provider payload (inspect via `pi` debug / the provider request
  event) shows the secret **masked**, not the raw value;
- the agent's bash/write/edit calls receive the real value substituted back
  (`pi-secret-mask` substitutes on the way out, masks on the way in);
- no full secret value appears in chat — only the prefix (`sk-…`, `tr_dev_…`,
  `tr_prod_…`, `ak-…`, `as-…`).

---

## 6. Plain-project regression (post-install, agent not invoked)

With the package installed but no agent turn run, confirm the host's own
framework scripts are unchanged:

```sh
npm test                 # vitest — pass
npm run trigger:dev      # starts the local dev worker (auth-gated; expect it to connect)
npm run migrate          # tsx scripts/migrate-airtable.ts (Airtable-gated; airtable-agent owns this)
```

None of these are affected by `pi install` (it only adds `.pi/`), so failures
here point at a host/credential problem, not at this package.

---

## 7. Pass criteria

The run passes when **all** hold:
- §1 `npm test` + `pi -p … SMOKE_OK` after install;
- §3 `relay_lint` clean; all file assertions hold;
- §4 `relay_deploy_modal` refuses before smoke **and** succeeds after; the live
  bridge trigger executes;
- §5 the fake secret is masked in the provider payload and never printed in full;
- §6 the three host scripts behave as before install.

Record the run (date, pi version, sandbox ids, commit sha of
`relay-code-pi`) in the release notes.