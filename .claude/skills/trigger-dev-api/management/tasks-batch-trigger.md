# Batch trigger

> Source: https://trigger.dev/docs/management/tasks/batch-trigger

POST

/

api

/

v1

/

tasks

/

batch

TypeScript

TypeScript

    import { task } from "@trigger.dev/sdk";
    
    export const myTask = await task({
      id: "my-task",
      run: async (payload: { message: string }) => {
        console.log("Hello, world!");
      }
    });
    
    // Somewhere else in your code
    await myTask.batchTrigger([\
      {\
        payload: { message: "Hello, world!" },\
        options: {\
          idempotencyKey: "unique-key-123",\
          concurrencyKey: "user-123-task",\
          queue: {\
            name: "my-task-queue",\
            concurrencyLimit: 5\
          }\
        }\
      }\
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

[​](https://trigger.dev/docs/management/tasks/batch-trigger#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";configure({ accessToken: "tr_dev_1234" });

#### Body

application/json

[​](https://trigger.dev/docs/management/tasks/batch-trigger#body-items)

items

object\[\]

required

An array of payloads to trigger the task with

Show child attributes

#### Response

200

application/json

Task batch triggered successfully

[​](https://trigger.dev/docs/management/tasks/batch-trigger#response-batch-id)

batchId

string

required

The ID of the batch that was triggered

Example:

`"batch_1234"`

[​](https://trigger.dev/docs/management/tasks/batch-trigger#response-runs)

runs

string\[\]

required

An array of run IDs that were triggered

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/tasks/trigger)
[Trigger task batchBatch trigger a specific task with up to 1,000 payloads. All items in the batch run the same task.\
\
Next](https://trigger.dev/docs/management/tasks/trigger-batch)

Ctrl+I

TypeScript

TypeScript

    import { task } from "@trigger.dev/sdk";
    
    export const myTask = await task({
      id: "my-task",
      run: async (payload: { message: string }) => {
        console.log("Hello, world!");
      }
    });
    
    // Somewhere else in your code
    await myTask.batchTrigger([\
      {\
        payload: { message: "Hello, world!" },\
        options: {\
          idempotencyKey: "unique-key-123",\
          concurrencyKey: "user-123-task",\
          queue: {\
            name: "my-task-queue",\
            concurrencyLimit: 5\
          }\
        }\
      }\
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
