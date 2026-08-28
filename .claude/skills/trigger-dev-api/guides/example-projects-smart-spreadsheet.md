# Smart Spreadsheet

> Source: https://trigger.dev/docs/guides/example-projects/smart-spreadsheet

[​](https://trigger.dev/docs/guides/example-projects/smart-spreadsheet#overview)

Overview
--------------------------------------------------------------------------------------------

Smart Spreadsheet is an AI-powered tool that enriches company data on demand. Input a company name or website URL and get verified information including industry, headcount, and funding details; each with source attribution. Results appear in the frontend in real-time as each task completes.

*   A [Next.js](https://nextjs.org/)
     app with [Trigger.dev](https://trigger.dev/)
     for background tasks
*   [Exa](https://exa.ai/)
     – an AI-native search engine that returns clean, structured content ready for LLM extraction
*   [Claude](https://anthropic.com/)
     via the [Vercel AI SDK](https://sdk.vercel.ai/)
     for data extraction
*   [Supabase](https://supabase.com/)
     PostgreSQL database for persistence
*   Trigger.dev [Realtime](https://trigger.dev/docs/realtime/overview)
     for live updates to the frontend

[​](https://trigger.dev/docs/guides/example-projects/smart-spreadsheet#video)

Video
--------------------------------------------------------------------------------------

[​](https://trigger.dev/docs/guides/example-projects/smart-spreadsheet#github-repo)

GitHub repo
--------------------------------------------------------------------------------------------------

[View the Smart Spreadsheet repo\
-------------------------------\
\
Click here to view the full code for this project in our examples repository on GitHub. You can fork it and use it as a starting point for your own project.](https://github.com/triggerdotdev/examples/tree/main/smart-spreadsheet)

[​](https://trigger.dev/docs/guides/example-projects/smart-spreadsheet#how-it-works)

How it works
----------------------------------------------------------------------------------------------------

The enrichment workflow:

1.  **Trigger enrichment** – User enters a company name or URL in the spreadsheet UI
2.  **Parallel data gathering** – Four subtasks run concurrently to fetch basic info, industry, employee count, and funding details
3.  **AI extraction** – Each subtask uses Exa search + Claude to extract structured data with source URLs
4.  **Real-time updates** – Results appear in the frontend as each subtask completes
5.  **Persist results** – Enriched data is saved to Supabase with source attribution

[​](https://trigger.dev/docs/guides/example-projects/smart-spreadsheet#features)

Features
--------------------------------------------------------------------------------------------

*   **Parallel processing** – All four enrichment categories run simultaneously using [batch.triggerByTaskAndWait](https://trigger.dev/docs/triggering#batch-trigger-by-task-and-wait)
    
*   **Source attribution** – Every data point includes the URL it was extracted from
*   **Live updates** – Results appear in the UI as each task completes using [Realtime](https://trigger.dev/docs/realtime/overview)
    
*   **Structured extraction** – Zod schemas ensure consistent data output from Claude

[​](https://trigger.dev/docs/guides/example-projects/smart-spreadsheet#key-code-patterns)

Key code patterns
--------------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/guides/example-projects/smart-spreadsheet#parallel-task-execution)

Parallel task execution

The main task triggers all four enrichment subtasks simultaneously using `batch.triggerByTaskAndWait`:

src/trigger/enrich-company.ts

    const { runs } = await batch.triggerByTaskAndWait([\
      { task: getBasicInfo, payload: { companyName, companyUrl } },\
      { task: getIndustry, payload: { companyName, companyUrl } },\
      { task: getEmployeeCount, payload: { companyName, companyUrl } },\
      { task: getFundingRound, payload: { companyName, companyUrl } },\
    ]);
    

### 

[​](https://trigger.dev/docs/guides/example-projects/smart-spreadsheet#live-updates-from-child-tasks)

Live updates from child tasks

Each subtask uses `metadata.parent.set()` to update the parent’s metadata as soon as data is extracted:

src/trigger/get-basic-info.ts

    // After Claude extracts the data, update the parent task's metadata
    metadata.parent.set("website", object.website);
    metadata.parent.set("description", object.description);
    

The frontend subscribes to these metadata updates using [Realtime](https://trigger.dev/docs/realtime/overview)
, so users see each field populate as it’s discovered.

[​](https://trigger.dev/docs/guides/example-projects/smart-spreadsheet#relevant-code)

Relevant code
------------------------------------------------------------------------------------------------------

| File | Description |
| --- | --- |
| [`src/trigger/enrich-company.ts`](https://github.com/triggerdotdev/examples/blob/main/smart-spreadsheet/src/trigger/enrich-company.ts) | Main orchestrator that triggers parallel subtasks and persists results |
| [`src/trigger/get-basic-info.ts`](https://github.com/triggerdotdev/examples/blob/main/smart-spreadsheet/src/trigger/get-basic-info.ts) | Extracts company website and description |
| [`src/trigger/get-industry.ts`](https://github.com/triggerdotdev/examples/blob/main/smart-spreadsheet/src/trigger/get-industry.ts) | Classifies company industry |
| [`src/trigger/get-employee-count.ts`](https://github.com/triggerdotdev/examples/blob/main/smart-spreadsheet/src/trigger/get-employee-count.ts) | Finds employee headcount |
| [`src/trigger/get-funding-round.ts`](https://github.com/triggerdotdev/examples/blob/main/smart-spreadsheet/src/trigger/get-funding-round.ts) | Discovers latest funding information |

[​](https://trigger.dev/docs/guides/example-projects/smart-spreadsheet#learn-more-about-trigger-dev-realtime)

Learn more about Trigger.dev Realtime
------------------------------------------------------------------------------------------------------------------------------------------------------

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

[Previous](https://trigger.dev/docs/guides/example-projects/realtime-fal-ai)
[Turborepo monorepo with PrismaTwo example projects demonstrating how to use Prisma and Trigger.dev in a Turborepo monorepo setup.\
\
Next](https://trigger.dev/docs/guides/example-projects/turborepo-monorepo-prisma)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
