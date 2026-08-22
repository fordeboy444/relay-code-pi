# Update Task Completed

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/contacts/update-task-completed
- **Summary:** Update Task Completed

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/update-task-completed#__docusaurus_skipToContent_fallback)

Version: v3

Update Task Completed
=====================

PUT 

https://services.leadconnectorhq.com/contacts/:contactId/tasks/:taskId/completed

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Update Task Completed

### Requirements

#### Scope(s)

`contacts.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/update-task-completed#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**contactId** stringrequired

Contact Id

**Example:** `ve9EPM428h8vShlRW1KT`

**taskId** stringrequired

Task Id

**Example:** `ocQHyuzHvysMo5N5VsXc`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**completed**booleanrequired

Whether the task is completed

**Example:** `true`

    {  "completed": true}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/update-task-completed#responses "Direct link to Responses")

*   200
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

    curl -L -X PUT 'https://services.leadconnectorhq.com/contacts/ve9EPM428h8vShlRW1KT/tasks/ocQHyuzHvysMo5N5VsXc/completed' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "completed": true}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

contactId — pathrequired

taskId — pathrequired

Version — headerrequired\---v3

Body required

{
  "completed": true
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
