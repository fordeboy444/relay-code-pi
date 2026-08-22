# Clone Chat Widget

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/chat-widget/clone-chat-widget
- **Summary:** Creates a copy of an existing chat widget in the same sub-account.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/chat-widget/clone-chat-widget#__docusaurus_skipToContent_fallback)

Version: v3

Clone Chat Widget
=================

POST 

https://services.leadconnectorhq.com/chat-widget/clone

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Creates a copy of an existing chat widget in the same sub-account.

### Requirements

#### Scope(s)

`chat-widget.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/chat-widget/clone-chat-widget#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

*   application/json

*   Body
*   Example

### Body**required**

**locationId**stringrequired

locationId

**Example:** `oHJiAh0wDG3BzmzACVD6`

**chatWidgetId**stringrequired

chat widget ID

**Example:** `oHJiAh0wDG3BzmzACVD6`

**name**string

Name for the cloned widget

**Example:** `Chat Widget 1 (copy)`

    {  "locationId": "oHJiAh0wDG3BzmzACVD6",  "chatWidgetId": "ve9EPM428h8vShlRWsss"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/chat-widget/clone-chat-widget#responses "Direct link to Responses")

*   201
*   400
*   401
*   403
*   404
*   422

Created

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
**type:** http**scopes:** `chat-widget.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/chat-widget/clone' \-H 'Content-Type: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "oHJiAh0wDG3BzmzACVD6",  "chatWidgetId": "oHJiAh0wDG3BzmzACVD6",  "name": "Chat Widget 1 (copy)"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired\---v3

Body required

*   Example (from schema)
*   Example

{
  "locationId": "oHJiAh0wDG3BzmzACVD6",  "chatWidgetId": "oHJiAh0wDG3BzmzACVD6",  "name": "Chat Widget 1 (copy)"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
