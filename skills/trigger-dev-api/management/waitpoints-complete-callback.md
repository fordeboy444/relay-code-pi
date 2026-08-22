# Complete a waitpoint token via HTTP callback

> Source: https://trigger.dev/docs/management/waitpoints/complete-callback

POST

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

/

callback

/

{callbackHash}

cURL

cURL

    # The full URL is returned as `url` when you create a token
    curl -X POST "https://api.trigger.dev/api/v1/waitpoints/tokens/waitpoint_abc123/callback/abc123hash" \
      -H "Content-Type: application/json" \
      -d '{"status": "approved", "comment": "Looks good to me!"}'

200

    {
      "success": true
    }

#### Path Parameters

[​](https://trigger.dev/docs/management/waitpoints/complete-callback#parameter-waitpoint-id)

waitpointId

string

required

The ID of the waitpoint token.

[​](https://trigger.dev/docs/management/waitpoints/complete-callback#parameter-callback-hash)

callbackHash

string

required

The HMAC hash that authenticates the request. This is embedded in the `url` returned when creating the token — do not construct it manually.

#### Body

application/json

Any JSON object. The entire body is passed as the output data to the run waiting on this token. If the body is not valid JSON, an empty object is used.

#### Response

200

application/json

Waitpoint token completed successfully

[​](https://trigger.dev/docs/management/waitpoints/complete-callback#response-success)

success

enum<boolean>

required

Always `true` when the request succeeds.

Available options:

`true`

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/waitpoints/complete)
[Create sessionCreate a Session and trigger its first run in one atomic call. A Session is the durable identity for a bi-directional stream of records (the \`.in\` and \`.out\` channels) that survives across the runs processing it. Idempotent on \`externalId\` within an environment. Calling create again with an \`externalId\` that already maps to an open session returns the existing session with \`isCached: true\` and \`201\` becomes \`200\`. Reusing an \`externalId\` whose session is already closed or expired returns \`409\`. Authorize with a secret key, or a public token carrying \`write:sessions\` for the session you are creating.\
\
Next](https://trigger.dev/docs/management/sessions/create)

Ctrl+I

cURL

cURL

    # The full URL is returned as `url` when you create a token
    curl -X POST "https://api.trigger.dev/api/v1/waitpoints/tokens/waitpoint_abc123/callback/abc123hash" \
      -H "Content-Type: application/json" \
      -d '{"status": "approved", "comment": "Looks good to me!"}'

200

    {
      "success": true
    }

Assistant

Responses are generated using AI and may contain mistakes.
