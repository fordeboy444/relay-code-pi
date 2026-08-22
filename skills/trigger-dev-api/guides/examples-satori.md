# Generate OG Images using Satori

> Source: https://trigger.dev/docs/guides/examples/satori

[​](https://trigger.dev/docs/guides/examples/satori#overview)

Overview
-------------------------------------------------------------------------

This example demonstrates how to use Trigger.dev to generate dynamic Open Graph (OG) images using Vercel’s [Satori](https://github.com/vercel/satori)
. The task takes a title and image URL as input and generates a beautiful OG image with text overlay. This can be customized and extended however you like, full list of options can be found [here](https://github.com/vercel/satori)
.

[​](https://trigger.dev/docs/guides/examples/satori#task-code)

Task code
---------------------------------------------------------------------------

trigger/generateOgImage.ts

    import { schemaTask } from "@trigger.dev/sdk";
    import { z } from "zod";
    import satori from "satori";
    import sharp from "sharp";
    import { join } from "path";
    import fs from "fs/promises";
    
    export const generateOgImage = schemaTask({
      id: "generate-og-image",
      schema: z.object({
        width: z.number().optional(),
        height: z.number().optional(),
        title: z.string(),
        imageUrl: z.string().url(),
      }),
      run: async (payload) => {
        // Load font
        const fontResponse = await fetch(
          "https://github.com/googlefonts/roboto/raw/main/src/hinted/Roboto-Regular.ttf"
        ).then((res) => res.arrayBuffer());
    
        // Fetch and convert image to base64
        const imageResponse = await fetch(payload.imageUrl);
        const imageBuffer = await imageResponse.arrayBuffer();
        const imageBase64 = `data:${
          imageResponse.headers.get("content-type") || "image/jpeg"
        };base64,${Buffer.from(imageBuffer).toString("base64")}`;
    
        const markup = (
          <div
            style={{
              width: payload.width ?? 1200,
              height: payload.height ?? 630,
              display: "flex",
              backgroundColor: "#121317",
              position: "relative",
              fontFamily: "Roboto",
            }}
          >
            <img
              src={imageBase64}
              width={payload.width ?? 1200}
              height={payload.height ?? 630}
              style={{
                objectFit: "cover",
              }}
            />
            <h1
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                color: "#fff",
                margin: 0,
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "48px",
                maxWidth: "60%",
                textShadow: "0 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              {payload.title}
            </h1>
          </div>
        );
    
        const svg = await satori(markup, {
          width: payload.width ?? 1200,
          height: payload.height ?? 630,
          fonts: [\
            {\
              name: "Roboto",\
              data: fontResponse,\
              weight: 400,\
              style: "normal",\
            },\
          ],
        });
    
        const fileName = `og-${Date.now()}.jpg`;
        const tempDir = join(process.cwd(), "tmp");
        await fs.mkdir(tempDir, { recursive: true });
        const outputPath = join(tempDir, fileName);
    
        await sharp(Buffer.from(svg))
          .jpeg({
            quality: 90,
            mozjpeg: true,
          })
          .toFile(outputPath);
    
        return {
          filePath: outputPath,
          width: payload.width,
          height: payload.height,
        };
      },
    });
    

[​](https://trigger.dev/docs/guides/examples/satori#image-example)

Image example
-----------------------------------------------------------------------------------

This image was generated using the above task. ![OG Image](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/react-satori-og.jpg?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=f588de73d95f7c3cebb82a4278de3ec5)

[​](https://trigger.dev/docs/guides/examples/satori#testing-your-task)

Testing your task
-------------------------------------------------------------------------------------------

To test this task in the [dashboard](https://cloud.trigger.dev/)
, you can use the following payload:

    {
      "title": "My Awesome OG image",
      "imageUrl": "<your-image-url>",
      "width": 1200, // optional, defaults to 1200
      "height": 630 // optional, defaults to 630
    }
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/examples/resend-email-sequence)
[Browserbase & PuppeteerThis example demonstrates how to scrape the top 3 articles from Hacker News using BrowserBase and Puppeteer, summarize them with ChatGPT and send a nicely formatted email summary to yourself every weekday using Resend.\
\
Next](https://trigger.dev/docs/guides/examples/scrape-hacker-news)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
