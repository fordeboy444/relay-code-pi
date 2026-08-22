# Upload File into Media Storage

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/medias/upload-media-content
- **Summary:** If hosted is set to true then fileUrl is required. Else file is required. If adding a file, maximum allowed is 25 MB. For video files, the maximum allowed size is 500 MB.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/medias/upload-media-content#__docusaurus_skipToContent_fallback)

Version: v3

Upload File into Media Storage
==============================

POST 

https://services.leadconnectorhq.com/medias/upload-file

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

If hosted is set to true then fileUrl is required. Else file is required. If adding a file, maximum allowed is 25 MB. For video files, the maximum allowed size is 500 MB.

### Requirements

#### Scope(s)

`medias.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/medias/upload-media-content#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

*   multipart/form-data

*   Body
*   Example (auto)

### Body**required**

**file**string<binary>

**hosted**boolean

**fileUrl**string

**name**string

**parentId**string

    {  "file": "string",  "hosted": true,  "fileUrl": "string",  "name": "string",  "parentId": "string"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/medias/upload-media-content#responses "Direct link to Responses")

*   200

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**fileId**stringrequired

ID of the uploaded file

**Example:** `file.pdf`

**url**stringrequired

Google Cloud Storage URL of the uploaded file

**Example:** `https://storage.googleapis.com/bucket-name/path/to/file.pdf`

    {  "fileId": "file.pdf",  "url": "https://storage.googleapis.com/bucket-name/path/to/file.pdf"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/medias/media-storage-api#authentication)
**type:** http**scopes:** `medias.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X POST 'https://services.leadconnectorhq.com/medias/upload-file' \-H 'Content-Type: multipart/form-data' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired\---v3

Body required

*   Example (from schema)

file

file

hosted

fileUrl

name

parentId

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
