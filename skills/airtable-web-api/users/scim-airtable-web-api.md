# SCIM - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/scim-overview
- **Summary:** Retrieve, add, and modify users and groups.

Overview

SCIM
====

Retrieve, add, and modify users and groups.

We support a subset of the specification for [System for Cross-domain Identity Management](https://datatracker.ietf.org/wg/scim/about/)
, or SCIM. We support a [select list of user attributes](https://airtable.com/developers/web/api/scim-overview#scim-user-objects)
.

**Note:** SCIM user management is only available for the [Business, Enterprise, and Enterprise Scale plans](https://airtable.com/developers/web/api/billing-plans#current)
, while SCIM group management is only available for the [Enterprise and Enterprise Scale plans](https://airtable.com/developers/web/api/billing-plans#current)
. SSO is a prerequisite for creating and updating users, since we don't allow setting passwords with SCIM. Only [managed users](https://airtable.com/developers/web/api/org-management-glossary#managed-user)
 can be retrieved and managed using the SCIM API.

### SCIM User Objects

| Airtable Field | SCIM Attribute | Required |
| --- | --- | --- |
| `id`, `userId` | `id` | False |
| `email` | `userName` | True |
| `firstName` | `givenName` | True |
| `lastName` | `familyName` | True |
| `state`  <br>`"provisioned" \| "deactivated"` | `active`  <br>`boolean` | True |

##### Optional user metadata

These attributes are stored and saved for reporting purposes only. We store them when they're sent via SCIM endpoints, and we return them as part of user CSV downloads from the Enterprise Admin Panel.

| Airtable Field | SCIM Attribute | Required |
| --- | --- | --- |
| `External ID` | `externalId`  <br><br>ID in the identity provider's system | False |
| `Title` | `title` | False |

[Enterprise user schema extension](https://datatracker.ietf.org/doc/html/rfc7643#section-4.3)
 fields, which are nested inside an object property with the key:  
`urn:ietf:params:scim:schemas:extension:enterprise:2.0:User`  

| Airtable Field | SCIM Attribute | Required |
| --- | --- | --- |
| `Cost center` | `costCenter` | False |
| `Department` | `department` | False |
| `Division` | `division` | False |
| `Organization` | `organization` | False |
| `Manager display name` | `manager.displayName` | False |
| `Manager` | `manager.value` | False |

##### Airtable SSO extension

Airtable defines an additional optional extension for routing user provisioning through a particular SSO identity provider when an enterprise has multiple identity providers configured. The fields are nested inside an object property with the key:  
`urn:airtable:params:scim:schemas:extension:sso:2.0:User`  

| Airtable Field | SCIM Attribute | Required |
| --- | --- | --- |
| `Email domain (for SSO)` | `emailDomain` | False |

Use this extension when the user's primary email domain's identity provider does not have an `emailAttribute` configured but the intended identity provider does. The `emailDomain` value must be a verified domain on the enterprise, and that domain must have a configured identity provider with `emailAttribute` set. When the extension is omitted, Airtable continues to resolve the identity provider from the user's primary email domain.

**When NOT to send the extension:** The extension is only meaningful when the targeted identity provider has `emailAttribute` configured — if it does not, the request will fail with a 400. SCIM clients provisioning users whose primary email is on an unverified or external domain (off-domain provisioning) should not send the extension unless the targeted identity provider has `emailAttribute` set; in all other cases, omit the extension and let Airtable resolve the identity provider from the primary email domain.

### SCIM Group Objects

| Airtable Field | SCIM Attribute | Required |
| --- | --- | --- |
| `id`, `groupId` | `id` | True |
| `name` | `displayName` | True |
| `members[].userId` | `members[].value` | True |

!!
