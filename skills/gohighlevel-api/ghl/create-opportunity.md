# Create Opportunity

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/opportunities/create-opportunity
- **Summary:** Create Opportunity

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/opportunities/create-opportunity#__docusaurus_skipToContent_fallback)

Version: v3New

Create Opportunity
==================

POST 

https://services.leadconnectorhq.com/opportunities/

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create Opportunity

### Requirements

#### Scope(s)

`opportunities.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/create-opportunity#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**pipelineId**stringrequired

pipeline Id

**Example:** `VDm7RPYC2GLUvdpKmBfC`

**locationId**stringrequired

Identifier of the location (sub-account)

**Example:** `ve9EPM428h8vShlRW1KT`

**name**stringrequired

Name of the opportunity

**Example:** `First Opps`

**pipelineStageId**string

Identifier of the pipeline stage

**Example:** `7915dedc-8f18-44d5-8bc3-77c04e994a10`

**status**stringrequired

Current status of the opportunity

**Possible values:** \[`open`, `won`, `lost`, `abandoned`, `all`\]

**Example:** `open`

**contactId**stringrequired

Identifier of the contact linked to the opportunity

**Example:** `mTkSCb1UBjb5tk4OvB69`

**monetaryValue**number

Monetary value of the opportunity

**Example:** `220`

**forecastExpectedCloseDate**string

Expected close date. Supported formats: YYYY/MM/DD, MM/DD/YYYY, YYYY-MM-DD, MM-DD-YYYY, YYYY.MM.DD, MM.DD.YYYY, or ISO 8601

**Example:** `2026-04-23`

**forecastProbability**number

Forecast probability

**Example:** `20`

**assignedTo**string

Identifier of the user the opportunity is assigned to

**Example:** `082goXVW3lIExEQPOnd3`

**customFields** object\[\]

Add custom fields to opportunities.

*   Array \[\
    \
anyOf\
\
*   customFieldsInputStringSchemaV3\
*   customFieldsInputArraySchemaV3\
*   customFieldsInputObjectSchemaV3\
\
**id**string\
\
Pass either `id` or `key` of custom field\
\
**Example:** `6dvNaf7VhkQ9snc5vnjJ`\
\
**key**string\
\
Pass either `id` or `key` of custom field\
\
**Example:** `my_custom_field`\
\
**fieldValue**string\
\
Value of the custom field\
\
**Example:** `9039160788`\
\
*   \]
    

    {  "pipelineId": "VDm7RPYC2GLUvdpKmBfC",  "locationId": "ve9EPM428h8vShlRW1KT",  "name": "First Opps",  "pipelineStageId": "7915dedc-8f18-44d5-8bc3-77c04e994a10",  "status": "open",  "contactId": "mTkSCb1UBjb5tk4OvB69",  "monetaryValue": 220,  "forecastExpectedCloseDate": "2026-04-23",  "forecastProbability": 20,  "assignedTo": "082goXVW3lIExEQPOnd3",  "customFields": [    {      "id": "6dvNaf7VhkQ9snc5vnjJ",      "fieldValue": "9039160788"    }  ]}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/create-opportunity#responses "Direct link to Responses")

*   201
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**opportunity** object

The created or retrieved opportunity object

**id**string

Unique identifier of the opportunity

**Example:** `yWQobCRIhRguQtD2llvk`

**name**string

Name of the opportunity

**Example:** `testing`

**monetaryValue**number

Monetary value of the opportunity

**Example:** `500`

**pipelineId**string

Identifier of the pipeline the opportunity belongs to

**Example:** `VDm7RPYC2GLUvdpKmBfC`

**pipelineStageId**string

Identifier of the pipeline stage the opportunity is in

**Example:** `e93ba61a-53b3-45e7-985a-c7732dbcdb69`

**assignedTo**string

Identifier of the user the opportunity is assigned to

**Example:** `zT46WSCPbudrq4zhWMk6`

**status**string

Current status of the opportunity

**Example:** `open`

**source**string

Source of the opportunity

**Example:**

**lastStatusChangeAt**string

ISO 8601 timestamp of the last status change

**Example:** `2021-08-03T04:55:17.355Z`

**lastStageChangeAt**string

ISO 8601 timestamp of the last stage change

**Example:** `2021-08-03T04:55:17.355Z`

**lastActionDate**string

ISO 8601 timestamp of the last action on the opportunity

**Example:** `2021-08-03T04:55:17.355Z`

**indexVersion**string

Index version of the opportunity record

**Example:** `1`

**createdAt**string

ISO 8601 timestamp when the opportunity was created

**Example:** `2021-08-03T04:55:17.355Z`

**updatedAt**string

ISO 8601 timestamp when the opportunity was last updated

**Example:** `2021-08-03T04:55:17.355Z`

**forecastExpectedCloseDate**string

Expected close date for the forecast (YYYY-MM-DD)

**Example:** `2026-05-20`

**forecastOriginalCloseDate**string

Original forecast close date before any slippage (YYYY-MM-DD)

**Example:** `2026-05-01`

**forecastSlippageCount**number

Number of times the close date has slipped

**Example:** `2`

**forecastDaysSlipped**number

Total days the close date has slipped

**Example:** `19`

**forecastLastSlippedAt**string

ISO 8601 timestamp of the last close-date slip

**Example:** `2026-05-22T10:30:00.000Z`

**forecastProbability**number

Forecast win probability percentage (0–100)

**Example:** `20`

**effectiveProbability**number

Effective win probability after stage and forecast adjustments (0–100)

**Example:** `40`

**contactId**string

Identifier of the contact linked to the opportunity

**Example:** `zT46WSCPbudrq4zhWMk6`

**locationId**string

Identifier of the location (sub-account) the opportunity belongs to

**Example:** `zT46WSCPbudrq4zhW`

**contact** object

Contact details associated with the opportunity

**id**string

Unique identifier of the contact

**Example:** `byMEV0NQinDhq8ZfiOi2`

**name**string

Full name of the contact

**Example:** `John Deo`

**companyName**string

Company name associated with the contact

**Example:** `Tesla Inc`

**email**string

Email address of the contact

**Example:** `john@deo.com`

**phone**string

Phone number of the contact

**Example:** `+1202-555-0107`

**tags**string\[\]

Tags associated with the contact

**Example:** `["lead","vip"]`

**notes**array\[\]

Notes attached to the opportunity

**Example:** `[]`

**tasks**array\[\]

Tasks attached to the opportunity

**Example:** `[]`

**calendarEvents**array\[\]

Calendar events attached to the opportunity

**Example:** `[]`

**lostReasonId**string

Identifier of the lost reason if the opportunity was marked lost

**Example:** `zT46WSCPbudrq4zhWMk6`

**customFields** object\[\]

Custom fields associated with the opportunity

*   Array \[\
    \
\
**id**stringrequired\
\
Unique identifier of the custom field\
\
**Example:** `MgobCB14YMVKuE4Ka8p1`\
\
**fieldValue** objectrequired\
\
The value of the custom field\
\
oneOf\
\
*   string\
*   object\
*   string\[\]\
*   object\[\]\
\
string\
\
*   \]
    

**followers**array\[\]

User IDs following this opportunity

**Example:** `["sx6wyHhbFdRXh302Lunr"]`

**externalObjectId**string

External object identifier for integrations

**Example:** `ext_obj_12345`

    {  "opportunity": {}}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/opportunities/opportunities-api-v-3#authentication)
**type:** http**scopes:** `opportunities.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/opportunities/' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "pipelineId": "VDm7RPYC2GLUvdpKmBfC",  "locationId": "ve9EPM428h8vShlRW1KT",  "name": "First Opps",  "pipelineStageId": "7915dedc-8f18-44d5-8bc3-77c04e994a10",  "status": "open",  "contactId": "mTkSCb1UBjb5tk4OvB69",  "monetaryValue": 220,  "forecastExpectedCloseDate": "2026-04-23",  "forecastProbability": 20,  "assignedTo": "082goXVW3lIExEQPOnd3",  "customFields": [    {      "id": "6dvNaf7VhkQ9snc5vnjJ",      "fieldValue": "9039160788"    }  ]}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired\---v3

Body required

{
  "pipelineId": "VDm7RPYC2GLUvdpKmBfC",  "locationId": "ve9EPM428h8vShlRW1KT",  "name": "First Opps",  "pipelineStageId": "7915dedc-8f18-44d5-8bc3-77c04e994a10",  "status": "open",  "contactId": "mTkSCb1UBjb5tk4OvB69",  "monetaryValue": 220,  "forecastExpectedCloseDate": "2026-04-23",  "forecastProbability": 20,  "assignedTo": "082goXVW3lIExEQPOnd3",  "customFields": \[    {      "id": "6dvNaf7VhkQ9snc5vnjJ",      "fieldValue": "9039160788"    }  \]
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
