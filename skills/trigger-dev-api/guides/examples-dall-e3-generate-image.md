# Generate an image using DALL·E 3

> Source: https://trigger.dev/docs/guides/examples/dall-e3-generate-image

[​](https://trigger.dev/docs/guides/examples/dall-e3-generate-image#overview)

Overview
-----------------------------------------------------------------------------------------

This example demonstrates how to use Trigger.dev to make reliable calls to AI APIs, specifically OpenAI’s GPT-4o and DALL-E 3. It showcases automatic retrying with a maximum of 3 attempts, built-in error handling to avoid timeouts, and the ability to trace and monitor API calls.

[​](https://trigger.dev/docs/guides/examples/dall-e3-generate-image#task-code)

Task code
-------------------------------------------------------------------------------------------

trigger/generateContent.ts

    import { task } from "@trigger.dev/sdk";
    import OpenAI from "openai";
    
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    
    type Payload = {
      theme: string;
      description: string;
    };
    
    export const generateContent = task({
      id: "generate-content",
      retry: {
        maxAttempts: 3, // Retry up to 3 times
      },
      run: async ({ theme, description }: Payload) => {
        // Generate text
        const textResult = await openai.chat.completions.create({
          model: "gpt-4o",
          messages: generateTextPrompt(theme, description),
        });
    
        if (!textResult.choices[0]) {
          throw new Error("No content, retrying…");
        }
    
        // Generate image
        const imageResult = await openai.images.generate({
          model: "dall-e-3",
          prompt: generateImagePrompt(theme, description),
        });
    
        if (!imageResult.data[0]) {
          throw new Error("No image, retrying…");
        }
    
        return {
          text: textResult.choices[0],
          image: imageResult.data[0].url,
        };
      },
    });
    
    function generateTextPrompt(theme: string, description: string): any {
      return `Theme: ${theme}\n\nDescription: ${description}`;
    }
    
    function generateImagePrompt(theme: string, description: string): any {
      return `Theme: ${theme}\n\nDescription: ${description}`;
    }
    

[​](https://trigger.dev/docs/guides/examples/dall-e3-generate-image#testing-your-task)

Testing your task
-----------------------------------------------------------------------------------------------------------

To test this task in the dashboard, you can use the following payload:

    {
      "theme": "A beautiful sunset",
      "description": "A sunset over the ocean with a tiny yacht in the distance."
    }
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/python/python-pdf-form-extractor)
[Deepgram audio transcriptionThis example will show you how to transcribe audio using Deepgram's speech recognition API with Trigger.dev.\
\
Next](https://trigger.dev/docs/guides/examples/deepgram-transcribe-audio)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
