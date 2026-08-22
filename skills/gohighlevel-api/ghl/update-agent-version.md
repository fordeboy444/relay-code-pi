# Update Agent

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/agent-studio/update-agent-version
- **Summary:** Updates a specific agent version by versionId. Supports updating nodes, edges, variables, and configuration.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/update-agent-version#__docusaurus_skipToContent_fallback)

Version: v3

Update Agent
============

PATCH 

https://services.leadconnectorhq.com/agent-studio/agent/versions/:versionId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Updates a specific agent version by versionId. Supports updating nodes, edges, variables, and configuration.

### Requirements

#### Scope(s)

`agent-studio.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/update-agent-version#request "Direct link to request")

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

**versionName**string

Version name

**Example:** `Customer Support Agent v2`

**description**string

Description of the version

**Example:** `Updated version with improved customer handling logic`

**nodes**object\[\]

Complete array of nodes for the agent workflow. Provide all nodes including unchanged ones.

**Example:** `[{"nodeId":"node_1","nodeName":"Start","type":"start","isStartNode":true},{"nodeId":"node_2","nodeName":"LLM Node","type":"llm","nodeConfig":{"prompt":"How can I help you?","llmProvider":"openai","llmModel":"gpt-4"}}]`

**edges**object\[\]

Complete array of edges connecting the nodes. Provide all edges including unchanged ones.

**Example:** `[{"startNode":"node_1","endNode":"node_2"}]`

**globalVariables**object\[\]

Global variables accessible throughout the agent workflow

**Example:** `[{"key":"apiKey","type":"string","value":"your-api-key"}]`

**inputVariables**object\[\]

Input variables required from user at execution time

**Example:** `[{"key":"customerName","type":"string","description":"Customer name for personalization"}]`

**runtimeVariables**object\[\]

Runtime variables generated during agent execution

**Example:** `[{"key":"sessionId","type":"string","description":"Current session identifier"}]`

**globalConfig**object

Global configuration including prompts and settings

**Example:** `{"globalPrompt":{"currentPrompt":"You are a helpful customer support assistant.","history":[]}}`

**userId**string

User ID performing the update

**Example:** `usr_abc123def456`

**userName**string

User name performing the update

**Example:** `John Doe`

    {  "locationId": "C2QujeCh8ZnC7al2InWR",  "versionName": "Customer Support Agent v2",  "description": "Updated version with improved customer handling logic",  "nodes": [    {      "nodeId": "node_1",      "nodeName": "Start",      "type": "start",      "isStartNode": true    },    {      "nodeId": "node_2",      "nodeName": "LLM Node",      "type": "llm",      "nodeConfig": {        "prompt": "How can I help you?",        "llmProvider": "openai",        "llmModel": "gpt-4"      }    }  ],  "edges": [    {      "startNode": "node_1",      "endNode": "node_2"    }  ],  "globalVariables": [    {      "key": "apiKey",      "type": "string",      "value": "your-api-key"    }  ],  "inputVariables": [    {      "key": "customerName",      "type": "string",      "description": "Customer name for personalization"    }  ],  "runtimeVariables": [    {      "key": "sessionId",      "type": "string",      "description": "Current session identifier"    }  ],  "globalConfig": {    "globalPrompt": {      "currentPrompt": "You are a helpful customer support assistant.",      "history": []    }  },  "userId": "usr_abc123def456",  "userName": "John Doe"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/update-agent-version#responses "Direct link to Responses")

*   200
*   400
*   401
*   404
*   422
*   500

Version updated successfully

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

    curl -L -X PATCH 'https://services.leadconnectorhq.com/agent-studio/agent/versions/v1a2b3c4d5e6f7g8h9i0?source=api' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "C2QujeCh8ZnC7al2InWR",  "versionName": "Customer Support Agent v2",  "description": "Updated version with improved customer handling logic",  "nodes": [    {      "nodeId": "node_1",      "nodeName": "Start",      "type": "start",      "isStartNode": true    },    {      "nodeId": "node_2",      "nodeName": "LLM Node",      "type": "llm",      "nodeConfig": {        "prompt": "How can I help you?",        "llmProvider": "openai",        "llmModel": "gpt-4"      }    }  ],  "edges": [    {      "startNode": "node_1",      "endNode": "node_2"    }  ],  "globalVariables": [    {      "key": "apiKey",      "type": "string",      "value": "your-api-key"    }  ],  "inputVariables": [    {      "key": "customerName",      "type": "string",      "description": "Customer name for personalization"    }  ],  "runtimeVariables": [    {      "key": "sessionId",      "type": "string",      "description": "Current session identifier"    }  ],  "globalConfig": {    "globalPrompt": {      "currentPrompt": "You are a helpful customer support assistant.",      "history": []    }  },  "userId": "usr_abc123def456",  "userName": "John Doe"}'

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
  "locationId": "C2QujeCh8ZnC7al2InWR",  "versionName": "Customer Support Agent v2",  "description": "Updated version with improved customer handling logic",  "nodes": \[    {      "nodeId": "node_1",      "nodeName": "Start",      "type": "start",      "isStartNode": true    },    {      "nodeId": "node_2",      "nodeName": "LLM Node",      "type": "llm",      "nodeConfig": {        "prompt": "How can I help you?",        "llmProvider": "openai",        "llmModel": "gpt-4"      }    }  \],  "edges": \[    {      "startNode": "node_1",      "endNode": "node_2"    }  \],  "globalVariables": \[    {      "key": "apiKey",      "type": "string",      "value": "your-api-key"    }  \],  "inputVariables": \[    {      "key": "customerName",      "type": "string",      "description": "Customer name for personalization"    }  \],  "runtimeVariables": \[    {      "key": "sessionId",      "type": "string",      "description": "Current session identifier"    }  \],  "globalConfig": {    "globalPrompt": {      "currentPrompt": "You are a helpful customer support assistant.",      "history": \[\]    }  },  "userId": "usr_abc123def456",  "userName": "John Doe"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
