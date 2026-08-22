# Upload file attachments

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/conversations/upload-file-attachments
- **Summary:** Post the necessary fields for the API to upload files. The files need to be a buffer with the key 'fileAttachment'. <br /><br /> <b>Note:</b> One of conversationId or contactId must be provided. <br /><br /> <b>File Size Limits:</b> <ul><li>Maximum file size: 5 MB</li><li>Maximum files per upload: 5</li></ul> <br /> <b>Allowed file types:</b> <br /><br /> <b>Images:</b> JPG, JPEG, PNG, GIF, SVG, HEIC, AI <br /><br /> <b>Videos:</b> MP4, MPEG, 3GP <br /><br /> <b>Audio:</b> MP3, WAV, WAVE, AIFF, AIF, AIFC, GSM, ULAW, OGG, AAC, M4A, AMR <br /><br /> <b>Documents:</b> PDF, DOC, DOCX, TXT, CSV, XLS, XLSX, PPT, PPTX, ODT <br /><br /> <b>Archives:</b> ZIP, RAR <br /><br /> <b>Other:</b> VCF, VCARD (contact files), ICS (calendar files) <br /><br /> The API will return an object with the URLs

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversations/upload-file-attachments#__docusaurus_skipToContent_fallback)

Version: v3

Upload file attachments
=======================

POST 

https://services.leadconnectorhq.com/conversations/messages/upload

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Post the necessary fields for the API to upload files. The files need to be a buffer with the key "fileAttachment".  
  
**Note:** One of conversationId or contactId must be provided.  
  
**File Size Limits:**

*   Maximum file size: 5 MB
*   Maximum files per upload: 5

  
**Allowed file types:**  
  
**Images:** JPG, JPEG, PNG, GIF, SVG, HEIC, AI  
  
**Videos:** MP4, MPEG, 3GP  
  
**Audio:** MP3, WAV, WAVE, AIFF, AIF, AIFC, GSM, ULAW, OGG, AAC, M4A, AMR  
  
**Documents:** PDF, DOC, DOCX, TXT, CSV, XLS, XLSX, PPT, PPTX, ODT  
  
**Archives:** ZIP, RAR  
  
**Other:** VCF, VCARD (contact files), ICS (calendar files)  
  
The API will return an object with the URLs

### Requirements

#### Scope(s)

`conversations/message.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/upload-file-attachments#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

*   multipart/form-data

*   Body
*   Example (auto)

### Body**required**

**conversationId**string

Conversation Id

**Example:** `ve9EPM428h8vShlRW1KT`

**contactId**string

Contact Id

**Example:** `ve9EPM428h8vShlRW1KT`

**workflowId**string

Workflow Id

**Example:** `ve9EPM428h8vShlRW1KT`

**campaignId**string

Campaign Id

**Example:** `ve9EPM428h8vShlRW1KT`

**locationId**stringrequired

**attachmentUrls**string\[\]required

    {  "conversationId": "ve9EPM428h8vShlRW1KT",  "contactId": "ve9EPM428h8vShlRW1KT",  "workflowId": "ve9EPM428h8vShlRW1KT",  "campaignId": "ve9EPM428h8vShlRW1KT",  "locationId": "string",  "attachmentUrls": [    "string"  ]}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/upload-file-attachments#responses "Direct link to Responses")

*   200
*   400
*   401
*   404
*   413
*   415

Uploaded the file successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**uploadedFiles**objectrequired

    {  "uploadedFiles": {}}

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

Not Found - Conversation id, contact id, workflow id or campaign id not found

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `404`

**message**string

**Example:** `Conversation id, contact id, workflow id, or campaign id not given`

    {  "statusCode": 404,  "message": "Conversation id, contact id, workflow id, or campaign id not given"}

Payload Too Large

*   application/json

*   Schema
*   Example (auto)

**Schema**

**status**numberrequired

HTTP Status code of the request

**Possible values:** \[`400`, `404`, `413`, `415`\]

**Example:** `413`

**message**stringrequired

Error message of the request

**Example:** `Failed to upload the files`

    {  "status": 413,  "message": "Failed to upload the files"}

Unsupported Media Type

*   application/json

*   Schema
*   Example (auto)

**Schema**

**status**numberrequired

HTTP Status code of the request

**Possible values:** \[`400`, `404`, `413`, `415`\]

**Example:** `413`

**message**stringrequired

Error message of the request

**Example:** `Failed to upload the files`

    {  "status": 413,  "message": "Failed to upload the files"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/conversations/conversations-api#authentication)
**type:** http**scopes:** `conversations/message.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/conversations/messages/upload' \-H 'Content-Type: multipart/form-data' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-F 'conversationId="ve9EPM428h8vShlRW1KT"' \-F 'contactId="ve9EPM428h8vShlRW1KT"' \-F 'workflowId="ve9EPM428h8vShlRW1KT"' \-F 'campaignId="ve9EPM428h8vShlRW1KT"'

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

conversationId

contactId

workflowId

campaignId

locationIdrequired

attachmentUrlsrequired

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
