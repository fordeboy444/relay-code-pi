# Mastra agents with memory sharing + Trigger.dev task orchestration

> Source: https://trigger.dev/docs/guides/example-projects/mastra-agents-with-memory

[​](https://trigger.dev/docs/guides/example-projects/mastra-agents-with-memory#overview)

Overview
----------------------------------------------------------------------------------------------------

Enter a city and an activity, and get a clothing recommendation generated for you based on today’s weather. ![Generated clothing recommendations](https://github.com/user-attachments/assets/edfca304-6b22-4fa8-9362-71ecb3fe4903) By combining Mastra’s persistent memory system and agent orchestration with Trigger.dev’s durable task execution, retries and observability, you get production-ready AI workflows that survive failures, scale automatically, and maintain context across long-running operations.

[​](https://trigger.dev/docs/guides/example-projects/mastra-agents-with-memory#tech-stack)

Tech stack
--------------------------------------------------------------------------------------------------------

*   **[Node.js](https://nodejs.org/)
    ** runtime environment
*   **[Mastra](https://mastra.ai/)
    ** for AI agent orchestration and memory management (Mastra is a Typescript framework for building AI agents, and uses Vercel’s AI Agent SDK under the hood.)
*   **[PostgreSQL](https://postgresql.org/)
    ** for persistent storage and memory sharing
*   **[Trigger.dev](https://trigger.dev/)
    ** for task orchestration, batching, and observability
*   **[OpenAI GPT-4](https://openai.com/)
    ** for natural language processing
*   **[Open-Meteo API](https://open-meteo.com/)
    ** for weather data (no API key required)
*   **[Zod](https://zod.dev/)
    ** for schema validation and type safety

[​](https://trigger.dev/docs/guides/example-projects/mastra-agents-with-memory#github-repo)

GitHub repo
----------------------------------------------------------------------------------------------------------

View the Mastra agents with memory repo
---------------------------------------

Click here to view the full code for this project in our examples repository on GitHub. You can fork it and use it as a starting point for your own project.

[​](https://trigger.dev/docs/guides/example-projects/mastra-agents-with-memory#featured-patterns)

Featured patterns
----------------------------------------------------------------------------------------------------------------------

*   **[Agent Memory Sharing](https://github.com/triggerdotdev/examples/blob/main/mastra-agents/src/trigger/weather-task.ts)
    **: Efficient data sharing between agents using Mastra’s working memory system
*   **[Task Orchestration](https://github.com/triggerdotdev/examples/blob/main/mastra-agents/src/trigger/weather-task.ts)
    **: Multi-step workflows with `triggerAndWait` for sequential agent execution
*   **[Centralized Storage](https://github.com/triggerdotdev/examples/blob/main/mastra-agents/src/mastra/index.ts)
    **: Single PostgreSQL storage instance shared across all agents to prevent connection duplication
*   **[Custom Tools](https://github.com/triggerdotdev/examples/blob/main/mastra-agents/src/mastra/tools/weather-tool.ts)
    **: External API integration with structured output validation
*   **[Agent Specialization](https://github.com/triggerdotdev/examples/blob/main/mastra-agents/src/mastra/agents/)
    **: Purpose-built agents with specific roles and instructions
*   **[Schema Optimization](https://github.com/triggerdotdev/examples/blob/main/mastra-agents/src/mastra/schemas/weather-data.ts)
    **: Lightweight data structures for performance

[​](https://trigger.dev/docs/guides/example-projects/mastra-agents-with-memory#project-structure)

Project Structure
----------------------------------------------------------------------------------------------------------------------

    src/
    ├── mastra/
    │   ├── agents/
    │   │   ├── weather-analyst.ts    # Weather data collection
    │   │   ├── clothing-advisor.ts   # Clothing recommendations
    │   ├── tools/
    │   │   └── weather-tool.ts       # Enhanced weather API tool
    │   ├── schemas/
    │   │   └── weather-data.ts       # Weather schema
    │   └── index.ts                  # Mastra configuration
    ├── trigger/
    │   └── weather-task.ts           # Trigger.dev tasks
    

[​](https://trigger.dev/docs/guides/example-projects/mastra-agents-with-memory#relevant-code)

Relevant code
--------------------------------------------------------------------------------------------------------------

*   **[Multi-step task orchestration](https://github.com/triggerdotdev/examples/blob/main/mastra-agents/src/trigger/weather-task.ts)
    **: Multi-step task orchestration with `triggerAndWait` for sequential agent execution and shared memory context
*   **[Weather analyst agent](https://github.com/triggerdotdev/examples/blob/main/mastra-agents/src/mastra/agents/weather-analyst.ts)
    **: Specialized agent for weather data collection with external API integration and memory storage
*   **[Clothing advisor agent](https://github.com/triggerdotdev/examples/blob/main/mastra-agents/src/mastra/agents/clothing-advisor.ts)
    **: Purpose-built agent that reads from working memory and generates natural language responses
*   **[Weather tool](https://github.com/triggerdotdev/examples/blob/main/mastra-agents/src/mastra/tools/weather-tool.ts)
    **: Custom Mastra tool with Zod validation for external API calls and error handling
*   **[Weather data schema](https://github.com/triggerdotdev/examples/blob/main/mastra-agents/src/mastra/schemas/weather-data.ts)
    **: Optimized Zod schema for efficient memory storage and type safety
*   **[Mastra configuration](https://github.com/triggerdotdev/examples/blob/main/mastra-agents/src/mastra/index.ts)
    **: Mastra configuration with PostgreSQL storage and agent registration

[​](https://trigger.dev/docs/guides/example-projects/mastra-agents-with-memory#storage-architecture)

Storage Architecture
----------------------------------------------------------------------------------------------------------------------------

This project uses a **centralized PostgreSQL storage** approach where a single database connection is shared across all Mastra agents. This prevents duplicate database connections and ensures efficient memory sharing between the weather analyst and clothing advisor agents.

### 

[​](https://trigger.dev/docs/guides/example-projects/mastra-agents-with-memory#storage-configuration)

Storage Configuration

The storage is configured once in the main Mastra instance (`src/mastra/index.ts`) and automatically inherited by all agent Memory instances. This eliminates the “duplicate database object” warning that can occur with multiple PostgreSQL connections. The PostgreSQL storage works seamlessly in both local development and serverless environments with any PostgreSQL provider, such as:

*   [Local PostgreSQL instance](https://postgresql.org/)
    
*   [Supabase](https://supabase.com/)
     - Serverless PostgreSQL
*   [Neon](https://neon.tech/)
     - Serverless PostgreSQL
*   [Railway](https://railway.app/)
     - Simple PostgreSQL hosting
*   [AWS RDS](https://aws.amazon.com/rds/postgresql/)
     - Managed PostgreSQL

[​](https://trigger.dev/docs/guides/example-projects/mastra-agents-with-memory#learn-more)

Learn More
--------------------------------------------------------------------------------------------------------

To learn more about the technologies used in this project, check out the following resources:

*   [Mastra docs](https://mastra.ai/en/docs)
     - learn about AI agent orchestration and memory management
*   [Mastra working memory](https://mastra.ai/en/docs/memory/overview)
     - learn about efficient data sharing between agents

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/example-projects/human-in-the-loop-workflow)
[AI meme generatorThis example project creates memes using OpenAI's DALL-E 3 with a human-in-the-loop approval workflow built using Trigger.dev waitpoint tokens.\
\
Next](https://trigger.dev/docs/guides/example-projects/meme-generator-human-in-the-loop)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
