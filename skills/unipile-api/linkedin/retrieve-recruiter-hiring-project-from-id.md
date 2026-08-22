# Retrieve Recruiter hiring project from ID

- **URL:** https://developer.unipile.com/reference/linkedincontroller_gethiringprojectbyid
- **Summary:** Retrieve a particular hiring project.

id

string

required

The ID of the hiring project.

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

`RecruiterHiringProject`

id

string

required

name

string

required

owner_name

string

required

owner_id

string

required

created_at

string

required

job_posting

object

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
https://api1.unipile.com:13111/api/v1/linkedin/projects/{id}

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/linkedin/projects/id \\

3

     \--header 'accept: application/json'

53

}

1

{

2

  "object": "RecruiterHiringProject",

3

  "id": "string",

4

  "name": "string",

5

  "owner_name": "string",

6

  "owner_id": "string",

7

  "created_at": "string",

8

  "job_posting": {

9

    "id": "string",

10

    "state": "active",

11

    "title": "string",

12

    "description": "string",

13

    "company": "string",

14

    "company_id": "string",

15

    "location": "string",

16

    "applicants_counter": 0,

17

    "views_counter": 0,

18

    "cost": 0,

19

    "created_at": 0,

20

    "published_at": 0,

21

    "closed_at": 0,

22

    "apply_url": "string",

23

    "screening_questions": \[\
\
24\
\
      {\
\
25\
\
        "question": "string",\
\
26\
\
        "favorableAnswers": \[\
\
27\
\
          "string"\
\
28\
\
        \]\
\
29\
\
      }\
\
30\
\
    \],

31

    "hiring_team": \[\
\
32\
\
      {\
\
33\
\
        "name": "string",\
\
34\
\
        "provider_id": "string",\
\
35\
\
        "public_identifier": "string",\
\
36\
\
        "profile_url": "string",\
\
37\
\
        "can_send_free_inmail": true\
\
38\
\
      }\
\
39\
\
    \],

40

    "salary": "string",

41

    "workplace": "string",

42

    "seniority": "string",

43

    "skills": \[\
\
\
* * *\
\
\
\
Yes\
\
No
