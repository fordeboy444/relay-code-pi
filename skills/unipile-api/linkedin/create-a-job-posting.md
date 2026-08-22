# Create a job posting

- **URL:** https://developer.unipile.com/reference/linkedincontroller_createjobposting
- **Summary:** Create a new job offer draft.

account_id

string

required

length ≥ 1

An Unipile account id.

job_title

object

required

job_title object

company

object

required

company object

workplace

string

enum

required

ON_SITEHYBRIDREMOTE

Allowed:

`ON_SITE``HYBRID``REMOTE`

location

string

required

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

required

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

`LinkedinJobPostingDraftCreated`

job_id

string

required

project_id

string

The ID of the Project for Recruiter job postings.

publish_options

object

required

free

object

required

free object

promoted

object

required

promoted object

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
https://api1.unipile.com:13111/api/v1/linkedin/jobs

1

curl \--request POST \\

2

     \--url https://api1.unipile.com:13111/api/v1/linkedin/jobs \\

3

     \--header 'accept: application/json' \\

4

     \--header 'content-type: application/json' \\

5

     \--data '

6

{

7

  "workplace": "ON_SITE"

8

}

9

'

26

1

{

2

  "object": "LinkedinJobPostingDraftCreated",

3

  "job_id": "string",

4

  "project_id": "string",

5

  "publish_options": {

6

    "free": {

7

      "eligible": true,

8

      "ineligible_reason": "string",

9

      "estimated_monthly_applicants": 0

10

    },

11

    "promoted": {

12

      "estimated_monthly_applicants": 0,

13

      "currency": "string",

14

      "daily_budget": {

15

        "min": 0,

16

        "max": 0,

17

        "recommended": 0

18

      },

19

      "monthly_budget": {

20

        "min": 0,

21

        "max": 0,

22

        "recommended": 0

23

      }

24

    }

25

  }

26

}

No
