# Update metadata

> Source: https://trigger.dev/docs/management/runs/update-metadata

PUT

/

api

/

v1

/

runs

/

{runId}

/

metadata

Save metadata

TypeScript

    import { metadata, task } from "@trigger.dev/sdk";
    
    export const myTask = task({
      id: "my-task",
      run: async () => {
        await metadata.save({ key: "value" });
      }
    });

200

400

401

404

    {
      "metadata": {}
    }

#### Authorizations

[​](https://trigger.dev/docs/management/runs/update-metadata#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";configure({ accessToken: "tr_dev_1234" });

#### Path Parameters

[​](https://trigger.dev/docs/management/runs/update-metadata#parameter-run-id)

runId

string

required

The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.

#### Body

application/json

[​](https://trigger.dev/docs/management/runs/update-metadata#body-metadata)

metadata

object

The new metadata to set on the run.

Example:

    { "key": "value" }

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/runs/update-metadata#response-metadata)

metadata

object

The updated metadata of the run.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/runs/reschedule)
[Add tags to a runAdds one or more tags to a run. Runs can have a maximum of 10 tags. Duplicate tags are ignored.\
\
Next](https://trigger.dev/docs/management/runs/add-tags)

Ctrl+I

Save metadata

TypeScript

    import { metadata, task } from "@trigger.dev/sdk";
    
    export const myTask = task({
      id: "my-task",
      run: async () => {
        await metadata.save({ key: "value" });
      }
    });

200

400

401

404

    {
      "metadata": {}
    }

Assistant

Responses are generated using AI and may contain mistakes.
