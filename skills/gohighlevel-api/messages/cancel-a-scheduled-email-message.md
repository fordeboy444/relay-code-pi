# Cancel a scheduled email message.

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/conversations/cancel-scheduled-email-message
- **Summary:** Post the messageId for the API to delete a scheduled email message. <br />

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversations/cancel-scheduled-email-message#__docusaurus_skipToContent_fallback)

Version: v3

Cancel a scheduled email message.
=================================

DELETE 

https://services.leadconnectorhq.com/conversations/messages/email/:emailMessageId/schedule

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Post the messageId for the API to delete a scheduled email message.  

### Requirements

#### Scope(s)

`conversations/message.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/cancel-scheduled-email-message#request "Direct link to request")

### Path Parameters

**emailMessageId** stringrequired

Email Message Id

**Example:** `ve9EPM428h8vShlRW1KT`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/cancel-scheduled-email-message#responses "Direct link to Responses")

*   200

The scheduled email message was cancelled successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**status**numberrequired

HTTP Status code of the request

**Example:** `404`

**message**stringrequired

Error message of the request

**Example:** `Failed cancel the scheduled message`

    {  "status": 404,  "message": "Failed cancel the scheduled message"}

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

    curl -L -X DELETE 'https://services.leadconnectorhq.com/conversations/messages/email/ve9EPM428h8vShlRW1KT/schedule' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

emailMessageId — pathrequired

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
