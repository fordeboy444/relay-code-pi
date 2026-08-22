# Create an event

- **URL:** https://developer.unipile.com/reference/calendarscontroller_createcalendarevent
- **Summary:** Create a calendar event.

calendar_id

string

required

The id of calendar receiving the event.

account_id

string

required

The id of the account to use.

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

transparencyString 1String 2

enum

The transparency of the event. `opaque` does block time on the calendar and is equivalent to setting Show me as to Busy in the Calendar UI. `transparent` does not block time on the calendar and is equivalent to setting Show me as to Available in the Calendar UI.

opaque

visibilityString 1String 2

enum

The visibility of the event.

public

conference

object

conference object

is_attendees_list_hidden

boolean

Is the attendees list hidden for attendees.

truefalse

attendees

array of objects

required

attendees\*

ADD object

recurrence

array of strings

List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545.

recurrence

ADD string

start

object

required

The start date and time of the event.

start object

end

object

required

The end date and time of the event.

end object

color

string

The color of the event.  
`Google Calendar`: `#7986CB`, `#33B679`, `#8E24AA`, `#E67C73`, `#F6BF26`, `#F4511E`, `#039BE5`, `#616161`, `#3F51B5`, `#0B8043`, `#D50000`

notify

boolean

Defaults to false

If true, send notifications about the event to invited attendees.  
`Outlook Calendar`: Not supported, this parameter will always be true.

truefalse

guests_can_modify

boolean

Defaults to false

If true, allow guests to modify the event.  
`Outlook Calendar`: Not supported, this parameter will always be false.

truefalse

201

Created

================

object

object

string

enum

required

`CalendarEventCreated`

event_id

string

required

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
Calendar not found

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
Calender provider not supported

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

https://api1.unipile.com:13111/api/v1/calendars/{calendar_id}/events

1

curl \--request POST \\

2

     \--url https://api1.unipile.com:13111/api/v1/calendars/calendar_id/events \\

3

     \--header 'accept: application/json' \\

4

     \--header 'content-type: application/json'

1

{

2

  "object": "CalendarEventCreated",

3

  "event_id": "string"

4

}

No
