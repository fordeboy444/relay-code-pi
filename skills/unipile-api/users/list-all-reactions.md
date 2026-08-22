# List all reactions

- **URL:** https://developer.unipile.com/reference/userscontroller_listallreactions
- **Summary:** Returns a list of reactions to posts or comments from a user.

identifier

string

required

The user's provider internal id.

cursor

string

length ≥ 1

A cursor for pagination purposes. To get the next page of entries, you need to make a new request and fulfill this field with the cursor received in the preceding request. This process should be repeated until all entries have been retrieved.

limit

integer

1 to 100

A limit for the number of items returned in the response. The value can be set between 1 and 100.

account_id

string

required

The id of the account to perform the request from.

200

OK. Request succeeded.

===============================

object

object

string

enum

required

`PostReactionList`

items

array of objects

required

items\*

object

object

string

enum

required

`PostReaction`

value

string

enum

required

`LIKE` `PRAISE` `APPRECIATION` `EMPATHY` `INTEREST` `ENTERTAINMENT`

post_id

string

required

length ≥ 1

A unique identifier.

comment_id

string

length ≥ 1

A unique identifier.

author

object

required

author object

cursor

string

required

string

Option 2

paging

object

required

page_count

number

required

401

Unauthorized

Missing credentials - Type: "errors/missing_credentials"

Some credentials are necessary to perform the request.

Multiple sessions - Type: "errors/multiple_sessions"

LinkedIn limits the use of multiple sessions on certain Recruiter accounts. This error restricts access to this route only, but causing a popup to appear in the user's browser, prompting them to choose a session, which can disconnect the current account. To avoid this error, use the cookie connection method.

Wrong account - Type: "errors/wrong_account"

The provided credentials do not match the correct account.

Invalid credentials - Type: "errors/invalid_credentials"

The provided credentials are invalid.

Invalid proxy credentials - Type: "errors/invalid_proxy_credentials"

The provided proxy credentials are invalid.

Invalid IMAP configuration - Type: "errors/invalid_imap_configuration"

The provided IMAP configuration is invalid.

Invalid SMTP configuration - Type: "errors/invalid_smtp_configuration"

The provided SMTP configuration is invalid.

Invalid checkpoint solution - Type: "errors/invalid_checkpoint_solution"

The checkpoint resolution did not pass successfully. Please retry.

Checkpoint error - Type: "errors/checkpoint_error"

The checkpoint does not appear to be resolvable. Please try again and contact support if the problem persists.

Expired credentials - Type: "errors/expired_credentials"

Invalid credentials. Please check your username and password and try again.

Expired link - Type: "errors/expired_link"

This link has expired. Please return to the application and generate a new one.

Insufficient privileges - Type: "errors/insufficient_privileges"

This resource seems to be out of your scopes.

Disconnected account - Type: "errors/disconnected_account"

The account appears to be disconnected from the provider service.

Disconnected feature - Type: "errors/disconnected_feature"

The service you're trying to reach appears to be disconnected.

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

422

Unprocessable Entity

Recipient cannot be reached

Make sure that the recipient ID is valid and that the corresponding profile is not locked.  
undefined
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
https://api1.unipile.com:13111/api/v1/users/{identifier}/reactions

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/users/identifier/reactions \\

3

     \--header 'accept: application/json'

24

1

{

2

  "object": "PostReactionList",

3

  "items": \[\
\
4\
\
    {\
\
5\
\
      "object": "PostReaction",\
\
6\
\
      "value": "LIKE",\
\
7\
\
      "post_id": "string",\
\
8\
\
      "comment_id": "string",\
\
9\
\
      "author": {\
\
10\
\
        "id": "string",\
\
11\
\
        "type": "INDIVIDUAL",\
\
12\
\
        "name": "string",\
\
13\
\
        "headline": "string",\
\
14\
\
        "profile_url": "string",\
\
15\
\
        "profile_picture_url": "string",\
\
16\
\
        "network_distance": "FIRST_DEGREE"\
\
17\
\
      }\
\
18\
\
    }\
\
19\
\
  \],

20

  "cursor": "string",

21

  "paging": {

22

    "page_count": 0

23

  }

24

}

No
