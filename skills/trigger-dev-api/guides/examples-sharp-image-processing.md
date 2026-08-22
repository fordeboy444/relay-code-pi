# Process images using Sharp

> Source: https://trigger.dev/docs/guides/examples/sharp-image-processing

[​](https://trigger.dev/docs/guides/examples/sharp-image-processing#overview)

Overview
-----------------------------------------------------------------------------------------

This task processes and watermarks an image using the Sharp library, and then uploads it to R2 storage.

[​](https://trigger.dev/docs/guides/examples/sharp-image-processing#prerequisites)

Prerequisites
---------------------------------------------------------------------------------------------------

*   A project with [Trigger.dev initialized](https://trigger.dev/docs/quick-start)
    
*   The [Sharp](https://sharp.pixelplumbing.com/install)
     library installed on your machine
*   An R2-compatible object storage service, such as [Cloudflare R2](https://developers.cloudflare.com/r2)
    

[​](https://trigger.dev/docs/guides/examples/sharp-image-processing#adding-the-build-configuration)

Adding the build configuration
-------------------------------------------------------------------------------------------------------------------------------------

To use this example, you’ll first need to add these build settings to your `trigger.config.ts` file:

trigger.config.ts

    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      project: "<project ref>",
      // Your other config settings...
      build: {
        // This is required to use the Sharp library
        external: ["sharp"],
      },
    });
    

Any packages that install or build a native binary should be added to external, as native binaries cannot be bundled.

[​](https://trigger.dev/docs/guides/examples/sharp-image-processing#key-features)

Key features
-------------------------------------------------------------------------------------------------

*   Resizes a JPEG image to 800x800 pixels
*   Adds a watermark to the image, positioned in the bottom-right corner, using a PNG image
*   Uploads the processed image to R2 storage

[​](https://trigger.dev/docs/guides/examples/sharp-image-processing#task-code)

Task code
-------------------------------------------------------------------------------------------

trigger/sharp-image-processing.ts

    import { S3Client } from "@aws-sdk/client-s3";
    import { Upload } from "@aws-sdk/lib-storage";
    import { logger, task } from "@trigger.dev/sdk";
    import fs from "fs/promises";
    import os from "os";
    import path from "path";
    import sharp from "sharp";
    
    // Initialize R2 client using your R2 account details
    const r2Client = new S3Client({
      region: "auto",
      endpoint: process.env.R2_ENDPOINT,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID ?? "",
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY ?? "",
      },
    });
    
    export const sharpProcessImage = task({
      id: "sharp-process-image",
      retry: { maxAttempts: 1 },
      run: async (payload: { imageUrl: string; watermarkUrl: string }) => {
        const { imageUrl, watermarkUrl } = payload;
        const outputPath = path.join(os.tmpdir(), `output_${Date.now()}.jpg`);
    
        const [imageResponse, watermarkResponse] = await Promise.all([\
          fetch(imageUrl),\
          fetch(watermarkUrl),\
        ]);
        const imageBuffer = await imageResponse.arrayBuffer();
        const watermarkBuffer = await watermarkResponse.arrayBuffer();
    
        await sharp(Buffer.from(imageBuffer))
          .resize(800, 800) // Resize the image to 800x800px
          .composite([\
            {\
              input: Buffer.from(watermarkBuffer),\
              gravity: "southeast", // Position the watermark in the bottom-right corner\
            },\
          ])
          .jpeg() // Convert to jpeg
          .toBuffer() // Convert to buffer
          .then(async (outputBuffer) => {
            await fs.writeFile(outputPath, outputBuffer); // Write the buffer to file
    
            const r2Key = `processed-images/${path.basename(outputPath)}`;
            const uploadParams = {
              Bucket: process.env.R2_BUCKET,
              Key: r2Key,
              Body: await fs.readFile(outputPath),
            };
    
            const upload = new Upload({
              client: r2Client,
              params: uploadParams,
            });
    
            await upload.done();
            logger.log("Image uploaded to R2 storage.", {
              path: `/${process.env.R2_BUCKET}/${r2Key}`,
            });
    
            await fs.unlink(outputPath); // Clean up the temporary file
            return { r2Key };
          });
      },
    });
    

[​](https://trigger.dev/docs/guides/examples/sharp-image-processing#testing-your-task)

Testing your task
-----------------------------------------------------------------------------------------------------------

To test this task in the dashboard, you can use the following payload:

    {
      "imageUrl": "<an-image-url.jpg>", // Replace with a URL to a JPEG image
      "watermarkUrl": "<an-image-url.png>" // Replace with a URL to a PNG watermark image
    }
    

[​](https://trigger.dev/docs/guides/examples/sharp-image-processing#local-development)

Local development
-----------------------------------------------------------------------------------------------------------

To test this example task locally, be sure to install any packages from the build extensions you added to your `trigger.config.ts` file to your local machine. In this case, you need to install the Sharp image processing library.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/examples/sentry-error-tracking)
[Supabase database operationsThese examples demonstrate how to run basic CRUD operations on a table in a Supabase database using Trigger.dev.\
\
Next](https://trigger.dev/docs/guides/examples/supabase-database-operations)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
