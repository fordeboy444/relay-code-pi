# Delete Service

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-service-catalog
- **Summary:** Delete service by ID.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-service-catalog#__docusaurus_skipToContent_fallback)

Version: v3

Delete Service
==============

DELETE 

https://services.leadconnectorhq.com/calendars/services/catalog/:serviceId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Delete service by ID.

### Requirements

#### Scope(s)

`calendars.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-service-catalog#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**serviceId** stringrequired

Service ID

**Example:** `65e5f6dfacf123513228d384`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-service-catalog#responses "Direct link to Responses")

*   200
*   400
*   401

Service deleted successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Success

**Example:** `true`

**message**string

Success message

**Example:** `Service deleted successfully`

    {  "success": true,  "message": "Service deleted successfully"}

Invalid request parameters

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `400`

**message**string

**Example:** `Bad Request`

    {  "statusCode": 400,  "message": "Bad Request"}

User not authenticated

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
**type:** http**scopes:** `calendars.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/calendars/services/catalog/65e5f6dfacf123513228d384' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

serviceId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
