# Pause location

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/saas-api/pause-location
- **Summary:** Pause Sub account for given locationId

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas-api/pause-location#__docusaurus_skipToContent_fallback)

Version: v3

Pause location
==============

POST 

https://services.leadconnectorhq.com/saas/pause/:locationId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Pause Sub account for given locationId

### Requirements

#### Scope(s)

`saas/company.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/pause-location#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

*   application/json

*   Body
*   Example (auto)

### Body**required**

**paused**booleanrequired

Paused

**Example:** `true`

**companyId**stringrequired

Company ID

**Example:** `companyId1`

    {  "paused": true,  "companyId": "companyId1"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/pause-location#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/saas/pause/:locationId' \-H 'Content-Type: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "paused": true,  "companyId": "companyId1"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

Version — headerrequired\---v3

Body required

{
  "paused": true,  "companyId": "companyId1"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
