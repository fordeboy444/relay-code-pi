// relay-code-pi — the Pi extension factory.
//
// One file, one default export, many pi.registerTool calls. The constitution
// ships in the scaffolded project AGENTS.md (written by relay-system-setup)
// and loads as project context — it is not injected by a handler here.
//
// Convention-enforcing tools (relay_add_*) wrap their whole read-modify-write in
// withFileMutationQueue and delegate the actual transform to a pure core in
// ../src/cores (unit-tested). Action tools shell out via pi.exec or fetch — never
// MCP. relay_deploy_modal refuses until relay_smoke_test has written the
// deploy-gate marker (the deploy-order gate).

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { withFileMutationQueue } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";
import { StringEnum } from "@earendil-works/pi-ai";
import { readFile, writeFile, mkdir, open, rm, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve, join, dirname, basename } from "node:path";
import { spawn } from "node:child_process";
import * as cores from "../src/cores";

export default function (pi: ExtensionAPI) {
  // -------------------------------------------------------------------------
  // Shared helpers
  // -------------------------------------------------------------------------
  const proj = (cwd: string, rel: string): string => resolve(cwd, rel);
  // Pick the project context file the way Pi loads it (AGENTS.override.md →
  // AGENTS.md → CLAUDE.md, default AGENTS.md) — see cores.pickContextFile. Lets
  // the env-table tool write to the project AGENTS.md that relay-system-setup
  // scaffolds (which ships AGENTS.md, merged with the constitution) without a
  // manual rename.
  const resolveContextFile = (cwd: string): string =>
    proj(cwd, cores.pickContextFile((name) => existsSync(proj(cwd, name))));
  const text = (t: string) => ({
    content: [{ type: "text" as const, text: t }],
    details: {},
  });
  const sleep = (ms: number, signal?: AbortSignal) =>
    new Promise<void>((res, rej) => {
      const t = setTimeout(res, ms);
      signal?.addEventListener("abort", () => {
        clearTimeout(t);
        rej(new Error("Cancelled"));
      }, { once: true });
    });
  const tail = (s: string, n = 1500): string =>
    s.length > n ? "…" + s.slice(-n) : s;
  const NPM = process.platform === "win32" ? "npm.cmd" : "npm";

  // =========================================================================
  // Convention-enforcing tools (withFileMutationQueue + pure cores)
  // =========================================================================

  pi.registerTool({
    name: "relay_add_env_var",
    label: "Add env var",
    description:
      "Add an environment variable to src/config.ts in the lazy-env pattern and a row to the AGENTS.md env table. Required vars get a memoised getter (memo(()=>required('X')) + config accessor); optional vars get an inline process.env.X ?? default accessor. Optionally also adds a lazy auth-header function. Idempotent — safe to re-run.",
    promptSnippet: "Add an env var to src/config.ts (lazy-env pattern) + AGENTS.md env table",
    promptGuidelines: [
      "Use relay_add_env_var whenever an automation introduces a new env var (API key, base URL, token) — never hand-edit src/config.ts.",
    ],
    parameters: Type.Object({
      name: Type.String({ description: "Env var name, e.g. STRIPE_API_KEY" }),
      required: Type.Boolean({
        description: "true = required (memoised getter); false = optional (inline default)",
      }),
      default: Type.Optional(Type.String({ description: "Default value for optional vars" })),
      getterName: Type.Optional(
        Type.String({ description: "config accessor name; defaults to camelCased env name" }),
      ),
      authHeaderName: Type.Optional(
        Type.String({ description: "If set, also add a lazy auth-header function with this name" }),
      ),
      headerFormat: Type.Optional(
        Type.String({
          description: 'Return expression for the auth header fn, e.g. "Bearer " + config.x',
        }),
      ),
      agentsNotes: Type.Optional(
        Type.String({ description: "Notes column for the AGENTS.md env table row" }),
      ),
    }),
    async execute(_id, params, signal, _onUpdate, ctx) {
      if (signal?.aborted) return text("Cancelled");
      const cfgPath = proj(ctx.cwd, "src/config.ts");
      const agentsPath = resolveContextFile(ctx.cwd);
      const agentsLabel = basename(agentsPath);

      const cfg = await withFileMutationQueue(cfgPath, async () => {
        const cur = await readFile(cfgPath, "utf8");
        const r = cores.addEnvVarToConfig(cur, params);
        await writeFile(cfgPath, r.content, "utf8");
        return r;
      });

      let agentsLine = `${agentsLabel} env table not updated`;
      try {
        await withFileMutationQueue(agentsPath, async () => {
          const cur = await readFile(agentsPath, "utf8");
          const next = cores.addEnvVarRowToAgents(cur, {
            name: params.name,
            required: params.required,
            notes: params.agentsNotes,
          });
          await writeFile(agentsPath, next, "utf8");
        });
        agentsLine = `${agentsLabel} env table row added`;
      } catch (e) {
        agentsLine = `${agentsLabel} env table NOT updated: ${e instanceof Error ? e.message : String(e)}`;
      }

      return text(
        `Added env var ${params.name} to src/config.ts ` +
          `(memo getter: ${cfg.memoGetterAdded}, config getter: ${cfg.configGetterAdded}, auth header: ${cfg.authHeaderAdded}).\n` +
          `${agentsLine}.\n` +
          `Set the value in .env (dev) and .env.production (prod) — never commit secrets.`,
      );
    },
  });

  pi.registerTool({
    name: "relay_add_schema_field",
    label: "Add schema field",
    description:
      "Add a constant to a namespaced `as const` block in src/schema.ts (F, TABLE, GHL, UNIPILE, APIFY). Creates or uncomments the block if absent. Adds the CONSTANT ONLY — the airtable-agent owns the Airtable FieldSpec + npm run migrate; do not use this for migration. Idempotent.",
    promptSnippet: "Add a constant to a namespaced block in src/schema.ts",
    promptGuidelines: [
      "Use relay_add_schema_field for every new field name, table id, or integration constant in src/schema.ts — never hand-edit the as-const blocks.",
      "Use relay_add_schema_field only for schema constants; the airtable-agent owns npm run migrate — there are no Airtable-migration tools.",
    ],
    parameters: Type.Object({
      namespace: StringEnum(["F", "TABLE", "GHL", "UNIPILE", "APIFY"] as const, {
        description: "Which namespaced block to edit",
      }),
      key: Type.String({ description: "Constant key, e.g. contactName (F) or contacts (TABLE)" }),
      value: Type.String({ description: "Constant value (field name, id, etc.)" }),
    }),
    async execute(_id, params, signal, _onUpdate, ctx) {
      if (signal?.aborted) return text("Cancelled");
      const schemaPath = proj(ctx.cwd, "src/schema.ts");
      const before = await readFile(schemaPath, "utf8");
      const after = await withFileMutationQueue(schemaPath, async () => {
        const cur = await readFile(schemaPath, "utf8");
        const next = cores.addSchemaField(cur, params);
        await writeFile(schemaPath, next, "utf8");
        return next;
      });
      const changed = before !== after;
      return text(
        `${changed ? "Added" : "Already present"} ${params.namespace}.${params.key} = ${JSON.stringify(params.value)} in src/schema.ts.`,
      );
    },
  });

  pi.registerTool({
    name: "relay_add_task",
    label: "Add Trigger.dev task",
    description:
      "Scaffold a new Trigger.dev task at src/trigger/<kebab-id>.ts in the canonical task({ id, run }) shape AND append the id to modal_bridge.py ALLOWED_TASKS (and TASK_REQUIRES_RECORD_ID when rowScoped). Closes the manual ALLOWED_TASKS sync gap — never edit ALLOWED_TASKS by hand. Idempotent.",
    promptSnippet: "Scaffold a Trigger.dev task + sync modal_bridge.py ALLOWED_TASKS",
    promptGuidelines: [
      "Use relay_add_task for every new Trigger.dev task — it scaffolds src/trigger/<id>.ts and syncs modal_bridge.py ALLOWED_TASKS in one step.",
      "After relay_add_task, set rowScoped true when the task is triggered per-Airtable-row so relay_add_task also adds the id to TASK_REQUIRES_RECORD_ID.",
    ],
    parameters: Type.Object({
      id: Type.String({ description: "Kebab-case task id, e.g. send-welcome-email" }),
      name: Type.Optional(
        Type.String({ description: "Exported const name; defaults to camelCased id" }),
      ),
      rowScoped: Type.Optional(
        Type.Boolean({
          description: "If true, also add the id to TASK_REQUIRES_RECORD_ID (per-row tasks)",
        }),
      ),
      payloadShape: Type.Optional(
        Type.String({ description: "TS type for payload, e.g. { recordId: string }" }),
      ),
    }),
    async execute(_id, params, signal, _onUpdate, ctx) {
      if (signal?.aborted) return text("Cancelled");
      const taskPath = proj(ctx.cwd, `src/trigger/${params.id}.ts`);
      const bridgePath = proj(ctx.cwd, "modal_bridge.py");

      let taskLine: string;
      await withFileMutationQueue(taskPath, async () => {
        if (existsSync(taskPath)) {
          taskLine = `src/trigger/${params.id}.ts already exists — left unchanged`;
          return;
        }
        await mkdir(dirname(taskPath), { recursive: true });
        await writeFile(taskPath, cores.scaffoldTaskFile(params), "utf8");
        taskLine = `scaffolded src/trigger/${params.id}.ts`;
      });

      const sync = await withFileMutationQueue(bridgePath, async () => {
        const cur = await readFile(bridgePath, "utf8");
        const r = cores.syncAllowedTasks(cur, params.id, params.rowScoped ?? false);
        await writeFile(bridgePath, r.content, "utf8");
        return r;
      });

      return text(
        `${taskLine!}\n` +
          `modal_bridge.py ALLOWED_TASKS ${sync.allowedAdded ? "added" : "already present"} ${params.id}` +
          `${params.rowScoped ? `; TASK_REQUIRES_RECORD_ID ${sync.requiresAdded ? "added" : "already present"}` : ""}.\n` +
          `Implement the task body, then relay_test, relay_dev_worker up, and deploy.`,
      );
    },
  });

  // =========================================================================
  // Action tools (CLIs / framework scripts / fetch — never MCP)
  // =========================================================================

  pi.registerTool({
    name: "relay_locate_automation",
    label: "Locate automation",
    description:
      "Run scripts/locate-automation.mjs to resolve an automation's spec/plan/ledger/progress, or list all automations when no slug is given. Call this first when resuming after /clear.",
    promptSnippet: "Resolve an automation's spec/plan/ledger, or list all automations",
    promptGuidelines: [
      "Use relay_locate_automation to find where an automation's spec, plan, and progress ledger live before resuming work.",
    ],
    parameters: Type.Object({
      slug: Type.Optional(
        Type.String({ description: "Automation slug; omit to list all automations" }),
      ),
    }),
    async execute(_id, params, signal, _onUpdate, ctx) {
      if (signal?.aborted) return text("Cancelled");
      const script = proj(ctx.cwd, "scripts/locate-automation.mjs");
      const res = await pi.exec("node", [script, params.slug ?? ""].filter(Boolean), {
        signal,
        cwd: ctx.cwd,
        timeout: 30000,
      });
      const parsed = cores.parseLocateOutput(
        `${res.stdout}\n${res.stderr}`.trim(),
      );
      if (res.code !== 0 && !parsed.listMode && !parsed.slug) {
        throw new Error(
          `locate-automation failed (exit ${res.code}):\n${tail(res.stderr || res.stdout)}`,
        );
      }
      const lines = [
        parsed.listMode
          ? res.stdout.trim()
          : [
              `slug: ${parsed.slug ?? "?"}`,
              `spec: ${parsed.specPath ?? "?"} (${parsed.specExists ? "exists" : "not found"})`,
              `plan: ${parsed.planPath ?? "?"} (status: ${parsed.planStatus ?? "?"})`,
              `ledger: ${parsed.ledgerPath ?? "?"} (${parsed.ledgerExists ? "exists" : "not found"})`,
              `progress: ${parsed.progress ?? "?"}`,
            ].join("\n"),
      ];
      return text(lines.join("\n"));
    },
  });

  pi.registerTool({
    name: "relay_test",
    label: "Run tests",
    description: "Run npm test (vitest) — the primary quality gate; TS type errors surface here.",
    promptSnippet: "Run npm test (vitest) — the primary quality gate",
    promptGuidelines: [
      "Use relay_test after code changes to run the Vitest suite; it is the primary gate and also exercises the TS pipeline.",
    ],
    parameters: Type.Object({}),
    async execute(_id, _params, signal, _onUpdate, ctx) {
      if (signal?.aborted) return text("Cancelled");
      const res = await pi.exec(NPM, ["test"], { signal, cwd: ctx.cwd, timeout: 180000 });
      const ok = res.code === 0;
      return text(
        `${ok ? "PASS" : "FAIL"} (exit ${res.code})\n--- stdout ---\n${tail(res.stdout)}\n--- stderr ---\n${tail(res.stderr)}`,
      );
    },
  });

  pi.registerTool({
    name: "relay_dev_worker",
    label: "Trigger.dev dev worker",
    description:
      "Manage the local Trigger.dev dev worker (npm run trigger:dev). action 'up' launches it detached and polls the log until ready; 'status' reports whether it is running; 'down' stops it. (For session-crash durability, the pi-background-tasks extension can replace this backend.)",
    promptSnippet: "Bring the local Trigger.dev dev worker up / status / down",
    promptGuidelines: [
      "Use relay_dev_worker with action up before exercising a task locally from the Trigger.dev dashboard.",
    ],
    parameters: Type.Object({
      action: StringEnum(["up", "status", "down"] as const),
    }),
    async execute(_id, params, signal, _onUpdate, ctx) {
      if (signal?.aborted) return text("Cancelled");
      const piDir = proj(ctx.cwd, ".pi");
      const pidPath = join(piDir, "relay-dev-worker.pid");
      const logPath = join(piDir, "relay-dev-worker.log");
      await mkdir(piDir, { recursive: true });

      const readPid = async (): Promise<number | null> => {
        try {
          return parseInt((await readFile(pidPath, "utf8")).trim(), 10);
        } catch {
          return null;
        }
      };
      const alive = (pid: number): boolean => {
        try {
          process.kill(pid, 0);
          return true;
        } catch {
          return false;
        }
      };

      if (params.action === "status") {
        const pid = await readPid();
        if (pid && alive(pid)) return text(`Dev worker running (pid ${pid}). Log: .pi/relay-dev-worker.log`);
        return text("Dev worker not running.");
      }

      if (params.action === "down") {
        const pid = await readPid();
        if (!pid) return text("No dev worker PID marker found — nothing to stop.");
        if (process.platform === "win32") {
          await pi.exec("taskkill", ["/PID", String(pid), "/T", "/F"], { timeout: 15000 });
        } else {
          try {
            process.kill(-pid, "SIGTERM"); // new session group
          } catch {
            try { process.kill(pid, "SIGTERM"); } catch {}
          }
        }
        await rm(pidPath, { force: true });
        return text(`Stopped dev worker (pid ${pid}).`);
      }

      // action === "up"
      const existing = await readPid();
      if (existing && alive(existing)) {
        return text(`Dev worker already running (pid ${existing}). Use action "down" to stop it first.`);
      }
      const fh = await open(logPath, "w");
      const child = spawn(NPM, ["run", "trigger:dev"], {
        cwd: ctx.cwd,
        detached: true,
        shell: process.platform === "win32", // npm.cmd needs a shell on Windows
        stdio: ["ignore", fh.fd, fh.fd],
      });
      await fh.close();
      const pid = child.pid ?? 0;
      if (!pid) throw new Error("relay_dev_worker up: failed to spawn the dev worker.");
      await writeFile(pidPath, String(pid), "utf8");
      child.unref();

      // Poll the log for a readiness marker (bounded — never hang).
      const ready = /registered|listening|worker.*ready|started\s+worker| Watching /i;
      const deadline = Date.now() + 90000;
      let log = "";
      while (Date.now() < deadline) {
        if (signal?.aborted) return text(`Cancelled. pid ${pid}. Log: .pi/relay-dev-worker.log`);
        await sleep(2000, signal).catch(() => {});
        try {
          log = await readFile(logPath, "utf8");
        } catch {
          log = "";
        }
        if (ready.test(log)) {
          return text(`Dev worker up (pid ${pid}). Ready.\n${tail(log, 800)}`);
        }
        if (!alive(pid)) {
          return text(`Dev worker exited prematurely (pid ${pid}). Log:\n${tail(log)}`);
        }
      }
      return text(
        `Dev worker launched (pid ${pid}) but no readiness marker seen within 90s. It may still be starting.\nLog tail:\n${tail(log)}`,
      );
    },
  });

  pi.registerTool({
    name: "relay_deploy_trigger",
    label: "Deploy to Trigger.dev",
    description:
      "Run npm run trigger:deploy to deploy tasks to the Trigger.dev prod env (reads .env.production). Step 1 of the deploy order.",
    promptSnippet: "npm run trigger:deploy — deploy tasks to Trigger.dev prod",
    promptGuidelines: [
      "Use relay_deploy_trigger as step 1 of the deploy order, before relay_smoke_test and relay_deploy_modal.",
    ],
    parameters: Type.Object({}),
    async execute(_id, _params, signal, _onUpdate, ctx) {
      if (signal?.aborted) return text("Cancelled");
      const res = await pi.exec(NPM, ["run", "trigger:deploy"], {
        signal,
        cwd: ctx.cwd,
        timeout: 300000,
      });
      if (res.code !== 0) {
        throw new Error(
          `trigger deploy failed (exit ${res.code}):\n${tail(res.stderr)}\n${tail(res.stdout)}`,
        );
      }
      return text(`Trigger.dev deploy succeeded.\n${tail(res.stdout, 2000)}`);
    },
  });

  pi.registerTool({
    name: "relay_smoke_test",
    label: "Smoke test a task",
    description:
      "Trigger one Trigger.dev task and poll its run — the deploy-order 'exercise one task' gate. Uses the same Trigger.dev REST call modal_bridge.py makes, reading TRIGGER_SECRET_KEY from .env.production. On pass, writes a deploy-gate marker that relay_deploy_modal requires. recordId, when given, must start with 'rec'.",
    promptSnippet: "Trigger + poll one task; writes the deploy-gate marker on pass",
    promptGuidelines: [
      "Use relay_smoke_test as step 2 of the deploy order, after relay_deploy_trigger and before relay_deploy_modal.",
    ],
    parameters: Type.Object({
      taskId: Type.String({ description: "The Trigger.dev task id to trigger" }),
      recordId: Type.Optional(
        Type.String({ description: "Optional Airtable record id; must start with 'rec'" }),
      ),
      timeoutMs: Type.Optional(
        Type.Number({ description: "Run poll timeout in ms (default 60000)" }),
      ),
    }),
    async execute(_id, params, signal, onUpdate, ctx) {
      if (signal?.aborted) return text("Cancelled");
      if (params.recordId && !params.recordId.startsWith("rec")) {
        throw new Error("relay_smoke_test: recordId must start with 'rec'.");
      }
      const envProdPath = proj(ctx.cwd, ".env.production");
      let envProd: Record<string, string> = {};
      try {
        envProd = cores.parseDotenv(await readFile(envProdPath, "utf8"));
      } catch {
        throw new Error(
          "relay_smoke_test: .env.production not found or unreadable. Create it with TRIGGER_SECRET_KEY (prod) first.",
        );
      }
      const secret = envProd.TRIGGER_SECRET_KEY;
      const base = envProd.TRIGGER_BASE_URL || "https://api.trigger.dev";
      if (!secret) {
        throw new Error(
          "relay_smoke_test: TRIGGER_SECRET_KEY not set in .env.production. Confirm the prefix only (tr_prod_…) — never paste the value into chat.",
        );
      }

      const payload = params.recordId ? { recordId: params.recordId } : {};
      const trigRes = await fetch(`${base}/api/v1/tasks/${params.taskId}/trigger`, {
        method: "POST",
        headers: { Authorization: `Bearer ${secret}`, "Content-Type": "application/json" },
        body: JSON.stringify({ payload }),
        signal,
      });
      const trigBody = await trigRes.text();
      if (!trigRes.ok) {
        throw new Error(
          `Trigger.dev trigger failed (${trigRes.status}): ${tail(trigBody, 400)}`,
        );
      }
      const runId = cores.parseRunIdFromTrigger(trigBody);

      const deadline = Date.now() + (params.timeoutMs ?? 60000);
      let status = "RUNNING";
      while (Date.now() < deadline) {
        if (signal?.aborted) return text(`Cancelled. run ${runId} was ${status}.`);
        await sleep(3000, signal).catch(() => {});
        let rj: { status?: string } = {};
        try {
          const r = await fetch(`${base}/api/v1/runs/${runId}`, {
            headers: { Authorization: `Bearer ${secret}` },
            signal,
          });
          rj = await r.json().catch(() => ({}));
        } catch {
          // transient — keep polling
        }
        status = String(rj.status ?? status).toUpperCase();
        onUpdate?.({ content: [{ type: "text", text: `run ${runId}: ${status}` }] });
        if (status === "COMPLETED") break;
        if (["FAILED", "CANCELED", "CRASHED", "SYSTEM_FAILURE"].includes(status)) break;
      }

      const s = status.toUpperCase();
      if (s === "COMPLETED") {
        const gateDir = proj(ctx.cwd, ".pi");
        await mkdir(gateDir, { recursive: true });
        await writeFile(
          join(gateDir, "relay-deploy-gate.json"),
          JSON.stringify(
            { task: params.taskId, runId, status: "COMPLETED", ts: new Date().toISOString() },
            null,
            2,
          ),
          "utf8",
        );
        return text(
          `Smoke test PASSED. run ${runId} status COMPLETED. Deploy-gate marker written — you may now relay_deploy_modal.`,
        );
      }
      return text(
        `Smoke test did NOT pass. run ${runId} status ${status}. Deploy-gate marker NOT written. Fix the task and re-run.`,
      );
    },
  });

  pi.registerTool({
    name: "relay_deploy_modal",
    label: "Deploy Modal bridge",
    description:
      "Run `modal deploy modal_bridge.py` — step 3 of the deploy order. REFUSES until relay_smoke_test has passed and written the deploy-gate marker. The bridge reads .env.production (prod), never .env.",
    promptSnippet: "modal deploy modal_bridge.py — refuses until the smoke-test gate passes",
    promptGuidelines: [
      "Use relay_deploy_modal as the final deploy step; it refuses until relay_smoke_test has passed.",
    ],
    parameters: Type.Object({}),
    async execute(_id, _params, signal, _onUpdate, ctx) {
      if (signal?.aborted) return text("Cancelled");
      const gatePath = proj(ctx.cwd, ".pi/relay-deploy-gate.json");
      let gate: { status?: string; task?: string; runId?: string };
      try {
        gate = JSON.parse(await readFile(gatePath, "utf8"));
      } catch {
        throw new Error(
          "relay_deploy_modal: deploy-gate marker (.pi/relay-deploy-gate.json) not found. " +
            "Run relay_deploy_trigger then relay_smoke_test (and pass) first. " +
            "Deploy order: relay_deploy_trigger → relay_smoke_test → relay_deploy_modal.",
        );
      }
      if (String(gate.status ?? "").toUpperCase() !== "COMPLETED") {
        throw new Error(
          `relay_deploy_modal: last smoke test did not pass (status: ${gate.status}). Fix the task and re-run relay_smoke_test.`,
        );
      }
      const res = await pi.exec("modal", ["deploy", "modal_bridge.py"], {
        signal,
        cwd: ctx.cwd,
        timeout: 300000,
      });
      if (res.code !== 0) {
        throw new Error(
          `modal deploy failed (exit ${res.code}):\n${tail(res.stderr)}\n${tail(res.stdout)}`,
        );
      }
      return text(
        `Modal bridge deployed. Smoke-gate was satisfied by task ${gate.task} (run ${gate.runId}).\n${tail(res.stdout, 2000)}`,
      );
    },
  });

  // -------------------------------------------------------------------------
  // relay_lint — deterministic conformance checker for skill-produced specs/plans
  //
  // An LLM-callable tool (the 10th) so the agent can self-check its own
  // artifacts before handoff. Scans docs/specs/*.md and docs/plans/*.md under
  // the project cwd and runs the pure cores (cores.lintSpec / cores.lintPlan)
  // that mirror the rules in the project AGENTS.md (the constitution
  // relay-system-setup scaffolds) and the relay-plan / relay-execute
  // skills. Returns the
  // findings as text so the model reads them and fixes the offending spec/plan,
  // then re-calls relay_lint until it is clean. Also writes the report to
  // .pi/relay-lint-report.md for the record.
  // -------------------------------------------------------------------------
  pi.registerTool({
    name: "relay_lint",
    label: "Lint specs & plans",
    description:
      "Lint docs/specs/*.md and docs/plans/*.md for relay-code conformance. Checks spec frontmatter (slug/name/trigger_type/created), plan status frontmatter (planned|in_progress|paused|completed), and that every **Agents:** line names only the six ported domain agents. Returns the findings as text so you can fix the offending files and re-run. Call this after writing/updating a spec or plan, and again before handing off or deploying.",
    promptSnippet: "Lint specs/plans for relay-code conformance (status, **Agents:**, spec frontmatter)",
    promptGuidelines: [
      "Call relay_lint after you write or update a spec/plan, and before handoff or deploy — fix every error it reports, then re-run until clean.",
    ],
    parameters: Type.Object({}),
    async execute(_id, _params, signal, _onUpdate, ctx) {
      if (signal?.aborted) return text("Cancelled");
      const root = ctx.cwd;
      const findings: cores.LintFinding[] = [];
      const scanned: string[] = [];
      for (const [dir, lint] of [
        [join(root, "docs", "specs"), cores.lintSpec] as const,
        [join(root, "docs", "plans"), cores.lintPlan] as const,
      ]) {
        let entries: string[] = [];
        try {
          entries = await readdir(dir);
        } catch {
          continue; // directory absent — nothing to lint
        }
        for (const name of entries.filter((f) => f.endsWith(".md"))) {
          const abs = join(dir, name);
          const rel = abs.slice(root.length + 1).replace(/\\/g, "/");
          scanned.push(rel);
          const content = await readFile(abs, "utf8");
          findings.push(...lint({ file: rel, content }));
        }
      }

      const errors = findings.filter((f) => f.severity === "error");
      const warnings = findings.filter((f) => f.severity === "warning");
      const lines: string[] = [];
      if (scanned.length === 0) {
        lines.push(
          "relay_lint: no specs or plans found under docs/specs or docs/plans — nothing to check.",
        );
      } else {
        lines.push(`relay_lint: scanned ${scanned.length} file(s).`);
        for (const f of findings) {
          lines.push(`[${f.severity.toUpperCase()}] ${f.file}: ${f.message}`);
        }
        lines.push("");
        lines.push(
          `relay_lint: ${errors.length} error(s), ${warnings.length} warning(s) — ` +
            (errors.length === 0
              ? "conformant. No blocking issues."
              : "fix every ERROR above (edit the named file), then call relay_lint again until clean."),
        );
      }
      const report = lines.join("\n");

      // Persist a copy for the record (and for CI / the user to inspect).
      const dotpi = join(root, ".pi");
      await mkdir(dotpi, { recursive: true });
      await writeFile(join(dotpi, "relay-lint-report.md"), report + "\n", "utf8");

      return text(report);
    },
  });
}