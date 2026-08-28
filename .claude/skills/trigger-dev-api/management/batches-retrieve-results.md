# Retrieve batch results

> Source: https://trigger.dev/docs/management/batches/retrieve-results

GET

/

api

/

v1

/

batches

/

{batchId}

/

results

Fetch

TypeScript

    const response = await fetch("https://api.trigger.dev/api/v1/batches/batch_1234/results", {
      headers: {
        "Authorization": `Bearer ${process.env.TRIGGER_SECRET_KEY}`,
      },
    });
    const results = await response.json();

200

401

404

    {
      "id": "<string>",
      "items": [\
        {\
          "ok": true,\
          "id": "<string>",\
          "output": "<string>",\
          "outputType": "<string>",\
          "error": {},\
          "usage": {\
            "durationMs": 123\
          },\
          "taskIdentifier": "<string>"\
        }\
      ]
    }

#### Authorizations

[​](https://trigger.dev/docs/management/batches/retrieve-results#authorization-authorization)

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

[​](https://trigger.dev/docs/management/batches/retrieve-results#parameter-batch-id)

batchId

string

required

The ID of the batch, starts with `batch_`.

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/batches/retrieve-results#response-id)

id

string

The batch ID.

[​](https://trigger.dev/docs/management/batches/retrieve-results#response-items)

items

object\[\]

Execution results for each run in the batch.

Show child attributes

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/batches/retrieve)
[Stream batch itemsPhase 2 of 2-phase batch API. Accepts an NDJSON stream of batch items and enqueues them. Each line in the body should be a valid BatchItemNDJSON object. The stream is processed with backpressure - items are enqueued as they arrive. The batch is sealed when the stream completes successfully.\
\
Next](https://trigger.dev/docs/management/batches/stream-items)

⌘I

Fetch

TypeScript

    const response = await fetch("https://api.trigger.dev/api/v1/batches/batch_1234/results", {
      headers: {
        "Authorization": `Bearer ${process.env.TRIGGER_SECRET_KEY}`,
      },
    });
    const results = await response.json();

200

401

404

    {
      "id": "<string>",
      "items": [\
        {\
          "ok": true,\
          "id": "<string>",\
          "output": "<string>",\
          "outputType": "<string>",\
          "error": {},\
          "usage": {\
            "durationMs": 123\
          },\
          "taskIdentifier": "<string>"\
        }\
      ]
    }

Assistant

Responses are generated using AI and may contain mistakes.
