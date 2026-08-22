# Retrieve a company profile

- **URL:** https://developer.unipile.com/reference/linkedincontroller_getcompanyprofile
- **Summary:** Get a company profile from its name or ID.

identifier

string

required

The identifier of the company: either the public identifier, the ID or the URN.

account_id

string

required

The ID of the account to trigger the request from.

200

OK. Request succeeded.

===============================

object

object

string

enum

required

`CompanyProfile`

id

string

required

name

string

required

description

string

required

entity_urn

string

required

public_identifier

string

required

profile_url

string

required

tagline

string

followers_count

number

is_following

boolean

is_employee

boolean

hashtags

array of objects

required

hashtags\*

object

title

string

required

messaging

object

required

is_enabled

boolean

required

id

string

entity_urn

string

claimed

boolean

required

viewer_permissions

object

required

canMembersInviteToFollow

boolean

required

canReadContentSuggestions

boolean

required

canReadMessages

boolean

required

canUpdateOrganizationProfile

boolean

required

canCreateOrganicShare

boolean

required

canReadAdminDashboard

boolean

required

canReadOrganizationActivity

boolean

required

canEditCurators

boolean

required

canManageOrganizationalPageFollow

boolean

required

canReadOrganizationFollowerAnalytics

boolean

required

canInviteMemberToFollow

boolean

required

canReadOrganizationLeadsAnalytics

boolean

required

canEditPendingAdministrators

boolean

required

canManageMessagingAccess

boolean

required

canSeeEmployeeExperienceAsMember

boolean

required

canEmployeesInviteToFollow

boolean

required

canSeeOrganizationAdministrativePage

boolean

required

canManageAdminRoles

boolean

required

canEditOrganizationDetails

boolean

required

canApproveContent

boolean

required

canViewTeamPerformance

boolean

required

canManageOrganizationSettings

boolean

required

canAccessAdvancedAnalytics

boolean

required

canModerateComments

boolean

required

canCreateAds

boolean

required

canManageAdBudgets

boolean

required

canEditPageTheme

boolean

required

canPublishNewsletters

boolean

required

canEditCustomTabs

boolean

required

canManageIntegrations

boolean

required

canAssignRoles

boolean

required

canApprovePendingMembers

boolean

required

canEditCareerPageSettings

boolean

required

canViewBillingInformation

boolean

required

organization_type

string

required

String 1

String 2

String 3

String 4

String 5

String 6

String 7

String 8

Option 9

locations

array of objects

required

locations\*

object

is_headquarter

boolean

required

country

string

required

city

string

required

postalCode

string

street

array of strings

required

description

string

area

string

logo

string

localized_description

array of objects

localized_description

object

In this localized object, the key corresponds to the locale of the value e.g. fr_FR, en_US...

Has additional fields

localized_name

array of objects

localized_name

object

In this localized object, the key corresponds to the locale of the value e.g. fr_FR, en_US...

Has additional fields

localized_tagline

array of objects

localized_tagline

object

In this localized object, the key corresponds to the locale of the value e.g. fr_FR, en_US...

Has additional fields

industry

array of strings

activities

array of strings

employee_count

number

employee_count_range

object

from

number

required

to

number

required

website

string

foundation_date

string

phone

string

insights

object

employeesCount

object

employeesCount object

acquired_by

object

id

string

required

name

string

required

public_identifier

string

required

profile_url

string

required

crunchbase_funding

object

last_updated_at

string

required

company_url

string

required

rounds

object

required

rounds object

401

Unauthorized

Disconnected account

The account appears to be disconnected from the provider service.  
undefined

403

Forbidden

Insufficient permissions - Type: "errors/insufficient_permissions"

Valid authentication but insufficient permissions to perform the request.

Account restricted - Type: "errors/account_restricted"

Access to this account has been restricted by the provider.

Account mismatch - Type: "errors/account_mismatch"

This action cannot be done with your account.

Unknown authentication context - Type: "errors/unknown_authentication_context"

An additional step seems necessary to complete login. Please connect to provider with your browser to find out more, then retry authentication.

Session mismatch - Type: "errors/session_mismatch"

Token User id does not match client session id.

Feature not subscribed - Type: "errors/feature_not_subscribed"

The requested feature has either not been subscribed or not been authenticated properly.

Subscription required - Type: "errors/subscription_required"

The action you're trying to achieve requires a subscription to provider's services.

Resource access restricted - Type: "errors/resource_access_restricted"

You don't have access to this resource.

Action required - Type: "errors/action_required"

An additional step seems necessary. Complete authentication on the provider's native application and try again.

404

Not Found

Resource not found.

The requested resource were not found.  
Company not found

422

Unprocessable Entity

Invalid account

Provided account is not designed for this feature.  
undefined
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
https://api1.unipile.com:13111/api/v1/linkedin/company/{identifier}

1

curl \--request GET \\

2

     \--url https://api1.unipile.com:13111/api/v1/linkedin/company/identifier \\

3

     \--header 'accept: application/json'

153

1

{

2

  "object": "CompanyProfile",

3

  "id": "string",

4

  "name": "string",

5

  "description": "string",

6

  "entity_urn": "string",

7

  "public_identifier": "string",

8

  "profile_url": "string",

9

  "tagline": "string",

10

  "followers_count": 0,

11

  "is_following": true,

12

  "is_employee": true,

13

  "hashtags": \[\
\
14\
\
    {\
\
15\
\
      "title": "string"\
\
16\
\
    }\
\
17\
\
  \],

18

  "messaging": {

19

    "is_enabled": true,

20

    "id": "string",

21

    "entity_urn": "string"

22

  },

23

  "claimed": true,

24

  "viewer_permissions": {

25

    "canMembersInviteToFollow": true,

26

    "canReadContentSuggestions": true,

27

    "canReadMessages": true,

28

    "canUpdateOrganizationProfile": true,

29

    "canCreateOrganicShare": true,

30

    "canReadAdminDashboard": true,

31

    "canReadOrganizationActivity": true,

32

    "canEditCurators": true,

33

    "canManageOrganizationalPageFollow": true,

34

    "canReadOrganizationFollowerAnalytics": true,

35

    "canInviteMemberToFollow": true,

36

    "canReadOrganizationLeadsAnalytics": true,

37

    "canEditPendingAdministrators": true,

38

    "canManageMessagingAccess": true,

39

    "canSeeEmployeeExperienceAsMember": true,

40

    "canEmployeesInviteToFollow": true,

41

    "canSeeOrganizationAdministrativePage": true,

42

    "canManageAdminRoles": true,

43

    "canEditOrganizationDetails": true,

No
