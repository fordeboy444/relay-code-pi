---
name: .env-storage
description: >
  Use when the user wants to load their master `.env` and `.env.production`
  into the current project (Load), or save the current project's `.env` /
  `.env.production` back into the master copies kept in this skill's user-data
  folder (Update). Triggers on phrases like "load my env into this project",
  "load my env and production env", "save my .env back to the master", "give me
  my env file", "sync my env into this repo", "sync my .env.production into
  this repo", "drop my env here", "drop my prod env here", "update the master
  from this project's .env".
  Do NOT use for reading or printing an existing env file's secret values
  (sensitive — never echo secrets), or for adding individual services via
  ctx7 lookup — that is no longer this skill's workflow.
allowed-tools: Bash, AskUserQuestion, Glob, Grep
version: 7
author: orca
license: MIT
---

# `.env-storage` — load project `.env` + `.env.production` from the master, or save them back

This skill keeps the user's master env files (real values, every service) in
`$HOME/.pi/agent/.env-storage/` — a user-data path **outside** the package
directory, so `pi update` / re-install of the package can never overwrite it.
There are two masters, one per environment:

- `.env` — development secrets (Modal token, Trigger.dev dev key, etc.).
- `.env.production` — the production Trigger.dev key only.

The shipped `assets/.env` and `assets/.env.production` inside this skill's
folder are **read-only templates** (placeholder values) used only to seed the
user-data files on first run and to add newly-added keys on later runs.

It syncs between those masters and the project the user is currently working
in. There is one master per environment, one target (the current working
directory), and two operations that flow in opposite directions:

- **Load** pushes the masters *into* the project (both files, paired).
- **Update** pushes the project's files *back into* the masters (both files, paired).

The two files are always handled together — relay-code uses dev and prod as a
pair — but each file has its own existence check, so a file the user has not
set up yet (e.g. no prod master) is skipped with a note rather than failing
the whole operation.

## ⚠ Core principle: never let secret values enter the model context

**This skill copies bytes disk-to-disk via the shell. It NEVER reads `.env`
or `.env.production` contents into the conversation.** Do NOT use the `Read`
tool on any env file. Do NOT use `cat`, `type`, or any command that prints
file contents. The model must never see real secret values. Everything below
is built so that only *metadata* (existence, line counts, redacted key names)
ever reaches the context — never the values themselves.

> Note: the skill cannot control the harness. If the editor or harness
> surfaces a file-change diff in a system reminder, that is outside this
> skill's scope — report it to the user and move on.

## Paths

| Path | Role |
|---|---|
| `$HOME/.pi/agent/.env-storage/.env` | **User data (dev master).** Real dev values. Created on first run; never touched by the package. |
| `$HOME/.pi/agent/.env-storage/.env.production` | **User data (prod master).** Real prod values. Created on first run; never touched by the package. |
| `<skill-dir>/assets/.env` | **Read-only dev template.** Placeholder values, shipped with the package. Never edited. |
| `<skill-dir>/assets/.env.production` | **Read-only prod template.** Placeholder values, shipped with the package. Never edited. |
| `<cwd>/.env` | The project's dev `.env` — the Load/Update target. |
| `<cwd>/.env.production` | The project's prod `.env.production` — the Load/Update target. |

`<skill-dir>` is the directory containing this `SKILL.md` (wherever Pi
loaded it from). `$HOME` is the user's home directory (`%USERPROFILE%` on
Windows). The two managed env files are `.env` and `.env.production` — no
others.

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
   env file to output.
3. **Confirm before overwriting a destination that already exists.** Each
   operation is a full overwrite of each destination file. Load overwrites
   `<cwd>/.env` and `<cwd>/.env.production` with the masters; Update
   overwrites the masters with `<cwd>/.env` and `<cwd>/.env.production`. If
   a destination already exists, ask the user to confirm overwriting it first.
   Existing destination values are not preserved.
4. **Never edit the templates.** `<skill-dir>/assets/.env` and
   `<skill-dir>/assets/.env.production` are read-only — they ship with the
   package and `pi update` will replace them. All writes go to the
   user-data masters at `$HOME/.pi/agent/.env-storage/`.

## The two file-pairs

The skill manages these two env files, each with its own master, template,
and target. All logic below applies **to each of the two files** unless a
step says otherwise:

