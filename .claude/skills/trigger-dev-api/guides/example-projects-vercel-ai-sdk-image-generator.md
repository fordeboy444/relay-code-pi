# Vercel AI SDK image generator

> Source: https://trigger.dev/docs/guides/example-projects/vercel-ai-sdk-image-generator

[​](https://trigger.dev/docs/guides/example-projects/vercel-ai-sdk-image-generator#overview)

Overview
--------------------------------------------------------------------------------------------------------

This demo is a full stack example that uses the following:

*   A [Next.js](https://nextjs.org/)
     app using [shadcn](https://ui.shadcn.com/)
     for the UI
*   Our ‘useRealtimeRun’ [React hook](https://trigger.dev/docs/realtime/react-hooks/subscribe#userealtimerun)
     to subscribe to the run and show updates on the frontend
*   The [Vercel AI SDK](https://sdk.vercel.ai/docs/introduction)
     to [generate images](https://sdk.vercel.ai/docs/ai-sdk-core/image-generation)
     using OpenAI’s DALL-E models

[​](https://trigger.dev/docs/guides/example-projects/vercel-ai-sdk-image-generator#github-repo)

GitHub repo
--------------------------------------------------------------------------------------------------------------

View the Vercel AI SDK image generator repo
-------------------------------------------

Click here to view the full code for this project in our examples repository on GitHub. You can fork it and use it as a starting point for your own project.

[​](https://trigger.dev/docs/guides/example-projects/vercel-ai-sdk-image-generator#video)

Video
--------------------------------------------------------------------------------------------------

[​](https://trigger.dev/docs/guides/example-projects/vercel-ai-sdk-image-generator#relevant-code)

Relevant code
------------------------------------------------------------------------------------------------------------------

*   View the Trigger.dev task code which generates the image using the Vercel AI SDK in [src/trigger/realtime-generate-image.ts](https://github.com/triggerdotdev/examples/tree/main/vercel-ai-sdk-image-generator/src/trigger/realtime-generate-image.ts)
    .
*   We use a [useRealtimeRun](https://trigger.dev/docs/realtime/react-hooks/subscribe#userealtimerun)
     hook to subscribe to the run in [src/app/processing/\[id\]/ProcessingContent.tsx](https://github.com/triggerdotdev/examples/tree/main/vercel-ai-sdk-image-generator/src/app/processing/%5Bid%5D/ProcessingContent.tsx)
    .

[​](https://trigger.dev/docs/guides/example-projects/vercel-ai-sdk-image-generator#learn-more-about-trigger-dev-realtime)

Learn more about Trigger.dev Realtime
------------------------------------------------------------------------------------------------------------------------------------------------------------------

To learn more, take a look at the following resources:

*   [Trigger.dev Realtime](https://trigger.dev/docs/realtime)
     - learn more about how to subscribe to runs and get real-time updates
*   [Realtime streaming](https://trigger.dev/docs/realtime/react-hooks/streams)
     - learn more about streaming data from your tasks
*   [Batch Triggering](https://trigger.dev/docs/triggering#tasks-batchtrigger)
     - learn more about how to trigger tasks in batches
*   [React hooks](https://trigger.dev/docs/realtime/react-hooks)
     - learn more about using React hooks to interact with the Trigger.dev API

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/example-projects/vercel-ai-sdk-deep-research)
[OpenAI Agents SDK for Python guardrailsThis example project demonstrates how to implement different types of guardrails using the OpenAI Agent SDK for Python with Trigger.dev.\
\
Next](https://trigger.dev/docs/guides/example-projects/openai-agent-sdk-guardrails)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
