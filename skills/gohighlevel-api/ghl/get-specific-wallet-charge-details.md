# Get specific wallet charge details

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-specific-charge
- **Summary:** Get specific wallet charge details

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-specific-charge#__docusaurus_skipToContent_fallback)

Version: v3

Get specific wallet charge details
==================================

GET 

https://services.leadconnectorhq.com/marketplace/billing/charges/:chargeId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get specific wallet charge details

### Requirements

#### Scope(s)

`charges.readonly`

#### Auth Method(s)

`OAuth Access Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-specific-charge#request "Direct link to request")

### Path Parameters

**chargeId** stringrequired

ID of the charge to retrieve

**Example:** `charge_123`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-specific-charge#responses "Direct link to Responses")

*   200
*   404
*   422

Returns charge details

*   application/json

*   Schema
*   Example (auto)

**Schema**

**refunded**boolean

Value is 'true' if the charge has subsequently been refunded.

**Example:** `false`

**currency**string

Currency of the transaction. We currently support USD only.

**Example:** `USD`

**appId**string

App ID

**Example:** `6578278e879ad2646715ba9c`

**meterId**string

Billing Meter ID (you can find this on your app's pricing page)

**Example:** `680b97022b4a34420f5f9b93`

**chargeId**string

Charge ID

**Example:** `charge_123`

**entityType**string

Indicates who was charged? Currently, we support charges for 'location' only

**Example:** `location`

**entityId**string

If the entityType is Location, entityld would be locationld.

**Example:** `ve9EPM428h8vShlRW1KT`

**amountCharged**number

Total amount charged

**Example:** `0.1`

**pricePerUnit**number

Price per unit for the charge

**Example:** `0.01`

**transactionType**string

This can be one of two values - 'charge' or 'refund'

**Example:** `charge`

**units**number

Number of units that the sub-account was charged for

**Example:** `10`

**meta**object

meta object contains details that were sent while creating the charge via the API - eventID, description, eventTime, userld

**Example:** `{"eventId":"evt_abc123","description":"Charge for 10 SMS messages"}`

**createdAt**string<date-time>

Timestamp when the charge was created in our system

**Example:** `2025-03-26T00:00:00.000Z`

**updatedAt**string<date-time>

Timestamp when the charge was last updated in our system

**Example:** `2025-03-26T00:00:00.000Z`

    {  "refunded": false,  "currency": "USD",  "appId": "6578278e879ad2646715ba9c",  "meterId": "680b97022b4a34420f5f9b93",  "chargeId": "charge_123",  "entityType": "location",  "entityId": "ve9EPM428h8vShlRW1KT",  "amountCharged": 0.1,  "pricePerUnit": 0.01,  "transactionType": "charge",  "units": 10,  "meta": {    "eventId": "evt_abc123",    "description": "Charge for 10 SMS messages"  },  "createdAt": "2025-03-26T00:00:00.000Z",  "updatedAt": "2025-03-26T00:00:00.000Z"}

Charge not found

*   application/json

*   Schema
*   Example (auto)

**Schema**

**message**string

Error message describing why the charge was not found

**Example:** `Charge not found`

**statusCode**number

HTTP status code

**Example:** `404`

    {  "message": "Charge not found",  "statusCode": 404}

Unprocessable Entity

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `422`

**message**string\[\]

**Example:** `["Unprocessable Entity"]`

**error**string

**Example:** `Unprocessable Entity`

    {  "statusCode": 422,  "message": [    "Unprocessable Entity"  ],  "error": "Unprocessable Entity"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/marketplace/developer-marketplace-api#authentication)
**type:** http**scopes:** `charges.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/marketplace/billing/charges/charge_123' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

chargeId — pathrequired

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
