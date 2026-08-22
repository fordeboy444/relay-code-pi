# Get Call Log

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/voice-ai/get-call-log
- **Summary:** Returns a call log by callId.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/get-call-log#__docusaurus_skipToContent_fallback)

Version: v3

Get Call Log
============

GET 

https://services.leadconnectorhq.com/voice-ai/dashboard/call-logs/:callId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Returns a call log by callId.

### Requirements

#### Scope(s)

`voice-ai-dashboard.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/get-call-log#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**callId** stringrequired

Call ID

**Example:** `507f1f77bcf86cd799439011`

### Query Parameters

**locationId** stringrequired

Location ID

**Example:** `LOC123456789ABCDEF`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/get-call-log#responses "Direct link to Responses")

*   200
*   400
*   401

Successfully retrieved call log

*   application/json

*   Schema
*   Example (auto)

**Schema**

**id**stringrequired

Unique identifier for the call

**Example:** `507f1f77bcf86cd799439011`

**contactId**string

Associated contact ID

**Example:** `507f1f77bcf86cd799439012`

**agentId**stringrequired

Agent ID associated with the call

**Example:** `507f1f77bcf86cd799439013`

**isAgentDeleted**booleanrequired

Whether the agent is deleted

**Example:** `false`

**fromNumber**string

Caller phone number

**Example:** `+1234567890`

**createdAt**string<date-time>required

Timestamp when the call was created

**Example:** `2024-01-15T10:30:00.000Z`

**duration**numberrequired

Call duration in seconds

**Example:** `180`

**trialCall**booleanrequired

Whether this call was a trial call

**Example:** `false`

**executedCallActions** object\[\]required

Actions performed during the call. Note: The APPOINTMENT_BOOKING action will only be visible in executedCallActions from Sep 9th 2025.

*   Array \[\
    \
\
**actionId**string\
\
Action ID reference\
\
**Example:** `507f1f77bcf86cd799439015`\
\
**actionType**stringrequired\
\
Action type\
\
**Possible values:** \[`CALL_TRANSFER`, `DATA_EXTRACTION`, `IN_CALL_DATA_EXTRACTION`, `WORKFLOW_TRIGGER`, `SMS`, `APPOINTMENT_BOOKING`, `CUSTOM_ACTION`, `KNOWLEDGE_BASE`\]\
\
**Example:** `SMS`\
\
**actionName**stringrequired\
\
Action name\
\
**Example:** `Send SMS Confirmation`\
\
**actionParameters** object\
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
**executedAt**string<date-time>\
\
When the action was executed\
\
**Example:** `2024-01-15T10:32:00.000Z`\
\
**triggerReceivedAt**string<date-time>\
\
When the trigger was received\
\
**Example:** `2024-01-15T10:31:45.000Z`\
\
*   \]
    

**summary**stringrequired

Call summary

**Example:** `Customer called to inquire about product pricing and was transferred to sales team.`

**transcript**stringrequired

Call transcript

**Example:** `bot: Hello, how can I help you today? human: I would like to know about your pricing...`

**translation** object

Transcript translation details

**enabled**boolean

Whether translation is enabled

**Example:** `false`

**language**string

Translation language code

**Example:** `es`

**extractedData** object

Dynamic data extracted from the call based on agent configuration

**messageId**string

Message identifier associated with the call

**Example:** `507f1f77bcf86cd799439014`

    {  "id": "507f1f77bcf86cd799439011",  "contactId": "507f1f77bcf86cd799439012",  "agentId": "507f1f77bcf86cd799439013",  "isAgentDeleted": false,  "fromNumber": "+1234567890",  "createdAt": "2024-01-15T10:30:00.000Z",  "duration": 180,  "trialCall": false,  "executedCallActions": [    {      "actionId": "507f1f77bcf86cd799439015",      "actionType": "CALL_TRANSFER",      "actionName": "Transfer to Manager",      "actionParameters": {        "transferToType": "number",        "transferToValue": "+12345678901",        "triggerMessage": "Let me transfer you to a manager right away",        "hearWhisperMessage": true      },      "executedAt": "2024-01-15T10:32:00.000Z",      "triggerReceivedAt": "2024-01-15T10:31:45.000Z"    },    {      "actionId": "507f1f77bcf86cd799439016",      "actionType": "SMS",      "actionName": "Send Confirmation SMS",      "actionParameters": {        "triggerPrompt": "When caller asks for booking confirmation",        "triggerMessage": "I'll send you a confirmation text",        "messageBody": "Your appointment is confirmed for tomorrow at 2 PM"      },      "executedAt": "2024-01-15T10:33:30.000Z",      "triggerReceivedAt": "2024-01-15T10:33:15.000Z"    },    {      "actionId": "507f1f77bcf86cd799439017",      "actionType": "DATA_EXTRACTION",      "actionName": "Extract Phone Number",      "actionParameters": {        "contactFieldId": "507f1f77bcf86cd799439018",        "description": "Customer's phone number",        "examples": [          "+1234567890",          "+9876543210"        ],        "overwriteExistingValue": false      },      "executedAt": "2024-01-15T10:34:15.000Z",      "triggerReceivedAt": "2024-01-15T10:34:00.000Z"    },    {      "actionId": "507f1f77bcf86cd799439019",      "actionType": "WORKFLOW_TRIGGER",      "actionName": "Start Follow-up Workflow",      "actionParameters": {        "triggerPrompt": "When caller requests a quote",        "triggerMessage": "Let me start that process for you",        "workflowId": "507f1f77bcf86cd799439020"      },      "executedAt": "2024-01-15T10:35:00.000Z",      "triggerReceivedAt": "2024-01-15T10:34:45.000Z"    },    {      "actionId": "507f1f77bcf86cd799439021",      "actionType": "APPOINTMENT_BOOKING",      "actionName": "Book Consultation",      "actionParameters": {        "calendarId": "507f1f77bcf86cd799439022",        "daysOfOfferingDates": 3,        "slotsPerDay": 3,        "hoursBetweenSlots": 1      },      "executedAt": "2024-01-15T10:36:45.000Z",      "triggerReceivedAt": "2024-01-15T10:36:30.000Z"    },    {      "actionId": "507f1f77bcf86cd799439023",      "actionType": "CUSTOM_ACTION",      "actionName": "Check Order Status",      "actionParameters": {        "triggerPrompt": "When caller provides order number",        "triggerMessage": "Let me check that order status",        "apiDetails": {          "url": "https://api.example.com/orders",          "method": "GET",          "authenticationRequired": true,          "authenticationValue": "token123",          "headers": [            {              "key": "Content-Type",              "value": "application/json"            }          ],          "parameters": [            {              "name": "orderId",              "description": "Order ID to look up",              "type": "string",              "example": "ORD-12345"            }          ]        },        "responsePathsToExtract": [          "data.orderId",          "status"        ]      },      "executedAt": "2024-01-15T10:37:20.000Z",      "triggerReceivedAt": "2024-01-15T10:37:05.000Z"    },    {      "actionId": "507f1f77bcf86cd799439024",      "actionType": "IN_CALL_DATA_EXTRACTION",      "actionName": "Extract Email During Call",      "actionParameters": {        "contactFieldId": "507f1f77bcf86cd799439025",        "description": "Customer's email address",        "examples": [          "john@example.com",          "jane@company.com"        ],        "overwriteExistingValue": true      },      "executedAt": "2024-01-15T10:31:45.000Z",      "triggerReceivedAt": "2024-01-15T10:31:30.000Z"    },    {      "actionId": "507f1f77bcf86cd799439026",      "actionType": "KNOWLEDGE_BASE",      "actionName": "Query Product Info",      "actionParameters": {        "triggerPrompt": "When caller asks about pricing",        "triggerMessage": "Let me look that up for you",        "knowledgeBaseId": "507f1f77bcf86cd799439027",        "parameters": [          {            "name": "category",            "description": "Product category to search",            "type": "string",            "example": "pricing"          }        ]      },      "executedAt": "2024-01-15T10:38:10.000Z",      "triggerReceivedAt": "2024-01-15T10:37:55.000Z"    }  ],  "summary": "Customer called to inquire about product pricing and was transferred to sales team.",  "transcript": "bot: Hello, how can I help you today?\nhuman: I would like to know about your pricing...",  "translation": {    "translatedTranscript": "Translated version of the call transcript"  },  "extractedData": {    "phoneNumber": "+1234567890",    "customerName": "John Doe",    "email": "john.doe@example.com",    "companyName": "Acme Corp",    "customField1": "Custom value",    "customField2": "Another value"  },  "messageId": "507f1f77bcf86cd799439014"}

Bad Request

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `400`

**message**string

**Example:** `Bad Request`

    {  "statusCode": 400,  "message": "Bad Request"}

Unauthorized

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `401`

**message**string

**Example:** `Invalid token: access token is invalid`

**error**string

**Example:** `Unauthorized`

    {  "statusCode": 401,  "message": "Invalid token: access token is invalid",  "error": "Unauthorized"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/voice-ai-api#authentication)
**type:** http**scopes:** `voice-ai-dashboard.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/voice-ai/dashboard/call-logs/507f1f77bcf86cd799439011?locationId=LOC123456789ABCDEF' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

callId — pathrequired

locationId — queryrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
