# Update Agent Action

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/voice-ai/update-action
- **Summary:** Update an existing action for a voice AI agent. Modifies the behavior and configuration of an agent action.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/update-action#__docusaurus_skipToContent_fallback)

Version: v3

Update Agent Action
===================

PUT 

https://services.leadconnectorhq.com/voice-ai/actions/:actionId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Update an existing action for a voice AI agent. Modifies the behavior and configuration of an agent action.

### Requirements

#### Scope(s)

`voice-ai-agent-goals.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/update-action#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**actionId** stringrequired

Unique identifier for the action

*   application/json

*   Body
*   Example (auto)

### Body**required**

**agentId**stringrequired

Agent ID to attach the action to

**Example:** `507f1f77bcf86cd799439011`

**locationId**stringrequired

Location ID

**Example:** `507f1f77bcf86cd799439012`

**actionType**stringrequired

Type of action

**Possible values:** \[`CALL_TRANSFER`, `DATA_EXTRACTION`, `IN_CALL_DATA_EXTRACTION`, `WORKFLOW_TRIGGER`, `SMS`, `APPOINTMENT_BOOKING`, `CUSTOM_ACTION`, `KNOWLEDGE_BASE`\]

**Example:** `CALL_TRANSFER`

**name**stringrequired

Human-readable name for this action

**Example:** `Transfer to Manager`

**actionParameters** objectrequired

Action parameters - structure varies by actionType

oneOf

*   CallTransferActionParameters
*   DataExtractionActionParameters
*   InCallDataExtractionActionParameters
*   WorkflowTriggerParameters
*   SMSParameters
*   AppointmentBookingActionParameters
*   CustomActionParameters
*   KnowledgeBaseParameters

**triggerPrompt**stringrequired

When to trigger this action during the call

**Example:** `When the caller asks to speak to a manager`

**transferToType**stringrequired

Type of transfer destination (currently only "number" is supported)

**Possible values:** \[`number`\]

**Example:** `number`

**transferToValue**stringrequired

Phone number to transfer to. Must start with +, include country code, contain only numbers, and be 11-16 characters long (e.g., +12345678901).

**Example:** `+12345678901`

**triggerMessage**stringrequired

Message to tell the caller before transferring

**Example:** `Let me transfer you to a manager right away`

**hearWhisperMessage**boolean

Whether to play whisper message to the receiving party

**Example:** `true`

    {  "agentId": "507f1f77bcf86cd799439011",  "locationId": "507f1f77bcf86cd799439012",  "actionType": "CALL_TRANSFER",  "name": "Transfer to Manager",  "actionParameters": {    "triggerPrompt": "When the caller asks to speak to a manager",    "transferToType": "number",    "transferToValue": "+12345678901",    "triggerMessage": "Let me transfer you to a manager right away",    "hearWhisperMessage": true  }}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/update-action#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Action updated successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**id**stringrequired

Unique identifier for the created action

**Example:** `507f1f77bcf86cd799439011`

**actionType**stringrequired

Type of action

**Possible values:** \[`CALL_TRANSFER`, `DATA_EXTRACTION`, `IN_CALL_DATA_EXTRACTION`, `WORKFLOW_TRIGGER`, `SMS`, `APPOINTMENT_BOOKING`, `CUSTOM_ACTION`, `KNOWLEDGE_BASE`\]

**Example:** `CALL_TRANSFER`

**name**stringrequired

Human-readable name for this action

**Example:** `Transfer to Manager`

**actionParameters** objectrequired

Action parameters - structure varies by actionType

oneOf

*   CallTransferActionParameters
*   DataExtractionActionParameters
*   InCallDataExtractionActionParameters
*   WorkflowTriggerParameters
*   SMSParameters
*   AppointmentBookingActionParameters
*   CustomActionParameters
*   KnowledgeBaseParameters

**triggerPrompt**stringrequired

When to trigger this action during the call

**Example:** `When the caller asks to speak to a manager`

**transferToType**stringrequired

Type of transfer destination (currently only "number" is supported)

**Possible values:** \[`number`\]

**Example:** `number`

**transferToValue**stringrequired

Phone number to transfer to. Must start with +, include country code, contain only numbers, and be 11-16 characters long (e.g., +12345678901).

**Example:** `+12345678901`

**triggerMessage**stringrequired

Message to tell the caller before transferring

**Example:** `Let me transfer you to a manager right away`

**hearWhisperMessage**boolean

Whether to play whisper message to the receiving party

**Example:** `true`

    {  "id": "507f1f77bcf86cd799439011",  "actionType": "CALL_TRANSFER",  "name": "Transfer to Manager",  "actionParameters": {    "triggerPrompt": "When the caller asks to speak to a manager",    "transferToType": "number",    "transferToValue": "+12345678901",    "triggerMessage": "Let me transfer you to a manager right away",    "hearWhisperMessage": true  }}
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

    curl -L -X PUT 'https://services.leadconnectorhq.com/voice-ai/actions/:actionId' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "agentId": "507f1f77bcf86cd799439011",  "locationId": "507f1f77bcf86cd799439012",  "actionType": "CALL_TRANSFER",  "name": "Transfer to Manager",  "actionParameters": {    "triggerPrompt": "When the caller asks to speak to a manager",    "transferToType": "number",    "transferToValue": "+12345678901",    "triggerMessage": "Let me transfer you to a manager right away",    "hearWhisperMessage": true  }}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

actionId — pathrequired

Version — headerrequired\---v3

Body required

{
  "agentId": "507f1f77bcf86cd799439011",  "locationId": "507f1f77bcf86cd799439012",  "actionType": "CALL_TRANSFER",  "name": "Transfer to Manager",  "actionParameters": {    "triggerPrompt": "When the caller asks to speak to a manager",    "transferToType": "number",    "transferToValue": "+12345678901",    "triggerMessage": "Let me transfer you to a manager right away",    "hearWhisperMessage": true  }
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
