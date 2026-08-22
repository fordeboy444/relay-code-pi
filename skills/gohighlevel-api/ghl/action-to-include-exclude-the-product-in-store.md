# Action to include/exclude the product in store

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/products/update-store-status
- **Summary:** API to update the status of products in a particular store

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/products/update-store-status#__docusaurus_skipToContent_fallback)

Version: v3

Action to include/exclude the product in store

POST 

https://services.leadconnectorhq.com/products/store/:storeId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

API to update the status of products in a particular store

### Requirements

#### Scope(s)

`products.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/products/update-store-status#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**storeId** stringrequired

Products related to the store

**Example:** `3SwdhCu3svxI8AKsPJt6`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**altId**stringrequired

Location Id or Agency Id

**Example:** `6578278e879ad2646715ba9c`

**altType**stringrequired

**Possible values:** \[`location`\]

**action**stringrequired

Action to include or exclude the product from the store

**Possible values:** \[`include`, `exclude`\]

**Example:** `include`

**productIds**string\[\]required

Array of product IDs

**Example:** `["productId1","productId2"]`

    {  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "action": "include",  "productIds": [    "productId1",    "productId2"  ]}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/products/update-store-status#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/products/store/3SwdhCu3svxI8AKsPJt6' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "action": "include",  "productIds": [    "productId1",    "productId2"  ]}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

storeId — pathrequired

Version — headerrequired\---v3

Body required

{
  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "action": "include",  "productIds": \[    "productId1",    "productId2"  \]
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
