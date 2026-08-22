# Update a knowledge base

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/update-knowledge-base
- **Summary:** Update a knowledge base

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/update-knowledge-base#__docusaurus_skipToContent_fallback)

Version: v3

Update a knowledge base
=======================

PUT 

https://services.leadconnectorhq.com/knowledge-bases/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Update a knowledge base

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/update-knowledge-base#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**id** stringrequired

*   application/json

*   Body
*   Example (auto)

### Body**required**

**name**string

field to update the name of the knowledge base

**description**string

field to update the description of the knowledge base

    {  "name": "string",  "description": "string"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/update-knowledge-base#responses "Direct link to Responses")

*   200
*   400
*   401

Knowledge base updated successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

    {  "success": true}

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

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/knowledge-base-api#authentication)
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

    curl -L -X PUT 'https://services.leadconnectorhq.com/knowledge-bases/:id' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "name": "string",  "description": "string"}'

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
  "name": "string",  "description": "string"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
