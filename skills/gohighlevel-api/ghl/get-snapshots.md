# Get Snapshots

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/snapshots/get-custom-snapshots
- **Summary:** Get a list of all own and imported Snapshots

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/snapshots/get-custom-snapshots#__docusaurus_skipToContent_fallback)

Version: v3

Get Snapshots
=============

GET 

https://services.leadconnectorhq.com/snapshots/

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get a list of all own and imported Snapshots

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/snapshots/get-custom-snapshots#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**companyId** stringrequired

Company Id

**Example:** `5D112kQsiKESj6rash`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/snapshots/get-custom-snapshots#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**snapshots** object\[\]

*   Array \[\
    \
\
**id**string\
\
Snapshot Id.\
\
**Example:** `1eM2UgkfaECOYyUdCo9Pa`\
\
**name**string\
\
Name of the snapshot\
\
**Example:** `Martial Arts Snapshot`\
\
**type**string\
\
Type of snapshot - own or imported.\
\
**Example:** `own`\
\
*   \]
    

    {  "snapshots": [    {      "id": "1eM2UgkfaECOYyUdCo9Pa",      "name": "Martial Arts Snapshot",      "type": "own"    }  ]}

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

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/snapshots/snapshots-api#authentication)
**type:** http**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Agency (OR) Personal Integration Token from Agency.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/snapshots/?companyId=5D112kQsiKESj6rash' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

companyId — queryrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
