# List all emails

- **URL:** https://developer.unipile.com/reference/emails
- **Summary:** Returns a list of emails.

message_id

string

A filter to target items by message_id.

thread_id

string

A filter to target items by thread identifier.

meta_only

boolean

Speed up the response by only returning the email metadata, excluding the body and attachments metadata.

truefalse

include_headers

boolean

Include the email headers in the response. `meta_only` must be false.

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

search

string

Free-text search applied to subject and body at the same time. Microsoft: requests combining search with from, to, any_email, before, after, thread_id, message_id or exclude_folders are rejected with invalid_request. IMAP: can be slow, only available within one folder, specified with folder or role, before and after are evaluated at day granularity, support depends on the IMAP server. IMAP requests combining search with any_email, exclude_folders, thread_id, multiple from values or multiple to values are rejected with invalid_request.

any_email

string

A filter to target items sent to or received from a comma-separated list of email addresses.

to

string

A filter to target items related to a certain recipient, either in the to, cc or bcc field.

from

string

A filter to target items related to a certain sender.

exclude_folders

string

A filter to exclude items from a comma-separated list of folder provider_id ( ignored if folder parameter is used ).

folder

string

A filter to target items related to a certain folder provider_id.

account_id

string

required

A filter to target items related to a certain account.

200

OK

===========

object

@todo List of Emails.

object

string

enum

required

`EmailList`

items

array

required

items\*

Mail reference

Mail metas

Full mail

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
https://api1.unipile.com:13111/api/v1/emails

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/emails \\

3

     \--header 'accept: application/json'

272

            "identifier_type": "CHAT_ATTENDEE_ID"

1

{

2

  "object": "EmailList",

3

  "items": \[\
\
4\
\
    {\
\
5\
\
      "object": "Email",\
\
6\
\
      "id": "string",\
\
7\
\
      "deprecated_id": "string",\
\
8\
\
      "kind": "0_ref",\
\
9\
\
      "account_id": "string",\
\
10\
\
      "type": "MAIL",\
\
11\
\
      "date": "2025-12-31T23:59:59.999Z",\
\
12\
\
      "role": "inbox",\
\
13\
\
      "folders": \[\
\
14\
\
        "string"\
\
15\
\
      \],\
\
16\
\
      "folderIds": \[\
\
17\
\
        "string"\
\
18\
\
      \],\
\
19\
\
      "read_date": "2025-12-31T23:59:59.999Z",\
\
20\
\
      "message_id": "string",\
\
21\
\
      "provider_id": "string"\
\
22\
\
    },\
\
23\
\
    {\
\
24\
\
      "object": "Email",\
\
25\
\
      "id": "string",\
\
26\
\
      "deprecated_id": "string",\
\
27\
\
      "account_id": "string",\
\
28\
\
      "type": "MAIL",\
\
29\
\
      "date": "2025-12-31T23:59:59.999Z",\
\
30\
\
      "role": "inbox",\
\
31\
\
      "folders": \[\
\
32\
\
        "string"\
\
33\
\
      \],\
\
34\
\
      "folderIds": \[\
\
35\
\
        "string"\
\
36\
\
      \],\
\
37\
\
      "read_date": "2025-12-31T23:59:59.999Z",\
\
38\
\
      "message_id": "string",\
\
39\
\
      "provider_id": "string",\
\
40\
\
      "kind": "1_meta",\
\
41\
\
      "body_plain": "",\
\
42\
\
      "body": "",\
\
43\
\
      "from_attendee": {\
\
44\
\
        "display_name": "string",\
\
\
* * *\
\
\
\
Yes\
\
No
