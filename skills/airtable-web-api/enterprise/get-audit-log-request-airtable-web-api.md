# Get audit log request - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/get-audit-log-request
- **Summary:** Get audit log request get`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/auditLogs/{enterpriseAuditLogTaskId}` **NOTE:** Use of this API is discouraged for new use cases.

Endpoint

Get audit log request
=====================

get`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/auditLogs/{enterpriseAuditLogTaskId}`

**NOTE:** Use of this API is discouraged for new use cases. Prefer to use the [audit log events API](https://airtable.com/developers/web/api/audit-logs-overview)
 instead.

Retrieve a specific audit log request.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`enterprise.auditLogs:read`](https://airtable.com/developers/web/api/scopes#enterprise-audit-logs-read) |
| User role | Enterprise admin |
| Billing plans | All plans |

### Path parameters

|     |     |
| --- | --- |
| <br>`enterpriseAccountId` | `string` |
| <br>`enterpriseAuditLogTaskId` | `string` |

### Response format

[`Audit log`](https://airtable.com/developers/web/api/model/audit-log)

!!
