# Synchronize a conversation from its beginning

- **URL:** https://developer.unipile.com/reference/chatscontroller_syncchathistory
- **Summary:** This route can be used both to initiate a synchronization process and to monitor its status via regular polling.

chat_id

string

required

The id of the chat to be synced.

200

OK. Request succeeded.

===============================

object

object

string

enum

required

`ChatHistorySync`

chat_id

string

required

length ≥ 1

A unique identifier.

status

string

enum

required

The status of the chat synchronization. You can setup a regular polling on the same route to get updates on its status. A new request after a SYNC_DONE or SYNC_ERROR response will start a fresh sync.

`SYNC_STARTED` `CHAT_DELETED` `SYNC_RUNNING` `SYNC_DONE` `SYNC_ERROR`

401

Unauthorized

Disconnected account

The account appears to be disconnected from the provider service.  
undefined

403

Forbidden

Insufficient permissions - Type: "errors/insufficient_permissions"

Valid authentication but insufficient permissions to perform the request.

Account restricted - Type: "errors/account_restricted"

Access to this account has been restricted by the provider.

Account mismatch - Type: "errors/account_mismatch"

This action cannot be done with your account.

Unknown authentication context - Type: "errors/unknown_authentication_context"

An additional step seems necessary to complete login. Please connect to provider with your browser to find out more, then retry authentication.

Session mismatch - Type: "errors/session_mismatch"

Token User id does not match client session id.

Feature not subscribed - Type: "errors/feature_not_subscribed"

The requested feature has either not been subscribed or not been authenticated properly.

Subscription required - Type: "errors/subscription_required"

The action you're trying to achieve requires a subscription to provider's services.

Resource access restricted - Type: "errors/resource_access_restricted"

You don't have access to this resource.

Action required - Type: "errors/action_required"

An additional step seems necessary. Complete authentication on the provider's native application and try again.

404

Not Found

Resource not found.

The requested resource were not found.  
Chat not found

422

Unprocessable Entity

Invalid account

Provided account is not designed for this feature.  
undefined

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

Network down

Network is down on server side. Please wait a moment and retry.  
undefined

504

Gateway Timeout

Request timed out - Type: "errors/request_timeout"

Request Timeout. Please try again, and if the issue persists, contact support.

No

Base URL

https://api1.unipile.com:13111/api/v1/chats/{chat_id}/sync

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/chats/chat_id/sync \\

3

     \--header 'accept: application/json'

1

{

2

  "object": "ChatHistorySync",

3

  "chat_id": "string",

4

  "status": "SYNC_STARTED"

5

}

No
