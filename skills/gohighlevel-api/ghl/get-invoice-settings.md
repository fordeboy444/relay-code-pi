# Get Invoice Settings

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/invoices/get-invoice-settings
- **Summary:** Get the invoice settings for the given location

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/invoices/get-invoice-settings#__docusaurus_skipToContent_fallback)

Version: v3

Get Invoice Settings
====================

GET 

https://services.leadconnectorhq.com/invoices/settings

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get the invoice settings for the given location

### Requirements

#### Scope(s)

`invoices.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token``Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/invoices/get-invoice-settings#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**altId** stringrequired

Location Id or Agency Id

**Example:** `6578278e879ad2646715ba9c`

**altType** stringrequired

**Possible values:** \[`location`\]

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/invoices/get-invoice-settings#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**altId**string

Sub-Account Id

**Example:** `6578278e879ad2646715ba9c`

**altType**string

Alt Type

**Possible values:** \[`location`\]

**Example:** `location`

**termsNote**string

Terms and conditions for invoices

**Example:** `Payment is due within 30 days.`

**estimatesTermsNote**string

Terms and conditions for estimates

**Example:** `This estimate is valid for 30 days.`

**title**string

Title for invoices

**Possible values:** `<= 40 characters`

**Example:** `INVOICE`

**estimatesTitle**string

Title for estimates

**Possible values:** `<= 40 characters`

**Example:** `ESTIMATE`

**invoiceNumberPrefix**string

Prefix for invoice numbers

**Possible values:** `<= 10 characters`

**Example:** `INV-`

**estimateNumberPrefix**string

Prefix for estimate numbers

**Possible values:** `<= 10 characters`

**Example:** `EST-`

**dueAfterXDays**number

Number of days after which invoice is due

**Example:** `30`

**estimatesExpireAfterXDays**number

Number of days after which estimate expires

**Example:** `30`

**minimumPercentagePartialPayment**number

Minimum percentage for partial payment

**Example:** `25`

**customFields**string\[\]

Custom fields array

**Possible values:** `<= 3`

**Example:** `["6578278e879ad2646715baxc","6901e9fb77ac4d701ba0b996"]`

**customNotification** object

Custom notification settings

**customerSendInvoice** objectrequired

**enabled**booleanrequired

Flag indicating if the notification is enabled or not

**emailTemplate**stringrequired

Template to be used for sending email

**smsTemplate**stringrequired

Template to be used for sending sms

**fromName**string

Name to be used while sending email

**Example:** `Alex`

**fromEmail**string

Email address to be used for sending email

**Example:** `alex@example.com`

**emailSubject**string

Subject of email which is sent out

**Example:** `Thank you for purchasing`

**defaultEmailTemplateId**string

Default email TemplateId to be used for sending via email

**Example:** `dhwjqi2899012990w2u`

**teamPaymentSuccess** objectrequired

**enabled**booleanrequired

Flag indicating if the notification is enabled or not

**emailTemplate**stringrequired

Template to be used for sending email

**smsTemplate**stringrequired

Template to be used for sending sms

**fromName**string

Name to be used while sending email

**Example:** `Alex`

**fromEmail**string

Email address to be used for sending email

**Example:** `alex@example.com`

**emailSubject**string

Subject of email which is sent out

**Example:** `Thank you for purchasing`

**defaultEmailTemplateId**string

Default email TemplateId to be used for sending via email

**Example:** `dhwjqi2899012990w2u`

**customerPaymentSuccess** objectrequired

**enabled**booleanrequired

Flag indicating if the notification is enabled or not

**emailTemplate**stringrequired

Template to be used for sending email

**smsTemplate**stringrequired

Template to be used for sending sms

**fromName**string

Name to be used while sending email

**Example:** `Alex`

**fromEmail**string

Email address to be used for sending email

**Example:** `alex@example.com`

**emailSubject**string

Subject of email which is sent out

**Example:** `Thank you for purchasing`

**defaultEmailTemplateId**string

Default email TemplateId to be used for sending via email

**Example:** `dhwjqi2899012990w2u`

**teamAutoPaymentSuccess** objectrequired

**enabled**booleanrequired

Flag indicating if the notification is enabled or not

**emailTemplate**stringrequired

Template to be used for sending email

**smsTemplate**stringrequired

Template to be used for sending sms

**fromName**string

Name to be used while sending email

**Example:** `Alex`

**fromEmail**string

Email address to be used for sending email

**Example:** `alex@example.com`

**emailSubject**string

Subject of email which is sent out

**Example:** `Thank you for purchasing`

**defaultEmailTemplateId**string

Default email TemplateId to be used for sending via email

**Example:** `dhwjqi2899012990w2u`

**customerAutoPaymentSuccess** objectrequired

**enabled**booleanrequired

Flag indicating if the notification is enabled or not

**emailTemplate**stringrequired

Template to be used for sending email

**smsTemplate**stringrequired

Template to be used for sending sms

**fromName**string

Name to be used while sending email

**Example:** `Alex`

**fromEmail**string

Email address to be used for sending email

**Example:** `alex@example.com`

**emailSubject**string

Subject of email which is sent out

**Example:** `Thank you for purchasing`

**defaultEmailTemplateId**string

Default email TemplateId to be used for sending via email

**Example:** `dhwjqi2899012990w2u`

**teamPaymentFailure** objectrequired

**enabled**booleanrequired

Flag indicating if the notification is enabled or not

**emailTemplate**stringrequired

Template to be used for sending email

**smsTemplate**stringrequired

Template to be used for sending sms

**fromName**string

Name to be used while sending email

**Example:** `Alex`

**fromEmail**string

Email address to be used for sending email

**Example:** `alex@example.com`

**emailSubject**string

Subject of email which is sent out

**Example:** `Thank you for purchasing`

**defaultEmailTemplateId**string

Default email TemplateId to be used for sending via email

**Example:** `dhwjqi2899012990w2u`

**customerPaymentFailure** objectrequired

**enabled**booleanrequired

Flag indicating if the notification is enabled or not

**emailTemplate**stringrequired

Template to be used for sending email

**smsTemplate**stringrequired

Template to be used for sending sms

**fromName**string

Name to be used while sending email

**Example:** `Alex`

**fromEmail**string

Email address to be used for sending email

**Example:** `alex@example.com`

**emailSubject**string

Subject of email which is sent out

**Example:** `Thank you for purchasing`

**defaultEmailTemplateId**string

Default email TemplateId to be used for sending via email

**Example:** `dhwjqi2899012990w2u`

**teamAutoPaymentFailure** objectrequired

**enabled**booleanrequired

Flag indicating if the notification is enabled or not

**emailTemplate**stringrequired

Template to be used for sending email

**smsTemplate**stringrequired

Template to be used for sending sms

**fromName**string

Name to be used while sending email

**Example:** `Alex`

**fromEmail**string

Email address to be used for sending email

**Example:** `alex@example.com`

**emailSubject**string

Subject of email which is sent out

**Example:** `Thank you for purchasing`

**defaultEmailTemplateId**string

Default email TemplateId to be used for sending via email

**Example:** `dhwjqi2899012990w2u`

**customerAutoPaymentFailure** objectrequired

**enabled**booleanrequired

Flag indicating if the notification is enabled or not

**emailTemplate**stringrequired

Template to be used for sending email

**smsTemplate**stringrequired

Template to be used for sending sms

**fromName**string

Name to be used while sending email

**Example:** `Alex`

**fromEmail**string

Email address to be used for sending email

**Example:** `alex@example.com`

**emailSubject**string

Subject of email which is sent out

**Example:** `Thank you for purchasing`

**defaultEmailTemplateId**string

Default email TemplateId to be used for sending via email

**Example:** `dhwjqi2899012990w2u`

**customerAutoPaymentInfo** objectrequired

**enabled**booleanrequired

Flag indicating if the notification is enabled or not

**emailTemplate**stringrequired

Template to be used for sending email

**smsTemplate**stringrequired

Template to be used for sending sms

**fromName**string

Name to be used while sending email

**Example:** `Alex`

**fromEmail**string

Email address to be used for sending email

**Example:** `alex@example.com`

**emailSubject**string

Subject of email which is sent out

**Example:** `Thank you for purchasing`

**defaultEmailTemplateId**string

Default email TemplateId to be used for sending via email

**Example:** `dhwjqi2899012990w2u`

**customerAutoPaymentAmountChanged** objectrequired

**enabled**booleanrequired

Flag indicating if the notification is enabled or not

**emailTemplate**stringrequired

Template to be used for sending email

**smsTemplate**stringrequired

Template to be used for sending sms

**fromName**string

Name to be used while sending email

**Example:** `Alex`

**fromEmail**string

Email address to be used for sending email

**Example:** `alex@example.com`

**emailSubject**string

Subject of email which is sent out

**Example:** `Thank you for purchasing`

**defaultEmailTemplateId**string

Default email TemplateId to be used for sending via email

**Example:** `dhwjqi2899012990w2u`

**teamAutoPaymentSkip** objectrequired

**enabled**booleanrequired

Flag indicating if the notification is enabled or not

**emailTemplate**stringrequired

Template to be used for sending email

**smsTemplate**stringrequired

Template to be used for sending sms

**fromName**string

Name to be used while sending email

**Example:** `Alex`

**fromEmail**string

Email address to be used for sending email

**Example:** `alex@example.com`

**emailSubject**string

Subject of email which is sent out

**Example:** `Thank you for purchasing`

**defaultEmailTemplateId**string

Default email TemplateId to be used for sending via email

**Example:** `dhwjqi2899012990w2u`

**teamRecurringSendInvoiceFailed** objectrequired

**enabled**booleanrequired

Flag indicating if the notification is enabled or not

**emailTemplate**stringrequired

Template to be used for sending email

**smsTemplate**stringrequired

Template to be used for sending sms

**fromName**string

Name to be used while sending email

**Example:** `Alex`

**fromEmail**string

Email address to be used for sending email

**Example:** `alex@example.com`

**emailSubject**string

Subject of email which is sent out

**Example:** `Thank you for purchasing`

**defaultEmailTemplateId**string

Default email TemplateId to be used for sending via email

**Example:** `dhwjqi2899012990w2u`

**customerSendEstimate** objectrequired

**enabled**booleanrequired

Flag indicating if the notification is enabled or not

**emailTemplate**stringrequired

Template to be used for sending email

**smsTemplate**stringrequired

Template to be used for sending sms

**fromName**string

Name to be used while sending email

**Example:** `Alex`

**fromEmail**string

Email address to be used for sending email

**Example:** `alex@example.com`

**emailSubject**string

Subject of email which is sent out

**Example:** `Thank you for purchasing`

**defaultEmailTemplateId**string

Default email TemplateId to be used for sending via email

**Example:** `dhwjqi2899012990w2u`

**teamEstimateAccepted** objectrequired

**enabled**booleanrequired

Flag indicating if the notification is enabled or not

**emailTemplate**stringrequired

Template to be used for sending email

**smsTemplate**stringrequired

Template to be used for sending sms

**fromName**string

Name to be used while sending email

**Example:** `Alex`

**fromEmail**string

Email address to be used for sending email

**Example:** `alex@example.com`

**emailSubject**string

Subject of email which is sent out

**Example:** `Thank you for purchasing`

**defaultEmailTemplateId**string

Default email TemplateId to be used for sending via email

**Example:** `dhwjqi2899012990w2u`

**teamEstimateDeclined** objectrequired

**enabled**booleanrequired

Flag indicating if the notification is enabled or not

**emailTemplate**stringrequired

Template to be used for sending email

**smsTemplate**stringrequired

Template to be used for sending sms

**fromName**string

Name to be used while sending email

**Example:** `Alex`

**fromEmail**string

Email address to be used for sending email

**Example:** `alex@example.com`

**emailSubject**string

Subject of email which is sent out

**Example:** `Thank you for purchasing`

**defaultEmailTemplateId**string

Default email TemplateId to be used for sending via email

**Example:** `dhwjqi2899012990w2u`

**businessDetails** object

Business details

**logoUrl**string

**name**stringrequired

**phoneNo**string

**address** object

**addressLine1**string

**addressLine2**string

**city**string

**state**string

**countryCode**string

**Possible values:** \[`AF`, `AX`, `AL`, `DZ`, `AS`, `AD`, `AO`, `AI`, `AQ`, `AG`, `AR`, `AM`, `AW`, `AU`, `AT`, `AZ`, `BS`, `BH`, `BD`, `BB`, `BY`, `BE`, `BZ`, `BJ`, `BM`, `BT`, `BO`, `BA`, `BW`, `BV`, `BR`, `IO`, `BN`, `BG`, `BF`, `BI`, `KH`, `CM`, `CA`, `CV`, `KY`, `CF`, `TD`, `CL`, `CN`, `CX`, `CC`, `CO`, `KM`, `CG`, `CD`, `CK`, `CR`, `CI`, `HR`, `CU`, `CY`, `CZ`, `DK`, `DJ`, `DM`, `DO`, `EC`, `EG`, `SV`, `GQ`, `ER`, `EE`, `ET`, `FK`, `FO`, `FJ`, `FI`, `FR`, `GF`, `PF`, `TF`, `GA`, `GM`, `GE`, `DE`, `GH`, `GI`, `GR`, `GL`, `GD`, `GP`, `GU`, `GT`, `GG`, `GN`, `GW`, `GY`, `HT`, `HM`, `VA`, `HN`, `HK`, `HU`, `IS`, `IN`, `ID`, `IR`, `IQ`, `IE`, `IM`, `IL`, `IT`, `JM`, `JP`, `JE`, `JO`, `KZ`, `KE`, `KI`, `KP`, `KR`, `XK`, `KW`, `KG`, `LA`, `LV`, `LB`, `LS`, `LR`, `LY`, `LI`, `LT`, `LU`, `MO`, `MK`, `MG`, `MW`, `MY`, `MV`, `ML`, `MT`, `MH`, `MQ`, `MR`, `MU`, `YT`, `MX`, `FM`, `MD`, `MC`, `MN`, `ME`, `MS`, `MA`, `MZ`, `MM`, `NA`, `NR`, `NP`, `NL`, `AN`, `NC`, `NZ`, `NI`, `NE`, `NG`, `NU`, `NF`, `MP`, `NO`, `OM`, `PK`, `PW`, `PS`, `PA`, `PG`, `PY`, `PE`, `PH`, `PN`, `PL`, `PT`, `PR`, `QA`, `RE`, `RO`, `RU`, `RW`, `SH`, `KN`, `LC`, `MF`, `PM`, `VC`, `WS`, `SM`, `ST`, `SA`, `SN`, `RS`, `SC`, `SL`, `SG`, `SX`, `SK`, `SI`, `SB`, `SO`, `ZA`, `GS`, `ES`, `LK`, `SD`, `SR`, `SJ`, `SZ`, `SE`, `CH`, `SY`, `TW`, `TJ`, `TZ`, `TH`, `TL`, `TG`, `TK`, `TO`, `TT`, `TN`, `TR`, `TM`, `TC`, `TV`, `UG`, `GB`, `UA`, `AE`, `US`, `UM`, `UY`, `UZ`, `VU`, `VE`, `VN`, `VG`, `VI`, `WF`, `EH`, `YE`, `ZM`, `ZW`\]

**postalCode**string

**website**string

**customValues**string\[\]

**senderConfiguration** object

Sender configuration

**fromName**string

Sender name to be used while sending email notification

**Example:** `Alex`

**fromEmail**string

Email id to be used while sending email notification

**Example:** `alex@example.com`

**productSettings** object

Product settings

**enableImportProductDescription**boolean

Flag indicating if the product description import is enabled or not

**Example:** `true`

**descriptionOptional**boolean

Flag indicating if the product description is optional or not

**Example:** `true`

**reminderSettings** object

Reminder settings

**defaultEmailTemplateId**stringrequired

default template Id of reminder

**Example:** `dhwjqi2899012990w2u`

**reminders** object\[\]required

List of reminders

*   Array \[\
    \
\
**enabled**booleanrequired\
\
Flag indicating if the reminder is enabled or not\
\
**Example:** `true`\
\
**emailTemplate**stringrequired\
\
Email template to be used for sending reminders\
\
**Example:** `default`\
\
**smsTemplate**stringrequired\
\
SMS template to be used for sending reminders\
\
**Example:** `default`\
\
**emailSubject**stringrequired\
\
Subject of the reminder\
\
**Example:** `Reminder`\
\
**reminderId**stringrequired\
\
Unique identifier for the reminder\
\
**Example:** `9333e45f-a27d-4659-90e5-76c5ef06d094`\
\
**reminderName**stringrequired\
\
Name of the reminder\
\
**Example:** `Special Reminder`\
\
**reminderTime**stringrequired\
\
Time condition for the reminder\
\
**Possible values:** \[`before`, `after`\]\
\
**Example:** `before`\
\
**intervalType**stringrequired\
\
Interval type for the reminder\
\
**Possible values:** \[`yearly`, `monthly`, `weekly`, `daily`, `hourly`, `minutely`, `secondly`\]\
\
**Example:** `daily`\
\
**maxReminders**numberrequired\
\
Maximum number of reminders that can be sent\
\
**Example:** `3`\
\
**reminderInvoiceCondition**stringrequired\
\
Condition for sending the reminder\
\
**Possible values:** \[`invoice_sent`, `invoice_overdue`\]\
\
**Example:** `invoice_sent`\
\
**reminderNumber**numberrequired\
\
frequency gap of the reminder to exeucte\
\
**Example:** `10`\
\
**startTime**string\
\
Business Hour Start Time\
\
**Example:** `9:00 AM`\
\
**endTime**string\
\
Business Hour End Time\
\
**Example:** `5:00 PM`\
\
**timezone**string\
\
Timezone at which reminder will be sent\
\
**Example:** `businessTZ`\
\
*   \]
    

**lateFeesConfiguration** object

Late fees configuration

**enable**booleanrequired

Enable late fees

**Example:** `true`

**value**numberrequired

Late Fees Value

**Example:** `10`

**type**stringrequired

Late Fees Type

**Possible values:** \[`fixed`, `percentage`\]

**Example:** `fixed`

**frequency** objectrequired

Late Fees Frequency

**intervalCount**numberrequired

Late fees interval count

**Example:** `10`

**interval**stringrequired

Late fees interval

**Possible values:** \[`minute`, `hour`, `day`, `week`, `month`, `one_time`\]

**Example:** `day`

**grace** object

Late Fees Grace

**intervalCount**numberrequired

Late fees grace interval count

**Example:** `10`

**interval**stringrequired

Late fees grace interval

**Possible values:** \[`day`\]

**Example:** `day`

**maxLateFees** object

Max late fees payable

**type**stringrequired

**Possible values:** \[`fixed`\]

**Example:** `fixed`

**value**numberrequired

Max late fees to pay

**Example:** `10`

**tipsConfiguration** object

Tips configuration

**tipsPercentage**string\[\]required

Percentage of tips allowed

**Example:** `[5,10,15]`

**tipsEnabled**booleanrequired

Tips enabled status

**Example:** `true`

**paymentMethods** object

Payment methods configuration

**stripe** objectrequired

Payment Method

**enableBankDebitOnly**booleanrequired

Enable Bank Debit Only

**Example:** `false`

    {  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "termsNote": "Payment is due within 30 days.",  "estimatesTermsNote": "This estimate is valid for 30 days.",  "title": "INVOICE",  "estimatesTitle": "ESTIMATE",  "invoiceNumberPrefix": "INV-",  "estimateNumberPrefix": "EST-",  "dueAfterXDays": 30,  "estimatesExpireAfterXDays": 30,  "minimumPercentagePartialPayment": 25,  "customFields": [    "6578278e879ad2646715baxc",    "6901e9fb77ac4d701ba0b996"  ],  "customNotification": {    "customerSendInvoice": {      "enabled": true,      "emailTemplate": "string",      "smsTemplate": "string",      "fromName": "Alex",      "fromEmail": "alex@example.com",      "emailSubject": "Thank you for purchasing",      "defaultEmailTemplateId": "dhwjqi2899012990w2u"    },    "teamPaymentSuccess": {      "enabled": true,      "emailTemplate": "string",      "smsTemplate": "string",      "fromName": "Alex",      "fromEmail": "alex@example.com",      "emailSubject": "Thank you for purchasing",      "defaultEmailTemplateId": "dhwjqi2899012990w2u"    },    "customerPaymentSuccess": {      "enabled": true,      "emailTemplate": "string",      "smsTemplate": "string",      "fromName": "Alex",      "fromEmail": "alex@example.com",      "emailSubject": "Thank you for purchasing",      "defaultEmailTemplateId": "dhwjqi2899012990w2u"    },    "teamAutoPaymentSuccess": {      "enabled": true,      "emailTemplate": "string",      "smsTemplate": "string",      "fromName": "Alex",      "fromEmail": "alex@example.com",      "emailSubject": "Thank you for purchasing",      "defaultEmailTemplateId": "dhwjqi2899012990w2u"    },    "customerAutoPaymentSuccess": {      "enabled": true,      "emailTemplate": "string",      "smsTemplate": "string",      "fromName": "Alex",      "fromEmail": "alex@example.com",      "emailSubject": "Thank you for purchasing",      "defaultEmailTemplateId": "dhwjqi2899012990w2u"    },    "teamPaymentFailure": {      "enabled": true,      "emailTemplate": "string",      "smsTemplate": "string",      "fromName": "Alex",      "fromEmail": "alex@example.com",      "emailSubject": "Thank you for purchasing",      "defaultEmailTemplateId": "dhwjqi2899012990w2u"    },    "customerPaymentFailure": {      "enabled": true,      "emailTemplate": "string",      "smsTemplate": "string",      "fromName": "Alex",      "fromEmail": "alex@example.com",      "emailSubject": "Thank you for purchasing",      "defaultEmailTemplateId": "dhwjqi2899012990w2u"    },    "teamAutoPaymentFailure": {      "enabled": true,      "emailTemplate": "string",      "smsTemplate": "string",      "fromName": "Alex",      "fromEmail": "alex@example.com",      "emailSubject": "Thank you for purchasing",      "defaultEmailTemplateId": "dhwjqi2899012990w2u"    },    "customerAutoPaymentFailure": {      "enabled": true,      "emailTemplate": "string",      "smsTemplate": "string",      "fromName": "Alex",      "fromEmail": "alex@example.com",      "emailSubject": "Thank you for purchasing",      "defaultEmailTemplateId": "dhwjqi2899012990w2u"    },    "customerAutoPaymentInfo": {      "enabled": true,      "emailTemplate": "string",      "smsTemplate": "string",      "fromName": "Alex",      "fromEmail": "alex@example.com",      "emailSubject": "Thank you for purchasing",      "defaultEmailTemplateId": "dhwjqi2899012990w2u"    },    "customerAutoPaymentAmountChanged": {      "enabled": true,      "emailTemplate": "string",      "smsTemplate": "string",      "fromName": "Alex",      "fromEmail": "alex@example.com",      "emailSubject": "Thank you for purchasing",      "defaultEmailTemplateId": "dhwjqi2899012990w2u"    },    "teamAutoPaymentSkip": {      "enabled": true,      "emailTemplate": "string",      "smsTemplate": "string",      "fromName": "Alex",      "fromEmail": "alex@example.com",      "emailSubject": "Thank you for purchasing",      "defaultEmailTemplateId": "dhwjqi2899012990w2u"    },    "teamRecurringSendInvoiceFailed": {      "enabled": true,      "emailTemplate": "string",      "smsTemplate": "string",      "fromName": "Alex",      "fromEmail": "alex@example.com",      "emailSubject": "Thank you for purchasing",      "defaultEmailTemplateId": "dhwjqi2899012990w2u"    },    "customerSendEstimate": {      "enabled": true,      "emailTemplate": "string",      "smsTemplate": "string",      "fromName": "Alex",      "fromEmail": "alex@example.com",      "emailSubject": "Thank you for purchasing",      "defaultEmailTemplateId": "dhwjqi2899012990w2u"    },    "teamEstimateAccepted": {      "enabled": true,      "emailTemplate": "string",      "smsTemplate": "string",      "fromName": "Alex",      "fromEmail": "alex@example.com",      "emailSubject": "Thank you for purchasing",      "defaultEmailTemplateId": "dhwjqi2899012990w2u"    },    "teamEstimateDeclined": {      "enabled": true,      "emailTemplate": "string",      "smsTemplate": "string",      "fromName": "Alex",      "fromEmail": "alex@example.com",      "emailSubject": "Thank you for purchasing",      "defaultEmailTemplateId": "dhwjqi2899012990w2u"    }  },  "businessDetails": {    "logoUrl": "string",    "name": "string",    "phoneNo": "string",    "address": {      "addressLine1": "string",      "addressLine2": "string",      "city": "string",      "state": "string",      "countryCode": "AF",      "postalCode": "string"    },    "website": "string",    "customValues": [      "string"    ]  },  "senderConfiguration": {    "fromName": "Alex",    "fromEmail": "alex@example.com"  },  "productSettings": {    "enableImportProductDescription": true,    "descriptionOptional": true  },  "reminderSettings": {    "defaultEmailTemplateId": "dhwjqi2899012990w2u",    "reminders": [      {        "enabled": true,        "emailTemplate": "default",        "smsTemplate": "default",        "emailSubject": "Reminder",        "reminderId": "9333e45f-a27d-4659-90e5-76c5ef06d094",        "reminderName": "Special Reminder",        "reminderTime": "before",        "intervalType": "daily",        "maxReminders": 3,        "reminderInvoiceCondition": "invoice_sent",        "reminderNumber": 10,        "startTime": "9:00 AM",        "endTime": "5:00 PM",        "timezone": "businessTZ"      }    ]  },  "lateFeesConfiguration": {    "enable": true,    "value": 10,    "type": "fixed",    "frequency": {      "intervalCount": 10,      "interval": "day"    },    "grace": {      "intervalCount": 10,      "interval": "day"    },    "maxLateFees": {      "type": "fixed",      "value": "10"    }  },  "tipsConfiguration": {    "tipsPercentage": [      5,      10,      15    ],    "tipsEnabled": true  },  "paymentMethods": {    "stripe": {      "enableBankDebitOnly": false    }  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/invoices/invoice-api#authentication)
**type:** http**scopes:** `invoices.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/invoices/settings?altId=6578278e879ad2646715ba9c' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security SchemeLocation-AccessAgency-Access

Bearer Token

Parameters

altId — queryrequired

altType — queryrequired\---location

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
