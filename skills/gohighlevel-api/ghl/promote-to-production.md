# Promote to Production

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/agent-studio/promote-and-publish
- **Summary:** Promotes a draft version to production.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/promote-and-publish#__docusaurus_skipToContent_fallback)

Version: v3

Promote to Production
=====================

POST 

https://services.leadconnectorhq.com/agent-studio/agent/versions/:versionId/publish

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Promotes a draft version to production.

### Requirements

#### Scope(s)

`agent-studio.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/promote-and-publish#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**versionId** stringrequired

**Example:** `v1a2b3c4d5e6f7g8h9i0`

### Query Parameters

**source** string

**Example:** `api`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**locationId**stringrequired

Location ID for authorization

**Example:** `C2QujeCh8ZnC7al2InWR`

**userId**string

User ID performing the promotion action

**Example:** `usr_abc123def456`

**userName**string

User name performing the promotion action

**Example:** `John Doe`

**userEmail**string

User email performing the promotion action

**Example:** `john.doe@example.com`

    {  "locationId": "C2QujeCh8ZnC7al2InWR",  "userId": "usr_abc123def456",  "userName": "John Doe",  "userEmail": "john.doe@example.com"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/promote-and-publish#responses "Direct link to Responses")

*   200
*   400
*   401
*   404
*   422
*   500

Version promoted and published successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Success status

**Example:** `true`

**message**stringrequired

Response message

**Example:** `Draft published to production successfully. New draft version created for future edits.`

**data**objectrequired

Result data with production and new draft version details

**Example:** `{"productionVersion":{"versionId":"v1a2b3c4d5e6f7g8h9i0","agentId":"p1q2r3s4t5u6v7w8x9y0z1a2","versionName":"Customer Support Agent v2","state":"prod","isPublished":true,"version":2,"publishedAt":"2024-02-27T12:00:00.000Z","publishedBy":"usr_abc123def456","publishedByName":"John Doe","publishedByEmail":"john.doe@example.com"},"newDraftVersion":{"versionId":"v2b3c4d5e6f7g8h9i0j1","agentId":"p1q2r3s4t5u6v7w8x9y0z1a2","versionName":"Customer Support Agent v3","state":"draft","isPublished":false,"version":3,"createdAt":"2024-02-27T12:00:00.000Z"}}`

    {  "success": true,  "message": "Draft published to production successfully. New draft version created for future edits.",  "data": {    "productionVersion": {      "versionId": "v1a2b3c4d5e6f7g8h9i0",      "agentId": "p1q2r3s4t5u6v7w8x9y0z1a2",      "versionName": "Customer Support Agent v2",      "state": "prod",      "isPublished": true,      "version": 2,      "publishedAt": "2024-02-27T12:00:00.000Z",      "publishedBy": "usr_abc123def456",      "publishedByName": "John Doe",      "publishedByEmail": "john.doe@example.com"    },    "newDraftVersion": {      "versionId": "v2b3c4d5e6f7g8h9i0j1",      "agentId": "p1q2r3s4t5u6v7w8x9y0z1a2",      "versionName": "Customer Support Agent v3",      "state": "draft",      "isPublished": false,      "version": 3,      "createdAt": "2024-02-27T12:00:00.000Z"    }  }}

Bad Request - Only draft versions can be promoted

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

Version not found

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

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/agent-studio-apis#authentication)
**type:** http**scopes:** `agent-studio.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/agent-studio/agent/versions/v1a2b3c4d5e6f7g8h9i0/publish?source=api' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \--data-raw '{  "locationId": "C2QujeCh8ZnC7al2InWR",  "userId": "usr_abc123def456",  "userName": "John Doe",  "userEmail": "john.doe@example.com"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

versionId — pathrequired

Version — headerrequired\---v3

Show optional parameters

source — query

Body required

{
  "locationId": "C2QujeCh8ZnC7al2InWR",  "userId": "usr_abc123def456",  "userName": "John Doe",  "userEmail": "john.doe@example.com"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
