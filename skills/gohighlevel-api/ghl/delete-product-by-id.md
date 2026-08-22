# Delete Product by ID

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/products/delete-product-by-id
- **Summary:** The 'Delete Product by ID' API allows deleting a specific product using its unique identifier. Use this endpoint to remove a product from the system.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/products/delete-product-by-id#__docusaurus_skipToContent_fallback)

Version: v3

Delete Product by ID
====================

DELETE 

https://services.leadconnectorhq.com/products/:productId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

The "Delete Product by ID" API allows deleting a specific product using its unique identifier. Use this endpoint to remove a product from the system.

### Requirements

#### Scope(s)

`products.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token``Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/products/delete-product-by-id#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**productId** stringrequired

ID or the slug of the product that needs to be returned

**Example:** `6578278e879ad2646715ba9c`

### Query Parameters

**locationId** stringrequired

location Id

**Example:** `6578278e879ad2646715ba9c`

**sendWishlistStatus** boolean

Parameter which will decide whether to show the wishlisting status of products

**Example:** `true`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/products/delete-product-by-id#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**status**booleanrequired

returns true if the product is successfully deleted

**Example:** `true`

    {  "status": true}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/products/products-api#authentication)
**type:** http**scopes:** `products.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/products/6578278e879ad2646715ba9c?locationId=6578278e879ad2646715ba9c&sendWishlistStatus=true' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security SchemeLocation-AccessAgency-Access

Bearer Token

Parameters

productId — pathrequired

locationId — queryrequired

Version — headerrequired\---v3

Show optional parameters

sendWishlistStatus — query\---truefalse

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
