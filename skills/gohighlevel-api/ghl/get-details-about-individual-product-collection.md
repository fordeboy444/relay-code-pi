# Get Details about individual product collection

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/products/get-product-collection-id
- **Summary:** Get Details about individual product collection

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/products/get-product-collection-id#__docusaurus_skipToContent_fallback)

Version: v3

Get Details about individual product collection

GET 

https://services.leadconnectorhq.com/products/collections/:collectionId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get Details about individual product collection

### Requirements

#### Scope(s)

`products/collection.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/products/get-product-collection-id#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**collectionId** stringrequired

Collection Id

**Example:** `65d71377c326ea78e1c47df5`

### Query Parameters

**altId** stringrequired

Location Id

**Example:** `3SwdhCsvxI8Au3KsPJt6`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/products/get-product-collection-id#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**data**objectrequired

Collection Data

**status**booleanrequired

Status of the operation

**Example:** `true`

    {  "data": {},  "status": true}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/products/products-api#authentication)
**type:** http**scopes:** `products/collection.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/products/collections/65d71377c326ea78e1c47df5?altId=3SwdhCsvxI8Au3KsPJt6' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

collectionId — pathrequired

altId — queryrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
