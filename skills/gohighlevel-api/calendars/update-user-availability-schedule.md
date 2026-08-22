# Update user availability schedule

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/calendars/update-schedule
- **Summary:** Modify an existing schedule by updating its rules, timezone, and name All fields are optional - only provided fields will be updated.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/update-schedule#__docusaurus_skipToContent_fallback)

Version: v3

Update user availability schedule
=================================

PUT 

https://services.leadconnectorhq.com/calendars/schedules/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Modify an existing schedule by updating its rules, timezone, and name All fields are optional - only provided fields will be updated.

### Requirements

#### Scope(s)

`calendars.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/update-schedule#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**id** stringrequired

Unique identifier of the schedule to update

**Example:** `sch123def456ghi789`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**name**string

Human-readable name for the schedule

**Example:** `Updated Business Hours`

**rules** object\[\]

Updated schedule rules defining when the schedule is active

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
    

**timezone**string

Updated timezone for the schedule (IANA timezone identifier)

**Possible values:** Value must match regular expression `^[A-Za-z_]+/[A-Za-z_]+$`

**Example:** `America/Los_Angeles`

    {  "name": "Updated Business Hours",  "rules": [    {      "type": "wday",      "day": "monday",      "intervals": [        {          "from": "08:00",          "to": "18:00"        }      ]    }  ],  "timezone": "America/Los_Angeles"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/update-schedule#responses "Direct link to Responses")

*   200
*   400
*   401
*   404
*   422

Schedule updated successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**schedule** objectrequired

Schedule

**id**stringrequired

Unique identifier for the schedule

**Example:** `IkqiJlXJ7o9h61tCHHod`

**name**stringrequired

Human-readable name for the schedule

**Example:** `Business Hours Schedule`

**locationId**stringrequired

Location ID where this schedule applies

**Example:** `IkqiJlXJ7o9h61tCHHod`

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

**Example:** `America/New_York`

**dateAdded**stringrequired

ISO date string when the schedule was created

**Example:** `2023-01-15T10:30:00.000Z`

**dateUpdated**stringrequired

ISO date string when the schedule was last updated

**Example:** `2023-01-20T14:45:00.000Z`

**userId**stringrequired

User ID associated with the schedule

**Example:** `IkqiJlXJ7o9h61tCHHod`

**calendarIds**string\[\]

Calendar IDs associated with the schedule

**deleted**booleanrequired

Whether the schedule has been deleted

**Example:** `false`

    {  "schedule": {    "id": "IkqiJlXJ7o9h61tCHHod",    "name": "Business Hours Schedule",    "locationId": "IkqiJlXJ7o9h61tCHHod",    "rules": [      {        "type": "wday",        "intervals": [          {            "from": "09:00",            "to": "17:00"          }        ],        "date": "2023-04-15",        "day": "monday"      }    ],    "timezone": "America/New_York",    "dateAdded": "2023-01-15T10:30:00.000Z",    "dateUpdated": "2023-01-20T14:45:00.000Z",    "userId": "IkqiJlXJ7o9h61tCHHod",    "calendarIds": [      "string"    ],    "deleted": false  }}

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

Schedule with the specified ID was not found

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

    curl -L -X PUT 'https://services.leadconnectorhq.com/calendars/schedules/sch123def456ghi789' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "name": "Updated Business Hours",  "rules": [    {      "type": "wday",      "day": "monday",      "intervals": [        {          "from": "08:00",          "to": "18:00"        }      ]    }  ],  "timezone": "America/Los_Angeles"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

id — pathrequired

Version — headerrequired\---v3

Body required

{
  "name": "Updated Business Hours",  "rules": \[    {      "type": "wday",      "day": "monday",      "intervals": \[        {          "from": "08:00",          "to": "18:00"        }      \]    }  \],  "timezone": "America/Los_Angeles"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
