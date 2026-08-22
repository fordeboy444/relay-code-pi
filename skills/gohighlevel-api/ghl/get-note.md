# Get Note

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/contacts/get-note
- **Summary:** Get Note

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-note#__docusaurus_skipToContent_fallback)

Version: v3

Get Note
========

GET 

https://services.leadconnectorhq.com/contacts/:contactId/notes/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get Note

### Requirements

#### Scope(s)

`contacts.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-note#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**contactId** stringrequired

Contact Id

**Example:** `ve9EPM428h8vShlRW1KT`

**id** stringrequired

Note Id

**Example:** `ocQHyuzHvysMo5N5VsXc`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-note#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**note** object

Note details

**id**string

Unique identifier of the note

**Example:** `HGPcayliwcdoUFzvbTok`

**body**string

Body content of the note

**Example:** `lorem ipsum`

**userId**string

User Id of the note author

**Example:** `TUcmRxWrjqzJS8EjkxNK`

**dateAdded**string

Date the note was added (ISO 8601 format)

**Example:** `2021-07-08T12:02:11.285Z`

**contactId**string

Contact Id associated with the note

**Example:** `TUcmRxWrjqzJS8EjkxNK`

**title**string

Title of the note

**Example:** `Follow-up summary`

**color**string

Hex color code for the note

**Example:** `#FFAA00`

**pinned**boolean

Whether the note is pinned

**Example:** `false`

    {  "note": {    "id": "HGPcayliwcdoUFzvbTok",    "body": "lorem ipsum",    "userId": "TUcmRxWrjqzJS8EjkxNK",    "dateAdded": "2021-07-08T12:02:11.285Z",    "contactId": "TUcmRxWrjqzJS8EjkxNK"  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/contacts/contacts-api-v-3#authentication)
**type:** http**scopes:** `contacts.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/contacts/ve9EPM428h8vShlRW1KT/notes/ocQHyuzHvysMo5N5VsXc' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

contactId — pathrequired

id — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
