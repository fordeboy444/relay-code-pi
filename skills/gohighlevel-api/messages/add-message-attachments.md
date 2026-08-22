# Add message attachments

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/conversations/add-message-attachments
- **Summary:** Set attachments on an existing message (replaces existing). Maximum 5 URLs. Supported for Custom Call message type.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversations/add-message-attachments#__docusaurus_skipToContent_fallback)

Version: v3

Add message attachments
=======================

PUT 

https://services.leadconnectorhq.com/conversations/messages/:messageId/attachments

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Set attachments on an existing message (replaces existing). Maximum 5 URLs. Supported for Custom Call message type.

### Requirements

#### Scope(s)

`conversations/message.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/add-message-attachments#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**messageId** stringrequired

Message Id

**Example:** `ve9EPM428h8vShlRW1KT`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**attachments**string\[\]required

Array of attachment URLs to set on the message (replaces existing). Maximum 5 URLs.

**Example:** `["https://provider.com/recordings/call-123.mp3"]`

    {  "attachments": [    "https://provider.com/recordings/call-123.mp3"  ]}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/add-message-attachments#responses "Direct link to Responses")

*   200
*   400
*   401
*   403

Successfully set message attachments

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Indicates whether the operation was successful.

**Example:** `true`

**messageId**stringrequired

The ID of the message that was updated.

**Example:** `ve9EPM428h8vShlRW1KT`

**attachments**string\[\]required

The updated list of attachment URLs on the message.

**Example:** `["https://provider.com/recordings/call-123.mp3"]`

    {  "success": true,  "messageId": "ve9EPM428h8vShlRW1KT",  "attachments": [    "https://provider.com/recordings/call-123.mp3"  ]}

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

Forbidden

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `403`

**message**string

**Example:** `You do not have permission to access this resource`

**error**string

**Example:** `Forbidden`

    {  "statusCode": 403,  "message": "You do not have permission to access this resource",  "error": "Forbidden"}

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

    curl -L -X PUT 'https://services.leadconnectorhq.com/conversations/messages/ve9EPM428h8vShlRW1KT/attachments' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "attachments": [    "https://provider.com/recordings/call-123.mp3"  ]}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

messageId — pathrequired

Version — headerrequired\---v3

Body required

{
  "attachments": \[    "https://provider.com/recordings/call-123.mp3"  \]
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
