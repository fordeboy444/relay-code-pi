# Remix setup guide

> Source: https://trigger.dev/docs/guides/frameworks/remix

[​](https://trigger.dev/docs/guides/frameworks/remix#prerequisites)

Prerequisites
------------------------------------------------------------------------------------

*   Setup a project in
*   Ensure TypeScript is installed
*   [Create a Trigger.dev account](https://cloud.trigger.dev/)
    
*   Create a new Trigger.dev project

[​](https://trigger.dev/docs/guides/frameworks/remix#initial-setup)

Initial setup
------------------------------------------------------------------------------------

1

[](https://trigger.dev/docs/guides/frameworks/remix#)

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

[](https://trigger.dev/docs/guides/frameworks/remix#)

Run the CLI \`dev\` command

The CLI `dev` command runs a server for your tasks. It watches for changes in your `/trigger` directory and communicates with the Trigger.dev platform to register your tasks, perform runs, and send data back and forth.It can also update your `@trigger.dev/*` packages to prevent version mismatches and failed deploys. You will always be prompted first.

npm

pnpm

yarn

    npx trigger.dev@latest dev
    

3

[](https://trigger.dev/docs/guides/frameworks/remix#)

Perform a test run using the dashboard

The CLI `dev` command spits out various useful URLs. Right now we want to visit the Test page.You should see our Example task in the list , select it. Most tasks have a “payload” which you enter in the JSON editor , but our example task doesn’t need any input.You can configure options on the run , view recent payloads , and create run templates .Press the “Run test” button .![Test page](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/test-dashboard.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=e44fddf5357449c582b92cd3d434e43d)

4

[](https://trigger.dev/docs/guides/frameworks/remix#)

View your run

Congratulations, you should see the run page which will live reload showing you the current state of the run.![Run page](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/run-page.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=7d890c5d199be7feaddc9162435bcc17)If you go back to your terminal you’ll see that the dev command also shows the task status and links to the run log.![Terminal showing completed run](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/terminal-completed-run.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=4de391f21eb74db6e3f7c174d86b4b71)

[​](https://trigger.dev/docs/guides/frameworks/remix#set-your-secret-key-locally)

Set your secret key locally
----------------------------------------------------------------------------------------------------------------

Set your `TRIGGER_SECRET_KEY` environment variable in your `.env` file. This key is used to authenticate with Trigger.dev, so you can trigger runs from your Remix app. Visit the API Keys page in the dashboard and select the DEV secret key. ![How to find your secret key](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/api-keys.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=3bb0b87a8e1a3033a8ff1ba3590f5786) For more information on authenticating with Trigger.dev, see the [API keys page](https://trigger.dev/docs/apikeys)
.

[​](https://trigger.dev/docs/guides/frameworks/remix#triggering-your-task-in-remix)

Triggering your task in Remix
--------------------------------------------------------------------------------------------------------------------

1

[](https://trigger.dev/docs/guides/frameworks/remix#)

Create an API route

Create a new file called `api.hello-world.ts` (or `api.hello-world.js`) in the `app/routes` directory like this: `app/routes/api.hello-world.ts`.

2

[](https://trigger.dev/docs/guides/frameworks/remix#)

Add your task

Add this code to your `api.hello-world.ts` file which imports your task:

app/routes/api.hello-world.ts

    import type { helloWorldTask } from "../../src/trigger/example";
    import { tasks } from "@trigger.dev/sdk";
    
    export async function loader() {
      const handle = await tasks.trigger<typeof helloWorldTask>("hello-world", "James");
    
      return new Response(JSON.stringify(handle), {
        headers: { "Content-Type": "application/json" },
      });
    }
    

3

[](https://trigger.dev/docs/guides/frameworks/remix#)

Trigger your task

Run your Remix app:

npm

pnpm

yarn

    npm run dev
    

Run the dev server from Step 2. of the [Initial Setup](https://trigger.dev/docs/guides/frameworks/remix#initial-setup)
 section above if it’s not already running:

npm

pnpm

yarn

    npx trigger.dev@latest dev
    

Now visit the URL in your browser to trigger the task. Ensure the port number is the same as the one you’re running your Remix app on. For example, if you’re running your Remix app on port 3000, visit:

    http://localhost:3000/api/trigger
    

You should see the CLI log the task run with a link to view the logs in the dashboard.![Trigger.dev CLI showing a successful run](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/trigger-cli-run-success.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=fb955cb91d22967fc4251ab00d09547d)Visit the [Trigger.dev dashboard](https://cloud.trigger.dev/)
 to see your run.

[​](https://trigger.dev/docs/guides/frameworks/remix#manually-add-your-environment-variables-optional)

Manually add your environment variables (optional)
------------------------------------------------------------------------------------------------------------------------------------------------------------

If you have any environment variables in your tasks, be sure to add them in the dashboard so deployed code runs successfully. In Node.js, these environment variables are accessed in your code using `process.env.MY_ENV_VAR`. In the sidebar select the “Environment Variables” page, then press the “New environment variable” button. ![Environment variables page](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/environment-variables-page.jpg?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=4f6c67a030b20699bde25c22d68e57af) You can add values for your local dev environment, staging and prod. ![Environment variables\
page](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/environment-variables-panel.jpg?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=ed23a501677d11631bb832eb6f95ceae) You can also add environment variables in code by following the steps on the [Environment Variables page](https://trigger.dev/docs/deploy-environment-variables#in-your-code)
.

[​](https://trigger.dev/docs/guides/frameworks/remix#deploying-your-task-to-trigger-dev)

Deploying your task to Trigger.dev
------------------------------------------------------------------------------------------------------------------------------

For this guide, we’ll manually deploy your task by running the [CLI deploy command](https://trigger.dev/docs/cli-deploy-commands)
 below. Other ways to deploy are listed in the next section.

npm

pnpm

yarn

    npx trigger.dev@latest deploy
    

### 

[​](https://trigger.dev/docs/guides/frameworks/remix#other-ways-to-deploy)

Other ways to deploy

*   GitHub Actions
    
*   Vercel Integration
    

Use GitHub Actions to automatically deploy your tasks whenever new code is pushed and when the `trigger` directory has changes in it. Follow [this guide](https://trigger.dev/docs/github-actions)
 to set up GitHub Actions.

We’re working on adding an official [Vercel integration](https://trigger.dev/docs/vercel-integration)
 which you can follow the progress of [here](https://feedback.trigger.dev/p/vercel-integration-3)
.

[​](https://trigger.dev/docs/guides/frameworks/remix#deploying-to-vercel-edge-functions)

Deploying to Vercel Edge Functions
------------------------------------------------------------------------------------------------------------------------------

Before we start, it’s important to note that:

*   We’ll be using a type-only import for the task to ensure compatibility with the edge runtime.
*   The `@trigger.dev/sdk` package supports the edge runtime out of the box.

There are a few extra steps to follow to deploy your `/api/hello-world` API endpoint to Vercel Edge Functions.

1

[](https://trigger.dev/docs/guides/frameworks/remix#)

Update your API route

Update your API route to use the `runtime: "edge"` option and change it to an `action()` so we can trigger the task from a curl request later on.

app/routes/api.hello-world.ts

    import { tasks } from "@trigger.dev/sdk";
    import type { helloWorldTask } from "../../src/trigger/example";
    //      👆 **type-only** import
    
    // include this at the top of your API route file
    export const config = {
      runtime: "edge",
    };
    export async function action({ request }: { request: Request }) {
      // This is where you'd authenticate the request
      const payload = await request.json();
      const handle = await tasks.trigger<typeof helloWorldTask>("hello-world", payload);
      return new Response(JSON.stringify(handle), {
        headers: { "Content-Type": "application/json" },
      });
    }
    

2

[](https://trigger.dev/docs/guides/frameworks/remix#)

Update the Vercel configuration

Create or update the `vercel.json` file with the following:

vercel.json

    {
      "buildCommand": "npm run vercel-build",
      "devCommand": "npm run dev",
      "framework": "remix",
      "installCommand": "npm install",
      "outputDirectory": "build/client"
    }
    

3

[](https://trigger.dev/docs/guides/frameworks/remix#)

Update package.json scripts

Update your `package.json` to include the following scripts:

package.json

    "scripts": {
        "build": "remix vite:build",
        "dev": "remix vite:dev",
        "lint": "eslint --ignore-path .gitignore --cache --cache-location ./node_modules/.cache/eslint .",
        "start": "remix-serve ./build/server/index.js",
        "typecheck": "tsc",
        "vercel-build": "remix vite:build && cp -r ./public ./build/client"
    },
    

4

[](https://trigger.dev/docs/guides/frameworks/remix#)

Deploy to Vercel

Push your code to a Git repository and create a new project in the Vercel dashboard. Select your repository and follow the prompts to complete the deployment.

5

[](https://trigger.dev/docs/guides/frameworks/remix#)

Add your Vercel environment variables

In the Vercel project settings, add your Trigger.dev secret key:

    TRIGGER_SECRET_KEY=your-secret-key
    

You can find this key in the Trigger.dev dashboard under API Keys and select the environment key you want to use.![How to find your secret key](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/api-keys.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=3bb0b87a8e1a3033a8ff1ba3590f5786)

6

[](https://trigger.dev/docs/guides/frameworks/remix#)

Deploy your project

Once you’ve added the environment variable, deploy your project to Vercel.

Ensure you have also deployed your Trigger.dev task. See [deploy your task step](https://trigger.dev/docs/guides/frameworks/remix#deploying-your-task-to-trigger-dev)
.

7

[](https://trigger.dev/docs/guides/frameworks/remix#)

Test your task in production

After deployment, you can test your task in production by running this curl command:

    curl -X POST https://your-app.vercel.app/api/hello-world \
    -H "Content-Type: application/json" \
    -d '{"name": "James"}'
    

This sends a POST request to your API endpoint with a JSON payload.

### 

[​](https://trigger.dev/docs/guides/frameworks/remix#additional-notes)

Additional notes

The `vercel-build` script in `package.json` is specific to Remix projects on Vercel, ensuring that static assets are correctly copied to the build output. The `runtime: "edge"` configuration in the API route allows for better performance on Vercel’s Edge Network.

[​](https://trigger.dev/docs/guides/frameworks/remix#realtime-updates-with-react-hooks)

Realtime updates with React hooks
----------------------------------------------------------------------------------------------------------------------------

The `@trigger.dev/react-hooks` package lets you subscribe to task runs from your React components. Show progress bars, stream AI responses, or display run status in real time.

React hooks
-----------

Hooks for subscribing to runs, streaming data, and triggering tasks from the frontend.

Streams
-------

Pipe continuous data (like AI completions) from your tasks to the client while they run.

[​](https://trigger.dev/docs/guides/frameworks/remix#additional-resources-for-remix)

Additional resources for Remix
----------------------------------------------------------------------------------------------------------------------

Remix - triggering tasks using webhooks
---------------------------------------

How to create a webhook handler in a Remix app, and trigger a task from it.

[​](https://trigger.dev/docs/guides/frameworks/remix#useful-next-steps)

Useful next steps
--------------------------------------------------------------------------------------------

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

[Previous](https://trigger.dev/docs/guides/frameworks/nodejs)
[SvelteKitA plugin for SvelteKit to integrate with Trigger.dev.\
\
Next](https://trigger.dev/docs/guides/community/sveltekit)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
