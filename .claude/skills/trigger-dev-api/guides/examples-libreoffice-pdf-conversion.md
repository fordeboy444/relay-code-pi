# Convert documents to PDF using LibreOffice

> Source: https://trigger.dev/docs/guides/examples/libreoffice-pdf-conversion

[​](https://trigger.dev/docs/guides/examples/libreoffice-pdf-conversion#prerequisites)

Prerequisites
-------------------------------------------------------------------------------------------------------

*   A project with [Trigger.dev initialized](https://trigger.dev/docs/quick-start)
    
*   [LibreOffice](https://www.libreoffice.org/download/download-libreoffice/)
     installed on your machine
*   A [Cloudflare R2](https://developers.cloudflare.com/)
     account and bucket

### 

[​](https://trigger.dev/docs/guides/examples/libreoffice-pdf-conversion#using-our-aptget-build-extension-to-add-the-libreoffice-package)

Using our `aptGet` build extension to add the LibreOffice package

To deploy this task, you’ll need to add LibreOffice to your project configuration, like this:

trigger.config.ts

    import { aptGet } from "@trigger.dev/build/extensions/core";
    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      project: "<project ref>",
      // Your other config settings...
      build: {
        extensions: [\
          aptGet({\
            packages: ["libreoffice"],\
          }),\
        ],
      },
    });
    

[Build extensions](https://trigger.dev/docs/config/extensions/overview)
 allow you to hook into the build system and customize the build process or the resulting bundle and container image (in the case of deploying). You can use pre-built extensions or create your own.

You’ll also need to add `@trigger.dev/build` to your `package.json` file under `devDependencies` if you don’t already have it there.

[​](https://trigger.dev/docs/guides/examples/libreoffice-pdf-conversion#convert-a-document-to-pdf-using-libreoffice-and-upload-to-r2)

Convert a document to PDF using LibreOffice and upload to R2
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This task demonstrates how to use LibreOffice to convert a document (.doc or .docx) to PDF and upload the PDF to an R2 storage bucket.

### 

[​](https://trigger.dev/docs/guides/examples/libreoffice-pdf-conversion#key-features)

Key Features

*   Fetches a document from a given URL
*   Converts the document to PDF
*   Uploads the PDF to R2 storage

### 

[​](https://trigger.dev/docs/guides/examples/libreoffice-pdf-conversion#task-code)

Task code

trigger/libreoffice-pdf-convert.ts

    import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
    import { task } from "@trigger.dev/sdk";
    import libreoffice from "libreoffice-convert";
    import { promisify } from "node:util";
    import path from "path";
    import fs from "fs";
    
    const convert = promisify(libreoffice.convert);
    
    // Initialize S3 client
    const s3Client = new S3Client({
      // How to authenticate to R2: https://developers.cloudflare.com/r2/api/s3/tokens/
      region: "auto",
      endpoint: process.env.R2_ENDPOINT,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID ?? "",
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY ?? "",
      },
    });
    
    export const libreOfficePdfConvert = task({
      id: "libreoffice-pdf-convert",
      run: async (payload: { documentUrl: string }, { ctx }) => {
        // Set LibreOffice path for production environment
        if (ctx.environment.type !== "DEVELOPMENT") {
          process.env.LIBREOFFICE_PATH = "/usr/bin/libreoffice";
        }
    
        try {
          // Create temporary file paths
          const inputPath = path.join(process.cwd(), `input_${Date.now()}.docx`);
          const outputPath = path.join(process.cwd(), `output_${Date.now()}.pdf`);
    
          // Download file from URL
          const response = await fetch(payload.documentUrl);
          const buffer = Buffer.from(await response.arrayBuffer());
          fs.writeFileSync(inputPath, buffer);
    
          const inputFile = fs.readFileSync(inputPath);
          // Convert to PDF using LibreOffice
          const pdfBuffer = await convert(inputFile, ".pdf", undefined);
          fs.writeFileSync(outputPath, pdfBuffer);
    
          // Upload to R2
          const key = `converted-pdfs/output_${Date.now()}.pdf`;
          await s3Client.send(
            new PutObjectCommand({
              Bucket: process.env.R2_BUCKET,
              Key: key,
              Body: fs.readFileSync(outputPath),
            })
          );
    
          // Cleanup temporary files
          fs.unlinkSync(inputPath);
          fs.unlinkSync(outputPath);
    
          return { pdfLocation: key };
        } catch (error) {
          console.error("Error converting PDF:", error);
          throw error;
        }
      },
    });
    

### 

[​](https://trigger.dev/docs/guides/examples/libreoffice-pdf-conversion#testing-your-task)

Testing your task

To test this task, use this payload structure:

    {
      "documentUrl": "<a-document-url>" // Replace <a-document-url> with the URL of the document you want to convert
    }
    

[​](https://trigger.dev/docs/guides/examples/libreoffice-pdf-conversion#local-development)

Local development
---------------------------------------------------------------------------------------------------------------

To test this example task locally, be sure to install any packages from the build extensions you added to your `trigger.config.ts` file to your local machine. In this case, you need to install libreoffice.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/examples/lightpanda)
[OpenAI with retryingThis example will show you how to call OpenAI with retrying using Trigger.dev.\
\
Next](https://trigger.dev/docs/guides/examples/open-ai-with-retrying)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
