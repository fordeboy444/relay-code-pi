# Additional Packages

> Source: https://trigger.dev/docs/config/extensions/additionalPackages

Import the `additionalPackages` build extension and use it in your `trigger.config.ts` file:

    import { defineConfig } from "@trigger.dev/sdk";
    import { additionalPackages } from "@trigger.dev/build/extensions/core";
    
    export default defineConfig({
      project: "<project ref>",
      // Your other config settings...
      build: {
        // Omit version for auto-resolution; for reproducible builds use e.g. packages: ["wrangler@X.Y.Z"]
        extensions: [additionalPackages({ packages: ["wrangler"] })],
      },
    });
    

This allows you to include additional packages in the build that are not automatically included via imports. This is useful if you want to install a package that includes a CLI tool you can invoke in your tasks via `exec`. We will try to automatically resolve the version of the package but you can specify the version by using the `@` symbol. If you omit the version, the build may use a cached or older resolution. For reproducible builds, pin the exact version (e.g. `wrangler@X.Y.Z`).

    import { defineConfig } from "@trigger.dev/sdk";
    import { additionalPackages } from "@trigger.dev/build/extensions/core";
    
    export default defineConfig({
      project: "<project ref>",
      // Your other config settings...
      build: {
        extensions: [additionalPackages({ packages: ["wrangler@X.Y.Z"] })],
      },
    });
    

This extension does not do anything in `dev` mode, but it will install the packages in the build directory when you run `deploy`. The packages will be installed in the `node_modules` directory in the build directory.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/config/extensions/additionalFiles)
[syncEnvVarsUse the syncEnvVars build extension to automatically sync environment variables to Trigger.dev\
\
Next](https://trigger.dev/docs/config/extensions/syncEnvVars)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
