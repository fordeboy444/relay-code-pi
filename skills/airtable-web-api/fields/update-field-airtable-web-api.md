# Update field - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/update-field
- **Summary:** patch`https://api.airtable.com/v0/meta/bases/{baseId}/tables/{tableId}/fields/{columnId}` Updates the name, description, and/or options of a field.

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Fields

Update field
============

patch`https://api.airtable.com/v0/meta/bases/{baseId}/tables/{tableId}/fields/{columnId}`

Updates the name, description, and/or options of a field. At least one must be specified.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`schema.bases:write`](https://airtable.com/developers/web/api/scopes#schema-bases-write) |
| User role | Base creator |
| Billing plans | All plans |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |
| <br>`tableId` | `string` |
| <br>`columnId` | `string` |

### Request body

`description`

`optional<``string``>`

The new description for the field (optional). If present, must be a string no longer than 20,000 characters.

`name`

`optional<``string``>`

The new name for the field (optional).

`options`

`optional<``object``>`

Type-specific field options to update.

|     |     |
| --- | --- |
| <br>`formula` | `optional<``string``>`<br><br>The new formula expression (formula fields only). Field references can use field IDs (e.g., {fldXXXXXXXXXXXXXX}) or field names (e.g., {My Field}). |

### Response format

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`type` | `optional<`[`Field Type`](https://airtable.com/developers/web/api/model/field-type)<br>`>` |
| <br>`name` | `string` |
| <br>`description` | `optional<``string``>` |
| <br>`options` | `optional<`[`Field options`](https://airtable.com/developers/web/api/field-model)<br>`>` |

!!
