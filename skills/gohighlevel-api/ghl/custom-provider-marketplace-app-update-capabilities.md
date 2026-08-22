# Custom-provider marketplace app update capabilities

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/payments/custom-provider-marketplace-app-update-capabilities
- **Summary:** Toggle capabilities for the marketplace app tied to the OAuth client

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/payments/custom-provider-marketplace-app-update-capabilities#__docusaurus_skipToContent_fallback)

Version: v3

Custom-provider marketplace app update capabilities

PUT 

https://services.leadconnectorhq.com/payments/custom-provider/capabilities

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Toggle capabilities for the marketplace app tied to the OAuth client

### Requirements

#### Scope(s)

`payments/custom-provider.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/payments/custom-provider-marketplace-app-update-capabilities#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

*   application/json

*   Body
*   Example (auto)

### Body**required**

**supportsSubscriptionSchedules**booleanrequired

Whether the marketplace app supports subscription schedules or not

**Example:** `true`

**companyId**string

Company id. Mandatory if locationId is not provided

**Example:** `Yjnwuduw83e8x30sm0`

**locationId**string

Location / Sub-account id. Mandatory if companyId is not provided

**Example:** `Yjnwuduw83e8x30sm0`

    {  "supportsSubscriptionSchedules": true,  "companyId": "Yjnwuduw83e8x30sm0",  "locationId": "Yjnwuduw83e8x30sm0"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/payments/custom-provider-marketplace-app-update-capabilities#responses "Direct link to Responses")

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

Whether the custom provider capabilities are updated or not. true represents capabilities are updated

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

    curl -L -X PUT 'https://services.leadconnectorhq.com/payments/custom-provider/capabilities' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "supportsSubscriptionSchedules": true,  "companyId": "Yjnwuduw83e8x30sm0",  "locationId": "Yjnwuduw83e8x30sm0"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired\---v3

Body required

{
  "supportsSubscriptionSchedules": true,  "companyId": "Yjnwuduw83e8x30sm0",  "locationId": "Yjnwuduw83e8x30sm0"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
