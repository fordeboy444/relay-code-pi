# Get Recurring Task By Id

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/locations/get-recurring-task-by-id
- **Summary:** Get Recurring Task By Id

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/locations/get-recurring-task-by-id#__docusaurus_skipToContent_fallback)

Version: v3

Get Recurring Task By Id
========================

GET 

https://services.leadconnectorhq.com/locations/:locationId/recurring-tasks/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get Recurring Task By Id

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/locations/get-recurring-task-by-id#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**id** stringrequired

Recurring Task Id

**Example:** `sx6wyHhbFdRXh302Lunr`

**locationId** stringrequired

Location Id

**Example:** `sx6wyHhbFdRXh302Lunr`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/locations/get-recurring-task-by-id#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**recurringTask** objectrequired

Recurring Tasks

**id**stringrequired

Recurring Task Id

**Example:** `sx6wyHhbFdRXh302Lunr`

**title**stringrequired

Name of the task

**Example:** `Task Name`

**description**stringrequired

Description of the task

**Example:** `Task Description`

**locationId**stringrequired

Location Id

**Example:** `sx6wyHhbFdRXh302Lunr`

**updatedAt**stringrequired

Updated At

**Example:** `2021-04-15T10:00:00.000Z`

**createdAt**stringrequired

Created At

**Example:** `2021-04-15T10:00:00.000Z`

**rruleOptions** objectrequired

Recurring rules

**intervalType**stringrequired

**Possible values:** \[`yearly`, `monthly`, `weekly`, `daily`, `hourly`\]

**Example:** `monthly`

**interval**numberrequired

**Example:** `2`

**startDate**stringrequired

Start Date

**Example:** `2021-09-30T00:00:00.000Z`

**endDate**string

End Date

**Example:** `2021-09-30T00:00:00.000Z`

**dayOfMonth**number

1, 2, 3, ..., 27, 31

**Example:** `15`

**dayOfWeek**string

**Possible values:** \[`MO`, `TU`, `WE`, `TH`, `FR`, `SA`, `SU`\]

**Example:** `MO`

**monthOfYear**number

1, 2, ....., 11, 12

**Example:** `1`

**count**number

Max number of task executions

**Example:** `10`

**createTaskIfOverDue**boolean

Create Task If Over Due

**Example:** `true`

**dueAfterSeconds**numberrequired

Due after seconds

**Example:** `23404000`

**totalOccurrence**numberrequired

Total Occurrence

**Example:** `10`

**deleted**booleanrequired

Deleted

**Example:** `false`

**assignedTo**string

Assigned To

**Example:** `sx6wyHhbFdRXh302Lunr`

**contactId**string

Contact Id

**Example:** `v5cEPM428h8vShlRW1KT`

    {  "recurringTask": {    "id": "sx6wyHhbFdRXh302Lunr",    "title": "Task Name",    "description": "Task Description",    "locationId": "sx6wyHhbFdRXh302Lunr",    "updatedAt": "2021-04-15T10:00:00.000Z",    "createdAt": "2021-04-15T10:00:00.000Z",    "rruleOptions": {      "createTaskIfOverDue": false,      "interval": 1,      "intervalType": "hourly",      "startDate": "2024-10-29T12:34:03.000Z",      "dueAfterSeconds": 600,      "count": 550    },    "totalOccurrence": 10,    "deleted": false,    "assignedTo": "sx6wyHhbFdRXh302Lunr",    "contactId": "v5cEPM428h8vShlRW1KT"  }}

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

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/locations/sub-account-formerly-location-api#authentication)
**type:** http**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/locations/sx6wyHhbFdRXh302Lunr/recurring-tasks/sx6wyHhbFdRXh302Lunr' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

id — pathrequired

locationId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
