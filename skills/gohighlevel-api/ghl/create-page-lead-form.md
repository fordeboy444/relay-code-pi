# Create page lead form

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-create-page-lead-form
- **Summary:** Create a new lead gen form on a Facebook page

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-create-page-lead-form#__docusaurus_skipToContent_fallback)

Version: v3

Create page lead form
=====================

POST 

https://services.leadconnectorhq.com/ad-publishing/facebook/page/:pageId/forms

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create a new lead gen form on a Facebook page

### Requirements

#### Scope(s)

`adPublishing.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-create-page-lead-form#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Path Parameters

**pageId** stringrequired

Facebook page identifier

**Example:** `103456789012345`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**type**stringrequired

Lead form type

**Possible values:** \[`MORE_VOLUME`, `HIGHER_INTENT`\]

**Example:** `MORE_VOLUME`

**name**stringrequired

Lead form name

**Example:** `Contact Form`

**locationId**stringrequired

Location identifier

**Example:** `loc_abc123`

**greetingCard** object

Greeting card config

**title**stringrequired

Greeting card title

**Example:** `Welcome!`

**style**stringrequired

Greeting card style

**Example:** `LIST_STYLE`

**content**string\[\]required

Greeting card content

**Example:** `["Learn more about our services"]`

**questions** object\[\]required

List of questions displayed on the lead form. Required (non-empty) when `isDraft` is false or omitted; optional for drafts.

*   Array \[\
    \
\
**label**string\
\
Question label text shown to the user\
\
**Example:** `What is your name?`\
\
**key**stringrequired\
\
Question key\
\
**Example:** `name`\
\
**type**stringrequired\
\
Question input type — use a prefilled type for standard fields or CUSTOM / SHORT_ANSWER for freeform questions\
\
**Possible values:** \[`CUSTOM`, `CITY`, `COMPANY_NAME`, `COUNTRY`, `DATE_OF_BIRTH`, `EMAIL`, `FIRST_NAME`, `FULL_NAME`, `GENDER`, `JOB_TITLE`, `LAST_NAME`, `MARITIAL_STATUS`, `MILITARY_STATUS`, `PHONE`, `POST_CODE`, `RELATIONSHIP_STATUS`, `STATE`, `STREET_ADDRESS`, `WORK_EMAIL`, `WORK_PHONE_NUMBER`, `ZIP`, `SHORT_ANSWER`\]\
\
**Example:** `SHORT_ANSWER`\
\
**options** object\[\]\
\
Answer options for multiple-choice questions (only applies to CUSTOM type)\
\
*   Array \[\
    \
\
**key**stringrequired\
\
Option key\
\
**Example:** `option 1`\
\
**value**stringrequired\
\
Option value\
\
**Example:** `Option 1`\
\
*   \]\
    \
\
*   \]
    

**questionPageHeadline**string

Question page headline

**Example:** `Tell us about yourself`

**privacyPolicyLink**stringrequired

Privacy policy URL. Required when `isDraft` is false or omitted; optional for drafts.

**Example:** `https://example.com/privacy`

**privacyPolicyText**string

Privacy policy text

**Example:** `We respect your privacy`

**customDisclaimer** object

Custom disclaimer config

**title**stringrequired

Disclaimer title

**Example:** `Terms & Conditions`

**body**stringrequired

Disclaimer body text

**Example:** `By submitting...`

**checkboxes** object\[\]

Consent checkboxes the user must agree to before submitting the form

*   Array \[\
    \
\
**isRequired**booleanrequired\
\
Checkbox required flag\
\
**Example:** `true`\
\
**text**stringrequired\
\
Checkbox text label\
\
**Example:** `I agree to terms`\
\
**key**stringrequired\
\
Checkbox unique key\
\
**Example:** `terms_checkbox`\
\
*   \]
    

**thankYouPage** objectrequired

Thank you page config. Required when `isDraft` is false or omitted; optional for drafts.

**title**stringrequired

Thank you page title

**Example:** `Thank You!`

**body**stringrequired

Thank you page body

**Example:** `We will contact you soon`

**buttonText**stringrequired

Button text label

**Example:** `Visit Website`

**buttonType**stringrequired

Button action type

**Example:** `VIEW_WEBSITE`

**buttonLink**string

Button destination link

**Example:** `https://example.com`

**businessPhone**string

Business phone number

**Example:** `+1234567890`

**countryCode**string

Phone country code

**Example:** `US`

**isDraft**boolean

If the form is a draft, set to true

**Example:** `true`

**draftFormId**string

