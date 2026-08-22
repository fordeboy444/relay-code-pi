# Get Location Subscription Details

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-location-subscription
- **Summary:** Fetch subscription details for a specific location from location metadata

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-location-subscription#__docusaurus_skipToContent_fallback)

Version: v3

Get Location Subscription Details
=================================

GET 

https://services.leadconnectorhq.com/saas/get-saas-subscription/:locationId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Fetch subscription details for a specific location from location metadata

### Requirements

#### Scope(s)

`saas/company.read`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-location-subscription#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

### Query Parameters

**companyId** stringrequired

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-location-subscription#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/saas/get-saas-subscription/:locationId' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

companyId — queryrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
