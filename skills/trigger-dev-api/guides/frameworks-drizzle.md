# Drizzle setup guide

> Source: https://trigger.dev/docs/guides/frameworks/drizzle

[​](https://trigger.dev/docs/guides/frameworks/drizzle#overview)

Overview
----------------------------------------------------------------------------

This guide will show you how to set up [Drizzle ORM](https://orm.drizzle.team/)
 with Trigger.dev, test and view an example task run.

[​](https://trigger.dev/docs/guides/frameworks/drizzle#prerequisites)

Prerequisites
--------------------------------------------------------------------------------------

*   An existing Node.js project with a `package.json` file
*   Ensure TypeScript is installed
*   A [PostgreSQL](https://www.postgresql.org/)
     database server running locally, or accessible via a connection string
*   Drizzle ORM [installed and initialized](https://orm.drizzle.team/docs/get-started)
     in your project
*   A `DATABASE_URL` environment variable set in your `.env` file, pointing to your PostgreSQL database (e.g. `postgresql://user:password@localhost:5432/dbname`)

If your Postgres lives in a private AWS VPC (e.g. RDS without a public endpoint), connect it via [Private networking](https://trigger.dev/docs/private-networking/overview)
 instead of opening it to the public internet (Pro and Enterprise plans).

[​](https://trigger.dev/docs/guides/frameworks/drizzle#initial-setup-optional)

Initial setup (optional)
----------------------------------------------------------------------------------------------------------

Follow these steps if you don’t already have Trigger.dev set up in your project.

1

[](https://trigger.dev/docs/guides/frameworks/drizzle#)

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

[](https://trigger.dev/docs/guides/frameworks/drizzle#)

Run the CLI \`dev\` command

The CLI `dev` command runs a server for your tasks. It watches for changes in your `/trigger` directory and communicates with the Trigger.dev platform to register your tasks, perform runs, and send data back and forth.It can also update your `@trigger.dev/*` packages to prevent version mismatches and failed deploys. You will always be prompted first.

npm

pnpm

yarn

    npx trigger.dev@latest dev
    

3

[](https://trigger.dev/docs/guides/frameworks/drizzle#)

Perform a test run using the dashboard

The CLI `dev` command spits out various useful URLs. Right now we want to visit the Test page.You should see our Example task in the list , select it. Most tasks have a “payload” which you enter in the JSON editor , but our example task doesn’t need any input.You can configure options on the run , view recent payloads , and create run templates .Press the “Run test” button .![Test page](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/test-dashboard.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=e44fddf5357449c582b92cd3d434e43d)

4

[](https://trigger.dev/docs/guides/frameworks/drizzle#)

View your run

Congratulations, you should see the run page which will live reload showing you the current state of the run.![Run page](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/run-page.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=7d890c5d199be7feaddc9162435bcc17)If you go back to your terminal you’ll see that the dev command also shows the task status and links to the run log.![Terminal showing completed run](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/terminal-completed-run.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=4de391f21eb74db6e3f7c174d86b4b71)

[​](https://trigger.dev/docs/guides/frameworks/drizzle#creating-a-task-using-drizzle-and-deploying-it-to-production)

Creating a task using Drizzle and deploying it to production
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1

[](https://trigger.dev/docs/guides/frameworks/drizzle#)

The task using Drizzle

First, create a new task file in your `trigger` folder.This is a simple task that will add a new user to your database, we will call it `drizzle-add-new-user`.

For this task to work correctly, you will need to have a `users` table schema defined with Drizzle that includes `name`, `age` and `email` fields.

/trigger/drizzle-add-new-user.ts

    import { eq } from "drizzle-orm";
    import { task } from "@trigger.dev/sdk";
    import { users } from "src/db/schema";
    import { drizzle } from "drizzle-orm/node-postgres";
    
    // Initialize Drizzle client
    const db = drizzle(process.env.DATABASE_URL!);
    
    export const addNewUser = task({
      id: "drizzle-add-new-user",
      run: async (payload: typeof users.$inferInsert) => {
        // Create new user
        const [user] = await db.insert(users).values(payload).returning();
    
        return {
          createdUser: user,
          message: "User created and updated successfully",
        };
      },
    });
    

2

[](https://trigger.dev/docs/guides/frameworks/drizzle#)

Configuring the build

Next, in your `trigger.config.js` file, add `pg` to the `externals` array. `pg` is a non-blocking PostgreSQL client for Node.js.It is marked as an external to ensure that it is not bundled into the task’s bundle, and instead will be installed and loaded from `node_modules` at runtime.

/trigger.config.js

    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      project: "<project ref>", // Your project reference
      // Your other config settings...
      build: {
        externals: ["pg"],
      },
    });
    

3

[](https://trigger.dev/docs/guides/frameworks/drizzle#)

Deploying your task

Once the build configuration is added, you can now deploy your task using the Trigger.dev CLI.

npm

pnpm

yarn

    npx trigger.dev@latest deploy
    

4

[](https://trigger.dev/docs/guides/frameworks/drizzle#)

Adding your DATABASE\_URL environment variable to Trigger.dev

In your Trigger.dev dashboard sidebar click “Environment Variables” , and then the “New environment variable” button .![Environment variables page](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/environment-variables-page.jpg?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=4f6c67a030b20699bde25c22d68e57af)You can add values for your local dev environment, staging and prod. in this case we will add the `DATABASE_URL` for the production environment.![Environment variables\
page](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/environment-variables-panel.jpg?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=ed23a501677d11631bb832eb6f95ceae)

5

[](https://trigger.dev/docs/guides/frameworks/drizzle#)

Running your task

To test this task, go to the ‘test’ page in the Trigger.dev dashboard and run the task with the following payload:

    {
      "name": "<a-name>", // e.g. "John Doe"
      "age": "<an-age>", // e.g. 25
      "email": "<an-email>" // e.g. "john@doe.test"
    }
    

Congratulations! You should now see a new completed run, and a new user with the credentials you provided should be added to your database.

[​](https://trigger.dev/docs/guides/frameworks/drizzle#useful-next-steps)

Useful next steps
----------------------------------------------------------------------------------------------

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

[Previous](https://trigger.dev/docs/guides/ai-agents/claude-code-trigger)
[Prisma setup guideThis guide will show you how to set up Prisma with Trigger.dev\
\
Next](https://trigger.dev/docs/guides/frameworks/prisma)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
