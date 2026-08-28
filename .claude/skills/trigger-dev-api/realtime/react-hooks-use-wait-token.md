# useWaitToken

> Source: https://trigger.dev/docs/realtime/react-hooks/use-wait-token

We’ve added a new `useWaitToken` react hook that allows you to complete a wait token from a React component, using a Public Access Token.

backend.ts

    import { wait } from "@trigger.dev/sdk";
    
    // Somewhere in your code, you'll need to create the token and then pass the token ID and the public token to the frontend
    const token = await wait.createToken({
      timeout: "10m",
    });
    
    return {
      tokenId: token.id,
      publicToken: token.publicAccessToken, // An automatically generated public access token that expires in 1 hour
    };
    

Now you can use the `useWaitToken` hook in your frontend code:

frontend.tsx

    import { useWaitToken } from "@trigger.dev/react-hooks";
    
    export function MyComponent({ publicToken, tokenId }: { publicToken: string; tokenId: string }) {
      const { complete } = useWaitToken(tokenId, {
        accessToken: publicToken,
      });
    
      return <button onClick={() => complete({ foo: "bar" })}>Complete</button>;
    }
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/realtime/react-hooks/swr)
[OverviewSubscribe to run progress, stream AI output, and react to task status changes from your backend code or other tasks.\
\
Next](https://trigger.dev/docs/realtime/backend/overview)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
