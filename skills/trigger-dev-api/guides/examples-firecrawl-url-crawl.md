# Crawl a URL using Firecrawl

> Source: https://trigger.dev/docs/guides/examples/firecrawl-url-crawl

[​](https://trigger.dev/docs/guides/examples/firecrawl-url-crawl#overview)

Overview
--------------------------------------------------------------------------------------

Firecrawl is a tool for crawling websites and extracting clean markdown that’s structured in an LLM-ready format. Here are two examples of how to use Firecrawl with Trigger.dev:

[​](https://trigger.dev/docs/guides/examples/firecrawl-url-crawl#prerequisites)

Prerequisites
------------------------------------------------------------------------------------------------

*   A project with [Trigger.dev initialized](https://trigger.dev/docs/quick-start)
    
*   A [Firecrawl](https://firecrawl.dev/)
     account

[​](https://trigger.dev/docs/guides/examples/firecrawl-url-crawl#example-1-crawl-an-entire-website-with-firecrawl)

Example 1: crawl an entire website with Firecrawl
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

This task crawls a website and returns the `crawlResult` object. You can set the `limit` parameter to control the number of URLs that are crawled.

trigger/firecrawl-url-crawl.ts

    import Firecrawl from "@mendable/firecrawl-js";
    import { task } from "@trigger.dev/sdk";
    
    // Initialize the Firecrawl client with your API key
    const firecrawlClient = new Firecrawl({
      apiKey: process.env.FIRECRAWL_API_KEY, // Get this from your Firecrawl dashboard
    });
    
    export const firecrawlCrawl = task({
      id: "firecrawl-crawl",
      run: async (payload: { url: string }) => {
        const { url } = payload;
    
        // Crawl: scrapes all the URLs of a web page and return content in LLM-ready format
        const crawlResult = await firecrawlClient.crawl(url, {
          limit: 100, // Limit the number of URLs to crawl
          scrapeOptions: {
            formats: ["markdown", "html"],
          },
        });
    
        if (crawlResult.status === "failed") {
          throw new Error(`Failed to crawl: ${url}`);
        }
    
        return {
          data: crawlResult,
        };
      },
    });
    

### 

[​](https://trigger.dev/docs/guides/examples/firecrawl-url-crawl#testing-your-task)

Testing your task

You can test your task by triggering it from the Trigger.dev dashboard.

    "url": "<url-to-crawl>" // Replace with the URL you want to crawl
    

[​](https://trigger.dev/docs/guides/examples/firecrawl-url-crawl#example-2-scrape-a-single-url-with-firecrawl)

Example 2: scrape a single URL with Firecrawl
---------------------------------------------------------------------------------------------------------------------------------------------------------------

This task scrapes a single URL and returns the `scrapeResult` object.

trigger/firecrawl-url-scrape.ts

    import Firecrawl from "@mendable/firecrawl-js";
    import { task } from "@trigger.dev/sdk";
    
    // Initialize the Firecrawl client with your API key
    const firecrawlClient = new Firecrawl({
      apiKey: process.env.FIRECRAWL_API_KEY, // Get this from your Firecrawl dashboard
    });
    
    export const firecrawlScrape = task({
      id: "firecrawl-scrape",
      run: async (payload: { url: string }) => {
        const { url } = payload;
    
        // Scrape: scrapes a URL and get its content in LLM-ready format (markdown, structured data via LLM Extract, screenshot, html)
        const scrapeResult = await firecrawlClient.scrape(url, {
          formats: ["markdown", "html"],
        });
    
        return {
          data: scrapeResult,
        };
      },
    });
    

### 

[​](https://trigger.dev/docs/guides/examples/firecrawl-url-crawl#testing-your-task-2)

Testing your task

You can test your task by triggering it from the Trigger.dev dashboard.

    "url": "<url-to-scrape>" // Replace with the URL you want to scrape
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/examples/ffmpeg-video-processing)
[LightpandaThese examples demonstrate how to use Lightpanda with Trigger.dev.\
\
Next](https://trigger.dev/docs/guides/examples/lightpanda)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
