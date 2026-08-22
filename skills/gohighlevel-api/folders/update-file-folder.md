# Update File/ Folder

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/medias/update-media-object
- **Summary:** Updates a single file or folder by ID

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/medias/update-media-object#__docusaurus_skipToContent_fallback)

Version: v3

Update File/ Folder
===================

POST 

https://services.leadconnectorhq.com/medias/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Updates a single file or folder by ID

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/medias/update-media-object#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**id** stringrequired

Unique identifier of the file or folder to update

**Example:** `686f9817f0d3165be9fbcef6`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**name**stringrequired

New name for the file or folder

**Example:** `Updated File Name.pdf`

**altType**stringrequired

Type of entity that owns the file or folder

**Possible values:** \[`location`\]

**Example:** `location`

**altId**stringrequired

Location identifier that owns the file or folder

**Example:** `sx6wyHhbFdRXh302LLNR`

    {  "name": "Updated File Name.pdf",  "altType": "location",  "altId": "sx6wyHhbFdRXh302LLNR"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/medias/update-media-object#responses "Direct link to Responses")

*   200

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

    {  "updated": true,  "traceId": "33a641a2-c4a6-4123-aa82-c5b84f1a14ee"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/medias/media-storage-api#authentication)
**type:** http**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/medias/686f9817f0d3165be9fbcef6' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "name": "Updated File Name.pdf",  "altType": "location",  "altId": "sx6wyHhbFdRXh302LLNR"}'

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
  "name": "Updated File Name.pdf",  "altType": "location",  "altId": "sx6wyHhbFdRXh302LLNR"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
