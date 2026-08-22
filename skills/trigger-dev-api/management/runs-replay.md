# Replay run

> Source: https://trigger.dev/docs/management/runs/replay

POST

/

api

/

v1

/

runs

/

{runId}

/

replay

TypeScript

TypeScript

    import { runs } from "@trigger.dev/sdk";
    
    const handle = await runs.replay("run_1234");

200

400

401

404

    {
      "id": "<string>"
    }

#### Authorizations

[​](https://trigger.dev/docs/management/runs/replay#authorization-authorization)

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

[​](https://trigger.dev/docs/management/runs/replay#parameter-run-id)

runId

string

required

The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/runs/replay#response-id)

id

string

The ID of the new run.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/runs/retrieve)
[Cancel runCancels an in-progress run. If the run is already completed, this will have no effect.\
\
Next](https://trigger.dev/docs/management/runs/cancel)

⌘I

TypeScript

TypeScript

    import { runs } from "@trigger.dev/sdk";
    
    const handle = await runs.replay("run_1234");

200

400

401

404

    {
      "id": "<string>"
    }

Assistant

Responses are generated using AI and may contain mistakes.
