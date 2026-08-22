---
name: modal-docs
description: Modal.com docs reference — Web Functions, Volumes, the modal CLI, app deployment, secrets (.env.production), and the FastAPI bridge patterns this framework's modal_bridge.py uses. Consult before writing or deploying modal_bridge.py.
---

# Modal Docs Skill

You are a helpful assistant with deep knowledge of **Modal Docs**.

## Topic folders

Reference material is organized into topic folders. Pick a topic, read its folder `_index.md`, then open the specific file you need.

| Folder | Index | Description | Pages |
| --- | --- | --- | --- |
| Cli | [cli/_index.md](cli/_index.md) | Interact with the current Modal Workspace. Read and edit modal.Volume volumes. Install and update Modal’s agent skills. | 25 |
| Examples | [examples/_index.md](examples/_index.md) | In this tutorial, we’ll show how to use Modal to schedule a daily report in a spreadsheet on Google Sheets that combines data from a PostgreSQL database with data from an external API. This example repo demonstrates how to use Modal and MongoDB together to build a full-stack application. Modal... | 89 |
| General | [general/_index.md](general/_index.md) | AI infrastructure that developers love. | 1 |
| Guide | [guide/_index.md](guide/_index.md) | This page is a high-level guide to Modal Workspaces, the primary unit of organization for Modal resources and authentication. This guide explains how to set up Web Functions with Modal. This guide documents the behavior of URLs for Web Functions on Modal: automatic generation, configuration,... | 93 |
| Modal App | [modal-app/_index.md](modal-app/_index.md) | A Modal App is a group of functions and classes that are deployed together. | 1 |
| Modal Asgi App | [modal-asgi-app/_index.md](modal-asgi-app/_index.md) | Decorator for registering an ASGI app as a Web Function. | 1 |
| Modal Cloudbucketmount | [modal-cloudbucketmount/_index.md](modal-cloudbucketmount/_index.md) | Mounts a cloud bucket to your container. Currently supports AWS S3 buckets. | 1 |
| Modal Cls | [modal-cls/_index.md](modal-cls/_index.md) | Cls adds method pooling and lifecycle hook behavior to modal.Function. | 1 |
| Modal Concurrent | [modal-concurrent/_index.md](modal-concurrent/_index.md) | Decorator that allows individual containers to handle multiple inputs concurrently. | 1 |
| Modal Container Process | [modal-container-process/_index.md](modal-container-process/_index.md) | Represents a running process in a container. | 1 |
| Modal Fastapi Endpoint | [modal-fastapi-endpoint/_index.md](modal-fastapi-endpoint/_index.md) | Create a Web Function that can be addressed via HTTP at a public URL. | 1 |
| Modal Function | [modal-function/_index.md](modal-function/_index.md) | Functions are the basic units of serverless execution on Modal. | 1 |
| Modal Functioncall | [modal-functioncall/_index.md](modal-functioncall/_index.md) | A reference to an executed function call. | 1 |
| Modal Image | [modal-image/_index.md](modal-image/_index.md) | Base class for container images to run functions in. | 1 |
| Modal Queue | [modal-queue/_index.md](modal-queue/_index.md) | Distributed, FIFO queue for data flow in Modal apps. | 1 |
| Modal Retries | [modal-retries/_index.md](modal-retries/_index.md) | Adds a retry policy to a Modal function. | 1 |
| Sdk | [sdk/_index.md](sdk/_index.md) | Decorator for registering a WSGI app with a Modal function. Synchronize the local object with its identity on the Modal server. Decorator that registers an HTTP web server inside the container. | 50 |

## How to use this skill

1. Find the relevant topic folder in the table above.
2. Read that folder's `_index.md` to see the files it contains.
3. Open the specific file that matches the endpoint or concept you're asking about.
4. Cite the source URL when giving API details.
5. If the user asks about something not covered, say so.
