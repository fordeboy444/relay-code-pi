# Fields

patch`https://api.airtable.com/v0/meta/bases/{baseId}/tables/{tableId}/fields/{columnId}` Updates the name, description, and/or options of a field. Field types and cell values This documents all of the currently supported field types and their corresponding cell value formats, as well as their...

## Pages in this folder

| Page | Local file | Summary |
| --- | --- | --- |
| Update field - Airtable Web API | [update-field-airtable-web-api.md](update-field-airtable-web-api.md) | patch`https://api.airtable.com/v0/meta/bases/{baseId}/tables/{tableId}/fields/{columnId}` Updates the name, description, and/or options of a field. |
| Field types and cell values - Airtable Web API | [field-types-and-cell-values-airtable-web-api.md](field-types-and-cell-values-airtable-web-api.md) | Field types and cell values This documents all of the currently supported field types and their corresponding cell value formats, as well as their option formats. **Note:** Webhooks have different cell payloads for some cell types (eg: single select ). |
| Field Type - Airtable Web API | [field-type-airtable-web-api.md](field-type-airtable-web-api.md) | *   Update table |
| Date Dependency Settings - Airtable Web API | [date-dependency-settings-airtable-web-api.md](date-dependency-settings-airtable-web-api.md) | Date Dependency Settings *   Update table *   Table model Configuration for a table's date dependency settings. \| <br>`durationFieldId` \| `string`<br><br>Must be an editable number field with unit in days. \| \| <br>`endDateFieldId` \| `string`<br><br>Must be an editable Date field. \| \|... |
| Date Dependency Metadata - Airtable Web API | [date-dependency-metadata-airtable-web-api.md](date-dependency-metadata-airtable-web-api.md) | Date Dependency Metadata *   Cell value Dependency metadata for a linked record. \| <br>`buffer` \| `number`<br><br>Buffer time between dependent tasks, in whole days (integer). |
| Create field - Airtable Web API | [create-field-airtable-web-api.md](create-field-airtable-web-api.md) | post`https://api.airtable.com/v0/meta/bases/{baseId}/tables/{tableId}/fields` Creates a new column and returns the schema for the newly created column. |
