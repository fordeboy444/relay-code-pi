# Get Service Bookings

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/calendars/get-service-bookings
- **Summary:** Retrieve service bookings for a location within a given date range, with an optional service location filter.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-service-bookings#__docusaurus_skipToContent_fallback)

Version: v3

Get Service Bookings
====================

GET 

https://services.leadconnectorhq.com/calendars/services/bookings

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve service bookings for a location within a given date range, with an optional service location filter.

### Requirements

#### Scope(s)

`calendars/events.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-service-bookings#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**locationId** stringrequired

Location ID

**Example:** `0007BWpSzSwfiuSl0tR2`

**startTime** stringrequired

Start Time (timestamp in milliseconds as string)

**Example:** `1704110400000`

**endTime** stringrequired

End Time (timestamp in milliseconds as string)

**Example:** `1704114000000`

**timezone** string

Timezone

**Example:** `America/New_York`

**serviceLocationId** string

Service Location ID

**Example:** `65e5f6dfacf123513228d384`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-service-bookings#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**bookings** object\[\]required

Service Bookings

*   Array \[\
    \
\
**bookingId**stringrequired\
\
Booking ID\
\
**Example:** `7NkT25Vor1v4aQatFsv2`\
\
**locationId**stringrequired\
\
Location ID\
\
**Example:** `0007BWpSzSwfiuSl0tR2`\
\
**contactId**stringrequired\
\
Contact ID\
\
**Example:** `9NkT25Vor1v4aQatFsv2`\
\
**serviceLocationId**stringrequired\
\
Service Location ID\
\
**Example:** `65e5f6dfacf123513228d384`\
\
**title**stringrequired\
\
Service Booking Title\
\
**Example:** `John Doe - Hair Styling`\
\
**startTime**stringrequired\
\
Start Time\
\
**Example:** `2023-09-25T16:00:00+05:30`\
\
**endTime**stringrequired\
\
End Time\
\
**Example:** `2023-09-25T16:30:00+05:30`\
\
**services** object\[\]required\
\
Services\
\
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
*   \]\
    \
\
**timezone**stringrequired\
\
Timezone\
\
**Example:** `America/New_York`\
\
**status**stringrequired\
\
Status\
\
**Example:** `confirmed`\
\
**deleted**booleanrequired\
\
Tells if the booking is deleted\
\
**Example:** `false`\
\
**dateAdded**stringrequired\
\
Date Added\
\
**Example:** `2023-09-25T16:00:00+05:30`\
\
**dateUpdated**stringrequired\
\
Date Updated\
\
**Example:** `2023-09-25T16:00:00+05:30`\
\
**createdBy** objectrequired\
\
Booking booked by metadata\
\
**userId**string\
\
The ID of the user who created or updated the appointment\
\
**source**stringrequired\
\
The source of the appointment\
\
**meetingLocation**string\
\
Meeting Location (If service location is an ask the booker, then the meeting location is used for the booking)\
\
**Example:** `123 Main St, Anytown, USA`\
\
*   \]
    

    {  "bookings": [    {      "bookingId": "7NkT25Vor1v4aQatFsv2",      "locationId": "0007BWpSzSwfiuSl0tR2",      "contactId": "9NkT25Vor1v4aQatFsv2",      "serviceLocationId": "65e5f6dfacf123513228d384",      "title": "John Doe - Hair Styling",      "startTime": "2023-09-25T16:00:00+05:30",      "endTime": "2023-09-25T16:30:00+05:30",      "services": [        {          "id": "68e5f6dfacf123513228d384",          "serviceCategoryId": "3c4d5e6f7890123456789abc",          "serviceStaffId": "7NkT25Vor1v4aQatFsv2",          "serviceStartTime": "2023-09-25T16:00:00+05:30",          "serviceEndTime": "2023-09-25T16:30:00+05:30",          "serviceResources": [            {              "id": "6985f6dfacf123513228d384"            }          ],          "serviceAddOns": [            {              "id": "6985f6dfacf123513228d384",              "quantity": 2            }          ]        }      ],      "timezone": "America/New_York",      "status": "confirmed",      "deleted": false,      "dateAdded": "2023-09-25T16:00:00+05:30",      "dateUpdated": "2023-09-25T16:00:00+05:30",      "createdBy": {        "userId": "string",        "source": "string"      },      "meetingLocation": "123 Main St, Anytown, USA"    }  ]}

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
**type:** http**scopes:** `calendars/events.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/calendars/services/bookings?locationId=0007BWpSzSwfiuSl0tR2&startTime=1704110400000&endTime=1704114000000&timezone=America%2FNew_York&serviceLocationId=65e5f6dfacf123513228d384' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

startTime — queryrequired

endTime — queryrequired

Version — headerrequired\---v3

Show optional parameters

timezone — query

serviceLocationId — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
