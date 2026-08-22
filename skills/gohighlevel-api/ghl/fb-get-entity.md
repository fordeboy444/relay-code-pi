# Get entities

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-entity
- **Summary:** Retrieve Facebook campaigns, adsets, or ads based on entity type

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-entity#__docusaurus_skipToContent_fallback)

Version: v3

Get entities
============

GET 

https://services.leadconnectorhq.com/ad-publishing/facebook/entity

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve Facebook campaigns, adsets, or ads based on entity type

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-entity#request "Direct link to request")

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

Integration source type

**Example:** `AD_MANAGER`

**next** string

Pagination cursor

**Example:** `cursor_abc`

**fetchAll** string

Fetch all entities

**Example:** `true`

**campaignId** string

Campaign identifier

**Example:** `camp_123`

**adSetId** string

Ad set identifier

**Example:** `adset_123`

**entityType** stringrequired

**Possible values:** \[`CAMPAIGN`, `ADSET`, `AD`\]

Entity type to fetch

**Example:** `CAMPAIGN`

**searchId** string

Search identifier

**Example:** `search_123`

**selectedAdAccountId** string

Selected ad account ID

**Example:** `act_123456`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-entity#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/facebook/entity?locationId=loc_abc123&type=AD_MANAGER&next=cursor_abc&fetchAll=true&campaignId=camp_123&adSetId=adset_123&entityType=CAMPAIGN&searchId=search_123&selectedAdAccountId=act_123456' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

type — queryrequired\---AD_MANAGERINTEGRATION

entityType — queryrequired\---CAMPAIGNADSETAD

Version — headerrequired\---2021-07-28

Show optional parameters

next — query

fetchAll — query

campaignId — query

adSetId — query

searchId — query

selectedAdAccountId — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
