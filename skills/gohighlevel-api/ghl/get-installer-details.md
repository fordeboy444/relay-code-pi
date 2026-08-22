# Get Installer Details

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-installer-details
- **Summary:** Fetches installer details for the authenticated user. This endpoint returns information about the company, location, user, and installation details associated with the current OAuth token.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-installer-details#__docusaurus_skipToContent_fallback)

Version: v3

Get Installer Details
=====================

GET 

https://services.leadconnectorhq.com/marketplace/app/:appId/installations

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Fetches installer details for the authenticated user. This endpoint returns information about the company, location, user, and installation details associated with the current OAuth token.

### Requirements

#### Scope(s)

`marketplace-installer-details.readonly`

#### Auth Method(s)

`OAuth Access Token`

#### Token Type(s)

`Sub-Account Token``Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-installer-details#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**appId** stringrequired

ID of the app to get installer details

**Example:** `6578278e879ad2646715ba9c`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-installer-details#responses "Direct link to Responses")

*   200
*   400
*   403

Successfully retrieved installer details. Returns company, location, user, and installation information.

*   application/json

*   Schema
*   Example (auto)

**Schema**

**installationDetails** objectrequired

Installation details

**companyId**stringrequired

Company ID

**Example:** `company123`

**locationId**string

Location ID (if applicable)

**Example:** `location123`

**companyName**stringrequired

Company name

**Example:** `Example Company`

**relationshipNumber**stringrequired

Company relationship number

**Example:** `0-002-230`

**companyEmail**stringnullable

Company email. Will be null for sub-account installations due to PII concerns.

**Example:** `contact@example.com`

**companyOwnerFullName**stringnullable

Company owner full name. Will be null for sub-account installations due to PII concerns.

**Example:** `John Doe`

**userId**stringrequired

User ID who installed the app

**Example:** `user123`

**isWhitelabelCompany**booleanrequired

Whether the company is a whitelabel company

**Example:** `false`

**companyPlan**stringnullable

Company plan. Will be null for sub-account installations due to business sensitivity.

**Example:** `agency_monthly_497`

**companyHighLevelPlan**stringnullabledeprecated

Company plan. Will be null for sub-account installations due to business sensitivity.

**Example:** `agency_monthly_497`

**marketplaceAppPlanId**string

Marketplace app plan ID for paid apps

**Example:** `plan123`

**whitelabelDetails** object

Whitelabel details (only present if isWhitelabelCompany is true)

**domain**stringrequired

Domain of the whitelabel company

**Example:** `example.com`

**logoUrl**stringrequired

Logo URL of the whitelabel company

**Example:** `https://example.com/logo.png`

    {  "installationDetails": {    "companyId": "company123",    "locationId": "location123",    "companyName": "Example Company",    "relationshipNumber": "0-002-230",    "companyEmail": "contact@example.com",    "companyOwnerFullName": "John Doe",    "userId": "user123",    "isWhitelabelCompany": false,    "companyPlan": "agency_monthly_497",    "companyHighLevelPlan": "agency_monthly_497",    "marketplaceAppPlanId": "plan123"  }}

Bad Request. Invalid request parameters or missing required data.

Forbidden. The client does not have necessary permissions to access installer details.

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/marketplace/developer-marketplace-api#authentication)
**type:** http**scopes:** `marketplace-installer-details.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/marketplace/app/6578278e879ad2646715ba9c/installations' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security SchemeLocation-Access-OnlyAgency-Access-Only

Bearer Token

Parameters

appId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
