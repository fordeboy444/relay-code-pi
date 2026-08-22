# List all job postings

- **URL:** https://developer.unipile.com/reference/linkedincontroller_getjobpostings
- **Summary:** Retrieve the job offers you have posted on LinkedIn whether they are open, closed or still drafts.

limit

integer

1 to 250

A limit for the number of items returned in the response. The value can be set between 1 and 250.

category

string

enum

The state of the requested job postings. Default is active.

activedraftclosed

Allowed:

`active``draft``closed`

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

`LinkedinJobPostingList`

items

array of objects

required

items\*

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

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/linkedin/jobs \\

3

     \--header 'accept: application/json'

55

1

{

2

  "object": "LinkedinJobPostingList",

3

  "items": \[\
\
4\
\
    {\
\
5\
\
      "object": "LinkedinJobPosting",\
\
6\
\
      "id": "string",\
\
7\
\
      "state": "active",\
\
8\
\
      "title": "string",\
\
9\
\
      "description": "string",\
\
10\
\
      "company": "string",\
\
11\
\
      "company_id": "string",\
\
12\
\
      "location": "string",\
\
13\
\
      "applicants_counter": 0,\
\
14\
\
      "views_counter": 0,\
\
15\
\
      "cost": 0,\
\
16\
\
      "created_at": 0,\
\
17\
\
      "published_at": 0,\
\
18\
\
      "closed_at": 0,\
\
19\
\
      "apply_url": "string",\
\
20\
\
      "screening_questions": \[\
\
21\
\
        {\
\
22\
\
          "question": "string",\
\
23\
\
          "favorableAnswers": \[\
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
        }\
\
27\
\
      \],\
\
28\
\
      "hiring_team": \[\
\
29\
\
        {\
\
30\
\
          "name": "string",\
\
31\
\
          "provider_id": "string",\
\
32\
\
          "public_identifier": "string",\
\
33\
\
          "profile_url": "string",\
\
34\
\
          "can_send_free_inmail": true\
\
35\
\
        }\
\
36\
\
      \],\
\
37\
\
      "salary": "string",\
\
38\
\
      "workplace": "string",\
\
39\
\
      "seniority": "string",\
\
40\
\
      "skills": \[\
\
41\
\
        "string"\
\
42\
\
      \],\
\
43\
\
      "functions": \[\
\
\
* * *\
\
\
\
Yes\
\
No
