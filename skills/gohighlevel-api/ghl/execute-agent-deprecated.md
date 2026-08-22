# Execute Agent (Deprecated)

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/agent-studio/execute-agent-deprecated
- **Summary:** **Deprecated endpoint - use POST /agent/:agentId/execute instead.**

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/execute-agent-deprecated#__docusaurus_skipToContent_fallback)

Version: v3

Execute Agent (Deprecated)
==========================

POST 

https://services.leadconnectorhq.com/agent-studio/public-api/agents/:agentId/execute

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

deprecated

This endpoint has been deprecated and may be replaced or removed in future versions of the API.

**Deprecated endpoint - use POST /agent/:agentId/execute instead.**

Executes the specified agent and returns a non-streaming JSON response with the complete agent output. The agent must be in active status and belong to the specified location. locationId is required in the request body.

**Session Management:**

*   For the first message in a new session, do not include the `executionId` in the request payload.
*   The API will return an `executionId` along with the agent response, which uniquely identifies this conversation session.
*   To continue the conversation within the same session, include the `executionId` from the previous response in subsequent requests.

### Requirements

#### Scope(s)

`agent-studio.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/execute-agent-deprecated#request "Direct link to request")

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

**message**stringrequired

Message to send to the agent

**Example:** `How can you help me with my marketing?`

**executionId**string

Unique session identifier that maintains conversational context across multiple interactions within the same agent session. Omit this field for the first message in a new session. Include the executionId returned from the previous response to maintain context in subsequent messages.

**Example:** `a1b2c3d4e5f6g7h8i9j0k1l2`

**inputVariables**object

Input variables to pass to the agent. These should match the input variables defined in the agent configuration.

**Example:** `{"customerName":"John Doe","orderNumber":"ORD-12345"}`

**versionId**string

Published version ID to execute. If not provided, the latest published production version will be used.

**Example:** `b2b1c1d2-3e4f-5a6b-7c8d-9e0f1a2b3c4d`

**attachments** object\[\]

Attachments for the message

*   Array \[\
    \
\
**type**stringrequired\
\
Type of attachment\
\
**Example:** `image`\
\
**imageUrl**stringrequired\
\
URL of the image attachment\
\
**Example:** `https://example.com/image.png`\
\
*   \]
    

**locationId**stringrequired

Location ID

**Example:** `C2QujeCh8ZnC7al2InWR`

**contactId**string

Contact ID to associate with this execution. When provided, contact data will be hydrated and made available to the agent.

**Example:** `cid_abc123def456`

    {  "message": "How can you help me with my marketing?",  "executionId": "a1b2c3d4e5f6g7h8i9j0k1l2",  "inputVariables": {    "customerName": "John Doe",    "orderNumber": "ORD-12345"  },  "versionId": "b2b1c1d2-3e4f-5a6b-7c8d-9e0f1a2b3c4d",  "attachments": [    {      "type": "image",      "imageUrl": "https://example.com/image.png"    }  ],  "locationId": "C2QujeCh8ZnC7al2InWR",  "contactId": "cid_abc123def456"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/execute-agent-deprecated#responses "Direct link to Responses")

*   200
*   400
*   401
*   403
*   404
*   422
*   500

Agent executed successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Success status

**Example:** `true`

**executionId**stringrequired

Unique session identifier that maintains conversational context across multiple interactions within the same agent session. Use this ID in subsequent requests to continue the conversation.

**Example:** `a1b2c3d4e5f6g7h8i9j0k1l2`

**interactionId**stringrequired

Unique identifier for a single interaction cycle, consisting of one user input and the corresponding agent response. Each message exchange generates a new interactionId.

**Example:** `m9n8o7p6q5r4s3t2u1v0w9x8`

**response**stringrequired

Agent response text

**Example:** `I can help you with various tasks...`

**type**stringrequired

Response type

**Example:** `text`

**nextExpectedInput**stringrequired

Expected input type for next interaction

**Example:** `text`

**goalCompletion**booleanrequired

When end node is added in the graph, this will be true if the agent reached the end node in the graph

**Example:** `false`

**executionStatus**stringrequired

Execution status

**Example:** `completed`

**flowSwitch**booleanrequired

Whether flow was switched

**Example:** `false`

**attachments**arrayrequired

Response attachments

**Example:** `[]`

**generativeOutputs**arrayrequired

Generated outputs

**Example:** `[]`

    {  "success": true,  "executionId": "a1b2c3d4e5f6g7h8i9j0k1l2",  "interactionId": "m9n8o7p6q5r4s3t2u1v0w9x8",  "response": "I can help you with various tasks...",  "type": "text",  "nextExpectedInput": "text",  "goalCompletion": false,  "executionStatus": "completed",  "flowSwitch": false,  "attachments": [],  "generativeOutputs": []}

Agent is not active or invalid request - locationId is required

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

User does not have required scopes to execute this agent

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

    curl -L 'https://services.leadconnectorhq.com/agent-studio/public-api/agents/p1q2r3s4t5u6v7w8x9y0z1a2/execute?source=api' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "message": "How can you help me with my marketing?",  "executionId": "a1b2c3d4e5f6g7h8i9j0k1l2",  "inputVariables": {    "customerName": "John Doe",    "orderNumber": "ORD-12345"  },  "versionId": "b2b1c1d2-3e4f-5a6b-7c8d-9e0f1a2b3c4d",  "attachments": [    {      "type": "image",      "imageUrl": "https://example.com/image.png"    }  ],  "locationId": "C2QujeCh8ZnC7al2InWR",  "contactId": "cid_abc123def456"}'

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
  "message": "How can you help me with my marketing?",  "executionId": "a1b2c3d4e5f6g7h8i9j0k1l2",  "inputVariables": {    "customerName": "John Doe",    "orderNumber": "ORD-12345"  },  "versionId": "b2b1c1d2-3e4f-5a6b-7c8d-9e0f1a2b3c4d",  "attachments": \[    {      "type": "image",      "imageUrl": "https://example.com/image.png"    }  \],  "locationId": "C2QujeCh8ZnC7al2InWR",  "contactId": "cid_abc123def456"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
