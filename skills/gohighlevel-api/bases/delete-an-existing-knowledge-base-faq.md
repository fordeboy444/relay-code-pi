# Delete an existing knowledge base FAQ

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete
- **Summary:** Delete an existing knowledge base FAQ

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete#__docusaurus_skipToContent_fallback)

Version: v3

Delete an existing knowledge base FAQ
=====================================

DELETE 

https://services.leadconnectorhq.com/knowledge-bases/faqs/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Delete an existing knowledge base FAQ

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**id** stringrequired

faq ID as string

**Example:** `710KoEzy793Fxubft0bc`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete#responses "Direct link to Responses")

*   200
*   400
*   401
*   422
*   500

FAQ deleted successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Success status of the delete operation

**Example:** `true`

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

Internal Server Error

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `500`

**message**string

**Example:** `Internal Server Error`

    {  "statusCode": 500,  "message": "Internal Server Error"}

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

    curl -L -X DELETE 'https://services.leadconnectorhq.com/knowledge-bases/faqs/710KoEzy793Fxubft0bc' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

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
