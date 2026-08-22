# List Inventory

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/products/get-list-inventory
- **Summary:** The 'List Inventory API allows the user to retrieve a paginated list of inventory items. Use this endpoint to fetch details for multiple items in the inventory based on the provided query parameters.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/products/get-list-inventory#__docusaurus_skipToContent_fallback)

Version: v3

List Inventory
==============

GET 

https://services.leadconnectorhq.com/products/inventory

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

The "List Inventory API allows the user to retrieve a paginated list of inventory items. Use this endpoint to fetch details for multiple items in the inventory based on the provided query parameters.

### Requirements

#### Scope(s)

`products/prices.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token``Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/products/get-list-inventory#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**limit** number

The maximum number of items to be included in a single page of results

Default value:`0`

**Example:** `20`

**offset** number

The starting index of the page, indicating the position from which the results should be retrieved.

Default value:`0`

**Example:** `0`

**altId** stringrequired

Location Id or Agency Id

**Example:** `6578278e879ad2646715ba9c`

**altType** stringrequired

**Possible values:** \[`location`\]

**search** string

Search string for Variant Search

**Example:** `Product Name`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/products/get-list-inventory#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**inventory** object\[\]required

List of inventory items

*   Array \[\
    \
\
**_id**stringrequired\
\
The unique identifier for the price\
\
**Example:** `6241712be68f7a98102ba272`\
\
**name**stringrequired\
\
Name of the price/variant\
\
**Example:** `Medium T-shirt`\
\
**availableQuantity**numberrequired\
\
Available quantity in inventory\
\
**Example:** `50`\
\
**sku**stringrequired\
\
SKU for the product variant\
\
**Example:** `TSHIRT-MED-001`\
\
**allowOutOfStockPurchases**booleanrequired\
\
Whether out of stock purchases are allowed\
\
**Example:** `false`\
\
**product**stringrequired\
\
Product ID this price belongs to\
\
**Example:** `6241712be68f7a98102ba270`\
\
**updatedAt**stringrequired\
\
Last update timestamp\
\
**Example:** `2023-12-12T09:27:42.355Z`\
\
**image**string\
\
Product image URL\
\
**Example:** `https://example.com/images/product.jpg`\
\
**productName**string\
\
Product name\
\
**Example:** `T-shirt`\
\
*   \]
    

**total**objectrequired

Total count of inventory items

**Example:** `{"total":100}`

    {  "inventory": [    {      "_id": "6241712be68f7a98102ba272",      "name": "Medium T-shirt",      "availableQuantity": 50,      "sku": "TSHIRT-MED-001",      "allowOutOfStockPurchases": false,      "product": "6241712be68f7a98102ba270",      "updatedAt": "2023-12-12T09:27:42.355Z",      "image": "https://example.com/images/product.jpg",      "productName": "T-shirt"    }  ],  "total": {    "total": 100  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/products/products-api#authentication)
**type:** http**scopes:** `products/prices.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/products/inventory?altId=6578278e879ad2646715ba9c&search=Product%20Name' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security SchemeLocation-AccessAgency-Access

Bearer Token

Parameters

altId — queryrequired

altType — queryrequired\---location

Version — headerrequired\---v3

Show optional parameters

limit — query

offset — query

search — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
