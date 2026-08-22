# Get File

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/files/get-file-by-slug
- **Summary:** Get the file by slug.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/files/get-file-by-slug#__docusaurus_skipToContent_fallback)

Version: v3

Get File
========

GET 

https://services.leadconnectorhq.com/files/d/:slug

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get the file by slug.

### Requirements

#### Scope(s)

`files.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/files/get-file-by-slug#request "Direct link to request")

### Path Parameters

**slug** stringrequired

Share-link slug identifying the file.

**Example:** `4JpFVX1F57j8`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/files/get-file-by-slug#responses "Direct link to Responses")

*   200
*   401
*   403
*   404
*   410

Returns a short-lived download URL and the file's metadata.

*   application/json

*   Schema
*   Example (auto)
*   Example

**Schema**

**url**stringrequired

Short-lived, signed URL to download the file.

**Example:** `https://assets-registry.leadconnectorhq.com/5DP4iH6HLkQsiKESj6rh/4DkigiMRTkqxyAcHwGnO/document/YQPAlfnG8Hzptjg59Anv/019ee07c-564f-785b-bc68-305b4fe30768?Expires=1782375949&KeyName=assets-registry-key&Signature=tnFXYal8xDNonieCM6i4HngcUEM=`

**asset_id**stringrequired

Identifier of the file.

**Example:** `019ee07c-564f-785b-bc68-305b4fe30768`

**content_type**stringrequired

MIME type of the file.

**Example:** `application/pdf`

**filename**stringrequired

Original filename.

**Example:** `🗃️ A Sample File - 11.pdf`

**size**integer<int64>required

File size in bytes.

**Example:** `18810`

**allow_download**booleanrequired

Whether the file may be downloaded.

**Example:** `true`

    {  "url": "https://assets-registry.leadconnectorhq.com/5DP4iH6HLkQsiKESj6rh/4DkigiMRTkqxyAcHwGnO/document/YQPAlfnG8Hzptjg59Anv/019ee07c-564f-785b-bc68-305b4fe30768?Expires=1782375949&KeyName=assets-registry-key&Signature=tnFXYal8xDNonieCM6i4HngcUEM=",  "asset_id": "019ee07c-564f-785b-bc68-305b4fe30768",  "content_type": "application/pdf",  "filename": "🗃️ A Sample File - 11.pdf",  "size": 18810,  "allow_download": true}

    {  "allow_download": true,  "asset_id": "019ee07c-564f-785b-bc68-305b4fe30768",  "content_type": "application/pdf",  "filename": "🗃️ A Sample File - 11.pdf",  "size": 18810,  "url": "https://assets-registry.leadconnectorhq.com/5DP4iH6HLkQsiKESj6rh/4DkigiMRTkqxyAcHwGnO/document/YQPAlfnG8Hzptjg59Anv/019ee07c-564f-785b-bc68-305b4fe30768?Expires=1782375949&KeyName=assets-registry-key&Signature=tnFXYal8xDNonieCM6i4HngcUEM="}

Missing or invalid access token.

*   application/json

*   Schema
*   Example (auto)
*   Example

**Schema**

**error**string

Human-readable error message.

**Example:** `This link has expired`

    {  "error": "This link has expired"}

    {  "error": "Authentication required. Please provide a valid token."}

The token is not authorized to access this file.

*   application/json

*   Schema
*   Example (auto)
*   Example

**Schema**

**error**string

Human-readable error message.

**Example:** `This link has expired`

    {  "error": "This link has expired"}

    {  "error": "You do not have access to this resource."}

No file exists for this link.

*   application/json

*   Schema
*   Example (auto)
*   Example

**Schema**

**error**string

Human-readable error message.

**Example:** `This link has expired`

    {  "error": "This link has expired"}

    {  "error": "not found"}

This link has expired or is no longer available.

*   application/json

*   Schema
*   Example (auto)
*   Example

**Schema**

**error**string

Human-readable error message.

**Example:** `This link has expired`

    {  "error": "This link has expired"}

    {  "error": "This link has expired"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/files/files-api#authentication)
**type:** http**scopes:** `files.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Access token authorizing the request.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/files/d/4JpFVX1F57j8' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

slug — pathrequired

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
