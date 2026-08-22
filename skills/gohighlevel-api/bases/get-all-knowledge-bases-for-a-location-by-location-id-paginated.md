# Get all knowledge bases for a location by location Id (paginated)

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/list-all-knowledge-bases-paginated
- **Summary:** Get all knowledge bases for a location by location Id (paginated)

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/list-all-knowledge-bases-paginated#__docusaurus_skipToContent_fallback)

Version: v3

Get all knowledge bases for a location by location Id (paginated)

GET 

https://services.leadconnectorhq.com/knowledge-bases/

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get all knowledge bases for a location by location Id (paginated)

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/list-all-knowledge-bases-paginated#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**locationId** stringrequired

**query** string

search query for knowledge base name

**limit** number

Maximum number of knowledge bases to return

Default value:`20`

**Example:** `20`

**lastKnowledgeBaseId** string

ID of the last knowledge base from the previous page (for pagination)

**Example:** `ZwTB8S0yo0FIBY6OPZTD`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/list-all-knowledge-bases-paginated#responses "Direct link to Responses")

*   200
*   400
*   401

Paginated knowledge bases retrieved successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Success status of the operation

**Example:** `true`

**data** objectrequired

Paginated knowledge bases data

**knowledgeBases** object\[\]required

Array of knowledge bases

*   Array \[\
    \
\
**id**stringrequired\
\
Knowledge base ID\
\
**Example:** `ZwTB8S0yo0FIBY6OPZTD`\
\
**name**stringrequired\
\
Knowledge base name\
\
**Example:** `bot training kb`\
\
**createdAt**stringrequired\
\
Date when knowledge base was created\
\
**Example:** `2025-08-02T20:26:57.057Z`\
\
*   \]
    

**activeCount**numberrequired

Total count of all active knowledge bases

**Example:** `16`

**hasMore**booleanrequired

Whether there are more knowledge bases available

**Example:** `true`

**lastKnowledgeBaseId**string

ID of the last knowledge base in this page (use for next page request)

**Example:** `ZwTB8S0yo0FIBY6OPZTD`

    {  "success": true,  "data": {    "knowledgeBases": [      {        "id": "ZwTB8S0yo0FIBY6OPZTD",        "name": "bot training kb",        "createdAt": "2025-08-02T20:26:57.057Z"      }    ],    "activeCount": 16,    "hasMore": true,    "lastKnowledgeBaseId": "ZwTB8S0yo0FIBY6OPZTD"  }}

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

    curl -L 'https://services.leadconnectorhq.com/knowledge-bases/?limit=20&lastKnowledgeBaseId=ZwTB8S0yo0FIBY6OPZTD' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

Version — headerrequired\---v3

Show optional parameters

query — query

limit — query

lastKnowledgeBaseId — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
