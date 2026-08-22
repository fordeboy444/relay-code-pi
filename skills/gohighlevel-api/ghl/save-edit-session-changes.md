# Save edit session changes

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/save-edit-session
- **Summary:** Applies all staged changes to the live queue and closes the edit session.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/save-edit-session#__docusaurus_skipToContent_fallback)

Version: v3

Save edit session changes
=========================

POST 

https://services.leadconnectorhq.com/social-media-posting/category/queues/:queueId/edit/save

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Applies all staged changes to the live queue and closes the edit session.

### Requirements

#### Scope(s)

`socialplanner/category.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/save-edit-session#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**queueId** stringrequired

*   application/json

*   Body
*   Example (auto)

### Body**required**

**locationId**stringrequired

Location ID

**Example:** `609e126a1c4ae1001291e1b5`

**sessionId**stringrequired

Edit session ID

**Example:** `60af88475f1b2c001f5d5f4b`

**keepInDraft**boolean

If true, keeps the queue in DRAFT state after saving instead of automatically activating it. Only applicable when the queue is currently in DRAFT status.

**Default value:** `false`

**Example:** `false`

    {  "locationId": "609e126a1c4ae1001291e1b5",  "sessionId": "60af88475f1b2c001f5d5f4b",  "keepInDraft": false}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/save-edit-session#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Edit session saved successfully.

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

**Example:** `true`

**statusCode**numberrequired

**Example:** `200`

**results** objectrequired

**message**string

A message indicating the result of the operation.

**Example:** `Edit session saved successfully`

**updatedSlots** object\[\]

Updated slot information for all items after saving changes

*   Array \[\
    \
\
**itemId**string\
\
The ID of the queue item\
\
**Example:** `60af88475f1b2c001f5d5f4b`\
\
**scheduledDateTime**string<date-time>nullable\
\
The updated scheduled date/time for this item\
\
**Example:** `2023-10-15T10:00:00.000Z`\
\
**isSkipped**boolean\
\
Indicates if this time slot is skipped\
\
**Example:** `false`\
\
*   \]
    

**totalPostsChanged**number

Number of unique posts that had their slots changed

**Example:** `10`

**traceId**string

    {  "success": true,  "statusCode": 200,  "results": {    "message": "Edit session saved successfully",    "updatedSlots": [      {        "itemId": "60af88475f1b2c001f5d5f4b",        "scheduledDateTime": "2023-10-15T10:00:00.000Z",        "isSkipped": false      }    ],    "totalPostsChanged": 10  },  "traceId": "string"}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/social-planner/social-media-posting-api#authentication)
**type:** http**scopes:** `socialplanner/category.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/social-media-posting/category/queues/:queueId/edit/save' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "609e126a1c4ae1001291e1b5",  "sessionId": "60af88475f1b2c001f5d5f4b",  "keepInDraft": false}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

queueId — pathrequired

Version — headerrequired\---v3

Body required

{
  "locationId": "609e126a1c4ae1001291e1b5",  "sessionId": "60af88475f1b2c001f5d5f4b",  "keepInDraft": false
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
