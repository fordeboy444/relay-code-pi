# Runs

> Source: https://trigger.dev/docs/runs

In Trigger.dev, the concepts of runs and attempts are fundamental to understanding how tasks are executed and managed. This article explains these concepts in detail and provides insights into the various states a run can go through during its lifecycle.

[​](https://trigger.dev/docs/runs#what-are-runs)

What are runs?
------------------------------------------------------------------

A run is created when you trigger a task (e.g. calling `yourTask.trigger({ foo: "bar" })`). It represents a single instance of a task being executed and contains the following key information:

*   A unique run ID
*   The current status of the run
*   The payload (input data) for the task
*   Lots of other metadata

[​](https://trigger.dev/docs/runs#the-run-lifecycle)

The run lifecycle
-------------------------------------------------------------------------

A run can go through **various** states during its lifecycle. The following diagram illustrates a typical state transition where a single run is triggered and completes successfully: ![Run Lifecycle](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/run-lifecycle.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=7850d8f28313b615293b27dc6d4bf428) Runs can also find themselves in lots of other states depending on what’s happening at any given time. The following sections describe all the possible states in more detail.

### 

[​](https://trigger.dev/docs/runs#initial-states)

Initial states

**Pending version**: The task is waiting for a version update because it cannot execute without additional information (task, queue, etc.). **Delayed**: When a run is triggered with a delay, it enters this state until the specified delay period has passed. **Queued**: The run is ready to be executed and is waiting in the queue. **Dequeued**: The task has been dequeued and is being sent to a worker to start executing.

### 

[​](https://trigger.dev/docs/runs#execution-states)

Execution states

**Executing**: The task is currently being executed by a worker. **Waiting**: You have used a [triggerAndWait()](https://trigger.dev/docs/triggering#yourtask-triggerandwait)
, [batchTriggerAndWait()](https://trigger.dev/docs/triggering#yourtask-batchtriggerandwait)
 or a [wait function](https://trigger.dev/docs/wait)
. When the wait is complete, the task will resume execution.

### 

[​](https://trigger.dev/docs/runs#final-states)

Final states

**Completed**: The task has successfully finished execution. **Canceled**: The run was manually canceled by the user. **Failed**: The task has failed to complete successfully due to an error in the task code. **Timed out**: Task has failed because it exceeded its `maxDuration`. **Crashed**: The worker process crashed during execution (likely due to an Out of Memory error) and won’t be retried. **System failure**: An unrecoverable system error has occurred. **Expired**: The run’s [Time-to-Live](https://trigger.dev/docs/runs#time-to-live-ttl)
 (TTL) has passed before it could start executing.

[​](https://trigger.dev/docs/runs#attempts)

Attempts
-------------------------------------------------------

An attempt represents a single execution of a task within a run. A run can have one or more attempts, depending on the task’s retry settings and whether it fails. Each attempt has:

*   A unique attempt ID
*   A status
*   An output (if successful) or an error (if failed)

When a task fails, it will be retried according to its retry settings, creating new attempts until it either succeeds or reaches the retry limit. ![Run with retries](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/run-with-retries.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=6c0a8c1b610d5befaf82b583e2adcedf)

[​](https://trigger.dev/docs/runs#run-completion)

Run completion
-------------------------------------------------------------------

A run is considered finished when:

1.  The last attempt succeeds, or
2.  The task has reached its retry limit and all attempts have failed

At this point, the run will have either an output (if successful) or an error (if failed).

[​](https://trigger.dev/docs/runs#boolean-helpers)

Boolean helpers
---------------------------------------------------------------------

Run objects returned from the API and Realtime include convenient boolean helper methods to check the run’s status:

    import { runs } from "@trigger.dev/sdk";
    
    const run = await runs.retrieve("run_1234");
    
    if (run.isCompleted) {
      console.log("Run completed successfully");
    }
    

*   **`isQueued`**: Returns `true` when the status is `QUEUED`, `PENDING_VERSION`, or `DELAYED`
*   **`isExecuting`**: Returns `true` when the status is `EXECUTING` or `DEQUEUED`. These count against your concurrency limits.
*   **`isWaiting`**: Returns `true` when the status is `WAITING`. These do not count against your concurrency limits.
*   **`isCompleted`**: Returns `true` when the status is any of the completed statuses
*   **`isCanceled`**: Returns `true` when the status is `CANCELED`
*   **`isFailed`**: Returns `true` when the status is any of the failed statuses
*   **`isSuccess`**: Returns `true` when the status is `COMPLETED`

These helpers are also available when subscribing to Realtime run updates:

    import { runs } from "@trigger.dev/sdk";
    
    for await (const run of runs.subscribeToRun("run_1234")) {
      if (run.isCompleted) {
        console.log("Run completed successfully!");
        break;
      }
    }
    

[​](https://trigger.dev/docs/runs#advanced-run-features)

Advanced run features
---------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/runs#idempotency-keys)

Idempotency Keys

When triggering a task, you can provide an idempotency key to ensure the task is executed only once, even if triggered multiple times. This is useful for preventing duplicate executions in distributed systems.

    await yourTask.trigger({ foo: "bar" }, { idempotencyKey: "unique-key" });
    

*   If a run with the same idempotency key is already in progress, the new trigger will be ignored.
*   If the run has already finished, the previous output or error will be returned.

See our [Idempotency docs](https://trigger.dev/docs/idempotency)
 for more information.

### 

[​](https://trigger.dev/docs/runs#canceling-runs)

Canceling runs

You can cancel an in-progress run using the API or the dashboard:

    await runs.cancel(runId);
    

When a run is canceled: – The task execution is stopped – The run is marked as canceled – The task will not be retried – Any in-progress child runs are also canceled

### 

[​](https://trigger.dev/docs/runs#time-to-live-ttl)

Time-to-live (TTL)

TTL is a time-to-live setting that defines the maximum duration a run can remain in a queued state before being automatically expired. You can set a TTL at three levels, with the following precedence:

1.  **Per-trigger** (highest priority):

    await yourTask.trigger({ foo: "bar" }, { ttl: "10m" });
    

2.  **Task-level default**:

    export const myTask = task({
      id: "my-task",
      ttl: "10m",
      run: async (payload) => {
        //...
      },
    });
    

3.  **Global config default** (lowest priority):

trigger.config.ts

    export default defineConfig({
      project: "<project ref>",
      ttl: "1h",
    });
    

To opt out of a config-level or task-level TTL for a specific trigger, pass `ttl: 0`:

    // This run will not have a TTL, even if the task or config defines one
    await yourTask.trigger({ foo: "bar" }, { ttl: 0 });
    

Similarly, to opt out of a config-level TTL for a specific task, set `ttl: 0` on the task definition:

    export const longRunningTask = task({
      id: "long-running-task",
      ttl: 0, // Opt out of the config-level TTL
      run: async (payload) => {
        //...
      },
    });
    

Setting `ttl: 0` removes the config-level or task-level TTL, but the platform-level maximum still applies. See [Limits - Maximum run TTL](https://trigger.dev/docs/limits#maximum-run-ttl)
 for details.

If the run hasn’t started within the specified TTL, it will automatically expire, returning the status `Expired`. This is useful for time-sensitive tasks where immediate execution is important. For example, when you queue many runs simultaneously and exceed your concurrency limits, some runs might be delayed - using TTL ensures they only execute if they can start within your specified timeframe. Dev runs automatically have a 10-minute TTL. On Trigger.dev Cloud, staging and production runs have a maximum TTL of 14 days applied automatically (runs without an explicit TTL get 14 days; longer TTLs are clamped). See [Limits — Maximum run TTL](https://trigger.dev/docs/limits#maximum-run-ttl)
 for details. ![Run with TTL](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/run-with-ttl.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=f3c577f8ef1ee2bcb22bf66259d88869)

### 

[​](https://trigger.dev/docs/runs#delayed-runs)

Delayed runs

You can schedule a run to start after a specified delay:

    await yourTask.trigger({ foo: "bar" }, { delay: "1h" });
    

This is useful for tasks that need to be executed at a specific time in the future. ![Run with delay](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/run-with-delay.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=03fc83ca451c8b58faf1c79c34bdface)

### 

[​](https://trigger.dev/docs/runs#replaying-runs)

Replaying runs

You can create a new run with the same payload as a previous run:

    await runs.replay(runId);
    

This is useful for re-running a task with the same input, especially for debugging or recovering from failures. The new run will use the latest version of the task. You can also replay runs from the dashboard using the same or different payload. Learn how to do this [here](https://trigger.dev/docs/replaying)
.

### 

[​](https://trigger.dev/docs/runs#waiting-for-runs)

Waiting for runs

#### 

[​](https://trigger.dev/docs/runs#triggerandwait)

triggerAndWait()

The `triggerAndWait()` function triggers a task and then lets you wait for the result before continuing. [Learn more about triggerAndWait()](https://trigger.dev/docs/triggering#yourtask-triggerandwait)
. ![Run with triggerAndWait](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/run-with-triggerAndWait().png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=c8e309d749162c08006a9baca616ef74)

#### 

[​](https://trigger.dev/docs/runs#batchtriggerandwait)

batchTriggerAndWait()

Similar to `triggerAndWait()`, the `batchTriggerAndWait()` function lets you batch trigger a task and wait for all the results [Learn more about batchTriggerAndWait()](https://trigger.dev/docs/triggering#yourtask-batchtriggerandwait)
. ![Run with batchTriggerAndWait](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/run-with-batchTriggerAndWait().png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=7863f7505ba010ae2b1f0f998f57cf35)

### 

[​](https://trigger.dev/docs/runs#runs-api)

Runs API

#### 

[​](https://trigger.dev/docs/runs#runs-list)

runs.list()

List runs in a specific environment. You can filter the runs by status, created at, task identifier, version, and more:

    import { runs } from "@trigger.dev/sdk";
    
    // Get the first page of runs, returning up to 20 runs
    let page = await runs.list({ limit: 20 });
    
    for (const run of page.data) {
      console.log(run);
    }
    
    // Keep getting the next page until there are no more runs
    while (page.hasNextPage()) {
      page = await page.getNextPage();
      // Do something with the next page of runs
    }
    

You can also use an Async Iterator to get all runs:

    import { runs } from "@trigger.dev/sdk";
    
    for await (const run of runs.list({ limit: 20 })) {
      console.log(run);
    }
    

You can provide multiple filters to the `list()` function to narrow down the results:

    import { runs } from "@trigger.dev/sdk";
    
    const response = await runs.list({
      status: ["QUEUED", "EXECUTING"], // Filter by status
      taskIdentifier: ["my-task", "my-other-task"], // Filter by task identifier
      from: new Date("2024-04-01T00:00:00Z"), // Filter by created at
      to: new Date(),
      version: "20241127.2", // Filter by deployment version,
      tag: ["tag1", "tag2"], // Filter by tags
      batch: "batch_1234", // Filter by batch ID
      schedule: "sched_1234", // Filter by schedule ID
    });
    

#### 

[​](https://trigger.dev/docs/runs#runs-retrieve)

runs.retrieve()

Fetch a single run by it’s ID:

    import { runs } from "@trigger.dev/sdk";
    
    const run = await runs.retrieve(runId);
    

You can provide the type of the task to correctly type the `run.payload` and `run.output`:

    import { runs } from "@trigger.dev/sdk";
    import type { myTask } from "./trigger/myTask";
    
    const run = await runs.retrieve<typeof myTask>(runId);
    
    console.log(run.payload.foo); // string
    console.log(run.output.bar); // string
    

If you have just triggered a run, you can pass the entire response object to `retrieve()` and the response will already be typed:

    import { runs, tasks } from "@trigger.dev/sdk";
    import type { myTask } from "./trigger/myTask";
    
    const response = await tasks.trigger<typeof myTask>({ foo: "bar" });
    const run = await runs.retrieve(response);
    
    console.log(run.payload.foo); // string
    console.log(run.output.bar); // string
    

#### 

[​](https://trigger.dev/docs/runs#runs-cancel)

runs.cancel()

Cancel a run:

    import { runs } from "@trigger.dev/sdk";
    
    await runs.cancel(runId);
    

#### 

[​](https://trigger.dev/docs/runs#runs-replay)

runs.replay()

Replay a run:

    import { runs } from "@trigger.dev/sdk";
    
    await runs.replay(runId);
    

#### 

[​](https://trigger.dev/docs/runs#runs-reschedule)

runs.reschedule()

Updates a delayed run with a new delay. Only valid when the run is in the DELAYED state.

    import { runs } from "@trigger.dev/sdk";
    
    await runs.reschedule(runId, { delay: "1h" });
    

### 

[​](https://trigger.dev/docs/runs#real-time-updates)

Real-time updates

Subscribe to changes to a specific run in real-time:

    import { runs } from "@trigger.dev/sdk";
    
    for await (const run of runs.subscribeToRun(runId)) {
      console.log(run);
    }
    

Similar to `runs.retrieve()`, you can provide the type of the task to correctly type the `run.payload` and `run.output`:

    import { runs } from "@trigger.dev/sdk";
    import type { myTask } from "./trigger/myTask";
    
    for await (const run of runs.subscribeToRun<typeof myTask>(runId)) {
      console.log(run.payload.foo); // string
      console.log(run.output?.bar); // string | undefined
    }
    

For more on real-time updates, see the [Realtime](https://trigger.dev/docs/realtime)
 documentation.

### 

[​](https://trigger.dev/docs/runs#triggering-runs-for-undeployed-tasks)

Triggering runs for undeployed tasks

It’s possible to trigger a run for a task that hasn’t been deployed yet. The run will enter the “Waiting for deploy” state until the task is deployed. Once deployed, the run will be queued and executed normally. This feature is particularly useful in CI/CD pipelines where you want to trigger tasks before the deployment is complete.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/triggering)
[API keysHow to authenticate with Trigger.dev so you can trigger tasks.\
\
Next](https://trigger.dev/docs/apikeys)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![Run Lifecycle](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/run-lifecycle.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=7850d8f28313b615293b27dc6d4bf428)

![Run with retries](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/run-with-retries.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=6c0a8c1b610d5befaf82b583e2adcedf)

![Run with TTL](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/run-with-ttl.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=f3c577f8ef1ee2bcb22bf66259d88869)

![Run with delay](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/run-with-delay.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=03fc83ca451c8b58faf1c79c34bdface)

![Run with triggerAndWait](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/run-with-triggerAndWait().png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=c8e309d749162c08006a9baca616ef74)

![Run with batchTriggerAndWait](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/run-with-batchTriggerAndWait().png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=7863f7505ba010ae2b1f0f998f57cf35)
