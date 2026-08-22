# Retrieve LinkedIn search parameters

- **URL:** https://developer.unipile.com/reference/linkedincontroller_getsearchparameterslist
- **Summary:** LinkedIn doesn't accept raw text as search parameters, but IDs. This route will help you get the right IDs for your inputs. Check out our Guide with examples to master LinkedIn search : https://developer.unipile.com/docs/linkedin-search

limit

integer

1 to 100

Defaults to 10

A limit for the number of items returned in the response. The value can be set between 1 and 100.

keywords

string

The keywords to start the search from.  
Not applicable to the following parameters : EMPLOYMENT_TYPE.

service

string

enum

Select the LinkedIn API to be used to query common parameters. Default is CLASSIC.

CLASSICRECRUITERSALES_NAVIGATOR

Allowed:

`CLASSIC``RECRUITER``SALES_NAVIGATOR`

typeCommon parametersSales navigator specificsRecruiter specifics

enum

required

The type of parameter for the requested search.

LOCATIONPEOPLECONNECTIONSCOMPANYSCHOOLINDUSTRYSERVICEJOB_FUNCTIONJOB_TITLEEMPLOYMENT_TYPESKILL

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

`LinkedinSearchParametersList`

items

array of objects

required

items\*

object

object

string

enum

required

`LinkedinSearchParameter`

id

string

required

length ≥ 1

A unique identifier.

title

string

required

picture_url

string

additional_data

object

additional_data object

paging

object

required

page_count

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

429

Too Many Requests

Too many requests

The provider cannot accept any more requests at the moment. Please try again later.  
undefined
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
https://api1.unipile.com:13111/api/v1/linkedin/search/parameters

1

curl \--request GET \\

2

     \--url 'https://api1.unipile.com:13111/api/v1/linkedin/search/parameters?type=LOCATION' \\

3

     \--header 'accept: application/json'

17

1

{

2

  "object": "LinkedinSearchParametersList",

3

  "items": \[\
\
4\
\
    {\
\
5\
\
      "object": "LinkedinSearchParameter",\
\
6\
\
      "id": "string",\
\
7\
\
      "title": "string",\
\
8\
\
      "picture_url": "string",\
\
9\
\
      "additional_data": {\
\
10\
\
        "additionalProp": {}\
\
11\
\
      }\
\
12\
\
    }\
\
13\
\
  \],

14

  "paging": {

15

    "page_count": 0

16

  }

17

}

No
