# FFmpeg

> Source: https://trigger.dev/docs/config/extensions/ffmpeg

You can add the `ffmpeg` build extension to your build process:

    import { defineConfig } from "@trigger.dev/sdk";
    import { ffmpeg } from "@trigger.dev/build/extensions/core";
    
    export default defineConfig({
      project: "<project ref>",
      // Your other config settings...
      build: {
        extensions: [ffmpeg()],
      },
    });
    

By default, this will install the version of `ffmpeg` that is available in the Debian package manager (via `apt`).

[​](https://trigger.dev/docs/config/extensions/ffmpeg#ffmpeg-7-x-static-build)

FFmpeg 7.x (static build)
-----------------------------------------------------------------------------------------------------------

If you need FFmpeg 7.x, you can pass `{ version: "7" }` to the extension. This will install a static build of FFmpeg 7.x instead of using the Debian package:

    import { defineConfig } from "@trigger.dev/sdk";
    import { ffmpeg } from "@trigger.dev/build/extensions/core";
    
    export default defineConfig({
      project: "<project ref>",
      // Your other config settings...
      build: {
        extensions: [ffmpeg({ version: "7" })],
      },
    });
    

This extension will also add the `FFMPEG_PATH` and `FFPROBE_PATH` to your environment variables, making it easy to use popular ffmpeg libraries like `fluent-ffmpeg`. Note that `fluent-ffmpeg` needs to be added to [`external`](https://trigger.dev/docs/config/config-file#external)
 in your `trigger.config.ts` file. Follow [this example](https://trigger.dev/docs/guides/examples/ffmpeg-video-processing)
 to get setup with Trigger.dev and FFmpeg in your project.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/config/extensions/lightpanda)
[aptGetUse the aptGet build extension to install system packages into the deployed image\
\
Next](https://trigger.dev/docs/config/extensions/aptGet)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
