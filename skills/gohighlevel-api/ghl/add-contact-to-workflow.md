# Add Contact to Workflow

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/contacts/add-contact-to-workflow
- **Summary:** Add Contact to Workflow

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-contact-to-workflow#__docusaurus_skipToContent_fallback)

Version: v3

Add Contact to Workflow
=======================

POST 

https://services.leadconnectorhq.com/contacts/:contactId/workflow/:workflowId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Add Contact to Workflow

### Requirements

#### Scope(s)

`contacts.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-contact-to-workflow#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**contactId** stringrequired

Contact Id

**Example:** `ve9EPM428h8vShlRW1KT`

**workflowId** stringrequired

Workflow Id

**Example:** `f5a2ab74-4c1c-4ede-9c43-2ef1e01e0b38`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**eventStartTime**string

Start time of the workflow event (ISO 8601 format)

**Example:** `2021-06-23T03:30:00+01:00`

    {  "eventStartTime": "2021-06-23T03:30:00+01:00"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-contact-to-workflow#responses "Direct link to Responses")

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

Whether the workflow operation was successful

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

    curl -L 'https://services.leadconnectorhq.com/contacts/ve9EPM428h8vShlRW1KT/workflow/f5a2ab74-4c1c-4ede-9c43-2ef1e01e0b38' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "eventStartTime": "2021-06-23T03:30:00+01:00"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

contactId — pathrequired

workflowId — pathrequired

Version — headerrequired\---v3

Body required

{
  "eventStartTime": "2021-06-23T03:30:00+01:00"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
