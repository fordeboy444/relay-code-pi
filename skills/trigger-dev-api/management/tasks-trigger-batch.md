# Trigger task batch

> Source: https://trigger.dev/docs/management/tasks/trigger-batch

POST

/

api

/

v1

/

tasks

/

{taskIdentifier}

/

batch

TypeScript

TypeScript

    import { task } from "@trigger.dev/sdk";
    
    export const myTask = task({
      id: "my-task",
      run: async (payload: { message: string }) => {
        console.log("Hello, world!");
      }
    });
    
    // Somewhere else in your code
    await myTask.batchTrigger([\
      { payload: { message: "Hello, world!" } },\
      { payload: { message: "Hello again!" } },\
    ]);

200

400

401

404

    {
      "batchId": "batch_1234",
      "runs": [\
        "<string>"\
      ]
    }

#### Authorizations

[​](https://trigger.dev/docs/management/tasks/trigger-batch#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";configure({ accessToken: "tr_dev_1234" });

#### Path Parameters

[​](https://trigger.dev/docs/management/tasks/trigger-batch#parameter-task-identifier)

taskIdentifier

string

required

The id of a task

#### Body

application/json

[​](https://trigger.dev/docs/management/tasks/trigger-batch#body-items)

items

object\[\]

required

An array of payloads to trigger the task with (max 1,000 items).

Maximum array length: `1000`

Show child attributes

#### Response

200

application/json

Batch triggered successfully

[​](https://trigger.dev/docs/management/tasks/trigger-batch#response-batch-id)

batchId

string

required

The ID of the batch that was triggered

Example:

`"batch_1234"`

[​](https://trigger.dev/docs/management/tasks/trigger-batch#response-runs)

runs

string\[\]

required

An array of run IDs that were triggered

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/tasks/batch-trigger)
[Create batchPhase 1 of 2-phase batch API. Creates a batch record and optionally blocks the parent run for batchTriggerAndWait. After creating a batch, stream items via POST /api/v3/batches/{batchId}/items.\
\
Next](https://trigger.dev/docs/management/batches/create)

Ctrl+I

TypeScript

TypeScript

    import { task } from "@trigger.dev/sdk";
    
    export const myTask = task({
      id: "my-task",
      run: async (payload: { message: string }) => {
        console.log("Hello, world!");
      }
    });
    
    // Somewhere else in your code
    await myTask.batchTrigger([\
      { payload: { message: "Hello, world!" } },\
      { payload: { message: "Hello again!" } },\
    ]);

200

400

401

404

    {
      "batchId": "batch_1234",
      "runs": [\
        "<string>"\
      ]
    }

Assistant

Responses are generated using AI and may contain mistakes.
