# Purchase number for location

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/phone-system/purchase-number-for-location
- **Summary:** Purchase number for location. With `version: v3`, the HTTP 201 body is the standard success envelope (`status`, `data`, `message`, `statusCode`). The v3 purchase fields live under `data`: `number`, `locationId`, `id`, and `underLcAccount` (renamed from under_ghl_account).

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/phone-system/purchase-number-for-location#__docusaurus_skipToContent_fallback)

Version: v3New

Purchase number for location
============================

POST 

https://services.leadconnectorhq.com/phone-system/numbers/location/:locationId/purchase

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Purchase number for location. With `version: v3`, the HTTP 201 body is the standard success envelope (`status`, `data`, `message`, `statusCode`). The v3 purchase fields live under `data`: `number`, `locationId`, `id`, and `underLcAccount` (renamed from under_ghl_account).

### Requirements

#### Scope(s)

`phonenumbers.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/phone-system/purchase-number-for-location#request "Direct link to request")

### Header Parameters

**version** stringrequired

**Possible values:** \[`v3`\]

Send `v3` to use the v3 response contract (AIP). This is the supported version value for these endpoints.

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location ID as string

**Example:** `tDtDnQdgm2LXpyiqYvZ6`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**phoneNumber**stringrequired

phoneNumber to purchase

**Example:** `830236932`

**addressSid**stringrequired

addressSid twilio address id

**Example:** `ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`

**bundleSid**stringrequired

bundleSid twilio bundle id

**Example:** `BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`

**countryCode**stringrequired

country for which the phone numbers are being requested

**Example:** `US`

**numberType**objectrequired

type of phone number to be purchased

**Example:** `local`

**paymentIntentId**stringrequired

stripe payment intent id

**Example:** `pi_3Oxxxxxxxxxxxxxxxxxxxx`

**stripeAccountId**stringrequired

stripe account id

**Example:** `acct_1Oxxxxxxxxxxxxxxxx`

**paymentMethodId**stringrequired

stripe registered payment method id

**Example:** `pm_1Oxxxxxxxxxxxxxxxx`

**locality**stringrequired

locality of the user in which number is being purchased

**Example:** `Austin`

**region**stringrequired

region of the user in which number is being purchased

**Example:** `TX`

**fingerprintId**stringrequired

fingerprintId is request id which is unique for every purchase number request

**Example:** `purchase-req-abc-123`

**skipLocationKYC**booleanrequired

Skip location-level KYC verification if agency-level compliance has already been verified

**Example:** `false`

    {  "phoneNumber": "830236932",  "addressSid": "ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",  "bundleSid": "BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",  "countryCode": "US",  "numberType": "local",  "paymentIntentId": "pi_3Oxxxxxxxxxxxxxxxxxxxx",  "stripeAccountId": "acct_1Oxxxxxxxxxxxxxxxx",  "paymentMethodId": "pm_1Oxxxxxxxxxxxxxxxx",  "locality": "Austin",  "region": "TX",  "fingerprintId": "purchase-req-abc-123",  "skipLocationKYC": false}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/phone-system/purchase-number-for-location#responses "Direct link to Responses")

*   201

Success envelope; v3 purchase details are in `data` (slim shape: number, locationId, id, underLcAccount).

*   application/json

*   Schema
*   Example (auto)

**Schema**

**status**stringrequired

Outcome indicator from the shared success helper.

**Possible values:** \[`success`\]

**Example:** `success`

**data** objectrequired

V3 purchase payload: purchased number, location, Twilio account id, and underLcAccount.

**number**stringrequired

E.164 phone number that was purchased (from the request body)

**Example:** `+17745678902`

**locationId**stringrequired

Location that owns the Twilio / numbers account

**Example:** `tDtDnQdgm2LXpyiqYvZ6`

**id**stringrequired

Twilio account document identifier

**Example:** `twilio-account-123`

**underLcAccount**booleanrequired

Whether the account is managed under LC. Renamed from under_ghl_account in the legacy document.

**Example:** `false`

**message**stringrequired

Human-readable success message.

**Example:** `Number purchase successful`

**statusCode**numberrequired

HTTP status echoed in the response body.

**Example:** `201`

    {  "status": "success",  "data": {    "number": "+17745678902",    "locationId": "tDtDnQdgm2LXpyiqYvZ6",    "id": "twilio-account-123",    "underLcAccount": false  },  "message": "Number purchase successful",  "statusCode": 201}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/phone-system/lc-phone-api-v-3#authentication)
**type:** http**scopes:** `phonenumbers.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/phone-system/numbers/location/tDtDnQdgm2LXpyiqYvZ6/purchase' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "phoneNumber": "830236932",  "addressSid": "ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",  "bundleSid": "BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",  "countryCode": "US",  "numberType": "local",  "paymentIntentId": "pi_3Oxxxxxxxxxxxxxxxxxxxx",  "stripeAccountId": "acct_1Oxxxxxxxxxxxxxxxx",  "paymentMethodId": "pm_1Oxxxxxxxxxxxxxxxx",  "locality": "Austin",  "region": "TX",  "fingerprintId": "purchase-req-abc-123",  "skipLocationKYC": false}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

version — headerrequired\---v3

Body required

{
  "phoneNumber": "830236932",  "addressSid": "ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",  "bundleSid": "BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",  "countryCode": "US",  "numberType": "local",  "paymentIntentId": "pi_3Oxxxxxxxxxxxxxxxxxxxx",  "stripeAccountId": "acct_1Oxxxxxxxxxxxxxxxx",  "paymentMethodId": "pm_1Oxxxxxxxxxxxxxxxx",  "locality": "Austin",  "region": "TX",  "fingerprintId": "purchase-req-abc-123",  "skipLocationKYC": false
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
