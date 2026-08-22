# Patch Chat Widget

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/chat-widget/patch-chat-widget
- **Summary:** Partial update of a chat widget resource.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/chat-widget/patch-chat-widget#__docusaurus_skipToContent_fallback)

Version: v3

Patch Chat Widget
=================

PATCH 

https://services.leadconnectorhq.com/chat-widget/data/:locationId/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Partial update of a chat widget resource.

### Requirements

#### Scope(s)

`chat-widget.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/chat-widget/patch-chat-widget#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**id** stringrequired

The chat widget ID

**Example:** `ve9EPM428h8vShlRWsss`

**locationId** stringrequired

The location ID

**Example:** `ve9EPM428h8vShlRWsss`

*   application/json

*   Body
*   Example

### Body**required**

**version**number

Version

**Example:** `2`

**chatType**string

Chat type

**Possible values:** \[`liveChat`, `emailChat`\]

**Example:** `emailChat`

**name**string

Name

**Example:** `Chat Widget 1`

**default**boolean

Default

**Example:** `false`

**settings** object

Settings

**acknowledgementDetails** object

Acknowledgement Details

**icon**string

Icon

**Example:** `check`

**placeholderColor**string

Placeholder color

**Example:** `#000`

**liveChatIcon**string

Icon for live chat

**Example:** `check`

**liveChatPlaceholderColor**string

Placeholder color for live chat

**Example:** `#000`

**agencyName**string

Name of the agency

**Example:** `Example Agency`

**agencyWebsite**string

Website URL of the agency

**Example:** `https://example.com`

**allowAvatarImage**boolean

Allow avatar image

**Example:** `true`

**autoCountryCode**boolean

Boolean indicating whether to automatically detect country code

**Example:** `true`

**countryCode**string

Country code

**Example:** `US`

**chatType**stringrequired

Chat Type

**Example:** `emailChat`

**promptType**string

Prompt Type

**Example:** `avatar`

**chatIcon**stringrequired

Message Chat Circle

**Example:** `messageChatCircle`

**enableRevisitMessage**boolean

Boolean indicating whether to enable a revisit message

**Example:** `true`

**heading**string

Heading text

**Example:** `Welcome to Our Website`

**legalMsg**string

Legal message

**Example:** `By using this website, you agree to our terms and conditions.`

**liveChatAckMsg**string

Message acknowledging a live chat

**Example:** `Thank you for reaching out. How may I assist you today?`

**liveChatEndedMsg**string

Message indicating the end of a live chat

**Example:** `Thank you for chatting with us. Have a great day!`

**liveChatFeedbackMsg**string

Message asking for feedback after a live chat

**Example:** `We would appreciate your feedback. Please rate your experience.`

**liveChatFeedbackNote**string

Note regarding live chat feedback

**Example:** `Your feedback helps us improve our services.`

**liveChatIntroMsg**string

Introduction message for a live chat

**Example:** `Hello! Welcome to our live chat support. How can I assist you today?`

**liveChatUserInactiveMsg**string

Message for inactive users during a live chat

**Example:** `Are you still there? Please let us know if you need assistance.`

**liveChatUserInactiveTime**string

Time for considering a user inactive during a live chat

**Example:** `5 minutes`

**liveChatVisitorInactiveMsg**string

Message for inactive visitors during a live chat

**Example:** `Looks like you stepped away. Feel free to return whenever you need help.`

**liveChatVisitorInactiveTime**string

Time for considering a visitor inactive during a live chat

**Example:** `10 minutes`

**locale**string

Locale setting

**Example:** `en_US`

**promptAvatar**string

Avatar for prompts

**Example:** `avatar.jpg`

**promptAvatarAltText**string

Prompt Avatar Alt Text

**Example:** `company logo`

**isPromptAvatarImageOptimize**boolean

Avatar Image Optimization

**Example:** `false`

**promptMsg**string

Prompt message

**Example:** `Need assistance? Feel free to ask us anything!`

**revisitPromptMsg**string

Message for revisiting prompts

**Example:** `Welcome back! How can we help you today?`

**sendActionText**string

Text for send action

**Example:** `Send`

**showAgencyBranding**boolean

Boolean indicating whether to show agency branding

**Example:** `true`

**showConsentCheckbox**boolean

Boolean indicating whether to show a consent checkbox

**Example:** `true`

