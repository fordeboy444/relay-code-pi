# Search targeting options

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-search-targeting
- **Summary:** Search Facebook geo-locations and interests for ad targeting

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-search-targeting#__docusaurus_skipToContent_fallback)

Version: v3

Search targeting options
========================

GET 

https://services.leadconnectorhq.com/ad-publishing/facebook/targeting/search

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Search Facebook geo-locations and interests for ad targeting

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-search-targeting#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Query Parameters

**locationId** string

Location identifier

**Example:** `loc_abc123`

**type** stringrequired

Targeting search type

**Example:** `interest`

**query** stringrequired

Search query string

**Example:** `fitness`

**searchType** string

Specific search subtype

**Example:** `adgeolocation`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-search-targeting#responses "Direct link to Responses")

*   200
*   400
*   401
*   422
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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/facebook/targeting/search?locationId=loc_abc123&type=interest&query=fitness&searchType=adgeolocation' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

type — queryrequired

query — queryrequired

Version — headerrequired\---2021-07-28

Show optional parameters

locationId — query

searchType — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
