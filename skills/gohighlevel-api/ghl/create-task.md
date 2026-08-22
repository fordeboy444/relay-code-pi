# Create Task

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/contacts/create-task
- **Summary:** Create Task

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/create-task#__docusaurus_skipToContent_fallback)

Version: v3

Create Task
===========

POST 

https://services.leadconnectorhq.com/contacts/:contactId/tasks

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create Task

### Requirements

#### Scope(s)

`contacts.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/create-task#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**contactId** stringrequired

Contact Id

**Example:** `ve9EPM428h8vShlRW1KT`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**title**stringrequired

Title of the task

**Example:** `First Task`

**body**string

Body or description of the task

**Example:** `loram ipsum`

**dueDate**stringrequired

Due date of the task (ISO 8601 format)

**Example:** `2020-10-25T11:00:00Z`

**completed**booleanrequired

Whether the task is completed

**Example:** `true`

**assignedTo**string

User Id to whom the task is assigned

**Example:** `hxHGVRb1YJUscrCB8eXK`

    {  "title": "First Task",  "body": "loram ipsum",  "dueDate": "2020-10-25T11:00:00Z",  "completed": true,  "assignedTo": "hxHGVRb1YJUscrCB8eXK"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/create-task#responses "Direct link to Responses")

*   201
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**task** object

Task details

**id**string

Unique identifier of the task

**Example:** `lJpzYrWdpkC2hX6t2yue`

**title**string

Title of the task

**Example:** `test`

**body**string

Body or description of the task

**Example:** `testing`

**assignedTo**string

User Id to whom the task is assigned

**Example:** `tesTUcmRxWrjqzJS8EjkxNKting`

**dueDate**string

Due date of the task (ISO 8601 format)

**Example:** `2021-07-08T02:30:00.000Z`

**completed**boolean

Whether the task is completed

**Example:** `true`

**contactId**string

Contact Id associated with the task

**Example:** `lJpzYrWdpkC2hX6t2yue`

    {  "task": {    "id": "lJpzYrWdpkC2hX6t2yue",    "title": "test",    "body": "testing",    "assignedTo": "tesTUcmRxWrjqzJS8EjkxNK",    "dueDate": "2021-07-08T02:30:00.000Z",    "completed": true,    "contactId": "lJpzYrWdpkC2hX6t2yue"  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/contacts/contacts-api-v-3#authentication)
**type:** http**scopes:** `contacts.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/contacts/ve9EPM428h8vShlRW1KT/tasks' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "title": "First Task",  "body": "loram ipsum",  "dueDate": "2020-10-25T11:00:00Z",  "completed": true,  "assignedTo": "hxHGVRb1YJUscrCB8eXK"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

contactId — pathrequired

Version — headerrequired\---v3

Body required

{
  "title": "First Task",  "body": "loram ipsum",  "dueDate": "2020-10-25T11:00:00Z",  "completed": true,  "assignedTo": "hxHGVRb1YJUscrCB8eXK"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
