# Upsert Opportunity

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/opportunities/upsert-opportunity
- **Summary:** Upsert Opportunity

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/opportunities/upsert-opportunity#__docusaurus_skipToContent_fallback)

Version: v3

Upsert Opportunity
==================

POST 

https://services.leadconnectorhq.com/opportunities/upsert

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Upsert Opportunity

### Requirements

#### Scope(s)

`opportunities.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/upsert-opportunity#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**id**string

opportunityId

**Example:** `yWQobCRIhRguQtD2llvk`

**pipelineId**stringrequired

pipeline Id

**Example:** `bCkKGpDsyPP4peuKowkG`

**locationId**stringrequired

locationId

**Example:** `CLu7BaljjqrEjBGKTNNe`

**followers**string\[\]required

contactId

**Example:** `LiKJ2vnRg5ETM8Z19K7`

**isRemoveAllFollowers**booleanrequired

isRemoveAllFollowers

**Example:** `true`

**followersActionType**stringrequired

followers action type

**Possible values:** \[`add`, `remove`\]

**Example:** `add`

**name**string

name

**Example:** `opportunity name`

**status**string

Current status of the opportunity

**Possible values:** \[`open`, `won`, `lost`, `abandoned`, `all`\]

**Example:** `open`

**pipelineStageId**string

Identifier of the pipeline stage

**Example:** `7915dedc-8f18-44d5-8bc3-77c04e994a10`

**monetaryValue**object

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

**lostReasonId**string

lost reason Id

**Example:** `CLu7BaljjqrEjBGKTNNe`

    {  "id": "yWQobCRIhRguQtD2llvk",  "pipelineId": "bCkKGpDsyPP4peuKowkG",  "locationId": "CLu7BaljjqrEjBGKTNNe",  "followers": "LiKJ2vnRg5ETM8Z19K7",  "isRemoveAllFollowers": true,  "followersActionType": "add",  "name": "opportunity name",  "status": "open",  "pipelineStageId": "7915dedc-8f18-44d5-8bc3-77c04e994a10",  "monetaryValue": 220,  "forecastExpectedCloseDate": "2026-04-23",  "forecastProbability": 20,  "assignedTo": "082goXVW3lIExEQPOnd3",  "lostReasonId": "CLu7BaljjqrEjBGKTNNe"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/upsert-opportunity#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**opportunity**objectrequired

Updated / New Opportunity

**Example:** `{}`

**new**booleanrequired

Indicates whether the opportunity was newly created (true) or updated (false)

**Example:** `true`

    {  "opportunity": {},  "new": true}
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

    curl -L 'https://services.leadconnectorhq.com/opportunities/upsert' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "id": "yWQobCRIhRguQtD2llvk",  "pipelineId": "bCkKGpDsyPP4peuKowkG",  "locationId": "CLu7BaljjqrEjBGKTNNe",  "followers": "LiKJ2vnRg5ETM8Z19K7",  "isRemoveAllFollowers": true,  "followersActionType": "add",  "name": "opportunity name",  "status": "open",  "pipelineStageId": "7915dedc-8f18-44d5-8bc3-77c04e994a10",  "monetaryValue": 220,  "forecastExpectedCloseDate": "2026-04-23",  "forecastProbability": 20,  "assignedTo": "082goXVW3lIExEQPOnd3",  "lostReasonId": "CLu7BaljjqrEjBGKTNNe"}'

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
  "id": "yWQobCRIhRguQtD2llvk",  "pipelineId": "bCkKGpDsyPP4peuKowkG",  "locationId": "CLu7BaljjqrEjBGKTNNe",  "followers": "LiKJ2vnRg5ETM8Z19K7",  "isRemoveAllFollowers": true,  "followersActionType": "add",  "name": "opportunity name",  "status": "open",  "pipelineStageId": "7915dedc-8f18-44d5-8bc3-77c04e994a10",  "monetaryValue": 220,  "forecastExpectedCloseDate": "2026-04-23",  "forecastProbability": 20,  "assignedTo": "082goXVW3lIExEQPOnd3",  "lostReasonId": "CLu7BaljjqrEjBGKTNNe"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
