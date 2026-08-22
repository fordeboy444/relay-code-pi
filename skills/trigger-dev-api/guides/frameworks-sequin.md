# Sequin database triggers

> Source: https://trigger.dev/docs/guides/frameworks/sequin

[Sequin](https://sequinstream.com/)
 allows you to trigger tasks from database changes. Sequin captures every insert, update, and delete on a table and then ensures a task is triggered for each change. Often, task runs coincide with database changes. For instance, you might want to use a Trigger.dev task to generate an embedding for each post in your database: ![Sequin and Trigger.dev Overview](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/sequin-intro.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=e533eec55e2c3ae56d5a99bcb6bbd7db) In this guide, you’ll learn how to use Sequin to trigger Trigger.dev tasks from database changes.

[​](https://trigger.dev/docs/guides/frameworks/sequin#prerequisites)

Prerequisites
-------------------------------------------------------------------------------------

You are about to create a [regular Trigger.dev task](https://trigger.dev/docs/tasks-regular)
 that you will execute when ever a post is inserted or updated in your database. Sequin will detect all the changes on the `posts` table and then send the payload of the post to an API endpoint that will call `tasks.trigger()` to create the embedding and update the database. As long as you create an HTTP endpoint that Sequin can deliver webhooks to, you can use any web framework or edge function (e.g. Supabase Edge Functions, Vercel Functions, Cloudflare Workers, etc.) to invoke your Trigger.dev task. In this guide, we’ll show you how to setup Trigger.dev tasks using Next.js API Routes. You’ll need the following to follow this guide:

*   A Next.js project with [Trigger.dev](https://trigger.dev/)
     installed
    
    If you don’t have one already, follow [Trigger.dev’s Next.js setup guide](https://trigger.dev/docs/guides/frameworks/nextjs)
     to setup your project. You can return to this guide when you’re ready to write your first Trigger.dev task.
    
*   A [Sequin](https://console.sequinstream.com/register)
     account
*   A Postgres database (Sequin works with any Postgres database version 12 and up) with a `posts` table.

[​](https://trigger.dev/docs/guides/frameworks/sequin#create-a-trigger-dev-task)

Create a Trigger.dev task
-------------------------------------------------------------------------------------------------------------

Start by creating a new Trigger.dev task that takes in a Sequin change event as a payload, creates an embedding, and then inserts the embedding into the database:

1

[](https://trigger.dev/docs/guides/frameworks/sequin#)

### Create a \`create-embedding-for-post\` task

In your `src/trigger/tasks` directory, create a new file called `create-embedding-for-post.ts` and add the following code:

trigger/create-embedding-for-post.ts

utils.ts

    import { task } from "@trigger.dev/sdk";
    import { OpenAI } from "openai";
    import { upsertEmbedding } from "../util";
    
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    
    export const createEmbeddingForPost = task({
      id: "create-embedding-for-post",
      run: async (payload: {
        record: {
          id: number;
          title: string;
          body: string;
          author: string;
          createdAt: string;
          embedding: string | null;
        },
        metadata: {
          table_schema: string,
          table_name: string,
          consumer: {
            id: string;
            name: string;
          };
        };
      }) => {
        // Create an embedding using the title and body of payload.record
        const content = `${payload.record.title}\n\n${payload.record.body}`;
        const embedding = (await openai.embeddings.create({
          model: "text-embedding-ada-002",
          input: content,
        })).data[0].embedding;
    
        // Upsert the embedding in the database. See utils.ts for the implementation -> ->
        await upsertEmbedding(embedding, payload.record.id);
    
        // Return the updated record
        return {
          ...payload.record,
          embedding: JSON.stringify(embedding),
        };
      }
    });
    

This task takes in a Sequin record event, creates an embedding, and then upserts the embedding into a `post_embeddings` table.

2

[](https://trigger.dev/docs/guides/frameworks/sequin#)

### Add the task to your Trigger.dev project

Register the `create-embedding-for-post` task to your Trigger.dev cloud project by running the following command:

    npx trigger.dev@latest dev
    

In the Trigger.dev dashboard, you should now see the `create-embedding-for-post` task:

![Task added](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/sequin-register-task.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=2c3fd7773430f2d99da46e8de7a94dd1)

You’ve successfully created a Trigger.dev task that will create an embedding for each post in your database. In the next step, you’ll create an API endpoint that Sequin can deliver records to.

[​](https://trigger.dev/docs/guides/frameworks/sequin#setup-api-route)

Setup API route
-----------------------------------------------------------------------------------------

You’ll now create an API endpoint that will receive posts from Sequin and then trigger the `create-embedding-for-post` task.

This guide covers how to setup an API endpoint using the Next.js App Router. You can find examples for Next.js Server Actions and Pages Router in the [Trigger.dev documentation](https://trigger.dev/docs/guides/frameworks/nextjs)
.

1

[](https://trigger.dev/docs/guides/frameworks/sequin#)

### Create a route handler

Add a route handler by creating a new `route.ts` file in a `/app/api/create-embedding-for-post` directory:

app/api/create-embedding-for-post/route.ts

    import type { createEmbeddingForPost } from "@/trigger/create-embedding-for-post";
    import { tasks } from "@trigger.dev/sdk";
    import { NextResponse } from "next/server";
    
    export async function POST(req: Request) {
      const authHeader = req.headers.get("authorization");
      if (!authHeader || authHeader !== `Bearer ${process.env.SEQUIN_WEBHOOK_SECRET}`) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      const payload = await req.json();
      const handle = await tasks.trigger<typeof createEmbeddingForPost>(
        "create-embedding-for-post",
        payload
      );
    
      return NextResponse.json(handle);
    }
    

This route handler will receive records from Sequin, parse them, and then trigger the `create-embedding-for-post` task.

2

[](https://trigger.dev/docs/guides/frameworks/sequin#)

### Set secret keys

You’ll need to set four secret keys in a `.env.local` file:

    SEQUIN_WEBHOOK_SECRET=your-secret-key
    TRIGGER_SECRET_KEY=secret-from-trigger-dev
    OPENAI_API_KEY=sk-proj-asdfasdfasdf
    DATABASE_URL=postgresql://
    

The `SEQUIN_WEBHOOK_SECRET` ensures that only Sequin can access your API endpoint.The `TRIGGER_SECRET_KEY` is used to authenticate requests to Trigger.dev and can be found in the **API keys** tab of the Trigger.dev dashboard.The `OPENAI_API_KEY` and `DATABASE_URL` are used to create an embedding using OpenAI and connect to your database. Be sure to add these as [environment variables](https://trigger.dev/docs/deploy-environment-variables)
 in Trigger.dev as well.

You’ve successfully created an API endpoint that can receive record payloads from Sequin and trigger a Trigger.dev task. In the next step, you’ll setup Sequin to trigger the endpoint.

[​](https://trigger.dev/docs/guides/frameworks/sequin#create-sequin-consumer)

Create Sequin consumer
-------------------------------------------------------------------------------------------------------

You’ll now configure Sequin to send every row in your `posts` table to your Trigger.dev task.

1

[](https://trigger.dev/docs/guides/frameworks/sequin#)

### Connect Sequin to your database

1.  Login to your Sequin account and click the **Add New Database** button.
2.  Enter the connection details for your Postgres database.

If you need to connect to a local dev database, flip the **use localhost** switch and follow the instructions to create a tunnel using the [Sequin CLI](https://sequinstream.com/docs/cli)
.

3.  Follow the instructions to create a publication and a replication slot by running two SQL commands in your database:

    create publication sequin_pub for all tables;
    select pg_create_logical_replication_slot('sequin_slot', 'pgoutput');
    

4.  Name your database and click the **Connect Database** button.

Sequin will connect to your database and ensure that it’s configured properly.

If you need step-by-step connection instructions to connect Sequin to your database, check out our [quickstart guide](https://sequinstream.com/docs/quickstart)
.

2

[](https://trigger.dev/docs/guides/frameworks/sequin#)

### Tunnel to your local endpoint

Now, create a tunnel to your local endpoint so Sequin can deliver change payloads to your local API:

1.  In the Sequin console, open the **HTTP Endpoint** tab and click the **Create HTTP Endpoint** button.
2.  Enter a name for your endpoint (i.e. `local_endpoint`) and flip the **Use localhost** switch. Follow the instructions in the Sequin console to [install the Sequin CLI](https://sequinstream.com/docs/cli)
    , then run:

    sequin tunnel --ports=3001:local_endpoint
    

3.  Now, click **Add encryption header** and set the key to `Authorization` and the value to `Bearer SEQUIN_WEBHOOK_SECRET`.
4.  Click **Create HTTP Endpoint**.

3

[](https://trigger.dev/docs/guides/frameworks/sequin#)

### Create a Push Consumer

Create a push consumer that will capture posts from your database and deliver them to your local endpoint:

1.  Navigate to the **Consumers** tab and click the **Create Consumer** button.
2.  Select your `posts` table (i.e `public.posts`).
3.  You want to ensure that every post receives an embedding - and that embeddings are updated as posts are updated. To do this, select to process **Rows** and click **Continue**.

You can also use **changes** for this particular use case, but **rows** comes with some nice replay and backfill features.

4.  You’ll now set the sort and filter for the consumer. For this guide, we’ll sort by `updated_at` and start at the beginning of the table. We won’t apply any filters:

![Consumer Sort and Filter](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/sequin-sort-and-filter.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=c7b8f9fbc1fdca8bc70dc593c4dad4f4)

5.  On the next screen, select **Push** to have Sequin send the events to your webhook URL. Click **Continue**.
6.  Now, give your consumer a name (i.e. `posts_push_consumer`) and in the **HTTP Endpoint** section select the `local_endpoint` you created above. Add the exact API route you created in the previous step (i.e. `/api/create-embedding-for-post`):

![Consumer Endpoint](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/sequin-consumer-config.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=20ecfe5931f428662687f3e4ab77e202)

7.  Click the **Create Consumer** button.

Your Sequin consumer is now created and ready to send events to your API endpoint.

[​](https://trigger.dev/docs/guides/frameworks/sequin#test-end-to-end)

Test end-to-end
-----------------------------------------------------------------------------------------

1

[](https://trigger.dev/docs/guides/frameworks/sequin#)

### Spin up you dev environment

1.  The Next.js app is running: `npm run dev`
2.  The Trigger.dev dev server is running `npx trigger.dev@latest dev`
3.  The Sequin tunnel is running: `sequin tunnel --ports=3001:local_endpoint`

2

[](https://trigger.dev/docs/guides/frameworks/sequin#)

### Create a new post in your database

    insert into
    posts (title, body, author)
    values
      (
        'The Future of AI',
        'An insightful look into how artificial intelligence is shaping the future of technology and society.',
        'Alice H Johnson'
      );
    

3

[](https://trigger.dev/docs/guides/frameworks/sequin#)

### Trace the change in the Sequin dashboard

In the Sequin console, navigate to the [**Trace**](https://console.sequinstream.com/trace)
 tab and confirm that Sequin delivered the event to your local endpoint:

![Trace Event](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/sequin-trace.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=f0460a55146329bd7906a1dff4032482)

4

[](https://trigger.dev/docs/guides/frameworks/sequin#)

### Confirm the event was received by your endpoint

In your local terminal, you should see a `200` response in your Next.js app:

    POST /api/create-embedding-for-post 200 in 262ms
    

5

[](https://trigger.dev/docs/guides/frameworks/sequin#)

### Observe the task run in the Trigger.dev dashboard

Finally, in the [**Trigger.dev dashboard**](https://cloud.trigger.dev/)
, navigate to the Runs page and confirm that the task run completed successfully:

![Task run](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/sequin-final-run.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=a0958fb3d3160984ca3ec726c7d79168)

Every time a post is created or updated, Sequin will deliver the row payload to your API endpoint and Trigger.dev will run the `create-embedding-for-post` task.

[​](https://trigger.dev/docs/guides/frameworks/sequin#next-steps)

Next steps
-------------------------------------------------------------------------------

With Sequin and Trigger.dev, every post in your database will now have an embedding. This is a simple example of how you can trigger long-running tasks on database changes. From here, add error handling and deploy to production:

*   Add [retries](https://trigger.dev/docs/errors-retrying)
     to your Trigger.dev task to ensure that any errors are captured and logged.
*   Deploy to [production](https://trigger.dev/docs/guides/frameworks/nextjs#deploying-your-task-to-trigger-dev)
     and update your Sequin consumer to point to your production database and endpoint.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/frameworks/nango)
[OverviewGuides and examples for using Supabase with Trigger.dev.\
\
Next](https://trigger.dev/docs/guides/frameworks/supabase-guides-overview)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
