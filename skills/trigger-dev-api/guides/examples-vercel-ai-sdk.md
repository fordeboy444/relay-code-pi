# Using the Vercel AI SDK

> Source: https://trigger.dev/docs/guides/examples/vercel-ai-sdk

[​](https://trigger.dev/docs/guides/examples/vercel-ai-sdk#overview)

Overview
--------------------------------------------------------------------------------

The [Vercel AI SDK](https://www.npmjs.com/package/ai)
 is a simple way to use AI models from many different providers, including OpenAI, Microsoft Azure, Google Generative AI, Anthropic, Amazon Bedrock, Groq, Perplexity and [more](https://sdk.vercel.ai/providers/ai-sdk-providers)
. It provides a consistent interface to interact with the different AI models, so you can easily switch between them without needing to change your code.

[​](https://trigger.dev/docs/guides/examples/vercel-ai-sdk#generate-text-using-openai)

Generate text using OpenAI
--------------------------------------------------------------------------------------------------------------------

This task shows how to use the Vercel AI SDK to generate text from a prompt with OpenAI.

### 

[​](https://trigger.dev/docs/guides/examples/vercel-ai-sdk#task-code)

Task code

trigger/vercel-ai-sdk-openai.ts

    import { logger, task } from "@trigger.dev/sdk";
    import { generateText } from "ai";
    // Install the package of the AI model you want to use, in this case OpenAI
    import { openai } from "@ai-sdk/openai"; // Ensure OPENAI_API_KEY environment variable is set
    
    export const openaiTask = task({
      id: "openai-text-generate",
    
      run: async (payload: { prompt: string }) => {
        const chatCompletion = await generateText({
          model: openai("gpt-4-turbo"),
          // Add a system message which will be included with the prompt
          system: "You are a friendly assistant!",
          // The prompt passed in from the payload
          prompt: payload.prompt,
        });
    
        // Log the generated text
        logger.log("chatCompletion text:" + chatCompletion.text);
    
        return chatCompletion;
      },
    });
    

[​](https://trigger.dev/docs/guides/examples/vercel-ai-sdk#testing-your-task)

Testing your task
--------------------------------------------------------------------------------------------------

To test this task in the dashboard, you can use the following payload:

    {
      "prompt": "What is the meaning of life?"
    }
    

[​](https://trigger.dev/docs/guides/examples/vercel-ai-sdk#learn-more-about-next-js-and-trigger-dev)

Learn more about Next.js and Trigger.dev
------------------------------------------------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/guides/examples/vercel-ai-sdk#walk-through-guides-from-development-to-deployment)

Walk-through guides from development to deployment

Next.js - setup guide
---------------------

Learn how to setup Trigger.dev with Next.js, using either the pages or app router.

Next.js - triggering tasks using webhooks
-----------------------------------------

Learn how to create a webhook handler for incoming webhooks in a Next.js app, and trigger a task from it.

### 

[​](https://trigger.dev/docs/guides/examples/vercel-ai-sdk#task-examples)

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

[Previous](https://trigger.dev/docs/guides/examples/supabase-storage-upload)
[Vercel sync env varsThis example demonstrates how to sync environment variables from your Vercel project to Trigger.dev.\
\
Next](https://trigger.dev/docs/guides/examples/vercel-sync-env-vars)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
