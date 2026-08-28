# List waitpoint tokens

> Source: https://trigger.dev/docs/management/waitpoints/list

GET

/

api

/

v1

/

waitpoints

/

tokens

TypeScript

TypeScript

    import { wait } from "@trigger.dev/sdk";
    
    // Iterate over all tokens (auto-paginated)
    for await (const token of wait.listTokens()) {
      console.log(token.id, token.status);
    }
    
    // Filter by status and tags
    for await (const token of wait.listTokens({
      status: ["WAITING"],
      tags: ["user:1234567"],
    })) {
      console.log(token.id);
    }

200

    {
      "data": [\
        {\
          "id": "waitpoint_abc123",\
          "url": "https://api.trigger.dev/api/v1/waitpoints/tokens/waitpoint_abc123/callback/abc123hash",\
          "tags": [\
            "<string>"\
          ],\
          "createdAt": "2023-11-07T05:31:56Z",\
          "idempotencyKey": "<string>",\
          "idempotencyKeyExpiresAt": "2023-11-07T05:31:56Z",\
          "timeoutAt": "2023-11-07T05:31:56Z",\
          "completedAt": "2023-11-07T05:31:56Z",\
          "output": "<string>",\
          "outputType": "<string>",\
          "outputIsError": true\
        }\
      ],
      "pagination": {
        "next": "waitpoint_abc123",
        "previous": "waitpoint_xyz789"
      }
    }

#### Authorizations

[​](https://trigger.dev/docs/management/waitpoints/list#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";configure({ accessToken: "tr_dev_1234" });

#### Query Parameters

[​](https://trigger.dev/docs/management/waitpoints/list#parameter-page-size)

page\[size\]

integer

Number of tokens to return per page (1–100).

Required range: `1 <= x <= 100`

[​](https://trigger.dev/docs/management/waitpoints/list#parameter-page-after)

page\[after\]

string

Return tokens after this cursor (from `pagination.next` in a previous response).

[​](https://trigger.dev/docs/management/waitpoints/list#parameter-page-before)

page\[before\]

string

Return tokens before this cursor (from `pagination.previous` in a previous response).

[​](https://trigger.dev/docs/management/waitpoints/list#parameter-filter-status)

filter\[status\]

string

Comma-separated list of statuses to filter by. Allowed values: `WAITING`, `COMPLETED`, `TIMED_OUT`.

[​](https://trigger.dev/docs/management/waitpoints/list#parameter-filter-idempotency-key)

filter\[idempotencyKey\]

string

Filter by idempotency key.

[​](https://trigger.dev/docs/management/waitpoints/list#parameter-filter-tags)

filter\[tags\]

string

Comma-separated list of tags to filter by.

[​](https://trigger.dev/docs/management/waitpoints/list#parameter-filter-created-at-period)

filter\[createdAt\]\[period\]

string

Shorthand time period to filter by creation date (e.g. `1h`, `24h`, `7d`). Cannot be combined with `filter[createdAt][from]` or `filter[createdAt][to]`.

[​](https://trigger.dev/docs/management/waitpoints/list#parameter-filter-created-at-from)

filter\[createdAt\]\[from\]

string<date-time>

Filter tokens created at or after this ISO 8601 timestamp.

[​](https://trigger.dev/docs/management/waitpoints/list#parameter-filter-created-at-to)

filter\[createdAt\]\[to\]

string<date-time>

Filter tokens created at or before this ISO 8601 timestamp.

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/waitpoints/list#response-data)

data

object\[\]

required

An array of waitpoint token objects.

Show child attributes

[​](https://trigger.dev/docs/management/waitpoints/list#response-pagination)

pagination

object

required

Show child attributes

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/waitpoints/create)
[Retrieve a waitpoint tokenRetrieves a waitpoint token by its ID, including its current status and output if it has been completed.\
\
Next](https://trigger.dev/docs/management/waitpoints/retrieve)

Ctrl+I

TypeScript

TypeScript

    import { wait } from "@trigger.dev/sdk";
    
    // Iterate over all tokens (auto-paginated)
    for await (const token of wait.listTokens()) {
      console.log(token.id, token.status);
    }
    
    // Filter by status and tags
    for await (const token of wait.listTokens({
      status: ["WAITING"],
      tags: ["user:1234567"],
    })) {
      console.log(token.id);
    }

200

    {
      "data": [\
        {\
          "id": "waitpoint_abc123",\
          "url": "https://api.trigger.dev/api/v1/waitpoints/tokens/waitpoint_abc123/callback/abc123hash",\
          "tags": [\
            "<string>"\
          ],\
          "createdAt": "2023-11-07T05:31:56Z",\
          "idempotencyKey": "<string>",\
          "idempotencyKeyExpiresAt": "2023-11-07T05:31:56Z",\
          "timeoutAt": "2023-11-07T05:31:56Z",\
          "completedAt": "2023-11-07T05:31:56Z",\
          "output": "<string>",\
          "outputType": "<string>",\
          "outputIsError": true\
        }\
      ],
      "pagination": {
        "next": "waitpoint_abc123",
        "previous": "waitpoint_xyz789"
      }
    }

Assistant

Responses are generated using AI and may contain mistakes.
