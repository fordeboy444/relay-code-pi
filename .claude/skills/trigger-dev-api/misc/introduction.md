# Welcome to the Trigger.dev docs

> Source: https://trigger.dev/docs/introduction

![intro-quickstart](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/intro-quickstart.jpg?fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=3daa6c1f067453c49af4221cb7dae812)

Quick start
-----------

Get started with Trigger.dev and run your first task in 3 minutes

![intro-examples](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/intro-examples.jpg?fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=a0d04795e0949c204f31dba612d3f351)

Guides, frameworks & examples
-----------------------------

Browse our wide range of guides, frameworks and example projects

![intro-ai](https://mintcdn.com/trigger/rLzvmO6Cb9crBewG/images/intro-ai.jpg?fit=max&auto=format&n=rLzvmO6Cb9crBewG&q=85&s=cb80c3aa62f79162d8f96cce6479a844)

Building with AI
----------------

Learn how to build Trigger.dev projects using AI coding assistants

![intro-video](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/intro-video.jpg?fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=3a34fcac5370ad06e3c5d317719a8acc)

Video walkthrough
-----------------

Watch an end-to-end demo of Trigger.dev in 10 minutes

[​](https://trigger.dev/docs/introduction#what-is-trigger-dev)

What is Trigger.dev?
--------------------------------------------------------------------------------------

Trigger.dev is an open source background jobs framework that lets you write reliable workflows in plain async code. Run long-running AI tasks, handle complex background jobs, and build AI agents with built-in queuing, automatic retries, and real-time monitoring. No timeouts, elastic scaling, and zero infrastructure management required. We provide everything you need to build and manage background tasks: a CLI and SDK for writing tasks in your existing codebase, support for both [regular](https://trigger.dev/docs/tasks/overview)
 and [scheduled](https://trigger.dev/docs/tasks/scheduled)
 tasks, full observability through our dashboard, and a [Realtime API](https://trigger.dev/docs/realtime)
 with [React hooks](https://trigger.dev/docs/realtime/react-hooks#realtime-hooks)
 for showing task status in your frontend. You can use [Trigger.dev Cloud](https://cloud.trigger.dev/)
 or [self-host](https://trigger.dev/docs/self-hosting/overview)
 on your own infrastructure.

[​](https://trigger.dev/docs/introduction#learn-the-concepts)

Learn the concepts
-----------------------------------------------------------------------------------

Writing tasks
-------------

Tasks are the core of Trigger.dev. Learn what they are and how to write them.

Triggering tasks
----------------

Learn how to trigger tasks from your codebase.

Runs
----

Runs are the instances of tasks that are executed. Learn how they work.

API keys
--------

API keys are used to authenticate requests to the Trigger.dev API. Learn how to create and use them.

[​](https://trigger.dev/docs/introduction#explore-by-feature)

Explore by feature
-----------------------------------------------------------------------------------

Scheduled tasks (cron)
----------------------

Scheduled tasks are a type of task that is scheduled to run at a specific time.

Realtime API
------------

The Realtime API allows you to trigger tasks and get the status of runs.

React hooks
-----------

React hooks are a way to show task status in your frontend.

Waits
-----

Waits are a way to wait for a task to finish before continuing.

Errors and retries
------------------

Learn how to handle errors and retries.

Concurrency & Queues
--------------------

Configure what you want to happen when there is more than one run at a time.

Wait for token (human-in-the-loop)
----------------------------------

Pause runs until a token is completed via an approval workflow.

Build extensions
----------------

Customize the build process or the resulting bundle and container image.

[​](https://trigger.dev/docs/introduction#explore-by-build-extension)

Explore by build extension
---------------------------------------------------------------------------------------------------

| Extension | What it does | Docs |
| --- | --- | --- |
| prismaExtension | Use Prisma with Trigger.dev | [prismaExtension docs](https://trigger.dev/docs/config/extensions/prismaExtension) |
| pythonExtension | Execute Python scripts in Trigger.dev | [pythonExtension docs](https://trigger.dev/docs/config/extensions/pythonExtension) |
| playwright | Use Playwright with Trigger.dev | [playwright extension docs](https://trigger.dev/docs/config/extensions/playwright) |
| puppeteer | Use Puppeteer with Trigger.dev | [puppeteer extension docs](https://trigger.dev/docs/config/extensions/puppeteer) |
| lightpanda | Use Lightpanda with Trigger.dev | [lightpanda extension docs](https://trigger.dev/docs/config/extensions/lightpanda) |
| ffmpeg | Use FFmpeg with Trigger.dev | [ffmpeg extension docs](https://trigger.dev/docs/config/extensions/ffmpeg) |
| aptGet | Install system packages with aptGet | [aptGet extension docs](https://trigger.dev/docs/config/extensions/aptGet) |
| additionalFiles | Copy additional files to the build directory | [additionalFiles docs](https://trigger.dev/docs/config/extensions/additionalFiles) |
| additionalPackages | Include additional packages in the build | [additionalPackages docs](https://trigger.dev/docs/config/extensions/additionalPackages) |
| syncEnvVars | Automatically sync environment variables to Trigger.dev | [syncEnvVars docs](https://trigger.dev/docs/config/extensions/syncEnvVars) |
| esbuildPlugin | Add existing or custom esbuild plugins to your build process | [esbuildPlugin docs](https://trigger.dev/docs/config/extensions/esbuildPlugin) |
| emitDecoratorMetadata | Support for the emitDecoratorMetadata TypeScript compiler | [emitDecoratorMetadata docs](https://trigger.dev/docs/config/extensions/emitDecoratorMetadata) |
| audioWaveform | Support for Audio Waveform in your project | [audioWaveform docs](https://trigger.dev/docs/config/extensions/audioWaveform) |

[​](https://trigger.dev/docs/introduction#explore-by-example)

Explore by example
-----------------------------------------------------------------------------------

![intro-ffmpeg](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/intro-ffmpeg.jpg?fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=308ca975004d564b951b5247fa42e1ba)

FFmpeg
------

![intro-fal](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/intro-fal.jpg?fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=553e3f821fb8ee2776783e992e69063e)

Fal.ai
------

![intro-puppeteer](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/intro-puppeteer.jpg?fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=d87baa6ed5eb42a9f44c3f192675353f)

Puppeteer
---------

![intro-libreoffice](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/intro-libreoffice.jpg?fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=ef98f3b2a4289ded93b40f454a570ff8)

LibreOffice
-----------

![intro-openai](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/intro-openai.jpg?fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=bb55c727721a1d192f05bfbd4b2aedd0)

OpenAI
------

![intro-browserbase](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/intro-browserbase.jpg?fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=352fb95a185e61f6eb76b829465f5760)

Browserbase
-----------

![intro-sentry](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/intro-sentry.jpg?fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=984402dfeeff094b78af3f511ae110d6)

Sentry
------

![intro-resend](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/intro-resend.jpg?fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=1132b85155953b871bcc310e2d0791ca)

Resend
------

![intro-vercel](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/intro-vercel.jpg?fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=9509bd7265563f221aa2c883a6636604)

Vercel AI SDK
-------------

![intro-sharp](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/intro-sharp.jpg?fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=dc7f8fee7e41659bc26c3f82465bcad9)

Sharp
-----

![intro-deepgram](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/intro-deepgram.jpg?fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=feb9e540b0c7f9164afe5f490d1e7f15)

Deepgram
--------

![intro-supabase](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/intro-supabase.jpg?fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=e12aee521d12d2b5002e9ffe63fd1c43)

Supabase
--------

![intro-openai](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/intro-openai.jpg?fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=bb55c727721a1d192f05bfbd4b2aedd0)

DALL•E
------

![intro-firecrawl](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/intro-firecrawl.jpg?fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=c992f70dfa2e7324a5a6c23fdfb5f1ce)

Firecrawl
---------

![intro-lightpanda](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/intro-lightpanda.jpg?fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=f0d242338bf995c2872da2aac5cefd7b)

Lightpanda
----------

[​](https://trigger.dev/docs/introduction#getting-help)

Getting help
-----------------------------------------------------------------------

We’d love to hear from you or give you a hand getting started. Here are some ways to get in touch with us.

Join our Discord server
-----------------------

Our Discord is the best place to get help with any questions about Trigger.dev.

Follow us on X (Twitter)
------------------------

Follow us to get the latest updates and news.

Schedule a call
---------------

Arrange a call with one of the founders to get help with any questions.

Give us a star on GitHub
------------------------

Check us out our GitHub repo and give us a star if you like what we’re doing.

Was this page helpful?

YesNo

[Quick startSet up Trigger.dev in your existing project in under 3 minutes. Install the SDK, create your first background task, and trigger it from your code.\
\
Next](https://trigger.dev/docs/quick-start)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
