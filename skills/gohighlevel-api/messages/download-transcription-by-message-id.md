# Download transcription by Message ID

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/conversations/download-message-transcription
- **Summary:** Download the recording transcription for a message by passing the message id

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversations/download-message-transcription#__docusaurus_skipToContent_fallback)

Version: v3

Download transcription by Message ID
====================================

GET 

https://services.leadconnectorhq.com/conversations/locations/:locationId/messages/:messageId/transcription/download

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Download the recording transcription for a message by passing the message id

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/download-message-transcription#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**locationId** stringrequired

Location ID as string

**Example:** `tDtDnQdgm2LXpyiqYvZ6`

**messageId** stringrequired

Message ID as string

**Example:** `tDtDnQdgm2LXpyiqYvZ6`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/download-message-transcription#responses "Direct link to Responses")

*   200
*   400
*   401

Downloads the attached transcription of the message

**Response Headers**

**Content-Type**

text/plain

**Content-Disposition**

Attachment; filename="transcription.txt"

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

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/conversations/conversations-api#authentication)
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

    curl -L 'https://services.leadconnectorhq.com/conversations/locations/tDtDnQdgm2LXpyiqYvZ6/messages/tDtDnQdgm2LXpyiqYvZ6/transcription/download' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security SchemebearerLocation-Access

Bearer Token

Parameters

locationId — pathrequired

messageId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
