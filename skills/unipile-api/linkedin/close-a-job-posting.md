# Close a job posting

- **URL:** https://developer.unipile.com/reference/linkedincontroller_closejobposting
- **Summary:** Close a job offer you have posted.

id

string

required

The ID of the job offer.

service

string

enum

The Linkedin service the job posting depends on.

CLASSICRECRUITER

Allowed:

`CLASSIC``RECRUITER`

account_id

string

required

The ID of the account to trigger the request from.

200

OK. Request succeeded.

===============================

object

object

string

enum

required

`LinkedinJobPostingClosed`

job_id

string

required

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

422

Unprocessable Entity

Invalid account

Provided account is not designed for this feature.  
undefined
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
https://api1.unipile.com:13111/api/v1/linkedin/jobs/{id}/close

1

curl \--request POST \\

2

     \--url https://api1.unipile.com:13111/api/v1/linkedin/jobs/id/close \\

3

     \--header 'accept: application/json'

1

{

2

  "object": "LinkedinJobPostingClosed",

3

  "job_id": "string"

4

}

No
