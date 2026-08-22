# Generate an image from a prompt using Fal.ai and Trigger.dev Realtime

> Source: https://trigger.dev/docs/guides/examples/fal-ai-realtime

[​](https://trigger.dev/docs/guides/examples/fal-ai-realtime#github-repo)

GitHub repo
----------------------------------------------------------------------------------------

View the project on GitHub
--------------------------

Click here to view the full code for this project in our examples repository on GitHub. You can fork it and use it as a starting point for your own project.

[​](https://trigger.dev/docs/guides/examples/fal-ai-realtime#walkthrough)

Walkthrough
----------------------------------------------------------------------------------------

This video walks through the process of creating this task in a Next.js project.

[​](https://trigger.dev/docs/guides/examples/fal-ai-realtime#prerequisites)

Prerequisites
--------------------------------------------------------------------------------------------

*   An existing project
*   A [Trigger.dev account](https://cloud.trigger.dev/)
     with Trigger.dev [initialized in your project](https://trigger.dev/docs/quick-start)
    
*   A [Fal.ai](https://fal.ai/)
     account

[​](https://trigger.dev/docs/guides/examples/fal-ai-realtime#task-code)

Task code
------------------------------------------------------------------------------------

This task generates an image from a prompt using Fal.ai.

trigger/fal-ai-image-from-prompt-realtime.ts

    import * as fal from "@fal-ai/serverless-client";
    import { logger, schemaTask } from "@trigger.dev/sdk";
    import { z } from "zod";
    
    export const FalResult = z.object({
      images: z.tuple([z.object({ url: z.string() })]),
    });
    
    export const payloadSchema = z.object({
      imageUrl: z.string().url(),
      prompt: z.string(),
    });
    
    export const realtimeImageGeneration = schemaTask({
      id: "realtime-image-generation",
      schema: payloadSchema,
      run: async (payload) => {
        const result = await fal.subscribe("fal-ai/flux/dev/image-to-image", {
          input: {
            image_url: payload.imageUrl,
            prompt: payload.prompt,
          },
          onQueueUpdate: (update) => {
            logger.info("Fal.ai processing update", { update });
          },
        });
    
        const $result = FalResult.parse(result);
        const [{ url: cartoonUrl }] = $result.images;
    
        return {
          imageUrl: cartoonUrl,
        };
      },
    });
    

### 

[​](https://trigger.dev/docs/guides/examples/fal-ai-realtime#testing-your-task)

Testing your task

You can test your task by triggering it from the Trigger.dev dashboard. Here’s an example payload:

    {
      "imageUrl": "https://static.vecteezy.com/system/resources/previews/005/857/332/non_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg",
      "prompt": "Dress this dog for Christmas"
    }
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/examples/fal-ai-image-to-cartoon)
[FFmpeg video processingThese examples show you how to process videos in various ways using FFmpeg with Trigger.dev.\
\
Next](https://trigger.dev/docs/guides/examples/ffmpeg-video-processing)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
