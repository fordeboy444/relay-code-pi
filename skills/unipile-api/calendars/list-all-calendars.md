# List all calendars

- **URL:** https://developer.unipile.com/reference/calendarscontroller_listcalendars
- **Summary:** Returns a list of calendars.

cursor

string

A cursor used for pagination. If supported by the provider, use `next_cursor` given by the previous page of the list, else use `offset`.

offset

number

An offset used for pagination, if supported by the provider, else use `cursor`.

limit

number

The limit of items to be returned.

account_id

string

required

The id of the account to use.

200

OK

===========

object

data

array of objects

required

data\*

object

object

string

enum

required

`Calendar`

id

string

required

The ID of the calendar.

version

string

required

Opaque identifier representing the current state of the resource. The value changes whenever the resource is modified and should only be used for change detection.

name

string

required

Name of the calendar.

description

string

Description of the calendar.

is_read_only

boolean

required

Indicates if the calendar is read-only or not.

is_owned_by_user

boolean

required

Indicates if the user owns this calendar.

is_default

boolean

Indicates if this is the default calendar of the user.

is_primary

boolean

Indicates if this is the primary calendar of the user.

access_role

string

enum

The access role of the authenticated user for this calendar.

`owner` `writer` `reader` `freeBusyReader`

etag

string

Provider ETag for this calendar.

background_color

string

required

Background color of the calendar in hexadecimal format.

foreground_color

string

Foreground color of the calendar in hexadecimal format.

sync_activated

boolean

Indicates if calendar sync is activated.

sync_token

string

Provider sync token used to resume calendar synchronization.

string

Option 2

timezone

string

Timezone used in this calendar.

next_cursor

string

Cursor to get the next page of results if supported. Else use `offset`.

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
https://api1.unipile.com:13111/api/v1/calendars

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/calendars \\

3

     \--header 'accept: application/json'

23

1

{

2

  "data": \[\
\
3\
\
    {\
\
4\
\
      "object": "Calendar",\
\
5\
\
      "id": "string",\
\
6\
\
      "version": "string",\
\
7\
\
      "name": "string",\
\
8\
\
      "description": "string",\
\
9\
\
      "is_read_only": true,\
\
10\
\
      "is_owned_by_user": true,\
\
11\
\
      "is_default": true,\
\
12\
\
      "is_primary": true,\
\
13\
\
      "access_role": "owner",\
\
14\
\
      "etag": "string",\
\
15\
\
      "background_color": "string",\
\
16\
\
      "foreground_color": "string",\
\
17\
\
      "sync_activated": true,\
\
18\
\
      "sync_token": "string",\
\
19\
\
      "timezone": "string"\
\
20\
\
    }\
\
21\
\
  \],

22

  "next_cursor": "string"

23

}

No
