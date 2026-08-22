# API keys

> Source: https://trigger.dev/docs/apikeys

### 

[​](https://trigger.dev/docs/apikeys#authentication-and-your-secret-keys)

Authentication and your secret keys

When you [trigger a task](https://trigger.dev/docs/triggering)
 from your backend code, you need to set the `TRIGGER_SECRET_KEY` environment variable. Each environment has its own secret key. You can find the value on the API keys page in the Trigger.dev dashboard: ![How to find your secret key](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/api-keys.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=3bb0b87a8e1a3033a8ff1ba3590f5786)

For preview branches, you need to also set the `TRIGGER_PREVIEW_BRANCH` environment variable as well. You can find the value on the API keys page when you’re on the preview branch.

### 

[​](https://trigger.dev/docs/apikeys#automatically-configuring-the-sdk)

Automatically Configuring the SDK

To automatically configure the SDK with your secret key, you can set the `TRIGGER_SECRET_KEY` environment variable. The SDK will automatically use this value when calling API methods (like `trigger`).

.env

    TRIGGER_SECRET_KEY="tr_dev_…"
    TRIGGER_PREVIEW_BRANCH="my-branch" # Only needed for preview branches
    

You can do the same if you are self-hosting and need to change the default URL by using `TRIGGER_API_URL`.

.env

    TRIGGER_API_URL="https://trigger.example.com"
    TRIGGER_PREVIEW_BRANCH="my-branch" # Only needed for preview branches
    

The default URL is `https://api.trigger.dev`.

### 

[​](https://trigger.dev/docs/apikeys#manually-configuring-the-sdk)

Manually Configuring the SDK

If you prefer to manually configure the SDK, you can call the `configure` method:

    import { configure } from "@trigger.dev/sdk";
    import { myTask } from "./trigger/myTasks";
    
    configure({
      secretKey: "tr_dev_1234", // WARNING: Never actually hardcode your secret key like this
      previewBranch: "my-branch", // Only needed for preview branches
      baseURL: "https://mytrigger.example.com", // Optional
    });
    
    async function triggerTask() {
      await myTask.trigger({ userId: "1234" }); // This will use the secret key and base URL you configured
    }
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/runs)
[OverviewTools and resources for building Trigger.dev projects with AI coding assistants.\
\
Next](https://trigger.dev/docs/building-with-ai)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
