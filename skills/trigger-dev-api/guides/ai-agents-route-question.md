# Route a question to a different AI model

> Source: https://trigger.dev/docs/guides/ai-agents/route-question

[​](https://trigger.dev/docs/guides/ai-agents/route-question#overview)

Overview
----------------------------------------------------------------------------------

**Routing** is a workflow pattern that classifies an input and directs it to a specialized followup task. This pattern allows for separation of concerns and building more specialized prompts, which is particularly effective when there are distinct categories that are better handled separately. Without routing, optimizing for one kind of input can hurt performance on other inputs. ![Routing](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/guides/ai-agents/routing.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=371e95357260a464adb4fe5408fe6a30)

[​](https://trigger.dev/docs/guides/ai-agents/route-question#example-task)

Example task
------------------------------------------------------------------------------------------

In this example, we’ll create a workflow that routes a question to a different AI model depending on its complexity. This approach is particularly effective when tasks require different models or approaches for different inputs. **This task:**

*   Uses `generateText` from [Vercel’s AI SDK](https://sdk.vercel.ai/docs/introduction)
     to interact with OpenAI models
*   Uses `experimental_telemetry` in the source verification and historical analysis tasks to provide LLM logs
*   Routes questions using a lightweight model (`o1-mini`) to classify complexity
*   Directs simple questions to `gpt-4o` and complex ones to `gpt-o3-mini`
*   Returns both the answer and metadata about the routing decision

    import { openai } from "@ai-sdk/openai";
    import { task } from "@trigger.dev/sdk";
    import { generateText } from "ai";
    import { z } from "zod";
    
    // Schema for router response
    const routingSchema = z.object({
      model: z.enum(["gpt-4o", "gpt-o3-mini"]),
      reason: z.string(),
    });
    
    // Router prompt template
    const ROUTER_PROMPT = `You are a routing assistant that determines the complexity of questions.
    Analyze the following question and route it to the appropriate model:
    
    - Use "gpt-4o" for simple, common, or straightforward questions
    - Use "gpt-o3-mini" for complex, unusual, or questions requiring deep reasoning
    
    Respond with a JSON object in this exact format:
    {"model": "gpt-4o" or "gpt-o3-mini", "reason": "your reasoning here"}
    
    Question: `;
    
    export const routeAndAnswerQuestion = task({
      id: "route-and-answer-question",
      run: async (payload: { question: string }) => {
        // Step 1: Route the question
        const routingResponse = await generateText({
          model: openai("o1-mini"),
          messages: [\
            {\
              role: "system",\
              content:\
                "You must respond with a valid JSON object containing only 'model' and 'reason' fields. No markdown, no backticks, no explanation.",\
            },\
            {\
              role: "user",\
              content: ROUTER_PROMPT + payload.question,\
            },\
          ],
          temperature: 0.1,
          experimental_telemetry: {
            isEnabled: true,
            functionId: "route-and-answer-question",
          },
        });
    
        // Add error handling and cleanup
        let jsonText = routingResponse.text.trim();
        if (jsonText.startsWith("```")) {
          jsonText = jsonText.replace(/```json\n|\n```/g, "");
        }
    
        const routingResult = routingSchema.parse(JSON.parse(jsonText));
    
        // Step 2: Get the answer using the selected model
        const answerResult = await generateText({
          model: openai(routingResult.model),
          messages: [{ role: "user", content: payload.question }],
        });
    
        return {
          answer: answerResult.text,
          selectedModel: routingResult.model,
          routingReason: routingResult.reason,
        };
      },
    });
    

[​](https://trigger.dev/docs/guides/ai-agents/route-question#run-a-test)

Run a test
--------------------------------------------------------------------------------------

Triggering our task with a simple question shows it routing to the gpt-4o model and returning the answer with reasoning:

    {
      "question": "How many planets are there in the solar system?"
    }
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/ai-agents/generate-translate-copy)
[Respond & check contentCreate an AI agent workflow that responds to customer inquiries while checking if their text is inappropriate\
\
Next](https://trigger.dev/docs/guides/ai-agents/respond-and-check-content)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
