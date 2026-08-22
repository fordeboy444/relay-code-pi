# Get Appointments for Contact

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/contacts/get-appointments-for-contact
- **Summary:** Get Appointments for Contact

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-appointments-for-contact#__docusaurus_skipToContent_fallback)

Version: v3

Get Appointments for Contact
============================

GET 

https://services.leadconnectorhq.com/contacts/:contactId/appointments

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get Appointments for Contact

### Requirements

#### Scope(s)

`contacts.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-appointments-for-contact#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**contactId** stringrequired

Contact Id

**Example:** `ve9EPM428h8vShlRW1KT`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-appointments-for-contact#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**events** object\[\]

List of appointments

*   Array \[\
    \
\
**id**string\
\
Unique identifier of the appointment\
\
**Example:** `YS3jaqqeehkR2Is80miy`\
\
**calendarId**string\
\
Calendar Id associated with the appointment\
\
**Example:** `YlWd2wuCAZQzh2cH1fVZ`\
\
**status**string\
\
Status of the appointment\
\
**Example:** `booked`\
\
**title**string\
\
Title of the appointment\
\
**Example:** `Test`\
\
**assignedUserId**string\
\
User Id assigned to the appointment\
\
**Example:** `YlWd2wuCAZQzh2cH1fVZ`\
\
**notes**string\
\
Notes for the appointment\
\
**Example:** `test`\
\
**startTime**string\
\
Start time of the appointment\
\
**Example:** `2021-07-16 11:00:00`\
\
**endTime**string\
\
End time of the appointment\
\
**Example:** `2021-07-16 11:30:00`\
\
**address**string\
\
Address for the appointment\
\
**Example:** `Address`\
\
**locationId**string\
\
Location Id of the appointment\
\
**Example:** `YlWd2wuCAZQzh2cH1fVZ`\
\
**contactId**string\
\
Contact Id associated with the appointment\
\
**Example:** `YlWd2wuCAZQzh2cH1fVZ`\
\
**groupId**string\
\
Group Id of the appointment\
\
**Example:** `YlWd2wuCAZQzh2cH1fVZ`\
\
**appointmentStatus**string\
\
Appointment status\
\
**Example:** `booked`\
\
**users**string\[\]\
\
List of user Ids assigned to the appointment\
\
**Example:** `["YlWd2wuCAZQzh2cH1fVZ","YlWd2wuCAZQzh2cH1fVZ"]`\
\
**dateAdded**string\
\
Date the appointment was created\
\
**Example:** `2021-07-16 11:00:00`\
\
**dateUpdated**string\
\
Date the appointment was last updated\
\
**Example:** `2021-07-16 11:30:00`\
\
**assignedResources**string\[\]\
\
List of resource Ids assigned to the appointment\
\
**Example:** `["YlWd2wuCAZQzh2cH1fVZ","YlWd2wuCAZQzh2cH1fVZ"]`\
\
*   \]
    

    {  "events": [    {      "id": "YS3jaqqeehkR2Is80miy",      "calendarId": "YlWd2wuCAZQzh2cH1fVZ",      "status": "booked",      "title": "Test",      "assignedUserId": "YlWd2wuCAZQzh2cH1fVZ",      "notes": "test",      "startTime": "2021-07-16 11:00:00",      "endTime": "2021-07-16 11:30:00"    }  ]}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/contacts/contacts-api-v-3#authentication)
**type:** http**scopes:** `contacts.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/contacts/ve9EPM428h8vShlRW1KT/appointments' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

contactId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
