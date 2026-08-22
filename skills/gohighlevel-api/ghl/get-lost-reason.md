# Get lost reason

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-lost-reason
- **Summary:** Get lost reason

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-lost-reason#__docusaurus_skipToContent_fallback)

Version: v3

Get lost reason
===============

GET 

https://services.leadconnectorhq.com/opportunities/lost-reason

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get lost reason

### Requirements

#### Scope(s)

`opportunities.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-lost-reason#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Query Parameters

**locationId** stringrequired

Identifier of the location (sub-account)

**Example:** `ve9EPM428h8vShlRW1KT`

**name** string

lost reason name

**Example:** `lost reason`

**deleted** boolean

deleted

Default value:`false`

**Example:** `false`

**query** string

search query

**Example:** `dentist`

**skip** number

skip

Default value:`0`

**Example:** `1`

**limit** number

limit

Default value:`100`

**Example:** `10`

**getCount** boolean

get count

**Example:** `field`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-lost-reason#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**lostReasons** object\[\]

List of lost reasons for the location

*   Array \[\
    \
\
**id**string\
\
lost reason id\
\
**Example:** `ve9EPM428h8vShlRW1KT`\
\
**name**string\
\
lost reason name\
\
**Example:** `lost reason`\
\
**locationId**string\
\
location id\
\
**Example:** `location_id`\
\
**updatedAt**string<date-time>\
\
updated at\
\
**Example:** `2023-06-19T12:04:22.488Z`\
\
**createdAt**string<date-time>\
\
created at\
\
**Example:** `2023-06-19T12:04:22.488Z`\
\
*   \]
    

**total**number

Total number of lost reasons matching the query

**Example:** `100`

    {  "lostReasons": [],  "total": 100}
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

    curl -L 'https://services.leadconnectorhq.com/opportunities/lost-reason?locationId=ve9EPM428h8vShlRW1KT&name=lost%20reason&deleted=false&query=dentist&limit=100&getCount=field' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

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

name — query

deleted — query\---truefalse

query — query

skip — query

limit — query

getCount — query\---truefalse

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
