# Get Pipelines

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-pipelines
- **Summary:** Get Pipelines

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-pipelines#__docusaurus_skipToContent_fallback)

Version: v3

Get Pipelines
=============

GET 

https://services.leadconnectorhq.com/opportunities/pipelines

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get Pipelines

### Requirements

#### Scope(s)

`opportunities.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-pipelines#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Query Parameters

**locationId** stringrequired

Identifier of the location (sub-account) to retrieve pipelines for

**Example:** `ve9EPM428h8vShlRW1KT`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-pipelines#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**pipelines** object\[\]

List of pipelines for the location

*   Array \[\
    \
\
**id**string\
\
Unique identifier of the pipeline\
\
**Example:** `aWdODOBVOlH1RUFKWQke`\
\
**name**string\
\
Name of the pipeline\
\
**Example:** `new pipeline`\
\
**stages**array\[\]\
\
Stages belonging to this pipeline\
\
**Example:** `[]`\
\
**showInFunnel**boolean\
\
Whether the pipeline is shown in the funnel view\
\
**Example:** `false`\
\
**showInPieChart**boolean\
\
Whether the pipeline is shown in the pie chart view\
\
**Example:** `true`\
\
**locationId**string\
\
Identifier of the location (sub-account) this pipeline belongs to\
\
**Example:** `VeMHYX28Satp2p7XVKbb`\
\
**useOpportunityProbability**boolean\
\
Whether stage-level win probability is enabled for this pipeline\
\
**Example:** `true`\
\
**colorRenderMode**string\
\
How pipeline/stage colors are rendered\
\
**Possible values:** \[`dot`, `bg-tint`, `none`\]\
\
**Example:** `dot`\
\
**position**string\
\
Fractional-index key used to sort pipelines. Updated when the user reorders pipelines (via drag-and-drop or the reorder modal).\
\
**Example:** `a0V`\
\
*   \]
    

    {  "pipelines": []}

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

    curl -L 'https://services.leadconnectorhq.com/opportunities/pipelines?locationId=ve9EPM428h8vShlRW1KT' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
