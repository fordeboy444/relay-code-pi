# Image generation with Fal.ai and Trigger.dev Realtime

> Source: https://trigger.dev/docs/guides/example-projects/realtime-fal-ai

[​](https://trigger.dev/docs/guides/example-projects/realtime-fal-ai#overview)

Overview
------------------------------------------------------------------------------------------

This full stack Next.js project showcases the following:

*   A Trigger.dev task which [generates an image from a prompt using Fal.ai](https://github.com/triggerdotdev/examples/blob/main/realtime-fal-ai-image-generation/src/trigger/realtime-generate-image.ts)
    
*   When a [form is submitted](https://github.com/triggerdotdev/examples/blob/main/realtime-fal-ai-image-generation/src/app/page.tsx)
     in the UI, triggering the task using a [server action](https://github.com/triggerdotdev/examples/blob/main/realtime-fal-ai-image-generation/src/app/actions/process-image.ts)
    
*   Showing the [progress of the task](https://github.com/triggerdotdev/examples/blob/main/realtime-fal-ai-image-generation/src/app/processing/%5Bid%5D/ProcessingContent.tsx)
     on the frontend using Trigger.dev Realtime. This also includes error handling and a fallback UI
*   Once the task is completed, showing the generated image on the frontend next to the original image

[​](https://trigger.dev/docs/guides/example-projects/realtime-fal-ai#github-repo)

GitHub repo
------------------------------------------------------------------------------------------------

View the project on GitHub
--------------------------

Click here to view the full code for this project in our examples repository on GitHub. You can fork it and use it as a starting point for your own project.

[​](https://trigger.dev/docs/guides/example-projects/realtime-fal-ai#walkthrough-video)

Walkthrough video
------------------------------------------------------------------------------------------------------------

This video walks through the process of creating this task in a Next.js project.

[​](https://trigger.dev/docs/guides/example-projects/realtime-fal-ai#learn-more-about-trigger-dev-realtime)

Learn more about Trigger.dev Realtime
----------------------------------------------------------------------------------------------------------------------------------------------------

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

[Previous](https://trigger.dev/docs/guides/example-projects/realtime-csv-importer)
[Smart SpreadsheetAn AI-powered company enrichment tool that uses Exa search and Claude to extract verified company data with source attribution.\
\
Next](https://trigger.dev/docs/guides/example-projects/smart-spreadsheet)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
