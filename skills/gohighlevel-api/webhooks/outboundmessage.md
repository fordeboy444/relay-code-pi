# OutboundMessage

- **URL:** https://marketplace.gohighlevel.com/docs/webhook/OutboundMessage
- **Summary:** Called whenever a user sends a message to a contact.

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/OutboundMessage#__docusaurus_skipToContent_fallback)

Version: v3

On this page

Called whenever a user sends a message to a contact.

| Channel |
| --- |
| Call |
| Voicemail |
| SMS |
| GMB |
| FB  |
| IG  |
| Email |
| Live Chat |
| Internal Comment |

#### Message Schema[​](https://marketplace.gohighlevel.com/docs/webhook/OutboundMessage#message-schema "Direct link to Message Schema")

    {  "type": "object",  "properties": {    "type": {      "type": "string"    },    "locationId": {      "type": "string"    },    "attachments": {      "type": "array"    },    "body": {      "type": "string"    },    "contactId": {      "type": "string"    },    "contentType": {      "type": "string"    },    "conversationId": {      "type": "string"    },    "dateAdded": {      "type": "string"    },    "direction": {      "type": "string"    },    "messageType": {      "type": "string"    },    "status": {      "type": "string"    },    "messageId": {      "type": "string"    },    "userId": {      "type": "string"    },    "source": {      "type": "string"    },    "conversationProviderId": {      "type": "string"    },    "callDuration": {      "type": "number"    },    "callStatus": {      "type": "string"    },    "chatWidgetId": {      "type": "string"    },    "from": {      "type": "string"    },    "to": {      "type": "string"    },    "messageTypeId": {      "type": "number"    },    "messageTypeString": {      "type": "string"    },    "mentions": {      "type": "array",      "items": { "type": "string" }    }  }}

#### Example(Message)[​](https://marketplace.gohighlevel.com/docs/webhook/OutboundMessage#examplemessage "Direct link to Example(Message)")

    {  "type": "OutboundMessage",  "locationId": "l1C08ntBrFjLS0elLIYU",  "attachments": [],  "body": "This is a test message",  "contactId": "cI08i1Bls3iTB9bKgFJh",  "contentType": "text/plain",  "conversationId": "fcanlLgpbQgQhderivVs",  "dateAdded": "2021-04-21T11:31:45.750Z",  "direction": "outbound",  "messageType": "SMS",  "source": "app",  "status": "delivered",  "conversationProviderId": "cI08i1Bls3iTB9bKgF01",  "chatWidgetId": "67b0cc8cf14b19d85ace7s35",  "from": "+15559876543",  "to": "+15551234567",  "messageTypeId": 2,  "messageTypeString": "TYPE_SMS"}

#### Example(Call and Voicemail)[​](https://marketplace.gohighlevel.com/docs/webhook/OutboundMessage#examplecall-and-voicemail "Direct link to Example(Call and Voicemail)")

    {  "type": "OutboundMessage",  "locationId": "0d48aEf7q67DAu134bpy",   "attachments": ["call recording url"],  "contactId": "gblakL5aYQC4glDtP1r2t3",  "conversationId": "SGDqZrzmwTr19d10aHkt9F",  "dateAdded": "2024-05-08T11:57:42.250Z",  "direction": "outbound",  "messageType": "CALL",  "userId": "xsmF1xxhmC92ZpL1lj7aLa",  "messageId": "tyW42xCD0HQpb3hhfLcx",  "status": "completed",  "callDuration": 120,  "callStatus": "completed",  "from": "+15559876543",  "to": "+15551234567",  "messageTypeId": 1,  "messageTypeString": "TYPE_CALL"}

### Call Status Details[​](https://marketplace.gohighlevel.com/docs/webhook/OutboundMessage#call-status-details "Direct link to Call Status Details")

For outbound calls:

*   When the call is answered by a person, `status` will be `completed` and `callStatus` will be `completed`
*   When the call reaches voicemail, `status` will be `completed` and `callStatus` will be `voicemail`
*   The `callDuration` field indicates the length of the call in seconds

#### Example(Voicemail send through workflow)[​](https://marketplace.gohighlevel.com/docs/webhook/OutboundMessage#examplevoicemail-send-through-workflow "Direct link to Example(Voicemail send through workflow)")

    {  "type": "OutboundMessage",  "locationId": "0d48aEf7q67DAuXUxbpy",  "attachments": ["voicemail url"],  "contactId": "gb7xwL5aYQC4glDtP1r5",  "conversationId": "SGDqZrzmwTr5P7aHkt9F",  "dateAdded": "2024-05-08T12:04:55.828Z",  "direction": "outbound",  "messageType": "VoiceMail",  "messageId": "hhYtaQM2I9ym8qhU9CmM",  "status": "completed",  "from": "+15559876543",  "to": "+15551234567",  "messageTypeId": 10,  "messageTypeString": "TYPE_VOICEMAIL"}

