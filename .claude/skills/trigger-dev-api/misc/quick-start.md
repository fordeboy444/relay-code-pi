# Quick start: add Trigger.dev to your project

> Source: https://trigger.dev/docs/quick-start

[​](https://trigger.dev/docs/quick-start#set-up-with-ai)

Set up with AI
--------------------------------------------------------------------------

Using an AI coding assistant? Copy this prompt and paste it into Claude Code, Cursor, Copilot, Windsurf, or any AI tool. It’ll handle the setup for you.Copy the setup prompt

    Help me add Trigger.dev to this project.
    
    ## What to do
    
    1. I need a Trigger.dev account. If I don't have one, point me to https://cloud.trigger.dev to sign up. Wait for me to confirm.
    2. Run `npx trigger.dev@latest init` in the project root.
       - When it asks about the MCP server, recommend I install it (best DX: gives you direct access to Trigger.dev docs, deploys, and run monitoring).
       - Install the "Hello World" example task when prompted.
    3. Run `npx trigger.dev@latest dev` to start the dev server.
    4. Once the dev server is running, test the example task from the Trigger.dev dashboard.
    5. Set TRIGGER_SECRET_KEY in my .env file (or .env.local for Next.js). I can find it on the API Keys page in the dashboard.
    6. Ask me what framework I'm using and show me how to trigger the task from my backend code.
    
    If I've already run init and want the MCP server, run: npx trigger.dev@latest install-mcp
    
    ## Critical rules
    
    - ALWAYS import from `@trigger.dev/sdk`. NEVER import from `@trigger.dev/sdk/v3`.
    - NEVER use `client.defineJob()` — that's the deprecated v2 API.
    - Use type-only imports when triggering from backend code to avoid bundling task code:
    
      import type { myTask } from "./trigger/example";
      import { tasks } from "@trigger.dev/sdk";
    
      const handle = await tasks.trigger<typeof myTask>("hello-world", { message: "Hello from my app!" });
    
    ## When done, point me to
    
    - Writing tasks: https://trigger.dev/docs/tasks/overview
    - Real-time updates: https://trigger.dev/docs/realtime/overview
    - AI tooling: https://trigger.dev/docs/building-with-ai

[​](https://trigger.dev/docs/quick-start#manual-setup)

Manual setup
----------------------------------------------------------------------

1

[](https://trigger.dev/docs/quick-start#)

### Create a Trigger.dev account

Sign up at [Trigger.dev Cloud](https://cloud.trigger.dev/)
 (or [self-host](https://trigger.dev/docs/open-source-self-hosting)
). The onboarding flow will guide you through creating your first organization and project.

2

[](https://trigger.dev/docs/quick-start#)

### Run the CLI \`init\` command

The easiest way to get started is to use the CLI. It will add Trigger.dev to your existing project, create a `/trigger` folder and give you an example task.Run this command in the root of your project to get started:

npm

pnpm

yarn

    npx trigger.dev@latest init
    

It will do a few things:

Our [Trigger.dev MCP server](https://trigger.dev/docs/mcp-introduction)
 gives your AI assistant direct access to Trigger.dev tools; search docs, trigger tasks, deploy projects, and monitor runs. We recommend installing it for the best developer experience.

1.  Ask if you want to install the [Trigger.dev MCP server](https://trigger.dev/docs/mcp-introduction)
     for your AI assistant.
2.  Log you into the CLI if you’re not already logged in.
3.  Ask you to select your project.
4.  Install the required SDK packages.
5.  Ask where you’d like to create the `/trigger` directory and create it with an example task.
6.  Create a `trigger.config.ts` file in the root of your project.

Install the “Hello World” example task when prompted. We’ll use this task to test the setup.

3

[](https://trigger.dev/docs/quick-start#)

### Run the CLI \`dev\` command

The CLI `dev` command runs a server for your tasks. It watches for changes in your `/trigger` directory and communicates with the Trigger.dev platform to register your tasks, perform runs, and send data back and forth.It can also update your `@trigger.dev/*` packages to prevent version mismatches and failed deploys. You will always be prompted first.

npm

pnpm

yarn

    npx trigger.dev@latest dev
    

4

[](https://trigger.dev/docs/quick-start#)

### Perform a test run using the dashboard

The CLI `dev` command spits out various useful URLs. Right now we want to visit the Test page.You should see our Example task in the list , select it. Most tasks have a “payload” which you enter in the JSON editor , but our example task doesn’t need any input.You can configure options on the run , view recent payloads , and create run templates .Press the “Run test” button .![Test page](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/test-dashboard.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=e44fddf5357449c582b92cd3d434e43d)

5

[](https://trigger.dev/docs/quick-start#)

### View your run

Congratulations, you should see the run page which will live reload showing you the current state of the run.![Run page](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/run-page.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=7d890c5d199be7feaddc9162435bcc17)If you go back to your terminal you’ll see that the dev command also shows the task status and links to the run log.![Terminal showing completed run](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/terminal-completed-run.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=4de391f21eb74db6e3f7c174d86b4b71)

[​](https://trigger.dev/docs/quick-start#triggering-tasks-from-your-app)

Triggering tasks from your app
----------------------------------------------------------------------------------------------------------

The test page in the dashboard is great for verifying your task works. To trigger tasks from your own code, you’ll need to set the `TRIGGER_SECRET_KEY` environment variable. Grab it from the API Keys page in the dashboard and add it to your `.env` file.

.env

    TRIGGER_SECRET_KEY=tr_dev_...
    

See [Triggering](https://trigger.dev/docs/triggering)
 for the full guide, or jump straight to framework-specific setup for [Next.js](https://trigger.dev/docs/guides/frameworks/nextjs)
, [Remix](https://trigger.dev/docs/guides/frameworks/remix)
, or [Node.js](https://trigger.dev/docs/guides/frameworks/nodejs)
.

[​](https://trigger.dev/docs/quick-start#next-steps)

Next steps
------------------------------------------------------------------

Building with AI
----------------

Build Trigger.dev projects using AI coding assistants

How to trigger your tasks
-------------------------

Trigger tasks from your backend code

Writing tasks
-------------

Task options, lifecycle hooks, retries, and queues

Guides and example projects
---------------------------

Framework guides and working example repos

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/introduction)
[Manual setupHow to manually setup Trigger.dev in your project.\
\
Next](https://trigger.dev/docs/manual-setup)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
