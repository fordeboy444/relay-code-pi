# Delete trained pages

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete-trained-urls-for-knowledge-base
- **Summary:** Delete trained pages

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete-trained-urls-for-knowledge-base#__docusaurus_skipToContent_fallback)

Version: v3

Delete trained pages
====================

DELETE 

https://services.leadconnectorhq.com/knowledge-bases/crawler

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Delete trained pages

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete-trained-urls-for-knowledge-base#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

*   application/json

*   Body
*   Example (auto)

### Body**required**

**knowledgeBaseId**stringrequired

knowledge base ID as string

**Example:** `tDtDnQdgm2LXpyiqYvZ6`

**locationId**stringrequired

location ID as string

**Example:** `tDtDnQdgm2LXpyiqYvZ6`

**urlIds**string\[\]required

List of trained urls ids ( fetched from the Get all trained page links by knowledge base endpoint)

**Example:** `[tDtDnQdgm2LXpyiqYvZ6]`

    {  "knowledgeBaseId": "tDtDnQdgm2LXpyiqYvZ6",  "locationId": "tDtDnQdgm2LXpyiqYvZ6",  "urlIds": "[tDtDnQdgm2LXpyiqYvZ6]"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/delete-trained-urls-for-knowledge-base#responses "Direct link to Responses")

*   200
*   400
*   401
*   422
*   500

Selected pages deleted successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Indicates if the operation was successful

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

    curl -L -X DELETE 'https://services.leadconnectorhq.com/knowledge-bases/crawler' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "knowledgeBaseId": "tDtDnQdgm2LXpyiqYvZ6",  "locationId": "tDtDnQdgm2LXpyiqYvZ6",  "urlIds": "[tDtDnQdgm2LXpyiqYvZ6]"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired\---v3

Body required

{
  "knowledgeBaseId": "tDtDnQdgm2LXpyiqYvZ6",  "locationId": "tDtDnQdgm2LXpyiqYvZ6",  "urlIds": "\[tDtDnQdgm2LXpyiqYvZ6\]"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
