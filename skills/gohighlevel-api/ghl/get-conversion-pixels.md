# Get conversion pixels

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-pixels
- **Summary:** Retrieve Facebook conversion pixels for a location. For the FACEBOOK channel, without `limit` the response is `{ items, total }`; when `limit` is provided (max 100) the response is a paginated `{ items, paging }` envelope — pass `after` (from `paging.next`) to fetch the next batch. By default each item is returned in full; pass `projection` (comma-separated) to return only the requested fields, chosen from `createdAt`, `fbIsCrmPixel`, `fbPixelCode`, `fbPixelId`, `name`, `type` (any other value is rejected).

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-pixels#__docusaurus_skipToContent_fallback)

Version: v3

Get conversion pixels
=====================

GET 

https://services.leadconnectorhq.com/ad-publishing/facebook/pixels

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve Facebook conversion pixels for a location. For the FACEBOOK channel, without `limit` the response is `{ items, total }`; when `limit` is provided (max 100) the response is a paginated `{ items, paging }` envelope — pass `after` (from `paging.next`) to fetch the next batch. By default each item is returned in full; pass `projection` (comma-separated) to return only the requested fields, chosen from `createdAt`, `fbIsCrmPixel`, `fbPixelCode`, `fbPixelId`, `name`, `type` (any other value is rejected).

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-pixels#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `loc_abc123`

**channel** string

Channel type

**Example:** `FACEBOOK`

**pageId** string

Facebook page ID

**Example:** `123456789`

**igUserId** string

Instagram user ID

**Example:** `ig_user_123`

**limit** string

Page size for a paginated fetch (max 100, FACEBOOK channel only). When set, the response is a { items, paging } envelope instead of { items, total }.

**Example:** `25`

**after** string

Opaque cursor for the next batch, taken from the previous response paging.next

**Example:** `QVFIU...`

**projection** string\[\]

**Possible values:** \[`createdAt`, `fbIsCrmPixel`, `fbPixelCode`, `fbPixelId`, `name`, `type`\]

Fields to return on each item, comma-separated (e.g. ?projection=name,fbPixelId). When set, only the requested fields are returned. Selectable fields: createdAt, fbIsCrmPixel, fbPixelCode, fbPixelId, name, type — any other value is rejected. Omit the param entirely to receive the full item as-is.

**Example:** `["fbIsCrmPixel","fbPixelCode"]`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-pixels#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

An { items, total } object (default), or an { items, paging } envelope when `limit` is provided

*   application/json

*   Schema
*   Example (auto)

**Schema**

oneOf

*   object
*   PaginatedFacebookPixelsDTO

object

    {}
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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/facebook/pixels?locationId=loc_abc123&channel=FACEBOOK&pageId=123456789&igUserId=ig_user_123&limit=25&after=QVFIU...&projection=fbIsCrmPixel%2CfbPixelCode' \-H 'Accept: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

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

channel — query

pageId — query

igUserId — query

limit — query

after — query

projection — querycreatedAtfbIsCrmPixelfbPixelCodefbPixelIdnametype

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
