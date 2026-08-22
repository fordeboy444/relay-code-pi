# Get Service by ID

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/calendars/get-service-catalog-by-id
- **Summary:** Get service by ID.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-service-catalog-by-id#__docusaurus_skipToContent_fallback)

Version: v3

Get Service by ID
=================

GET 

https://services.leadconnectorhq.com/calendars/services/catalog/:serviceId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get service by ID.

### Requirements

#### Scope(s)

`calendars.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-service-catalog-by-id#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**serviceId** stringrequired

Service ID

**Example:** `65e5f6dfacf123513228d384`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/calendars/get-service-catalog-by-id#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**service** objectrequired

Service details

**id**stringrequired

Service ID

**Example:** `65e5f6dfacf123513228d384`

**locationId**stringrequired

Location ID

**Example:** `0007BWpSzSwfiuSl0tR2`

**name**stringrequired

Service name

**Example:** `Hair Styling`

**description**string

Service description

**Example:** `Full hair styling session`

**slug**string

Unique URL-friendly identifier

**Example:** `hair-styling`

**eventColor**string

Service event color (hex)

**Example:** `#66C61C`

**coverImage**string

Service cover image URL

**Example:** `https://example.com/cover.jpg`

**serviceCategoryId**string

Service category ID

**Example:** `65e5f6dfacf123513228d381`

**payment** object

Payment details

**amount**number

Service price

**Example:** `50`

**deposit**number

Deposit amount or percentage value

**Example:** `20`

**depositType**string

Deposit type

**Possible values:** \[`percentage`, `amount`\]

**Example:** `amount`

**serviceDuration**number

This controls the duration of the appointment

**Example:** `60`

**serviceDurationUnit**string

Duration unit

**Possible values:** \[`mins`, `hours`\]

**Example:** `mins`

**preBuffer**number

Pre-Buffer is additional time that can be added before an appointment, allowing for extra time to get ready

**Example:** `10`

**preBufferUnit**string

Pre-buffer unit

**Possible values:** \[`mins`, `hours`\]

**Example:** `mins`

**postBuffer**number

Post-buffer: Additional time that can be added after an appointment, allowing for extra time to wrap up

**Example:** `15`

**postBufferUnit**string

Post-buffer unit

**Possible values:** \[`mins`, `hours`\]

**Example:** `mins`

**isPrivate**boolean

Whether service is private (not shown publicly)

**Default value:** `false`

**Example:** `false`

**formId**string

Custom form ID (will be used to display the custom form on the booking page, if only one service is selected)

**Example:** `65e5f6dfacf123513228d390`

**variations** object\[\]

Service variations

*   Array \[\
    \
\
**id**stringrequired\
\
Variation ID\
\
**Example:** `65e5f6dfacf123513228d384`\
\
**name**stringrequired\
\
Variation name\
\
**Example:** `Standard Haircut`\
\
**serviceDuration**number\
\
This controls the duration of the appointment\
\
**Example:** `30`\
\
**serviceDurationUnit**string\
\
Duration unit\
\
**Possible values:** \[`mins`, `hours`\]\
\
**Example:** `mins`\
\
**payment** object\
\
Payment details\
\
**amount**number\
\
Service price\
\
**Example:** `50`\
\
**deposit**number\
\
Deposit amount or percentage value\
\
**Example:** `20`\
\
**depositType**string\
\
Deposit type\
\
**Possible values:** \[`percentage`, `amount`\]\
\
**Example:** `amount`\
\
**preBuffer**number\
\
Pre-Buffer is additional time that can be added before an appointment, allowing for extra time to get ready\
\
**Example:** `10`\
\
**preBufferUnit**string\
\
Pre-buffer unit\
\
**Possible values:** \[`mins`, `hours`\]\
\
**Example:** `mins`\
\
**postBuffer**number\
\
Post-buffer: Additional time that can be added after an appointment, allowing for extra time to wrap up\
\
**Example:** `15`\
\
**postBufferUnit**string\
\
Post-buffer unit\
\
**Possible values:** \[`mins`, `hours`\]\
\
**Example:** `mins`\
\
*   \]
    

**staff** object\[\]

Assigned staff members

*   Array \[\
    \
\
**id**stringrequired\
\
Staff ID\
\
**Example:** `65e5f6dfacf123513228d384`\
\
*   \]
    

    {  "service": {    "id": "65e5f6dfacf123513228d384",    "locationId": "0007BWpSzSwfiuSl0tR2",    "name": "Hair Styling",    "description": "Full hair styling session",    "slug": "hair-styling",    "eventColor": "#66C61C",    "coverImage": "https://example.com/cover.jpg",    "serviceCategoryId": "65e5f6dfacf123513228d381",    "payment": {      "amount": 50,      "deposit": 20,      "depositType": "amount"    },    "serviceDuration": 60,    "serviceDurationUnit": "mins",    "preBuffer": 10,    "preBufferUnit": "mins",    "postBuffer": 15,    "postBufferUnit": "mins",    "isPrivate": false,    "formId": "65e5f6dfacf123513228d390",    "variations": [      {        "id": "65e5f6dfacf123513228d384",        "name": "Standard Haircut",        "serviceDuration": 30,        "serviceDurationUnit": "mins",        "payment": {          "amount": 50,          "deposit": 20,          "depositType": "amount"        },        "preBuffer": 10,        "preBufferUnit": "mins",        "postBuffer": 15,        "postBufferUnit": "mins"      }    ],    "staff": [      {        "id": "65e5f6dfacf123513228d384"      }    ]  }}

Invalid request parameters

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

    curl -L 'https://services.leadconnectorhq.com/calendars/services/catalog/65e5f6dfacf123513228d384' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

serviceId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
