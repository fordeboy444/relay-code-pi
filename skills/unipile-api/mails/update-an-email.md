# Update an email

- **URL:** https://developer.unipile.com/reference/mailscontroller_updatemail
- **Summary:** Update an email.

email_id

string

required

The id of the email to be updated. Either the Unipile id or the provider uid.

account_id

string

The id of the account related to the email. Required when using the provider uid.

unread

boolean

Indicates whether the email should be marked as unread. Updates only the targeted email. If unread is supplied, all other parameters are ignored.

truefalse

folders

array of strings

The names of the folders to which the email should be moved. Outlook and IMAP accounts accept only one folder. If you provide a label value that does not already exist, a new label will be created with that value. Updates the entire thread if the targeted email is part of a conversation

folders

ADD string

categories

array of strings

`Outlook only`: The categories to assign to the email.

categories

ADD string

200

OK

===========

object

@todo Email has been updated.

object

string

enum

required

`EmailUpdated`

401

Unauthorized

Disconnected account

The account appears to be disconnected from the provider service.  
undefined

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
Account not found

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

https://api1.unipile.com:13111/api/v1/emails/{email_id}

1

curl \--request PUT \\

2

     \--url https://api1.unipile.com:13111/api/v1/emails/email_id \\

3

     \--header 'accept: application/json' \\

4

     \--header 'content-type: application/json'

1

{

2

  "object": "EmailUpdated"

3

}

No
