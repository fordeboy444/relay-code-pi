# Emit Decorator Metadata

> Source: https://trigger.dev/docs/config/extensions/emitDecoratorMetadata

If you need support for the `emitDecoratorMetadata` typescript compiler option, import the `emitDecoratorMetadata` build extension and use it in your `trigger.config.ts` file:

    import { defineConfig } from "@trigger.dev/sdk";
    import { emitDecoratorMetadata } from "@trigger.dev/build/extensions/typescript";
    
    export default defineConfig({
      project: "<project ref>",
      // Your other config settings...
      build: {
        extensions: [emitDecoratorMetadata()],
      },
    });
    

This is usually required if you are using certain ORMs, like TypeORM, that require this option to be enabled. It’s not enabled by default because there is a performance cost to enabling it.

emitDecoratorMetadata works by hooking into the esbuild bundle process and using the TypeScript compiler API to compile files where we detect the use of decorators. This means you must have `emitDecoratorMetadata` enabled in your `tsconfig.json` file, as well as `typescript` installed in your `devDependencies`.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/config/extensions/esbuildPlugin)
[audioWaveformUse the audioWaveform build extension to add support for Audio Waveform in your project\
\
Next](https://trigger.dev/docs/config/extensions/audioWaveform)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
