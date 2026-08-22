---
name: pi-api
description: "Reference for the Pi CLI (terminal coding agent). Use whenever the user wants to run, script, or automate Pi commands - subcommands, flags, output formats, install/auth/config - or asks about a specific command or flag."
---

# Pi API Skill

You are a helpful assistant with deep knowledge of the **Pi** terminal coding agent.

This skill documents Pi's CLI surface: commands, subcommands, flags, configuration, and examples. Use it when the user wants to run Pi from the terminal, automate it in a shell, or asks about a specific command, flag, or behavior.

## Reference files

All CLI reference material lives in `references/`. Scan the table for the right command, then read it from disk.

| Command | Local file | Summary |
| --- | --- | --- |
| Compaction & Branch Summarization | [references/compaction-branch-summarization.md](references/compaction-branch-summarization.md) | LLMs have limited context windows. |
| Containerization | [references/containerization.md](references/containerization.md) | Pi runs with all permissions by default, but in some cases, you will want to have more control over what directories Pi can write to and which accesses it has. |
| Custom Providers | [references/custom-providers.md](references/custom-providers.md) | Extensions can register custom model providers via `pi.registerProvider()`. |
| Development | [references/development.md](references/development.md) | See AGENTS.md for additional guidelines. git clone https://github.com/earendil-works/pi-mono /path/to/pi-mono/pi-test.sh The script can be run from any directory. |
| Environment Variables | [references/environment-variables.md](references/environment-variables.md) | Pi uses environment variables in three ways: - Variables such as `PI_OFFLINE` configure the Pi process. - Pi sets process markers so child processes can identify Pi as the launching agent. - Commands run by the LLM-callable bash tool receive `PI_*` variables describing the current session. |
| Extensions | [references/extensions.md](references/extensions.md) | > pi can create extensions. |
| Pi Documentation | [references/pi-documentation.md](references/pi-documentation.md) | Pi is a minimal terminal coding harness. |
| JSON Event Stream Mode | [references/json-event-stream-mode.md](references/json-event-stream-mode.md) | pi --mode json "Your prompt" Outputs all session events as JSON lines to stdout. |
| Keybindings | [references/keybindings.md](references/keybindings.md) | All keyboard shortcuts can be customized via `~/.pi/agent/keybindings.json`. |
| llama.cpp | [references/llama-cpp.md](references/llama-cpp.md) | Pi supports the llama.cpp router server. |
| Custom Models | [references/custom-models.md](references/custom-models.md) | Add custom providers and models (Ollama, vLLM, LM Studio, proxies) via `~/.pi/agent/models.json`. - Minimal Example - Full Example - Supported APIs - Provider Configuration - Model Configuration - Overriding Built-in Providers - Per-model Overrides - Anthropic Messages Compatibility - OpenAI... |
| Pi Packages | [references/pi-packages.md](references/pi-packages.md) | > pi can help you create pi packages. |
| Prompt Templates | [references/prompt-templates.md](references/prompt-templates.md) | > pi can create prompt templates. |
| Providers | [references/providers.md](references/providers.md) | Pi supports subscription-based providers via OAuth and API key providers via environment variables or auth file. |
| Quickstart | [references/quickstart.md](references/quickstart.md) | This page gets you from install to a useful first pi session. |
| RPC Mode | [references/rpc-mode.md](references/rpc-mode.md) | RPC mode enables headless operation of the coding agent via a JSON protocol over stdin/stdout. |
| SDK | [references/sdk.md](references/sdk.md) | > pi can help you use the SDK. |
| Security | [references/security.md](references/security.md) | Pi is a local coding agent. |
| Session File Format | [references/session-file-format.md](references/session-file-format.md) | Sessions are stored as JSONL (JSON Lines) files. |
| Sessions | [references/sessions.md](references/sessions.md) | Pi saves conversations as sessions so you can continue work, branch from earlier turns, and revisit previous paths. |
| Settings | [references/settings.md](references/settings.md) | Pi uses JSON settings files with project settings overriding global settings. \| Location \| Scope \| \|----------\|-------\| \| `~/.pi/agent/settings.json` \| Global (all projects) \| \| `.pi/settings.json` \| Project (current directory) \| Edit directly or use `/settings` for common options. |
| Shell Aliases | [references/shell-aliases.md](references/shell-aliases.md) | Pi runs bash in non-interactive mode (`bash -c`), which doesn't expand aliases by default. |
| Skills | [references/skills.md](references/skills.md) | > pi can create skills. |
| Terminal Setup | [references/terminal-setup.md](references/terminal-setup.md) | Pi uses the Kitty keyboard protocol for reliable modifier key detection. |
| Termux (Android) Setup | [references/termux-android-setup.md](references/termux-android-setup.md) | Pi runs on Android via Termux, a terminal emulator and Linux environment for Android. 1. |
| Themes | [references/themes.md](references/themes.md) | > pi can create themes. |
| tmux Setup | [references/tmux-setup.md](references/tmux-setup.md) | Pi works inside tmux, but tmux strips modifier information from certain keys by default. |
| TUI Components | [references/tui-components.md](references/tui-components.md) | > pi can create TUI components. |
| Using Pi | [references/using-pi.md](references/using-pi.md) | This page collects day-to-day usage details that do not fit on the quickstart page. <p align="center"><img src="images/interactive-mode.png" alt="Interactive Mode" width="600"></p> The interface has four main areas: - **Startup header** - shortcuts, loaded context files, prompt templates, skills,... |
| Windows Setup | [references/windows-setup.md](references/windows-setup.md) | Pi requires a bash shell on Windows. |

## How to use this skill

1. Find the relevant command in the table above and read its local file.
2. Each file has the command syntax, flags, and examples.
3. Cite the source URL when giving CLI details.
4. If the user asks about something not covered, say so.

## Related

- HTTP API reference: see the **pi-api** skill.
