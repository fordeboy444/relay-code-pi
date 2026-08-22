# Get Upload Status

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-upload-status
- **Summary:** Get the status of all CSV imports for a location

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-upload-status#__docusaurus_skipToContent_fallback)

Version: v3

Get Upload Status
=================

GET 

https://services.leadconnectorhq.com/social-media-posting/:locationId/csv

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get the status of all CSV imports for a location

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-upload-status#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

### Query Parameters

**skip** string

Number of records to skip

Default value:`0`

**Example:** `1`

**limit** string

Maximum number of records to return

Default value:`10`

**Example:** `10`

**includeUsers** string

Include user data in response

**Example:** `true`

**isFromTemplate** string

Filter CSVs imported from template library

**Example:** `true`

**userId** stringrequired

User ID

**Example:** `sdfdsfdsfEWEsdfsdsW32dd`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-upload-status#responses "Direct link to Responses")

*   200
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

**Example:** `200`

**message**stringrequired

Message

**Example:** `Fetched CSV Upload Status`

**results** object

Requested Results

**csvs** object\[\]required

CSV Data

*   Array \[\
    \
\
**id**string\
\
CSV Id\
\
**Example:** `ve9EPM428h8vShlRW1KT`\
\
**locationId**string\
\
Location Id\
\
**Example:** `iVrVJ2uoXNF0wzcBzgl5`\
\
**fileName**string\
\
File Name\
\
**Example:** `sample.csv`\
\
**accountIds**string\[\]\
\
Account Ids\
\
**Example:** `["aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"]`\
\
**file**string\
\
File path\
\
**Example:** `omaDY3RbWtTP511e/social-import/d23d68c2-82c0-1db6e2.csv`\
\
**status**string\
\
CSV import status\
\
**Possible values:** \[`pending`, `in_progress`, `completed`, `failed`, `in_review`, `importing`, `deleted`\]\
\
**Example:** `completed`\
\
**count**number\
\
Posts count\
\
**Example:** `5`\
\
**createdBy**string\
\
Created By Id\
\
**Example:** `SDsdfdf45Dgs4w3ssss`\
\
**traceId**string\
\
Trace Id\
\
**Example:** `FSeSDsdfdf45Dgs4w3ssss`\
\
**originId**string\
\
Origin Id\
\
**Example:** `FSeSDsdfdf45Dgs4w3ssss`\
\
**approver**string\
\
Approver Id\
\
**Example:** `FSeSDsdfdf45Dgs4w3ssss`\
\
**createdAt**string<date-time>\
\
Date Created\
\
**Example:** `2023-08-02T00:00:00.000Z`\
\
**csvFileType**string\
\
CSV file type\
\
**Possible values:** \[`basic`, `advance`\]\
\
**Example:** `basic`\
\
**mediaOptimization**boolean\
\
Media optimization flag\
\
**Example:** `true`\
\
**applyWatermark**boolean\
\
Apply watermark flag\
\
**Example:** `false`\
\
**channel**string\
\
Channel\
\
**Example:** `oauth`\
\
**updatedAt**string<date-time>\
\
Date Updated\
\
**Example:** `2023-08-02T00:00:00.000Z`\
\
*   \]
    

**count**numberrequired

Total count of CSV records

**Example:** `6`

    {  "success": true,  "statusCode": 200,  "message": "Fetched CSV Upload Status",  "results": {    "csvs": [      {        "id": "ve9EPM428h8vShlRW1KT",        "locationId": "iVrVJ2uoXNF0wzcBzgl5",        "fileName": "sample.csv",        "status": "completed",        "count": 5      }    ],    "count": 6  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/social-planner/social-media-posting-api#authentication)
**type:** http**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/social-media-posting/ve9EPM428h8vShlRW1KT/csv?skip=0&limit=10&includeUsers=true&isFromTemplate=true&userId=sdfdsfdsfEWEsdfsdsW32dd' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

userId — queryrequired

Version — headerrequired\---v3

Show optional parameters

skip — query

limit — query

includeUsers — query

isFromTemplate — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
