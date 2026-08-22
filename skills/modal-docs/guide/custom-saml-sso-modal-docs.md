# Custom SAML SSO | Modal Docs

- **URL:** https://modal.com/docs/guide/saml-sso
- **Summary:** Configure custom SAML Single Sign-On for your Modal Workspace with any identity provider.

Copy page

Custom SAML SSO
===============

If you use an identity provider (IdP) other than Okta, you can configure custom SAML SSO for your Modal Workspace.

For Okta-specific setup, see our [Okta SSO documentation](https://modal.com/docs/guide/okta-sso)
.

Prerequisites 

*   A Workspace that’s on an [Enterprise](https://modal.com/pricing)
     plan
*   Admin access to the Workspace you want to configure with SSO
*   Admin privileges for your identity provider

Supported features 

*   Identity Provider (IdP) initiated SSO
*   Service Provider (SP) initiated SSO
*   Just-In-Time account provisioning

Configuration 

### Modal SAML settings 

Configure your IdP with the following settings:

| Setting | Value |
| --- | --- |
| Entity ID | `https://www.modal.com` |
| ACS URL | `https://modal.com/api/okta/saml/sso/<workspace>` |

Replace `<workspace>` with your Modal Workspace name.

### Required SAML attributes 

Your IdP must send the following SAML attributes:

| Attribute | Description |
| --- | --- |
| email | User’s email address |
| firstName | User’s first name |
| lastName | User’s last name |

### Configuration steps 

#### Step 1: Configure your IdP 

1.  Create a new SAML application in your identity provider
2.  Set the Entity ID to `https://www.modal.com`
3.  Set the ACS URL to `https://modal.com/api/okta/saml/sso/<workspace>` (replace `<workspace>` with your Workspace name)
4.  Configure the required SAML attributes (email, firstName, lastName)
5.  Ensure your IdP signs SAML assertions

#### Step 2: Link your Workspace to your IdP 

1.  Obtain the SAML Metadata URL from your IdP
2.  Sign in to [https://modal.com](https://modal.com/)
     and visit your [Workspace Management](https://modal.com/settings/workspace-management/identity-and-provisioning)
     page’s `Identity and Provisioning` tab
3.  Paste the Metadata URL in the input and click “Save Changes”

#### Step 3: Test the integration 

1.  Assign users in your IdP
2.  Test IdP-initiated SSO by clicking the Modal application in your IdP dashboard
3.  Test SP-initiated SSO by visiting the login URL below

#### Step 4: Read this before you enable “Require SSO” 

Enabling “Require SSO” will force all users to sign in via SSO. Ensure that you have admin access to your Modal Workspace through your identity provider before enabling.

Login URL 

This URL can be used so that users can sign-in to the correct workspace from your IdP.

`https://modal.com/login/sso?workspace=<workspace>` (replace `<workspace>` with your workspace name)

Troubleshooting 

### Microsoft Entra SAML 

Make sure the SAML attributes are mapped correctly. For example, `email` should be lowercase and the SAML attribute should not have a namespace. Read more about Microsoft Entra SAML attributes [here](https://learn.microsoft.com/en-us/entra/identity-platform/saml-claims-customization)
.

[Custom SAML SSO](https://modal.com/docs/guide/saml-sso#custom-saml-sso)
[Prerequisites](https://modal.com/docs/guide/saml-sso#prerequisites)
[Supported features](https://modal.com/docs/guide/saml-sso#supported-features)
[Configuration](https://modal.com/docs/guide/saml-sso#configuration)
[Modal SAML settings](https://modal.com/docs/guide/saml-sso#modal-saml-settings)
[Required SAML attributes](https://modal.com/docs/guide/saml-sso#required-saml-attributes)
[Configuration steps](https://modal.com/docs/guide/saml-sso#configuration-steps)
[Step 1: Configure your IdP](https://modal.com/docs/guide/saml-sso#step-1-configure-your-idp)
[Step 2: Link your Workspace to your IdP](https://modal.com/docs/guide/saml-sso#step-2-link-your-workspace-to-your-idp)
[Step 3: Test the integration](https://modal.com/docs/guide/saml-sso#step-3-test-the-integration)
[Step 4: Read this before you enable “Require SSO”](https://modal.com/docs/guide/saml-sso#step-4-read-this-before-you-enable-require-sso)
[Login URL](https://modal.com/docs/guide/saml-sso#login-url)
[Troubleshooting](https://modal.com/docs/guide/saml-sso#troubleshooting)
[Microsoft Entra SAML](https://modal.com/docs/guide/saml-sso#microsoft-entra-saml)
