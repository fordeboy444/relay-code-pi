# Get ad account details

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-ad-account-details
- **Summary:** Retrieve details of a specific LinkedIn ad account

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-ad-account-details#__docusaurus_skipToContent_fallback)

Version: v3

Get ad account details
======================

GET 

https://services.leadconnectorhq.com/ad-publishing/linkedin/ad-account

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve details of a specific LinkedIn ad account

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-ad-account-details#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `HChooFuiyPpVYzeJ4HMe`

**adAccountId** stringrequired

Ad account identifier

**Example:** `12345678`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-ad-account-details#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/linkedin/ad-account?locationId=HChooFuiyPpVYzeJ4HMe&adAccountId=12345678' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

adAccountId — queryrequired

Version — headerrequired\---2021-07-28

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
