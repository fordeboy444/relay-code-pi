# Migrating from Mergent

> Source: https://trigger.dev/docs/migration-mergent

Mergent is being absorbed into Resend, so if you’re running background jobs or scheduled tasks on Mergent, now is a good time to migrate. Trigger.dev is a modern, developer-friendly platform for background jobs, workflows, and scheduling.

### 

[​](https://trigger.dev/docs/migration-mergent#why-trigger-dev)

Why Trigger.dev?

*   **Long-running, reliable tasks:** Write typical async code, no unfamiliar syntax to learn.
*   **Automatic retries, concurrency, and scheduling:** Configure your tasks in your `trigger.config.ts` file.
*   **Local dev that matches prod:** Run and debug jobs locally and view everything in the dashboard.
*   **Scales with you:** Deploy your tasks to Trigger.dev Cloud with no infrastructure to manage. Or self-host.

[​](https://trigger.dev/docs/migration-mergent#how-to-migrate-to-trigger-dev)

How to migrate to Trigger.dev
--------------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/migration-mergent#step-1-set-up-trigger-dev)

Step 1: Set up Trigger.dev

1.  **Create an account** at [Trigger.dev Cloud](https://cloud.trigger.dev/)
    .
2.  **Create an organization and a project.**
3.  **Install the CLI** and run the local dev server:

    npx trigger.dev@latest init
    npx trigger.dev@latest dev
    

You’ll get a local server that behaves just like production, and you’ll see your runs in the dashboard.

### 

[​](https://trigger.dev/docs/migration-mergent#step-2-convert-your-mergent-task-to-a-trigger-dev-task)

Step 2: Convert your Mergent task to a Trigger.dev task

#### 

[​](https://trigger.dev/docs/migration-mergent#example-basic-mergent-task)

Example: Basic Mergent Task

Here’s a simple Mergent task that processes an image:

processVideo.ts

    export async function processVideoTask(req: { body: { videoUrl: string } }) {
      const { videoUrl } = req.body;
      // Do some video processing
      const result = await processVideo(videoUrl);
      return { success: true, processedUrl: result.url };
    }
    

This is typically called by Mergent via HTTP POST, and you’d register the endpoint in the Mergent dashboard.

#### 

[​](https://trigger.dev/docs/migration-mergent#the-same-task-in-trigger-dev)

The same task in Trigger.dev

trigger/processVideo.ts

    import { task } from "@trigger.dev/sdk";
    
    export const processVideoTask = task({
      id: "process-video",
      run: async (payload: { videoUrl: string }) => {
        const result = await processVideo(payload.videoUrl);
        return { success: true, processedUrl: result.url };
      },
    });
    

**Key differences:**

*   In Mergent, your task is an HTTP handler; in Trigger.dev, it’s a `task()` function that gets deployed on a managed worker for you.
*   Trigger.dev gives you a typed payload, not a raw HTTP request.
*   No need to handle HTTP status codes or errors—Trigger.dev handles retries and failures for you.
*   You can export multiple tasks from a single file.

* * *

#### 

[​](https://trigger.dev/docs/migration-mergent#scheduled-task-example)

Scheduled task example

**Mergent scheduled task:** You’d set up a schedule in the Mergent dashboard to hit your HTTP endpoint on a cron.

dailyReport.ts

    export async function dailyReportTask(req) {
      await sendDailyReport();
    }
    

**Trigger.dev scheduled task:**

trigger/dailyReport.ts

    import { schedules } from "@trigger.dev/sdk";
    
    export const dailyReportTask = schedules.task({
      id: "daily-report",
      cron: "0 0 * * *", // every day at midnight UTC
      run: async () => {
        await sendDailyReport();
      },
    });
    

*   In Trigger.dev, you can define the schedule right in your code (or attach it in the dashboard).
*   No need to set up HTTP endpoints for each scheduled job.

[​](https://trigger.dev/docs/migration-mergent#triggering-your-tasks)

Triggering your tasks
----------------------------------------------------------------------------------------------

**Mergent:** You’d trigger a task by calling the Mergent API, specifying the URL and payload.

    const Mergent = require("mergent");
    const mergent = new Mergent("API_KEY");
    
    mergent.tasks.create({
      request: {
        url: "https://your-app.com/api/processImage",
        body: JSON.stringify({ imageUrl: "...", filters: ["blur"] }),
        headers: { "Content-Type": "application/json" },
      },
      delay: { minutes: 5 },
    });
    

**Trigger.dev:** You trigger a task directly from your codebase, no HTTP endpoint needed.

    import { processImageTask } from "@/trigger/processImage";
    
    await processImageTask.trigger({
      imageUrl: "...",
      filters: ["blur"],
    }, {
      delay: "5m",
    });
    

*   You can trigger tasks immediately, or add logic inside the task to delay execution (using `wait.for` or `wait.until`).
*   No need to expose HTTP endpoints for every task.

**Summary:**

*   Mergent tasks are HTTP handlers; Trigger.dev tasks are functions that get deployed on a managed worker for you.
*   Scheduling and retries are built-in and configured in code.
*   Trigger.dev tasks are type-safe, and easy to debug.
*   You don’t need to manage endpoints or handle HTTP manually.

That’s it. You’re ready to migrate. If you need more advanced features such as concurrency, retries, metadata, chaining tasks, and more, check out the [Trigger.dev docs](https://trigger.dev/docs)
.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/examples/hookdeck-webhook)
[Migrating from n8nA practical guide for moving your n8n workflows to Trigger.dev\
\
Next](https://trigger.dev/docs/migration-n8n)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
