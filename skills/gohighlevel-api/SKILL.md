---
name: gohighlevel-api
description: "Reference for the GoHighLevel API. Use whenever the user asks about the GoHighLevel API HTTP API, REST endpoints, webhooks, authentication/API tokens, or needs developer/product documentation for GoHighLevel API. Cite source URLs when giving API details."
---

# GoHighLevel API Skill

You are a helpful assistant with deep knowledge of **GoHighLevel API**.

## Topic folders

Reference material is organized into topic folders. Pick a topic, read its folder `_index.md`, then open the specific file you need.

| Folder | Index | Description | Pages |
| --- | --- | --- | --- |
| Accounts | [accounts/_index.md](accounts/_index.md) | Sub-Account (Formerly Location) Documentation for Sub-Account (Formerly location) API Before you can create or publish a Marketplace app, you need access to the Marketplace Developer Portal. This is where you manage your apps, team access, OAuth settings, and submission workflow. | 31 |
| Auth | [auth/_index.md](auth/_index.md) | HighLevel is not a standalone SaaS platform sold directly to end-users. Instead, our core customers are digital marketing agencies and consultants who: This section explains how to generate a Test Link for a specific app version in the Developer Marketplace and use it to install the app into a... | 31 |
| Authorization | [authorization/_index.md](authorization/_index.md) | Private Integrations allow you to build powerful custom integrations between your HighLevel account and any other third-party app. - Developer's Marketplace: The Developer's Marketplace is a platform within HighLevel that allows developers to build and integrate their applications and tools using... | 3 |
| Bases | [bases/_index.md](bases/_index.md) | Update an existing knowledge base FAQ Update a knowledge base Train discovered website pages and ingest into the knowledge base | 26 |
| Calendars | [calendars/_index.md](calendars/_index.md) | Validate if group slug is available or not. Modify an existing schedule by updating its rules, timezone, and name All fields are optional - only provided fields will be updated. Update service by ID. | 72 |
| Chats | [chats/_index.md](chats/_index.md) | Full update of a chat widget resource. Partial update of a chat widget resource. Returns chat widgets for the sub-account with pagination and optional filters. | 10 |
| Comments | [comments/_index.md](comments/_index.md) | Remove a like from a comment by its **Highlevel** comment ID (the `_id` returned by the list-comments endpoint — not the native platform ID). Paginated list of comments scoped to a post (`parentId` = postId) or a comment thread (`parentId` = commentId). Use `skip`/`limit` for pagination, `sortBy`... | 5 |
| Emails | [emails/_index.md](emails/_index.md) | Update an email campaign draft Update email template Schedule or start an email campaign. The campaign must be in draft, cancelled, or paused status. | 29 |
| Enterprise | [enterprise/_index.md](enterprise/_index.md) | Update Sub-Account (Formerly Location) permissions Get Sub-Account (Formerly Location) permissions | 3 |
| Events | [events/_index.md](events/_index.md) | As part of our upcoming Vue 3 migration, we've introduced a new and safer way for Marketplace apps to listen for store changes. Direct access to the Vue instance (vue, $store, $router) will no longer be available in Vue 3. | 1 |
| Fields | [fields/_index.md](fields/_index.md) | Update Custom Field By Id https://services.leadconnectorhq.com/custom-fields/:id Update Custom Field By Id Description of the field Placeholder text for the field **showInForms**booleanrequired Whether the field should be shown in forms **options** object\[\] Options for the field. Get Custom... | 13 |
| Folders | [folders/_index.md](folders/_index.md) | Updates a single file or folder by ID Update Custom Field Folder Name https://services.leadconnectorhq.com/custom-fields/folder/:id Create Custom Field Folder {  "name": "Name",  "locationId": "ve9EPM428h8vShlRW1KT"} The key for your custom object. Fetches list of files and folders from the media... | 11 |
| General | [general/_index.md](general/_index.md) | Comprehensive API Coverage Access all HighLevel platform features through our REST API.Perfect for building integrations, automating workflows, and creating custom applications. | 1 |
| Ghl | [ghl/_index.md](ghl/_index.md) | Documentation for workflows API API to delete invoice by invoice id Documentation for Voice AI API | 548 |
| Groups | [groups/_index.md](groups/_index.md) | Create or update a LinkedIn ad campaign group with campaigns and ads Publish a LinkedIn ad campaign group and push it live Retrieve reporting metrics for a specific LinkedIn campaign group | 4 |
| Linkedin | [linkedin/_index.md](linkedin/_index.md) | Retrieve the LinkedIn Ads integration details for a location Retrieve LinkedIn Ads accounts available for the connected user Retrieve the authenticated LinkedIn user info for a location | 7 |
| Marketplace Modules | [marketplace-modules/_index.md](marketplace-modules/_index.md) | This guide aims to help developers create custom widgets for use in funnel builder and integrate them seamlessly. We will cover how to create, set up, and render custom widgets using HTML, CSS, and JavaScript or any JS frameworks like Angular, React, Vue along with communication between your custom... | 11 |
| Marketplacepolicies | [marketplacepolicies/_index.md](marketplacepolicies/_index.md) | Welcome to the HighLevel App Marketplace (“Marketplace”). This Refund Policy (“Policy”) explains how we handle refund requests for: | 2 |
| Messages | [messages/_index.md](messages/_index.md) | Post the necessary fields for the API to update message status. Update delivery events, per-recipient statuses, and the overall message status for an email sent via a custom conversation provider. Post the necessary fields for the API to send a new message. | 16 |
| Other | [other/_index.md](other/_index.md) | We’re excited to announce that the LeadConnector MCP (Model Context Protocol) server is live and ready for use! It opens up a world where advanced AI assistants can talk directly to your CRM data and tools. Think of it as a bridge: you can now query, automate, and orchestrate everything in your... | 2 |
| Records | [records/_index.md](records/_index.md) | Uploads File to customFields Post the necessary fields for the API to upload files. The files need to be a buffer with the key '< custom_field_id >_< file_id >'. <br /> Here custom field id is the ID of your custom field and file id is a randomly generated id (or uuid) <br /> There is support for... | 16 |
| Sdk | [sdk/_index.md](sdk/_index.md) | The official gohighlevel-api-client package publishes a async client that speaks to every HighLevel endpoint with the same token automation, webhook helpers, and storage adapters you get on other platforms. Requires Python 3.8+. The gohighlevel/api-client composer package is the officially... | 4 |
| Shares | [shares/_index.md](shares/_index.md) | Create a share link for snapshot | 1 |
| Tags | [tags/_index.md](tags/_index.md) | ------------](https://marketplace.gohighlevel.com/docs/other/country) | 2 |
| Users | [users/_index.md](users/_index.md) | Documentation for users API HighLevel provides a secure mechanism for accessing authenticated user information through signed tokens. This guide explains how you can generate and use Shared Secret key to access user context in secured manner. This guide explains how the installation flow works for... | 14 |
| Versioning | [versioning/_index.md](versioning/_index.md) | The HighLevel Public API is versioned to ensure developers have a stable surface to build on while the platform continues to evolve. The version is specified per-request using the Version request header. | 1 |
| Webhooks | [webhooks/_index.md](webhooks/_index.md) | This page defines all the webhook which are being sent whenever any specific activity happens. The Webhook Logs Dashboard provides comprehensive monitoring and troubleshooting capabilities for webhook deliveries in your marketplace application. This guide covers how to access, navigate, and... | 75 |

## How to use this skill

1. Find the relevant topic folder in the table above.
2. Read that folder's `_index.md` to see the files it contains.
3. Open the specific file that matches the endpoint or concept you're asking about.
4. Cite the source URL when giving API details.
5. If the user asks about something not covered, say so.
