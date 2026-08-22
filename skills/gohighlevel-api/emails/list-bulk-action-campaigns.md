# List Bulk Action Campaigns

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/emails/list-bulk-action-campaigns
- **Summary:** Get list of bulk action campaigns for a location

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/emails/list-bulk-action-campaigns#__docusaurus_skipToContent_fallback)

Version: v3New

List Bulk Action Campaigns
==========================

GET 

https://services.leadconnectorhq.com/emails/locations/:locationId/campaigns/bulk-actions

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get list of bulk action campaigns for a location

### Requirements

#### Scope(s)

`emails/campaigns.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/emails/list-bulk-action-campaigns#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location ID

**Example:** `ve9EPM428h8vShlRW1KT`

### Query Parameters

**limit** number

**Possible values:** `>= 1` and `<= 20`

Number of campaigns to return. Defaults to 10, minimum is 1, maximum is 20

Default value:`10`

**Example:** `10`

**offset** number

**Possible values:** `>= 0`

Number of campaigns to skip for pagination. Defaults to 0, minimum is 0

Default value:`0`

**Example:** `0`

**search** string

Search query to filter campaigns.

Default value:

**Example:** `action`

**dateFrom** string

Filter by start date (ISO 8601 format)

**Example:** `2024-01-01T00:00:00.000Z`

**dateTo** string

Filter by end date (ISO 8601 format)

**Example:** `2024-12-31T23:59:59.999Z`

**status** string

**Possible values:** \[`processing`, `scheduled`, `paused`, `complete`, `cancelled`\]

Filter by status

**Example:** `complete`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/emails/list-bulk-action-campaigns#responses "Direct link to Responses")

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

**campaigns** object\[\]required

List of bulk action campaigns

*   Array \[\
    \
\
**id**stringrequired\
\
Campaign ID\
\
**Example:** `OI72xYec4Mho6VBykTvj`\
\
**source**string\
\
Source of the campaign\
\
**Example:** `email-marketing`\
\
**sourceId**string\
\
Source ID of the campaign\
\
**Example:** `115b9030-907c-474c-90a5-2debd838a024`\
\
**name**string\
\
Campaign name\
\
**Example:** `Test Mail`\
\
**status**stringrequired\
\
Campaign status\
\
**Possible values:** \[`processing`, `scheduled`, `paused`, `complete`, `cancelled`\]\
\
**Example:** `complete`\
\
**scheduleType**string\
\
Schedule type (NOW, SCHEDULED, or DRIP)\
\
**Possible values:** \[`NOW`, `SCHEDULED`, `DRIP`\]\
\
**Example:** `SCHEDULED`\
\
**deleted**booleanrequired\
\
Whether the campaign is deleted\
\
**Example:** `false`\
\
**createdAt**stringrequired\
\
Created at timestamp\
\
**Example:** `2025-07-24T11:55:43.598Z`\
\
**updatedAt**stringrequired\
\
Last updated timestamp\
\
**Example:** `2026-02-09T04:49:12.322Z`\
\
**completedAt**string\
\
Processing completion timestamp\
\
**Example:** `2025-07-24T11:55:48.000Z`\
\
**emailMetadata** object\
\
Email metadata\
\
**subject**string\
\
Email subject line\
\
**Example:** `Welcome to our platform`\
\
**from**string\
\
Sender (name and email)\
\
**Example:** `John Doe <john@example.com>`\
\
**name**string\
\
Sender name\
\
**Example:** `John Doe`\
\
**templateId**string\
\
Email template ID\
\
**Example:** `6790aeb53c8d1288f555f92b`\
\
*   \]
    

**total**numberrequired

Total count of bulk action campaigns

**Example:** `25`

**traceId**string

Trace ID of the request

**Example:** `019e4ef5-a65e-4198-8cf9-8e93dca9bda4`

    {  "campaigns": [    {      "id": "OI72xYec4Mho6VBykTvj",      "name": "Test Mail",      "status": "complete",      "deleted": false,      "createdAt": "2025-07-24T11:55:43.598Z",      "updatedAt": "2026-02-09T04:49:12.322Z"    }  ],  "total": 25,  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"}

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

    curl -L 'https://services.leadconnectorhq.com/emails/locations/ve9EPM428h8vShlRW1KT/campaigns/bulk-actions?limit=10&dateFrom=2024-01-01T00%3A00%3A00.000Z&dateTo=2024-12-31T23%3A59%3A59.999Z&status=complete' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

Version — headerrequired\---v3

Show optional parameters

limit — query

offset — query

search — query

dateFrom — query

dateTo — query

status — query\---processingscheduledpausedcompletecancelled

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
