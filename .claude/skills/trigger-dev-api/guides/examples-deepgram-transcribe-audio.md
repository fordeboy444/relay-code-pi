# Transcribe audio using Deepgram

> Source: https://trigger.dev/docs/guides/examples/deepgram-transcribe-audio

[​](https://trigger.dev/docs/guides/examples/deepgram-transcribe-audio#overview)

Overview
--------------------------------------------------------------------------------------------

Transcribe audio using [Deepgram’s](https://developers.deepgram.com/docs/introduction)
 speech recognition API.

[​](https://trigger.dev/docs/guides/examples/deepgram-transcribe-audio#key-features)

Key Features
----------------------------------------------------------------------------------------------------

*   Transcribe audio from a URL
*   Use the Nova 2 model for transcription

[​](https://trigger.dev/docs/guides/examples/deepgram-transcribe-audio#task-code)

Task code
----------------------------------------------------------------------------------------------

trigger/deepgramTranscription.ts

    import { createClient } from "@deepgram/sdk";
    import { logger, task } from "@trigger.dev/sdk";
    
    // Initialize the Deepgram client, using your Deepgram API key (you can find this in your Deepgram account settings).
    const deepgram = createClient(process.env.DEEPGRAM_SECRET_KEY);
    
    export const deepgramTranscription = task({
      id: "deepgram-transcribe-audio",
      run: async (payload: { audioUrl: string }) => {
        const { audioUrl } = payload;
    
        logger.log("Transcribing audio from URL", { audioUrl });
    
        // Transcribe the audio using Deepgram
        const { result, error } = await deepgram.listen.prerecorded.transcribeUrl(
          {
            url: audioUrl,
          },
          {
            model: "nova-2", // Use the Nova 2 model for the transcription
            smart_format: true, // Automatically format transcriptions to improve readability
            diarize: true, // Recognize speaker changes and assign a speaker to each word in the transcript
          }
        );
    
        if (error) {
          logger.error("Failed to transcribe audio", { error });
          throw error;
        }
    
        console.dir(result, { depth: null });
    
        // Extract the transcription from the result
        const transcription = result.results.channels[0].alternatives[0].paragraphs?.transcript;
    
        logger.log(`Generated transcription: ${transcription}`);
    
        return {
          result,
        };
      },
    });
    

[​](https://trigger.dev/docs/guides/examples/deepgram-transcribe-audio#testing-your-task)

Testing your task
--------------------------------------------------------------------------------------------------------------

To test this task in the dashboard, you can use the following payload:

    {
      "audioUrl": "https://dpgr.am/spacewalk.wav"
    }
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/examples/dall-e3-generate-image)
[Fal.ai image to cartoonThis example task generates an image from a URL using Fal.ai and uploads it to Cloudflare R2.\
\
Next](https://trigger.dev/docs/guides/examples/fal-ai-image-to-cartoon)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
