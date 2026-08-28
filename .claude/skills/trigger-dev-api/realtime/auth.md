# Realtime authentication

> Source: https://trigger.dev/docs/realtime/auth

To use the Realtime API, you need to authenticate your requests with Public Access Tokens or Trigger Tokens. These tokens provide secure, scoped access to your runs and can be used in both frontend and backend applications.

[​](https://trigger.dev/docs/realtime/auth#token-types)

Token Types
----------------------------------------------------------------------

There are two types of tokens you can use with the Realtime API:

*   **[Public Access Tokens](https://trigger.dev/docs/realtime/auth#public-access-tokens-for-subscribing-to-runs)
    ** - Used to read and subscribe to run data. Can be used in both the frontend and backend.
*   **[Trigger Tokens](https://trigger.dev/docs/realtime/auth#trigger-tokens-for-frontend-triggering-only)
    ** - Used to trigger tasks from your frontend. These are more secure, single-use tokens that can only be used in the frontend.

[​](https://trigger.dev/docs/realtime/auth#public-access-tokens-for-subscribing-to-runs)

Public Access Tokens (for subscribing to runs)
------------------------------------------------------------------------------------------------------------------------------------------

Use Public Access Tokens to subscribe to runs and receive real-time updates in your frontend or backend.

### 

[​](https://trigger.dev/docs/realtime/auth#creating-public-access-tokens)

Creating Public Access Tokens

You can create a Public Access Token using the `auth.createPublicToken` function in your **backend** code:

    // Somewhere in your backend code
    import { auth } from "@trigger.dev/sdk";
    
    const publicToken = await auth.createPublicToken(); // 👈 this public access token has no permissions, so is pretty useless!
    

### 

[​](https://trigger.dev/docs/realtime/auth#scopes)

Scopes

By default a Public Access Token has no permissions. You must specify the scopes you need when creating a Public Access Token:

    import { auth } from "@trigger.dev/sdk";
    
    const publicToken = await auth.createPublicToken({
      scopes: {
        read: {
          runs: true, // ❌ this token can read all runs, possibly useful for debugging/testing
        },
      },
    });
    

This will allow the token to read all runs, which is probably not what you want. You can specify only certain runs by passing an array of run IDs:

    import { auth } from "@trigger.dev/sdk";
    
    const publicToken = await auth.createPublicToken({
      scopes: {
        read: {
          runs: ["run_1234", "run_5678"], // ✅ this token can read only these runs
        },
      },
    });
    

You can scope the token to only read certain tasks:

    import { auth } from "@trigger.dev/sdk";
    
    const publicToken = await auth.createPublicToken({
      scopes: {
        read: {
          tasks: ["my-task-1", "my-task-2"], // 👈 this token can read all runs of these tasks
        },
      },
    });
    

Or tags:

    import { auth } from "@trigger.dev/sdk";
    
    const publicToken = await auth.createPublicToken({
      scopes: {
        read: {
          tags: ["my-tag-1", "my-tag-2"], // 👈 this token can read all runs with these tags
        },
      },
    });
    

Or a specific batch of runs:

    import { auth } from "@trigger.dev/sdk";
    
    const publicToken = await auth.createPublicToken({
      scopes: {
        read: {
          batch: "batch_1234", // 👈 this token can read all runs in this batch
        },
      },
    });
    

You can also combine scopes. For example, to read runs with specific tags and for specific tasks:

    import { auth } from "@trigger.dev/sdk";
    
    const publicToken = await auth.createPublicToken({
      scopes: {
        read: {
          tasks: ["my-task-1", "my-task-2"],
          tags: ["my-tag-1", "my-tag-2"],
        },
      },
    });
    

### 

[​](https://trigger.dev/docs/realtime/auth#expiration)

Expiration

By default, Public Access Token’s expire after 15 minutes. You can specify a different expiration time when creating a Public Access Token:

    import { auth } from "@trigger.dev/sdk";
    
    const publicToken = await auth.createPublicToken({
      expirationTime: "1hr",
    });
    

*   If `expirationTime` is a string, it will be treated as a time span
*   If `expirationTime` is a number, it will be treated as a Unix timestamp
*   If `expirationTime` is a `Date`, it will be treated as a date

The format used for a time span is the same as the [jose package](https://github.com/panva/jose)
, which is a number followed by a unit. Valid units are: “sec”, “secs”, “second”, “seconds”, “s”, “minute”, “minutes”, “min”, “mins”, “m”, “hour”, “hours”, “hr”, “hrs”, “h”, “day”, “days”, “d”, “week”, “weeks”, “w”, “year”, “years”, “yr”, “yrs”, and “y”. It is not possible to specify months. 365.25 days is used as an alias for a year. If the string is suffixed with “ago”, or prefixed with a ”-”, the resulting time span gets subtracted from the current unix timestamp. A “from now” suffix can also be used for readability when adding to the current unix timestamp.

### 

[​](https://trigger.dev/docs/realtime/auth#auto-generated-tokens)

Auto-generated tokens

When you [trigger tasks](https://trigger.dev/docs/triggering)
 from your backend, the `handle` received includes a `publicAccessToken` field. This token can be used to authenticate real-time requests in your frontend application. By default, auto-generated tokens expire after 15 minutes and have a read scope for the specific run(s) that were triggered. You can customize the expiration by passing a `publicTokenOptions` object to the trigger function. See our [triggering documentation](https://trigger.dev/docs/triggering)
 for detailed examples of how to trigger tasks and get auto-generated tokens.

**Where should I create tokens?** The standard pattern is to create tokens in your backend code (API route, server action) after triggering a task, then pass the token to your frontend. The `handle.publicAccessToken` returned by `tasks.trigger()` already does this for you. You rarely need to create tokens inside a task itself.

### 

[​](https://trigger.dev/docs/realtime/auth#subscribing-to-runs-with-public-access-tokens)

Subscribing to runs with Public Access Tokens

Once you have a Public Access Token, you can use it to authenticate requests to the Realtime API in both backend and frontend applications. **Backend usage:** See our [backend documentation](https://trigger.dev/docs/realtime/backend)
 for examples of what you can do with Realtime in your backend once you have authenticated with a token. **Frontend usage:** See our [React hooks documentation](https://trigger.dev/docs/realtime/react-hooks)
 for examples of using tokens with frontend components.

[​](https://trigger.dev/docs/realtime/auth#trigger-tokens-for-frontend-triggering-only)

Trigger Tokens (for frontend triggering only)
----------------------------------------------------------------------------------------------------------------------------------------

For triggering tasks from your frontend, you need special “trigger” tokens. These tokens can only be used once to trigger a task and are more secure than regular Public Access Tokens.

### 

[​](https://trigger.dev/docs/realtime/auth#creating-trigger-tokens)

Creating Trigger Tokens

    import { auth } from "@trigger.dev/sdk";
    
    // Somewhere in your backend code
    const triggerToken = await auth.createTriggerPublicToken("my-task");
    

### 

[​](https://trigger.dev/docs/realtime/auth#multiple-tasks)

Multiple tasks

You can pass multiple tasks to create a token that can trigger multiple tasks:

    import { auth } from "@trigger.dev/sdk";
    
    // Somewhere in your backend code
    const triggerToken = await auth.createTriggerPublicToken(["my-task-1", "my-task-2"]);
    

### 

[​](https://trigger.dev/docs/realtime/auth#multiple-use)

Multiple use

You can also create tokens that can be used multiple times:

    import { auth } from "@trigger.dev/sdk";
    
    // Somewhere in your backend code
    const triggerToken = await auth.createTriggerPublicToken("my-task", {
      multipleUse: true, // ❌ Use this with caution!
    });
    

### 

[​](https://trigger.dev/docs/realtime/auth#expiration-2)

Expiration

These tokens also expire, with the default expiration time being 15 minutes. You can specify a custom expiration time:

    import { auth } from "@trigger.dev/sdk";
    
    // Somewhere in your backend code
    const triggerToken = await auth.createTriggerPublicToken("my-task", {
      expirationTime: "24hr",
    });
    

### 

[​](https://trigger.dev/docs/realtime/auth#triggering-tasks-from-the-frontend-with-trigger-tokens)

Triggering tasks from the frontend with Trigger Tokens

Check out our [React hooks documentation](https://trigger.dev/docs/realtime/react-hooks)
 for examples of how to use Trigger Tokens in your frontend applications.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/realtime/run-object)
[OverviewSubscribe to background task progress, stream AI responses, and trigger tasks from React components using @trigger.dev/react-hooks.\
\
Next](https://trigger.dev/docs/realtime/react-hooks/overview)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
