# Retrieve an account

- **URL:** https://developer.unipile.com/reference/accountscontroller_getaccountbyid
- **Summary:** Retrieve the details of an account.

id

string

required

The id of the account to retrieve.

200

OK. Request succeeded.

===============================

Mobile

Mail

Google

ICloud

Outlook

Google Calendar

Whatsapp

Linkedin

Slack

Twitter

Exchange

Telegram

Instagram

Messenger

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

404

Not Found

Resource not found.

The requested resource were not found.  
Account not found
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
https://api1.unipile.com:13111/api/v1/accounts/{id}

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/accounts/id \\

3

     \--header 'accept: application/json'

34

1

{

2

  "object": "Account",

3

  "type": "MOBILE",

4

  "connection_params": {

5

    "im": {

6

      "phone_number": "string",

7

      "sim_serial_number": "string"

8

    },

9

    "call": {

10

      "phone_number": "string",

11

      "sim_serial_number": "string"

12

    }

13

  },

14

  "last_fetched_at": "2025-12-31T23:59:59.999Z",

15

  "id": "string",

16

  "name": "string",

17

  "created_at": "2025-12-31T23:59:59.999Z",

18

  "current_signature": "string",

19

  "signatures": \[\
\
20\
\
    {\
\
21\
\
      "title": "string",\
\
22\
\
      "content": "string"\
\
23\
\
    }\
\
24\
\
  \],

25

  "groups": \[\
\
26\
\
    "string"\
\
27\
\
  \],

28

  "sources": \[\
\
29\
\
    {\
\
30\
\
      "id": "string",\
\
31\
\
      "status": "OK"\
\
32\
\
    }\
\
33\
\
  \]

34

}

No
