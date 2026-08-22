# Send an email

- **URL:** https://developer.unipile.com/reference/mailscontroller_sendmail
- **Summary:** ⚠️ Interactive documentation does not work on this route (child parameters not correctly applied in snippet), please use our ready to copy past example of this page : https://developer.unipile.com/docs/send-email

account_id

string

required

length ≥ 1

A unique identifier.

from

object

from object

to

array of objects

required

to\*

ADD object

cc

array of objects

cc

ADD object

bcc

array of objects

bcc

ADD object

subject

string

body

string

required

reply_to

string

Either the Unipile ID or the provider ID of the email to reply to.

custom_headers

array of objects

An array of custom headers to be added to the email.

custom_headers

ADD object

tracking_options

object

tracking_options object

attachments

array of files

Idempotency-Key

string

length between 1 and 255

Optional key identifying this email-send operation.  
We suggest using V4 UUIDs or a random string with enough entropy.  
The key can be up to 255 characters long.  
Retrying the same request with the same key returns the original operation result.  
Reusing the key with a different request returns a conflict.  
Keys are retained in memory for up to 24 hours and are cleared by an application restart or maintenance.

201

Email sent successfully.

=================================

object

@todo Email has been sent.

object

string

enum

required

`EmailSent`

tracking_id

string

required

length ≥ 1

A unique identifier.

provider_id

string

required

string

Option 2

provider_immutable_id

string

required

`Outlook only`.

string

Option 2

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
Account not found

409

Conflict

Resource already used

The resource or idempotency key has already been used for a different request.

422

Unprocessable Entity

Parent mail not found

The parent mail could not be found.  
undefined
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
https://api1.unipile.com:13111/api/v1/emails

1

curl \--request POST \\

2

     \--url https://api1.unipile.com:13111/api/v1/emails \\

3

     \--header 'accept: application/json' \\

4

     \--header 'content-type: multipart/form-data'

1

{

2

  "object": "EmailSent",

3

  "tracking_id": "string",

4

  "provider_id": "string",

5

  "provider_immutable_id": "string"

6

}

No
