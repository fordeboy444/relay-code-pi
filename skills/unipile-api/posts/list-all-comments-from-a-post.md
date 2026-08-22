# List all comments from a post

- **URL:** https://developer.unipile.com/reference/postscontroller_listallcomments
- **Summary:** Returns a list of either comments on a given post or replies on a given comment.

post_id

string

required

The ID of the associated post.  
`Linkedin`: use the `social_id` from the post object (GET post or list posts). The post id visible in url will not work in all case, you can refer here for more details : [https://developer.unipile.com/docs/posts-and-comments](https://developer.unipile.com/docs/posts-and-comments)
  
`Instagram`: Need to use the **provider_id**. Short code cannot be used here (_**[www.instagram.com/p/SHORTCODE](http://www.instagram.com/p/SHORTCODE)
**_)

cursor

string

length ≥ 1

A cursor for pagination purposes. To get the next page of entries, you need to make a new request and fulfill this field with the cursor received in the preceding request. This process should be repeated until all entries have been retrieved.

limit

integer

1 to 100

A limit for the number of items returned in the response. The value can be set between 1 and 100.

sort_by

string

enum

The sort method for the post comments. Default is MOST_RECENT.

MOST_RECENTMOST_RELEVANT

Allowed:

`MOST_RECENT``MOST_RELEVANT`

comment_id

string

The id of the comment to get replies from.  
`Linkedin`: use the comment `id` returned by the comments list.

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

`CommentList`

items

array

required

items\*

Object 1

Object 2

cursor

string

required

string

Option 2

total_items

number

required

number

Option 2

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

number

Option 2

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
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
https://api1.unipile.com:13111/api/v1/posts/{post_id}/comments

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/posts/post_id/comments \\

3

     \--header 'accept: application/json'

55

}

1

{

2

  "object": "CommentList",

3

  "items": \[\
\
4\
\
    {\
\
5\
\
      "object": "Comment",\
\
6\
\
      "id": "string",\
\
7\
\
      "post_id": "string",\
\
8\
\
      "post_urn": "string",\
\
9\
\
      "thread_id": "string",\
\
10\
\
      "author": "string",\
\
11\
\
      "author_details": {\
\
12\
\
        "id": "string",\
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
      },\
\
18\
\
      "date": "string",\
\
19\
\
      "text": "string",\
\
20\
\
      "picture_url": "string",\
\
21\
\
      "reaction_counter": 0,\
\
22\
\
      "reply_counter": 0,\
\
23\
\
      "impressions_counter": 0,\
\
24\
\
      "user_reacted": "LIKE"\
\
25\
\
    },\
\
26\
\
    {\
\
27\
\
      "object": "Comment",\
\
28\
\
      "provider_id": "string",\
\
29\
\
      "author": {\
\
30\
\
        "provider_id": "string",\
\
31\
\
        "messaging_id": "string",\
\
32\
\
        "public_identifier": "string",\
\
33\
\
        "pk": "string",\
\
34\
\
        "profile_pic_url": "string",\
\
35\
\
        "is_verified": true\
\
36\
\
      },\
\
37\
\
      "text": "string",\
\
38\
\
      "created_at": 0,\
\
39\
\
      "is_covered": true,\
\
40\
\
      "child_comment_count": 0,\
\
41\
\
      "restricted_status": "string",\
\
42\
\
      "has_liked_comment": true,\
\
43\
\
      "giphy_media_info": "string",\
\
44\
\
      "parent_comment_id": "string",\
\
\
* * *\
\
\
\
Yes\
\
No
