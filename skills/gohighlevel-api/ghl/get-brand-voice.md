# Get Brand Voice

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/brand-boards/get-brand-voice
- **Summary:** Get a brand voice by ID

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/get-brand-voice#__docusaurus_skipToContent_fallback)

Version: v3New

Get Brand Voice
===============

GET 

https://services.leadconnectorhq.com/brand-boards/locations/:locationId/brand-voices/:brandVoiceId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get a brand voice by ID

### Requirements

#### Scope(s)

`brand-boards/voices.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/get-brand-voice#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location ID

**Example:** `oHJiAh0wDG3BzmzACVD6`

**brandVoiceId** stringrequired

Brand voice ID

**Example:** `507f1f77bcf86cd799439011`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/get-brand-voice#responses "Direct link to Responses")

*   200
*   400
*   401
*   403
*   404
*   422

Success

*   application/json

*   Schema
*   Example (auto)

**Schema**

**id**stringrequired

Brand voice ID

**Example:** `507f1f77bcf86cd799439011`

**name**stringrequired

Brand voice name

**Example:** `My Brand Voice`

**isDefault**booleanrequired

Whether this is the default brand voice

**Example:** `false`

**createdAt**stringrequired

Creation timestamp

**Example:** `2024-01-05T12:00:00.000Z`

**updatedAt**stringrequired

Last update timestamp

**Example:** `2024-01-05T12:00:00.000Z`

**locationId**stringrequired

Location ID

**Example:** `oHJiAh0wDG3BzmzACVD6`

**deleted**booleanrequired

Whether the brand voice has been soft deleted

**Example:** `false`

**answers** object

Brand voice answers

**brandName**string

Brand Name

**Example:** `Acme Inc`

**toneOfVoice**string

Tone of Voice

**Example:** `Professional and friendly`

**targetAudience**string

Target Audience

**Example:** `Small business owners`

**customerPainPoints**string

Customer Pain Points

**Example:** `Difficulty with time management`

**businessType**string

Business Type

**Example:** `Software Development`

**companyWebsite**string

Company Website

**Example:** `https://example.com`

**companyEmail**string

Company Email

**Example:** `contact@example.com`

**companyAddress**string

Company Address

**Example:** `123 Main St, Anytown, CA`

**phone**object

Phone Information

**Example:** `{"phoneNumber":"5551234567","countryCode":"US"}`

**businessHours**string

Business Hours

**Example:** `Mon-Fri 9am-5pm`

**brandPromise**string

Brand Promise

**Example:** `We deliver on time, every time`

**brandValues**string

Brand Values

**Example:** `Integrity, Excellence, Innovation`

**brandPurpose**string

Brand Purpose

**Example:** `To empower small businesses with technology`

**competitiveAdvantage**string

Competitive Advantage

**Example:** `Proprietary AI technology`

**risksOfInaction**string

Risks of Inaction

**Example:** `Falling behind competitors`

**uniqueSellingProposition**string

Unique Selling Proposition

**Example:** `The only solution that integrates with all major platforms`

**callToAction**string

Call to Action

**Example:** `Schedule a demo today`

**traceId**string

Trace ID of request

**Example:** `019e4ef5-a65e-4198-8cf9-8e93dca9bda4`

    {  "id": "507f1f77bcf86cd799439011",  "name": "My Brand Voice",  "isDefault": false,  "createdAt": "2024-01-05T12:00:00.000Z",  "updatedAt": "2024-01-05T12:00:00.000Z",  "locationId": "oHJiAh0wDG3BzmzACVD6",  "deleted": false,  "answers": {    "brandName": "Acme Inc",    "toneOfVoice": "Professional and friendly",    "targetAudience": "Small business owners",    "customerPainPoints": "Difficulty with time management",    "businessType": "Software Development",    "companyWebsite": "https://example.com",    "companyEmail": "contact@example.com",    "companyAddress": "123 Main St, Anytown, CA",    "phone": {      "phoneNumber": "5551234567",      "countryCode": "US"    },    "businessHours": "Mon-Fri 9am-5pm",    "brandPromise": "We deliver on time, every time",    "brandValues": "Integrity, Excellence, Innovation",    "brandPurpose": "To empower small businesses with technology",    "competitiveAdvantage": "Proprietary AI technology",    "risksOfInaction": "Falling behind competitors",    "uniqueSellingProposition": "The only solution that integrates with all major platforms",    "callToAction": "Schedule a demo today"  },  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"}

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

HTTP status code for invalid location access

**Example:** `403`

**message**string

Error message describing the location access failure

**Example:** `The token does not have access to this location`

    {  "statusCode": 403,  "message": "The token does not have access to this location"}

Not Found

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

HTTP status code for not found

**Example:** `404`

**message**string

Error message describing the not found failure

**Example:** `Not Found`

**error**string

Error type identifier

**Example:** `The requested resource was not found`

    {  "statusCode": 404,  "message": "Not Found",  "error": "The requested resource was not found"}

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

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/brand-boards-api-v-3#authentication)
**type:** http**scopes:** `brand-boards/voices.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/brand-boards/locations/oHJiAh0wDG3BzmzACVD6/brand-voices/507f1f77bcf86cd799439011' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

brandVoiceId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
