# Retrieve Recruiter hiring projects

- **URL:** https://developer.unipile.com/reference/linkedincontroller_gethiringprojects
- **Summary:** Retrieve list of LinkedIn Recruiter hiring projects.

limit

integer

1 to 100

Defaults to 10

A limit for the number of items returned in the response. The value can be set between 1 and 100.

cursor

string

length ≥ 1

A cursor for pagination purposes. To get the next page of entries, you need to make a new request and fulfill this field with the cursor received in the preceding request. This process should be repeated until all entries have been retrieved.

sort_order

string

enum

The sorting order for the hiring projects. Default is DESCENDING.

ASCENDINGDESCENDING

Allowed:

`ASCENDING``DESCENDING`

sort_by

string

enum

The sorting method for the hiring projects. Default is ACCESSED_TIME.

NAMEFAVORITECREATED_TIMEACCESSED_TIMEENGAGED_TIMEENGAGEMENT_COUNT

Allowed:

`NAME``FAVORITE``CREATED_TIME``ACCESSED_TIME``ENGAGED_TIME``ENGAGEMENT_COUNT`

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

`RecruiterHiringProjectList`

items

array of objects

required

items\*

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

job_posting object

total_count

number

required

cursor

object

required

Option 1

Option 2

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
https://api1.unipile.com:13111/api/v1/linkedin/projects

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/linkedin/projects \\

3

     \--header 'accept: application/json'

59

}

1

{

2

  "object": "RecruiterHiringProjectList",

3

  "items": \[\
\
4\
\
    {\
\
5\
\
      "object": "RecruiterHiringProject",\
\
6\
\
      "id": "string",\
\
7\
\
      "name": "string",\
\
8\
\
      "owner_name": "string",\
\
9\
\
      "owner_id": "string",\
\
10\
\
      "created_at": "string",\
\
11\
\
      "job_posting": {\
\
12\
\
        "id": "string",\
\
13\
\
        "state": "active",\
\
14\
\
        "title": "string",\
\
15\
\
        "description": "string",\
\
16\
\
        "company": "string",\
\
17\
\
        "company_id": "string",\
\
18\
\
        "location": "string",\
\
19\
\
        "applicants_counter": 0,\
\
20\
\
        "views_counter": 0,\
\
21\
\
        "cost": 0,\
\
22\
\
        "created_at": 0,\
\
23\
\
        "published_at": 0,\
\
24\
\
        "closed_at": 0,\
\
25\
\
        "apply_url": "string",\
\
26\
\
        "screening_questions": \[\
\
27\
\
          {\
\
28\
\
            "question": "string",\
\
29\
\
            "favorableAnswers": \[\
\
30\
\
              "string"\
\
31\
\
            \]\
\
32\
\
          }\
\
33\
\
        \],\
\
34\
\
        "hiring_team": \[\
\
35\
\
          {\
\
36\
\
            "name": "string",\
\
37\
\
            "provider_id": "string",\
\
38\
\
            "public_identifier": "string",\
\
39\
\
            "profile_url": "string",\
\
40\
\
            "can_send_free_inmail": true\
\
41\
\
          }\
\
42\
\
        \],\
\
43\
\
        "salary": "string",\
\
\
* * *\
\
\
\
Yes\
\
No
