# Perform an action on a given chat

- **URL:** https://developer.unipile.com/reference/chatscontroller_patchchat
- **Summary:** Perform an action like changing the read status, muting the chat, retrieving a group invite link, etc.

chat_id

string

required

The id of the chat to be patched

action

string

enum

required

The action to perform on the chat:

*   `setReadStatus`: (WhatsApp & LinkedIn only) Set the read status of the chat.
*   `setMuteStatus`: (WhatsApp & LinkedIn only) Set the mute status of the chat.
*   `setArchiveStatus`: (WhatsApp only) Set the archive status of the chat.
*   `setPinnedStatus`: (WhatsApp only) Set the pinned status of the chat.
*   `addParticipant`: (WhatsApp & Telegram only) Add a participant to the group chat.  
    The account owner must have the Add other members permission in the group.  
    Provide the provider ID as value, for example [334455667788@s.whatsapp.net](mailto:334455667788@s.whatsapp.net)
     for WhatsApp,  
    or a Telegram user ID, username, or phone number for Telegram.
*   `removeParticipant`: (WhatsApp & Telegram only) Remove a participant from the group chat.  
    Provide the provider ID as value, for example [334455667788@s.whatsapp.net](mailto:334455667788@s.whatsapp.net)
     for WhatsApp,  
    or a Telegram user ID, username, or phone number for Telegram.
*   `setLabel`: (WhatsApp only) Add a label to the chat.  
    If the label does not exist, it will be created and then assigned.
*   `getInviteLink`: (WhatsApp & Telegram only) Generate or retrieve the full group invite link.  
    The account owner must have the required invite permissions in the group.

setReadStatussetMuteStatussetArchiveStatussetPinnedStatusaddParticipantremoveParticipantsetLabelgetInviteLink

Show 8 enum values

valuebooleanstring

Required for every action except `getInviteLink`. Use a boolean for status actions and a string for participant or label actions.

truefalse

200

OK. Request succeeded.

===============================

object

object

string

enum

required

`ChatPatched`

invite_link

string

The full group invite link. Only returned for the `getInviteLink` action.

401

Unauthorized

Missing credentials - Type: "errors/missing_credentials"

Some credentials are necessary to perform the request.

Multiple sessions - Type: "errors/multiple_sessions"

LinkedIn limits the use of multiple sessions on certain Recruiter accounts. This error restricts access to this route only, but causing a popup to appear in the user's browser, prompting them to choose a session, which can disconnect the current account. To avoid this error, use the cookie connection method.

Wrong account - Type: "errors/wrong_account"

The provided credentials do not match the correct account.

Invalid credentials - Type: "errors/invalid_credentials"

The provided credentials are invalid.

Invalid proxy credentials - Type: "errors/invalid_proxy_credentials"

The provided proxy credentials are invalid.

Invalid IMAP configuration - Type: "errors/invalid_imap_configuration"

The provided IMAP configuration is invalid.

Invalid SMTP configuration - Type: "errors/invalid_smtp_configuration"

The provided SMTP configuration is invalid.

Invalid checkpoint solution - Type: "errors/invalid_checkpoint_solution"

The checkpoint resolution did not pass successfully. Please retry.

Checkpoint error - Type: "errors/checkpoint_error"

The checkpoint does not appear to be resolvable. Please try again and contact support if the problem persists.

Expired credentials - Type: "errors/expired_credentials"

Invalid credentials. Please check your username and password and try again.

Expired link - Type: "errors/expired_link"

This link has expired. Please return to the application and generate a new one.

Insufficient privileges - Type: "errors/insufficient_privileges"

This resource seems to be out of your scopes.

Disconnected account - Type: "errors/disconnected_account"

The account appears to be disconnected from the provider service.

Disconnected feature - Type: "errors/disconnected_feature"

The service you're trying to reach appears to be disconnected.

403

Forbidden

Insufficient permissions - Type: "errors/insufficient_permissions"

Valid authentication but insufficient permissions to perform the request.

Account restricted - Type: "errors/account_restricted"

Access to this account has been restricted by the provider.

Account mismatch - Type: "errors/account_mismatch"

This action cannot be done with your account.

Unknown authentication context - Type: "errors/unknown_authentication_context"

An additional step seems necessary to complete login. Please connect to provider with your browser to find out more, then retry authentication.

Session mismatch - Type: "errors/session_mismatch"

Token User id does not match client session id.

Feature not subscribed - Type: "errors/feature_not_subscribed"

The requested feature has either not been subscribed or not been authenticated properly.

Subscription required - Type: "errors/subscription_required"

The action you're trying to achieve requires a subscription to provider's services.

Resource access restricted - Type: "errors/resource_access_restricted"

You don't have access to this resource.

Action required - Type: "errors/action_required"

An additional step seems necessary. Complete authentication on the provider's native application and try again.

404

Not Found

Resource not found.

The requested resource were not found.  
Chat not found

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

api.Error.NotImplemented.feature_not_implemented.title

api.Error.NotImplemented.feature_not_implemented.detail  
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

https://api1.unipile.com:13111/api/v1/chats/{chat_id}

1

curl \--request PATCH \\

2

     \--url https://api1.unipile.com:13111/api/v1/chats/chat_id \\

3

     \--header 'accept: application/json' \\

4

     \--header 'content-type: application/json' \\

5

     \--data '

6

{

7

  "action": "setReadStatus"

8

}

9

'

1

{

2

  "object": "ChatPatched",

3

  "invite_link": "string"

4

}

No
