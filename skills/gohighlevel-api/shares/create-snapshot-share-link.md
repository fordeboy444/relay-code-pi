# Create Snapshot Share Link

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/snapshots/create-snapshot-share-link
- **Summary:** Create a share link for snapshot

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/snapshots/create-snapshot-share-link#__docusaurus_skipToContent_fallback)

Version: v3

Create Snapshot Share Link
==========================

POST 

https://services.leadconnectorhq.com/snapshots/share/link

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create a share link for snapshot

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/snapshots/create-snapshot-share-link#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**companyId** stringrequired

*   application/json

*   Body
*   Example (auto)

### Body**required**

**snapshot_id**stringrequired

id for snapshot to be shared

**Example:** `1eM2UgkfaECOYyUdCo9Pa`

**share_type**stringrequired

Type of share link to generate

**Possible values:** \[`link`, `permanent_link`, `agency_link`, `location_link`\]

**Example:** `permanent_link`

**relationship_number**string

Comma separated Relationship number of Agencies to create agency restricted share link

**Example:** `0-128-926,1-208-926,2-008-926`

**share_location_id**string

Comma separated Sub-Account ids to create sub-account restricted share link

**Example:** `l1C08ntBrFjLS0elLIYU, U1C08ntBrFjLS0elKIYP`

    {  "snapshot_id": "1eM2UgkfaECOYyUdCo9Pa",  "share_type": "permanent_link",  "relationship_number": "0-128-926,1-208-926,2-008-926",  "share_location_id": "l1C08ntBrFjLS0elLIYU, U1C08ntBrFjLS0elKIYP"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/snapshots/create-snapshot-share-link#responses "Direct link to Responses")

*   201
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**id**string

id for shared snapshot

**Example:** `1eM2UgkfaECOYyUdCo9Pa`

**shareLink**string

Share Link for snapshot

**Example:** `https://affiliates.gohighlevel.com/?share=1eM2UgkfaECOYyUdCo9Pa`

    {  "id": "1eM2UgkfaECOYyUdCo9Pa",  "shareLink": "https://affiliates.gohighlevel.com/?share=1eM2UgkfaECOYyUdCo9Pa"}

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

    curl -L 'https://services.leadconnectorhq.com/snapshots/share/link' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "snapshot_id": "1eM2UgkfaECOYyUdCo9Pa",  "share_type": "permanent_link",  "relationship_number": "0-128-926,1-208-926,2-008-926",  "share_location_id": "l1C08ntBrFjLS0elLIYU, U1C08ntBrFjLS0elKIYP"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

companyId — queryrequired

Version — headerrequired\---v3

Body required

{
  "snapshot_id": "1eM2UgkfaECOYyUdCo9Pa",  "share_type": "permanent_link",  "relationship_number": "0-128-926,1-208-926,2-008-926",  "share_location_id": "l1C08ntBrFjLS0elLIYU, U1C08ntBrFjLS0elKIYP"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
