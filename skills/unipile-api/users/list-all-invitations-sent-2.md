# List all invitations sent

- **URL:** https://developer.unipile.com/reference/userscontroller_listalluserinvitationssent
- **Summary:** Returns a list of all invitations sent that are pending.

cursor

string

length ≥ 1

A cursor for pagination purposes. To get the next page of entries, you need to make a new request and fulfill this field with the cursor received in the preceding request. This process should be repeated until all entries have been retrieved.

limit

integer

1 to 250

A limit for the number of items returned in the response. The value can be set between 1 and 250.

account_id

string

required

The id of the account to perform the request from.

200

OK. Request succeeded.

===============================

object

object

string

enum

required

`InvitationList`

items

array of objects

required

items\*

object

object

string

enum

required

`InvitationSent`

id

string

required

length ≥ 1

A unique identifier.

invited_user

string

required

string

Option 2

invited_user_id

string

required

string

Option 2

invited_user_public_id

string

required

string

Option 2

invited_user_description

string

required

string

Option 2

date

string

required

parsed_datetime

string

required

string

Option 2

invitation_text

string

required

string

Option 2

inviter

object

inviter object

specifics

object

specifics object

cursor

string

required

string

Option 2

401

Unauthorized

Missing credentials - Type: "errors/missing_credentials"

Some credentials are necessary to perform the request.

Multiple sessions - Type: "errors/multiple_sessions"

LinkedIn limits the use of multiple sessions on certain Recruiter accounts. This error restricts access to this route only, but causing a popup to appear in the user's browser, prompting them to choose a session, which can disconnect the current account. To avoid this error, use the cookie connection method.

Wrong account - Type: "errors/wrong_account"

The provided credentials do not match the correct account.

Invalid credentials - Type: "errors/invalid_credentials"

The provided credentials are invalid.

Invalid proxy credentials - Type: "errors/invalid_proxy_credentials"

The provided proxy credentials are invalid.

Invalid IMAP configuration - Type: "errors/invalid_imap_configuration"

The provided IMAP configuration is invalid.

Invalid SMTP configuration - Type: "errors/invalid_smtp_configuration"

The provided SMTP configuration is invalid.

Invalid checkpoint solution - Type: "errors/invalid_checkpoint_solution"

The checkpoint resolution did not pass successfully. Please retry.

Checkpoint error - Type: "errors/checkpoint_error"

The checkpoint does not appear to be resolvable. Please try again and contact support if the problem persists.

Expired credentials - Type: "errors/expired_credentials"

Invalid credentials. Please check your username and password and try again.

Expired link - Type: "errors/expired_link"

This link has expired. Please return to the application and generate a new one.

Insufficient privileges - Type: "errors/insufficient_privileges"

This resource seems to be out of your scopes.

Disconnected account - Type: "errors/disconnected_account"

The account appears to be disconnected from the provider service.

Disconnected feature - Type: "errors/disconnected_feature"

The service you're trying to reach appears to be disconnected.

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

https://api1.unipile.com:13111/api/v1/users/invite/sent

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/users/invite/sent \\

3

     \--header 'accept: application/json'

27

1

{

2

  "object": "InvitationList",

3

  "items": \[\
\
4\
\
    {\
\
5\
\
      "object": "InvitationSent",\
\
6\
\
      "id": "string",\
\
7\
\
      "invited_user": "string",\
\
8\
\
      "invited_user_id": "string",\
\
9\
\
      "invited_user_public_id": "string",\
\
10\
\
      "invited_user_description": "string",\
\
11\
\
      "date": "string",\
\
12\
\
      "parsed_datetime": "string",\
\
13\
\
      "invitation_text": "string",\
\
14\
\
      "inviter": {\
\
15\
\
        "inviter_name": "string",\
\
16\
\
        "inviter_id": "string",\
\
17\
\
        "inviter_public_identifier": "string",\
\
18\
\
        "inviter_description": "string"\
\
19\
\
      },\
\
20\
\
      "specifics": {\
\
21\
\
        "provider": "LINKEDIN",\
\
22\
\
        "shared_secret": "string"\
\
23\
\
      }\
\
24\
\
    }\
\
25\
\
  \],

26

  "cursor": "string"

27

}

No
