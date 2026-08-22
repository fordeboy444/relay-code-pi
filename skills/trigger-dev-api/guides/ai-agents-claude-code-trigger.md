# Claude Agent SDK setup guide

> Source: https://trigger.dev/docs/guides/ai-agents/claude-code-trigger

The [Claude Agent SDK](https://platform.claude.com/docs/en/agent-sdk/overview)
 gives you the same tools, agent loop, and context management that power Claude Code. Combined with Trigger.dev, you get durable execution, automatic retries, and full observability for your agents.

[​](https://trigger.dev/docs/guides/ai-agents/claude-code-trigger#setup)

Setup
---------------------------------------------------------------------------------

This guide assumes you are working with an existing [Trigger.dev](https://trigger.dev/)
 project. Follow our [quickstart](https://trigger.dev/docs/quick-start)
 to get set up if you don’t have a project yet.

1

[](https://trigger.dev/docs/guides/ai-agents/claude-code-trigger#)

Install the Claude Agent SDK

npm

    npm install @anthropic-ai/claude-agent-sdk
    

2

[](https://trigger.dev/docs/guides/ai-agents/claude-code-trigger#)

Configure trigger.config.ts

Add the SDK to the `external` array so it’s not bundled:

trigger.config.ts

    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      project: process.env.TRIGGER_PROJECT_REF!,
      build: {
        external: ["@anthropic-ai/claude-agent-sdk"],
      },
      machine: "small-2x",
    });
    

Adding packages to `external` prevents them from being bundled, which is necessary for the Claude Agent SDK. See the [build configuration docs](https://trigger.dev/docs/config/config-file#external)
 for more details.

3

[](https://trigger.dev/docs/guides/ai-agents/claude-code-trigger#)

Set your API key

Add your Anthropic API key to your environment variables. The SDK reads it automatically.

    ANTHROPIC_API_KEY=sk-ant-...
    

You can set this in the [Trigger.dev dashboard](https://cloud.trigger.dev/)
 under **Environment Variables**, or in your `.env` file for local development.

4

[](https://trigger.dev/docs/guides/ai-agents/claude-code-trigger#)

Create your first agent task

This example creates a task where Claude generates code in an empty workspace. The agent will create files based on your prompt:

trigger/claude-agent.ts

    import { query } from "@anthropic-ai/claude-agent-sdk";
    import { schemaTask, logger } from "@trigger.dev/sdk";
    import { mkdtemp, rm, readdir } from "node:fs/promises";
    import { tmpdir } from "node:os";
    import { join } from "node:path";
    import { z } from "zod";
    
    export const codeGenerator = schemaTask({
      id: "code-generator",
      schema: z.object({
        prompt: z.string(),
      }),
      run: async ({ prompt }, { signal }) => {
        const abortController = new AbortController();
        signal.addEventListener("abort", () => abortController.abort());
    
        // Create an empty workspace for the agent
        // The agent will create files here based on the prompt
        const workDir = await mkdtemp(join(tmpdir(), "claude-agent-"));
        logger.info("Created workspace", { workDir });
    
        try {
          const result = query({
            prompt,
            options: {
              model: "claude-sonnet-4-20250514",
              abortController,
              cwd: workDir,
              maxTurns: 10,
              permissionMode: "acceptEdits",
              allowedTools: ["Read", "Edit", "Write", "Glob"],
            },
          });
    
          for await (const message of result) {
            logger.info("Agent message", { type: message.type });
          }
    
          // See what files Claude created
          const files = await readdir(workDir, { recursive: true });
          logger.info("Files created", { files });
    
          return { filesCreated: files };
        } finally {
          await rm(workDir, { recursive: true, force: true });
        }
      },
    });
    

5

[](https://trigger.dev/docs/guides/ai-agents/claude-code-trigger#)

Run the dev server

    npx trigger.dev@latest dev
    

6

[](https://trigger.dev/docs/guides/ai-agents/claude-code-trigger#)

Test your agent

Go to the Trigger.dev dashboard, find your `code-generator` task, and trigger it with a test payload:

    {
      "prompt": "Create a Node.js project with a fibonacci.ts file containing a function to calculate fibonacci numbers, and a fibonacci.test.ts file with tests."
    }
    

[​](https://trigger.dev/docs/guides/ai-agents/claude-code-trigger#how-it-works)

How it works
-----------------------------------------------------------------------------------------------

The `query()` function runs Claude in an agentic loop where it can:

1.  **Read files** - Explore codebases with `Read`, `Grep`, and `Glob` tools
2.  **Edit files** - Modify code with `Edit` and `Write` tools
3.  **Run commands** - Execute shell commands with `Bash` tool (if enabled)
4.  **Think step by step** - Use extended thinking for complex problems

The agent continues until it completes the task or reaches `maxTurns`.

### 

[​](https://trigger.dev/docs/guides/ai-agents/claude-code-trigger#permission-modes)

Permission modes

| Mode | What it does |
| --- | --- |
| `"default"` | Asks for approval on potentially dangerous operations |
| `"acceptEdits"` | Auto-approves file operations, asks for bash/network |
| `"bypassPermissions"` | Skips all safety checks (not recommended) |

### 

[​](https://trigger.dev/docs/guides/ai-agents/claude-code-trigger#available-tools)

Available tools

    allowedTools: [\
      "Task", // Planning and task management\
      "Glob", // Find files by pattern\
      "Grep", // Search file contents\
      "Read", // Read file contents\
      "Edit", // Edit existing files\
      "Write", // Create new files\
      "Bash", // Run shell commands\
      "TodoRead", // Read todo list\
      "TodoWrite", // Update todo list\
    ];
    

[​](https://trigger.dev/docs/guides/ai-agents/claude-code-trigger#github-repo)

GitHub repo
---------------------------------------------------------------------------------------------

View the Claude Agent SDK + Trigger.dev example
-----------------------------------------------

A complete example with two agent patterns: basic safe code generation and advanced with bash execution.

[​](https://trigger.dev/docs/guides/ai-agents/claude-code-trigger#example-projects-using-the-claude-agent-sdk)

Example projects using the Claude Agent SDK
-------------------------------------------------------------------------------------------------------------------------------------------------------------

Claude changelog generator
--------------------------

Generate changelogs from git commits using custom MCP tools.

Claude GitHub wiki agent
------------------------

Analyze repositories and answer questions with real-time streaming.

[​](https://trigger.dev/docs/guides/ai-agents/claude-code-trigger#learn-more)

Learn more
-------------------------------------------------------------------------------------------

*   [Claude Agent SDK docs](https://platform.claude.com/docs/en/agent-sdk/overview)
     – Official Anthropic documentation
*   [Trigger.dev Realtime](https://trigger.dev/docs/realtime/overview)
     – Stream agent progress to your frontend
*   [Waitpoints](https://trigger.dev/docs/wait)
     – Add human-in-the-loop approval steps

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/ai-agents/verify-news-article)
[Drizzle setup guideThis guide will show you how to set up Drizzle ORM with Trigger.dev\
\
Next](https://trigger.dev/docs/guides/frameworks/drizzle)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
