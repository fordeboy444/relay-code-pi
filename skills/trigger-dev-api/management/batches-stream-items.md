# Stream batch items

> Source: https://trigger.dev/docs/management/batches/stream-items

POST

/

api

/

v3

/

batches

/

{batchId}

/

items

Stream batch items (Phase 2)

cURL

    curl --request POST \
      --url https://api.trigger.dev/api/v3/batches/{batchId}/items \
      --header 'Authorization: Bearer <token>' \
      --header 'Content-Type: application/x-ndjson' \
      --data '"<string>"'

200

400

401

415

422

500

    {
      "id": "<string>",
      "itemsAccepted": 123,
      "itemsDeduplicated": 123,
      "sealed": true,
      "enqueuedCount": 123,
      "expectedCount": 123
    }

#### Authorizations

[​](https://trigger.dev/docs/management/batches/stream-items#authorization-authorization)

Authorization

string

header

required

Bearer authentication header of the form `Bearer <token>`, where `<token>` is your auth token.

#### Path Parameters

[​](https://trigger.dev/docs/management/batches/stream-items#parameter-batch-id)

batchId

string

required

The batch ID returned from POST /api/v3/batches

#### Body

application/x-ndjsonapplication/ndjsonapplication/x-ndjsonapplication/ndjson

NDJSON (newline-delimited JSON) stream where each line is a BatchItemNDJSON object. Example: {"index":0,"task":"my-task","payload":{"key":"value1"}} {"index":1,"task":"my-task","payload":{"key":"value2"}}

#### Response

200

application/json

Items successfully processed

[​](https://trigger.dev/docs/management/batches/stream-items#response-id)

id

string

required

The batch ID.

[​](https://trigger.dev/docs/management/batches/stream-items#response-items-accepted)

itemsAccepted

integer

required

Number of items successfully accepted.

[​](https://trigger.dev/docs/management/batches/stream-items#response-items-deduplicated)

itemsDeduplicated

integer

required

Number of items that were deduplicated (already enqueued).

[​](https://trigger.dev/docs/management/batches/stream-items#response-sealed)

sealed

boolean

required

Whether the batch was sealed and is ready for processing. If false, the batch needs more items before processing can start. Clients should check this field and retry with missing items if needed.

[​](https://trigger.dev/docs/management/batches/stream-items#response-enqueued-count)

enqueuedCount

integer

Total items currently enqueued. Only present when sealed=false to help with retries.

[​](https://trigger.dev/docs/management/batches/stream-items#response-expected-count)

expectedCount

integer

Expected total item count. Only present when sealed=false to help with retries.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/batches/retrieve-results)
[List runsList runs in a specific environment. You can filter the runs by status, created at, task identifier, version, and more.\
\
Next](https://trigger.dev/docs/management/runs/list)

⌘I

Stream batch items (Phase 2)

cURL

    curl --request POST \
      --url https://api.trigger.dev/api/v3/batches/{batchId}/items \
      --header 'Authorization: Bearer <token>' \
      --header 'Content-Type: application/x-ndjson' \
      --data '"<string>"'

200

400

401

415

422

500

    {
      "id": "<string>",
      "itemsAccepted": 123,
      "itemsDeduplicated": 123,
      "sealed": true,
      "enqueuedCount": 123,
      "expectedCount": 123
    }

Assistant

Responses are generated using AI and may contain mistakes.
