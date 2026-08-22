# Google Sheets API — `spreadsheets.developerMetadata` methods

All URIs are relative to `https://sheets.googleapis.com/`.

## Methods in this file

- `spreadsheets.developerMetadata.get` — GET `v4/spreadsheets/{spreadsheetId}/developerMetadata/{metadataId}`
- `spreadsheets.developerMetadata.search` — POST `v4/spreadsheets/{spreadsheetId}/developerMetadata:search`

## spreadsheets.developerMetadata.get

Returns the developer metadata with the specified ID. The caller must specify the spreadsheet ID and the developer metadata's unique metadataId. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata).

- **HTTP:** `GET`
- **Path:** `v4/spreadsheets/{spreadsheetId}/developerMetadata/{metadataId}`
- **Full URL:** `https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/developerMetadata/{metadataId}`
- **Request body:** none
- **Response:** `DeveloperMetadata`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `metadataId` | path | integer (int32) | yes | The ID of the developer metadata to retrieve. |
| `spreadsheetId` | path | string | yes | The ID of the spreadsheet to retrieve metadata from. |


## spreadsheets.developerMetadata.search

Returns all developer metadata matching the specified DataFilter. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata). If the provided DataFilter represents a DeveloperMetadataLookup object, this will return all DeveloperMetadata entries selected by it. If the DataFilter represents a location in a spreadsheet, this will return all developer metadata associated with locations intersecting that region.

- **HTTP:** `POST`
- **Path:** `v4/spreadsheets/{spreadsheetId}/developerMetadata:search`
- **Full URL:** `https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/developerMetadata:search`
- **Request body:** `SearchDeveloperMetadataRequest`
- **Response:** `SearchDeveloperMetadataResponse`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `spreadsheetId` | path | string | yes | The ID of the spreadsheet to retrieve metadata from. |

