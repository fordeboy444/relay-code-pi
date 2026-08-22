# User mentioned - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/model/user-mentioned
- **Summary:** *   List comments *   Create comment *   Update comment The user, user group, or app agent mentioned and returned from the comments API Users can be mentioned by including the userId or email surrounded by `@[]` in the text field of the request body Responses from listing, creating, or updating...

Object

User mentioned
==============

Endpoints that reference this object:

*   [List comments](https://airtable.com/developers/web/api/list-comments)
    
*   [Create comment](https://airtable.com/developers/web/api/create-comment)
    
*   [Update comment](https://airtable.com/developers/web/api/update-comment)
    

  
`any of the below objects`

The user, user group, or app agent mentioned and returned from the comments API

A **user** mention

Users can be mentioned by including the userId or email surrounded by `@[]` in the text field of the request body

Responses from listing, creating, or updating comments will indicate user mentions by including the userId surrounded by the same `@[]` in the text field of the response body. The response will also include a `mentioned` objectMap that maps mentioned user and user group ids to detailed information

If you wish to have a list of all possible user ids, these can be found:

*   from the admin panel, by downloading the CSV available from the Users table
*   from Airtable's [Enterprise API](https://airtable.com/developers/web/api/get-base-collaborators)
    
*   by using [automations](https://support.airtable.com/docs/automations-overview)
     or the [scripting](https://airtable.com/developers/scripting)
     extension

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>A user ID |
| <br>`type` | `"user"` |
| <br>`displayName` | `string` |
| <br>`email` | `string` |

A **user group** mention

User Groups can be mentioned by including the userGroupId surrounded by `@[]` in the text field of the request body

Responses from listing, creating, or updating comments will indicate user group mentions by including the userGroupId surrounded by the same `@[]` in the text field of the response body. It will also include a `mentions` objectMap that maps mentioned user and group ids to detailed information.

If you wish to have a list of all possible user group ids, these can be found:

*   from the admin panel, by downloading the CSV available from the Groups table
*   from Airtable's [Enterprise API](https://airtable.com/developers/web/api/get-base-collaborators)
    
*   by using [automations](https://support.airtable.com/docs/automations-overview)
     or the [scripting](https://airtable.com/developers/scripting)
     extension

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>A user group ID |
| <br>`type` | `"userGroup"` |
| <br>`displayName` | `string` |

An **app agent** mention

App agents can be mentioned by including the appAgentId surrounded by `@[]` in the text field of the request body

Mentioning an app agent triggers the agent to execute in the context of the row comment's record.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`type` | `"appAgent"` |
| <br>`displayName` | `string` |

!!
