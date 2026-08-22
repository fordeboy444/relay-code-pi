# Retrieve run trace

> Source: https://trigger.dev/docs/management/runs/retrieve-trace

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

trace

TypeScript

TypeScript

    const response = await fetch("https://api.trigger.dev/api/v1/runs/run_1234/trace", {
      headers: {
        Authorization: `Bearer ${process.env.TRIGGER_SECRET_KEY}`,
      },
    });
    
    const { trace } = await response.json();

200

401

404

    {
      "trace": {
        "traceId": "<string>",
        "rootSpan": {
          "id": "<string>",
          "parentId": "<string>",
          "runId": "<string>",
          "data": {
            "message": "<string>",
            "taskSlug": "<string>",
            "startTime": "2023-11-07T05:31:56Z",
            "duration": 123,
            "isError": true,
            "isPartial": true,
            "isCancelled": true,
            "attemptNumber": 123,
            "properties": {},
            "events": [\
              {\
                "name": "<string>",\
                "time": "2023-11-07T05:31:56Z",\
                "properties": {}\
              }\
            ]
          },
          "children": "<array>"
        }
      }
    }

#### Authorizations

[​](https://trigger.dev/docs/management/runs/retrieve-trace#authorization-authorization)

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

[​](https://trigger.dev/docs/management/runs/retrieve-trace#parameter-run-id)

runId

string

required

The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/runs/retrieve-trace#response-trace)

trace

object

Show child attributes

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/runs/retrieve-events)
[Retrieve run resultReturns the execution result of a completed run. Returns 404 if the run doesn't exist or hasn't finished yet.\
\
Next](https://trigger.dev/docs/management/runs/retrieve-result)

⌘I

TypeScript

TypeScript

    const response = await fetch("https://api.trigger.dev/api/v1/runs/run_1234/trace", {
      headers: {
        Authorization: `Bearer ${process.env.TRIGGER_SECRET_KEY}`,
      },
    });
    
    const { trace } = await response.json();

200

401

404

    {
      "trace": {
        "traceId": "<string>",
        "rootSpan": {
          "id": "<string>",
          "parentId": "<string>",
          "runId": "<string>",
          "data": {
            "message": "<string>",
            "taskSlug": "<string>",
            "startTime": "2023-11-07T05:31:56Z",
            "duration": 123,
            "isError": true,
            "isPartial": true,
            "isCancelled": true,
            "attemptNumber": 123,
            "properties": {},
            "events": [\
              {\
                "name": "<string>",\
                "time": "2023-11-07T05:31:56Z",\
                "properties": {}\
              }\
            ]
          },
          "children": "<array>"
        }
      }
    }

Assistant

Responses are generated using AI and may contain mistakes.
