# Vue 3 Store Events Migration Guide

- **URL:** https://marketplace.gohighlevel.com/docs/marketplace-modules/vue3-store-events
- **Summary:** As part of our upcoming Vue 3 migration, we've introduced a new and safer way for Marketplace apps to listen for store changes. Direct access to the Vue instance (vue, $store, $router) will no longer be available in Vue 3.

[Skip to main content](https://marketplace.gohighlevel.com/docs/marketplace-modules/vue3-store-events#__docusaurus_skipToContent_fallback)

Version: v3

On this page

As part of our upcoming Vue 3 migration, we've introduced a new and safer way for Marketplace apps to listen for store changes. Direct access to the Vue instance (`__vue__`, `$store`, `$router`) will no longer be available in Vue 3.

To ensure your apps continue to function seamlessly, please migrate to the new **StoreEvents** API for store subscriptions.

✅ How to Register for Store Updates[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/vue3-store-events#-how-to-register-for-store-updates "Direct link to ✅ How to Register for Store Updates")

Use `window.AppUtils.StoreEvents.register()` to subscribe to the store modules your app depends on.

### Example:[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/vue3-store-events#example "Direct link to Example:")

    // Register for store updatesconst subscriptionId = window.AppUtils.StoreEvents.register(  ["auth", "user"], // list of store modules  ({ module, state, mutation }) => {    console.log("Update from:", module, state, mutation);  });// Unregister when not neededwindow.AppUtils.StoreEvents.unregister(subscriptionId);

### Important Notes:[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/vue3-store-events#important-notes "Direct link to Important Notes:")

*   Each app subscribes only to the modules it needs.
*   On every mutation, your callback will be triggered with `{ module, state[module], mutation }`.
*   Apps should unregister subscriptions when no longer needed to avoid memory leaks.

🔄 Route Change Events[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/vue3-store-events#-route-change-events "Direct link to 🔄 Route Change Events")

For route navigation, please use the `routeChangeEvent` provided in **AppUtils** instead of `router.beforeEach`.

### Example:[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/vue3-store-events#example-1 "Direct link to Example:")

    document.addEventListener("routeChangeEvent", (e) => {  console.log("Route changed:", e.detail);});

📁 Available Store Modules[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/vue3-store-events#-available-store-modules "Direct link to 📁 Available Store Modules")

You can subscribe to any of the following modules:

*   `user`
*   `imagePreview`
*   `locations`
*   `numbers`
*   `workflows`
*   `agencyTwilio`
*   `twilioAccount`
*   `phoneCall`
*   `funnel`
*   `oauth2`
*   `affiliate`
*   `defaultEmailService`
*   `membership`
*   `locationCustomFields`
*   `customValues`
*   `manualCallStatus`
*   `iframe`
*   `products`
*   `stripeConnect`
*   `integrations`
*   `sidebarv2`
*   `customObjectsStore`
*   `launchpad`
*   `phoneIntegration`
*   `locationNumbers`
*   `locationSetting`
*   `conversationAi`
*   `aiAgents`
*   `scoreProfiles`
*   `affiliateManager`
*   `freshchat`
*   `customPages`
*   `adPublishing`
*   `regulatoryBundle`
*   `customMenuLinks`
*   `locationsMapSearch`
*   `marketplace`

📺 Additional Resources[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/vue3-store-events#-additional-resources "Direct link to 📺 Additional Resources")

For a detailed walkthrough of the migration process, check out this video tutorial:

👉 **[Vue 3 Store Events Migration Video Guide](https://www.loom.com/share/1252d972bfee4ea18db06be3321cd4b2?sid=24b84c0a-8d75-47e9-81df-9aff1b5d4909)
**

⚠️ Action Required[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/vue3-store-events#%EF%B8%8F-action-required "Direct link to ⚠️ Action Required")

1.  **Update your apps** to use `StoreEvents.register` and `routeChangeEvent`
2.  **Test against** the beta-vue environment
3.  **Share any issues** or feedback with us before the final rollout

Thanks for your cooperation in ensuring a smooth migration to Vue 3! 🚀

*   [✅ How to Register for Store Updates](https://marketplace.gohighlevel.com/docs/marketplace-modules/vue3-store-events#-how-to-register-for-store-updates)
    *   [Example:](https://marketplace.gohighlevel.com/docs/marketplace-modules/vue3-store-events#example)
        
    *   [Important Notes:](https://marketplace.gohighlevel.com/docs/marketplace-modules/vue3-store-events#important-notes)
        
*   [🔄 Route Change Events](https://marketplace.gohighlevel.com/docs/marketplace-modules/vue3-store-events#-route-change-events)
    *   [Example:](https://marketplace.gohighlevel.com/docs/marketplace-modules/vue3-store-events#example-1)
        
*   [📁 Available Store Modules](https://marketplace.gohighlevel.com/docs/marketplace-modules/vue3-store-events#-available-store-modules)
    
*   [📺 Additional Resources](https://marketplace.gohighlevel.com/docs/marketplace-modules/vue3-store-events#-additional-resources)
    
*   [⚠️ Action Required](https://marketplace.gohighlevel.com/docs/marketplace-modules/vue3-store-events#%EF%B8%8F-action-required)
