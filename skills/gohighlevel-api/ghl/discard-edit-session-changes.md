# Discard edit session changes

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/discard-edit-session
- **Summary:** Cancels the edit session and deletes all staged changes without affecting the live queue.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/discard-edit-session#__docusaurus_skipToContent_fallback)

Version: v3

Discard edit session changes
============================

POST 

https://services.leadconnectorhq.com/social-media-posting/category/queues/:queueId/edit/discard

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Cancels the edit session and deletes all staged changes without affecting the live queue.

### Requirements

#### Scope(s)

`socialplanner/category.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/discard-edit-session#request "Direct link to request")

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

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/discard-edit-session#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Edit session discarded successfully.

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

**Example:** `Edit session discarded successfully`

**traceId**string

    {  "success": true,  "statusCode": 200,  "results": {    "message": "Edit session discarded successfully"  },  "traceId": "string"}
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

    curl -L 'https://services.leadconnectorhq.com/social-media-posting/category/queues/:queueId/edit/discard' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "609e126a1c4ae1001291e1b5",  "sessionId": "60af88475f1b2c001f5d5f4b",  "keepInDraft": false}'

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
