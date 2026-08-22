# Cancel a scheduled message.

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/conversations/cancel-scheduled-message
- **Summary:** Post the messageId for the API to delete a scheduled message. <br />

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversations/cancel-scheduled-message#__docusaurus_skipToContent_fallback)

Version: v3

Cancel a scheduled message.
===========================

DELETE 

https://services.leadconnectorhq.com/conversations/messages/:messageId/schedule

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Post the messageId for the API to delete a scheduled message.  

### Requirements

#### Scope(s)

`conversations/message.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/cancel-scheduled-message#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**messageId** stringrequired

Message Id

**Example:** `ve9EPM428h8vShlRW1KT`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/cancel-scheduled-message#responses "Direct link to Responses")

*   200
*   400
*   401

The scheduled message was cancelled successfully

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

    curl -L -X DELETE 'https://services.leadconnectorhq.com/conversations/messages/ve9EPM428h8vShlRW1KT/schedule' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

messageId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
