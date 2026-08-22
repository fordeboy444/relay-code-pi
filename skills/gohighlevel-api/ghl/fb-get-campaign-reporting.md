# Get campaign reporting

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-campaign-reporting
- **Summary:** Retrieve reporting metrics for a specific Facebook campaign

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-campaign-reporting#__docusaurus_skipToContent_fallback)

Version: v3

Get campaign reporting
======================

GET 

https://services.leadconnectorhq.com/ad-publishing/facebook/reporting/campaign/:campaignId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve reporting metrics for a specific Facebook campaign

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-campaign-reporting#request "Direct link to request")

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

**Example:** `fRMewNQIxSyZ5R4nQyit`

**startDate** stringrequired

Report start date (YYYY-MM-DD)

**Example:** `2022-01-11`

**endDate** stringrequired

Report end date (YYYY-MM-DD)

**Example:** `2022-01-31`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-campaign-reporting#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/facebook/reporting/campaign/507f1f77bcf86cd799439011?locationId=fRMewNQIxSyZ5R4nQyit&startDate=2022-01-11&endDate=2022-01-31' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

campaignId — pathrequired

locationId — queryrequired

startDate — queryrequired

endDate — queryrequired

Version — headerrequired\---2021-07-28

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
