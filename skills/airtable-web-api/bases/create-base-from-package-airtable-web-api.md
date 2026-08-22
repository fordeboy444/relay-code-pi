# Create base from package - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/create-base-from-package-enterprise
- **Summary:** Create base from package post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/packages/{packageId}/install` Creates a new base by installing a package template for an enterprise account, and returns the schema for the newly created base.

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Enterprises

Create base from package
========================

post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/packages/{packageId}/install`

Creates a new base by installing a package template for an enterprise account, and returns the schema for the newly created base.

Provide the packageId as part of the request path and the packageReleaseId in the request body to create a base from a package template. You can retrieve them with the [List packages](https://airtable.com/developers/web/api/list-enterprise-packages)
 endpoint.

The package will be installed into a new base, creating all tables, fields, and views defined in the package.

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
| <br>`packageId` | `string` |

### Request body

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name for the new base. |
| <br>`packageReleaseId` | `string`<br><br>The package release ID to install. |
| <br>`workspaceId` | `string`<br><br>The workspace where the base will be created. |
| <br>`description` | `optional<``string \| null``>`<br><br>Optional description for the base. |

### Response format

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>Base ID, a unique identifier for a base. |
| <br>`tables` | ``array of [`Table models`](https://airtable.com/developers/web/api/model/table-model) `` |

!!
