# Get a specific applicant to a job posting

- **URL:** https://developer.unipile.com/reference/linkedincontroller_getjobapplicant
- **Summary:** Retrieve the details of a user that has applied to a given offer. Applies to Classic job posting only.

applicant_id

string

required

The ID of the applicant.

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

`LinkedinJobApplicant`

id

string

required

profile_id

string

required

public_identifier

string

required

public_profile_url

string

required

name

string

required

location

string

required

headline

string

required

profile_picture_url

string

applied_at

number

required

rating

string

enum

required

`UNRATED` `GOOD_FIT` `MAYBE` `NOT_A_FIT`

email_address

string

phone_number

string

contact_info

object

email_addresses

array of strings

required

phone_numbers

array of strings

required

work_experience

array of objects

required

work_experience\*

object

company

string

required

string

Option 2

company_id

string

position

string

required

string

Option 2

location

string

description

string

picture_url

string

start

object

required

object

Option 2

end

object

required

object

Option 2

education

array of objects

required

education\*

object

school

string

required

string

Option 2

school_id

string

degree

string

description

string

field_of_study

string

picture_url

string

start

object

required

object

Option 2

end

object

required

object

Option 2

screening_questions

array of objects

required

screening_questions\*

object

question

string

required

answers

array of strings

required

success

boolean

required

400

Bad Request

Invalid parameters

One or more request parameters are invalid or missing.  
undefined

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
https://api1.unipile.com:13111/api/v1/linkedin/jobs/applicants/{applicant_id}

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/linkedin/jobs/applicants/applicant_id \\

3

     \--header 'accept: application/json'

68

1

{

2

  "object": "LinkedinJobApplicant",

3

  "id": "string",

4

  "profile_id": "string",

5

  "public_identifier": "string",

6

  "public_profile_url": "string",

7

  "name": "string",

8

  "location": "string",

9

  "headline": "string",

10

  "profile_picture_url": "string",

11

  "applied_at": 0,

12

  "rating": "UNRATED",

13

  "email_address": "string",

14

  "phone_number": "string",

15

  "contact_info": {

16

    "email_addresses": \[\
\
17\
\
      "string"\
\
18\
\
    \],

19

    "phone_numbers": \[\
\
20\
\
      "string"\
\
21\
\
    \]

22

  },

23

  "work_experience": \[\
\
24\
\
    {\
\
25\
\
      "company": "string",\
\
26\
\
      "company_id": "string",\
\
27\
\
      "position": "string",\
\
28\
\
      "location": "string",\
\
29\
\
      "description": "string",\
\
30\
\
      "picture_url": "string",\
\
31\
\
      "start": {\
\
32\
\
        "year": 0,\
\
33\
\
        "month": 0\
\
34\
\
      },\
\
35\
\
      "end": {\
\
36\
\
        "year": 0,\
\
37\
\
        "month": 0\
\
38\
\
      }\
\
39\
\
    }\
\
40\
\
  \],

41

  "education": \[\
\
42\
\
    {\
\
43\
\
      "school": "string",\
\
\
* * *\
\
\
\
Yes\
\
No
