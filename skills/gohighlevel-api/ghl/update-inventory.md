# Update Inventory

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/products/update-inventory
- **Summary:** The Update Inventory API allows the user to bulk update the inventory for multiple items. Use this endpoint to update the available quantity and out-of-stock purchase settings for multiple items in the inventory.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/products/update-inventory#__docusaurus_skipToContent_fallback)

Version: v3

Update Inventory
================

POST 

https://services.leadconnectorhq.com/products/inventory

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

The Update Inventory API allows the user to bulk update the inventory for multiple items. Use this endpoint to update the available quantity and out-of-stock purchase settings for multiple items in the inventory.

### Requirements

#### Scope(s)

`products/prices.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token``Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/products/update-inventory#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

*   application/json

*   Body
*   Example (auto)

### Body**required**

**altId**stringrequired

Location Id or Agency Id

**Example:** `6578278e879ad2646715ba9c`

**altType**stringrequired

**Possible values:** \[`location`\]

**items** object\[\]required

Array of items to update in the inventory.

*   Array \[\
    \
\
**priceId**stringrequired\
\
The unique identifier for the price, in MongoDB ID format.\
\
**Example:** `5e9f8f8f8f8f8f8f8f8f8f8`\
\
**availableQuantity**number\
\
The available quantity of the item.\
\
**Example:** `10`\
\
**allowOutOfStockPurchases**boolean\
\
Whether to continue selling the item when out of stock.\
\
**Example:** `false`\
\
*   \]
    

    {  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "items": [    {      "priceId": "5e9f8f8f8f8f8f8f8f8f8f8",      "availableQuantity": 10,      "allowOutOfStockPurchases": false    }  ]}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/products/update-inventory#responses "Direct link to Responses")

*   201
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**status**booleanrequired

Status of api action

**Example:** `true`

**message**string

Success message

**Example:** `Successfully created`

    {  "status": true,  "message": "Successfully created"}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/products/products-api#authentication)
**type:** http**scopes:** `products/prices.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/products/inventory' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "items": [    {      "priceId": "5e9f8f8f8f8f8f8f8f8f8f8",      "availableQuantity": 10,      "allowOutOfStockPurchases": false    }  ]}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security SchemeLocation-AccessAgency-Access

Bearer Token

Parameters

Version — headerrequired\---v3

Body required

{
  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "items": \[    {      "priceId": "5e9f8f8f8f8f8f8f8f8f8f8",      "availableQuantity": 10,      "allowOutOfStockPurchases": false    }  \]
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
