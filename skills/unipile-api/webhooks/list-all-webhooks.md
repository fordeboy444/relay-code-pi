# List all webhooks

- **URL:** https://developer.unipile.com/reference/webhookscontroller_listwebhooks
- **Summary:** Returns a list of the webhooks.

cursor

string

length ≥ 1

A cursor for pagination purposes. To get the next page of entries, you need to make a new request and fulfill this field with the cursor received in the preceding request. This process should be repeated until all entries have been retrieved.

limit

integer

1 to 250

A limit for the number of items returned in the response. The value can be set between 1 and 250.

200

OK. Request succeeded

==============================

object

@todo

object

string

enum

required

`WebhookList`

items

array

required

items\*

Object 1

Object 2

cursor

object

required

Option 1

Option 2

400

Bad Request

Invalid parameters - Type: "errors/invalid_parameters"

One or more request parameters are invalid or missing.

Missing parameters - Type: "errors/missing_parameters"

One or more request parameters are missing.

Invalid parameters - Type: "errors/invalid_request"

One or a combination of request parameters are invalid.

Malformed request - Type: "errors/malformed_request"

The given request has been rejected by the provider.

Content too large - Type: "errors/content_too_large"

The request payload or filter query is too large and has been rejected by the provider.

Too many characters - Type: "errors/too_many_characters"

The provided content exceeds the character limit.

Unescaped characters - Type: "errors/unescaped_characters"

The request path contains unescaped characters.

Limit too high - Type: "errors/limit_too_high"

Provider cannot accept such high pagination limit. See API reference for details.

Invalid action - Type: "errors/invalid_action"

This action is invalid.

Invalid label - Type: "errors/invalid_label"

This label is invalid.

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
https://api1.unipile.com:13111/api/v1/webhooks

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/webhooks \\

3

     \--header 'accept: application/json'

82

}

1

{

2

  "object": "WebhookList",

3

  "items": \[\
\
4\
\
    {\
\
5\
\
      "object": "Webhook",\
\
6\
\
      "id": "string",\
\
7\
\
      "account_ids": \[\
\
8\
\
        {\
\
9\
\
          "id": "string",\
\
10\
\
          "name": "string",\
\
11\
\
          "type": "GOOGLE"\
\
12\
\
        }\
\
13\
\
      \],\
\
14\
\
      "enabled": true,\
\
15\
\
      "name": "string",\
\
16\
\
      "request_url": "string",\
\
17\
\
      "format": "json",\
\
18\
\
      "headers": \[\
\
19\
\
        {\
\
20\
\
          "key": "string",\
\
21\
\
          "value": "string"\
\
22\
\
        }\
\
23\
\
      \],\
\
24\
\
      "data": \[\
\
25\
\
        {\
\
26\
\
          "name": "string",\
\
27\
\
          "key": "account_id"\
\
28\
\
        }\
\
29\
\
      \],\
\
30\
\
      "events": \[\
\
31\
\
        "message_received",\
\
32\
\
        "new_relation",\
\
33\
\
        "mail_sent",\
\
34\
\
        "mail_opened",\
\
35\
\
        "creation_success",\
\
36\
\
        "calendar_event_created"\
\
37\
\
      \],\
\
38\
\
      "type": "AUTO"\
\
39\
\
    },\
\
40\
\
    {\
\
41\
\
      "object": "Webhook",\
\
42\
\
      "id": "string",\
\
43\
\
      "account_ids": \[\
\
\
* * *\
\
\
\
Yes\
\
No
