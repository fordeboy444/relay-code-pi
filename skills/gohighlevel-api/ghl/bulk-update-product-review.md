# Update Product Reviews

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/products/bulk-update-product-review
- **Summary:** Update one or multiple product reviews: status, reply, etc.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/products/bulk-update-product-review#__docusaurus_skipToContent_fallback)

Version: v3

Update Product Reviews
======================

POST 

https://services.leadconnectorhq.com/products/reviews/bulk-update

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Update one or multiple product reviews: status, reply, etc.

### Requirements

#### Scope(s)

`products.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/products/bulk-update-product-review#request "Direct link to request")

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

**reviews** object\[\]required

Array of Product Reviews

*   Array \[\
    \
\
**reviewId**stringrequired\
\
Review Id\
\
**Example:** `6578278e879ad2646715ba9c`\
\
**productId**stringrequired\
\
Product Id\
\
**Example:** `6578278e879ad2646715ba9d`\
\
**storeId**stringrequired\
\
Store Id\
\
**Example:** `a1b2c3d4e5f6g7h8i9j0k1l2`\
\
*   \]
    

**status**objectrequired

Status of the review

**Example:** `approved`

    {  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "reviews": [    {      "reviewId": "6578278e879ad2646715ba9c",      "productId": "6578278e879ad2646715ba9d",      "storeId": "a1b2c3d4e5f6g7h8i9j0k1l2"    }  ],  "status": "approved"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/products/bulk-update-product-review#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/products/reviews/bulk-update' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "reviews": [    {      "reviewId": "6578278e879ad2646715ba9c",      "productId": "6578278e879ad2646715ba9d",      "storeId": "a1b2c3d4e5f6g7h8i9j0k1l2"    }  ],  "status": "approved"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired\---v3

Body required

{
  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "reviews": \[    {      "reviewId": "6578278e879ad2646715ba9c",      "productId": "6578278e879ad2646715ba9d",      "storeId": "a1b2c3d4e5f6g7h8i9j0k1l2"    }  \],  "status": "approved"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
