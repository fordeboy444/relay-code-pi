# Get entities

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-entity
- **Summary:** Retrieve Google campaigns, ad groups, or ads based on entity type

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-entity#__docusaurus_skipToContent_fallback)

Version: v3

Get entities
============

GET 

https://services.leadconnectorhq.com/ad-publishing/google/entity

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve Google campaigns, ad groups, or ads based on entity type

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-entity#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `loc_abc123`

**type** stringrequired

**Possible values:** \[`AD_MANAGER`, `INTEGRATION`\]

Integration type

**Example:** `AD_MANAGER`

**campaignId** string

Campaign identifier

**Example:** `196684453527082`

**adGroupId** string

Ad group identifier

**Example:** `123456789`

**entityType** stringrequired

**Possible values:** \[`CAMPAIGN`, `ADGROUP`, `AD`\]

Entity type

**Example:** `CAMPAIGN`

**searchId** string

Comma-separated Google Ads IDs to filter by

**Example:** `123,456`

**startDate** string

Filter start date

**Example:** `2024-01-01`

**endDate** string

Filter end date

**Example:** `2024-12-31`

**selectedAdAccountId** string

Selected ad account ID

**Example:** `123-456-7890`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-entity#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/google/entity?locationId=loc_abc123&type=AD_MANAGER&campaignId=196684453527082&adGroupId=123456789&entityType=CAMPAIGN&searchId=123%2C456&startDate=2024-01-01&endDate=2024-12-31&selectedAdAccountId=123-456-7890' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

type — queryrequired\---AD_MANAGERINTEGRATION

entityType — queryrequired\---CAMPAIGNADGROUPAD

Version — headerrequired\---2021-07-28

Show optional parameters

campaignId — query

adGroupId — query

searchId — query

startDate — query

endDate — query

selectedAdAccountId — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
