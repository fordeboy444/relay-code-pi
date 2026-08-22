# Available Version States[​](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#available-version-states "Direct link to Available Version States")

- **URL:** https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP
- **Summary:** This document explains how app versioning and updates work in the HighLevel Marketplace, using simple language and clear steps.

[Skip to main content](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#__docusaurus_skipToContent_fallback)

Version: v3

On this page

This document explains how app versioning and updates work in the HighLevel Marketplace, using simple language and clear steps. It is meant for developers publishing or updating apps.

1\. What Is App Versioning?[​](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#1-what-is-app-versioning "Direct link to 1. What Is App Versioning?")

App versioning lets you create new versions of your app instead of changing the live app directly.

Each version keeps its own history, status, and review record. This makes updates safer for users and easier for developers to manage.

This replaces the old system where updates overwrote the same app record.

2\. Purpose[​](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#2-purpose "Direct link to 2. Purpose")

Versioning solves several longstanding issues:

*   No more overwriting live production apps.
*   Developers can prepare changes in a draft without impacting users.
*   Agencies/Sub-accounts see exactly what changed before updating.
*   Trust & Safety gains clearer auditability and version review history.
*   Updates become safer, controlled, and easier to test.

3\. Versioning System – How It Works[​](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#3-versioning-system--how-it-works "Direct link to 3. Versioning System – How It Works")

Apps now have multiple explicit versions with lifecycle statuses. Developers work on a new version without modifying the live one.

### Available Version States[​](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#available-version-states "Direct link to Available Version States")

*   **Draft** – Editable working copy. _(Version = `draft`)_
*   **In Review** – Submitted to Marketplace review _(non-private apps only)_.
*   **Live** – Approved and installable.
*   **Deprecated** – Scheduled for removal and later uninstallation.
*   **Disapproved** – Rejected review; behaves like a draft.

info

Drafts can’t be deleted immediately. After you click Delete, it may take some time for the deletion to complete.

### Version Limits[​](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#version-limits "Direct link to Version Limits")

To keep things clean and safe, these limits apply:

*   Only **one** **Draft** or **Disapproved** version at a time
*   Maximum **5 total versions** per app
*   _(In Review + Deprecated + Live) ≤ 5_
*   _(In Review + Disapproved + Draft) = 1_

These rules prevent unfinished or risky versions from piling up.

4\. Creating a New Version (Draft)[​](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#4-creating-a-new-version-draft "Direct link to 4. Creating a New Version (Draft)")

To start a new version:

1.  Open your app and go to the **Versions** tab
2.  On the latest **Live** version, click **Clone as Draft**
3.  A new **Draft** version is created

You cannot create another draft until the current **Draft** or **Disapproved** version is resolved.

info

As of today, if your app already has three versions, you must deprecate one version before you can release a patch update. Once the version is deprecated, you can proceed with publishing the patch.

5\. Publishing an Update[​](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#5-publishing-an-update "Direct link to 5. Publishing an Update")

When your draft is ready, publish it by following these steps.

### Step 1 — Choose a Version Type[​](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#step-1--choose-a-version-type "Direct link to Step 1 — Choose a Version Type")

HighLevel uses Semantic Versioning (`x.y.z`):

*   **Major** – Breaking or incompatible changes
*   **Minor** – New features that don’t break existing behavior
*   **Patch** – Bug fixes only

### Step 2 — Add Release Notes[​](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#step-2--add-release-notes "Direct link to Step 2 — Add Release Notes")

Release notes explain what changed.

**Required:**

*   Agency Release Notes _(mandatory)_

**Optional:**

*   Sub-Account Release Notes _(shown when provided)_

Clear release notes help users decide whether to update.

### Step 3 — Review or Go Live[​](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#step-3--review-or-go-live "Direct link to Step 3 — Review or Go Live")

What happens next depends on your app type:

*   **Public Apps** → Sent for Marketplace review. The update goes live only after approval.
*   **Private Apps** → Go live immediately _(no review)_.

info

**Important:** Private App Install Limits apply at the **app level**, not the version level.

If your app has already reached its install limit (for example, 5 installs on an older version), new versions cannot be installed until the app is reviewed and approved.

See [**Private App Install Limits**](https://marketplace.gohighlevel.com/docs/MarketplacePolicies/PrivateAppInstallLimits)
 for details.

6\. Major vs Minor vs Patch — What Users Experience[​](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#6-major-vs-minor-vs-patch--what-users-experience "Direct link to 6. Major vs Minor vs Patch — What Users Experience")

| Update Type | What It Means | User Experience |
| --- | --- | --- |
| **Major** | Breaking changes | User must confirm before updating; manual update required |
| **Minor** | Backward-compatible features | Normal update flow |
| **Patch** | Bug fixes | Safe update; usually seamless |

info

**Important Module Note:** If you update modules _(except Custom Page)_, publish as a **Major** update.

Modules do not automatically update for existing installs. Users must manually update or reinstall.

7\. What Users See When an Update Is Live[​](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#7-what-users-see-when-an-update-is-live "Direct link to 7. What Users See When an Update Is Live")

When a new version is **Live**:

*   Users see an **Update** button
*   **What’s New?** shows the release notes
*   **Major** updates may show a confirmation screen

This avoids surprise changes and builds trust.

8\. Deprecating Old Versions[​](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#8-deprecating-old-versions "Direct link to 8. Deprecating Old Versions")

You can schedule a **Live** version for removal.

**Rules:**

*   Minimum **3-day notice**
*   On the deprecation date:
    *   The version is removed
    *   All installs using that version are automatically uninstalled

Deprecation prevents outdated or unsafe versions from lingering.

9\. Future Milestones[​](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#9-future-milestones "Direct link to 9. Future Milestones")

*   As of today, if your app already has three versions, you must deprecate one version before you can release a patch update. Once the version is deprecated, you can proceed with publishing the patch. We’re working to make this more flexible, and in the near future you’ll be able to release patch and minor updates without having to deprecate any live versions of your app.
    
*   As of today, changes to a module apply to the app as a whole, not to a specific app version. That means if you edit an existing module and click Save, the update can become visible to end-users immediately—even if you did not publish a new version. When introducing new module functionality (for example, new actions or triggers), package those changes as a Major version release rather than editing live behavior directly. Validate module changes in a private app (or equivalent non-production environment) before applying them to a live app. Treat direct edits in a live app as production-impacting. We are working on to ensure module changes can be scoped to a specific app version, so unpublished work does not affect end-users.
    
*   As of today, pricing changes currently apply only to new installations. Existing installs won’t automatically reflect pricing changes based on version status. We are working to enable pricing changes to apply based on version (not only to new installs), so pricing and versioning behave consistently.
    

Contact Us[​](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#contact-us "Direct link to Contact Us")

If you have any questions or concerns:

*   Email us: `marketplace@gohighlevel.com`
*   Fill out the [**Marketplace Support Form**](https://developers.gohighlevel.com/support)
    

*   [1\. What Is App Versioning?](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#1-what-is-app-versioning)
    
*   [2\. Purpose](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#2-purpose)
    
*   [3\. Versioning System – How It Works](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#3-versioning-system--how-it-works)
    *   [Available Version States](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#available-version-states)
        
    *   [Version Limits](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#version-limits)
        
*   [4\. Creating a New Version (Draft)](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#4-creating-a-new-version-draft)
    
*   [5\. Publishing an Update](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#5-publishing-an-update)
    *   [Step 1 — Choose a Version Type](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#step-1--choose-a-version-type)
        
    *   [Step 2 — Add Release Notes](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#step-2--add-release-notes)
        
    *   [Step 3 — Review or Go Live](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#step-3--review-or-go-live)
        
*   [6\. Major vs Minor vs Patch — What Users Experience](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#6-major-vs-minor-vs-patch--what-users-experience)
    
*   [7\. What Users See When an Update Is Live](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#7-what-users-see-when-an-update-is-live)
    
*   [8\. Deprecating Old Versions](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#8-deprecating-old-versions)
    
*   [9\. Future Milestones](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#9-future-milestones)
    
*   [Contact Us](https://marketplace.gohighlevel.com/docs/oauth/HowToUpdateYourAPP#contact-us)
