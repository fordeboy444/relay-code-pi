# Perform Linkedin search

- **URL:** https://developer.unipile.com/reference/linkedincontroller_search
- **Summary:** Search people and companies from the Linkedin Classic as well as Sales Navigator APIs. Check out our Guide with examples to master LinkedIn search : https://developer.unipile.com/docs/linkedin-search

cursor

string

length ≥ 1

A cursor for pagination purposes. To get the next page of entries, you need to make a new request and fulfill this field with the cursor received in the preceding request. This process should be repeated until all entries have been retrieved.

limit

integer

0 to 100

Defaults to 10

A limit for the number of items returned in the response. Can bet set up to 100 results for Sales Navigator and Recruiter, but Linkedin Classic shouldn't exceed 50.

account_id

string

required

The ID of the account to trigger the request from.

Classic - People

Classic - Companies

Classic - POSTS

Classic - JOBS

Sales Navigator - People

Sales Navigator - Companies

Recruiter - People

Search from URL

Cursor

200

OK. Request succeeded.

===============================

object

object

string

enum

required

`LinkedinSearch`

items

array

required

items\*

Object 1

Object 2

Object 3

Object 4

config

object

required

params

Classic - People | Classic - Companies | Classic - POSTS | Classic - JOBS | Sales Navigator - People | Sales Navigator - Companies | Recruiter - People | Search from URL | Cursor

Classic - People

Classic - Companies

Classic - POSTS

Classic - JOBS

Sales Navigator - People

Sales Navigator - Companies

Recruiter - People

Search from URL

Cursor

paging

object

required

start

number

required

number

Option 2

page_count

number

required

total_count

number

required

cursor

CursorParam

required

CursorParam

Option 2

metadata

object

search_history_id

string

search_context_id

string

search_request_id

string

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
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
https://api1.unipile.com:13111/api/v1/linkedin/search

18

1

curl \--request POST \\

2

     \--url https://api1.unipile.com:13111/api/v1/linkedin/search \\

3

     \--header 'accept: application/json' \\

4

     \--header 'content-type: application/json' \\

5

     \--data '

6

{

7

  "api": "classic",

8

  "category": "people",

9

  "industry": \[\],

10

  "location": \[\],

11

  "company": \[\],

12

  "past_company": \[\],

13

  "school": \[\],

14

  "service": \[\],

15

  "connections_of": \[\],

16

  "followers_of": \[\]

17

}

18

'

487

}

1

{

2

  "object": "LinkedinSearch",

3

  "items": \[\
\
4\
\
    {\
\
5\
\
      "object": "SearchResult",\
\
6\
\
      "type": "PEOPLE",\
\
7\
\
      "id": "string",\
\
8\
\
      "public_identifier": "string",\
\
9\
\
      "public_profile_url": "string",\
\
10\
\
      "profile_url": "string",\
\
11\
\
      "profile_picture_url": "string",\
\
12\
\
      "profile_picture_url_large": "string",\
\
13\
\
      "member_urn": "string",\
\
14\
\
      "name": "string",\
\
15\
\
      "first_name": "string",\
\
16\
\
      "last_name": "string",\
\
17\
\
      "network_distance": "SELF",\
\
18\
\
      "location": "string",\
\
19\
\
      "industry": "string",\
\
20\
\
      "keywords_match": "string",\
\
21\
\
      "headline": "string",\
\
22\
\
      "connections_count": 0,\
\
23\
\
      "followers_count": 0,\
\
24\
\
      "pending_invitation": true,\
\
25\
\
      "can_send_inmail": true,\
\
26\
\
      "hiddenCandidate": true,\
\
27\
\
      "interestLikelihood": "string",\
\
28\
\
      "privacySettings": {\
\
29\
\
        "allowConnectionsBrowse": true,\
\
\
* * *\
\
\
\
Yes\
\
No
