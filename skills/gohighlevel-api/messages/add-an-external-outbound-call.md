# Add an external outbound call

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/conversations/add-an-outbound-message
- **Summary:** Post the necessary fields for the API to add a new outbound call.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversations/add-an-outbound-message#__docusaurus_skipToContent_fallback)

Version: v3

Add an external outbound call
=============================

POST 

https://services.leadconnectorhq.com/conversations/messages/outbound

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Post the necessary fields for the API to add a new outbound call.

### Requirements

#### Scope(s)

`conversations/message.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/add-an-outbound-message#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

*   application/json

*   Body
*   Example (auto)

### Body**required**

**type**stringrequired

Message Type

**Possible values:** \[`Call`\]

**Example:** `Call`

**attachments**string\[\]

Array of attachments

**conversationId**string

Conversation Id. Provide either conversationId or contactId.

**Example:** `ve9EPM428h8vShlRW1KT`

**contactId**string

Contact Id. When provided without conversationId, the conversation is resolved or created from this contact.

**Example:** `ve9EPM428h8vShlRW1KT`

**conversationProviderId**stringrequired

Conversation Provider Id

**Example:** `61d6d1f9cdac7612faf80753`

**altId**string

external mail provider's message id

**Example:** `61d6d1f9cdac7612faf80753`

**date**string<date-time>

Date of the outbound message

**call** object

Phone call dialer and receiver information

**to**string

Phone number of the receiver

**Example:** `+15037081210`

**from**string

Phone number of the dialer

**Example:** `+15037081210`

**status**string

Call status

**Possible values:** \[`pending`, `completed`, `answered`, `busy`, `no-answer`, `failed`, `canceled`, `voicemail`\]

**Example:** `completed`

    {  "type": "Call",  "attachments": [    "string"  ],  "conversationId": "ve9EPM428h8vShlRW1KT",  "contactId": "ve9EPM428h8vShlRW1KT",  "conversationProviderId": "61d6d1f9cdac7612faf80753",  "altId": "61d6d1f9cdac7612faf80753",  "date": "2024-07-29T15:51:28.071Z",  "call": {    "to": "+15037081210",    "from": "+15037081210",    "status": "completed"  }}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/add-an-outbound-message#responses "Direct link to Responses")

*   200
*   400
*   401

Created the message

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

**conversationId**stringrequired

Conversation ID.

**Example:** `ABC12h2F6uBrIkfXYazb`

**messageId**stringrequired

This is the main Message ID

**Example:** `t22c6DQcTDf3MjRhwf77`

**message**stringrequired

**contactId**string

**dateAdded**string<date-time>

**emailMessageId**string

    {  "success": true,  "conversationId": "ABC12h2F6uBrIkfXYazb",  "messageId": "t22c6DQcTDf3MjRhwf77",  "message": "string",  "contactId": "string",  "dateAdded": "2024-07-29T15:51:28.071Z",  "emailMessageId": "string"}

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

    curl -L 'https://services.leadconnectorhq.com/conversations/messages/outbound' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "type": "Call",  "attachments": [    "string"  ],  "conversationId": "ve9EPM428h8vShlRW1KT",  "contactId": "ve9EPM428h8vShlRW1KT",  "conversationProviderId": "61d6d1f9cdac7612faf80753",  "altId": "61d6d1f9cdac7612faf80753",  "date": "2024-07-29T15:51:28.071Z",  "call": {    "to": "+15037081210",    "from": "+15037081210",    "status": "completed"  }}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired\---v3

Body required

{
  "type": "Call",  "attachments": \[    "string"  \],  "conversationId": "ve9EPM428h8vShlRW1KT",  "contactId": "ve9EPM428h8vShlRW1KT",  "conversationProviderId": "61d6d1f9cdac7612faf80753",  "altId": "61d6d1f9cdac7612faf80753",  "date": "2024-07-29T15:51:28.071Z",  "call": {    "to": "+15037081210",    "from": "+15037081210",    "status": "completed"  }
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
