# Create conversation form

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-create-conversation-form
- **Summary:** Create a new Facebook conversation lead form

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-create-conversation-form#__docusaurus_skipToContent_fallback)

Version: v3

Create conversation form
========================

POST 

https://services.leadconnectorhq.com/ad-publishing/facebook/conversation-forms

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create a new Facebook conversation lead form

### Requirements

#### Scope(s)

`adPublishing.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-create-conversation-form#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**locationId**stringrequired

Location identifier

**Example:** `loc_abc123`

**name**stringrequired

Conversation form name

**Example:** `Welcome Form`

**text**stringrequired

Welcome message text

**Example:** `Hi! How can we help?`

**questions** object\[\]required

Quick-reply questions shown in the welcome message of the conversation form

*   Array \[\
    \
\
**question**stringrequired\
\
Question title text\
\
**Example:** `How can we help?`\
\
**response**string\
\
Auto-response message\
\
**Example:** `Thanks for reaching out`\
\
*   \]
    

    {  "locationId": "loc_abc123",  "name": "Welcome Form",  "text": "Hi! How can we help?",  "questions": [    {      "question": "How can we help?",      "response": "Thanks for reaching out! A team member will assist you shortly."    },    {      "question": "I want to learn more",      "response": "Great! Here is a link to our services."    }  ]}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-create-conversation-form#responses "Direct link to Responses")

*   201
*   400
*   401
*   422
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/ad-manager-api#authentication)
**type:** http**scopes:** `adPublishing.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/facebook/conversation-forms' \-H 'Content-Type: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "loc_abc123",  "name": "Welcome Form",  "text": "Hi! How can we help?",  "questions": [    {      "question": "How can we help?",      "response": "Thanks for reaching out! A team member will assist you shortly."    },    {      "question": "I want to learn more",      "response": "Great! Here is a link to our services."    }  ]}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired\---2021-07-28

Body required

{
  "locationId": "loc_abc123",  "name": "Welcome Form",  "text": "Hi! How can we help?",  "questions": \[    {      "question": "How can we help?",      "response": "Thanks for reaching out! A team member will assist you shortly."    },    {      "question": "I want to learn more",      "response": "Great! Here is a link to our services."    }  \]
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
