# Get Free Slots

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/calendars/get-slots
- **Summary:** Get free slots for a calendar between a date range. Optionally a consumer can also request free slots in a particular timezone and also for a particular user.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-slots#__docusaurus_skipToContent_fallback)

Version: v3

Get Free Slots
==============

GET 

https://services.leadconnectorhq.com/calendars/:calendarId/free-slots

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get free slots for a calendar between a date range. Optionally a consumer can also request free slots in a particular timezone and also for a particular user.

### Requirements

#### Scope(s)

`calendars.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-slots#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**calendarId** stringrequired

Calendar Id

**Example:** `ocQHyuzHvysMo5N5VsXc`

### Query Parameters

**startDate** numberrequired

Start Date (**⚠️ Important:** Date range cannot be more than 31 days)

**Example:** `1548898600000`

**endDate** numberrequired

End Date (**⚠️ Important:** Date range cannot be more than 31 days)

**Example:** `1601490599999`

**timezone** string

The timezone in which the free slots are returned

**Example:** `America/Chihuahua`

**userId** string

The user for whom the free slots are returned

**Example:** `082goXVW3lIExEQPOnd3`

**userIds** string\[\]

The users for whom the free slots are returned

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-slots#responses "Direct link to Responses")

*   200
*   400
*   401

Availability map keyed by date (YYYY-MM-DD)

*   application/json

*   Schema
*   Example (auto)

**Schema**

**property name\*** SlotsSchema

**slots**string\[\]required

**Example:** `["2024-10-28T10:00:00-05:00","2024-10-28T11:00:00-05:00"]`

    {  "2024-10-28": {    "slots": [      "2024-10-28T10:00:00-05:00",      "2024-10-28T11:00:00-05:00"    ]  },  "2024-10-29": {    "slots": [      "2024-10-29T10:00:00-05:00",      "2024-10-29T14:30:00-05:00"    ]  }}

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
**type:** http**scopes:** `calendars.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/calendars/ocQHyuzHvysMo5N5VsXc/free-slots?startDate=1548898600000&endDate=1601490599999&timezone=America%2FChihuahua&userId=082goXVW3lIExEQPOnd3' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

calendarId — pathrequired

startDate — queryrequired

endDate — queryrequired

Version — headerrequired\---v3

Show optional parameters

timezone — query

userId — query

userIds — queryAdd item

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
