# Fetch Timezones

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/locations/get-timezones
- **Summary:** Fetch the available timezones

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/locations/get-timezones#__docusaurus_skipToContent_fallback)

Version: v3

Fetch Timezones
===============

GET 

https://services.leadconnectorhq.com/locations/:locationId/timezones

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Fetch the available timezones

### Requirements

#### Scope(s)

`locations.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/locations/get-timezones#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/locations/get-timezones#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/locations/sub-account-formerly-location-api#authentication)
**type:** http**scopes:** `locations.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/locations/:locationId/timezones' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security SchemebearerLocation-Access

Bearer Token

Parameters

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