#### Example(Internal Comment with mentions)[​](https://marketplace.gohighlevel.com/docs/webhook/OutboundMessage#exampleinternal-comment-with-mentions "Direct link to Example(Internal Comment with mentions)")

    {  "type": "OutboundMessage",  "locationId": "l1C08ntBrFjLS0elLIYU",  "body": "Please follow up on this @John Doe<userId>Fwo3j0BiINYsh98UU30U</userId>",  "contactId": "cI08i1Bls3iTB9bKgFJh",  "contentType": "text/plain",  "conversationId": "fcanlLgpbQgQhderivVs",  "dateAdded": "2026-02-16T09:09:24.818Z",  "direction": "outbound",  "messageType": "InternalComment",  "messageId": "M5avV1g7s0oUYWo3qkk4",  "userId": "xsmF1xxhmC92ZpL1lj7aLa",  "status": "delivered",  "source": "app",  "mentions": ["Fwo3j0BiINYsh98UU30U"]}

#### Example(Internal Comment without mentions)[​](https://marketplace.gohighlevel.com/docs/webhook/OutboundMessage#exampleinternal-comment-without-mentions "Direct link to Example(Internal Comment without mentions)")

    {  "type": "OutboundMessage",  "locationId": "l1C08ntBrFjLS0elLIYU",  "body": "This is an internal note for the team",  "contactId": "cI08i1Bls3iTB9bKgFJh",  "contentType": "text/plain",  "conversationId": "fcanlLgpbQgQhderivVs",  "dateAdded": "2026-02-16T09:07:35.601Z",  "direction": "outbound",  "messageType": "InternalComment",  "messageId": "YHvRXyjBxKOjoEg7duKd",  "userId": "xsmF1xxhmC92ZpL1lj7aLa",  "status": "delivered",  "source": "app",  "mentions": []}

### Internal Comment Details[​](https://marketplace.gohighlevel.com/docs/webhook/OutboundMessage#internal-comment-details "Direct link to Internal Comment Details")

*   Internal comments are only visible to internal users and are not sent to the contact.
*   The `userId` field identifies the user who posted the comment.
*   The `mentions` field contains an array of user IDs that were tagged in the comment. If no users were mentioned, it will be an empty array `[]`.
*   The `body` field contains the comment text. Mentioned users appear in the format `@username<userId>actualUserId</userId>`.

#### Email Message Schema[​](https://marketplace.gohighlevel.com/docs/webhook/OutboundMessage#email-message-schema "Direct link to Email Message Schema")

    {  "type": "object",  "properties": {    "type": {      "type": "string"    },    "locationId": {      "type": "string"    },    "attachments": {      "type": "array"    },    "body": {      "type": "string"    },    "contactId": {      "type": "string"    },    "conversationId": {      "type": "string"    },    "dateAdded": {      "type": "string"    },    "direction": {      "type": "string"    },    "messageType": {      "type": "string"    },    "emailMessageId": {      "type": "string"    },    "threadId": {      "type": "string"    },    "provider": {      "type": "string"    },    "to": {      "type": "string"    },    "cc": {      "type": "string"    },    "bcc": {      "type": "string"    },    "ccList": {      "type": "array",      "description": "List of email IDs in the cc field",      "items": {        "type": "string"      }    },    "bccList": {      "type": "array",      "description": "List of email IDs in the bcc field",      "items": {        "type": "string"      }    },    "userId": {      "type": "string"    },    "source": {      "type": "string"    },    "conversationProviderId": {      "type": "string"    },    "plainText": {      "type": "string",      "description": "Plain text version of the email body (HTML tags stripped, newlines preserved)"    }  }}

#### Example(Email)[​](https://marketplace.gohighlevel.com/docs/webhook/OutboundMessage#exampleemail "Direct link to Example(Email)")

    {  "type": "OutboundMessage",  "locationId": "kF4NJ5gzRyQF2gKFD34G",  "body": "<div style=\"font-family: verdana, geneva; font-size: 11pt;\">Testing Email Notification</div>",  "plainText": "Testing Email Notification",  "contactId": "3bN9f8LYJFG8F232XMUbfq",  "conversationId": "yCdNo6pwyTLYKgg6V2gj",  "dateAdded": "2024-01-12T12:59:04.045Z",  "direction": "outbound",  "messageType": "Email",  "emailMessageId": "sddfDSF3G56GHG",  "from": "Internal Notify <sample@email.service>",  "threadId": "sddfDSF3G56GHG",  "subject": "Order Confirmed",  "to": "example@email.com",  "ccList": ["cc@example.com"],  "bccList": ["bcc@example.com"],  "source": "app",  "conversationProviderId": "cI08i1Bls3iTB9bKgF01"}

Share your feedback
-------------------

★★★★★

*   [Call Status Details](https://marketplace.gohighlevel.com/docs/webhook/OutboundMessage#call-status-details)
    
*   [Internal Comment Details](https://marketplace.gohighlevel.com/docs/webhook/OutboundMessage#internal-comment-details)
