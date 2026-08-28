# Node.js setup guide

> Source: https://trigger.dev/docs/guides/frameworks/nodejs

[​](https://trigger.dev/docs/guides/frameworks/nodejs#prerequisites)

Prerequisites
-------------------------------------------------------------------------------------

*   Setup a project in
*   Ensure TypeScript is installed
*   [Create a Trigger.dev account](https://cloud.trigger.dev/)
    
*   Create a new Trigger.dev project

[​](https://trigger.dev/docs/guides/frameworks/nodejs#initial-setup)

Initial setup
-------------------------------------------------------------------------------------

1

[](https://trigger.dev/docs/guides/frameworks/nodejs#)

Run the CLI \`init\` command

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

2

[](https://trigger.dev/docs/guides/frameworks/nodejs#)

Run the CLI \`dev\` command

The CLI `dev` command runs a server for your tasks. It watches for changes in your `/trigger` directory and communicates with the Trigger.dev platform to register your tasks, perform runs, and send data back and forth.It can also update your `@trigger.dev/*` packages to prevent version mismatches and failed deploys. You will always be prompted first.

npm

pnpm

yarn

    npx trigger.dev@latest dev
    

3

[](https://trigger.dev/docs/guides/frameworks/nodejs#)

Perform a test run using the dashboard

The CLI `dev` command spits out various useful URLs. Right now we want to visit the Test page.You should see our Example task in the list , select it. Most tasks have a “payload” which you enter in the JSON editor , but our example task doesn’t need any input.You can configure options on the run , view recent payloads , and create run templates .Press the “Run test” button .![Test page](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/test-dashboard.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=e44fddf5357449c582b92cd3d434e43d)

4

[](https://trigger.dev/docs/guides/frameworks/nodejs#)

View your run

Congratulations, you should see the run page which will live reload showing you the current state of the run.![Run page](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/run-page.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=7d890c5d199be7feaddc9162435bcc17)If you go back to your terminal you’ll see that the dev command also shows the task status and links to the run log.![Terminal showing completed run](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/terminal-completed-run.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=4de391f21eb74db6e3f7c174d86b4b71)

[​](https://trigger.dev/docs/guides/frameworks/nodejs#useful-next-steps)

Useful next steps
---------------------------------------------------------------------------------------------

Tasks overview
--------------

Learn what tasks are and their options

Writing tasks
-------------

Learn how to write your own tasks

Deploy using the CLI
--------------------

Learn how to deploy your task manually using the CLI

Deploy using GitHub actions
---------------------------

Learn how to deploy your task using GitHub actions

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/frameworks/nextjs)
[RemixThis guide will show you how to setup Trigger.dev in your existing Remix project, test an example task, and view the run.\
\
Next](https://trigger.dev/docs/guides/frameworks/remix)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
