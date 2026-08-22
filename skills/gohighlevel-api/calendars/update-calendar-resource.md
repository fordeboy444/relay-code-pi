# Update Calendar Resource

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/calendars/update-calendar-resource
- **Summary:** Update calendar resource by ID (Services V1)

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/update-calendar-resource#__docusaurus_skipToContent_fallback)

Version: v3

Update Calendar Resource
========================

PUT 

https://services.leadconnectorhq.com/calendars/resources/:resourceType/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

deprecated

This endpoint has been deprecated and may be replaced or removed in future versions of the API.

Update calendar resource by ID (Services V1)

### Requirements

#### Scope(s)

`calendars/resources.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/update-calendar-resource#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**resourceType** stringrequired

**Possible values:** \[`equipments`, `rooms`\]

Calendar Resource Type

**id** stringrequired

Calendar Resource ID

*   application/json

*   Body
*   Example (auto)

### Body**required**

**locationId**string

**name**string

**description**string

**quantity**number

Quantity of the equipment.

**outOfService**number

Quantity of the out of service equipment.

**capacity**number

Capacity of the room.

**calendarIds**string\[\]

Service calendar IDs to be mapped with the resource.

`One equipment can only be mapped with one service calendar.`

One room can be mapped with multiple service calendars.

**Possible values:** `<= 100`

**isActive**boolean

    {  "locationId": "string",  "name": "string",  "description": "string",  "quantity": 0,  "outOfService": 0,  "capacity": 0,  "calendarIds": [    "string"  ],  "isActive": true}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/update-calendar-resource#responses "Direct link to Responses")

*   200
*   400
*   401

Calendar resource updated

*   application/json

*   Schema
*   Example (auto)

**Schema**

**locationId**stringrequired

Location ID of the resource

**name**stringrequired

Name of the resource

**Example:** `yoga room`

**resourceType**stringrequired

**Possible values:** \[`equipments`, `rooms`\]

**isActive**booleanrequired

Whether the resource is active

**description**string

Description of the resource

**quantity**number

Quantity of the resource

**outOfService**number

Indicates if the resource is out of service

**Example:** `0`

**capacity**number

Capacity of the resource

**Example:** `85`

    {  "locationId": "string",  "name": "yoga room",  "resourceType": "equipments",  "isActive": true,  "description": "string",  "quantity": 0,  "outOfService": 0,  "capacity": 85}

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

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/calendars/calendars-api#authentication)
**type:** http**scopes:** `calendars/resources.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X PUT 'https://services.leadconnectorhq.com/calendars/resources/:resourceType/:id' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "string",  "name": "string",  "description": "string",  "quantity": 0,  "outOfService": 0,  "capacity": 0,  "calendarIds": [    "string"  ],  "isActive": true}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

resourceType — pathrequired\---equipmentsrooms

id — pathrequired

Version — headerrequired\---v3

Body required

{
  "locationId": "string",  "name": "string",  "description": "string",  "quantity": 0,  "outOfService": 0,  "capacity": 0,  "calendarIds": \[    "string"  \],  "isActive": true
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
