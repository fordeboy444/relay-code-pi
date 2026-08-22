# Update Agent Metadata

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/agent-studio/update-agent-metadata
- **Summary:** Updates agent metadata such as name, description, and status.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/update-agent-metadata#__docusaurus_skipToContent_fallback)

Version: v3

Update Agent Metadata
=====================

PATCH 

https://services.leadconnectorhq.com/agent-studio/agent/:agentId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Updates agent metadata such as name, description, and status.

### Requirements

#### Scope(s)

`agent-studio.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/update-agent-metadata#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**agentId** stringrequired

**Example:** `p1q2r3s4t5u6v7w8x9y0z1a2`

### Query Parameters

**source** string

**Example:** `api`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**locationId**stringrequired

Location ID for authorization (cannot be updated)

**Example:** `C2QujeCh8ZnC7al2InWR`

**name**string

Name of the agent

**Example:** `Updated Customer Support Agent`

**description**string

Description of the agent

**Example:** `Updated AI agent with enhanced customer support capabilities`

**status**string

Status of the agent

**Possible values:** \[`active`, `inactive`, `archived`\]

**Example:** `active`

    {  "locationId": "C2QujeCh8ZnC7al2InWR",  "name": "Updated Customer Support Agent",  "description": "Updated AI agent with enhanced customer support capabilities",  "status": "active"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/update-agent-metadata#responses "Direct link to Responses")

*   200
*   400
*   401
*   404
*   422
*   500

Agent metadata updated successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Success status

**Example:** `true`

**message**stringrequired

Response message

**Example:** `Agent updated successfully`

**data**objectrequired

Updated agent or version data

**Example:** `{"agentId":"p1q2r3s4t5u6v7w8x9y0z1a2","versionId":"v1a2b3c4d5e6f7g8h9i0","name":"Updated Customer Support Agent","description":"Updated AI agent with enhanced customer support capabilities","status":"active","updatedAt":"2024-02-27T11:45:00.000Z"}`

    {  "success": true,  "message": "Agent updated successfully",  "data": {    "agentId": "p1q2r3s4t5u6v7w8x9y0z1a2",    "versionId": "v1a2b3c4d5e6f7g8h9i0",    "name": "Updated Customer Support Agent",    "description": "Updated AI agent with enhanced customer support capabilities",    "status": "active",    "updatedAt": "2024-02-27T11:45:00.000Z"  }}

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

    curl -L -X PATCH 'https://services.leadconnectorhq.com/agent-studio/agent/p1q2r3s4t5u6v7w8x9y0z1a2?source=api' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "C2QujeCh8ZnC7al2InWR",  "name": "Updated Customer Support Agent",  "description": "Updated AI agent with enhanced customer support capabilities",  "status": "active"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

agentId — pathrequired

Version — headerrequired\---v3

Show optional parameters

source — query

Body required

{
  "locationId": "C2QujeCh8ZnC7al2InWR",  "name": "Updated Customer Support Agent",  "description": "Updated AI agent with enhanced customer support capabilities",  "status": "active"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
