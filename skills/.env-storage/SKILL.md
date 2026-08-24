---
name: .env-storage
description: >
  Use when the user wants to load their master `.env` into the current
  project (Load), or save the current project's existing `.env` back into
  the master copy kept in this skill's user-data folder (Update). Triggers on
  phrases like "load my env into this project", "save my .env back to the
  master", "give me my env file", "sync my env into this repo", "drop my env
  here", "update the master from this project's .env".
  Do NOT use for reading or printing an existing `.env`'s secret values
  (sensitive — never echo secrets), or for adding individual services via
  ctx7 lookup — that is no longer this skill's workflow.
allowed-tools: Bash, AskUserQuestion, Glob, Grep
version: 6
author: orca
license: MIT
---

# `.env-storage` — load a project `.env` from the master, or save it back

This skill keeps the user's master `.env` (real values, every service) at
`$HOME/.pi/agent/.env-storage/.env` — a user-data path **outside** the
package directory, so `pi update` / re-install of the package can never
overwrite it. The shipped `assets/.env` inside this skill's folder is a
**read-only template** (placeholder values) used only to seed the user-data
file on first run and to add newly-added keys on later runs.

It syncs between that master and the project the user is currently working
in. There is one master, one target (the current working directory), and two
operations that flow in opposite directions:

- **Load** pushes the master *into* the project.
- **Update** pushes the project *back into* the master.

## ⚠ Core principle: never let secret values enter the model context

**This skill copies bytes disk-to-disk via the shell. It NEVER reads `.env`
contents into the conversation.** Do NOT use the `Read` tool on any `.env`
file. Do NOT use `cat`, `type`, or any command that prints file contents.
The model must never see real secret values. Everything below is built so
that only *metadata* (existence, line counts, redacted key names) ever
reaches the context — never the values themselves.

> Note: the skill cannot control the harness. If the editor or harness
> surfaces a file-change diff in a system reminder, that is outside this
> skill's scope — report it to the user and move on.

## Paths

| Path | Role |
|---|---|
| `$HOME/.pi/agent/.env-storage/.env` | **User data (the master).** Real values. Created on first run; never touched by the package. |
| `<skill-dir>/assets/.env` | **Read-only template.** Placeholder values, shipped with the package. Never edited. |
| `<cwd>/.env` | The project's `.env` — the Load/Update target. |

`<skill-dir>` is the directory containing this `SKILL.md` (wherever Pi
loaded it from). `$HOME` is the user's home directory (`%USERPROFILE%` on
Windows).

## Hard rules (override everything else)

1. **The only question you ever ask the user is which of the two operations
   they want** — Load or Update (see Workflow). Never ask which project —
   the target is always the current working directory. Never ask which
   services, never propose a menu of other actions, never run `ctx7`.
2. **Never print secret values. Never read file contents into context.**
   Use `cp`/`Copy-Item` to move bytes, and only `wc`/`grep -c` for counts
   and redacted-name listing for reporting. When you must show anything for
   confirmation, redact any key whose name contains `SECRET`, `KEY`,
   `TOKEN`, `PASSWORD`, or `DSN` as `KEY=***`. Never `cat`/`type` an entire
   `.env` to output.
3. **Confirm before overwriting the destination.** Each operation is a full
   overwrite of its destination. Load overwrites `<cwd>/.env` with the
   master; Update overwrites the master with `<cwd>/.env`. If the
   destination already exists, ask the user to confirm the overwrite first.
   Existing destination values are not preserved.
4. **Never edit the template.** `<skill-dir>/assets/.env` is read-only —
   it ships with the package and `pi update` will replace it. All writes go
   to the user-data master at `$HOME/.pi/agent/.env-storage/.env`.

## First-run setup (runs before every operation)

Before Load or Update, ensure the user-data master exists and is current:

1. **If `$HOME/.pi/agent/.env-storage/.env` does not exist:**
   - **Load:** create it. If a legacy master exists at
     `<skill-dir>/../../.env-storage/assets/.env` (the old repo-root
     location), copy it to the user-data path and tell the user the master
     was migrated. Otherwise copy the template
     `<skill-dir>/assets/.env` to the user-data path (seeds the master
     with placeholder keys the user can fill in). If neither exists, stop.
   - **Update:** skip — the Update copy will create the master from
     `<cwd>/.env`.
2. **If the user-data master exists AND the operation is Load:** merge
   missing keys from the template (never overwrite existing values) so
   newly-added template keys reach the master:
   ```bash
   mkdir -p "$HOME/.pi/agent/.env-storage"
   awk -F= 'NR==FNR { seen[$1]=1; next } /^[A-Za-z_][A-Za-z0-9_]*=/ && !($1 in seen) { print }' "$HOME/.pi/agent/.env-storage/.env" "<skill-dir>/assets/.env" >> "$HOME/.pi/agent/.env-storage/.env"
   ```
   This appends only `KEY=value` lines whose key is not already in the
   master. Existing values are never overwritten. The output goes to the
   file, not to the model.

## The two operations

| Operation | Meaning |
|---|---|
| **Load** the master `.env` into this project | Copy `$HOME/.pi/agent/.env-storage/.env` → `<cwd>/.env`. Use when the project has no `.env` yet (or the user wants to drop the master in). If `<cwd>/.env` already exists, confirm overwrite. |
| **Update** the master from this project's `.env` | Copy `<cwd>/.env` → `$HOME/.pi/agent/.env-storage/.env`. Use when the project's `.env` has changed and should become the new master. If the master already exists, confirm overwrite. Requires `<cwd>/.env` to exist. |

