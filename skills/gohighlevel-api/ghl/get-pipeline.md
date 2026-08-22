# Get Pipeline

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-pipeline
- **Summary:** Retrieves a single pipeline by its ID, including all its stages and configuration.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-pipeline#__docusaurus_skipToContent_fallback)

Version: v3

Get Pipeline
============

GET 

https://services.leadconnectorhq.com/opportunities/pipelines/:pipelineId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieves a single pipeline by its ID, including all its stages and configuration.

### Requirements

#### Scope(s)

`pipelines.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-pipeline#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**pipelineId** stringrequired

The unique identifier of the pipeline

**Example:** `aWdODOBVOlH1RUFKWQke`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-pipeline#responses "Direct link to Responses")

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
**type:** http**scopes:** `pipelines.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/opportunities/pipelines/aWdODOBVOlH1RUFKWQke' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

pipelineId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
