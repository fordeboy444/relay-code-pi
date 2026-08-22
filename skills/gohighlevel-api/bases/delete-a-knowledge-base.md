# Delete a knowledge base

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete-knowledge-base
- **Summary:** Delete a knowledge base

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete-knowledge-base#__docusaurus_skipToContent_fallback)

Version: v3

Delete a knowledge base
=======================

DELETE 

https://services.leadconnectorhq.com/knowledge-bases/:knowledgeBaseId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Delete a knowledge base

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete-knowledge-base#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**knowledgeBaseId** stringrequired

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete-knowledge-base#responses "Direct link to Responses")

*   200
*   400
*   401

Knowledge base deleted successfully

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

    curl -L -X DELETE 'https://services.leadconnectorhq.com/knowledge-bases/:knowledgeBaseId' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

knowledgeBaseId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
