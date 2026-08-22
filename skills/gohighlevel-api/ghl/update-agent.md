# Update Agent

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/update-agent
- **Summary:** Updates an existing AI agent's configuration. All fields in the agent configuration can be updated including name, status, actions, and behavior settings.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/update-agent#__docusaurus_skipToContent_fallback)

Version: v3

Update Agent
============

PUT 

https://services.leadconnectorhq.com/conversation-ai/agents/:agentId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Updates an existing AI agent's configuration. All fields in the agent configuration can be updated including name, status, actions, and behavior settings.

### Requirements

#### Scope(s)

`conversation-ai.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/update-agent#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**agentId** stringrequired

Conversations AI agent id

*   application/json

*   Body
*   Example (auto)

### Body**required**

**name**string

Name of the agent.

**Example:** `John Doe`

**businessName**string

Name of the business the agent represents.

**Example:** `Tech Corp`

**mode**string

Mode of operation for the agent, required if primary is enabled.

**Possible values:** \[`off`, `suggestive`, `auto-pilot`\]

**channels**string\[\]

Channels the agent can use.

**Possible values:** \[`IG`, `FB`, `SMS`, `WebChat`, `WhatsApp`, `Live_Chat`\]

**isPrimary**boolean

Indicates if this agent is a primary agent.

**Example:** `true`

**waitTime**number

Wait time before agent responds (max 5 for minutes, 300 for seconds).

**Example:** `30`

**waitTimeUnit**string

Unit for wait time - SECONDS or MINUTES

**Possible values:** \[`minutes`, `seconds`\]

**Example:** `seconds`

**sleepEnabled**booleandeprecated

Indicates if sleep functionality is enabled.

**Example:** `false`

**sleepTime**number

Duration of sleep period (required if sleepEnabled is true). Set to null for indefinite sleep. (max 2880 for minutes, 172800 for seconds, 48 for hours)

**Example:** `10`

**sleepTimeUnit**string

Unit of sleep time - HOURS, MINUTES, or SECONDS (required if sleepEnabled is true). Set to null for indefinite sleep.

**Possible values:** \[`hours`, `minutes`, `seconds`\]

**personality**string

Personality traits of the agent.

**Example:** `You re an AI assistant and you are friendly and helpful`

**goal**string

The goal of the agent.

**Example:** `You are an AI assistant and you are helping customers with inquiries.`

**instructions**string

Instructions for the agent.

**Example:** `Provide excellent customer service.`

**autoPilotMaxMessages**numberrequired

Maximum number of messages in auto-pilot mode before requiring human intervention. (max: 100, min: 1)

**Default value:** `75`

**knowledgeBaseIds**string\[\]

Array of knowledge base IDs associated with this agent.

**respondToImages**boolean

Allow agent to respond to images

**Default value:** `false`

**Example:** `true`

**respondToAudio**boolean

Allow agent to respond to audio

**Default value:** `false`

**Example:** `true`

**sleepOnManualMessage**boolean

Enable sleep when a manual outbound message is sent.

**Example:** `false`

**sleepOnWorkflowMessage**boolean

Enable sleep when a workflow outbound message is sent.

**Example:** `false`

    {  "name": "John Doe",  "businessName": "Tech Corp",  "mode": "off",  "channels": [    "IG"  ],  "isPrimary": true,  "waitTime": 30,  "waitTimeUnit": "seconds",  "sleepTime": 10,  "sleepTimeUnit": "hours",  "personality": "You re an AI assistant and you are friendly and helpful",  "goal": "You are an AI assistant and you are helping customers with inquiries.",  "instructions": "Provide excellent customer service.",  "autoPilotMaxMessages": 75,  "knowledgeBaseIds": [    "string"  ],  "respondToImages": true,  "respondToAudio": true,  "sleepOnManualMessage": false,  "sleepOnWorkflowMessage": false}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/update-agent#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**id**stringrequired

Unique identifier for the agent.

**Example:** `emp_123`

**name**stringrequired

Name of the agent.

**Example:** `John Doe`

**businessName**string

Name of the business the agent represents.

**Example:** `Tech Corp`

**mode**stringrequired

Current operating mode of the agent.

**Possible values:** \[`off`, `suggestive`, `auto-pilot`\]

**Example:** `auto-pilot`

**channels**string\[\]required

Communication channels the agent operates on.

**Possible values:** \[`IG`, `FB`, `SMS`, `WebChat`, `WhatsApp`, `Live_Chat`\]

**Example:** `["SMS","Live_Chat"]`

**waitTime**numberrequired

Wait time before agent responds.

**Example:** `30`

**waitTimeUnit**stringrequired

Unit for wait time.

**Possible values:** \[`minutes`, `seconds`\]

**Example:** `seconds`

**sleepEnabled**booleanrequireddeprecated

Indicates if sleep functionality is enabled.

**Example:** `false`

**sleepTime**number

Duration of sleep period.

**Example:** `2`

**sleepTimeUnit**string

Unit of sleep time.

**Possible values:** \[`hours`, `minutes`, `seconds`\]

**Example:** `hours`

**actions** object\[\]required

List of actions associated with this agent.

*   Array \[\
    \
\
**id**stringrequired\
\
Unique identifier for the action.\
\
**Example:** `actionId123`\
\
**type**stringrequired\
\
type of action.\
\
**Possible values:** \[`triggerWorkflow`, `updateContactField`, `appointmentBooking`, `stopBot`, `humanHandOver`, `advancedFollowup`, `transferBot`\]\
\
**Example:** `triggerWorkflow`\
\
*   \]
    

**isPrimary**booleanrequired

Indicates if this agent is a primary agent.

**Example:** `false`

**autoPilotMaxMessages**numberrequired

Maximum number of messages in auto-pilot mode before requiring human intervention.

**Example:** `25`

**goal**string

The goal of the agent.

**Example:** `Assist customers with inquiries`

**personality**string

Personality traits of the agent.

**Example:** `Friendly and helpful`

**instructions**string

Instructions for the agent.

**Example:** `Provide excellent customer service`

**knowledgeBaseIds**string\[\]

Array of knowledge base IDs associated with this agent.

**Example:** `["kb_123","kb_456"]`

**sleepOnManualMessage**boolean

Whether the bot sleeps on manual outbound messages.

**Example:** `false`

**sleepOnWorkflowMessage**boolean

Whether the bot sleeps on workflow outbound messages.

**Example:** `false`

    {  "id": "emp_123",  "name": "John Doe",  "businessName": "Tech Corp",  "mode": "auto-pilot",  "channels": [    "SMS",    "Live_Chat"  ],  "waitTime": 30,  "waitTimeUnit": "seconds",  "sleepTime": 2,  "sleepTimeUnit": "hours",  "actions": [    {      "id": "actionId123",      "type": "triggerWorkflow"    }  ],  "isPrimary": false,  "autoPilotMaxMessages": 25,  "goal": "Assist customers with inquiries",  "personality": "Friendly and helpful",  "instructions": "Provide excellent customer service",  "knowledgeBaseIds": [    "kb_123",    "kb_456"  ],  "sleepOnManualMessage": false,  "sleepOnWorkflowMessage": false}
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

    curl -L -X PUT 'https://services.leadconnectorhq.com/conversation-ai/agents/:agentId' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "name": "John Doe",  "businessName": "Tech Corp",  "mode": "off",  "channels": [    "IG"  ],  "isPrimary": true,  "waitTime": 30,  "waitTimeUnit": "seconds",  "sleepTime": 10,  "sleepTimeUnit": "hours",  "personality": "You re an AI assistant and you are friendly and helpful",  "goal": "You are an AI assistant and you are helping customers with inquiries.",  "instructions": "Provide excellent customer service.",  "autoPilotMaxMessages": 75,  "knowledgeBaseIds": [    "string"  ],  "respondToImages": true,  "respondToAudio": true,  "sleepOnManualMessage": false,  "sleepOnWorkflowMessage": false}'

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
  "name": "John Doe",  "businessName": "Tech Corp",  "mode": "off",  "channels": \[    "IG"  \],  "isPrimary": true,  "waitTime": 30,  "waitTimeUnit": "seconds",  "sleepTime": 10,  "sleepTimeUnit": "hours",  "personality": "You re an AI assistant and you are friendly and helpful",  "goal": "You are an AI assistant and you are helping customers with inquiries.",  "instructions": "Provide excellent customer service.",  "autoPilotMaxMessages": 75,  "knowledgeBaseIds": \[    "string"  \],  "respondToImages": true,  "respondToAudio": true,  "sleepOnManualMessage": false,  "sleepOnWorkflowMessage": false
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
