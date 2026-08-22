# Update Contacts Tags

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/contacts/create-association
- **Summary:** Allows you to update tags to multiple contacts at once, you can add or remove tags from the contacts

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/create-association#__docusaurus_skipToContent_fallback)

Version: v3

Update Contacts Tags
====================

POST 

https://services.leadconnectorhq.com/contacts/bulk/tags/update/:type

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Allows you to update tags to multiple contacts at once, you can add or remove tags from the contacts

Request[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/create-association#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**contacts**string\[\]required

list of contact ids to be processed

**Example:** `["qFSqySFkVvNzOSqgGqFi","abcdef","qFSqySFkVvNzOSqgGqFi","3ualbhnV7j3n3a9r2moD"]`

**tags**string\[\]required

list of tags to be added or removed

**Example:** `["tag-1","tag-2"]`

**locationId**stringrequired

location id from where the bulk request is executed

**Example:** `asdrwHvLUxlfw5SqKVCN`

**removeAllTags**boolean

Option to implement remove all tags. if true, all tags will be removed from the contacts. Can only be used with remove type.

**Example:** `false`

    {  "contacts": [    "qFSqySFkVvNzOSqgGqFi",    "abcdef",    "qFSqySFkVvNzOSqgGqFi",    "3ualbhnV7j3n3a9r2moD"  ],  "tags": [    "tag-1",    "tag-2"  ],  "locationId": "asdrwHvLUxlfw5SqKVCN",  "removeAllTags": "false"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/create-association#responses "Direct link to Responses")

*   201
*   400
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**succeeded**booleanrequired

Indicates if the operation was successful

**Example:** `true`

**succeded**booleanrequireddeprecated

Legacy misspelling of `succeeded`. Deprecated; use `succeeded`.

**Example:** `true`

**errorCount**numberrequired

Number of errors encountered during the operation

**Example:** `0`

**responses**string\[\]required

Responses for each contact processed

**Example:** `[{"contactId":"qFSqySFkVvNzOSqgGqFi","message":"Tags updated","type":"success","oldTags":["tag-1","tag-2"],"tagsAdded":[],"tagsRemoved":[]},{"contactId":"abcdef","message":"contact id is not a valid firebase id","type":"error"},{"contactId":"qFSqySFkVvNzOSqgGqFi","message":"contact is deleted","type":"error"},{"contactId":"3ualbhnV7j3n3a9r2moD","message":"contact does not belong to location","type":"error"}]`

    {  "succeeded": true,  "errorCount": 0,  "responses": [    {      "contactId": "qFSqySFkVvNzOSqgGqFi",      "message": "Tags updated",      "type": "success",      "oldTags": [        "tag-1",        "tag-2"      ],      "tagsAdded": [],      "tagsRemoved": []    },    {      "contactId": "abcdef",      "message": "contact id is not a valid firebase id",      "type": "error"    },    {      "contactId": "qFSqySFkVvNzOSqgGqFi",      "message": "contact is deleted",      "type": "error"    },    {      "contactId": "3ualbhnV7j3n3a9r2moD",      "message": "contact does not belong to location",      "type": "error"    }  ]}

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

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/contacts/bulk/tags/update/:type' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-d '{  "contacts": [    "qFSqySFkVvNzOSqgGqFi",    "abcdef",    "qFSqySFkVvNzOSqgGqFi",    "3ualbhnV7j3n3a9r2moD"  ],  "tags": [    "tag-1",    "tag-2"  ],  "locationId": "asdrwHvLUxlfw5SqKVCN",  "removeAllTags": "false"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Parameters

Version — headerrequired\---v3

Body required

{
  "contacts": \[    "qFSqySFkVvNzOSqgGqFi",    "abcdef",    "qFSqySFkVvNzOSqgGqFi",    "3ualbhnV7j3n3a9r2moD"  \],  "tags": \[    "tag-1",    "tag-2"  \],  "locationId": "asdrwHvLUxlfw5SqKVCN",  "removeAllTags": "false"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
