# Create batch

> Source: https://trigger.dev/docs/management/batches/create

POST

/

api

/

v3

/

batches

Create a batch (Phase 1)

cURL

    curl --request POST \
      --url https://api.trigger.dev/api/v3/batches \
      --header 'Authorization: Bearer <token>' \
      --header 'Content-Type: application/json' \
      --data '
    {
      "runCount": 2,
      "parentRunId": "<string>",
      "resumeParentOnCompletion": true,
      "idempotencyKey": "<string>"
    }
    '

202

400

422

429

500

    {
      "id": "<string>",
      "runCount": 123,
      "isCached": true,
      "idempotencyKey": "<string>"
    }

#### Authorizations

[​](https://trigger.dev/docs/management/batches/create#authorization-authorization)

Authorization

string

header

required

Bearer authentication header of the form `Bearer <token>`, where `<token>` is your auth token.

#### Body

application/json

[​](https://trigger.dev/docs/management/batches/create#body-run-count)

runCount

integer

required

Expected number of items in the batch. Must be a positive integer.

Required range: `x >= 1`

[​](https://trigger.dev/docs/management/batches/create#body-parent-run-id)

parentRunId

string

Parent run ID (friendly ID) for batchTriggerAndWait.

[​](https://trigger.dev/docs/management/batches/create#body-resume-parent-on-completion)

resumeParentOnCompletion

boolean

Whether to resume parent on completion. Set to true for batchTriggerAndWait.

[​](https://trigger.dev/docs/management/batches/create#body-idempotency-key)

idempotencyKey

string

Idempotency key for the batch. If provided and a batch with this key already exists, the existing batch will be returned.

#### Response

202

application/json

Batch successfully created

[​](https://trigger.dev/docs/management/batches/create#response-id)

id

string

required

The batch ID (friendly ID). Use this to stream items via POST /api/v3/batches/{batchId}/items.

[​](https://trigger.dev/docs/management/batches/create#response-run-count)

runCount

integer

required

The expected run count.

[​](https://trigger.dev/docs/management/batches/create#response-is-cached)

isCached

boolean

required

Whether this response came from a cached/idempotent batch.

[​](https://trigger.dev/docs/management/batches/create#response-idempotency-key)

idempotencyKey

string

The idempotency key if provided.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/tasks/trigger-batch)
[Retrieve a batchRetrieve a batch by its ID, including its status and the IDs of all runs in the batch.\
\
Next](https://trigger.dev/docs/management/batches/retrieve)

⌘I

Create a batch (Phase 1)

cURL

    curl --request POST \
      --url https://api.trigger.dev/api/v3/batches \
      --header 'Authorization: Bearer <token>' \
      --header 'Content-Type: application/json' \
      --data '
    {
      "runCount": 2,
      "parentRunId": "<string>",
      "resumeParentOnCompletion": true,
      "idempotencyKey": "<string>"
    }
    '

202

400

422

429

500

    {
      "id": "<string>",
      "runCount": 123,
      "isCached": true,
      "idempotencyKey": "<string>"
    }

Assistant

Responses are generated using AI and may contain mistakes.
