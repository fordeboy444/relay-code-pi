# Cancel run

> Source: https://trigger.dev/docs/management/runs/cancel

POST

/

api

/

v2

/

runs

/

{runId}

/

cancel

TypeScript

TypeScript

    import { runs } from "@trigger.dev/sdk";
    
    await runs.cancel("run_1234");

200

400

401

404

    {
      "id": "run_1234"
    }

#### Authorizations

[​](https://trigger.dev/docs/management/runs/cancel#authorization-authorization)

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

[​](https://trigger.dev/docs/management/runs/cancel#parameter-run-id)

runId

string

required

The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/runs/cancel#response-id)

id

string

The ID of the run that was canceled.

Example:

`"run_1234"`

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/runs/replay)
[Reschedule runUpdates a delayed run with a new delay. Only valid when the run is in the DELAYED state.\
\
Next](https://trigger.dev/docs/management/runs/reschedule)

⌘I

TypeScript

TypeScript

    import { runs } from "@trigger.dev/sdk";
    
    await runs.cancel("run_1234");

200

400

401

404

    {
      "id": "run_1234"
    }

Assistant

Responses are generated using AI and may contain mistakes.
