# Claude Slack GIF Creator | Modal Docs

- **URL:** https://modal.com/docs/examples/claude-slack-gif-creator
- **Summary:** This repo shows how to build a bot powered by Claude that creates custom Slackmoji-ready GIFs.

Copy page

Claude Slack GIF Creator
========================

![GIF of a pelican riding a bicycle](https://modal-cdn.com/claude-slack-gif-creator/claude-pelican-bicycle.gif) ![GIF of an AGI party](https://modal-cdn.com/claude-slack-gif-creator/agi-party.gif) ![GIF of Gongy shipping](https://modal-cdn.com/claude-slack-gif-creator/gongy-ships.gif)

[This repo](https://github.com/modal-projects/claude-slack-gif-creator)
 shows how to build a bot powered by Claude that creates custom Slackmoji-ready GIFs.

Or, in GIF form:

![A bot powered by Claude that creates custom Slackmoji-ready GIFs](https://modal-cdn.com/claude-slack-gif-creator/claude-gif-gif.gif)

The bot runs on [Modal](https://modal.com/)
 and uses the [Claude Agent SDK](https://platform.claude.com/docs/en/agent-sdk/overview)
 with the [`slack-gif-creator` skill from Anthropic](https://github.com/anthropics/skills/)
.

Features 

*   **Natural Language GIF Generation**: Describe what you want and Claude will create a 128x128 emoji-optimized GIF
*   **Persistent Threads**: Each Slack thread creates a conversation context, persisted on Modal
*   **Image Upload Support**: Upload images to the bot to incorporate them into your GIFs
*   **Background Removal**: Backgrounds removed using the `rembg` tool, so you can make GIFs of your friends
*   **Real-time Tool Logging**: See Claude’s tool usage in the Slack thread as it works

Architecture 

The bot consists of three main components: a Slack Bot Server, a Claude Agent Sandbox, and an Anthropic API Proxy.

### Slack Bot Server 

This component handles Slack events (mentions and thread replies) and manages [Modal Sandboxes](https://modal.com/docs/guide/sandbox)
. It’s a simple [FastAPI ASGI app](https://modal.com/docs/guide/webhooks)
 hosted on Modal.

### Claude Agent Sandbox 

This component runs a Claude client and executes Claude skills, like Bash execution and GIF creation.

Because these skills are tantamount to giving the agent total control over the computing environment and we are going to allow anyone who can access the bot to prompt the agent, we need to isolate and secure this component. To that tend, it runs inside a Modal [Sandbox](https://modal.com/docs/guide/sandbox)
. Modal can readily scale to [hundreds or thousands of Sandboxes](https://modal.com/blog/modal-vibe)
.

Each Slack thread gets its own persistent [Modal Sandbox](https://modal.com/docs/guide/sandbox)
 with a dedicated [Volume](https://modal.com/docs/guide/volumes)
 for storing generated GIFs and session data.

### Anthropic API Proxy 

This component proxies requests to the Anthropic API.

The proxy keeps the API key out of the Sandbox. It’s included so that Claude can’t leak your API key when a naughty prompt hacker asks for a GIF containing it, as in the (mock) example below.

![Fake API keys revealed in a GIF](https://modal-cdn.com/claude-slack-gif-creator/mocked-pwn.gif)

Prerequisites 

*   Python 3.10 or higher
*   A [Modal](https://modal.com/)
     account
*   A Slack workspace
*   An Anthropic API key

Setup 

### 1\. Install Dependencies 

    pip install modal

That’s it!

If you’ve never used Modal before on this machine, also run

    modal setup

### 2\. Configure Slack App 

[Create a new Slack app](https://api.slack.com/apps)
 in your workspace.

Your Slack app needs:

[**OAuth Scopes**](https://api.slack.com/scopes)

*   `app_mentions:read`
*   `chat:write`
*   `files:read`
*   `files:write`
*   `channels:history`
*   `groups:history`
*   `im:history`
*   `mpim:history`

[**Event Subscriptions**](https://api.slack.com/apis/connections/events-api)
:

*   `app_mention`
*   `message.channels`
*   `message.groups`
*   `message.im`
*   `message.mpim`

### 3\. Configure Modal Secrets 

Create two Modal [Secrets](https://modal.com/docs/guide/secrets)
:

**anthropic-secret** with:

*   `ANTHROPIC_API_KEY`: Your Anthropic API key

**claude-code-slackbot-secret** with:

*   `SLACK_BOT_TOKEN`: Your [Slack bot token](https://api.slack.com/authentication/token-types#bot)
     (starts with `xoxb-`)
*   `SLACK_SIGNING_SECRET`: Your Slack app’s [signing secret](https://api.slack.com/authentication/verifying-requests-from-slack#about)
    

### 4\. Deploy to Modal 

    modal deploy src/main.py

After deployment, Modal will provide a webhook URL. Add this URL to your Slack app’s [Event Subscriptions Request URL](https://api.slack.com/apis/connections/events-api#the-events-api__subscribing-to-event-types__events-api-request-urls)
.

Finally, [install the app to your workspace](https://api.slack.com/start/quickstart#installing)
 and invite the bot to the channels where you want to use it.

Usage 

### Mention the Bot 

Mention the bot in any channel with a description of the GIF you want:

> @GIFBot create a GIF of a pelican riding a bicycle

![Pelican riding a bicycle](https://modal-cdn.com/claude-slack-gif-creator/claude-pelican-bicycle.gif)

### Upload Images 

Attach images to your message for the bot to incorporate:

> @GIFBot make a party GIF of this entity that flashes the letters “AGI”

> \[attach image\]

![Are you feeling the AGI?](https://modal-cdn.com/claude-slack-gif-creator/agi-party.gif)

### Background Removal 

Request background removal for transparent GIFs:

> @GIFBot make a GIF of this guy riding on a boat

> \[attach image with background\]

![Gongy ships](https://modal-cdn.com/claude-slack-gif-creator/gongy-ships.gif)

### Thread Replies 

Reply to the bot’s messages in a thread to continue the conversation:

> @GIFBot make a GIF showing “A bot powered by Claude that creates custom Slackmoji-ready GIFs.” on a screen

> the text runs off the screen, fix the wrapping

![A bot powered by Claude that creates custom Slackmoji-ready GIFs](https://modal-cdn.com/claude-slack-gif-creator/claude-gif-gif.gif)

How It Works 

1.  User mentions the bot or replies in a thread
2.  Slack sends an event to the Modal webhook
3.  The bot creates or resumes a Modal Sandbox for that thread
4.  Images attached to the message are downloaded and uploaded to the Sandbox
5.  Claude Agent SDK runs inside the Sandbox with the user’s message
6.  Claude uses the `slack-gif-creator` skill to generate the GIF
7.  The generated GIF is uploaded back to the Slack thread
8.  The Sandbox remains alive for 20 minutes for follow-up requests

Debug Mode 

Set `DEBUG_TOOL_USE = True` in `src/main.py` to enable real-time tool logging in Slack threads.

Resources 

*   [Modal Documentation](https://modal.com/docs)
    
*   [Modal Sandboxes](https://modal.com/products/sandboxes)
    
*   [Claude Agent SDK](https://github.com/anthropics/anthropic-sdk-python)
    
*   [Slack API Documentation](https://api.slack.com/)
    
*   [Slack Bolt Framework](https://slack.dev/bolt-python/)
    
*   [Building Slack Apps](https://api.slack.com/start)
    
*   [`slack-gif-creator` Skill](https://github.com/anthropics/skills/)
    

[Claude Slack GIF Creator](https://modal.com/docs/examples/claude-slack-gif-creator#claude-slack-gif-creator)
[Features](https://modal.com/docs/examples/claude-slack-gif-creator#features)
[Architecture](https://modal.com/docs/examples/claude-slack-gif-creator#architecture)
[Slack Bot Server](https://modal.com/docs/examples/claude-slack-gif-creator#slack-bot-server)
[Claude Agent Sandbox](https://modal.com/docs/examples/claude-slack-gif-creator#claude-agent-sandbox)
[Anthropic API Proxy](https://modal.com/docs/examples/claude-slack-gif-creator#anthropic-api-proxy)
[Prerequisites](https://modal.com/docs/examples/claude-slack-gif-creator#prerequisites)
[Setup](https://modal.com/docs/examples/claude-slack-gif-creator#setup)
[1\. Install Dependencies](https://modal.com/docs/examples/claude-slack-gif-creator#1-install-dependencies)
[2\. Configure Slack App](https://modal.com/docs/examples/claude-slack-gif-creator#2-configure-slack-app)
[3\. Configure Modal Secrets](https://modal.com/docs/examples/claude-slack-gif-creator#3-configure-modal-secrets)
[4\. Deploy to Modal](https://modal.com/docs/examples/claude-slack-gif-creator#4-deploy-to-modal)
[Usage](https://modal.com/docs/examples/claude-slack-gif-creator#usage)
[Mention the Bot](https://modal.com/docs/examples/claude-slack-gif-creator#mention-the-bot)
[Upload Images](https://modal.com/docs/examples/claude-slack-gif-creator#upload-images)
[Background Removal](https://modal.com/docs/examples/claude-slack-gif-creator#background-removal)
[Thread Replies](https://modal.com/docs/examples/claude-slack-gif-creator#thread-replies)
[How It Works](https://modal.com/docs/examples/claude-slack-gif-creator#how-it-works)
[Debug Mode](https://modal.com/docs/examples/claude-slack-gif-creator#debug-mode)
[Resources](https://modal.com/docs/examples/claude-slack-gif-creator#resources)
