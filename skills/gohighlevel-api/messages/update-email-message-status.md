# Update email message status

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/conversations/update-email-message-status
- **Summary:** Update delivery events, per-recipient statuses, and the overall message status for an email sent via a custom conversation provider.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/conversations/update-email-message-status#__docusaurus_skipToContent_fallback)

Version: v3

Update email message status
===========================

PUT 

https://services.leadconnectorhq.com/conversations/messages/email/:emailMessageId/status

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Update delivery events, per-recipient statuses, and the overall message status for an email sent via a custom conversation provider.

### Authorization[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/update-email-message-status#authorization "Direct link to Authorization")

*   Requires the `conversations/message.write` OAuth scope.
*   The calling OAuth app must own the conversation provider that originally sent the email.
*   Attempts to update emails sent via LC Email or Mailgun will return `403 Forbidden`.

### Updatable Fields[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/update-email-message-status#updatable-fields "Direct link to Updatable Fields")

All request body fields are optional. Pass only what you need to update.

**`events`** — Aggregate delivery event counters (integers). Counters are merged into the existing values (not replaced). Setting a counter to `0` is treated as no-op and will **not** reset the stored value.

**`recipients`** — Per-recipient delivery statuses. Each entry maps a recipient email address to a `MessageStatus` value. Use `failReason` to capture bounce or rejection details when the status is `failed`.

**`status`** — The overall message status. Accepts any `MessageStatus` enum value.

### Event Inference[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/update-email-message-status#event-inference "Direct link to Event Inference")

The API automatically infers related events to maintain data consistency:

*   **`clicked`, `complained`, `unsubscribed`, or `replied`** → implies `opened` (set to 1 if not already provided and open tracking is enabled) and `delivered` (set to 1).
*   **`opened`** → implies `delivered` (set to 1 if not provided).
*   **`delivered`, `permanent_fail`, or `temporary_fail`** → implies `accepted` (set to 1 if not provided).

### Timestamps[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/update-email-message-status#timestamps "Direct link to Timestamps")

The API automatically records server-side timestamps on first occurrence for `delivered`, `opened`, and `clicked` events. Subsequent updates to these counters do not overwrite the original timestamp.

### Requirements

#### Scope(s)

`conversations/message.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/update-email-message-status#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**emailMessageId** stringrequired

Email Message Id

**Example:** `ve9EPM428h8vShlRW1KT`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**events** object

Aggregate delivery event counters. Counters are merged into existing values. The API automatically infers related events (e.g., reporting `clicked` will also set `opened` and `delivered` if not already present). See the endpoint description for the full inference rules.

**delivered**integer

Number of successful deliveries — the recipient mail server accepted the message. Automatically inferred (set to 1) when `opened`, `clicked`, `complained`, `unsubscribed`, or `replied` events are reported.

**Example:** `1`

**opened**integer

Number of unique open events (typically tracked via a tracking pixel). Automatically inferred (set to 1) when `clicked`, `complained`, `unsubscribed`, or `replied` events are reported, provided open tracking is enabled on the email.

**Example:** `3`

**clicked**integer

Number of link click events within the email body. Triggers automatic inference of both `opened` and `delivered`.

**Example:** `1`

**replied**integer

Number of reply events. Triggers automatic inference of both `opened` (if open tracking is enabled) and `delivered`.

**Example:** `1`

**failed**integer

Total number of delivery failures (includes both permanent and temporary). For more granular failure tracking, use `permanent_fail` and `temporary_fail` instead.

**Example:** `0`

**accepted**integer

Number of messages accepted by the receiving mail server for delivery. Automatically inferred (set to 1) when `delivered`, `permanent_fail`, or `temporary_fail` events are reported.

**Example:** `1`

**rejected**integer

Number of messages rejected outright by the receiving mail server (before acceptance).

**Example:** `0`

**unsubscribed**integer

Number of unsubscribe events triggered by the recipient. Triggers automatic inference of `opened` and `delivered`.

**Example:** `0`

**complained**integer

Number of spam complaint events (e.g., recipient marked the email as spam). Triggers automatic inference of `opened` and `delivered`.

**Example:** `0`

**stored**integer

Number of messages stored by the email service provider (ESP-specific event).

**Example:** `0`

**property name\***integer

Additional provider event counter (merged into stored values).

**recipients** object\[\]

Per-recipient delivery statuses. Each entry maps a recipient email address to a delivery status. Entries are upserted — if a recipient already has a status, it will be overwritten with the new value.

*   Array \[\
    \
\
**emailId**stringrequired\
\
The recipient's email address. This is used as the key to store and update the per-recipient status. Must match one of the original recipients of the email.\
\
**Example:** `john@doe.com`\
\
**status**stringrequired\
\
The delivery status for this specific recipient. Common values for status updates: `delivered` (successfully delivered), `failed` (delivery failed — provide `failReason`), `opened` (recipient opened the email), `clicked` (recipient clicked a link).\
\
**Possible values:** \[`pending`, `scheduled`, `sent`, `delivered`, `read`, `undelivered`, `connected`, `failed`, `opened`, `clicked`\]\
\
**Example:** `delivered`\
\
**failReason**string\
\
Human-readable reason for the delivery failure. Only applicable when `status` is `failed`. Examples: "Mailbox not found", "Quota exceeded", "Blocked by recipient server".\
\
**Example:** `Mailbox not found`\
\
*   \]
    

**status**stringrequired

The overall status of the email message. Required on every request. For emails with multiple recipients, consider using the `recipients` array for granular tracking and this field for the aggregate status.

**Possible values:** \[`pending`, `scheduled`, `sent`, `delivered`, `read`, `undelivered`, `connected`, `failed`, `opened`, `clicked`\]

**Example:** `delivered`

    {  "events": {    "delivered": 1,    "opened": 1  },  "recipients": [    {      "emailId": "john@example.com",      "status": "delivered"    }  ],  "status": "delivered"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/conversations/update-email-message-status#responses "Direct link to Responses")

*   200
*   400
*   401
*   403

Email message status updated successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Whether the status update was persisted successfully.

**Example:** `true`

**message**stringrequired

Human-readable result message.

**Example:** `Updated email message successfully`

    {  "success": true,  "message": "Updated email message successfully"}

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

Forbidden - status updates are only supported for custom conversation provider emails

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

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/conversations/conversations-api#authentication)
**type:** http**scopes:** `conversations/message.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X PUT 'https://services.leadconnectorhq.com/conversations/messages/email/ve9EPM428h8vShlRW1KT/status' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \--data-raw '{  "events": {    "delivered": 1,    "opened": 3,    "clicked": 1,    "replied": 1,    "failed": 0,    "accepted": 1,    "rejected": 0,    "unsubscribed": 0,    "complained": 0,    "stored": 0  },  "recipients": [    {      "emailId": "john@example.com",      "status": "delivered"    }  ],  "status": "delivered"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

emailMessageId — pathrequired

Version — headerrequired\---v3

Body required

{
  "events": {    "delivered": 1,    "opened": 3,    "clicked": 1,    "replied": 1,    "failed": 0,    "accepted": 1,    "rejected": 0,    "unsubscribed": 0,    "complained": 0,    "stored": 0  },  "recipients": \[    {      "emailId": "john@example.com",      "status": "delivered"    }  \],  "status": "delivered"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
