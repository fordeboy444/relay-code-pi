# Schedule Campaign

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/emails/schedule-campaign
- **Summary:** Schedule or start an email campaign. The campaign must be in draft, cancelled, or paused status.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/emails/schedule-campaign#__docusaurus_skipToContent_fallback)

Version: v3New

Schedule Campaign
=================

POST 

https://services.leadconnectorhq.com/emails/locations/:locationId/campaigns/emails/:campaignId/schedule

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Schedule or start an email campaign. The campaign must be in draft, cancelled, or paused status.

### Requirements

#### Scope(s)

`emails/campaigns.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/emails/schedule-campaign#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location ID

**Example:** `ve9EPM428h8vShlRW1KT`

**campaignId** stringrequired

Campaign ID

**Example:** `67f15c2ae99226d5bcccb8f3`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**scheduleType**stringrequired

How to schedule the campaign

**Possible values:** \[`immediate`, `scheduled`, `batch`, `rss`, `smart_send`\]

**Example:** `immediate`

**timeZone**stringrequired

IANA timezone

**Example:** `America/New_York`

**userId**stringrequired

ID of the user performing this action

**Example:** `507f1f77bcf86cd799439099`

**userName**string

Name of the user performing this action

**Example:** `John Doe`

**emailMeta** objectrequired

Email subject, sender, and content metadata

**subject**stringrequired

Email subject line

**Example:** `Our February Newsletter`

**fromName**stringrequired

Sender display name

**Example:** `John Doe`

**fromEmail**stringrequired

Sender email address

**Example:** `john@example.com`

**replyToAddress**string

Reply-to email address

**Example:** `reply@example.com`

**previewText**string

Preview text shown in inbox after subject

**Example:** `Check out our latest news`

**attachments**string\[\]

Attachment download URLs

**Example:** `["https://example.com/file.pdf"]`

**recipients** objectrequired

Who receives the email. Must provide either contactIds or filter.

**type**stringrequired

Recipient selection type

**Possible values:** \[`contact`, `tag`, `segment`\]

**Example:** `contact`

**contactIds**string\[\]

Contact IDs to send to. Required when type is contact.

**Example:** `["contactId1","contactId2"]`

**tagIds**string\[\]

Tag IDs to filter recipients by. Required when type is tag.

**Example:** `["tagId1","tagId2"]`

**segment**string

Segment type for pre-built segments. Required when type is segment.

**Possible values:** \[`engaged_last_7_days`, `engaged_last_30_days`, `engaged_last_60_days`, `engaged_last_5_campaigns`, `unengaged_last_5_campaigns`\]

**Example:** `engaged_last_7_days`

**freezeList**boolean

Freeze the contact list at schedule time — new matching contacts will not be added later

**Default value:** `true`

**Example:** `true`

**sendDays**string\[\]

Days of the week to allow sending. Used for batch and RSS scheduleTypes.

**Possible values:** \[`Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`\]

**Example:** `["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]`

**scheduleConfig** object

Schedule configuration for immediate, scheduled, batch, and smart_send types. Required when scheduleType is not rss.

**sendAt**string

Date/time to send. Required for scheduled, batch, and smart_send. Ignored for immediate.

**Example:** `2026-04-01 09:00 AM`

**batch** object

Batch/drip configuration. Required when scheduleType is batch. Ignored otherwise.

**batchSize**numberrequired

Number of contacts to process per batch

**Example:** `100`

**interval**numberrequired

Delay between batches

**Example:** `2`

**intervalUnit**stringrequired

Unit for the interval

**Possible values:** \[`minutes`, `hours`, `days`\]

**Example:** `hours`

**skipDays**string\[\]

Days to skip sending

**Possible values:** \[`Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`\]

**Example:** `["Sat","Sun"]`

**windowStart**string

Earliest time to send batches

**Example:** `09:00 AM`

**windowEnd**string

Latest time to send batches

**Example:** `05:00 PM`

**tracking** object

Click and UTM tracking options

**clickTracking**boolean

Enable click tracking on links

**Example:** `true`

**utmTracking**boolean

Enable UTM parameters on links

**Example:** `false`

**resend** object

Auto-resend to contacts who did not open

**enabled**boolean

Enable resend to contacts who did not open

**Example:** `false`

**waitHours**number

Hours to wait before resending. Required when enabled is true.

**Example:** `12`

**subject**string

Override subject line for the resend email

**Example:** `Did you miss this?`

**emailPreferenceId**string

Email preference type ID for categorizing this campaign

**Example:** `preference-type-id`

**rssConfig** object

RSS feed configuration. Required when scheduleType is rss.

**name**stringrequired

RSS schedule name

**Example:** `Weekly Digest`

**rssFeedURL**stringrequired

RSS feed URL

**Example:** `https://example.com/rss`

**repeatAfter**stringrequired

How often to check the feed

**Possible values:** \[`every_day`, `every_week`, `every_month`\]

**Example:** `every_day`

**repeatAfterTime**stringrequired

Time of day to execute

**Example:** `09:00 AM`

**rssFeedLimit**number

Max number of RSS items per email

**Example:** `10`

**startAtDay**string

Day of week for weekly RSS

**Possible values:** \[`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`\]

**Example:** `Monday`

**startAtMonthDay**string

Day of month for monthly RSS

**Example:** `15`

**firstExecutionDate**string

Override first execution date/time

**Example:** `2026-04-01 10:00:00`

**abTestConfig** object

A/B test configuration. Can be combined with any scheduleType except rss.

**testType**stringrequired

What is being tested

**Possible values:** \[`emailContent`, `subjectLine`\]

**Example:** `subjectLine`

**testDuration**numberrequired

Seconds to run the test before picking a winner

**Example:** `3600`

**variationCount**numberrequired

Number of variations

**Example:** `2`

**testSize**numberrequired

Percentage of contacts in the test group (0-100)

**Example:** `30`

**winningCriteria**stringrequired

How to pick the winner

**Possible values:** \[`openRate`, `clickRate`\]

**Example:** `openRate`

**variations** object\[\]required

A/B test variations

*   Array \[\
    \
\
**subject**string\
\
Subject line for this variation\
\
**Example:** `Subject A`\
\
**documentId**string\
\
Template/document ID for this variation\
\
**Example:** `507f1f77bcf86cd799439011`\
\
*   \]
    

    {  "scheduleType": "immediate",  "timeZone": "America/New_York",  "userId": "507f1f77bcf86cd799439099",  "userName": "John Doe",  "emailMeta": {    "subject": "Our February Newsletter",    "fromName": "John Doe",    "fromEmail": "john@example.com"  },  "recipients": {    "type": "contact",    "contactIds": [      "contactId1",      "contactId2"    ]  },  "sendDays": [    "Mon",    "Tue",    "Wed",    "Thu",    "Fri",    "Sat",    "Sun"  ],  "scheduleConfig": {    "sendAt": "2026-04-01 09:00 AM"  },  "rssConfig": {    "name": "Weekly Digest",    "rssFeedURL": "https://example.com/rss",    "repeatAfter": "every_day",    "repeatAfterTime": "09:00 AM"  },  "abTestConfig": {    "testType": "subjectLine",    "testDuration": 3600,    "variationCount": 2,    "testSize": 30,    "winningCriteria": "openRate",    "variations": [      {        "subject": "Subject A"      },      {        "subject": "Subject B"      }    ]  }}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/emails/schedule-campaign#responses "Direct link to Responses")

*   201
*   400
*   401
*   403
*   404
*   409
*   422

Success

*   application/json

*   Schema
*   Example (auto)

**Schema**

**campaignId**stringrequired

Campaign ID

**Example:** `67f15c2ae99226d5bcccb8f3`

**sourceId**stringnullablerequired

Source ID for fetching campaign statistics

**Example:** `B67vyPIAfq3Bnk3FVioE`

**traceId**string

Trace ID of the request

**Example:** `019e4ef5-a65e-4198-8cf9-8e93dca9bda4`

    {  "campaignId": "67f15c2ae99226d5bcccb8f3",  "sourceId": "B67vyPIAfq3Bnk3FVioE",  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"}

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

Conflict - Campaign is already scheduled or being processed

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

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/emails/email-api-v-3#authentication)
**type:** http**scopes:** `emails/campaigns.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/emails/locations/ve9EPM428h8vShlRW1KT/campaigns/emails/67f15c2ae99226d5bcccb8f3/schedule' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \--data-raw '{  "scheduleType": "immediate",  "timeZone": "America/New_York",  "userId": "507f1f77bcf86cd799439099",  "userName": "John Doe",  "emailMeta": {    "subject": "Our February Newsletter",    "fromName": "John Doe",    "fromEmail": "john@example.com",    "replyToAddress": "reply@example.com",    "previewText": "Check out our latest news",    "attachments": [      "https://example.com/file.pdf"    ]  },  "recipients": {    "type": "contact",    "contactIds": [      "contactId1",      "contactId2"    ],    "tagIds": [      "tagId1",      "tagId2"    ],    "segment": "engaged_last_7_days",    "freezeList": true  },  "sendDays": [    "Mon",    "Tue",    "Wed",    "Thu",    "Fri",    "Sat",    "Sun"  ],  "scheduleConfig": {    "sendAt": "2026-04-01 09:00 AM",    "batch": {      "batchSize": 100,      "interval": 2,      "intervalUnit": "hours",      "skipDays": [        "Sat",        "Sun"      ],      "windowStart": "09:00 AM",      "windowEnd": "05:00 PM"    },    "tracking": {      "clickTracking": true,      "utmTracking": false    },    "resend": {      "enabled": false,      "waitHours": 12,      "subject": "Did you miss this?"    },    "emailPreferenceId": "preference-type-id"  },  "rssConfig": {    "name": "Weekly Digest",    "rssFeedURL": "https://example.com/rss",    "repeatAfter": "every_day",    "repeatAfterTime": "09:00 AM",    "rssFeedLimit": 10,    "startAtDay": "Monday",    "startAtMonthDay": "15",    "firstExecutionDate": "2026-04-01 10:00:00"  },  "abTestConfig": {    "testType": "subjectLine",    "testDuration": 3600,    "variationCount": 2,    "testSize": 30,    "winningCriteria": "openRate",    "variations": [      {        "subject": "Subject A"      },      {        "subject": "Subject B"      }    ]  }}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

campaignId — pathrequired

Version — headerrequired\---v3

Body required

{
  "scheduleType": "immediate",  "timeZone": "America/New_York",  "userId": "507f1f77bcf86cd799439099",  "userName": "John Doe",  "emailMeta": {    "subject": "Our February Newsletter",    "fromName": "John Doe",    "fromEmail": "john@example.com",    "replyToAddress": "reply@example.com",    "previewText": "Check out our latest news",    "attachments": \[      "https://example.com/file.pdf"    \]  },  "recipients": {    "type": "contact",    "contactIds": \[      "contactId1",      "contactId2"    \],    "tagIds": \[      "tagId1",      "tagId2"    \],    "segment": "engaged_last_7_days",    "freezeList": true  },  "sendDays": \[    "Mon",    "Tue",    "Wed",    "Thu",    "Fri",    "Sat",    "Sun"  \],  "scheduleConfig": {    "sendAt": "2026-04-01 09:00 AM",    "batch": {      "batchSize": 100,      "interval": 2,      "intervalUnit": "hours",      "skipDays": \[        "Sat",        "Sun"      \],      "windowStart": "09:00 AM",      "windowEnd": "05:00 PM"    },    "tracking": {      "clickTracking": true,      "utmTracking": false    },    "resend": {      "enabled": false,      "waitHours": 12,      "subject": "Did you miss this?"    },    "emailPreferenceId": "preference-type-id"  },  "rssConfig": {    "name": "Weekly Digest",    "rssFeedURL": "https://example.com/rss",    "repeatAfter": "every_day",    "repeatAfterTime": "09:00 AM",    "rssFeedLimit": 10,    "startAtDay": "Monday",    "startAtMonthDay": "15",    "firstExecutionDate": "2026-04-01 10:00:00"  },  "abTestConfig": {    "testType": "subjectLine",    "testDuration": 3600,    "variationCount": 2,    "testSize": 30,    "winningCriteria": "openRate",    "variations": \[      {        "subject": "Subject A"      },      {        "subject": "Subject B"      }    \]  }
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
