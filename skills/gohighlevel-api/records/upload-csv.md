# Upload CSV

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/upload-csv
- **Summary:** Upload a CSV file containing social media posts for bulk scheduling

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/upload-csv#__docusaurus_skipToContent_fallback)

Version: v3

Upload CSV
==========

POST 

https://services.leadconnectorhq.com/social-media-posting/:locationId/csv

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Upload a CSV file containing social media posts for bulk scheduling

### Requirements

#### Scope(s)

`socialplanner/csv.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/upload-csv#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

*   multipart/form-data

*   Body
*   Example (auto)

### Body**required**

**file**string<binary>required

CSV file to upload containing social media posts

**Example:** `sample.csv`

    {  "file": "sample.csv"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/upload-csv#responses "Direct link to Responses")

*   201
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Success or Failure

**Example:** `true`

**statusCode**numberrequired

Status Code

**Example:** `201`

**message**stringrequired

Message

**Example:** `Uploaded CSV`

**results** object

Requested Results

**filePath**string

File path of uploaded CSV

**Example:** `omaDY3RbWtTP511e/social-import/d23d68c2-82c0-1db6e2.csv`

**rowsCount**number

Number of rows in the CSV

**Example:** `6`

**fileName**string

Name of the uploaded file

**Example:** `CSV Import Sample - CSV Import Sample.csv`

**fileSize**number

Size of the file in bytes

**Example:** `1024`

**csvFileType**string

CSV file type

**Possible values:** \[`basic`, `advance`\]

**Example:** `basic`

    {  "success": true,  "statusCode": 201,  "message": "Uploaded CSV",  "results": {    "filePath": "omaDY3RbWtTP511e/social-import/d23d68c2-82c0-1db6e2.csv",    "rowsCount": 6,    "fileName": "sample.csv",    "fileSize": 1024,    "csvFileType": "basic"  }}

Bad Request - File is required or CSV validation error

*   application/json

*   Schema
*   Example (auto)

**Schema**

oneOf

*   CSVFileRequiredBadRequestDTO
*   CSVErrorResponseDTO

**status**numberrequired

HTTP Status

**Example:** `400`

**options**object

Options

**Example:** `{}`

**message**stringrequired

Error message

**Example:** `File is required`

**name**stringrequired

Exception name

**Example:** `BadRequestException`

**error**stringrequired

Error type

**Example:** `Bad Request`

**statusCode**numberrequired

HTTP Status Code

**Example:** `400`

**traceId**string

Trace ID for debugging

**Example:** `376a2de3-a3a4-4588-a6b5-bafe828f614b`

    {  "status": 400,  "options": {},  "message": "File is required",  "name": "BadRequestException",  "error": "Bad Request",  "statusCode": 400,  "traceId": "376a2de3-a3a4-4588-a6b5-bafe828f614b"}

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

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/social-planner/social-media-posting-api#authentication)
**type:** http**scopes:** `socialplanner/csv.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/social-media-posting/ve9EPM428h8vShlRW1KT/csv' \-H 'Content-Type: multipart/form-data' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-F 'file="sample.csv"'

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

*   Example (from schema)

filerequired

CSV file to upload containing social media posts

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
