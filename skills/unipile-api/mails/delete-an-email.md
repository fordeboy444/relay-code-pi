# Delete an email

- **URL:** https://developer.unipile.com/reference/mailscontroller_deletemail
- **Summary:** Delete an email by moving it to the Trash folder.

email_id

string

required

The id of the email to be deleted. Either the Unipile id or the provider uid.

account_id

string

The id of the account related to the email. Required when using the provider uid.

200

OK

===========

object

@todo Email has been deleted.

object

string

enum

required

`EmailDeleted`

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

curl \--request DELETE \\

2

     \--url https://api1.unipile.com:13111/api/v1/emails/email_id \\

3

     \--header 'accept: application/json'

1

{

2

  "object": "EmailDeleted"

3

}

No
