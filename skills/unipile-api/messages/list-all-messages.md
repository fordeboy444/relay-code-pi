# List all messages

- **URL:** https://developer.unipile.com/reference/messagescontroller_listallmessages
- **Summary:** Returns a list of messages. Some optional parameters are available to filter the results.

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

sender_id

string

A filter to target messages received from a certain sender. The id of the sender targeted.

account_id

string

A filter to target messages received in a certain linked account. The id of the account targeted.

200

OK. Request succeeded.

===============================

object

object

string

enum

required

`MessageList`

items

array of objects

required

items\*

object

object

string

enum

required

`Message`

message_id

string

length ≥ 1

A unique identifier.

provider_id

string

required

sender_id

string

required

text

string

required

string

Option 2

attachments

array

required

attachments\*

Object 1

Object 2

Object 3

Object 4

Object 5

Object 6

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

chat_id

string

required

length ≥ 1

A unique identifier.

chat_provider_id

string

required

timestamp

string

required

is_senderNumber 1Number 2

enum

required

`0`

quoted

object

quoted object

is_forwarded

boolean

reactions

array of objects

required

reactions\*

object

value

string

required

sender_id

string

required

is_sender

boolean

required

mentions

object

mentions object

seenNumber 1Number 2

enum

required

`0`

seen_by

object

required

seen_by object

hiddenNumber 1Number 2

enum

required

`0`

deletedNumber 1Number 2

enum

required

`0`

editedNumber 1Number 2

enum

required

`0`

is_eventNumber 1Number 2

enum

required

`0`

deliveredNumber 1Number 2

enum

required

`0`

behavior

number

required

number

Option 2

event_typeNumber 1Number 2Number 3Number 4Number 5Number 6Number 7Number 8Number 9Number 10Number 11Number 12Number 13Number 14

enum

`0`

original

string

required

replies

number

reply_by

array of strings

parent

string

length ≥ 1

A unique identifier.

sender_attendee_id

string

required

length ≥ 1

A unique identifier.

subject

string

string

Option 2

message_typeString 1String 2String 3String 4String 5String 6String 7String 8String 9

enum

`MESSAGE`

attendee_typeString 1String 2String 3

enum

`MEMBER`

attendee_distanceNumber 1Number 2Number 3Number 4Number 5

enum

`1`

sender_urn

string

reply_to

object

reply_to object

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
Account or sender not found
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
https://api1.unipile.com:13111/api/v1/messages

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/messages \\

3

     \--header 'accept: application/json'

210

}

1

{

2

  "object": "MessageList",

3

  "items": \[\
\
4\
\
    {\
\
5\
\
      "object": "Message",\
\
6\
\
      "message_id": "string",\
\
7\
\
      "provider_id": "string",\
\
8\
\
      "sender_id": "string",\
\
9\
\
      "text": "string",\
\
10\
\
      "attachments": \[\
\
11\
\
        {\
\
12\
\
          "id": "string",\
\
13\
\
          "file_size": 0,\
\
14\
\
          "unavailable": true,\
\
15\
\
          "mimetype": "string",\
\
16\
\
          "url": "string",\
\
17\
\
          "url_expires_at": 0,\
\
18\
\
          "type": "img",\
\
19\
\
          "size": {\
\
20\
\
            "width": 0,\
\
21\
\
            "height": 0\
\
22\
\
          },\
\
23\
\
          "sticker": true\
\
24\
\
        },\
\
25\
\
        {\
\
26\
\
          "id": "string",\
\
27\
\
          "file_size": 0,\
\
28\
\
          "unavailable": true,\
\
29\
\
          "mimetype": "string",\
\
30\
\
          "url": "string",\
\
31\
\
          "url_expires_at": 0,\
\
32\
\
          "type": "video",\
\
33\
\
          "size": {\
\
34\
\
            "width": 0,\
\
35\
\
            "height": 0\
\
36\
\
          },\
\
37\
\
          "gif": true\
\
38\
\
        },\
\
39\
\
        {\
\
40\
\
          "id": "string",\
\
41\
\
          "file_size": 0,\
\
42\
\
          "unavailable": true,\
\
43\
\
          "mimetype": "string",\
\
44\
\
          "url": "string",\
\
\
* * *\
\
\
\
Yes\
\
No
