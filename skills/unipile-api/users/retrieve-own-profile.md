# Retrieve own profile

- **URL:** https://developer.unipile.com/reference/userscontroller_getaccountownerprofile
- **Summary:** Retrieve informations about account owner.

account_id

string

required

The ID of the account to trigger the request from.

200

OK. Request succeeded.

===============================

LinkedIn

Telegram

Twitter

Gmail

Outlook

Imap

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

https://api1.unipile.com:13111/api/v1/users/me

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/users/me \\

3

     \--header 'accept: application/json'

33

1

{

2

  "provider": "LINKEDIN",

3

  "provider_id": "string",

4

  "entity_urn": "string",

5

  "object_urn": "string",

6

  "first_name": "string",

7

  "last_name": "string",

8

  "profile_picture_url": "string",

9

  "public_profile_url": "string",

10

  "public_identifier": "string",

11

  "headline": "string",

12

  "location": "string",

13

  "email": "string",

14

  "premium": true,

15

  "open_profile": true,

16

  "occupation": "string",

17

  "organizations": \[\
\
18\
\
    {\
\
19\
\
      "id": "string",\
\
20\
\
      "mailbox_id": "string",\
\
21\
\
      "name": "string"\
\
22\
\
    }\
\
23\
\
  \],

24

  "recruiter": {

25

    "owner_seat_id": "string",

26

    "contract_id": "string"

27

  },

28

  "sales_navigator": {

29

    "owner_seat_id": "string",

30

    "contract_id": "string"

31

  },

32

  "object": "AccountOwnerProfile"

33

}

No
