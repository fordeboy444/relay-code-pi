# Get reporting list

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-reporting-list
- **Summary:** Retrieve a list of LinkedIn campaigns or campaign groups with reporting data

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-reporting-list#__docusaurus_skipToContent_fallback)

Version: v3

Get reporting list
==================

GET 

https://services.leadconnectorhq.com/ad-publishing/linkedin/reporting/list

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve a list of LinkedIn campaigns or campaign groups with reporting data

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-reporting-list#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Query Parameters

**locationId** stringrequired

Location ID

**Example:** `loc_abc123`

**listType** stringrequired

**Possible values:** \[`campaignGroups`, `campaigns`, `ads`\]

List type

**Example:** `campaigns`

**campaignId** stringrequired

Campaign ID

**Example:** `12345678`

**campaignGroupId** stringrequired

Campaign group ID

**Example:** `87654321`

**startDate** stringrequired

Start date in yyyy-mm-dd format

**Example:** `2024-01-01`

**endDate** stringrequired

End date in yyyy-mm-dd format

**Example:** `2024-01-31`

**fields** string\[\]

**Possible values:** \[`clicks`, `oneClickLeads`, `costInLocalCurrency`, `impressions`, `costInUsd`, `ctr`, `cpc`, `cpm`, `cpl`, `externalWebsitePostClickConversions`, `conversionRate`\]

Reporting fields. Pass as comma-separated values on the wire (e.g. ?fields=impressions,clicks).

**Example:** `["impressions","clicks"]`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-reporting-list#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/linkedin/reporting/list?locationId=loc_abc123&listType=campaigns&campaignId=12345678&campaignGroupId=87654321&startDate=2024-01-01&endDate=2024-01-31&fields=impressions%2Cclicks' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

listType — queryrequired\---campaignGroupscampaignsads

campaignId — queryrequired

campaignGroupId — queryrequired

startDate — queryrequired

endDate — queryrequired

Version — headerrequired\---2021-07-28

Show optional parameters

fields — queryclicksoneClickLeadscostInLocalCurrencyimpressionscostInUsdctrcpccpmcplexternalWebsitePostClickConversionsconversionRate

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
