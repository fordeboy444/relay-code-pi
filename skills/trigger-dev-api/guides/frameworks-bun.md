# Bun guide

> Source: https://trigger.dev/docs/guides/frameworks/bun

The trigger.dev CLI does not yet support Bun. So you will need to run the CLI using Node.js. Bun will still be used to execute your tasks, even in the `dev` environment.

**Supported Bun version:** Deployed tasks run on Bun 1.3.3. For local development, use Bun 1.3.x for compatibility.

[​](https://trigger.dev/docs/guides/frameworks/bun#prerequisites)

Prerequisites
----------------------------------------------------------------------------------

*   Setup a project in
*   Ensure TypeScript is installed
*   [Create a Trigger.dev account](https://cloud.trigger.dev/)
    
*   Create a new Trigger.dev project

[​](https://trigger.dev/docs/guides/frameworks/bun#known-issues)

Known issues
--------------------------------------------------------------------------------

*   Certain OpenTelemetry instrumentation will not work with Bun, because Bun does not support Node’s `register` hook. This means that some libraries that rely on this hook will not work with Bun.
*   If Bun is installed via Homebrew (e.g. `/opt/homebrew/bin/bun`), you may see an `ENOENT: spawn /Users/<you>/.bun/bin/bun` error because the CLI expects Bun at the default install path. **Workaround:** create a symlink:
    
        mkdir -p ~/.bun/bin && ln -s $(which bun) ~/.bun/bin/bun
        
    
*   Bun’s WebSocket client does not handle the `101 Switching Protocols` upgrade response correctly, so connecting to a remote browser via `puppeteer.connect()` / `playwright.connectOverCDP()` (e.g. BrowserBase, Browserless) fails silently — typically with an empty `{}` `ErrorEvent`. The remote session opens and immediately drops. **Workaround:** set `runtime: "node"` in `trigger.config.ts` for tasks that connect to a remote browser.

[​](https://trigger.dev/docs/guides/frameworks/bun#initial-setup)

Initial setup
----------------------------------------------------------------------------------

1

[](https://trigger.dev/docs/guides/frameworks/bun#)

Run the CLI \`init\` command

The easiest way to get started is to use the CLI. It will add Trigger.dev to your existing project, create a `/trigger` folder and give you an example task.Run this command in the root of your project to get started:

npm

pnpm

yarn

    npx trigger.dev@latest init --runtime bun
    

It will do a few things:

1.  Log you into the CLI if you’re not already logged in.
2.  Create a `trigger.config.ts` file in the root of your project.
3.  Ask where you’d like to create the `/trigger` directory.
4.  Create the `/src/trigger` directory with an example task, `/src/trigger/example.[ts/js]`.

Install the “Hello World” example task when prompted. We’ll use this task to test the setup.

2

[](https://trigger.dev/docs/guides/frameworks/bun#)

Update example.ts to use Bun

Open the `/src/trigger/example.ts` file and replace the contents with the following:

example.ts

    import { Database } from "bun:sqlite";
    import { task } from "@trigger.dev/sdk";
    
    export const bunTask = task({
      id: "bun-task",
      run: async (payload: { query: string }) => {
        const db = new Database(":memory:");
        const query = db.query("select 'Hello world' as message;");
        console.log(query.get()); // => { message: "Hello world" }
    
        return {
          message: "Query executed",
        };
      },
    });
    
    

3

[](https://trigger.dev/docs/guides/frameworks/bun#)

Run the CLI \`dev\` command

The CLI `dev` command runs a server for your tasks. It watches for changes in your `/trigger` directory and communicates with the Trigger.dev platform to register your tasks, perform runs, and send data back and forth.It can also update your `@trigger.dev/*` packages to prevent version mismatches and failed deploys. You will always be prompted first.

npm

pnpm

yarn

    npx trigger.dev@latest dev
    

4

[](https://trigger.dev/docs/guides/frameworks/bun#)

Perform a test run using the dashboard

The CLI `dev` command spits out various useful URLs. Right now we want to visit the Test page.You should see our Example task in the list , select it. Most tasks have a “payload” which you enter in the JSON editor , but our example task doesn’t need any input.You can configure options on the run , view recent payloads , and create run templates .Press the “Run test” button .![Test page](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/test-dashboard.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=e44fddf5357449c582b92cd3d434e43d)

5

[](https://trigger.dev/docs/guides/frameworks/bun#)

View your run

Congratulations, you should see the run page which will live reload showing you the current state of the run.![Run page](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/run-page.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=7d890c5d199be7feaddc9162435bcc17)If you go back to your terminal you’ll see that the dev command also shows the task status and links to the run log.![Terminal showing completed run](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/terminal-completed-run.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=4de391f21eb74db6e3f7c174d86b4b71)

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/introduction)
[Next.jsThis guide will show you how to setup Trigger.dev in your existing Next.js project, test an example task, and view the run.\
\
Next](https://trigger.dev/docs/guides/frameworks/nextjs)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
