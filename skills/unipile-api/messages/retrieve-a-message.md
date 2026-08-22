# Retrieve a message

- **URL:** https://developer.unipile.com/reference/messagescontroller_getmessage
- **Summary:** Retrieve the details of a message.

message_id

string

required

The id of the message to retrieve.

200

OK. Request succeeded.

===============================

object

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

Has additional fields

seenNumber 1Number 2

enum

required

`0`

seen_by

object

required

Has additional fields

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

id

string

required

length ≥ 1

A unique identifier.

provider_id

string

required

timestamp

string

required

sender_attendee_id

string

required

length ≥ 1

A unique identifier.

sender_id

string

required

text

string

required

string

Option 2

object

string

enum

required

`Message`

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
Message not found
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
https://api1.unipile.com:13111/api/v1/messages/{message_id}

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/messages/message_id \\

3

     \--header 'accept: application/json'

205

    "sender_attendee_id": "string",

1

{

2

  "message_id": "string",

3

  "provider_id": "string",

4

  "sender_id": "string",

5

  "text": "string",

6

  "attachments": \[\
\
7\
\
    {\
\
8\
\
      "id": "string",\
\
9\
\
      "file_size": 0,\
\
10\
\
      "unavailable": true,\
\
11\
\
      "mimetype": "string",\
\
12\
\
      "url": "string",\
\
13\
\
      "url_expires_at": 0,\
\
14\
\
      "type": "img",\
\
15\
\
      "size": {\
\
16\
\
        "width": 0,\
\
17\
\
        "height": 0\
\
18\
\
      },\
\
19\
\
      "sticker": true\
\
20\
\
    },\
\
21\
\
    {\
\
22\
\
      "id": "string",\
\
23\
\
      "file_size": 0,\
\
24\
\
      "unavailable": true,\
\
25\
\
      "mimetype": "string",\
\
26\
\
      "url": "string",\
\
27\
\
      "url_expires_at": 0,\
\
28\
\
      "type": "video",\
\
29\
\
      "size": {\
\
30\
\
        "width": 0,\
\
31\
\
        "height": 0\
\
32\
\
      },\
\
33\
\
      "gif": true\
\
34\
\
    },\
\
35\
\
    {\
\
36\
\
      "id": "string",\
\
37\
\
      "file_size": 0,\
\
38\
\
      "unavailable": true,\
\
39\
\
      "mimetype": "string",\
\
40\
\
      "url": "string",\
\
41\
\
      "url_expires_at": 0,\
\
42\
\
      "type": "audio",\
\
43\
\
      "duration": 0,\
\
44\
\
      "voice_note": true\
\
\
* * *\
\
\
\
Yes\
\
No
