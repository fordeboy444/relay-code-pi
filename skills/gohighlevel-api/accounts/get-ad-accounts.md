# Get ad accounts

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-ad-accounts
- **Summary:** Retrieve Facebook ad accounts available for the connected user

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-ad-accounts#__docusaurus_skipToContent_fallback)

Version: v3

Get ad accounts
===============

GET 

https://services.leadconnectorhq.com/ad-publishing/facebook/ad-accounts

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve Facebook ad accounts available for the connected user

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-ad-accounts#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `loc_abc123`

**type** string

Account source type

**Example:** `AD_MANAGER`

**next** string

Pagination cursor

**Example:** `cursor_abc`

**fetchAll** string

Fetch all accounts

**Example:** `true`

**limit** string

Results page limit

**Example:** `25`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-ad-accounts#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/facebook/ad-accounts?locationId=loc_abc123&type=AD_MANAGER&next=cursor_abc&fetchAll=true&limit=25' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

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

type — query

next — query

fetchAll — query

limit — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
