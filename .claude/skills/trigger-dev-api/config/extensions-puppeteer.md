# Puppeteer

> Source: https://trigger.dev/docs/config/extensions/puppeteer

To use Puppeteer in your project, add these build settings to your `trigger.config.ts` file:

trigger.config.ts

    import { defineConfig } from "@trigger.dev/sdk";
    import { puppeteer } from "@trigger.dev/build/extensions/puppeteer";
    
    export default defineConfig({
      project: "<project ref>",
      // Your other config settings...
      build: {
        extensions: [puppeteer()],
      },
    });
    

And add the following environment variable in your Trigger.dev dashboard on the Environment Variables page:

    PUPPETEER_EXECUTABLE_PATH: "/usr/bin/google-chrome-stable",
    

Follow [this example](https://trigger.dev/docs/guides/examples/puppeteer)
 to get setup with Trigger.dev and Puppeteer in your project.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/config/extensions/playwright)
[lightpandaUse the lightpanda build extension to add Lightpanda browser to your project\
\
Next](https://trigger.dev/docs/config/extensions/lightpanda)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
