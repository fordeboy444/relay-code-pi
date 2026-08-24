---
name: relay-sub-agent-builder
description: "Local reference for Claude Code's agent and parallel-work features — subagents, agent view, agent teams, dynamic workflows, and git worktrees. Use when the user asks about delegating to agents, choosing between subagents vs teams vs workflows vs worktrees, or wants to author a new subagent (see the 'Creating a subagent' interview workflow in the body). Load the relevant reference file(s) under references/ and answer from them — these docs change across versions, so prefer them over memory."
---

# Claude Code agents & parallel work — local docs

This skill bundles local copies of Claude Code's official documentation for its
agent and parallel-work features. Claude Code ships new versions frequently and the
behavior, flags, and defaults in this area change across releases (e.g. `--worktree`
semantics, `ultracode` effort, agent-teams enablement, `/agents` vs `claude agents`).
**Treat the local files under `references/` as the source of truth** and read them
before answering, rather than relying on memory of how things worked in some past
version.

## Reference pages

| Page | Local file | Live source | What it covers |
|------|------------|-------------|----------------|
| Run agents in parallel | `references/agents.md` | https://code.claude.com/docs/en/agents | The overview: compares subagents, agent view, agent teams, and dynamic workflows and tells you when to use each. Start here. |
| Create custom subagents | `references/sub-agents.md` | https://code.claude.com/docs/en/sub-agents | Defining reusable specialist subagents: frontmatter fields, tool allowlists, models, foreground/background, `isolation: worktree`, `/subtask` forks. |
| Manage agents with agent view | `references/agent-view.md` | https://code.claude.com/docs/en/agent-view | `claude agents`: dispatching and monitoring background sessions from one screen, attaching, file-edit isolation. |
| Orchestrate agent teams | `references/agent-teams.md` | https://code.claude.com/docs/en/agent-teams | Lead + teammates with a shared task list and inter-agent messaging. Experimental, disabled by default (`CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS`). |
| Orchestrate dynamic workflows | `references/workflows.md` | https://code.claude.com/docs/en/workflows | Script-driven orchestration of many subagents (`agent()`/`pipeline()`/`parallel()`), `ultracode`, `/deep-research`, saving runs as commands. |
| Run parallel sessions with worktrees | `references/worktrees.md` | https://code.claude.com/docs/en/worktrees | `--worktree`, `.worktreeinclude`, base-ref, PR worktrees, subagent isolation, cleanup, non-git VCS hooks. |

## How to use this skill

1. For "which approach do I use?" questions, read `references/agents.md` first — it is
   the comparison overview and points to the right feature.
2. For mechanics on a specific feature, open that feature's file directly from the
   table above.
3. Answer from what the file says, and cite the page and section you used (e.g.
   "per `references/worktrees.md` → Clean up worktrees"). If the local doc and your
   memory disagree, trust the local doc and flag the discrepancy to the user.
4. If a question isn't covered by any of these pages, say so rather than guessing,
   and point the user to the live URL in the table.

## Creating a subagent — interview workflow

