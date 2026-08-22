# Update Location Wallet Balance

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/saas-api/update-location-wallet-balance
- **Summary:** Update the wallet balance or complimentary credit settings for a specific location. Supports partial updates via updateMask field (AIP-134 compliant).

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas-api/update-location-wallet-balance#__docusaurus_skipToContent_fallback)

Version: v3

Update Location Wallet Balance
==============================

POST 

https://services.leadconnectorhq.com/saas/companies/:companyId/locations/:locationId/wallet-balance/complimentary-credits

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Update the wallet balance or complimentary credit settings for a specific location. Supports partial updates via updateMask field (AIP-134 compliant).

### Requirements

#### Scope(s)

`saas/company.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/update-location-wallet-balance#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**companyId** stringrequired

Company ID that owns the location

**Example:** `5DP4iH6HLkQsiKESj6rh`

**locationId** stringrequired

Location ID to update wallet balance for

**Example:** `AUKAtFVo0lWezBsBQ3FE`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**complimentaryCreditsAmount**number

Credit amount to be added

**Example:** `100`

    {  "complimentaryCreditsAmount": 100}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/update-location-wallet-balance#responses "Direct link to Responses")

*   200
*   400
*   401
*   404
*   500

Location wallet balance updated successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**walletId**stringrequired

Wallet Id

**Example:** `xyz789`

**balance**numberrequired

Current wallet balance

**Example:** `1500.5`

**complimentaryCredits**numberrequired

Complimentary credits amount

**Example:** `100`

    {  "walletId": "xyz789",  "balance": 1500.5,  "complimentaryCredits": 100}

Bad Request

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `400`

**message**string

**Example:** `Bad Request`

    {  "statusCode": 400,  "message": "Bad Request"}

Unauthorized

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `401`

**message**string

**Example:** `Invalid token: access token is invalid`

**error**string

**Example:** `Unauthorized`

    {  "statusCode": 401,  "message": "Invalid token: access token is invalid",  "error": "Unauthorized"}

Resource not found

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

Status code

**Example:** `404`

**message**string

Error message

**Example:** `["Contact not found","User not found","Group not found","Channel not found"]`

    {  "statusCode": 404,  "message": [    "Contact not found",    "User not found",    "Group not found",    "Channel not found"  ]}

Internal server error

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

Status code

**Example:** `500`

**message**string

Error message

**Example:** `Internal Server Error`

    {  "statusCode": 500,  "message": "Internal Server Error"}

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

    curl -L 'https://services.leadconnectorhq.com/saas/companies/5DP4iH6HLkQsiKESj6rh/locations/AUKAtFVo0lWezBsBQ3FE/wallet-balance/complimentary-credits' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "complimentaryCreditsAmount": 100}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

companyId — pathrequired

locationId — pathrequired

Version — headerrequired\---v3

Body required

{
  "complimentaryCreditsAmount": 100
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
