# Remove attached config

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/saas-api/remove-attached-config
- **Summary:** Clears attached SaaS plan (attachPlanId/attachPriceId) and/or attached rebilling config from a sub-account in setup_pending, and sets suspendedInfo.payment_pending to false.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas-api/remove-attached-config#__docusaurus_skipToContent_fallback)

Version: v3

Remove attached config
======================

POST 

https://services.leadconnectorhq.com/saas/remove-attached-config/:locationId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Clears attached SaaS plan (attachPlanId/attachPriceId) and/or attached rebilling config from a sub-account in setup_pending, and sets suspendedInfo.payment_pending to false.

### Requirements

#### Scope(s)

`saas/company.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/remove-attached-config#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location ID (Sub-account) to remove attached config from

**Example:** `AUKAtFVo0lWezBsBQ3FE`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**companyId**stringrequired

Company ID owning the location

**Example:** `5DP4iH6HLkQsiKESj6rh`

    {  "companyId": "5DP4iH6HLkQsiKESj6rh"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/remove-attached-config#responses "Direct link to Responses")

*   200
*   400
*   401
*   404
*   422
*   500

Attached config removed successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Indicates if the remove attached config operation succeeded

**Example:** `true`

**locationId**stringrequired

Location ID the attached config was removed from

**Example:** `AUKAtFVo0lWezBsBQ3FE`

**removedAttachedPlan**booleanrequired

Whether an attached SaaS plan was cleared

**Example:** `true`

**removedAttachedRebilling**booleanrequired

Whether attached rebilling config was cleared

**Example:** `false`

    {  "success": true,  "locationId": "AUKAtFVo0lWezBsBQ3FE",  "removedAttachedPlan": true,  "removedAttachedRebilling": false}

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

Resource not found

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

Status code

**Example:** `404`

**message**string

Error message

**Example:** `["Contact not found","User not found","Group not found","Channel not found"]`

    {  "statusCode": 404,  "message": [    "Contact not found",    "User not found",    "Group not found",    "Channel not found"  ]}

Unprocessable entity (e.g. sub-account already in saas mode activated, not in setup_pending state, or no attached config found)

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `400`

**message**string

**Example:** `Bad Request`

    {  "statusCode": 400,  "message": "Bad Request"}

Internal server error

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

Status code

**Example:** `500`

**message**string

Error message

**Example:** `Internal Server Error`

    {  "statusCode": 500,  "message": "Internal Server Error"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/saas-api/saas-api#authentication)
**type:** http**scopes:** `saas/company.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Agency (OR) Private Integration Token of Agency.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/saas/remove-attached-config/AUKAtFVo0lWezBsBQ3FE' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "companyId": "5DP4iH6HLkQsiKESj6rh"}'

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
  "companyId": "5DP4iH6HLkQsiKESj6rh"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
