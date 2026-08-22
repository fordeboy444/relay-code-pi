# Triggering tasks with webhooks in Next.js

> Source: https://trigger.dev/docs/guides/frameworks/nextjs-webhooks

[​](https://trigger.dev/docs/guides/frameworks/nextjs-webhooks#prerequisites)

Prerequisites
----------------------------------------------------------------------------------------------

*   [A Next.js project, set up with Trigger.dev](https://trigger.dev/docs/guides/frameworks/nextjs)
    
*   [cURL](https://curl.se/)
     installed on your local machine. This will be used to send a POST request to your webhook handler.

[​](https://trigger.dev/docs/guides/frameworks/nextjs-webhooks#github-repo)

GitHub repo
------------------------------------------------------------------------------------------

View the project on GitHub
--------------------------

Click here to view the full code for this project in our examples repository on GitHub. You can fork it and use it as a starting point for your own project.

[​](https://trigger.dev/docs/guides/frameworks/nextjs-webhooks#adding-the-webhook-handler)

Adding the webhook handler
------------------------------------------------------------------------------------------------------------------------

The webhook handler in this guide will be an API route. This will be different depending on whether you are using the Next.js pages router or the app router.

### 

[​](https://trigger.dev/docs/guides/frameworks/nextjs-webhooks#pages-router-creating-the-webhook-handler)

Pages router: creating the webhook handler

Create a new file `pages/api/webhook-handler.ts` or `pages/api/webhook-hander.js`. In your new file, add the following code:

/pages/api/webhook-handler.ts

    import { helloWorldTask } from "@/trigger/example";
    import { tasks } from "@trigger.dev/sdk";
    import type { NextApiRequest, NextApiResponse } from "next";
    
    export default async function handler(req: NextApiRequest, res: NextApiResponse) {
      // Parse the webhook payload
      const payload = req.body;
    
      // Trigger the helloWorldTask with the webhook data as the payload
      await tasks.trigger<typeof helloWorldTask>("hello-world", payload);
    
      res.status(200).json({ message: "OK" });
    }
    

This code will handle the webhook payload and trigger the ‘Hello World’ task.

### 

[​](https://trigger.dev/docs/guides/frameworks/nextjs-webhooks#app-router-creating-the-webhook-handler)

App router: creating the webhook handler

Create a new file in the `app/api/webhook-handler/route.ts` or `app/api/webhook-handler/route.js`. In your new file, add the following code:

/app/api/webhook-handler/route.ts

    import type { helloWorldTask } from "@/trigger/example";
    import { tasks } from "@trigger.dev/sdk";
    import { NextResponse } from "next/server";
    
    export async function POST(req: Request) {
      // Parse the webhook payload
      const payload = await req.json();
    
      // Trigger the helloWorldTask with the webhook data as the payload
      await tasks.trigger<typeof helloWorldTask>("hello-world", payload);
    
      return NextResponse.json("OK", { status: 200 });
    }
    

This code will handle the webhook payload and trigger the ‘Hello World’ task.

[​](https://trigger.dev/docs/guides/frameworks/nextjs-webhooks#triggering-the-task-locally)

Triggering the task locally
--------------------------------------------------------------------------------------------------------------------------

Now that you have your webhook handler set up, you can trigger the ‘Hello World’ task from it. We will do this locally using cURL.

1

[](https://trigger.dev/docs/guides/frameworks/nextjs-webhooks#)

Run your Next.js app and the Trigger.dev dev server

First, run your Next.js app.

npm

pnpm

yarn

    npm run dev
    

Then, open up a second terminal window and start the Trigger.dev dev server:

npm

pnpm

yarn

    npx trigger.dev@latest dev
    

2

[](https://trigger.dev/docs/guides/frameworks/nextjs-webhooks#)

Trigger the webhook with some dummy data

To send a POST request to your webhook handler, open up a terminal window on your local machine and run the following command:

If `http://localhost:3000` isn’t the URL of your locally running Next.js app, replace the URL in the below command with that URL instead.

    curl -X POST -H "Content-Type: application/json" -d '{"Name": "John Doe", "Age": "87"}' http://localhost:3000/api/webhook-handler
    

This will send a POST request to your webhook handler, with a JSON payload.

3

[](https://trigger.dev/docs/guides/frameworks/nextjs-webhooks#)

Check the task ran successfully

After running the command, you should see a successful dev run and a 200 response in your terminals.If you now go to your [Trigger.dev dashboard](https://cloud.trigger.dev/)
, you should also see a successful run for the ‘Hello World’ task, with the payload you sent, in this case; `{"name": "John Doe", "age": "87"}`.

[​](https://trigger.dev/docs/guides/frameworks/nextjs-webhooks#learn-more-about-next-js-and-trigger-dev)

Learn more about Next.js and Trigger.dev
----------------------------------------------------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/guides/frameworks/nextjs-webhooks#walk-through-guides-from-development-to-deployment)

Walk-through guides from development to deployment

Next.js - setup guide
---------------------

Learn how to setup Trigger.dev with Next.js, using either the pages or app router.

Next.js - triggering tasks using webhooks
-----------------------------------------

Learn how to create a webhook handler for incoming webhooks in a Next.js app, and trigger a task from it.

### 

[​](https://trigger.dev/docs/guides/frameworks/nextjs-webhooks#task-examples)

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

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/frameworks/webhooks-guides-overview)
[Remix webhooksLearn how to trigger a task from a webhook in a Remix app.\
\
Next](https://trigger.dev/docs/guides/frameworks/remix-webhooks)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
