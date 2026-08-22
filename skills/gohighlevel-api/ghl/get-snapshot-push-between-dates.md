# Get Snapshot Push between Dates

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/snapshots/get-snapshot-push
- **Summary:** Get list of sub-accounts snapshot pushed in time period

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/snapshots/get-snapshot-push#__docusaurus_skipToContent_fallback)

Version: v3

Get Snapshot Push between Dates
===============================

GET 

https://services.leadconnectorhq.com/snapshots/snapshot-status/:snapshotId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get list of sub-accounts snapshot pushed in time period

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/snapshots/get-snapshot-push#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**snapshotId** stringrequired

**Example:** `39It2BFz7EkNaNBALPif`

### Query Parameters

**companyId** stringrequired

**Example:** `5D112kQsiKESj6rash`

**from** stringrequired

Only accepts ISO 8601 format

**Example:** `2022-10-10T12:00:00Z or 2022-10-10`

**to** stringrequired

Only accepts ISO 8601 format

**Example:** `2023-12-18T11:59:59Z or 2023-12-18`

**lastDoc** stringrequired

Id for last document till what you want to skip

**Example:** `VUJO4Sw2TrDNZ5lx4wZg`

**limit** string

Limit of documents to return. Default is 20

**Example:** `10`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/snapshots/get-snapshot-push#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**data** object\[\]

*   Array \[\
    \
\
**id**string\
\
Document id\
\
**Example:** `1eM2UgkfaECOYyUdCo9Pa`\
\
**locationId**string\
\
Sub-account id\
\
**Example:** `BrKClvyvdxhJ9Mxz2pzQ`\
\
**status**string\
\
Status of snapshot push\
\
**Example:** `processing`\
\
**dateAdded**string<date-time>\
\
Timestamp of when snapshot processing starts for sub-account\
\
**Example:** `10/28/2022, 6:24:54 PM`\
\
*   \]
    

    {  "data": [    {      "id": "1eM2UgkfaECOYyUdCo9Pa",      "locationId": "BrKClvyvdxhJ9Mxz2pzQ",      "status": "processing",      "dateAdded": "10/28/2022, 6:24:54 PM"    }  ]}

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

    curl -L 'https://services.leadconnectorhq.com/snapshots/snapshot-status/39It2BFz7EkNaNBALPif?companyId=5D112kQsiKESj6rash&from=2022-10-10T12%3A00%3A00Z%20or%202022-10-10&to=2023-12-18T11%3A59%3A59Z%20or%202023-12-18&lastDoc=VUJO4Sw2TrDNZ5lx4wZg&limit=10' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

snapshotId — pathrequired

companyId — queryrequired

from — queryrequired

to — queryrequired

lastDoc — queryrequired

Version — headerrequired\---v3

Show optional parameters

limit — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
