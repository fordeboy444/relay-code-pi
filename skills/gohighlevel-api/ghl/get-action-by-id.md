# Get Action by ID

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/get-action-by-id
- **Summary:** Retrieves detailed information about a specific action using its unique identifier. Returns the action configuration, associated agents, and performance metrics.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/get-action-by-id#__docusaurus_skipToContent_fallback)

Version: v3

Get Action by ID
================

GET 

https://services.leadconnectorhq.com/conversation-ai/agents/:agentId/actions/:actionId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieves detailed information about a specific action using its unique identifier. Returns the action configuration, associated agents, and performance metrics.

### Requirements

#### Scope(s)

`conversation-ai.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/get-action-by-id#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**actionId** stringrequired

The unique identifier of the action ID Attached to the agent

**agentId** stringrequired

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/get-action-by-id#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Success

*   application/json

*   Schema
*   Example (auto)

**Schema**

**data** objectrequired

Action details

**id**stringrequired

Unique identifier for the action

**Example:** `actionId123`

**name**stringrequired

Name of the action

**Example:** `Trigger Workflow`

**type**stringrequired

Type of the action

**Possible values:** \[`triggerWorkflow`, `updateContactField`, `appointmentBooking`, `stopBot`, `humanHandOver`, `advancedFollowup`, `transferBot`\]

**Example:** `triggerWorkflow`

**agentId**string

Agent ID where the action belongs

**Example:** `agentId123`

**details** objectrequired

Action-specific details. The structure depends on the action type. For TRIGGER_WORKFLOW use triggerWorkflowDto, for UPDATE_CONTACT_FIELD use updateContactFieldDto, for APPOINTMENT_BOOKING use appointmentBookingDto, for STOP_BOT use stopBotDto, for HUMAN_HAND_OVER use humanHandOverDto, for ADVANCED_FOLLOWUP use advancedFollowupDto, and for TRANSFER_BOT use transferBotDto.

oneOf

*   triggerWorkflowDto
*   updateContactFieldDto
*   appointmentBookingDto
*   stopBotDto
*   humanHandOverDto
*   advancedFollowupDto
*   transferBotDto

**workflowIds**string\[\]required

Array of workflow IDs to trigger

**Example:** `["workflow123","workflow456"]`

**triggerCondition**stringrequired

Condition that triggers the workflow

**Example:** `When user requests appointment`

**triggerMessage**string

Optional message to send when triggering the workflow

**Example:** `Workflow triggered successfully`

**success**booleanrequired

Success status of the request

**Example:** `true`

    {  "data": {    "id": "actionId123",    "name": "Trigger Workflow",    "type": "triggerWorkflow",    "agentId": "agentId123",    "details": {      "workflowIds": [        "workflow123",        "workflow456"      ],      "triggerCondition": "When user requests appointment",      "triggerMessage": "Workflow triggered successfully"    }  },  "success": true}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/conversation-ai-api#authentication)
**type:** http**scopes:** `conversation-ai.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/conversation-ai/agents/:agentId/actions/:actionId' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

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
