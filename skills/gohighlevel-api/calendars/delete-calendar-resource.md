# Delete Calendar Resource

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-calendar-resource
- **Summary:** Delete calendar resource by ID (Services V1)

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-calendar-resource#__docusaurus_skipToContent_fallback)

Version: v3

Delete Calendar Resource
========================

DELETE 

https://services.leadconnectorhq.com/calendars/resources/:resourceType/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

deprecated

This endpoint has been deprecated and may be replaced or removed in future versions of the API.

Delete calendar resource by ID (Services V1)

### Requirements

#### Scope(s)

`calendars/resources.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-calendar-resource#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**resourceType** stringrequired

**Possible values:** \[`equipments`, `rooms`\]

Calendar Resource Type

**id** stringrequired

Calendar Resource ID

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-calendar-resource#responses "Direct link to Responses")

*   200
*   400
*   401

Calendar resource deleted

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
**type:** http**scopes:** `calendars/resources.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/calendars/resources/:resourceType/:id' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

resourceType — pathrequired\---equipmentsrooms

id — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
