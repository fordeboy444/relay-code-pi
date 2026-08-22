# Get Price by ID for a Product

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/products/get-price-by-id-for-product
- **Summary:** The 'Get Price by ID for a Product' API allows retrieving information for a specific price associated with a particular product using its unique identifier. Use this endpoint to fetch details for a single price based on the provided price ID and product ID.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/products/get-price-by-id-for-product#__docusaurus_skipToContent_fallback)

Version: v3

Get Price by ID for a Product
=============================

GET 

https://services.leadconnectorhq.com/products/:productId/price/:priceId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

The "Get Price by ID for a Product" API allows retrieving information for a specific price associated with a particular product using its unique identifier. Use this endpoint to fetch details for a single price based on the provided price ID and product ID.

### Requirements

#### Scope(s)

`products/prices.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token``Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/products/get-price-by-id-for-product#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**productId** stringrequired

ID of the product that needs to be used

**Example:** `6578278e879ad2646715ba9c`

**priceId** stringrequired

ID of the price that needs to be returned

**Example:** `6578278e879ad2646715ba9c`

### Query Parameters

**locationId** stringrequired

location Id

**Example:** `6578278e879ad2646715ba9c`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/products/get-price-by-id-for-product#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**_id**stringrequired

The unique identifier for the price.

**Example:** `655b33aa2209e60b6adb87a7`

**membershipOffers** object\[\]

An array of membership offers associated with the price.

*   Array \[\
    \
\
**label**stringrequired\
\
Membership offer label\
\
**Example:** `top_50`\
\
**value**stringrequired\
\
Membership offer label\
\
**Example:** `50`\
\
**_id**stringrequired\
\
The unique identifier for the membership offer.\
\
**Example:** `655b33aa2209e60b6adb87a7`\
\
*   \]
    

**variantOptionIds**string\[\]

An array of variant option IDs associated with the price.

**Example:** `["h4z7u0im2q8","h3nst2ltsnn"]`

**locationId**string

The unique identifier for the location.

**Example:** `3SwdhCsvxI8Au3KsPJt6`

**product**string

The unique identifier for the associated product.

**Example:** `655b33a82209e60b6adb87a5`

**userId**string

The unique identifier for the user.

**Example:** `6YAtzfzpmHAdj0e8GkKp`

**name**stringrequired

The name of the price.

**Example:** `Red / S`

**type**stringrequired

The type of the price (e.g., one_time).

**Possible values:** \[`one_time`, `recurring`\]

**Example:** `one_time`

**currency**stringrequired

The currency code for the price.

**Example:** `INR`

**amount**numberrequired

The amount of the price.

**Example:** `199999`

**recurring** object

The recurring details of the price (if type is recurring).

**interval**stringrequired

The interval at which the recurring event occurs.

**Possible values:** \[`day`, `month`, `week`, `year`\]

**Example:** `day`

**intervalCount**numberrequired

The number of intervals between each occurrence of the event.

**Example:** `1`

**createdAt**string<date-time>

The creation timestamp of the price.

**Example:** `2023-11-20T10:23:38.645Z`

**updatedAt**string<date-time>

The last update timestamp of the price.

**Example:** `2024-01-23T09:57:04.852Z`

**compareAtPrice**number

The compare-at price for comparison purposes.

**Example:** `2000000`

**trackInventory**boolean

Indicates whether inventory tracking is enabled.

**Example:** `null`

**availableQuantity**number

Available inventory stock quantity

**Example:** `5`

**allowOutOfStockPurchases**boolean

Continue selling when out of stock

**Example:** `true`

    {  "_id": "655b33aa2209e60b6adb87a7",  "membershipOffers": [    {      "label": "top_50",      "value": "50",      "_id": "655b33aa2209e60b6adb87a7"    }  ],  "variantOptionIds": [    "h4z7u0im2q8",    "h3nst2ltsnn"  ],  "locationId": "3SwdhCsvxI8Au3KsPJt6",  "product": "655b33a82209e60b6adb87a5",  "userId": "6YAtzfzpmHAdj0e8GkKp",  "name": "Red / S",  "type": "one_time",  "currency": "INR",  "amount": 199999,  "recurring": {    "interval": "day",    "intervalCount": 1  },  "createdAt": "2023-11-20T10:23:38.645Z",  "updatedAt": "2024-01-23T09:57:04.852Z",  "compareAtPrice": 2000000,  "trackInventory": null,  "availableQuantity": 5,  "allowOutOfStockPurchases": true}
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

    curl -L 'https://services.leadconnectorhq.com/products/6578278e879ad2646715ba9c/price/6578278e879ad2646715ba9c?locationId=6578278e879ad2646715ba9c' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security SchemeLocation-AccessAgency-Access

Bearer Token

Parameters

productId — pathrequired

priceId — pathrequired

locationId — queryrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
