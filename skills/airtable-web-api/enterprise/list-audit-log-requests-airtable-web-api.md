# List audit log requests - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/list-audit-log-requests
- **Summary:** List audit log requests get`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/auditLogs` **NOTE:** Use of this API is discouraged for new use cases.

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Endpoint

List audit log requests
=======================

get`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/auditLogs`

**NOTE:** Use of this API is discouraged for new use cases. Prefer to use the [audit log events API](https://airtable.com/developers/web/api/audit-logs-overview)
 instead.

Retrieve all audit log requests.

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

### Query parameters

|     |     |
| --- | --- |
| <br>`pageSize` | `optional<``number``>`<br><br>The number of records per page. Maximum value of 100; defaults to 10. |
| <br>`offset` | `optional<``number``>`<br><br>If there may be more to retrieve, an **offset** is returned. Pass the **offset** to the next call to retrieve the next page. Do not pass **offset** when retrieving the first page. |

### Response format

|     |     |
| --- | --- |
| <br>`offset` | `optional<``number``>` |
| <br>`auditLogs` | ``array of [`Audit logs`](https://airtable.com/developers/web/api/model/audit-log) `` |

!!
