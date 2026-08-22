# Update Pipeline

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/opportunities/update-pipeline
- **Summary:** Updates an existing pipeline. The `stages` array is a full replacement — include the `id` field on existing stages to retain them, or omit it to create a new stage. You cannot remove all stages at once. Any opportunities in removed stages are automatically migrated to the lowest-position remaining stage. Pipeline and stage names must remain unique (case-insensitive) within the location. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-709536/75a21483123abd7

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/opportunities/update-pipeline#__docusaurus_skipToContent_fallback)

Version: v3

Update Pipeline
===============

PUT 

https://services.leadconnectorhq.com/opportunities/pipelines/:pipelineId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Updates an existing pipeline. The `stages` array is a full replacement — include the `id` field on existing stages to retain them, or omit it to create a new stage. You cannot remove all stages at once. Any opportunities in removed stages are automatically migrated to the lowest-position remaining stage. Pipeline and stage names must remain unique (case-insensitive) within the location. Documentation Link - [https://doc.clickup.com/8631005/d/h/87cpx-709536/75a21483123abd7](https://doc.clickup.com/8631005/d/h/87cpx-709536/75a21483123abd7)

### Requirements

#### Scope(s)

`pipelines.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/update-pipeline#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**pipelineId** stringrequired

The unique identifier of the pipeline

**Example:** `aWdODOBVOlH1RUFKWQke`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**name**string

Name of the pipeline

**Example:** `pipeline`

**stages**string\[\]

List of stages belonging to this pipeline

**Example:** `[{"name":"stage 1","position":1,"showInFunnel":true}]`

**showInFunnel**boolean

Whether the pipeline is shown in the funnel view

**Example:** `false`

**showInPieChart**boolean

Whether the pipeline is shown in the pie chart view

**Example:** `true`

**useOpportunityProbability**boolean

Whether stage-level win probability is enabled for this pipeline

**Example:** `true`

**colorRenderMode**string

How pipeline/stage colors are rendered

**Possible values:** \[`dot`, `bg-tint`, `none`\]

**Example:** `dot`

    {  "name": "pipeline",  "stages": [    {      "name": "stage 1",      "position": 1,      "showInFunnel": true    }  ],  "showInFunnel": false,  "showInPieChart": true,  "useOpportunityProbability": true,  "colorRenderMode": "dot"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/update-pipeline#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**id**string

Unique identifier of the pipeline

**Example:** `aWdODOBVOlH1RUFKWQke`

**name**string

Name of the pipeline

**Example:** `new pipeline`

**stages**array\[\]

Stages belonging to this pipeline

**Example:** `[]`

**showInFunnel**boolean

Whether the pipeline is shown in the funnel view

**Example:** `false`

**showInPieChart**boolean

Whether the pipeline is shown in the pie chart view

**Example:** `true`

**locationId**string

Identifier of the location (sub-account) this pipeline belongs to

**Example:** `VeMHYX28Satp2p7XVKbb`

**useOpportunityProbability**boolean

Whether stage-level win probability is enabled for this pipeline

**Example:** `true`

**colorRenderMode**string

How pipeline/stage colors are rendered

**Possible values:** \[`dot`, `bg-tint`, `none`\]

**Example:** `dot`

**position**string

Fractional-index key used to sort pipelines. Updated when the user reorders pipelines (via drag-and-drop or the reorder modal).

**Example:** `a0V`

    {  "id": "aWdODOBVOlH1RUFKWQke",  "name": "new pipeline",  "stages": [],  "showInFunnel": false,  "showInPieChart": true,  "locationId": "VeMHYX28Satp2p7XVKbb",  "useOpportunityProbability": true,  "colorRenderMode": "dot",  "position": "a0V"}

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

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/opportunities/opportunities-api-v-3#authentication)
**type:** http**scopes:** `pipelines.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X PUT 'https://services.leadconnectorhq.com/opportunities/pipelines/aWdODOBVOlH1RUFKWQke' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "name": "pipeline",  "stages": [    {      "name": "stage 1",      "position": 1,      "showInFunnel": true    }  ],  "showInFunnel": false,  "showInPieChart": true,  "useOpportunityProbability": true,  "colorRenderMode": "dot"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

pipelineId — pathrequired

Version — headerrequired\---v3

Body required

{
  "name": "pipeline",  "stages": \[    {      "name": "stage 1",      "position": 1,      "showInFunnel": true    }  \],  "showInFunnel": false,  "showInPieChart": true,  "useOpportunityProbability": true,  "colorRenderMode": "dot"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
