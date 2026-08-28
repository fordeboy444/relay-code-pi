# Next.js setup guide

> Source: https://trigger.dev/docs/guides/frameworks/nextjs

This guide can be followed for both App and Pages router as well as Server Actions.

[​](https://trigger.dev/docs/guides/frameworks/nextjs#prerequisites)

Prerequisites
-------------------------------------------------------------------------------------

*   Setup a project in
*   Ensure TypeScript is installed
*   [Create a Trigger.dev account](https://cloud.trigger.dev/)
    
*   Create a new Trigger.dev project

[​](https://trigger.dev/docs/guides/frameworks/nextjs#initial-setup)

Initial setup
-------------------------------------------------------------------------------------

1

[](https://trigger.dev/docs/guides/frameworks/nextjs#)

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

[](https://trigger.dev/docs/guides/frameworks/nextjs#)

Run the CLI \`dev\` command

The CLI `dev` command runs a server for your tasks. It watches for changes in your `/trigger` directory and communicates with the Trigger.dev platform to register your tasks, perform runs, and send data back and forth.It can also update your `@trigger.dev/*` packages to prevent version mismatches and failed deploys. You will always be prompted first.

npm

pnpm

yarn

    npx trigger.dev@latest dev
    

3

[](https://trigger.dev/docs/guides/frameworks/nextjs#)

Perform a test run using the dashboard

The CLI `dev` command spits out various useful URLs. Right now we want to visit the Test page.You should see our Example task in the list , select it. Most tasks have a “payload” which you enter in the JSON editor , but our example task doesn’t need any input.You can configure options on the run , view recent payloads , and create run templates .Press the “Run test” button .![Test page](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/test-dashboard.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=e44fddf5357449c582b92cd3d434e43d)

4

[](https://trigger.dev/docs/guides/frameworks/nextjs#)

View your run

Congratulations, you should see the run page which will live reload showing you the current state of the run.![Run page](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/run-page.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=7d890c5d199be7feaddc9162435bcc17)If you go back to your terminal you’ll see that the dev command also shows the task status and links to the run log.![Terminal showing completed run](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/terminal-completed-run.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=4de391f21eb74db6e3f7c174d86b4b71)

Instead of running your Next.js app and Trigger.dev dev server in separate terminals, you can run them concurrently. First, add these scripts to your `package.json`:

    {
      "scripts": {
        "trigger:dev": "npx trigger.dev@latest dev",
        "dev": "npx concurrently --kill-others --names \"next,trigger\" --prefix-colors \"yellow,blue\" \"next dev\" \"npm run trigger:dev\""
      }
    }
    

Then, in your terminal, you can start both servers with a single command:

    npm run dev
    

This will run both your Next.js app and Trigger.dev dev server in the same terminal window, with color-coded output to distinguish between them.

[​](https://trigger.dev/docs/guides/frameworks/nextjs#set-your-secret-key-locally)

Set your secret key locally
-----------------------------------------------------------------------------------------------------------------

Set your `TRIGGER_SECRET_KEY` environment variable in your `.env.local` file if using the Next.js App router or `.env` file if using Pages router. This key is used to authenticate with Trigger.dev, so you can trigger runs from your Next.js app. Visit the API Keys page in the dashboard and select the DEV secret key. ![How to find your secret key](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/api-keys.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=3bb0b87a8e1a3033a8ff1ba3590f5786) For more information on authenticating with Trigger.dev, see the [API keys page](https://trigger.dev/docs/apikeys)
.

[​](https://trigger.dev/docs/guides/frameworks/nextjs#triggering-your-task-in-next-js)

Triggering your task in Next.js
-------------------------------------------------------------------------------------------------------------------------

Here are the steps to trigger your task in the Next.js App and Pages router and Server Actions.

*   App Router
    
*   App Router (Server Actions)
    
*   Pages Router
    

1

[](https://trigger.dev/docs/guides/frameworks/nextjs#)

Create a Route Handler

Add a Route Handler by creating a `route.ts` file (or `route.js` file) in the `app/api` directory like this: `app/api/hello-world/route.ts`.

2

[](https://trigger.dev/docs/guides/frameworks/nextjs#)

Add your task

Add this code to your `route.ts` file which imports your task along with `NextResponse` to handle the API route response:

app/api/hello-world/route.ts

    // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
    import type { helloWorldTask } from "@/trigger/example";
    import { tasks } from "@trigger.dev/sdk";
    import { NextResponse } from "next/server";
    
    //tasks.trigger also works with the edge runtime
    //export const runtime = "edge";
    
    export async function GET() {
      const handle = await tasks.trigger<typeof helloWorldTask>(
        "hello-world",
        "James"
      );
    
      return NextResponse.json(handle);
    }
    

3

[](https://trigger.dev/docs/guides/frameworks/nextjs#)

Trigger your task

Run your Next.js app:

npm

pnpm

yarn

    npm run dev
    

Run the dev server from Step 2. of the [Initial Setup](https://trigger.dev/docs/guides/frameworks/nextjs#initial-setup)
 section above if it’s not already running:

npm

pnpm

yarn

    npx trigger.dev@latest dev
    

Now visit the URL in your browser to trigger the task. Ensure the port number is the same as the one you’re running your Next.js app on. For example, if you’re running your Next.js app on port 3000, visit:

    http://localhost:3000/api/hello-world
    

You should see the CLI log the task run with a link to view the logs in the dashboard.![Trigger.dev CLI showing a successful run](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/trigger-cli-run-success.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=fb955cb91d22967fc4251ab00d09547d)Visit the [Trigger.dev dashboard](https://cloud.trigger.dev/)
 to see your run.

1

[](https://trigger.dev/docs/guides/frameworks/nextjs#)

Create an \`actions.ts\` file

Create an `actions.ts` file in the `app/api` directory and add this code which imports your `helloWorldTask()` task. Make sure to include `"use server";` at the top of the file.

app/api/actions.ts

      "use server";
    
      import type { helloWorldTask } from "@/trigger/example";
      import { tasks } from "@trigger.dev/sdk";
    
      export async function myTask() {
        try {
          const handle = await tasks.trigger<typeof helloWorldTask>(
            "hello-world",
            "James"
          );
    
          return { handle };
        } catch (error) {
          console.error(error);
          return {
            error: "something went wrong",
          };
        }
      }
    

2

[](https://trigger.dev/docs/guides/frameworks/nextjs#)

Create a button to trigger your task

For the purposes of this guide, we’ll create a button with an `onClick` event that triggers your task. We’ll add this to the `page.tsx` file so we can trigger the task by clicking the button. Make sure to import your task and include `"use client";` at the top of your file.

app/page.tsx

    "use client";
    
    import { myTask } from "./actions";
    
    export default function Home() {
      return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
          <button
            onClick={async () => {
              await myTask();
            }}
          >
            Trigger my task
          </button>
        </main>
      );
    }
    

3

[](https://trigger.dev/docs/guides/frameworks/nextjs#)

Trigger your task

Run your Next.js app:

npm

pnpm

yarn

    npm run dev
    

Open your app in a browser, making sure the port number is the same as the one you’re running your Next.js app on. For example, if you’re running your Next.js app on port 3000, visit:

    http://localhost:3000
    

Run the dev server from Step 2. of the [Initial Setup](https://trigger.dev/docs/guides/frameworks/nextjs#initial-setup)
 section above if it’s not already running:

npm

pnpm

yarn

    npx trigger.dev@latest dev
    

Then click the button we created in your app to trigger the task. You should see the CLI log the task run with a link to view the logs.![Trigger.dev CLI showing a successful run](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/trigger-cli-run-success.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=fb955cb91d22967fc4251ab00d09547d)Visit the [Trigger.dev dashboard](https://cloud.trigger.dev/)
 to see your run.

1

[](https://trigger.dev/docs/guides/frameworks/nextjs#)

Create an API route

Create an API route in the `pages/api` directory. Then create a `hello-world .ts` (or `hello-world.js`) file for your task and copy this code example:

pages/api/hello-world.ts

    // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
    import { helloWorldTask } from "@/trigger/example";
    import { tasks } from "@trigger.dev/sdk";
    import type { NextApiRequest, NextApiResponse } from "next";
    
    export default async function handler(
      req: NextApiRequest,
      res: NextApiResponse<{ id: string }>
    ) {
      const handle = await tasks.trigger<typeof helloWorldTask>(
      "hello-world",
      "James"
      );
    
      res.status(200).json(handle);
    }
    

2

[](https://trigger.dev/docs/guides/frameworks/nextjs#)

Trigger your task

Run your Next.js app:

npm

pnpm

yarn

    npm run dev
    

Run the dev server from Step 2. of the [Initial Setup](https://trigger.dev/docs/guides/frameworks/nextjs#initial-setup)
 section above if it’s not already running:

npm

pnpm

yarn

    npx trigger.dev@latest dev
    

Now visit the URL in your browser to trigger the task. Ensure the port number is the same as the one you’re running your Next.js app on. For example, if you’re running your Next.js app on port 3000, visit:

    http://localhost:3000/api/hello-world
    

You should see the CLI log the task run with a link to view the logs in the dashboard.![Trigger.dev CLI showing a successful run](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/trigger-cli-run-success.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=fb955cb91d22967fc4251ab00d09547d)Visit the [Trigger.dev dashboard](https://cloud.trigger.dev/)
 to see your run.

[​](https://trigger.dev/docs/guides/frameworks/nextjs#automatically-sync-environment-variables-from-your-vercel-project-optional)

Automatically sync environment variables from your Vercel project (optional)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If you want to automatically sync environment variables from your Vercel project to Trigger.dev, you can add our `syncVercelEnvVars` build extension to your `trigger.config.ts` file.

You need to set the `VERCEL_ACCESS_TOKEN` and `VERCEL_PROJECT_ID` environment variables, or pass in the token and project ID as arguments to the `syncVercelEnvVars` build extension. If you’re working with a team project, you’ll also need to set `VERCEL_TEAM_ID`, which can be found in your team settings. You can find / generate the `VERCEL_ACCESS_TOKEN` in your Vercel [dashboard](https://vercel.com/account/settings/tokens)
. Make sure the scope of the token covers the project with the environment variables you want to sync.

trigger.config.ts

    import { defineConfig } from "@trigger.dev/sdk";
    import { syncVercelEnvVars } from "@trigger.dev/build/extensions/core";
    
    export default defineConfig({
      project: "<project ref>",
      // Your other config settings...
      build: {
        extensions: [syncVercelEnvVars()],
      },
    });
    

For more information, see our [Vercel sync environment variables](https://trigger.dev/docs/guides/examples/vercel-sync-env-vars)
 guide.

[​](https://trigger.dev/docs/guides/frameworks/nextjs#manually-add-your-environment-variables-optional)

Manually add your environment variables (optional)
-------------------------------------------------------------------------------------------------------------------------------------------------------------

If you have any environment variables in your tasks, be sure to add them in the dashboard so deployed code runs successfully. In Node.js, these environment variables are accessed in your code using `process.env.MY_ENV_VAR`. In the sidebar select the “Environment Variables” page, then press the “New environment variable” button. ![Environment variables page](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/environment-variables-page.jpg?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=4f6c67a030b20699bde25c22d68e57af) You can add values for your local dev environment, staging and prod. ![Environment variables\
page](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/environment-variables-panel.jpg?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=ed23a501677d11631bb832eb6f95ceae) You can also add environment variables in code by following the steps on the [Environment Variables page](https://trigger.dev/docs/deploy-environment-variables#in-your-code)
.

[​](https://trigger.dev/docs/guides/frameworks/nextjs#deploying-your-task-to-trigger-dev)

Deploying your task to Trigger.dev
-------------------------------------------------------------------------------------------------------------------------------

For this guide, we’ll manually deploy your task by running the [CLI deploy command](https://trigger.dev/docs/cli-deploy-commands)
 below. Other ways to deploy are listed in the next section.

npm

pnpm

yarn

    npx trigger.dev@latest deploy
    

### 

[​](https://trigger.dev/docs/guides/frameworks/nextjs#other-ways-to-deploy)

Other ways to deploy

*   GitHub Actions
    
*   Vercel Integration
    

Use GitHub Actions to automatically deploy your tasks whenever new code is pushed and when the `trigger` directory has changes in it. Follow [this guide](https://trigger.dev/docs/github-actions)
 to set up GitHub Actions.

We’re working on adding an official [Vercel integration](https://trigger.dev/docs/vercel-integration)
 which you can follow the progress of [here](https://feedback.trigger.dev/p/vercel-integration-3)
.

[​](https://trigger.dev/docs/guides/frameworks/nextjs#troubleshooting-&-extra-resources)

Troubleshooting & extra resources
-----------------------------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/guides/frameworks/nextjs#revalidation-from-your-trigger-dev-tasks)

Revalidation from your Trigger.dev tasks

[Revalidation](https://vercel.com/docs/incremental-static-regeneration/quickstart#on-demand-revalidation)
 allows you to purge the cache for an ISR route. To revalidate an ISR route from a Trigger.dev task, you have to set up a handler for the `revalidate` event. This is an API route that you can add to your Next.js app. This handler will run the `revalidatePath` function from Next.js, which purges the cache for the given path. The handlers are slightly different for the App and Pages router:

#### 

[​](https://trigger.dev/docs/guides/frameworks/nextjs#revalidation-handler-app-router)

Revalidation handler: App Router

If you are using the App router, create a new revalidation route at `app/api/revalidate/path/route.ts`:

app/api/revalidate/path/route.ts

    import { NextRequest, NextResponse } from "next/server";
    import { revalidatePath } from "next/cache";
    
    export async function POST(request: NextRequest) {
      try {
        const { path, type, secret } = await request.json();
        // Create a REVALIDATION_SECRET and set it in your environment variables
        if (secret !== process.env.REVALIDATION_SECRET) {
          return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
        }
    
        if (!path) {
          return NextResponse.json({ message: "Path is required" }, { status: 400 });
        }
    
        revalidatePath(path, type);
    
        return NextResponse.json({ revalidated: true });
      } catch (err) {
        console.error("Error revalidating path:", err);
        return NextResponse.json({ message: "Error revalidating path" }, { status: 500 });
      }
    }
    

#### 

[​](https://trigger.dev/docs/guides/frameworks/nextjs#revalidation-handler-pages-router)

Revalidation handler: Pages Router

If you are using the Pages router, create a new revalidation route at `pages/api/revalidate/path.ts`:

pages/api/revalidate/path.ts

    import type { NextApiRequest, NextApiResponse } from "next";
    
    export default async function handler(req: NextApiRequest, res: NextApiResponse) {
      try {
        if (req.method !== "POST") {
          return res.status(405).json({ message: "Method not allowed" });
        }
    
        const { path, secret } = req.body;
    
        if (secret !== process.env.REVALIDATION_SECRET) {
          return res.status(401).json({ message: "Invalid secret" });
        }
    
        if (!path) {
          return res.status(400).json({ message: "Path is required" });
        }
    
        await res.revalidate(path);
    
        return res.json({ revalidated: true });
      } catch (err) {
        console.error("Error revalidating path:", err);
        return res.status(500).json({ message: "Error revalidating path" });
      }
    }
    

#### 

[​](https://trigger.dev/docs/guides/frameworks/nextjs#revalidation-task)

Revalidation task

This task takes a `path` as a payload and will revalidate the path you specify, using the handler you set up previously.

To run this task locally you will need to set the `REVALIDATION_SECRET` environment variable in your `.env.local` file (or `.env` file if using Pages router).To run this task in production, you will need to set the `REVALIDATION_SECRET` environment variable in Vercel, in your project settings, and also in your environment variables in the Trigger.dev dashboard.

trigger/revalidate-path.ts

    import { logger, task } from "@trigger.dev/sdk";
    
    const NEXTJS_APP_URL = process.env.NEXTJS_APP_URL; // e.g. "http://localhost:3000" or "https://my-nextjs-app.vercel.app"
    const REVALIDATION_SECRET = process.env.REVALIDATION_SECRET; // Create a REVALIDATION_SECRET and set it in your environment variables
    
    export const revalidatePath = task({
      id: "revalidate-path",
      run: async (payload: { path: string }) => {
        const { path } = payload;
    
        try {
          const response = await fetch(`${NEXTJS_APP_URL}/api/revalidate/path`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              path: `${NEXTJS_APP_URL}/${path}`,
              secret: REVALIDATION_SECRET,
            }),
          });
    
          if (response.ok) {
            logger.log("Path revalidation successful", { path });
            return { success: true };
          } else {
            logger.error("Path revalidation failed", {
              path,
              statusCode: response.status,
              statusText: response.statusText,
            });
            return {
              success: false,
              error: `Revalidation failed with status ${response.status}: ${response.statusText}`,
            };
          }
        } catch (error) {
          logger.error("Path revalidation encountered an error", {
            path,
            error: error instanceof Error ? error.message : String(error),
          });
          return {
            success: false,
            error: `Failed to revalidate path due to an unexpected error`,
          };
        }
      },
    });
    

#### 

[​](https://trigger.dev/docs/guides/frameworks/nextjs#testing-the-revalidation-task)

Testing the revalidation task

You can test your revalidation task in the Trigger.dev dashboard on the testing page, using the following payload.

    {
      "path": "<path-to-revalidate>" // e.g. "blog"
    }
    

### 

[​](https://trigger.dev/docs/guides/frameworks/nextjs#next-js-build-failing-due-to-missing-api-key-in-github-ci)

Next.js build failing due to missing API key in GitHub CI

This issue occurs during the Next.js app build process on GitHub CI where the Trigger.dev SDK is expecting the TRIGGER\_SECRET\_KEY environment variable to be set at build time. Next.js attempts to compile routes and creates static pages, which can cause issues with SDKs that require runtime environment variables. The solution is to mark the relevant pages as dynamic to prevent Next.js from trying to make them static. You can do this by adding the following line to the route file:

    export const dynamic = "force-dynamic";
    

### 

[​](https://trigger.dev/docs/guides/frameworks/nextjs#correctly-passing-event-handlers-to-react-components)

Correctly passing event handlers to React components

An issue can sometimes arise when you try to pass a function directly to the `onClick` prop. This is because the function may require specific arguments or context that are not available when the event occurs. By wrapping the function call in an arrow function, you ensure that the handler is called with the correct context and any necessary arguments. For example: This works:

    <Button onClick={() => myTask()}>Trigger my task</Button>
    

Whereas this does not work:

    <Button onClick={myTask}>Trigger my task</Button>
    

[​](https://trigger.dev/docs/guides/frameworks/nextjs#realtime-updates-with-react-hooks)

Realtime updates with React hooks
-----------------------------------------------------------------------------------------------------------------------------

The `@trigger.dev/react-hooks` package lets you subscribe to task runs from your React components. Show progress bars, stream AI responses, or display run status in real time.

React hooks
-----------

Hooks for subscribing to runs, streaming data, and triggering tasks from the frontend.

Streams
-------

Pipe continuous data (like AI completions) from your tasks to the client while they run.

[​](https://trigger.dev/docs/guides/frameworks/nextjs#learn-more-about-next-js-and-trigger-dev)

Learn more about Next.js and Trigger.dev
-------------------------------------------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/guides/frameworks/nextjs#walk-through-guides-from-development-to-deployment)

Walk-through guides from development to deployment

Next.js - setup guide
---------------------

Learn how to setup Trigger.dev with Next.js, using either the pages or app router.

Next.js - triggering tasks using webhooks
-----------------------------------------

Learn how to create a webhook handler for incoming webhooks in a Next.js app, and trigger a task from it.

### 

[​](https://trigger.dev/docs/guides/frameworks/nextjs#task-examples)

Task examples

![fal-realtime-thumbnail](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/fal-realtime-thumbnail.png?fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=9ac31bb57678b222a82b04055184eea0)

Fal.ai with Realtime in Next.js
-------------------------------

Generate an image from a prompt using Fal.ai and Trigger.dev Realtime.

![fal-generate-cartoon-thumbnail](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/fal-generate-cartoon-thumbnail.png?fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=003d7870f36310d14ca9a71a952667d3)

Generate a cartoon using Fal.ai in Next.js
------------------------------------------

Convert an image to a cartoon using Fal.ai.

Vercel sync environment variables
---------------------------------

Learn how to automatically sync environment variables from your Vercel projects to Trigger.dev.

Vercel AI SDK
-------------

Learn how to use the Vercel AI SDK, which is a simple way to use AI models from different providers, including OpenAI, Anthropic, Amazon Bedrock, Groq, Perplexity etc.

[​](https://trigger.dev/docs/guides/frameworks/nextjs#useful-next-steps)

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

[Previous](https://trigger.dev/docs/guides/frameworks/bun)
[Node.jsThis guide will show you how to setup Trigger.dev in your existing Node.js project, test an example task, and view the run.\
\
Next](https://trigger.dev/docs/guides/frameworks/nodejs)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
