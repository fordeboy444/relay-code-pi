# Fetch Product Collections

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/products/get-product-collection
- **Summary:** Internal API to fetch the Product Collections

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/products/get-product-collection#__docusaurus_skipToContent_fallback)

Version: v3

Fetch Product Collections
=========================

GET 

https://services.leadconnectorhq.com/products/collections

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Internal API to fetch the Product Collections

### Requirements

#### Scope(s)

`products/collection.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/products/get-product-collection#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**limit** number

The maximum number of items to be included in a single page of results

Default value:`10`

**Example:** `20`

**offset** number

The starting index of the page, indicating the position from which the results should be retrieved.

Default value:`0`

**Example:** `0`

**altId** stringrequired

Location Id

**Example:** `6578278e879ad2646715ba9c`

**altType** stringrequired

**Possible values:** \[`location`\]

The type of alt. For now it is only LOCATION

**Example:** `LOCATION`

**collectionIds** string

Ids of the collections separated by comma(,) for search purposes

**Example:** `65d71377c326ea78e1c47df5,65d71377c326ea78e1c47d34`

**name** string

Query to search collection based on names

**Example:** `Best Sellers`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/products/get-product-collection#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**data**array\[\]required

Array of Collections

**total**numberrequired

The total count of the collections present, which is useful to calculate the pagination

    {  "data": [    null  ],  "total": 0}
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

    curl -L 'https://services.leadconnectorhq.com/products/collections?limit=10&altId=6578278e879ad2646715ba9c&altType=LOCATION&collectionIds=65d71377c326ea78e1c47df5%2C65d71377c326ea78e1c47d34&name=Best%20Sellers' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

altId — queryrequired

altType — queryrequired\---location

Version — headerrequired\---v3

Show optional parameters

limit — query

offset — query

collectionIds — query

name — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
