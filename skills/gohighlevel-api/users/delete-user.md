# Delete User

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/users/delete-user
- **Summary:** Delete User

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/users/delete-user#__docusaurus_skipToContent_fallback)

Version: v3New

Delete User
===========

DELETE 

https://services.leadconnectorhq.com/users/:userId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Delete User

### Requirements

#### Scope(s)

`users.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token``Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/users/delete-user#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/users/delete-user#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**succeeded**boolean

Indicates whether the user deletion was queued successfully

**Example:** `true`

**message**string

Message describing the result of the deletion request

**Example:** `Queued deleting user with e-mail john@deo.com and name John Deo. Will take effect in a few minutes.`

    {  "succeeded": true,  "message": "Queued deleting user with e-mail john@deo.com and name John Deo. Will take effect in a few minutes."}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/users/users-api-v-3#authentication)
**type:** http**scopes:** `users.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Agency (OR) Private Integration Token of Agency.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/users/:userId' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security SchemeAgency-AccessLocation-Access

Bearer Token

Parameters

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
