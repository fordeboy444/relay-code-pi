# Remove Action from Agent

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/delete-action
- **Summary:** Permanently deletes an action. This will remove the action from all associated agents and cannot be undone.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/delete-action#__docusaurus_skipToContent_fallback)

Version: v3

Remove Action from Agent
========================

DELETE 

https://services.leadconnectorhq.com/conversation-ai/agents/:agentId/actions/:actionId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Permanently deletes an action. This will remove the action from all associated agents and cannot be undone.

### Requirements

#### Scope(s)

`conversation-ai.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/delete-action#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**actionId** stringrequired

The unique identifier of the action ID Attached to the agent

**agentId** stringrequired

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/delete-action#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**data** objectrequired

Deleted action information

**id**stringrequired

ID of the deleted action

**Example:** `actionId123`

**success**booleanrequired

Success status of the request

**Example:** `true`

    {  "data": {    "id": "actionId123"  },  "success": true}
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

    curl -L -X DELETE 'https://services.leadconnectorhq.com/conversation-ai/agents/:agentId/actions/:actionId' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

actionId — pathrequired

agentId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
