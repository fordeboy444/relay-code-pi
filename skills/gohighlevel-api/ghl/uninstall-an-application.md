# Uninstall an application

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/marketplace/uninstall-application
- **Summary:** Uninstalls an application from your company or a specific location. This will remove the application`s access and stop all its functionalities

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/marketplace/uninstall-application#__docusaurus_skipToContent_fallback)

Version: v3

Uninstall an application
========================

DELETE 

https://services.leadconnectorhq.com/marketplace/app/:appId/installations

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Uninstalls an application from your company or a specific location. This will remove the application\`s access and stop all its functionalities

### Requirements

#### Scope(s)

`oauth.write`

#### Auth Method(s)

`OAuth Access Token`

#### Token Type(s)

`Sub-Account Token``Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/uninstall-application#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**appId** stringrequired

The application id which is to be uninstalled.

**Example:** `674587703dfd4161f1e3c557`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**companyId**string

The company id from which the application is to be uninstalled. If you pass agency token, then companyId is required. It will uninstall application from agency as well as all sub-accounts.

**Example:** `tDtDnQdgm2LXpyiqYvZ6`

**locationId**string

The location id from which the application is to be uninstalled. If you pass location token, then locationId is required. It will uninstall application from that location only.

**Example:** `tDtDnQdgm2LXpyiqYvZ6`

**reason**string

The reason for uninstalling the application. Reason is required if you are uninstalling the application as a developer.

**Example:** `Application is not working as expected`

    {  "companyId": "tDtDnQdgm2LXpyiqYvZ6",  "locationId": "tDtDnQdgm2LXpyiqYvZ6",  "reason": "Application is not working as expected"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/uninstall-application#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successfully uninstalled the application

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

The status of the uninstallation of the application

**Example:** `true`

    {  "success": true}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/marketplace/developer-marketplace-api#authentication)
**type:** http**scopes:** `oauth.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/marketplace/app/674587703dfd4161f1e3c557/installations' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "companyId": "tDtDnQdgm2LXpyiqYvZ6",  "locationId": "tDtDnQdgm2LXpyiqYvZ6",  "reason": "Application is not working as expected"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security SchemeLocation-Access-OnlyAgency-Access

Bearer Token

Parameters

appId — pathrequired

Version — headerrequired\---v3

Body required

{
  "companyId": "tDtDnQdgm2LXpyiqYvZ6",  "locationId": "tDtDnQdgm2LXpyiqYvZ6",  "reason": "Application is not working as expected"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
