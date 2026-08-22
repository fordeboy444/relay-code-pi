# The run object

> Source: https://trigger.dev/docs/realtime/run-object

The [run object](https://trigger.dev/docs/realtime/run-object#the-run-object)
 is the main object returned by Realtime subscriptions (e.g., `runs.subscribeToRun()`). It contains all the information about the run, including the run ID, task identifier, payload, output, and more. Type-safety is supported for the run object, so you can infer the types of the run’s payload and output. See [type-safety](https://trigger.dev/docs/realtime/run-object#type-safety)
 for more information.

[​](https://trigger.dev/docs/realtime/run-object#the-run-object)

The run object
----------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/realtime/run-object#properties)

Properties

[​](https://trigger.dev/docs/realtime/run-object#param-id)

id

string

required

The run ID.

[​](https://trigger.dev/docs/realtime/run-object#param-task-identifier)

taskIdentifier

string

required

The task identifier.

[​](https://trigger.dev/docs/realtime/run-object#param-payload)

payload

object

required

The input payload for the run.

[​](https://trigger.dev/docs/realtime/run-object#param-output)

output

object

The output result of the run.

[​](https://trigger.dev/docs/realtime/run-object#param-created-at)

createdAt

Date

required

Timestamp when the run was created.

[​](https://trigger.dev/docs/realtime/run-object#param-updated-at)

updatedAt

Date

required

Timestamp when the run was last updated.

[​](https://trigger.dev/docs/realtime/run-object#param-number)

number

number

required

Sequential number assigned to the run.

[​](https://trigger.dev/docs/realtime/run-object#param-status)

status

RunStatus

required

Current status of the run.

RunStatus enum

| Status | Description |
| --- | --- |
| `WAITING_FOR_DEPLOY` | Task hasn’t been deployed yet but is waiting to be executed |
| `QUEUED` | Run is waiting to be executed by a worker |
| `EXECUTING` | Run is currently being executed by a worker |
| `REATTEMPTING` | Run has failed and is waiting to be retried |
| `FROZEN` | Run has been paused by the system, and will be resumed by the system |
| `COMPLETED` | Run has been completed successfully |
| `CANCELED` | Run has been canceled by the user |
| `FAILED` | Run has been completed with errors |
| `CRASHED` | Run has crashed and won’t be retried, most likely the worker ran out of resources, e.g. memory or storage |
| `INTERRUPTED` | Run was interrupted during execution, mostly this happens in development environments |
| `SYSTEM_FAILURE` | Run has failed to complete, due to an error in the system |
| `DELAYED` | Run has been scheduled to run at a specific time |
| `EXPIRED` | Run has expired and won’t be executed |
| `TIMED_OUT` | Run has reached it’s maxDuration and has been stopped |

[​](https://trigger.dev/docs/realtime/run-object#param-duration-ms)

durationMs

number

required

Duration of the run in milliseconds.

[​](https://trigger.dev/docs/realtime/run-object#param-cost-in-cents)

costInCents

number

required

Total cost of the run in cents.

[​](https://trigger.dev/docs/realtime/run-object#param-base-cost-in-cents)

baseCostInCents

number

required

Base cost of the run in cents before any additional charges.

[​](https://trigger.dev/docs/realtime/run-object#param-tags)

tags

string\[\]

required

Array of tags associated with the run.

[​](https://trigger.dev/docs/realtime/run-object#param-idempotency-key)

idempotencyKey

string

Key used to ensure idempotent execution.

[​](https://trigger.dev/docs/realtime/run-object#param-expired-at)

expiredAt

Date

Timestamp when the run expired.

[​](https://trigger.dev/docs/realtime/run-object#param-ttl)

ttl

string

Time-to-live duration for the run.

[​](https://trigger.dev/docs/realtime/run-object#param-finished-at)

finishedAt

Date

Timestamp when the run finished.

[​](https://trigger.dev/docs/realtime/run-object#param-started-at)

startedAt

Date

Timestamp when the run started.

[​](https://trigger.dev/docs/realtime/run-object#param-delayed-until)

delayedUntil

Date

Timestamp until which the run is delayed.

[​](https://trigger.dev/docs/realtime/run-object#param-queued-at)

queuedAt

Date

Timestamp when the run was queued.

[​](https://trigger.dev/docs/realtime/run-object#param-metadata)

metadata

Record<string, DeserializedJson>

Additional metadata associated with the run.

[​](https://trigger.dev/docs/realtime/run-object#param-error)

error

SerializedError

Error information if the run failed.

[​](https://trigger.dev/docs/realtime/run-object#param-is-test)

isTest

boolean

required

Indicates whether this is a test run.

[​](https://trigger.dev/docs/realtime/run-object#type-safety)

Type-safety
----------------------------------------------------------------------------

You can infer the types of the run’s payload and output by passing the type of the task to the `subscribeToRun` function. This will give you type-safe access to the run’s payload and output.

    import { runs, tasks } from "@trigger.dev/sdk";
    import type { myTask } from "./trigger/my-task";
    
    // Somewhere in your backend code
    async function myBackend() {
      const handle = await tasks.trigger("my-task", { some: "data" });
    
      for await (const run of runs.subscribeToRun<typeof myTask>(handle.id)) {
        // This will log the run every time it changes
        console.log(run.payload.some);
    
        if (run.output) {
          // This will log the output if it exists
          console.log(run.output.some);
        }
      }
    }
    

When using `subscribeToRunsWithTag`, you can pass a union of task types for all the possible tasks that can have the tag.

    import { runs } from "@trigger.dev/sdk";
    import type { myTask, myOtherTask } from "./trigger/my-task";
    
    // Somewhere in your backend code
    for await (const run of runs.subscribeToRunsWithTag<typeof myTask | typeof myOtherTask>("my-tag")) {
      // You can narrow down the type based on the taskIdentifier
      switch (run.taskIdentifier) {
        case "my-task": {
          console.log("Run output:", run.output.foo); // This will be type-safe
          break;
        }
        case "my-other-task": {
          console.log("Run output:", run.output.bar); // This will be type-safe
          break;
        }
      }
    }
    

This works with all realtime subscription functions:

*   `runs.subscribeToRun<TaskType>()`
*   `runs.subscribeToRunsWithTag<TaskType>()`
*   `runs.subscribeToBatch<TaskType>()`

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/realtime/how-it-works)
[Realtime authAuthenticating real-time API requests with Public Access Tokens or Trigger Tokens\
\
Next](https://trigger.dev/docs/realtime/auth)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
