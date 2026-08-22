# Disable Group

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/calendars/disable-group
- **Summary:** Disable Group

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/disable-group#__docusaurus_skipToContent_fallback)

Version: v3

Disable Group
=============

PUT 

https://services.leadconnectorhq.com/calendars/groups/:groupId/status

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Disable Group

### Requirements

#### Scope(s)

`calendars/groups.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/disable-group#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**groupId** stringrequired

Group Id

**Example:** `ocQHyuzHvysMo5N5VsXc`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**isActive**booleanrequired

Is Active?

**Example:** `true`

    {  "isActive": true}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/disable-group#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**boolean

Success

**Example:** `true`

    {  "success": "true"}

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

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/calendars/calendars-api#authentication)
**type:** http**scopes:** `calendars/groups.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X PUT 'https://services.leadconnectorhq.com/calendars/groups/ocQHyuzHvysMo5N5VsXc/status' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "isActive": true}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

groupId — pathrequired

Version — headerrequired\---v3

Body required

{
  "isActive": true
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
