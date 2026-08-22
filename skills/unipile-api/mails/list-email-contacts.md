# List email contacts

- **URL:** https://developer.unipile.com/reference/mailscontroller_listcontacts
- **Summary:** Returns a list of contacts from the email provider. Supported for Gmail (Google OAuth) and Microsoft (Outlook) only.

cursor

string

length ≥ 1

A cursor for pagination purposes. To get the next page of entries, you need to make a new request and fulfill this field with the cursor received in the preceding request. This process should be repeated until all entries have been retrieved.

limit

integer

1 to 250

A limit for the number of items returned in the response. The value can be set between 1 and 250.

account_id

string

required

A filter to target items related to a certain account.

200

OK

===========

object

object

string

enum

required

`EmailContactList`

items

array of objects

required

items\*

object

object

string

enum

required

`contact`

id

string

required

account_id

string

required

source

string

given_name

string

middle_name

string

surname

string

nickname

string

suffix

string

birthday

string

company_name

string

job_title

string

manager_name

string

notes

string

office_location

string

picture_url

string

emails

array of objects

required

emails\*

object

email

string

required

type

string

phone_numbers

array of objects

required

phone_numbers\*

object

number

string

required

type

string

im_addresses

array of objects

required

im_addresses\*

object

im_address

string

required

type

string

physical_addresses

array of objects

required

physical_addresses\*

object

city

string

country

string

postal_code

string

state

string

street_address

string

type

string

web_pages

array of objects

required

web_pages\*

object

url

string

required

type

string

groups

array of objects

required

groups\*

object

id

string

required

cursor

object

required

Option 1

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
https://api1.unipile.com:13111/api/v1/emails/contacts

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/emails/contacts \\

3

     \--header 'accept: application/json'

62

}

1

{

2

  "object": "EmailContactList",

3

  "items": \[\
\
4\
\
    {\
\
5\
\
      "object": "contact",\
\
6\
\
      "id": "string",\
\
7\
\
      "account_id": "string",\
\
8\
\
      "source": "string",\
\
9\
\
      "given_name": "string",\
\
10\
\
      "middle_name": "string",\
\
11\
\
      "surname": "string",\
\
12\
\
      "nickname": "string",\
\
13\
\
      "suffix": "string",\
\
14\
\
      "birthday": "string",\
\
15\
\
      "company_name": "string",\
\
16\
\
      "job_title": "string",\
\
17\
\
      "manager_name": "string",\
\
18\
\
      "notes": "string",\
\
19\
\
      "office_location": "string",\
\
20\
\
      "picture_url": "string",\
\
21\
\
      "emails": \[\
\
22\
\
        {\
\
23\
\
          "email": "string",\
\
24\
\
          "type": "string"\
\
25\
\
        }\
\
26\
\
      \],\
\
27\
\
      "phone_numbers": \[\
\
28\
\
        {\
\
29\
\
          "number": "string",\
\
30\
\
          "type": "string"\
\
31\
\
        }\
\
32\
\
      \],\
\
33\
\
      "im_addresses": \[\
\
34\
\
        {\
\
35\
\
          "im_address": "string",\
\
36\
\
          "type": "string"\
\
37\
\
        }\
\
38\
\
      \],\
\
39\
\
      "physical_addresses": \[\
\
40\
\
        {\
\
41\
\
          "city": "string",\
\
42\
\
          "country": "string",\
\
43\
\
          "postal_code": "string",\
\
44\
\
          "state": "string",\
\
\
* * *\
\
\
\
Yes\
\
No
