# Get campaign group reporting

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-campaign-group-reporting
- **Summary:** Retrieve reporting metrics for a specific LinkedIn campaign group

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-campaign-group-reporting#__docusaurus_skipToContent_fallback)

Version: v3

Get campaign group reporting
============================

GET 

https://services.leadconnectorhq.com/ad-publishing/linkedin/reporting/campaign-group/:campaignGroupId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve reporting metrics for a specific LinkedIn campaign group

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-campaign-group-reporting#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Path Parameters

**campaignGroupId** stringrequired

Campaign group identifier

**Example:** `12345678`

### Query Parameters

**locationId** stringrequired

Location ID

**Example:** `loc_abc123`

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

**campaignGroupId** string

Campaign group ID

**Example:** `87654321`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-campaign-group-reporting#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/linkedin/reporting/campaign-group/12345678?locationId=loc_abc123&startDate=2024-01-01&endDate=2024-01-31&fields=impressions%2Cclicks&campaignGroupId=87654321' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

campaignGroupId — pathrequired

locationId — queryrequired

startDate — queryrequired

endDate — queryrequired

Version — headerrequired\---2021-07-28

Show optional parameters

fields — queryclicksoneClickLeadscostInLocalCurrencyimpressionscostInUsdctrcpccpmcplexternalWebsitePostClickConversionsconversionRate

campaignGroupId — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
