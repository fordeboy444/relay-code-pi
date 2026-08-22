# Get SaaS Locations

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-saas-locations
- **Summary:** Fetch all SaaS-activated locations for a company with pagination

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-saas-locations#__docusaurus_skipToContent_fallback)

Version: v3

Get SaaS Locations
==================

GET 

https://services.leadconnectorhq.com/saas/saas-locations/:companyId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Fetch all SaaS-activated locations for a company with pagination

### Requirements

#### Scope(s)

`saas/company.read`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-saas-locations#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**companyId** stringrequired

### Query Parameters

**page** numberrequired

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-saas-locations#responses "Direct link to Responses")

*   200

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/saas-api/saas-api#authentication)
**type:** http**scopes:** `saas/company.read`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Agency (OR) Private Integration Token of Agency.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/saas/saas-locations/:companyId' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

companyId — pathrequired

page — queryrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
