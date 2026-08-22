# Authenticating Supabase tasks: JWTs and service roles

> Source: https://trigger.dev/docs/guides/frameworks/supabase-authentication

There are two ways to authenticate your Supabase client in Trigger.dev tasks:

### 

[​](https://trigger.dev/docs/guides/frameworks/supabase-authentication#1-using-jwt-authentication-recommended-for-user-specific-operations)

1\. Using JWT Authentication (Recommended for User-Specific Operations)

A JWT (JSON Web Token) is a string-formatted data container that typically stores user identity and permissions data. Row Level Security policies are based on the information present in JWTs. Supabase JWT docs can be found [here](https://supabase.com/docs/guides/auth/jwts)
. To use JWTs with Supabase, you’ll need to add the `SUPABASE_JWT_SECRET` environment variable in your project. This secret is used to sign the JWTs. This can be found in your Supabase project settings under `Data API`. This example code shows how to create a JWT token for a user and initialize a Supabase client with that token for authentication, allowing the task to perform database operations as that specific user. You can adapt this code to fit your own use case.

    
    // The rest of your task code
    async run(payload: { user_id: string }) {
        const { user_id } = payload;
    
        // Optional error handling
        const jwtSecret = process.env.SUPABASE_JWT_SECRET;
        if (!jwtSecret) {
          throw new Error(
            "SUPABASE_JWT_SECRET is not defined in environment variables"
          );
        }
    
        // Create a JWT token for the user that expires in 1 hour
        const token = jwt.sign({ sub: user_id }, jwtSecret, { expiresIn: "1h" });
    
        // Initialize the Supabase client with the JWT token
        const supabase = createClient(
          // These details can be found in your Supabase project settings under `Data API`
          process.env.SUPABASE_URL as string,
          process.env.SUPABASE_ANON_KEY as string,
          {
            global: {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          }
        );
    // The rest of your task code
    

Using JWTs to authenticate Supabase operations is more secure than using service role keys because it respects Row Level Security policies, maintains user-specific audit trails, and follows the principle of least privileged access.

### 

[​](https://trigger.dev/docs/guides/frameworks/supabase-authentication#2-using-service-role-key-for-admin-level-access)

2\. Using Service Role Key (For Admin-Level Access)

The service role key has unlimited access and bypasses all security checks. Only use it when you need admin-level privileges, and never expose it client-side.

This example code creates a Supabase client with admin-level privileges using a service role key, bypassing all Row Level Security policies to allow unrestricted database access.

    // Create a single Supabase client for interacting with your database
    // 'Database' supplies the type definitions to supabase-js
    const supabase = createClient<Database>(
      // These details can be found in your Supabase project settings under `API`
      process.env.SUPABASE_PROJECT_URL as string, // e.g. https://abc123.supabase.co - replace 'abc123' with your project ID
      process.env.SUPABASE_SERVICE_ROLE_KEY as string // Your service role secret key
    );
    
    // Your task
    

[​](https://trigger.dev/docs/guides/frameworks/supabase-authentication#learn-more-about-supabase-and-trigger-dev)

Learn more about Supabase and Trigger.dev
--------------------------------------------------------------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/guides/frameworks/supabase-authentication#full-walkthrough-guides-from-development-to-deployment)

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

[​](https://trigger.dev/docs/guides/frameworks/supabase-authentication#task-examples-with-code-you-can-copy-and-paste)

Task examples with code you can copy and paste

Supabase database operations
----------------------------

Run basic CRUD operations on a table in a Supabase database using Trigger.dev.

Supabase Storage upload
-----------------------

Download a video from a URL and upload it to Supabase Storage using S3.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/guides/frameworks/supabase-edge-functions-database-webhooks)
[OverviewGuides for using webhooks with Trigger.dev.\
\
Next](https://trigger.dev/docs/guides/frameworks/webhooks-guides-overview)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