Draft form ID

**Example:** `1234567890`

**locale**string

Locale

**Example:** `EN_US`

    {  "type": "MORE_VOLUME",  "name": "Contact Form",  "locationId": "loc_abc123",  "greetingCard": {    "title": "Welcome!",    "style": "LIST_STYLE",    "content": [      "Learn more about our services"    ]  },  "questions": [    {      "key": "full_name",      "type": "FULL_NAME",      "options": []    },    {      "key": "email_address",      "type": "EMAIL",      "options": []    },    {      "key": "are_you_interested",      "label": "Are you interested?",      "type": "CUSTOM",      "options": [        {          "value": "Yes"        },        {          "value": "No"        }      ]    }  ],  "questionPageHeadline": "Tell us about yourself",  "privacyPolicyLink": "https://example.com/privacy",  "privacyPolicyText": "We respect your privacy",  "customDisclaimer": {    "title": "Terms & Conditions",    "body": "By submitting...",    "checkboxes": [      {        "isRequired": true,        "text": "I agree",        "key": "terms"      }    ]  },  "thankYouPage": {    "title": "Thank You!",    "body": "We will contact you soon",    "buttonText": "Visit Website",    "buttonType": "VIEW_WEBSITE",    "buttonLink": "https://example.com"  },  "isDraft": true,  "draftFormId": "1234567890",  "locale": "EN_US"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-create-page-lead-form#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/facebook/page/103456789012345/forms' \-H 'Content-Type: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>' \-d '{  "type": "MORE_VOLUME",  "name": "Contact Form",  "locationId": "loc_abc123",  "greetingCard": {    "title": "Welcome!",    "style": "LIST_STYLE",    "content": [      "Learn more about our services"    ]  },  "questions": [    {      "key": "full_name",      "type": "FULL_NAME",      "options": []    },    {      "key": "email_address",      "type": "EMAIL",      "options": []    },    {      "key": "are_you_interested",      "label": "Are you interested?",      "type": "CUSTOM",      "options": [        {          "value": "Yes"        },        {          "value": "No"        }      ]    }  ],  "questionPageHeadline": "Tell us about yourself",  "privacyPolicyLink": "https://example.com/privacy",  "privacyPolicyText": "We respect your privacy",  "customDisclaimer": {    "title": "Terms & Conditions",    "body": "By submitting...",    "checkboxes": [      {        "isRequired": true,        "text": "I agree to the Terms & Conditions",        "key": "terms_checkbox"      },      {        "isRequired": false,        "text": "I would like to receive marketing emails",        "key": "marketing_optin"      }    ]  },  "thankYouPage": {    "title": "Thank You!",    "body": "We will contact you soon",    "buttonText": "Visit Website",    "buttonType": "VIEW_WEBSITE",    "buttonLink": "https://example.com",    "businessPhone": "+1234567890",    "countryCode": "US"  },  "isDraft": true,  "draftFormId": "1234567890",  "locale": "EN_US"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

pageId — pathrequired

Version — headerrequired\---2021-07-28

Body required

{
  "type": "MORE_VOLUME",  "name": "Contact Form",  "locationId": "loc_abc123",  "greetingCard": {    "title": "Welcome!",    "style": "LIST_STYLE",    "content": \[      "Learn more about our services"    \]  },  "questions": \[    {      "key": "full_name",      "type": "FULL_NAME",      "options": \[\]    },    {      "key": "email_address",      "type": "EMAIL",      "options": \[\]    },    {      "key": "are_you_interested",      "label": "Are you interested?",      "type": "CUSTOM",      "options": \[        {          "value": "Yes"        },        {          "value": "No"        }      \]    }  \],  "questionPageHeadline": "Tell us about yourself",  "privacyPolicyLink": "https://example.com/privacy",  "privacyPolicyText": "We respect your privacy",  "customDisclaimer": {    "title": "Terms & Conditions",    "body": "By submitting...",    "checkboxes": \[      {        "isRequired": true,        "text": "I agree to the Terms & Conditions",        "key": "terms_checkbox"      },      {        "isRequired": false,        "text": "I would like to receive marketing emails",        "key": "marketing_optin"      }    \]  },  "thankYouPage": {    "title": "Thank You!",    "body": "We will contact you soon",    "buttonText": "Visit Website",    "buttonType": "VIEW_WEBSITE",    "buttonLink": "https://example.com",    "businessPhone": "+1234567890",    "countryCode": "US"  },  "isDraft": true,  "draftFormId": "1234567890",  "locale": "EN_US"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
