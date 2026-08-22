# SCIM user schema - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/model/scim-user-schema
- **Summary:** *   List users *   Create user *   Get user *   Patch user *   Put user SCIM User objects with optional user metadata.

Object

SCIM user schema
================

Endpoints that reference this object:

*   [List users](https://airtable.com/developers/web/api/list-scim-users)
    
*   [Create user](https://airtable.com/developers/web/api/create-scim-user)
    
*   [Get user](https://airtable.com/developers/web/api/get-scim-user)
    
*   [Patch user](https://airtable.com/developers/web/api/patch-scim-user)
    
*   [Put user](https://airtable.com/developers/web/api/put-scim-user)
    

  
`object`

[SCIM User](https://datatracker.ietf.org/doc/html/rfc7643#section-4.1)
 objects with optional user metadata.

See [SCIM Field Types](https://airtable.com/developers/web/api/scim-overview#scim-user-objects)
 for more information about optional user metadata.

`id`

`optional<``string``>`

Airtable's unique user ID for this user.

`urn:airtable:params:scim:schemas:extension:sso:2.0:User`

`optional<``null | the below object``>`

Airtable-specific extension for routing provisioning through a particular SSO identity provider when the enterprise has multiple IdPs configured. See [SCIM Field Types](https://airtable.com/developers/web/api/scim-overview#scim-user-objects)
 for more.

|     |     |
| --- | --- |
| <br>`emailDomain` | `optional<``string \| null``>`<br><br>The verified email domain on the enterprise whose configured SSO identity provider should be used for this user. Useful when the enterprise has multiple IdPs configured and the user's primary email domain's IdP does not have `emailAttribute` configured, but the intended IdP does. |

`urn:ietf:params:scim:schemas:extension:enterprise:2.0:User`

`optional<``null | the below object``>`

Custom extension, see [SCIM Field Types](https://airtable.com/developers/web/api/scim-overview#scim-user-objects)
 for more

`costCenter`

`optional<``string | null``>`

`department`

`optional<``string | null``>`

`division`

`optional<``string | null``>`

`employeeNumber`

`optional<``string | null``>`

`manager`

`optional<``null | the below object``>`

|     |     |
| --- | --- |
| <br>`$ref` | `optional<``string \| null``>` |
| <br>`displayName` | `optional<``string \| null``>` |
| <br>`value` | `optional<``string \| null``>` |

`organization`

`optional<``string | null``>`

`schemas`

`array of strings`

A list of schemas, including at least SCIM's core user schema URI.

You can add the [enterprise extension](https://datatracker.ietf.org/doc/html/rfc7643#section-4.3)
 schema URI if you want to send extra properties for reporting.

See the optional user metadata table for details.

`userName`

`string`

Becomes the "email" field in Airtable. It must not be in use already, and the email's domain must match the enterprise account.

`active`

`optional<``boolean | null``>`

Indicates if the user is active or deactivated.

Setting this is possible via the put and patch endpoints.

`externalId`

`optional<``string | null``>`

Provisioning client defined identifier.

`addresses`

`optional<``array of the below object | null``>`

|     |     |
| --- | --- |
| <br>`type` | `optional<``"work" \| "home" \| "other" \| null``>` |
| <br>`country` | `optional<``string \| null``>` |
| <br>`formatted` | `optional<``string \| null``>` |
| <br>`locality` | `optional<``string \| null``>` |
| <br>`postalCode` | `optional<``string \| null``>` |
| <br>`primary` | `optional<``boolean \| null``>` |
| <br>`region` | `optional<``string \| null``>` |
| <br>`streetAddress` | `optional<``string \| null``>` |

`displayName`

`optional<``string | null``>`

`emails`

`optional<``array of the below object | null``>`

|     |     |
| --- | --- |
| <br>`type` | `optional<``string \| null``>` |
| <br>`value` | `string` |
| <br>`display` | `optional<``string \| null``>` |
| <br>`primary` | `optional<``boolean \| null``>` |

`entitlements`

`optional<``array of any | null``>`

`groups`

`optional<``array of the below object | null``>`

|     |     |
| --- | --- |
| <br>`value` | `string` |
| <br>`$ref` | `optional<``string \| null``>` |

`ims`

`optional<``array of the below object | null``>`

|     |     |
| --- | --- |
| <br>`type` | `optional<``string \| null``>` |
| <br>`value` | `string` |
| <br>`display` | `optional<``string \| null``>` |
| <br>`primary` | `optional<``boolean \| null``>` |

`locale`

`optional<``string | null``>`

`meta`

`optional<``any``>`

`name`

`optional<``null | the below object``>`

|     |     |
| --- | --- |
| <br>`familyName` | `optional<``string \| null``>`<br><br>Becomes the "lastName" field in Airtable. |
| <br>`givenName` | `optional<``string \| null``>`<br><br>Becomes the "firstName" field in Airtable. |
| <br>`formatted` | `optional<``string \| null``>` |
| <br>`honorificPrefix` | `optional<``string \| null``>` |
| <br>`honorificSuffix` | `optional<``string \| null``>` |
| <br>`middleName` | `optional<``string \| null``>` |

`nickName`

`optional<``string | null``>`

`password`

`optional<``string | null``>`

`phoneNumbers`

`optional<``array of the below object | null``>`

|     |     |
| --- | --- |
| <br>`type` | `optional<``string \| null``>` |
| <br>`value` | `string` |
| <br>`display` | `optional<``string \| null``>` |
| <br>`primary` | `optional<``boolean \| null``>` |

`photos`

`optional<``array of the below object | null``>`

|     |     |
| --- | --- |
| <br>`type` | `optional<``"photo" \| "thumbnail" \| null``>` |
| <br>`value` | `string` |
| <br>`primary` | `optional<``boolean \| null``>` |

`preferredLanguage`

`optional<``string | null``>`

`profileUrl`

`optional<``string | null``>`

`roles`

`optional<``array of any | null``>`

`timezone`

`optional<``string | null``>`

`title`

`optional<``string | null``>`

`userType`

`optional<``string | null``>`

!!
