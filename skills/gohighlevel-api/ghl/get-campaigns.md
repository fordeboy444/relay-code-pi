# Get Campaigns

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/campaigns/get-campaigns
- **Summary:** Get Campaigns

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/campaigns/get-campaigns#__docusaurus_skipToContent_fallback)

Version: v3

Get Campaigns
=============

GET 

https://services.leadconnectorhq.com/campaigns/

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get Campaigns

### Requirements

#### Scope(s)

`campaigns.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/campaigns/get-campaigns#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**locationId** stringrequired

**Example:** `ve9EPM428h8vShlRW1KT`

**status** string

**Example:** `draft`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/campaigns/get-campaigns#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**campaigns** object\[\]

*   Array \[\
    \
\
**id**string\
\
**Example:** `mIVALPYuTD7YjUHnFEx4`\
\
**name**string\
\
**Example:** `test`\
\
**status**string\
\
**Example:** `published`\
\
**locationId**string\
\
**Example:** `ve9EPM428h8vShlRW1KT`\
\
*   \]
    

    {  "campaigns": [    {      "id": "mIVALPYuTD7YjUHnFEx4",      "name": "test",      "status": "published",      "locationId": "ve9EPM428h8vShlRW1KT"    }  ]}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/campaigns/campaigns-api#authentication)
**type:** http**scopes:** `campaigns.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/campaigns/?locationId=ve9EPM428h8vShlRW1KT&status=draft' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

Version — headerrequired\---v3

Show optional parameters

status — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
