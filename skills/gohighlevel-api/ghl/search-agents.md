# Search Agents

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/search-agent
- **Summary:** Searches for AI agents based on various criteria including name, status, and configuration. Supports advanced filtering and full-text search capabilities.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/search-agent#__docusaurus_skipToContent_fallback)

Version: v3

Search Agents
=============

GET 

https://services.leadconnectorhq.com/conversation-ai/agents/search

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Searches for AI agents based on various criteria including name, status, and configuration. Supports advanced filtering and full-text search capabilities.

### Requirements

#### Scope(s)

`conversation-ai.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/search-agent#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**startAfter** string

Start after is the agent id to start after, Serving as skip, send empty when first page

**Example:** `Exampleee123`

**limit** number

Records per page

**Example:** `1`

**query** string

query to search on agent name, must be provided in lowercase

**Example:** `booking`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/search-agent#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**agents** object\[\]required

List of agents matching the search criteria.

*   Array \[\
    \
\
**id**stringrequired\
\
Unique identifier for the agent.\
\
**Example:** `emp_123`\
\
**name**stringrequired\
\
Name of the agent.\
\
**Example:** `John Doe`\
\
**businessName**string\
\
Name of the business the agent represents.\
\
**Example:** `Tech Corp`\
\
**mode**stringrequired\
\
Current operating mode of the agent.\
\
**Possible values:** \[`off`, `suggestive`, `auto-pilot`\]\
\
**Example:** `auto-pilot`\
\
**channels**string\[\]required\
\
Communication channels the agent operates on.\
\
**Example:** `["SMS","LIVE_CHAT"]`\
\
**waitTime**numberrequired\
\
Wait time before agent responds.\
\
**Example:** `30`\
\
**waitTimeUnit**stringrequired\
\
Unit for wait time.\
\
**Possible values:** \[`minutes`, `seconds`\]\
\
**Example:** `seconds`\
\
**sleepEnabled**booleanrequireddeprecated\
\
Indicates if sleep functionality is enabled.\
\
**Example:** `false`\
\
**sleepTime**number\
\
Duration of sleep period.\
\
**Example:** `2`\
\
**sleepTimeUnit**string\
\
Unit of sleep time.\
\
**Possible values:** \[`hours`, `minutes`, `seconds`\]\
\
**Example:** `hours`\
\
**actions**object\[\]required\
\
List of actions associated with this agent.\
\
**Example:** `[{"id":"action_123","type":"triggerWorkflow"}]`\
\
**isPrimary**booleanrequired\
\
Indicates if this agent is a primary agent. (First agent created for a location is primary by default)\
\
**Example:** `false`\
\
**autoPilotMaxMessages**numberrequired\
\
Maximum number of messages in auto-pilot mode before requiring human intervention.\
\
**Example:** `25`\
\
**goal**object\
\
Goal configuration for the agent.\
\
**Example:** `{"prompt":"Assist customers","type":"custom","actionId":null}`\
\
**knowledgeBaseIds**string\[\]\
\
Array of knowledge base IDs associated with this agent.\
\
**Example:** `["kb_123","kb_456"]`\
\
**createdAt**stringrequired\
\
Timestamp when the agent was created.\
\
**Example:** `2024-01-01T00:00:00Z`\
\
**updatedAt**stringrequired\
\
Timestamp when the agent was last updated.\
\
**Example:** `2024-01-01T00:00:00Z`\
\
**sleepOnManualMessage**boolean\
\
Whether the bot sleeps on manual outbound messages.\
\
**Example:** `false`\
\
**sleepOnWorkflowMessage**boolean\
\
Whether the bot sleeps on workflow outbound messages.\
\
**Example:** `false`\
\
*   \]
    

**totalCount**numberrequired

Total number of agents in the location (unfiltered count).

**Example:** `100`

**count**numberrequired

Number of agents in the current response (filtered/paginated count).

**Example:** `25`

    {  "agents": [    {      "id": "emp_123",      "name": "John Doe",      "businessName": "Tech Corp",      "mode": "auto-pilot",      "channels": [        "SMS",        "LIVE_CHAT"      ],      "waitTime": 30,      "waitTimeUnit": "seconds",      "sleepTime": 2,      "sleepTimeUnit": "hours",      "actions": [        {          "id": "action_123",          "type": "triggerWorkflow"        }      ],      "isPrimary": false,      "autoPilotMaxMessages": 25,      "goal": {        "prompt": "Assist customers",        "type": "custom",        "actionId": null      },      "knowledgeBaseIds": [        "kb_123",        "kb_456"      ],      "createdAt": "2024-01-01T00:00:00Z",      "updatedAt": "2024-01-01T00:00:00Z",      "sleepOnManualMessage": false,      "sleepOnWorkflowMessage": false    }  ],  "totalCount": 100,  "count": 25}
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

    curl -L 'https://services.leadconnectorhq.com/conversation-ai/agents/search?startAfter=Exampleee123&limit=1&query=booking' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired\---v3

Show optional parameters

startAfter — query

limit — query

query — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
