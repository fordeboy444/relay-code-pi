# Get Google ad accounts

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-ad-accounts
- **Summary:** Retrieve Google Ads accounts available for the connected user

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-ad-accounts#__docusaurus_skipToContent_fallback)

Version: v3

Get Google ad accounts
======================

GET 

https://services.leadconnectorhq.com/ad-publishing/google/ad-accounts

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve Google Ads accounts available for the connected user

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-ad-accounts#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `HChooFuiyPpVYzeJ4HMe`

**type** string

**Possible values:** \[`INTEGRATION`, `AD_MANAGER`\]

Account type

**Example:** `AD_MANAGER`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-ad-accounts#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/google/ad-accounts?locationId=HChooFuiyPpVYzeJ4HMe&type=AD_MANAGER' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

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

type — query\---INTEGRATIONAD_MANAGER

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
