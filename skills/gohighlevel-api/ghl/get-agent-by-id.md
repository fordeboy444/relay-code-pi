# Get Agent

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/agent-studio/get-agent-by-id
- **Summary:** Gets a specific agent by its ID for the specified location with all its versions. Returns complete agent metadata and all non-deleted versions (draft, staging, production). locationId is required parameter. The agent must have active status.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/get-agent-by-id#__docusaurus_skipToContent_fallback)

Version: v3

Get Agent
=========

GET 

https://services.leadconnectorhq.com/agent-studio/agent/:agentId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Gets a specific agent by its ID for the specified location with all its versions. Returns complete agent metadata and all non-deleted versions (draft, staging, production). locationId is required parameter. The agent must have active status.

### Requirements

#### Scope(s)

`agent-studio.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/get-agent-by-id#request "Direct link to request")

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

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/get-agent-by-id#responses "Direct link to Responses")

*   200
*   400
*   401
*   404
*   422
*   500

Agent retrieved successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Success status

**Example:** `true`

**message**stringrequired

Response message

**Example:** `Agent retrieved successfully`

**agent**objectrequired

Agent metadata with all active versions

**Example:** `{"id":"d6a6792d-0d50-4e8f-9c3b-ecd8096d0bdd","agentId":"AgfS2JXWsSN8aXb5c4d2","name":"Customer Support Agent","description":"AI agent for customer support","agencyId":"5DP4iH6HLkQsiKESj6rh","locationId":"C2QujeCh8ZnC7al2InWR","productSlug":"agent_studio","productId":"agent_studio","authorId":"usr_123","status":"active","folderId":"vEoIigWSAw1BQA9DEchD","folderName":"Default Agents","createdAt":"2026-03-06T10:37:01.013Z","updatedAt":"2026-03-06T10:37:01.014Z","deleted":false,"productionVersion":{"versionId":"Ver1K8sSF2nC7al5InWz","versionName":"Content Creation Agent v1","isPublished":true,"inputVariables":[],"updatedAt":"2026-03-02T06:53:40.570Z"},"versions":[{"id":"3f9d9ab7-5ca4-4e64-8472-eab9e77a0fe3","versionId":"Ver1K8sSF2nC7al5InWz","agentId":"AgfS2JXWsSN8aXb5c4d2","agencyId":"5DP4iH6HLkQsiKESj6rh","locationId":"C2QujeCh8ZnC7al2InWR","versionName":"v1","description":"AI agent for customer support","state":"staging","isPublished":false,"scopes":[],"nodes":[],"edges":[],"uiNodes":[],"uiEdges":[],"globalVariables":[],"inputVariables":[],"runtimeVariables":[],"viewport":{"x":0,"y":0,"zoom":1},"globalConfig":{},"createdAt":"2026-03-06T10:37:01.079Z","updatedAt":"2026-03-06T10:37:01.079Z","deleted":false,"storedInBucket":true,"bucketFilePath":"agent-definitions/5DP4iH6HLkQsiKESj6rh/vEoIigWSAw1BQA9DEchD/d6a6792d-0d50-4e8f-9c3b-ecd8096d0bdd/3f9d9ab7-5ca4-4e64-8472-eab9e77a0fe3.json"}]}`

**traceId**string

Request trace ID for debugging

**Example:** `22dbda99-13d3-4b4d-a30e-c468334e2178`

    {  "success": true,  "message": "Agent retrieved successfully",  "agent": {    "id": "d6a6792d-0d50-4e8f-9c3b-ecd8096d0bdd",    "agentId": "AgfS2JXWsSN8aXb5c4d2",    "name": "Customer Support Agent",    "description": "AI agent for customer support",    "agencyId": "5DP4iH6HLkQsiKESj6rh",    "locationId": "C2QujeCh8ZnC7al2InWR",    "productSlug": "agent_studio",    "productId": "agent_studio",    "authorId": "usr_123",    "status": "active",    "folderId": "vEoIigWSAw1BQA9DEchD",    "folderName": "Default Agents",    "createdAt": "2026-03-06T10:37:01.013Z",    "updatedAt": "2026-03-06T10:37:01.014Z",    "deleted": false,    "productionVersion": {      "versionId": "Ver1K8sSF2nC7al5InWz",      "versionName": "Content Creation Agent v1",      "isPublished": true,      "inputVariables": [],      "updatedAt": "2026-03-02T06:53:40.570Z"    },    "versions": [      {        "id": "3f9d9ab7-5ca4-4e64-8472-eab9e77a0fe3",        "versionId": "Ver1K8sSF2nC7al5InWz",        "agentId": "AgfS2JXWsSN8aXb5c4d2",        "agencyId": "5DP4iH6HLkQsiKESj6rh",        "locationId": "C2QujeCh8ZnC7al2InWR",        "versionName": "v1",        "description": "AI agent for customer support",        "state": "staging",        "isPublished": false,        "scopes": [],        "nodes": [],        "edges": [],        "uiNodes": [],        "uiEdges": [],        "globalVariables": [],        "inputVariables": [],        "runtimeVariables": [],        "viewport": {          "x": 0,          "y": 0,          "zoom": 1        },        "globalConfig": {},        "createdAt": "2026-03-06T10:37:01.079Z",        "updatedAt": "2026-03-06T10:37:01.079Z",        "deleted": false,        "storedInBucket": true,        "bucketFilePath": "agent-definitions/5DP4iH6HLkQsiKESj6rh/vEoIigWSAw1BQA9DEchD/d6a6792d-0d50-4e8f-9c3b-ecd8096d0bdd/3f9d9ab7-5ca4-4e64-8472-eab9e77a0fe3.json"      }    ]  },  "traceId": "22dbda99-13d3-4b4d-a30e-c468334e2178"}

Bad Request - locationId is required

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

Agent not found or not available

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
**type:** http**scopes:** `agent-studio.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/agent-studio/agent/p1q2r3s4t5u6v7w8x9y0z1a2?locationId=C2QujeCh8ZnC7al2InWR&source=api' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

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
