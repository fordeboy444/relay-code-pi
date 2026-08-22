# Attach Action to Agent

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/create-action
- **Summary:** Creates and attach a new action for an AI agent. Actions define specific tasks or behaviors that the agent can perform, such as booking appointments, sending follow-ups, or collecting information.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/create-action#__docusaurus_skipToContent_fallback)

Version: v3

Attach Action to Agent
======================

POST 

https://services.leadconnectorhq.com/conversation-ai/agents/:agentId/actions

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Creates and attach a new action for an AI agent. Actions define specific tasks or behaviors that the agent can perform, such as booking appointments, sending follow-ups, or collecting information.

### Requirements

#### Scope(s)

`conversation-ai.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/create-action#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**agentId** stringrequired

*   application/json

*   Body
*   Example (auto)

### Body**required**

**type**stringrequired

**Possible values:** \[`triggerWorkflow`, `updateContactField`, `appointmentBooking`, `stopBot`, `humanHandOver`, `advancedFollowup`, `transferBot`\]

**Example:** `triggerWorkflow`

**name**stringrequired

**Example:** `Trigger a Workflow`

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

    {  "type": "triggerWorkflow",  "name": "Trigger a Workflow",  "details": {    "workflowIds": [      "workflow123",      "workflow456"    ],    "triggerCondition": "When user requests appointment",    "triggerMessage": "Workflow triggered successfully"  }}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/create-action#responses "Direct link to Responses")

*   201
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**data** objectrequired

Created action details

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

    curl -L 'https://services.leadconnectorhq.com/conversation-ai/agents/:agentId/actions' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "type": "triggerWorkflow",  "name": "Trigger a Workflow",  "details": {    "workflowIds": [      "workflow123",      "workflow456"    ],    "triggerCondition": "When user requests appointment",    "triggerMessage": "Workflow triggered successfully"  }}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

agentId — pathrequired

Version — headerrequired\---v3

Body required

{
  "type": "triggerWorkflow",  "name": "Trigger a Workflow",  "details": {    "workflowIds": \[      "workflow123",      "workflow456"    \],    "triggerCondition": "When user requests appointment",    "triggerMessage": "Workflow triggered successfully"  }
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
