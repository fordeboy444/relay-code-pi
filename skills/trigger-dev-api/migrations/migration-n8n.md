# Migrating from n8n

> Source: https://trigger.dev/docs/migration-n8n

If you’ve been building with n8n and are ready to move to code-first workflows, this guide is for you. This page maps them to their Trigger.dev equivalents and walks through common patterns side by side. Your task code runs on Trigger.dev’s managed infrastructure, so there are no servers for you to provision or maintain.

[​](https://trigger.dev/docs/migration-n8n#concept-map)

Concept map
----------------------------------------------------------------------

| n8n | Trigger.dev |
| --- | --- |
| Workflow | [task](https://trigger.dev/docs/tasks/overview)<br> plus its config (queue, retry, onFailure) |
| Schedule Trigger | [schedules.task](https://trigger.dev/docs/tasks/scheduled) |
| Webhook node | Route handler + [task.trigger()](https://trigger.dev/docs/triggering) |
| Node | A step or library call inside `run()` |
| Execute Sub-workflow node (wait for completion) | [tasks.triggerAndWait()](https://trigger.dev/docs/triggering#yourtask-triggerandwait) |
| Execute Sub-workflow node (execute in background) | [tasks.trigger()](https://trigger.dev/docs/triggering) |
| Loop over N items → Execute Sub-workflow → Merge | [tasks.batchTriggerAndWait()](https://trigger.dev/docs/tasks#yourtask-batchtriggerandwait) |
| Loop Over Items (Split in Batches) | `for` loop or `.map()` |
| IF / Switch node | `if` / `switch` statements |
| Wait node (time interval or specific time) | [wait.for()](https://trigger.dev/docs/wait-for)<br> or [wait.until()](https://trigger.dev/docs/wait-until) |
| Error Trigger node / Error Workflow | [onFailure](https://trigger.dev/docs/tasks/overview#onfailure-function)<br> hook (both collapse into one concept in Trigger.dev) |
| Continue On Fail | `try/catch` around an individual step |
| Stop And Error | `throw new Error(...)` |
| Code node | A function or step within `run()` |
| Credentials | [Environment variable secret](https://trigger.dev/docs/deploy-environment-variables) |
| Execution | Run (visible in the dashboard with full logs) |
| Retry on Fail (per-node setting) | [retry.maxAttempts](https://trigger.dev/docs/tasks/overview#retry)<br> (retries the whole `run()`, not a single step) |
| AI Agent node | Any AI SDK called inside `run()` (Vercel AI SDK, Claude SDK, OpenAI SDK, etc.) |
| Respond to Webhook node | Route handler + [task.triggerAndWait()](https://trigger.dev/docs/triggering#yourtask-triggerandwait)<br> returning the result as HTTP response |

* * *

[​](https://trigger.dev/docs/migration-n8n#setup)

Setup
----------------------------------------------------------

1

[](https://trigger.dev/docs/migration-n8n#)

Create an account

Go to [Trigger.dev Cloud](https://cloud.trigger.dev/)
, create an account, and create a project.

2

[](https://trigger.dev/docs/migration-n8n#)

Install the CLI and initialize

    npx trigger.dev@latest init
    

This adds Trigger.dev to your project and creates a `trigger/` directory for your tasks.

3

[](https://trigger.dev/docs/migration-n8n#)

Run the local dev server

    npx trigger.dev@latest dev
    

You’ll get a local server that behaves like production. Your runs appear in the dashboard as you test.

* * *

[​](https://trigger.dev/docs/migration-n8n#common-patterns)

Common patterns
------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/migration-n8n#webhook-trigger)

Webhook trigger

In n8n you use a **Webhook** trigger node, which registers a URL that starts the workflow. In Trigger.dev, your existing route handler receives the webhook and triggers the task:

app/api/webhook/route.ts

trigger/process-webhook.ts

    import { processWebhook } from "@/trigger/process-webhook";
    
    export async function POST(request: Request) {
      const body = await request.json();
    
      await processWebhook.trigger({
        event: body.event,
        data: body.data,
      });
    
      return Response.json({ received: true });
    }
    

* * *

### 

[​](https://trigger.dev/docs/migration-n8n#chaining-steps-sub-workflows)

Chaining steps (Sub-workflows)

In n8n you use the **Execute Sub-workflow** node to call another workflow and wait for the result. In Trigger.dev you use `triggerAndWait()`:

trigger/process-order.ts

trigger/send-confirmation-email.ts

    import { task } from "@trigger.dev/sdk";
    import { sendConfirmationEmail } from "./send-confirmation-email";
    
    export const processOrder = task({
      id: "process-order",
      run: async (payload: { orderId: string; email: string }) => {
        const result = await processPayment(payload.orderId);
    
        // trigger a subtask and wait for it to complete
        await sendConfirmationEmail.triggerAndWait({
          email: payload.email,
          orderId: payload.orderId,
          amount: result.amount,
        });
    
        return { processed: true };
      },
    });
    

To trigger multiple subtasks in parallel and wait for all of them (like the **Merge** node in n8n):

trigger/process-batch.ts

    import { task } from "@trigger.dev/sdk";
    import { processItem } from "./process-item";
    
    export const processBatch = task({
      id: "process-batch",
      run: async (payload: { items: { id: string }[] }) => {
        // fan out to subtasks, collect all results
        const results = await processItem.batchTriggerAndWait(
          payload.items.map((item) => ({ payload: { id: item.id } }))
        );
    
        return { processed: results.runs.length };
      },
    });
    

* * *

### 

[​](https://trigger.dev/docs/migration-n8n#error-handling)

Error handling

In n8n you use **Continue On Fail** on individual nodes and a separate **Error Workflow** for workflow-level failures. In Trigger.dev:

*   Use `try/catch` for recoverable errors at a specific step
*   Use the `onFailure` hook for workflow-level failure handling
*   Configure `retry` for automatic retries with backoff

trigger/import-data.ts

    import { task } from "@trigger.dev/sdk";
    
    export const importData = task({
      id: "import-data",
      // automatic retries with exponential backoff
      retry: {
        maxAttempts: 3,
      },
      // runs if this task fails after all retries
      onFailure: async ({ payload, error }) => {
        await sendAlertToSlack(`import-data failed: ${(error as Error).message}`);
      },
      run: async (payload: { source: string }) => {
        let records;
    
        // continue on fail equivalent: catch the error and handle locally
        try {
          records = await fetchFromSource(payload.source);
        } catch (error) {
          records = await fetchFromFallback(payload.source);
        }
    
        await saveRecords(records);
      },
    });
    

* * *

### 

[​](https://trigger.dev/docs/migration-n8n#waiting-and-delays)

Waiting and delays

In n8n you use the **Wait** node to pause a workflow for a fixed time or until a webhook is called. In Trigger.dev:

trigger/send-followup.ts

    import { task, wait } from "@trigger.dev/sdk";
    
    export const sendFollowup = task({
      id: "send-followup",
      run: async (payload: { userId: string; email: string }) => {
        await sendWelcomeEmail(payload.email);
    
        // wait for a fixed duration, execution is frozen, you don't pay while waiting
        await wait.for({ days: 3 });
    
        const hasActivated = await checkUserActivation(payload.userId);
        if (!hasActivated) {
          await sendFollowupEmail(payload.email);
        }
      },
    });
    

To wait for an external event (like n8n’s “On Webhook Call” resume mode), use `wait.createToken()` to generate a URL, send that URL to the external system, then pause with `wait.forToken()` until the external system POSTs to that URL to resume the run.

trigger/approval-flow.ts

    import { task, wait } from "@trigger.dev/sdk";
    
    export const approvalFlow = task({
      id: "approval-flow",
      run: async (payload: { requestId: string; approverEmail: string }) => {
        // create a token, this generates a URL the external system can POST to
        const token = await wait.createToken({
          timeout: "48h",
          tags: [`request-${payload.requestId}`],
        });
    
        // send the token URL to whoever needs to resume this run
        await sendApprovalRequest(payload.approverEmail, payload.requestId, token.url);
    
        // pause until the external system POSTs to token.url
        const result = await wait.forToken<{ approved: boolean }>(token).unwrap();
    
        if (result.approved) {
          await executeApprovedAction(payload.requestId);
        } else {
          await notifyRejection(payload.requestId);
        }
      },
    });
    

* * *

[​](https://trigger.dev/docs/migration-n8n#full-example-customer-onboarding-workflow)

Full example: customer onboarding workflow
-----------------------------------------------------------------------------------------------------------------------------------

Here’s how a typical back office onboarding workflow translates from n8n to Trigger.dev. **The n8n setup:** Webhook Trigger → HTTP Request (provision account) → HTTP Request (send welcome email) → HTTP Request (notify Slack) → Wait node (3 days) → HTTP Request (check activation) → IF node → HTTP Request (send follow-up). **In Trigger.dev**, the same workflow is plain TypeScript:

trigger/onboard-customer.ts

    import { task, wait } from "@trigger.dev/sdk";
    import { provisionAccount } from "./provision-account";
    import { sendWelcomeEmail } from "./send-welcome-email";
    
    export const onboardCustomer = task({
      id: "onboard-customer",
      retry: {
        maxAttempts: 3,
      },
      run: async (payload: {
        customerId: string;
        email: string;
        plan: "starter" | "pro" | "enterprise";
      }) => {
        // provision their account, throws if the subtask fails
        await provisionAccount
          .triggerAndWait({
            customerId: payload.customerId,
            plan: payload.plan,
          })
          .unwrap();
    
        // send welcome email
        await sendWelcomeEmail
          .triggerAndWait({
            customerId: payload.customerId,
            email: payload.email,
          })
          .unwrap();
    
        // notify the team
        await notifySlack(`New customer: ${payload.email} on ${payload.plan}`);
    
        // wait 3 days, then check if they've activated
        await wait.for({ days: 3 });
    
        const activated = await checkActivation(payload.customerId);
        if (!activated) {
          await sendActivationNudge(payload.email);
        }
    
        return { customerId: payload.customerId, activated };
      },
    });
    

Trigger the workflow from your app when a new customer signs up:

    import { onboardCustomer } from "@/trigger/onboard-customer";
    
    await onboardCustomer.trigger({
      customerId: customer.id,
      email: customer.email,
      plan: customer.plan,
    });
    

Every run is visible in the Trigger.dev dashboard with full logs, retry history, and the ability to replay any run.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/migration-mergent)
[OverviewExplore common use cases for Trigger.dev including data processing, media workflows, marketing automation, and AI generation\
\
Next](https://trigger.dev/docs/guides/use-cases/overview)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
