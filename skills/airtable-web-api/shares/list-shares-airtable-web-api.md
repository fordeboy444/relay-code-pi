# List shares - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/list-shares
- **Summary:** get`https://api.airtable.com/v0/meta/bases/{baseId}/shares` Lists basic information of base shares. | Scope | `workspacesAndBases.shares:manage` | | <br>`state` | `"enabled" \| "disabled"` | | <br>`createdByUserId` | `string`<br><br>A user ID | | <br>`restrictedToEnterpriseMembers` |...

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Shares

List shares
===========

get`https://api.airtable.com/v0/meta/bases/{baseId}/shares`

Lists basic information of base shares.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`workspacesAndBases.shares:manage`](https://airtable.com/developers/web/api/scopes#workspaces-and-bases-shares-manage) |
| User role | Base editor |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |

### Response format

`shares`

`array of the below object`

|     |     |
| --- | --- |
| <br>`state` | `"enabled" \| "disabled"` |
| <br>`createdByUserId` | `string`<br><br>A user ID |
| <br>`createdTime` | `string`<br><br>A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z" |
| <br>`restrictedToEnterpriseMembers` | `boolean`<br><br>If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`. |
| <br>`shareId` | `string`<br><br>The full ShareId (unique identifier for the share). |
| <br>`shareTokenPrefix` | `string`<br><br>This property is deprecated<br><br>Only the first 8 characters of the shareId.<br><br>Please use `shareId` instead. |
| <br>`type` | `"base" \| "view" \| "blockInstallation"` |
| <br>`canBeSynced` | `optional<``boolean``>`<br><br>Denotes if the shared view can be synced. View and enterprise specific sync restrictions may also apply. |
| <br>`isPasswordProtected` | `boolean` |
| <br>`blockInstallationId` | `optional<``string``>` |
| <br>`restrictedToEmailDomains` | `array of strings`<br><br>If non-empty, the email domain restrictions assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may still affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility. |
| <br>`viewId` | `optional<``string``>` |
| <br>`effectiveEmailDomainAllowList` | `optional<``array of strings``>`<br><br>The effective email domain allow list factoring all restrictions, including the share's email domain restrictions and all restrictions above the share (e.g. enterprise sharing restrictions). If this field is omitted, there are no email domain restrictions on the share. Otherwise, a viewer must have an account associated with an email domain included in the allow list. If this list is empty, no viewer can see the share (e.g. no member of restrictedToEmailDomains is allowed by enterprise-wise sharing restrictions). |

!!
