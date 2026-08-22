# Delete Contact

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/contacts/delete-contact
- **Summary:** Delete Contact

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/delete-contact#__docusaurus_skipToContent_fallback)

Version: v3

Delete Contact
==============

DELETE 

https://services.leadconnectorhq.com/contacts/:contactId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Delete Contact

### Requirements

#### Scope(s)

`contacts.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/delete-contact#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**contactId** stringrequired

Contact Id

**Example:** `ve9EPM428h8vShlRW1KT`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/delete-contact#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**succeeded**boolean

Whether the delete operation succeeded

**Example:** `true`

**succeded**booleandeprecated

Legacy misspelling of `succeeded`. Deprecated; use `succeeded`.

**Example:** `true`

    {  "succeeded": true}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/contacts/contacts-api-v-3#authentication)
**type:** http**scopes:** `contacts.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/contacts/ve9EPM428h8vShlRW1KT' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

contactId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
