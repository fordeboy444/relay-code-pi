# Google Sheets API — Response schemas

38 schemas: AddBandingResponse, AddChartResponse, AddDataSourceResponse, AddDimensionGroupResponse, AddFilterViewResponse, AddNamedRangeResponse, AddProtectedRangeResponse, AddSheetResponse, AddSlicerResponse, AddTableResponse, AppendValuesResponse, BatchClearValuesByDataFilterResponse…

## Schemas in this file

- [`AddBandingResponse`](#addbandingresponse)
- [`AddChartResponse`](#addchartresponse)
- [`AddDataSourceResponse`](#adddatasourceresponse)
- [`AddDimensionGroupResponse`](#adddimensiongroupresponse)
- [`AddFilterViewResponse`](#addfilterviewresponse)
- [`AddNamedRangeResponse`](#addnamedrangeresponse)
- [`AddProtectedRangeResponse`](#addprotectedrangeresponse)
- [`AddSheetResponse`](#addsheetresponse)
- [`AddSlicerResponse`](#addslicerresponse)
- [`AddTableResponse`](#addtableresponse)
- [`AppendValuesResponse`](#appendvaluesresponse)
- [`BatchClearValuesByDataFilterResponse`](#batchclearvaluesbydatafilterresponse)
- [`BatchClearValuesResponse`](#batchclearvaluesresponse)
- [`BatchGetValuesByDataFilterResponse`](#batchgetvaluesbydatafilterresponse)
- [`BatchGetValuesResponse`](#batchgetvaluesresponse)
- [`BatchUpdateSpreadsheetResponse`](#batchupdatespreadsheetresponse)
- [`BatchUpdateValuesByDataFilterResponse`](#batchupdatevaluesbydatafilterresponse)
- [`BatchUpdateValuesResponse`](#batchupdatevaluesresponse)
- [`CancelDataSourceRefreshResponse`](#canceldatasourcerefreshresponse)
- [`ClearValuesResponse`](#clearvaluesresponse)
- [`CreateDeveloperMetadataResponse`](#createdevelopermetadataresponse)
- [`DeleteConditionalFormatRuleResponse`](#deleteconditionalformatruleresponse)
- [`DeleteDeveloperMetadataResponse`](#deletedevelopermetadataresponse)
- [`DeleteDimensionGroupResponse`](#deletedimensiongroupresponse)
- [`DeleteDuplicatesResponse`](#deleteduplicatesresponse)
- [`DuplicateFilterViewResponse`](#duplicatefilterviewresponse)
- [`DuplicateSheetResponse`](#duplicatesheetresponse)
- [`FindReplaceResponse`](#findreplaceresponse)
- [`RefreshDataSourceResponse`](#refreshdatasourceresponse)
- [`Response`](#response)
- [`SearchDeveloperMetadataResponse`](#searchdevelopermetadataresponse)
- [`TrimWhitespaceResponse`](#trimwhitespaceresponse)
- [`UpdateConditionalFormatRuleResponse`](#updateconditionalformatruleresponse)
- [`UpdateDataSourceResponse`](#updatedatasourceresponse)
- [`UpdateDeveloperMetadataResponse`](#updatedevelopermetadataresponse)
- [`UpdateEmbeddedObjectPositionResponse`](#updateembeddedobjectpositionresponse)
- [`UpdateValuesByDataFilterResponse`](#updatevaluesbydatafilterresponse)
- [`UpdateValuesResponse`](#updatevaluesresponse)

## AddBandingResponse

The result of adding a banded range.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `bandedRange` | BandedRange | The banded range that was added. |


## AddChartResponse

The result of adding a chart to a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `chart` | EmbeddedChart | The newly added chart. |


## AddDataSourceResponse

The result of adding a data source.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dataSource` | DataSource | The data source that was created. |
| `dataExecutionStatus` | DataExecutionStatus | The data execution status. |


## AddDimensionGroupResponse

The result of adding a group.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dimensionGroups` | array (DimensionGroup) | All groups of a dimension after adding a group to that dimension. |


## AddFilterViewResponse

The result of adding a filter view.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `filter` | FilterView | The newly added filter view. |


## AddNamedRangeResponse

The result of adding a named range.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `namedRange` | NamedRange | The named range to add. |


## AddProtectedRangeResponse

The result of adding a new protected range.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `protectedRange` | ProtectedRange | The newly added protected range. |


## AddSheetResponse

The result of adding a sheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `properties` | SheetProperties | The properties of the newly added sheet. |


## AddSlicerResponse

The result of adding a slicer to a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `slicer` | Slicer | The newly added slicer. |


## AddTableResponse

The result of adding a table.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `table` | Table | Output only. The table that was added. |


## AppendValuesResponse

The response when updating a range of values in a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `tableRange` | string | The range (in A1 notation) of the table that values are being appended to (before the values were appended). Empty if no table was found. |
| `updates` | UpdateValuesResponse | Information about the updates that were applied. |
| `spreadsheetId` | string | The spreadsheet the updates were applied to. |


## BatchClearValuesByDataFilterResponse

The response when clearing a range of values selected with DataFilters in a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `spreadsheetId` | string | The spreadsheet the updates were applied to. |
| `clearedRanges` | array (string) | The ranges that were cleared, in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell). If the requests are for an unbounded range or a range larger than the bounds of the sheet, this is the actual ranges that were cleared, bounded to the sheet's limits. |


## BatchClearValuesResponse

The response when clearing a range of values in a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `spreadsheetId` | string | The spreadsheet the updates were applied to. |
| `clearedRanges` | array (string) | The ranges that were cleared, in A1 notation. If the requests are for an unbounded range or a range larger than the bounds of the sheet, this is the actual ranges that were cleared, bounded to the sheet's limits. |


## BatchGetValuesByDataFilterResponse

The response when retrieving more than one range of values in a spreadsheet selected by DataFilters.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `spreadsheetId` | string | The ID of the spreadsheet the data was retrieved from. |
| `valueRanges` | array (MatchedValueRange) | The requested values with the list of data filters that matched them. |


## BatchGetValuesResponse

The response when retrieving more than one range of values in a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `spreadsheetId` | string | The ID of the spreadsheet the data was retrieved from. |
| `valueRanges` | array (ValueRange) | The requested values. The order of the ValueRanges is the same as the order of the requested ranges. |


## BatchUpdateSpreadsheetResponse

The reply for batch updating a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `replies` | array (Response) | The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty. |
| `spreadsheetId` | string | The spreadsheet the updates were applied to. |
| `updatedSpreadsheet` | Spreadsheet | The spreadsheet after updates were applied. This is only set if BatchUpdateSpreadsheetRequest.include_spreadsheet_in_response is `true`. |


## BatchUpdateValuesByDataFilterResponse

The response when updating a range of values in a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `totalUpdatedColumns` | integer (int32) | The total number of columns where at least one cell in the column was updated. |
| `responses` | array (UpdateValuesByDataFilterResponse) | The response for each range updated. |
| `totalUpdatedRows` | integer (int32) | The total number of rows where at least one cell in the row was updated. |
| `spreadsheetId` | string | The spreadsheet the updates were applied to. |
| `totalUpdatedCells` | integer (int32) | The total number of cells updated. |
| `totalUpdatedSheets` | integer (int32) | The total number of sheets where at least one cell in the sheet was updated. |


## BatchUpdateValuesResponse

The response when updating a range of values in a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `totalUpdatedCells` | integer (int32) | The total number of cells updated. |
| `totalUpdatedSheets` | integer (int32) | The total number of sheets where at least one cell in the sheet was updated. |
| `totalUpdatedRows` | integer (int32) | The total number of rows where at least one cell in the row was updated. |
| `spreadsheetId` | string | The spreadsheet the updates were applied to. |
| `totalUpdatedColumns` | integer (int32) | The total number of columns where at least one cell in the column was updated. |
| `responses` | array (UpdateValuesResponse) | One UpdateValuesResponse per requested range, in the same order as the requests appeared. |


## CancelDataSourceRefreshResponse

The response from cancelling one or multiple data source object refreshes.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `statuses` | array (CancelDataSourceRefreshStatus) | The cancellation statuses of refreshes of all data source objects specified in the request. If is_all is specified, the field contains only those in failure status. Refreshing and canceling refresh the same data source object is also not allowed in the same `batchUpdate`. |


## ClearValuesResponse

The response when clearing a range of values in a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `clearedRange` | string | The range (in A1 notation) that was cleared. (If the request was for an unbounded range or a range larger than the bounds of the sheet, this will be the actual range that was cleared, bounded to the sheet's limits.) |
| `spreadsheetId` | string | The spreadsheet the updates were applied to. |


## CreateDeveloperMetadataResponse

The response from creating developer metadata.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `developerMetadata` | DeveloperMetadata | The developer metadata that was created. |


## DeleteConditionalFormatRuleResponse

The result of deleting a conditional format rule.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `rule` | ConditionalFormatRule | The rule that was deleted. |


## DeleteDeveloperMetadataResponse

The response from deleting developer metadata.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `deletedDeveloperMetadata` | array (DeveloperMetadata) | The metadata that was deleted. |


## DeleteDimensionGroupResponse

The result of deleting a group.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dimensionGroups` | array (DimensionGroup) | All groups of a dimension after deleting a group from that dimension. |


## DeleteDuplicatesResponse

The result of removing duplicates in a range.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `duplicatesRemovedCount` | integer (int32) | The number of duplicate rows removed. |


## DuplicateFilterViewResponse

The result of a filter view being duplicated.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `filter` | FilterView | The newly created filter. |


## DuplicateSheetResponse

The result of duplicating a sheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `properties` | SheetProperties | The properties of the duplicate sheet. |


## FindReplaceResponse

The result of the find/replace.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `rowsChanged` | integer (int32) | The number of rows changed. |
| `occurrencesChanged` | integer (int32) | The number of occurrences (possibly multiple within a cell) changed. For example, if replacing `"e"` with `"o"` in `"Google Sheets"`, this would be `"3"` because `"Google Sheets"` -> `"Googlo Shoots"`. |
| `sheetsChanged` | integer (int32) | The number of sheets changed. |
| `formulasChanged` | integer (int32) | The number of formula cells changed. |
| `valuesChanged` | integer (int32) | The number of non-formula cells changed. |


## RefreshDataSourceResponse

The response from refreshing one or multiple data source objects.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `statuses` | array (RefreshDataSourceObjectExecutionStatus) | All the refresh status for the data source object references specified in the request. If is_all is specified, the field contains only those in failure status. |


## Response

A single response from an update.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `addDimensionGroup` | AddDimensionGroupResponse | A reply from adding a dimension group. |
| `cancelDataSourceRefresh` | CancelDataSourceRefreshResponse | A reply from cancelling data source object refreshes. |
| `updateEmbeddedObjectPosition` | UpdateEmbeddedObjectPositionResponse | A reply from updating an embedded object's position. |
| `addDataSource` | AddDataSourceResponse | A reply from adding a data source. |
| `refreshDataSource` | RefreshDataSourceResponse | A reply from refreshing data source objects. |
| `createDeveloperMetadata` | CreateDeveloperMetadataResponse | A reply from creating a developer metadata entry. |
| `updateDataSource` | UpdateDataSourceResponse | A reply from updating a data source. |
| `duplicateFilterView` | DuplicateFilterViewResponse | A reply from duplicating a filter view. |
| `addBanding` | AddBandingResponse | A reply from adding a banded range. |
| `updateConditionalFormatRule` | UpdateConditionalFormatRuleResponse | A reply from updating a conditional format rule. |
| `addTable` | AddTableResponse | A reply from adding a table. |
| `deleteConditionalFormatRule` | DeleteConditionalFormatRuleResponse | A reply from deleting a conditional format rule. |
| `findReplace` | FindReplaceResponse | A reply from doing a find/replace. |
| `updateDeveloperMetadata` | UpdateDeveloperMetadataResponse | A reply from updating a developer metadata entry. |
| `addSheet` | AddSheetResponse | A reply from adding a sheet. |
| `deleteDuplicates` | DeleteDuplicatesResponse | A reply from removing rows containing duplicate values. |
| `duplicateSheet` | DuplicateSheetResponse | A reply from duplicating a sheet. |
| `deleteDeveloperMetadata` | DeleteDeveloperMetadataResponse | A reply from deleting a developer metadata entry. |
| `addNamedRange` | AddNamedRangeResponse | A reply from adding a named range. |
| `deleteDimensionGroup` | DeleteDimensionGroupResponse | A reply from deleting a dimension group. |
| `addFilterView` | AddFilterViewResponse | A reply from adding a filter view. |
| `addChart` | AddChartResponse | A reply from adding a chart. |
| `addProtectedRange` | AddProtectedRangeResponse | A reply from adding a protected range. |
| `addSlicer` | AddSlicerResponse | A reply from adding a slicer. |
| `trimWhitespace` | TrimWhitespaceResponse | A reply from trimming whitespace. |


## SearchDeveloperMetadataResponse

A reply to a developer metadata search request.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `matchedDeveloperMetadata` | array (MatchedDeveloperMetadata) | The metadata matching the criteria of the search request. |


## TrimWhitespaceResponse

The result of trimming whitespace in cells.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `cellsChangedCount` | integer (int32) | The number of cells that were trimmed of whitespace. |


## UpdateConditionalFormatRuleResponse

The result of updating a conditional format rule.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `oldIndex` | integer (int32) | The old index of the rule. Not set if a rule was replaced (because it is the same as new_index). |
| `newIndex` | integer (int32) | The index of the new rule. |
| `newRule` | ConditionalFormatRule | The new rule that replaced the old rule (if replacing), or the rule that was moved (if moved) |
| `oldRule` | ConditionalFormatRule | The old (deleted) rule. Not set if a rule was moved (because it is the same as new_rule). |


## UpdateDataSourceResponse

The response from updating data source.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dataSource` | DataSource | The updated data source. |
| `dataExecutionStatus` | DataExecutionStatus | The data execution status. |


## UpdateDeveloperMetadataResponse

The response from updating developer metadata.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `developerMetadata` | array (DeveloperMetadata) | The updated developer metadata. |


## UpdateEmbeddedObjectPositionResponse

The result of updating an embedded object's position.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `position` | EmbeddedObjectPosition | The new position of the embedded object. |


## UpdateValuesByDataFilterResponse

The response when updating a range of values by a data filter in a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `updatedColumns` | integer (int32) | The number of columns where at least one cell in the column was updated. |
| `dataFilter` | DataFilter | The data filter that selected the range that was updated. |
| `updatedCells` | integer (int32) | The number of cells updated. |
| `updatedData` | ValueRange | The values of the cells in the range matched by the dataFilter after all updates were applied. This is only included if the request's `includeValuesInResponse` field was `true`. |
| `updatedRange` | string | The range (in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell)) that updates were applied to. |
| `updatedRows` | integer (int32) | The number of rows where at least one cell in the row was updated. |


## UpdateValuesResponse

The response when updating a range of values in a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `spreadsheetId` | string | The spreadsheet the updates were applied to. |
| `updatedRange` | string | The range (in A1 notation) that updates were applied to. |
| `updatedRows` | integer (int32) | The number of rows where at least one cell in the row was updated. |
| `updatedCells` | integer (int32) | The number of cells updated. |
| `updatedData` | ValueRange | The values of the cells after updates were applied. This is only included if the request's `includeValuesInResponse` field was `true`. |
| `updatedColumns` | integer (int32) | The number of columns where at least one cell in the column was updated. |

