# Upsert conversion pixel

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-pixel
- **Summary:** Create or update a Facebook conversion pixel configuration

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-pixel#__docusaurus_skipToContent_fallback)

Version: v3

Upsert conversion pixel
=======================

PUT 

https://services.leadconnectorhq.com/ad-publishing/facebook/pixels

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create or update a Facebook conversion pixel configuration

### Requirements

#### Scope(s)

`adPublishing.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-pixel#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**locationId**stringrequired

Location identifier

**Example:** `loc_abc123`

**conversionPixelId**string

Conversion pixel ID

**Example:** `px_123`

**name**string

Pixel name

**Example:** `My Pixel`

**igUserId**string

Instagram user ID

**Example:** `ig_user_123`

**type**stringrequired

Pixel event type

**Example:** `LEAD_EVENT`

    {  "locationId": "loc_abc123",  "conversionPixelId": "px_123",  "name": "My Pixel",  "igUserId": "ig_user_123",  "type": "LEAD_EVENT"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-pixel#responses "Direct link to Responses")

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

    curl -L -X PUT 'https://services.leadconnectorhq.com/ad-publishing/facebook/pixels' \-H 'Content-Type: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "loc_abc123",  "conversionPixelId": "px_123",  "name": "My Pixel",  "igUserId": "ig_user_123",  "type": "LEAD_EVENT"}'

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
  "locationId": "loc_abc123",  "conversionPixelId": "px_123",  "name": "My Pixel",  "igUserId": "ig_user_123",  "type": "LEAD_EVENT"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
