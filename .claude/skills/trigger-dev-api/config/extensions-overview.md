# Build extensions

> Source: https://trigger.dev/docs/config/extensions/overview

Build extensions allow you to hook into the build system and customize the build process or the resulting bundle and container image (in the case of deploying). You can use pre-built extensions by installing the `@trigger.dev/build` package into your `devDependencies`, or you can create your own. Build extensions are added to your `trigger.config.ts` file under the `build.extensions` property:

    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      project: "my-project",
      build: {
        extensions: [\
          {\
            name: "my-extension",\
            onBuildStart: async (context) => {\
              console.log("Build starting!");\
            },\
          },\
        ],
      },
    });
    

If you are using a pre-built extension, you can import it from the `@trigger.dev/build` package:

    import { defineConfig } from "@trigger.dev/sdk";
    import { ffmpeg } from "@trigger.dev/build/extensions/core";
    
    export default defineConfig({
      project: "my-project",
      build: {
        extensions: [ffmpeg()],
      },
    });
    

[​](https://trigger.dev/docs/config/extensions/overview#built-in-extensions)

Built-in extensions
---------------------------------------------------------------------------------------------------

Trigger.dev provides a set of built-in extensions that you can use to customize how your project is built and deployed. These extensions are available out of the box and can be configured in your `trigger.config.ts` file.

| Extension | Description |
| --- | --- |
| [prismaExtension](https://trigger.dev/docs/config/extensions/prismaExtension) | Using prisma in your Trigger.dev tasks |
| [pythonExtension](https://trigger.dev/docs/config/extensions/pythonExtension) | Execute Python scripts in your project |
| [puppeteer](https://trigger.dev/docs/config/extensions/puppeteer) | Use Puppeteer in your Trigger.dev tasks |
| [ffmpeg](https://trigger.dev/docs/config/extensions/ffmpeg) | Use FFmpeg in your Trigger.dev tasks |
| [aptGet](https://trigger.dev/docs/config/extensions/aptGet) | Install system packages in your build image |
| [additionalFiles](https://trigger.dev/docs/config/extensions/additionalFiles) | Copy additional files to your build image |
| [additionalPackages](https://trigger.dev/docs/config/extensions/additionalPackages) | Install additional npm packages in your build image |
| [syncEnvVars](https://trigger.dev/docs/config/extensions/syncEnvVars) | Automatically sync environment variables from external services to Trigger.dev |
| [syncVercelEnvVars](https://trigger.dev/docs/config/extensions/syncEnvVars#syncVercelEnvVars) | Automatically sync environment variables from Vercel to Trigger.dev |
| [syncSupabaseEnvVars](https://trigger.dev/docs/config/extensions/syncEnvVars#syncSupabaseEnvVars) | Automatically sync environment variables from Supabase to Trigger.dev |
| [esbuildPlugin](https://trigger.dev/docs/config/extensions/esbuildPlugin) | Add existing or custom esbuild extensions to customize your build process |
| [emitDecoratorMetadata](https://trigger.dev/docs/config/extensions/emitDecoratorMetadata) | Enable `emitDecoratorMetadata` in your TypeScript build |
| [audioWaveform](https://trigger.dev/docs/config/extensions/audioWaveform) | Add Audio Waveform to your build image |

[​](https://trigger.dev/docs/config/extensions/overview#custom-extensions)

Custom extensions
-----------------------------------------------------------------------------------------------

If one of the built-in extensions doesn’t meet your needs, you can create your own custom extension. See our [guide on creating custom build extensions](https://trigger.dev/docs/config/extensions/custom)
 for more information.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/config/config-file)
[prismaExtensionUse the prismaExtension build extension to use Prisma with Trigger.dev\
\
Next](https://trigger.dev/docs/config/extensions/prismaExtension)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
