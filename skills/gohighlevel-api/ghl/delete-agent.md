# Delete Agent

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/delete-agent
- **Summary:** Deletes an AI agent permanently. This action cannot be undone. All associated configurations and conversation history will be removed.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/delete-agent#__docusaurus_skipToContent_fallback)

Version: v3

Delete Agent
============

DELETE 

https://services.leadconnectorhq.com/conversation-ai/agents/:agentId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Deletes an AI agent permanently. This action cannot be undone. All associated configurations and conversation history will be removed.

### Requirements

#### Scope(s)

`conversation-ai.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/delete-agent#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**agentId** stringrequired

Conversations AI agent id

**Example:** `EmployeeId123`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/delete-agent#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Indicates if the agent was deleted successfully.

**Example:** `true`

**id**stringrequired

Unique identifier of the deleted agent.

**Example:** `emp_123`

    {  "success": true,  "id": "emp_123"}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/conversation-ai-api#authentication)
**type:** http**scopes:** `conversation-ai.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/conversation-ai/agents/EmployeeId123' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

agentId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
