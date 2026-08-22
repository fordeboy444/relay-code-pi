# Retrieve a post

- **URL:** https://developer.unipile.com/reference/postscontroller_getpost
- **Summary:** Retrieve the details of a post.

post_id

string

required

The id of the post.  
`Linkedin`: if the URL contains **activity**, use the numeric id (example: ...-activity-7332661864792854528-... => `7332661864792854528`).  
If the URL contains **ugcPost**, use `urn:li:ugcPost:ID`.  
If the URL contains **share**, use `urn:li:share:ID`.  
`Instagram`: You can use the **provider_id** or the **shortcode** found in the post URL. (_**[www.instagram.com/reel/SHORTCODE](http://www.instagram.com/reel/SHORTCODE)
**_)

account_id

string

required

The id of the account to perform the request from.

200

OK. Request succeeded.

===============================

Object 1

Object 2

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

Invalid account

Provided account is not designed for this feature.  
undefined
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
https://api1.unipile.com:13111/api/v1/posts/{post_id}

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/posts/post_id \\

3

     \--header 'accept: application/json'

184

}

1

{

2

  "provider": "LINKEDIN",

3

  "id": "string",

4

  "social_id": "string",

5

  "share_url": "string",

6

  "title": "string",

7

  "text": "string",

8

  "date": "string",

9

  "parsed_datetime": "string",

10

  "reaction_counter": 0,

11

  "comment_counter": 0,

12

  "repost_counter": 0,

13

  "impressions_counter": 0,

14

  "user_reacted": "LIKE",

15

  "author": {

16

    "public_identifier": "string",

17

    "id": "string",

18

    "name": "string",

19

    "is_company": true,

20

    "headline": "string",

21

    "profile_picture_url": "string"

22

  },

23

  "written_by": {

24

    "id": "string",

25

    "public_identifier": "string",

26

    "name": "string"

27

  },

28

  "permissions": {

29

    "can_react": true,

30

    "can_share": true,

31

    "can_post_comments": true

32

  },

33

  "is_repost": true,

34

  "repost_id": "string",

35

  "reposted_by": {

36

    "public_identifier": "string",

37

    "id": "string",

38

    "name": "string",

39

    "is_company": true,

40

    "headline": "string",

41

    "profile_picture_url": "string"

42

  },

43

  "repost_content": {

44

    "id": "string",

No
