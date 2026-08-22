# List Design Kits

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/brand-boards/list-design-kits
- **Summary:** Get list of design kits for a location

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/list-design-kits#__docusaurus_skipToContent_fallback)

Version: v3New

List Design Kits
================

GET 

https://services.leadconnectorhq.com/brand-boards/locations/:locationId/design-kits

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get list of design kits for a location

### Requirements

#### Scope(s)

`brand-boards/design-kit.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/list-design-kits#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

ID of the location to list design kits for.

**Example:** `oHJiAh0wDG3BzmzACVD6`

### Query Parameters

**limit** number

**Possible values:** `>= 1` and `<= 20`

Maximum number of design kits to return.

Default value:`10`

**Example:** `10`

**offset** number

**Possible values:** `>= 0`

Number of design kits to skip for pagination.

Default value:`0`

**Example:** `0`

**search** string

Filter results by design kit name (case-insensitive partial match).

**Example:** `My Design Kit`

**deleted** boolean

Include soft-deleted design kits in the results.

Default value:`false`

**Example:** `false`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/list-design-kits#responses "Direct link to Responses")

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

List of design kits for the current page.

*   Array \[\
    \
\
**id**stringrequired\
\
Unique identifier of the design kit.\
\
**Example:** `507f1f77bcf86cd799439011`\
\
**name**stringrequired\
\
Display name of the design kit.\
\
**Example:** `My Design Kit`\
\
**isDefault**booleanrequired\
\
Whether this is the default design kit for the location.\
\
**Example:** `false`\
\
**createdAt**stringrequired\
\
ISO 8601 timestamp of when the design kit was created.\
\
**Example:** `2024-01-05T12:00:00.000Z`\
\
**updatedAt**stringrequired\
\
ISO 8601 timestamp of when the design kit was last updated.\
\
**Example:** `2024-01-05T12:00:00.000Z`\
\
*   \]
    

**total**numberrequired

Total number of design kits matching the query.

**Example:** `25`

**traceId**string

Trace identifier for the request, useful for debugging and support.

**Example:** `019e4ef5-a65e-4198-8cf9-8e93dca9bda4`

    {  "items": [    {      "id": "507f1f77bcf86cd799439011",      "name": "My Design Kit",      "isDefault": false,      "createdAt": "2024-01-05T12:00:00.000Z",      "updatedAt": "2024-01-05T12:00:00.000Z"    }  ],  "total": 25,  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"}

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

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/brand-boards-api-v-3#authentication)
**type:** http**scopes:** `brand-boards/design-kit.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/brand-boards/locations/oHJiAh0wDG3BzmzACVD6/design-kits?limit=10&search=My%20Design%20Kit&deleted=false' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

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

deleted — query\---truefalse

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
