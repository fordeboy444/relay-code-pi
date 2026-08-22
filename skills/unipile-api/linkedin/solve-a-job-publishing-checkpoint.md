# Solve a job publishing checkpoint

- **URL:** https://developer.unipile.com/reference/linkedincontroller_solvecheckpoint
- **Summary:** Solve a checkpoint to verify your member privilegies.

draft_id

string

required

The id of the draft to solve the checkpoint from.

account_id

string

required

length ≥ 1

An Unipile account id.

input

string

required

200

OK. Request succeeded.

===============================

Object 1

Object 2

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

500

Internal Server Error

Unexpected error - Type: "errors/unexpected_error"

Something went wrong. {{moreDetails}}

Provider error - Type: "errors/provider_error"

The provider is experiencing operational problems. Please try again later.

Authentication intent error - Type: "errors/authentication_intent_error"

The current authentication intent was killed after failure. Please start the process again from the beginning.

502

Bad Request

Invalid parameters

One or more request parameters are invalid or missing.  
This draft is not eligible to free posting.

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

https://api1.unipile.com:13111/api/v1/linkedin/jobs/{draft_id}/checkpoint

1

curl \--request POST \\

2

     \--url https://api1.unipile.com:13111/api/v1/linkedin/jobs/draft_id/checkpoint \\

3

     \--header 'accept: application/json' \\

4

     \--header 'content-type: application/json'

1

{

2

  "object": "LinkedinJobPostingPublished",

3

  "job_state": "active",

4

  "job_id": "string"

5

}

No
