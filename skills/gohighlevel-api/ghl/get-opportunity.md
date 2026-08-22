# Get Opportunity

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-opportunity
- **Summary:** Get Opportunity

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-opportunity#__docusaurus_skipToContent_fallback)

Version: v3

Get Opportunity
===============

GET 

https://services.leadconnectorhq.com/opportunities/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get Opportunity

### Requirements

#### Scope(s)

`opportunities.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-opportunity#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**id** stringrequired

Opportunity Id

**Example:** `yWQobCRIhRguQtD2llvk`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-opportunity#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**opportunity** object

The retrieved opportunity object

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

**createdAt**string

ISO 8601 timestamp when the opportunity was created

**Example:** `2021-08-03T04:55:17.355Z`

**updatedAt**string

ISO 8601 timestamp when the opportunity was last updated

**Example:** `2021-08-03T04:55:17.355Z`

**contactId**string

Identifier of the contact linked to the opportunity

**Example:** `zT46WSCPbudrq4zhWMk6`

**isAttribute**boolean

Whether the opportunity was created via attribution

**Example:** `false`

**internalSource**object

Internal source metadata for the opportunity

**Example:** `{}`

**locationId**string

Identifier of the location (sub-account) the opportunity belongs to

**Example:** `zT46WSCPbudrq4zhW`

**lastActionDate**string

ISO 8601 timestamp of the last action on the opportunity

**Example:** `2021-08-03T04:55:17.355Z`

**indexVersion**number

Index version of the opportunity record

**Example:** `1`

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
    

**followers**string\[\]

User IDs following this opportunity

**Example:** `["sx6wyHhbFdRXh302Lunr"]`

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

**externalObjectId**string

External object identifier for integrations

**Example:** `ext_obj_12345`

**externalImportMetaData**object

Metadata captured when the opportunity was imported from an external system

**Example:** `{}`

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

**assignedTo**string

Identifier of the user the contact is assigned to

**Example:** `zT46WSCPbudrq4zhWMk6`

**followers**string\[\]

User IDs following this contact

**Example:** `["sx6wyHhbFdRXh302Lunr"]`

    {  "opportunity": {}}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/opportunities/opportunities-api-v-3#authentication)
**type:** http**scopes:** `opportunities.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/opportunities/yWQobCRIhRguQtD2llvk' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

id — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
