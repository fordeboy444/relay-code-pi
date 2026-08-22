# Delete Opportunity

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/opportunities/delete-opportunity
- **Summary:** Delete Opportunity

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/opportunities/delete-opportunity#__docusaurus_skipToContent_fallback)

Version: v3New

Delete Opportunity
==================

DELETE 

https://services.leadconnectorhq.com/opportunities/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Delete Opportunity

### Requirements

#### Scope(s)

`opportunities.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/delete-opportunity#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**id** stringrequired

Opportunity Id

**Example:** `yWQobCRIhRguQtD2llvk`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/delete-opportunity#responses "Direct link to Responses")

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

Indicates whether the operation was successful

**Example:** `true`

    {  "success": true}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/opportunities/opportunities-api-v-3#authentication)
**type:** http**scopes:** `opportunities.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/opportunities/yWQobCRIhRguQtD2llvk' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

id — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
