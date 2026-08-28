# Retrieve a waitpoint token

> Source: https://trigger.dev/docs/management/waitpoints/retrieve

GET

/

api

/

v1

/

waitpoints

/

tokens

/

{waitpointId}

TypeScript

TypeScript

    import { wait } from "@trigger.dev/sdk";
    
    const token = await wait.retrieveToken("waitpoint_abc123");
    
    console.log(token.status); // "WAITING" | "COMPLETED" | "TIMED_OUT"
    
    if (token.status === "COMPLETED") {
      console.log(token.output);
    }

200

    {
      "id": "waitpoint_abc123",
      "url": "https://api.trigger.dev/api/v1/waitpoints/tokens/waitpoint_abc123/callback/abc123hash",
      "tags": [\
        "<string>"\
      ],
      "createdAt": "2023-11-07T05:31:56Z",
      "idempotencyKey": "<string>",
      "idempotencyKeyExpiresAt": "2023-11-07T05:31:56Z",
      "timeoutAt": "2023-11-07T05:31:56Z",
      "completedAt": "2023-11-07T05:31:56Z",
      "output": "<string>",
      "outputType": "<string>",
      "outputIsError": true
    }

#### Authorizations

[​](https://trigger.dev/docs/management/waitpoints/retrieve#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";configure({ accessToken: "tr_dev_1234" });

#### Path Parameters

[​](https://trigger.dev/docs/management/waitpoints/retrieve#parameter-waitpoint-id)

waitpointId

string

required

The ID of the waitpoint token.

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/waitpoints/retrieve#response-id)

id

string

required

The unique ID of the waitpoint token.

Example:

`"waitpoint_abc123"`

[​](https://trigger.dev/docs/management/waitpoints/retrieve#response-url)

url

string

required

An HTTP callback URL. A POST request to this URL (with an optional JSON body) will complete the waitpoint without needing an API key.

Example:

`"https://api.trigger.dev/api/v1/waitpoints/tokens/waitpoint_abc123/callback/abc123hash"`

[​](https://trigger.dev/docs/management/waitpoints/retrieve#response-status)

status

enum<string>

required

The current status of the waitpoint token.

Available options:

`WAITING`,

`COMPLETED`,

`TIMED_OUT`

[​](https://trigger.dev/docs/management/waitpoints/retrieve#response-tags)

tags

string\[\]

required

Tags attached to the waitpoint.

[​](https://trigger.dev/docs/management/waitpoints/retrieve#response-created-at)

createdAt

string<date-time>

required

When the waitpoint token was created.

[​](https://trigger.dev/docs/management/waitpoints/retrieve#response-idempotency-key-one-of-0)

idempotencyKey

string | null

The idempotency key used when creating the token, if any.

[​](https://trigger.dev/docs/management/waitpoints/retrieve#response-idempotency-key-expires-at-one-of-0)

idempotencyKeyExpiresAt

string<date-time> | null

When the idempotency key expires.

[​](https://trigger.dev/docs/management/waitpoints/retrieve#response-timeout-at-one-of-0)

timeoutAt

string<date-time> | null

When the token will time out, if a timeout was set.

[​](https://trigger.dev/docs/management/waitpoints/retrieve#response-completed-at-one-of-0)

completedAt

string<date-time> | null

When the token was completed, if it has been completed.

[​](https://trigger.dev/docs/management/waitpoints/retrieve#response-output-one-of-0)

output

string | null

The serialized output data passed when completing the token. Only present when `status` is `COMPLETED`.

[​](https://trigger.dev/docs/management/waitpoints/retrieve#response-output-type-one-of-0)

outputType

string | null

The content type of the output (e.g. `"application/json"`).

[​](https://trigger.dev/docs/management/waitpoints/retrieve#response-output-is-error-one-of-0)

outputIsError

boolean | null

Whether the output represents an error (e.g. a timeout).

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/waitpoints/list)
[Complete a waitpoint tokenCompletes a waitpoint token, unblocking any run that is waiting for it via \`wait.forToken()\`. An optional \`data\` payload can be passed and will be returned to the waiting run. If the token is already completed, this is a no-op and returns \`success: true\`. This endpoint accepts both secret API keys and short-lived JWTs (public access tokens), making it safe to call from frontend clients.\
\
Next](https://trigger.dev/docs/management/waitpoints/complete)

Ctrl+I

TypeScript

TypeScript

    import { wait } from "@trigger.dev/sdk";
    
    const token = await wait.retrieveToken("waitpoint_abc123");
    
    console.log(token.status); // "WAITING" | "COMPLETED" | "TIMED_OUT"
    
    if (token.status === "COMPLETED") {
      console.log(token.output);
    }

200

    {
      "id": "waitpoint_abc123",
      "url": "https://api.trigger.dev/api/v1/waitpoints/tokens/waitpoint_abc123/callback/abc123hash",
      "tags": [\
        "<string>"\
      ],
      "createdAt": "2023-11-07T05:31:56Z",
      "idempotencyKey": "<string>",
      "idempotencyKeyExpiresAt": "2023-11-07T05:31:56Z",
      "timeoutAt": "2023-11-07T05:31:56Z",
      "completedAt": "2023-11-07T05:31:56Z",
      "output": "<string>",
      "outputType": "<string>",
      "outputIsError": true
    }

Assistant

Responses are generated using AI and may contain mistakes.
