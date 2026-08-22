# Get ad analytics

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-ad-analytics
- **Summary:** Retrieve LinkedIn Ads analytics data with configurable pivot and time grouping

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-ad-analytics#__docusaurus_skipToContent_fallback)

Version: v3

Get ad analytics
================

GET 

https://services.leadconnectorhq.com/ad-publishing/linkedin/reporting

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve LinkedIn Ads analytics data with configurable pivot and time grouping

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-ad-analytics#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Query Parameters

**locationId** stringrequired

Location ID

**Example:** `loc_abc123`

**pivot** string

**Possible values:** \[`ACCOUNT`, `CAMPAIGN`, `CAMPAIGN_GROUP`, `CREATIVE`\]

Analytics pivot type

Default value:`ACCOUNT`

**Example:** `ACCOUNT`

**groupBy** string

**Possible values:** \[`day`, `month`, `year`\]

Time granularity for analytics

Default value:`day`

**Example:** `day`

**startDate** stringrequired

Start date in yyyy-mm-dd format

**Example:** `2024-01-01`

**endDate** stringrequired

End date in yyyy-mm-dd format

**Example:** `2024-01-31`

**entityUrns** string

Comma-separated list of entity URNs

**Example:** `urn:li:sponsoredCampaign:123,urn:li:sponsoredCampaign:456`

**fields** string\[\]

**Possible values:** \[`clicks`, `oneClickLeads`, `costInLocalCurrency`, `impressions`, `costInUsd`, `ctr`, `cpc`, `cpm`, `cpl`, `externalWebsitePostClickConversions`, `conversionRate`\]

Reporting fields. Pass as comma-separated values on the wire (e.g. ?fields=impressions,clicks).

**Example:** `["impressions","clicks","costInUsd"]`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-ad-analytics#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/linkedin/reporting?locationId=loc_abc123&pivot=ACCOUNT&groupBy=day&startDate=2024-01-01&endDate=2024-01-31&entityUrns=urn%3Ali%3AsponsoredCampaign%3A123%2Curn%3Ali%3AsponsoredCampaign%3A456&fields=impressions%2Cclicks%2CcostInUsd' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

startDate — queryrequired

endDate — queryrequired

Version — headerrequired\---2021-07-28

Show optional parameters

pivot — query\---ACCOUNTCAMPAIGNCAMPAIGN_GROUPCREATIVE

groupBy — query\---daymonthyear

entityUrns — query

fields — queryclicksoneClickLeadscostInLocalCurrencyimpressionscostInUsdctrcpccpmcplexternalWebsitePostClickConversionsconversionRate

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
