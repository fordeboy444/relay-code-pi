# Retrieve run events

> Source: https://trigger.dev/docs/management/runs/retrieve-events

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

events

TypeScript

TypeScript

    const response = await fetch("https://api.trigger.dev/api/v1/runs/run_1234/events", {
      headers: {
        Authorization: `Bearer ${process.env.TRIGGER_SECRET_KEY}`,
      },
    });
    
    const { events } = await response.json();

200

401

404

    {
      "events": [\
        {\
          "spanId": "<string>",\
          "parentId": "<string>",\
          "runId": "<string>",\
          "message": "<string>",\
          "startTime": "<string>",\
          "duration": 123,\
          "isError": true,\
          "isPartial": true,\
          "isCancelled": true,\
          "attemptNumber": 123,\
          "taskSlug": "<string>",\
          "events": [\
            {\
              "name": "<string>",\
              "time": "2023-11-07T05:31:56Z",\
              "properties": {}\
            }\
          ],\
          "style": {\
            "icon": "<string>",\
            "variant": "<string>",\
            "accessory": {\
              "text": "<string>",\
              "style": "codepath"\
            }\
          }\
        }\
      ]
    }

#### Authorizations

[​](https://trigger.dev/docs/management/runs/retrieve-events#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";configure({ accessToken: "tr_dev_1234" });

#### Path Parameters

[​](https://trigger.dev/docs/management/runs/retrieve-events#parameter-run-id)

runId

string

required

The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/runs/retrieve-events#response-events)

events

object\[\]

Show child attributes

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/runs/add-tags)
[Retrieve run traceReturns the full OTel trace tree for a run, including all spans and their children.\
\
Next](https://trigger.dev/docs/management/runs/retrieve-trace)

Ctrl+I

TypeScript

TypeScript

    const response = await fetch("https://api.trigger.dev/api/v1/runs/run_1234/events", {
      headers: {
        Authorization: `Bearer ${process.env.TRIGGER_SECRET_KEY}`,
      },
    });
    
    const { events } = await response.json();

200

401

404

    {
      "events": [\
        {\
          "spanId": "<string>",\
          "parentId": "<string>",\
          "runId": "<string>",\
          "message": "<string>",\
          "startTime": "<string>",\
          "duration": 123,\
          "isError": true,\
          "isPartial": true,\
          "isCancelled": true,\
          "attemptNumber": 123,\
          "taskSlug": "<string>",\
          "events": [\
            {\
              "name": "<string>",\
              "time": "2023-11-07T05:31:56Z",\
              "properties": {}\
            }\
          ],\
          "style": {\
            "icon": "<string>",\
            "variant": "<string>",\
            "accessory": {\
              "text": "<string>",\
              "style": "codepath"\
            }\
          }\
        }\
      ]
    }

Assistant

Responses are generated using AI and may contain mistakes.
