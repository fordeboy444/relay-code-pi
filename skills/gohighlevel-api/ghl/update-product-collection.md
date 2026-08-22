# Update Product Collection

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/products/update-product-collection
- **Summary:** Update a specific product collection with Id :collectionId

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/products/update-product-collection#__docusaurus_skipToContent_fallback)

Version: v3

Update Product Collection
=========================

PUT 

https://services.leadconnectorhq.com/products/collections/:collectionId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Update a specific product collection with Id :collectionId

### Requirements

#### Scope(s)

`products/collection.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/products/update-product-collection#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**collectionId** stringrequired

MongoId of the collection

**Example:** `65d71377c326ea78e1c47df5`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**altId**stringrequired

Location Id

**Example:** `6578278e879ad2646715ba9c`

**altType**stringrequired

The type of alt. For now it is only LOCATION

**Possible values:** \[`location`\]

**Example:** `LOCATION`

**name**string

Name of the Product Collection

**Example:** `Best Sellers`

**slug**string

Slug of the Product Collection which helps in navigation

**Example:** `best-sellers`

**image**string

The URL of the image that is going to be displayed as the collection Thumbnail

**Example:** `http://example.com/watermark.png`

**seo** object

The metadata information which will be displayed in SEO previews

**title**string

The title which will be displayed as an SEO format

**Example:** `Best Sellers`

**description**string

The description which would be displayed in preview purposes

**Example:** `Collections where all the best products are available`

    {  "altId": "6578278e879ad2646715ba9c",  "altType": "LOCATION",  "name": "Best Sellers",  "slug": "best-sellers",  "image": "http://example.com/watermark.png",  "seo": {    "title": "Best Sellers",    "description": "Collections where all the best products are available"  }}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/products/update-product-collection#responses "Direct link to Responses")

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

    curl -L -X PUT 'https://services.leadconnectorhq.com/products/collections/65d71377c326ea78e1c47df5' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "altId": "6578278e879ad2646715ba9c",  "altType": "LOCATION",  "name": "Best Sellers",  "slug": "best-sellers",  "image": "http://example.com/watermark.png",  "seo": {    "title": "Best Sellers",    "description": "Collections where all the best products are available"  }}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

collectionId — pathrequired

Version — headerrequired\---v3

Body required

{
  "altId": "6578278e879ad2646715ba9c",  "altType": "LOCATION",  "name": "Best Sellers",  "slug": "best-sellers",  "image": "http://example.com/watermark.png",  "seo": {    "title": "Best Sellers",    "description": "Collections where all the best products are available"  }
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
