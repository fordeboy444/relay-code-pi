# List Order Notes

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/payments/list-order-notes
- **Summary:** List all notes of an order

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/payments/list-order-notes#__docusaurus_skipToContent_fallback)

Version: v3

List Order Notes
================

GET 

https://services.leadconnectorhq.com/payments/orders/:orderId/notes

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

List all notes of an order

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/payments/list-order-notes#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**orderId** stringrequired

ID of the order that needs to be returned

**Example:** `653f5e0cde5a1314e62a837c`

### Query Parameters

**altId** stringrequired

Location Id or Agency Id

**Example:** `6578278e879ad2646715ba9c`

**altType** stringrequired

**Possible values:** \[`location`\]

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/payments/list-order-notes#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/payments/payments-api#authentication)
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

    curl -L 'https://services.leadconnectorhq.com/payments/orders/653f5e0cde5a1314e62a837c/notes?altId=6578278e879ad2646715ba9c' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

orderId — pathrequired

altId — queryrequired

altType — queryrequired\---location

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
