# Get Chat Widget

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/chat-widget/get-chat-widget
- **Summary:** Returns a single chat widget by ID.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/chat-widget/get-chat-widget#__docusaurus_skipToContent_fallback)

Version: v3

Get Chat Widget
===============

GET 

https://services.leadconnectorhq.com/chat-widget/data/:locationId/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Returns a single chat widget by ID.

### Requirements

#### Scope(s)

`chat-widget.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/chat-widget/get-chat-widget#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**id** stringrequired

The chat widget ID

**Example:** `ve9EPM428h8vShlRWsss`

**locationId** stringrequired

The location ID

**Example:** `ve9EPM428h8vShlRWsss`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/chat-widget/get-chat-widget#responses "Direct link to Responses")

*   200
*   400
*   401
*   403
*   404
*   422

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

The token does not have access to this location

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `403`

**message**string

**Example:** `You do not have permission to access this resource`

**error**string

**Example:** `Forbidden`

    {  "statusCode": 403,  "message": "You do not have permission to access this resource",  "error": "Forbidden"}

Not Found

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `404`

**message**string

**Example:** `Conversation id, contact id, workflow id, or campaign id not given`

    {  "statusCode": 404,  "message": "Conversation id, contact id, workflow id, or campaign id not given"}

Unprocessable Entity

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

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/chat-widget/chat-widget-api#authentication)
**type:** http**scopes:** `chat-widget.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/chat-widget/data/ve9EPM428h8vShlRWsss/ve9EPM428h8vShlRWsss' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

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
