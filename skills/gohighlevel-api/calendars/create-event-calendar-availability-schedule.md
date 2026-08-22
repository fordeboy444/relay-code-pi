# Create event calendar availability schedule

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/calendars/create-calendar-schedule
- **Summary:** Create a new availability schedule specifically for an event calendar. The calendar ID is provided in the path, and schedule rules and timezone are provided in the request body.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-calendar-schedule#__docusaurus_skipToContent_fallback)

Version: v3

Create event calendar availability schedule

POST 

https://services.leadconnectorhq.com/calendars/schedules/event-calendar/:calendarId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create a new availability schedule specifically for an event calendar. The calendar ID is provided in the path, and schedule rules and timezone are provided in the request body.

### Requirements

#### Scope(s)

`calendars.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-calendar-schedule#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**calendarId** stringrequired

Unique identifier of the event calendar

**Example:** `WvVX9LpvlBO6K506xLbp`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**rules** object\[\]required

Schedule rules defining when the schedule is active

*   Array \[\
    \
\
**type**stringrequired\
\
Type of schedule rule - weekday (recurring) or date (specific date)\
\
**Possible values:** \[`wday`, `date`\]\
\
**Example:** `wday`\
\
**intervals** object\[\]required\
\
Time intervals for the rule (e.g., 9 AM to 5 PM)\
\
*   Array \[\
    \
\
**from**stringrequired\
\
Start time in HH:MM format (24-hour format)\
\
**Possible values:** Value must match regular expression `^([01]?[0-9]|2[0-3]):[0-5][0-9]$`\
\
**Example:** `09:00`\
\
**to**stringrequired\
\
End time in HH:MM format (24-hour format)\
\
**Possible values:** Value must match regular expression `^([01]?[0-9]|2[0-3]):[0-5][0-9]$`\
\
**Example:** `17:00`\
\
*   \]\
    \
\
**date**string\
\
Specific date in YYYY-MM-DD format (only for date-type rules)\
\
**Possible values:** Value must match regular expression `^\d{4}-\d{2}-\d{2}$`\
\
**Example:** `2023-04-15`\
\
**day**string\
\
Day of week (only for weekday-type rules)\
\
**Possible values:** \[`sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`\]\
\
**Example:** `monday`\
\
*   \]
    

**timezone**stringrequired

Timezone for the schedule (IANA timezone identifier)

**Possible values:** Value must match regular expression `^[A-Za-z_]+/[A-Za-z_]+$`

**Example:** `America/New_York`

    {  "rules": [    {      "type": "wday",      "day": "monday",      "intervals": [        {          "from": "09:00",          "to": "17:00"        }      ]    }  ],  "timezone": "America/New_York"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-calendar-schedule#responses "Direct link to Responses")

*   201
*   400
*   401
*   404
*   422

Schedule created successfully for the event calendar

*   application/json

*   Schema
*   Example (auto)

**Schema**

**schedule** objectrequired

The event calendar schedule

**timezone**stringrequired

Timezone for the schedule (IANA timezone identifier)

**Example:** `America/New_York`

**rules** object\[\]required

Schedule rules defining when the schedule is active

*   Array \[\
    \
\
**type**stringrequired\
\
Type of schedule rule - weekday (recurring) or date (specific date)\
\
**Possible values:** \[`wday`, `date`\]\
\
**Example:** `wday`\
\
**intervals** object\[\]required\
\
Time intervals for the rule (e.g., 9 AM to 5 PM)\
\
*   Array \[\
    \
\
**from**stringrequired\
\
Start time in HH:MM format (24-hour format)\
\
**Possible values:** Value must match regular expression `^([01]?[0-9]|2[0-3]):[0-5][0-9]$`\
\
**Example:** `09:00`\
\
**to**stringrequired\
\
End time in HH:MM format (24-hour format)\
\
**Possible values:** Value must match regular expression `^([01]?[0-9]|2[0-3]):[0-5][0-9]$`\
\
**Example:** `17:00`\
\
*   \]\
    \
\
**date**string\
\
Specific date in YYYY-MM-DD format (only for date-type rules)\
\
**Possible values:** Value must match regular expression `^\d{4}-\d{2}-\d{2}$`\
\
**Example:** `2023-04-15`\
\
**day**string\
\
Day of week (only for weekday-type rules)\
\
**Possible values:** \[`sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`\]\
\
**Example:** `monday`\
\
*   \]
    

**calendarId**stringrequired

Calendar ID associated with the schedule

**Example:** `WvVX9LpvlBO6K506xLbp`

**dateAdded**string

Information about who created the schedule

**dateUpdated**string

Information about who last updated the schedule

    {  "schedule": {    "timezone": "America/New_York",    "rules": [      {        "type": "wday",        "intervals": [          {            "from": "09:00",            "to": "17:00"          }        ],        "date": "2023-04-15",        "day": "monday"      }    ],    "calendarId": "WvVX9LpvlBO6K506xLbp",    "dateAdded": "string",    "dateUpdated": "string"  }}

Invalid request parameters

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

Event calendar with the specified ID was not found

Validation errors in schedule rules or conflicting data

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `422`

**message**string\[\]

**Example:** `["Unprocessable Entity"]`

**error**string

**Example:** `Unprocessable Entity`

    {  "statusCode": 422,  "message": [    "Unprocessable Entity"  ],  "error": "Unprocessable Entity"}

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

    curl -L 'https://services.leadconnectorhq.com/calendars/schedules/event-calendar/WvVX9LpvlBO6K506xLbp' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "rules": [    {      "type": "wday",      "day": "monday",      "intervals": [        {          "from": "09:00",          "to": "17:00"        }      ]    }  ],  "timezone": "America/New_York"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

calendarId — pathrequired

Version — headerrequired\---v3

Body required

{
  "rules": \[    {      "type": "wday",      "day": "monday",      "intervals": \[        {          "from": "09:00",          "to": "17:00"        }      \]    }  \],  "timezone": "America/New_York"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
