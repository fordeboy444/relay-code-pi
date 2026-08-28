# Send a sequence of emails using Resend

> Source: https://trigger.dev/docs/guides/examples/resend-email-sequence

[​](https://trigger.dev/docs/guides/examples/resend-email-sequence#overview)

Overview
----------------------------------------------------------------------------------------

Each email is wrapped in retry.onThrow. This will retry the block of code if an error is thrown. This is useful when you don’t want to retry the whole task, but just a part of it. The entire task will use the default retrying, so can also retry. Additionally this task uses wait.for to wait for a certain amount of time before sending the next email. During the waiting time, the task will be paused and will not consume any resources.

[​](https://trigger.dev/docs/guides/examples/resend-email-sequence#task-code)

Task code
------------------------------------------------------------------------------------------

trigger/email-sequence.ts

    import { Resend } from "resend";
    
    const resend = new Resend(process.env.RESEND_ASP_KEY);
    
    export const emailSequence = task({
      id: "email-sequence",
      run: async (payload: { userId: string; email: string; name: string }) => {
        console.log(`Start email sequence for user ${payload.userId}`, payload);
    
        // Send the first email immediately
        const firstEmailResult = await retry.onThrow(
          async ({ attempt }) => {
            const { data, error } = await resend.emails.send({
              from: "hello@trigger.dev",
              to: payload.email,
              subject: "Welcome to Trigger.dev",
              html: `<p>Hello ${payload.name},</p><p>Welcome to Trigger.dev</p>`,
            });
    
            if (error) {
              // Throwing an error will trigger a retry of this block
              throw error;
            }
    
            return data;
          },
          { maxAttempts: 3 }
        );
    
        // Then wait 3 days
        await wait.for({ days: 3 });
    
        // Send the second email
        const secondEmailResult = await retry.onThrow(
          async ({ attempt }) => {
            const { data, error } = await resend.emails.send({
              from: "hello@trigger.dev",
              to: payload.email,
              subject: "Some tips for you",
              html: `<p>Hello ${payload.name},</p><p>Here are some tips for you…</p>`,
            });
    
            if (error) {
              // Throwing an error will trigger a retry of this block
              throw error;
            }
    
            return data;
          },
          { maxAttempts: 3 }
        );
    
        //etc...
      },
    });
    

[​](https://trigger.dev/docs/guides/examples/resend-email-sequence#testing-your-task)

Testing your task
----------------------------------------------------------------------------------------------------------

To test this task in the dashboard, you can use the following payload:

    {
      "userId": "123",
      "email": "<your-test-email>", // Replace with your test email
      "name": "Alice Testington"
    }
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/examples/replicate-image-generation)
[Satori OG ImagesLearn how to generate dynamic Open Graph images using Satori and Trigger.dev.\
\
Next](https://trigger.dev/docs/guides/examples/satori)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
