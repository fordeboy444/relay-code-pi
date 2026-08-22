# Update Rebilling

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/saas-api/update-rebilling
- **Summary:** Bulk update rebilling for given locationIds

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas-api/update-rebilling#__docusaurus_skipToContent_fallback)

Version: v3

Update Rebilling
================

POST 

https://services.leadconnectorhq.com/saas/update-rebilling/:companyId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Bulk update rebilling for given locationIds

### Requirements

#### Scope(s)

`saas/company.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/update-rebilling#request "Direct link to request")

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

**product**stringrequired

The product to update rebilling for

**Possible values:** \[`workflow_premium_actions`, `EmailVerification`, `contentAI`, `workflow_ai`, `whatsApp`, `reviewsAI`, `domainPurchase`, `funnelAI`, `agentStudio`, `askai`, `aiStudio`, `conversation_AI`, `voiceAI`, `Email`, `Phone`\]

**Example:** `contentAI`

**locationIds**string\[\]required

Array of location IDs to update rebilling for

**Example:** `["zzyG7A4x6bRJl5SlhQhH","Vygq7VgXCDfg3xnl8TBR"]`

**config** objectrequired

Configuration for rebilling settings

**optIn**boolean

Enable the product for the locations

**Example:** `true`

**enabled**boolean

Enable the rebilling for the locations

**Example:** `true`

**markup**number

Additional value to be added in terms of percentage. For example, if the product price is $100 and the markup is 5, the amount charged to will be $105.

**Example:** `5`

    {  "product": "contentAI",  "locationIds": [    "zzyG7A4x6bRJl5SlhQhH",    "Vygq7VgXCDfg3xnl8TBR"  ],  "config": {    "optIn": true,    "enabled": true,    "markup": 5  }}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/update-rebilling#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/saas/update-rebilling/:companyId' \-H 'Content-Type: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "product": "contentAI",  "locationIds": [    "zzyG7A4x6bRJl5SlhQhH",    "Vygq7VgXCDfg3xnl8TBR"  ],  "config": {    "optIn": true,    "enabled": true,    "markup": 5  }}'

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
  "product": "contentAI",  "locationIds": \[    "zzyG7A4x6bRJl5SlhQhH",    "Vygq7VgXCDfg3xnl8TBR"  \],  "config": {    "optIn": true,    "enabled": true,    "markup": 5  }
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
