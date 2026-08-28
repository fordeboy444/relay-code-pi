# Deep research agent using Vercel's AI SDK

> Source: https://trigger.dev/docs/guides/example-projects/vercel-ai-sdk-deep-research

Acknowledgements: This example project is derived from the brilliant [deep research guide](https://aie-feb-25.vercel.app/docs/deep-research)
 by [Nico Albanese](https://x.com/nicoalbanese10)
.

[​](https://trigger.dev/docs/guides/example-projects/vercel-ai-sdk-deep-research#overview)

Overview
------------------------------------------------------------------------------------------------------

This full-stack project is an intelligent deep research agent that autonomously conducts multi-layered web research, generating comprehensive reports which are then converted to PDF and uploaded to storage. **Tech stack:**

*   **[Next.js](https://nextjs.org/)
    ** for the web app
*   **[Vercel’s AI SDK](https://sdk.vercel.ai/)
    ** for AI model integration and structured generation
*   **[Trigger.dev](https://trigger.dev/)
    ** for task orchestration, execution and real-time progress updates
*   **[OpenAI’s GPT-4o model](https://openai.com/gpt-4)
    ** for intelligent query generation, content analysis, and report creation
*   **[Exa API](https://exa.ai/)
    ** for semantic web search with live crawling
*   **[LibreOffice](https://www.libreoffice.org/)
    ** for PDF generation
*   **[Cloudflare R2](https://developers.cloudflare.com/r2/)
    ** to store the generated reports

**Features:**

*   **Recursive research**: AI generates search queries, evaluates their relevance, asks follow-up questions and searches deeper based on initial findings.
*   **Real-time progress**: Live updates are shown on the frontend using Trigger.dev Realtime as research progresses.
*   **Intelligent source evaluation**: AI evaluates search result relevance before processing.
*   **Research report generation**: The completed research is converted to a structured HTML report using a detailed system prompt.
*   **PDF creation and uploading to Cloud storage**: The completed reports are then converted to PDF using LibreOffice and uploaded to Cloudflare R2.

[​](https://trigger.dev/docs/guides/example-projects/vercel-ai-sdk-deep-research#github-repo)

GitHub repo
------------------------------------------------------------------------------------------------------------

[View the Vercel AI SDK deep research agent repo\
-----------------------------------------------\
\
Click here to view the full code for this project in our examples repository on GitHub. You can fork it and use it as a starting point for your own project.](https://github.com/triggerdotdev/examples/tree/main/vercel-ai-sdk-deep-research-agent)

[​](https://trigger.dev/docs/guides/example-projects/vercel-ai-sdk-deep-research#how-the-deep-research-agent-works)

How the deep research agent works
--------------------------------------------------------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/guides/example-projects/vercel-ai-sdk-deep-research#trigger-dev-orchestration)

Trigger.dev orchestration

The research process is orchestrated through three connected Trigger.dev tasks:

1.  `deepResearchOrchestrator` - Main task that coordinates the entire research workflow.
2.  `generateReport` - Processes research data into a structured HTML report using OpenAI’s GPT-4o model
3.  `generatePdfAndUpload` - Converts HTML to PDF using LibreOffice and uploads to R2 cloud storage

Each task uses `triggerAndWait()` to create a dependency chain, ensuring proper sequencing while maintaining isolation and error handling.

### 

[​](https://trigger.dev/docs/guides/example-projects/vercel-ai-sdk-deep-research#the-deep-research-recursive-function)

The deep research recursive function

The core research logic uses a recursive depth-first search approach. A query is recursively expanded and the results are collected. **Key parameters:**

*   `depth`: Controls recursion levels (default: 2)
*   `breadth`: Number of queries per level (default: 2, halved each recursion)

    Level 0 (Initial Query): "AI safety in autonomous vehicles"
    │
    ├── Level 1 (depth = 1, breadth = 2):
    │   ├── Sub-query 1: "Machine learning safety protocols in self-driving cars"
    │   │   ├── → Search Web → Evaluate Relevance → Extract Learnings
    │   │   └── → Follow-up: "How do neural networks handle edge cases?"
    │   │
    │   └── Sub-query 2: "Regulatory frameworks for autonomous vehicle testing"
    │       ├── → Search Web → Evaluate Relevance → Extract Learnings
    │       └── → Follow-up: "What are current safety certification requirements?"
    │
    └── Level 2 (depth = 2, breadth = 1):
        ├── From Sub-query 1 follow-up:
        │   └── "Neural network edge case handling in autonomous systems"
        │       └── → Search Web → Evaluate → Extract → DEPTH LIMIT REACHED
        │
        └── From Sub-query 2 follow-up:
            └── "Safety certification requirements for self-driving vehicles"
                └── → Search Web → Evaluate → Extract → DEPTH LIMIT REACHED
    

**Process flow:**

1.  **Query generation**: OpenAI’s GPT-4o generates multiple search queries from the input
2.  **Web search**: Each query searches the web via the Exa API with live crawling
3.  **Relevance evaluation**: OpenAI’s GPT-4o evaluates if results help answer the query
4.  **Learning extraction**: Relevant results are analyzed for key insights and follow-up questions
5.  **Recursive deepening**: Follow-up questions become new queries for the next depth level
6.  **Accumulation**: All learnings, sources, and queries are accumulated across recursion levels

### 

[​](https://trigger.dev/docs/guides/example-projects/vercel-ai-sdk-deep-research#using-trigger-dev-realtime-to-trigger-and-subscribe-to-the-deep-research-task)

Using Trigger.dev Realtime to trigger and subscribe to the deep research task

We use the [`useRealtimeTaskTrigger`](https://trigger.dev/docs/realtime/react-hooks/triggering#userealtimetasktrigger)
 React hook to trigger the `deep-research` task and subscribe to it’s updates. **Frontend (React Hook)**:

    const triggerInstance = useRealtimeTaskTrigger<typeof deepResearchOrchestrator>("deep-research", {
      accessToken: triggerToken,
    });
    const { progress, label } = parseStatus(triggerInstance.run?.metadata);
    

As the research progresses, the metadata is set within the tasks and the frontend is kept updated with every new status: **Task Metadata**:

    metadata.set("status", {
      progress: 25,
      label: `Searching the web for: "${query}"`,
    });
    

[​](https://trigger.dev/docs/guides/example-projects/vercel-ai-sdk-deep-research#relevant-code)

Relevant code
----------------------------------------------------------------------------------------------------------------

*   **Deep research task**: Core logic in [src/trigger/deepResearch.ts](https://github.com/triggerdotdev/examples/blob/main/vercel-ai-sdk-deep-research-agent/src/trigger/deepResearch.ts)
     - orchestrates the recursive research process. Here you can change the model, the depth and the breadth of the research.
*   **Report generation**: [src/trigger/generateReport.ts](https://github.com/triggerdotdev/examples/blob/main/vercel-ai-sdk-deep-research-agent/src/trigger/generateReport.ts)
     - creates structured HTML reports from research data. The system prompt is defined in the code - this can be updated to be more or less detailed.
*   **PDF generation**: [src/trigger/generatePdfAndUpload.ts](https://github.com/triggerdotdev/examples/blob/main/vercel-ai-sdk-deep-research-agent/src/trigger/generatePdfAndUpload.ts)
     - converts reports to PDF and uploads to R2. This is a simple example of how to use LibreOffice to convert HTML to PDF.
*   **Research agent UI**: [src/components/DeepResearchAgent.tsx](https://github.com/triggerdotdev/examples/blob/main/vercel-ai-sdk-deep-research-agent/src/components/DeepResearchAgent.tsx)
     - handles form submission and real-time progress display using the `useRealtimeTaskTrigger` hook.
*   **Progress component**: [src/components/progress-section.tsx](https://github.com/triggerdotdev/examples/blob/main/deep-research-agent/src/components/progress-section.tsx)
     - displays live research progress.

[​](https://trigger.dev/docs/guides/example-projects/vercel-ai-sdk-deep-research#learn-more-about-trigger-dev-realtime)

Learn more about Trigger.dev Realtime
----------------------------------------------------------------------------------------------------------------------------------------------------------------

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

[Previous](https://trigger.dev/docs/guides/example-projects/turborepo-monorepo-prisma)
[Vercel AI SDK image generatorThis example Next.js project uses the Vercel AI SDK to generate images from a prompt.\
\
Next](https://trigger.dev/docs/guides/example-projects/vercel-ai-sdk-image-generator)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
