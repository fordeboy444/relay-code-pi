# 1\. Local Storage and Cookies Management[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js#1-local-storage-and-cookies-management "Direct link to 1. Local Storage and Cookies Management")

- **URL:** https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js
- **Summary:** Wrapper functions​ HighLevel provides functions to render contextual data & some utilities that can help developers customize experience for the user.

[Skip to main content](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js#__docusaurus_skipToContent_fallback)

Version: v3

On this page

Wrapper functions[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js#wrapper-functions "Direct link to Wrapper functions")

HighLevel provides functions to render contextual data & some utilities that can help developers customize experience for the user. These are available via the global `AppUtils` object.

### 1\. Local Storage and Cookies Management[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js#1-local-storage-and-cookies-management "Direct link to 1. Local Storage and Cookies Management")

This feature provides utility methods to interact with localStorage and cookies efficiently.

**Local Storage Wrapper:**

*   Store data with a maximum size of **5000 bytes** per entry.
*   The wrapper automatically prefixes keys with `custom_` to prevent key collisions. **Do not manually prefix your keys with `custom_`.**
*   Stored data is automatically cleaned up when the Vue instance is destroyed.

_Usage:_

    await AppUtils.Storage.setData(key, value); // Store dataconst data = await AppUtils.Storage.getData(key); // Retrieve data. Returns null if not found.

**Cookies Wrapper:**

*   Store data with a maximum size of **5000 bytes** per entry.
*   Set cookies with optional expiration (maximum of 48 hours). If no expiry is provided, it defaults to 48 hours.
*   The wrapper automatically prefixes keys with `custom_` to prevent key collisions. **Do not manually prefix your keys with `custom_`.**

_Usage:_

    // expiryInHours can be a number (e.g., 1, 0.5 for 30 mins)await AppUtils.Storage.setCookie(key, value, expiryInHours);// Default expiry is 48 hoursawait AppUtils.Storage.setCookie(key, value);const cookieValue = await AppUtils.Storage.getCookie(key); // Retrieve cookie value. Returns null if not found.

### 2\. Custom Events[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js#2-custom-events "Direct link to 2. Custom Events")

You can listen to custom application events for specific lifecycle hooks or activities.

**Events:**

*   **routeLoaded**: Emitted when the first route is loaded after application startup.
*   **routeChangeEvent**: Emitted on every route change after the initial route load.

_Usage:_

    window.addEventListener('routeLoaded', callback);window.addEventListener('routeChangeEvent', callback);

### 3\. Routing Methods[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js#3-routing-methods "Direct link to 3. Routing Methods")

Custom scripts can now control routing within the application via exposed methods.

**Methods:**

*   **getCurrentRoute()**: Get the current route info. Returns `fullPath`, `name`, `params`, `path`, and `query`.
*   **navigate(options: INavigationOptions)**: Allows you to navigate to a different route via name or path.
    *   If using `name`, it must be a valid agency or location route name.
    *   If using `path`, it must match an existing route regex.

    interface INavigationOptions {  name?: string;  path?: string;  params?: Record<string, string>;  query?: Record<string, string>;  replace?: boolean;  append?: boolean;}

_Usage:_

    // Navigate to specific route by nametry {  await AppUtils.RouteHelper.navigate({ name: 'integrations-settings-v2' });} catch (error) {  console.error('Navigation failed:', error);}// Navigate to specific pathconst path = '/integration';try {  await AppUtils.RouteHelper.navigate({ path }); } catch (error) {  console.error('Navigation failed:', error);}// Get current route informationconst currentRoute = AppUtils.RouteHelper.getCurrentRoute();console.log(currentRoute); // Output example: { fullPath: "/...", name: "...", params: {...}, path: "/...", query: {...} }

### 4\. Utility Methods[​](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js#4-utility-methods "Direct link to 4. Utility Methods")

A set of utility methods is now available to provide essential contextual data for custom scripts.

**Methods:**

*   **User Info**: `getCurrentUser()` – Retrieves current user's information.
*   **Current Location**: `getCurrentLocation()` – Retrieves data about the user's current location. Returns an empty object `{}` if the user is not in a location context.
*   **Company Info**: `getCompany()` – Retrieves information about the current company.

_Usage:_

    // Get User Infoconst userInfo = await AppUtils.Utilities.getCurrentUser();// Returns: { id, name, firstName, lastName, email, type, role }// Get Location Infoconst currentLocation = await AppUtils.Utilities.getCurrentLocation();// Returns: { id, name, address: { address, city, country } }// OR {} if not in a location// Get Company Infoconst companyInfo = await AppUtils.Utilities.getCompany();// Returns: { id, name }

*   [Wrapper functions](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js#wrapper-functions)
    *   [1\. Local Storage and Cookies Management](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js#1-local-storage-and-cookies-management)
        
    *   [2\. Custom Events](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js#2-custom-events)
        
    *   [3\. Routing Methods](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js#3-routing-methods)
        
    *   [4\. Utility Methods](https://marketplace.gohighlevel.com/docs/marketplace-modules/custom-js#4-utility-methods)
