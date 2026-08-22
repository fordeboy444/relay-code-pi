# Delete Recurring Task

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/locations/delete-recurring-task
- **Summary:** Delete Recurring Task

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/locations/delete-recurring-task#__docusaurus_skipToContent_fallback)

Version: v3

Delete Recurring Task
=====================

DELETE 

https://services.leadconnectorhq.com/locations/:locationId/recurring-tasks/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Delete Recurring Task

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/locations/delete-recurring-task#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**id** stringrequired

Recurring Task Id

**Example:** `sx6wyHhbFdRXh302Lunr`

**locationId** stringrequired

Location Id

**Example:** `sx6wyHhbFdRXh302Lunr`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/locations/delete-recurring-task#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**id**stringrequired

Recurring Task Id

**Example:** `sx6wyHhbFdRXh302Lunr`

**success**booleanrequired

Success

**Example:** `true`

    {  "id": "sx6wyHhbFdRXh302Lunr",  "success": true}

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

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/locations/sub-account-formerly-location-api#authentication)
**type:** http**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/locations/sx6wyHhbFdRXh302Lunr/recurring-tasks/sx6wyHhbFdRXh302Lunr' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

id — pathrequired

locationId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
