# Update ad status

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-update-ad-status
- **Summary:** Pause or resume a LinkedIn ad, campaign, or ad group

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-update-ad-status#__docusaurus_skipToContent_fallback)

Version: v3

Update ad status
================

PATCH 

https://services.leadconnectorhq.com/ad-publishing/linkedin/:adId/status

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Pause or resume a LinkedIn ad, campaign, or ad group

### Requirements

#### Scope(s)

`adPublishing.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-update-ad-status#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Path Parameters

**adId** stringrequired

Ad identifier

**Example:** `507f1f77bcf86cd799439011`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `HChooFuiyPpVYzeJ4HMe`

**isDraft** boolean

Is draft

**Example:** `true`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**operationType**stringrequired

Update operation

**Possible values:** \[`PAUSED`, `ARCHIVED`, `RESUME`\]

**Example:** `PAUSED`

**type**stringrequired

Ad object type

**Possible values:** \[`adGroup`, `adCampaign`, `ad`\]

**Example:** `adCampaign`

    {  "operationType": "PAUSED",  "type": "adCampaign"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-update-ad-status#responses "Direct link to Responses")

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

    curl -L -X PATCH 'https://services.leadconnectorhq.com/ad-publishing/linkedin/507f1f77bcf86cd799439011/status?locationId=HChooFuiyPpVYzeJ4HMe&isDraft=true' \-H 'Content-Type: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>' \-d '{  "operationType": "PAUSED",  "type": "adCampaign"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

adId — pathrequired

locationId — queryrequired

Version — headerrequired\---2021-07-28

Show optional parameters

isDraft — query\---truefalse

Body required

{
  "operationType": "PAUSED",  "type": "adCampaign"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
