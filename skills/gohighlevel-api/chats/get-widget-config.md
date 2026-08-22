# Get Widget Config

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/chat-widget/get-widget
- **Summary:** Returns widget configuration by ID.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/chat-widget/get-widget#__docusaurus_skipToContent_fallback)

Version: v3

Get Widget Config
=================

GET 

https://services.leadconnectorhq.com/chat-widget/public/config/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Returns widget configuration by ID.

Request[​](https://marketplace.gohighlevel.com/docs/ghl/chat-widget/get-widget#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**id** stringrequired

The chat widget ID

**Example:** `ve9EPM428h8vShlRWsss`

### Query Parameters

**version** string

Default value:`2`

**Example:** `3`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/chat-widget/get-widget#responses "Direct link to Responses")

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

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/chat-widget/public/config/ve9EPM428h8vShlRWsss?version=2' \-H 'Version: v3'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Parameters

id — pathrequired

Version — headerrequired\---v3

Show optional parameters

version — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
