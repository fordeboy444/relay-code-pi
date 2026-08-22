# Deleting an existing integration

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/payments/delete-integration
- **Summary:** API to delete an association for an app and location

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/payments/delete-integration#__docusaurus_skipToContent_fallback)

Version: v3

Deleting an existing integration
================================

DELETE 

https://services.leadconnectorhq.com/payments/custom-provider/provider

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

API to delete an association for an app and location

### Requirements

#### Scope(s)

`payments/custom-provider.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/payments/delete-integration#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**locationId** stringrequired

Location id

**Example:** `Lk3nlfk4lxlelVEwcW`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/payments/delete-integration#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Whether the custom provider config is disconnect or not. true represents config is disconnect

**Example:** `true`

    {  "success": "true"}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/payments/payments-api#authentication)
**type:** http**scopes:** `payments/custom-provider.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/payments/custom-provider/provider?locationId=Lk3nlfk4lxlelVEwcW' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
