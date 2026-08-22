# List templates

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/emails/list-email-templates
- **Summary:** Get list of templates by location

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/emails/list-email-templates#__docusaurus_skipToContent_fallback)

Version: v3New

List templates
==============

GET 

https://services.leadconnectorhq.com/emails/locations/:locationId/templates

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get list of templates by location

### Requirements

#### Scope(s)

`emails/templates.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/emails/list-email-templates#request "Direct link to request")

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

Number of templates to return

Default value:`10`

**Example:** `10`

**offset** number

**Possible values:** `>= 0`

Number of templates to skip

Default value:`0`

**Example:** `0`

**search** string

Search by template name

**Example:** `newsletter`

**sortBy** string

**Possible values:** \[`updatedAt`\]

Field to sort by

Default value:`updatedAt`

**Example:** `updatedAt`

**sortOrder** string

**Possible values:** \[`asc`, `desc`\]

Sort direction

Default value:`desc`

**Example:** `desc`

**archived** boolean

Return archived templates

Default value:`false`

**Example:** `false`

**folderId** string

Folder to list templates from. Use 'root' for top-level listing.

**Example:** `root`

**include** string

**Possible values:** \[`all`, `templates`, `folders`\]

Whether to include templates, folders, or both in the response. `templates` will return only templates, `folders` will return only folders, and `all` will return both.

Default value:`all`

**Example:** `all`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/emails/list-email-templates#responses "Direct link to Responses")

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

**items** object\[\]required

List of template and folder resources

*   Array \[\
    \
\
**id**stringrequired\
\
Resource ID\
\
**Example:** `67f15c2ae99226d5bcccb8f3`\
\
**name**stringrequired\
\
Resource name\
\
**Example:** `February Newsletter`\
\
**type**stringrequired\
\
Resource type\
\
**Possible values:** \[`template`, `folder`\]\
\
**Example:** `template`\
\
**isPlainText**boolean\
\
Whether template is plain text\
\
**Example:** `false`\
\
**updatedAt**string\
\
Last updated timestamp\
\
**Example:** `2026-02-09T04:49:12.322Z`\
\
**createdAt**string\
\
Created timestamp\
\
**Example:** `2025-07-24T11:55:43.598Z`\
\
**previewUrl**string\
\
Preview URL\
\
**Example:** `https://example.com/preview`\
\
**editorType**string\
\
Editor type for template resources\
\
**Possible values:** \[`html`, `builder`, `text`\]\
\
**Example:** `builder`\
\
**childCount**number\
\
Children count for folder resources\
\
**Example:** `3`\
\
**hasChildren**boolean\
\
Whether folder has child resources\
\
**Example:** `true`\
\
**parentFolderId**string\
\
Parent folder ID\
\
**Example:** `67f15c2ae99226d5bcccb8f0`\
\
*   \]
    

**total**numberrequired

Total count of templates and folders

**Example:** `25`

**traceId**string

Trace ID of the request

**Example:** `019e4ef5-a65e-4198-8cf9-8e93dca9bda4`

    {  "items": [    {      "id": "67f15c2ae99226d5bcccb8f3",      "name": "February Newsletter",      "type": "template"    }  ],  "total": 25,  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"}

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
**type:** http**scopes:** `emails/templates.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/emails/locations/ve9EPM428h8vShlRW1KT/templates?limit=10&search=newsletter&sortBy=updatedAt&sortOrder=desc&archived=false&folderId=root&include=all' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

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

sortBy — query\---updatedAt

sortOrder — query\---ascdesc

archived — query\---truefalse

folderId — query

include — query\---alltemplatesfolders

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
