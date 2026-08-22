# List all applicants to a job posting

- **URL:** https://developer.unipile.com/reference/linkedincontroller_getjobapplicants
- **Summary:** Retrieve all the users that have applied to a given offer.

id

string

required

The ID of the job offer.

max_years_in_company

number

Linkedin Recruiter native filter : YEARS IN CURRENT COMPANY.

min_years_in_company

number

Linkedin Recruiter native filter : YEARS IN CURRENT COMPANY.

max_years_in_position

number

Linkedin Recruiter native filter : YEARS IN CURRENT POSITION.

min_years_in_position

number

Linkedin Recruiter native filter : YEARS IN CURRENT POSITION.

max_years_of_experience

number

Linkedin Recruiter native filter : YEARS OF EXPERIENCE.

min_years_of_experience

number

Linkedin Recruiter native filter : YEARS OF EXPERIENCE.

exclude_degree

array of strings

Linkedin Recruiter native filter : DEGREES (excluded).

exclude_degree

ADD string

include_degree

array of strings

Linkedin Recruiter native filter : DEGREES (included).

include_degree

ADD string

ratings

string

One or more ratings (UNRATED, GOOD_FIT, MAYBE, NOT_A_FIT) separated by commas.

keywords

string

Filter results with keywords.

sort_by

string

enum

The sorting rule for applicants. Recruiter only.

relevancealphabeticalnewest_firstscreening_requirements

Allowed:

`relevance``alphabetical``newest_first``screening_requirements`

service

string

enum

The Linkedin service the job posting depends on. Default is classic.

CLASSICRECRUITER

Allowed:

`CLASSIC``RECRUITER`

limit

integer

1 to 250

A limit for the number of items returned in the response. The value can be set between 1 and 250.

cursor

string

length ≥ 1

A cursor for pagination purposes. To get the next page of entries, you need to make a new request and fulfill this field with the cursor received in the preceding request. This process should be repeated until all entries have been retrieved.

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

`LinkedinJobApplicantList`

job_posting_id

string

required

length ≥ 1

A unique identifier.

items

array of objects

required

items\*

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

contact_info object

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

cursor

object

required

Option 1

Option 2

paging

object

required

page_count

number

required

total_count

number

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
https://api1.unipile.com:13111/api/v1/linkedin/jobs/{id}/applicants

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/linkedin/jobs/id/applicants \\

3

     \--header 'accept: application/json'

78

}

1

{

2

  "object": "LinkedinJobApplicantList",

3

  "job_posting_id": "string",

4

  "items": \[\
\
5\
\
    {\
\
6\
\
      "object": "LinkedinJobApplicant",\
\
7\
\
      "id": "string",\
\
8\
\
      "profile_id": "string",\
\
9\
\
      "public_identifier": "string",\
\
10\
\
      "public_profile_url": "string",\
\
11\
\
      "name": "string",\
\
12\
\
      "location": "string",\
\
13\
\
      "headline": "string",\
\
14\
\
      "profile_picture_url": "string",\
\
15\
\
      "applied_at": 0,\
\
16\
\
      "rating": "UNRATED",\
\
17\
\
      "email_address": "string",\
\
18\
\
      "phone_number": "string",\
\
19\
\
      "contact_info": {\
\
20\
\
        "email_addresses": \[\
\
21\
\
          "string"\
\
22\
\
        \],\
\
23\
\
        "phone_numbers": \[\
\
24\
\
          "string"\
\
25\
\
        \]\
\
26\
\
      },\
\
27\
\
      "work_experience": \[\
\
28\
\
        {\
\
29\
\
          "company": "string",\
\
30\
\
          "company_id": "string",\
\
31\
\
          "position": "string",\
\
32\
\
          "location": "string",\
\
33\
\
          "description": "string",\
\
34\
\
          "picture_url": "string",\
\
35\
\
          "start": {\
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
          },\
\
39\
\
          "end": {\
\
40\
\
            "year": 0,\
\
41\
\
            "month": 0\
\
42\
\
          }\
\
43\
\
        }\
\
\
* * *\
\
\
\
Yes\
\
No
