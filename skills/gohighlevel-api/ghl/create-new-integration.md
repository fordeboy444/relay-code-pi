# Create new integration

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/payments/create-integration
- **Summary:** API to create a new association for an app and location

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/payments/create-integration#__docusaurus_skipToContent_fallback)

Version: v3

Create new integration
======================

POST 

https://services.leadconnectorhq.com/payments/custom-provider/provider

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

API to create a new association for an app and location

### Requirements

#### Scope(s)

`payments/custom-provider.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/payments/create-integration#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**locationId** stringrequired

Location id

**Example:** `Lk3nlfk4lxlelVEwcW`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**name**stringrequired

The name of the custom provider

**Example:** `Company Paypal Integration`

**description**stringrequired

Description of payment gateway. Shown on the payments integrations page as subtext

**Example:** `This payment gateway supports payments in India via UPI, Net banking, cards and wallets.`

**paymentsUrl**stringrequired

This url will be loaded in iFrame to start a payment session.

**Example:** `https://testpayment.paypal.com`

**queryUrl**stringrequired

The url used for querying payments related events. Ex. verify, refund, subscription etc.

**Example:** `https://testsubscription.paypal.com`

**imageUrl**stringrequired

Public image url for logo of the payment gateway displayed on the payments integrations page.

**Example:** `https://testsubscription.paypal.com`

**supportsSubscriptionSchedule**booleanrequired

Whether the config supports subscription schedule or not. true represents config supports subscription schedule

**Example:** `true`

    {  "name": "Company Paypal Integration",  "description": "This payment gateway supports payments in India via UPI, Net banking, cards and wallets.",  "paymentsUrl": "https://testpayment.paypal.com",  "queryUrl": "https://testsubscription.paypal.com",  "imageUrl": "https://testsubscription.paypal.com",  "supportsSubscriptionSchedule": true}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/payments/create-integration#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**name**stringrequired

The name of the custom provider

**Example:** `Company Paypal Integration`

**description**stringrequired

Description of payment gateway. Shown on the payments integrations page as subtext

**Example:** `This payment gateway supports payments in India via UPI, Net banking, cards and wallets.`

**paymentsUrl**stringrequired

This url will be loaded in iFrame to start a payment session.

**Example:** `https://testpayment.paypal.com`

**queryUrl**stringrequired

The url used for querying payments related events. Ex. verify, refund, subscription etc.

**Example:** `https://testsubscription.paypal.com`

**imageUrl**stringrequired

Public image url for logo of the payment gateway displayed on the payments integrations page.

**Example:** `https://testsubscription.paypal.com`

**_id**stringrequired

The unique identifier for the custom provider.

**Example:** `662a44ad19a2a44d3cd9d749`

**locationId**stringrequired

Location id

**Example:** `Lk3nlfk4lxlelVEwcW`

**marketplaceAppId**stringrequired

The application id of marketplace

**Example:** `65f0b217a05c774da7f1efa5`

**paymentProvider**object

Payment provider details.

**Example:** `{ live: { liveMode: true }, test: { liveMode: false, apiKey: "y5ZQxryRFXZHvUJZdLXXXXXX", publishableKey: "rzp_test_zPRoVMLOa0A9wo" }}`

**deleted**booleanrequired

Whether the config is deleted or not. true represents config is deleted

**Example:** `true`

**createdAt**string<date-time>required

The creation timestamp of the custom provider.

**Example:** `2023-11-20T10:23:36.515Z`

**updatedAt**string<date-time>required

The last update timestamp of the custom provider.

**Example:** `2024-01-23T09:57:04.846Z`

**traceId**string

Trace id of the custom provider.

**Example:** `302d2cf4-1ba0-4bf5-bc3b-f8fa76fda58a`

    {  "name": "Company Paypal Integration",  "description": "This payment gateway supports payments in India via UPI, Net banking, cards and wallets.",  "paymentsUrl": "https://testpayment.paypal.com",  "queryUrl": "https://testsubscription.paypal.com",  "imageUrl": "https://testsubscription.paypal.com",  "_id": "662a44ad19a2a44d3cd9d749",  "locationId": "Lk3nlfk4lxlelVEwcW",  "marketplaceAppId": "65f0b217a05c774da7f1efa5",  "paymentProvider": "{ live: { liveMode: true }, test: { liveMode: false, apiKey: \"y5ZQxryRFXZHvUJZdLXXXXXX\", publishableKey: \"rzp_test_zPRoVMLOa0A9wo\" }}",  "deleted": true,  "createdAt": "2023-11-20T10:23:36.515Z",  "updatedAt": "2024-01-23T09:57:04.846Z",  "traceId": "302d2cf4-1ba0-4bf5-bc3b-f8fa76fda58a"}
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

    curl -L 'https://services.leadconnectorhq.com/payments/custom-provider/provider?locationId=Lk3nlfk4lxlelVEwcW' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "name": "Company Paypal Integration",  "description": "This payment gateway supports payments in India via UPI, Net banking, cards and wallets.",  "paymentsUrl": "https://testpayment.paypal.com",  "queryUrl": "https://testsubscription.paypal.com",  "imageUrl": "https://testsubscription.paypal.com",  "supportsSubscriptionSchedule": true}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

Version — headerrequired\---v3

Body required

{
  "name": "Company Paypal Integration",  "description": "This payment gateway supports payments in India via UPI, Net banking, cards and wallets.",  "paymentsUrl": "https://testpayment.paypal.com",  "queryUrl": "https://testsubscription.paypal.com",  "imageUrl": "https://testsubscription.paypal.com",  "supportsSubscriptionSchedule": true
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
