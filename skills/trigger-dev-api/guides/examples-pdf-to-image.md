# Turn a PDF into an image using MuPDF

> Source: https://trigger.dev/docs/guides/examples/pdf-to-image

[​](https://trigger.dev/docs/guides/examples/pdf-to-image#overview)

Overview
-------------------------------------------------------------------------------

This example demonstrates how to use Trigger.dev to turn a PDF into a series of images using MuPDF and upload them to Cloudflare R2.

[​](https://trigger.dev/docs/guides/examples/pdf-to-image#update-your-build-configuration)

Update your build configuration
-----------------------------------------------------------------------------------------------------------------------------

To use this example, add these build settings below to your `trigger.config.ts` file. They ensure that the `mutool` and `curl` packages are installed when you deploy your task. You can learn more about this and see more build settings [here](https://trigger.dev/docs/config/extensions/aptGet)
.

trigger.config.ts

    export default defineConfig({
      project: "<project ref>",
      // Your other config settings...
      build: {
        extensions: [aptGet({ packages: ["mupdf-tools", "curl"] })],
      },
    });
    

[​](https://trigger.dev/docs/guides/examples/pdf-to-image#task-code)

Task code
---------------------------------------------------------------------------------

trigger/pdfToImage.ts

    import { logger, task } from "@trigger.dev/sdk";
    import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
    import { execSync } from "child_process";
    import fs from "fs";
    import path from "path";
    
    // Initialize S3 client
    const s3Client = new S3Client({
      region: "auto",
      endpoint: process.env.S3_ENDPOINT,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID ?? "",
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY ?? "",
      },
    });
    
    export const pdfToImage = task({
      id: "pdf-to-image",
      run: async (payload: { pdfUrl: string; documentId: string }) => {
        logger.log("Converting PDF to images", payload);
    
        const pdfPath = `/tmp/${payload.documentId}.pdf`;
        const outputDir = `/tmp/${payload.documentId}`;
    
        // Download PDF and convert to images using MuPDF
        execSync(`curl -s -o ${pdfPath} ${payload.pdfUrl}`);
        fs.mkdirSync(outputDir, { recursive: true });
        execSync(`mutool convert -o ${outputDir}/page-%d.png ${pdfPath}`);
    
        // Upload images to R2
        const uploadedUrls = [];
        for (const file of fs.readdirSync(outputDir)) {
          const s3Key = `images/${payload.documentId}/${file}`;
          const uploadParams = {
            Bucket: process.env.S3_BUCKET,
            Key: s3Key,
            Body: fs.readFileSync(path.join(outputDir, file)),
            ContentType: "image/png",
          };
    
          logger.log("Uploading to R2", uploadParams);
    
          await s3Client.send(new PutObjectCommand(uploadParams));
          const s3Url = `https://${process.env.S3_BUCKET}.r2.cloudflarestorage.com/${s3Key}`;
          uploadedUrls.push(s3Url);
          logger.log("Image uploaded to R2", { url: s3Url });
        }
    
        // Clean up
        fs.rmSync(outputDir, { recursive: true, force: true });
        fs.unlinkSync(pdfPath);
    
        logger.log("All images uploaded to R2", { urls: uploadedUrls });
    
        return {
          imageUrls: uploadedUrls,
        };
      },
    });
    

[​](https://trigger.dev/docs/guides/examples/pdf-to-image#testing-your-task)

Testing your task
-------------------------------------------------------------------------------------------------

To test this task in the dashboard, you can use the following payload:

    {
      "pdfUrl": "https://pdfobject.com/pdf/sample.pdf",
      "documentId": "unique-document-id"
    }
    

[​](https://trigger.dev/docs/guides/examples/pdf-to-image#local-development)

Local development
-------------------------------------------------------------------------------------------------

To test this example task locally, be sure to install any packages from the build extensions you added to your `trigger.config.ts` file to your local machine. In this case, you need to install .

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/examples/open-ai-with-retrying)
[PuppeteerThese examples demonstrate how to use Puppeteer with Trigger.dev.\
\
Next](https://trigger.dev/docs/guides/examples/puppeteer)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
