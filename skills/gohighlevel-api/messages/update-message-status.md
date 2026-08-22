# Update message status

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/conversations/update-message-status
- **Summary:** Post the necessary fields for the API to update message status.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversations/update-message-status#__docusaurus_skipToContent_fallback)

Version: v3

Update message status
=====================

PUT 

https://services.leadconnectorhq.com/conversations/messages/:messageId/status

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Post the necessary fields for the API to update message status.

### Requirements

#### Scope(s)

`conversations/message.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/update-message-status#request "Direct link to request")

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

**status**stringrequired

Message status

**Possible values:** \[`delivered`, `failed`, `pending`, `read`\]

**Example:** `read`

**error** object

Error object from the conversation provider

**code**stringrequired

Error Code

**Example:** `1`

**type**stringrequired

Error Type

**Example:** `saas`

**message**stringrequired

Error Message

**Example:** `There was an error from the provider`

**emailMessageId**string

Email message Id

**Example:** `ve9EPM428h8vShlRW1KT`

**recipients**string\[\]

Email delivery status for additional email recipients.

    {  "status": "read",  "error": {    "code": "1",    "type": "saas",    "message": "There was an error from the provider"  },  "emailMessageId": "ve9EPM428h8vShlRW1KT",  "recipients": [    "string"  ]}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/update-message-status#responses "Direct link to Responses")

*   200
*   400
*   401
*   403

Created the message

*   application/json

*   Schema
*   Example (auto)

**Schema**

**conversationId**stringrequired

Conversation ID.

**Example:** `ABC12h2F6uBrIkfXYazb`

**emailMessageId**string

This contains the email message id (only for Email type). Use this ID to send inbound replies to CRM to create a threaded email.

**Example:** `rnGyqh2F6uBrIkfhFo9A`

**messageId**stringrequired

This is the main Message ID

**Example:** `t22c6DQcTDf3MjRhwf77`

**messageIds**string\[\]

When sending via the GMB channel, we will be returning list of `messageIds` instead of single `messageId`.

**msg**string

Additional response message when sending a workflow message

**Example:** `Message queued successfully.`

    {  "conversationId": "ABC12h2F6uBrIkfXYazb",  "emailMessageId": "rnGyqh2F6uBrIkfhFo9A",  "messageId": "t22c6DQcTDf3MjRhwf77",  "messageIds": [    "string"  ],  "msg": "Message queued successfully."}

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

    curl -L -X PUT 'https://services.leadconnectorhq.com/conversations/messages/ve9EPM428h8vShlRW1KT/status' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "status": "read",  "error": {    "code": "1",    "type": "saas",    "message": "There was an error from the provider"  },  "emailMessageId": "ve9EPM428h8vShlRW1KT",  "recipients": [    "string"  ]}'

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
  "status": "read",  "error": {    "code": "1",    "type": "saas",    "message": "There was an error from the provider"  },  "emailMessageId": "ve9EPM428h8vShlRW1KT",  "recipients": \[    "string"  \]
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
