# Google Sheets API — `spreadsheets.sheets` methods

All URIs are relative to `https://sheets.googleapis.com/`.

## Methods in this file

- `spreadsheets.sheets.copyTo` — POST `v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo`

## spreadsheets.sheets.copyTo

Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet.

- **HTTP:** `POST`
- **Path:** `v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo`
- **Full URL:** `https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo`
- **Request body:** `CopySheetToAnotherSpreadsheetRequest`
- **Response:** `SheetProperties`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `sheetId` | path | integer (int32) | yes | The ID of the sheet to copy. |
| `spreadsheetId` | path | string | yes | The ID of the spreadsheet containing the sheet to copy. |

