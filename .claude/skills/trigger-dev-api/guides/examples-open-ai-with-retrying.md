# Call OpenAI with retrying

> Source: https://trigger.dev/docs/guides/examples/open-ai-with-retrying

[​](https://trigger.dev/docs/guides/examples/open-ai-with-retrying#overview)

Overview
----------------------------------------------------------------------------------------

Sometimes OpenAI calls can take a long time to complete, or they can fail. This task will retry if the API call fails completely or if the response is empty.

[​](https://trigger.dev/docs/guides/examples/open-ai-with-retrying#task-code)

Task code
------------------------------------------------------------------------------------------

trigger/openai.ts

    import { task } from "@trigger.dev/sdk";
    import OpenAI from "openai";
    
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    
    export const openaiTask = task({
      id: "openai-task",
      //specifying retry options overrides the defaults defined in your trigger.config file
      retry: {
        maxAttempts: 10,
        factor: 1.8,
        minTimeoutInMs: 500,
        maxTimeoutInMs: 30_000,
        randomize: false,
      },
      run: async (payload: { prompt: string }) => {
        //if this fails, it will throw an error and retry
        const chatCompletion = await openai.chat.completions.create({
          messages: [{ role: "user", content: payload.prompt }],
          model: "gpt-3.5-turbo",
        });
    
        if (chatCompletion.choices[0]?.message.content === undefined) {
          //sometimes OpenAI returns an empty response, let's retry by throwing an error
          throw new Error("OpenAI call failed");
        }
    
        return chatCompletion.choices[0].message.content;
      },
    });
    

[​](https://trigger.dev/docs/guides/examples/open-ai-with-retrying#testing-your-task)

Testing your task
----------------------------------------------------------------------------------------------------------

To test this task in the dashboard, you can use the following payload:

    {
      "prompt": "What is the meaning of life?"
    }
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/examples/libreoffice-pdf-conversion)
[PDF to imageThis example will show you how to turn a PDF into an image using MuPDF and Trigger.dev.\
\
Next](https://trigger.dev/docs/guides/examples/pdf-to-image)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
