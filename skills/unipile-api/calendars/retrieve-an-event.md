# Retrieve an event

- **URL:** https://developer.unipile.com/reference/calendarscontroller_getcalendarevent
- **Summary:** Retrieve the details of a calendar event.

event_id

string

required

The id of the wanted event.

calendar_id

string

required

The id of calendar of the wanted event.

account_id

string

required

The id of the account to use.

200

OK

===========

object

object

string

enum

required

`CalendarEvent`

id

string

required

The ID of the calendar event.

ical_uid

string

The iCalendar UID of the event, as defined in RFC5545.

master_event_id

string

If event instance, the ID of the master event.

calendar_id

string

required

The ID of the calendar the event belongs to.

created_at

string

required

The date the event was created. Uses ISO 8601 UTC datetime (YYYY-MM-DDTHH:MM:SS.sssZ).

updated_at

string

required

The date the event was last updated. Uses ISO 8601 UTC datetime (YYYY-MM-DDTHH:MM:SS.sssZ).

title

string

required

The title of the event.

body

string

The body of the event.

location

string

The location of the event.

is_cancelled

boolean

required

Is the event cancelled.

is_all_day

boolean

required

Is the event all day.

is_attendees_list_hidden

boolean

required

Is the attendees list hidden for attendees.

attendees

array of objects

The attendees of the event.

attendees

object

An attendee of a calendar event.

email

string

required

Email address of the attendee.

display_name

string

Display name of the attendee.

comment

string

The response comment of the attendee.

is_organizer

boolean

required

Is the attendee the organizer of the event.

is_optional

boolean

required

Is the attendee optional (based on type).

is_resource

boolean

required

Is the attendee a resource (based on type).

typeString 1String 2String 3

enum

required

Type of the attendee.

`required`

response_statusString 1String 2String 3String 4

enum

required

The response status of the attendee. `yes` if the invitation is accepted. `no` if the invitation is declined. `maybe` if the attendee is not sure. `noreply` if the invitation is pending.

`yes`

start

object

required

The start date and time of the event.

Object 1

Object 2

end

object

required

The end date and time of the event.

Object 1

Object 2

recurrence

array of strings

List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545.

organizer

object

required

email

string

required

Email address of the organizer.

display_name

string

Display name of the organizer.

conference

object

provider

string

enum

required

The conference provider.

`google_meet` `zoom` `teams` `unknown`

conference_id

string

The provider-native conference ID.

url

string

The conference URL. If not provided, it will automatically create a new conference (only teams and google_meet available)

visibilityString 1String 2

enum

required

The visibility of the event.

`public`

transparencyString 1String 2

enum

required

The transparency of the event. `opaque` does block time on the calendar and is equivalent to setting Show me as to Busy in the Calendar UI. `transparent` does not block time on the calendar and is equivalent to setting Show me as to Available in the Calendar UI.

`opaque`

event_type

string

required

Defaults to default

The type of the event (`birthday`, `fromGmail`, `outOfOffice`...)

guests_can_modify

boolean

Defaults to false

If true, allow guests to modify the event.  
`Outlook Calendar`: Not supported, this parameter will always be false.

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
Calendar Event not found
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
https://api1.unipile.com:13111/api/v1/calendars/{calendar_id}/events/{event_id}

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/calendars/calendar_id/events/event_id \\

3

     \--header 'accept: application/json'

51

}

1

{

2

  "object": "CalendarEvent",

3

  "id": "string",

4

  "ical_uid": "string",

5

  "master_event_id": "string",

6

  "calendar_id": "string",

7

  "created_at": "string",

8

  "updated_at": "string",

9

  "title": "string",

10

  "body": "string",

11

  "location": "string",

12

  "is_cancelled": true,

13

  "is_all_day": true,

14

  "is_attendees_list_hidden": true,

15

  "attendees": \[\
\
16\
\
    {\
\
17\
\
      "email": "string",\
\
18\
\
      "display_name": "string",\
\
19\
\
      "comment": "string",\
\
20\
\
      "is_organizer": true,\
\
21\
\
      "is_optional": true,\
\
22\
\
      "is_resource": true,\
\
23\
\
      "type": "required",\
\
24\
\
      "response_status": "yes"\
\
25\
\
    }\
\
26\
\
  \],

27

  "start": {

28

    "date_time": "string",

29

    "time_zone": "string"

30

  },

31

  "end": {

32

    "date_time": "string",

33

    "time_zone": "string"

34

  },

35

  "recurrence": \[\
\
36\
\
    "string"\
\
37\
\
  \],

38

  "organizer": {

39

    "email": "string",

40

    "display_name": "string"

41

  },

42

  "conference": {

43

    "provider": "google_meet",

No
