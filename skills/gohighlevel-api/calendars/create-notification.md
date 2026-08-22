# Create notification

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/calendars/create-event-notification
- **Summary:** Create Calendar notifications, either one or multiple. All notification settings must be for single calendar only

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-event-notification#__docusaurus_skipToContent_fallback)

Version: v3

Create notification
===================

POST 

https://services.leadconnectorhq.com/calendars/:calendarId/notifications

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create Calendar notifications, either one or multiple. All notification settings must be for single calendar only

### Requirements

#### Scope(s)

`calendars/events.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-event-notification#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**calendarId** stringrequired

*   application/json

*   Body
*   Example (auto)

### Body array**required**

*   Array \[\
    \
\
**receiverType**stringrequired\
\
notification recipient type\
\
**Possible values:** \[`contact`, `guest`, `assignedUser`, `emails`, `phoneNumbers`, `business`\]\
\
**channel**stringrequired\
\
Notification channel\
\
**Possible values:** \[`email`, `inApp`, `sms`, `whatsapp`\]\
\
**notificationType**stringrequired\
\
Notification type\
\
**Possible values:** \[`booked`, `confirmation`, `cancellation`, `reminder`, `followup`, `reschedule`\]\
\
**isActive**boolean\
\
Is the notification active\
\
**Default value:** `true`\
\
**templateId**string\
\
Template ID for email notification. Not necessary for in-App notification\
\
**body**string\
\
Body for email notification. Not necessary for in-App notification\
\
**subject**string\
\
Subject for email notification. Not necessary for in-App notification\
\
**afterTime** object\[\]\
\
Specifies the time after which the follow-up notification should be sent. This is not required for other notification types.\
\
*   Array \[\
    \
\
**timeOffset**number\
\
**unit**string\
\
*   \]\
    \
\
**beforeTime** object\[\]\
\
Specifies the time before which the reminder notification should be sent. This is not required for other notification types.\
\
*   Array \[\
    \
\
**timeOffset**number\
\
**unit**string\
\
*   \]\
    \
\
**additionalEmailIds**string\[\]\
\
Additional email addresses to receive notifications.\
\
**Example:** `["example1@email.com","example2@email.com"]`\
\
**additionalPhoneNumbers**string\[\]\
\
Additional phone numbers to receive notifications.\
\
**Example:** `["+919876744444","+919876744445"]`\
\
**selectedUsers**string\[\]\
\
Selected users for in-App and business email notifications. Supports user IDs and special keyword "sub_account_admin"\
\
**Example:** `["userId1","userId2","sub_account_admin"]`\
\
**fromAddress**string\
\
from address for email notification\
\
**fromName**string\
\
from name for email/sms notification\
\
**fromNumber**string\
\
from number for sms notification\
\
*   \]
    

    [  {    "receiverType": "contact",    "channel": "email",    "notificationType": "booked",    "isActive": true,    "templateId": "string",    "body": "string",    "subject": "string",    "afterTime": [      {        "timeOffset": 1,        "unit": "hours"      }    ],    "beforeTime": [      {        "timeOffset": 1,        "unit": "hours"      }    ],    "additionalEmailIds": [      "example1@email.com",      "example2@email.com"    ],    "additionalPhoneNumbers": [      "+919876744444",      "+919876744445"    ],    "selectedUsers": [      "userId1",      "userId2",      "sub_account_admin"    ],    "fromAddress": "string",    "fromName": "string",    "fromNumber": "string"  }]

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/create-event-notification#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

*   Array \[\
    \
\
**_id**string\
\
Notification ID\
\
**receiverType**string\
\
**Possible values:** \[`contact`, `guest`, `assignedUser`, `emails`, `phoneNumbers`, `business`\]\
\
**Example:** `contact`\
\
**additionalEmailIds**string\[\]\
\
**Example:** `["example1@email.com","example2@email.com"]`\
\
**additionalPhoneNumbers**string\[\]\
\
**Example:** `["+919876744444","+919876744445"]`\
\
**channel**string\
\
**Possible values:** \[`email`, `inApp`, `sms`, `whatsapp`\]\
\
**Example:** `email`\
\
**notificationType**string\
\
**Possible values:** \[`booked`, `confirmation`, `cancellation`, `reminder`, `followup`, `reschedule`\]\
\
**Example:** `confirmation`\
\
**isActive**boolean\
\
**Example:** `true`\
\
**additionalWhatsappNumbers**string\[\]\
\
**Example:** `["+919876744444","+919876744445"]`\
\
**templateId**string\
\
**Example:** `0as9d8as0d`\
\
**body**string\
\
**Example:** `This is a test notification`\
\
**subject**string\
\
**Example:** `Test Notification`\
\
**afterTime** object\[\]\
\
*   Array \[\
    \
\
**timeOffset**number\
\
**unit**string\
\
*   \]\
    \
\
**beforeTime** object\[\]\
\
*   Array \[\
    \
\
**timeOffset**number\
\
**unit**string\
\
*   \]\
    \
\
**selectedUsers**string\[\]\
\
**Example:** `["user1","user2"]`\
\
**deleted**boolean\
\
**Example:** `false`\
\
*   \]
    

    [  {    "_id": "string",    "receiverType": "contact",    "additionalEmailIds": [      "example1@email.com",      "example2@email.com"    ],    "additionalPhoneNumbers": [      "+919876744444",      "+919876744445"    ],    "channel": "email",    "notificationType": "confirmation",    "isActive": true,    "additionalWhatsappNumbers": [      "+919876744444",      "+919876744445"    ],    "templateId": "0as9d8as0d",    "body": "This is a test notification",    "subject": "Test Notification",    "afterTime": [      {        "timeOffset": 1,        "unit": "hours"      }    ],    "beforeTime": [      {        "timeOffset": 1,        "unit": "hours"      }    ],    "selectedUsers": [      "user1",      "user2"    ],    "deleted": false  }]

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

    curl -L 'https://services.leadconnectorhq.com/calendars/:calendarId/notifications' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \--data-raw '[  {    "receiverType": "contact",    "channel": "email",    "notificationType": "booked",    "isActive": true,    "templateId": "string",    "body": "string",    "subject": "string",    "afterTime": [      {        "timeOffset": 1,        "unit": "hours"      }    ],    "beforeTime": [      {        "timeOffset": 1,        "unit": "hours"      }    ],    "additionalEmailIds": [      "example1@email.com",      "example2@email.com"    ],    "additionalPhoneNumbers": [      "+919876744444",      "+919876744445"    ],    "selectedUsers": [      "userId1",      "userId2",      "sub_account_admin"    ],    "fromAddress": "string",    "fromName": "string",    "fromNumber": "string"  }]'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

calendarId — pathrequired

Version — headerrequired\---v3

Body required

\[\
  {    "receiverType": "contact",    "channel": "email",    "notificationType": "booked",    "isActive": true,    "templateId": "string",    "body": "string",    "subject": "string",    "afterTime": \[      {        "timeOffset": 1,        "unit": "hours"      }    \],    "beforeTime": \[      {        "timeOffset": 1,        "unit": "hours"      }    \],    "additionalEmailIds": \[      "example1@email.com",      "example2@email.com"    \],    "additionalPhoneNumbers": \[      "+919876744444",      "+919876744445"    \],    "selectedUsers": \[      "userId1",      "userId2",      "sub_account_admin"    \],    "fromAddress": "string",    "fromName": "string",    "fromNumber": "string"  }\
\]
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
