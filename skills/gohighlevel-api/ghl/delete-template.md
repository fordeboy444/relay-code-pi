# Delete template

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/invoices/delete-invoice-template
- **Summary:** API to update an template by template id

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/invoices/delete-invoice-template#__docusaurus_skipToContent_fallback)

Version: v3

Delete template
===============

DELETE 

https://services.leadconnectorhq.com/invoices/template/:templateId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

API to update an template by template id

### Requirements

#### Scope(s)

`invoices/template.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token``Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/invoices/delete-invoice-template#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**templateId** stringrequired

Template Id

**Example:** `6578278e879ad2646715ba9c`

### Query Parameters

**altId** stringrequired

location Id / company Id based on altType

**Example:** `6578278e879ad2646715ba9c`

**altType** stringrequired

**Possible values:** \[`location`\]

Alt Type

**Example:** `location`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/invoices/delete-invoice-template#responses "Direct link to Responses")

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

success

**Example:** `true`

    {  "success": true}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/invoices/invoice-api#authentication)
**type:** http**scopes:** `invoices/template.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/invoices/template/6578278e879ad2646715ba9c?altId=6578278e879ad2646715ba9c&altType=location' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security SchemeLocation-AccessAgency-Access

Bearer Token

Parameters

templateId — pathrequired

altId — queryrequired

altType — queryrequired\---location

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
