# Get Service Locations

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/calendars/get-service-locations
- **Summary:** Get all service locations

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-service-locations#__docusaurus_skipToContent_fallback)

Version: v3

Get Service Locations
=====================

GET 

https://services.leadconnectorhq.com/calendars/services/locations

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get all service locations

### Requirements

#### Scope(s)

`calendars.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-service-locations#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**locationId** stringrequired

Location ID

**Example:** `0007BWpSzSwfiuSl0tR2`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-service-locations#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**serviceLocations** object\[\]required

List of service locations

*   Array \[\
    \
\
**id**stringrequired\
\
Service Location ID\
\
**Example:** `65e5f6dfacf123513228d384`\
\
**locationId**stringrequired\
\
Location ID\
\
**Example:** `0007BWpSzSwfiuSl0tR2`\
\
**name**stringrequired\
\
Location name\
\
**Example:** `Downtown Wellness Center`\
\
**slug**stringrequired\
\
Unique URL-friendly identifier for the service location\
\
**Example:** `downtown-wellness-center`\
\
**isActive**boolean\
\
Whether location is active\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**isPrivate**boolean\
\
Whether location is private (not shown publicly)\
\
**Default value:** `false`\
\
**Example:** `false`\
\
**coverImage**string\
\
URL of the cover image displayed for this location\
\
**Example:** `https://storage.example.com/locations/downtown-wellness-center/cover.jpg`\
\
**locationType**string\
\
Location type\
\
**Possible values:** \[`offline`, `ask_booker`\]\
\
**Example:** `offline`\
\
**address**string\
\
Use a full street address when locationType is offline. Use a user-facing label when locationType is ask_booker.\
\
**Example:** `456 Market Street, Suite 200, San Francisco, CA 94105`\
\
**phone**string\
\
Contact phone number for the service location\
\
**Example:** `+1-415-555-0198`\
\
*   \]
    

    {  "serviceLocations": [    {      "id": "65e5f6dfacf123513228d384",      "locationId": "0007BWpSzSwfiuSl0tR2",      "name": "Downtown Wellness Center",      "slug": "downtown-wellness-center",      "isActive": true,      "isPrivate": false,      "coverImage": "https://storage.example.com/locations/downtown-wellness-center/cover.jpg",      "locationType": "offline",      "address": "456 Market Street, Suite 200, San Francisco, CA 94105",      "phone": "+1-415-555-0198"    }  ]}

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

User not authenticated

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

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/calendars/calendars-api#authentication)
**type:** http**scopes:** `calendars.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/calendars/services/locations?locationId=0007BWpSzSwfiuSl0tR2' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
