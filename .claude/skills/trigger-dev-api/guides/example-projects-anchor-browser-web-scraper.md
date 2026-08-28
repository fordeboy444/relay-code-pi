# Automated website monitoring with Anchor Browser

> Source: https://trigger.dev/docs/guides/example-projects/anchor-browser-web-scraper

**WEB SCRAPING:** When web scraping, you MUST use a proxy to comply with our terms of service. Direct scraping of third-party websites without the site owner’s permission using Trigger.dev Cloud is prohibited and will result in account suspension. See [this example](https://trigger.dev/docs/guides/examples/puppeteer#scrape-content-from-a-web-page)
 which uses a proxy.

[​](https://trigger.dev/docs/guides/example-projects/anchor-browser-web-scraper#overview)

Overview
-----------------------------------------------------------------------------------------------------

This example demonstrates automated web monitoring using Trigger.dev’s task scheduling and Anchor Browser’s AI-powered browser automation tools. The task runs daily at 5pm ET to find the cheapest Broadway tickets available for same-day shows. **How it works:**

*   Trigger.dev schedules and executes the monitoring task
*   Anchor Browser spins up a remote browser session with an AI agent
*   The AI agent uses computer vision and natural language processing to analyze the TDF website
*   AI agent returns the lowest-priced show with specific details: name, price, and showtime

[​](https://trigger.dev/docs/guides/example-projects/anchor-browser-web-scraper#tech-stack)

Tech stack
---------------------------------------------------------------------------------------------------------

*   **[Node.js](https://nodejs.org/)
    ** runtime environment (version 18.2 or higher)
*   **[Trigger.dev](https://trigger.dev/)
    ** for task scheduling and task orchestration
*   **[Anchor Browser](https://anchorbrowser.io/)
    ** for AI-powered browser automation
*   **[Playwright](https://playwright.dev/)
    ** for browser automation libraries (handled via external dependencies)

[​](https://trigger.dev/docs/guides/example-projects/anchor-browser-web-scraper#github-repo)

GitHub repo
-----------------------------------------------------------------------------------------------------------

View the Anchor Browser web scraper repo
----------------------------------------

Click here to view the full code for this project in our examples repository on GitHub. You can fork it and use it as a starting point for your own project.

[​](https://trigger.dev/docs/guides/example-projects/anchor-browser-web-scraper#relevant-code)

Relevant code
---------------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/guides/example-projects/anchor-browser-web-scraper#broadway-ticket-monitor-task)

Broadway ticket monitor task

This task runs daily at 5pm ET, in [src/trigger/broadway-monitor.ts](https://github.com/triggerdotdev/examples/tree/main/anchor-browser-web-scraper/src/trigger/broadway-monitor.ts)
:

    import { schedules } from "@trigger.dev/sdk";
    import Anchorbrowser from "anchorbrowser";
    
    export const broadwayMonitor = schedules.task({
      id: "broadway-ticket-monitor",
      cron: "0 21 * * *",
      run: async (payload, { ctx }) => {
        const client = new Anchorbrowser({
          apiKey: process.env.ANCHOR_BROWSER_API_KEY!,
        });
    
        let session;
        try {
          // Create explicit session to get live view URL
          session = await client.sessions.create();
          console.log(`Session ID: ${session.data.id}`);
          console.log(`Live View URL: https://live.anchorbrowser.io?sessionId=${session.data.id}`);
    
          const response = await client.tools.performWebTask({
            sessionId: session.data.id,
            url: "https://www.tdf.org/discount-ticket-programs/tkts-by-tdf/tkts-live/",
            prompt: `Look for the "Broadway Shows" section on this page. Find the show with the absolute lowest starting price available right now and return the show name, current lowest price, and show time. Be very specific about the current price you see. Format as: Show: [name], Price: [exact current price], Time: [time]`,
          });
    
          console.log("Raw response:", response);
    
          const result = response.data.result?.result || response.data.result || response.data;
    
          if (result && typeof result === "string" && result.includes("Show:")) {
            console.log(`🎭 Best Broadway Deal Found!`);
            console.log(result);
    
            return {
              success: true,
              bestDeal: result,
              liveViewUrl: `https://live.anchorbrowser.io?sessionId=${session.data.id}`,
            };
          } else {
            console.log("No Broadway deals found today");
            return { success: true, message: "No deals found" };
          }
        } finally {
          if (session?.data?.id) {
            try {
              await client.sessions.delete(session.data.id);
            } catch (cleanupError) {
              console.warn("Failed to cleanup session:", cleanupError);
            }
          }
        }
      },
    });
    

### 

[​](https://trigger.dev/docs/guides/example-projects/anchor-browser-web-scraper#build-configuration)

Build configuration

Since Anchor Browser uses browser automation libraries (Playwright) under the hood, we need to configure Trigger.dev to handle these dependencies properly by excluding them from the build bundle in [trigger.config.ts](https://github.com/triggerdotdev/examples/tree/main/anchor-browser-web-scraper/trigger.config.ts)
:

    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      project: "proj_your_project_id_here", // Get from Trigger.dev dashboard
      maxDuration: 3600, // 1 hour - plenty of time for web automation
      dirs: ["./src/trigger"],
      build: {
        external: ["playwright-core", "playwright", "chromium-bidi"],
      },
    });
    

[​](https://trigger.dev/docs/guides/example-projects/anchor-browser-web-scraper#learn-more)

Learn more
---------------------------------------------------------------------------------------------------------

*   View the [Anchor Browser docs](https://docs.anchorbrowser.io/)
     to learn more about Anchor Browser’s AI-powered browser automation tools.
*   Check out the source code for the [Anchor Browser web scraper repo](https://github.com/triggerdotdev/examples/tree/main/anchor-browser-web-scraper)
     on GitHub.
*   Browser our [example projects](https://trigger.dev/docs/guides/introduction)
     to see how you can use Trigger.dev with other services.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/use-cases/marketing)
[Batch LLM EvaluatorThis example Next.js project evaluates multiple LLM models using the Vercel AI SDK and streams updates to the frontend using Trigger.dev Realtime.\
\
Next](https://trigger.dev/docs/guides/example-projects/batch-llm-evaluator)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
