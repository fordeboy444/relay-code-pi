# Update product display priorities in store

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/products/update-display-priority
- **Summary:** API to set the display priority of products in a store

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/products/update-display-priority#__docusaurus_skipToContent_fallback)

Version: v3

Update product display priorities in store

POST 

https://services.leadconnectorhq.com/products/store/:storeId/priority

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

API to set the display priority of products in a store

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/products/update-display-priority#request "Direct link to request")

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

**products**array\[\]required

Array of products with their display priorities

    {  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "products": [    null  ]}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/products/update-display-priority#responses "Direct link to Responses")

*   200
*   400
*   401

Successfully updated display priorities

Bad Request

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `400`

**message**string

**Example:** `Bad Request`

    {  "statusCode": 400,  "message": "Bad Request"}

Unauthorized

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `401`

**message**string

**Example:** `Invalid token: access token is invalid`

**error**string

**Example:** `Unauthorized`

    {  "statusCode": 401,  "message": "Invalid token: access token is invalid",  "error": "Unauthorized"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/products/products-api#authentication)
**type:** http**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/products/store/3SwdhCu3svxI8AKsPJt6/priority' \-H 'Content-Type: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "products": [    null  ]}'

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
  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "products": \[    null  \]
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
