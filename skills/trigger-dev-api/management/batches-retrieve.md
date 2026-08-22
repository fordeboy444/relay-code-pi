# Retrieve a batch

> Source: https://trigger.dev/docs/management/batches/retrieve

GET

/

api

/

v1

/

batches

/

{batchId}

Fetch

TypeScript

    const response = await fetch("https://api.trigger.dev/api/v1/batches/batch_1234", {
      headers: {
        "Authorization": `Bearer ${process.env.TRIGGER_SECRET_KEY}`,
      },
    });
    const batch = await response.json();

200

401

404

    {
      "id": "<string>",
      "idempotencyKey": "<string>",
      "createdAt": "2023-11-07T05:31:56Z",
      "updatedAt": "2023-11-07T05:31:56Z",
      "runCount": 123,
      "runs": [\
        "<string>"\
      ],
      "successfulRunCount": 123,
      "failedRunCount": 123,
      "errors": [\
        {\
          "index": 123,\
          "taskIdentifier": "<string>",\
          "error": {},\
          "errorCode": "<string>"\
        }\
      ]
    }

#### Authorizations

[​](https://trigger.dev/docs/management/batches/retrieve#authorization-authorization)

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

[​](https://trigger.dev/docs/management/batches/retrieve#parameter-batch-id)

batchId

string

required

The ID of the batch, starts with `batch_`.

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/batches/retrieve#response-id)

id

string

The batch ID.

[​](https://trigger.dev/docs/management/batches/retrieve#response-status)

status

enum<string>

The current status of the batch.

Available options:

`PENDING`,

`PROCESSING`,

`COMPLETED`,

`PARTIAL_FAILED`,

`ABORTED`

[​](https://trigger.dev/docs/management/batches/retrieve#response-idempotency-key-one-of-0)

idempotencyKey

string | null

The idempotency key provided when triggering, if any.

[​](https://trigger.dev/docs/management/batches/retrieve#response-created-at)

createdAt

string<date-time>

[​](https://trigger.dev/docs/management/batches/retrieve#response-updated-at)

updatedAt

string<date-time>

[​](https://trigger.dev/docs/management/batches/retrieve#response-run-count)

runCount

integer

The total number of runs in the batch.

[​](https://trigger.dev/docs/management/batches/retrieve#response-runs)

runs

string\[\]

Array of run IDs in the batch.

[​](https://trigger.dev/docs/management/batches/retrieve#response-successful-run-count-one-of-0)

successfulRunCount

integer | null

Number of successful runs (populated after completion).

[​](https://trigger.dev/docs/management/batches/retrieve#response-failed-run-count-one-of-0)

failedRunCount

integer | null

Number of failed runs (populated after completion).

[​](https://trigger.dev/docs/management/batches/retrieve#response-errors-one-of-0)

errors

object\[\] | null

Error details for failed items (present for PARTIAL\_FAILED batches).

Show child attributes

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/batches/create)
[Retrieve batch resultsReturns the execution results of all completed runs in a batch. Only finished runs (successful or failed) are included in the items array — runs that are still executing are omitted. Returns 404 if the batch doesn't exist.\
\
Next](https://trigger.dev/docs/management/batches/retrieve-results)

⌘I

Fetch

TypeScript

    const response = await fetch("https://api.trigger.dev/api/v1/batches/batch_1234", {
      headers: {
        "Authorization": `Bearer ${process.env.TRIGGER_SECRET_KEY}`,
      },
    });
    const batch = await response.json();

200

401

404

    {
      "id": "<string>",
      "idempotencyKey": "<string>",
      "createdAt": "2023-11-07T05:31:56Z",
      "updatedAt": "2023-11-07T05:31:56Z",
      "runCount": 123,
      "runs": [\
        "<string>"\
      ],
      "successfulRunCount": 123,
      "failedRunCount": 123,
      "errors": [\
        {\
          "index": 123,\
          "taskIdentifier": "<string>",\
          "error": {},\
          "errorCode": "<string>"\
        }\
      ]
    }

Assistant

Responses are generated using AI and may contain mistakes.
