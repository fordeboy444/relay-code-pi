# Get Workflow Campaign by ID

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/emails/get-workflow-campaign
- **Summary:** Get a single workflow campaign by its ID

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/emails/get-workflow-campaign#__docusaurus_skipToContent_fallback)

Version: v3New

Get Workflow Campaign by ID
===========================

GET 

https://services.leadconnectorhq.com/emails/locations/:locationId/campaigns/workflows/:campaignId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get a single workflow campaign by its ID

### Requirements

#### Scope(s)

`emails/campaigns.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/emails/get-workflow-campaign#request "Direct link to request")

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

**Example:** `693bd14ea6b50a8df0180e9a`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/emails/get-workflow-campaign#responses "Direct link to Responses")

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

**Example:** `693bd14ea6b50a8df0180e9a`

**name**string

Campaign name

**Example:** `sorting workflow`

**status**string

Campaign status

**Possible values:** \[`published`, `draft`\]

**Example:** `published`

**source**string

Source of the campaign

**Example:** `workflow`

**sourceId**string

Source ID of the campaign

**Example:** `115b9030-907c-474c-90a5-2debd838a024`

**subSources** object\[\]

Sub-sources (email-sending steps) within this workflow. Each entry's `id` can be passed as the `subSourceId` query parameter to the campaign stats endpoint to retrieve per-step stats.

*   Array \[\
    \
\
**id**stringrequired\
\
Sub-source identifier (workflow step). Pass this value as the `subSourceId` query parameter on the campaign stats endpoint to retrieve stats scoped to this step.\
\
**Example:** `a3f1c0e2-6d4b-4f3a-9c1e-7b2d8f5a4c01`\
\
**name**string\
\
Workflow step name\
\
**Example:** `Send welcome email`\
\
**subject**string\
\
Email subject line\
\
**Example:** `Welcome to our newsletter`\
\
**fromName**string\
\
Sender name\
\
**Example:** `John Doe`\
\
**fromEmail**string\
\
Sender email address\
\
**Example:** `john@example.com`\
\
**previewText**string\
\
Preview text\
\
**Example:** `Check out our latest updates`\
\
**editorType**string\
\
Editor type for this step\
\
**Possible values:** \[`html`, `builder`, `text`\]\
\
**Example:** `html`\
\
**isPlainText**boolean\
\
Whether this step uses plain text\
\
**Example:** `false`\
\
**editorContentUrl**string\
\
URL to fetch the rendered step content as HTML. Issue a GET against this URL to retrieve the body.\
\
**Example:** `https://storage.googleapis.com/email-templates/abc123.html`\
\
**createdAt**string\
\
Timestamp when this step was added to the workflow\
\
**Example:** `2025-12-12T08:24:46.700Z`\
\
**updatedAt**string\
\
Timestamp when this step was last updated\
\
**Example:** `2026-01-23T05:58:48.453Z`\
\
*   \]
    

**deleted**boolean

Whether the campaign is deleted

**Example:** `false`

**createdAt**stringrequired

Created at timestamp

**Example:** `2025-12-12T08:24:46.700Z`

**updatedAt**stringrequired

Updated at timestamp

**Example:** `2026-01-23T05:58:48.453Z`

**traceId**string

Trace ID of the request

**Example:** `019e4ef5-a65e-4198-8cf9-8e93dca9bda4`

    {  "id": "693bd14ea6b50a8df0180e9a",  "name": "sorting workflow",  "status": "published",  "source": "workflow",  "sourceId": "115b9030-907c-474c-90a5-2debd838a024",  "subSources": [    {      "id": "a3f1c0e2-6d4b-4f3a-9c1e-7b2d8f5a4c01",      "name": "Send welcome email",      "subject": "Welcome to our newsletter",      "fromName": "John Doe",      "fromEmail": "john@example.com",      "previewText": "Check out our latest updates",      "editorType": "html",      "isPlainText": false,      "editorContentUrl": "https://storage.googleapis.com/email-templates/abc123.html",      "createdAt": "2025-12-12T08:24:46.700Z",      "updatedAt": "2026-01-23T05:58:48.453Z"    },    {      "id": "b7d9e4f1-2a0c-4f8e-bf2a-5e1d3c9b6a02",      "name": "Follow-up after 3 days",      "subject": "Quick follow-up",      "fromName": "John Doe",      "fromEmail": "john@example.com",      "editorType": "builder",      "isPlainText": false,      "createdAt": "2025-12-13T10:15:22.300Z",      "updatedAt": "2026-01-20T09:42:11.100Z"    }  ],  "deleted": false,  "createdAt": "2025-12-12T08:24:46.700Z",  "updatedAt": "2026-01-23T05:58:48.453Z",  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"}

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

    curl -L 'https://services.leadconnectorhq.com/emails/locations/ve9EPM428h8vShlRW1KT/campaigns/workflows/693bd14ea6b50a8df0180e9a' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

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