**showLiveChatWelcomeMsg**boolean

Boolean indicating whether to show a welcome message for live chat

**Example:** `true`

**showPrompt**boolean

Boolean indicating whether to show prompts

**Example:** `true`

**subHeading**string

Subheading text

**Example:** `We are here to help you!`

**successMsg**string

Success message

**Example:** `Your message has been sent successfully.`

**supportContact**string

Contact information for support

**Example:** `support@example.com`

**thankYouMsg**string

Thank you message

**Example:** `Thank you for visiting our website!`

**theme** object

Theme

**name**string

Theme Name

**Example:** `theme1`

**colors** object

Custom Color Options

**chatBubbleColor**string

Chat Bubble Color

**Example:** `#fffff`

**backgroundColor**string

Background Color

**Example:** `#fffff`

**headerColor**string

Header Color

**Example:** `#fffff`

**buttonColor**string

Button Color

**Example:** `#fffff`

**avatarBackgroundColor**string

Avatar Background Color

**Example:** `#fffff`

**avatarBorderColor**string

Avatar Border Color

**Example:** `#fffff`

**senderMessageColor**string

Sender Message Color

**Example:** `#fffff`

**receivedMessageColor**string

Received Message Color

**Example:** `#fffff`

**useEmailField**boolean

Boolean indicating whether to use an email field

**Example:** `true`

**waNumber**string

WhatsApp number

**Example:** `+1234567890`

**widgetPrimaryColor**string

Primary color for the widget

**Example:** `#4285F4`

**representativeAssignedMessage**string

Representative Assigned Message

**Example:** `#4285F4`

**dimensions** object

Customizations

**position**string

Position

**Example:** `left`

**sizes** object

Typography Color Options

**width**number

Width

**Example:** `360`

**height**number

Height

**Example:** `360`

**advanceSettings** object

Advance Settings

**brandingTitle**string

Branding Title

**Example:** `Agency`

**redirect** object

Redirect Object

**redirectAction**boolean

Redirect Action

**Example:** `false`

**redirectWebsite**string

Redirect Website

**Example:** `www.gohighlevel.com`

**redirectText**string

Redirect Text

**Example:** `Click here`

**enableContactForm**boolean

Boolean for showing contact form at start

**Example:** `true`

**defaultConsentCheck**boolean

By default consent check for contact form

**Example:** `true`

**businessOfficeHours** object

Business Office Hours

**enableBusinessHours**boolean

Enable Business Hours

**Example:** `false`

**openHours**string\[\]

Open hours schedule

**Example:** `[{"day":"monday","openHour":"09:00","closeHour":"17:00"}]`

**timezone**string

Time Zone

**Example:** `UTC`

**outsideOfficeHoursWelcomeMsg**string

Time Zone

**Example:** `Asia/Calcutta`

**contactFormOptions**string\[\]

Contact form field configuration

**Example:** `[{"label":"Email","value":"email","dataType":"STANDARD_FIELD","required":true}]`

**allInOneChatTypes**string\[\]

Chat types included in the all-in-one widget

**Possible values:** \[`liveChat`, `waChat`, `emailChat`, `allInOneChat`, `voiceAiChat`, `facebookChat`, `instagramChat`, `webChat`\]

**Example:** `["liveChat","waChat"]`

**allInOneInitialMsg**string

All In One Initial Msg

**Example:** `Choose a chat option to get started.`

**contactFormIntroMessage**string

Contact Form Intro Message

**Example:** `Please share contact details`

**contactFormSystemMessage**string

Contact Form System Message

**Example:** `Please share contact details`

**prefilledMessageText**string

Prefilled Message Text

**Example:** `I want to know more`

**voiceAiAgent**object

Voice AI Agent

**Example:** `{}`

**fbPage** object

Facebook Page

**facebookPageId**string

Facebook Page ID

**Example:** `1234567890`

**facebookPageName**string

Facebook Page Name

**Example:** `Facebook Page Name`

**instagramPage** object

Instagram Page

**facebookPageId**string

Facebook Page ID

**Example:** `1234567890`

**facebookPageName**string

Facebook Page Name

**Example:** `Facebook Page Name`

**instagramPageId**string

Instagram Page ID

**Example:** `1234567890`

**instagramUsername**string

Instagram UserName

**Example:** `Instagram UserName`

