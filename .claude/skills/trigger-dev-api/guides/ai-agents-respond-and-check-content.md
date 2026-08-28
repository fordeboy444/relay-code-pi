# Respond to customer inquiry and check for inappropriate content

> Source: https://trigger.dev/docs/guides/ai-agents/respond-and-check-content

[​](https://trigger.dev/docs/guides/ai-agents/respond-and-check-content#overview)

Overview
---------------------------------------------------------------------------------------------

**Parallelization** is a workflow pattern where multiple tasks or processes run simultaneously instead of sequentially, allowing for more efficient use of resources and faster overall execution. It’s particularly valuable when different parts of a task can be handled independently, such as running content analysis and response generation at the same time. ![Parallelization](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/guides/ai-agents/parallelization.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=7d50bd85587ffbe8a020ad63b797e414)

[​](https://trigger.dev/docs/guides/ai-agents/respond-and-check-content#example-task)

Example task
-----------------------------------------------------------------------------------------------------

In this example, we’ll create a workflow that simultaneously checks content for issues while responding to customer inquiries. This approach is particularly effective when tasks require multiple perspectives or parallel processing streams, with the orchestrator synthesizing the results into a cohesive output. **This task:**

*   Uses `generateText` from [Vercel’s AI SDK](https://sdk.vercel.ai/docs/introduction)
     to interact with OpenAI models
*   Uses `experimental_telemetry` to provide LLM logs
*   Uses [`batch.triggerByTaskAndWait`](https://trigger.dev/docs/triggering#batch-triggerbytaskandwait)
     to run customer response and content moderation tasks in parallel
*   Generates customer service responses using an AI model
*   Simultaneously checks for inappropriate content while generating responses

    import { openai } from "@ai-sdk/openai";
    import { batch, task } from "@trigger.dev/sdk";
    import { generateText } from "ai";
    
    // Task to generate customer response
    export const generateCustomerResponse = task({
      id: "generate-customer-response",
      run: async (payload: { question: string }) => {
        const response = await generateText({
          model: openai("o1-mini"),
          messages: [\
            {\
              role: "system",\
              content: "You are a helpful customer service representative.",\
            },\
            { role: "user", content: payload.question },\
          ],
          experimental_telemetry: {
            isEnabled: true,
            functionId: "generate-customer-response",
          },
        });
    
        return response.text;
      },
    });
    
    // Task to check for inappropriate content
    export const checkInappropriateContent = task({
      id: "check-inappropriate-content",
      run: async (payload: { text: string }) => {
        const response = await generateText({
          model: openai("o1-mini"),
          messages: [\
            {\
              role: "system",\
              content:\
                "You are a content moderator. Respond with 'true' if the content is inappropriate or contains harmful, threatening, offensive, or explicit content, 'false' otherwise.",\
            },\
            { role: "user", content: payload.text },\
          ],
          experimental_telemetry: {
            isEnabled: true,
            functionId: "check-inappropriate-content",
          },
        });
    
        return response.text.toLowerCase().includes("true");
      },
    });
    
    // Main task that coordinates the parallel execution
    export const handleCustomerQuestion = task({
      id: "handle-customer-question",
      run: async (payload: { question: string }) => {
        const {
          runs: [responseRun, moderationRun],
        } = await batch.triggerByTaskAndWait([\
          {\
            task: generateCustomerResponse,\
            payload: { question: payload.question },\
          },\
          {\
            task: checkInappropriateContent,\
            payload: { text: payload.question },\
          },\
        ]);
    
        // Check moderation result first
        if (moderationRun.ok && moderationRun.output === true) {
          return {
            response:
              "I apologize, but I cannot process this request as it contains inappropriate content.",
            wasInappropriate: true,
          };
        }
    
        // Return the generated response if everything is ok
        if (responseRun.ok) {
          return {
            response: responseRun.output,
            wasInappropriate: false,
          };
        }
    
        // Handle any errors
        throw new Error("Failed to process customer question");
      },
    });
    

[​](https://trigger.dev/docs/guides/ai-agents/respond-and-check-content#run-a-test)

Run a test
-------------------------------------------------------------------------------------------------

On the Test page in the dashboard, select the `handle-customer-question` task and include a payload like the following:

    {
      "question": "Can you explain 2FA?"
    }
    

When triggered with a question, the task simultaneously generates a response while checking for inappropriate content using two parallel LLM calls. The main task waits for both operations to complete before delivering the final response.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/ai-agents/route-question)
[Translate and refineThis guide will show you how to create a task that translates text and refines it based on feedback.\
\
Next](https://trigger.dev/docs/guides/ai-agents/translate-and-refine)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
