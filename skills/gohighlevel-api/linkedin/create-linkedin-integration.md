# Create LinkedIn integration

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-create-integration
- **Summary:** Create a LinkedIn Ads integration for a location with ad account details

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-create-integration#__docusaurus_skipToContent_fallback)

Version: v3

Create LinkedIn integration
===========================

POST 

https://services.leadconnectorhq.com/ad-publishing/linkedin/integration

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create a LinkedIn Ads integration for a location with ad account details

### Requirements

#### Scope(s)

`adPublishing.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-create-integration#request "Direct link to request")

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

**Example:** `loc_123`

**adAccountId**stringrequired

Ad account identifier

**Example:** `12345678`

**adAccountName**stringrequired

Ad account name

**Example:** `My Ad Account`

**currencyCode**stringrequired

Currency code

**Example:** `USD`

**organizationId**stringrequired

Organization identifier

**Example:** `12345678`

    {  "locationId": "loc_123",  "adAccountId": "12345678",  "adAccountName": "My Ad Account",  "currencyCode": "USD",  "organizationId": "12345678"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-create-integration#responses "Direct link to Responses")

*   201
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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/linkedin/integration' \-H 'Content-Type: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "loc_123",  "adAccountId": "12345678",  "adAccountName": "My Ad Account",  "currencyCode": "USD",  "organizationId": "12345678"}'

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
  "locationId": "loc_123",  "adAccountId": "12345678",  "adAccountName": "My Ad Account",  "currencyCode": "USD",  "organizationId": "12345678"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
