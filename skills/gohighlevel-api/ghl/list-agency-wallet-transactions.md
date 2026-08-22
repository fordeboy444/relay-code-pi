# List agency wallet transactions

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/saas-api/list-agency-wallet-transactions
- **Summary:** Fetch paginated wallet transactions for an agency (company). Supports skip/limit pagination, date-range and charge-type filters, timezone normalization, and additional non-indexed filters in the request body.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas-api/list-agency-wallet-transactions#__docusaurus_skipToContent_fallback)

Version: v3

List agency wallet transactions
===============================

POST 

https://services.leadconnectorhq.com/saas/companies/:companyId/wallet-transactions

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Fetch paginated wallet transactions for an agency (company). Supports skip/limit pagination, date-range and charge-type filters, timezone normalization, and additional non-indexed filters in the request body.

### Requirements

#### Scope(s)

`saas/company.read`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/list-agency-wallet-transactions#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**companyId** stringrequired

Company ID to list transactions for

**Example:** `5DP4iH6HLkQsiKESj6rh`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**skip**number

Number of records to skip for pagination. Defaults to 0 when omitted.

**Possible values:** `>= 0`

**Example:** `0`

**limit**number

Maximum number of records to return. Capped at 1000 per request.

**Possible values:** `>= 0` and `<= 1000`

**Example:** `100`

**filters** object

Transaction filters

**locationId**string

Filter by location ID

**Example:** `AUKAtFVo0lWezBsBQ3FE`

**settlementTime**object

Settlement time range filter

**Example:** `{"from":"2024-01-01T00:00:00.000Z","to":"2024-03-31T23:59:59.999Z"}`

**chargeType**object

Charge type filter

**Example:** `Email`

**timezone**string

Timezone for date normalization

**Example:** `UTC`

**users**array\[\]

User identifiers to scope transaction results

**additionalFilter**object

Additional non-indexed filters

**Example:** `{"messageId":"msg_123"}`

    {  "skip": 0,  "limit": 100,  "filters": {    "locationId": "AUKAtFVo0lWezBsBQ3FE",    "settlementTime": {      "from": "2024-01-01T00:00:00.000Z",      "to": "2024-03-31T23:59:59.999Z"    },    "chargeType": "Email"  },  "timezone": "UTC",  "users": [    null  ],  "additionalFilter": {    "messageId": "msg_123"  }}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/list-agency-wallet-transactions#responses "Direct link to Responses")

*   200
*   400
*   401
*   404
*   500

Wallet transactions retrieved successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**transactions**array\[\]required

Flat list of normalized wallet transaction records returned from blade-platform

    {  "transactions": [    null  ]}

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

    curl -L 'https://services.leadconnectorhq.com/saas/companies/5DP4iH6HLkQsiKESj6rh/wallet-transactions' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "skip": 0,  "limit": 100,  "filters": {    "locationId": "AUKAtFVo0lWezBsBQ3FE",    "settlementTime": {      "from": "2024-01-01T00:00:00.000Z",      "to": "2024-03-31T23:59:59.999Z"    },    "chargeType": "Email"  },  "timezone": "UTC",  "users": [    null  ],  "additionalFilter": {    "messageId": "msg_123"  }}'

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
  "skip": 0,  "limit": 100,  "filters": {    "locationId": "AUKAtFVo0lWezBsBQ3FE",    "settlementTime": {      "from": "2024-01-01T00:00:00.000Z",      "to": "2024-03-31T23:59:59.999Z"    },    "chargeType": "Email"  },  "timezone": "UTC",  "users": \[    null  \],  "additionalFilter": {    "messageId": "msg_123"  }
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
