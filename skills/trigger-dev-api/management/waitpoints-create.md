# Create a waitpoint token

> Source: https://trigger.dev/docs/management/waitpoints/create

POST

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
    
    const token = await wait.createToken({
      timeout: "1h",
      tags: ["user:1234567"],
    });
    
    console.log(token.id);  // e.g. "waitpoint_abc123"
    console.log(token.url); // HTTP callback URL to complete externally

200

    {
      "id": "waitpoint_abc123",
      "isCached": true,
      "url": "https://api.trigger.dev/api/v1/waitpoints/tokens/waitpoint_abc123/callback/abc123hash"
    }

#### Authorizations

[​](https://trigger.dev/docs/management/waitpoints/create#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";configure({ accessToken: "tr_dev_1234" });

#### Body

application/json

[​](https://trigger.dev/docs/management/waitpoints/create#body-idempotency-key)

idempotencyKey

string

An optional idempotency key. If you pass the same key twice before it expires, you will receive the original token back. The returned token may already be completed, in which case `wait.forToken()` will continue immediately.

Example:

`"approval-user-1234567"`

[​](https://trigger.dev/docs/management/waitpoints/create#body-idempotency-key-ttl)

idempotencyKeyTTL

string

How long the idempotency key is valid, after which passing the same key creates a new waitpoint. Accepts durations like "30s", "1m", "2h", "3d".

Example:

`"1h"`

[​](https://trigger.dev/docs/management/waitpoints/create#body-timeout)

timeout

string

How long to wait before the token times out. When a run is waiting for a timed-out token, `wait.forToken()` returns with `ok: false`. Accepts an ISO 8601 date string or duration shorthand like "30s", "1m", "2h", "3d", "4w".

Example:

`"1h"`

[​](https://trigger.dev/docs/management/waitpoints/create#body-tags-one-of-0)

tags

stringstring\[\]stringstring\[\]

Tags to attach to the waitpoint. You can set up to 10 tags, each under 128 characters. We recommend namespacing tags with a prefix like `user:1234567` or `org_9876543`.

Example:

    ["user:1234567", "org:9876543"]

#### Response

200

application/json

Waitpoint token created successfully

[​](https://trigger.dev/docs/management/waitpoints/create#response-id)

id

string

required

The unique ID of the waitpoint token.

Example:

`"waitpoint_abc123"`

[​](https://trigger.dev/docs/management/waitpoints/create#response-is-cached)

isCached

boolean

required

`true` if an existing token was returned because the same `idempotencyKey` was used within its TTL window.

[​](https://trigger.dev/docs/management/waitpoints/create#response-url)

url

string

required

An HTTP callback URL. A POST request to this URL (with an optional JSON body) will complete the waitpoint without needing an API key.

Example:

`"https://api.trigger.dev/api/v1/waitpoints/tokens/waitpoint_abc123/callback/abc123hash"`

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/deployments/promote)
[List waitpoint tokensReturns a paginated list of waitpoint tokens for the current environment. Results are ordered by creation date, newest first. Use cursor-based pagination with \`page\[after\]\` and \`page\[before\]\` to navigate pages.\
\
Next](https://trigger.dev/docs/management/waitpoints/list)

Ctrl+I

TypeScript

TypeScript

    import { wait } from "@trigger.dev/sdk";
    
    const token = await wait.createToken({
      timeout: "1h",
      tags: ["user:1234567"],
    });
    
    console.log(token.id);  // e.g. "waitpoint_abc123"
    console.log(token.url); // HTTP callback URL to complete externally

200

    {
      "id": "waitpoint_abc123",
      "isCached": true,
      "url": "https://api.trigger.dev/api/v1/waitpoints/tokens/waitpoint_abc123/callback/abc123hash"
    }

Assistant

Responses are generated using AI and may contain mistakes.
