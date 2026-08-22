# Delete Product Review

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/products/delete-product-review
- **Summary:** Delete specific product review

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/products/delete-product-review#__docusaurus_skipToContent_fallback)

Version: v3

Delete Product Review
=====================

DELETE 

https://services.leadconnectorhq.com/products/reviews/:reviewId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Delete specific product review

### Requirements

#### Scope(s)

`products.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/products/delete-product-review#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**reviewId** stringrequired

Review Id

**Example:** `6578278e879ad2646715ba9c`

### Query Parameters

**altId** stringrequired

Location Id or Agency Id

**Example:** `6578278e879ad2646715ba9c`

**altType** stringrequired

**Possible values:** \[`location`\]

**productId** stringrequired

Product Id of the product

**Example:** `6578278e879ad2646715ba9c`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/products/delete-product-review#responses "Direct link to Responses")

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

    curl -L -X DELETE 'https://services.leadconnectorhq.com/products/reviews/6578278e879ad2646715ba9c?altId=6578278e879ad2646715ba9c&productId=6578278e879ad2646715ba9c' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

reviewId — pathrequired

altId — queryrequired

altType — queryrequired\---location

productId — queryrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
