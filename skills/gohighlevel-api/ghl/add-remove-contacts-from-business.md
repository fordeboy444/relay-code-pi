# Add/Remove Contacts From Business

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/contacts/add-remove-contact-from-business
- **Summary:** Add/Remove Contacts From Business . Passing a `null` businessId will remove the businessId from the contacts

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-remove-contact-from-business#__docusaurus_skipToContent_fallback)

Version: v3

Add/Remove Contacts From Business
=================================

POST 

https://services.leadconnectorhq.com/contacts/bulk/business

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Add/Remove Contacts From Business . Passing a `null` businessId will remove the businessId from the contacts

Request[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-remove-contact-from-business#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**locationId**stringrequired

Location Id

**Example:** `PX8m5VwxEbcpFlzYEPVG`

**ids**string\[\]required

List of contact Ids to update (maximum 50)

**Possible values:** `<= 50 characters`

**Example:** `["IDqvFHGColiyK6jiatuz","pOC0uJ97VYOKH2m3fkMD"]`

**businessId**stringnullablerequired

Business Id to assign to contacts. Pass null to remove business association.

**Example:** `63b7ec34ea409a9a8bd2a4ff`

    {  "locationId": "PX8m5VwxEbcpFlzYEPVG",  "ids": [    "IDqvFHGColiyK6jiatuz",    "pOC0uJ97VYOKH2m3fkMD"  ],  "businessId": "63b7ec34ea409a9a8bd2a4ff"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-remove-contact-from-business#responses "Direct link to Responses")

*   200
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Whether the bulk update was successful

**Example:** `true`

**ids**string\[\]required

List of contact Ids that were updated

**Example:** `["pOC0uJ97VYOKH2m3fkMD"]`

    {  "success": true,  "ids": [    "pOC0uJ97VYOKH2m3fkMD"  ]}

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

    curl -L 'https://services.leadconnectorhq.com/contacts/bulk/business' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-d '{  "locationId": "PX8m5VwxEbcpFlzYEPVG",  "ids": [    "IDqvFHGColiyK6jiatuz",    "pOC0uJ97VYOKH2m3fkMD"  ],  "businessId": "63b7ec34ea409a9a8bd2a4ff"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Parameters

Version — headerrequired\---v3

Body required

{
  "locationId": "PX8m5VwxEbcpFlzYEPVG",  "ids": \[    "IDqvFHGColiyK6jiatuz",    "pOC0uJ97VYOKH2m3fkMD"  \],  "businessId": "63b7ec34ea409a9a8bd2a4ff"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
