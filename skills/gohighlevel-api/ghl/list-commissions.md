# List Commissions

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/list-commissions
- **Summary:** Retrieve the list of commissions for a location.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/list-commissions#__docusaurus_skipToContent_fallback)

Version: v3

List Commissions
================

GET 

https://services.leadconnectorhq.com/affiliate-manager/:locationId/commissions

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve the list of commissions for a location.

### Requirements

#### Scope(s)

`affiliate-manager.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/list-commissions#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

### Query Parameters

**campaignId** string

Campaign Id

**Example:** `6385d230f6d19db03eef6fb2`

**affiliateId** string

Affiliate Id

**Example:** `6385d230f6d19db03eef6fb2`

**status** string

Status

**Example:** `pending`

**query** string

Query

**Example:** `affiliate@gmail.com`

**skip** number

Default value:`0`

**Example:** `1`

**limit** number

Maximum number of records to return. Maximum allowed value is 100.

Default value:`10`

**Example:** `10`

**fromDate** string

**Example:** `2023-10-01`

**toDate** string

**Example:** `2023-10-01`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/list-commissions#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**commissions** object\[\]required

Commission list

*   Array \[\
    \
\
**_id**stringrequired\
\
Commission id\
\
**Example:** `6385d230f6d19db03eef6fb2`\
\
**productId**string\
\
Product id\
\
**Example:** `6385d230f6d19db03eef6fb2`\
\
**productName**string\
\
Product name\
\
**Example:** `Basic Plan`\
\
**qty**number\
\
Quantity\
\
**Example:** `1`\
\
**productCommission**number\
\
Product commission amount\
\
**Example:** `25`\
\
**commissionAmount**number\
\
Commission amount\
\
**Example:** `25`\
\
**amount**number\
\
Base amount\
\
**Example:** `100`\
\
**unitDiscount**number\
\
Unit discount\
\
**Example:** `5`\
\
**campaignName**string\
\
Campaign name\
\
**Example:** `Summer Promo`\
\
**commission**number\
\
Commission percentage or value\
\
**Example:** `25`\
\
**commissionType**string\
\
Commission type\
\
**Example:** `percentage`\
\
**transactionAt**string\
\
Transaction time\
\
**Example:** `2024-06-16T00:00:00.000Z`\
\
**transactionId**string\
\
Transaction id\
\
**Example:** `txn_123`\
\
**affiliateId**string\
\
Affiliate id\
\
**Example:** `6385d230f6d19db03eef6fb2`\
\
**payoutId**string\
\
Payout id\
\
**Example:** `6385d230f6d19db03eef6fb2`\
\
**status**string\
\
Commission status\
\
**Example:** `pending`\
\
**currency**string\
\
Currency\
\
**Example:** `USD`\
\
**isTrial**boolean\
\
Whether the item is a trial commission\
\
**Example:** `false`\
\
**customer** object\
\
Customer details\
\
**_id**string\
\
Customer id\
\
**Example:** `6385d230f6d19db03eef6fb2`\
\
**firstName**string\
\
Customer first name\
\
**Example:** `John`\
\
**lastName**string\
\
Customer last name\
\
**Example:** `Doe`\
\
**email**string\
\
Customer email\
\
**Example:** `john@example.com`\
\
**type**string\
\
Customer type\
\
**Example:** `customer`\
\
**createdAt**string\
\
Created at\
\
**Example:** `2024-06-16T00:00:00.000Z`\
\
**eventId**string\
\
Event id\
\
**Example:** `evt_123`\
\
**campaign** object\
\
Campaign details\
\
**id**string\
\
Campaign id\
\
**Example:** `6385d230f6d19db03eef6fb2`\
\
**name**string\
\
Campaign name\
\
**Example:** `Summer Promo`\
\
**liveMode**boolean\
\
Whether the campaign is in live mode\
\
**Example:** `true`\
\
**affiliate** object\
\
Affiliate details\
\
**_id**string\
\
Affiliate id\
\
**Example:** `6385d230f6d19db03eef6fb2`\
\
**name**string\
\
Affiliate display name\
\
**Example:** `John Doe`\
\
**email**string\
\
Affiliate email\
\
**Example:** `affiliate@example.com`\
\
**dueAt**string\
\
Due date\
\
**Example:** `2024-06-30T00:00:00.000Z`\
\
**liveMode**boolean\
\
Whether the commission is in live mode\
\
**Example:** `true`\
\
**tier**number\
\
Commission tier\
\
**Example:** `1`\
\
*   \]
    

**meta** object

Pagination metadata

**count**numberrequired

Total commissions matching the filters

**Example:** `42`

    {  "commissions": [    {      "_id": "6385d230f6d19db03eef6fb2",      "productId": "6385d230f6d19db03eef6fb2",      "productName": "Basic Plan",      "qty": 1,      "productCommission": 25,      "commissionAmount": 25,      "amount": 100,      "unitDiscount": 5,      "campaignName": "Summer Promo",      "commission": 25,      "commissionType": "percentage",      "transactionAt": "2024-06-16T00:00:00.000Z",      "transactionId": "txn_123",      "affiliateId": "6385d230f6d19db03eef6fb2",      "payoutId": "6385d230f6d19db03eef6fb2",      "status": "pending",      "currency": "USD",      "isTrial": false,      "customer": {        "_id": "6385d230f6d19db03eef6fb2",        "firstName": "John",        "lastName": "Doe",        "email": "john@example.com",        "type": "customer"      },      "createdAt": "2024-06-16T00:00:00.000Z",      "eventId": "evt_123",      "campaign": {        "id": "6385d230f6d19db03eef6fb2",        "name": "Summer Promo",        "liveMode": true      },      "affiliate": {        "_id": "6385d230f6d19db03eef6fb2",        "name": "John Doe",        "email": "affiliate@example.com"      },      "dueAt": "2024-06-30T00:00:00.000Z",      "liveMode": true,      "tier": 1    }  ],  "meta": {    "count": 42  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/affiliate-manager-api#authentication)
**type:** http**scopes:** `affiliate-manager.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/affiliate-manager/ve9EPM428h8vShlRW1KT/commissions?campaignId=6385d230f6d19db03eef6fb2&affiliateId=6385d230f6d19db03eef6fb2&status=pending&query=affiliate%40gmail.com&limit=10&fromDate=2023-10-01&toDate=2023-10-01' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

Version — headerrequired\---v3

Show optional parameters

campaignId — query

affiliateId — query

status — query

query — query

skip — query

limit — query

fromDate — query

toDate — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
