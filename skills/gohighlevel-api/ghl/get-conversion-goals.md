# Get conversion goals

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-conversion-goals
- **Summary:** Retrieve Google Ads conversion goals for a location. Without `limit` the response is a plain array. When `limit` is provided (max 100, default 100) the response is a paginated `{ conversionGoals, paging }` envelope; pass `pageToken` (from `paging.next`) to fetch the next batch.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-conversion-goals#__docusaurus_skipToContent_fallback)

Version: v3

Get conversion goals
====================

GET 

https://services.leadconnectorhq.com/ad-publishing/google/conversion-goals

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve Google Ads conversion goals for a location. Without `limit` the response is a plain array. When `limit` is provided (max 100, default 100) the response is a paginated `{ conversionGoals, paging }` envelope; pass `pageToken` (from `paging.next`) to fetch the next batch.

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-conversion-goals#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `loc_abc123`

**limit** string

Page size for a paginated fetch (max 100, defaults to 100). When set, the response is a { conversionGoals, paging } envelope instead of a plain array.

**Example:** `100`

**pageToken** string

Opaque cursor for the next batch, taken from the previous response paging.next

**Example:** `100`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-conversion-goals#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

A plain array of conversion goals (default), or a { conversionGoals, paging } envelope when `limit` is provided

*   application/json

*   Schema
*   Example (auto)

**Schema**

oneOf

*   object\[\]
*   PaginatedGoogleConversionGoalsDTO

*   Array \[\
    \
\
**property name\***any\
\
*   \]
    

    [  {}]
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/ad-manager-api#authentication)
**type:** http**scopes:** `adPublishing.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/google/conversion-goals?locationId=loc_abc123&limit=100&pageToken=100' \-H 'Accept: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

Version — headerrequired\---2021-07-28

Show optional parameters

limit — query

pageToken — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
