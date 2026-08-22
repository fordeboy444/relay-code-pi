# Custom Pages

- **URL:** https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages
- **Summary:** Custom Pages let Marketplace app developers build tailored in-app experiences for installed customers. You can use them to create onboarding flows, settings screens, dashboards, or any other custom UI that complements your app.

[Skip to main content](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#__docusaurus_skipToContent_fallback)

Version: v3

On this page

Custom Pages let Marketplace app developers build tailored in-app experiences for installed customers. You can use them to create onboarding flows, settings screens, dashboards, or any other custom UI that complements your app.

These pages can be designed with your own frontend stack, tested in real time, and surfaced directly inside HighLevel after installation.

What You Can Do With Custom Pages[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#what-you-can-do-with-custom-pages "Direct link to What You Can Do With Custom Pages")

*   Build custom UI experiences for your Marketplace app.
*   Test your page in a live environment before launch. See the [App Testing Guide](https://marketplace.gohighlevel.com/docs/oauth/AppTestingGuide)
     for more on test environments.
*   Custom Pages are rendered inside HighLevel via an embedded iframe that loads your externally hosted URL.
*   Give customers an easier way to access app-specific functionality.

Getting Started[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#getting-started "Direct link to Getting Started")

To speed up development, you can start from the official Marketplace app template:

*   [Marketplace App Template on GitHub](https://github.com/GoHighLevel/ghl-marketplace-app-template)
    

The template includes:

*   A starter app structure for Marketplace development.
*   OAuth examples to help you handle installation flows.
*   Reference implementation details you can extend for your own app.

Placement Options[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#placement-options "Direct link to Placement Options")

Custom Pages can appear in one of two places after an app is installed:

*   Inside the app details page.
*   In the left navigation menu.

This gives developers more flexibility in how they expose their app experience to end users.

### Placement by Distribution Type[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#placement-by-distribution-type "Direct link to Placement by Distribution Type")

If you choose to surface the page in the left navigation, where it appears depends on the app's distribution type:

*   **Sub-account distribution:** The custom page appears in the installed sub-account's left navigation.
*   **Agency distribution:** The custom page appears in the installed agency's left navigation.
*   **Agency and sub-account distribution:** The custom page appears in both agency and sub-account navigation where the app is installed.

After Installation[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#after-installation "Direct link to After Installation")

Once the app is installed, the custom page becomes visible to the customer in the configured placement. This makes it easier for users to discover and interact with the app without needing to leave HighLevel.

Custom Pages are especially useful when you want to provide:

*   App onboarding
*   Settings and configuration screens
*   Embedded dashboards
*   Interactive workflows

Passing User and Location Context[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#passing-user-and-location-context "Direct link to Passing User and Location Context")

There are two common ways to access context inside a Custom Page:

1.  Pass values through URL query parameters.
2.  Retrieve signed user context from the parent HighLevel app.

For secure user context handling, see [User Context in Marketplace Apps](https://marketplace.gohighlevel.com/docs/other/user-context-marketplace-apps)
.

### Option 1: URL Parameters[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#option-1-url-parameters "Direct link to Option 1: URL Parameters")

While configuring the Custom Page URL, you can include supported HighLevel variables in the query string.

Example:

    https://test.com/test?fname={{user.first_name}}&lname={{user.last_name}}&location_id={{location.id}}&custom_value_example={{custom_values.example_field_name}}

When the user opens the page, HighLevel replaces these placeholders with real values based on the current user and account context.

You can then read those query parameters in your frontend application and use them to personalize the experience.

### Supported URL Variables[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#supported-url-variables "Direct link to Supported URL Variables")

#### User[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#user "Direct link to User")

*   `user.first_name`
*   `user.last_name`
*   `user.name`
*   `user.phone`
*   `user.email`

#### Location[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#location "Direct link to Location")

*   `location.id`
*   `location.name`
*   `location.city`
*   `location.state`
*   `location.country`
*   `location.address`
*   `location.email`
*   `location.phone`
*   `location.postal_code`
*   `location.full_address`
*   `location.website`
*   `location.logo_url`

#### Location Owner[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#location-owner "Direct link to Location Owner")

*   `location_owner.first_name`
*   `location_owner.last_name`
*   `location_owner.email`

#### Custom Values[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#custom-values "Direct link to Custom Values")

*   `custom_values.{CUSTOM_VALUE_NAME}`

### Option 2: Signed User Context[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#option-2-signed-user-context "Direct link to Option 2: Signed User Context")

If your use case requires a more secure way to get authenticated user context, use the signed user context flow described in [User Context in Marketplace Apps](https://marketplace.gohighlevel.com/docs/other/user-context-marketplace-apps)
.

This approach is recommended when your page needs trusted identity data that should be validated on your backend.

Media Permissions[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#media-permissions "Direct link to Media Permissions")

Custom Pages support both camera access and microphone access. This can be useful for experiences such as:

*   Video or audio capture
*   Identity verification flows
*   Voice-enabled tools

Make sure your page is hosted securely and that your application handles browser permission prompts gracefully.

### Hosting Requirements[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#hosting-requirements "Direct link to Hosting Requirements")

*   Serve your Custom Page over **HTTPS**. Camera and microphone access generally require a secure context, and non-HTTPS pages may be blocked by the browser.
*   Ensure the page can be embedded inside HighLevel. Custom Pages are typically rendered in an iframe, so your hosting setup must allow cross-origin embedding.
*   Do not return restrictive iframe headers such as `X-Frame-Options: DENY` or `X-Frame-Options: SAMEORIGIN`, as these can prevent the page from loading inside HighLevel.
*   If you use Content Security Policy, configure `frame-ancestors` to allow HighLevel domains to embed your page.
*   If your page relies on cookies or session-based authentication, verify that those settings work correctly in an embedded cross-site context.

Share your feedback
-------------------

★★★★★

*   [What You Can Do With Custom Pages](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#what-you-can-do-with-custom-pages)
    
*   [Getting Started](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#getting-started)
    
*   [Placement Options](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#placement-options)
    *   [Placement by Distribution Type](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#placement-by-distribution-type)
        
*   [After Installation](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#after-installation)
    
*   [Passing User and Location Context](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#passing-user-and-location-context)
    *   [Option 1: URL Parameters](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#option-1-url-parameters)
        
    *   [Supported URL Variables](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#supported-url-variables)
        
    *   [Option 2: Signed User Context](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#option-2-signed-user-context)
        
*   [Media Permissions](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#media-permissions)
    *   [Hosting Requirements](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomPages#hosting-requirements)
