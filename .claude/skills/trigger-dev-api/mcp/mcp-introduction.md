# MCP Introduction

> Source: https://trigger.dev/docs/mcp-introduction

[​](https://trigger.dev/docs/mcp-introduction#what-is-the-trigger-dev-mcp-server)

What is the Trigger.dev MCP Server?
------------------------------------------------------------------------------------------------------------------------

The Trigger.dev MCP (Model Context Protocol) Server enables AI assistants to interact directly with your Trigger.dev projects. It provides a comprehensive set of tools to:

*   Search Trigger.dev documentation
*   Initialize new Trigger.dev projects
*   List and manage your projects and organizations
*   Get task information and trigger task runs
*   Deploy projects to different environments
*   Monitor run details and list runs with filtering options
*   Query your data with TRQL and run built-in dashboard metrics

[​](https://trigger.dev/docs/mcp-introduction#installation)

Installation
---------------------------------------------------------------------------

The quickest way to get set up is the interactive installer:

    npx trigger.dev@latest install-mcp
    

It will detect your installed clients and configure them automatically. You can also copy-paste the config for your client below.

[​](https://trigger.dev/docs/mcp-introduction#client-configuration)

Client Configuration
-------------------------------------------------------------------------------------------

Each client has a slightly different config format. Copy the snippet for your client into the appropriate file.

*   Claude Code
    
*   Cursor
    
*   Windsurf
    
*   VS Code
    
*   Zed
    
*   Cline
    
*   Gemini CLI
    
*   AMP
    
*   Codex CLI
    
*   Crush
    
*   opencode
    
*   Ruler
    

Install using the command line:

    npx trigger.dev@latest install-mcp --client claude-code
    

Or add this configuration to `~/.claude.json` (user) or `.mcp.json` (project):

    {
      "mcpServers": {
        "trigger": {
          "command": "npx",
          "args": ["trigger.dev@latest", "mcp"]
        }
      }
    }
    

[View Claude Code MCP docs ↗](https://code.claude.com/docs/en/mcp)

Install using the command line:

    npx trigger.dev@latest install-mcp --client cursor
    

Or add this configuration to `~/.cursor/mcp.json` (user) or `.cursor/mcp.json` (project):

    {
      "mcpServers": {
        "trigger": {
          "command": "npx",
          "args": ["trigger.dev@latest", "mcp"]
        }
      }
    }
    

[View Cursor MCP docs ↗](https://cursor.com/docs/context/mcp)

Install using the command line:

    npx trigger.dev@latest install-mcp --client windsurf
    

Or add this configuration to `~/.codeium/windsurf/mcp_config.json`:

    {
      "mcpServers": {
        "trigger": {
          "command": "npx",
          "args": ["trigger.dev@latest", "mcp"]
        }
      }
    }
    

[View Windsurf MCP docs ↗](https://docs.windsurf.com/windsurf/cascade/mcp)

Install using the command line:

    npx trigger.dev@latest install-mcp --client vscode
    

Or add this configuration to `.vscode/mcp.json` (project) or `~/Library/Application Support/Code/User/mcp.json` (user, macOS):

    {
      "servers": {
        "trigger": {
          "command": "npx",
          "args": ["trigger.dev@latest", "mcp"]
        }
      }
    }
    

VS Code uses `servers` instead of `mcpServers`.

[View VS Code MCP docs ↗](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

Install using the command line:

    npx trigger.dev@latest install-mcp --client zed
    

Or add this configuration to `~/.config/zed/settings.json`:

    {
      "context_servers": {
        "trigger": {
          "source": "custom",
          "command": "npx",
          "args": ["trigger.dev@latest", "mcp"]
        }
      }
    }
    

[View Zed context servers docs ↗](https://zed.dev/docs/ai/mcp)

Install using the command line:

    npx trigger.dev@latest install-mcp --client cline
    

Or add this configuration to `~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`:

    {
      "mcpServers": {
        "trigger": {
          "command": "npx",
          "args": ["trigger.dev@latest", "mcp"]
        }
      }
    }
    

[View Cline MCP docs ↗](https://docs.cline.bot/mcp/configuring-mcp-servers)

Install using the command line:

    npx trigger.dev@latest install-mcp --client gemini-cli
    

Or add this configuration to `~/.gemini/settings.json` (user) or `.gemini/settings.json` (project):

    {
      "mcpServers": {
        "trigger": {
          "command": "npx",
          "args": ["trigger.dev@latest", "mcp"]
        }
      }
    }
    

Install using the command line:

    npx trigger.dev@latest install-mcp --client amp
    

Or add this configuration to `~/.config/amp/settings.json`:

    {
      "amp.mcpServers": {
        "trigger": {
          "command": "npx",
          "args": ["trigger.dev@latest", "mcp"]
        }
      }
    }
    

[View Sourcegraph AMP MCP docs ↗](https://ampcode.com/manual#mcp)

Install using the command line:

    npx trigger.dev@latest install-mcp --client openai-codex
    

Or add this configuration to `~/.codex/config.toml`:

    [mcp_servers.trigger]
    command = "npx"
    args = ["trigger.dev@latest", "mcp"]
    startup_timeout_sec = 30
    

The `startup_timeout_sec = 30` is recommended. Codex defaults to 10 seconds, which may not be enough for `npx` to download the package on first run.

Install using the command line:

    npx trigger.dev@latest install-mcp --client crush
    

Or add this configuration to `.crush.json` (project), `crush.json`, or `~/.config/crush/crush.json` (user). Files are loaded in priority order: `.crush.json` → `crush.json` → `$HOME/.config/crush/crush.json`.

    {
      "mcp": {
        "trigger": {
          "type": "stdio",
          "command": "npx",
          "args": ["trigger.dev@latest", "mcp"]
        }
      }
    }
    

[View Charm MCP docs ↗](https://github.com/charmbracelet/crush)

Install using the command line:

    npx trigger.dev@latest install-mcp --client opencode
    

Or add this configuration to `~/.config/opencode/opencode.json` (user) or `./opencode.json` (project):

    {
      "mcp": {
        "trigger": {
          "type": "local",
          "command": ["npx", "trigger.dev@latest", "mcp"],
          "enabled": true
        }
      }
    }
    

[View opencode MCP docs ↗](https://opencode.ai/docs/mcp-servers/)

Install using the command line:

    npx trigger.dev@latest install-mcp --client ruler
    

Or add this configuration to `.ruler/mcp.json`:

    {
      "mcpServers": {
        "trigger": {
          "type": "stdio",
          "command": "npx",
          "args": ["trigger.dev@latest", "mcp"]
        }
      }
    }
    

After adding the config, restart your client. You should see a server named **trigger** connect automatically.

[​](https://trigger.dev/docs/mcp-introduction#authentication)

Authentication
-------------------------------------------------------------------------------

The `search_docs` tool works without authentication. All other tools require you to be logged in via the [Trigger.dev CLI](https://trigger.dev/docs/cli-login-commands)
. The first time you use an authenticated tool, your MCP client will prompt you to log in.CLI Options

The `install-mcp` command supports these options:**Core Options**

*   `-p, --project-ref <project ref>` — Scope the MCP server to a specific project
*   `-t, --tag <package tag>` — CLI package version to use (default: latest)
*   `--dev-only` — Restrict to the dev environment only
*   `--readonly` — Read-only mode. Hides write tools (`deploy`, `trigger_task`, `cancel_run`) so the AI cannot make changes to your account
*   `--yolo` — Install into all supported clients automatically
*   `--scope <scope>` — `user`, `project`, or `local`
*   `--client <clients...>` — Install into specific client(s)

**Configuration Options**

*   `--log-file <log file>` — Write logs to a file
*   `-a, --api-url <value>` — Custom Trigger.dev API URL
*   `-l, --log-level <level>` — Log level (debug, info, log, warn, error, none)

**Examples**Install for all supported clients:

    npx trigger.dev@latest install-mcp --yolo
    

Install for specific clients:

    npx trigger.dev@latest install-mcp --client claude-code cursor --scope user
    

Restrict to dev environment for a specific project:

    npx trigger.dev@latest install-mcp --dev-only --project-ref proj_abc123
    

Read-only mode (prevents AI from deploying or triggering tasks):

    npx trigger.dev@latest install-mcp --readonly
    

To add these options to a manual config, append them to the `args` array:

    {
      "args": ["trigger.dev@latest", "mcp", "--dev-only", "--project-ref", "proj_abc123"]
    }

[​](https://trigger.dev/docs/mcp-introduction#getting-started)

Getting Started
---------------------------------------------------------------------------------

Once installed, you can start using the MCP server by asking your AI assistant questions like:

*   `"Search the trigger docs for a ffmpeg example"`
*   `"Initialize trigger.dev in my project"`
*   `"Get all tasks in my project"`
*   `"Trigger my foobar task with a sample payload"`
*   `"Get the details of the latest run for my foobar task"`
*   `"List all runs for my foobar task"`
*   `"Deploy my project to staging"`
*   `"Deploy my project to production"`
*   `"How many runs failed in the last 7 days?"`
*   `"Show me the overview dashboard metrics"`
*   `"What tables can I query?"`

[​](https://trigger.dev/docs/mcp-introduction#next-steps)

Next Steps
-----------------------------------------------------------------------

[MCP Tools\
---------\
\
Explore all available MCP tools for managing your projects.](https://trigger.dev/docs/mcp-tools)

[Skills\
------\
\
Portable instruction sets that teach AI assistants Trigger.dev patterns.](https://trigger.dev/docs/skills)

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/building-with-ai)
[ToolsLearn about how to use the tools available in the Trigger.dev MCP Server\
\
Next](https://trigger.dev/docs/mcp-tools)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
