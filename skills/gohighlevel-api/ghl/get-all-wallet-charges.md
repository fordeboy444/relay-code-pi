# Get all wallet charges

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-charges
- **Summary:** Get all wallet charges

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-charges#__docusaurus_skipToContent_fallback)

Version: v3

Get all wallet charges
======================

GET 

https://services.leadconnectorhq.com/marketplace/billing/charges

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get all wallet charges

### Requirements

#### Scope(s)

`charges.readonly`

#### Auth Method(s)

`OAuth Access Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-charges#request "Direct link to request")

### Query Parameters

**meterId** string

Billing Meter ID (you can find this on your app's pricing page on the developer portal)

**Example:** `680b97022b4a34420f5f9b93`

**eventId** string

Event ID / Transaction ID

**Example:** `evt_abc123`

**userId** string

Filter results by User ID that your server passed via API when the charge was created

**Example:** `user_abc123`

**startDate** string

Filter results AFTER a specific date. Use this in combination with endDate to filter results in a specific time window.

**Example:** `2025-03-26`

**endDate** string

Filter results BEFORE a specific date. Use this in combination with startDate to filter results in a specific time window.

**Example:** `2025-03-26`

**skip** number

Number of records to skip

**Example:** `0`

**limit** number

Maximum number of records to return

**Example:** `10`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-charges#responses "Direct link to Responses")

*   200
*   422

Returns list of wallet charges

*   application/json

*   Schema
*   Example (auto)

**Schema**

**charges** object\[\]

List of wallet charges

*   Array \[\
    \
\
**refunded**boolean\
\
Value is 'true' if the charge has subsequently been refunded.\
\
**Example:** `false`\
\
**currency**string\
\
Currency of the transaction. We currently support USD only.\
\
**Example:** `USD`\
\
**appId**string\
\
App ID\
\
**Example:** `6578278e879ad2646715ba9c`\
\
**meterId**string\
\
Billing Meter ID (you can find this on your app's pricing page)\
\
**Example:** `680b97022b4a34420f5f9b93`\
\
**chargeId**string\
\
Charge ID\
\
**Example:** `charge_123`\
\
**entityType**string\
\
Indicates who was charged? Currently, we support charges for 'location' only\
\
**Example:** `location`\
\
**entityId**string\
\
If the entityType is Location, entityld would be locationld.\
\
**Example:** `ve9EPM428h8vShlRW1KT`\
\
**amountCharged**number\
\
Total amount charged\
\
**Example:** `0.1`\
\
**pricePerUnit**number\
\
Price per unit for the charge\
\
**Example:** `0.01`\
\
**transactionType**string\
\
This can be one of two values - 'charge' or 'refund'\
\
**Example:** `charge`\
\
**units**number\
\
Number of units that the sub-account was charged for\
\
**Example:** `10`\
\
**meta**object\
\
meta object contains details that were sent while creating the charge via the API - eventID, description, eventTime, userld\
\
**Example:** `{"eventId":"evt_abc123","description":"Charge for 10 SMS messages"}`\
\
**createdAt**string<date-time>\
\
Timestamp when the charge was created in our system\
\
**Example:** `2025-03-26T00:00:00.000Z`\
\
**updatedAt**string<date-time>\
\
Timestamp when the charge was last updated in our system\
\
**Example:** `2025-03-26T00:00:00.000Z`\
\
*   \]
    

**count**numberdeprecated

Total number of charges

**Example:** `100`

**pagination** object

Pagination metadata for the charges list

**total**number

Total number of charges

**Example:** `100`

**skip**number

Number of records to skip

**Example:** `0`

**limit**number

Maximum number of records to return

**Example:** `10`

    {  "charges": [],  "pagination": {    "total": 100,    "skip": 0,    "limit": 10  }}

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

    curl -L 'https://services.leadconnectorhq.com/marketplace/billing/charges?meterId=680b97022b4a34420f5f9b93&eventId=evt_abc123&userId=user_abc123&startDate=2025-03-26&endDate=2025-03-26&limit=10' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

ParametersShow optional parameters

meterId — query

eventId — query

userId — query

startDate — query

endDate — query

skip — query

limit — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