**playNotificationSound**boolean

Play Notification Sound

**Example:** `false`

**voiceAiSendActionText**string

Voice Ai Send Action Text

**Example:** `Call Now`

**aTwoPCompliance** object

A2P Compliance

**enableA2PCompliance**boolean

Enable A2P Compliance

**Example:** `true`

**a2pOptInForm1**string

A2P Opt In Form 1

**Example:** `I agree to receive marketing communications from [business name]`

**a2pOptInForm1ShowCheckbox**boolean

Show checkbox for A2P Opt In Form 1

**Example:** `true`

**a2pOptInForm1PreChecked**boolean

Pre-checked state for A2P Opt In Form 1 checkbox

**Example:** `false`

**isA2POptInForm2**boolean

Is A2P Opt In Form 2

**Example:** `true`

**a2pOptInForm2**string

A2P Opt In Form 2

**Example:** `I agree to receive marketing communications from [business name]`

**a2pOptInForm2ShowCheckbox**boolean

Show checkbox for A2P Opt In Form 2

**Example:** `true`

**a2pOptInForm2PreChecked**boolean

Pre-checked state for A2P Opt In Form 2 checkbox

**Example:** `false`

**privacyPolicyLink**string

Privacy Policy Link

**Example:** `https://example.com/privacy-policy`

**termsOfServiceLink**string

Terms of Service

**Example:** `https://example.com/terms-of-service`

**isA2POptInForm1**boolean

Is A2P Opt In Form 1 enabled

**Example:** `true`

**messageType**string

Message Type

**Example:** `A2P`

**locationCountryCode**string

Location Country Code

**Example:** `US`

**widgetId**string

Widget Id

**Example:** `92929283937922`

**widgetPlacement**string

Widget Placement

**Example:** `embedded`

    {  "settings": {    "chatType": "emailChat"  }}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/chat-widget/patch-chat-widget#responses "Direct link to Responses")

*   200
*   400
*   401
*   403
*   404
*   422

Success

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

Unauthorized

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `401`

**message**string

**Example:** `Invalid token: access token is invalid`

**error**string

**Example:** `Unauthorized`

    {  "statusCode": 401,  "message": "Invalid token: access token is invalid",  "error": "Unauthorized"}

The token does not have access to this location

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `403`

**message**string

**Example:** `You do not have permission to access this resource`

**error**string

**Example:** `Forbidden`

    {  "statusCode": 403,  "message": "You do not have permission to access this resource",  "error": "Forbidden"}

Not Found

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `404`

**message**string

