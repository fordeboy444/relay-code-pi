# Trigger

> Source: https://trigger.dev/docs/management/tasks/trigger

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

trigger

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
    await myTask.trigger({ message: "Hello, world!" }, {
      idempotencyKey: "unique-key-123",
      concurrencyKey: "user123-task",
      queue: {
        name: "my-task-queue",
        concurrencyLimit: 5
      },
    });

200

400

401

404

    {
      "id": "run_1234"
    }

#### Authorizations

[​](https://trigger.dev/docs/management/tasks/trigger#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";configure({ accessToken: "tr_dev_1234" });

#### Path Parameters

[​](https://trigger.dev/docs/management/tasks/trigger#parameter-task-identifier)

taskIdentifier

string

required

The id of a task

#### Body

application/json

[​](https://trigger.dev/docs/management/tasks/trigger#body-payload)

payload

any

The payload can include any valid JSON

[​](https://trigger.dev/docs/management/tasks/trigger#body-context)

context

any

The context can include any valid JSON

[​](https://trigger.dev/docs/management/tasks/trigger#body-options)

options

object

Show child attributes

#### Response

200

application/json

Task triggered successfully

[​](https://trigger.dev/docs/management/tasks/trigger#response-id)

id

string

The ID of the run that was triggered.

Example:

`"run_1234"`

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/advanced-usage)
[Batch triggerBatch trigger tasks with up to 1,000 payloads with SDK 4.3.1+ (500 in prior versions).\
\
Next](https://trigger.dev/docs/management/tasks/batch-trigger)

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
    await myTask.trigger({ message: "Hello, world!" }, {
      idempotencyKey: "unique-key-123",
      concurrencyKey: "user123-task",
      queue: {
        name: "my-task-queue",
        concurrencyLimit: 5
      },
    });

200

400

401

404

    {
      "id": "run_1234"
    }

Assistant

Responses are generated using AI and may contain mistakes.
