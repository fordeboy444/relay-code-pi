# List Workflow Campaigns

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/emails/list-workflow-campaigns
- **Summary:** Get list of workflow campaigns for a location

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/emails/list-workflow-campaigns#__docusaurus_skipToContent_fallback)

Version: v3New

List Workflow Campaigns
=======================

GET 

https://services.leadconnectorhq.com/emails/locations/:locationId/campaigns/workflows

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get list of workflow campaigns for a location

### Requirements

#### Scope(s)

`emails/campaigns.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/emails/list-workflow-campaigns#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location ID

**Example:** `k23k23jl23l32l`

### Query Parameters

**limit** number

**Possible values:** `>= 1` and `<= 20`

Number of campaigns to return. Defaults to 10, minimum is 1, maximum is 20

Default value:`10`

**Example:** `10`

**offset** number

**Possible values:** `>= 0`

Number of items to skip for pagination. Defaults to 0, minimum is 0

Default value:`0`

**Example:** `0`

**search** string

Search query to filter campaigns.

Default value:

**Example:** `workflow`

**status** string

**Possible values:** \[`published`, `draft`\]

Filter by campaign status

**Example:** `published`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/emails/list-workflow-campaigns#responses "Direct link to Responses")

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

List of workflow campaigns

*   Array \[\
    \
\
**id**stringrequired\
\
Campaign ID\
\
**Example:** `693bd14ea6b50a8df0180e9a`\
\
**name**string\
\
Campaign name\
\
**Example:** `sorting workflow`\
\
**status**string\
\
Campaign status\
\
**Possible values:** \[`published`, `draft`\]\
\
**Example:** `published`\
\
**source**string\
\
Source of the campaign\
\
**Example:** `workflow`\
\
**sourceId**string\
\
Source ID of the campaign\
\
**Example:** `115b9030-907c-474c-90a5-2debd838a024`\
\
**deleted**boolean\
\
Whether the campaign is deleted\
\
**Example:** `false`\
\
**createdAt**stringrequired\
\
Created at timestamp\
\
**Example:** `2025-12-12T08:24:46.700Z`\
\
**updatedAt**stringrequired\
\
Updated at timestamp\
\
**Example:** `2026-01-23T05:58:48.453Z`\
\
*   \]
    

**total**numberrequired

Total count of campaigns

**Example:** `50`

**traceId**string

Trace ID of the request

**Example:** `019e4ef5-a65e-4198-8cf9-8e93dca9bda4`

    {  "campaigns": [    {      "id": "693bd14ea6b50a8df0180e9a",      "name": "sorting workflow",      "status": "published",      "createdAt": "2025-12-12T08:24:46.700Z",      "updatedAt": "2026-01-23T05:58:48.453Z"    }  ],  "total": 50,  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"}

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

    curl -L 'https://services.leadconnectorhq.com/emails/locations/k23k23jl23l32l/campaigns/workflows?limit=10&status=published' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

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

status — query\---publisheddraft

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
