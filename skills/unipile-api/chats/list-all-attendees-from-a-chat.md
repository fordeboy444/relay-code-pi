# List all attendees from a chat

- **URL:** https://developer.unipile.com/reference/chatscontroller_listattendees
- **Summary:** Returns a list of messaging attendees related to a given chat. Some optional parameters are available to filter the results.

chat_id

string

required

The id of the chat related to requested attendees.

200

OK. Request succeeded.

===============================

object

object

string

enum

required

`ChatAttendeeList`

items

array of objects

required

items\*

object

object

string

enum

required

`ChatAttendee`

id

string

required

length ≥ 1

A unique identifier.

account_id

string

required

length ≥ 1

A unique identifier.

provider_id

string

required

name

string

required

is_selfNumber 1Number 2

enum

required

`1`

hiddenNumber 1Number 2

enum

`1`

picture_url

string

profile_url

string

specifics

object

Provider specific additional data.

Object 1

Object 2

cursor

object

required

Option 1

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

404

Not Found

Resource not found.

The requested resource were not found.  
Chat not found
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
https://api1.unipile.com:13111/api/v1/chats/{chat_id}/attendees

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/chats/chat_id/attendees \\

3

     \--header 'accept: application/json'

42

1

{

2

  "object": "ChatAttendeeList",

3

  "items": \[\
\
4\
\
    {\
\
5\
\
      "object": "ChatAttendee",\
\
6\
\
      "id": "string",\
\
7\
\
      "account_id": "string",\
\
8\
\
      "provider_id": "string",\
\
9\
\
      "name": "string",\
\
10\
\
      "is_self": 1,\
\
11\
\
      "hidden": 1,\
\
12\
\
      "picture_url": "string",\
\
13\
\
      "profile_url": "string",\
\
14\
\
      "specifics": {\
\
15\
\
        "provider": "LINKEDIN",\
\
16\
\
        "member_urn": "string",\
\
17\
\
        "occupation": "string",\
\
18\
\
        "network_distance": "SELF",\
\
19\
\
        "pending_invitation": true,\
\
20\
\
        "location": "string",\
\
21\
\
        "headline": "string",\
\
22\
\
        "contact_info": {\
\
23\
\
          "emails": \[\
\
24\
\
            "string"\
\
25\
\
          \],\
\
26\
\
          "phone_numbers": \[\
\
27\
\
            "string"\
\
28\
\
          \],\
\
29\
\
          "websites": \[\
\
30\
\
            "string"\
\
31\
\
          \],\
\
32\
\
          "social_handles": \[\
\
33\
\
            {\
\
34\
\
              "type": "string",\
\
35\
\
              "name": "string"\
\
36\
\
            }\
\
37\
\
          \]\
\
38\
\
        }\
\
39\
\
      }\
\
40\
\
    }\
\
41\
\
  \]

42

}

No
