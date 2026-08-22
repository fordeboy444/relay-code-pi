# List Estimates

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/invoices/list-estimates
- **Summary:** Get a paginated list of estimates

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/invoices/list-estimates#__docusaurus_skipToContent_fallback)

Version: v3

List Estimates
==============

GET 

https://services.leadconnectorhq.com/invoices/estimate/list

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get a paginated list of estimates

### Requirements

#### Scope(s)

`invoices/estimate.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token``Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/invoices/list-estimates#request "Direct link to request")

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

**startAt** string

startAt in YYYY-MM-DD format

**Example:** `2023-01-01`

**endAt** string

endAt in YYYY-MM-DD format

**Example:** `2023-01-01`

**search** string

search text for estimates name

**Example:** `Home services estimate`

**status** string

**Possible values:** \[`all`, `draft`, `sent`, `accepted`, `declined`, `invoiced`, `viewed`\]

estimate status

**Example:** `sent`

**contactId** string

Contact ID for the estimate

**Example:** `AmuzcoPBpgKeccNsFlib`

**limit** stringrequired

Limit the number of items to return

**Example:** `10`

**offset** stringrequired

Number of items to skip

**Example:** `10`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/invoices/list-estimates#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**estimates**string\[\]required

List of estimates

**total**numberrequired

Total number of estimates

**traceId**stringrequired

Unique identifier for tracing the request

    {  "estimates": [    "string"  ],  "total": 0,  "traceId": "string"}
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

    curl -L 'https://services.leadconnectorhq.com/invoices/estimate/list?altId=6578278e879ad2646715ba9c&startAt=2023-01-01&endAt=2023-01-01&search=Home%20services%20estimate&status=sent&contactId=AmuzcoPBpgKeccNsFlib&limit=10&offset=10' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

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

startAt — query

endAt — query

search — query

status — query\---alldraftsentaccepteddeclinedinvoicedviewed

contactId — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
