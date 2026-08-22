# Create a template folder

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/emails/create-template-folder
- **Summary:** Create a new template folder

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/emails/create-template-folder#__docusaurus_skipToContent_fallback)

Version: v3New

Create a template folder
========================

POST 

https://services.leadconnectorhq.com/emails/locations/:locationId/templates/folders

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create a new template folder

### Requirements

#### Scope(s)

`emails/templates.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/emails/create-template-folder#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location ID

**Example:** `ve9EPM428h8vShlRW1KT`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**name**stringrequired

Folder name

**Example:** `Spring Campaigns`

**userId**string

ID of the user performing this action

**Example:** `507f1f77bcf86cd799439011`

    {  "name": "Spring Campaigns",  "userId": "507f1f77bcf86cd799439011"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/emails/create-template-folder#responses "Direct link to Responses")

*   201
*   400
*   401
*   403
*   404
*   422

Success

*   application/json

*   Schema
*   Example (auto)

**Schema**

**id**stringrequired

Folder ID

**Example:** `67f15c2ae99226d5bcccb8f3`

**name**stringrequired

Folder name

**Example:** `Spring Campaigns`

**createdAt**string

Created timestamp

**Example:** `2025-07-24T11:55:43.598Z`

**updatedAt**string

Updated timestamp

**Example:** `2025-07-24T11:55:43.598Z`

**traceId**string

Trace ID of request

**Example:** `019e4ef5-a65e-4198-8cf9-8e93dca9bda4`

    {  "id": "67f15c2ae99226d5bcccb8f3",  "name": "Spring Campaigns",  "createdAt": "2025-07-24T11:55:43.598Z",  "updatedAt": "2025-07-24T11:55:43.598Z",  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"}

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

The token does not have access to this location

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

HTTP status code for invalid location access

**Example:** `403`

**message**string

Error message describing the location access failure

**Example:** `The token does not have access to this location`

    {  "statusCode": 403,  "message": "The token does not have access to this location"}

Not Found

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

HTTP status code for not found

**Example:** `404`

**message**string

Error message describing the not found failure

**Example:** `Not Found`

**error**string

Error type identifier

**Example:** `The requested resource was not found`

    {  "statusCode": 404,  "message": "Not Found",  "error": "The requested resource was not found"}

Unprocessable Entity

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `422`

**message**string\[\]

**Example:** `["Unprocessable Entity"]`

**error**string

**Example:** `Unprocessable Entity`

    {  "statusCode": 422,  "message": [    "Unprocessable Entity"  ],  "error": "Unprocessable Entity"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/emails/email-api-v-3#authentication)
**type:** http**scopes:** `emails/templates.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/emails/locations/ve9EPM428h8vShlRW1KT/templates/folders' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "name": "Spring Campaigns",  "userId": "507f1f77bcf86cd799439011"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

Version — headerrequired\---v3

Body required

{
  "name": "Spring Campaigns",  "userId": "507f1f77bcf86cd799439011"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
