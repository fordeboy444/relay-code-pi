# GitHub integration

> Source: https://trigger.dev/docs/github-integration

[​](https://trigger.dev/docs/github-integration#how-it-works)

How it works
-----------------------------------------------------------------------------

Once you connect a GitHub repository to your project, you can configure tracking branches for the production and staging environments. Every push to a tracked branch creates a deployment in the corresponding environment. Preview branch deployments are also supported for pull requests. This eliminates the need to manually run the `trigger.dev deploy` command or set up custom CI/CD workflows.

[​](https://trigger.dev/docs/github-integration#setup)

Setup
---------------------------------------------------------------

1

[](https://trigger.dev/docs/github-integration#)

Install our GitHub app

Go to your project’s settings page and click `Install GitHub app`. This will take you to GitHub to authorize the Trigger.dev app for your organization or personal account.

2

[](https://trigger.dev/docs/github-integration#)

Connect your repository

Select a repository to connect to your project.

3

[](https://trigger.dev/docs/github-integration#)

Configure branch tracking

Choose which branches should trigger automatic deployments:

*   **Production**: The branch that deploys to your production environment, e.g., `main`.
*   **Staging**: The branch that deploys to your staging environment.
*   **Preview**: Toggle to enable preview deployments for pull requests

4

[](https://trigger.dev/docs/github-integration#)

Customize build settings (optional)

Configure how your project is built:

*   **Trigger config file**: Path to your `trigger.config.ts` file. By default, we look for it in the root of your repository. The path should be relative to the root of your repository and contain the config file name, e.g., `apps/tasks/trigger.config.ts`.
*   **Install command**: Auto-detected by default, but you can override it if necessary. The command will be run from the root of your repository.
*   **Pre-build command**: Run any commands before building and deploying your project, e.g., `pnpm run prisma:generate`. The command will be run from the root of your repository.

[​](https://trigger.dev/docs/github-integration#branch-tracking)

Branch tracking
-----------------------------------------------------------------------------------

Our GitHub integration uses branch tracking to determine when and where to deploy your code. ![Trigger.dev project git settings](https://mintcdn.com/trigger/rYmvd2BT_CpeAo5i/deployment/git-settings.png?w=2500&fit=max&auto=format&n=rYmvd2BT_CpeAo5i&q=85&s=46c3892badd5efd5dd1ff6da7bae4e0b)

### 

[​](https://trigger.dev/docs/github-integration#production-and-staging-branches)

Production and staging branches

When you connect a repository, the default branch of your repository will be used as the production tracking branch, by default. When you configure a production or staging branch, every push to that branch will trigger a deployment. Our build server will install the project dependencies, build your project, and deploy it to the corresponding environment. If there are multiple consecutive pushes to a tracked branch, the later deployments will be queued until the previous deployment completes.

When you connect a repository, the default branch of your repository will be used as the production tracking branch by default. You can change this in the git settings of your project.

### 

[​](https://trigger.dev/docs/github-integration#pull-requests)

Pull requests

By default, pull requests will be deployed to preview branch environments, enabling you to test changes before merging. When the pull request is merged or closed, the preview branch is automatically archived. The name of the preview branch matches the branch name of the pull request.

Preview branch deployments require the preview environment to be enabled on your project. Learn more about [preview branches](https://trigger.dev/docs/deployment/preview-branches)
.

[​](https://trigger.dev/docs/github-integration#disconnecting-a-repository)

Disconnecting a repository
---------------------------------------------------------------------------------------------------------

You can disconnect a repository at any time from your project git settings. This will stop automatic deployments triggered from GitHub.

[​](https://trigger.dev/docs/github-integration#managing-repository-access)

Managing repository access
---------------------------------------------------------------------------------------------------------

To add or remove repository access for the Trigger.dev GitHub app, follow the link in the `Connect GitHub repository` modal: ![Trigger.dev prompt to connect a GitHub repository](https://mintcdn.com/trigger/rYmvd2BT_CpeAo5i/deployment/connect-repo.png?w=2500&fit=max&auto=format&n=rYmvd2BT_CpeAo5i&q=85&s=ffea2ffa393258159c1c60e2686af341) Alternatively, you can follow these steps on GitHub:

1.  Go to your GitHub account settings
2.  Navigate to **Settings** → **Applications** → **Installed GitHub Apps**
3.  Click **Configure** next to `Trigger.dev App`
4.  Update repository access under `Repository access`

Changes to repository access will be reflected immediately in your Trigger.dev project settings.

[​](https://trigger.dev/docs/github-integration#environment-variables-at-build-time)

Environment variables at build time
---------------------------------------------------------------------------------------------------------------------------

You can expose environment variables during the build and deployment process by prefixing them with `TRIGGER_BUILD_`. In the build server, the `TRIGGER_BUILD_` prefix is stripped from the variable name, i.e., `TRIGGER_BUILD_MY_TOKEN` is exposed as `MY_TOKEN`. Build extensions will also have access to these variables.

Build environment variables only apply to deployments in the environment you set them in.

Learn more about managing [environment variables](https://trigger.dev/docs/deploy-environment-variables)
.

[​](https://trigger.dev/docs/github-integration#using-a-private-npm-registry)

Using a private npm registry
-------------------------------------------------------------------------------------------------------------

If your project uses packages from a private npm registry, you can provide authentication by setting a `TRIGGER_BUILD_NPM_RC` environment variable. The value should be the contents of your `.npmrc` file including any token credentials, encoded to base64.

### 

[​](https://trigger.dev/docs/github-integration#example)

Example

Example `.npmrc` file containing credentials for a private npm registry and a GitHub package registry:

    //registry.npmjs.org/:_authToken=<YOUR_NPM_TOKEN>
    @<YOUR_NAMESPACE>:registry=https://npm.pkg.github.com
    //npm.pkg.github.com/:always-auth=true
    //npm.pkg.github.com/:_authToken=<YOUR_GITHUB_TOKEN>
    

Encode it to base64:

    # Encode your .npmrc file
    cat .npmrc | base64
    

Then, set the `TRIGGER_BUILD_NPM_RC` environment variable in your project settings with the encoded value.

The build server will automatically create a `.npmrc` file in the installation directory based on the content of the `TRIGGER_BUILD_NPM_RC` environment variable. This enables the build server to authenticate to your private npm registry.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/deployment/atomic-deployment)
[Vercel integrationAutomatically deploy your tasks whenever you deploy to Vercel.\
\
Next](https://trigger.dev/docs/vercel-integration)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
