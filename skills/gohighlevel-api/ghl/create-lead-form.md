# Create lead form

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-create-lead-form
- **Summary:** Create a new LinkedIn lead gen form for an ad account

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-create-lead-form#__docusaurus_skipToContent_fallback)

Version: v3

Create lead form
================

POST 

https://services.leadconnectorhq.com/ad-publishing/linkedin/:accountId/form

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create a new LinkedIn lead gen form for an ad account

### Requirements

#### Scope(s)

`adPublishing.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-create-lead-form#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `HChooFuiyPpVYzeJ4HMe`

**isDraft** boolean

Is draft

**Example:** `true`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**owner** objectrequired

Form owner

**sponsoredAccount**stringrequired

Sponsored account URN

**Example:** `urn:li:sponsoredAccount:123456`

**creationLocale** objectrequired

Creation locale

**country**stringrequired

Country code

**Example:** `US`

**language**stringrequired

Language code

**Example:** `en`

**name**stringrequired

Form name

**Example:** `Contact Us`

**state**stringrequired

Form state

**Possible values:** \[`PUBLISHED`\]

**Example:** `PUBLISHED`

**content** objectrequired

Form content

**questions** object\[\]required

Form questions

*   Array \[\
    \
\
**question** objectrequired\
\
Question text\
\
**localized**objectrequired\
\
Locale-keyed string map\
\
**Example:** `{"en_US":"Hello"}`\
\
**name**stringrequired\
\
Question field name\
\
**Example:** `firstName`\
\
**questionDetails** objectrequired\
\
Question type details\
\
**textQuestionDetails**object\
\
Text question details (empty object for text questions)\
\
**Example:** `{}`\
\
**multipleChoiceQuestionDetails** object\
\
Multiple choice question details\
\
**options** object\[\]required\
\
Choice options\
\
*   Array \[\
    \
\
**id**numberrequired\
\
Option ID\
\
**Example:** `1`\
\
**text** objectrequired\
\
Option text\
\
**localized**objectrequired\
\
Locale-keyed string map\
\
**Example:** `{"en_US":"Hello"}`\
\
*   \]\
    \
\
**predefinedField**string\
\
Predefined field identifier\
\
**Example:** `FIRST_NAME`\
\
*   \]
    

**description** object

Form description

**localized**objectrequired

Locale-keyed string map

**Example:** `{"en_US":"Hello"}`

**headline** objectrequired

Form headline

**localized**objectrequired

Locale-keyed string map

**Example:** `{"en_US":"Hello"}`

**postSubmissionInfo** objectrequired

Post-submission info

**message** objectrequired

Thank-you message

**localized**objectrequired

Locale-keyed string map

**Example:** `{"en_US":"Hello"}`

**callToAction** objectrequired

Post-submission call to action

**callToActionTarget** objectrequired

Call to action target

**landingPageUrl**stringrequired

Landing page URL

**Example:** `https://example.com/thank-you`

**callToActionLabel**stringrequired

Call to action label

**Possible values:** \[`VISIT_COMPANY_WEBSITE`, `DOWNLOAD_NOW`, `TRY_NOW`, `VIEW_NOW`, `LEARN_MORE`\]

**Example:** `LEARN_MORE`

**legalInfo** objectrequired

Legal information

**consents** object\[\]required

Consent entries

*   Array \[\
    \
\
**checkRequired**booleanrequired\
\
Whether consent checkbox is required\
\
**Example:** `true`\
\
**id**numberrequired\
\
Consent identifier\
\
**Example:** `1`\
\
**consent** objectrequired\
\
Consent text\
\
**localized**objectrequired\
\
Locale-keyed string map\
\
**Example:** `{"en_US":"Hello"}`\
\
*   \]
    

**privacyPolicyUrl**stringrequired

Privacy policy URL

**Example:** `https://example.com/privacy`

**legalDisclaimer** object

Legal disclaimer text

**localized**objectrequired

Locale-keyed string map

**Example:** `{"en_US":"Hello"}`

**hiddenFields** object\[\]

Hidden fields

*   Array \[\
    \
\
**name**stringrequired\
\
Field name\
\
**Example:** `utm_source`\
\
**value**stringrequired\
\
Field value\
\
**Example:** `linkedin`\
\
*   \]
    

    {  "owner": {    "sponsoredAccount": "urn:li:sponsoredAccount:123456"  },  "creationLocale": {    "country": "US",    "language": "en"  },  "name": "Contact Us",  "state": "PUBLISHED",  "content": {    "questions": [],    "headline": {      "localized": {        "en_US": "Get in touch"      }    },    "postSubmissionInfo": {},    "legalInfo": {}  },  "hiddenFields": [    {      "name": "utm_source",      "value": "linkedin"    }  ]}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-create-lead-form#responses "Direct link to Responses")

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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/linkedin/:accountId/form?locationId=HChooFuiyPpVYzeJ4HMe&isDraft=true' \-H 'Content-Type: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>' \-d '{  "owner": {    "sponsoredAccount": "urn:li:sponsoredAccount:123456"  },  "creationLocale": {    "country": "US",    "language": "en"  },  "name": "Contact Us",  "state": "PUBLISHED",  "content": {    "questions": [      {        "question": {          "localized": {            "en_US": "First name"          }        },        "name": "firstName",        "questionDetails": {          "textQuestionDetails": {}        }      }    ],    "description": {      "localized": {        "en_US": "Hello"      }    },    "headline": {      "localized": {        "en_US": "Hello"      }    },    "postSubmissionInfo": {      "message": {        "localized": {          "en_US": "Hello"        }      },      "callToAction": {        "callToActionTarget": {          "landingPageUrl": "https://example.com/thank-you"        },        "callToActionLabel": "LEARN_MORE"      }    },    "legalInfo": {      "consents": [        {          "checkRequired": true,          "id": 1,          "consent": {            "localized": {              "en_US": "I agree to terms"            }          }        }      ],      "privacyPolicyUrl": "https://example.com/privacy",      "legalDisclaimer": {        "localized": {          "en_US": "Hello"        }      }    }  },  "hiddenFields": [    {      "name": "utm_source",      "value": "linkedin"    }  ]}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

Version — headerrequired\---2021-07-28

Show optional parameters

isDraft — query\---truefalse

Body required

{
  "owner": {    "sponsoredAccount": "urn:li:sponsoredAccount:123456"  },  "creationLocale": {    "country": "US",    "language": "en"  },  "name": "Contact Us",  "state": "PUBLISHED",  "content": {    "questions": \[      {        "question": {          "localized": {            "en_US": "First name"          }        },        "name": "firstName",        "questionDetails": {          "textQuestionDetails": {}        }      }    \],    "description": {      "localized": {        "en_US": "Hello"      }    },    "headline": {      "localized": {        "en_US": "Hello"      }    },    "postSubmissionInfo": {      "message": {        "localized": {          "en_US": "Hello"        }      },      "callToAction": {        "callToActionTarget": {          "landingPageUrl": "https://example.com/thank-you"        },        "callToActionLabel": "LEARN_MORE"      }    },    "legalInfo": {      "consents": \[        {          "checkRequired": true,          "id": 1,          "consent": {            "localized": {              "en_US": "I agree to terms"            }          }        }      \],      "privacyPolicyUrl": "https://example.com/privacy",      "legalDisclaimer": {        "localized": {          "en_US": "Hello"        }      }    }  },  "hiddenFields": \[    {      "name": "utm_source",      "value": "linkedin"    }  \]
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
