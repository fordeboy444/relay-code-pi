# Start a new chat

- **URL:** https://developer.unipile.com/reference/chatscontroller_startnewchat
- **Summary:** Start a new conversation with one or more attendee. ⚠️ Interactive documentation does not work for Linkedin specific parameters (child parameters not correctly applied in snippet), the correct format is linkedin[inmail] = true, linkedin[api]...

account_id

string

required

length ≥ 1

An Unipile account id.

text

string

The message that will start the new conversation.  
With LinkedIn recruiter, a range of HTML tags can be used directly in the body of the message to enhance the presentation. The supported tags are <strong> for bold text, <em> for italic text, <a href="[www.my-link.com](http://www.my-link.com/)
"> for external links, <ul> for unordered lists, <ol> for ordered lists and <li> for list items. Tags can be nested into each other if necessary.

attachments

array of files

voice_message

file

(Linkedin | WhatsApp) A file to send as voice message. WhatsApp: prefer .mp3 or .m4a. Linkedin: prefer .m4a. Instagram: use the attachment field and prefer .m4a. Telegram: use the attachment field.

video_message

file

(Linkedin) A file to send as video message. WhatsApp: use attachments field.

attendees_ids

array of strings

required

length ≥ 1

One or more attendee provider ID.  
For `instagram`, please use the 'provider_messaging_id'.  
For LinkedIn users, use a `provider_id` starting with: ACo for classic, ACw for Sales Navigator, AE for Recruiter.  
For LinkedIn company messaging, please use the 'messaging_id'.  
For WhatsApp, please use '[00000000@s.whatsapp.net](mailto:00000000@s.whatsapp.net)
'.

attendees_ids\*

string

ADD string

subject

string

An optional field to set the subject of the conversation.

linkedin

Classic options | Recruiter options | Sales Navigator options

Extra fields for Linkedin products

linkedin Classic options | Recruiter options | Sales Navigator options

201

Created. New chat created and message sent successfully.

object

object

string

enum

required

`ChatStarted`

chat_id

string

required

The Unipile ID of the newly started chat.

string

Option 2

message_id

string

required

The Unipile ID of the message the chat started with.

string

Option 2

400

Bad Request

Too many characters

The provided content exceeds the character limit.  
undefined

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
undefined

415

Unsupported Media Type

Unsupported media

The media has been rejected by the provider.  
undefined

422

Unprocessable Entity

Recipient cannot be reached

The recipient appears not to be first degree connection.  
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

501

Not Implemented

Missing feature

Requested feature is planned but has not been implemented yet.  
undefined

503

Service Unavailable

No client session - Type: "errors/no_client_session"

No client session is currently running.

No channel - Type: "errors/no_channel"

No channel to client session.

Handler missing - Type: "errors/no_handler"

Handler missing for that request.

Network down - Type: "errors/network_down"

Network is down on server side. Please wait a moment and retry.

Service unavailable - Type: "errors/service_unavailable"

Please try again later.

504

Gateway Timeout

Request timed out - Type: "errors/request_timeout"

Request Timeout. Please try again, and if the issue persists, contact support.

No

Base URL

https://api1.unipile.com:13111/api/v1/chats

1

curl \--request POST \\

2

     \--url https://api1.unipile.com:13111/api/v1/chats \\

3

     \--header 'accept: application/json' \\

4

     \--header 'content-type: multipart/form-data'

1

{

2

  "object": "ChatStarted",

3

  "chat_id": "string",

4

  "message_id": "string"

5

}

No
