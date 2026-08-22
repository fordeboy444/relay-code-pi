# Edit a job posting

- **URL:** https://developer.unipile.com/reference/linkedincontroller_editjobposting
- **Summary:** Edit an existing job posting.

job_id

string

required

The id of the job to edit.

job_title

object

job_title object

company

object

company object

workplace

string

enum

ON_SITEHYBRIDREMOTE

Allowed:

`ON_SITE``HYBRID``REMOTE`

location

string

`^\d+$`

The ID of the parameter. Use type LOCATION on the List search parameters route to find out the right ID.

employment_status

string

enum

FULL_TIMEPART_TIMECONTRACTTEMPORARYOTHERVOLUNTEERINTERNSHIP

Allowed:

`FULL_TIME``PART_TIME``CONTRACT``TEMPORARY``OTHER``VOLUNTEER``INTERNSHIP`

description

string

You can use HTML tags to structure your description.

auto_rejection_template

string

You can define a rejection message template to be automatically sent to applicants that don't pass screening questions.

screening_questions

array

screening_questions

ADD object

apply_method

Apply within Linkedin | Apply through an external website

apply_method Apply within Linkedin | Apply through an external website

account_id

string

required

length ≥ 1

An Unipile account id.

recruiter

object

recruiter object

200

OK. Request succeeded.

===============================

object

object

string

enum

required

`LinkedinJobPostingEdited`

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
https://api1.unipile.com:13111/api/v1/linkedin/jobs/{job_id}

1

curl \--request PATCH \\

2

     \--url https://api1.unipile.com:13111/api/v1/linkedin/jobs/job_id \\

3

     \--header 'accept: application/json' \\

4

     \--header 'content-type: application/json'

1

{

2

  "object": "LinkedinJobPostingEdited",

3

  "job_id": "string"

4

}

No
