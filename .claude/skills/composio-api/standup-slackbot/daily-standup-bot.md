# Daily standup bot

- **URL:** https://docs.composio.dev/standup-slackbot
- **Summary:** A Slack bot that writes each teammate's standup from their own connected tools. Build your own white-labelled bot, give it native Slack interactions with Composio's proxy, and let a tool-router agent write the draft.

Standup is a crucial part of running an effective engineering team, and also oh so tedious: every morning, everyone digs back through what they did and writes it up. It's worse for teams spread across timezones, where there's no shared standup to anchor the day, so it's easy to just forget.

But the work you did *is* there: the PRs in  GitHub, the docs in  Notion, the decisions in  Slack threads. If it's all recorded somewhere, an agent should be able to at least draft it. [Composio sessions](/docs/configuring-sessions) make this *incredibly easy for agents*: a session hands the agent everything it needs, [search](/docs/how-composio-works#meta-tools) to find the right tool, [parallel execute](/docs/how-composio-works#meta-tools) to run many at once, a [sandbox](/docs/sandbox/remote) and [volumes](/docs/sandbox/remote#files-and-mounts). It uses Composio to extract, parse, and cross-reference data across all those sources and write clean summaries of the real work your team shipped. All you have to do is create a session for your teammate and let it cook.

<div className="not-prose my-8 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 [&_figure]:my-0">
  
  
</div>

So we built a Slack bot that does exactly that. Once a day, at a set time in each teammate's own timezone, it reminds them to post in the daily standup thread in a central channel. With one button click, they can run a subagent that uses their Composio connections to generate a clean, consolidated draft to review and post. We'll build it step by step.

This is a deliberately advanced, opinionated build. It's a strong reference for five things:

- **Background-agent sessions**: the draft agent runs on a schedule, not in a conversation. It works from the tools a member already connected and never pauses to ask for auth.
- **Manual execution for deterministic workflows**: outside the draft, the bot doesn't let an agent decide. It runs a fixed flow, calling tools directly with [manual execution](/docs/tools-direct/executing-tools), so a button always triggers the same exact steps.
- **Manual, pre-connected auth**: members connect their tools ahead of time using [manual connections](/docs/manually-authenticating), and the agent just uses whatever is there.
- **White-labelling** (advanced): your own Slack app and bot identity, via [white-labelling](/docs/white-labeling-authentication). This is *not* the easy path. We'd recommend Composio's managed apps, which require no additional configuration. Only do this if you specifically want your own branding.
- **The proxy** (advanced): using [`proxyExecute`](/docs/extending-sessions/proxy-execute) to call Slack API endpoints Composio doesn't wrap as tools.

