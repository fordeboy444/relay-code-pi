# Retrieve run result

> Source: https://trigger.dev/docs/management/runs/retrieve-result

GET

/

api

/

v1

/

runs

/

{runId}

/

result

Fetch

TypeScript

    const response = await fetch("https://api.trigger.dev/api/v1/runs/run_1234/result", {
      headers: {
        "Authorization": `Bearer ${process.env.TRIGGER_SECRET_KEY}`,
      },
    });
    const result = await response.json();

200

401

404

    {
      "ok": true,
      "id": "<string>",
      "output": "<string>",
      "outputType": "<string>",
      "error": {},
      "usage": {
        "durationMs": 123
      },
      "taskIdentifier": "<string>"
    }

#### Authorizations

[​](https://trigger.dev/docs/management/runs/retrieve-result#authorization-authorization)

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

[​](https://trigger.dev/docs/management/runs/retrieve-result#parameter-run-id)

runId

string

required

The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/runs/retrieve-result#response-ok)

ok

boolean

required

Whether the run completed successfully.

[​](https://trigger.dev/docs/management/runs/retrieve-result#response-id)

id

string

required

The run ID.

[​](https://trigger.dev/docs/management/runs/retrieve-result#response-output)

output

string

The serialized output as a string (present when ok is true). Use outputType to determine how to parse it — for "application/json" use JSON.parse().

[​](https://trigger.dev/docs/management/runs/retrieve-result#response-output-type)

outputType

string

The content type of the serialized output, e.g. "application/json".

[​](https://trigger.dev/docs/management/runs/retrieve-result#response-error)

error

object

Error details (present when ok is false).

[​](https://trigger.dev/docs/management/runs/retrieve-result#response-usage)

usage

object

Execution usage stats.

Show child attributes

[​](https://trigger.dev/docs/management/runs/retrieve-result#response-task-identifier)

taskIdentifier

string

The task identifier.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/runs/retrieve-trace)
[List QueuesList all queues in your environment with pagination support.\
\
Next](https://trigger.dev/docs/management/queues/list)

⌘I

Fetch

TypeScript

    const response = await fetch("https://api.trigger.dev/api/v1/runs/run_1234/result", {
      headers: {
        "Authorization": `Bearer ${process.env.TRIGGER_SECRET_KEY}`,
      },
    });
    const result = await response.json();

200

401

404

    {
      "ok": true,
      "id": "<string>",
      "output": "<string>",
      "outputType": "<string>",
      "error": {},
      "usage": {
        "durationMs": 123
      },
      "taskIdentifier": "<string>"
    }

Assistant

Responses are generated using AI and may contain mistakes.
