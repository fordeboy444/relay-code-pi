# Revoke personal access tokens - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/revoke-enterprise-personal-access-tokens
- **Summary:** Revoke personal access tokens post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/personalAccessTokens/revoke` Revoke personal access tokens for users administered by this enterprise account.

Enterprises

Revoke personal access tokens

Beta

=====================================

post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/personalAccessTokens/revoke`

Revoke personal access tokens for users administered by this enterprise account. Only supported for root (organization-level) enterprise accounts; a request for a descendant (org unit) enterprise account returns an error. The response includes both revokedTokens and errors so callers can handle partial success.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`enterprise.user:write`](https://airtable.com/developers/web/api/scopes#enterprise-user-write) |
| User role | Enterprise admin |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`enterpriseAccountId` | `string` |

### Request body

|     |     |
| --- | --- |
| <br>`tokenIds` | `array of strings` |

### Response format

`errors`

`array of the below object`

|     |     |
| --- | --- |
| <br>`type` | `"TOKEN_NOT_FOUND" \| "ALREADY_REVOKED"` |
| <br>`message` | `string` |
| <br>`tokenId` | `string` |

`revokedTokens`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`userId` | `string`<br><br>A user ID |

!!
