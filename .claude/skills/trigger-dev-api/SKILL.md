---
name: "trigger-dev-api"
description: |
  Trigger.dev documentation and reference. Use this skill whenever the user asks about
  Trigger.dev — tasks, runs, schedules, queues, batches, deployments, the management API/SDK,
  AI agents & chat (v4.5 RC), config, CLI, realtime, deployment, or any Trigger.dev question.
  Navigate by domain folder, then read that folder's _index.md to find the right file.
---

# Trigger.dev Docs

Docs are organized by the site's own sections. Each folder has an `_index.md` listing every page (path + summary); read the relevant page file for full content.

## Domains

| Folder | Description | Files |
| ------ | ----------- | ----- |
| `guides/` | Getting started, concepts, scheduling, retries, logging, limits, integrations | 80 |
| `management/` | Management API & SDK: runs, schedules, sessions, queues, batches, waitpoints, tasks, deployments, env vars, query | 60 |
| `misc/` | Top-level reference pages: introduction, how-it-works, limits, idempotency, errors, logging, waiting, integrations | 44 |
| `ai-chat/` | AI Agents & Prompts (v4.5 RC): sessions, tools, patterns, transport, MCP, caching | 40 |
| `config/` | Project & runtime configuration: trigger.config.ts, options, machines, regions, packages | 16 |
| `realtime/` | Realtime stream subscriptions for run progress and task events | 15 |
| `cli/` | Trigger.dev CLI commands: init, dev, deploy, promote, preview, login, profiles | 12 |
| `runs/` | Runs: lifecycle, heartbeats, max-duration, metadata, priority, usage, testing, replaying | 5 |
| `self-hosting/` | Self-hosting Trigger.dev: overview, Docker, Kubernetes, webapp & supervisor env vars | 5 |
| `tasks/` | Defining tasks: overview, scheduled, schemaTask, streams, regular tasks | 4 |
| `troubleshooting/` | Troubleshooting: alerts, debugging in VS Code, uptime/status | 4 |
| `deployment/` | Deploying tasks: environments, variables, atomic deploys, GitHub Actions | 3 |
| `mcp/` | MCP server: introduction, tools, agent rules | 3 |
| `migrations/` | Migrating to Trigger.dev from v3, Mergent, and n8n | 3 |
| `private-networking/` | Private networking: overview, AWS console setup, troubleshooting | 3 |
| `observability/` | Observability: dashboards and log/event querying | 2 |

## How to Navigate

1. Pick the right domain folder from the table above.
2. Read that folder's `_index.md` to find the specific page file.
3. Read the page file for full details.

## Searching

If you already know a keyword (task, schedule, run, queue, batch, session, `trigger.config.ts`, CLI command):

- **By filename**: `Glob`/`Grep` across folders — filenames are slugs of the page path.
- **By content**: `Grep` across all folders for SDK names, option names, error codes.

Search is faster than browsing when you know what you're looking for.