When the user wants to **author a new subagent** ("create a subagent that…", "make an
agent for…", "set up a subagent to…"), don't write the file from memory — these fields drift
across Claude Code versions. Run the interview below, grounded in `references/sub-agents.md`
(recheck its "Supported frontmatter fields" section before authoring), then draft and write
the file. Every new subagent body is prefixed with a shared "Context — where to look"
preamble that points to `CLAUDE.md`, the spec under `docs/specs/`, the newest dated plan
under `docs/plans/`, and the live ledger at `docs/automations/<plan>/progress.md` — so
spawned subagents can orient themselves without re-asking. The preamble is mandatory in
this repo; strip paths only if the user is in a non-framework project without those
directories.

**Step 1 — purpose.** If the request doesn't say what the subagent does, ask. The purpose drives
the `name`, the `description` (which controls *when Claude delegates to it*), and the body.

**Step 2 — `AskUserQuestion` call 1.** Make a single `AskUserQuestion` tool call with these four
questions in this order. Put the Recommended option first in each list and mark it
"(Recommended)" in the label. Copy the `question` text and option `description`s verbatim —
they're tuned to match the live doc.

```json
{
  "questions": [
    {
      "header": "Model",
      "multiSelect": false,
      "question": "Which model should the subagent run on?",
      "options": [
        { "label": "inherit (Recommended)", "description": "Same model as the main session; the default when `model` is omitted." },
        { "label": "haiku", "description": "Faster/cheaper; routine or mechanical tasks — the doc's cost-routing recipe." },
        { "label": "sonnet", "description": "Balanced." },
        { "label": "opus", "description": "Strongest; hard reasoning. (Per the doc, `fable` is also valid — ask if you specifically need it.)" }
      ]
    },
    {
      "header": "Tools",
      "multiSelect": false,
      "question": "Which tool set should the subagent have?",
      "options": [
        { "label": "Read-only — Read, Grep, Glob (Recommended)", "description": "For research; no edits, no MCP." },
        { "label": "Read + Bash — Read, Grep, Glob, Bash", "description": "Research plus shell commands, no edits." },
        { "label": "Full (inherit all)", "description": "Can edit/write; what you get if `tools` is omitted." },
        { "label": "Custom allowlist", "description": "Pick specific tools in a follow-up." }
      ]
    },
    {
      "header": "Memory",
      "multiSelect": false,
      "question": "Memory scope? (Spawned subagents do NOT inherit your global auto-memory regardless; this field gives the subagent its own persistent memory.)",
      "options": [
        { "label": "Omit field (Recommended)", "description": "No persistent memory — fresh context each run. (The `memory` field only accepts `user`, `project`, or `local`; \"no memory\" means omit the field entirely.)" },
        { "label": "project", "description": "`.claude/agent-memory/<name>/`; shareable via VCS — the doc's recommended scope when you do want memory." },
        { "label": "user", "description": "`~/.claude/agent-memory/<name>/`; across all your projects." },
        { "label": "local", "description": "`.claude/agent-memory-local/<name>/`; project-scoped, not committed." }
      ]
    },
    {
      "header": "Skills",
      "multiSelect": false,
      "question": "How should skills be wired into the subagent?",
      "options": [
        { "label": "None (Recommended)", "description": "The subagent can still invoke any accessible skill via the `Skill` tool at runtime." },
        { "label": "Preload via skills: frontmatter", "description": "Full SKILL.md content injected at startup; use when the subagent always needs that skill's instructions." },
        { "label": "Reference in prompt body", "description": "Just mention the skill; cheaper on context, loaded on demand." }
      ]
    }
  ]
}
```

**Step 3 — `AskUserQuestion` call 2.** Make a second `AskUserQuestion` tool call with these four
questions. Same conventions as Step 2.

```json
{
  "questions": [
    {
      "header": "Isolation",
      "multiSelect": false,
      "question": "Where should the subagent run?",
      "options": [
        { "label": "Same checkout (Recommended)", "description": "Runs in the main working directory." },
        { "label": "worktree", "description": "Isolated git worktree, auto-cleaned if no changes; for parallel/experimental file edits." }
      ]
    },
    {
      "header": "Background",
      "multiSelect": false,
      "question": "Should the subagent run in the background by default?",
      "options": [
        { "label": "Let Claude choose (Recommended)", "description": "Background by default since v2.1.198, foreground when the result is needed immediately." },
        { "label": "Always background", "description": "Sets `background: true`." },
        { "label": "Foreground", "description": "Blocks the main conversation; permission prompts pass through." }
      ]
    },
    {
      "header": "Permission",
      "multiSelect": false,
      "question": "Which permission mode? (A parent `bypassPermissions`/`acceptEdits` mode overrides this. Per the doc there are 6 values: `default`, `acceptEdits`, `auto`, `dontAsk`, `bypassPermissions`, `plan` — the 4 below are the common ones; ask if you need `dontAsk` or `bypassPermissions`.)",
      "options": [
        { "label": "default (Recommended)", "description": "Prompts for sensitive actions." },
        { "label": "acceptEdits", "description": "Auto-approve file edits and common filesystem commands." },
        { "label": "plan", "description": "Plan mode (read-only exploration)." },
        { "label": "auto", "description": "Classifier-driven, minimal prompts." }
      ]
    },
    {
      "header": "Scope",
      "multiSelect": false,
      "question": "Where should the subagent definition file be written?",
      "options": [
        { "label": "Project — .claude/agents/ (Recommended)", "description": "For codebase-specific work; commit to VCS for the team." },
        { "label": "User — ~/.claude/agents/", "description": "Available in all your projects." }
      ]
    }
  ]
}
```

After the user answers, parse the selections out of the `answers` object and proceed to
Step 4. (If the user picked "Custom allowlist" for Tools, ask which tools before moving on.)

**Step 4 — draft the file.** Build a *lean* subagent definition from the answers plus the
purpose:
- `name`: a lowercase-hyphens slug derived from the purpose. The filename need not match, but
  `name` is the identity and must be unique across the tree (duplicate names collide — only one
  loads).
- `description`: one clear line on *when Claude should delegate to this subagent* — add
  "use proactively" if proactive delegation is wanted (the doc's explicit tip; the description
  is the delegation trigger, so it matters).
- frontmatter: include **only non-default fields** to keep it lean — omit `model: inherit`,
  omit `tools` if Full, omit `background` if "let Claude choose", omit `isolation` if same
  checkout, omit `memory` if "Omit field", omit `permissionMode` if default. Include `skills:` only if
  "Preload" was chosen.
- body: every new subagent gets a shared **Context — where to look** preamble (below) before
  the purpose-specific instructions. This is non-negotiable: the preamble is how a spawned
  subagent finds the automation state, plan, and progress ledger without re-asking. After the
  preamble, append the system-prompt instructions derived from the stated purpose.

### Shared preamble — always inject

Prepend the following block to the subagent body verbatim (edit paths only if the user is
working in a non-framework project that lacks these directories; in that case ask before
stripping them):

```markdown
## Context — where to look

Before doing anything, orient yourself by reading these in order. They tell you *what this
automation is*, *how it's supposed to be built*, and *where the live execution state lives*:

1. `CLAUDE.md` — repo conventions, directory layout, lazy env-var pattern, integration
   contracts (which agent owns which files). Start here on every run.
2. `docs/specs/<slug>.md` — the design spec for the automation you're working on (the
   *what/why*). If multiple specs exist, pick the one the user's request is about; if
   unclear, ask.
3. `docs/plans/YYYY-MM-DD-<slug>.md` — the dated implementation plan with the per-task
   checklist (the *how*). Use `scripts/locate-automation.mjs <slug>` (or list with no args)
   to resolve the newest dated plan for a slug. Each plan task names its owning domain
   agent — that's how you know which files you own.
4. `docs/automations/<plan>/progress.md` — the live execution ledger. Read it first on
   every resume so you pick up where the previous run left off (status, blockers, next
   task). The execute skill owns this file; you append to it, never replace it.

If any of these don't exist yet, that's a signal: the research or plan step hasn't been
run for this automation. Surface that to the user instead of improvising.

```

Template (minimal, from the doc):
```markdown
---
name: <slug>
description: <one-line delegation trigger; add "use proactively" if wanted>
<non-default frontmatter fields, if any>
---

## Context — where to look

[shared preamble from above — paste it here verbatim]

<instructions: what this specific subagent does and how>
```

**Step 5 — write + confirm.** Write to the chosen scope directory (create it if missing):
`<project>/.claude/agents/<slug>.md` or `~/.claude/agents/<slug>.md`. Then show the written path
and full contents. Flag the gotcha: if this is the first agent in a *new* `agents/` directory,
restart Claude Code to load it — the file watcher only covers directories that existed at
session startup.

## Refreshing the docs

These pages get scraped from the live docs and saved locally. To re-scrape after a
Claude Code upgrade or when behavior seems out of date, from this skill directory run:

```
python scripts/refresh_docs.py
```

It fetches all 6 pages, compares each against the hash recorded in `manifest.json`,
writes only the ones that changed, and prints a `updated / unchanged / failed` summary.
Add `--check` for a dry run that reports changes without writing. To track a new
agent-related doc page later, add its slug to `PAGES` at the top of
`scripts/refresh_docs.py` and re-run.