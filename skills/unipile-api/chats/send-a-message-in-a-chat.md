# Send a message in a chat

- **URL:** https://developer.unipile.com/reference/chatscontroller_sendmessageinchat
- **Summary:** Send a message to the given chat with the possibility to link some attachments.

chat_id

string

required

The id of the chat where to send the message.

text

string

account_id

string

An account_id can be specified to prevent the user from sending messages in chats not belonging to the account.

thread_id

string

Optional and for Slack’s messaging only. The id of the thread to send the message in.

quote_id

string

The id of a message to quote. The id of the message to quote / reply to.

voice_message

file

(Linkedin | WhatsApp) A file to send as voice message. WhatsApp: prefer .mp3 or .m4a. Linkedin: prefer .m4a. Instagram: use the attachment field and prefer .m4a. Telegram: use the attachment field.

video_message

file

(Linkedin) A file to send as video message. WhatsApp: use attachments field.

attachments

array of files

typing_duration

string

(WhatsApp only) Set a duration in milliseconds to simulate a typing status for that duration before sending the message.

201

Created. Message sent successfully.

object

object

string

enum

required

`MessageSent`

message_id

string

required

The Unipile ID of the newly sent message.

string

Option 2

401

Unauthorized

Disconnected account

The account appears to be disconnected from the provider service.  
undefined

403

Forbidden

Feature not subscribed

The requested feature has either not been subscribed or not been authenticated properly.  
undefined

404

Not Found

Resource not found.

The requested resource were not found.  
Account, chat, thread or provider resource not found

415

Unsupported Media Type

Unsupported media

The media has been rejected by the provider.  
undefined

422

Unprocessable Entity

Message couldn't pass validation

Provider cannot execute request because of an invalid message.  
undefined

429

Too Many Requests

Too many requests

The provider cannot accept any more requests at the moment. Please try again later.  
undefined

500

Internal Server Error

Unexpected error - Type: "errors/unexpected_error"

Something went wrong. {{moreDetails}}

Provider error - Type: "errors/provider_error"

The provider is experiencing operational problems. Please try again later.

Authentication intent error - Type: "errors/authentication_intent_error"

The current authentication intent was killed after failure. Please start the process again from the beginning.

503

Service Unavailable

Network down

Network is down on server side. Please wait a moment and retry.  
undefined

504

Gateway Timeout

Request timed out - Type: "errors/request_timeout"

Request Timeout. Please try again, and if the issue persists, contact support.

No

Base URL

https://api1.unipile.com:13111/api/v1/chats/{chat_id}/messages

1

curl \--request POST \\

2

     \--url https://api1.unipile.com:13111/api/v1/chats/chat_id/messages \\

3

     \--header 'accept: application/json' \\

4

     \--header 'content-type: multipart/form-data'

1

{

2

  "object": "MessageSent",

3

  "message_id": "string"

4

}

No
