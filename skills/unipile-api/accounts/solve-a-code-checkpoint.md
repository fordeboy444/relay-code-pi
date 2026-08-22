# Solve a code checkpoint

- **URL:** https://developer.unipile.com/reference/accountscontroller_solvecheckpoint
- **Summary:** Allows you to provide a code which will solve a checkpoint encountered during a native authentication. A checkpoint is a security step added by a provider which needs to be solved to complete the authentication. Checkpoints that require a code are 2FA (two-factor authentication) and OTP (one-time pa…

account_id

string

required

length ≥ 1

A unique identifier.

code

string

required

length ≥ 1

The code to solve the checkpoint. If the code is a phone number, it should be preceded by the international dialling code in brackets (e.g. (+33)0612345678 for France). If you need to switch to a different type of checkpoint, enter TRY_ANOTHER_WAY here (e.g. from In app validation to 2FA).

provider

string

enum

required

LINKEDININSTAGRAMTWITTERMESSENGER

Allowed:

`LINKEDIN``INSTAGRAM``TWITTER``MESSENGER`

201

Created. The code is valid and the authentication is completed.

object

object

string

enum

required

`AccountCreated`

account_id

string

required

length ≥ 1

A unique identifier.

400

Bad Request

Invalid parameters - Type: "errors/invalid_parameters"

One or more request parameters are invalid or missing.

Missing parameters - Type: "errors/missing_parameters"

One or more request parameters are missing.

Invalid parameters - Type: "errors/invalid_request"

One or a combination of request parameters are invalid.

Malformed request - Type: "errors/malformed_request"

The given request has been rejected by the provider.

Content too large - Type: "errors/content_too_large"

The request payload or filter query is too large and has been rejected by the provider.

Too many characters - Type: "errors/too_many_characters"

The provided content exceeds the character limit.

Unescaped characters - Type: "errors/unescaped_characters"

The request path contains unescaped characters.

Limit too high - Type: "errors/limit_too_high"

Provider cannot accept such high pagination limit. See API reference for details.

Invalid action - Type: "errors/invalid_action"

This action is invalid.

Invalid label - Type: "errors/invalid_label"

This label is invalid.

401

Unauthorized

Invalid checkpoint solution

The checkpoint resolution did not pass successfully. Please retry.

403

Forbidden

Account restricted

Access to this account has been restricted by the provider.

407

Proxy Authentication Required

Proxy authentication error

The proxy in use is not working. Please try again.

408

Request Timeout

Request timed out

Communication with the provider has timed out. Please retry.

409

Conflict

Operation canceled

The current task was canceled by a subsequent one.

500

Internal Server Error

Unexpected error - Type: "errors/unexpected_error"

Something went wrong. {{moreDetails}}

Provider error - Type: "errors/provider_error"

The provider is experiencing operational problems. Please try again later.

Authentication intent error - Type: "errors/authentication_intent_error"

The current authentication intent was killed after failure. Please start the process again from the beginning.

502

Bad Gateway

Proxy error

The proxy in use is not working. Please try again.

503

Service Unavailable

No client session - Type: "errors/no_client_session"

No client session is currently running.

No channel - Type: "errors/no_channel"

No channel to client session.

Handler missing - Type: "errors/no_handler"

Handler missing for that request.

Network down - Type: "errors/network_down"

Network is down on server side. Please wait a moment and retry.

Service unavailable - Type: "errors/service_unavailable"

Please try again later.

504

Gateway Timeout

Request timed out - Type: "errors/request_timeout"

Request Timeout. Please try again, and if the issue persists, contact support.

No

Base URL

https://api1.unipile.com:13111/api/v1/accounts/checkpoint

1

curl \--request POST \\

2

     \--url https://api1.unipile.com:13111/api/v1/accounts/checkpoint \\

3

     \--header 'accept: application/json' \\

4

     \--header 'content-type: application/json' \\

5

     \--data '

6

{

7

  "provider": "LINKEDIN"

8

}

9

'

1

{

2

  "object": "AccountCreated",

3

  "account_id": "string"

4

}

No
