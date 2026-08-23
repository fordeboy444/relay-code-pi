# Agent rules

> Source: https://trigger.dev/docs/mcp-agent-rules

Agent rules are now **agent skills**. The standalone rule files have been replaced by skills that work across every major AI assistant from a single install. See [Skills](https://trigger.dev/docs/skills)
.

[​](https://trigger.dev/docs/mcp-agent-rules#what-changed)

What changed
--------------------------------------------------------------------------

Trigger.dev used to install per-tool _rule files_ (`.cursor/rules/trigger.*.mdc`, regions in `CLAUDE.md`, and so on) fetched from GitHub. That has been replaced by [agent skills](https://trigger.dev/docs/skills)
: `SKILL.md` directories in the open [Agent Skills standard](https://agentskills.io/)
 that install with the CLI, draw their API guidance from a version-pinned reference in `@trigger.dev/sdk`, and load on demand instead of always sitting in your context. The install command is the same, and now installs skills:

    npx trigger.dev@latest skills
    

`npx trigger.dev@latest install-rules` still works as an alias, and `trigger dev` offers to install the skills on first run. The old task and realtime guidance now lives in the `trigger-tasks` and `trigger-realtime` skills, alongside two new skills for building `chat.agent` AI agents. See [Skills](https://trigger.dev/docs/skills)
 for the full list and supported assistants.

[​](https://trigger.dev/docs/mcp-agent-rules#next-steps)

Next steps
----------------------------------------------------------------------

[Skills\
------\
\
Install Trigger.dev agent skills into your AI coding assistant.](https://trigger.dev/docs/skills)

[MCP Server\
----------\
\
Give your AI assistant direct access to Trigger.dev tools and APIs.](https://trigger.dev/docs/mcp-introduction)

[Building with AI\
----------------\
\
See how skills and the MCP server compare.](https://trigger.dev/docs/building-with-ai)

[Writing tasks\
-------------\
\
Learn the task patterns that skills teach your AI assistant.](https://trigger.dev/docs/tasks/overview)

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/skills)
[OverviewTasks are the core of Trigger.dev. They are long-running processes that are triggered by events.\
\
Next](https://trigger.dev/docs/writing-tasks-introduction)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
