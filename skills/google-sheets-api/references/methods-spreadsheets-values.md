# Google Sheets API — `spreadsheets.values` methods

All URIs are relative to `https://sheets.googleapis.com/`.

## Methods in this file

- `spreadsheets.values.append` — POST `v4/spreadsheets/{spreadsheetId}/values/{range}:append`
- `spreadsheets.values.batchClear` — POST `v4/spreadsheets/{spreadsheetId}/values:batchClear`
- `spreadsheets.values.batchClearByDataFilter` — POST `v4/spreadsheets/{spreadsheetId}/values:batchClearByDataFilter`
- `spreadsheets.values.batchGet` — GET `v4/spreadsheets/{spreadsheetId}/values:batchGet`
- `spreadsheets.values.batchGetByDataFilter` — POST `v4/spreadsheets/{spreadsheetId}/values:batchGetByDataFilter`
- `spreadsheets.values.batchUpdate` — POST `v4/spreadsheets/{spreadsheetId}/values:batchUpdate`
- `spreadsheets.values.batchUpdateByDataFilter` — POST `v4/spreadsheets/{spreadsheetId}/values:batchUpdateByDataFilter`
- `spreadsheets.values.clear` — POST `v4/spreadsheets/{spreadsheetId}/values/{range}:clear`
- `spreadsheets.values.get` — GET `v4/spreadsheets/{spreadsheetId}/values/{range}`
- `spreadsheets.values.update` — PUT `v4/spreadsheets/{spreadsheetId}/values/{range}`

## spreadsheets.values.append

Appends values to a spreadsheet. The input range is used to search for existing data and find a "table" within that range. Values will be appended to the next row of the table, starting with the first column of the table. See the [guide](https://developers.google.com/workspace/sheets/api/guides/values#appending_values) and [sample code](https://developers.google.com/workspace/sheets/api/samples/writing#append_values) for specific details of how tables are detected and data is appended. The caller must specify the spreadsheet ID, range, and a valueInputOption. The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or row-wise), it does not influence what cell the data starts being written to.

- **HTTP:** `POST`
- **Path:** `v4/spreadsheets/{spreadsheetId}/values/{range}:append`
- **Full URL:** `https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}:append`
- **Request body:** `ValueRange`
- **Response:** `AppendValuesResponse`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `range` | path | string | yes | The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of a range to search for a logical table of data. Values are appended after the last row of the table. |
| `spreadsheetId` | path | string | yes | The ID of the spreadsheet to update. |
| `includeValuesInResponse` | query | boolean | no | Determines if the update response should include the values of the cells that were appended. By default, responses do not include the updated values. |
| `insertDataOption` | query | string (enum) | no | How the input data should be inserted. |
| `responseDateTimeRenderOption` | query | string (enum) | no | Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. |
| `responseValueRenderOption` | query | string (enum) | no | Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE. |
| `valueInputOption` | query | string (enum) | no | How the input data should be interpreted. |

**`insertDataOption` enum values:**

- `OVERWRITE` — The new data overwrites existing data in the areas it is written. (Note: adding data to the end of the sheet will still insert new rows or columns so the data can be written.)
- `INSERT_ROWS` — Rows are inserted for the new data.

**`responseDateTimeRenderOption` enum values:**

- `SERIAL_NUMBER` — Instructs date, time, datetime, and duration fields to be output as doubles in "serial number" format, as popularized by Lotus 1-2-3. The whole number portion of the value (left of the decimal) counts the days since December 30th 1899. The fractional portion (right of the decimal) counts the time as a fraction of the day. For example, January 1st 1900 at noon would be 2.5, 2 because it's 2 days after December 30th 1899, and .5 because noon is half a day. February 1st 1900 at 3pm would be 33.625. This correctly treats the year 1900 as not a leap year.
- `FORMATTED_STRING` — Instructs date, time, datetime, and duration fields to be output as strings in their given number format (which depends on the spreadsheet locale).

**`responseValueRenderOption` enum values:**

- `FORMATTED_VALUE` — Values will be calculated & formatted in the response according to the cell's formatting. Formatting is based on the spreadsheet's locale, not the requesting user's locale. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then `A2` would return `"$1.23"`.
- `UNFORMATTED_VALUE` — Values will be calculated, but not formatted in the reply. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then `A2` would return the number `1.23`.
- `FORMULA` — Values will not be calculated. The reply will include the formulas. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then A2 would return `"=A1"`. Sheets treats date and time values as decimal values. This lets you perform arithmetic on them in formulas. For more information on interpreting date and time values, see [About date & time values](https://developers.google.com/workspace/sheets/api/guides/formats#about_date_time_values).

**`valueInputOption` enum values:**

- `INPUT_VALUE_OPTION_UNSPECIFIED` — Default input value. This value must not be used.
- `RAW` — The values the user has entered will not be parsed and will be stored as-is.
- `USER_ENTERED` — The values will be parsed as if the user typed them into the UI. Numbers will stay as numbers, but strings may be converted to numbers, dates, etc. following the same rules that are applied when entering text into a cell via the Google Sheets UI.


## spreadsheets.values.batchClear

Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. Only values are cleared -- all other properties of the cell (such as formatting and data validation) are kept.

- **HTTP:** `POST`
- **Path:** `v4/spreadsheets/{spreadsheetId}/values:batchClear`
- **Full URL:** `https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values:batchClear`
- **Request body:** `BatchClearValuesRequest`
- **Response:** `BatchClearValuesResponse`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `spreadsheetId` | path | string | yes | The ID of the spreadsheet to update. |


## spreadsheets.values.batchClearByDataFilter

Clears one or more ranges of values from a spreadsheet. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata). The caller must specify the spreadsheet ID and one or more DataFilters. Ranges matching any of the specified data filters will be cleared. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc.) are kept.