| Env file | Master | Template | Target |
|---|---|---|---|
| `.env` (dev) | `$HOME/.pi/agent/.env-storage/.env` | `<skill-dir>/assets/.env` | `<cwd>/.env` |
| `.env.production` (prod) | `$HOME/.pi/agent/.env-storage/.env.production` | `<skill-dir>/assets/.env.production` | `<cwd>/.env.production` |

## First-run setup (runs before every operation, for each of the two files)

Before Load or Update, ensure each user-data master exists and is current.
Run this for `.env` and `.env.production` independently:

1. **If the master does not exist:**
   - **Load:** create it. If a legacy master exists at the old repo-root
     location `<skill-dir>/../../.env-storage/assets/<file>` (the pre-user-data
     layout), copy it to the user-data path and tell the user that master was
     migrated. Otherwise copy the template `<skill-dir>/assets/<file>` to the
     user-data path (seeds the master with placeholder keys the user can fill
     in). If neither exists, stop for that file.
   - **Update:** skip — the Update copy will create that master from
     `<cwd>/<file>`.
2. **If the master exists AND the operation is Load:** merge missing keys
   from that file's template (never overwrite existing values) so
   newly-added template keys reach the master:
   ```bash
   mkdir -p "$HOME/.pi/agent/.env-storage"
   awk -F= 'NR==FNR { seen[$1]=1; next } /^[A-Za-z_][A-Za-z0-9_]*=/ && !($1 in seen) { print }' \
     "$HOME/.pi/agent/.env-storage/<file>" "<skill-dir>/assets/<file>" \
     >> "$HOME/.pi/agent/.env-storage/<file>"
   ```
   This appends only `KEY=value` lines whose key is not already in the
   master. Existing values are never overwritten. The output goes to the
   file, not to the model.

## The two operations

| Operation | Meaning |
|---|---|
| **Load** the masters into this project | Copy `$HOME/.pi/agent/.env-storage/.env` → `<cwd>/.env` AND `$HOME/.pi/agent/.env-storage/.env.production` → `<cwd>/.env.production`. Use when the project has no env files yet (or the user wants to drop the masters in). If a target already exists, confirm overwrite. If a master is missing and could not be seeded (first-run failed for that file), skip that file with a note — do not invent contents. |
| **Update** the masters from this project's env files | Copy `<cwd>/.env` → `$HOME/.pi/agent/.env-storage/.env` AND `<cwd>/.env.production` → `$HOME/.pi/agent/.env-storage/.env.production`. Use when the project's env files have changed and should become the new masters. If a master already exists, confirm overwrite. If a `<cwd>/<file>` source is missing, skip that file with a note — do not invent contents. |

Both copy **verbatim** — full overwrite of each destination, not a merge.
Existing destination values are not preserved.

## Workflow

1. **Ask the user which operation** via `AskUserQuestion`, offering exactly
   the two choices above (Load / Update). No other options. No
   target-project question — the target is always the current working
   directory (`<cwd>`).

