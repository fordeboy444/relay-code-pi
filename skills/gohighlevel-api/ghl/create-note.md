# Create Note

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/contacts/create-note
- **Summary:** Create Note

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/create-note#__docusaurus_skipToContent_fallback)

Version: v3

Create Note
===========

POST 

https://services.leadconnectorhq.com/contacts/:contactId/notes

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create Note

### Requirements

#### Scope(s)

`contacts.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/create-note#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**contactId** stringrequired

Contact Id

**Example:** `ve9EPM428h8vShlRW1KT`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**userId**string

User Id of the note author

**Example:** `GCs5KuzPqTls7vWclkEV`

**body**stringrequired

Body content of the note

**Example:** `lorem ipsum`

**title**string

Title of the note

**Example:** `Follow-up summary`

**color**string

Hex color code for the note

**Example:** `#FFAA00`

**pinned**boolean

Whether the note is pinned

**Example:** `false`

    {  "userId": "GCs5KuzPqTls7vWclkEV",  "body": "lorem ipsum",  "title": "Follow-up summary",  "color": "#FFAA00",  "pinned": false}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/create-note#responses "Direct link to Responses")

*   201
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

    curl -L 'https://services.leadconnectorhq.com/contacts/ve9EPM428h8vShlRW1KT/notes' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "userId": "GCs5KuzPqTls7vWclkEV",  "body": "lorem ipsum",  "title": "Follow-up summary",  "color": "#FFAA00",  "pinned": false}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

contactId — pathrequired

Version — headerrequired\---v3

Body required

{
  "userId": "GCs5KuzPqTls7vWclkEV",  "body": "lorem ipsum",  "title": "Follow-up summary",  "color": "#FFAA00",  "pinned": false
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
