# Update workspace AI allowlist - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/update-workspace-ai-allowlist
- **Summary:** Update workspace AI allowlist post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/workspaceAiAllowlist` Add or remove workspaces from the enterprise AI allowlist.

Enterprises

Update workspace AI allowlist

Beta

=====================================

post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/workspaceAiAllowlist`

Add or remove workspaces from the enterprise AI allowlist. Accepts up to 10 workspaces per request. Only applicable when the enterprise AI workspace restriction policy is set to SPECIFIED_WORKSPACES. Set includeDescendantWorkspaces to true to include workspaces from descendant org units.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`enterprise.account:write`](https://airtable.com/developers/web/api/scopes#enterprise-account-write) |
| User role | Enterprise admin |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`enterpriseAccountId` | `string` |

### Request body

`includeDescendantWorkspaces`

`optional<``boolean``>`

`workspaces`

`array of the below object`

|     |     |
| --- | --- |
| <br>`isAllowed` | `boolean` |
| <br>`workspaceId` | `string` |

### Response format

`errors`

`array of the below object`

|     |     |
| --- | --- |
| <br>`type` | `string` |
| <br>`message` | `string` |
| <br>`workspaceId` | `string` |

!!
