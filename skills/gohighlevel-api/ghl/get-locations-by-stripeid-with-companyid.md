# Get locations by stripeId with companyId

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/saas-api/locations
- **Summary:** Get locations by stripeCustomerId or stripeSubscriptionId with companyId

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas-api/locations#__docusaurus_skipToContent_fallback)

Version: v3

Get locations by stripeId with companyId

GET 

https://services.leadconnectorhq.com/saas/locations

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get locations by stripeCustomerId or stripeSubscriptionId with companyId

### Requirements

#### Scope(s)

`saas/company.read`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/locations#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Query Parameters

**companyId** stringrequired

Company ID to filter locations

**Example:** `5DP4iH6HLkQsiKESj6rh`

**customerId** string

Stripe customer ID to find locations for

**Example:** `cus_OD2oBjRfKEF6FV`

**subscriptionId** string

Stripe subscription ID to find locations for

**Example:** `sub_1NVqlLByVlfITvRXgirIdpyc`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/locations#responses "Direct link to Responses")

*   200
*   400
*   401
*   404
*   500

Locations retrieved successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

*   Array \[\
    \
\
string\
\
*   \]
    

    [  "string"]

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
**type:** http**scopes:** `saas/company.read`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Agency (OR) Private Integration Token of Agency.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/saas/locations?companyId=5DP4iH6HLkQsiKESj6rh&customerId=cus_OD2oBjRfKEF6FV&subscriptionId=sub_1NVqlLByVlfITvRXgirIdpyc' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

companyId — queryrequired

Version — headerrequired\---v3

Show optional parameters

customerId — query

subscriptionId — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
