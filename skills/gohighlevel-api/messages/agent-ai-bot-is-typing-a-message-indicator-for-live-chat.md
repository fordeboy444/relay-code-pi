# Agent/Ai-Bot is typing a message indicator for live chat

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/conversations/live-chat-agent-typing
- **Summary:** Agent/AI-Bot will call this when they are typing a message in live chat message

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversations/live-chat-agent-typing#__docusaurus_skipToContent_fallback)

Version: v3

Agent/Ai-Bot is typing a message indicator for live chat

POST 

https://services.leadconnectorhq.com/conversations/providers/live-chat/typing

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Agent/AI-Bot will call this when they are typing a message in live chat message

### Requirements

#### Scope(s)

`conversations/livechat.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/live-chat-agent-typing#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

*   application/json

*   Body
*   Example (auto)

### Body**required**

**locationId**stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

**isTyping**stringrequired

Typing status

**Example:** `true`

**visitorId**stringrequired

visitorId is the Unique ID assigned to each Live chat visitor. visitorId will be added soon in [GET Contact API](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contact)

**Example:** `ve9EPM428h8vShlRW1KT`

**conversationId**stringrequired

Conversation Id

**Example:** `ve9EPM428h8vShlRW1KT`

    {  "locationId": "ve9EPM428h8vShlRW1KT",  "isTyping": true,  "visitorId": "ve9EPM428h8vShlRW1KT",  "conversationId": "ve9EPM428h8vShlRW1KT"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/live-chat-agent-typing#responses "Direct link to Responses")

*   201
*   400
*   401
*   422

Show typing indicator for live chat

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

    {  "success": true}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/conversations/conversations-api#authentication)
**type:** http**scopes:** `conversations/livechat.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/conversations/providers/live-chat/typing' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "ve9EPM428h8vShlRW1KT",  "isTyping": true,  "visitorId": "ve9EPM428h8vShlRW1KT",  "conversationId": "ve9EPM428h8vShlRW1KT"}'

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
  "locationId": "ve9EPM428h8vShlRW1KT",  "isTyping": true,  "visitorId": "ve9EPM428h8vShlRW1KT",  "conversationId": "ve9EPM428h8vShlRW1KT"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
