# Get Groups

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/calendars/get-groups
- **Summary:** Get all calendar groups in a location.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-groups#__docusaurus_skipToContent_fallback)

Version: v3

Get Groups
==========

GET 

https://services.leadconnectorhq.com/calendars/groups

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get all calendar groups in a location.

### Requirements

#### Scope(s)

`calendars/groups.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-groups#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**locationId** stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-groups#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**groups** object\[\]

*   Array \[\
    \
\
**locationId**stringrequired\
\
**Example:** `ocQHyuzHvysMo5N5VsXc`\
\
**name**stringrequired\
\
**Example:** `group a`\
\
**description**stringrequired\
\
**Example:** `group description`\
\
**slug**stringrequired\
\
**Example:** `15-mins`\
\
**isActive**boolean\
\
**Example:** `true`\
\
**id**string\
\
**Example:** `ocQHyuzHvysMo5N5VsXc`\
\
*   \]
    

    {  "groups": [    {      "locationId": "ocQHyuzHvysMo5N5VsXc",      "name": "group a",      "description": "group description",      "slug": "15-mins",      "isActive": true,      "id": "ocQHyuzHvysMo5N5VsXc"    }  ]}

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
**type:** http**scopes:** `calendars/groups.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/calendars/groups?locationId=ve9EPM428h8vShlRW1KT' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
