# Delete Association

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/associations/delete-association
- **Summary:** Delete USER_DEFINED Association By Id, deleting an association will also all the relations for that association

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/associations/delete-association#__docusaurus_skipToContent_fallback)

Version: v3

Delete Association
==================

DELETE 

https://services.leadconnectorhq.com/associations/:associationId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Delete USER_DEFINED Association By Id, deleting an association will also all the relations for that association

### Requirements

#### Scope(s)

`associations.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/associations/delete-association#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**associationId** stringrequired

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/associations/delete-association#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**deleted**booleanrequired

Deletion status

**Example:** `true`

**id**stringrequired

Association Id

**Example:** `6d6f6e676f5f6576656e7473`

**message**stringrequired

**Example:** `Association deleted successfully`

    {  "deleted": true,  "id": "6d6f6e676f5f6576656e7473",  "message": "Association deleted successfully"}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/associations/associations-api#authentication)
**type:** http**scopes:** `associations.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/associations/:associationId' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

associationId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
