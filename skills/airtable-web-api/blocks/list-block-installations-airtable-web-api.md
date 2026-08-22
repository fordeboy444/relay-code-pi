# List block installations - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/list-block-installations
- **Summary:** List block installations get`https://api.airtable.com/v0/meta/bases/{baseId}/blockInstallations` Lists basic information of base block installations. | <br>`state` | `"enabled" \| "disabled"` | | <br>`createdByUserId` | `string`<br><br>A user ID | | <br>`blockSlug` |...

Extensions

List block installations
========================

get`https://api.airtable.com/v0/meta/bases/{baseId}/blockInstallations`

Lists basic information of base block installations.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`workspacesAndBases:read`](https://airtable.com/developers/web/api/scopes#workspaces-and-bases-read) |
| User role | Base read-only |
| Billing plans | All plans |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |

### Response format

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`state` | `"enabled" \| "disabled"` |
| <br>`createdByUserId` | `string`<br><br>A user ID |
| <br>`createdTime` | `string`<br><br>A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z" |
| <br>`blockSlug` | `optional<``string``>`<br><br>Unique readable string identifier for a block. Only present for Airtable authored blocks. |
| <br>`blockId` | `string` |

!!
