# Resynchronize account messaging data

- **URL:** https://developer.unipile.com/reference/accountscontroller_resyncaccount
- **Summary:** This route can be used both to initiate a sync process (from scratch or within a specific time span) and to monitor its status via regular polling. Supported providers: LinkedIn and Telegram. Instagram and WhatsApp are not supported by this route.

account_id

string

required

The id of the account to resynchronize.

chunk_size

number

The number of chats to be synchronized in a single chunk. Supported for LinkedIn and Telegram.

partial

boolean

LinkedIn only. Whether the account should be partially resynchronized (keeping already synced data) or fully resynchronized.

truefalse

linkedin_product

string

enum

LinkedIn only. The LinkedIn messaging feature to synchronize. Leave blank to process all connected features.

classicrecruitersales_navigator

Allowed:

`classic``recruiter``sales_navigator`

before

number

The end of the time span (lowest Epoch time in ms). Supported for LinkedIn and Telegram.

after

number

The start of the time span (highest Epoch time in ms). Supported for LinkedIn and Telegram.

200

OK. Request succeeded.

===============================

object

object

string

enum

required

`AccountResync`

status

string

enum

required

The status of the synchronization. You can setup a regular polling on the same route to get updates on its status. A new request after a SYNC_DONE, CHUNK_DONE or SYNC_ERROR response will start a fresh sync.

`SYNC_STARTED` `SYNC_RUNNING` `SYNC_DONE` `SYNC_ERROR` `CHUNK_DONE`

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

Disconnected account

The account appears to be disconnected from the provider service.  
undefined

403

Forbidden

Feature not subscribed

The requested feature has either not been subscribed or not been authenticated properly.  
undefined

404

Not Found

Resource not found.

The requested resource were not found.  
Account not found

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
undefined

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

https://api1.unipile.com:13111/api/v1/accounts/{account_id}/sync

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/accounts/account_id/sync \\

3

     \--header 'accept: application/json'

1

{

2

  "object": "AccountResync",

3

  "status": "SYNC_STARTED"

4

}

No
