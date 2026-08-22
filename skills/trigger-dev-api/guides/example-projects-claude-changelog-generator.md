# Changelog generator using Claude Agent SDK

> Source: https://trigger.dev/docs/guides/example-projects/claude-changelog-generator

[​](https://trigger.dev/docs/guides/example-projects/claude-changelog-generator#overview)

Overview
-----------------------------------------------------------------------------------------------------

This demo how to build an AI agent using the Claude Agent SDK that explores GitHub commits, investigates unclear changes by fetching diffs on demand, and generates developer-friendly changelogs.

[​](https://trigger.dev/docs/guides/example-projects/claude-changelog-generator#tech-stack)

Tech stack
---------------------------------------------------------------------------------------------------------

*   **[Next.js](https://nextjs.org/)
    ** – Frontend framework using App Router
*   **[Claude Agent SDK](https://docs.anthropic.com/en/docs/agents-and-tools/claude-agent-sdk)
    ** – Anthropic’s agent SDK for building AI agents with custom tools
*   **[Trigger.dev](https://trigger.dev/)
    ** – workflow orchestration with real-time streaming, observability, and deployment
*   **[Octokit](https://github.com/octokit/octokit.js)
    ** – GitHub API client for fetching commits and diffs

[​](https://trigger.dev/docs/guides/example-projects/claude-changelog-generator#demo-video)

Demo video
---------------------------------------------------------------------------------------------------------

[​](https://trigger.dev/docs/guides/example-projects/claude-changelog-generator#github-repo)

GitHub repo
-----------------------------------------------------------------------------------------------------------

View the changelog generator repo
---------------------------------

Click here to view the full open source code for this project in our examples repository on GitHub. You can fork it and use it as a starting point for your own project.

[​](https://trigger.dev/docs/guides/example-projects/claude-changelog-generator#how-it-works)

How it works
-------------------------------------------------------------------------------------------------------------

The agent workflow:

1.  **Receive request** – User provides a GitHub repo URL and date range
2.  **List commits** – Agent calls `list_commits` MCP tool to get all commits
3.  **Analyze commits** – Agent categorizes each commit:
    *   Skip trivial commits (typos, formatting)
    *   Include clear features/improvements directly
    *   Investigate unclear commits by fetching their diffs
4.  **Generate changelog** – Agent writes a categorized markdown changelog
5.  **Stream output** – Changelog streams to the frontend in real-time

[​](https://trigger.dev/docs/guides/example-projects/claude-changelog-generator#features)

Features
-----------------------------------------------------------------------------------------------------

*   **Two-phase analysis** – Lists all commits first, then selectively fetches diffs only for ambiguous ones
*   **Custom tools** – `list_commits` and `get_commit_diff` called autonomously by Claude
*   **Real-time streaming** – Changelog streams to the frontend as it’s generated via Trigger.dev Realtime
*   **Live observability** – Agent phase, turn count, and tool calls broadcast via run metadata
*   **Private repo support** – Optional GitHub token for private repositories

[​](https://trigger.dev/docs/guides/example-projects/claude-changelog-generator#relevant-code)

Relevant code
---------------------------------------------------------------------------------------------------------------

| File | Description |
| --- | --- |
| [`trigger/generate-changelog.ts`](https://github.com/triggerdotdev/examples/blob/main/changelog-generator/trigger/generate-changelog.ts) | Main task with custom tools |
| [`trigger/changelog-stream.ts`](https://github.com/triggerdotdev/examples/blob/main/changelog-generator/trigger/changelog-stream.ts) | Stream definition for real-time output |
| [`app/api/generate-changelog/route.ts`](https://github.com/triggerdotdev/examples/blob/main/changelog-generator/app/api/generate-changelog/route.ts) | API endpoint that triggers the task |
| [`app/response/[runId]/page.tsx`](https://github.com/triggerdotdev/examples/blob/main/changelog-generator/app/response/%5BrunId%5D/page.tsx) | Streaming display page |

[​](https://trigger.dev/docs/guides/example-projects/claude-changelog-generator#trigger-config-ts)

trigger.config.ts
-----------------------------------------------------------------------------------------------------------------------

You need to mark the Claude Agent SDK as external in your trigger.config.ts file.

trigger.config.ts

    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      project: process.env.TRIGGER_PROJECT_REF!,
      runtime: "node",
      logLevel: "log",
      maxDuration: 300,
      build: {
        external: ["@anthropic-ai/claude-agent-sdk"],
      },
      machine: "small-2x",
    });
    

Adding packages to `external` prevents them from being bundled, which is necessary for the Claude Agent SDK. See the [build configuration docs](https://trigger.dev/docs/config/config-file#external)
 for more details.

[​](https://trigger.dev/docs/guides/example-projects/claude-changelog-generator#learn-more)

Learn more
---------------------------------------------------------------------------------------------------------

*   [**Building agents with Claude Agent SDK**](https://trigger.dev/docs/guides/ai-agents/claude-code-trigger)
     – Comprehensive guide for using Claude Agent SDK with Trigger.dev
*   [**Realtime**](https://trigger.dev/docs/realtime/overview)
     – Stream task progress to your frontend
*   [**Scheduled tasks**](https://trigger.dev/docs/tasks/scheduled)
     – Automate changelog generation on a schedule

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/example-projects/batch-llm-evaluator)
[Claude GitHub wikiAsk questions about any public GitHub repository and get AI-powered analysis using the Claude Agent SDK and Trigger.dev.\
\
Next](https://trigger.dev/docs/guides/example-projects/claude-github-wiki)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
