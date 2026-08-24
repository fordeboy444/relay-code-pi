#!/usr/bin/env node
// scripts/locate-automation.mjs
//
// Resolves where a relay-code automation's artifacts live, so the
// relay_locate_automation Pi tool (and a human) can find them after /clear.
//
// Output contract — matched by parseLocateOutput in the relay-code-pi package's
// src/cores.ts. Do not change the wording without updating that parser + tests:
//
//   no slug given, automations exist:
//     [locate-automation] no slug given
//     <slug>  (spec: yes/no  plan: yes/no)
//     ...
//
//   no slug given, no automations anywhere:
//     [locate-automation] no automations
//
//   slug given:
//     <banner>   — first line, always present. One of:
//       ⚠️ AUTOMATION IN PROGRESS — slug: <slug>, <done>/<total> tasks complete.
//         Resume at Task <N>. Do not re-dispatch completed tasks. For full
//         details read <ledgerPath>.
//       📋 AUTOMATION PLANNED — slug: <slug>, 0/<total> tasks complete. Start at
//         Task 1. For full details read <ledgerPath>.
//       No in-progress automation — greenfield.
//     [locate-automation] slug: <slug>
//     spec: docs/specs/<slug>.md (exists|not found)
//     plan: docs/plans/<newest-plan>.md (status: <status>)   |  plan: (not found)
//     ledger: docs/automations/<plan-basename>/progress.md (exists|not found)
//     progress: <done>/<total> tasks complete — next: Task <N>|(none)
//
// The ledger path uses the plan basename (filename without .md), matching the
// relay-execute-or-resume-automation skill's workspace convention. Automations
// live under docs/ (specs, plans, automations) — never under .claude/.

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const cwd = process.cwd();
const SPECS_DIR = join(cwd, "docs", "specs");
const PLANS_DIR = join(cwd, "docs", "plans");

const slug = (process.argv[2] ?? "").trim();

function safeList(dir) {
  try {
    return readdirSync(dir);
  } catch {
    return [];
  }
}

function isFile(file) {
  try {
    return statSync(file).isFile();
  } catch {
    return false;
  }
}

// Discover automation slugs from specs and dated plans.
function discoverSlugs() {
  const slugs = new Set();
  for (const f of safeList(SPECS_DIR)) {
    if (f.endsWith(".md")) slugs.add(f.slice(0, -3));
  }
  for (const f of safeList(PLANS_DIR)) {
    const m = f.match(/^\d{4}-\d{2}-\d{2}-(.+?)(-update-.*)?\.md$/);
    if (m) slugs.add(m[1]);
  }
  return [...slugs].sort();
}

// Newest dated plan for a slug (original or follow-up). Date-prefixed names sort
// lexicographically = chronologically.
function newestPlan(slug) {
  const re = new RegExp(`^\\d{4}-\\d{2}-\\d{2}-${slug}(-update-.*)?\\.md$`);
  const candidates = safeList(PLANS_DIR).filter((f) => re.test(f)).sort();
  return candidates.length ? candidates[candidates.length - 1] : null;
}

function readStatus(planFile) {
  try {
    const txt = readFileSync(join(PLANS_DIR, planFile), "utf8");
    const fm = txt.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fm) return null;
    const s = fm[1].match(/^status:\s*(.+)$/m);
    return s ? s[1].trim() : null;
  } catch {
    return null;
  }
}

// done/total from the plan's `### Task N` headings and the ledger's
// `Task N: complete` lines. next = first incomplete task.
function progressSummary(planFile, ledgerFile) {
  let total = 0;
  try {
    total = (readFileSync(join(PLANS_DIR, planFile), "utf8").match(/^### Task \d+/gm) || []).length;
  } catch {}
  const done = new Set();
  if (isFile(ledgerFile)) {
    try {
      for (const m of readFileSync(ledgerFile, "utf8").matchAll(/Task (\d+): complete/g)) {
        done.add(Number(m[1]));
      }
    } catch {}
  }
  let next = null;
  for (let n = 1; n <= total; n++) {
    if (!done.has(n)) { next = n; break; }
  }
  return { done: done.size, total, next };
}

function formatProgress(p) {
  const nextStr = p.total === 0 || p.next == null ? "(none)" : `Task ${p.next}`;
  return `${p.done}/${p.total} tasks complete — next: ${nextStr}`;
}

// The first line of output — the unmissable progress signal. The three relay
// skills are instructed to treat it as canonical before reading the rest.
function bannerFor(slug, p, ledgerPath) {
  if (p.total === 0) return "No in-progress automation — greenfield.";
  if (p.done === 0) {
    return `📋 AUTOMATION PLANNED — slug: ${slug}, 0/${p.total} tasks complete. Start at Task 1. For full details read ${ledgerPath}.`;
  }
  return `⚠️ AUTOMATION IN PROGRESS — slug: ${slug}, ${p.done}/${p.total} tasks complete. Resume at Task ${p.next}. Do not re-dispatch completed tasks. For full details read ${ledgerPath}.`;
}

if (!slug) {
  const slugs = discoverSlugs();
  if (slugs.length === 0) {
    console.log("[locate-automation] no automations");
  } else {
    console.log("[locate-automation] no slug given");
    for (const s of slugs) {
      console.log(`${s}  (spec: ${isFile(join(SPECS_DIR, `${s}.md`)) ? "yes" : "no"}  plan: ${newestPlan(s) ? "yes" : "no"})`);
    }
  }
  process.exit(0);
}

const plan = newestPlan(slug);
const specPath = `docs/specs/${slug}.md`;
const specExists = isFile(join(cwd, specPath));

let banner = "No in-progress automation — greenfield.";
let planLine = "plan: (not found)";
let ledgerLine = "ledger: (not found)";
let progressLine = "progress: 0/0 tasks complete — next: (none)";
if (plan) {
  const ledgerPath = `docs/automations/${plan.slice(0, -3)}/progress.md`;
  const p = progressSummary(plan, join(cwd, ledgerPath));
  banner = bannerFor(slug, p, ledgerPath);
  planLine = `plan: docs/plans/${plan} (status: ${readStatus(plan) ?? "unknown"})`;
  ledgerLine = `ledger: ${ledgerPath} (${isFile(join(cwd, ledgerPath)) ? "exists" : "not found"})`;
  progressLine = `progress: ${formatProgress(p)}`;
}

console.log(banner);
console.log(`[locate-automation] slug: ${slug}`);
console.log(`spec: ${specPath} (${specExists ? "exists" : "not found"})`);
console.log(planLine);
console.log(ledgerLine);
console.log(progressLine);
process.exit(0);