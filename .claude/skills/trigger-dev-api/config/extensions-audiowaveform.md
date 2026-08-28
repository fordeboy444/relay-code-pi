# Audio Waveform

> Source: https://trigger.dev/docs/config/extensions/audioWaveform

Previously, we installed [Audio Waveform](https://github.com/bbc/audiowaveform)
 in the build image. That’s been moved to a build extension:

    import { defineConfig } from "@trigger.dev/sdk";
    import { audioWaveform } from "@trigger.dev/build/extensions/audioWaveform";
    
    export default defineConfig({
      project: "<project ref>",
      // Your other config settings...
      build: {
        extensions: [audioWaveform()], // uses verson 1.1.0 of audiowaveform by default
      },
    });
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/config/extensions/emitDecoratorMetadata)
[CustomCustomize how your project is built and deployed to Trigger.dev with your own custom build extensions\
\
Next](https://trigger.dev/docs/config/extensions/custom)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
