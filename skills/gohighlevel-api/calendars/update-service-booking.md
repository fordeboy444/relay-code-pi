# Update Service Booking

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/calendars/update-service-booking
- **Summary:** Update an existing service booking

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/update-service-booking#__docusaurus_skipToContent_fallback)

Version: v3

Update Service Booking
======================

PUT 

https://services.leadconnectorhq.com/calendars/services/bookings/:bookingId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Update an existing service booking

### Requirements

#### Scope(s)

`calendars/events.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/update-service-booking#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**bookingId** stringrequired

Unique Service Booking ID

**Example:** `IkqiJlXJ7o9h61tCHHod`

### Query Parameters

**overrideAvailability** boolean

If true the time slot validation would be avoided for any booking creation/update (even the skipSchedulingNotice)

Default value:`false`

**Example:** `false`

**skipSchedulingNotice** boolean

If set to true, the minimum scheduling notice and date range would be ignored

Default value:`false`

**Example:** `false`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**serviceLocationId**string

Service Location ID

**Example:** `65e5f6dfacf123513228d384`

**meetingLocation**string

Meeting Location (If service location is an ask the booker, then the meeting location is required)

**Example:** `123 Main St, Anytown, USA`

**title**string

Title

**Example:** `Service Appointment`

**status**string

Status

**Possible values:** \[`confirmed`, `cancelled`, `invalid`, `new`, `showed`, `noshow`\]

**Example:** `confirmed`

**startTime**string

Start Time

**Example:** `2021-06-23T03:30:00+05:30`

**endTime**string

End Time

**Example:** `2023-09-25T16:30:00+05:30`

**timezone**string

Timezone

**Example:** `America/New_York`

**services** object\[\]

If provided, services sent in the request will replace the existing services in the booking.

*   Array \[\
    \
\
**id**stringrequired\
\
Service ID\
\
**Example:** `a3b4c5d6e7f8901234567890`\
\
**staffId**string\
\
Staff ID\
\
**Example:** `8MkU36Wps2w5bRbuGtw3`\
\
**position**number\
\
Position\
\
**Example:** `0`\
\
**addOns** object\[\]\
\
Add-ons\
\
*   Array \[\
    \
\
**id**stringrequired\
\
Add-on ID\
\
**Example:** `6985f6dfacf123513228d384`\
\
**quantity**number\
\
Add-on quantity\
\
**Example:** `2`\
\
**duration**number\
\
Add-on duration (in minutes)\
\
**Example:** `30`\
\
*   \]\
    \
\
*   \]
    

    {  "serviceLocationId": "65e5f6dfacf123513228d384",  "meetingLocation": "123 Main St, Anytown, USA",  "title": "Service Appointment",  "status": "confirmed",  "startTime": "2021-06-23T03:30:00+05:30",  "endTime": "2023-09-25T16:30:00+05:30",  "timezone": "America/New_York",  "services": [    {      "id": "a3b4c5d6e7f8901234567890",      "staffId": "8MkU36Wps2w5bRbuGtw3",      "position": 0,      "addOns": [        {          "id": "6985f6dfacf123513228d384",          "quantity": 2,          "duration": 30        }      ]    }  ]}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/update-service-booking#responses "Direct link to Responses")

*   200
*   400
*   401

Booking updated successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**bookingId**stringrequired

Booking ID

**Example:** `7NkT25Vor1v4aQatFsv2`

**locationId**stringrequired

Location ID

**Example:** `0007BWpSzSwfiuSl0tR2`

**contactId**stringrequired

Contact ID

**Example:** `9NkT25Vor1v4aQatFsv2`

**serviceLocationId**stringrequired

Service Location ID

**Example:** `65e5f6dfacf123513228d384`

**title**stringrequired

Service Booking Title

**Example:** `John Doe - Hair Styling`

**startTime**stringrequired

Start Time

**Example:** `2023-09-25T16:00:00+05:30`

**endTime**stringrequired

End Time

**Example:** `2023-09-25T16:30:00+05:30`

**services** object\[\]required

Services

*   Array \[\
    \
\
**id**stringrequired\
\
Service ID\
\
**Example:** `68e5f6dfacf123513228d384`\
\
**serviceCategoryId**stringrequired\
\
Service Category ID\
\
**Example:** `3c4d5e6f7890123456789abc`\
\
**serviceStaffId**stringrequired\
\
Service Staff ID\
\
**Example:** `7NkT25Vor1v4aQatFsv2`\
\
**serviceStartTime**stringrequired\
\
Service Start Time\
\
**Example:** `2023-09-25T16:00:00+05:30`\
\
**serviceEndTime**stringrequired\
\
Service End Time\
\
**Example:** `2023-09-25T16:30:00+05:30`\
\
**serviceResources** object\[\]\
\
Service Resources\
\
*   Array \[\
    \
\
**id**stringrequired\
\
Resource ID\
\
**Example:** `6985f6dfacf123513228d384`\
\
*   \]\
    \
\
**serviceAddOns** object\[\]\
\
Service Add-ons\
\
*   Array \[\
    \
\
**id**stringrequired\
\
Add-on ID\
\
**Example:** `6985f6dfacf123513228d384`\
\
**quantity**number\
\
Add-on quantity\
\
**Example:** `2`\
\
*   \]\
    \
\
*   \]
    

**timezone**stringrequired

Timezone

**Example:** `America/New_York`

**status**stringrequired

Status

**Example:** `confirmed`

**deleted**booleanrequired

Tells if the booking is deleted

**Example:** `false`

**dateAdded**stringrequired

Date Added

**Example:** `2023-09-25T16:00:00+05:30`

**dateUpdated**stringrequired

Date Updated

**Example:** `2023-09-25T16:00:00+05:30`

**createdBy** objectrequired

Booking booked by metadata

**userId**string

The ID of the user who created or updated the appointment

**source**stringrequired

The source of the appointment

**meetingLocation**string

Meeting Location (If service location is an ask the booker, then the meeting location is used for the booking)

**Example:** `123 Main St, Anytown, USA`

**messages**array\[\]

Optional informative or warning messages (e.g. meeting location ignored for non-ask-booker locations)

**Example:** `["Meeting location is not supported for the selected service location and has been ignored."]`

    {  "bookingId": "7NkT25Vor1v4aQatFsv2",  "locationId": "0007BWpSzSwfiuSl0tR2",  "contactId": "9NkT25Vor1v4aQatFsv2",  "serviceLocationId": "65e5f6dfacf123513228d384",  "title": "John Doe - Hair Styling",  "startTime": "2023-09-25T16:00:00+05:30",  "endTime": "2023-09-25T16:30:00+05:30",  "services": [    {      "id": "68e5f6dfacf123513228d384",      "serviceCategoryId": "3c4d5e6f7890123456789abc",      "serviceStaffId": "7NkT25Vor1v4aQatFsv2",      "serviceStartTime": "2023-09-25T16:00:00+05:30",      "serviceEndTime": "2023-09-25T16:30:00+05:30",      "serviceResources": [        {          "id": "6985f6dfacf123513228d384"        }      ],      "serviceAddOns": [        {          "id": "6985f6dfacf123513228d384",          "quantity": 2        }      ]    }  ],  "timezone": "America/New_York",  "status": "confirmed",  "deleted": false,  "dateAdded": "2023-09-25T16:00:00+05:30",  "dateUpdated": "2023-09-25T16:00:00+05:30",  "createdBy": {    "userId": "string",    "source": "string"  },  "meetingLocation": "123 Main St, Anytown, USA",  "messages": [    "Meeting location is not supported for the selected service location and has been ignored."  ]}

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

User not authenticated

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

    curl -L -X PUT 'https://services.leadconnectorhq.com/calendars/services/bookings/IkqiJlXJ7o9h61tCHHod?overrideAvailability=false&skipSchedulingNotice=false' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "serviceLocationId": "65e5f6dfacf123513228d384",  "meetingLocation": "123 Main St, Anytown, USA",  "title": "Service Appointment",  "status": "confirmed",  "startTime": "2021-06-23T03:30:00+05:30",  "endTime": "2023-09-25T16:30:00+05:30",  "timezone": "America/New_York",  "services": [    {      "id": "a3b4c5d6e7f8901234567890",      "staffId": "8MkU36Wps2w5bRbuGtw3",      "position": 0,      "addOns": [        {          "id": "6985f6dfacf123513228d384",          "quantity": 2,          "duration": 30        }      ]    }  ]}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

bookingId — pathrequired

Version — headerrequired\---v3

Show optional parameters

overrideAvailability — query\---truefalse

skipSchedulingNotice — query\---truefalse

Body required

{
  "serviceLocationId": "65e5f6dfacf123513228d384",  "meetingLocation": "123 Main St, Anytown, USA",  "title": "Service Appointment",  "status": "confirmed",  "startTime": "2021-06-23T03:30:00+05:30",  "endTime": "2023-09-25T16:30:00+05:30",  "timezone": "America/New_York",  "services": \[    {      "id": "a3b4c5d6e7f8901234567890",      "staffId": "8MkU36Wps2w5bRbuGtw3",      "position": 0,      "addOns": \[        {          "id": "6985f6dfacf123513228d384",          "quantity": 2,          "duration": 30        }      \]    }  \]
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
