# Claude 3.7 thinking chatbot

> Source: https://trigger.dev/docs/guides/example-projects/claude-thinking-chatbot

[​](https://trigger.dev/docs/guides/example-projects/claude-thinking-chatbot#overview)

Overview
--------------------------------------------------------------------------------------------------

This demo is a full stack example that uses the following:

*   A [Next.js](https://nextjs.org/)
     app for the chat interface
*   [Trigger.dev Realtime](https://trigger.dev/docs/realtime/overview)
     to stream AI responses and thinking/reasoning process to the frontend
*   [Claude 3.7 Sonnet](https://www.anthropic.com/claude)
     for generating AI responses
*   [AI SDK](https://sdk.vercel.ai/docs/introduction)
     for working with the Claude model

[​](https://trigger.dev/docs/guides/example-projects/claude-thinking-chatbot#github-repo)

GitHub repo
--------------------------------------------------------------------------------------------------------

View the Claude thinking chatbot repo
-------------------------------------

Click here to view the full code for this project in our examples repository on GitHub. You can fork it and use it as a starting point for your own project.

[​](https://trigger.dev/docs/guides/example-projects/claude-thinking-chatbot#video)

Video
--------------------------------------------------------------------------------------------

[​](https://trigger.dev/docs/guides/example-projects/claude-thinking-chatbot#relevant-code)

Relevant code
------------------------------------------------------------------------------------------------------------

*   **Claude Stream Task**: View the Trigger.dev task code in the [src/trigger/claude-stream.ts](https://github.com/triggerdotdev/examples/tree/main/claude-thinking-chatbot/src/trigger/claude-stream.ts)
     file, which sets up the streaming connection with Claude.
*   **Chat Component**: The main chat interface is in [app/components/claude-chat.tsx](https://github.com/triggerdotdev/examples/tree/main/claude-thinking-chatbot/app/components/claude-chat.tsx)
    , which handles:
    *   Message state management
    *   User input handling
    *   Rendering of message bubbles
    *   Integration with Trigger.dev for streaming
*   **Stream Response**: The `StreamResponse` component within the chat component handles:
    *   Displaying streaming text from Claude
    *   Showing/hiding the thinking process with an animated toggle
    *   Auto-scrolling as new content arrives

[​](https://trigger.dev/docs/guides/example-projects/claude-thinking-chatbot#learn-more-about-trigger-dev-realtime)

Learn more about Trigger.dev Realtime
------------------------------------------------------------------------------------------------------------------------------------------------------------

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

[Previous](https://trigger.dev/docs/guides/example-projects/claude-github-wiki)
[Cursor background agentRun Cursor's headless CLI agent in a Trigger.dev task and stream the live output to the frontend using Trigger.dev Realtime Streams.\
\
Next](https://trigger.dev/docs/guides/example-projects/cursor-background-agent)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
