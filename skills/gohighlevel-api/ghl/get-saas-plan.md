# Get SaaS Plan

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-saas-plan
- **Summary:** Fetch a specific SaaS plan by plan ID

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-saas-plan#__docusaurus_skipToContent_fallback)

Version: v3

Get SaaS Plan
=============

GET 

https://services.leadconnectorhq.com/saas/saas-plan/:planId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Fetch a specific SaaS plan by plan ID

### Requirements

#### Scope(s)

`saas/company.read`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-saas-plan#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**planId** stringrequired

### Query Parameters

**companyId** stringrequired

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-saas-plan#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/saas/saas-plan/:planId' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

planId — pathrequired

companyId — queryrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
