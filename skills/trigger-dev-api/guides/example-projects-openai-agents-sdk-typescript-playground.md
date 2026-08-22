# OpenAI Agents SDK for Typescript + Trigger.dev playground

> Source: https://trigger.dev/docs/guides/example-projects/openai-agents-sdk-typescript-playground

[​](https://trigger.dev/docs/guides/example-projects/openai-agents-sdk-typescript-playground#overview)

Overview
------------------------------------------------------------------------------------------------------------------

7 production-ready patterns built with the OpenAI Agents SDK and Trigger.dev. Clone this repo to experiment with everything from basic calls to workflows with tools, streaming, guardrails, handoffs, and more. By combining the OpenAI Agents SDK with Trigger.dev, you can create durable agents that can be deployed to production and scaled to any size, with retries, queues, and full observability built-in.

[​](https://trigger.dev/docs/guides/example-projects/openai-agents-sdk-typescript-playground#video)

Video
------------------------------------------------------------------------------------------------------------

[​](https://trigger.dev/docs/guides/example-projects/openai-agents-sdk-typescript-playground#tech-stack)

Tech stack
----------------------------------------------------------------------------------------------------------------------

*   [Node.js](https://nodejs.org/)
     runtime environment
*   [OpenAI Agents SDK for Typescript](https://openai.github.io/openai-agents-js/)
     for creating and managing AI agents
*   [Trigger.dev](https://trigger.dev/)
     for task orchestration, batching, scheduling, and workflow management
*   [Zod](https://zod.dev/)
     for payload validation

[​](https://trigger.dev/docs/guides/example-projects/openai-agents-sdk-typescript-playground#github-repo)

GitHub repo
------------------------------------------------------------------------------------------------------------------------

View the OpenAI Agents SDK TypeScript playground repo
-----------------------------------------------------

Click here to view the full code for this project in our examples repository on GitHub. You can fork it and use it as a starting point for your own project.

[​](https://trigger.dev/docs/guides/example-projects/openai-agents-sdk-typescript-playground#agent-tasks)

Agent tasks
------------------------------------------------------------------------------------------------------------------------

*   **Basic Agent Chat**: Personality-based conversations with strategic model selection
*   **Agent with Tools**: A simple agent that can call tools to get weather data
*   **Streaming Agent**: Real-time content generation with progress tracking
*   **Agent Handoffs**: True multi-agent collaboration using the [handoff pattern](https://openai.github.io/openai-agents-js/guides/handoffs/)
     where agents can dynamically transfer control to specialists
*   **Parallel Agents**: Concurrent agent processing for complex analysis tasks
*   **Scheduled Agent**: Time-based agent workflows for continuous monitoring
*   **Agent with Guardrails**: Input guardrails for safe AI interactions

[​](https://trigger.dev/docs/guides/example-projects/openai-agents-sdk-typescript-playground#relevant-code)

Relevant code
----------------------------------------------------------------------------------------------------------------------------

*   **[basicAgentChat.ts](https://github.com/triggerdotdev/examples/blob/main/openai-agents-sdk-with-trigger-playground/src/trigger/basicAgentChat.ts)
    ** - Strategic model selection (GPT-4, o1-preview, o1-mini, gpt-4o-mini) mapped to personality types with Trigger.dev task orchestration
*   **[agentWithTools.ts](https://github.com/triggerdotdev/examples/blob/main/openai-agents-sdk-with-trigger-playground/src/trigger/agentWithTools.ts)
    ** - OpenAI tool calling with Zod validation integrated into Trigger.dev’s retry and error handling mechanisms
*   **[streamingAgent.ts](https://github.com/triggerdotdev/examples/blob/main/openai-agents-sdk-with-trigger-playground/src/trigger/streamingAgent.ts)
    ** - Native OpenAI streaming responses with real-time progress tracking via Trigger.dev metadata
*   **[scheduledAgent.ts](https://github.com/triggerdotdev/examples/blob/main/openai-agents-sdk-with-trigger-playground/src/trigger/scheduledAgent.ts)
    ** - Cron-scheduled OpenAI agents running every 6 hours with automatic trend analysis
*   **[parallelAgents.ts](https://github.com/triggerdotdev/examples/blob/main/openai-agents-sdk-with-trigger-playground/src/trigger/parallelAgents.ts)
    ** - Concurrent OpenAI agent execution using Trigger.dev batch operations (`batch.triggerByTaskAndWait`) for scalable text analysis
*   **[agentWithGuardrails.ts](https://github.com/triggerdotdev/examples/blob/main/openai-agents-sdk-with-trigger-playground/src/trigger/agentWithGuardrails.ts)
    ** - OpenAI classification agents as input guardrails with structured validation and exception handling
*   **[agentHandoff.ts](https://github.com/triggerdotdev/examples/blob/main/openai-agents-sdk-with-trigger-playground/src/trigger/agentHandoff.ts)
    ** - OpenAI Agents SDK handoff pattern with specialist delegation orchestrated through Trigger.dev workflows

[​](https://trigger.dev/docs/guides/example-projects/openai-agents-sdk-typescript-playground#learn-more)

Learn more
----------------------------------------------------------------------------------------------------------------------

*   [OpenAI Agents SDK docs](https://openai.github.io/openai-agents-js/)
     - learn about creating and managing AI agents
*   [OpenAI Agents SDK handoffs](https://openai.github.io/openai-agents-js/guides/handoffs/)
     - learn about agent-to-agent delegation patterns
*   [Batch triggering](https://trigger.dev/docs/triggering#batch-trigger)
     - learn about parallel task execution
*   [Scheduled tasks (cron)](https://trigger.dev/docs/tasks/scheduled#scheduled-tasks-cron)
     - learn about cron-based task scheduling

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/example-projects/meme-generator-human-in-the-loop)
[Product image generatorAI-powered product image generator that transforms basic product photos into professional marketing shots using Replicate's image generation models\
\
Next](https://trigger.dev/docs/guides/example-projects/product-image-generator)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
