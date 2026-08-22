---
name: "google-drive-api"
description: |
  Complete Google Drive API v3 REST reference (api id `drive:v3`). Use this skill whenever
  the user asks about the Google Drive API — any REST method, parameter, request/response
  schema, enum, or OAuth scope; or anything involving URIs under `https://www.googleapis.com/drive/v3/`. Load the most
  relevant reference files to answer accurately.
---

# Google Drive API v3 Reference Index

This skill is a navigation layer for the `references/` folder.

It indexes the Google Drive API v3 REST surface — **64 methods** across 14 resource groups and **54 schemas** — generated from the official Discovery Document.

## Service Overview

_The Google Drive API allows clients to access resources from Google Drive._

### Service identity

| Field | Value |
| --- | --- |
| Title | Google Drive API |
| API id | `drive:v3` |
| Version | `v3` (revision `20260624`)
| Root URL | `https://www.googleapis.com/` |
| Base URL | `https://www.googleapis.com/drive/v3/` |
| Service endpoint | `www.googleapis.com` |
| Discovery document | [JSON spec](https://www.googleapis.com/discovery/v1/apis/drive/v3/rest) |
| Human docs | [https://developers.google.com/workspace/drive/](https://developers.google.com/workspace/drive/) |

### OAuth scopes

| Scope | Description |
| --- | --- |
| `https://www.googleapis.com/auth/drive.apps.readonly` | View your Google Drive apps |
| `https://www.googleapis.com/auth/drive.metadata.readonly` | See information about your Google Drive files |
| `https://www.googleapis.com/auth/drive.meet.readonly` | See and download your Google Drive files that were created or edited by Google Meet. |
| `https://www.googleapis.com/auth/drive` | See, edit, create, and delete all of your Google Drive files |
| `https://www.googleapis.com/auth/drive.readonly` | See and download all your Google Drive files |
| `https://www.googleapis.com/auth/drive.metadata` | View and manage metadata of files in your Google Drive |
| `https://www.googleapis.com/auth/drive.photos.readonly` | View the photos, videos and albums in your Google Photos |
| `https://www.googleapis.com/auth/drive.scripts` | Modify your Google Apps Script scripts' behavior |
| `https://www.googleapis.com/auth/drive.appdata` | See, create, and delete its own configuration data in your Google Drive |
| `https://www.googleapis.com/auth/drive.file` | See, edit, create, and delete only the specific Google Drive files you use with this app |

### Common (global) parameters

These apply to every method. Method files list only the method-specific parameters.

| Name | Location | Type | Description |
| --- | --- | --- | --- |
| `quotaUser` | query | string | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. |
| `$.xgafv` | query | string (enum) | V1 error format. |
| `alt` | query | string (enum) | Data format for response. |
| `uploadType` | query | string | Legacy upload protocol for media (e.g. "media", "multipart"). |
| `oauth_token` | query | string | OAuth 2.0 token for the current user. |
| `prettyPrint` | query | boolean | Returns response with indentations and line breaks. |
| `callback` | query | string | JSONP |
| `upload_protocol` | query | string | Upload protocol for media (e.g. "raw", "multipart"). |
| `fields` | query | string | Selector specifying which fields to include in a partial response. |
| `access_token` | query | string | OAuth access token. |
| `key` | query | string | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. |

### REST resources

Methods are grouped by resource in the `methods-*.md` files.

| Resource | File |
| --- | --- |
| `about` | `methods-about.md` |
| `accessproposals` | `methods-accessproposals.md` |
| `approvals` | `methods-approvals.md` |
| `apps` | `methods-apps.md` |
| `changes` | `methods-changes.md` |
| `channels` | `methods-channels.md` |
| `comments` | `methods-comments.md` |
| `drives` | `methods-drives.md` |
| `files` | `methods-files.md` |
| `operations` | `methods-operations.md` |
| `permissions` | `methods-permissions.md` |
| `replies` | `methods-replies.md` |
| `revisions` | `methods-revisions.md` |
| `teamdrives` | `methods-teamdrives.md` |

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

- **Looking up an endpoint?** Open the `methods-*.md` file for its resource group (e.g. `about` operations → `methods-about.md`).
- **Looking up a type?** Request bodies end in `Request` → `schemas-requests.md`; responses end in `Response` → `schemas-responses.md`; everything else (e.g. `About`, …) is in the alphabetical `schemas-*.md` core files — `Grep` the folder for the type name.
- **Need the service endpoint, base URL, OAuth scopes, or common parameters?** They are in the *Service Overview* section at the top of this file.
- **Search by content:** use `Grep` across `references/` for keywords (method names, field names, enum values).
- **Handle large files:** the biggest schema files are listed in *Large Files* below — search within them with `Grep` rather than reading in full.

## Current Reference Index

### Methods

| File | Summary |
| --- | --- |
| `methods-about.md` | `about` — 1 method: get |
| `methods-accessproposals.md` | `accessproposals` — 3 methods: get, list, resolve |
| `methods-approvals.md` | `approvals` — 8 methods: approve, cancel, comment, decline, get, list, reassign, start |
| `methods-apps.md` | `apps` — 2 methods: get, list |
| `methods-changes.md` | `changes` — 3 methods: getStartPageToken, list, watch |
| `methods-channels.md` | `channels` — 1 method: stop |
| `methods-comments.md` | `comments` — 5 methods: create, delete, get, list, update |
| `methods-drives.md` | `drives` — 7 methods: create, delete, get, hide, list, unhide, update |
| `methods-files.md` | `files` — 14 methods: copy, create, delete, download, emptyTrash, export, generateCseToken, generateIds, get, list, listLabels, modifyLabels, update, watch |
| `methods-operations.md` | `operations` — 1 method: get |
| `methods-permissions.md` | `permissions` — 5 methods: create, delete, get, list, update |
| `methods-replies.md` | `replies` — 5 methods: create, delete, get, list, update |
| `methods-revisions.md` | `revisions` — 4 methods: delete, get, list, update |
| `methods-teamdrives.md` | `teamdrives` — 5 methods: create, delete, get, list, update |

### Schemas

| File | Summary |
| --- | --- |
| `schemas-requests.md` | 8 request types — request bodies for write/batch methods |
| `schemas-responses.md` | 4 response types — method return values |
| `schemas-A-C.md` | 14 types: About, AccessProposal, AccessProposalRoleAndView, AddReviewer, App, AppIcons, AppList, Approval, ApprovalList, Change… |
| `schemas-C-L.md` | 14 types: CommentList, ContentRestriction, DecryptionMetadata, DownloadRestriction, DownloadRestrictionsMetadata, Drive, DriveList, File, FileList, GeneratedIds… |
| `schemas-L-U.md` | 14 types: LabelModification, Operation, Permission, PermissionList, ReplaceReviewer, Reply, ReplyList, Revision, RevisionList, StartPageToken… |

## Large Files

The following files are large. Prefer searching within them with `Grep` instead of reading them entirely:

_No reference files exceed 50 KB._

## How To Read A File

When you open one of the markdown files in `references/`, look in this order:

1. The H1 title for the file's scope.
2. The per-method / per-schema `##` section for the specific endpoint or type.
3. The description line for the shortest summary of behavior.
4. The parameter / properties table for the exact names, types, and required flags.
5. The inline enum values for any `string (enum)` field's allowed options.

## Adding More Docs Later

This skill is regenerated from the Discovery Document, so do not hand-edit `SKILL.md` or `references/` — re-run the generator to refresh. To extend with guide/concept pages, add them under a separate folder the generator does not touch.
