# Get notification

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/calendars/find-event-notification
- **Summary:** Find Event notification by notificationId

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/find-event-notification#__docusaurus_skipToContent_fallback)

Version: v3

Get notification
================

GET 

https://services.leadconnectorhq.com/calendars/:calendarId/notifications/:notificationId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Find Event notification by notificationId

### Requirements

#### Scope(s)

`calendars/events.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/find-event-notification#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**calendarId** stringrequired

**notificationId** stringrequired

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/find-event-notification#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**_id**string

Notification ID

**receiverType**string

**Possible values:** \[`contact`, `guest`, `assignedUser`, `emails`, `phoneNumbers`, `business`\]

**Example:** `contact`

**additionalEmailIds**string\[\]

**Example:** `["example1@email.com","example2@email.com"]`

**additionalPhoneNumbers**string\[\]

**Example:** `["+919876744444","+919876744445"]`

**channel**string

**Possible values:** \[`email`, `inApp`, `sms`, `whatsapp`\]

**Example:** `email`

**notificationType**string

**Possible values:** \[`booked`, `confirmation`, `cancellation`, `reminder`, `followup`, `reschedule`\]

**Example:** `confirmation`

**isActive**boolean

**Example:** `true`

**additionalWhatsappNumbers**string\[\]

**Example:** `["+919876744444","+919876744445"]`

**templateId**string

**Example:** `0as9d8as0d`

**body**string

**Example:** `This is a test notification`

**subject**string

**Example:** `Test Notification`

**afterTime** object\[\]

*   Array \[\
    \
\
**timeOffset**number\
\
**unit**string\
\
*   \]
    

**beforeTime** object\[\]

*   Array \[\
    \
\
**timeOffset**number\
\
**unit**string\
\
*   \]
    

**selectedUsers**string\[\]

**Example:** `["user1","user2"]`

**deleted**boolean

**Example:** `false`

    {  "_id": "string",  "receiverType": "contact",  "additionalEmailIds": [    "example1@email.com",    "example2@email.com"  ],  "additionalPhoneNumbers": [    "+919876744444",    "+919876744445"  ],  "channel": "email",  "notificationType": "confirmation",  "isActive": true,  "additionalWhatsappNumbers": [    "+919876744444",    "+919876744445"  ],  "templateId": "0as9d8as0d",  "body": "This is a test notification",  "subject": "Test Notification",  "afterTime": [    {      "timeOffset": 1,      "unit": "hours"    }  ],  "beforeTime": [    {      "timeOffset": 1,      "unit": "hours"    }  ],  "selectedUsers": [    "user1",    "user2"  ],  "deleted": false}

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
**type:** http**scopes:** `calendars/events.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/calendars/:calendarId/notifications/:notificationId' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

calendarId — pathrequired

notificationId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
