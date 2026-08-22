# Get Google integration

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-integration
- **Summary:** Retrieve the Google Ads integration details for a location

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-integration#__docusaurus_skipToContent_fallback)

Version: v3

Get Google integration
======================

GET 

https://services.leadconnectorhq.com/ad-publishing/google/integration

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve the Google Ads integration details for a location

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-integration#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `HChooFuiyPpVYzeJ4HMe`

**isDraft** boolean

Is draft

**Example:** `true`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-integration#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/google/integration?locationId=HChooFuiyPpVYzeJ4HMe&isDraft=true' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

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

isDraft — query\---truefalse

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
