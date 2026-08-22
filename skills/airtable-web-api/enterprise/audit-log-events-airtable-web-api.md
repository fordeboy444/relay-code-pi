# Audit log events - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/audit-log-events
- **Summary:** get`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/auditLogEvents` Retrieve audit log events for an enterprise.

Audit logs

Audit log events
================

get`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/auditLogEvents`

Retrieve audit log events for an enterprise. By default, this will walk all the data we're currently storing and continue walking data into the future.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`enterprise.auditLogs:read`](https://airtable.com/developers/web/api/scopes#enterprise-audit-logs-read) |
| User role | Enterprise admin |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`enterpriseAccountId` | `string` |

### Query parameters

|     |     |
| --- | --- |
| <br>`startTime` | `optional<``string``>`<br><br>Earliest audit log event to retrieve (inclusive), in ISO 8601 date time format. Optional. Defaults to the beginning of the retention period, 180 days ago. |
| <br>`endTime` | `optional<``string``>`<br><br>Latest audit log event to retrieve (exclusive), in ISO 8601 date time format. Optional. Defaults to now. |
| <br>`originatingUserId` | `optional<``string \| array of strings``>`<br><br>Retrieve audit log events originating from the provided user ID or IDs (maximum 100). Optional. |
| <br>`eventType` | `optional<```[`Audit log event types`](https://airtable.com/developers/web/api/audit-log-event-types)  \| array of [`Audit log event types`](https://airtable.com/developers/web/api/audit-log-event-types) ```>`<br><br>Retrieve audit log events falling under the provided event type or event types (maximum 100). Optional. |
| <br>`modelId` | `optional<``string \| array of strings``>`<br><br>Retrieve audit log events taking action on, or involving, the provided model ID or IDs (maximum 100). Optional. |
| <br>`pageSize` | `optional<``number``>`<br><br>The number of events per page. Maximum value of 1000; defaults to 10. |
| <br>`sortOrder` | `optional<``"descending" \| "ascending"``>`<br><br>Sort the events by timestamp in ascending or descending order. Defaults to descending. |
| <br>`previous` | `optional<``string``>`<br><br>If there are older items to retrieve, a **previous** is returned. Pass the **previous** from a prior call to retrieve the next-oldest page of items. You may pass the special value `null` to indicate "use the default behavior", which operates identically to omitting the **previous** parameter entirely. |
| <br>`next` | `optional<``string``>`<br><br>If there are newer items to retrieve, a **next** is returned. Pass the **next** from a prior call to retrieve the next-newest page of items. You may pass the special value `null` to indicate "use the default behavior", which operates identically to omitting the **next** parameter entirely. |
| <br>`category` | `optional<``"base" \| "baseCollaboration" \| "groups" \| "role" \| "share" \| "user" \| "twoFactorAuthentication" \| "oauth" \| "personalAccessToken" \| "enterprise" \| "enterpriseSettings" \| "enterpriseLicenses" \| "managedApps" \| "components" \| "publishedDataSets" \| "dataTable" \| "workspace" \| "workspaceCollaboration" \| "interface" \| "standaloneForms" \| "interfaceCollaboration" \| "view" \| "ai" \| "solution" \| "portal" \| "workflow" \| "customDomain" \| array of ("base" \| "baseCollaboration" \| "groups" \| "role" \| "share" \| "user" \| "twoFactorAuthentication" \| "oauth" \| "personalAccessToken" \| "enterprise" \| "enterpriseSettings" \| "enterpriseLicenses" \| "managedApps" \| "components" \| "publishedDataSets" \| "dataTable" \| "workspace" \| "workspaceCollaboration" \| "interface" \| "standaloneForms" \| "interfaceCollaboration" \| "view" \| "ai" \| "solution" \| "portal" \| "workflow" \| "customDomain")``>` |

### Response format

`events`

`array of the below object`

Events are returned newest to oldest.

`id`

`string`

`timestamp`

`string`

A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z"

`action`

[`Audit log event types`](https://airtable.com/developers/web/api/audit-log-event-types)

`actor`

[`Audit log actor`](https://airtable.com/developers/web/api/model/audit-log-actor)

`modelId`

`string`

`modelType`

`"base" | "attachment" | "extension_installation" | "interface" | "page" | "page_element" | "record" | "share" | "invite" | "two_factor_strategy" | "user" | "group" | "view" | "workspace" | "enterprise" | "table" | "oauth_access_token" | "personal_access_token" | "feature_kit_installation" | "managed_app" | "managed_app_release" | "component" | "component_release" | "data_table" | "data_table_import" | "published_dataset" | "role" | "portal" | "sync_integration_source" | "automation" | "sso_identity_provider"`

`payload`

[`Audit log event payloads`](https://airtable.com/developers/web/api/audit-log-event-types)

`payloadVersion`

`"1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "1.5" | "1.6" | "1.7" | "1.8" | "1.9" | "1.10" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "3.0" | "3.1" | "3.2" | "3.3" | "3.4" | "3.5" | "3.6" | "3.7" | "3.8" | "3.9" | "3.10" | "4.0" | "4.1" | "4.2" | "4.3" | "4.4" | "4.5" | "4.6" | "4.7" | "4.8" | "4.9" | "4.10" | "5.0" | "5.1" | "5.2" | "5.3" | "5.4" | "5.5" | "5.6" | "5.7" | "5.8" | "5.9" | "5.10" | "6.0" | "6.1" | "6.2" | "6.3" | "6.4" | "6.5" | "6.6" | "6.7" | "6.8" | "6.9" | "6.10"`

`context`

`object`

|     |     |
| --- | --- |
| <br>`baseId` | `optional<``string``>`<br><br>Base ID, a unique identifier for a base. |
| <br>`actionId` | `string` |
| <br>`enterpriseAccountId` | `string` |
| <br>`descendantEnterpriseAccountId` | `optional<``string``>` |
| <br>`interfaceId` | `optional<``string``>` |
| <br>`workspaceId` | `optional<``string``>` |

`origin`

`object`

|     |     |
| --- | --- |
| <br>`ipAddress` | `string` |
| <br>`userAgent` | `string` |
| <br>`oauthAccessTokenId` | `optional<``string``>` |
| <br>`personalAccessTokenId` | `optional<``string``>` |
| <br>`sessionId` | `optional<``string``>` |

`pagination`

`object`

Contains pagination tokens (if existing).

|     |     |
| --- | --- |
| <br>`next` | `string \| null`<br><br>Pagination token to retrieve the next-newest page of available items. If an endTime was provided in the query, this value will be non-null if there exist any newer items to retrieve. If an endTime was not provided in the query, this value will always be present to provide a starting point from which to continue consuming future audit log events. To retrieve the next-newest page of available items, repeat the request that generated _this_ page of items, but supply this value as the **next** query parameter. |
| <br>`previous` | `string \| null`<br><br>Pagination token used to retrieve the next-oldest page of available items. This value will be non-null in the response only if there exist any older items to retrieve. To retrieve the next-oldest page of available items, repeat the request that generated _this_ page of items, but supply this value as the **previous** query parameter. |

### Error responses

!!
