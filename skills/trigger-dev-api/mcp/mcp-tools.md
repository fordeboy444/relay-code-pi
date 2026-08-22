# MCP Tools

> Source: https://trigger.dev/docs/mcp-tools

[​](https://trigger.dev/docs/mcp-tools#documentation-and-search-tools)

Documentation and Search Tools
--------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/mcp-tools#search_docs)

search\_docs

Search the Trigger.dev documentation for guides, examples, and API references. **Example usage:**

*   `"How do I create a scheduled task?"`
*   `"Show me webhook examples"`
*   `"What are the deployment options?"`

[​](https://trigger.dev/docs/mcp-tools#project-management-tools)

Project Management Tools
--------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/mcp-tools#list_orgs)

list\_orgs

List all organizations you have access to. **Example usage:**

*   `"What organizations do I have?"`
*   `"Show me my orgs"`

### 

[​](https://trigger.dev/docs/mcp-tools#list_projects)

list\_projects

List all projects in your Trigger.dev account. **Example usage:**

*   `"What projects do I have?"`
*   `"List my Trigger.dev projects"`

### 

[​](https://trigger.dev/docs/mcp-tools#create_project_in_org)

create\_project\_in\_org

Create a new project in an organization. **Example usage:**

*   `"Create a new project called 'my-app'"`
*   `"Set up a new Trigger.dev project"`

### 

[​](https://trigger.dev/docs/mcp-tools#initialize_project)

initialize\_project

Initialize Trigger.dev in your project with automatic setup and configuration. **Example usage:**

*   `"Set up Trigger.dev in this project"`
*   `"Add Trigger.dev to my app"`

[​](https://trigger.dev/docs/mcp-tools#task-management-tools)

Task Management Tools
--------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/mcp-tools#get_current_worker)

get\_current\_worker

Get the current worker for a project, including the worker version, SDK version, and registered tasks with their payload schemas. **Example usage:**

*   `"What tasks are available?"`
*   `"Show me the tasks in dev"`

### 

[​](https://trigger.dev/docs/mcp-tools#trigger_task)

trigger\_task

Trigger a task to run with a specific payload. You can add a delay, set tags, configure retries, choose a machine size, set a TTL, or use an idempotency key. **Example usage:**

*   `"Run the email-notification task"`
*   `"Trigger my-task with userId 123"`
*   `"Execute the sync task in production"`

[​](https://trigger.dev/docs/mcp-tools#run-monitoring-tools)

Run Monitoring Tools
------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/mcp-tools#get_run_details)

get\_run\_details

Get detailed information about a specific task run, including logs and status. Enable debug mode to get the full trace with all logs and spans. **Example usage:**

*   `"Show me details for run run_abc123"`
*   `"Why did this run fail?"`

### 

[​](https://trigger.dev/docs/mcp-tools#list_runs)

list\_runs

List runs for a project. Filter by status, task, tags, version, machine size, or time period. **Example usage:**

*   `"Show me recent runs"`
*   `"List failed runs from the last 7 days"`
*   `"What runs are currently executing?"`

### 

[​](https://trigger.dev/docs/mcp-tools#wait_for_run_to_complete)

wait\_for\_run\_to\_complete

Wait for a specific run to finish and return the result. **Example usage:**

*   `"Wait for run run_abc123 to complete"`

### 

[​](https://trigger.dev/docs/mcp-tools#cancel_run)

cancel\_run

Cancel a running or queued run. **Example usage:**

*   `"Cancel run run_abc123"`
*   `"Stop that task"`

[​](https://trigger.dev/docs/mcp-tools#deployment-tools)

Deployment Tools
----------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/mcp-tools#deploy)

deploy

Deploy your project to staging or production. **Example usage:**

*   `"Deploy to production"`
*   `"Deploy to staging"`

### 

[​](https://trigger.dev/docs/mcp-tools#list_deploys)

list\_deploys

List deployments for a project. Filter by status or time period. **Example usage:**

*   `"Show me recent deployments"`
*   `"What's deployed to production?"`

### 

[​](https://trigger.dev/docs/mcp-tools#list_preview_branches)

list\_preview\_branches

List all preview branches in the project. **Example usage:**

*   `"What preview branches exist?"`
*   `"Show me preview deployments"`

[​](https://trigger.dev/docs/mcp-tools#profile-tools)

Profile Tools
----------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/mcp-tools#whoami)

whoami

Show the current authenticated user, active CLI profile, email, and API URL. **Example usage:**

*   `"Who am I logged in as?"`
*   `"What profile am I using?"`

### 

[​](https://trigger.dev/docs/mcp-tools#list_profiles)

list\_profiles

List all configured CLI profiles and which one is currently active. **Example usage:**

*   `"What profiles do I have?"`
*   `"Show me my Trigger.dev profiles"`

### 

[​](https://trigger.dev/docs/mcp-tools#switch_profile)

switch\_profile

Switch the active CLI profile for this MCP session. This changes which Trigger.dev account and API URL are used for all subsequent tool calls. **Example usage:**

*   `"Switch to my production profile"`
*   `"Use the staging profile"`

[​](https://trigger.dev/docs/mcp-tools#query-and-analytics-tools)

Query and Analytics Tools
----------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/mcp-tools#get_query_schema)

get\_query\_schema

Get the schema for TRQL queries, including all available tables, their columns, data types, descriptions, and allowed values. Call this before using the query tool to understand what data is available. **Example usage:**

*   `"What tables and columns can I query?"`
*   `"Show me the query schema"`

### 

[​](https://trigger.dev/docs/mcp-tools#query)

query

Execute a TRQL query against your Trigger.dev data. TRQL is a SQL-style query language for analyzing runs, metrics, and LLM usage. **Example usage:**

*   `"How many runs failed in the last 7 days?"`
*   `"Show me the top 10 most expensive tasks"`
*   `"Query the average execution duration by task"`

### 

[​](https://trigger.dev/docs/mcp-tools#list_dashboards)

list\_dashboards

List available built-in dashboards with their widgets. Each dashboard contains pre-built queries for common metrics. **Example usage:**

*   `"What dashboards are available?"`
*   `"Show me the dashboard widgets"`

### 

[​](https://trigger.dev/docs/mcp-tools#run_dashboard_query)

run\_dashboard\_query

Execute a single widget query from a built-in dashboard. Use `list_dashboards` first to see available dashboards and widget IDs. **Example usage:**

*   `"Run the total runs widget from the overview dashboard"`
*   `"Show me the LLM cost over time from the AI dashboard"`

[​](https://trigger.dev/docs/mcp-tools#dev-server-tools)

Dev Server Tools
----------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/mcp-tools#start_dev_server)

start\_dev\_server

Start the Trigger.dev dev server (`trigger dev`) in the background. Waits up to 30 seconds for the worker to be ready. **Example usage:**

*   `"Start the dev server"`
*   `"Run trigger dev"`

### 

[​](https://trigger.dev/docs/mcp-tools#stop_dev_server)

stop\_dev\_server

Stop the running Trigger.dev dev server. **Example usage:**

*   `"Stop the dev server"`

### 

[​](https://trigger.dev/docs/mcp-tools#dev_server_status)

dev\_server\_status

Check the status of the dev server and view recent output. Shows whether it is stopped, starting, ready, or has errors. **Example usage:**

*   `"Is the dev server running?"`
*   `"Show me the dev server logs"`
*   `"Are there any build errors?"`

The deploy and list\_preview\_branches tools are not available when the MCP server is running with the `--dev-only` flag. The `--readonly` flag hides deploy, trigger\_task, and cancel\_run.

[​](https://trigger.dev/docs/mcp-tools#agent-chat-tools)

Agent Chat Tools
----------------------------------------------------------------------------

These tools let you have conversations with [chat agents](https://trigger.dev/docs/ai-chat/overview)
 directly from your AI coding tool. See the [Agent MCP guide](https://trigger.dev/docs/ai-chat/mcp)
 for a walkthrough.

### 

[​](https://trigger.dev/docs/mcp-tools#list_agents)

list\_agents

List all chat agents registered in the current worker. Agents are tasks created with `chat.agent()` or `chat.customAgent()`. **Example usage:**

*   `"What agents are available?"`
*   `"List my chat agents"`

### 

[​](https://trigger.dev/docs/mcp-tools#start_agent_chat)

start\_agent\_chat

Start a conversation with a chat agent. Returns a chat ID for use with `send_agent_message`. Optionally preloads the agent so it initializes before the first message. **Parameters:**

*   `agentId` (required) — The agent task slug (e.g., `"support-agent"`)
*   `chatId` (optional) — A custom conversation ID. Auto-generated if omitted
*   `clientData` (optional) — Client data to include with every message (e.g., `{ userId: "user_123" }`). Must match the agent’s `clientDataSchema` if one is defined
*   `preload` (optional, default: `true`) — Whether to preload the agent before the first message

**Example usage:**

*   `"Start a chat with the support agent"`
*   `"Talk to the pr-review agent with userId abc"`

### 

[​](https://trigger.dev/docs/mcp-tools#send_agent_message)

send\_agent\_message

Send a message to an active agent chat and get the full response back. The agent remembers full context from previous messages in the same chat. **Parameters:**

*   `chatId` (required) — The chat ID from `start_agent_chat`
*   `message` (required) — The message text to send

**Example usage:**

*   `"Tell the agent to review the latest PR"`
*   `"Ask it what tools it has available"`

### 

[​](https://trigger.dev/docs/mcp-tools#close_agent_chat)

close\_agent\_chat

Close an agent chat conversation. The agent exits its loop gracefully. Without this, the agent will close on its own when its idle timeout expires. **Parameters:**

*   `chatId` (required) — The chat ID to close

**Example usage:**

*   `"Close the chat"`
*   `"End the conversation"`

The `start_agent_chat`, `send_agent_message`, and `close_agent_chat` tools are write operations and are not available in readonly mode.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/mcp-introduction)
[SkillsInstall Trigger.dev agent skills to teach any AI coding assistant how to write tasks, realtime frontends, and chat.agent AI agents.\
\
Next](https://trigger.dev/docs/skills)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
