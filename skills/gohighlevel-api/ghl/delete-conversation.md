# Delete Conversation

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/conversations/delete-conversation
- **Summary:** Delete the conversation details based on the conversation ID

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversations/delete-conversation#__docusaurus_skipToContent_fallback)

Version: v3

Delete Conversation
===================

DELETE 

https://services.leadconnectorhq.com/conversations/:conversationId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Delete the conversation details based on the conversation ID

### Requirements

#### Scope(s)

`conversations.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/delete-conversation#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**conversationId** stringrequired

Conversation ID as string

**Example:** `tDtDnQdgm2LXpyiqYvZ6`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/delete-conversation#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Boolean value as the API response.

**Example:** `true`

    {  "success": true}

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
**type:** http**scopes:** `conversations.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/conversations/tDtDnQdgm2LXpyiqYvZ6' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

conversationId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
