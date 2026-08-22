# Upload files to custom fields

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/forms/upload-to-custom-fields
- **Summary:** Post the necessary fields for the API to upload files. The files need to be a buffer with the key '< custom_field_id >_< file_id >'. <br /> Here custom field id is the ID of your custom field and file id is a randomly generated id (or uuid) <br /> There is support for multiple file uploads as well. Have multiple fields in the format mentioned.<br />File size is limited to 50 MB.<br /><br /> The allowed file types are: <br/> <ul><li>PDF</li><li>DOCX</li><li>DOC</li><li>JPG</li><li>JPEG</li><li>PNG</li><li>GIF</li><li>CSV</li><li>XLSX</li><li>XLS</li><li>MP4</li><li>MPEG</li><li>ZIP</li><li>RAR</li><li>TXT</li><li>SVG</li></ul> <br /><br /> The API will return the updated contact object.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/forms/upload-to-custom-fields#__docusaurus_skipToContent_fallback)

Version: v3

Upload files to custom fields
=============================

POST 

https://services.leadconnectorhq.com/forms/upload-custom-files

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Post the necessary fields for the API to upload files. The files need to be a buffer with the key "< custom_field_id >_< file_id >".  
Here custom field id is the ID of your custom field and file id is a randomly generated id (or uuid)  
There is support for multiple file uploads as well. Have multiple fields in the format mentioned.  
File size is limited to 50 MB.  
  
The allowed file types are:  

*   PDF
*   DOCX
*   DOC
*   JPG
*   JPEG
*   PNG
*   GIF
*   CSV
*   XLSX
*   XLS
*   MP4
*   MPEG
*   ZIP
*   RAR
*   TXT
*   SVG

  
  
The API will return the updated contact object.

### Requirements

#### Scope(s)

`forms.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/forms/upload-to-custom-fields#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**contactId** stringrequired

Contact ID to upload the file to.

**Example:** `dtEv6KtI27yF92YPm3Zz`

**locationId** stringrequired

Location ID of the contact.

**Example:** `quXmPY59n1zgGBabY1bZ`

*   multipart/form-data

*   Body

### Body**required**

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/forms/upload-to-custom-fields#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

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

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/forms/forms-api#authentication)
**type:** http**scopes:** `forms.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X POST 'https://services.leadconnectorhq.com/forms/upload-custom-files?contactId=dtEv6KtI27yF92YPm3Zz&locationId=quXmPY59n1zgGBabY1bZ' \-H 'Content-Type: multipart/form-data' \-H 'Authorization: Bearer <Authorization>' \-d ''

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security SchemebearerLocation-Access

Bearer Token

Parameters

contactId — queryrequired

locationId — queryrequired

Version — headerrequired\---v3

Body required
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
