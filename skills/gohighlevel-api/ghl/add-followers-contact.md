# Add Followers

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/contacts/add-followers-contact
- **Summary:** Add Followers

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-followers-contact#__docusaurus_skipToContent_fallback)

Version: v3

Add Followers
=============

POST 

https://services.leadconnectorhq.com/contacts/:contactId/followers

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Add Followers

### Requirements

#### Scope(s)

`contacts.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-followers-contact#request "Direct link to request")

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

**followers**string\[\]required

List of user Ids to follow or unfollow the contact

**Example:** `["sx6wyHhbFdRXh302Lunr","sx6wyHhbFdRXh302Lunr"]`

    {  "followers": [    "sx6wyHhbFdRXh302Lunr",    "sx6wyHhbFdRXh302Lunr"  ]}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-followers-contact#responses "Direct link to Responses")

*   201
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**followers**string\[\]

Current followers after the operation

**Example:** `["sx6wyHhbFdRXh302Lunr","sx6wyHhbFdRXh302LLss"]`

**followersAdded**string\[\]

Followers that were added

**Example:** `["Mx6wyHhbFdRXh302Luer","Ka6wyHhbFdRXh302LLsAm"]`

    {  "followers": [    "sx6wyHhbFdRXh302Lunr",    "sx6wyHhbFdRXh302LLss"  ],  "followersAdded": [    "Mx6wyHhbFdRXh302Luer",    "Ka6wyHhbFdRXh302LLsAm"  ]}
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

    curl -L 'https://services.leadconnectorhq.com/contacts/ve9EPM428h8vShlRW1KT/followers' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "followers": [    "sx6wyHhbFdRXh302Lunr",    "sx6wyHhbFdRXh302Lunr"  ]}'

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
  "followers": \[    "sx6wyHhbFdRXh302Lunr",    "sx6wyHhbFdRXh302Lunr"  \]
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
