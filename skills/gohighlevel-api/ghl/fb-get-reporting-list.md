# Get reporting list

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-reporting-list
- **Summary:** Retrieve a list of Facebook campaigns, adsets, or ads with reporting data

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-reporting-list#__docusaurus_skipToContent_fallback)

Version: v3

Get reporting list
==================

GET 

https://services.leadconnectorhq.com/ad-publishing/facebook/reporting/list

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve a list of Facebook campaigns, adsets, or ads with reporting data

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-reporting-list#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `fRMewNQIxSyZ5R4nQyit`

**listType** stringrequired

**Possible values:** \[`ads`, `adsets`, `campaigns`, `none`\]

Reporting list type

**Example:** `campaigns`

**startDate** stringrequired

Report start date (YYYY-MM-DD)

**Example:** `2022-01-11`

**endDate** stringrequired

Report end date (YYYY-MM-DD)

**Example:** `2022-01-31`

**campaignId** string

Campaign identifier (required when listType is adsets or ads)

**Example:** `196684453527082`

**type** stringrequired

**Possible values:** \[`AD_MANAGER`, `INTEGRATION`\]

Integration source type

**Example:** `INTEGRATION`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-reporting-list#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/facebook/reporting/list?locationId=fRMewNQIxSyZ5R4nQyit&listType=campaigns&startDate=2022-01-11&endDate=2022-01-31&campaignId=196684453527082&type=INTEGRATION' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

listType — queryrequired\---adsadsetscampaignsnone

startDate — queryrequired

endDate — queryrequired

type — queryrequired\---AD_MANAGERINTEGRATION

Version — headerrequired\---2021-07-28

Show optional parameters

campaignId — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
