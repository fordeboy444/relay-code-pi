# Get Bulk Action Campaign by ID

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/emails/get-bulk-action-campaign
- **Summary:** Get a single bulk action campaign by its ID

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/emails/get-bulk-action-campaign#__docusaurus_skipToContent_fallback)

Version: v3New

Get Bulk Action Campaign by ID
==============================

GET 

https://services.leadconnectorhq.com/emails/locations/:locationId/campaigns/bulk-actions/:campaignId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get a single bulk action campaign by its ID

### Requirements

#### Scope(s)

`emails/campaigns.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/emails/get-bulk-action-campaign#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location ID

**Example:** `ve9EPM428h8vShlRW1KT`

**campaignId** stringrequired

Campaign ID

**Example:** `OI72xYec4Mho6VBykTvj`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/emails/get-bulk-action-campaign#responses "Direct link to Responses")

*   200
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

Campaign ID

**Example:** `OI72xYec4Mho6VBykTvj`

**source**string

Source of the campaign

**Example:** `email-marketing`

**sourceId**string

Source ID of the campaign

**Example:** `115b9030-907c-474c-90a5-2debd838a024`

**name**string

Campaign name

**Example:** `Test Mail`

**status**stringrequired

Campaign status

**Possible values:** \[`processing`, `scheduled`, `paused`, `complete`, `cancelled`\]

**Example:** `complete`

**scheduleType**string

Schedule type (NOW, SCHEDULED, or DRIP)

**Possible values:** \[`NOW`, `SCHEDULED`, `DRIP`\]

**Example:** `SCHEDULED`

**fromName**string

Sender name

**Example:** `John Doe`

**fromEmail**string

Sender email address

**Example:** `john@example.com`

**subject**string

Email subject line

**Example:** `Welcome to our newsletter`

**replyToAddress**string

Reply-to email address

**Example:** `reply@example.com`

**previewText**string

Preview text

**Example:** `Check out our latest updates`

**editorType**string

Editor type for this campaign

**Possible values:** \[`html`, `builder`, `text`\]

**Example:** `html`

**isPlainText**boolean

Whether the campaign uses plain text

**Example:** `false`

**editorContentUrl**string

URL to fetch the rendered campaign content as HTML. Issue a GET against this URL to retrieve the body.

**Example:** `https://storage.googleapis.com/email-templates/abc123.html`

**deleted**booleanrequired

Whether the campaign is deleted

**Example:** `false`

**createdAt**stringrequired

Created at timestamp

**Example:** `2025-07-24T11:55:43.598Z`

**updatedAt**stringrequired

Last updated timestamp

**Example:** `2026-02-09T04:49:12.322Z`

**completedAt**string

Processing completion timestamp

**Example:** `2025-07-24T11:55:48.000Z`

**traceId**string

Trace ID of the request

**Example:** `019e4ef5-a65e-4198-8cf9-8e93dca9bda4`

    {  "id": "OI72xYec4Mho6VBykTvj",  "source": "email-marketing",  "sourceId": "115b9030-907c-474c-90a5-2debd838a024",  "name": "Test Mail",  "status": "complete",  "scheduleType": "SCHEDULED",  "fromName": "John Doe",  "fromEmail": "john@example.com",  "subject": "Welcome to our newsletter",  "replyToAddress": "reply@example.com",  "previewText": "Check out our latest updates",  "editorType": "html",  "isPlainText": false,  "editorContentUrl": "https://storage.googleapis.com/email-templates/abc123.html",  "deleted": false,  "createdAt": "2025-07-24T11:55:43.598Z",  "updatedAt": "2026-02-09T04:49:12.322Z",  "completedAt": "2025-07-24T11:55:48.000Z",  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"}

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
**type:** http**scopes:** `emails/campaigns.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/emails/locations/ve9EPM428h8vShlRW1KT/campaigns/bulk-actions/OI72xYec4Mho6VBykTvj' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

campaignId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
