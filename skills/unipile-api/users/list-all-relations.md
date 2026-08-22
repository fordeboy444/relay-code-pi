# List all relations

- **URL:** https://developer.unipile.com/reference/userscontroller_getrelations
- **Summary:** Returns a list of all the relations of an account. Ensure careful implementation of this action and consult provider limits and restrictions: https://developer.unipile.com/docs/provider-limits-and-restrictions

cursor

string

length ≥ 1

A cursor for pagination purposes. To get the next page of entries, you need to make a new request and fulfill this field with the cursor received in the preceding request. This process should be repeated until all entries have been retrieved.

filter

string

Filter out results by user name.

limit

integer

1 to 1000

A limit for the number of items returned in the response. The value can be set between 1 and 1000.

account_id

string

required

The account to get the relations from. (if user_id is not provided)

200

OK. Request succeeded.

===============================

object

object

string

enum

required

`UserRelationsList`

items

array of objects

required

items\*

object

object

string

enum

required

`UserRelation`

first_name

string

required

last_name

string

required

headline

string

required

public_identifier

string

required

public_profile_url

string

required

created_at

number

required

member_id

string

required

member_urn

string

required

connection_urn

string

required

profile_picture_url

string

cursor

object

required

Option 1

Option 2

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
User not found

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

https://api1.unipile.com:13111/api/v1/users/relations

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/users/relations \\

3

     \--header 'accept: application/json'

18

1

{

2

  "object": "UserRelationsList",

3

  "items": \[\
\
4\
\
    {\
\
5\
\
      "object": "UserRelation",\
\
6\
\
      "first_name": "string",\
\
7\
\
      "last_name": "string",\
\
8\
\
      "headline": "string",\
\
9\
\
      "public_identifier": "string",\
\
10\
\
      "public_profile_url": "string",\
\
11\
\
      "created_at": 0,\
\
12\
\
      "member_id": "string",\
\
13\
\
      "member_urn": "string",\
\
14\
\
      "connection_urn": "string",\
\
15\
\
      "profile_picture_url": "string"\
\
16\
\
    }\
\
17\
\
  \]

18

}

No
