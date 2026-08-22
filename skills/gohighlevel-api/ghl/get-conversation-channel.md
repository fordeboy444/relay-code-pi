# Get Conversation Channel

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/locations/get-conversation-channel
- **Summary:** Get the conversation channel providers configured for a location by type (SMS or Email)

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/locations/get-conversation-channel#__docusaurus_skipToContent_fallback)

Version: v3

Get Conversation Channel
========================

GET 

https://services.leadconnectorhq.com/locations/:locationId/conversationChannels/:type

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get the conversation channel providers configured for a location by type (SMS or Email)

### Requirements

#### Scope(s)

`locations.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/locations/get-conversation-channel#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**locationId** stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

**type** stringrequired

**Possible values:** \[`SMS`, `Email`\]

Channel type to retrieve providers for

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/locations/get-conversation-channel#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Retrieved all the conversation channels

*   application/json

*   Schema
*   Example (auto)

**Schema**

**conversationChannel** objectrequired

**SMS** object\[\]

List of SMS providers configured for this location

*   Array \[\
    \
\
**conversationProvider** objectrequired\
\
**_id**stringrequired\
\
Provider ID\
\
**Example:** `twilio_provider`\
\
**name**stringrequired\
\
Provider name\
\
**Example:** `Twilio`\
\
**type**stringrequired\
\
Provider type\
\
**Possible values:** \[`SMS`, `Email`\]\
\
**Example:** `SMS`\
\
**default**booleanrequired\
\
Whether this is the default provider\
\
**Example:** `true`\
\
*   \]
    

**Email** object\[\]

List of Email providers configured for this location

*   Array \[\
    \
\
**conversationProvider** objectrequired\
\
**_id**stringrequired\
\
Provider ID\
\
**Example:** `twilio_provider`\
\
**name**stringrequired\
\
Provider name\
\
**Example:** `Twilio`\
\
**type**stringrequired\
\
Provider type\
\
**Possible values:** \[`SMS`, `Email`\]\
\
**Example:** `SMS`\
\
**default**booleanrequired\
\
Whether this is the default provider\
\
**Example:** `true`\
\
*   \]
    

    {  "conversationChannel": {    "SMS": [      {        "conversationProvider": {          "_id": "twilio_provider",          "name": "Twilio",          "type": "SMS",          "default": true        }      }    ],    "Email": [      {        "conversationProvider": {          "_id": "twilio_provider",          "name": "Twilio",          "type": "SMS",          "default": true        }      }    ]  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/locations/sub-account-formerly-location-api#authentication)
**type:** http**scopes:** `locations.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/locations/ve9EPM428h8vShlRW1KT/conversationChannels/:type' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

type — pathrequired\---SMSEmail

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
