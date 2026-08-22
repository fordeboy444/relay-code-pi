# List Estimate Templates

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/invoices/list-estimate-templates
- **Summary:** Get a list of estimate templates or a specific template by ID

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/invoices/list-estimate-templates#__docusaurus_skipToContent_fallback)

Version: v3

List Estimate Templates
=======================

GET 

https://services.leadconnectorhq.com/invoices/estimate/template

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get a list of estimate templates or a specific template by ID

### Requirements

#### Scope(s)

`invoices/estimate.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token``Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/invoices/list-estimate-templates#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**altId** stringrequired

Location Id or Agency Id

**Example:** `6578278e879ad2646715ba9c`

**altType** stringrequired

**Possible values:** \[`location`\]

**search** string

To search for an estimate template by id / name

**Example:** `Alex`

**limit** stringrequired

Limit the number of items to return

**Example:** `10`

**offset** stringrequired

Number of items to skip

**Example:** `10`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/invoices/list-estimate-templates#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**data**string\[\]required

List of estimate templates

**totalCount**numberrequired

Total number of estimate templates available

**traceId**stringrequired

Unique identifier for tracing the request

    {  "data": [    "string"  ],  "totalCount": 0,  "traceId": "string"}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/invoices/invoice-api#authentication)
**type:** http**scopes:** `invoices/estimate.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/invoices/estimate/template?altId=6578278e879ad2646715ba9c&search=Alex&limit=10&offset=10' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security SchemeLocation-AccessAgency-Access

Bearer Token

Parameters

altId — queryrequired

altType — queryrequired\---location

limit — queryrequired

offset — queryrequired

Version — headerrequired\---v3

Show optional parameters

search — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
