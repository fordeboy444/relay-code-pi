# Get raw data from any endpoint

- **URL:** https://developer.unipile.com/reference/linkedincontroller_getrawdata
- **Summary:** This magic route is intended for advanced users who wish to use LinkedIn's features beyond our current capabilities. It enables you to create custom functionalities that are not yet supported by our platform, using connected accounts. To utilize this route, you will need to identify the specific end…

account_id

string

required

length ≥ 1

A unique identifier.

request_url

string

required

`^https://www.linkedin.com/.*$`

An url pointing to some Linkedin API feature

force_api

boolean

Set to true if you need to use an API for which you might not have an active subscription.

truefalse

bypass_redirect

boolean

Defaults to true

If true, do not follow HTTP redirects automatically.

truefalse

method

string

enum

The method to be used for the request to be performed. Default is GET.

GETPOSTPUTPATCHDELETE

Allowed:

`GET``POST``PUT``PATCH``DELETE`

headers

object

A headers object to be added to requests if needed.

headers object

body

object

A body object to be passed for POST requests.

body object

query_params

object

A query parameters object.

query_params object

encoding

boolean

Defaults to true

Whether the query params or the body (in case of x-www-form-urlencoded content) should be encoded on the go.

truefalse

200

OK. Request succeeded.

===============================

object

object

string

enum

required

`LinkedinRawData`

data

string

required

400

Bad Request

Malformed request

The given request has been rejected by the provider.  
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

422

Unprocessable Entity

Invalid account

Provided account is not designed for this feature.  
undefined
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
https://api1.unipile.com:13111/api/v1/linkedin

1

curl \--request POST \\

2

     \--url https://api1.unipile.com:13111/api/v1/linkedin \\

3

     \--header 'accept: application/json' \\

4

     \--header 'content-type: application/json'

1

{

2

  "object": "LinkedinRawData"

3

}

No
