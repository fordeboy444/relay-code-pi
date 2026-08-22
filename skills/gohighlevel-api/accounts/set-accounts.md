# Set Accounts

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/set-accounts
- **Summary:** Set social media accounts for a CSV import to publish posts to

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/set-accounts#__docusaurus_skipToContent_fallback)

Version: v3

Set Accounts
============

POST 

https://services.leadconnectorhq.com/social-media-posting/:locationId/set-accounts

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Set social media accounts for a CSV import to publish posts to

### Requirements

#### Scope(s)

`socialplanner/csv.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/set-accounts#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**accountIds**string\[\]required

Account Ids

**Example:** `["aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"]`

**filePath**stringrequired

File path

**Example:** `omaDY3RbWtTP511e/social-import/d23d68c2-82c0-1db6e2.csv`

**rowsCount**numberrequired

Entries Count. rowsCount must be between 1 and number of posts in CSV

**Example:** `1`

**fileName**stringrequired

Name of file

**Example:** `test.csv`

**approver**string

Approver User Id

**Example:** `o6241QsiRwUIJHyjuhos`

**userId**stringrequired

User ID

**Example:** `ve9EPM428h8vShlRW1KT`

**csvFileType**string

CSV file type - determines the format of the CSV file being imported

**Possible values:** \[`basic`, `advance`\]

**Example:** `basic`

    {  "accountIds": [    "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"  ],  "filePath": "omaDY3RbWtTP511e/social-import/d23d68c2-82c0-1db6e2.csv",  "rowsCount": 1,  "fileName": "test.csv",  "approver": "o6241QsiRwUIJHyjuhos",  "userId": "ve9EPM428h8vShlRW1KT",  "csvFileType": "basic"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/set-accounts#responses "Direct link to Responses")

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

**Example:** `Accounts Set Successfully`

**results** object

Requested Results

**csvId**stringrequired

CSV Id

**Example:** `6953a0be84b7ff10f6025d53`

    {  "success": true,  "statusCode": 201,  "message": "Accounts Set Successfully",  "results": {    "csvId": "6953a0be84b7ff10f6025d53"  }}

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

Validation error

*   application/json

*   Schema
*   Example (auto)

**Schema**

**status**numberrequired

HTTP Status

**Example:** `422`

**options**object

Options

**Example:** `{}`

**message**string\[\]required

Validation error messages

**Example:** `["accountIds should not be null or undefined","accountIds should not be empty","accountIds must be an array","Invalid account id in accountIds list"]`

**name**stringrequired

Exception name

**Example:** `UnprocessableEntityException`

**error**stringrequired

Error type

**Example:** `Unprocessable Entity`

**statusCode**numberrequired

HTTP Status Code

**Example:** `422`

**traceId**string

Trace ID for debugging

**Example:** `22b1c520-258a-4473-b378-a97ddfd9d1bc`

    {  "status": 422,  "options": {},  "message": [    "accountIds should not be null or undefined",    "accountIds should not be empty",    "accountIds must be an array",    "Invalid account id in accountIds list"  ],  "name": "UnprocessableEntityException",  "error": "Unprocessable Entity",  "statusCode": 422,  "traceId": "22b1c520-258a-4473-b378-a97ddfd9d1bc"}

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

    curl -L 'https://services.leadconnectorhq.com/social-media-posting/ve9EPM428h8vShlRW1KT/set-accounts' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "accountIds": [    "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"  ],  "filePath": "omaDY3RbWtTP511e/social-import/d23d68c2-82c0-1db6e2.csv",  "rowsCount": 1,  "fileName": "test.csv",  "approver": "o6241QsiRwUIJHyjuhos",  "userId": "ve9EPM428h8vShlRW1KT",  "csvFileType": "basic"}'

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
  "accountIds": \[    "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"  \],  "filePath": "omaDY3RbWtTP511e/social-import/d23d68c2-82c0-1db6e2.csv",  "rowsCount": 1,  "fileName": "test.csv",  "approver": "o6241QsiRwUIJHyjuhos",  "userId": "ve9EPM428h8vShlRW1KT",  "csvFileType": "basic"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
