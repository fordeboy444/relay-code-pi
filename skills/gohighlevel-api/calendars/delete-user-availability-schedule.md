# Delete user availability schedule

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-schedule
- **Summary:** Permanently remove a schedule and all its associated rules. This action cannot be undone.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-schedule#__docusaurus_skipToContent_fallback)

Version: v3

Delete user availability schedule
=================================

DELETE 

https://services.leadconnectorhq.com/calendars/schedules/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Permanently remove a schedule and all its associated rules. This action cannot be undone.

### Requirements

#### Scope(s)

`calendars.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-schedule#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**id** stringrequired

Unique identifier of the schedule to delete

**Example:** `sch123def456ghi789`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-schedule#responses "Direct link to Responses")

*   200
*   400
*   401
*   404

Schedule deleted successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**boolean

Whether the deletion was successful

**Example:** `true`

    {  "success": true}

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

    curl -L -X DELETE 'https://services.leadconnectorhq.com/calendars/schedules/sch123def456ghi789' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

id — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
