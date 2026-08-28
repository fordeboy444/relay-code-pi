# Complete a waitpoint token

> Source: https://trigger.dev/docs/management/waitpoints/complete

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

complete

TypeScript

TypeScript

    import { wait } from "@trigger.dev/sdk";
    
    // Complete with data (returned to the waiting run)
    await wait.completeToken(token, {
      status: "approved",
      comment: "Looks good to me!",
    });
    
    // Complete with no data
    await wait.completeToken(token, {});

200

    {
      "success": true
    }

#### Authorizations

secretKeypublicAccessTokensecretKeypublicAccessToken

[​](https://trigger.dev/docs/management/waitpoints/complete#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";configure({ accessToken: "tr_dev_1234" });

#### Path Parameters

[​](https://trigger.dev/docs/management/waitpoints/complete#parameter-waitpoint-id)

waitpointId

string

required

The ID of the waitpoint token to complete.

#### Body

application/json

[​](https://trigger.dev/docs/management/waitpoints/complete#body-data)

data

any

Any JSON-serializable value to pass back to the run waiting on this token. The data will be returned from `wait.forToken()` as the result payload.

Example:

    {  "status": "approved",  "comment": "Looks good to me!"}

#### Response

200

application/json

Waitpoint token completed successfully

[​](https://trigger.dev/docs/management/waitpoints/complete#response-success)

success

enum<boolean>

required

Always `true` when the request succeeds.

Available options:

`true`

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/waitpoints/retrieve)
[Complete a waitpoint token via HTTP callbackCompletes a waitpoint token using the pre-signed callback URL returned in the \`url\` field when the token was created. No API key is required — the \`callbackHash\` in the URL acts as the authentication token. This is designed to be given directly to external services (e.g. as a webhook URL) so they can unblock a waiting run without needing access to your API key. The entire request body is passed as the output data to the waiting run. If the token is already completed, this is a no-op and returns \`success: true\`.\
\
Next](https://trigger.dev/docs/management/waitpoints/complete-callback)

Ctrl+I

TypeScript

TypeScript

    import { wait } from "@trigger.dev/sdk";
    
    // Complete with data (returned to the waiting run)
    await wait.completeToken(token, {
      status: "approved",
      comment: "Looks good to me!",
    });
    
    // Complete with no data
    await wait.completeToken(token, {});

200

    {
      "success": true
    }

Assistant

Responses are generated using AI and may contain mistakes.
