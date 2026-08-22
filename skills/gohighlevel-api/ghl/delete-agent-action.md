# Delete Agent Action

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/voice-ai/delete-action
- **Summary:** Delete an existing action from a voice AI agent. This permanently removes the action and its configuration.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/delete-action#__docusaurus_skipToContent_fallback)

Version: v3

Delete Agent Action
===================

DELETE 

https://services.leadconnectorhq.com/voice-ai/actions/:actionId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Delete an existing action from a voice AI agent. This permanently removes the action and its configuration.

### Requirements

#### Scope(s)

`voice-ai-agent-goals.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/delete-action#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**actionId** stringrequired

Unique identifier for the action

### Query Parameters

**locationId** stringrequired

Location ID

**Example:** `LOC123456789ABCDEF`

**agentId** stringrequired

Agent ID the action is attached to

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/delete-action#responses "Direct link to Responses")

*   204
*   400
*   401
*   422

Action deleted successfully
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/voice-ai-api#authentication)
**type:** http**scopes:** `voice-ai-agent-goals.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/voice-ai/actions/:actionId?locationId=LOC123456789ABCDEF' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

actionId — pathrequired

locationId — queryrequired

agentId — queryrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