Both copy **verbatim** — full overwrite, not a merge. Existing destination
values are not preserved.

## Workflow

1. **Ask the user which operation** via `AskUserQuestion`, offering exactly
   the two choices above (Load / Update). No other options. No
   target-project question — the target is always the current working
   directory (`<cwd>`).

2. **Run the first-run setup** (above): ensure the user-data master exists
   and merge missing template keys. Report only metadata (e.g. "master
   created from template", "migrated from legacy path", "added N new keys
   from template") — never values.

3. **Check that the source exists — without reading it.** Use an existence
   test that prints only EXISTS/MISSING, never contents:
   ```bash
   test -f "<source>" && echo EXISTS || echo MISSING
   ```
   - **Load** → source is the user-data master at
     `$HOME/.pi/agent/.env-storage/.env`. If it is missing, stop and tell
     the user the master copy is missing. Do not invent contents.
   - **Update** → source is `<cwd>/.env`. If it is missing, stop and tell
     the user there is no `.env` in the current project to save back. Do
     not invent contents.

4. **Confirm the overwrite of the destination** if it already exists. Use
   the same existence test on the destination. Do not reveal secret values
   while confirming. If the user declines, stop.
   - **Load** → destination is `<cwd>/.env`. Confirm if it exists.
   - **Update** → destination is the user-data master. Confirm if it
     exists. If the destination does not exist, skip this step and just
     copy.

5. **Copy the source to the destination verbatim via the shell.** This is
   the only write step, and it never loads contents into the model context:
   ```bash
   cp -f "<source>" "<destination>"
   ```
   (On a shell without `cp`, e.g. raw PowerShell, use:
   `Copy-Item -LiteralPath "<source>" -Destination "<destination>" -Force`.)
   - **Load** → `cp -f "$HOME/.pi/agent/.env-storage/.env" "<cwd>/.env"`.
   - **Update** → `cp -f "<cwd>/.env" "$HOME/.pi/agent/.env-storage/.env"`.

6. **Report back** using only metadata, never values. Get counts with:
   ```bash
   # line count (no values printed)
   wc -l < "<destination>"
   # number of key lines, values stripped (safe to show)
   grep -cE '^[A-Za-z_][A-Za-z0-9_]*=' "<destination>"
   # redacted key names only — never values
   sed -E 's/=(.*)/=***/' "<destination>" | grep -E '=' | grep -v '^#'
   ```
   Report: which operation ran, the destination path, the line count and key
   count, and remind the user the file contains real secrets and should stay
   out of version control (gitignore `.env`). If the redacted-name listing is
   useful for confirmation you may show it, but values stay redacted.

## Edge cases

| Case | Behavior |
|---|---|
| User asks to add a specific service / look up a var name | Decline — that ctx7 workflow was removed. Offer Load or Update instead. |
| User names a different project folder | Decline — target is always `<cwd>`. Tell them to run the skill from that project's directory. |
| User asks to read/print a `.env` | Refuse. Show `<KEY>=***` for secret-shaped names only; never `cat`/`type` the whole file, and never `Read` it. |
| `<cwd>/.env` is symlinked to a shared file | `cp` follows symlinks on the source side. Warn the user before copying (Load copies the linked file's real contents; Update reads the link target as the source). |
| User mentions `.env.local` / `.env.production` | Out of scope — this skill only manages `<cwd>/.env` and the user-data master. Say so. |
| User-data master is missing | **Load:** stop — tell the user the master copy is missing, do not invent contents. **Update:** this is fine — the master will be created from `<cwd>/.env` (no overwrite to confirm). |
| `<cwd>/.env` is missing | **Load:** fine — the master is copied to a new file (no overwrite to confirm). **Update:** stop — tell the user there is no `.env` in the current project to save back, do not invent contents. |
| `cp` is unavailable (no `cp` on PATH) | Fall back to `Copy-Item -LiteralPath … -Destination … -Force` via PowerShell. Both copy bytes disk-to-disk and keep secrets out of context. |
| Template gains a new key between package versions | The first-run merge appends the new key to the user-data master (placeholder value) without touching existing values. The user fills in the real value. |

## What this skill does NOT do

- **Read `.env` contents into the model context.** Everything is done with
  shell copy commands and metadata-only reporting.
- Add individual services or resolve env var names via `ctx7` (old workflow,
  removed).
- Merge or preserve existing destination values — both operations are a full
  overwrite of the destination.
- Read or display secret values from any `.env`.
- Ask which project to target — always the current working directory.
- Manage `.env` variants (`.env.local`, `.env.production`).
- Sync to a vault (Doppler, 1Password, AWS Secrets Manager) — out of scope.
- Encrypt, transform, or framework-wire values.
- Edit the shipped template `assets/.env` — it is read-only.

## Verification (user can run after invoking)

```bash
# After Load: confirm the project .env now matches the master (line count matches)
wc -l <cwd>/.env
# After Update: confirm the master now matches the project (line count matches)
wc -l "$HOME/.pi/agent/.env-storage/.env"
# Spot-check key names without revealing values (run on whichever file was written)
sed -E 's/=(.*)/=***/' <file> | grep '=' | grep -v '^#'
```
