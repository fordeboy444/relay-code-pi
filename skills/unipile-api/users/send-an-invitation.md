# Send an invitation

- **URL:** https://developer.unipile.com/reference/userscontroller_adduserbyidentifier
- **Summary:** Send an invitation to add someone to your contacts. Ensure careful implementation of this action and consult provider limits and restrictions: https://developer.unipile.com/docs/provider-limits-and-restrictions

provider_id

string

required

The id of the user to add. It has to be the provider’s id.  
`Instagram`: You can use the provider_id or the username of the user. The provider_messaging_id dont work on this route !

account_id

string

required

The id of the account where the user will be added.

user_email

string

The email address of the user when it's required (Linkedin specific).

message

string

length ≤ 300

An optional message to go with the invitation (max 300 chars).

200

OK. Request succeeded.

===============================

object

object

string

enum

required

`UserInvitationSent`

invitation_id

string

required

usage

number

A percentage of query usage based on the limit set by the provider. Triggers only on passing a new landing (50, 75, 90, 95).

400

Bad Request

Too many characters

The provided content exceeds the character limit.  
undefined

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

422

Unprocessable Entity

Invalid account

Provided account is not designed for this feature.  
undefined

429

Too Many Requests

Too many requests

The provider cannot accept any more requests at the moment. Please try again later.  
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

https://api1.unipile.com:13111/api/v1/users/invite

1

curl \--request POST \\

2

     \--url https://api1.unipile.com:13111/api/v1/users/invite \\

3

     \--header 'accept: application/json' \\

4

     \--header 'content-type: application/json'

1

{

2

  "object": "UserInvitationSent",

3

  "invitation_id": "string",

4

  "usage": 0

5

}

No
