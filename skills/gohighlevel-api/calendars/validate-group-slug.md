# Validate group slug

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/calendars/validate-groups-slug
- **Summary:** Validate if group slug is available or not.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/validate-groups-slug#__docusaurus_skipToContent_fallback)

Version: v3

Validate group slug
===================

POST 

https://services.leadconnectorhq.com/calendars/groups/validate-slug

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Validate if group slug is available or not.

### Requirements

#### Scope(s)

`calendars/groups.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/validate-groups-slug#request "Direct link to request")

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

**slug**stringrequired

Slug

**Example:** `calendar-1`

    {  "locationId": "ve9EPM428h8vShlRW1KT",  "slug": "calendar-1"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/validate-groups-slug#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**available**booleanrequired

    {  "available": true}

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

    curl -L 'https://services.leadconnectorhq.com/calendars/groups/validate-slug' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "ve9EPM428h8vShlRW1KT",  "slug": "calendar-1"}'

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
  "locationId": "ve9EPM428h8vShlRW1KT",  "slug": "calendar-1"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
