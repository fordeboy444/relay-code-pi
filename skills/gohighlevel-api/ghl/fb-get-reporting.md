# Get reporting data

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-reporting
- **Summary:** Retrieve aggregated Facebook ad reporting metrics for a location

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-reporting#__docusaurus_skipToContent_fallback)

Version: v3

Get reporting data
==================

GET 

https://services.leadconnectorhq.com/ad-publishing/facebook/reporting

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve aggregated Facebook ad reporting metrics for a location

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-reporting#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `fRMewNQIxSyZ5R4nQyit`

**fields** string\[\]required

**Possible values:** \[`impressions`, `clicks`, `spend`, `cpc`, `cost_per_conversion`, `conversions`, `results`, `cost_per_result`, `cpm`, `reach`, `frequency`, `ctr`\]

Reporting fields. Pass as comma-separated values on the wire (e.g. ?fields=impressions,clicks).

**Example:** `["impressions","clicks","spend"]`

**groupBy** string

**Possible values:** \[`day`, `week`, `month`\]

Time grouping interval

**Example:** `month`

**startDate** stringrequired

Report start date (YYYY-MM-DD)

**Example:** `2022-01-11`

**endDate** stringrequired

Report end date (YYYY-MM-DD)

**Example:** `2022-01-31`

**type** stringrequired

**Possible values:** \[`AD_MANAGER`, `INTEGRATION`\]

Integration source type

**Example:** `INTEGRATION`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-reporting#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/facebook/reporting?locationId=fRMewNQIxSyZ5R4nQyit&fields=impressions%2Cclicks%2Cspend&groupBy=month&startDate=2022-01-11&endDate=2022-01-31&type=INTEGRATION' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

fields — queryrequiredimpressionsclicksspendcpccost_per_conversionconversionsresultscost_per_resultcpmreachfrequencyctr

startDate — queryrequired

endDate — queryrequired

type — queryrequired\---AD_MANAGERINTEGRATION

Version — headerrequired\---2021-07-28

Show optional parameters

groupBy — query\---dayweekmonth

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
