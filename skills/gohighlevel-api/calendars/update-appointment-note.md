# Update Note

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/calendars/update-appointment-note
- **Summary:** Update Note

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/update-appointment-note#__docusaurus_skipToContent_fallback)

Version: v3

Update Note
===========

PUT 

https://services.leadconnectorhq.com/calendars/appointments/:appointmentId/notes/:noteId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Update Note

### Requirements

#### Scope(s)

`calendars/events.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/update-appointment-note#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**appointmentId** stringrequired

Appointment ID

*   application/json

*   Body
*   Example (auto)

### Body**required**

**userId**string

**Example:** `GCs5KuzPqTls7vWclkEV`

**body**stringrequired

Note body

**Possible values:** `<= 5000 characters`

**Example:** `lorem ipsum`

    {  "userId": "GCs5KuzPqTls7vWclkEV",  "body": "lorem ipsum"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/update-appointment-note#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**note** object

**id**string

**Example:** `HGPcayliwcdoUFzvbTok`

**body**string

**Example:** `lorem ipsum`

**userId**string

**Example:** `TUcmRxWrjqzJS8EjkxNK`

**dateAdded**string

**Example:** `2021-07-08T12:02:11.285Z`

**contactId**string

**Example:** `TUcmRxWrjqzJS8EjkxNK`

**createdBy** object

**id**string

**Example:** `TUcmRxWr`

**name**string

**Example:** `John Doe`

    {  "note": {    "id": "HGPcayliwcdoUFzvbTok",    "body": "lorem ipsum",    "userId": "TUcmRxWrjqzJS8EjkxNK",    "dateAdded": "2021-07-08T12:02:11.285Z",    "contactId": "TUcmRxWrjqzJS8EjkxNK",    "createdBy": {      "id": "TUcmRxWr",      "name": "John Doe"    }  }}

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
**type:** http**scopes:** `calendars/events.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X PUT 'https://services.leadconnectorhq.com/calendars/appointments/:appointmentId/notes/:noteId' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "userId": "GCs5KuzPqTls7vWclkEV",  "body": "lorem ipsum"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

appointmentId — pathrequired

Version — headerrequired\---v3

Body required

{
  "userId": "GCs5KuzPqTls7vWclkEV",  "body": "lorem ipsum"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
