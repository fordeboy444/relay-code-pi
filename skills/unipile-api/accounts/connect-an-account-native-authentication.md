# Connect an account (native authentication)

- **URL:** https://developer.unipile.com/reference/accountscontroller_createaccount
- **Summary:** Link to Uniple an account of the given type and provider.

The parameters required to perform the authentication depend on the type of account you are trying to connect.

Linkedin

Whatsapp

Instagram

Messenger

IMAP

Gmail

Telegram

Outlook

Twitter

201

Created. The authentication succeeded and the account is linked to Unipile.

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

Invalid credentials

The provided credentials are invalid.

403

Forbidden

Insufficient permissions

Valid authentication but insufficient permissions to perform the request.

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

425

Too Early

Authentication in progress

Cannot start a new intent while another is still in progress.

500

Internal Server Error

Unexpected error - Type: "errors/unexpected_error"

Something went wrong. {{moreDetails}}

Provider error - Type: "errors/provider_error"

The provider is experiencing operational problems. Please try again later.

Authentication intent error - Type: "errors/authentication_intent_error"

The current authentication intent was killed after failure. Please start the process again from the beginning.

501

Not Implemented

Missing feature

Requested feature is planned but has not been implemented yet.

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

https://api1.unipile.com:13111/api/v1/accounts

1

curl \--request POST \\

2

     \--url https://api1.unipile.com:13111/api/v1/accounts \\

3

     \--header 'accept: application/json' \\

4

     \--header 'content-type: application/json'

1

{

2

  "object": "AccountCreated",

3

  "account_id": "string"

4

}

No
