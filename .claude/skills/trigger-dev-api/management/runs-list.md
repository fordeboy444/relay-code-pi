# List runs

> Source: https://trigger.dev/docs/management/runs/list

GET

/

api

/

v1

/

runs

TypeScript

List runs

import { runs } from "@trigger.dev/sdk"; // Get the first page of runs let page = await runs.list({ limit: 20 }); for (const run of page.data) { console.log(\`Run ID: ${run.id}, Status: ${run.status}\`); } // Convenience methods are provided for manually paginating: while (page.hasNextPage()) { page = await page.getNextPage(); // Do something with the next page of runs } // Auto-paginate through all runs const allRuns = \[\]; for await (const run of runs.list({ limit: 20 })) { allRuns.push(run); }

200

400

    {
      "data": [\
        {\
          "id": "run_1234",\
          "taskIdentifier": "my-task",\
          "env": {\
            "id": "cl1234",\
            "name": "dev",\
            "user": "Anna"\
          },\
          "isTest": false,\
          "createdAt": "2023-11-07T05:31:56Z",\
          "updatedAt": "2023-11-07T05:31:56Z",\
          "version": 20240523.1,\
          "idempotencyKey": "idempotency_key_1234",\
          "startedAt": "2023-11-07T05:31:56Z",\
          "finishedAt": "2023-11-07T05:31:56Z",\
          "delayedUntil": "2023-11-07T05:31:56Z",\
          "ttl": "1h42m",\
          "expiredAt": "2023-11-07T05:31:56Z",\
          "tags": [\
            "user_5df987al13",\
            "org_c6b7dycmxw"\
          ],\
          "costInCents": 0.00292,\
          "baseCostInCents": 0.0025,\
          "durationMs": 491\
        }\
      ],
      "pagination": {
        "next": "run_1234",
        "previous": "run_5678"
      }
    }

#### Authorizations

[​](https://trigger.dev/docs/management/runs/list#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";
    
    configure({ accessToken: "tr_dev_1234" });
    

#### Query Parameters

[​](https://trigger.dev/docs/management/runs/list#parameter-page)

page

object

Use this parameter to paginate the results. You can specify the number of runs per page, and the ID of the run to start the page after or before.

For object fields like `page`, you should use the "form" encoding style. For example, to get the next page of runs, you can use `page[after]=run_1234`.

Show child attributes

[​](https://trigger.dev/docs/management/runs/list#parameter-filter)

filter

object

Use this parameter to filter the runs. You can filter by created at, status, task identifier, and version.

For array fields, you can provide multiple values to filter by using a comma-separated list. For example, to get QUEUED and EXECUTING runs, you can use `filter[status]=QUEUED,EXECUTING`.

For object fields, you should use the "form" encoding style. For example, to filter by the period, you can use `filter[createdAt][period]=1d`.

Show child attributes

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/runs/list#response-data)

data

object\[\]

Show child attributes

[​](https://trigger.dev/docs/management/runs/list#response-pagination)

pagination

object

Show child attributes

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/batches/stream-items)
[Retrieve runRetrieve information about a run, including its status, payload, output, and attempts. If you authenticate with a Public API key, we will omit the payload and output fields for security reasons.\
\
Next](https://trigger.dev/docs/management/runs/retrieve)

⌘I

TypeScript

List runs

import { runs } from "@trigger.dev/sdk"; // Get the first page of runs let page = await runs.list({ limit: 20 }); for (const run of page.data) { console.log(\`Run ID: ${run.id}, Status: ${run.status}\`); } // Convenience methods are provided for manually paginating: while (page.hasNextPage()) { page = await page.getNextPage(); // Do something with the next page of runs } // Auto-paginate through all runs const allRuns = \[\]; for await (const run of runs.list({ limit: 20 })) { allRuns.push(run); }

200

400

    {
      "data": [\
        {\
          "id": "run_1234",\
          "taskIdentifier": "my-task",\
          "env": {\
            "id": "cl1234",\
            "name": "dev",\
            "user": "Anna"\
          },\
          "isTest": false,\
          "createdAt": "2023-11-07T05:31:56Z",\
          "updatedAt": "2023-11-07T05:31:56Z",\
          "version": 20240523.1,\
          "idempotencyKey": "idempotency_key_1234",\
          "startedAt": "2023-11-07T05:31:56Z",\
          "finishedAt": "2023-11-07T05:31:56Z",\
          "delayedUntil": "2023-11-07T05:31:56Z",\
          "ttl": "1h42m",\
          "expiredAt": "2023-11-07T05:31:56Z",\
          "tags": [\
            "user_5df987al13",\
            "org_c6b7dycmxw"\
          ],\
          "costInCents": 0.00292,\
          "baseCostInCents": 0.0025,\
          "durationMs": 491\
        }\
      ],
      "pagination": {
        "next": "run_1234",
        "previous": "run_5678"
      }
    }

Assistant

Responses are generated using AI and may contain mistakes.
