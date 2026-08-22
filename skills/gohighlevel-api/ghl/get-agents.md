# List Agents

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/voice-ai/get-agents
- **Summary:** Retrieve a paginated list of agents for given location.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/get-agents#__docusaurus_skipToContent_fallback)

Version: v3

List Agents
===========

GET 

https://services.leadconnectorhq.com/voice-ai/agents

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve a paginated list of agents for given location.

### Requirements

#### Scope(s)

`voice-ai-agents.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/get-agents#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**page** number

**Possible values:** `>= 1` and `<= 5000`

Page number starting from 1

Default value:`1`

**Example:** `1`

**pageSize** number

**Possible values:** `>= 1` and `<= 50`

Number of items per page

Default value:`10`

**Example:** `10`

**locationId** stringrequired

Location ID

**query** string

Query

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/get-agents#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Agent list retrieved successfully.

*   application/json

*   Schema
*   Example (auto)

**Schema**

**total**numberrequired

Total number of items

**Example:** `150`

**page**numberrequired

Page number starting from 1

**Example:** `2`

**pageSize**numberrequired

Number of items per page

**Example:** `10`

**agents** object\[\]required

*   Array \[\
    \
\
**id**stringrequired\
\
Unique identifier for the created agent\
\
**Example:** `507f1f77bcf86cd799439011`\
\
**locationId**stringrequired\
\
Unique identifier for the location where this agent operates\
\
**Example:** `LOC123456789ABCDEF`\
\
**agentName**stringrequired\
\
Display name of the voice AI agent\
\
**Example:** `Customer Support Agent`\
\
**businessName**stringrequired\
\
Name of the business this agent represents\
\
**Example:** `Acme Corporation`\
\
**welcomeMessage**stringrequired\
\
Greeting message spoken when the agent answers calls\
\
**Example:** `Hello! Thank you for calling. How can I assist you today?`\
\
**agentPrompt**stringrequired\
\
Custom instructions defining the agent's behavior\
\
**Example:** `You are a helpful customer service representative.`\
\
**voiceId**stringrequired\
\
Identifier for the speech synthesis voice being used\
\
**Example:** `507f1f77bcf86cd799439011`\
\
**language**stringrequired\
\
Language code for the agent's speech and understanding\
\
**Example:** `en-US`\
\
**patienceLevel**stringrequired\
\
Current tolerance level for caller response delays\
\
**Example:** `medium`\
\
**maxCallDuration**numberrequired\
\
Maximum call duration in seconds, between 180-900\
\
**Possible values:** `>= 180` and `<= 900`\
\
**Example:** `600`\
\
**sendUserIdleReminders**booleanrequired\
\
Indicates whether automatic idle reminders are enabled\
\
**Example:** `true`\
\
**reminderAfterIdleTimeSeconds**numberrequired\
\
Seconds to wait before sending idle reminders, between 1-20\
\
**Possible values:** `>= 1` and `<= 20`\
\
**Example:** `5`\
\
**inboundNumber**string\
\
Phone number for receiving inbound calls\
\
**Example:** `+1234567890`\
\
**numberPoolId**string\
\
Identifier for the number pool managing this agent's phone allocation\
\
**Example:** `pool_507f1f77bcf86cd799439011`\
\
**callEndWorkflowIds**string\[\]\
\
Array of workflow IDs triggered automatically when calls end\
\
**Example:** `[]`\
\
**sendPostCallNotificationTo** object\
\
Current post-call notification settings including recipient configuration\
\
**admins**boolean\
\
Send notifications to admins\
\
**Example:** `true`\
\
**allUsers**boolean\
\
Send notifications to all users\
\
**Example:** `false`\
\
**contactAssignedUser**boolean\
\
Send notifications to contact assigned user\
\
**Example:** `false`\
\
**specificUsers**string\[\]\
\
Specific user IDs to notify\
\
**Example:** `[]`\
\
**customEmails**string\[\]\
\
Custom email addresses to notify\
\
**Example:** `[]`\
\
**agentWorkingHours** object\[\]\
\
Time intervals when the agent accepts calls, organized by day of week\
\
*   Array \[\
    \
\
**dayOfTheWeek**numberrequired\
\
Day of the week for this working hours configuration (Monday=1 to Sunday=7)\
\
**Possible values:** \[`1`, `2`, `3`, `4`, `5`, `6`, `7`\]\
\
**Example:** `1`\
\
**intervals** object\[\]required\
\
Array of time intervals when the agent is available on this day\
\
*   Array \[\
    \
\
**startHour**numberrequired\
\
Starting hour of the working interval in 24-hour format (0-23)\
\
**Possible values:** `>= 0` and `<= 23`\
\
**Example:** `9`\
\
**endHour**numberrequired\
\
Ending hour of the working interval in 24-hour format (0-23)\
\
**Possible values:** `>= 0` and `<= 23`\
\
**Example:** `17`\
\
**startMinute**numberrequired\
\
Starting minute of the working interval (0-59)\
\
**Possible values:** `>= 0` and `<= 59`\
\
**Example:** `0`\
\
**endMinute**numberrequired\
\
Ending minute of the working interval (0-59)\
\
**Possible values:** `>= 0` and `<= 59`\
\
**Example:** `30`\
\
*   \]\
    \
\
*   \]\
    \
\
**timezone**stringrequired\
\
IANA timezone identifier for working hours and scheduling\
\
**Example:** `America/New_York`\
\
**isAgentAsBackupDisabled**booleanrequired\
\
Indicates whether this agent is excluded from backup scenarios\
\
**Example:** `false`\
\
**translation** object\
\
Current language translation settings including enablement status and target language\
\
**enabled**boolean\
\
Whether translation is enabled\
\
**Example:** `false`\
\
**language**string\
\
Translation language code\
\
**Example:** `es`\
\
**actions** object\[\]required\
\
Raw actions configured for this agent with complete actionParameters structure\
\
*   Array \[\
    \
\
**id**stringrequired\
\
Unique identifier for this action\
\
**Example:** `507f1f77bcf86cd799439011`\
\
**actionType**stringrequired\
\
Type of action\
\
**Possible values:** \[`CALL_TRANSFER`, `DATA_EXTRACTION`, `IN_CALL_DATA_EXTRACTION`, `WORKFLOW_TRIGGER`, `SMS`, `APPOINTMENT_BOOKING`, `CUSTOM_ACTION`, `KNOWLEDGE_BASE`\]\
\
**Example:** `CALL_TRANSFER`\
\
**name**stringrequired\
\
Human-readable name for this action\
\
**Example:** `Transfer to Manager`\
\
**actionParameters** objectrequired\
\
Action parameters - structure varies by actionType\
\
oneOf\
\
*   CallTransferActionParameters\
*   DataExtractionActionParameters\
*   InCallDataExtractionActionParameters\
*   WorkflowTriggerParameters\
*   SMSParameters\
*   AppointmentBookingActionParameters\
*   CustomActionParameters\
*   KnowledgeBaseParameters\
\
**triggerPrompt**stringrequired\
\
When to trigger this action during the call\
\
**Example:** `When the caller asks to speak to a manager`\
\
**transferToType**stringrequired\
\
Type of transfer destination (currently only "number" is supported)\
\
**Possible values:** \[`number`\]\
\
**Example:** `number`\
\
**transferToValue**stringrequired\
\
Phone number to transfer to. Must start with +, include country code, contain only numbers, and be 11-16 characters long (e.g., +12345678901).\
\
**Example:** `+12345678901`\
\
**triggerMessage**stringrequired\
\
Message to tell the caller before transferring\
\
**Example:** `Let me transfer you to a manager right away`\
\
**hearWhisperMessage**boolean\
\
Whether to play whisper message to the receiving party\
\
**Example:** `true`\
\
*   \]\
    \
\
*   \]
    

    {  "total": 150,  "page": 2,  "pageSize": 10,  "agents": [    {      "id": "507f1f77bcf86cd799439011",      "locationId": "LOC123456789ABCDEF",      "agentName": "Customer Support Agent",      "businessName": "Acme Corporation",      "welcomeMessage": "Hello! Thank you for calling. How can I assist you today?",      "agentPrompt": "You are a helpful customer service representative.",      "voiceId": "507f1f77bcf86cd799439011",      "language": "en-US",      "patienceLevel": "medium",      "maxCallDuration": 600,      "sendUserIdleReminders": true,      "reminderAfterIdleTimeSeconds": 5,      "inboundNumber": "+1234567890",      "numberPoolId": "pool_507f1f77bcf86cd799439011",      "callEndWorkflowIds": [],      "sendPostCallNotificationTo": {        "admins": true,        "allUsers": false,        "contactAssignedUser": false,        "specificUsers": [],        "customEmails": []      },      "agentWorkingHours": [],      "timezone": "America/New_York",      "isAgentAsBackupDisabled": false,      "translation": {        "enabled": false,        "language": "es"      },      "actions": [        {          "_id": "507f1f77bcf86cd799439011",          "actionType": "CALL_TRANSFER",          "name": "Transfer to Manager",          "actionParameters": {            "triggerPrompt": "When caller asks for manager",            "triggerMessage": "Let me transfer you",            "transferToType": "number",            "transferToValue": "+1234567890"          }        }      ]    }  ]}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/voice-ai-api#authentication)
**type:** http**scopes:** `voice-ai-agents.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/voice-ai/agents?page=1&pageSize=10' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

Version — headerrequired\---v3

Show optional parameters

page — query

pageSize — query

query — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
