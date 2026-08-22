# Delete Agent

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/agent-studio/delete-agent
- **Summary:** Deletes an agent and all its versions.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/delete-agent#__docusaurus_skipToContent_fallback)

Version: v3

Delete Agent
============

DELETE 

https://services.leadconnectorhq.com/agent-studio/agent/:agentId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Deletes an agent and all its versions.

### Requirements

#### Scope(s)

`agent-studio.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/delete-agent#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**agentId** stringrequired

**Example:** `p1q2r3s4t5u6v7w8x9y0z1a2`

### Query Parameters

**locationId** stringrequired

**Example:** `C2QujeCh8ZnC7al2InWR`

**source** string

**Example:** `api`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/delete-agent#responses "Direct link to Responses")

*   200
*   400
*   401
*   404
*   422
*   500

Agent deleted successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Success status

**Example:** `true`

**message**stringrequired

Response message

**Example:** `Agent deleted successfully`

**agentId**string

Deleted agent ID

**Example:** `p1q2r3s4t5u6v7w8x9y0z1a2`

    {  "success": true,  "message": "Agent deleted successfully",  "agentId": "p1q2r3s4t5u6v7w8x9y0z1a2"}

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

Agent not found

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

    curl -L -X DELETE 'https://services.leadconnectorhq.com/agent-studio/agent/p1q2r3s4t5u6v7w8x9y0z1a2?locationId=C2QujeCh8ZnC7al2InWR&source=api' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

agentId — pathrequired

locationId — queryrequired

Version — headerrequired\---v3

Show optional parameters

source — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
