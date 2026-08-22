# Triggering tasks from Supabase edge functions

> Source: https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#overview)

Overview
--------------------------------------------------------------------------------------------------

Supabase edge functions allow you to trigger tasks either when an event is sent from a third party (e.g. when a new Stripe payment is processed, when a new user signs up to a service, etc), or when there are any changes or updates to your Supabase database. This guide shows you how to set up and deploy a simple Supabase edge function example that triggers a task when an edge function URL is accessed.

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#prerequisites)

Prerequisites
------------------------------------------------------------------------------------------------------------

*   Ensure you have the [Supabase CLI](https://supabase.com/docs/guides/cli/getting-started)
     installed
*   Since Supabase CLI version 1.123.4, you must have [Docker Desktop installed](https://supabase.com/docs/guides/functions/deploy#deploy-your-edge-functions)
     to deploy Edge Functions
*   Ensure TypeScript is installed
*   [Create a Trigger.dev account](https://cloud.trigger.dev/)
    
*   Create a new Trigger.dev project

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#github-repo)

GitHub repo
--------------------------------------------------------------------------------------------------------

View the project on GitHub
--------------------------

Click here to view the full code for this project in our examples repository on GitHub. You can fork it and use it as a starting point for your own project.

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#initial-setup)

Initial setup
------------------------------------------------------------------------------------------------------------

1

[](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#)

Optional step 1: create a new Supabase project

If you already have a Supabase project on your local machine you can skip this step.

You can create a new project by running the following command in your terminal using the Supabase CLI:

    supabase init
    

If you are using VS Code, ensure to answer ‘y’ when asked to generate VS Code settings for Deno, and install any recommended extensions.

2

[](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#)

Optional step 2: create a package.json file

If your project does not already have `package.json` file (e.g. if you are using Deno), create it manually in your project’s root folder.

If your project has a `package.json` file you can skip this step.

This is required for the Trigger.dev SDK to work correctly.

package.json

    {
      "devDependencies": {
        "typescript": "^5.6.2"
      }
    }
    

Update your Typescript version to the latest version available.

3

[](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#)

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

4

[](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#)

Run the CLI \`dev\` command

The CLI `dev` command runs a server for your tasks. It watches for changes in your `/trigger` directory and communicates with the Trigger.dev platform to register your tasks, perform runs, and send data back and forth.It can also update your `@trigger.dev/*` packages to prevent version mismatches and failed deploys. You will always be prompted first.

npm

pnpm

yarn

    npx trigger.dev@latest dev
    

5

[](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#)

Perform a test run using the dashboard

The CLI `dev` command spits out various useful URLs. Right now we want to visit the Test page.You should see our Example task in the list , select it. Most tasks have a “payload” which you enter in the JSON editor , but our example task doesn’t need any input.You can configure options on the run , view recent payloads , and create run templates .Press the “Run test” button .![Test page](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/test-dashboard.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=e44fddf5357449c582b92cd3d434e43d)

6

[](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#)

View your run

Congratulations, you should see the run page which will live reload showing you the current state of the run.![Run page](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/run-page.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=7d890c5d199be7feaddc9162435bcc17)If you go back to your terminal you’ll see that the dev command also shows the task status and links to the run log.![Terminal showing completed run](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/terminal-completed-run.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=4de391f21eb74db6e3f7c174d86b4b71)

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#create-a-new-supabase-edge-function-and-deploy-it)

Create a new Supabase edge function and deploy it
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1

[](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#)

Create a new Supabase edge function

We’ll call this example `edge-function-trigger`.In your project, run the following command in the terminal using the Supabase CLI:

    supabase functions new edge-function-trigger
    

2

[](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#)

Update the edge function code

Replace the placeholder code in your `edge-function-trigger/index.ts` file with the following:

functions/edge-function-trigger/index.ts

    // Setup type definitions for built-in Supabase Runtime APIs
    import "jsr:@supabase/functions-js/edge-runtime.d.ts";
    // Import the Trigger.dev SDK - replace "<your-sdk-version>" with the version of the SDK you are using, e.g. "3.0.0". You can find this in your package.json file.
    import { tasks } from "npm:@trigger.dev/sdk@3.0.0";
    // Import your task type from your /trigger folder
    import type { helloWorldTask } from "../../../src/trigger/example.ts";
    //     👆 **type-only** import
    
    Deno.serve(async () => {
      await tasks.trigger<typeof helloWorldTask>(
        // Your task id
        "hello-world",
        // Your task payload
        "Hello from a Supabase Edge Function!"
      );
      return new Response("OK");
    });
    

You can only import the `type` from the task.

Tasks in the `trigger` folder use Node, so they must stay in there or they will not run, especially if you are using a different runtime like Deno. Also do not add “`npm:`” to imports inside your task files, for the same reason.

3

[](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#)

Deploy your edge function using the Supabase CLI

You can now deploy your edge function with the following command in your terminal:

    supabase functions deploy edge-function-trigger --no-verify-jwt
    

`--no-verify-jwt` removes the JSON Web Tokens requirement from the authorization header. By default this should be on, but it is not strictly required for this hello world example.

To learn more about how to properly configure Supabase auth for Trigger.dev tasks, please refer to our [Supabase Authentication guide](https://trigger.dev/docs/guides/frameworks/supabase-authentication)
. It demonstrates how to use JWT authentication for user-specific operations or your service role key for admin-level access.

Follow the CLI instructions and once complete you should now see your new edge function deployment in your Supabase edge functions dashboard.There will be a link to the dashboard in your terminal output, or you can find it at this URL:`https://supabase.com/dashboard/project/<your-project-id>/functions`

Replace `your-project-id` with your actual project ID.

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#set-your-trigger-dev-prod-secret-key-in-the-supabase-dashboard)

Set your Trigger.dev prod secret key in the Supabase dashboard
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

To trigger a task from your edge function, you need to set your Trigger.dev secret key in the Supabase dashboard. To do this, first go to your Trigger.dev [project dashboard](https://cloud.trigger.dev/)
 and copy the `prod` secret key from the API keys page. ![How to find your prod secret key](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/api-key-prod.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=aed3fb7368091c0ee12cac472e02fc07) Then, in [Supabase](https://supabase.com/dashboard/projects)
, select your project, navigate to ‘Project settings’ , click ‘Edge functions’ in the configurations menu, and then click the ‘Add new secret’ button. Add `TRIGGER_SECRET_KEY` with the pasted value of your Trigger.dev `prod` secret key. ![Add secret key in Supabase](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/supabase-keys-1.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=30c4316db62c7820dd5c513c922b2976)

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#deploy-your-task-and-trigger-it-from-your-edge-function)

Deploy your task and trigger it from your edge function
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1

[](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#)

Deploy your 'Hello World' task

Next, deploy your `hello-world` task to [Trigger.dev cloud](https://cloud.trigger.dev/)
.

npm

pnpm

yarn

    npx trigger.dev@latest deploy
    

2

[](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#)

Trigger a prod run from your deployed edge function

To do this all you need to do is simply open the `edge-function-trigger` URL.`https://supabase.com/dashboard/project/<your-project-id>/functions`

Replace `your-project-id` with your actual project ID.

In your Supabase project, go to your Edge function dashboard, find `edge-function-trigger`, copy the URL, and paste it into a new window in your browser.Once loaded you should see ‘OK’ on the new screen.![Edge function URL](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/supabase-function-url.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=f29534a7737c8c81db3da9c382dc9e97)The task will be triggered when your edge function URL is accessed.Check your [cloud.trigger.dev](https://cloud.trigger.dev/)
 dashboard and you should see a successful `hello-world` task.**Congratulations, you have run a simple Hello World task from a Supabase edge function!**

### 

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#if-you-see-a-runtime-error-when-calling-tasks-trigger)

If you see a runtime error when calling tasks.trigger()

If you see `TypeError: Cannot read properties of undefined (reading 'toString')` when calling `tasks.trigger()` from your edge function, the SDK is hitting a dependency that expects Node-style APIs not available in the Supabase Edge (Deno) runtime. Use the [Tasks API](https://trigger.dev/docs/management/tasks/trigger)
 with `fetch` instead of the SDK—that avoids loading the SDK in Deno:

    const response = await fetch(
      `https://api.trigger.dev/api/v1/tasks/your-task-id/trigger`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Deno.env.get("TRIGGER_SECRET_KEY")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payload: { your: "payload" } }),
      }
    );
    

See [Trigger task via API](https://trigger.dev/docs/management/tasks/trigger)
 for full request/response details and optional fields (e.g. `delay`, `idempotencyKey`).

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#learn-more-about-supabase-and-trigger-dev)

Learn more about Supabase and Trigger.dev
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#full-walkthrough-guides-from-development-to-deployment)

Full walkthrough guides from development to deployment

Edge function hello world guide
-------------------------------

Learn how to trigger a task from a Supabase edge function when a URL is visited.

Database webhooks guide
-----------------------

Learn how to trigger a task from a Supabase edge function when an event occurs in your database.

Supabase authentication guide
-----------------------------

Learn how to authenticate Supabase tasks using JWTs for Row Level Security (RLS) or service role keys for admin access.

### 

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic#task-examples-with-code-you-can-copy-and-paste)

Task examples with code you can copy and paste

Supabase database operations
----------------------------

Run basic CRUD operations on a table in a Supabase database using Trigger.dev.

Supabase Storage upload
-----------------------

Download a video from a URL and upload it to Supabase Storage using S3.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/frameworks/supabase-guides-overview)
[Database webhooksThis guide shows you how to trigger a transcribing task when a row is added to a table in a Supabase database, using a Database Webhook and Edge Function.\
\
Next](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
