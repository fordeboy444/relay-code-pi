# Disable SaaS for locations

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/saas-api/bulk-disable-saas
- **Summary:** Disable SaaS for locations for given locationIds

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas-api/bulk-disable-saas#__docusaurus_skipToContent_fallback)

Version: v3

Disable SaaS for locations
==========================

POST 

https://services.leadconnectorhq.com/saas/bulk-disable-saas/:companyId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Disable SaaS for locations for given locationIds

### Requirements

#### Scope(s)

`saas/company.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/bulk-disable-saas#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**companyId** stringrequired

*   application/json

*   Body
*   Example (auto)

### Body**required**

**locationIds**string\[\]required

Location IDs

**Example:** `["locationId1","locationId2"]`

    {  "locationIds": [    "locationId1",    "locationId2"  ]}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/bulk-disable-saas#responses "Direct link to Responses")

*   201

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/saas-api/saas-api#authentication)
**type:** http**scopes:** `saas/company.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Agency (OR) Private Integration Token of Agency.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/saas/bulk-disable-saas/:companyId' \-H 'Content-Type: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationIds": [    "locationId1",    "locationId2"  ]}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

companyId — pathrequired

Version — headerrequired\---v3

Body required

{
  "locationIds": \[    "locationId1",    "locationId2"  \]
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
