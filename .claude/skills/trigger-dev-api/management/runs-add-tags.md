# Add tags to a run

> Source: https://trigger.dev/docs/management/runs/add-tags

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

tags

TypeScript

SDK

import { runs } from "@trigger.dev/sdk"; await runs.addTags("run\_1234", \["tag-1", "tag-2"\]);

200

400

401

422

    {
      "message": "Successfully set 2 new tags."
    }

#### Authorizations

[​](https://trigger.dev/docs/management/runs/add-tags#authorization-authorization)

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

[​](https://trigger.dev/docs/management/runs/add-tags#parameter-run-id)

runId

string

required

The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.

#### Body

application/json

[​](https://trigger.dev/docs/management/runs/add-tags#body-tags-one-of-0)

tags

stringstring\[\]stringstring\[\]

required

One or more tags to attach to a run. Runs can have a maximum of 10 tags.

Maximum string length: `128`

Example:

`"user_123456"`

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/runs/add-tags#response-message)

message

string

Example:

`"Successfully set 2 new tags."`

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/runs/update-metadata)
[Retrieve run eventsReturns all OTel span events for a run. Useful for debugging and observability.\
\
Next](https://trigger.dev/docs/management/runs/retrieve-events)

⌘I

TypeScript

SDK

import { runs } from "@trigger.dev/sdk"; await runs.addTags("run\_1234", \["tag-1", "tag-2"\]);

200

400

401

422

    {
      "message": "Successfully set 2 new tags."
    }

Assistant

Responses are generated using AI and may contain mistakes.
