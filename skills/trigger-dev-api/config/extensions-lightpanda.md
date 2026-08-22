# Lightpanda

> Source: https://trigger.dev/docs/config/extensions/lightpanda

To use the Lightpanda browser in your project, add the extension to your `trigger.config.ts` file:

trigger.config.ts

    import { defineConfig } from "@trigger.dev/sdk";
    import { lightpanda } from "@trigger.dev/build/extensions/lightpanda";
    
    export default defineConfig({
      project: "<project ref>",
      build: {
        extensions: [lightpanda()],
      },
    });
    

[​](https://trigger.dev/docs/config/extensions/lightpanda#options)

Options
-----------------------------------------------------------------------------

*   `version`: The version of the browser to install. Default: `"latest"`.
*   `disableTelemetry`: Whether to disable telemetry. Default: `false`.

For example:

trigger.config.ts

    import { defineConfig } from "@trigger.dev/sdk";
    import { lightpanda } from "@trigger.dev/build/extensions/lightpanda";
    
    export default defineConfig({
      project: "<project ref>",
      build: {
        extensions: [\
          lightpanda({\
            version: "nightly",\
            disableTelemetry: true,\
          }),\
        ],
      },
    });
    

[​](https://trigger.dev/docs/config/extensions/lightpanda#development)

Development
-------------------------------------------------------------------------------------

When running in dev, you will first have to download the Lightpanda browser binary and make sure it’s in your `PATH`. See [Lightpanda’s installation guide](https://lightpanda.io/docs/getting-started/installation)
.

[​](https://trigger.dev/docs/config/extensions/lightpanda#next-steps)

Next steps
-----------------------------------------------------------------------------------

[Lightpanda\
----------\
\
Learn how to use Lightpanda in your project.](https://trigger.dev/docs/guides/examples/lightpanda)

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/config/extensions/puppeteer)
[ffmpegUse the ffmpeg build extension to include FFmpeg in your project\
\
Next](https://trigger.dev/docs/config/extensions/ffmpeg)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
