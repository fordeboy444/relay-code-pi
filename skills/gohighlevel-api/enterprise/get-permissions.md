# Get Permissions

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/locations/get-location-permissions
- **Summary:** Get Sub-Account (Formerly Location) permissions

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/locations/get-location-permissions#__docusaurus_skipToContent_fallback)

Version: v3

Get Permissions
===============

GET 

https://services.leadconnectorhq.com/locations/:locationId/permissions

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get Sub-Account (Formerly Location) permissions

### Requirements

#### Scope(s)

`locations/write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/locations/get-location-permissions#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**locationId** stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/locations/get-location-permissions#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**permissions**string\[\]required

Enabled permission names for the sub-account

**Possible values:** \[`2-way-text-messaging`, `gmb-messaging`, `web-chat`, `reputation-management`, `facebook-messenger`, `gmb-call-tracking`, `missed-call-text-back`, `text-to-pay`, `calendar`, `crm`, `opportunities`, `email-marketing`, `form-builder`, `survey-builder`, `trigger-links`, `html-builder`, `sms-email-templates`, `funnels`, `websites`, `workflow`, `membership`, `all-reports`, `triggers`, `campaigns`, `launchpad`\]

**Example:** `["crm","workflow"]`

    {  "permissions": [    "crm",    "workflow"  ]}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/locations/sub-account-formerly-location-api#authentication)
**type:** http**scopes:** `locations/write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Agency (OR) Private Integration Token of Agency.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/locations/ve9EPM428h8vShlRW1KT/permissions' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
