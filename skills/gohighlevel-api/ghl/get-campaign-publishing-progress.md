# Get campaign publishing progress

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-campaign-publishing-progress
- **Summary:** Returns Redis-backed publish progress for a campaign while it is publishing to Meta. Used by the validation funnel UI to poll step counts and completion state.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-campaign-publishing-progress#__docusaurus_skipToContent_fallback)

Version: v3

Get campaign publishing progress
================================

GET 

https://services.leadconnectorhq.com/ad-publishing/facebook/campaigns/:campaignId/publishing-progress

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Returns Redis-backed publish progress for a campaign while it is publishing to Meta. Used by the validation funnel UI to poll step counts and completion state.

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-campaign-publishing-progress#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Path Parameters

**campaignId** stringrequired

Campaign identifier

**Example:** `507f1f77bcf86cd799439011`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `HChooFuiyPpVYzeJ4HMe`

**isDraft** boolean

Is draft

**Example:** `true`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-campaign-publishing-progress#responses "Direct link to Responses")

*   200
*   400
*   401
*   404
*   422

Publishing progress for the campaign

*   application/json

*   Schema
*   Example (auto)

**Schema**

**campaignId**stringrequired

Campaign identifier

**Example:** `507f1f77bcf86cd799439011`

**publishingStatus**stringrequired

Current campaign publishing status in ad-publishing

**Possible values:** \[`DRAFT`, `SCHEDULED`, `PUBLISHED`, `PUBLISHING`, `FAILED`, `IN_REVIEW`, `PAUSED`, `ARCHIVED`, `WITH_ISSUES`, `REJECTED`\]

**Example:** `PUBLISHING`

**total**numberrequired

Total publish steps tracked in Redis (campaign + ad sets + ads)

**Example:** `5`

**processed**numberrequired

Number of publish steps completed so far

**Example:** `2`

**isComplete**booleanrequired

Whether publishing is finished (Redis complete/failed, processed >= total, or status is no longer PUBLISHING)

**Example:** `false`

**hasFailed**booleanrequired

Whether publishing failed (Redis failed status or campaign FAILED)

**Example:** `false`

    {  "campaignId": "507f1f77bcf86cd799439011",  "publishingStatus": "PUBLISHING",  "total": 5,  "processed": 2,  "isComplete": false,  "hasFailed": false}

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

Campaign not found

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

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/ad-manager-api#authentication)
**type:** http**scopes:** `adPublishing.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/facebook/campaigns/507f1f77bcf86cd799439011/publishing-progress?locationId=HChooFuiyPpVYzeJ4HMe&isDraft=true' \-H 'Accept: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

campaignId — pathrequired

locationId — queryrequired

Version — headerrequired\---2021-07-28

Show optional parameters

isDraft — query\---truefalse

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