2. **Run the first-run setup** (above) for **both** `.env` and
   `.env.production`: ensure each user-data master exists and merge missing
   template keys. Report only metadata (e.g. "dev master created from
   template", "prod master migrated from legacy path", "added N new keys to
   the dev master from template") — never values.

3. **Check that each source exists — without reading it.** Use an existence
   test that prints only EXISTS/MISSING, never contents:
   ```bash
   test -f "<source>" && echo EXISTS || echo MISSING
   ```
   - **Load** → for each file, the source is its user-data master at
     `$HOME/.pi/agent/.env-storage/<file>`. If it is missing (and first-run
     could not seed it), skip that file and tell the user that master is
     missing. Do not invent contents. The other file still proceeds if its
     master exists.
   - **Update** → for each file, the source is `<cwd>/<file>`. If it is
     missing, skip that file and tell the user there is no `<file>` in the
     current project to save back. Do not invent contents. The other file
     still proceeds if its source exists.

4. **Confirm the overwrite of each destination that already exists.** Use
   the same existence test on each destination. Do not reveal secret values
   while confirming. If the user declines overwriting a file, skip that file
   (the other file still proceeds). 
   - **Load** → destinations are `<cwd>/.env` and `<cwd>/.env.production`.
     Confirm each that exists.
   - **Update** → destinations are the two user-data masters. Confirm each
     that exists. If a destination does not exist, skip this step for it and
     just copy.

5. **Copy each source to its destination verbatim via the shell.** This is
   the only write step, and it never loads contents into the model context:
   ```bash
   cp -f "<source>" "<destination>"
   ```
   (On a shell without `cp`, e.g. raw PowerShell, use:
   `Copy-Item -LiteralPath "<source>" -Destination "<destination>" -Force`.)
   - **Load** → `cp -f "$HOME/.pi/agent/.env-storage/.env" "<cwd>/.env"` and
     `cp -f "$HOME/.pi/agent/.env-storage/.env.production" "<cwd>/.env.production"`.
   - **Update** → `cp -f "<cwd>/.env" "$HOME/.pi/agent/.env-storage/.env"` and
     `cp -f "<cwd>/.env.production" "$HOME/.pi/agent/.env-storage/.env.production"`.

6. **Report back** using only metadata, never values. For each file that was
   copied, get counts with:
   ```bash
   # line count (no values printed)
   wc -l < "<destination>"
   # number of key lines, values stripped (safe to show)
   grep -cE '^[A-Za-z_][A-Za-z0-9_]*=' "<destination>"
   # redacted key names only — never values
   sed -E 's/=(.*)/=***/' "<destination>" | grep -E '=' | grep -v '^#'
   ```
   Report: which operation ran, each destination path, the line count and key
   count per file, and which files (if any) were skipped and why. Remind the
   user the files contain real secrets and should stay out of version control
   (gitignore `.env` and `.env.production`). If the redacted-name listing is
   useful for confirmation you may show it, but values stay redacted.

## Edge cases

| Case | Behavior |
|---|---|
| User asks to add a specific service / look up a var name | Decline — that ctx7 workflow was removed. Offer Load or Update instead. |
| User names a different project folder | Decline — target is always `<cwd>`. Tell them to run the skill from that project's directory. |
| User asks to read/print an env file | Refuse. Show `<KEY>=***` for secret-shaped names only; never `cat`/`type` the whole file, and never `Read` it. |
| `<cwd>/.env` or `<cwd>/.env.production` is symlinked to a shared file | `cp` follows symlinks on the source side. Warn the user before copying (Load copies the linked file's real contents; Update reads the link target as the source). |
| User mentions `.env.local` | Out of scope — this skill only manages `.env` and `.env.production`. Say so. |
| Prod master (`.../.env-storage/.env.production`) is missing | **Load:** first-run seeds it from the prod template; if seeding fails, skip `.env.production` with a note — `.env` still loads. **Update:** fine — the prod master will be created from `<cwd>/.env.production` (no overwrite to confirm). |
| Dev master (`.../.env-storage/.env`) is missing | **Load:** first-run seeds it from the dev template; if seeding fails, stop and tell the user the dev master is missing. **Update:** fine — the dev master will be created from `<cwd>/.env` (no overwrite to confirm). |
| `<cwd>/.env` is missing | **Load:** fine — the master is copied to a new file (no overwrite to confirm). **Update:** skip `.env` with a note; `.env.production` still updates if present. |
| `<cwd>/.env.production` is missing | **Load:** fine — the prod master is copied to a new file (no overwrite to confirm). **Update:** skip `.env.production` with a note; `.env` still updates if present. |
| `cp` is unavailable (no `cp` on PATH) | Fall back to `Copy-Item -LiteralPath … -Destination … -Force` via PowerShell. Both copy bytes disk-to-disk and keep secrets out of context. |
| A template gains a new key between package versions | The first-run merge appends the new key to that file's user-data master (placeholder value) without touching existing values. The user fills in the real value. |

## What this skill does NOT do

- **Read env file contents into the model context.** Everything is done with
  shell copy commands and metadata-only reporting.
- Add individual services or resolve env var names via `ctx7` (old workflow,
  removed).
- Merge or preserve existing destination values — both operations are a full
  overwrite of each destination file.
- Read or display secret values from any env file.
- Ask which project to target — always the current working directory.
- Manage `.env.local` or other `.env.*` variants — only `.env` and
  `.env.production`.
- Sync to a vault (Doppler, 1Password, AWS Secrets Manager) — out of scope.
- Encrypt, transform, or framework-wire values.
- Edit the shipped templates `assets/.env` / `assets/.env.production` — they
  are read-only.

## Verification (user can run after invoking)

```bash
# After Load: confirm each project file now matches its master (line count matches)
wc -l <cwd>/.env
wc -l <cwd>/.env.production
# After Update: confirm each master now matches the project (line count matches)
wc -l "$HOME/.pi/agent/.env-storage/.env"
wc -l "$HOME/.pi/agent/.env-storage/.env.production"
# Spot-check key names without revealing values (run on whichever file was written)
sed -E 's/=(.*)/=***/' <file> | grep '=' | grep -v '^#'
```