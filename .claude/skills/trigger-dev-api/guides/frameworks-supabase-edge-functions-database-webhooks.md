# Triggering tasks from Supabase Database Webhooks

> Source: https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#overview)

Overview
--------------------------------------------------------------------------------------------------------------

Supabase and Trigger.dev can be used together to create powerful workflows triggered by real-time changes in your database tables:

*   A Supabase Database Webhook triggers an Edge Function when a row including a video URL is inserted into a table
*   The Edge Function triggers a Trigger.dev task, passing the `video_url` column data from the new table row as the payload
*   The Trigger.dev task then:
    *   Uses [FFmpeg](https://www.ffmpeg.org/)
         to extract the audio track from a video URL
    *   Uses [Deepgram](https://deepgram.com/)
         to transcribe the extracted audio
    *   Updates the original table row using the `record.id` in Supabase with the new transcription using `update`

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#prerequisites)

Prerequisites
------------------------------------------------------------------------------------------------------------------------

*   Ensure you have the [Supabase CLI](https://supabase.com/docs/guides/cli/getting-started)
     installed
*   Since Supabase CLI version 1.123.4, you must have [Docker Desktop installed](https://supabase.com/docs/guides/functions/deploy#deploy-your-edge-functions)
     to deploy Edge Functions
*   Ensure TypeScript is installed
*   [Create a Trigger.dev account](https://cloud.trigger.dev/)
    
*   Create a new Trigger.dev project
*   [Create a new Deepgram account](https://deepgram.com/)
     and get your API key from the dashboard

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#github-repo)

GitHub repo
--------------------------------------------------------------------------------------------------------------------

View the project on GitHub
--------------------------

Click here to view the full code for this project in our examples repository on GitHub. You can fork it and use it as a starting point for your own project.

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#initial-setup)

Initial setup
------------------------------------------------------------------------------------------------------------------------

1

[](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#)

Optional step 1: create a new Supabase project

If you already have a Supabase project on your local machine you can skip this step.

You can create a new project by running the following command in your terminal using the Supabase CLI:

    supabase init
    

If you are using VS Code, ensure to answer ‘y’ when asked to generate VS Code settings for Deno, and install any recommended extensions.

2

[](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#)

Optional step 2: create a package.json file

If your project does not already have `package.json` file (e.g. if you are using Deno), create it manually in your project’s root folder.

If your project has a `package.json` file you can skip this step.

This is required for the Trigger.dev SDK to work correctly.

package.json

    {
      "devDependencies": {
        "typescript": "^5.6.2"
      }
    }
    

Update your Typescript version to the latest version available.

3

[](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#)

Run the CLI \`init\` command

The easiest way to get started is to use the CLI. It will add Trigger.dev to your existing project, create a `/trigger` folder and give you an example task.Run this command in the root of your project to get started:

npm

pnpm

yarn

    npx trigger.dev@latest init
    

It will do a few things:

1.  Log you into the CLI if you’re not already logged in.
2.  Create a `trigger.config.ts` file in the root of your project.
3.  Ask where you’d like to create the `/trigger` directory.
4.  Create the `/trigger` directory with an example task, `/trigger/example.[ts/js]`.

Choose “None” when prompted to install an example task. We will create a new task for this guide.

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#create-a-new-table-in-your-supabase-database)

Create a new table in your Supabase database
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

First, in the Supabase project dashboard, you’ll need to create a new table to store the video URL and transcription. To do this, click on ‘Table Editor’ in the left-hand menu and create a new table. ![How to create a new Supabase table](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/supabase-new-table-1.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=0a2bbf11537f694d5e8888c590d8a22b) Call your table `video_transcriptions`. Add two new columns, one called `video_url` with the type `text` , and another called `transcription`, also with the type `text` . ![How to create a new Supabase table 2](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/supabase-new-table-2.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=78d48f7f37128ea37b494a76a824f511)

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#create-and-deploy-the-trigger-dev-task)

Create and deploy the Trigger.dev task
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#generate-the-database-type-definitions)

Generate the Database type definitions

To allow you to use TypeScript to interact with your table, you need to [generate the type definitions](https://supabase.com/docs/guides/api/rest/generating-types)
 for your Supabase table using the Supabase CLI.

    supabase gen types --lang=typescript --project-id <project-ref> --schema public > database.types.ts
    

Replace `<project-ref>` with your Supabase project reference ID. This can be found in your Supabase project settings under ‘General’.

### 

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#create-the-transcription-task)

Create the transcription task

Create a new task file in your `/trigger` folder. Call it `videoProcessAndUpdate.ts`. This task takes a video from a public video url, extracts the audio using FFmpeg and transcribes the audio using Deepgram. The transcription summary will then be updated back to the original row in the `video_transcriptions` table in Supabase. You will need to install some additional dependencies for this task:

npm

pnpm

yarn

    npm install @deepgram/sdk @supabase/supabase-js fluent-ffmpeg
    

These dependencies will allow you to interact with the Deepgram and Supabase APIs and extract audio from a video using FFmpeg.

When updating your tables from a Trigger.dev task which has been triggered by a database change, be extremely careful to not cause an infinite loop. Ensure you have the correct conditions in place to prevent this.

/trigger/videoProcessAndUpdate.ts

    // Install any missing dependencies below
    import { createClient as createDeepgramClient } from "@deepgram/sdk";
    import { createClient as createSupabaseClient } from "@supabase/supabase-js";
    import { logger, task } from "@trigger.dev/sdk";
    import ffmpeg from "fluent-ffmpeg";
    import fs from "fs";
    import { Readable } from "node:stream";
    import os from "os";
    import path from "path";
    import { Database } from "../../database.types";
    
    // Create a single Supabase client for interacting with your database
    // 'Database' supplies the type definitions to supabase-js
    const supabase = createSupabaseClient<Database>(
      // These details can be found in your Supabase project settings under `API`
      process.env.SUPABASE_PROJECT_URL as string, // e.g. https://abc123.supabase.co - replace 'abc123' with your project ID
      process.env.SUPABASE_SERVICE_ROLE_KEY as string // Your service role secret key
    );
    
    // Your DEEPGRAM_SECRET_KEY can be found in your Deepgram dashboard
    const deepgram = createDeepgramClient(process.env.DEEPGRAM_SECRET_KEY);
    
    export const videoProcessAndUpdate = task({
      id: "video-process-and-update",
      run: async (payload: { videoUrl: string; id: number }) => {
        const { videoUrl, id } = payload;
    
        logger.log(`Processing video at URL: ${videoUrl}`);
    
        // Generate temporary file names
        const tempDirectory = os.tmpdir();
        const outputPath = path.join(tempDirectory, `audio_${Date.now()}.wav`);
    
        const response = await fetch(videoUrl);
    
        // Extract the audio using FFmpeg
        await new Promise((resolve, reject) => {
          if (!response.body) {
            return reject(new Error("Failed to fetch video"));
          }
    
          ffmpeg(Readable.from(response.body))
            .outputOptions([\
              "-vn", // Disable video output\
              "-acodec pcm_s16le", // Use PCM 16-bit little-endian encoding\
              "-ar 44100", // Set audio sample rate to 44.1 kHz\
              "-ac 2", // Set audio channels to stereo\
            ])
            .output(outputPath)
            .on("end", resolve)
            .on("error", reject)
            .run();
        });
    
        logger.log(`Audio extracted from video`, { outputPath });
    
        // Transcribe the audio using Deepgram
        const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
          fs.readFileSync(outputPath),
          {
            model: "nova-2", // Use the Nova 2 model
            smart_format: true, // Automatically format the transcription
            diarize: true, // Enable speaker diarization
          }
        );
    
        if (error) {
          throw error;
        }
    
        const transcription = result.results.channels[0].alternatives[0].paragraphs?.transcript;
    
        logger.log(`Transcription: ${transcription}`);
    
        // Delete the temporary audio file
        fs.unlinkSync(outputPath);
        logger.log(`Temporary audio file deleted`, { outputPath });
    
        const { error: updateError } = await supabase
          .from("video_transcriptions")
          // Update the transcription column
          .update({ transcription: transcription })
          // Find the row by its ID
          .eq("id", id);
    
        if (updateError) {
          throw new Error(`Failed to update transcription: ${updateError.message}`);
        }
    
        return {
          message: `Summary of the audio: ${transcription}`,
          result,
        };
      },
    });
    

This task uses your service role secret key to bypass Row Level Security. This is not recommended for production use as it has unlimited access and bypasses all security checks.

To learn more about how to properly configure Supabase auth for Trigger.dev tasks, please refer to our [Supabase Authentication guide](https://trigger.dev/docs/guides/frameworks/supabase-authentication)
. It demonstrates how to use JWT authentication for user-specific operations or your service role key for admin-level access.

### 

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#adding-the-ffmpeg-build-extension)

Adding the FFmpeg build extension

Before you can deploy the task, you’ll need to add the FFmpeg build extension to your `trigger.config.ts` file.

trigger.config.ts

    // Add this import
    import { ffmpeg } from "@trigger.dev/build/extensions/core";
    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      project: "<project ref>", // Replace with your project ref
      // Your other config settings...
      build: {
        // Add the FFmpeg build extension
        extensions: [ffmpeg()],
      },
    });
    

[Build extensions](https://trigger.dev/docs/config/extensions/overview)
 allow you to hook into the build system and customize the build process or the resulting bundle and container image (in the case of deploying). You can use pre-built extensions or create your own.

You’ll also need to add `@trigger.dev/build` to your `package.json` file under `devDependencies` if you don’t already have it there.

If you are modifying this example and using popular FFmpeg libraries like `fluent-ffmpeg` you’ll also need to add them to [`external`](https://trigger.dev/docs/config/config-file#external)
 in your `trigger.config.ts` file.

### 

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#add-your-deepgram-and-supabase-environment-variables-to-your-trigger-dev-project)

Add your Deepgram and Supabase environment variables to your Trigger.dev project

You will need to add your `DEEPGRAM_SECRET_KEY`, `SUPABASE_PROJECT_URL` and `SUPABASE_SERVICE_ROLE_KEY` as environment variables in your Trigger.dev project. This can be done in the ‘Environment Variables’ page in your project dashboard. ![Adding environment variables](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/environment-variables-page.jpg?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=4f6c67a030b20699bde25c22d68e57af)

### 

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#deploying-your-task)

Deploying your task

Now you can now deploy your task using the following command:

npm

pnpm

yarn

    npx trigger.dev@latest deploy
    

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#create-and-deploy-the-supabase-edge-function)

Create and deploy the Supabase Edge Function
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#add-your-trigger-dev-prod-secret-key-to-the-supabase-dashboard)

Add your Trigger.dev prod secret key to the Supabase dashboard

Go to your Trigger.dev [project dashboard](https://cloud.trigger.dev/)
 and copy the `prod` secret key from the API keys page. ![How to find your prod secret key](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/api-key-prod.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=aed3fb7368091c0ee12cac472e02fc07) Then, in [Supabase](https://supabase.com/dashboard/projects)
, select the project you want to use, navigate to ‘Project settings’ , click ‘Edge Functions’ in the configurations menu, and then click the ‘Add new secret’ button. Add `TRIGGER_SECRET_KEY` with the pasted value of your Trigger.dev `prod` secret key. ![Add secret key in Supabase](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/supabase-keys-1.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=30c4316db62c7820dd5c513c922b2976)

### 

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#create-a-new-edge-function-using-the-supabase-cli)

Create a new Edge Function using the Supabase CLI

Now create an Edge Function using the Supabase CLI. Call it `video-processing-handler`. This function will be triggered by the Database Webhook.

    supabase functions new video-processing-handler
    

functions/video-processing-handler/index.ts

    // Setup type definitions for built-in Supabase Runtime APIs
    import "jsr:@supabase/functions-js/edge-runtime.d.ts";
    import { tasks } from "npm:@trigger.dev/sdk@latest";
    // Import the videoProcessAndUpdate task from the trigger folder
    import type { videoProcessAndUpdate } from "../../../src/trigger/videoProcessAndUpdate.ts";
    //     👆 type only import
    
    // Sets up a Deno server that listens for incoming JSON requests
    Deno.serve(async (req) => {
      const payload = await req.json();
    
      // This payload will contain the video url and id from the new row in the table
      const videoUrl = payload.record.video_url;
      const id = payload.record.id;
    
      // Trigger the videoProcessAndUpdate task with the videoUrl payload
      await tasks.trigger<typeof videoProcessAndUpdate>("video-process-and-update", { videoUrl, id });
      console.log(payload ?? "No name provided");
    
      return new Response("ok");
    });
    

Tasks in the `trigger` folder use Node, so they must stay in there or they will not run, especially if you are using a different runtime like Deno. Also do not add “`npm:`” to imports inside your task files, for the same reason.

### 

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#deploy-the-edge-function)

Deploy the Edge Function

Now deploy your new Edge Function with the following command:

    supabase functions deploy video-processing-handler
    

Follow the CLI instructions, selecting the same project you added your `prod` secret key to, and once complete you should see your new Edge Function deployment in your Supabase Edge Functions dashboard. There will be a link to the dashboard in your terminal output.

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#create-the-database-webhook)

Create the Database Webhook
----------------------------------------------------------------------------------------------------------------------------------------------------

In your Supabase project dashboard, click ‘Project settings’ , then the ‘API’ tab , and copy the `anon` `public` API key from the table . ![How to find your Supabase API keys](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/supabase-api-key.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=569ff35cadfacd0d89408e4be2f336b6) Then, go to ‘Database’ click on ‘Webhooks’ , and then click ‘Create a new hook’ . ![How to create a new webhook](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/supabase-create-webhook-1.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=d9af95ddd3d3f6be3ecd08d20ad4604c) Call the hook `edge-function-hook`. Select the new table you have created: `public` `video_transcriptions`. Choose the `insert` event. ![How to create a new webhook 2](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/supabase-create-webhook-2.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=4a6e4965d3dce81b2f305cc1e265d172) Under ‘Webhook configuration’, select ‘Supabase Edge Functions’ Under ‘Edge Function’, choose `POST` and select the Edge Function you have created: `video-processing-handler`. Under ‘HTTP Headers’, add a new header with the key `Authorization` and the value `Bearer <your-api-key>` (replace `<your-api-key>` with the `anon` `public` API key you copied earlier).

Supabase Edge Functions require a JSON Web Token [JWT](https://supabase.com/docs/guides/auth/jwts)
 in the authorization header. This is to ensure that only authorized users can access your edge functions.

Click ‘Create webhook’. ![How to create a new webhook 3](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/supabase-create-webhook-3.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=9afd89ffa262e871ee3b1864bbb8b95e) Your Database Webhook is now ready to use.

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#triggering-the-entire-workflow)

Triggering the entire workflow
----------------------------------------------------------------------------------------------------------------------------------------------------------

Your `video-processing-handler` Edge Function is now set up to trigger the `videoProcessAndUpdate` task every time a new row is inserted into your `video_transcriptions` table. To do this, go back to your Supabase project dashboard, click on ‘Table Editor’ in the left-hand menu, click on the `video_transcriptions` table , and then click ‘Insert’, ‘Insert Row’ . ![How to insert a new row 1](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/supabase-new-table-3.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=cb14e79904fdd5dc076fc3ea24816621) Add a new item under `video_url`, with a public video url. . You can use the following public video URL for testing: `https://content.trigger.dev/Supabase%20Edge%20Functions%20Quickstart.mp4`. ![How to insert a new row 2](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/supabase-new-table-4.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=d17d016e9c0d2c213839932e56b5d600) Once the new table row has been inserted, check your [cloud.trigger.dev](https://cloud.trigger.dev/)
 project ‘Runs’ list and you should see a processing `videoProcessAndUpdate` task which has been triggered when you added a new row with the video url to your `video_transcriptions` table. ![Supabase successful run](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/supabase-run-result.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=8373b7a03955d029487eee841aa6fdcd) Once the run has completed successfully, go back to your Supabase `video_transcriptions` table, and you should see that in the row containing the original video URL, the transcription has now been added to the `transcription` column. ![Supabase successful table update](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/supabase-table-result.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=146d83c0d05046987d297578ff5f5124) **Congratulations! You have completed the full workflow from Supabase to Trigger.dev and back again.**

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#learn-more-about-supabase-and-trigger-dev)

Learn more about Supabase and Trigger.dev
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#full-walkthrough-guides-from-development-to-deployment)

Full walkthrough guides from development to deployment

Edge function hello world guide
-------------------------------

Learn how to trigger a task from a Supabase edge function when a URL is visited.

Database webhooks guide
-----------------------

Learn how to trigger a task from a Supabase edge function when an event occurs in your database.

Supabase authentication guide
-----------------------------

Learn how to authenticate Supabase tasks using JWTs for Row Level Security (RLS) or service role keys for admin access.

### 

[​](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks#task-examples-with-code-you-can-copy-and-paste)

Task examples with code you can copy and paste

Supabase database operations
----------------------------

Run basic CRUD operations on a table in a Supabase database using Trigger.dev.

Supabase Storage upload
-----------------------

Download a video from a URL and upload it to Supabase Storage using S3.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-basic)
[Supabase authenticationLearn how to authenticate Supabase tasks using JWTs for Row Level Security (RLS) or service role keys for admin access.\
\
Next](https://trigger.dev/docs/guides/frameworks/supabase-authentication)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
