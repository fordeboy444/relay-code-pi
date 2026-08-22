# Add an inbound message

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/conversations/add-an-inbound-message
- **Summary:** Post the necessary fields for the API to add a new inbound message. <br /><br />**Note:** Either `conversationId` or `contactId` is required

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversations/add-an-inbound-message#__docusaurus_skipToContent_fallback)

Version: v3

Add an inbound message
======================

POST 

https://services.leadconnectorhq.com/conversations/messages/inbound

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Post the necessary fields for the API to add a new inbound message.  
  
**Note:** Either `conversationId` or `contactId` is required

### Requirements

#### Scope(s)

`conversations/message.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/add-an-inbound-message#request "Direct link to request")

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

**Possible values:** \[`SMS`, `Email`, `WhatsApp`, `GMB`, `IG`, `FB`, `Custom`, `WebChat`, `Live_Chat`, `Call`\]

**Example:** `SMS`

**attachments**string\[\]

Array of attachments

**message**string

Message Body

**conversationId**string

Conversation Id

**Example:** `ve9EPM428h8vShlRW1KT`

**contactId**string

Contact Id

**Example:** `ve9EPM428h8vShlRW1KT`

**conversationProviderId**stringrequired

Conversation Provider Id

**Example:** `61d6d1f9cdac7612faf80753`

**html**string

HTML Body of Email

**subject**string

Subject of the Email

**emailFrom**string

Email address to send from. This field is associated with the contact record and cannot be dynamically changed.

**Example:** `sender@company.com`

**emailTo**string

Recipient email address. This field is associated with the contact record and cannot be dynamically changed.

**emailCc**string\[\]

List of email address to CC

**Example:** `["john1@doe.com","john2@doe.com"]`

**emailBcc**string\[\]

List of email address to BCC

**Example:** `["john1@doe.com","john2@doe.com"]`

**emailMessageId**string

Send the email message id for which this email should be threaded. This is for replying to a specific email

**altId**string

external mail provider's message id

**Example:** `61d6d1f9cdac7612faf80753`

**direction**object

Message direction, if required can be set manually, default is outbound

**Default value:** `outbound`

**Example:** `["outbound","inbound"]`

**date**string<date-time>

Date of the inbound message

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

    {  "type": "SMS",  "attachments": [    "string"  ],  "message": "string",  "conversationId": "ve9EPM428h8vShlRW1KT",  "contactId": "ve9EPM428h8vShlRW1KT",  "conversationProviderId": "61d6d1f9cdac7612faf80753",  "html": "string",  "subject": "string",  "emailFrom": "sender@company.com",  "emailTo": "string",  "emailCc": [    "john1@doe.com",    "john2@doe.com"  ],  "emailBcc": [    "john1@doe.com",    "john2@doe.com"  ],  "emailMessageId": "string",  "altId": "61d6d1f9cdac7612faf80753",  "direction": [    "outbound",    "inbound"  ],  "date": "2024-07-29T15:51:28.071Z",  "call": {    "to": "+15037081210",    "from": "+15037081210",    "status": "completed"  }}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/add-an-inbound-message#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/conversations/messages/inbound' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \--data-raw '{  "type": "SMS",  "attachments": [    "string"  ],  "message": "string",  "conversationId": "ve9EPM428h8vShlRW1KT",  "contactId": "ve9EPM428h8vShlRW1KT",  "conversationProviderId": "61d6d1f9cdac7612faf80753",  "html": "string",  "subject": "string",  "emailFrom": "sender@company.com",  "emailTo": "string",  "emailCc": [    "john1@doe.com",    "john2@doe.com"  ],  "emailBcc": [    "john1@doe.com",    "john2@doe.com"  ],  "emailMessageId": "string",  "altId": "61d6d1f9cdac7612faf80753",  "direction": [    "outbound",    "inbound"  ],  "date": "2024-07-29T15:51:28.071Z",  "call": {    "to": "+15037081210",    "from": "+15037081210",    "status": "completed"  }}'

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
  "type": "SMS",  "attachments": \[    "string"  \],  "message": "string",  "conversationId": "ve9EPM428h8vShlRW1KT",  "contactId": "ve9EPM428h8vShlRW1KT",  "conversationProviderId": "61d6d1f9cdac7612faf80753",  "html": "string",  "subject": "string",  "emailFrom": "sender@company.com",  "emailTo": "string",  "emailCc": \[    "john1@doe.com",    "john2@doe.com"  \],  "emailBcc": \[    "john1@doe.com",    "john2@doe.com"  \],  "emailMessageId": "string",  "altId": "61d6d1f9cdac7612faf80753",  "direction": \[    "outbound",    "inbound"  \],  "date": "2024-07-29T15:51:28.071Z",  "call": {    "to": "+15037081210",    "from": "+15037081210",    "status": "completed"  }
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
