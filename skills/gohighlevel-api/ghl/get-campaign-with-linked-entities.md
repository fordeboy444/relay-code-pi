# Get campaign with linked entities

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-campaign
- **Summary:** Retrieve a Facebook campaign with its linked adsets and ads

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-campaign#__docusaurus_skipToContent_fallback)

Version: v3

Get campaign with linked entities
=================================

GET 

https://services.leadconnectorhq.com/ad-publishing/facebook/campaign/:campaignId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve a Facebook campaign with its linked adsets and ads

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-campaign#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Path Parameters

**campaignId** stringrequired

Campaign identifier

**Example:** `507f1f77bcf86cd799439011`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `loc_abc123`

**fields** string

Comma-separated field names

**Example:** `adsets,ads`

**source** string

Campaign data source

**Example:** `facebook`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-campaign#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/facebook/campaign/507f1f77bcf86cd799439011?locationId=loc_abc123&fields=adsets%2Cads&source=facebook' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

campaignId — pathrequired

locationId — queryrequired

Version — headerrequired\---2021-07-28

Show optional parameters

fields — query

source — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
