# Update Followup Settings

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/update-followup-settings
- **Summary:** Update the followup settings for an action

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/update-followup-settings#__docusaurus_skipToContent_fallback)

Version: v3

Update Followup Settings
========================

PATCH 

https://services.leadconnectorhq.com/conversation-ai/agents/:agentId/followup-settings

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Update the followup settings for an action

### Requirements

#### Scope(s)

`conversation-ai.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/update-followup-settings#request "Direct link to request")

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

**actionIds**string\[\]required

**Example:** `["edxcfghbnjkimd"]`

**followupSettings** objectrequired

**dynamicChannelSwitching**booleanrequired

Whether to dynamically switch channels for followups

**Default value:** `true`

**Example:** `true`

**followUpHours**boolean

Whether to respect working hours for followups

**Example:** `true`

**workingHours** object\[\]

Working hours configuration for followups

*   Array \[\
    \
\
**dayOfTheWeek**numberrequired\
\
Day of the week (0=Sunday, 1=Monday, etc.)\
\
**Example:** `1`\
\
**intervals** object\[\]\
\
Time intervals for this day\
\
*   Array \[\
    \
\
**startHour**numberrequired\
\
Start hour (24-hour format)\
\
**Example:** `9`\
\
**startMinute**numberrequired\
\
Start minute\
\
**Example:** `0`\
\
**endHour**numberrequired\
\
End hour (24-hour format)\
\
**Example:** `17`\
\
**endMinute**numberrequired\
\
End minute\
\
**Example:** `30`\
\
*   \]\
    \
\
*   \]
    

**timezoneToUse**string

Timezone to use for followups, contact or location

**Possible values:** \[`contact`, `business`\]

    {  "actionIds": [    "edxcfghbnjkimd"  ],  "followupSettings": {    "dynamicChannelSwitching": true,    "followUpHours": true,    "workingHours": [      {        "dayOfTheWeek": 1,        "intervals": [          {            "startHour": 9,            "startMinute": 0,            "endHour": 17,            "endMinute": 30          }        ]      }    ],    "timezoneToUse": "contact"  }}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/update-followup-settings#responses "Direct link to Responses")

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

Updated action details

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

    curl -L -X PATCH 'https://services.leadconnectorhq.com/conversation-ai/agents/:agentId/followup-settings' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "actionIds": [    "edxcfghbnjkimd"  ],  "followupSettings": {    "dynamicChannelSwitching": true,    "followUpHours": true,    "workingHours": [      {        "dayOfTheWeek": 1,        "intervals": [          {            "startHour": 9,            "startMinute": 0,            "endHour": 17,            "endMinute": 30          }        ]      }    ],    "timezoneToUse": "contact"  }}'

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
  "actionIds": \[    "edxcfghbnjkimd"  \],  "followupSettings": {    "dynamicChannelSwitching": true,    "followUpHours": true,    "workingHours": \[      {        "dayOfTheWeek": 1,        "intervals": \[          {            "startHour": 9,            "startMinute": 0,            "endHour": 17,            "endMinute": 30          }        \]      }    \],    "timezoneToUse": "contact"  }
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
