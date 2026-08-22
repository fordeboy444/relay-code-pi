# Date Dependency Settings - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/model/date-dependency-settings
- **Summary:** Date Dependency Settings *   Update table *   Table model Configuration for a table's date dependency settings. | <br>`durationFieldId` | `string`<br><br>Must be an editable number field with unit in days. | | <br>`endDateFieldId` | `string`<br><br>Must be an editable Date field. | |...

Object

Date Dependency Settings
========================

Endpoints that reference this object:

*   [Update table](https://airtable.com/developers/web/api/update-table)
    

Models that reference this object:

*   [Table model](https://airtable.com/developers/web/api/model/table-model)
    

  
`object`

Configuration for a table's date dependency settings.

|     |     |
| --- | --- |
| <br>`durationFieldId` | `string`<br><br>Must be an editable number field with unit in days. |
| <br>`endDateFieldId` | `string`<br><br>Must be an editable Date field. |
| <br>`isEnabled` | `boolean`<br><br>Whether the date dependency settings are enabled. |
| <br>`predecessorFieldId` | `string \| null`<br><br>If present, must be an editable linked record field pointing to the same table. |
| <br>`reschedulingMode` | `"flexible" \| "fixed" \| "none"`<br><br>Determines how tasks are rescheduled relative to their predecessors. [See support article](https://support.airtable.com/docs/date-dependencies-in-airtable#supported-date-dependency-behavior-in-airtable)<br> for more. |
| <br>`shouldSkipWeekendsAndHolidays` | `boolean`<br><br>Whether to skip weekends and holidays when recalculating. |
| <br>`startDateFieldId` | `string`<br><br>Must be an editable Date field. |
| <br>`holidays` | `array of strings`<br><br>Set of holidays dates to skip when recalculating. Each date should be ISO-formatted. Has no effect if shouldSkipWeekendsAndHolidays is false. |
| <br>`isForwardOnly` | `optional<``boolean \| null``>` |

!!
