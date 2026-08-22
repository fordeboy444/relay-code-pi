# Wait for token

> Source: https://trigger.dev/docs/wait-for-token

Waitpoint tokens pause task runs until you complete the token. They’re commonly used for approval workflows and other scenarios where you need to wait for external confirmation, such as human-in-the-loop processes. You can complete a token using the SDK or by making a POST request to the token’s URL.

If you’re waiting for data from an [input stream](https://trigger.dev/docs/tasks/streams#input-streams)
, use [`inputStream.wait()`](https://trigger.dev/docs/tasks/streams#wait--suspend-until-data-arrives)
 instead — it uses waitpoint tokens internally but provides a simpler API with full type safety from your stream definition.

[​](https://trigger.dev/docs/wait-for-token#usage)

Usage
-----------------------------------------------------------

To get started using wait tokens, you need to first create a token using the `wait.createToken` function:

    import { wait } from "@trigger.dev/sdk";
    
    // This can be called anywhere in your codebase, either in a task or in your backend code
    const token = await wait.createToken({
      timeout: "10m", // you can optionally specify a timeout for the token
    });
    

Once you have a token, you can wait for it to be completed using the `wait.forToken` function:

    import { wait } from "@trigger.dev/sdk";
    
    type ApprovalToken = {
      status: "approved" | "rejected";
    };
    
    // This must be called inside a task run function
    const result = await wait.forToken<ApprovalToken>(tokenId);
    
    if (result.ok) {
      console.log("Token completed", result.output.status); // "approved" or "rejected"
    } else {
      console.log("Token timed out", result.error);
    }
    

To complete a token, you can use the `wait.completeToken` function:

    import { wait } from "@trigger.dev/sdk";
    // This can be called anywhere in your codebase, or from an external service,
    // passing in the token ID and the output of the token
    await wait.completeToken<ApprovalToken>(tokenId, {
      status: "approved",
    });
    

[​](https://trigger.dev/docs/wait-for-token#completing-from-the-browser)

Completing from the browser
-------------------------------------------------------------------------------------------------------

The `publicAccessToken` returned by `wait.createToken()` is scoped to that specific waitpoint and intended for client-side completion. The completion endpoint has CORS enabled, so you can call it directly from client-side code without proxying through your backend.

1

[](https://trigger.dev/docs/wait-for-token#)

Create the token in your backend

    import { wait } from "@trigger.dev/sdk";
    
    const token = await wait.createToken({ timeout: "10m" });
    // Pass token.id and token.publicAccessToken to your frontend
    

2

[](https://trigger.dev/docs/wait-for-token#)

Complete the token from the browser

    // tokenId and publicAccessToken passed from your backend
    const tokenId = token.id;
    const publicAccessToken = token.publicAccessToken;
    
    const response = await fetch(
      `https://api.trigger.dev/api/v1/waitpoints/tokens/${tokenId}/complete`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${publicAccessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: { status: "approved" } }),
      }
    );
    
    if (!response.ok) {
      throw new Error(`Failed to complete token: ${response.statusText}`);
    }
    

[​](https://trigger.dev/docs/wait-for-token#completing-via-webhook-callback)

Completing via webhook callback
---------------------------------------------------------------------------------------------------------------

The `token.url` webhook callback URL is designed for server-to-server use and does **not** have CORS headers. Don’t call it from the browser, use the [Completing from the browser](https://trigger.dev/docs/wait-for-token#completing-from-the-browser)
 pattern instead.

Or you can make an HTTP POST request to the `url` it returns. This is an HTTP callback:

    import { wait } from "@trigger.dev/sdk";
    
    const token = await wait.createToken({
      timeout: "10m",
    });
    
    const call = await replicate.predictions.create({
      version: "27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478",
      input: {
        prompt: "A painting of a cat by Andy Warhol",
      },
      // pass the provided URL to Replicate's webhook, so they can "callback"
      webhook: token.url,
      webhook_events_filter: ["completed"],
    });
    
    const prediction = await wait.forToken<Prediction>(token).unwrap();
    // unwrap() throws a timeout error or returns the result   👆
    

[​](https://trigger.dev/docs/wait-for-token#wait-createtoken)

wait.createToken
---------------------------------------------------------------------------------

Create a waitpoint token.

### 

[​](https://trigger.dev/docs/wait-for-token#options)

options

The `createToken` function accepts an object with the following properties:

[​](https://trigger.dev/docs/wait-for-token#param-timeout)

timeout

string

The maximum amount of time to wait for the token to be completed. Defaults to “10m”.

[​](https://trigger.dev/docs/wait-for-token#param-idempotency-key)

idempotencyKey

string

An idempotency key for the token. If provided, the token will be completed with the same payload if the same idempotency key is used again.

[​](https://trigger.dev/docs/wait-for-token#param-idempotency-key-ttl)

idempotencyKeyTTL

string

The time to live for the idempotency key. Defaults to “1h”.

[​](https://trigger.dev/docs/wait-for-token#param-tags)

tags

string\[\]

Tags to attach to the token. Tags can be used to filter waitpoints in the dashboard.

### 

[​](https://trigger.dev/docs/wait-for-token#returns)

returns

The `createToken` function returns a token object with the following properties:

[​](https://trigger.dev/docs/wait-for-token#param-id)

id

string

The ID of the token. Starts with `waitpoint_`.

[​](https://trigger.dev/docs/wait-for-token#param-url)

url

string

The URL of the token. This is the URL you can make a POST request to in order to complete the token.The JSON body of the POST request will be used as the output of the token. If there’s no body the output will be an empty object `{}`.

[​](https://trigger.dev/docs/wait-for-token#param-is-cached)

isCached

boolean

Whether the token is cached. Will return true if the token was created with an idempotency key and the same idempotency key was used again.

[​](https://trigger.dev/docs/wait-for-token#param-public-access-token)

publicAccessToken

string

A Public Access Token that can be used to complete the token from a client-side application (or another backend). See our [Realtime docs](https://trigger.dev/docs/realtime/auth)
 for more details.

### 

[​](https://trigger.dev/docs/wait-for-token#example)

Example

    import { wait } from "@trigger.dev/sdk";
    
    const token = await wait.createToken({
      timeout: "10m",
      idempotencyKey: "my-idempotency-key",
      tags: ["my-tag"],
    });
    

[​](https://trigger.dev/docs/wait-for-token#wait-completetoken)

wait.completeToken
-------------------------------------------------------------------------------------

Complete a waitpoint token.

### 

[​](https://trigger.dev/docs/wait-for-token#parameters)

parameters

[​](https://trigger.dev/docs/wait-for-token#param-id-1)

id

string

The ID of the token to complete.

[​](https://trigger.dev/docs/wait-for-token#param-output)

output

any

The data to complete the token with.

### 

[​](https://trigger.dev/docs/wait-for-token#returns-2)

returns

The `completeToken` function returns an object with the following properties:

[​](https://trigger.dev/docs/wait-for-token#param-success)

success

boolean

Whether the token was completed successfully.

### 

[​](https://trigger.dev/docs/wait-for-token#example-2)

Example

    import { wait } from "@trigger.dev/sdk";
    
    await wait.completeToken<ApprovalToken>(tokenId, {
      status: "approved",
    });
    

### 

[​](https://trigger.dev/docs/wait-for-token#from-another-language)

From another language

You can complete a token using a raw HTTP request or from another language.

curl

python

ruby

go

    curl -X POST "https://api.trigger.dev/api/v1/waitpoints/tokens/{tokenId}/complete" \
      -H "Authorization: Bearer {token}" \
      -H "Content-Type: application/json" \
      -d '{"data": { "status": "approved"}}'
    

[​](https://trigger.dev/docs/wait-for-token#wait-fortoken)

wait.forToken
---------------------------------------------------------------------------

Wait for a token to be completed.

### 

[​](https://trigger.dev/docs/wait-for-token#parameters-2)

parameters

[​](https://trigger.dev/docs/wait-for-token#param-token)

token

string | { id: string }

The token to wait for.

### 

[​](https://trigger.dev/docs/wait-for-token#returns-3)

returns

The `forToken` function returns a result object with the following properties:

[​](https://trigger.dev/docs/wait-for-token#param-ok)

ok

boolean

Whether the token was completed successfully.

[​](https://trigger.dev/docs/wait-for-token#param-output-1)

output

any

If `ok` is `true`, this will be the output of the token.

[​](https://trigger.dev/docs/wait-for-token#param-error)

error

Error

If `ok` is `false`, this will be the error that occurred. The only error that can occur is a timeout error.

### 

[​](https://trigger.dev/docs/wait-for-token#unwrap)

unwrap()

We provide a handy `.unwrap()` method that will throw an error if the result is not ok. This means your happy path is a lot cleaner.

    const approval = await wait.forToken<ApprovalToken>(tokenId).unwrap();
    // unwrap means an error will throw if the waitpoint times out 👆
    
    // This is the actual data you sent to the token now, not a result object
    console.log("Approval", approval);
    

### 

[​](https://trigger.dev/docs/wait-for-token#example-3)

Example

    import { wait } from "@trigger.dev/sdk";
    
    const result = await wait.forToken<ApprovalToken>(tokenId);
    
    if (result.ok) {
      console.log("Token completed", result.output.status); // "approved" or "rejected"
    } else {
      console.log("Token timed out", result.error);
    }
    

[​](https://trigger.dev/docs/wait-for-token#wait-listtokens)

wait.listTokens
-------------------------------------------------------------------------------

List all tokens for an environment.

### 

[​](https://trigger.dev/docs/wait-for-token#parameters-3)

parameters

The `listTokens` function accepts an object with the following properties:

[​](https://trigger.dev/docs/wait-for-token#param-status)

status

string | string\[\]

Statuses to filter by. Can be one or more of: `WAITING`, `COMPLETED`, `TIMED_OUT`.

[​](https://trigger.dev/docs/wait-for-token#param-idempotency-key-1)

idempotencyKey

string

The idempotency key to filter by.

[​](https://trigger.dev/docs/wait-for-token#param-tags-1)

tags

string | string\[\]

Tags to filter by.

[​](https://trigger.dev/docs/wait-for-token#param-period)

period

string

The period to filter by. Can be one of: `1h`, `1d`, `7d`, `30d`.

[​](https://trigger.dev/docs/wait-for-token#param-from)

from

Date | number

The start date to filter by.

[​](https://trigger.dev/docs/wait-for-token#param-to)

to

Date | number

The end date to filter by.

### 

[​](https://trigger.dev/docs/wait-for-token#returns-4)

returns

The `listTokens` function returns a list of tokens that can be iterated over using a for-await-of loop. Each token is an object with the following properties:

[​](https://trigger.dev/docs/wait-for-token#param-id-2)

id

string

The ID of the token.

[​](https://trigger.dev/docs/wait-for-token#param-url-1)

url

string

The URL of the token. This is the URL you can make a POST request to in order to complete the token.The JSON body of the POST request will be used as the output of the token. If there’s no body the output will be an empty object `{}`.

[​](https://trigger.dev/docs/wait-for-token#param-status-1)

status

string

The status of the token.

[​](https://trigger.dev/docs/wait-for-token#param-completed-at)

completedAt

Date

The date and time the token was completed.

[​](https://trigger.dev/docs/wait-for-token#param-timeout-at)

timeoutAt

Date

The date and time the token will timeout.

[​](https://trigger.dev/docs/wait-for-token#param-idempotency-key-2)

idempotencyKey

string

The idempotency key of the token.

[​](https://trigger.dev/docs/wait-for-token#param-idempotency-key-expires-at)

idempotencyKeyExpiresAt

Date

The date and time the idempotency key will expire.

[​](https://trigger.dev/docs/wait-for-token#param-tags-2)

tags

string\[\]

The tags of the token.

[​](https://trigger.dev/docs/wait-for-token#param-created-at)

createdAt

Date

The date and time the token was created.

The output of the token is not included in the list. To get the output, you need to retrieve the token using the `wait.retrieveToken` function.

### 

[​](https://trigger.dev/docs/wait-for-token#example-4)

Example

    import { wait } from "@trigger.dev/sdk";
    
    const tokens = await wait.listTokens({
      status: "COMPLETED",
      tags: ["user:123"],
    });
    
    for await (const token of tokens) {
      console.log(token);
    }
    

[​](https://trigger.dev/docs/wait-for-token#wait-retrievetoken)

wait.retrieveToken
-------------------------------------------------------------------------------------

Retrieve a token by ID.

### 

[​](https://trigger.dev/docs/wait-for-token#parameters-4)

parameters

[​](https://trigger.dev/docs/wait-for-token#param-id-3)

id

string

The ID of the token to retrieve.

### 

[​](https://trigger.dev/docs/wait-for-token#returns-5)

returns

The `retrieveToken` function returns a token object with the following properties:

[​](https://trigger.dev/docs/wait-for-token#param-id-4)

id

string

The ID of the token.

[​](https://trigger.dev/docs/wait-for-token#param-url-2)

url

string

The URL of the token. This is the URL you can make a POST request to in order to complete the token.The JSON body of the POST request will be used as the output of the token. If there’s no body the output will be an empty object `{}`.

[​](https://trigger.dev/docs/wait-for-token#param-status-2)

status

string

The status of the token.

[​](https://trigger.dev/docs/wait-for-token#param-completed-at-1)

completedAt

Date

The date and time the token was completed.

[​](https://trigger.dev/docs/wait-for-token#param-timeout-at-1)

timeoutAt

Date

The date and time the token will timeout.

[​](https://trigger.dev/docs/wait-for-token#param-idempotency-key-3)

idempotencyKey

string

The idempotency key of the token.

[​](https://trigger.dev/docs/wait-for-token#param-idempotency-key-expires-at-1)

idempotencyKeyExpiresAt

Date

The date and time the idempotency key will expire.

[​](https://trigger.dev/docs/wait-for-token#param-tags-3)

tags

string\[\]

The tags of the token.

[​](https://trigger.dev/docs/wait-for-token#param-created-at-1)

createdAt

Date

The date and time the token was created.

[​](https://trigger.dev/docs/wait-for-token#param-output-2)

output

any

The output of the token.

[​](https://trigger.dev/docs/wait-for-token#param-error-1)

error

Error

The error that occurred.

### 

[​](https://trigger.dev/docs/wait-for-token#example-5)

Example

    import { wait } from "@trigger.dev/sdk";
    
    const token = await wait.retrieveToken(tokenId);
    
    console.log(token);
    

[​](https://trigger.dev/docs/wait-for-token#wait-idempotency)

Wait idempotency
---------------------------------------------------------------------------------

You can pass an idempotency key to any wait function, allowing you to skip waits if the same idempotency key is used again. This can be useful if you want to skip waits when retrying a task, for example:

    // Specify the idempotency key and TTL when creating a wait token
    const token = await wait.createToken({
      idempotencyKey: "my-idempotency-key",
      idempotencyKeyTTL: "1h",
    });
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/wait-until)
[Concurrency & QueuesConfigure what you want to happen when there is more than one run at a time.\
\
Next](https://trigger.dev/docs/queue-concurrency)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
