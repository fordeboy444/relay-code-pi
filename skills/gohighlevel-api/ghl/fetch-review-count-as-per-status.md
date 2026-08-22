# Fetch Review Count as per status

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/products/get-reviews-count
- **Summary:** API to fetch the Review Count as per status

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/products/get-reviews-count#__docusaurus_skipToContent_fallback)

Version: v3

Fetch Review Count as per status
================================

GET 

https://services.leadconnectorhq.com/products/reviews/count

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

API to fetch the Review Count as per status

### Requirements

#### Scope(s)

`products.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/products/get-reviews-count#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**altId** stringrequired

Location Id or Agency Id

**Example:** `6578278e879ad2646715ba9c`

**altType** stringrequired

**Possible values:** \[`location`\]

**rating** number

Key to filter the ratings

**Example:** `4`

**startDate** string

The start date for filtering reviews

**Example:** `2023-01-01T00:00:00Z`

**endDate** string

The end date for filtering reviews

**Example:** `2023-12-31T23:59:59Z`

**productId** string

Comma-separated list of product IDs

**Example:** `60d21b4667d0d8992e610c88,60d21b4667d0d8992e610c89,60d21b4667d0d8992e610c8a`

**storeId** string

Comma-separated list of store IDs

**Example:** `60d21b4667d0d8992e610c85,60d21b4667d0d8992e610c86,60d21b4667d0d8992e610c87`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/products/get-reviews-count#responses "Direct link to Responses")

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

Array of review status counts

    {  "data": [    null  ]}
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

    curl -L 'https://services.leadconnectorhq.com/products/reviews/count?altId=6578278e879ad2646715ba9c&rating=4&startDate=2023-01-01T00%3A00%3A00Z&endDate=2023-12-31T23%3A59%3A59Z&productId=60d21b4667d0d8992e610c88%2C60d21b4667d0d8992e610c89%2C60d21b4667d0d8992e610c8a&storeId=60d21b4667d0d8992e610c85%2C60d21b4667d0d8992e610c86%2C60d21b4667d0d8992e610c87' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

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

rating — query

startDate — query

endDate — query

productId — query

storeId — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
