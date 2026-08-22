# Delete Agent

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/voice-ai/delete-agent
- **Summary:** Delete a voice AI agent and all its configurations

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/delete-agent#__docusaurus_skipToContent_fallback)

Version: v3

Delete Agent
============

DELETE 

https://services.leadconnectorhq.com/voice-ai/agents/:agentId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Delete a voice AI agent and all its configurations

### Requirements

#### Scope(s)

`voice-ai-agents.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/delete-agent#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**agentId** stringrequired

Unique agent identifier

**Example:** `507f1f77bcf86cd799439011`

### Query Parameters

**locationId** stringrequired

Location ID

**Example:** `LOC123456789ABCDEF`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/delete-agent#responses "Direct link to Responses")

*   204
*   400
*   401
*   422

Agent deleted successfully
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/voice-ai-api#authentication)
**type:** http**scopes:** `voice-ai-agents.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/voice-ai/agents/507f1f77bcf86cd799439011?locationId=LOC123456789ABCDEF' \-H 'Authorization: Bearer <Authorization>'

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

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
