# Remove user availability schedule from a calendar

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/calendars/remove-calendar-from-schedule
- **Summary:** Removes the association between a team calendar and the given schedule by removing the calendarId from the schedule

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/remove-calendar-from-schedule#__docusaurus_skipToContent_fallback)

Version: v3

Remove user availability schedule from a calendar

DELETE 

https://services.leadconnectorhq.com/calendars/schedules/:id/associations/:calendarId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Removes the association between a team calendar and the given schedule by removing the calendarId from the schedule

### Requirements

#### Scope(s)

`calendars.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/remove-calendar-from-schedule#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**id** stringrequired

Unique identifier of the schedule

**Example:** `IkqiJlXJ7o9h61tCHHod`

**calendarId** stringrequired

Unique identifier of the calendar to remove from the schedule

**Example:** `WvVX9LpvlBO6K506xLbp`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/remove-calendar-from-schedule#responses "Direct link to Responses")

*   200
*   400
*   401
*   404

Calendar successfully removed from schedule

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**boolean

**Example:** `true`

    {  "success": true}

Schedule and calendar must belong to the same location

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

Schedule or calendar not found

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `400`

**message**string

**Example:** `Bad Request`

    {  "statusCode": 400,  "message": "Bad Request"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/calendars/calendars-api#authentication)
**type:** http**scopes:** `calendars.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/calendars/schedules/IkqiJlXJ7o9h61tCHHod/associations/WvVX9LpvlBO6K506xLbp' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

id — pathrequired

calendarId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
