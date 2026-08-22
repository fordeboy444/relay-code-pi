# Bulk Enable SaaS

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/saas-api/bulk-enable-saas
- **Summary:** Enable SaaS mode for multiple locations with support for both SaaS v1 and v2

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas-api/bulk-enable-saas#__docusaurus_skipToContent_fallback)

Version: v3

Bulk Enable SaaS
================

POST 

https://services.leadconnectorhq.com/saas/bulk-enable-saas/:companyId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Enable SaaS mode for multiple locations with support for both SaaS v1 and v2

### Requirements

#### Scope(s)

`saas/company.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/bulk-enable-saas#request "Direct link to request")

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

Array of location IDs to enable SaaS for

**Example:** `["locationId1","locationId2"]`

**isSaaSV2**booleanrequired

Indicates if the SaaS is V2

**Example:** `true`

**actionPayload** objectrequired

Action payload for the bulk enable SaaS operation

**priceId**string

Price ID for the SaaS plan

**Example:** `price_1QDPY5FpU9DlKp7RQ8BXfywx`

**stripeAccountId**string

Stripe account ID

**Example:** `acct_1QDPY5FpU9DlKp7RQ8BXfywx`

**saasPlanId**stringrequired

SaaS plan ID

**Example:** `66c4d36534f21f900dc2a265`

**providerLocationId**string

Provider location ID

**Example:** `r06mdj4OrrERzYDvsOdh`

    {  "locationIds": [    "locationId1",    "locationId2"  ],  "isSaaSV2": true,  "actionPayload": {    "priceId": "price_1QDPY5FpU9DlKp7RQ8BXfywx",    "stripeAccountId": "acct_1QDPY5FpU9DlKp7RQ8BXfywx",    "saasPlanId": "66c4d36534f21f900dc2a265",    "providerLocationId": "r06mdj4OrrERzYDvsOdh"  }}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/bulk-enable-saas#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/saas/bulk-enable-saas/:companyId' \-H 'Content-Type: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationIds": [    "locationId1",    "locationId2"  ],  "isSaaSV2": true,  "actionPayload": {    "priceId": "price_1QDPY5FpU9DlKp7RQ8BXfywx",    "stripeAccountId": "acct_1QDPY5FpU9DlKp7RQ8BXfywx",    "saasPlanId": "66c4d36534f21f900dc2a265",    "providerLocationId": "r06mdj4OrrERzYDvsOdh"  }}'

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
  "locationIds": \[    "locationId1",    "locationId2"  \],  "isSaaSV2": true,  "actionPayload": {    "priceId": "price_1QDPY5FpU9DlKp7RQ8BXfywx",    "stripeAccountId": "acct_1QDPY5FpU9DlKp7RQ8BXfywx",    "saasPlanId": "66c4d36534f21f900dc2a265",    "providerLocationId": "r06mdj4OrrERzYDvsOdh"  }
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
