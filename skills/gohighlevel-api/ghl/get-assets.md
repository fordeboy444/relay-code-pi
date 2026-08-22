# Get assets

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-assets
- **Summary:** Retrieve Google Ads creative assets for a location. Without `limit` the response is a plain array of assets. When `limit` is provided (max 100, default 100) the response is a paginated `{ assets, paging }` envelope; pass `pageToken` (from `paging.next`) to fetch the next batch.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-assets#__docusaurus_skipToContent_fallback)

Version: v3

Get assets
==========

GET 

https://services.leadconnectorhq.com/ad-publishing/google/assets

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve Google Ads creative assets for a location. Without `limit` the response is a plain array of assets. When `limit` is provided (max 100, default 100) the response is a paginated `{ assets, paging }` envelope; pass `pageToken` (from `paging.next`) to fetch the next batch.

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-assets#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `loc_abc123`

**type** stringrequired

**Possible values:** \[`CALL`, `SITELINK`, `LEAD_FORM`, `IMAGE`, `TEXT`\]

Asset type to retrieve

**Example:** `CALL`

**id** string

Asset identifier

**Example:** `123456789`

**advertiserOnly** string

Advertiser only flag

**Example:** `true`

**limit** string

Page size for a paginated fetch (max 100, defaults to 100). When set, the response is a { assets, paging } envelope instead of a plain array.

**Example:** `100`

**pageToken** string

Opaque cursor for the next batch, taken from the previous response paging.next

**Example:** `100`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-assets#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

A plain array of assets (default), or a { assets, paging } envelope when `limit` is provided

*   application/json

*   Schema
*   Example (auto)

**Schema**

oneOf

*   object\[\]
*   PaginatedGoogleAssetsDTO

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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/google/assets?locationId=loc_abc123&type=CALL&id=123456789&advertiserOnly=true&limit=100&pageToken=100' \-H 'Accept: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

type — queryrequired\---CALLSITELINKLEAD_FORMIMAGETEXT

Version — headerrequired\---2021-07-28

Show optional parameters

id — query

advertiserOnly — query

limit — query

pageToken — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
