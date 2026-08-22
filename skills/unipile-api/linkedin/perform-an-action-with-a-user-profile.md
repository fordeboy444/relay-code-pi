# Perform an action with a user profile

- **URL:** https://developer.unipile.com/reference/linkedincontroller_performactiononmember
- **Summary:** Add a candidate to a Recruiter pipeline, save a Sales Navigator lead, etc.

user_id

string

required

The ID of the user.

Recruiter - Add candidate or applicant to pipeline

Recruiter - Reject applicant

Sales Navigator - Save lead

200

OK. Request succeeded.

===============================

object

object

string

enum

required

`LinkedinPerformActionOnUser`

success

boolean

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
https://api1.unipile.com:13111/api/v1/linkedin/user/{user_id}

10

1

curl \--request POST \\

2

     \--url https://api1.unipile.com:13111/api/v1/linkedin/user/user_id \\

3

     \--header 'accept: application/json' \\

4

     \--header 'content-type: application/json' \\

5

     \--data '

6

{

7

  "api": "recruiter",

8

  "action": "addCandidateToPipeline"

9

}

10

'

1

{

2

  "object": "LinkedinPerformActionOnUser",

3

  "success": true

4

}

No
