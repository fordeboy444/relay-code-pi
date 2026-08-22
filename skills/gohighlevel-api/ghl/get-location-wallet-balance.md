# Get Location Wallet Balance

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-location-wallet-balance
- **Summary:** Fetch the wallet balance for a specific location. Returns a resource object with balance details.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-location-wallet-balance#__docusaurus_skipToContent_fallback)

Version: v3

Get Location Wallet Balance
===========================

GET 

https://services.leadconnectorhq.com/saas/companies/:companyId/locations/:locationId/wallet-balance

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Fetch the wallet balance for a specific location. Returns a resource object with balance details.

### Requirements

#### Scope(s)

`saas/company.read`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-location-wallet-balance#request "Direct link to request")

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

Location ID to get wallet balance for

**Example:** `AUKAtFVo0lWezBsBQ3FE`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-location-wallet-balance#responses "Direct link to Responses")

*   200
*   400
*   401
*   404
*   500

Location wallet balance retrieved successfully

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

    curl -L 'https://services.leadconnectorhq.com/saas/companies/5DP4iH6HLkQsiKESj6rh/locations/AUKAtFVo0lWezBsBQ3FE/wallet-balance' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

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

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
