# apt-get

> Source: https://trigger.dev/docs/config/extensions/aptGet

You can install system packages into the deployed image using the `aptGet` extension:

    import { defineConfig } from "@trigger.dev/sdk";
    import { aptGet } from "@trigger.dev/build/extensions/core";
    
    export default defineConfig({
      project: "<project ref>",
      // Your other config settings...
      build: {
        extensions: [aptGet({ packages: ["ffmpeg"] })],
      },
    });
    

If you want to install a specific version of a package, you can specify the version like this:

    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      project: "<project ref>",
      // Your other config settings...
      build: {
        extensions: [aptGet({ packages: ["ffmpeg=6.0-4"] })],
      },
    });
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/config/extensions/ffmpeg)
[additionalFilesUse the additionalFiles build extension to copy additional files to the build directory\
\
Next](https://trigger.dev/docs/config/extensions/additionalFiles)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
