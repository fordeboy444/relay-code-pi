# Contacts

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/contacts/contacts
- **Summary:** Contacts

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/contacts#__docusaurus_skipToContent_fallback)

Version: v3

Documentation for Contacts API

[📄️Lookup Contact By Email Or Phone\
-----------------------------------\
\
Look up contacts matching an exact \`email\` or \`phone\`, scoped to a location, up to \`limit\` contacts (max 20) per page. Also matches against a contact's additional emails and additional phone numbers. Exactly one of \`email\` or \`phone\` must be provided. Paginate with \`nextCursor\`. Returns an empty \`contacts\` array if no contact matches. OAuth channel only.](https://marketplace.gohighlevel.com/docs/ghl/contacts/lookup-contact)

[📄️Delete Contact\
-----------------\
\
Delete Contact](https://marketplace.gohighlevel.com/docs/ghl/contacts/delete-contact)

[📄️Get Contact\
--------------\
\
Retrieves a contact by its unique identifier.](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contact)

[📄️Update Contact\
-----------------\
\
Update a contact using contactId](https://marketplace.gohighlevel.com/docs/ghl/contacts/update-contact)

[📄️Upsert Contact\
-----------------\
\
The Upsert API will adhere to the configuration defined under the 'Allow Duplicate Contact' setting at the Location level. If the setting is configured to check both Email and Phone, the API will attempt to identify an existing contact based on the priority sequence specified in the setting, and will create or update the contact accordingly.<br/><br/>If two separate contacts already exist—one with the same email and another with the same phone—and an upsert request includes both the email and phone, the API will update the contact that matches the first field in the configured sequence, and ignore the second field to prevent duplication.](https://marketplace.gohighlevel.com/docs/ghl/contacts/upsert-contact)

[📄️Get Contacts By BusinessId\
-----------------------------\
\
Get Contacts By BusinessId](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contacts-by-business-id)

[📄️Create Contact\
-----------------\
\
Create a new contact](https://marketplace.gohighlevel.com/docs/ghl/contacts/create-contact)
