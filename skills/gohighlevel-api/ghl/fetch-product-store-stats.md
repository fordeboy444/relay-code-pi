# Fetch Product Store Stats

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/products/get-product-store-stats
- **Summary:** API to fetch the total number of products, included in the store, and excluded from the store and other stats

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/products/get-product-store-stats#__docusaurus_skipToContent_fallback)

Version: v3

Fetch Product Store Stats
=========================

GET 

https://services.leadconnectorhq.com/products/store/:storeId/stats

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

API to fetch the total number of products, included in the store, and excluded from the store and other stats

### Requirements

#### Scope(s)

`products.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/products/get-product-store-stats#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**storeId** stringrequired

Products related to the store

**Example:** `3SwdhCu3svxI8AKsPJt6`

### Query Parameters

**altId** stringrequired

Location Id or Agency Id

**Example:** `6578278e879ad2646715ba9c`

**altType** stringrequired

**Possible values:** \[`location`\]

**search** string

The name of the product for searching.

**Example:** `Awesome product`

**collectionIds** string

Filter by product collection Ids. Supports comma separated values

**Example:** `65c2789a812e52f9bd6ec577,65c2789a812e52de9a6ec576`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/products/get-product-store-stats#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**totalProducts**numberrequired

Total number of products

**Example:** `100`

**includedInStore**numberrequired

Number of products included in the store

**Example:** `80`

**excludedFromStore**numberrequired

Number of products excluded from the store

**Example:** `20`

    {  "totalProducts": 100,  "includedInStore": 80,  "excludedFromStore": 20}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/products/products-api#authentication)
**type:** http**scopes:** `products.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/products/store/3SwdhCu3svxI8AKsPJt6/stats?altId=6578278e879ad2646715ba9c&search=Awesome%20product&collectionIds=65c2789a812e52f9bd6ec577%2C65c2789a812e52de9a6ec576' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

storeId — pathrequired

altId — queryrequired

altType — queryrequired\---location

Version — headerrequired\---v3

Show optional parameters

search — query

collectionIds — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
