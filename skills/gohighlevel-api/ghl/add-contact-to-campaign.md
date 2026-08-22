# Add Contact to Campaign

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/contacts/add-contact-to-campaign
- **Summary:** Add contact to Campaign

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-contact-to-campaign#__docusaurus_skipToContent_fallback)

Version: v3

Add Contact to Campaign
=======================

POST 

https://services.leadconnectorhq.com/contacts/:contactId/campaigns/:campaignId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Add contact to Campaign

### Requirements

#### Scope(s)

`contacts.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-contact-to-campaign#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**contactId** stringrequired

Contact Id

**Example:** `ve9EPM428h8vShlRW1KT`

**campaignId** stringrequired

Campaign Id

**Example:** `Y5AMhDEE4L6EuVmmDTKZ`

*   application/json

*   Body
*   Example (auto)

### Body**required**

object

    {}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-contact-to-campaign#responses "Direct link to Responses")

*   201
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**succeeded**boolean

Whether the campaign operation was successful

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

    curl -L 'https://services.leadconnectorhq.com/contacts/ve9EPM428h8vShlRW1KT/campaigns/Y5AMhDEE4L6EuVmmDTKZ' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

contactId — pathrequired

campaignId — pathrequired

Version — headerrequired\---v3

Body required

{}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
