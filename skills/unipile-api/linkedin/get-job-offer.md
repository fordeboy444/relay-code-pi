# Get job offer

- **URL:** https://developer.unipile.com/reference/linkedincontroller_getjobposting
- **Summary:** Retrieve a job offer.

job_id

string

required

The ID of the job offer.

service

string

enum

required

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

`LinkedinJobPosting`

id

string

required

state

string

enum

required

`active` `draft` `review` `closed` `paused`

title

string

required

description

string

company

string

company_id

string

location

string

required

applicants_counter

number

required

views_counter

number

cost

number

required

created_at

number

published_at

number

closed_at

number

apply_url

string

screening_questions

array of objects

screening_questions

object

question

string

required

favorableAnswers

array of strings

required

hiring_team

array of objects

hiring_team

object

name

string

required

provider_id

string

required

string

Option 2

public_identifier

string

required

string

Option 2

profile_url

string

required

can_send_free_inmail

boolean

required

salary

string

workplace

string

seniority

string

skills

array of strings

functions

array of strings

industries

array of strings

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

curl \--request GET \\

2

     \--url 'https://api1.unipile.com:13111/api/v1/linkedin/jobs/job_id?service=CLASSIC' \\

3

     \--header 'accept: application/json'

46

1

{

2

  "object": "LinkedinJobPosting",

3

  "id": "string",

4

  "state": "active",

5

  "title": "string",

6

  "description": "string",

7

  "company": "string",

8

  "company_id": "string",

9

  "location": "string",

10

  "applicants_counter": 0,

11

  "views_counter": 0,

12

  "cost": 0,

13

  "created_at": 0,

14

  "published_at": 0,

15

  "closed_at": 0,

16

  "apply_url": "string",

17

  "screening_questions": \[\
\
18\
\
    {\
\
19\
\
      "question": "string",\
\
20\
\
      "favorableAnswers": \[\
\
21\
\
        "string"\
\
22\
\
      \]\
\
23\
\
    }\
\
24\
\
  \],

25

  "hiring_team": \[\
\
26\
\
    {\
\
27\
\
      "name": "string",\
\
28\
\
      "provider_id": "string",\
\
29\
\
      "public_identifier": "string",\
\
30\
\
      "profile_url": "string",\
\
31\
\
      "can_send_free_inmail": true\
\
32\
\
    }\
\
33\
\
  \],

34

  "salary": "string",

35

  "workplace": "string",

36

  "seniority": "string",

37

  "skills": \[\
\
38\
\
    "string"\
\
39\
\
  \],

40

  "functions": \[\
\
41\
\
    "string"\
\
42\
\
  \],

43

  "industries": \[\
\
\
* * *\
\
\
\
Yes\
\
No
