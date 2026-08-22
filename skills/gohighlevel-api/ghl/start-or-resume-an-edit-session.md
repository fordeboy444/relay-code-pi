# Start or resume an edit session

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-edit-session
- **Summary:** Creates a draft copy of queue items for editing. Changes are staged until saved or discarded.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-edit-session#__docusaurus_skipToContent_fallback)

Version: v3

Start or resume an edit session
===============================

POST 

https://services.leadconnectorhq.com/social-media-posting/category/queues/:queueId/edit/start

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Creates a draft copy of queue items for editing. Changes are staged until saved or discarded.

### Requirements

#### Scope(s)

`socialplanner/category.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-edit-session#request "Direct link to request")

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

    {  "locationId": "609e126a1c4ae1001291e1b5"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-edit-session#responses "Direct link to Responses")

*   201
*   400
*   401
*   422

Edit session started successfully.

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

**Example:** `true`

**statusCode**numberrequired

**Example:** `201`

**results** objectrequired

**message**string

A message indicating the result of the operation.

**Example:** `Edit session started successfully`

**sessionId**string

The ID of the edit session.

**Example:** `60af88475f1b2c001f5d5f4b`

**itemCount**number

Number of items staged for editing.

**Example:** `25`

**traceId**string

    {  "success": true,  "statusCode": 201,  "results": {    "message": "Edit session started successfully",    "sessionId": "60af88475f1b2c001f5d5f4b",    "itemCount": 25  },  "traceId": "string"}
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

    curl -L 'https://services.leadconnectorhq.com/social-media-posting/category/queues/:queueId/edit/start' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "609e126a1c4ae1001291e1b5"}'

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
  "locationId": "609e126a1c4ae1001291e1b5"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
