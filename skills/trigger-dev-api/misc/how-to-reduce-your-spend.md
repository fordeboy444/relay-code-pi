# How to reduce your spend

> Source: https://trigger.dev/docs/how-to-reduce-your-spend

[​](https://trigger.dev/docs/how-to-reduce-your-spend#check-out-your-usage-page-regularly)

Check out your usage page regularly
---------------------------------------------------------------------------------------------------------------------------------

Monitor your usage dashboard to understand your spending patterns. You can see:

*   Your most expensive tasks
*   Your total duration by task
*   Number of runs by task
*   Spikes in your daily usage

![Usage dashboard](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/usage-dashboard.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=e98f6e2d5bfd4e6350b622b3ade51afe) You can view your usage page by clicking the “Organization” menu in the top left of the dashboard and then clicking “Usage”.

[​](https://trigger.dev/docs/how-to-reduce-your-spend#create-billing-alerts)

Create billing alerts
-----------------------------------------------------------------------------------------------------

Configure billing alerts in your dashboard to get notified when you approach spending thresholds. This helps you:

*   Catch unexpected cost increases early
*   Identify runaway tasks before they become expensive

The billing alerts page includes two types of alerts:

*   **Standard alerts**: Get notified at 75%, 90%, 100%, 200%, and 500% of your monthly budget
*   **Spike alerts**: Catch runaway usage from bugs or errors with alerts at 10x (1000%), 20x (2000%), 50x (5000%), and 100x (10000%) of your monthly budget. We recommend keeping these enabled as a safety net.

![Billing alerts](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/billing-alerts-ui.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=813b55e61d9c1bffd376f06acd7f7d3f) You can view your billing alerts page by clicking the “Organization” menu in the top left of the dashboard and then clicking “Settings”.

[​](https://trigger.dev/docs/how-to-reduce-your-spend#reduce-your-machine-sizes)

Reduce your machine sizes
-------------------------------------------------------------------------------------------------------------

The larger the machine, the more it costs per second. [View the machine pricing](https://trigger.dev/pricing#computePricing)
. Start with the smallest machine that works, then scale up only if needed:

    // Default: small-1x (0.5 vCPU, 0.5 GB RAM)
    export const lightTask = task({
      id: "light-task",
      // No machine config needed - uses small-1x by default
      run: async (payload) => {
        // Simple operations
      },
    });
    
    // Only use larger machines when necessary
    export const heavyTask = task({
      id: "heavy-task",
      machine: "medium-1x", // 1 vCPU, 2 GB RAM
      run: async (payload) => {
        // CPU/memory intensive operations
      },
    });
    

You can also override machine size when triggering if you know certain payloads need more resources. [Read more about machine sizes](https://trigger.dev/docs/machines)
.

[​](https://trigger.dev/docs/how-to-reduce-your-spend#avoid-duplicate-work-using-idempotencykey)

Avoid duplicate work using idempotencyKey
---------------------------------------------------------------------------------------------------------------------------------------------

Idempotency keys prevent expensive duplicate work by ensuring the same operation isn’t performed multiple times. This is especially valuable during task retries or when the same trigger might fire multiple times. When you use an idempotency key, Trigger.dev remembers the result and skips re-execution, saving you compute costs:

    export const expensiveApiCall = task({
      id: "expensive-api-call",
      run: async (payload: { userId: string }) => {
        // This expensive operation will only run once per user
        await wait.for(
          { seconds: 30 },
          {
            idempotencyKey: `user-processing-${payload.userId}`,
            idempotencyKeyTTL: "1h",
          }
        );
    
        const result = await processUserData(payload.userId);
        return result;
      },
    });
    

You can use idempotency keys with various wait functions:

    // Skip waits during retries
    const token = await wait.createToken({
      idempotencyKey: `daily-report-${new Date().toDateString()}`,
      idempotencyKeyTTL: "24h",
    });
    
    // Prevent duplicate child task execution
    await childTask.triggerAndWait(
      { data: payload },
      {
        idempotencyKey: `process-${payload.id}`,
        idempotencyKeyTTL: "1h",
      }
    );
    

The `idempotencyKeyTTL` controls how long the result is cached. Use shorter TTLs (like “1h”) for time-sensitive operations, or longer ones (up to 30 days default) for expensive operations that rarely need re-execution. This prevents both unnecessary duplicate work and stale data issues.

[​](https://trigger.dev/docs/how-to-reduce-your-spend#do-more-work-in-parallel-in-a-single-task)

Do more work in parallel in a single task
---------------------------------------------------------------------------------------------------------------------------------------------

Sometimes it’s more efficient to do more work in a single task than split across many. This is particularly true when you’re doing lots of async work such as API calls – most of the time is spent waiting, so it’s an ideal candidate for doing calls in parallel inside the same task.

    export const processItems = task({
      id: "process-items",
      run: async (payload: { items: string[] }) => {
        // Process all items in parallel
        const promises = payload.items.map((item) => processItem(item));
        // This works very well for API calls
        await Promise.all(promises);
      },
    });
    

[​](https://trigger.dev/docs/how-to-reduce-your-spend#don%E2%80%99t-needlessly-retry)

Don’t needlessly retry
---------------------------------------------------------------------------------------------------------------

When an error is thrown in a task, your run will be automatically reattempted based on your [retry settings](https://trigger.dev/docs/tasks/overview#retry-options)
. Try setting lower `maxAttempts` for less critical tasks:

    export const apiTask = task({
      id: "api-task",
      retry: {
        maxAttempts: 2, // Don't retry forever
      },
      run: async (payload) => {
        // API calls that might fail
      },
    });
    

This is very useful for intermittent errors, but if there’s a permanent error you don’t want to retry because you will just keep failing and waste compute. Use [AbortTaskRunError](https://trigger.dev/docs/errors-retrying#using-aborttaskrunerror)
 to prevent a retry:

    import { task, AbortTaskRunError } from "@trigger.dev/sdk";
    
    export const someTask = task({
      id: "some-task",
      run: async (payload) => {
        const result = await doSomething(payload);
    
        if (!result.success) {
          // This is a known permanent error, so don't retry
          throw new AbortTaskRunError(result.error);
        }
    
        return result;
      },
    });
    

[​](https://trigger.dev/docs/how-to-reduce-your-spend#use-appropriate-maxduration-settings)

Use appropriate maxDuration settings
-----------------------------------------------------------------------------------------------------------------------------------

Set realistic maxDurations to prevent runs from executing for too long:

    export const boundedTask = task({
      id: "bounded-task",
      maxDuration: 300, // 5 minutes max
      run: async (payload) => {
        // Task will be terminated after 5 minutes
      },
    });
    

[​](https://trigger.dev/docs/how-to-reduce-your-spend#use-waitpoints-instead-of-polling)

Use waitpoints instead of polling
-----------------------------------------------------------------------------------------------------------------------------

Waits longer than 5 seconds automatically checkpoint your task, meaning you don’t pay for compute while waiting. Use `wait.for()`, `wait.until()`, or `triggerAndWait()` instead of polling loops.

    import { task, wait } from "@trigger.dev/sdk";
    
    export const waitpointTask = task({
      id: "waitpoint-task",
      run: async (payload) => {
        // This wait is free - your task is checkpointed
        await wait.for({ minutes: 5 });
    
        // Parent is also checkpointed while waiting for child tasks
        const result = await childTask.triggerAndWait({ data: payload });
        return result;
      },
    });
    

[Read more about waitpoints](https://trigger.dev/docs/wait-for)
.

[​](https://trigger.dev/docs/how-to-reduce-your-spend#use-debounce-to-consolidate-multiple-triggers)

Use debounce to consolidate multiple triggers
-----------------------------------------------------------------------------------------------------------------------------------------------------

When a task might be triggered multiple times in quick succession, use debounce to consolidate them into a single run. This is useful for document indexing, webhook aggregation, cache invalidation, and real-time sync scenarios.

    // Multiple rapid triggers consolidate into 1 run
    await updateIndex.trigger(
      { docId: "doc-123" },
      { debounce: { key: "doc-123", delay: "5s" } }
    );
    
    // Use trailing mode to process the most recent payload
    await processUpdate.trigger(
      { version: 2 },
      { debounce: { key: "update-123", delay: "10s", mode: "trailing" } }
    );
    

[Read more about debounce](https://trigger.dev/docs/triggering#debounce)
.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/database-connections)
[Debugging in VS CodeAttach the VS Code debugger to your Trigger.dev tasks to set breakpoints and step through your code.\
\
Next](https://trigger.dev/docs/troubleshooting-debugging-in-vscode)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
