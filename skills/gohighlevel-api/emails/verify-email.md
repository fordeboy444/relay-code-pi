# Email Verification

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/email-isv/verify-email
- **Summary:** Verify Email

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/email-isv/verify-email#__docusaurus_skipToContent_fallback)

Version: v3New

Email Verification
==================

POST 

https://services.leadconnectorhq.com/email/verify

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Verify Email

### Requirements

#### Scope(s)

`lc-email.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/email-isv/verify-email#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Query Parameters

**locationId** stringrequired

Location Id, The email verification charges will be deducted from this location (if rebilling is enabled) / company wallet

**Example:** `5DP4iH6HLkQsiKESj6rh`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**type**stringrequired

Email Verification type

**Possible values:** \[`email`, `contact`\]

**Example:** `email`

**verify**stringrequired

Email Verification recepient (email address / contactId)

**Example:** `abc@xyz.com`

    {  "type": "email",  "verify": "abc@xyz.com"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/email-isv/verify-email#responses "Direct link to Responses")

*   201
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

oneOf

*   EmailVerifiedV3ResponseDto
*   EmailNotVerifiedResponseDto
*   LeadConnectorRecommendationDto

**reason**string\[\]

Reason for email verification failure

**Example:** `["mailbox_does_not_exist"]`

**result**stringrequired

Email verification result

**Possible values:** \[`deliverable`, `undeliverable`, `do_not_send`, `unknown`, `catch_all`\]

**Example:** `undeliverable`

**risk**stringrequired

Risk level of email sending to bounce

**Possible values:** \[`high`, `low`, `medium`, `unknown`\]

**Example:** `low`

**address**stringrequired

Email address

**Example:** `abc@xyz.com`

**leadConnectorRecommendation** object

Lead Connector email verification recommendation

**isEmailValid**boolean

Email verification status

**Example:** `false`

    {  "reason": [    "mailbox_does_not_exist"  ],  "result": "undeliverable",  "risk": "low",  "address": "abc@xyz.com",  "leadConnectorRecommendation": {    "isEmailValid": false  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/email-isv/email-isv-api-v-3#authentication)
**type:** http**scopes:** `lc-email.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/email/verify?locationId=5DP4iH6HLkQsiKESj6rh' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \--data-raw '{  "type": "email",  "verify": "abc@xyz.com"}'

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
  "type": "email",  "verify": "abc@xyz.com"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
