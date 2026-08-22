# Create audit log request - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/create-audit-log-request
- **Summary:** Create audit log request post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/auditLogs` **NOTE:** Use of this API is discouraged for new use cases.

Endpoint

Create audit log request
========================

post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/auditLogs`

**NOTE:** Use of this API is discouraged for new use cases. Prefer to use the [audit log events API](https://airtable.com/developers/web/api/audit-logs-overview)
 instead.

Create an audit log request. This starts the processing necessary to retrive the logs.

The response includes an `id`, which is then used to [check the status of and download](https://airtable.com/developers/web/api/get-audit-log-request)
 your logs.

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

### Request body

|     |     |
| --- | --- |
| <br>`timePeriod` | `string`<br><br>The time period (specific month or day) for which you want to retrieve audit logs for. Must be in either **YYYY-MM** or **YYYY-MM-DD** format and within the last 180 days. |
| <br>`filter` | `optional<``string``>`<br><br>An optional filter may be supplied. The filter value may be any of:<br><br>*   User ID<br>*   Workspace ID<br>*   Base ID<br>*   Table ID<br>*   IPv4 address (**1.2.3.4**) |

### Response format

[`Audit log`](https://airtable.com/developers/web/api/model/audit-log)

!!