- **HTTP:** `POST`
- **Path:** `v4/spreadsheets/{spreadsheetId}/values:batchClearByDataFilter`
- **Full URL:** `https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values:batchClearByDataFilter`
- **Request body:** `BatchClearValuesByDataFilterRequest`
- **Response:** `BatchClearValuesByDataFilterResponse`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `spreadsheetId` | path | string | yes | The ID of the spreadsheet to update. |


## spreadsheets.values.batchGet

Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges.

- **HTTP:** `GET`
- **Path:** `v4/spreadsheets/{spreadsheetId}/values:batchGet`
- **Full URL:** `https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values:batchGet`
- **Request body:** none
- **Response:** `BatchGetValuesResponse`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `spreadsheetId` | path | string | yes | The ID of the spreadsheet to retrieve data from. |
| `dateTimeRenderOption` | query | string (enum) | no | How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. |
| `majorDimension` | query | string (enum) | no | The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `ranges=["A1:B2"],majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `ranges=["A1:B2"],majorDimension=COLUMNS` returns `[[1,3],[2,4]]`. |
| `ranges` | query | string | no | The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the range to retrieve values from. |
| `valueRenderOption` | query | string (enum) | no | How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE. |

**`dateTimeRenderOption` enum values:**

- `SERIAL_NUMBER` — Instructs date, time, datetime, and duration fields to be output as doubles in "serial number" format, as popularized by Lotus 1-2-3. The whole number portion of the value (left of the decimal) counts the days since December 30th 1899. The fractional portion (right of the decimal) counts the time as a fraction of the day. For example, January 1st 1900 at noon would be 2.5, 2 because it's 2 days after December 30th 1899, and .5 because noon is half a day. February 1st 1900 at 3pm would be 33.625. This correctly treats the year 1900 as not a leap year.
- `FORMATTED_STRING` — Instructs date, time, datetime, and duration fields to be output as strings in their given number format (which depends on the spreadsheet locale).

**`majorDimension` enum values:**

- `DIMENSION_UNSPECIFIED` — The default value, do not use.
- `ROWS` — Operates on the rows of a sheet.
- `COLUMNS` — Operates on the columns of a sheet.

**`valueRenderOption` enum values:**

- `FORMATTED_VALUE` — Values will be calculated & formatted in the response according to the cell's formatting. Formatting is based on the spreadsheet's locale, not the requesting user's locale. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then `A2` would return `"$1.23"`.
- `UNFORMATTED_VALUE` — Values will be calculated, but not formatted in the reply. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then `A2` would return the number `1.23`.
- `FORMULA` — Values will not be calculated. The reply will include the formulas. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then A2 would return `"=A1"`. Sheets treats date and time values as decimal values. This lets you perform arithmetic on them in formulas. For more information on interpreting date and time values, see [About date & time values](https://developers.google.com/workspace/sheets/api/guides/formats#about_date_time_values).


## spreadsheets.values.batchGetByDataFilter

Returns one or more ranges of values that match the specified data filters. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata). The caller must specify the spreadsheet ID and one or more DataFilters. Ranges that match any of the data filters in the request will be returned.

- **HTTP:** `POST`
- **Path:** `v4/spreadsheets/{spreadsheetId}/values:batchGetByDataFilter`
- **Full URL:** `https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values:batchGetByDataFilter`
- **Request body:** `BatchGetValuesByDataFilterRequest`
- **Response:** `BatchGetValuesByDataFilterResponse`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `spreadsheetId` | path | string | yes | The ID of the spreadsheet to retrieve data from. |


## spreadsheets.values.batchUpdate

Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more ValueRanges.

- **HTTP:** `POST`
- **Path:** `v4/spreadsheets/{spreadsheetId}/values:batchUpdate`
- **Full URL:** `https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values:batchUpdate`
- **Request body:** `BatchUpdateValuesRequest`
- **Response:** `BatchUpdateValuesResponse`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `spreadsheetId` | path | string | yes | The ID of the spreadsheet to update. |


## spreadsheets.values.batchUpdateByDataFilter

Sets values in one or more ranges of a spreadsheet. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata). The caller must specify the spreadsheet ID, a valueInputOption, and one or more DataFilterValueRanges.

- **HTTP:** `POST`
- **Path:** `v4/spreadsheets/{spreadsheetId}/values:batchUpdateByDataFilter`
- **Full URL:** `https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values:batchUpdateByDataFilter`
- **Request body:** `BatchUpdateValuesByDataFilterRequest`
- **Response:** `BatchUpdateValuesByDataFilterResponse`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `spreadsheetId` | path | string | yes | The ID of the spreadsheet to update. |


## spreadsheets.values.clear

Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.

- **HTTP:** `POST`
- **Path:** `v4/spreadsheets/{spreadsheetId}/values/{range}:clear`
- **Full URL:** `https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}:clear`
- **Request body:** `ClearValuesRequest`
- **Response:** `ClearValuesResponse`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `range` | path | string | yes | The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the values to clear. |
| `spreadsheetId` | path | string | yes | The ID of the spreadsheet to update. |


## spreadsheets.values.get

Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.

- **HTTP:** `GET`
- **Path:** `v4/spreadsheets/{spreadsheetId}/values/{range}`
- **Full URL:** `https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}`
- **Request body:** none
- **Response:** `ValueRange`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `range` | path | string | yes | The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the range to retrieve values from. |
| `spreadsheetId` | path | string | yes | The ID of the spreadsheet to retrieve data from. |
| `dateTimeRenderOption` | query | string (enum) | no | How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. |
| `majorDimension` | query | string (enum) | no | The major dimension that results should use. For example, if the spreadsheet data in Sheet1 is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=Sheet1!A1:B2?majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `range=Sheet1!A1:B2?majorDimension=COLUMNS` returns `[[1,3],[2,4]]`. |
| `valueRenderOption` | query | string (enum) | no | How values should be represented in the output. The default render option is FORMATTED_VALUE. |

**`dateTimeRenderOption` enum values:**

- `SERIAL_NUMBER` — Instructs date, time, datetime, and duration fields to be output as doubles in "serial number" format, as popularized by Lotus 1-2-3. The whole number portion of the value (left of the decimal) counts the days since December 30th 1899. The fractional portion (right of the decimal) counts the time as a fraction of the day. For example, January 1st 1900 at noon would be 2.5, 2 because it's 2 days after December 30th 1899, and .5 because noon is half a day. February 1st 1900 at 3pm would be 33.625. This correctly treats the year 1900 as not a leap year.
- `FORMATTED_STRING` — Instructs date, time, datetime, and duration fields to be output as strings in their given number format (which depends on the spreadsheet locale).

**`majorDimension` enum values:**

- `DIMENSION_UNSPECIFIED` — The default value, do not use.
- `ROWS` — Operates on the rows of a sheet.
- `COLUMNS` — Operates on the columns of a sheet.

**`valueRenderOption` enum values:**

- `FORMATTED_VALUE` — Values will be calculated & formatted in the response according to the cell's formatting. Formatting is based on the spreadsheet's locale, not the requesting user's locale. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then `A2` would return `"$1.23"`.
- `UNFORMATTED_VALUE` — Values will be calculated, but not formatted in the reply. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then `A2` would return the number `1.23`.
- `FORMULA` — Values will not be calculated. The reply will include the formulas. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then A2 would return `"=A1"`. Sheets treats date and time values as decimal values. This lets you perform arithmetic on them in formulas. For more information on interpreting date and time values, see [About date & time values](https://developers.google.com/workspace/sheets/api/guides/formats#about_date_time_values).


## spreadsheets.values.update

Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.

- **HTTP:** `PUT`
- **Path:** `v4/spreadsheets/{spreadsheetId}/values/{range}`
- **Full URL:** `https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}`
- **Request body:** `ValueRange`
- **Response:** `UpdateValuesResponse`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `range` | path | string | yes | The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the values to update. |
| `spreadsheetId` | path | string | yes | The ID of the spreadsheet to update. |
| `includeValuesInResponse` | query | boolean | no | Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty ro… |
| `responseDateTimeRenderOption` | query | string (enum) | no | Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. |
| `responseValueRenderOption` | query | string (enum) | no | Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE. |
| `valueInputOption` | query | string (enum) | no | How the input data should be interpreted. |

**`responseDateTimeRenderOption` enum values:**

- `SERIAL_NUMBER` — Instructs date, time, datetime, and duration fields to be output as doubles in "serial number" format, as popularized by Lotus 1-2-3. The whole number portion of the value (left of the decimal) counts the days since December 30th 1899. The fractional portion (right of the decimal) counts the time as a fraction of the day. For example, January 1st 1900 at noon would be 2.5, 2 because it's 2 days after December 30th 1899, and .5 because noon is half a day. February 1st 1900 at 3pm would be 33.625. This correctly treats the year 1900 as not a leap year.
- `FORMATTED_STRING` — Instructs date, time, datetime, and duration fields to be output as strings in their given number format (which depends on the spreadsheet locale).

**`responseValueRenderOption` enum values:**

- `FORMATTED_VALUE` — Values will be calculated & formatted in the response according to the cell's formatting. Formatting is based on the spreadsheet's locale, not the requesting user's locale. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then `A2` would return `"$1.23"`.
- `UNFORMATTED_VALUE` — Values will be calculated, but not formatted in the reply. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then `A2` would return the number `1.23`.
- `FORMULA` — Values will not be calculated. The reply will include the formulas. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then A2 would return `"=A1"`. Sheets treats date and time values as decimal values. This lets you perform arithmetic on them in formulas. For more information on interpreting date and time values, see [About date & time values](https://developers.google.com/workspace/sheets/api/guides/formats#about_date_time_values).

**`valueInputOption` enum values:**

- `INPUT_VALUE_OPTION_UNSPECIFIED` — Default input value. This value must not be used.
- `RAW` — The values the user has entered will not be parsed and will be stored as-is.
- `USER_ENTERED` — The values will be parsed as if the user typed them into the UI. Numbers will stay as numbers, but strings may be converted to numbers, dates, etc. following the same rules that are applied when entering text into a cell via the Google Sheets UI.

