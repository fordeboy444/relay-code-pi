# Retrieve a profile

- **URL:** https://developer.unipile.com/reference/userscontroller_getprofilebyidentifier
- **Summary:** Retrieve the profile of a user. Ensure careful implementation of this action and consult provider limits and restrictions: https://developer.unipile.com/docs/provider-limits-and-restrictions

identifier

string

required

Can be the provider’s internal id OR the provider’s public id of the requested user.

linkedin_sections

array of strings

A list of profile sections to retrieve detailed information on a LinkedIn profile.  
LinkedIn may throttle heavy use of full data section requests, so pick only the sections you truly need.  
Select __preview to fetch all sections with preview data (first entries as displayed in the LinkedIn profile UI), or_ to fetch all sections with full data (not recommended if you’re chaining a lot of profile calls in a short period).  
You can also combine selectors, for example, `["*_preview", "experience", "skills"]` to get all sections in preview plus experience and skills in full.  
In the response, you may receive empty sections if LinkedIn is throttling your requests. In such case, the `throttled_sections` field lists the concerned sections. To prevent this, you should add random delay between your calls, and/or not request as many sections as you use to.

List of sections

Show 22 enum values

ADD string

linkedin_api

string

enum

The LinkedIn API that should be used to get the profile (relative features must be subscribed), if different from classic.

recruitersales_navigator

Allowed:

`recruiter``sales_navigator`

notify

boolean

Whether the profile visit should be notified to the viewee or not. Default is false.

truefalse

account_id

string

required

The id of the account to perform the request from.

200

OK. Request succeeded.

===============================

LinkedIn

Whatsapp

Instagram

Telegram

Twitter

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
User not found

422

Unprocessable Entity

Invalid account

Provided account is not designed for this feature.  
undefined

429

Too Many Requests

Too many requests

The provider cannot accept any more requests at the moment. Please try again later.  
undefined

500

Internal Server Error

Unexpected error - Type: "errors/unexpected_error"

Something went wrong. {{moreDetails}}

Provider error - Type: "errors/provider_error"

The provider is experiencing operational problems. Please try again later.

Authentication intent error - Type: "errors/authentication_intent_error"

The current authentication intent was killed after failure. Please start the process again from the beginning.

501

Not Implemented

Missing feature

Requested feature is planned but has not been implemented yet.  
undefined

503

Service Unavailable

Network down

Network is down on server side. Please wait a moment and retry.  
undefined

504

Gateway Timeout

Request timed out - Type: "errors/request_timeout"

Request Timeout. Please try again, and if the issue persists, contact support.

No

Base URL

https://api1.unipile.com:13111/api/v1/users/{identifier}

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/users/identifier \\

3

     \--header 'accept: application/json'

329

}

1

{

2

  "provider": "LINKEDIN",

3

  "provider_id": "string",

4

  "public_identifier": "string",

5

  "first_name": "string",

6

  "last_name": "string",

7

  "pronoun": "string",

8

  "headline": "string",

9

  "summary": "string",

10

  "contact_info": {

11

    "emails": \[\
\
12\
\
      "string"\
\
13\
\
    \],

14

    "phones": \[\
\
15\
\
      "string"\
\
16\
\
    \],

17

    "adresses": \[\
\
18\
\
      "string"\
\
19\
\
    \],

20

    "socials": \[\
\
21\
\
      {\
\
22\
\
        "type": "string",\
\
23\
\
        "name": "string"\
\
24\
\
      }\
\
25\
\
    \]

26

  },

27

  "birthdate": {

28

    "month": 0,

29

    "day": 0

30

  },

31

  "primary_locale": {

32

    "country": "string",

33

    "language": "string"

34

  },

35

  "location": "string",

36

  "websites": \[\
\
37\
\
    "string"\
\
38\
\
  \],

39

  "creator_website": {

40

    "url": "string",

41

    "description": "string"

42

  },

43

  "profile_picture_url": "string",

44

  "profile_picture_url_large": "string",

No
