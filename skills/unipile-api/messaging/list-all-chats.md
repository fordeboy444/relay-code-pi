# List all chats

- **URL:** https://developer.unipile.com/reference/messaging
- **Summary:** Returns a list of chats. Some optional parameters are available to filter the results.

unread

boolean

Whether you want to get either unread chats only, or read chats only.

truefalse

cursor

string

length ≥ 1

A cursor for pagination purposes. To get the next page of entries, you need to make a new request and fulfill this field with the cursor received in the preceding request. This process should be repeated until all entries have been retrieved.

before

string

`^[1-2]\d{3}-[0-1]\d-[0-3]\dT\d{2}:\d{2}:\d{2}.\d{3}Z$`

A filter to target items created before the datetime (exclusive). Must be an ISO 8601 UTC datetime (YYYY-MM-DDTHH:MM:SS.sssZ).

after

string

`^[1-2]\d{3}-[0-1]\d-[0-3]\dT\d{2}:\d{2}:\d{2}.\d{3}Z$`

A filter to target items created after the datetime (exclusive). Must be an ISO 8601 UTC datetime (YYYY-MM-DDTHH:MM:SS.sssZ).

limit

integer

1 to 250

A limit for the number of items returned in the response. The value can be set between 1 and 250.

account_type

string

enum

A filter to target items related to a certain provider.

WHATSAPPLINKEDINSLACKTWITTERMESSENGERINSTAGRAMTELEGRAM

Allowed:

`WHATSAPP``LINKEDIN``SLACK``TWITTER``MESSENGER``INSTAGRAM``TELEGRAM`

account_id

string

length ≥ 1

A filter to target items related to a certain account. Can be a comma-separated list of ids.

200

OK. Request succeeded.

===============================

object

object

string

enum

required

`ChatList`

items

array of objects

required

items\*

object

object

string

enum

required

`Chat`

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

account_typeString 1String 2String 3String 4String 5String 6String 7

enum

required

`WHATSAPP`

provider_id

string

required

attendee_provider_id

string

name

string

required

string

Option 2

typeNumber 1Number 2Number 3

enum

required

`0`

timestamp

string

required

string

Option 2

unread_count

number

required

archivedNumber 1Number 2

enum

required

`0`

muted_until

number | string

required

number

string

Option 3

read_onlyNumber 1Number 2Number 3

enum

required

`0`

disabledFeatures

array

disabledFeatures

String 1String 2

subject

string

organization_id

string

Linkedin specific ID for organization mailboxes.

mailbox_id

string

Linkedin specific ID for organization mailboxes.

content_typeString 1String 2String 3

enum

`inmail`

folder

array

folder

String 1String 2String 3String 4String 5String 6String 7String 8String 9String 10String 11String 12String 13

pinnedNumber 1Number 2

enum

required

`0`

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
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
https://api1.unipile.com:13111/api/v1/chats

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/chats \\

3

     \--header 'accept: application/json'

44

1

{

2

  "object": "ChatList",

3

  "items": \[\
\
4\
\
    {\
\
5\
\
      "object": "Chat",\
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
      "account_type": "WHATSAPP",\
\
9\
\
      "provider_id": "string",\
\
10\
\
      "attendee_provider_id": "string",\
\
11\
\
      "name": "string",\
\
12\
\
      "type": 0,\
\
13\
\
      "timestamp": "string",\
\
14\
\
      "unread_count": 0,\
\
15\
\
      "archived": 0,\
\
16\
\
      "muted_until": \-1,\
\
17\
\
      "read_only": 0,\
\
18\
\
      "disabledFeatures": \[\
\
19\
\
        "reactions",\
\
20\
\
        "reply"\
\
21\
\
      \],\
\
22\
\
      "subject": "string",\
\
23\
\
      "organization_id": "string",\
\
24\
\
      "mailbox_id": "string",\
\
25\
\
      "content_type": "inmail",\
\
26\
\
      "folder": \[\
\
27\
\
        "INBOX",\
\
28\
\
        "INBOX_LINKEDIN_CLASSIC",\
\
29\
\
        "INBOX_LINKEDIN_RECRUITER",\
\
30\
\
        "INBOX_LINKEDIN_SALES_NAVIGATOR",\
\
31\
\
        "INBOX_LINKEDIN_ORGANIZATION",\
\
32\
\
        "INBOX_INSTAGRAM_GENERAL",\
\
33\
\
        "PENDING",\
\
34\
\
        "OTHER",\
\
35\
\
        "SPAM",\
\
36\
\
        "ARCHIVED",\
\
37\
\
        "HIDDEN",\
\
38\
\
        "UNKNOWN",\
\
39\
\
        "string"\
\
40\
\
      \],\
\
41\
\
      "pinned": 0\
\
42\
\
    }\
\
43\
\
  \]

44

}

No
