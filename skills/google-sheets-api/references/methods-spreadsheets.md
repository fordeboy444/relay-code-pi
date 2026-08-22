# Google Sheets API — `spreadsheets` methods

All URIs are relative to `https://sheets.googleapis.com/`.

## Methods in this file

- `spreadsheets.batchUpdate` — POST `v4/spreadsheets/{spreadsheetId}:batchUpdate`
- `spreadsheets.create` — POST `v4/spreadsheets`
- `spreadsheets.get` — GET `v4/spreadsheets/{spreadsheetId}`
- `spreadsheets.getByDataFilter` — POST `v4/spreadsheets/{spreadsheetId}:getByDataFilter`

## spreadsheets.batchUpdate

Applies one or more updates to the spreadsheet. Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order. Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes.

- **HTTP:** `POST`
- **Path:** `v4/spreadsheets/{spreadsheetId}:batchUpdate`
- **Full URL:** `https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}:batchUpdate`
- **Request body:** `BatchUpdateSpreadsheetRequest`
- **Response:** `BatchUpdateSpreadsheetResponse`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `spreadsheetId` | path | string | yes | The spreadsheet to apply the updates to. |


## spreadsheets.create

Creates a spreadsheet, returning the newly created spreadsheet.

- **HTTP:** `POST`
- **Path:** `v4/spreadsheets`
- **Full URL:** `https://sheets.googleapis.com/v4/spreadsheets`
- **Request body:** `Spreadsheet`
- **Response:** `Spreadsheet`

_No parameters._


## spreadsheets.get

Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. By default, data within grids is not returned. You can include grid data in one of 2 ways: * Specify a [field mask](https://developers.google.com/workspace/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData URL parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want. To retrieve only subsets of spreadsheet data, use the ranges URL parameter. Ranges are specified using [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell). You can define a single cell (for example, `A1`) or multiple cells (for example, `A1:D5`). You can also get cells from other sheets within the same spreadsheet (for example, `Sheet2!A1:C4`) or retrieve multiple ranges at once (for example, `?ranges=A1:D5&ranges=Sheet2!A1:C4`). Limiting the range returns only the portions of the spreadsheet that intersect the requested ranges.

- **HTTP:** `GET`
- **Path:** `v4/spreadsheets/{spreadsheetId}`
- **Full URL:** `https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}`
- **Request body:** none
- **Response:** `Spreadsheet`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `spreadsheetId` | path | string | yes | The spreadsheet to request. |
| `excludeTablesInBandedRanges` | query | boolean | no | True if tables should be excluded in the banded ranges. False if not set. |
| `includeGridData` | query | boolean | no | True if grid data should be returned. This parameter is ignored if a field mask was set in the request. |
| `ranges` | query | string | no | The ranges to retrieve from the spreadsheet. |


## spreadsheets.getByDataFilter

Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata). This method differs from GetSpreadsheet in that it allows selecting which subsets of spreadsheet data to return by specifying a dataFilters parameter. Multiple DataFilters can be specified. Specifying one or more data filters returns the portions of the spreadsheet that intersect ranges matched by any of the filters. By default, data within grids is not returned. You can include grid data in one of two ways: * Specify a [field mask](https://developers.google.com/workspace/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP. * Set the includeGridData parameter to `true`. If a field mask is set, the `includeGridData` parameter is ignored. For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want.

- **HTTP:** `POST`
- **Path:** `v4/spreadsheets/{spreadsheetId}:getByDataFilter`
- **Full URL:** `https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}:getByDataFilter`
- **Request body:** `GetSpreadsheetByDataFilterRequest`
- **Response:** `Spreadsheet`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `spreadsheetId` | path | string | yes | The spreadsheet to request. |

