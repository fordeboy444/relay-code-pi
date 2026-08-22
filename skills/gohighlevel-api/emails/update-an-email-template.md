# Update an email template

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/emails/update-email-template
- **Summary:** Update email template

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/emails/update-email-template#__docusaurus_skipToContent_fallback)

Version: v3New

Update an email template
========================

PATCH 

https://services.leadconnectorhq.com/emails/locations/:locationId/templates/:templateId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Update email template

### Requirements

#### Scope(s)

`emails/templates.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/emails/update-email-template#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location ID

**Example:** `ve9EPM428h8vShlRW1KT`

**templateId** stringrequired

Template ID

**Example:** `zYy3YOUuHxgomU1uYJty`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**name**string

Template name

**Example:** `Newsletter Template`

**editorContent**string

Editor content to update. Required only when updating template content, and must be provided together with editorType. Provide HTML or plain-text string content.

**Example:** `<html><body>Hello World</body></html>`

**editorType**string

Type of editor content. Required only when updating template content, and must be provided together with editorContent.

**Possible values:** \[`html`, `text`\]

**Example:** `html`

**previewText**string

Preview text

**Example:** `Email preview text`

**subjectLine**string

Email subject line

**Example:** `Welcome to our newsletter`

**fromName**string

Sender name

**Example:** `John Doe`

**fromEmail**string

Sender email address

**Example:** `john@example.com`

**archived**boolean

Whether template is archived

**Example:** `false`

**parentFolderId**string

Parent folder ID. Pass `null` to move template to the root level.

**Example:** `67f15c2ae99226d5bcccb8f0`

**userId**string

ID of the user performing this action

**Example:** `507f1f77bcf86cd799439011`

    {  "name": "Newsletter Template",  "editorContent": "<html><body>Hello World</body></html>",  "editorType": "html",  "previewText": "Email preview text",  "subjectLine": "Welcome to our newsletter",  "fromName": "John Doe",  "fromEmail": "john@example.com",  "archived": false,  "parentFolderId": "67f15c2ae99226d5bcccb8f0",  "userId": "507f1f77bcf86cd799439011"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/emails/update-email-template#responses "Direct link to Responses")

*   200
*   400
*   401
*   403
*   404
*   422

Success

*   application/json

*   Schema
*   Example (auto)

**Schema**

**id**stringrequired

Template ID

**Example:** `507f1f77bcf86cd799439011`

**name**stringrequired

Template name

**Example:** `My Email Template`

**archived**booleanrequired

Whether template is archived

**Example:** `false`

**fromName**stringrequired

Sender name

**Example:** `John Doe`

**fromEmail**stringrequired

Sender email address

**Example:** `john@example.com`

**subjectLine**stringrequired

Email subject line

**Example:** `Welcome to our newsletter`

**previewText**stringrequired

Preview text

**Example:** `Check out our latest updates`

**previewUrl**stringrequired

Preview URL

**Example:** `https://example.com/preview/template123`

**editorType**string

Template type

**Possible values:** \[`html`, `text`\]

**Example:** `html`

**isPlainText**boolean

Whether template is plain text

**Example:** `false`

**parentFolderId**string

Parent folder ID

**Example:** `67f15c2ae99226d5bcccb8f0`

**updatedAt**string

Last updated timestamp

**Example:** `2025-07-24T11:55:43.598Z`

**createdAt**string

Created timestamp

**Example:** `2025-07-24T11:55:43.598Z`

**traceId**string

Trace ID of request

**Example:** `019e4ef5-a65e-4198-8cf9-8e93dca9bda4`

    {  "id": "507f1f77bcf86cd799439011",  "name": "My Email Template",  "archived": false,  "fromName": "John Doe",  "fromEmail": "john@example.com",  "subjectLine": "Welcome to our newsletter",  "previewText": "Check out our latest updates",  "previewUrl": "https://example.com/preview/template123",  "editorType": "html",  "isPlainText": false,  "parentFolderId": "67f15c2ae99226d5bcccb8f0",  "updatedAt": "2025-07-24T11:55:43.598Z",  "createdAt": "2025-07-24T11:55:43.598Z",  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"}

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

The token does not have access to this location

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

HTTP status code for invalid location access

**Example:** `403`

**message**string

Error message describing the location access failure

**Example:** `The token does not have access to this location`

    {  "statusCode": 403,  "message": "The token does not have access to this location"}

Not Found

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

HTTP status code for not found

**Example:** `404`

**message**string

Error message describing the not found failure

**Example:** `Not Found`

**error**string

Error type identifier

**Example:** `The requested resource was not found`

    {  "statusCode": 404,  "message": "Not Found",  "error": "The requested resource was not found"}

Unprocessable Entity

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `422`

**message**string\[\]

**Example:** `["Unprocessable Entity"]`

**error**string

**Example:** `Unprocessable Entity`

    {  "statusCode": 422,  "message": [    "Unprocessable Entity"  ],  "error": "Unprocessable Entity"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/emails/email-api-v-3#authentication)
**type:** http**scopes:** `emails/templates.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X PATCH 'https://services.leadconnectorhq.com/emails/locations/ve9EPM428h8vShlRW1KT/templates/zYy3YOUuHxgomU1uYJty' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \--data-raw '{  "name": "Newsletter Template",  "editorContent": "<html><body>Hello World</body></html>",  "editorType": "html",  "previewText": "Email preview text",  "subjectLine": "Welcome to our newsletter",  "fromName": "John Doe",  "fromEmail": "john@example.com",  "archived": false,  "parentFolderId": "67f15c2ae99226d5bcccb8f0",  "userId": "507f1f77bcf86cd799439011"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

templateId — pathrequired

Version — headerrequired\---v3

Body required

{
  "name": "Newsletter Template",  "editorContent": "<html><body>Hello World</body></html>",  "editorType": "html",  "previewText": "Email preview text",  "subjectLine": "Welcome to our newsletter",  "fromName": "John Doe",  "fromEmail": "john@example.com",  "archived": false,  "parentFolderId": "67f15c2ae99226d5bcccb8f0",  "userId": "507f1f77bcf86cd799439011"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
