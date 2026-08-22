# Create a new wallet charge

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/marketplace/charge
- **Summary:** Create a new wallet charge

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/marketplace/charge#__docusaurus_skipToContent_fallback)

Version: v3

Create a new wallet charge
==========================

POST 

https://services.leadconnectorhq.com/marketplace/billing/charges

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create a new wallet charge

### Requirements

#### Scope(s)

`charges.write`

#### Auth Method(s)

`OAuth Access Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/charge#request "Direct link to request")

*   application/json

*   Body
*   Example (auto)

### Body**required**

**appId**stringrequired

App ID of the App

**Example:** `6578278e879ad2646715ba9c`

**meterId**stringrequired

Billing Meter ID (you can find this on your app's pricing page)

**Example:** `680b97022b4a34420f5f9b93`

**eventId**stringrequired

Event ID / Transaction ID on your server's side. This will help you maintain the reference of the event/transaction on your end that you charged the customer for.

**Example:** `evt_abc123`

**userId**string

User ID

**Example:** `user_abc123`

**locationId**stringrequired

ID of the Sub-Account to be charged

**Example:** `ve9EPM428h8vShlRW1KT`

**companyId**stringrequired

ID of the Agency the Sub-account belongs to

**Example:** `company_abc123`

**description**stringrequired

Description of the charge

**Example:** `Charge for sending 10 SMS messages`

**price**number

Price per unit to charge

**Example:** `0.01`

**units**numberrequired

Number of units to charge

**Example:** `10`

**eventTime**string

The timestamp when the event/transaction was performed. If blank, the billing timestamp will be set as the event time. ISO8601 Format.

**Example:** `2025-03-26T00:00:000Z`

    {  "appId": "6578278e879ad2646715ba9c",  "meterId": "680b97022b4a34420f5f9b93",  "eventId": "evt_abc123",  "userId": "user_abc123",  "locationId": "ve9EPM428h8vShlRW1KT",  "companyId": "company_abc123",  "description": "Charge for sending 10 SMS messages",  "price": 0.01,  "units": 10,  "eventTime": "2025-03-26T00:00:000Z"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/charge#responses "Direct link to Responses")

*   201
*   400
*   422

Charge created successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**boolean

Indicates whether the charge was created successfully

**Example:** `true`

**chargeId**string

Unique identifier of the created charge

**Example:** `charge_123`

    {  "success": true,  "chargeId": "charge_123"}

Bad request

*   application/json

*   Schema
*   Example (auto)

**Schema**

**message**string

Error message describing the bad request

**Example:** `Invalid request body`

**statusCode**number

HTTP status code

**Example:** `400`

    {  "message": "Invalid request body",  "statusCode": 400}

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
**type:** http**scopes:** `charges.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/marketplace/billing/charges' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "appId": "6578278e879ad2646715ba9c",  "meterId": "680b97022b4a34420f5f9b93",  "eventId": "evt_abc123",  "userId": "user_abc123",  "locationId": "ve9EPM428h8vShlRW1KT",  "companyId": "company_abc123",  "description": "Charge for sending 10 SMS messages",  "price": 0.01,  "units": 10,  "eventTime": "2025-03-26T00:00:000Z"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Body required

{
  "appId": "6578278e879ad2646715ba9c",  "meterId": "680b97022b4a34420f5f9b93",  "eventId": "evt_abc123",  "userId": "user_abc123",  "locationId": "ve9EPM428h8vShlRW1KT",  "companyId": "company_abc123",  "description": "Charge for sending 10 SMS messages",  "price": 0.01,  "units": 10,  "eventTime": "2025-03-26T00:00:000Z"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
