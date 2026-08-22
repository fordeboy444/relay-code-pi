# Delete Link

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/links/delete-link
- **Summary:** Delete Link

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/links/delete-link#__docusaurus_skipToContent_fallback)

Version: v3

Delete Link
===========

DELETE 

https://services.leadconnectorhq.com/links/:linkId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Delete Link

### Requirements

#### Scope(s)

`links.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/links/delete-link#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**linkId** stringrequired

Link Id

**Example:** `ve9EPM428h8vShlRW1KT`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/links/delete-link#responses "Direct link to Responses")

*   201
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**succeded**booleandeprecated

Indicates whether the link was successfully deleted (legacy field, misspelled). Use `succeeded` with x-api-version: v3.

**Example:** `true`

**succeeded**boolean

Indicates whether the link was successfully deleted.

**Example:** `true`

    {  "succeeded": true}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/links/trigger-links-api#authentication)
**type:** http**scopes:** `links.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/links/ve9EPM428h8vShlRW1KT' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

linkId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
