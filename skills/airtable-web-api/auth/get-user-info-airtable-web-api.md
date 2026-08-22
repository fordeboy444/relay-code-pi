# Get user info - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/get-user-id-scopes
- **Summary:** get`https://api.airtable.com/v0/meta/whoami` Retrieve the user's ID.

Endpoint

Get user info
=============

get`https://api.airtable.com/v0/meta/whoami`

Retrieve the user's ID. For OAuth access tokens, the scopes associated with the token used are also returned. For tokens with the `user.email:read` scope, the user's email is also returned.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | No scopes are required for this endpoint |
| User role | Any user |
| Billing plans | All plans |

### Response format

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>A user ID |
| <br>`email` | `optional<``string``>`<br><br>The email address of the token's owner. Only returned if the token has the `user.email:read` scope. |
| <br>`scopes` | `optional<```array of [`Scopes`](https://airtable.com/developers/web/api/scopes) ```>`<br><br>The scopes the token has. Only returned if accessing via an OAuth access token. |

!!
