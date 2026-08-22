# Upsert campaign

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-campaign
- **Summary:** Create or update a Facebook campaign

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-campaign#__docusaurus_skipToContent_fallback)

Version: v3

Upsert campaign
===============

PUT 

https://services.leadconnectorhq.com/ad-publishing/facebook/campaigns

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create or update a Facebook campaign

### Requirements

#### Scope(s)

`adPublishing.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-campaign#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**id**string

Campaign identifier

**Example:** `camp_123`

**locationId**stringrequired

Location identifier

**Example:** `loc_abc123`

**name**string

Campaign name

**Example:** `Summer Campaign`

**objective**string

Campaign objective

**Possible values:** \[`OUTCOME_LEADS`, `OUTCOME_TRAFFIC`, `OUTCOME_ENGAGEMENT`, `OUTCOME_SALES`\]

**Example:** `OUTCOME_LEADS`

**specialAdCategories**string\[\]

Special ad categories

**Possible values:** \[`EMPLOYMENT`, `CREDIT`, `FINANCIAL_PRODUCTS_SERVICES`, `HOUSING`, `ISSUES_ELECTIONS_POLITICS`, `ONLINE_GAMBLING_AND_GAMING`, `NONE`\]

**Example:** `["NONE"]`

**source**string

Campaign data source

**Example:** `facebook`

**customValueMappings**object

User-provided overrides for custom_values merge tags used in ad copy

**Example:** `{"{{ custom_values.pet_name }}":"Fluffy"}`

    {  "id": "camp_123",  "locationId": "loc_abc123",  "name": "Summer Campaign",  "objective": "OUTCOME_LEADS",  "specialAdCategories": [    "NONE"  ],  "source": "facebook",  "customValueMappings": {    "{{ custom_values.pet_name }}": "Fluffy"  }}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-campaign#responses "Direct link to Responses")

*   200
*   400
*   401
*   422
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/ad-manager-api#authentication)
**type:** http**scopes:** `adPublishing.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X PUT 'https://services.leadconnectorhq.com/ad-publishing/facebook/campaigns' \-H 'Content-Type: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>' \-d '{  "id": "camp_123",  "locationId": "loc_abc123",  "name": "Summer Campaign",  "objective": "OUTCOME_LEADS",  "specialAdCategories": [    "NONE"  ],  "source": "facebook",  "customValueMappings": {    "{{ custom_values.pet_name }}": "Fluffy"  }}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired\---2021-07-28

Body required

{
  "id": "camp_123",  "locationId": "loc_abc123",  "name": "Summer Campaign",  "objective": "OUTCOME_LEADS",  "specialAdCategories": \[    "NONE"  \],  "source": "facebook",  "customValueMappings": {    "{{ custom_values.pet_name }}": "Fluffy"  }
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