**Example:** `Conversation id, contact id, workflow id, or campaign id not given`

    {  "statusCode": 404,  "message": "Conversation id, contact id, workflow id, or campaign id not given"}

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

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/chat-widget/chat-widget-api#authentication)
**type:** http**scopes:** `chat-widget.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X PATCH 'https://services.leadconnectorhq.com/chat-widget/data/ve9EPM428h8vShlRWsss/ve9EPM428h8vShlRWsss' \-H 'Content-Type: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \--data-raw '{  "version": 2,  "chatType": "emailChat",  "name": "Chat Widget 1",  "default": false,  "settings": {    "acknowledgementDetails": {      "icon": "check",      "placeholderColor": "#000",      "liveChatIcon": "check",      "liveChatPlaceholderColor": "#000"    },    "agencyName": "Example Agency",    "agencyWebsite": "https://example.com",    "allowAvatarImage": true,    "autoCountryCode": true,    "countryCode": "US",    "chatType": "emailChat",    "promptType": "avatar",    "chatIcon": "messageChatCircle",    "enableRevisitMessage": true,    "heading": "Welcome to Our Website",    "legalMsg": "By using this website, you agree to our terms and conditions.",    "liveChatAckMsg": "Thank you for reaching out. How may I assist you today?",    "liveChatEndedMsg": "Thank you for chatting with us. Have a great day!",    "liveChatFeedbackMsg": "We would appreciate your feedback. Please rate your experience.",    "liveChatFeedbackNote": "Your feedback helps us improve our services.",    "liveChatIntroMsg": "Hello! Welcome to our live chat support. How can I assist you today?",    "liveChatUserInactiveMsg": "Are you still there? Please let us know if you need assistance.",    "liveChatUserInactiveTime": "5 minutes",    "liveChatVisitorInactiveMsg": "Looks like you stepped away. Feel free to return whenever you need help.",    "liveChatVisitorInactiveTime": "10 minutes",    "locale": "en_US",    "promptAvatar": "avatar.jpg",    "promptAvatarAltText": "company logo",    "isPromptAvatarImageOptimize": false,    "promptMsg": "Need assistance? Feel free to ask us anything!",    "revisitPromptMsg": "Welcome back! How can we help you today?",    "sendActionText": "Send",    "showAgencyBranding": true,    "showConsentCheckbox": true,    "showLiveChatWelcomeMsg": true,    "showPrompt": true,    "subHeading": "We are here to help you!",    "successMsg": "Your message has been sent successfully.",    "supportContact": "support@example.com",    "thankYouMsg": "Thank you for visiting our website!",    "theme": {      "name": "theme1",      "colors": {        "chatBubbleColor": "#fffff",        "backgroundColor": "#fffff",        "headerColor": "#fffff",        "buttonColor": "#fffff",        "avatarBackgroundColor": "#fffff",        "avatarBorderColor": "#fffff",        "senderMessageColor": "#fffff",        "receivedMessageColor": "#fffff"      }    },    "useEmailField": true,    "waNumber": "+1234567890",    "widgetPrimaryColor": "#4285F4",    "representativeAssignedMessage": "#4285F4",    "dimensions": {      "position": "left",      "sizes": {        "width": 360,        "height": 360      }    },    "advanceSettings": {      "brandingTitle": "Agency",      "redirect": {        "redirectAction": false,        "redirectWebsite": "www.gohighlevel.com",        "redirectText": "Click here"      },      "enableContactForm": true,      "defaultConsentCheck": true,      "businessOfficeHours": {        "enableBusinessHours": false,        "openHours": [          {            "day": "monday",            "openHour": "09:00",            "closeHour": "17:00"          }        ],        "timezone": "UTC",        "outsideOfficeHoursWelcomeMsg": "Asia/Calcutta"      },      "contactFormOptions": [        {          "label": "Email",          "value": "email",          "dataType": "STANDARD_FIELD",          "required": true        }      ],      "allInOneChatTypes": [        "liveChat",        "waChat"      ],      "allInOneInitialMsg": "Choose a chat option to get started.",      "contactFormIntroMessage": "Please share contact details",      "contactFormSystemMessage": "Please share contact details",      "prefilledMessageText": "I want to know more",      "voiceAiAgent": {},      "fbPage": {        "facebookPageId": "1234567890",        "facebookPageName": "Facebook Page Name"      },      "instagramPage": {        "facebookPageId": "1234567890",        "facebookPageName": "Facebook Page Name",        "instagramPageId": "1234567890",        "instagramUsername": "Instagram UserName"      },      "playNotificationSound": false,      "voiceAiSendActionText": "Call Now",      "aTwoPCompliance": {        "enableA2PCompliance": true,        "a2pOptInForm1": "I agree to receive marketing communications from [business name]",        "a2pOptInForm1ShowCheckbox": true,        "a2pOptInForm1PreChecked": false,        "isA2POptInForm2": true,        "a2pOptInForm2": "I agree to receive marketing communications from [business name]",        "a2pOptInForm2ShowCheckbox": true,        "a2pOptInForm2PreChecked": false,        "privacyPolicyLink": "https://example.com/privacy-policy",        "termsOfServiceLink": "https://example.com/terms-of-service",        "isA2POptInForm1": true,        "messageType": "A2P"      }    },    "locationCountryCode": "US",    "widgetId": "92929283937922",    "widgetPlacement": "embedded"  }}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

id — pathrequired

locationId — pathrequired

Version — headerrequired\---v3

Body required

*   Example (from schema)
*   Example

{
  "version": 2,  "chatType": "emailChat",  "name": "Chat Widget 1",  "default": false,  "settings": {    "acknowledgementDetails": {      "icon": "check",      "placeholderColor": "#000",      "liveChatIcon": "check",      "liveChatPlaceholderColor": "#000"    },    "agencyName": "Example Agency",    "agencyWebsite": "https://example.com",    "allowAvatarImage": true,    "autoCountryCode": true,    "countryCode": "US",    "chatType": "emailChat",    "promptType": "avatar",    "chatIcon": "messageChatCircle",    "enableRevisitMessage": true,    "heading": "Welcome to Our Website",    "legalMsg": "By using this website, you agree to our terms and conditions.",    "liveChatAckMsg": "Thank you for reaching out. How may I assist you today?",    "liveChatEndedMsg": "Thank you for chatting with us. Have a great day!",    "liveChatFeedbackMsg": "We would appreciate your feedback. Please rate your experience.",    "liveChatFeedbackNote": "Your feedback helps us improve our services.",    "liveChatIntroMsg": "Hello! Welcome to our live chat support. How can I assist you today?",    "liveChatUserInactiveMsg": "Are you still there? Please let us know if you need assistance.",    "liveChatUserInactiveTime": "5 minutes",    "liveChatVisitorInactiveMsg": "Looks like you stepped away. Feel free to return whenever you need help.",    "liveChatVisitorInactiveTime": "10 minutes",    "locale": "en_US",    "promptAvatar": "avatar.jpg",    "promptAvatarAltText": "company logo",    "isPromptAvatarImageOptimize": false,    "promptMsg": "Need assistance? Feel free to ask us anything!",    "revisitPromptMsg": "Welcome back! How can we help you today?",    "sendActionText": "Send",    "showAgencyBranding": true,    "showConsentCheckbox": true,    "showLiveChatWelcomeMsg": true,    "showPrompt": true,    "subHeading": "We are here to help you!",    "successMsg": "Your message has been sent successfully.",    "supportContact": "support@example.com",    "thankYouMsg": "Thank you for visiting our website!",    "theme": {      "name": "theme1",      "colors": {        "chatBubbleColor": "#fffff",        "backgroundColor": "#fffff",        "headerColor": "#fffff",        "buttonColor": "#fffff",        "avatarBackgroundColor": "#fffff",        "avatarBorderColor": "#fffff",        "senderMessageColor": "#fffff",        "receivedMessageColor": "#fffff"      }    },    "useEmailField": true,    "waNumber": "+1234567890",    "widgetPrimaryColor": "#4285F4",    "representativeAssignedMessage": "#4285F4",    "dimensions": {      "position": "left",      "sizes": {        "width": 360,        "height": 360      }    },    "advanceSettings": {      "brandingTitle": "Agency",      "redirect": {        "redirectAction": false,        "redirectWebsite": "www.gohighlevel.com",        "redirectText": "Click here"      },      "enableContactForm": true,      "defaultConsentCheck": true,      "businessOfficeHours": {        "enableBusinessHours": false,        "openHours": \[          {            "day": "monday",            "openHour": "09:00",            "closeHour": "17:00"          }        \],        "timezone": "UTC",        "outsideOfficeHoursWelcomeMsg": "Asia/Calcutta"      },      "contactFormOptions": \[        {          "label": "Email",          "value": "email",          "dataType": "STANDARD_FIELD",          "required": true        }      \],      "allInOneChatTypes": \[        "liveChat",        "waChat"      \],      "allInOneInitialMsg": "Choose a chat option to get started.",      "contactFormIntroMessage": "Please share contact details",      "contactFormSystemMessage": "Please share contact details",      "prefilledMessageText": "I want to know more",      "voiceAiAgent": {},      "fbPage": {        "facebookPageId": "1234567890",        "facebookPageName": "Facebook Page Name"      },      "instagramPage": {        "facebookPageId": "1234567890",        "facebookPageName": "Facebook Page Name",        "instagramPageId": "1234567890",        "instagramUsername": "Instagram UserName"      },      "playNotificationSound": false,      "voiceAiSendActionText": "Call Now",      "aTwoPCompliance": {        "enableA2PCompliance": true,        "a2pOptInForm1": "I agree to receive marketing communications from \[business name\]",        "a2pOptInForm1ShowCheckbox": true,        "a2pOptInForm1PreChecked": false,        "isA2POptInForm2": true,        "a2pOptInForm2": "I agree to receive marketing communications from \[business name\]",        "a2pOptInForm2ShowCheckbox": true,        "a2pOptInForm2PreChecked": false,        "privacyPolicyLink": "https://example.com/privacy-policy",        "termsOfServiceLink": "https://example.com/terms-of-service",        "isA2POptInForm1": true,        "messageType": "A2P"      }    },    "locationCountryCode": "US",    "widgetId": "92929283937922",    "widgetPlacement": "embedded"  }
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
