# Update Opportunity Status

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/opportunities/update-opportunity-status
- **Summary:** Update Opportunity Status

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/opportunities/update-opportunity-status#__docusaurus_skipToContent_fallback)

Version: v3New

Update Opportunity Status
=========================

PUT 

https://services.leadconnectorhq.com/opportunities/:id/status

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Update Opportunity Status

### Requirements

#### Scope(s)

`opportunities.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/update-opportunity-status#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**id** stringrequired

Opportunity Id

**Example:** `yWQobCRIhRguQtD2llvk`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**status**stringrequired

New status for the opportunity

**Possible values:** \[`open`, `won`, `lost`, `abandoned`, `all`\]

**Example:** `open`

**lostReasonId**string

lost reason Id

**Example:** `CLu7BaljjqrEjBGKTNNe`

    {  "status": "open",  "lostReasonId": "CLu7BaljjqrEjBGKTNNe"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/update-opportunity-status#responses "Direct link to Responses")

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

    curl -L -X PUT 'https://services.leadconnectorhq.com/opportunities/yWQobCRIhRguQtD2llvk/status' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "status": "open",  "lostReasonId": "CLu7BaljjqrEjBGKTNNe"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

id — pathrequired

Version — headerrequired\---v3

Body required

{
  "status": "open",  "lostReasonId": "CLu7BaljjqrEjBGKTNNe"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
