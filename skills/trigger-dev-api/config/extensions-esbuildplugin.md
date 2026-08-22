# esbuild Plugin

> Source: https://trigger.dev/docs/config/extensions/esbuildPlugin

You can easily add existing or custom esbuild plugins to your build process using the `esbuildPlugin` extension:

    import { defineConfig } from "@trigger.dev/sdk";
    import { esbuildPlugin } from "@trigger.dev/build/extensions";
    import { sentryEsbuildPlugin } from "@sentry/esbuild-plugin";
    
    export default defineConfig({
      project: "<project ref>",
      // Your other config settings...
      build: {
        extensions: [\
          esbuildPlugin(\
            sentryEsbuildPlugin({\
              org: process.env.SENTRY_ORG,\
              project: process.env.SENTRY_PROJECT,\
              authToken: process.env.SENTRY_AUTH_TOKEN,\
            }),\
            // optional - only runs during the deploy command, and adds the plugin to the end of the list of plugins\
            { placement: "last", target: "deploy" }\
          ),\
        ],
      },
    });
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/config/extensions/syncEnvVars)
[emitDecoratorMetadataUse the emitDecoratorMetadata build extension to enable support for the emitDecoratorMetadata TypeScript compiler option\
\
Next](https://trigger.dev/docs/config/extensions/emitDecoratorMetadata)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
