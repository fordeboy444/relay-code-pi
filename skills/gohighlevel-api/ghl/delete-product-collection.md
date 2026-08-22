# Delete Product Collection

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/products/delete-product-collection
- **Summary:** Delete specific product collection with Id :collectionId

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/products/delete-product-collection#__docusaurus_skipToContent_fallback)

Version: v3

Delete Product Collection
=========================

DELETE 

https://services.leadconnectorhq.com/products/collections/:collectionId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Delete specific product collection with Id :collectionId

### Requirements

#### Scope(s)

`products/collection.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/products/delete-product-collection#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**collectionId** stringrequired

MongoId of the collection

**Example:** `65d71377c326ea78e1c47df5`

### Query Parameters

**altId** stringrequired

Location Id

**Example:** `6578278e879ad2646715ba9c`

**altType** stringrequired

**Possible values:** \[`location`\]

The type of alt. For now it is only LOCATION

**Example:** `LOCATION`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/products/delete-product-collection#responses "Direct link to Responses")

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
**type:** http**scopes:** `products/collection.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/products/collections/65d71377c326ea78e1c47df5?altId=6578278e879ad2646715ba9c&altType=LOCATION' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

collectionId — pathrequired

altId — queryrequired

altType — queryrequired\---location

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
