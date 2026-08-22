# Getting Started with HighLevel SDKs

- **URL:** https://marketplace.gohighlevel.com/docs/sdk/GettingStartedSDK
- **Summary:** HighLevel now ships official SDKs for Node.js, Python, and PHP so you can stop hand-rolling API calls. All three clients deliver the same core features—automatic OAuth flows, PIT support, per-location token storage, webhook helpers, auto refresh tokens and typed service methods—so pick the runtime that matches your stack.

[Skip to main content](https://marketplace.gohighlevel.com/docs/sdk/GettingStartedSDK#__docusaurus_skipToContent_fallback)

Version: v3

On this page

HighLevel now ships official SDKs for Node.js, Python, and PHP so you can stop hand-rolling API calls. All three clients deliver the same core features—automatic OAuth flows, PIT support, per-location token storage, webhook helpers, auto refresh tokens and typed service methods—so pick the runtime that matches your stack.

Pick your language[​](https://marketplace.gohighlevel.com/docs/sdk/GettingStartedSDK#pick-your-language "Direct link to Pick your language")

| SDK | Package | Minimum runtime | Deep dive |
| --- | --- | --- | --- |
| Node.js | `@gohighlevel/api-client` | Node.js 18+ | [Node guide](https://marketplace.gohighlevel.com/docs/sdk/node) |
| Python | `gohighlevel-api-client` | Python 3.8+ | [Python guide](https://marketplace.gohighlevel.com/docs/sdk/python) |
| PHP | `gohighlevel/api-client` | PHP 7.4+ | [PHP guide](https://marketplace.gohighlevel.com/docs/sdk/php) |

Installation quick reference[​](https://marketplace.gohighlevel.com/docs/sdk/GettingStartedSDK#installation-quick-reference "Direct link to Installation quick reference")

*   Node.js
*   Python
*   PHP

    npm install @gohighlevel/api-client# oryarn add @gohighlevel/api-client# orpnpm add @gohighlevel/api-client

*   Read the [Node guide](https://marketplace.gohighlevel.com/docs/sdk/node)
     when you are ready.

    pip install gohighlevel-api-client# orpoetry add gohighlevel-api-client

*   Continue with the [Python guide](https://marketplace.gohighlevel.com/docs/sdk/python.md)
    .

    composer require gohighlevel/api-client

*   Dive into the [PHP guide](https://marketplace.gohighlevel.com/docs/sdk/php.md)
    .

What you get out of the box[​](https://marketplace.gohighlevel.com/docs/sdk/GettingStartedSDK#what-you-get-out-of-the-box "Direct link to What you get out of the box")

*   **Auto token rotation** – refresh happens transparently once storage is configured.
*   **Webhook utilities** – signature validation plus automatic handling of webhook events (INSTALL and UNINSTALL).
*   **Token for bulk installation** – if webhook is used, it will generate token for each location in which app is installed and store it in the db

Share your feedback
-------------------

★★★★★

*   [Pick your language](https://marketplace.gohighlevel.com/docs/sdk/GettingStartedSDK#pick-your-language)
    
*   [Installation quick reference](https://marketplace.gohighlevel.com/docs/sdk/GettingStartedSDK#installation-quick-reference)
    
*   [What you get out of the box](https://marketplace.gohighlevel.com/docs/sdk/GettingStartedSDK#what-you-get-out-of-the-box)
