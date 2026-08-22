# Get email by Id

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/conversations/get-email-by-id
- **Summary:** Get email by Id

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversations/get-email-by-id#__docusaurus_skipToContent_fallback)

Version: v3

Get email by Id
===============

GET 

https://services.leadconnectorhq.com/conversations/messages/email/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get email by Id

### Requirements

#### Scope(s)

`conversations/message.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/get-email-by-id#request "Direct link to request")

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/get-email-by-id#responses "Direct link to Responses")

*   200

Email object for the id given.

*   application/json

*   Schema
*   Example (auto)

**Schema**

**id**stringrequired

**Example:** `ve9EPM428h8vShlRW1KT`

**altId**string

External Id

**Example:** `ve9EPM428h8vShlRW1KT`

**threadId**stringrequired

Message Id or thread Id

**Example:** `ve9EPM428h8vShlRW1KT`

**locationId**stringrequired

**Example:** `ve9EPM428h8vShlRW1KT`

**contactId**stringrequired

**Example:** `ve9EPM428h8vShlRW1KT`

**conversationId**stringrequired

**Example:** `ve9EPM428h8vShlRW1KT`

**dateAdded**stringrequired

**Example:** `2024-03-27T18:13:49.000Z`

**subject**string

**Example:** `Order confirm`

**body**stringrequired

**Example:** `Hi there`

**direction**stringrequired

**Possible values:** \[`inbound`, `outbound`\]

**status**string

**Possible values:** \[`pending`, `scheduled`, `sent`, `delivered`, `read`, `undelivered`, `connected`, `failed`, `opened`\]

**contentType**stringrequired

**Example:** `text/plain`

**attachments**string\[\]

An array of attachment URLs.

**provider**string

**Examples:**

*   Example 1
*   Example 2
*   Example 3
*   Example 4

**Example:** `Leadconnector Gmail`

**Example:** `mailgun`

**Example:** `smtp`

**Example:** `custom`

**from**stringrequired

Name and Email Id of the sender

**to**string\[\]required

List of email Ids of the receivers

**cc**string\[\]

List of email Ids of the people in the cc field

**bcc**string\[\]

List of email Ids of the people in the bcc field

**replyToMessageId**string

In case of reply, email message Id of the reply to email

**source**string

Email source

**Possible values:** \[`workflow`, `bulk_actions`, `campaign`, `api`, `app`\]

**conversationProviderId**string

Conversation provider ID

**Example:** `cI08i1Bls3iTB9bKgF01`

**error**string

Error message for bounced/failed emails

    {  "id": "ve9EPM428h8vShlRW1KT",  "altId": "ve9EPM428h8vShlRW1KT",  "threadId": "ve9EPM428h8vShlRW1KT",  "locationId": "ve9EPM428h8vShlRW1KT",  "contactId": "ve9EPM428h8vShlRW1KT",  "conversationId": "ve9EPM428h8vShlRW1KT",  "dateAdded": "2024-03-27T18:13:49.000Z",  "subject": "Order confirm",  "body": "Hi there",  "direction": "inbound",  "status": "pending",  "contentType": "text/plain",  "attachments": [    "string"  ],  "provider": "Leadconnector Gmail",  "from": "string",  "to": [    "string"  ],  "cc": [    "string"  ],  "bcc": [    "string"  ],  "replyToMessageId": "string",  "source": "workflow",  "conversationProviderId": "cI08i1Bls3iTB9bKgF01",  "error": "string"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/conversations/conversations-api#authentication)
**type:** http**scopes:** `conversations/message.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/conversations/messages/email/:id' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
