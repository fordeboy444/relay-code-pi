# Google Sheets API — Request schemas

80 schemas: AddBandingRequest, AddChartRequest, AddConditionalFormatRuleRequest, AddDataSourceRequest, AddDimensionGroupRequest, AddFilterViewRequest, AddNamedRangeRequest, AddProtectedRangeRequest, AddSheetRequest, AddSlicerRequest, AddTableRequest, AppendCellsRequest…

## Schemas in this file

- [`AddBandingRequest`](#addbandingrequest)
- [`AddChartRequest`](#addchartrequest)
- [`AddConditionalFormatRuleRequest`](#addconditionalformatrulerequest)
- [`AddDataSourceRequest`](#adddatasourcerequest)
- [`AddDimensionGroupRequest`](#adddimensiongrouprequest)
- [`AddFilterViewRequest`](#addfilterviewrequest)
- [`AddNamedRangeRequest`](#addnamedrangerequest)
- [`AddProtectedRangeRequest`](#addprotectedrangerequest)
- [`AddSheetRequest`](#addsheetrequest)
- [`AddSlicerRequest`](#addslicerrequest)
- [`AddTableRequest`](#addtablerequest)
- [`AppendCellsRequest`](#appendcellsrequest)
- [`AppendDimensionRequest`](#appenddimensionrequest)
- [`AutoFillRequest`](#autofillrequest)
- [`AutoResizeDimensionsRequest`](#autoresizedimensionsrequest)
- [`BatchClearValuesByDataFilterRequest`](#batchclearvaluesbydatafilterrequest)
- [`BatchClearValuesRequest`](#batchclearvaluesrequest)
- [`BatchGetValuesByDataFilterRequest`](#batchgetvaluesbydatafilterrequest)
- [`BatchUpdateSpreadsheetRequest`](#batchupdatespreadsheetrequest)
- [`BatchUpdateValuesByDataFilterRequest`](#batchupdatevaluesbydatafilterrequest)
- [`BatchUpdateValuesRequest`](#batchupdatevaluesrequest)
- [`CancelDataSourceRefreshRequest`](#canceldatasourcerefreshrequest)
- [`ClearBasicFilterRequest`](#clearbasicfilterrequest)
- [`ClearValuesRequest`](#clearvaluesrequest)
- [`CopyPasteRequest`](#copypasterequest)
- [`CopySheetToAnotherSpreadsheetRequest`](#copysheettoanotherspreadsheetrequest)
- [`CreateDeveloperMetadataRequest`](#createdevelopermetadatarequest)
- [`CutPasteRequest`](#cutpasterequest)
- [`DeleteBandingRequest`](#deletebandingrequest)
- [`DeleteConditionalFormatRuleRequest`](#deleteconditionalformatrulerequest)
- [`DeleteDataSourceRequest`](#deletedatasourcerequest)
- [`DeleteDeveloperMetadataRequest`](#deletedevelopermetadatarequest)
- [`DeleteDimensionGroupRequest`](#deletedimensiongrouprequest)
- [`DeleteDimensionRequest`](#deletedimensionrequest)
- [`DeleteDuplicatesRequest`](#deleteduplicatesrequest)
- [`DeleteEmbeddedObjectRequest`](#deleteembeddedobjectrequest)
- [`DeleteFilterViewRequest`](#deletefilterviewrequest)
- [`DeleteNamedRangeRequest`](#deletenamedrangerequest)
- [`DeleteProtectedRangeRequest`](#deleteprotectedrangerequest)
- [`DeleteRangeRequest`](#deleterangerequest)
- [`DeleteSheetRequest`](#deletesheetrequest)
- [`DeleteTableRequest`](#deletetablerequest)
- [`DuplicateFilterViewRequest`](#duplicatefilterviewrequest)
- [`DuplicateSheetRequest`](#duplicatesheetrequest)
- [`FindReplaceRequest`](#findreplacerequest)
- [`GetSpreadsheetByDataFilterRequest`](#getspreadsheetbydatafilterrequest)
- [`InsertDimensionRequest`](#insertdimensionrequest)
- [`InsertRangeRequest`](#insertrangerequest)
- [`MergeCellsRequest`](#mergecellsrequest)
- [`MoveDimensionRequest`](#movedimensionrequest)
- [`PasteDataRequest`](#pastedatarequest)
- [`RandomizeRangeRequest`](#randomizerangerequest)
- [`RefreshDataSourceRequest`](#refreshdatasourcerequest)
- [`RepeatCellRequest`](#repeatcellrequest)
- [`Request`](#request)
- [`SearchDeveloperMetadataRequest`](#searchdevelopermetadatarequest)
- [`SetBasicFilterRequest`](#setbasicfilterrequest)
- [`SetDataValidationRequest`](#setdatavalidationrequest)
- [`SortRangeRequest`](#sortrangerequest)
- [`TextToColumnsRequest`](#texttocolumnsrequest)
- [`TrimWhitespaceRequest`](#trimwhitespacerequest)
- [`UnmergeCellsRequest`](#unmergecellsrequest)
- [`UpdateBandingRequest`](#updatebandingrequest)
- [`UpdateBordersRequest`](#updatebordersrequest)
- [`UpdateCellsRequest`](#updatecellsrequest)
- [`UpdateChartSpecRequest`](#updatechartspecrequest)
- [`UpdateConditionalFormatRuleRequest`](#updateconditionalformatrulerequest)
- [`UpdateDataSourceRequest`](#updatedatasourcerequest)
- [`UpdateDeveloperMetadataRequest`](#updatedevelopermetadatarequest)
- [`UpdateDimensionGroupRequest`](#updatedimensiongrouprequest)
- [`UpdateDimensionPropertiesRequest`](#updatedimensionpropertiesrequest)
- [`UpdateEmbeddedObjectBorderRequest`](#updateembeddedobjectborderrequest)
- [`UpdateEmbeddedObjectPositionRequest`](#updateembeddedobjectpositionrequest)
- [`UpdateFilterViewRequest`](#updatefilterviewrequest)
- [`UpdateNamedRangeRequest`](#updatenamedrangerequest)
- [`UpdateProtectedRangeRequest`](#updateprotectedrangerequest)
- [`UpdateSheetPropertiesRequest`](#updatesheetpropertiesrequest)
- [`UpdateSlicerSpecRequest`](#updateslicerspecrequest)
- [`UpdateSpreadsheetPropertiesRequest`](#updatespreadsheetpropertiesrequest)
- [`UpdateTableRequest`](#updatetablerequest)

## AddBandingRequest

Adds a new banded range to the spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `bandedRange` | BandedRange | The banded range to add. The bandedRangeId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a range that already exists.) |


## AddChartRequest

Adds a chart to a sheet in the spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `chart` | EmbeddedChart | The chart that should be added to the spreadsheet, including the position where it should be placed. The chartId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of an embedded object that already exists.) |


## AddConditionalFormatRuleRequest

Adds a new conditional format rule at the given index. All subsequent rules' indexes are incremented.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `rule` | ConditionalFormatRule | The rule to add. |
| `index` | integer (int32) | The zero-based index where the rule should be inserted. |


## AddDataSourceRequest

Adds a data source. After the data source is added successfully, an associated DATA_SOURCE sheet is created and an execution is triggered to refresh the sheet to read data from the data source. The request requires an additional `bigquery.readonly` OAuth scope if you are adding a BigQuery data source.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dataSource` | DataSource | The data source to add. |


## AddDimensionGroupRequest

Creates a group over the specified range. If the requested range is a superset of the range of an existing group G, then the depth of G is incremented and this new group G' has the depth of that group. For example, a group [C:D, depth 1] + [B:E] results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range is a subset of the range of an existing group G, then the depth of the new group G' becomes one greater than the depth of G. For example, a group [B:E, depth 1] + [C:D] results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range starts before and ends within, or starts within and ends after, the range of an existing group G, then the range of the existing group G becomes the union of the ranges, and the new group G' has depth one greater than the depth of G and range as the intersection of the ranges. For example, a group [B:D, depth 1] + [C:E] results in groups [B:E, depth 1] and [C:D, depth 2].

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `range` | DimensionRange | The range over which to create a group. |


## AddFilterViewRequest

Adds a filter view.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `filter` | FilterView | The filter to add. The filterViewId field is optional. If one is not set, an ID will be randomly generated. (It is an error to specify the ID of a filter that already exists.) |


## AddNamedRangeRequest

Adds a named range to the spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `namedRange` | NamedRange | The named range to add. The namedRangeId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a range that already exists.) |


## AddProtectedRangeRequest

Adds a new protected range.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `protectedRange` | ProtectedRange | The protected range to be added. The protectedRangeId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a range that already exists.) |


## AddSheetRequest

Adds a new sheet. When a sheet is added at a given index, all subsequent sheets' indexes are incremented. To add an object sheet, use AddChartRequest instead and specify EmbeddedObjectPosition.sheetId or EmbeddedObjectPosition.newSheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `properties` | SheetProperties | The properties the new sheet should have. All properties are optional. The sheetId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a sheet that already exists.) |


## AddSlicerRequest

Adds a slicer to a sheet in the spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `slicer` | Slicer | The slicer that should be added to the spreadsheet, including the position where it should be placed. The slicerId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a slicer that already exists.) |


## AddTableRequest

Adds a new table to the spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `table` | Table | Required. The table to add. |


## AppendCellsRequest

Adds new cells after the last row with data in a sheet, inserting new rows into the sheet if necessary.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `rows` | array (RowData) | The data to append. |
| `sheetId` | integer (int32) | The sheet ID to append the data to. |
| `tableId` | string | The ID of the table to append data to. The data will be only appended to the table body. This field also takes precedence over the `sheet_id` field. |
| `fields` | string (google-fieldmask) | The fields of CellData that should be updated. At least one field must be specified. The root is the CellData; 'row.values.' should not be specified. A single `"*"` can be used as short-hand for listing every field. |


## AppendDimensionRequest

Appends rows or columns to the end of a sheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dimension` | string (enum) | Whether rows or columns should be appended. |
| `sheetId` | integer (int32) | The sheet to append rows or columns to. |
| `length` | integer (int32) | The number of rows or columns to append. |

**`dimension` enum values:**

- `DIMENSION_UNSPECIFIED` — The default value, do not use.
- `ROWS` — Operates on the rows of a sheet.
- `COLUMNS` — Operates on the columns of a sheet.


## AutoFillRequest

Fills in more data based on existing data.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `useAlternateSeries` | boolean | True if we should generate data with the "alternate" series. This differs based on the type and amount of source data. |
| `range` | GridRange | The range to autofill. This will examine the range and detect the location that has data and automatically fill that data in to the rest of the range. |
| `sourceAndDestination` | SourceAndDestination | The source and destination areas to autofill. This explicitly lists the source of the autofill and where to extend that data. |


## AutoResizeDimensionsRequest

Automatically resizes one or more dimensions based on the contents of the cells in that dimension.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dataSourceSheetDimensions` | DataSourceSheetDimensionRange | The dimensions on a data source sheet to automatically resize. |
| `dimensions` | DimensionRange | The dimensions to automatically resize. |


## BatchClearValuesByDataFilterRequest

The request for clearing more than one range selected by a DataFilter in a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dataFilters` | array (DataFilter) | The DataFilters used to determine which ranges to clear. |


## BatchClearValuesRequest

The request for clearing more than one range of values in a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `ranges` | array (string) | The ranges to clear, in [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell). |


## BatchGetValuesByDataFilterRequest

The request for retrieving a range of values in a spreadsheet selected by a set of DataFilters.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `valueRenderOption` | string (enum) | How values should be represented in the output. The default render option is FORMATTED_VALUE. |
| `dateTimeRenderOption` | string (enum) | How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. |
| `dataFilters` | array (DataFilter) | The data filters used to match the ranges of values to retrieve. Ranges that match any of the specified data filters are included in the response. |
| `majorDimension` | string (enum) | The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then a request that selects that range and sets `majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas a request that sets `majorDimension=COLUMNS` returns `[[1,3],[2,4]]`. |

**`valueRenderOption` enum values:**

- `FORMATTED_VALUE` — Values will be calculated & formatted in the response according to the cell's formatting. Formatting is based on the spreadsheet's locale, not the requesting user's locale. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then `A2` would return `"$1.23"`.
- `UNFORMATTED_VALUE` — Values will be calculated, but not formatted in the reply. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then `A2` would return the number `1.23`.
- `FORMULA` — Values will not be calculated. The reply will include the formulas. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then A2 would return `"=A1"`. Sheets treats date and time values as decimal values. This lets you perform arithmetic on them in formulas. For more information on interpreting date and time values, see [About date & time values](https://developers.google.com/workspace/sheets/api/guides/formats#about_date_time_values).

**`dateTimeRenderOption` enum values:**

- `SERIAL_NUMBER` — Instructs date, time, datetime, and duration fields to be output as doubles in "serial number" format, as popularized by Lotus 1-2-3. The whole number portion of the value (left of the decimal) counts the days since December 30th 1899. The fractional portion (right of the decimal) counts the time as a fraction of the day. For example, January 1st 1900 at noon would be 2.5, 2 because it's 2 days after December 30th 1899, and .5 because noon is half a day. February 1st 1900 at 3pm would be 33.625. This correctly treats the year 1900 as not a leap year.
- `FORMATTED_STRING` — Instructs date, time, datetime, and duration fields to be output as strings in their given number format (which depends on the spreadsheet locale).

**`majorDimension` enum values:**

- `DIMENSION_UNSPECIFIED` — The default value, do not use.
- `ROWS` — Operates on the rows of a sheet.
- `COLUMNS` — Operates on the columns of a sheet.


## BatchUpdateSpreadsheetRequest

The request for updating any aspect of a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `responseIncludeGridData` | boolean | True if grid data should be returned. Meaningful only if include_spreadsheet_in_response is 'true'. This parameter is ignored if a field mask was set in the request. |
| `requests` | array (Request) | A list of updates to apply to the spreadsheet. Requests will be applied in the order they are specified. If any request is not valid, no requests will be applied. |
| `includeSpreadsheetInResponse` | boolean | Determines if the update response should include the spreadsheet resource. |
| `responseRanges` | array (string) | Limits the ranges included in the response spreadsheet. Meaningful only if include_spreadsheet_in_response is 'true'. |


## BatchUpdateValuesByDataFilterRequest

The request for updating more than one range of values in a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `valueInputOption` | string (enum) | How the input data should be interpreted. |
| `data` | array (DataFilterValueRange) | The new values to apply to the spreadsheet. If more than one range is matched by the specified DataFilter the specified values are applied to all of those ranges. |
| `responseDateTimeRenderOption` | string (enum) | Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. |
| `responseValueRenderOption` | string (enum) | Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE. |
| `includeValuesInResponse` | boolean | Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. The `updatedData` field within each of the BatchUpdateValuesResponse.responses contains the updated values. If the range to write was larger than the… |

**`valueInputOption` enum values:**

- `INPUT_VALUE_OPTION_UNSPECIFIED` — Default input value. This value must not be used.
- `RAW` — The values the user has entered will not be parsed and will be stored as-is.
- `USER_ENTERED` — The values will be parsed as if the user typed them into the UI. Numbers will stay as numbers, but strings may be converted to numbers, dates, etc. following the same rules that are applied when entering text into a cell via the Google Sheets UI.

**`responseDateTimeRenderOption` enum values:**

- `SERIAL_NUMBER` — Instructs date, time, datetime, and duration fields to be output as doubles in "serial number" format, as popularized by Lotus 1-2-3. The whole number portion of the value (left of the decimal) counts the days since December 30th 1899. The fractional portion (right of the decimal) counts the time as a fraction of the day. For example, January 1st 1900 at noon would be 2.5, 2 because it's 2 days after December 30th 1899, and .5 because noon is half a day. February 1st 1900 at 3pm would be 33.625. This correctly treats the year 1900 as not a leap year.
- `FORMATTED_STRING` — Instructs date, time, datetime, and duration fields to be output as strings in their given number format (which depends on the spreadsheet locale).

**`responseValueRenderOption` enum values:**

- `FORMATTED_VALUE` — Values will be calculated & formatted in the response according to the cell's formatting. Formatting is based on the spreadsheet's locale, not the requesting user's locale. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then `A2` would return `"$1.23"`.
- `UNFORMATTED_VALUE` — Values will be calculated, but not formatted in the reply. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then `A2` would return the number `1.23`.
- `FORMULA` — Values will not be calculated. The reply will include the formulas. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then A2 would return `"=A1"`. Sheets treats date and time values as decimal values. This lets you perform arithmetic on them in formulas. For more information on interpreting date and time values, see [About date & time values](https://developers.google.com/workspace/sheets/api/guides/formats#about_date_time_values).


## BatchUpdateValuesRequest

The request for updating more than one range of values in a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `includeValuesInResponse` | boolean | Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. The `updatedData` field within each of the BatchUpdateValuesResponse.responses contains the updated values. If the range to write was larger than the… |
| `responseValueRenderOption` | string (enum) | Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE. |
| `valueInputOption` | string (enum) | How the input data should be interpreted. |
| `data` | array (ValueRange) | The new values to apply to the spreadsheet. |
| `responseDateTimeRenderOption` | string (enum) | Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. |

**`responseValueRenderOption` enum values:**

- `FORMATTED_VALUE` — Values will be calculated & formatted in the response according to the cell's formatting. Formatting is based on the spreadsheet's locale, not the requesting user's locale. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then `A2` would return `"$1.23"`.
- `UNFORMATTED_VALUE` — Values will be calculated, but not formatted in the reply. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then `A2` would return the number `1.23`.
- `FORMULA` — Values will not be calculated. The reply will include the formulas. For example, if `A1` is `1.23` and `A2` is `=A1` and formatted as currency, then A2 would return `"=A1"`. Sheets treats date and time values as decimal values. This lets you perform arithmetic on them in formulas. For more information on interpreting date and time values, see [About date & time values](https://developers.google.com/workspace/sheets/api/guides/formats#about_date_time_values).

**`valueInputOption` enum values:**

- `INPUT_VALUE_OPTION_UNSPECIFIED` — Default input value. This value must not be used.
- `RAW` — The values the user has entered will not be parsed and will be stored as-is.
- `USER_ENTERED` — The values will be parsed as if the user typed them into the UI. Numbers will stay as numbers, but strings may be converted to numbers, dates, etc. following the same rules that are applied when entering text into a cell via the Google Sheets UI.

**`responseDateTimeRenderOption` enum values:**

- `SERIAL_NUMBER` — Instructs date, time, datetime, and duration fields to be output as doubles in "serial number" format, as popularized by Lotus 1-2-3. The whole number portion of the value (left of the decimal) counts the days since December 30th 1899. The fractional portion (right of the decimal) counts the time as a fraction of the day. For example, January 1st 1900 at noon would be 2.5, 2 because it's 2 days after December 30th 1899, and .5 because noon is half a day. February 1st 1900 at 3pm would be 33.625. This correctly treats the year 1900 as not a leap year.
- `FORMATTED_STRING` — Instructs date, time, datetime, and duration fields to be output as strings in their given number format (which depends on the spreadsheet locale).


## CancelDataSourceRefreshRequest

Cancels one or multiple refreshes of data source objects in the spreadsheet by the specified references. The request requires an additional `bigquery.readonly` OAuth scope if you are cancelling a refresh on a BigQuery data source.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `references` | DataSourceObjectReferences | References to data source objects whose refreshes are to be cancelled. |
| `dataSourceId` | string | Reference to a DataSource. If specified, cancels all associated data source object refreshes for this data source. |
| `isAll` | boolean | Cancels all existing data source object refreshes for all data sources in the spreadsheet. |


## ClearBasicFilterRequest

Clears the basic filter, if any exists on the sheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `sheetId` | integer (int32) | The sheet ID on which the basic filter should be cleared. |


## ClearValuesRequest

The request for clearing a range of values in a spreadsheet.

**Type:** `object`

_No properties._


## CopyPasteRequest

Copies data from the source to the destination.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `pasteType` | string (enum) | What kind of data to paste. |
| `pasteOrientation` | string (enum) | How that data should be oriented when pasting. |
| `source` | GridRange | The source range to copy. |
| `destination` | GridRange | The location to paste to. If the range covers a span that's a multiple of the source's height or width, then the data will be repeated to fill in the destination range. If the range is smaller than the source range, the entire source data will still be copied (beyond the end of the destination rang… |

**`pasteType` enum values:**

- `PASTE_NORMAL` — Paste values, formulas, formats, and merges.
- `PASTE_VALUES` — Paste the values ONLY without formats, formulas, or merges.
- `PASTE_FORMAT` — Paste the format only, excluding data validation.
- `PASTE_NO_BORDERS` — Like `PASTE_NORMAL` but without borders.
- `PASTE_FORMULA` — Paste the formulas only.
- `PASTE_DATA_VALIDATION` — Paste the data validation only.
- `PASTE_CONDITIONAL_FORMATTING` — Paste the conditional formatting rules only.

**`pasteOrientation` enum values:**

- `NORMAL` — Paste normally.
- `TRANSPOSE` — Paste transposed, where all rows become columns and vice versa.


## CopySheetToAnotherSpreadsheetRequest

The request to copy a sheet across spreadsheets.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `destinationSpreadsheetId` | string | The ID of the spreadsheet to copy the sheet to. |


## CreateDeveloperMetadataRequest

A request to create developer metadata.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `developerMetadata` | DeveloperMetadata | The developer metadata to create. |


## CutPasteRequest

Moves data from the source to the destination.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `pasteType` | string (enum) | What kind of data to paste. All the source data will be cut, regardless of what is pasted. |
| `source` | GridRange | The source data to cut. |
| `destination` | GridCoordinate | The top-left coordinate where the data should be pasted. |

**`pasteType` enum values:**

- `PASTE_NORMAL` — Paste values, formulas, formats, and merges.
- `PASTE_VALUES` — Paste the values ONLY without formats, formulas, or merges.
- `PASTE_FORMAT` — Paste the format only, excluding data validation.
- `PASTE_NO_BORDERS` — Like `PASTE_NORMAL` but without borders.
- `PASTE_FORMULA` — Paste the formulas only.
- `PASTE_DATA_VALIDATION` — Paste the data validation only.
- `PASTE_CONDITIONAL_FORMATTING` — Paste the conditional formatting rules only.


## DeleteBandingRequest

Removes the banded range with the given ID from the spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `bandedRangeId` | integer (int32) | The ID of the banded range to delete. |


## DeleteConditionalFormatRuleRequest

Deletes a conditional format rule at the given index. All subsequent rules' indexes are decremented.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `sheetId` | integer (int32) | The sheet the rule is being deleted from. |
| `index` | integer (int32) | The zero-based index of the rule to be deleted. |


## DeleteDataSourceRequest

Deletes a data source. The request also deletes the associated data source sheet, and unlinks all associated data source objects.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dataSourceId` | string | The ID of the data source to delete. |


## DeleteDeveloperMetadataRequest

A request to delete developer metadata.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dataFilter` | DataFilter | The data filter describing the criteria used to select which developer metadata entry to delete. |


## DeleteDimensionGroupRequest

Deletes a group over the specified range by decrementing the depth of the dimensions in the range. For example, assume the sheet has a depth-1 group over B:E and a depth-2 group over C:D. Deleting a group over D:E leaves the sheet with a depth-1 group over B:D and a depth-2 group over C:C.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `range` | DimensionRange | The range of the group to be deleted. |


## DeleteDimensionRequest

Deletes the dimensions from the sheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `range` | DimensionRange | The dimensions to delete from the sheet. |


## DeleteDuplicatesRequest

Removes rows within this range that contain values in the specified columns that are duplicates of values in any previous row. Rows with identical values but different letter cases, formatting, or formulas are considered to be duplicates. This request also removes duplicate rows hidden from view (for example, due to a filter). When removing duplicates, the first instance of each duplicate row scanning from the top downwards is kept in the resulting range. Content outside of the specified range isn't removed, and rows considered duplicates do not have to be adjacent to each other in the range.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `range` | GridRange | The range to remove duplicates rows from. |
| `comparisonColumns` | array (DimensionRange) | The columns in the range to analyze for duplicate values. If no columns are selected then all columns are analyzed for duplicates. |


## DeleteEmbeddedObjectRequest

Deletes the embedded object with the given ID.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `objectId` | integer (int32) | The ID of the embedded object to delete. |


## DeleteFilterViewRequest

Deletes a particular filter view.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `filterId` | integer (int32) | The ID of the filter to delete. |


## DeleteNamedRangeRequest

Removes the named range with the given ID from the spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `namedRangeId` | string | The ID of the named range to delete. |


## DeleteProtectedRangeRequest

Deletes the protected range with the given ID.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `protectedRangeId` | integer (int32) | The ID of the protected range to delete. |


## DeleteRangeRequest

Deletes a range of cells, shifting other cells into the deleted area.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `shiftDimension` | string (enum) | The dimension from which deleted cells will be replaced with. If ROWS, existing cells will be shifted upward to replace the deleted cells. If COLUMNS, existing cells will be shifted left to replace the deleted cells. |
| `range` | GridRange | The range of cells to delete. |

**`shiftDimension` enum values:**

- `DIMENSION_UNSPECIFIED` — The default value, do not use.
- `ROWS` — Operates on the rows of a sheet.
- `COLUMNS` — Operates on the columns of a sheet.


## DeleteSheetRequest

Deletes the requested sheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `sheetId` | integer (int32) | The ID of the sheet to delete. If the sheet is of DATA_SOURCE type, the associated DataSource is also deleted. |


## DeleteTableRequest

Removes the table with the given ID from the spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `tableId` | string | The ID of the table to delete. |


## DuplicateFilterViewRequest

Duplicates a particular filter view.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `filterId` | integer (int32) | The ID of the filter being duplicated. |


## DuplicateSheetRequest

Duplicates the contents of a sheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `sourceSheetId` | integer (int32) | The sheet to duplicate. If the source sheet is of DATA_SOURCE type, its backing DataSource is also duplicated and associated with the new copy of the sheet. No data execution is triggered, the grid data of this sheet is also copied over but only available after the batch request completes. |
| `newSheetName` | string | The name of the new sheet. If empty, a new name is chosen for you. |
| `insertSheetIndex` | integer (int32) | The zero-based index where the new sheet should be inserted. The index of all sheets after this are incremented. |
| `newSheetId` | integer (int32) | If set, the ID of the new sheet. If not set, an ID is chosen. If set, the ID must not conflict with any existing sheet ID. If set, it must be non-negative. |


## FindReplaceRequest

Finds and replaces data in cells over a range, sheet, or all sheets.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `allSheets` | boolean | True to find/replace over all sheets. |
| `matchEntireCell` | boolean | True if the find value should match the entire cell. |
| `searchByRegex` | boolean | True if the find value is a regex. The regular expression and replacement should follow Java regex rules at https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html. The replacement string is allowed to refer to capturing groups. For example, if one cell has the contents `"Google Shee… |
| `matchCase` | boolean | True if the search is case sensitive. |
| `replacement` | string | The value to use as the replacement. |
| `includeFormulas` | boolean | True if the search should include cells with formulas. False to skip cells with formulas. |
| `sheetId` | integer (int32) | The sheet to find/replace over. |
| `range` | GridRange | The range to find/replace over. |
| `find` | string | The value to search. |


## GetSpreadsheetByDataFilterRequest

The request for retrieving a Spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dataFilters` | array (DataFilter) | The DataFilters used to select which ranges to retrieve from the spreadsheet. |
| `excludeTablesInBandedRanges` | boolean | True if tables should be excluded in the banded ranges. False if not set. |
| `includeGridData` | boolean | True if grid data should be returned. This parameter is ignored if a field mask was set in the request. |


## InsertDimensionRequest

Inserts rows or columns in a sheet at a particular index.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `range` | DimensionRange | The dimensions to insert. Both the start and end indexes must be bounded. |
| `inheritFromBefore` | boolean | Whether dimension properties should be extended from the dimensions before or after the newly inserted dimensions. True to inherit from the dimensions before (in which case the start index must be greater than 0), and false to inherit from the dimensions after. For example, if row index 0 has red b… |


## InsertRangeRequest

Inserts cells into a range, shifting the existing cells over or down.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `range` | GridRange | The range to insert new cells into. The range is constrained to the current sheet boundaries. |
| `shiftDimension` | string (enum) | The dimension which will be shifted when inserting cells. If ROWS, existing cells will be shifted down. If COLUMNS, existing cells will be shifted right. |

**`shiftDimension` enum values:**

- `DIMENSION_UNSPECIFIED` — The default value, do not use.
- `ROWS` — Operates on the rows of a sheet.
- `COLUMNS` — Operates on the columns of a sheet.


## MergeCellsRequest

Merges all cells in the range.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `range` | GridRange | The range of cells to merge. |
| `mergeType` | string (enum) | How the cells should be merged. |

**`mergeType` enum values:**

- `MERGE_ALL` — Create a single merge from the range
- `MERGE_COLUMNS` — Create a merge for each column in the range
- `MERGE_ROWS` — Create a merge for each row in the range


## MoveDimensionRequest

Moves one or more rows or columns.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `source` | DimensionRange | The source dimensions to move. |
| `destinationIndex` | integer (int32) | The zero-based start index of where to move the source data to, based on the coordinates *before* the source data is removed from the grid. Existing data will be shifted down or right (depending on the dimension) to make room for the moved dimensions. The source dimensions are removed from the grid… |


## PasteDataRequest

Inserts data into the spreadsheet starting at the specified coordinate.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `coordinate` | GridCoordinate | The coordinate at which the data should start being inserted. |
| `delimiter` | string | The delimiter in the data. |
| `type` | string (enum) | How the data should be pasted. |
| `data` | string | The data to insert. |
| `html` | boolean | True if the data is HTML. |

**`type` enum values:**

- `PASTE_NORMAL` — Paste values, formulas, formats, and merges.
- `PASTE_VALUES` — Paste the values ONLY without formats, formulas, or merges.
- `PASTE_FORMAT` — Paste the format only, excluding data validation.
- `PASTE_NO_BORDERS` — Like `PASTE_NORMAL` but without borders.
- `PASTE_FORMULA` — Paste the formulas only.
- `PASTE_DATA_VALIDATION` — Paste the data validation only.
- `PASTE_CONDITIONAL_FORMATTING` — Paste the conditional formatting rules only.


## RandomizeRangeRequest

Randomizes the order of the rows in a range.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `range` | GridRange | The range to randomize. |


## RefreshDataSourceRequest

Refreshes one or multiple data source objects in the spreadsheet by the specified references. The request requires an additional `bigquery.readonly` OAuth scope if you are refreshing a BigQuery data source. If there are multiple refresh requests referencing the same data source objects in one batch, only the last refresh request is processed, and all those requests will have the same response accordingly.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `force` | boolean | Refreshes the data source objects regardless of the current state. If not set and a referenced data source object was in error state, the refresh will fail immediately. |
| `references` | DataSourceObjectReferences | References to data source objects to refresh. |
| `dataSourceId` | string | Reference to a DataSource. If specified, refreshes all associated data source objects for the data source. |
| `isAll` | boolean | Refreshes all existing data source objects in the spreadsheet. |


## RepeatCellRequest

Updates all cells in the range to the values in the given Cell object. Only the fields listed in the fields field are updated; others are unchanged. If writing a cell with a formula, the formula's ranges will automatically increment for each field in the range. For example, if writing a cell with formula `=A1` into range B2:C4, B2 would be `=A1`, B3 would be `=A2`, B4 would be `=A3`, C2 would be `=B1`, C3 would be `=B2`, C4 would be `=B3`. To keep the formula's ranges static, use the `$` indicator. For example, use the formula `=$A$1` to prevent both the row and the column from incrementing.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `fields` | string (google-fieldmask) | The fields that should be updated. At least one field must be specified. The root `cell` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. |
| `range` | GridRange | The range to repeat the cell in. |
| `cell` | CellData | The data to write. |


## Request

A single kind of update to apply to a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `sortRange` | SortRangeRequest | Sorts data in a range. |
| `deleteDimension` | DeleteDimensionRequest | Deletes rows or columns in a sheet. |
| `deleteDeveloperMetadata` | DeleteDeveloperMetadataRequest | Deletes developer metadata |
| `moveDimension` | MoveDimensionRequest | Moves rows or columns to another location in a sheet. |
| `textToColumns` | TextToColumnsRequest | Converts a column of text into many columns of text. |
| `trimWhitespace` | TrimWhitespaceRequest | Trims cells of whitespace (such as spaces, tabs, or new lines). |
| `updateSlicerSpec` | UpdateSlicerSpecRequest | Updates a slicer's specifications. |
| `deleteEmbeddedObject` | DeleteEmbeddedObjectRequest | Deletes an embedded object (e.g, chart, image) in a sheet. |
| `addSlicer` | AddSlicerRequest | Adds a slicer. |
| `unmergeCells` | UnmergeCellsRequest | Unmerges merged cells. |
| `addProtectedRange` | AddProtectedRangeRequest | Adds a protected range. |
| `setBasicFilter` | SetBasicFilterRequest | Sets the basic filter on a sheet. |
| `clearBasicFilter` | ClearBasicFilterRequest | Clears the basic filter on a sheet. |
| `updateTable` | UpdateTableRequest | Updates a table. |
| `updateConditionalFormatRule` | UpdateConditionalFormatRuleRequest | Updates an existing conditional format rule. |
| `addTable` | AddTableRequest | Adds a table. |
| `deleteConditionalFormatRule` | DeleteConditionalFormatRuleRequest | Deletes an existing conditional format rule. |
| `addBanding` | AddBandingRequest | Adds a new banded range |
| `duplicateFilterView` | DuplicateFilterViewRequest | Duplicates a filter view. |
| `updateBorders` | UpdateBordersRequest | Updates the borders in a range of cells. |
| `updateProtectedRange` | UpdateProtectedRangeRequest | Updates a protected range. |
| `autoFill` | AutoFillRequest | Automatically fills in more data based on existing data. |
| `createDeveloperMetadata` | CreateDeveloperMetadataRequest | Creates new developer metadata |
| `updateDataSource` | UpdateDataSourceRequest | Updates a data source. |
| `updateEmbeddedObjectPosition` | UpdateEmbeddedObjectPositionRequest | Updates an embedded object's (e.g. chart, image) position. |
| `autoResizeDimensions` | AutoResizeDimensionsRequest | Automatically resizes one or more dimensions based on the contents of the cells in that dimension. |
| `addDataSource` | AddDataSourceRequest | Adds a data source. |
| `refreshDataSource` | RefreshDataSourceRequest | Refreshes one or multiple data sources and associated dbobjects. |
| `setDataValidation` | SetDataValidationRequest | Sets data validation for one or more cells. |
| `addDimensionGroup` | AddDimensionGroupRequest | Creates a group over the specified range. |
| `cancelDataSourceRefresh` | CancelDataSourceRefreshRequest | Cancels refreshes of one or multiple data sources and associated dbobjects. |
| `repeatCell` | RepeatCellRequest | Repeats a single cell across a range. |
| `pasteData` | PasteDataRequest | Pastes data (HTML or delimited) into a sheet. |
| `deleteDuplicates` | DeleteDuplicatesRequest | Removes rows containing duplicate values in specified columns of a cell range. |
| `deleteRange` | DeleteRangeRequest | Deletes a range of cells from a sheet, shifting the remaining cells. |
| `updateDeveloperMetadata` | UpdateDeveloperMetadataRequest | Updates an existing developer metadata entry |
| `deleteTable` | DeleteTableRequest | A request for deleting a table. |
| `updateEmbeddedObjectBorder` | UpdateEmbeddedObjectBorderRequest | Updates an embedded object's border. |
| `insertRange` | InsertRangeRequest | Inserts new cells in a sheet, shifting the existing cells. |
| `findReplace` | FindReplaceRequest | Finds and replaces occurrences of some text with other text. |
| `insertDimension` | InsertDimensionRequest | Inserts new rows or columns in a sheet. |
| `deleteFilterView` | DeleteFilterViewRequest | Deletes a filter view from a sheet. |
| `updateDimensionGroup` | UpdateDimensionGroupRequest | Updates the state of the specified group. |
| `addNamedRange` | AddNamedRangeRequest | Adds a named range. |
| `deleteProtectedRange` | DeleteProtectedRangeRequest | Deletes a protected range. |
| `randomizeRange` | RandomizeRangeRequest | Randomizes the order of the rows in a range. |
| `appendDimension` | AppendDimensionRequest | Appends dimensions to the end of a sheet. |
| `cutPaste` | CutPasteRequest | Cuts data from one area and pastes it to another. |
| `updateCells` | UpdateCellsRequest | Updates many cells at once. |
| `mergeCells` | MergeCellsRequest | Merges cells together. |
| `addFilterView` | AddFilterViewRequest | Adds a filter view. |
| `addChart` | AddChartRequest | Adds a chart. |
| `copyPaste` | CopyPasteRequest | Copies data from one area and pastes it to another. |
| `updateBanding` | UpdateBandingRequest | Updates a banded range |
| `deleteBanding` | DeleteBandingRequest | Removes a banded range |
| `deleteDimensionGroup` | DeleteDimensionGroupRequest | Deletes a group over the specified range. |
| `appendCells` | AppendCellsRequest | Appends cells after the last row with data in a sheet. |
| `deleteNamedRange` | DeleteNamedRangeRequest | Deletes a named range. |
| `deleteDataSource` | DeleteDataSourceRequest | Deletes a data source. |
| `updateNamedRange` | UpdateNamedRangeRequest | Updates a named range. |
| `deleteSheet` | DeleteSheetRequest | Deletes a sheet. |
| `addConditionalFormatRule` | AddConditionalFormatRuleRequest | Adds a new conditional format rule. |
| `updateFilterView` | UpdateFilterViewRequest | Updates the properties of a filter view. |
| `updateSheetProperties` | UpdateSheetPropertiesRequest | Updates a sheet's properties. |
| `updateDimensionProperties` | UpdateDimensionPropertiesRequest | Updates dimensions' properties. |
| `duplicateSheet` | DuplicateSheetRequest | Duplicates a sheet. |
| `addSheet` | AddSheetRequest | Adds a sheet. |
| `updateSpreadsheetProperties` | UpdateSpreadsheetPropertiesRequest | Updates the spreadsheet's properties. |
| `updateChartSpec` | UpdateChartSpecRequest | Updates a chart's specifications. |


## SearchDeveloperMetadataRequest

A request to retrieve all developer metadata matching the set of specified criteria.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dataFilters` | array (DataFilter) | The data filters describing the criteria used to determine which DeveloperMetadata entries to return. DeveloperMetadata matching any of the specified filters are included in the response. |


## SetBasicFilterRequest

Sets the basic filter associated with a sheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `filter` | BasicFilter | The filter to set. |


## SetDataValidationRequest

Sets a data validation rule to every cell in the range. To clear validation in a range, call this with no rule specified.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `rule` | DataValidationRule | The data validation rule to set on each cell in the range, or empty to clear the data validation in the range. |
| `range` | GridRange | The range the data validation rule should apply to. |
| `filteredRowsIncluded` | boolean | Optional. If true, the data validation rule will be applied to the filtered rows as well. |


## SortRangeRequest

Sorts data in rows based on a sort order per column.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `sortSpecs` | array (SortSpec) | The sort order per column. Later specifications are used when values are equal in the earlier specifications. |
| `range` | GridRange | The range to sort. |


## TextToColumnsRequest

Splits a column of text into multiple columns, based on a delimiter in each cell.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `source` | GridRange | The source data range. This must span exactly one column. |
| `delimiterType` | string (enum) | The delimiter type to use. |
| `delimiter` | string | The delimiter to use. Used only if delimiterType is CUSTOM. |

**`delimiterType` enum values:**

- `DELIMITER_TYPE_UNSPECIFIED` — Default value. This value must not be used.
- `COMMA` — ","
- `SEMICOLON` — ";"
- `PERIOD` — "."
- `SPACE` — " "
- `CUSTOM` — A custom value as defined in delimiter.
- `AUTODETECT` — Automatically detect columns.


## TrimWhitespaceRequest

Trims the whitespace (such as spaces, tabs, or new lines) in every cell in the specified range. This request removes all whitespace from the start and end of each cell's text, and reduces any subsequence of remaining whitespace characters to a single space. If the resulting trimmed text starts with a '+' or '=' character, the text remains as a string value and isn't interpreted as a formula.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `range` | GridRange | The range whose cells to trim. |


## UnmergeCellsRequest

Unmerges cells in the given range.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `range` | GridRange | The range within which all cells should be unmerged. If the range spans multiple merges, all will be unmerged. The range must not partially span any merge. |


## UpdateBandingRequest

Updates properties of the supplied banded range.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `bandedRange` | BandedRange | The banded range to update with the new properties. |
| `fields` | string (google-fieldmask) | The fields that should be updated. At least one field must be specified. The root `bandedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. |


## UpdateBordersRequest

Updates the borders of a range. If a field is not set in the request, that means the border remains as-is. For example, with two subsequent UpdateBordersRequest: 1. range: A1:A5 `{ top: RED, bottom: WHITE }` 2. range: A1:A5 `{ left: BLUE }` That would result in A1:A5 having a borders of `{ top: RED, bottom: WHITE, left: BLUE }`. If you want to clear a border, explicitly set the style to NONE.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `right` | Border | The border to put at the right of the range. |
| `range` | GridRange | The range whose borders should be updated. |
| `top` | Border | The border to put at the top of the range. |
| `left` | Border | The border to put at the left of the range. |
| `bottom` | Border | The border to put at the bottom of the range. |
| `innerHorizontal` | Border | The horizontal border to put within the range. |
| `innerVertical` | Border | The vertical border to put within the range. |


## UpdateCellsRequest

Updates all cells in a range with new data.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `start` | GridCoordinate | The coordinate to start writing data at. Any number of rows and columns (including a different number of columns per row) may be written. |
| `range` | GridRange | The range to write data to. If the data in rows does not cover the entire requested range, the fields matching those set in fields will be cleared. |
| `rows` | array (RowData) | The data to write. |
| `fields` | string (google-fieldmask) | The fields of CellData that should be updated. At least one field must be specified. The root is the CellData; 'row.values.' should not be specified. A single `"*"` can be used as short-hand for listing every field. |


## UpdateChartSpecRequest

Updates a chart's specifications. (This does not move or resize a chart. To move or resize a chart, use UpdateEmbeddedObjectPositionRequest.)

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `spec` | ChartSpec | The specification to apply to the chart. |
| `chartId` | integer (int32) | The ID of the chart to update. |


## UpdateConditionalFormatRuleRequest

Updates a conditional format rule at the given index, or moves a conditional format rule to another index.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `newIndex` | integer (int32) | The zero-based new index the rule should end up at. |
| `rule` | ConditionalFormatRule | The rule that should replace the rule at the given index. |
| `index` | integer (int32) | The zero-based index of the rule that should be replaced or moved. |
| `sheetId` | integer (int32) | The sheet of the rule to move. Required if new_index is set, unused otherwise. |


## UpdateDataSourceRequest

Updates a data source. After the data source is updated successfully, an execution is triggered to refresh the associated DATA_SOURCE sheet to read data from the updated data source. The request requires an additional `bigquery.readonly` OAuth scope if you are updating a BigQuery data source.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `fields` | string (google-fieldmask) | The fields that should be updated. At least one field must be specified. The root `dataSource` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. |
| `dataSource` | DataSource | The data source to update. |


## UpdateDeveloperMetadataRequest

A request to update properties of developer metadata. Updates the properties of the developer metadata selected by the filters to the values provided in the DeveloperMetadata resource. Callers must specify the properties they wish to update in the fields parameter, as well as specify at least one DataFilter matching the metadata they wish to update.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dataFilters` | array (DataFilter) | The filters matching the developer metadata entries to update. |
| `fields` | string (google-fieldmask) | The fields that should be updated. At least one field must be specified. The root `developerMetadata` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. |
| `developerMetadata` | DeveloperMetadata | The value that all metadata matched by the data filters will be updated to. |


## UpdateDimensionGroupRequest

Updates the state of the specified group.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dimensionGroup` | DimensionGroup | The group whose state should be updated. The range and depth of the group should specify a valid group on the sheet, and all other fields updated. |
| `fields` | string (google-fieldmask) | The fields that should be updated. At least one field must be specified. The root `dimensionGroup` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. |


## UpdateDimensionPropertiesRequest

Updates properties of dimensions within the specified range.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `range` | DimensionRange | The rows or columns to update. |
| `dataSourceSheetRange` | DataSourceSheetDimensionRange | The columns on a data source sheet to update. |
| `properties` | DimensionProperties | Properties to update. |
| `fields` | string (google-fieldmask) | The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. |


## UpdateEmbeddedObjectBorderRequest

Updates an embedded object's border property.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `border` | EmbeddedObjectBorder | The border that applies to the embedded object. |
| `objectId` | integer (int32) | The ID of the embedded object to update. |
| `fields` | string (google-fieldmask) | The fields that should be updated. At least one field must be specified. The root `border` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. |


## UpdateEmbeddedObjectPositionRequest

Update an embedded object's position (such as a moving or resizing a chart or image).

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `objectId` | integer (int32) | The ID of the object to moved. |
| `newPosition` | EmbeddedObjectPosition | An explicit position to move the embedded object to. If newPosition.sheetId is set, a new sheet with that ID will be created. If newPosition.newSheet is set to true, a new sheet will be created with an ID that will be chosen for you. |
| `fields` | string (google-fieldmask) | The fields of OverlayPosition that should be updated when setting a new position. Used only if newPosition.overlayPosition is set, in which case at least one field must be specified. The root `newPosition.overlayPosition` is implied and should not be specified. A single `"*"` can be used as short-h… |


## UpdateFilterViewRequest

Updates properties of the filter view.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `fields` | string (google-fieldmask) | The fields that should be updated. At least one field must be specified. The root `filter` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. |
| `filter` | FilterView | The new properties of the filter view. |


## UpdateNamedRangeRequest

Updates properties of the named range with the specified namedRangeId.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `namedRange` | NamedRange | The named range to update with the new properties. |
| `fields` | string (google-fieldmask) | The fields that should be updated. At least one field must be specified. The root `namedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. |


## UpdateProtectedRangeRequest

Updates an existing protected range with the specified protectedRangeId.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `protectedRange` | ProtectedRange | The protected range to update with the new properties. |
| `fields` | string (google-fieldmask) | The fields that should be updated. At least one field must be specified. The root `protectedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. |


## UpdateSheetPropertiesRequest

Updates properties of the sheet with the specified sheetId.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `fields` | string (google-fieldmask) | The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. |
| `properties` | SheetProperties | The properties to update. |


## UpdateSlicerSpecRequest

Updates a slicer's specifications. (This does not move or resize a slicer. To move or resize a slicer use UpdateEmbeddedObjectPositionRequest.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `spec` | SlicerSpec | The specification to apply to the slicer. |
| `fields` | string (google-fieldmask) | The fields that should be updated. At least one field must be specified. The root `SlicerSpec` is implied and should not be specified. A single "*"` can be used as short-hand for listing every field. |
| `slicerId` | integer (int32) | The id of the slicer to update. |


## UpdateSpreadsheetPropertiesRequest

Updates properties of a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `properties` | SpreadsheetProperties | The properties to update. |
| `fields` | string (google-fieldmask) | The fields that should be updated. At least one field must be specified. The root 'properties' is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. |


## UpdateTableRequest

Updates a table in the spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `table` | Table | Required. The table to update. |
| `fields` | string (google-fieldmask) | Required. The fields that should be updated. At least one field must be specified. The root `table` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. |

