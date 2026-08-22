# Add a reaction to a post

- **URL:** https://developer.unipile.com/reference/postscontroller_addpostreaction
- **Summary:** React to either a post or a post comment.

account_id

string

required

length ≥ 1

The id of the account to perform the request from.

as_organization

string

length ≥ 1

`Linkedin only` Provide the ID of an organization over which you have control to perform the action on its behalf.

post_id

string

required

length ≥ 1

The id of the post to send a reaction to.  
`Linkedin`: use the `social_id` from the post object (GET post or list posts). The post id visible in url will not work in all case, you can refer here for more details : [https://developer.unipile.com/docs/posts-and-comments](https://developer.unipile.com/docs/posts-and-comments)
  
`Instagram` Please use the provider_id

comment_id

string

length ≥ 1

The id of the comment to send a reaction to. `Linkedin`: use the comment id returned by the comments list.

reaction_type

string

enum

The type of reaction to send. If not provided, it defaults to 'like'.  
`Instagram`: The only supported reaction type is 'like'.

likecelebratesupportloveinsightfulfunny

Allowed:

`like``celebrate``support``love``insightful``funny`

201

Created. Reaction added successfully.

object

object

string

enum

required

`ReactionAdded`

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

404

Not Found

Resource not found.

The requested resource were not found.  
Post not found
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
https://api1.unipile.com:13111/api/v1/posts/reaction

1

curl \--request POST \\

2

     \--url https://api1.unipile.com:13111/api/v1/posts/reaction \\

3

     \--header 'accept: application/json' \\

4

     \--header 'content-type: application/json'

1

{

2

  "object": "ReactionAdded"

3

}

No
