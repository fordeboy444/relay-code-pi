# Additional Files

> Source: https://trigger.dev/docs/config/extensions/additionalFiles

Import the `additionalFiles` build extension and use it in your `trigger.config.ts` file:

    import { defineConfig } from "@trigger.dev/sdk";
    import { additionalFiles } from "@trigger.dev/build/extensions/core";
    
    export default defineConfig({
      project: "<project ref>",
      // Your other config settings...
      // We strongly recommend setting this to false
      // When set to `false`, the current working directory will be set to the build directory, which more closely matches production behavior.
      legacyDevProcessCwdBehaviour: false, // Default: true
      build: {
        extensions: [additionalFiles({ files: ["./assets/**", "wrangler/wrangler.toml"] })],
      },
    });
    

This will copy the files specified in the `files` array to the build directory. The `files` array can contain globs. The output paths will match the path of the file, relative to the root of the project. This extension effects both the `dev` and the `deploy` commands, and the resulting paths will be the same for both. If you use `legacyDevProcessCwdBehaviour: false`, you can then do this:

    import path from "node:path";
    
    // You can use `process.cwd()` if you use `legacyDevProcessCwdBehaviour: false`
    const interRegularFont = path.join(process.cwd(), "assets/Inter-Regular.ttf");
    

The root of the project is the directory that contains the trigger.config.ts file

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/config/extensions/aptGet)
[additionalPackagesUse the additionalPackages build extension to include additional packages in the build\
\
Next](https://trigger.dev/docs/config/extensions/additionalPackages)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
