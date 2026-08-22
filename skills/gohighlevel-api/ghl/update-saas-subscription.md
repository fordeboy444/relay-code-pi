# Update SaaS subscription

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/saas-api/generate-payment-link
- **Summary:** Update SaaS subscription for given locationId and customerId

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas-api/generate-payment-link#__docusaurus_skipToContent_fallback)

Version: v3

Update SaaS subscription
========================

PUT 

https://services.leadconnectorhq.com/saas/update-saas-subscription/:locationId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Update SaaS subscription for given locationId and customerId

### Requirements

#### Scope(s)

`saas/company.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/generate-payment-link#request "Direct link to request")

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

**subscriptionId**stringrequired

Subscription ID

**Example:** `sub_1QDPY5FpU9DlKp7RQ8BXfywx`

**customerId**stringrequired

Customer ID

**Example:** `cus_1QDPY5FpU9DlKp7RQ8BXfywx`

**companyId**stringrequired

Company ID

**Example:** `companyId1`

    {  "subscriptionId": "sub_1QDPY5FpU9DlKp7RQ8BXfywx",  "customerId": "cus_1QDPY5FpU9DlKp7RQ8BXfywx",  "companyId": "companyId1"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/generate-payment-link#responses "Direct link to Responses")

*   200

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

    curl -L -X PUT 'https://services.leadconnectorhq.com/saas/update-saas-subscription/:locationId' \-H 'Content-Type: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "subscriptionId": "sub_1QDPY5FpU9DlKp7RQ8BXfywx",  "customerId": "cus_1QDPY5FpU9DlKp7RQ8BXfywx",  "companyId": "companyId1"}'

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
  "subscriptionId": "sub_1QDPY5FpU9DlKp7RQ8BXfywx",  "customerId": "cus_1QDPY5FpU9DlKp7RQ8BXfywx",  "companyId": "companyId1"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
