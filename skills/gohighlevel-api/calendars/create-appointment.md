# Create appointment

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/calendars/create-appointment
- **Summary:** Create appointment

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-appointment#__docusaurus_skipToContent_fallback)

Version: v3

Create appointment
==================

POST 

https://services.leadconnectorhq.com/calendars/events/appointments

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create appointment

### Requirements

#### Scope(s)

`calendars/events.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-appointment#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

*   application/json

*   Body
*   Example (auto)

### Body**required**

**title**string

Title

**Example:** `Test Event`

**meetingLocationType**string

Meeting location type.

*   If `address` is provided in the request body, the `meetingLocationType` defaults to **custom**.

**Possible values:** \[`custom`, `zoom`, `gmeet`, `phone`, `address`, `ms_teams`, `google`\]

**Example:** `custom`

**meetingLocationId**string

The unique identifier for the meeting location.

*   This value can be found in `calendar.locationConfigurations`or `calendar.teamMembers[].locationConfigurations`

**Default value:** `default`

**Example:** `custom_0`

**overrideLocationConfig**boolean

Flag to override location config

*   **false** - If only `meetingLocationId` is provided
*   **true** - If only `meetingLocationType` is provided

**Example:** `true`

**appointmentStatus**string

**Possible values:** \[`new`, `confirmed`, `cancelled`, `showed`, `noshow`, `invalid`, `completed`, `active`\]

**Example:** `confirmed`

**assignedUserId**string

Assigned User Id

**Example:** `0007BWpSzSwfiuSl0tR2`

**description**string

Appointment Description

**Example:** `Booking a call to discuss the project`

**address**string

Appointment Address

**Example:** `Zoom`

**ignoreDateRange**boolean

If set to true, the minimum scheduling notice and date range would be ignored

**Example:** `false`

**toNotify**boolean

If set to false, the automations will not run. Defaults to true

**Default value:** `true`

**Example:** `false`

**ignoreFreeSlotValidation**boolean

If true the time slot validation would be avoided for any appointment creation (even the ignoreDateRange)

**Example:** `true`

**rrule**string

RRULE as per the iCalendar (RFC 5545) specification for recurring events. DTSTART is not required, instance ids are calculated on the basis of startTime of the event. The rrule only be applied if ignoreFreeSlotValidation is true.

**Examples:**

*   Example 1
*   Example 2

**Example:** `RRULE:FREQ=DAILY;INTERVAL=1;COUNT=5`

**Example:** `RRULE:FREQ=DAILY;INTERVAL=1;UNTIL=20210623T043000Z EXDATE:20211105T040000Z,20211105T040000Z`

**calendarId**stringrequired

Calendar Id

**Example:** `CVokAlI8fgw4WYWoCtQz`

**locationId**stringrequired

Location Id

**Example:** `C2QujeCh8ZnC7al2InWR`

**contactId**stringrequired

Contact Id

**Example:** `0007BWpSzSwfiuSl0tR2`

**startTime**stringrequired

Start Time

**Example:** `2021-06-23T03:30:00+05:30`

**endTime**string

End Time

**Example:** `2021-06-23T04:30:00+05:30`

    {  "title": "Test Event",  "meetingLocationType": "custom",  "meetingLocationId": "custom_0",  "overrideLocationConfig": true,  "appointmentStatus": "confirmed",  "assignedUserId": "0007BWpSzSwfiuSl0tR2",  "description": "Booking a call to discuss the project",  "address": "Zoom",  "ignoreDateRange": false,  "toNotify": false,  "ignoreFreeSlotValidation": true,  "rrule": "RRULE:FREQ=DAILY;INTERVAL=1;COUNT=5",  "calendarId": "CVokAlI8fgw4WYWoCtQz",  "locationId": "C2QujeCh8ZnC7al2InWR",  "contactId": "0007BWpSzSwfiuSl0tR2",  "startTime": "2021-06-23T03:30:00+05:30",  "endTime": "2021-06-23T04:30:00+05:30"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-appointment#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**calendarId**stringrequired

Calendar Id

**Example:** `CVokAlI8fgw4WYWoCtQz`

**locationId**stringrequired

Location Id

**Example:** `C2QujeCh8ZnC7al2InWR`

**contactId**stringrequired

Contact Id

**Example:** `0007BWpSzSwfiuSl0tR2`

**startTime**string

Start Time

**Example:** `2021-06-23T03:30:00+05:30`

**endTime**string

End Time

**Example:** `2021-06-23T04:30:00+05:30`

**title**string

Title

**Example:** `Test Event`

**meetingLocationType**string

Meeting Location Type

**Default value:** `default`

**Example:** `custom`

**appointmentStatus**string

**Possible values:** \[`new`, `confirmed`, `cancelled`, `showed`, `noshow`, `invalid`, `active`, `completed`\]

**Example:** `confirmed`

**assignedUserId**string

Assigned User Id

**Example:** `0007BWpSzSwfiuSl0tR2`

**address**string

Appointment Address

**Example:** `Zoom`

**isRecurring**boolean

true if the event is recurring otherwise false

**Example:** `true`

**rrule**string

RRULE as per the iCalendar (RFC 5545) specification for recurring events

**Examples:**

*   Example 1
*   Example 2

**Example:** `RRULE:FREQ=DAILY;INTERVAL=1;COUNT=5`

**Example:** `RRULE:FREQ=DAILY;INTERVAL=1;UNTIL=20210623T043000Z EXDATE:20211105T040000Z,20211105T040000Z`

**dateAdded**stringrequired

Date Added

**Example:** `2021-06-23T03:30:00+05:30`

**dateUpdated**stringrequired

Date Updated

**Example:** `2021-06-23T04:30:00+05:30`

**id**stringrequired

Id

**Example:** `0TkCdp9PfvLeWKYRRvIz`

    {  "calendarId": "CVokAlI8fgw4WYWoCtQz",  "locationId": "C2QujeCh8ZnC7al2InWR",  "contactId": "0007BWpSzSwfiuSl0tR2",  "startTime": "2021-06-23T03:30:00+05:30",  "endTime": "2021-06-23T04:30:00+05:30",  "title": "Test Event",  "meetingLocationType": "custom",  "appointmentStatus": "confirmed",  "assignedUserId": "0007BWpSzSwfiuSl0tR2",  "address": "Zoom",  "isRecurring": "true",  "rrule": "RRULE:FREQ=DAILY;INTERVAL=1;COUNT=5",  "dateAdded": "2021-06-23T03:30:00+05:30",  "dateUpdated": "2021-06-23T04:30:00+05:30",  "id": "0TkCdp9PfvLeWKYRRvIz"}

Bad Request

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `400`

**message**string

**Example:** `Bad Request`

    {  "statusCode": 400,  "message": "Bad Request"}

Unauthorized

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `401`

**message**string

**Example:** `Invalid token: access token is invalid`

**error**string

**Example:** `Unauthorized`

    {  "statusCode": 401,  "message": "Invalid token: access token is invalid",  "error": "Unauthorized"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/calendars/calendars-api#authentication)
**type:** http**scopes:** `calendars/events.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/calendars/events/appointments' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "title": "Test Event",  "meetingLocationType": "custom",  "meetingLocationId": "custom_0",  "overrideLocationConfig": true,  "appointmentStatus": "confirmed",  "assignedUserId": "0007BWpSzSwfiuSl0tR2",  "description": "Booking a call to discuss the project",  "address": "Zoom",  "ignoreDateRange": false,  "toNotify": false,  "ignoreFreeSlotValidation": true,  "rrule": "RRULE:FREQ=DAILY;INTERVAL=1;COUNT=5",  "calendarId": "CVokAlI8fgw4WYWoCtQz",  "locationId": "C2QujeCh8ZnC7al2InWR",  "contactId": "0007BWpSzSwfiuSl0tR2",  "startTime": "2021-06-23T03:30:00+05:30",  "endTime": "2021-06-23T04:30:00+05:30"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired\---v3

Body required

{
  "title": "Test Event",  "meetingLocationType": "custom",  "meetingLocationId": "custom_0",  "overrideLocationConfig": true,  "appointmentStatus": "confirmed",  "assignedUserId": "0007BWpSzSwfiuSl0tR2",  "description": "Booking a call to discuss the project",  "address": "Zoom",  "ignoreDateRange": false,  "toNotify": false,  "ignoreFreeSlotValidation": true,  "rrule": "RRULE:FREQ=DAILY;INTERVAL=1;COUNT=5",  "calendarId": "CVokAlI8fgw4WYWoCtQz",  "locationId": "C2QujeCh8ZnC7al2InWR",  "contactId": "0007BWpSzSwfiuSl0tR2",  "startTime": "2021-06-23T03:30:00+05:30",  "endTime": "2021-06-23T04:30:00+05:30"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
