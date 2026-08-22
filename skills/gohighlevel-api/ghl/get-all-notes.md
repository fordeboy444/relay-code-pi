# Get All Notes

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/contacts/get-all-notes
- **Summary:** Get All Notes

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-all-notes#__docusaurus_skipToContent_fallback)

Version: v3

Get All Notes
=============

GET 

https://services.leadconnectorhq.com/contacts/:contactId/notes

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get All Notes

### Requirements

#### Scope(s)

`contacts.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-all-notes#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**contactId** stringrequired

Contact Id

**Example:** `ve9EPM428h8vShlRW1KT`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-all-notes#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**notes** object\[\]

List of notes

*   Array \[\
    \
\
**id**string\
\
Unique identifier of the note\
\
**Example:** `HGPcayliwcdoUFzvbTok`\
\
**body**string\
\
Body content of the note\
\
**Example:** `lorem ipsum`\
\
**userId**string\
\
User Id of the note author\
\
**Example:** `TUcmRxWrjqzJS8EjkxNK`\
\
**dateAdded**string\
\
Date the note was added (ISO 8601 format)\
\
**Example:** `2021-07-08T12:02:11.285Z`\
\
**contactId**string\
\
Contact Id associated with the note\
\
**Example:** `TUcmRxWrjqzJS8EjkxNK`\
\
**title**string\
\
Title of the note\
\
**Example:** `Follow-up summary`\
\
**color**string\
\
Hex color code for the note\
\
**Example:** `#FFAA00`\
\
**pinned**boolean\
\
Whether the note is pinned\
\
**Example:** `false`\
\
*   \]
    

    {  "notes": [    {      "id": "HGPcayliwcdoUFzvbTok",      "body": "lorem ipsum",      "userId": "TUcmRxWrjqzJS8EjkxNK",      "dateAdded": "2021-07-08T12:02:11.285Z",      "contactId": "TUcmRxWrjqzJS8EjkxNK"    }  ]}

Bad Request

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `400`

**message**string

**Example:** `Bad Request`

    {  "statusCode": 400,  "message": "Bad Request"}

Unauthorized

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `401`

**message**string

**Example:** `Invalid token: access token is invalid`

**error**string

**Example:** `Unauthorized`

    {  "statusCode": 401,  "message": "Invalid token: access token is invalid",  "error": "Unauthorized"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

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

    curl -L 'https://services.leadconnectorhq.com/contacts/ve9EPM428h8vShlRW1KT/notes' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

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
