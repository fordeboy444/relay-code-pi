# Get Workflow

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/workflows/get-workflow
- **Summary:** Get Workflow

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/workflows/get-workflow#__docusaurus_skipToContent_fallback)

Version: v3

Get Workflow
============

GET 

https://services.leadconnectorhq.com/workflows/

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get Workflow

### Requirements

#### Scope(s)

`workflows.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/workflows/get-workflow#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**locationId** stringrequired

**Example:** `ve9EPM428h8vShlRW1KT`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/workflows/get-workflow#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**workflows** object\[\]

*   Array \[\
    \
\
**id**string\
\
**Example:** `78559bb3-b920-461e-b010-7b2a2816d2a9`\
\
**name**string\
\
**Example:** `First Workflow`\
\
**status**string\
\
**Example:** `draft`\
\
**version**number\
\
**Example:** `2`\
\
**createdAt**string\
\
**Example:** `2021-05-26T11:33:49.000Z`\
\
**updatedAt**string\
\
**Example:** `2021-05-26T11:33:49.000Z`\
\
**locationId**string\
\
**Example:** `eBG6WapS3v4ZqwA45MTxtYJ`\
\
*   \]
    

    {  "workflows": [    {      "id": "78559bb3-b920-461e-b010-7b2a2816d2a9",      "name": "First Workflow",      "status": "draft",      "version": 2,      "createdAt": "2021-05-26T11:33:49.000Z",      "updatedAt": "2021-05-26T11:33:49.000Z",      "locationId": "eBG6WapS3v4ZqwA45MTxtYJ"    }  ]}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/workflows/workflows-api#authentication)
**type:** http**scopes:** `workflows.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/workflows/?locationId=ve9EPM428h8vShlRW1KT' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

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