It is **not** an example of [in-chat or dynamic auth](/docs/authentication) (asking a user to connect a tool mid-run), and it's more setup than many bots need. If you'd rather have a Slack bot with zero setup (Composio's managed app) or in-chat auth, start with the [general Slack bot](/examples/general-agent-with-pi) instead.

The Slack bot itself follows a deterministic flow: the same menu every day. When a member taps a button, it launches a subagent with a Composio session to produce the draft. Here's the shape of it:

<Mermaid chart={`flowchart TD
  cron([Vercel cron]) --> thread[Find or create today's thread]
  thread --> dm
  dm@{ img: "/images/standup-slackbot/slack-reminder.png", label: "DM each due member: Draft or Connect", pos: "b", w: 300, h: 69, constraint: "on" }
  dm -->|Draft| agent[Create a Composio session for the user and launch a sub-agent to generate summary]
  agent --> review
  review@{ img: "/images/standup-slackbot/slack-draft.png", label: "Member reviews: Confirm or Edit", pos: "b", w: 300, h: 143, constraint: "on" }
  review -->|Confirm| post[Post into the thread as the member]
  dm -->|Connect| oauth
  oauth@{ img: "/images/standup-slackbot/slack-connect.png", label: "Creates buttons for the user to link their accounts to Composio via OAuth", pos: "b", w: 340, h: 58, constraint: "on" }
  click agent "/docs/how-composio-works#meta-tools" "Composio metatools"
`} />

## Setup

You need a [Composio API key](https://dashboard.composio.dev/~/project/settings/api-keys?utm_source=docs&utm_medium=content&utm_campaign=examples-standup-slackbot), a Slack workspace you can install an app into, and Node with [tsx](https://nodejs.org). The finished bot deploys to [Vercel](https://vercel.com) as two serverless functions, a cron and an interactivity handler, so there's no long-running server.

## Make your custom Slack bot

This bot doesn't post as "Composio". It posts as *my* app, with its own name, icon, and (frankly ridiculous) face:

That's [white-labelling](/docs/white-labeling-authentication): you bring your own Slack app's credentials instead of using Composio-managed ones. Composio-managed auth needs no setup at all; white-labelling is the trade-off, you register and configure your own Slack app first. It's more work, but the bot is fully yours.

Slack's app-creation UI changes from time to time, so the exact screens below may differ. First, the Slack app itself.

**Create the app from scratch.** At [api.slack.com/apps](https://api.slack.com/apps), click **Create an App**, choose **From scratch**, name it (mine is `Daily Standup Bot`), and pick your workspace.

**Add the Bot Token Scopes.** Under **OAuth & Permissions**, add: `chat:write`, `im:write`, `channels:history`, `channels:read`, `users:read`, `users:read.email`, `team:read`. Then turn on **Interactivity** and point its Request URL at your deployment's `/api/interactivity`.

**Grab the app credentials.** On **Basic Information**, copy the **Client ID** and **Client Secret**. Composio drives the OAuth as your app with these.

## Auth the bot

The Slack app exists; now connect it through Composio so your code can act as it. You create one `slackbot` auth config from your credentials, then a setup script does the OAuth once with Composio's [manual authentication](/docs/manually-authenticating) flow.

Composio has two Slack toolkits, and this bot uses both:

- **`slackbot`** authenticates a Slack *app* and acts as the **bot** (a bot token). It posts the reminders and drafts as "Daily Standup Bot," and it's the one you white-label here.
- **`slack`** authenticates an individual **user** and acts as *them* (a user token). Each teammate connects this so the bot can post their standup under their own name and read their activity for context.

Rule of thumb: posting *as the bot* uses `slackbot`; doing something *as a person* uses `slack`.

**Create an auth config and pick the `Slackbot` toolkit.** In the [Composio dashboard](https://dashboard.composio.dev/~/project/auth-configs?utm_source=docs&utm_medium=content&utm_campaign=examples-standup-slackbot), click **Create Auth Config** and search `slackbot`. Choose **Slackbot**, *not* `Slack`: `Slackbot` posts as the bot identity, while `Slack` acts as an individual user.

**Use your own credentials.** Pick **OAuth 2.0**, then **Your Own Credentials**, and paste the Client ID and Secret from before. Add `team:read` to the user token scopes. This is the white-label step: your app, your name, your face.

**Save the auth config id.** Once created, copy its `ac_...` id into `COMPOSIO_SLACKBOT_AUTH_CONFIG_ID`. This is the one auth config your app uses to take actions on behalf of your bot.

**Run the setup script to connect the bot.** For this bot, we first need to connect the bot itself to Composio, which only needs to be done once. The script creates an OAuth link for you to connect your *Slack bot* to Composio, which lets you use Composio to send messages on behalf of your bot.

The first run prints a link and waits:

```text
╭─────────────────────────────────────────────────────────╮
│  Daily Standup Bot: One-Time Setup                       │
╰─────────────────────────────────────────────────────────╯
  ✅ Auth config has the required user scopes.
  ·  Bot is not connected yet. Generating an authorization link…

  Open this URL in your browser to authorize the bot:

    https://backend.composio.dev/s/AbC123xy

  Waiting for you to complete the OAuth flow (Ctrl+C to abort)…
  ✅ Bot connected to Slack.

──────────────────────────────────────────────────────────────────────
  🎉 Setup complete. Invite the bot to your standup channel and
     point your Slack app's Interactivity Request URL at
     https://<your-deployment>/api/interactivity
──────────────────────────────────────────────────────────────────────
```

Open that link to approve the bot, and the connection goes live:

The script is idempotent and repeatable. Forgot a scope, or hit an issue? No stress, just re-run it with `--reconnect`.

## Talk to Slack

To send and update messages in our deterministic bot workflow, we use Composio's `SLACKBOT_SEND_MESSAGE` and `SLACKBOT_UPDATES_A_MESSAGE` tools via [manual tool execution](/docs/tools-direct/executing-tools). `SLACKBOT_SEND_MESSAGE` takes Block Kit `blocks`, so a message with interactive buttons can go through a tool too.

When a Slack action has no tool, like opening a modal (`views.open`), it drops to [`proxyExecute`](/docs/extending-sessions/proxy-execute): the escape hatch for anything the named tools don't cover, hitting any Slack Web API endpoint as a connected account with no token in your code.

## Make the buttons work

Our StandUp bot gives the user two options every morning: **Draft** or **Connect more tools**. Each message uses [Block Kit](https://api.slack.com/block-kit) to create those buttons. For each button we define an `action_id` that lets us recognise which button was clicked.

```ts
declare const memberEmail: string, dmChannel: string, dmTs: string;
// ---cut---
// the reminder's Draft button
const draftButton = {
  type: 'button',
  style: 'primary',
  text: { type: 'plain_text', text: '📝 Draft' },
  action_id: 'draft',
  value: JSON.stringify({ memberEmail, dmChannel, dmTs }),
};
```

When it's clicked, Slack POSTs to your `/api/interactivity` handler. Verify the request, ack within Slack's 3-second window, then route on the `action_id`:

**Connect more tools** generates a per-member OAuth link for each toolkit the member hasn't connected, so they can add a source without leaving Slack:

**Edit** opens a modal (`views.open` through the proxy), and **Confirm** posts the draft into the day's thread as the member.

## Draft the standup

Now this is the cool and magical part, and the easy part: all the background agent needs is a tool-router session and a prompt. When a member taps **Draft**, you spin up a session scoped to the toolkit catalogue and let the agent research and write.

### A session writes the draft

A [tool-router session](/docs/configuring-sessions) gives the agent its tools. Pass the member's email and your full list of toolkits, hand the tools to the model, and let it investigate and write. You don't have to check which ones the member set up: the session only exposes tools for the accounts they've actually connected, and ignores the rest.

### Use what's connected, nothing more

The router can also *manage* connections, asking the user to authorize any toolkits they haven't connected yet. During a draft you don't want that: if the agent reaches for a tool the member hasn't connected, it should skip it, not prompt them to log in. `manageConnections: false` removes those meta-tools, so the agent drafts from exactly what's already connected.

The bot posts the result back as a draft the member can confirm or edit:

## The whole project

## Run it

Edit `standup.config.ts` with your team (each member's Slack email and timezone, plus your channel and GitHub org), set your four environment variables, run `npx tsx scripts/setup.ts` once to connect your bot, then `vercel deploy`.
