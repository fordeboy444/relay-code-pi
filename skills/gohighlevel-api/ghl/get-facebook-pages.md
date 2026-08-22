# Get Facebook pages

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-pages
- **Summary:** Retrieve Facebook pages for the connected account. Without `limit` the response is an array of pages (this array response will soon be deprecated — migrate to the paginated form). When `limit` is provided the response is a paginated `{ pages, paging }` envelope; pass `after` (from `paging.next`) to fetch the next batch.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-pages#__docusaurus_skipToContent_fallback)

Version: v3

Get Facebook pages
==================

GET 

https://services.leadconnectorhq.com/ad-publishing/facebook/pages

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve Facebook pages for the connected account. Without `limit` the response is an array of pages (this array response will soon be deprecated — migrate to the paginated form). When `limit` is provided the response is a paginated `{ pages, paging }` envelope; pass `after` (from `paging.next`) to fetch the next batch.

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-pages#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `loc_abc123`

**fetchExisting** string

Fetch existing pages flag

**Example:** `true`

**limit** string

Page size for a paginated fetch (fetchExisting only, max 50). When set, the response is a { pages, paging } envelope instead of an array.

**Example:** `50`

**after** string

Opaque cursor for the next batch, taken from the previous response paging.next

**Example:** `QVFIU...`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-pages#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

An array of pages (default; will soon be deprecated — use `limit` to get the paginated { pages, paging } response), or a { pages, paging } envelope when `limit` is provided

*   application/json

*   Schema
*   Example (auto)

**Schema**

oneOf

*   object\[\]
*   PaginatedFacebookPagesDTO

*   Array \[\
    \
\
**id**stringrequired\
\
Facebook Page ID\
\
**Example:** `1234567890`\
\
**name**stringrequired\
\
Page name\
\
**Example:** `Acme Marketing`\
\
**category**string\
\
Page category\
\
**Example:** `Marketing Agency`\
\
**picture**string\
\
Page profile picture URL\
\
**Example:** `https://scontent.xx.fbcdn.net/...`\
\
**createdOn**string\
\
When the page was connected to the location\
\
**Example:** `2026-01-15T10:00:00.000Z`\
\
**isConnected**booleanrequired\
\
Whether the page is already connected to the location\
\
**Example:** `false`\
\
**tosAccepted**boolean\
\
Whether the Facebook Lead Ads TOS is accepted for the page\
\
**Example:** `true`\
\
**isDefault**boolean\
\
Whether this is the default connected page (only present when fetchExisting is false)\
\
**Example:** `false`\
\
*   \]
    

    [  {    "id": "1234567890",    "name": "Acme Marketing",    "category": "Marketing Agency",    "picture": "https://scontent.xx.fbcdn.net/...",    "createdOn": "2026-01-15T10:00:00.000Z",    "isConnected": false,    "tosAccepted": true,    "isDefault": false  }]
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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/facebook/pages?locationId=loc_abc123&fetchExisting=true&limit=50&after=QVFIU...' \-H 'Accept: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

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

fetchExisting — query

limit — query

after — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
