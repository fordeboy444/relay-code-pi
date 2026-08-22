---
name: "google-sheets-api"
description: |
  Complete Google Sheets API v4 REST reference (api id `sheets:v4`). Use this skill whenever
  the user asks about the Google Sheets API — any REST method, parameter, request/response
  schema, enum, or OAuth scope; or anything involving URIs under `https://sheets.googleapis.com/`. Load the most
  relevant reference files to answer accurately.
---

# Google Sheets API v4 Reference Index

This skill is a navigation layer for the `references/` folder.

It indexes the Google Sheets API v4 REST surface — **17 methods** across 4 resource groups and **262 schemas** — generated from the official Discovery Document.

## Service Overview

_Reads and writes Google Sheets._

### Service identity

| Field | Value |
| --- | --- |
| Title | Google Sheets API |
| API id | `sheets:v4` |
| Version | `v4` (revision `20260625`)
| Root URL | `https://sheets.googleapis.com/` |
| Base URL | `https://sheets.googleapis.com/` |
| Service endpoint | `sheets.googleapis.com` |
| Discovery document | [JSON spec](https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest) |
| Human docs | [https://developers.google.com/workspace/sheets/](https://developers.google.com/workspace/sheets/) |

### OAuth scopes

| Scope | Description |
| --- | --- |
| `https://www.googleapis.com/auth/spreadsheets.readonly` | See all your Google Sheets spreadsheets |
| `https://www.googleapis.com/auth/spreadsheets` | See, edit, create, and delete all your Google Sheets spreadsheets |
| `https://www.googleapis.com/auth/drive.file` | See, edit, create, and delete only the specific Google Drive files you use with this app |
| `https://www.googleapis.com/auth/drive` | See, edit, create, and delete all of your Google Drive files |
| `https://www.googleapis.com/auth/drive.readonly` | See and download all your Google Drive files |

### Common (global) parameters

These apply to every method. Method files list only the method-specific parameters.

| Name | Location | Type | Description |
| --- | --- | --- | --- |
| `uploadType` | query | string | Legacy upload protocol for media (e.g. "media", "multipart"). |
| `prettyPrint` | query | boolean | Returns response with indentations and line breaks. |
| `fields` | query | string | Selector specifying which fields to include in a partial response. |
| `access_token` | query | string | OAuth access token. |
| `key` | query | string | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. |
| `$.xgafv` | query | string (enum) | V1 error format. |
| `oauth_token` | query | string | OAuth 2.0 token for the current user. |
| `callback` | query | string | JSONP |
| `quotaUser` | query | string | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. |
| `upload_protocol` | query | string | Upload protocol for media (e.g. "raw", "multipart"). |
| `alt` | query | string (enum) | Data format for response. |

### REST resources

Methods are grouped by resource in the `methods-*.md` files.

| Resource | File |
| --- | --- |
| `spreadsheets` | `methods-spreadsheets.md` |
| `spreadsheets.developerMetadata` | `methods-spreadsheets-developerMetadata.md` |
| `spreadsheets.sheets` | `methods-spreadsheets-sheets.md` |
| `spreadsheets.values` | `methods-spreadsheets-values.md` |

## How To Use This Library

- This `SKILL.md` is the index. The *Service Overview* section above holds the endpoint, base URL, OAuth scopes, common (global) parameters, and resource map.
- `references/` contains flat `*.md` files (method files + schema files only).
- `methods-*.md` files hold one section per REST method, with HTTP verb, path, full URL, request/response schema refs, and a parameter table.
- `schemas-*.md` files hold one section per schema/type, with properties, types, descriptions, and enum values.
- The filename tells you the resource group or schema bucket; the summary column helps you pick the right file.

## What Each Reference File Contains

- **Method files** — per method: description, `HTTP`/`Path`/`Full URL`, request & response `$ref`, then a `Parameters` table (path params first). Enum parameters list their allowed values inline.
- **Schema files** — per schema: description, type, a `Properties` table (property → type → description). Enum properties list their values inline.

## Finding Your Way

- **Looking up an endpoint?** Open the `methods-*.md` file for its resource group (e.g. `spreadsheets` operations → `methods-spreadsheets.md`).
- **Looking up a type?** Request bodies end in `Request` → `schemas-requests.md`; responses end in `Response` → `schemas-responses.md`; everything else (e.g. `BandedRange`, …) is in the alphabetical `schemas-*.md` core files — `Grep` the folder for the type name.
- **Need the service endpoint, base URL, OAuth scopes, or common parameters?** They are in the *Service Overview* section at the top of this file.
- **Search by content:** use `Grep` across `references/` for keywords (method names, field names, enum values).
- **Handle large files:** the biggest schema files are listed in *Large Files* below — search within them with `Grep` rather than reading in full.

## Current Reference Index

### Methods

| File | Summary |
| --- | --- |
| `methods-spreadsheets.md` | `spreadsheets` — 4 methods: batchUpdate, create, get, getByDataFilter |
| `methods-spreadsheets-developerMetadata.md` | `spreadsheets.developerMetadata` — 2 methods: get, search |
| `methods-spreadsheets-sheets.md` | `spreadsheets.sheets` — 1 method: copyTo |
| `methods-spreadsheets-values.md` | `spreadsheets.values` — 10 methods: append, batchClear, batchClearByDataFilter, batchGet, batchGetByDataFilter, batchUpdate, batchUpdateByDataFilter, clear, get, update |

### Schemas

| File | Summary |
| --- | --- |
| `schemas-requests.md` | 80 request types — request bodies for write/batch methods |
| `schemas-responses.md` | 38 response types — method return values |
| `schemas-B-D.md` | 48 types: BandedRange, BandingProperties, BaselineValueFormat, BasicChartAxis, BasicChartDomain, BasicChartSeries, BasicChartSpec, BasicFilter, BasicSeriesDataPointStyleOverride, BigQueryDataSourceSpec… |
| `schemas-D-N.md` | 48 types: DataSourceObjectReferences, DataSourceParameter, DataSourceRefreshDailySchedule, DataSourceRefreshMonthlySchedule, DataSourceRefreshSchedule, DataSourceRefreshWeeklySchedule, DataSourceSheetDimensionRange, DataSourceSheetProperties, DataSourceSpec, DataSourceTable… |
| `schemas-O-W.md` | 48 types: OrgChartSpec, OverlayPosition, Padding, PersonProperties, PieChartSpec, PivotFilterCriteria, PivotFilterSpec, PivotGroup, PivotGroupLimit, PivotGroupRule… |

## Large Files

The following files are large. Prefer searching within them with `Grep` instead of reading them entirely:

| File | Size | Note |
| --- | --- | --- |
| `schemas-B-D.md` | 65.0 KB | Consider using `Grep` to search inside. |
| `schemas-requests.md` | 62.5 KB | Consider using `Grep` to search inside. |
| `schemas-O-W.md` | 52.5 KB | Consider using `Grep` to search inside. |

## How To Read A File

When you open one of the markdown files in `references/`, look in this order:

1. The H1 title for the file's scope.
2. The per-method / per-schema `##` section for the specific endpoint or type.
3. The description line for the shortest summary of behavior.
4. The parameter / properties table for the exact names, types, and required flags.
5. The inline enum values for any `string (enum)` field's allowed options.

## Adding More Docs Later

This skill is regenerated from the Discovery Document, so do not hand-edit `SKILL.md` or `references/` — re-run the generator to refresh. To extend with guide/concept pages, add them under a separate folder the generator does not touch.
