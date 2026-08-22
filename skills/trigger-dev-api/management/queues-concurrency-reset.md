# Reset Concurrency Limit

> Source: https://trigger.dev/docs/management/queues/concurrency-reset

POST

/

api

/

v1

/

queues

/

{queueParam}

/

concurrency

/

reset

TypeScript

TypeScript

    import { queues } from "@trigger.dev/sdk";
    
    // Reset concurrency limit to the base value
    await queues.resetConcurrencyLimit("queue_1234");
    
    // Using type and name
    await queues.resetConcurrencyLimit({
      type: "task",
      name: "my-task-id",
    });

200

    {
      "id": "queue_1234",
      "name": "my-task-id",
      "type": "task",
      "running": 5,
      "queued": 10,
      "paused": false,
      "concurrencyLimit": 10,
      "concurrency": {
        "current": 10,
        "base": 10,
        "override": null,
        "overriddenAt": null,
        "overriddenBy": null
      }
    }

#### Authorizations

[​](https://trigger.dev/docs/management/queues/concurrency-reset#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";
    
    configure({ accessToken: "tr_dev_1234" });
    

#### Path Parameters

[​](https://trigger.dev/docs/management/queues/concurrency-reset#parameter-queue-param)

queueParam

string

required

The queue ID (e.g., `queue_1234`), or the name of the queue when using the `type` body parameter.

#### Body

application/json

[​](https://trigger.dev/docs/management/queues/concurrency-reset#body-type)

type

enum<string>

default:id

How to interpret the `queueParam` path parameter:

*   `id`: Treat as a queue ID (default)
*   `task`: Treat as a task ID to get the task's default queue
*   `custom`: Treat as a custom queue name

Available options:

`id`,

`task`,

`custom`

#### Response

200

application/json

Concurrency limit reset successfully

[​](https://trigger.dev/docs/management/queues/concurrency-reset#response-id)

id

string

required

The queue ID, e.g., `queue_1234`

Example:

`"queue_1234"`

[​](https://trigger.dev/docs/management/queues/concurrency-reset#response-name)

name

string

required

The queue name. For task queues, this is the task ID. For custom queues, this is the name you specified.

Example:

`"my-task-id"`

[​](https://trigger.dev/docs/management/queues/concurrency-reset#response-type)

type

enum<string>

required

The type of queue:

*   `task`: Created automatically for each task
*   `custom`: Created explicitly in your code using `queue()`

Available options:

`task`,

`custom`

Example:

`"task"`

[​](https://trigger.dev/docs/management/queues/concurrency-reset#response-running)

running

integer

required

The number of runs currently executing

Example:

`5`

[​](https://trigger.dev/docs/management/queues/concurrency-reset#response-queued)

queued

integer

required

The number of runs currently queued

Example:

`10`

[​](https://trigger.dev/docs/management/queues/concurrency-reset#response-paused)

paused

boolean

required

Whether the queue is paused. When paused, no new runs will start.

Example:

`false`

[​](https://trigger.dev/docs/management/queues/concurrency-reset#response-concurrency-limit-one-of-0)

concurrencyLimit

integer | null

The current concurrency limit of the queue

Example:

`10`

[​](https://trigger.dev/docs/management/queues/concurrency-reset#response-concurrency)

concurrency

object

Detailed concurrency information

Show child attributes

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/queues/concurrency-override)
[List SchedulesList all schedules. You can also paginate the results.\
\
Next](https://trigger.dev/docs/management/schedules/list)

⌘I

TypeScript

TypeScript

    import { queues } from "@trigger.dev/sdk";
    
    // Reset concurrency limit to the base value
    await queues.resetConcurrencyLimit("queue_1234");
    
    // Using type and name
    await queues.resetConcurrencyLimit({
      type: "task",
      name: "my-task-id",
    });

200

    {
      "id": "queue_1234",
      "name": "my-task-id",
      "type": "task",
      "running": 5,
      "queued": 10,
      "paused": false,
      "concurrencyLimit": 10,
      "concurrency": {
        "current": 10,
        "base": 10,
        "override": null,
        "overriddenAt": null,
        "overriddenBy": null
      }
    }

Assistant

Responses are generated using AI and may contain mistakes.
