# Delete shipping carrier

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/store/delete-shipping-carrier
- **Summary:** Delete specific shipping carrier with Id :shippingCarrierId

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/store/delete-shipping-carrier#__docusaurus_skipToContent_fallback)

Version: v3

Delete shipping carrier
=======================

DELETE 

https://services.leadconnectorhq.com/store/shipping-carrier/:shippingCarrierId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Delete specific shipping carrier with Id :shippingCarrierId

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/store/delete-shipping-carrier#request "Direct link to request")

### Path Parameters

**shippingCarrierId** stringrequired

ID of the shipping carrier that needs to be returned

**Example:** `6578278e879ad2646715ba9c`

### Query Parameters

**altId** stringrequired

Location Id or Agency Id

**Example:** `6578278e879ad2646715ba9c`

**altType** stringrequired

**Possible values:** \[`location`\]

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/store/delete-shipping-carrier#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**status**booleanrequired

Status of api action

**Example:** `true`

**message**string

Success message

**Example:** `Successfully created`

    {  "status": true,  "message": "Successfully created"}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/store/store-api#authentication)
**type:** http**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/store/shipping-carrier/6578278e879ad2646715ba9c?altId=6578278e879ad2646715ba9c' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

shippingCarrierId — pathrequired

altId — queryrequired

altType — queryrequired\---location

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
