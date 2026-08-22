# Audit log event types - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/audit-log-event-types
- **Summary:** Audit log event types This documents all of the currently supported audit log event types and their corresponding payload formats. *   Create base(`createBase`) *   Delete base(`deleteBase`) *   Move base(`moveBase`) *   Duplicate base(`duplicateBase`) *   View base(`viewBase`) *   Restore base...

Audit Logs

Audit log event types
=====================

This documents all of the currently supported audit log event types and their corresponding payload formats.

*   [Create base(`createBase`)](https://airtable.com/developers/web/api/audit-log-event-types#createbase)
    
*   [Delete base(`deleteBase`)](https://airtable.com/developers/web/api/audit-log-event-types#deletebase)
    
*   [Move base(`moveBase`)](https://airtable.com/developers/web/api/audit-log-event-types#movebase)
    
*   [Duplicate base(`duplicateBase`)](https://airtable.com/developers/web/api/audit-log-event-types#duplicatebase)
    
*   [View base(`viewBase`)](https://airtable.com/developers/web/api/audit-log-event-types#viewbase)
    
*   [Restore base from snapshot(`restoreBaseFromSnapshot`)](https://airtable.com/developers/web/api/audit-log-event-types#restorebasefromsnapshot)
    
*   [Restore base from trash(`restoreBaseFromTrash`)](https://airtable.com/developers/web/api/audit-log-event-types#restorebasefromtrash)
    
*   [Apply changes from sandbox(`applyChangesFromSandbox`)](https://airtable.com/developers/web/api/audit-log-event-types#applychangesfromsandbox)
    
*   [Download attachment(`downloadAttachment`)](https://airtable.com/developers/web/api/audit-log-event-types#downloadattachment)
    
*   [Rename base(`updateBaseName`)](https://airtable.com/developers/web/api/audit-log-event-types#updatebasename)
    
*   [Update base guide text(`updateBaseGuideText`)](https://airtable.com/developers/web/api/audit-log-event-types#updatebaseguidetext)
    
*   [Create a base invite link(`addBaseInviteLink`)](https://airtable.com/developers/web/api/audit-log-event-types#addbaseinvitelink)
    
*   [Remove a base invite link(`removeBaseInviteLink`)](https://airtable.com/developers/web/api/audit-log-event-types#removebaseinvitelink)
    
*   [Configure base invite link(`configureBaseInviteLink`)](https://airtable.com/developers/web/api/audit-log-event-types#configurebaseinvitelink)
    
*   [Change application AI permissions(`changeBaseAiPermissions`)](https://airtable.com/developers/web/api/audit-log-event-types#changebaseaipermissions)
    
*   [Create sandbox base(`createSandboxBase`)](https://airtable.com/developers/web/api/audit-log-event-types#createsandboxbase)
    
*   [Invite base collaborator(`inviteBaseCollaborator`)](https://airtable.com/developers/web/api/audit-log-event-types#invitebasecollaborator)
    
*   [Add base collaborator(`addBaseCollaborator`)](https://airtable.com/developers/web/api/audit-log-event-types#addbasecollaborator)
    
*   [Change base collaborator permission(`changeBaseCollaboratorPermission`)](https://airtable.com/developers/web/api/audit-log-event-types#changebasecollaboratorpermission)
    
*   [Change base invite permission(`changeBaseInvitePermission`)](https://airtable.com/developers/web/api/audit-log-event-types#changebaseinvitepermission)
    
*   [Uninvite base collaborator(`uninviteBaseCollaborator`)](https://airtable.com/developers/web/api/audit-log-event-types#uninvitebasecollaborator)
    
*   [Remove base collaborator(`removeBaseCollaborator`)](https://airtable.com/developers/web/api/audit-log-event-types#removebasecollaborator)
    
*   [Resend base invite(`resendBaseInvite`)](https://airtable.com/developers/web/api/audit-log-event-types#resendbaseinvite)
    
*   [Create group(`createGroup`)](https://airtable.com/developers/web/api/audit-log-event-types#creategroup)
    
*   [Delete group(`deleteGroup`)](https://airtable.com/developers/web/api/audit-log-event-types#deletegroup)
    
*   [Move group(`moveGroup`)](https://airtable.com/developers/web/api/audit-log-event-types#movegroup)
    
*   [Add member role(`addGroupMember`)](https://airtable.com/developers/web/api/audit-log-event-types#addgroupmember)
    
*   [Change group member role(`changeGroupMemberRole`)](https://airtable.com/developers/web/api/audit-log-event-types#changegroupmemberrole)
    
*   [Remove group member(`removeGroupMember`)](https://airtable.com/developers/web/api/audit-log-event-types#removegroupmember)
    
*   [Delete group invite(`deleteGroupInvite`)](https://airtable.com/developers/web/api/audit-log-event-types#deletegroupinvite)
    
*   [Resend group invite(`resendGroupInvite`)](https://airtable.com/developers/web/api/audit-log-event-types#resendgroupinvite)
    
*   [Invite group member(`inviteGroupMember`)](https://airtable.com/developers/web/api/audit-log-event-types#invitegroupmember)
    
*   [Create role(`createRole`)](https://airtable.com/developers/web/api/audit-log-event-types#createrole)
    
*   [Enable share link(`enableShare`)](https://airtable.com/developers/web/api/audit-log-event-types#enableshare)
    
*   [Disable share link(`disableShare`)](https://airtable.com/developers/web/api/audit-log-event-types#disableshare)
    
*   [Configure share link(`configureShare`)](https://airtable.com/developers/web/api/audit-log-event-types#configureshare)
    
*   [Regenerate share link(`regenerateShare`)](https://airtable.com/developers/web/api/audit-log-event-types#regenerateshare)
    
*   [View share(`viewShare`)](https://airtable.com/developers/web/api/audit-log-event-types#viewshare)
    
*   [Login user(`loginUser`)](https://airtable.com/developers/web/api/audit-log-event-types#loginuser)
    
*   [Claim user(`claimUser`)](https://airtable.com/developers/web/api/audit-log-event-types#claimuser)
    
*   [Unclaim user(`unclaimUser`)](https://airtable.com/developers/web/api/audit-log-event-types#unclaimuser)
    
*   [Create user(`createUser`)](https://airtable.com/developers/web/api/audit-log-event-types#createuser)
    
*   [Delete user(`deleteUser`)](https://airtable.com/developers/web/api/audit-log-event-types#deleteuser)
    
*   [Provision user(`provisionUser`)](https://airtable.com/developers/web/api/audit-log-event-types#provisionuser)
    
*   [Deactivate user(`deactivateUser`)](https://airtable.com/developers/web/api/audit-log-event-types#deactivateuser)
    
*   [Update Email(`updateUserEmail`)](https://airtable.com/developers/web/api/audit-log-event-types#updateuseremail)
    
*   [Change password(`changePassword`)](https://airtable.com/developers/web/api/audit-log-event-types#changepassword)
    
*   [Update profile picture(`updateUserProfilePicture`)](https://airtable.com/developers/web/api/audit-log-event-types#updateuserprofilepicture)
    
*   [User assigned license(`userAssignedLicense`)](https://airtable.com/developers/web/api/audit-log-event-types#userassignedlicense)
    
*   [User assigned global Hub license(`userAssignedGridGlobalLicense`)](https://airtable.com/developers/web/api/audit-log-event-types#userassignedgridgloballicense)
    
*   [Create service account(`createServiceAccount`)](https://airtable.com/developers/web/api/audit-log-event-types#createserviceaccount)
    
*   [Delete service account(`deleteServiceAccount`)](https://airtable.com/developers/web/api/audit-log-event-types#deleteserviceaccount)
    
*   [Move service account(`moveServiceAccount`)](https://airtable.com/developers/web/api/audit-log-event-types#moveserviceaccount)
    
*   [Accept terms of use(`acceptTermsOfUse`)](https://airtable.com/developers/web/api/audit-log-event-types#accepttermsofuse)
    
*   [Link SSO identity(`linkSsoIdentity`)](https://airtable.com/developers/web/api/audit-log-event-types#linkssoidentity)
    
*   [Update SSO identity(`updateSsoIdentity`)](https://airtable.com/developers/web/api/audit-log-event-types#updatessoidentity)
    
*   [Create SSO external user(`createSsoExternalUser`)](https://airtable.com/developers/web/api/audit-log-event-types#createssoexternaluser)
    
*   [Add two-factor authentication strategy(`addTwoFactorAuthenticationStrategy`)](https://airtable.com/developers/web/api/audit-log-event-types#addtwofactorauthenticationstrategy)
    
*   [Remove two-factor authentication strategy(`removeTwoFactorAuthenticationStrategy`)](https://airtable.com/developers/web/api/audit-log-event-types#removetwofactorauthenticationstrategy)
    
*   [Set default two-factor authentication strategy(`setDefaultTwoFactorAuthenticationStrategy`)](https://airtable.com/developers/web/api/audit-log-event-types#setdefaulttwofactorauthenticationstrategy)
    
*   [Regenerate two-factor authentication backup codes(`regenerateTwoFactorAuthenticationBackupCodes`)](https://airtable.com/developers/web/api/audit-log-event-types#regeneratetwofactorauthenticationbackupcodes)
    
*   [Disable two-factor authentication(`disableTwoFactorAuthentication`)](https://airtable.com/developers/web/api/audit-log-event-types#disabletwofactorauthentication)
    
*   [Create OAuth access token(`createOauthAccessToken`)](https://airtable.com/developers/web/api/audit-log-event-types#createoauthaccesstoken)
    
*   [Refresh OAuth access token(`refreshOauthAccessToken`)](https://airtable.com/developers/web/api/audit-log-event-types#refreshoauthaccesstoken)
    
*   [Create sync integration source(`createSyncIntegrationSource`)](https://airtable.com/developers/web/api/audit-log-event-types#createsyncintegrationsource)
    
*   [Rename sync integration source(`renameSyncIntegrationSource`)](https://airtable.com/developers/web/api/audit-log-event-types#renamesyncintegrationsource)
    
*   [Reconnect sync integration source(`reconnectSyncIntegrationSource`)](https://airtable.com/developers/web/api/audit-log-event-types#reconnectsyncintegrationsource)
    
*   [Delete sync integration source(`deleteSyncIntegrationSource`)](https://airtable.com/developers/web/api/audit-log-event-types#deletesyncintegrationsource)
    
*   [Connect sync integration to table(`connectSyncIntegrationToTable`)](https://airtable.com/developers/web/api/audit-log-event-types#connectsyncintegrationtotable)
    
*   [Change sync integration table source(`changeSyncIntegrationTableSource`)](https://airtable.com/developers/web/api/audit-log-event-types#changesyncintegrationtablesource)
    
*   [Disconnect sync integration from table(`disconnectSyncIntegrationFromTable`)](https://airtable.com/developers/web/api/audit-log-event-types#disconnectsyncintegrationfromtable)
    
*   [Create personal access token(`createPersonalAccessToken`)](https://airtable.com/developers/web/api/audit-log-event-types#createpersonalaccesstoken)
    
*   [Grant enterprise admin access(`grantEnterpriseAdminAccess`)](https://airtable.com/developers/web/api/audit-log-event-types#grantenterpriseadminaccess)
    
*   [Grant enterprise upgrader access(`grantEnterpriseUpgraderAccess`)](https://airtable.com/developers/web/api/audit-log-event-types#grantenterpriseupgraderaccess)
    
*   [Revoke enterprise admin access(`revokeEnterpriseAdminAccess`)](https://airtable.com/developers/web/api/audit-log-event-types#revokeenterpriseadminaccess)
    
*   [Revoke enterprise upgrader access(`revokeEnterpriseUpgraderAccess`)](https://airtable.com/developers/web/api/audit-log-event-types#revokeenterpriseupgraderaccess)
    
*   [Update enterprise name(`updateEnterpriseName`)](https://airtable.com/developers/web/api/audit-log-event-types#updateenterprisename)
    
*   [Delete enterprise stripe card(`deleteEnterpriseStripeCard`)](https://airtable.com/developers/web/api/audit-log-event-types#deleteenterprisestripecard)
    
*   [Update enterprise stripe card(`updateEnterpriseStripeCard`)](https://airtable.com/developers/web/api/audit-log-event-types#updateenterprisestripecard)
    
*   [Update enterprise payment method(`updateEnterprisePaymentMethod`)](https://airtable.com/developers/web/api/audit-log-event-types#updateenterprisepaymentmethod)
    
*   [Retry enterprise payment(`retryEnterprisePayment`)](https://airtable.com/developers/web/api/audit-log-event-types#retryenterprisepayment)
    
*   [Update enterprise invoice memo details(`updateEnterpriseInvoiceDetails`)](https://airtable.com/developers/web/api/audit-log-event-types#updateenterpriseinvoicedetails)
    
*   [Update enterprise tax details(`updateEnterpriseTaxDetails`)](https://airtable.com/developers/web/api/audit-log-event-types#updateenterprisetaxdetails)
    
*   [Delete enterprise tax ID(`deleteEnterpriseTaxDetails`)](https://airtable.com/developers/web/api/audit-log-event-types#deleteenterprisetaxdetails)
    
*   [Create org unit(`createOrgUnit`)](https://airtable.com/developers/web/api/audit-log-event-types#createorgunit)
    
*   [Delete org unit(`deleteOrgUnit`)](https://airtable.com/developers/web/api/audit-log-event-types#deleteorgunit)
    
*   [Create enterprise eDiscovery export(`createEdiscoveryExport`)](https://airtable.com/developers/web/api/audit-log-event-types#createediscoveryexport)
    
*   [Update org unit connection(`updateOrgUnitConnection`)](https://airtable.com/developers/web/api/audit-log-event-types#updateorgunitconnection)
    
*   [Update membership capture type(`updateMembershipCaptureType`)](https://airtable.com/developers/web/api/audit-log-event-types#updatemembershipcapturetype)
    
*   [User requested a license upgrade(`requestLicenseUpgrade`)](https://airtable.com/developers/web/api/audit-log-event-types#requestlicenseupgrade)
    
*   [Admin approved a license upgrade request(`approveLicenseUpgradeRequest`)](https://airtable.com/developers/web/api/audit-log-event-types#approvelicenseupgraderequest)
    
*   [Admin denied a license upgrade request(`denyLicenseUpgradeRequest`)](https://airtable.com/developers/web/api/audit-log-event-types#denylicenseupgraderequest)
    
*   [Change invite restrictions for an enterprise(`changeEnterpriseInviteRestrictions`)](https://airtable.com/developers/web/api/audit-log-event-types#changeenterpriseinviterestrictions)
    
*   [Change portal invite restrictions for an enterprise(`changeEnterprisePortalInviteRestrictions`)](https://airtable.com/developers/web/api/audit-log-event-types#changeenterpriseportalinviterestrictions)
    
*   [Change interface organization-wide sharing restrictions for an enterprise(`changeEnterpriseInterfaceOrgWideSharingRestrictions`)](https://airtable.com/developers/web/api/audit-log-event-types#changeenterpriseinterfaceorgwidesharingrestrictions)
    
*   [Change global share restrictions for an enterprise(`changeEnterpriseGlobalShareRestrictions`)](https://airtable.com/developers/web/api/audit-log-event-types#changeenterpriseglobalsharerestrictions)
    
*   [Change group creation restrictions for an enterprise(`changeEnterpriseGroupCreateRestrictions`)](https://airtable.com/developers/web/api/audit-log-event-types#changeenterprisegroupcreaterestrictions)
    
*   [Change extension configuration restrictions for an enterprise(`changeEnterpriseExtensionConfigurationRestrictions`)](https://airtable.com/developers/web/api/audit-log-event-types#changeenterpriseextensionconfigurationrestrictions)
    
*   [Change data retention policy for an enterprise(`changeEnterpriseDataRetentionPolicy`)](https://airtable.com/developers/web/api/audit-log-event-types#changeenterprisedataretentionpolicy)
    
*   [Change AI restriction policy for an enterprise(`changeEnterpriseAiRestrictionPolicy`)](https://airtable.com/developers/web/api/audit-log-event-types#changeenterpriseairestrictionpolicy)
    
*   [Change MFA policy for an enterprise(`changeEnterpriseMfaPolicy`)](https://airtable.com/developers/web/api/audit-log-event-types#changeenterprisemfapolicy)
    
*   [Change enterprise license upgrade request configuration(`changeEnterpriseLicenseUpgradeRequestConfig`)](https://airtable.com/developers/web/api/audit-log-event-types#changeenterpriselicenseupgraderequestconfig)
    
*   [Lock grid setting(`updateSettingLock`)](https://airtable.com/developers/web/api/audit-log-event-types#updatesettinglock)
    
*   [Change enterprise HyperDB installation restrictions(`changeDataTableInstallationRestrictions`)](https://airtable.com/developers/web/api/audit-log-event-types#changedatatableinstallationrestrictions)
    
*   [Change enterprise colors(`changeEnterpriseColors`)](https://airtable.com/developers/web/api/audit-log-event-types#changeenterprisecolors)
    
*   [Change enterprise terms of use configuration(`changeEnterpriseTermsOfUseOptions`)](https://airtable.com/developers/web/api/audit-log-event-types#changeenterprisetermsofuseoptions)
    
*   [Change enterprise data export control restrictions(`changeEnterpriseDataExportControlRestrictions`)](https://airtable.com/developers/web/api/audit-log-event-types#changeenterprisedataexportcontrolrestrictions)
    
*   [Change enterprise sensitivity labels(`changeEnterpriseSensitivityLabels`)](https://airtable.com/developers/web/api/audit-log-event-types#changeenterprisesensitivitylabels)
    
*   [Change enterprise sensitivity label setting(`changeEnterpriseSensitivityLabelSetting`)](https://airtable.com/developers/web/api/audit-log-event-types#changeenterprisesensitivitylabelsetting)
    
*   [Change enterprise workspace and app creation restrictions(`changeEnterpriseWorkspaceAppCreationRestrictions`)](https://airtable.com/developers/web/api/audit-log-event-types#changeenterpriseworkspaceappcreationrestrictions)
    
*   [Add user or group to enterprise restriction allowlist(`addUserOrGroupToEnterpriseRestrictionAllowlist`)](https://airtable.com/developers/web/api/audit-log-event-types#adduserorgrouptoenterpriserestrictionallowlist)
    
*   [Remove user or group from enterprise restriction allowlist(`removeUserOrGroupFromEnterpriseRestrictionAllowlist`)](https://airtable.com/developers/web/api/audit-log-event-types#removeuserorgroupfromenterpriserestrictionallowlist)
    
*   [Change outbound access restrictions for an enterprise(`changeEnterpriseOutboundAccessRestrictions`)](https://airtable.com/developers/web/api/audit-log-event-types#changeenterpriseoutboundaccessrestrictions)
    
*   [Add outbound access allowlist entry(`addOutboundAccessAllowlistEntry`)](https://airtable.com/developers/web/api/audit-log-event-types#addoutboundaccessallowlistentry)
    
*   [Remove outbound access allowlist entry(`removeOutboundAccessAllowlistEntry`)](https://airtable.com/developers/web/api/audit-log-event-types#removeoutboundaccessallowlistentry)
    
*   [Apply default enterprise restriction setting(`applyDefaultEnterpriseSetting`)](https://airtable.com/developers/web/api/audit-log-event-types#applydefaultenterprisesetting)
    
*   [Create SSO identity provider(`createSsoIdentityProvider`)](https://airtable.com/developers/web/api/audit-log-event-types#createssoidentityprovider)
    
*   [Update SSO identity provider(`updateSsoIdentityProvider`)](https://airtable.com/developers/web/api/audit-log-event-types#updatessoidentityprovider)
    
*   [Delete SSO identity provider(`deleteSsoIdentityProvider`)](https://airtable.com/developers/web/api/audit-log-event-types#deletessoidentityprovider)
    
*   [Unlink user SSO identity(`unlinkUserSsoIdentity`)](https://airtable.com/developers/web/api/audit-log-event-types#unlinkuserssoidentity)
    
*   [Inherit SSO from another domain(`setEmailDomainSsoPiggybacking`)](https://airtable.com/developers/web/api/audit-log-event-types#setemaildomainssopiggybacking)
    
*   [Stop inheriting SSO from another domain(`clearEmailDomainSsoPiggybacking`)](https://airtable.com/developers/web/api/audit-log-event-types#clearemaildomainssopiggybacking)
    
*   [Create managed app(`createManagedApp`)](https://airtable.com/developers/web/api/audit-log-event-types#createmanagedapp)
    
*   [Create component(`createComponent`)](https://airtable.com/developers/web/api/audit-log-event-types#createcomponent)
    
*   [Delete managed app(`deleteManagedApp`)](https://airtable.com/developers/web/api/audit-log-event-types#deletemanagedapp)
    
*   [Delete component(`deleteComponent`)](https://airtable.com/developers/web/api/audit-log-event-types#deletecomponent)
    
*   [Publish managed app(`publishManagedApp`)](https://airtable.com/developers/web/api/audit-log-event-types#publishmanagedapp)
    
*   [Publish component(`publishComponent`)](https://airtable.com/developers/web/api/audit-log-event-types#publishcomponent)
    
*   [Rename managed app(`updateManagedAppName`)](https://airtable.com/developers/web/api/audit-log-event-types#updatemanagedappname)
    
*   [Rename component(`updateComponentName`)](https://airtable.com/developers/web/api/audit-log-event-types#updatecomponentname)
    
*   [Add managed app audience member(`addManagedAppAudienceMember`)](https://airtable.com/developers/web/api/audit-log-event-types#addmanagedappaudiencemember)
    
*   [Add component audience member(`addComponentAudienceMember`)](https://airtable.com/developers/web/api/audit-log-event-types#addcomponentaudiencemember)
    
*   [Remove managed app audience member(`removeManagedAppAudienceMember`)](https://airtable.com/developers/web/api/audit-log-event-types#removemanagedappaudiencemember)
    
*   [Remove component audience member(`removeComponentAudienceMember`)](https://airtable.com/developers/web/api/audit-log-event-types#removecomponentaudiencemember)
    
*   [Add managed app collaborator(`addManagedAppCollaborator`)](https://airtable.com/developers/web/api/audit-log-event-types#addmanagedappcollaborator)
    
*   [Add component collaborator(`addComponentCollaborator`)](https://airtable.com/developers/web/api/audit-log-event-types#addcomponentcollaborator)
    
*   [Change managed app collaborator permission(`changeManagedAppCollaboratorPermission`)](https://airtable.com/developers/web/api/audit-log-event-types#changemanagedappcollaboratorpermission)
    
*   [Change component collaborator permission(`changeComponentCollaboratorPermission`)](https://airtable.com/developers/web/api/audit-log-event-types#changecomponentcollaboratorpermission)
    
*   [Remove managed app collaborator(`removeManagedAppCollaborator`)](https://airtable.com/developers/web/api/audit-log-event-types#removemanagedappcollaborator)
    
*   [Remove component collaborator(`removeComponentCollaborator`)](https://airtable.com/developers/web/api/audit-log-event-types#removecomponentcollaborator)
    
*   [Publish data set(`createPublishedDataset`)](https://airtable.com/developers/web/api/audit-log-event-types#createpublisheddataset)
    
*   [Change data set name(`changePublishedDatasetName`)](https://airtable.com/developers/web/api/audit-log-event-types#changepublisheddatasetname)
    
*   [Unpublish a data set(`deletePublishedDataset`)](https://airtable.com/developers/web/api/audit-log-event-types#deletepublisheddataset)
    
*   [Update published data set owner(`updatePublishedDatasetOwner`)](https://airtable.com/developers/web/api/audit-log-event-types#updatepublisheddatasetowner)
    
*   [Update published data set audiences(`updatePublishedDatasetAudiences`)](https://airtable.com/developers/web/api/audit-log-event-types#updatepublisheddatasetaudiences)
    
*   [Update published data set verification status(`updatePublishedDatasetVerificationStatus`)](https://airtable.com/developers/web/api/audit-log-event-types#updatepublisheddatasetverificationstatus)
    
*   [Deactivate published data set(`deactivatePublishedDataset`)](https://airtable.com/developers/web/api/audit-log-event-types#deactivatepublisheddataset)
    
*   [Reactivate published data set(`reactivatePublishedDataset`)](https://airtable.com/developers/web/api/audit-log-event-types#reactivatepublisheddataset)
    
*   [Create HyperDB table(`createDataTable`)](https://airtable.com/developers/web/api/audit-log-event-types#createdatatable)
    
*   [Update HyperDB table single select column choices(`updateDataTableSingleSelectColumnChoices`)](https://airtable.com/developers/web/api/audit-log-event-types#updatedatatablesingleselectcolumnchoices)
    
*   [Update HyperDB table source(`updateDataTableSource`)](https://airtable.com/developers/web/api/audit-log-event-types#updatedatatablesource)
    
*   [Delete HyperDB table(`deleteDataTable`)](https://airtable.com/developers/web/api/audit-log-event-types#deletedatatable)
    
*   [Publish data set(`createPublishedDatasetFromDataTable`)](https://airtable.com/developers/web/api/audit-log-event-types#createpublisheddatasetfromdatatable)
    
*   [Abort HyperDB table import(`abortDataTableImportInProgress`)](https://airtable.com/developers/web/api/audit-log-event-types#abortdatatableimportinprogress)
    
*   [Update a HyperDB table published data set(`updateDataTablePublishedDataSet`)](https://airtable.com/developers/web/api/audit-log-event-types#updatedatatablepublisheddataset)
    
*   [Update the status of a data set from a HyperDB table(`updateDataTablePublishedDataSetStatus`)](https://airtable.com/developers/web/api/audit-log-event-types#updatedatatablepublisheddatasetstatus)
    
*   [Move HyperDb table to new owner(`moveDataTable`)](https://airtable.com/developers/web/api/audit-log-event-types#movedatatable)
    
*   [Create workspace(`createWorkspace`)](https://airtable.com/developers/web/api/audit-log-event-types#createworkspace)
    
*   [Delete workspace(`deleteWorkspace`)](https://airtable.com/developers/web/api/audit-log-event-types#deleteworkspace)
    
*   [Restore workspace from trash(`restoreWorkspaceFromTrash`)](https://airtable.com/developers/web/api/audit-log-event-types#restoreworkspacefromtrash)
    
*   [Rename workspace(`updateWorkspaceName`)](https://airtable.com/developers/web/api/audit-log-event-types#updateworkspacename)
    
*   [Move workspace(`moveWorkspace`)](https://airtable.com/developers/web/api/audit-log-event-types#moveworkspace)
    
*   [Change workspace sharing restrictions(`changeWorkspaceSharingRestrictions`)](https://airtable.com/developers/web/api/audit-log-event-types#changeworkspacesharingrestrictions)
    
*   [Create workspace invite link(`addWorkspaceInviteLink`)](https://airtable.com/developers/web/api/audit-log-event-types#addworkspaceinvitelink)
    
*   [Configure workspace invite link(`configureWorkspaceInviteLink`)](https://airtable.com/developers/web/api/audit-log-event-types#configureworkspaceinvitelink)
    
*   [Remove workspace invite link(`removeWorkspaceInviteLink`)](https://airtable.com/developers/web/api/audit-log-event-types#removeworkspaceinvitelink)
    
*   [Change workspace AI permissions(`changeWorkspaceAiPermissions`)](https://airtable.com/developers/web/api/audit-log-event-types#changeworkspaceaipermissions)
    
*   [Invite workspace collaborator(`inviteWorkspaceCollaborator`)](https://airtable.com/developers/web/api/audit-log-event-types#inviteworkspacecollaborator)
    
*   [Add workspace collaborator(`addWorkspaceCollaborator`)](https://airtable.com/developers/web/api/audit-log-event-types#addworkspacecollaborator)
    
*   [Change workspace collaborator permission(`changeWorkspaceCollaboratorPermission`)](https://airtable.com/developers/web/api/audit-log-event-types#changeworkspacecollaboratorpermission)
    
*   [Change workspace invite permission(`changeWorkspaceInvitePermission`)](https://airtable.com/developers/web/api/audit-log-event-types#changeworkspaceinvitepermission)
    
*   [Uninvite workspace collaborator(`uninviteWorkspaceCollaborator`)](https://airtable.com/developers/web/api/audit-log-event-types#uninviteworkspacecollaborator)
    
*   [Remove workspace collaborator(`removeWorkspaceCollaborator`)](https://airtable.com/developers/web/api/audit-log-event-types#removeworkspacecollaborator)
    
*   [Resend workspace invite(`resendWorkspaceInvite`)](https://airtable.com/developers/web/api/audit-log-event-types#resendworkspaceinvite)
    
*   [Create interface(`createInterface`)](https://airtable.com/developers/web/api/audit-log-event-types#createinterface)
    
*   [Delete interface(`deleteInterface`)](https://airtable.com/developers/web/api/audit-log-event-types#deleteinterface)
    
*   [Restore interface from trash(`restoreInterfaceFromTrash`)](https://airtable.com/developers/web/api/audit-log-event-types#restoreinterfacefromtrash)
    
*   [Duplicate Interface(`duplicateInterface`)](https://airtable.com/developers/web/api/audit-log-event-types#duplicateinterface)
    
*   [View interface(`viewInterface`)](https://airtable.com/developers/web/api/audit-log-event-types#viewinterface)
    
*   [Rename interface(`updateInterfaceName`)](https://airtable.com/developers/web/api/audit-log-event-types#updateinterfacename)
    
*   [Publish interface(`publishInterface`)](https://airtable.com/developers/web/api/audit-log-event-types#publishinterface)
    
*   [Unpublish interface(`unpublishInterface`)](https://airtable.com/developers/web/api/audit-log-event-types#unpublishinterface)
    
*   [Open record details from interface(`openRecordDetailsFromInterface`)](https://airtable.com/developers/web/api/audit-log-event-types#openrecorddetailsfrominterface)
    
*   [View form(`viewForm`)](https://airtable.com/developers/web/api/audit-log-event-types#viewform)
    
*   [Publish form(`publishForm`)](https://airtable.com/developers/web/api/audit-log-event-types#publishform)
    
*   [Unpublish form(`unpublishForm`)](https://airtable.com/developers/web/api/audit-log-event-types#unpublishform)
    
*   [Configure form sharing settings(`configureFormSharingSettings`)](https://airtable.com/developers/web/api/audit-log-event-types#configureformsharingsettings)
    
*   [Invite interface collaborator(`inviteInterfaceCollaborator`)](https://airtable.com/developers/web/api/audit-log-event-types#inviteinterfacecollaborator)
    
*   [Add interface collaborator(`addInterfaceCollaborator`)](https://airtable.com/developers/web/api/audit-log-event-types#addinterfacecollaborator)
    
*   [Change interface collaborator permission(`changeInterfaceCollaboratorPermission`)](https://airtable.com/developers/web/api/audit-log-event-types#changeinterfacecollaboratorpermission)
    
*   [Change interface invite permission(`changeInterfaceInvitePermission`)](https://airtable.com/developers/web/api/audit-log-event-types#changeinterfaceinvitepermission)
    
*   [Uninvite interface collaborator(`uninviteInterfaceCollaborator`)](https://airtable.com/developers/web/api/audit-log-event-types#uninviteinterfacecollaborator)
    
*   [Remove interface collaborator(`removeInterfaceCollaborator`)](https://airtable.com/developers/web/api/audit-log-event-types#removeinterfacecollaborator)
    
*   [Resend interface invite(`resendInterfaceInvite`)](https://airtable.com/developers/web/api/audit-log-event-types#resendinterfaceinvite)
    
*   [Change interface organization-wide sharing permission(`configureInterfaceOrgWideSharing`)](https://airtable.com/developers/web/api/audit-log-event-types#configureinterfaceorgwidesharing)
    
*   [Create portal(`createPortal`)](https://airtable.com/developers/web/api/audit-log-event-types#createportal)
    
*   [Delete portal(`deletePortal`)](https://airtable.com/developers/web/api/audit-log-event-types#deleteportal)
    
*   [Invite interface guest user(`invitePortalCollaborator`)](https://airtable.com/developers/web/api/audit-log-event-types#inviteportalcollaborator)
    
*   [Add interface guest user(`addPortalCollaborator`)](https://airtable.com/developers/web/api/audit-log-event-types#addportalcollaborator)
    
*   [Uninvite interface guest user(`uninvitePortalCollaborator`)](https://airtable.com/developers/web/api/audit-log-event-types#uninviteportalcollaborator)
    
*   [Change interface guest user permission(`changePortalCollaboratorPermission`)](https://airtable.com/developers/web/api/audit-log-event-types#changeportalcollaboratorpermission)
    
*   [Change portal interface invite permission(`changePortalInvitePermission`)](https://airtable.com/developers/web/api/audit-log-event-types#changeportalinvitepermission)
    
*   [Remove interface guest user(`removePortalCollaborator`)](https://airtable.com/developers/web/api/audit-log-event-types#removeportalcollaborator)
    
*   [Download CSV(`downloadCSV`)](https://airtable.com/developers/web/api/audit-log-event-types#downloadcsv)
    
*   [Moderate AI content(`moderateAiContent`)](https://airtable.com/developers/web/api/audit-log-event-types#moderateaicontent)
    
*   [Update Automation Subscribers(`updateAutomationSubscribers`)](https://airtable.com/developers/web/api/audit-log-event-types#updateautomationsubscribers)
    

Create base

**Event type:**`createBase`

A new base was created.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the created base |

### Payload Version

1.0

Delete base

**Event type:**`deleteBase`

A base was deleted.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the deleted base |

### Payload Version

1.0

Move base

**Event type:**`moveBase`

A base was moved.

`object`

`name`

`string`

The name of the moved base

`previous`

`object`

The previous workspace and enterprise account.

`enterpriseAccount`

`optional<``object``>`

The enterprise account from which the base was moved. If blank, the base was moved from a non-enterprise workspace.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`workspace`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `optional<``string``>`<br><br>The name of the workspace. This is optional if a base is moved across differing enterprises to avoid leaking a workspace name (customer sensitive data) to another enterprise. |

`current`

`object`

The current workspace and enterprise account.

`enterpriseAccount`

`optional<``object``>`

The enterprise account into which the base was moved. If blank, the base was moved into a non-enterprise workspace.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`workspace`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `optional<``string``>`<br><br>The name of the workspace. This is optional if a base is moved across differing enterprises to avoid leaking a workspace name (customer sensitive data) to another enterprise. |

### Payload Version

1.0

Duplicate base

**Event type:**`duplicateBase`

A base was duplicated.

`object`

`previous`

`object`

The previous workspace and enterprise account.

`enterpriseAccount`

`optional<``object``>`

The enterprise account from which the base was duplicated. If blank, the base was duplicated from a non-enterprise workspace.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`application`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `optional<``string``>`<br><br>The name of the base that was duplicated. This is optional if a base is duplicated across differing enterprises to avoid leaking an application name (customer sensitive data) to another enterprise. |

`workspace`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `optional<``string``>`<br><br>The name of the workspace. This is optional if a base is duplicated across differing enterprises to avoid leaking a workspace name (customer sensitive data) to another enterprise. |

`current`

`object`

The current workspace and enterprise account.

`enterpriseAccount`

`optional<``object``>`

The enterprise account into which the base was duplicated. If blank, the base was duplicated into a non-enterprise workspace.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`application`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `optional<``string``>`<br><br>The name of the newly-duplicated base. This is optional if a base is duplicated across differing enterprises to avoid leaking an application name (customer sensitive data) to another enterprise. |

`workspace`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `optional<``string``>`<br><br>The name of the workspace. This is optional if a base is duplicated across differing enterprises to avoid leaking an application name (customer sensitive data) to another enterprise. |

### Payload Version

1.0

View base

**Event type:**`viewBase`

A base was viewed. This includes viewing a base, table, view or record. This event is emitted at most once every 5 minutes per user/base combination.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the viewed base |

### Payload Version

1.0

Restore base from snapshot

**Event type:**`restoreBaseFromSnapshot`

A base was restored from a snapshot.

`object`

`id`

`string`

The new ID of the restored base.

`name`

`string`

The new name of the restored base

`workspace`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the workspace at time of restore |

### Payload Version

1.0

Restore base from trash

**Event type:**`restoreBaseFromTrash`

A base was restored from the trash.

`object`

`name`

`string`

The name of the restored base

`workspace`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the workspace at time of restore |

### Payload Version

1.0

Apply changes from sandbox

**Event type:**`applyChangesFromSandbox`

Changes from a sandbox base were applied to the main base.

`object`

`sandboxApplication`

`object`

The sandbox base from which the applied changes were generated from

|     |     |
| --- | --- |
| <br>`id` | `string` |

### Payload Version

1.0

Download attachment

**Event type:**`downloadAttachment`

An attachment download was initiated.

`object`

`type`

`string`

The attachment file type.

`filename`

`string`

`table`

`object`

Table from which the attachment was downloaded.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the table. |

`field`

`object`

Field from which the attachment was downloaded.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the field. |

`record`

`object`

Record from which the attachment was downloaded.

|     |     |
| --- | --- |
| <br>`id` | `string` |

### Payload Version

1.0

Rename base

**Event type:**`updateBaseName`

A base was renamed.

`object`

`previous`

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the base prior to being renamed |

`current`

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The new name of the base |

### Payload Version

1.0

Update base guide text

**Event type:**`updateBaseGuideText`

Base guide text for a base was changed.

`object`

`previous`

`object`

|     |     |
| --- | --- |
| <br>`guideText` | `string`<br><br>The content of the base guide text before being updated |

`current`

`object`

|     |     |
| --- | --- |
| <br>`guideText` | `string`<br><br>The content of the base guide text after being updated |

### Payload Version

1.0

Create a base invite link

**Event type:**`addBaseInviteLink`

An invite link for a base was created.

`object`

`url`

`string`

The URL of the invite link

`permissionLevel`

`"read" | "comment" | "edit" | "create"`

The permission level a user would be granted when accepting this invite

`restrictedToEmailDomains`

`array of strings`

The email domain restrictions assigned to the invite link. When `null`, no domain restrictions are assigned to the invite link,but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand invite link accessibility.

`effectiveEmailDomainAllowList`

`array of strings`

The email domains effectively allowed to access this invite link. This factors in the invite link's email domain restrictions and all enterprise-wide invite link restrictions. A viewer must have an account associated with an email domain included in the allow list to accept this invite link. When `null`, any email domain may accept the invite link. If the list is empty, the invite link cannot be used by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide invite restrictions).

`base`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the base at time of invite link creation |

### Payload Version

1.0

Remove a base invite link

**Event type:**`removeBaseInviteLink`

An invite link for a base was removed.

`object`

`url`

`string`

The URL of the invite link

`permissionLevel`

`"read" | "comment" | "edit" | "create"`

The permission level a user would be granted when accepting this invite

`restrictedToEmailDomains`

`array of strings`

The email domain restrictions assigned to the invite link. When `null`, no domain restrictions are assigned to the invite link,but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand invite link accessibility.

`effectiveEmailDomainAllowList`

`array of strings`

The email domains effectively allowed to access this invite link. This factors in the invite link's email domain restrictions and all enterprise-wide invite link restrictions. A viewer must have an account associated with an email domain included in the allow list to accept this invite link. When `null`, any email domain may accept the invite link. If the list is empty, the invite link cannot be used by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide invite restrictions).

`base`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the base at time of invite link removal |

### Payload Version

1.0

Configure base invite link

**Event type:**`configureBaseInviteLink`

A base invite link's configuration was changed.

`object`

`url`

`optional<``string``>`

The URL of the invite link

`permissionLevel`

`optional<``"read" | "comment" | "edit" | "create"``>`

The permission level a user would be granted when accepting this invite

`previous`

`object`

The properties of the invite link configuration before these changes were applied

|     |     |
| --- | --- |
| <br>`url` | `optional<``string``>` |
| <br>`permissionLevel` | `optional<``"read" \| "comment" \| "edit" \| "create"``>` |
| <br>`emailDomain` | `optional<``string``>` |
| <br>`restrictedToEmailDomains` | `optional<``array of strings``>` |
| <br>`effectiveEmailDomainAllowList` | `optional<``array of strings``>` |

`current`

`object`

The properties of the invite link configuration after these changes were applied

|     |     |
| --- | --- |
| <br>`url` | `optional<``string``>` |
| <br>`permissionLevel` | `optional<``"read" \| "comment" \| "edit" \| "create"``>` |
| <br>`emailDomain` | `optional<``string``>` |
| <br>`restrictedToEmailDomains` | `optional<``array of strings``>` |
| <br>`effectiveEmailDomainAllowList` | `optional<``array of strings``>` |

`restrictedToEmailDomains`

`optional<``array of strings``>`

The email domain restrictions assigned to the invite link. When `null`, no domain restrictions are assigned to the invite link,but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand invite link accessibility.

`effectiveEmailDomainAllowList`

`optional<``array of strings``>`

The email domains effectively allowed to access this invite link. This factors in the invite link's email domain restrictions and all enterprise-wide invite link restrictions. A viewer must have an account associated with an email domain included in the allow list to accept this invite link. When `null`, any email domain may accept the invite link. If the list is empty, the invite link cannot be used by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide invite restrictions).

`base`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the invite link's base |

### Payload Version

1.0

Change application AI permissions

**Event type:**`changeBaseAiPermissions`

The AI permissions for an application were changed.

`object`

`previous`

`object`

|     |     |
| --- | --- |
| <br>`isAiAssistantEnabled` | `boolean`<br><br>Whether AI assistant was enabled before this AI permissions update |
| <br>`isAiAssistantAvailableInInterfaces` | `boolean`<br><br>Whether AI assistant was available in interfaces before this AI permissions update. Ignored if `isAiAssistantEnabled` is `false`. |

`current`

`object`

|     |     |
| --- | --- |
| <br>`isAiAssistantEnabled` | `boolean`<br><br>Whether AI assistant was enabled after this AI permissions update |
| <br>`isAiAssistantAvailableInInterfaces` | `boolean`<br><br>Whether AI assistant was available in interfaces after this AI permissions update. Ignored if `isAiAssistantEnabled` is `false`. |

### Payload Version

2.0

Create sandbox base

**Event type:**`createSandboxBase`

A sandbox base was created from a production base.

`object`

`name`

`string`

The name of the created sandbox base

`productionApplication`

`object`

The production base from which the sandbox was created

|     |     |
| --- | --- |
| <br>`id` | `string` |

### Payload Version

1.0

Invite base collaborator

**Event type:**`inviteBaseCollaborator`

A user was invited to collaborate on a base.

`object`

`name`

`string`

The name of the base to which this user was invited

`user`

`object`

The user invited as a collaborator.

|     |     |
| --- | --- |
| <br>`id` | `optional<``string``>`<br><br>Present when the invited user is already an Airtable user |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create"`<br><br>The permission level at which the user was invited as a collaborator. |
| <br>`name` | `optional<``string``>`<br><br>Present when the invited user is already an Airtable user |
| <br>`email` | `string` |

### Payload Version

1.0

Add base collaborator

**Event type:**`addBaseCollaborator`

A collaborator was added to a base.

`any of the below objects`

`type`

`"user"`

The type of collaborator added to the base

`name`

`string`

The name of the base to which this user was added

`user`

`object`

The user added as a collaborator.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create"`<br><br>The permission level at which the user was added as a collaborator. |
| <br>`name` | `string` |
| <br>`email` | `string` |

`type`

`"group"`

The type of collaborator added to the base

`name`

`string`

The name of the base to which this group was added

`group`

`object`

The group added as a collaborator.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create"`<br><br>The permission level at which the group was added as a collaborator. |
| <br>`name` | `string` |

### Payload Version

1.0

Change base collaborator permission

**Event type:**`changeBaseCollaboratorPermission`

The direct permission of a collaborator on a base was changed.

`any of the below objects`

`type`

`"user"`

The type of collaborator whose permission on the base was changed.

`name`

`string`

The name of the base on which this user's permission was changed.

`user`

`object`

The user whose direct permission on the base was changed.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`email` | `string` |

`previous`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create"`<br><br>The direct base permission level of the user prior to this change. |

`current`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create"`<br><br>The new direct base permission level of the user. |

`type`

`"group"`

The type of collaborator whose permission on the base was changed.

`name`

`string`

The name of the base on which this group's permission was changed.

`group`

`object`

The group whose direct permission on the base was changed.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`previous`

`object`

`group`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create"`<br><br>The direct base permission level of the group prior to this change. |

`current`

`object`

`group`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create"`<br><br>The new direct base permission level of the group. |

### Payload Version

1.0

Change base invite permission

**Event type:**`changeBaseInvitePermission`

The permission a user will receive on a base when they accept the associated invite was changed.

`object`

`name`

`string`

The name of the base on which this invite's permission was changed.

`user`

`object`

The user whose invited permission on the base was changed.

|     |     |
| --- | --- |
| <br>`id` | `optional<``string``>`<br><br>Present when the invited user is already an Airtable user |
| <br>`name` | `optional<``string``>`<br><br>Present when the invited user is already an Airtable user |
| <br>`email` | `string` |

`previous`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create"`<br><br>The direct permission level the invited user would have received on accepting the base invite prior to this change. |

`current`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create"`<br><br>The new direct permission level the invited user will receive on accepting the base invite. |

### Payload Version

1.0

Uninvite base collaborator

**Event type:**`uninviteBaseCollaborator`

A user was uninvited from a base.

`object`

`name`

`string`

The name of the base from which this user was uninvited

`user`

`object`

The user uninvited from the base.

|     |     |
| --- | --- |
| <br>`id` | `optional<``string``>`<br><br>Present when the uninvited user is already an Airtable user |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create"`<br><br>The permission level of the user when uninvited from the base. |
| <br>`name` | `optional<``string``>`<br><br>Present when the uninvited user is already an Airtable user |
| <br>`email` | `string` |

### Payload Version

1.0

Remove base collaborator

**Event type:**`removeBaseCollaborator`

A collaborator was removed from a base.

`any of the below objects`

`type`

`"user"`

The type of collaborator removed from the base

`name`

`string`

The name of the base from which this user was removed

`user`

`object`

The user removed from the base.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create"`<br><br>The permission level of the user when removed from the base. |
| <br>`name` | `string` |
| <br>`email` | `string` |

`type`

`"group"`

The type of collaborator removed from the base

`name`

`string`

The name of the base from which this group was removed

`group`

`object`

The group removed from the base.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create"`<br><br>The permission level of the group when removed from the base. |
| <br>`name` | `string` |

### Payload Version

1.0

Resend base invite

**Event type:**`resendBaseInvite`

An invitation to join a base was resent.

`object`

`email`

`string`

The recipient email of the resent invite.

`originatingUser`

`object`

The user who resent the invite.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `string` |

`referrerUser`

`object`

The user who originally sent the invite.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Create group

**Event type:**`createGroup`

A new group was created.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the created group. |

### Payload Version

1.0

Delete group

**Event type:**`deleteGroup`

An existing group was deleted.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the deleted group. |

### Payload Version

1.0

Move group

**Event type:**`moveGroup`

A group was moved between accounts.

`object`

`name`

`string`

The name of the moved group

`previous`

`object`

The enterprise account from which the group was moved

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`current`

`object`

The enterprise account into which the group was moved

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Add member role

**Event type:**`addGroupMember`

A user was added to a group.

`object`

`name`

`string`

The name of the group to which this user was added.

`user`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`role` | `"manager" \| "member"`<br><br>The role of the user within the group. |
| <br>`name` | `string` |
| <br>`email` | `string` |

### Payload Version

1.0

Change group member role

**Event type:**`changeGroupMemberRole`

A user's role within a group was changed.

`object`

`name`

`string`

The name of the group in which the user's role was changed.

`user`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`email` | `string` |

`current`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`role` | `"manager" \| "member"`<br><br>The new role granted to the user. |

`previous`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`role` | `"manager" \| "member"`<br><br>The user's previous role. |

### Payload Version

1.0

Remove group member

**Event type:**`removeGroupMember`

A user was removed from a group.

`object`

`name`

`string`

The name of the group from which this user was removed.

`user`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`role` | `"manager" \| "member"`<br><br>The role of the user within the group at time of removal. |
| <br>`name` | `string` |
| <br>`email` | `string` |

### Payload Version

1.0

Delete group invite

**Event type:**`deleteGroupInvite`

An invitation to join a user group was deleted.

`object`

`email`

`string`

The deleted invite's original recipient's email.

`originatingUser`

`object`

The user who deleted the invite.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `string` |

`referrerUser`

`object`

The user who created the now-deleted invite.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Resend group invite

**Event type:**`resendGroupInvite`

An invitation to join a user group was resent.

`object`

`email`

`string`

The recipient email of the resent invite.

`originatingUser`

`object`

The user who resent the invite.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `string` |

`referrerUser`

`object`

The user who originally sent the invite.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Invite group member

**Event type:**`inviteGroupMember`

A user was invited to join a group.

`object`

`name`

`string`

The name of the group to which the user was invited

`referrerUser`

`object`

The inviting user

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `string` |

`user`

`object`

The invited user

|     |     |
| --- | --- |
| <br>`id` | `optional<``string``>`<br><br>Present when the invited user is already an Airtable user |
| <br>`role` | `"manager" \| "member"`<br><br>The role for which the user was invited to the group |
| <br>`name` | `optional<``string``>`<br><br>Present when the invited user is already an Airtable user |
| <br>`email` | `string` |

### Payload Version

1.0

Create role

**Event type:**`createRole`

A new role was created.

`object`

`name`

`string`

The name of the created role.

`roleType`

`"admin"`

The type of the created role.

`permissionTypes`

`array of the below object`

The permissions of the created role.

|     |     |
| --- | --- |
| <br>`permissionType` | `"adminFullPermissions" \| "adminSettingsIntegrationsManage" \| "adminSettingsDevelopmentManage" \| "adminSettingsBlocksManage" \| "adminSettingsLicenseManage" \| "adminSettingsBrandingManage" \| "adminDataTablesManage" \| "adminUsersInfoRead" \| "adminUsersLicenseManage" \| "adminUsersInviteManage" \| "adminUsersIdentityManage" \| "adminUsersTokensManage" \| "adminUsersMembershipManage" \| "adminUsersCollaborationsManage" \| "adminServiceAccountsManage" \| "adminGroupsInfoRead" \| "adminGroupsManage" \| "adminGroupsMembershipManage" \| "adminGroupsLicenseManage" \| "adminWorkspacesInfoRead" \| "adminApplicationsInfoRead" \| "adminPageBundlesInfoRead" \| "adminAttachmentsUpload"` |

### Payload Version

1.0

Enable share link

**Event type:**`enableShare`

A share link was enabled.

`any of the below objects`

`type`

`"view"`

The type of share

`url`

`string`

The URL of the share link

`shouldAllowCopy`

`boolean`

Whether viewers should be allowed to copy data out of the share

`shouldShowExtensions`

`boolean`

Whether extensions added to this share should be shown

`isPasswordProtected`

`boolean`

Whether access to this share link is password protected

`restrictEmailDomainTo`

`string`

If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility.

`restrictedToEnterpriseMembers`

`boolean`

If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`.

`view`

`object`

The shared view.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`type` | `"form" \| "grid" \| "calendar" \| "gallery" \| "kanban" \| "timeline" \| "block" \| "levels"`<br><br>The type of the view |
| <br>`name` | `string`<br><br>The name of the view |

`table`

`object`

The view's table

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the table |

`effectiveEmailDomainAllowList`

`array of strings`

The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions).

`type`

`"base"`

The type of share

`url`

`string`

The URL of the share link

`shouldAllowCopy`

`boolean`

Whether viewers should be allowed to copy data out of the share

`shouldShowExtensions`

`boolean`

Whether extensions added to this share should be shown

`isPasswordProtected`

`boolean`

Whether access to this share link is password protected

`restrictEmailDomainTo`

`string`

If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility.

`restrictedToEnterpriseMembers`

`boolean`

If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`.

`base`

`object`

The shared base.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the base |

`effectiveEmailDomainAllowList`

`array of strings`

The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions).

`type`

`"extension"`

The type of share

`url`

`string`

The URL of the share link

`shouldAllowCopy`

`boolean`

Whether viewers should be allowed to copy data out of the share

`shouldShowExtensions`

`boolean`

Whether extensions added to this share should be shown

`isPasswordProtected`

`boolean`

Whether access to this share link is password protected

`restrictEmailDomainTo`

`string`

If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility.

`restrictedToEnterpriseMembers`

`boolean`

If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`.

`extension`

`object`

The shared extension.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the extension |

`base`

`object`

The extension's base.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the base |

`effectiveEmailDomainAllowList`

`array of strings`

The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions).

`type`

`"page"`

The type of share

`url`

`string`

The URL of the share link

`shouldAllowCopy`

`boolean`

Whether viewers should be allowed to copy data out of the share

`shouldShowExtensions`

`boolean`

Whether extensions added to this share should be shown

`isPasswordProtected`

`boolean`

Whether access to this share link is password protected

`restrictEmailDomainTo`

`string`

If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility.

`restrictedToEnterpriseMembers`

`boolean`

If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`.

`page`

`object`

The shared page.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `optional<``string``>`<br><br>The name of the page |

`effectiveEmailDomainAllowList`

`array of strings`

The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions).

### Payload Version

1.1

Disable share link

**Event type:**`disableShare`

A share link was disabled.

`any of the below objects`

`type`

`"view"`

The type of share

`url`

`string`

The URL of the share link

`shouldAllowCopy`

`boolean`

Whether viewers should be allowed to copy data out of the share

`shouldShowExtensions`

`boolean`

Whether extensions added to this share should be shown

`isPasswordProtected`

`boolean`

Whether access to this share link is password protected

`restrictEmailDomainTo`

`string`

If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility.

`restrictedToEnterpriseMembers`

`boolean`

If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`.

`view`

`object`

The shared view.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`type` | `"form" \| "grid" \| "calendar" \| "gallery" \| "kanban" \| "timeline" \| "block" \| "levels"`<br><br>The type of the view |
| <br>`name` | `string`<br><br>The name of the view |

`table`

`object`

The view's table

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the table |

`effectiveEmailDomainAllowList`

`array of strings`

The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions).

`type`

`"base"`

The type of share

`url`

`string`

The URL of the share link

`shouldAllowCopy`

`boolean`

Whether viewers should be allowed to copy data out of the share

`shouldShowExtensions`

`boolean`

Whether extensions added to this share should be shown

`isPasswordProtected`

`boolean`

Whether access to this share link is password protected

`restrictEmailDomainTo`

`string`

If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility.

`restrictedToEnterpriseMembers`

`boolean`

If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`.

`base`

`object`

The shared base.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the base |

`effectiveEmailDomainAllowList`

`array of strings`

The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions).

`type`

`"extension"`

The type of share

`url`

`string`

The URL of the share link

`shouldAllowCopy`

`boolean`

Whether viewers should be allowed to copy data out of the share

`shouldShowExtensions`

`boolean`

Whether extensions added to this share should be shown

`isPasswordProtected`

`boolean`

Whether access to this share link is password protected

`restrictEmailDomainTo`

`string`

If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility.

`restrictedToEnterpriseMembers`

`boolean`

If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`.

`extension`

`object`

The shared extension.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the extension |

`base`

`object`

The extension's base.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the base |

`effectiveEmailDomainAllowList`

`array of strings`

The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions).

`type`

`"page"`

The type of share

`url`

`string`

The URL of the share link

`shouldAllowCopy`

`boolean`

Whether viewers should be allowed to copy data out of the share

`shouldShowExtensions`

`boolean`

Whether extensions added to this share should be shown

`isPasswordProtected`

`boolean`

Whether access to this share link is password protected

`restrictEmailDomainTo`

`string`

If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility.

`restrictedToEnterpriseMembers`

`boolean`

If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`.

`page`

`object`

The shared page.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `optional<``string``>`<br><br>The name of the page |

`effectiveEmailDomainAllowList`

`array of strings`

The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions).

### Payload Version

1.1

Configure share link

**Event type:**`configureShare`

A share link's configuration was changed.

`any of the below objects`

`type`

`"view"`

The type of share

`url`

`string`

The URL of the shared view link

`shouldAllowCopy`

`optional<``boolean``>`

Whether viewers should be allowed to copy data out of the share

`shouldShowExtensions`

`optional<``boolean``>`

Whether extensions added to this share should be shown

`isPasswordProtected`

`optional<``boolean``>`

Whether access to this share link is password protected

`restrictEmailDomainTo`

`optional<``string``>`

If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility.

`restrictedToEnterpriseMembers`

`optional<``boolean``>`

If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`.

`view`

`object`

The shared view.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`type` | `"form" \| "grid" \| "calendar" \| "gallery" \| "kanban" \| "timeline" \| "block" \| "levels"`<br><br>The type of the view |
| <br>`name` | `string`<br><br>The name of the view |

`table`

`object`

The view's table

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the table |

`previous`

`object`

The properties of the share configuration before these changes were applied

|     |     |
| --- | --- |
| <br>`shouldAllowCopy` | `optional<``boolean``>`<br><br>Whether viewers should be allowed to copy data out of the share |
| <br>`shouldShowExtensions` | `optional<``boolean``>`<br><br>Whether extensions added to this share should be shown |
| <br>`isPasswordProtected` | `optional<``boolean``>`<br><br>Whether access to this share link is password protected |
| <br>`restrictEmailDomainTo` | `optional<``string``>`<br><br>If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility. |
| <br>`restrictedToEnterpriseMembers` | `optional<``boolean``>`<br><br>If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`. |
| <br>`effectiveEmailDomainAllowList` | `optional<``array of strings``>`<br><br>The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions). |

`current`

`object`

The properties of the share configuration after these changes were applied

|     |     |
| --- | --- |
| <br>`shouldAllowCopy` | `optional<``boolean``>`<br><br>Whether viewers should be allowed to copy data out of the share |
| <br>`shouldShowExtensions` | `optional<``boolean``>`<br><br>Whether extensions added to this share should be shown |
| <br>`isPasswordProtected` | `optional<``boolean``>`<br><br>Whether access to this share link is password protected |
| <br>`restrictEmailDomainTo` | `optional<``string``>`<br><br>If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility. |
| <br>`restrictedToEnterpriseMembers` | `optional<``boolean``>`<br><br>If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`. |
| <br>`effectiveEmailDomainAllowList` | `optional<``array of strings``>`<br><br>The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions). |

`effectiveEmailDomainAllowList`

`optional<``array of strings``>`

The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions).

`type`

`"base"`

The type of share

`url`

`string`

The URL of the shared base link

`shouldAllowCopy`

`optional<``boolean``>`

Whether viewers should be allowed to copy data out of the share

`shouldShowExtensions`

`optional<``boolean``>`

Whether extensions added to this share should be shown

`isPasswordProtected`

`optional<``boolean``>`

Whether access to this share link is password protected

`restrictEmailDomainTo`

`optional<``string``>`

If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility.

`restrictedToEnterpriseMembers`

`optional<``boolean``>`

If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`.

`base`

`object`

The shared base.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the base |

`previous`

`object`

The properties of the share configuration before these changes were applied

|     |     |
| --- | --- |
| <br>`shouldAllowCopy` | `optional<``boolean``>`<br><br>Whether viewers should be allowed to copy data out of the share |
| <br>`shouldShowExtensions` | `optional<``boolean``>`<br><br>Whether extensions added to this share should be shown |
| <br>`isPasswordProtected` | `optional<``boolean``>`<br><br>Whether access to this share link is password protected |
| <br>`restrictEmailDomainTo` | `optional<``string``>`<br><br>If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility. |
| <br>`restrictedToEnterpriseMembers` | `optional<``boolean``>`<br><br>If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`. |
| <br>`effectiveEmailDomainAllowList` | `optional<``array of strings``>`<br><br>The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions). |

`current`

`object`

The properties of the share configuration after these changes were applied

|     |     |
| --- | --- |
| <br>`shouldAllowCopy` | `optional<``boolean``>`<br><br>Whether viewers should be allowed to copy data out of the share |
| <br>`shouldShowExtensions` | `optional<``boolean``>`<br><br>Whether extensions added to this share should be shown |
| <br>`isPasswordProtected` | `optional<``boolean``>`<br><br>Whether access to this share link is password protected |
| <br>`restrictEmailDomainTo` | `optional<``string``>`<br><br>If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility. |
| <br>`restrictedToEnterpriseMembers` | `optional<``boolean``>`<br><br>If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`. |
| <br>`effectiveEmailDomainAllowList` | `optional<``array of strings``>`<br><br>The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions). |

`effectiveEmailDomainAllowList`

`optional<``array of strings``>`

The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions).

`type`

`"extension"`

The type of share

`url`

`string`

The URL of the shared extension link

`shouldAllowCopy`

`optional<``boolean``>`

Whether viewers should be allowed to copy data out of the share

`shouldShowExtensions`

`optional<``boolean``>`

Whether extensions added to this share should be shown

`isPasswordProtected`

`optional<``boolean``>`

Whether access to this share link is password protected

`restrictEmailDomainTo`

`optional<``string``>`

If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility.

`restrictedToEnterpriseMembers`

`optional<``boolean``>`

If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`.

`extension`

`object`

The shared extension.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the extension |

`base`

`object`

The extension's base.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the base |

`previous`

`object`

The properties of the share configuration before these changes were applied

|     |     |
| --- | --- |
| <br>`shouldAllowCopy` | `optional<``boolean``>`<br><br>Whether viewers should be allowed to copy data out of the share |
| <br>`shouldShowExtensions` | `optional<``boolean``>`<br><br>Whether extensions added to this share should be shown |
| <br>`isPasswordProtected` | `optional<``boolean``>`<br><br>Whether access to this share link is password protected |
| <br>`restrictEmailDomainTo` | `optional<``string``>`<br><br>If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility. |
| <br>`restrictedToEnterpriseMembers` | `optional<``boolean``>`<br><br>If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`. |
| <br>`effectiveEmailDomainAllowList` | `optional<``array of strings``>`<br><br>The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions). |

`current`

`object`

The properties of the share configuration after these changes were applied

|     |     |
| --- | --- |
| <br>`shouldAllowCopy` | `optional<``boolean``>`<br><br>Whether viewers should be allowed to copy data out of the share |
| <br>`shouldShowExtensions` | `optional<``boolean``>`<br><br>Whether extensions added to this share should be shown |
| <br>`isPasswordProtected` | `optional<``boolean``>`<br><br>Whether access to this share link is password protected |
| <br>`restrictEmailDomainTo` | `optional<``string``>`<br><br>If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility. |
| <br>`restrictedToEnterpriseMembers` | `optional<``boolean``>`<br><br>If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`. |
| <br>`effectiveEmailDomainAllowList` | `optional<``array of strings``>`<br><br>The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions). |

`effectiveEmailDomainAllowList`

`optional<``array of strings``>`

The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions).

`type`

`"page"`

The type of share

`url`

`string`

The URL of the shared page link

`shouldAllowCopy`

`optional<``boolean``>`

Whether viewers should be allowed to copy data out of the share

`shouldShowExtensions`

`optional<``boolean``>`

Whether extensions added to this share should be shown

`isPasswordProtected`

`optional<``boolean``>`

Whether access to this share link is password protected

`restrictEmailDomainTo`

`optional<``string``>`

If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility.

`restrictedToEnterpriseMembers`

`optional<``boolean``>`

If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`.

`page`

`object`

The shared page.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `optional<``string``>`<br><br>The name of the page |

`previous`

`object`

The properties of the share configuration before these changes were applied

|     |     |
| --- | --- |
| <br>`shouldAllowCopy` | `optional<``boolean``>`<br><br>Whether viewers should be allowed to copy data out of the share |
| <br>`shouldShowExtensions` | `optional<``boolean``>`<br><br>Whether extensions added to this share should be shown |
| <br>`isPasswordProtected` | `optional<``boolean``>`<br><br>Whether access to this share link is password protected |
| <br>`restrictEmailDomainTo` | `optional<``string``>`<br><br>If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility. |
| <br>`restrictedToEnterpriseMembers` | `optional<``boolean``>`<br><br>If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`. |
| <br>`effectiveEmailDomainAllowList` | `optional<``array of strings``>`<br><br>The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions). |

`current`

`object`

The properties of the share configuration after these changes were applied

|     |     |
| --- | --- |
| <br>`shouldAllowCopy` | `optional<``boolean``>`<br><br>Whether viewers should be allowed to copy data out of the share |
| <br>`shouldShowExtensions` | `optional<``boolean``>`<br><br>Whether extensions added to this share should be shown |
| <br>`isPasswordProtected` | `optional<``boolean``>`<br><br>Whether access to this share link is password protected |
| <br>`restrictEmailDomainTo` | `optional<``string``>`<br><br>If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility. |
| <br>`restrictedToEnterpriseMembers` | `optional<``boolean``>`<br><br>If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`. |
| <br>`effectiveEmailDomainAllowList` | `optional<``array of strings``>`<br><br>The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions). |

`effectiveEmailDomainAllowList`

`optional<``array of strings``>`

The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions).

### Payload Version

1.1

Regenerate share link

**Event type:**`regenerateShare`

A share link was regenerated.

`any of the below objects`

`type`

`"view"`

The type of share

`view`

`object`

The shared view.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`type` | `"form" \| "grid" \| "calendar" \| "gallery" \| "kanban" \| "timeline" \| "block" \| "levels"`<br><br>The type of the view |
| <br>`name` | `string`<br><br>The name of the view |

`table`

`object`

The view's table

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the table |

`previous`

`object`

The old share and its properties

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`url` | `string`<br><br>The URL of the share link |
| <br>`shouldAllowCopy` | `boolean`<br><br>Whether viewers should be allowed to copy data out of the share |
| <br>`shouldShowExtensions` | `boolean`<br><br>Whether extensions added to this share should be shown |
| <br>`isPasswordProtected` | `boolean`<br><br>Whether access to this share link is password protected |
| <br>`restrictEmailDomainTo` | `string`<br><br>If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility. |
| <br>`restrictedToEnterpriseMembers` | `boolean`<br><br>If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`. |
| <br>`effectiveEmailDomainAllowList` | `array of strings`<br><br>The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions). |

`current`

`object`

The new, regenerated share link

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`url` | `string`<br><br>The URL of the share link |
| <br>`shouldAllowCopy` | `boolean`<br><br>Whether viewers should be allowed to copy data out of the share |
| <br>`shouldShowExtensions` | `boolean`<br><br>Whether extensions added to this share should be shown |
| <br>`isPasswordProtected` | `boolean`<br><br>Whether access to this share link is password protected |
| <br>`restrictEmailDomainTo` | `string`<br><br>If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility. |
| <br>`restrictedToEnterpriseMembers` | `boolean`<br><br>If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`. |
| <br>`effectiveEmailDomainAllowList` | `array of strings`<br><br>The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions). |

`type`

`"base"`

The type of share

`base`

`object`

The shared base.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the base |

`previous`

`object`

The old share and its properties

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`url` | `string`<br><br>The URL of the share link |
| <br>`shouldAllowCopy` | `boolean`<br><br>Whether viewers should be allowed to copy data out of the share |
| <br>`shouldShowExtensions` | `boolean`<br><br>Whether extensions added to this share should be shown |
| <br>`isPasswordProtected` | `boolean`<br><br>Whether access to this share link is password protected |
| <br>`restrictEmailDomainTo` | `string`<br><br>If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility. |
| <br>`restrictedToEnterpriseMembers` | `boolean`<br><br>If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`. |
| <br>`effectiveEmailDomainAllowList` | `array of strings`<br><br>The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions). |

`current`

`object`

The new, regenerated share link

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`url` | `string`<br><br>The URL of the share link |
| <br>`shouldAllowCopy` | `boolean`<br><br>Whether viewers should be allowed to copy data out of the share |
| <br>`shouldShowExtensions` | `boolean`<br><br>Whether extensions added to this share should be shown |
| <br>`isPasswordProtected` | `boolean`<br><br>Whether access to this share link is password protected |
| <br>`restrictEmailDomainTo` | `string`<br><br>If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility. |
| <br>`restrictedToEnterpriseMembers` | `boolean`<br><br>If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`. |
| <br>`effectiveEmailDomainAllowList` | `array of strings`<br><br>The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions). |

`type`

`"extension"`

The type of share

`extension`

`object`

The shared extension.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the extension |

`base`

`object`

The extension's base.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the base |

`previous`

`object`

The old share and its properties

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`url` | `string`<br><br>The URL of the share link |
| <br>`shouldAllowCopy` | `boolean`<br><br>Whether viewers should be allowed to copy data out of the share |
| <br>`shouldShowExtensions` | `boolean`<br><br>Whether extensions added to this share should be shown |
| <br>`isPasswordProtected` | `boolean`<br><br>Whether access to this share link is password protected |
| <br>`restrictEmailDomainTo` | `string`<br><br>If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility. |
| <br>`restrictedToEnterpriseMembers` | `boolean`<br><br>If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`. |
| <br>`effectiveEmailDomainAllowList` | `array of strings`<br><br>The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions). |

`current`

`object`

The new, regenerated share link

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`url` | `string`<br><br>The URL of the share link |
| <br>`shouldAllowCopy` | `boolean`<br><br>Whether viewers should be allowed to copy data out of the share |
| <br>`shouldShowExtensions` | `boolean`<br><br>Whether extensions added to this share should be shown |
| <br>`isPasswordProtected` | `boolean`<br><br>Whether access to this share link is password protected |
| <br>`restrictEmailDomainTo` | `string`<br><br>If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility. |
| <br>`restrictedToEnterpriseMembers` | `boolean`<br><br>If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`. |
| <br>`effectiveEmailDomainAllowList` | `array of strings`<br><br>The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions). |

`type`

`"page"`

The type of share

`page`

`object`

The shared page.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `optional<``string``>`<br><br>The name of the page |

`previous`

`object`

The old share and its properties

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`url` | `string`<br><br>The URL of the share link |
| <br>`shouldAllowCopy` | `boolean`<br><br>Whether viewers should be allowed to copy data out of the share |
| <br>`shouldShowExtensions` | `boolean`<br><br>Whether extensions added to this share should be shown |
| <br>`isPasswordProtected` | `boolean`<br><br>Whether access to this share link is password protected |
| <br>`restrictEmailDomainTo` | `string`<br><br>If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility. |
| <br>`restrictedToEnterpriseMembers` | `boolean`<br><br>If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`. |
| <br>`effectiveEmailDomainAllowList` | `array of strings`<br><br>The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions). |

`current`

`object`

The new, regenerated share link

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`url` | `string`<br><br>The URL of the share link |
| <br>`shouldAllowCopy` | `boolean`<br><br>Whether viewers should be allowed to copy data out of the share |
| <br>`shouldShowExtensions` | `boolean`<br><br>Whether extensions added to this share should be shown |
| <br>`isPasswordProtected` | `boolean`<br><br>Whether access to this share link is password protected |
| <br>`restrictEmailDomainTo` | `string`<br><br>If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility. |
| <br>`restrictedToEnterpriseMembers` | `boolean`<br><br>If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`. |
| <br>`effectiveEmailDomainAllowList` | `array of strings`<br><br>The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions). |

### Payload Version

1.1

View share

**Event type:**`viewShare`

A share was viewed. This event is emitted at most once every 5 minutes per user/view combination. Events are emitted for logged-in and logged-out users.

`any of the below objects`

`type`

`"view"`

The type of share

`url`

`string`

The URL of the share link

`shouldAllowCopy`

`boolean`

Whether viewers should be allowed to copy data out of the share

`shouldShowExtensions`

`boolean`

Whether extensions added to this share should be shown

`isPasswordProtected`

`boolean`

Whether access to this share link is password protected

`restrictEmailDomainTo`

`string`

If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility.

`restrictedToEnterpriseMembers`

`boolean`

If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`.

`view`

`object`

The shared view.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`type` | `"form" \| "grid" \| "calendar" \| "gallery" \| "kanban" \| "timeline" \| "block" \| "levels"`<br><br>The type of the view |
| <br>`name` | `string`<br><br>The name of the view |

`table`

`object`

The view's table

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the table |

`effectiveEmailDomainAllowList`

`array of strings`

The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions).

`type`

`"base"`

The type of share

`url`

`string`

The URL of the share link

`shouldAllowCopy`

`boolean`

Whether viewers should be allowed to copy data out of the share

`shouldShowExtensions`

`boolean`

Whether extensions added to this share should be shown

`isPasswordProtected`

`boolean`

Whether access to this share link is password protected

`restrictEmailDomainTo`

`string`

If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility.

`restrictedToEnterpriseMembers`

`boolean`

If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`.

`base`

`object`

The shared base.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the base |

`effectiveEmailDomainAllowList`

`array of strings`

The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions).

`type`

`"extension"`

The type of share

`url`

`string`

The URL of the share link

`shouldAllowCopy`

`boolean`

Whether viewers should be allowed to copy data out of the share

`shouldShowExtensions`

`boolean`

Whether extensions added to this share should be shown

`isPasswordProtected`

`boolean`

Whether access to this share link is password protected

`restrictEmailDomainTo`

`string`

If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility.

`restrictedToEnterpriseMembers`

`boolean`

If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`.

`extension`

`object`

The shared extension.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the extension |

`base`

`object`

The extension's base.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the base |

`effectiveEmailDomainAllowList`

`array of strings`

The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions).

`type`

`"page"`

The type of share

`url`

`string`

The URL of the share link

`shouldAllowCopy`

`boolean`

Whether viewers should be allowed to copy data out of the share

`shouldShowExtensions`

`boolean`

Whether extensions added to this share should be shown

`isPasswordProtected`

`boolean`

Whether access to this share link is password protected

`restrictEmailDomainTo`

`string`

If non-empty, the email domain restriction assigned to the share. If empty, no domain restrictions are assigned to the share, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand share accessibility.

`restrictedToEnterpriseMembers`

`boolean`

If true, this share is only accessible by members of the enterprise account. This works in conjunction with `effectiveEmailDomainAllowList`.

`page`

`object`

The shared page.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `optional<``string``>`<br><br>The name of the page |

`effectiveEmailDomainAllowList`

`array of strings`

The email domains effectively allowed to access this share link. This factors in the share link's email domain restrictions and all enterprise-wide share link restrictions. A viewer must have an account associated with an email domain included in the allow list to access this share link. When `null`, any email domain may access the share link. If the list is empty, the share link cannot be viewed by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide sharing restrictions).

### Payload Version

1.1

Login user

**Event type:**`loginUser`

A user logged in.

`object`

|     |     |
| --- | --- |
| <br>`method` | `optional<``"apple" \| "google" \| "openai" \| "password" \| "sso" \| "mobileLink" \| "desktopLink" \| "emailLink"``>`<br><br>The login method. |

### Payload Version

1.0

Claim user

**Event type:**`claimUser`

A user was claimed (to be managed) by this enterprise account.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string` |
| <br>`email` | `string` |

### Payload Version

1.0

Unclaim user

**Event type:**`unclaimUser`

A user was unclaimed (not to be managed) by this enterprise account.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string` |
| <br>`email` | `string` |

### Payload Version

1.0

Create user

**Event type:**`createUser`

A user was created through SCIM.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string` |
| <br>`email` | `string` |

### Payload Version

1.0

Delete user

**Event type:**`deleteUser`

A user was deleted.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string` |
| <br>`email` | `string` |

### Payload Version

1.0

Provision user

**Event type:**`provisionUser`

An administered user was provisioned.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string` |
| <br>`email` | `string` |

### Payload Version

1.0

Deactivate user

**Event type:**`deactivateUser`

An administered user was deactivated.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string` |
| <br>`email` | `string` |

### Payload Version

1.0

Update Email

**Event type:**`updateUserEmail`

A user changed their email. Includes optional SSO context when the change was triggered by SSO login.

`object`

`ssoIdentityProviderId`

`optional<``string``>`

The SSO identity provider that triggered this email change, if applicable

`ssoNameId`

`optional<``string``>`

The SSO NameID of the user whose email was changed, if applicable

`previous`

`object`

|     |     |
| --- | --- |
| <br>`email` | `string`<br><br>The previous email of the user |

`current`

`object`

|     |     |
| --- | --- |
| <br>`email` | `string`<br><br>The new email of the user |

### Payload Version

1.1

Change password

**Event type:**`changePassword`

A user changed their password.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string` |
| <br>`email` | `string` |

### Payload Version

1.0

Update profile picture

**Event type:**`updateUserProfilePicture`

A user updated their profile picture.

`object`

`name`

`string`

`email`

`string`

`previous`

`object`

|     |     |
| --- | --- |
| <br>`profilePictureUrl` | `string` |

`current`

`object`

|     |     |
| --- | --- |
| <br>`profilePictureUrl` | `string` |

### Payload Version

1.0

User assigned license

**Event type:**`userAssignedLicense`

A user was assigned a license by an admin, either directly or via membership in a license assigned user group.

`object`

|     |     |
| --- | --- |
| <br>`license` | `"" \| "editor" \| "portalEditor" \| "contributor" \| "builder" \| "viewer" \| "viewerRestricted" \| "none"` |
| <br>`reason` | `string` |
| <br>`userGroupId` | `optional<``string``>` |

### Payload Version

2.0

User assigned global Hub license

**Event type:**`userAssignedGridGlobalLicense`

A user was assigned a global Hub license by a super admin, impacting all org units where the user has a license.

`object`

|     |     |
| --- | --- |
| <br>`license` | `"editor" \| "contributor" \| "builder" \| "portalEditor" \| "viewer" \| "viewerRestricted"` |
| <br>`reason` | `"adminAssigned" \| "acquiredPermissionToWorkspace" \| "acquiredPermissionToBase" \| "acquiredPermissionToInterface" \| "upgradedBasedOnPageBundleAction" \| "upgradedBasedOnApplicationAction" \| "upgradedBasedOnWorkspaceAction" \| "initialEmptyLicenseAssignedForExistingSkpBeforeAutoUpgrade" \| "basedOnPermissionHeldWhenInitialLicenseWasAssigned" \| "initialEmptyLicenseAssignedForExistingEditorLicenseModelBeforeAutoUpgrade" \| "consolidatedToEditorLicenseFromBuilderContributor"` |
| <br>`enterpriseAccountIdsAffected` | `array of strings` |

### Payload Version

1.1

Create service account

**Event type:**`createServiceAccount`

A service account was created.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string` |
| <br>`email` | `string` |

### Payload Version

1.0

Delete service account

**Event type:**`deleteServiceAccount`

A service account was deleted.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string` |
| <br>`email` | `string` |

### Payload Version

1.0

Move service account

**Event type:**`moveServiceAccount`

A service account was moved between accounts.

`object`

`name`

`string`

The name of the moved service account

`email`

`string`

The email of the moved service account

`previous`

`object`

The enterprise account from which the service account was moved

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`current`

`object`

The enterprise account into which the service account was moved

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Accept terms of use

**Event type:**`acceptTermsOfUse`

A user accepted an enterprise account's terms of use.

`object``An empty object`

### Payload Version

1.0

Link SSO identity

**Event type:**`linkSsoIdentity`

An SSO identity was linked to a user during SSO login or SCIM provisioning.

`object`

|     |     |
| --- | --- |
| <br>`ssoNameId` | `string`<br><br>The NameID value from the SAML assertion |
| <br>`ssoIdentityProviderId` | `string`<br><br>The SSO identity provider the user was linked to |

### Payload Version

1.0

Update SSO identity

**Event type:**`updateSsoIdentity`

A user's SSO identity provider and/or NameID was updated via SCIM. Emitted when the Airtable SCIM extension re-routes a user to a different IdP.

`object`

`previous`

`object`

|     |     |
| --- | --- |
| <br>`ssoIdentityProviderId` | `string`<br><br>The previous SSO identity provider authenticating the user |
| <br>`ssoNameId` | `string`<br><br>The previous NameID value |

`current`

`object`

|     |     |
| --- | --- |
| <br>`ssoIdentityProviderId` | `string`<br><br>The new SSO identity provider authenticating the user |
| <br>`ssoNameId` | `string`<br><br>The new NameID value |

### Payload Version

1.1

Create SSO external user

**Event type:**`createSsoExternalUser`

An SSO-only external user account was created during SSO login when the IdP asserted an email on a domain not verified by the enterprise. The account is created in an email-unverified state; sign-in only completes after the user clicks the verification link.

`object`

|     |     |
| --- | --- |
| <br>`email` | `string`<br><br>The created user's email address as asserted by the IdP. |
| <br>`ssoIdentityProviderId` | `string`<br><br>The SSO identity provider that asserted the email and triggered external user creation. |
| <br>`ssoNameId` | `string`<br><br>The NameID value from the SAML assertion. May differ from the email when the IdP asserts a non-email NameID. |

### Payload Version

1.0

Add two-factor authentication strategy

**Event type:**`addTwoFactorAuthenticationStrategy`

A user added a new two-factor authentication strategy to their account.

`object`

`type`

`"totp" | "sms" | "phoneCall"`

`user`

`object`

The user who added the two-factor authentication strategy to their account.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Remove two-factor authentication strategy

**Event type:**`removeTwoFactorAuthenticationStrategy`

A user removed a two-factor authentication strategy from their account.

`object`

`type`

`"totp" | "sms" | "phoneCall"`

`user`

`object`

The user who removed the two-factor authentication strategy from their account.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Set default two-factor authentication strategy

**Event type:**`setDefaultTwoFactorAuthenticationStrategy`

A user chose a default two-factor authentication strategy.

`object`

`type`

`"totp" | "sms" | "phoneCall"`

`user`

`object`

The user who chose a default two-factor authentication strategy for their account.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Regenerate two-factor authentication backup codes

**Event type:**`regenerateTwoFactorAuthenticationBackupCodes`

A user regenerated their two-factor authentication backup codes.

`object`

`user`

`object`

The user who regenerated their two-factor authentication backup codes.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Disable two-factor authentication

**Event type:**`disableTwoFactorAuthentication`

A user completely disabled two-factor authentication for their account.

`object`

`user`

`object`

The user who disabled two-factor authentication for their account.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Create OAuth access token

**Event type:**`createOauthAccessToken`

A user authorized an OAuth integration, granting the integration an API access token.

`object`

`scopes`

`array of strings`

The actions the token is allowed to perform (only if the user also has the permission to perform them).

`oauthIntegration`

`object`

|     |     |
| --- | --- |
| <br>`clientId` | `string`<br><br>Unique identifier of the OAuth integration |
| <br>`name` | `string` |

### Payload Version

1.0

Refresh OAuth access token

**Event type:**`refreshOauthAccessToken`

An OAuth integration previously authorized by a user refreshed their access tokens, renewing their API access.

`object`

`oauthIntegration`

`object`

|     |     |
| --- | --- |
| <br>`clientId` | `string`<br><br>Unique identifier of the OAuth integration |
| <br>`name` | `string` |

`previous`

`object`

|     |     |
| --- | --- |
| <br>`scopes` | `array of strings`<br><br>The actions the token could perform before refresh. |

`current`

`object`

|     |     |
| --- | --- |
| <br>`scopes` | `array of strings`<br><br>The actions the token can perform after refresh. Equal to or a subset of the previous scopes. |

### Payload Version

1.0

Create sync integration source

**Event type:**`createSyncIntegrationSource`

A user connected a sync integration source (e.g., Salesforce, Jira, Google Sheets) via OAuth.

`object`

`type`

`string`

The type of integration (e.g., SALESFORCE, ATLASSIAN_JIRA, GOOGLE_SHEETS)

`name`

`optional<``string``>`

The user-friendly name for this integration

`externalAccountMetadata`

`optional<``object``>`

Full metadata from the external account at the time of the event

### Payload Version

1.0

Rename sync integration source

**Event type:**`renameSyncIntegrationSource`

A user renamed a sync integration source.

`object`

`type`

`string`

The type of integration (e.g., SALESFORCE, ATLASSIAN_JIRA, GOOGLE_SHEETS)

`previous`

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name prior to being renamed |

`current`

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The new name |

### Payload Version

1.0

Reconnect sync integration source

**Event type:**`reconnectSyncIntegrationSource`

A user reconnected a sync integration source via OAuth.

`object`

`type`

`string`

The type of integration (e.g., SALESFORCE, ATLASSIAN_JIRA, GOOGLE_SHEETS)

`name`

`optional<``string``>`

The user-friendly name for this integration

`externalAccountMetadata`

`optional<``object``>`

Full metadata from the external account at the time of the event

### Payload Version

1.0

Delete sync integration source

**Event type:**`deleteSyncIntegrationSource`

A user deleted a sync integration source (e.g., Salesforce, Jira, Google Sheets).

`object`

`type`

`string`

The type of integration (e.g., SALESFORCE, ATLASSIAN_JIRA, GOOGLE_SHEETS)

`name`

`optional<``string``>`

The user-friendly name for this integration

`externalAccountMetadata`

`optional<``object``>`

Full metadata from the external account at the time of the event

### Payload Version

1.0

Connect sync integration to table

**Event type:**`connectSyncIntegrationToTable`

A user connected a sync integration source to a table.

`object`

`type`

`string`

The type of integration (e.g., SALESFORCE, ATLASSIAN_JIRA, GOOGLE_CALENDAR)

`name`

`optional<``string``>`

The user-friendly name for this integration

`table`

`object`

The table to which the sync source was connected

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>The ID of the table to which the sync source was connected |
| <br>`name` | `string`<br><br>The name of the table to which the sync source was connected |

`syncSourceMetadata`

`optional<``object``>`

Metadata about the sync source (e.g., calendarName for Google Calendar, objectName for Salesforce)

### Payload Version

1.0

Change sync integration table source

**Event type:**`changeSyncIntegrationTableSource`

A user changed the sync integration source on a table.

`object`

`type`

`string`

The type of integration (e.g., SALESFORCE, ATLASSIAN_JIRA, GOOGLE_CALENDAR)

`name`

`optional<``string``>`

The user-friendly name for this integration

`table`

`object`

The table whose sync source was changed

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>The ID of the table whose sync source was changed |
| <br>`name` | `string`<br><br>The name of the table whose sync source was changed |

`syncSourceMetadata`

`optional<``object``>`

Metadata about the sync source (e.g., calendarName for Google Calendar, objectName for Salesforce)

### Payload Version

1.0

Disconnect sync integration from table

**Event type:**`disconnectSyncIntegrationFromTable`

A user disconnected a sync integration source from a table.

`object`

`type`

`string`

The type of integration (e.g., SALESFORCE, ATLASSIAN_JIRA, GOOGLE_CALENDAR)

`name`

`optional<``string``>`

The user-friendly name for this integration

`table`

`object`

The table from which the sync source was disconnected

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>The ID of the table from which the sync source was disconnected |
| <br>`name` | `string`<br><br>The name of the table from which the sync source was disconnected |

`syncSourceMetadata`

`optional<``object``>`

Metadata about the sync source (e.g., calendarName for Google Calendar, objectName for Salesforce)

### Payload Version

1.0

Create personal access token

**Event type:**`createPersonalAccessToken`

A user created a token to read/write data via the Airtable API.

`object`

`name`

`string`

`newTokenResources`

`any of the below objects`

`type`

`"all" | "specificModelIds"`

`permissionSets`

`optional<``array of the below object``>`

The permission sets granted to the token, scoped per application.

|     |     |
| --- | --- |
| <br>`applicationId` | `string` |
| <br>`permissionSetIds` | `array of strings` |

`workspaceIds`

`array of strings`

`applicationIds`

`array of strings`

`dataTableIds`

`optional<``array of strings``>`

|     |     |
| --- | --- |
| <br>`type` | `"enterprise"` |
| <br>`enterpriseAccountId` | `string` |

`scopes`

`array of strings`

The actions the token is allowed to perform.

### Payload Version

1.1

Grant enterprise admin access

**Event type:**`grantEnterpriseAdminAccess`

Admin access was granted to a user.

`object`

`user`

`object`

The user granted admin access.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `string` |

`roles`

`optional<``array of the below object``>`

The admin roles granted to the user.

Admin role granted to the user.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`roleType` | `"admin"` |
| <br>`managedRoleType` | `"adminFull" \| "adminIntegration" \| "adminLicense" \| "adminBrand" \| "adminUser"` |
| <br>`name` | `string` |
| <br>`permissionTypes` | `array of ("adminFullPermissions" \| "adminSettingsIntegrationsManage" \| "adminSettingsDevelopmentManage" \| "adminSettingsBlocksManage" \| "adminSettingsLicenseManage" \| "adminSettingsBrandingManage" \| "adminDataTablesManage" \| "adminUsersInfoRead" \| "adminUsersLicenseManage" \| "adminUsersInviteManage" \| "adminUsersIdentityManage" \| "adminUsersTokensManage" \| "adminUsersMembershipManage" \| "adminUsersCollaborationsManage" \| "adminServiceAccountsManage" \| "adminGroupsInfoRead" \| "adminGroupsManage" \| "adminGroupsMembershipManage" \| "adminGroupsLicenseManage" \| "adminWorkspacesInfoRead" \| "adminApplicationsInfoRead" \| "adminPageBundlesInfoRead" \| "adminAttachmentsUpload")` |

### Payload Version

1.1

Grant enterprise upgrader access

**Event type:**`grantEnterpriseUpgraderAccess`

Upgrader access was granted to a user.

`object`

`user`

`object`

The user granted upgrader access.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Revoke enterprise admin access

**Event type:**`revokeEnterpriseAdminAccess`

Admin access was revoked from a user.

`object`

`user`

`object`

The user with revoked admin access.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `string` |

`roles`

`optional<``array of the below object``>`

The admin roles granted to the user.

Admin role granted to the user.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`roleType` | `"admin"` |
| <br>`managedRoleType` | `"adminFull" \| "adminIntegration" \| "adminLicense" \| "adminBrand" \| "adminUser"` |
| <br>`name` | `string` |
| <br>`permissionTypes` | `array of ("adminFullPermissions" \| "adminSettingsIntegrationsManage" \| "adminSettingsDevelopmentManage" \| "adminSettingsBlocksManage" \| "adminSettingsLicenseManage" \| "adminSettingsBrandingManage" \| "adminDataTablesManage" \| "adminUsersInfoRead" \| "adminUsersLicenseManage" \| "adminUsersInviteManage" \| "adminUsersIdentityManage" \| "adminUsersTokensManage" \| "adminUsersMembershipManage" \| "adminUsersCollaborationsManage" \| "adminServiceAccountsManage" \| "adminGroupsInfoRead" \| "adminGroupsManage" \| "adminGroupsMembershipManage" \| "adminGroupsLicenseManage" \| "adminWorkspacesInfoRead" \| "adminApplicationsInfoRead" \| "adminPageBundlesInfoRead" \| "adminAttachmentsUpload")` |

### Payload Version

2.0

Revoke enterprise upgrader access

**Event type:**`revokeEnterpriseUpgraderAccess`

Upgrader access was revoked from a user.

`object`

`user`

`object`

The user with revoked upgrader access.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Update enterprise name

**Event type:**`updateEnterpriseName`

An enterprise's name was updated.

`object`

`previous`

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>Enterprise name before being updated |

`current`

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>Enterprise name after being updated. |

### Payload Version

1.0

Delete enterprise stripe card

**Event type:**`deleteEnterpriseStripeCard`

An enterprise stripe card was deleted.

`object`

|     |     |
| --- | --- |
| <br>`stripeCardId` | `string`<br><br>Stripe card id for card to be deleted |
| <br>`stripeCustomerId` | `string` |

### Payload Version

1.0

Update enterprise stripe card

**Event type:**`updateEnterpriseStripeCard`

An enterprise stripe card was updated.

`object`

|     |     |
| --- | --- |
| <br>`stripeCustomerId` | `string` |

### Payload Version

1.0

Update enterprise payment method

**Event type:**`updateEnterprisePaymentMethod`

An enterprise payment method was updated.

`object`

|     |     |
| --- | --- |
| <br>`stripeCustomerId` | `string` |

### Payload Version

1.0

Retry enterprise payment

**Event type:**`retryEnterprisePayment`

A failed enterprise payment was retried from the admin panel.

`object`

|     |     |
| --- | --- |
| <br>`stripeCustomerId` | `string` |
| <br>`outcome` | `string` |

### Payload Version

1.0

Update enterprise invoice memo details

**Event type:**`updateEnterpriseInvoiceDetails`

Enterprise memo details have been updated for all future invoices.

`object`

`previous`

`object`

`invoiceDetails`

`object`

|     |     |
| --- | --- |
| <br>`address` | `string` |
| <br>`footer` | `string` |
| <br>`taxCode` | `string` |

`current`

`object`

`invoiceDetails`

`object`

|     |     |
| --- | --- |
| <br>`address` | `string` |
| <br>`footer` | `string` |
| <br>`taxCode` | `string` |

### Payload Version

1.0

Update enterprise tax details

**Event type:**`updateEnterpriseTaxDetails`

Enterprise tax details were updated.

`object`

`previous`

`object`

|     |     |
| --- | --- |
| <br>`taxIdType` | `optional<``string``>`<br><br>Tax ID type before the update |
| <br>`businessName` | `optional<``string``>`<br><br>Business name before the update |

`current`

`object`

|     |     |
| --- | --- |
| <br>`taxIdType` | `optional<``string``>`<br><br>Tax ID type after the update |
| <br>`businessName` | `optional<``string``>`<br><br>Business name after the update |

### Payload Version

1.0

Delete enterprise tax ID

**Event type:**`deleteEnterpriseTaxDetails`

An enterprise tax ID was deleted.

`object`

|     |     |
| --- | --- |
| <br>`taxIdRecordId` | `string` |

### Payload Version

1.0

Create org unit

**Event type:**`createOrgUnit`

An org unit was created.

`object`

`name`

`string`

The name of the created org unit

`parentEnterpriseAccount`

`object`

The parent enterprise account of the created org unit

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Delete org unit

**Event type:**`deleteOrgUnit`

An org unit was deleted.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the deleted org unit |

### Payload Version

1.0

Create enterprise eDiscovery export

**Event type:**`createEdiscoveryExport`

An enterprise eDiscovery export was created

`object`

`base`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the base at time of export creation |

### Payload Version

1.0

Update org unit connection

**Event type:**`updateOrgUnitConnection`

Org unit connection to user groups was updated.

`object`

`previous`

`object`

|     |     |
| --- | --- |
| <br>`connectedUserGroups` | `array of strings` |

`current`

`object`

|     |     |
| --- | --- |
| <br>`connectedUserGroups` | `array of strings` |

### Payload Version

1.0

Update membership capture type

**Event type:**`updateMembershipCaptureType`

The membership capture type for the organization was updated.

`object`

`previous`

`object`

The previous organization membership settings.

|     |     |
| --- | --- |
| <br>`membershipCaptureType` | `"adminReview" \| "autoClaim" \| "domainCapture" \| "userGroupConnections"`<br><br>The previous membership capture type. |

`current`

`object`

The current organization membership settings.

|     |     |
| --- | --- |
| <br>`membershipCaptureType` | `"adminReview" \| "autoClaim" \| "domainCapture" \| "userGroupConnections"`<br><br>The new membership capture type. |

### Payload Version

1.0

User requested a license upgrade

**Event type:**`requestLicenseUpgrade`

A user requested a license upgrade in this enterprise account.

`object`

|     |     |
| --- | --- |
| <br>`sourceModelId` | `string`<br><br>The resource from which the license upgrade was requested. |
| <br>`sourceApplicationId` | `optional<``string``>`<br><br>The application ID of the source model. Only present if the source model is an application or page bundle. |

### Payload Version

1.0

Admin approved a license upgrade request

**Event type:**`approveLicenseUpgradeRequest`

An admin approved a license upgrade request in this enterprise account.

`object`

|     |     |
| --- | --- |
| <br>`userGroupId` | `optional<``string``>`<br><br>The user group that the user was added to as part of the license upgrade. |
| <br>`affectedEnterpriseAccountIds` | `array of strings`<br><br>All enterprise accounts where users license has been upgraded. |

### Payload Version

1.0

Admin denied a license upgrade request

**Event type:**`denyLicenseUpgradeRequest`

An admin denied a license upgrade request in this enterprise account.

`object``An empty object`

### Payload Version

1.0

Change invite restrictions for an enterprise

**Event type:**`changeEnterpriseInviteRestrictions`

Restrictions on what users can be invited to content that the enterprise owns

`object`

`restrictionType`

`optional<``"unrestricted" | "restrictedToEnterpriseAccountEmailDomains" | "restrictedToEnterpriseAccountMembers"``>`

The invite restriction type enabled for the enterprise account

`emailDomains`

`array of strings`

Email domains currently associated with the enterprise account.

`allowedEmailDomains`

`optional<``array of strings``>`

Email domains of the user accounts that may be invited to collaborate on the enterprise's assets. If email domain invite restrictions are not enabled, this field will not be present.

`previous`

`object`

|     |     |
| --- | --- |
| <br>`restrictionType` | `optional<``"unrestricted" \| "restrictedToEnterpriseAccountEmailDomains" \| "restrictedToEnterpriseAccountMembers"``>`<br><br>The invite restriction type enabled for the enterprise account |
| <br>`allowedEmailDomains` | `optional<``array of strings``>`<br><br>Email domains of the user accounts that may be invited to collaborate on the enterprise's assets. If email domain invite restrictions are not enabled, this field will not be present. |

`current`

`object`

|     |     |
| --- | --- |
| <br>`restrictionType` | `optional<``"unrestricted" \| "restrictedToEnterpriseAccountEmailDomains" \| "restrictedToEnterpriseAccountMembers"``>`<br><br>The invite restriction type enabled for the enterprise account |
| <br>`allowedEmailDomains` | `optional<``array of strings``>`<br><br>Email domains of the user accounts that may be invited to collaborate on the enterprise's assets. If email domain invite restrictions are not enabled, this field will not be present. |

### Payload Version

2.0

Change portal invite restrictions for an enterprise

**Event type:**`changeEnterprisePortalInviteRestrictions`

Restrictions on what users can be invited to portals that the enterprise owns

`object`

`restrictionType`

`optional<``"unrestricted" | "restrictedToEnterpriseAccountEmailDomains" | "disabled"``>`

The invite restriction type enabled for the portals in the enterprise account

`emailDomains`

`array of strings`

Email domains currently associated with the enterprise account.

`allowedEmailDomains`

`optional<``array of strings``>`

Email domains of the user accounts that may be invited to collaborate on the enterprise's portals. If email domain invite restrictions are not enabled, this field will not be present.

`previous`

`object`

|     |     |
| --- | --- |
| <br>`restrictionType` | `optional<``"unrestricted" \| "restrictedToEnterpriseAccountEmailDomains" \| "disabled"``>`<br><br>The invite restriction type enabled for the portals in the enterprise account |
| <br>`allowedEmailDomains` | `optional<``array of strings``>`<br><br>Email domains of the user accounts that may be invited to collaborate on the enterprise's portals. If email domain invite restrictions are not enabled, this field will not be present. |

`current`

`object`

|     |     |
| --- | --- |
| <br>`restrictionType` | `optional<``"unrestricted" \| "restrictedToEnterpriseAccountEmailDomains" \| "disabled"``>`<br><br>The invite restriction type enabled for the portals in the enterprise account |
| <br>`allowedEmailDomains` | `optional<``array of strings``>`<br><br>Email domains of the user accounts that may be invited to collaborate on the enterprise's portals. If email domain invite restrictions are not enabled, this field will not be present. |

### Payload Version

1.0

Change interface organization-wide sharing restrictions for an enterprise

**Event type:**`changeEnterpriseInterfaceOrgWideSharingRestrictions`

Restriction on whether creators should be able to share interfaces with the entire organization

`object`

`previous`

`object`

|     |     |
| --- | --- |
| <br>`isInterfaceOrgWideSharingRestrictionEnabled` | `boolean`<br><br>Whether organization-wide sharing has been disabled for the enterprise account |

`current`

`object`

|     |     |
| --- | --- |
| <br>`isInterfaceOrgWideSharingRestrictionEnabled` | `boolean`<br><br>Whether organization-wide sharing has been disabled for the enterprise account |

### Payload Version

1.0

Change global share restrictions for an enterprise

**Event type:**`changeEnterpriseGlobalShareRestrictions`

Restrictions on share link access from users outside of the enterprise's own email domains and syncing shared views with other bases has been changed.

`object`

`restrictionType`

`optional<``"unrestricted" | "restrictedOptional" | "restricted" | "membersOnlyRestricted"``>`

The restriction type set for global share restrictions

`isPasswordProtectedShareExemptFromRestriction`

`optional<``boolean``>`

Whether password-protected share links are exempt from any share restrictions

`isSharedFormExemptFromRestriction`

`optional<``boolean``>`

Whether shared forms are exempt from any share restrictions

`shouldKeepAmbiguousSharesUnrestricted`

`optional<``boolean``>`

Whether shares that were previously unrestricted stay unrestricted when setting the share restriction type to "Restricted Optional"

`externalTableSyncAdditionalRestrictionType`

`optional<``"unrestricted" | "restrictedToEnterprise" | "restrictedToEnterpriseGrid" | "syncOff"``>`

The restriction type that determines share restrictions for external table syncs from share links, applied in addition to any global share restrictions

`externalTableSyncRestrictedToEnterpriseUserPolicy`

`optional<``"anyUser" | "hasCreatorPermissionOrIsAdmin" | "onlyAdmins"``>`

Which users are allowed to toggle external sync restrictions for a share link when share restrictions for external table syncs are restricted to the enterprise

`isPublicPageBundlePageSharingDisabled`

`optional<``boolean``>`

Whether creating new public page bundle pages is disabled

`emailDomains`

`array of strings`

Email domains currently associated with the enterprise account.

`emailDomainsExemptFromRestriction`

`optional<``array of strings``>`

User accounts with email addresses of these email domains are exempt from any share restrictions

`previous`

`object`

|     |     |
| --- | --- |
| <br>`restrictionType` | `optional<``"unrestricted" \| "restrictedOptional" \| "restricted" \| "membersOnlyRestricted"``>`<br><br>The restriction type set for global share restrictions |
| <br>`isPasswordProtectedShareExemptFromRestriction` | `optional<``boolean``>`<br><br>Whether password-protected share links are exempt from any share restrictions |
| <br>`isSharedFormExemptFromRestriction` | `optional<``boolean``>`<br><br>Whether shared forms are exempt from any share restrictions |
| <br>`shouldKeepAmbiguousSharesUnrestricted` | `optional<``boolean``>`<br><br>Whether shares that were previously unrestricted stay unrestricted when setting the share restriction type to "Restricted Optional" |
| <br>`externalTableSyncAdditionalRestrictionType` | `optional<``"unrestricted" \| "restrictedToEnterprise" \| "restrictedToEnterpriseGrid" \| "syncOff"``>`<br><br>The restriction type that determines share restrictions for external table syncs from share links, applied in addition to any global share restrictions |
| <br>`externalTableSyncRestrictedToEnterpriseUserPolicy` | `optional<``"anyUser" \| "hasCreatorPermissionOrIsAdmin" \| "onlyAdmins"``>`<br><br>Which users are allowed to toggle external sync restrictions for a share link when share restrictions for external table syncs are restricted to the enterprise |
| <br>`isPublicPageBundlePageSharingDisabled` | `optional<``boolean``>`<br><br>Whether creating new public page bundle pages is disabled |
| <br>`emailDomainsExemptFromRestriction` | `optional<``array of strings``>`<br><br>User accounts with email addresses of these email domains are exempt from any share restrictions |

`current`

`object`

|     |     |
| --- | --- |
| <br>`restrictionType` | `optional<``"unrestricted" \| "restrictedOptional" \| "restricted" \| "membersOnlyRestricted"``>`<br><br>The restriction type set for global share restrictions |
| <br>`isPasswordProtectedShareExemptFromRestriction` | `optional<``boolean``>`<br><br>Whether password-protected share links are exempt from any share restrictions |
| <br>`isSharedFormExemptFromRestriction` | `optional<``boolean``>`<br><br>Whether shared forms are exempt from any share restrictions |
| <br>`shouldKeepAmbiguousSharesUnrestricted` | `optional<``boolean``>`<br><br>Whether shares that were previously unrestricted stay unrestricted when setting the share restriction type to "Restricted Optional" |
| <br>`externalTableSyncAdditionalRestrictionType` | `optional<``"unrestricted" \| "restrictedToEnterprise" \| "restrictedToEnterpriseGrid" \| "syncOff"``>`<br><br>The restriction type that determines share restrictions for external table syncs from share links, applied in addition to any global share restrictions |
| <br>`externalTableSyncRestrictedToEnterpriseUserPolicy` | `optional<``"anyUser" \| "hasCreatorPermissionOrIsAdmin" \| "onlyAdmins"``>`<br><br>Which users are allowed to toggle external sync restrictions for a share link when share restrictions for external table syncs are restricted to the enterprise |
| <br>`isPublicPageBundlePageSharingDisabled` | `optional<``boolean``>`<br><br>Whether creating new public page bundle pages is disabled |
| <br>`emailDomainsExemptFromRestriction` | `optional<``array of strings``>`<br><br>User accounts with email addresses of these email domains are exempt from any share restrictions |

### Payload Version

3.0

Change group creation restrictions for an enterprise

**Event type:**`changeEnterpriseGroupCreateRestrictions`

Restrictions on whether all users or only admins can create and modify groups have been changed.

`object`

`previous`

`object`

|     |     |
| --- | --- |
| <br>`role` | `"onlyAdmins" \| "everyone"` |

`current`

`object`

|     |     |
| --- | --- |
| <br>`role` | `"onlyAdmins" \| "everyone"` |

### Payload Version

1.0

Change extension configuration restrictions for an enterprise

**Event type:**`changeEnterpriseExtensionConfigurationRestrictions`

Restrictions on the use of extensions within the bases owned by the enterprise have been changed.

`object`

`firstPartyAndPartnerSettings`

`optional<``object``>`

Restrictions placed on the use of first-party extensions created by Airtable and created by Airtable partners

`restrictionType`

`optional<``"allowAll" | "allowWithoutNetworkAccess" | "denyAll"``>`

Determines whether all extensions are allowed for use, only extensions that access Airtable servers, or none at all

`allowlistedExtensions`

`optional<``array of the below object``>`

A list of extensions exempt from restrictions

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`thirdPartySettings`

`optional<``object``>`

Restrictions placed on the use of third-party extensions within Airtable's marketplace

`restrictionType`

`optional<``"allowAll" | "allowWithoutNetworkAccess" | "denyAll"``>`

Determines whether all extensions are allowed for use, only extensions that access Airtable servers, or none at all

`allowlistedExtensions`

`optional<``array of the below object``>`

A list of extensions exempt from restrictions

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`developmentSettings`

`optional<``object``>`

Restrictions placed on whether users of the enterprise may develop custom extensions, write scripts, and install scripts from the marketplace

`isDevelopmentRestrictionEnabled`

`optional<``boolean``>`

Whether the restriction is enabled

`allowlistedDevelopers`

`optional<``array of the below object``>`

A list of users exempt from restrictions

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`email` | `string` |

`previous`

`object`

`firstPartyAndPartnerSettings`

`optional<``object``>`

Restrictions placed on the use of first-party extensions created by Airtable and created by Airtable partners

`restrictionType`

`optional<``"allowAll" | "allowWithoutNetworkAccess" | "denyAll"``>`

Determines whether all extensions are allowed for use, only extensions that access Airtable servers, or none at all

`allowlistedExtensions`

`optional<``array of the below object``>`

A list of extensions exempt from restrictions

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`thirdPartySettings`

`optional<``object``>`

Restrictions placed on the use of third-party extensions within Airtable's marketplace

`restrictionType`

`optional<``"allowAll" | "allowWithoutNetworkAccess" | "denyAll"``>`

Determines whether all extensions are allowed for use, only extensions that access Airtable servers, or none at all

`allowlistedExtensions`

`optional<``array of the below object``>`

A list of extensions exempt from restrictions

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`developmentSettings`

`optional<``object``>`

Restrictions placed on whether users of the enterprise may develop custom extensions, write scripts, and install scripts from the marketplace

`isDevelopmentRestrictionEnabled`

`optional<``boolean``>`

Whether the restriction is enabled

`allowlistedDevelopers`

`optional<``array of the below object``>`

A list of users exempt from restrictions

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`email` | `string` |

`current`

`object`

`firstPartyAndPartnerSettings`

`optional<``object``>`

Restrictions placed on the use of first-party extensions created by Airtable and created by Airtable partners

`restrictionType`

`optional<``"allowAll" | "allowWithoutNetworkAccess" | "denyAll"``>`

Determines whether all extensions are allowed for use, only extensions that access Airtable servers, or none at all

`allowlistedExtensions`

`optional<``array of the below object``>`

A list of extensions exempt from restrictions

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`thirdPartySettings`

`optional<``object``>`

Restrictions placed on the use of third-party extensions within Airtable's marketplace

`restrictionType`

`optional<``"allowAll" | "allowWithoutNetworkAccess" | "denyAll"``>`

Determines whether all extensions are allowed for use, only extensions that access Airtable servers, or none at all

`allowlistedExtensions`

`optional<``array of the below object``>`

A list of extensions exempt from restrictions

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`developmentSettings`

`optional<``object``>`

Restrictions placed on whether users of the enterprise may develop custom extensions, write scripts, and install scripts from the marketplace

`isDevelopmentRestrictionEnabled`

`optional<``boolean``>`

Whether the restriction is enabled

`allowlistedDevelopers`

`optional<``array of the below object``>`

A list of users exempt from restrictions

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`email` | `string` |

### Payload Version

1.0

Change data retention policy for an enterprise

**Event type:**`changeEnterpriseDataRetentionPolicy`

Data retention policy for the enterprise have been changed.

`object`

`revisionHistoryRetentionInDays`

`optional<``integer``>`

The retention period for the revision history and snapshots. Null value means infinite retention.

`deletedBaseInTrashRetentionInDays`

`optional<``integer``>`

The retention period for deleted bases in Trash.

`baseInactiveInDays`

`optional<``integer``>`

The number of days of inactivity that a base is considered inactive and eligible for deletion. Null when inactive base pruning is disabled.

`inactiveBaseNotificationTimeSetting`

`optional<``object``>`

The ahead-in-time notification setting for base owners who have upcoming inactive bases. Null when the inactive base pruning is disabled.

|     |     |
| --- | --- |
| <br>`notify30DaysAhead` | `boolean` |
| <br>`notify60DaysAhead` | `boolean` |
| <br>`notify90DaysAhead` | `boolean` |

`previous`

`object`

`revisionHistoryRetentionInDays`

`optional<``integer``>`

The retention period for the revision history and snapshots. Null value means infinite retention.

`deletedBaseInTrashRetentionInDays`

`optional<``integer``>`

The retention period for deleted bases in Trash.

`baseInactiveInDays`

`optional<``integer``>`

The number of days of inactivity that a base is considered inactive and eligible for deletion. Null when inactive base pruning is disabled.

`inactiveBaseNotificationTimeSetting`

`optional<``object``>`

The ahead-in-time notification setting for base owners who have upcoming inactive bases. Null when the inactive base pruning is disabled.

|     |     |
| --- | --- |
| <br>`notify30DaysAhead` | `boolean` |
| <br>`notify60DaysAhead` | `boolean` |
| <br>`notify90DaysAhead` | `boolean` |

`current`

`object`

`revisionHistoryRetentionInDays`

`optional<``integer``>`

The retention period for the revision history and snapshots. Null value means infinite retention.

`deletedBaseInTrashRetentionInDays`

`optional<``integer``>`

The retention period for deleted bases in Trash.

`baseInactiveInDays`

`optional<``integer``>`

The number of days of inactivity that a base is considered inactive and eligible for deletion. Null when inactive base pruning is disabled.

`inactiveBaseNotificationTimeSetting`

`optional<``object``>`

The ahead-in-time notification setting for base owners who have upcoming inactive bases. Null when the inactive base pruning is disabled.

|     |     |
| --- | --- |
| <br>`notify30DaysAhead` | `boolean` |
| <br>`notify60DaysAhead` | `boolean` |
| <br>`notify90DaysAhead` | `boolean` |

### Payload Version

1.0

Change AI restriction policy for an enterprise

**Event type:**`changeEnterpriseAiRestrictionPolicy`

Restrictions on the use of AI within the enterprise have been changed.

`object`

`previous`

`object`

The AI restriction policy for an enterprise before being changed

`isAiEnabled`

`optional<``boolean``>`

Whether AI features are enabled for the enterprise

`aiWorkspaceRestrictionPolicy`

`optional<``"allWorkspaces" | "noWorkspaces" | "specifiedWorkspaces"``>`

Whether AI features are enabled for workspaces in this enterprise

`allowedAiModelCreatorsByAiModelProvider`

`optional<``object``>`

The AI model creators allowed for each AI model provider enabled for this enterprise

|     |     |
| --- | --- |
| `key: string` | `array of ("openAi" \| "anthropic" \| "ibm" \| "meta" \| "amazon" \| "sentenceTransformers" \| "google" \| "mistralAi")` |

`isAiAssistantEnabledForExternalChat`

`optional<``boolean``>`

Whether AI assistant (Omni) is enabled for external chat surfaces like Slack and MS Teams

`allowedWorkspaces`

`optional<``array of strings``>`

The workspaces where AI features are explicitly enabled

`allowedAiModelProviders`

`optional<``array of strings``>`

The AI model providers allowed for this enterprise

`current`

`object`

The AI restriction policy for an enterprise after being changed

`isAiEnabled`

`optional<``boolean``>`

Whether AI features are enabled for the enterprise

`aiWorkspaceRestrictionPolicy`

`optional<``"allWorkspaces" | "noWorkspaces" | "specifiedWorkspaces"``>`

Whether AI features are enabled for workspaces in this enterprise

`allowedAiModelCreatorsByAiModelProvider`

`optional<``object``>`

The AI model creators allowed for each AI model provider enabled for this enterprise

|     |     |
| --- | --- |
| `key: string` | `array of ("openAi" \| "anthropic" \| "ibm" \| "meta" \| "amazon" \| "sentenceTransformers" \| "google" \| "mistralAi")` |

`isAiAssistantEnabledForExternalChat`

`optional<``boolean``>`

Whether AI assistant (Omni) is enabled for external chat surfaces like Slack and MS Teams

`allowedWorkspaces`

`optional<``array of strings``>`

The workspaces where AI features are explicitly enabled

`allowedAiModelProviders`

`optional<``array of strings``>`

The AI model providers allowed for this enterprise

### Payload Version

2.0

Change MFA policy for an enterprise

**Event type:**`changeEnterpriseMfaPolicy`

The MFA policy for the enterprise has been changed.

`object`

`previous`

`object`

|     |     |
| --- | --- |
| <br>`mfaPolicyType` | `"optional" \| "requiredForMembers" \| "requiredForEveryone"`<br><br>The MFA policy for this enterprise |

`current`

`object`

|     |     |
| --- | --- |
| <br>`mfaPolicyType` | `"optional" \| "requiredForMembers" \| "requiredForEveryone"`<br><br>The MFA policy for this enterprise |

### Payload Version

1.0

Change enterprise license upgrade request configuration

**Event type:**`changeEnterpriseLicenseUpgradeRequestConfig`

The configuration for enterprise license upgrade requests has been changed.

`object`

`previous`

`object`

`title`

`string`

`message`

`string`

`defaultConfig`

`any of the below objects`

|     |     |
| --- | --- |
| <br>`type` | `"inApp"` |

|     |     |
| --- | --- |
| <br>`type` | `"external"` |
| <br>`url` | `string` |

`externalUsersConfig`

`optional<``any of the below objects``>`

|     |     |
| --- | --- |
| <br>`type` | `"inApp"` |

|     |     |
| --- | --- |
| <br>`type` | `"external"` |
| <br>`url` | `string` |

`current`

`object`

`title`

`string`

`message`

`string`

`defaultConfig`

`any of the below objects`

|     |     |
| --- | --- |
| <br>`type` | `"inApp"` |

|     |     |
| --- | --- |
| <br>`type` | `"external"` |
| <br>`url` | `string` |

`externalUsersConfig`

`optional<``any of the below objects``>`

|     |     |
| --- | --- |
| <br>`type` | `"inApp"` |

|     |     |
| --- | --- |
| <br>`type` | `"external"` |
| <br>`url` | `string` |

### Payload Version

1.0

Lock grid setting

**Event type:**`updateSettingLock`

An enterprise grid setting was locked

`object`

`setting`

`"adminCustomizedHelpMessage" | "aiRestrictionPolicy" | "airtableToGoogleDriveIntegrationRestriction" | "apiAccessRestriction" | "packageLibraryRestriction" | "attachmentUploadRestriction" | "blockDevelopmentRestriction" | "emailAndApiSyncRestriction" | "emailSyncRestriction" | "apiSyncRestriction" | "adminPanelSyncRestriction" | "firstPartyBlockRestriction" | "groupCreateByRole" | "integrationExternalAccountConfigs" | "integrationsAutomationsExternalSyncAiRestriction" | "inviteRestriction" | "membershipCaptureType" | "oauthRestriction" | "organizationLogo" | "organizationName" | "publishedDatasetPublisherPolicy" | "shareWithAudienceRestriction" | "shareRestriction" | "slackLinkUnfurlingRestriction" | "syncRestriction" | "thirdPartyBlockRestriction" | "dataRetentionPolicy" | "hipaaCompliance" | "dataTableInstallationRestriction" | "colors" | "portalInviteRestriction" | "dataExportControlRestriction" | "restrictWorkspaceAppCreation"`

`previous`

`object`

|     |     |
| --- | --- |
| <br>`locked` | `boolean` |

`current`

`object`

|     |     |
| --- | --- |
| <br>`locked` | `boolean` |

### Payload Version

1.0

Change enterprise HyperDB installation restrictions

**Event type:**`changeDataTableInstallationRestrictions`

The setting for enterprise HyperDB installation restrictions has been changed.

`object`

|     |     |
| --- | --- |
| <br>`previous` | `"restrictedToEnterpriseGrid" \| "restrictedToEnterprise"` |
| <br>`current` | `"restrictedToEnterpriseGrid" \| "restrictedToEnterprise"` |

### Payload Version

1.0

Change enterprise colors

**Event type:**`changeEnterpriseColors`

The setting for enterprise colors has been changed.

`object`

`previous`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`isDarkOverride` | `boolean` |
| <br>`name` | `string` |
| <br>`value` | `string` |

`current`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`isDarkOverride` | `boolean` |
| <br>`name` | `string` |
| <br>`value` | `string` |

### Payload Version

1.0

Change enterprise terms of use configuration

**Event type:**`changeEnterpriseTermsOfUseOptions`

The configuration for enterprise terms of use has been changed.

`object`

`previous`

`object`

|     |     |
| --- | --- |
| <br>`isDefaultConfigEnabled` | `boolean` |
| <br>`useDifferentConfigForExternalUsers` | `boolean` |
| <br>`isExternalUsersConfigEnabled` | `optional<``boolean``>` |

`current`

`object`

|     |     |
| --- | --- |
| <br>`isDefaultConfigEnabled` | `boolean` |
| <br>`useDifferentConfigForExternalUsers` | `boolean` |
| <br>`isExternalUsersConfigEnabled` | `optional<``boolean``>` |

### Payload Version

1.0

Change enterprise data export control restrictions

**Event type:**`changeEnterpriseDataExportControlRestrictions`

Restrictions on data export methods like printing, CSV download, and clipboard copying have been changed.

`object`

`emailDomains`

`array of strings`

Email domains currently associated with the enterprise account.

`restrictionType`

`optional<``"unrestricted" | "membersOnly" | "restricted"``>`

`previous`

`object`

`restrictionType`

`optional<``"unrestricted" | "membersOnly" | "restricted"``>`

`options`

`optional<``object``>`

|     |     |
| --- | --- |
| <br>`isPrintRestricted` | `boolean` |
| <br>`isCsvDownloadRestricted` | `boolean` |
| <br>`isCopyRestricted` | `boolean` |

`allowlistedEmailDomains`

`optional<``array of strings``>`

`current`

`object`

`restrictionType`

`optional<``"unrestricted" | "membersOnly" | "restricted"``>`

`options`

`optional<``object``>`

|     |     |
| --- | --- |
| <br>`isPrintRestricted` | `boolean` |
| <br>`isCsvDownloadRestricted` | `boolean` |
| <br>`isCopyRestricted` | `boolean` |

`allowlistedEmailDomains`

`optional<``array of strings``>`

`options`

`optional<``object``>`

|     |     |
| --- | --- |
| <br>`isPrintRestricted` | `boolean` |
| <br>`isCsvDownloadRestricted` | `boolean` |
| <br>`isCopyRestricted` | `boolean` |

`allowlistedEmailDomains`

`optional<``array of strings``>`

### Payload Version

1.0

Change enterprise sensitivity labels

**Event type:**`changeEnterpriseSensitivityLabels`

The setting for enterprise sensitivity labels has been changed.

`object`

`previous`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`description` | `string` |
| <br>`color` | `string` |

`current`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`description` | `string` |
| <br>`color` | `string` |

### Payload Version

1.0

Change enterprise sensitivity label setting

**Event type:**`changeEnterpriseSensitivityLabelSetting`

The enterprise sensitivity label setting has been changed.

`object`

`isEnabled`

`optional<``boolean``>`

`isEnforced`

`optional<``boolean``>`

`previous`

`object`

|     |     |
| --- | --- |
| <br>`isEnabled` | `optional<``boolean``>` |
| <br>`isEnforced` | `optional<``boolean``>` |

`current`

`object`

|     |     |
| --- | --- |
| <br>`isEnabled` | `optional<``boolean``>` |
| <br>`isEnforced` | `optional<``boolean``>` |

### Payload Version

1.0

Change enterprise workspace and app creation restrictions

**Event type:**`changeEnterpriseWorkspaceAppCreationRestrictions`

The restriction on whether workspace and app can be creatd in the enterprise account has been changed.

`object`

`previous`

`object`

`isRestrictWorkspaceAppCreationEnabled`

`boolean`

Whether workspace app creation is restricted to admins only

`allowlistedUsers`

`optional<``array of the below object``>`

Users who are allowed to create workspaces and apps despite the restriction

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |

`allowlistedUserGroups`

`optional<``array of the below object``>`

User groups whose members are allowed to create workspaces and apps despite the restriction

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`current`

`object`

`isRestrictWorkspaceAppCreationEnabled`

`boolean`

Whether workspace app creation is restricted to admins only

`allowlistedUsers`

`optional<``array of the below object``>`

Users who are allowed to create workspaces and apps despite the restriction

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |

`allowlistedUserGroups`

`optional<``array of the below object``>`

User groups whose members are allowed to create workspaces and apps despite the restriction

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Add user or group to enterprise restriction allowlist

**Event type:**`addUserOrGroupToEnterpriseRestrictionAllowlist`

A user or group was added to an enterprise restriction allowlist.

`object`

`restrictionType`

`string`

The type of enterprise restriction (e.g., packageLibraryRestriction, restrictWorkspaceAppCreation)

`user`

`optional<``object``>`

The user added to the allowlist

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |

`userGroup`

`optional<``object``>`

The user group added to the allowlist

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Remove user or group from enterprise restriction allowlist

**Event type:**`removeUserOrGroupFromEnterpriseRestrictionAllowlist`

A user or group was removed from an enterprise restriction allowlist.

`object`

`restrictionType`

`string`

The type of enterprise restriction (e.g., packageLibraryRestriction, restrictWorkspaceAppCreation)

`user`

`optional<``object``>`

The user removed from the allowlist

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |

`userGroup`

`optional<``object``>`

The user group removed from the allowlist

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Change outbound access restrictions for an enterprise

**Event type:**`changeEnterpriseOutboundAccessRestrictions`

Restrictions on claimed users collaborating on resources outside of the enterprise's own workspaces have been changed.

`object`

`previous`

`object`

The outbound access restriction setting before the change.

|     |     |
| --- | --- |
| <br>`restrictionType` | `"unrestricted" \| "restricted" \| "customAllow"` |

`current`

`object`

The outbound access restriction setting after the change.

|     |     |
| --- | --- |
| <br>`restrictionType` | `"unrestricted" \| "restricted" \| "customAllow"` |

### Payload Version

1.0

Add outbound access allowlist entry

**Event type:**`addOutboundAccessAllowlistEntry`

A claimed user was granted access to a specific resource outside of the enterprise via the outbound access allowlist.

`object`

`resourceId`

`string`

The external resource the allowlist entry refers to.

`resourceType`

`"workspace" | "application" | "pageBundle"`

The kind of external resource: a workspace, base, or interface.

`user`

`object`

The claimed user whose allowlist entry changed.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |

### Payload Version

1.0

Remove outbound access allowlist entry

**Event type:**`removeOutboundAccessAllowlistEntry`

A claimed user had a specific resource removed from the outbound access allowlist, revoking their access to it when the enterprise restricts outbound access.

`object`

`resourceId`

`string`

The external resource the allowlist entry refers to.

`resourceType`

`"workspace" | "application" | "pageBundle"`

The kind of external resource: a workspace, base, or interface.

`user`

`object`

The claimed user whose allowlist entry changed.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |

### Payload Version

1.0

Apply default enterprise restriction setting

**Event type:**`applyDefaultEnterpriseSetting`

A parent enterprise organization applied an enterprise setting as a default onto a child organization.

`object`

`setting`

`string`

The enterprise setting that was applied as default

`previous`

`object`

The previous setting value of the child enterprise account before the default was applied

|     |     |
| --- | --- |
| `key: string` | `string` |

`current`

`object`

The current setting value applied from the parent enterprise account

|     |     |
| --- | --- |
| `key: string` | `string` |

`parentEnterpriseAccount`

`object`

The parent enterprise account whose default setting was applied

|     |     |
| --- | --- |
| <br>`id` | `string` |

`childEnterpriseAccount`

`object`

The child enterprise account that received the default setting

|     |     |
| --- | --- |
| <br>`id` | `string` |

### Payload Version

1.0

Create SSO identity provider

**Event type:**`createSsoIdentityProvider`

An SSO identity provider was created for an enterprise account.

`object`

|     |     |
| --- | --- |
| <br>`emailDomain` | `string`<br><br>The email domain associated with this SSO identity provider |
| <br>`emailAttribute` | `optional<``string``>`<br><br>The SAML attribute name configured to provide the real email, if any |

### Payload Version

1.0

Update SSO identity provider

**Event type:**`updateSsoIdentityProvider`

An SSO identity provider configuration was updated.

`object`

`emailDomain`

`string`

The email domain associated with this SSO identity provider

`didCertificateChange`

`boolean`

Whether the x509 signing certificate was changed

`previous`

`object`

|     |     |
| --- | --- |
| <br>`signinUrl` | `string`<br><br>The previous SSO sign-in URL |
| <br>`emailAttribute` | `optional<``string``>`<br><br>The previous SAML email attribute name |

`current`

`object`

|     |     |
| --- | --- |
| <br>`signinUrl` | `string`<br><br>The new SSO sign-in URL |
| <br>`emailAttribute` | `optional<``string``>`<br><br>The new SAML email attribute name |

### Payload Version

1.0

Delete SSO identity provider

**Event type:**`deleteSsoIdentityProvider`

An SSO identity provider was deleted from an enterprise account.

`object`

|     |     |
| --- | --- |
| <br>`emailDomain` | `string`<br><br>The email domain that was associated with the deleted SSO identity provider |

### Payload Version

1.0

Unlink user SSO identity

**Event type:**`unlinkUserSsoIdentity`

A user's SSO identity was unlinked from an enterprise account's identity provider by an admin.

`object`

|     |     |
| --- | --- |
| <br>`emailDomain` | `string`<br><br>The email domain associated with the SSO identity provider |
| <br>`userEmail` | `string`<br><br>The email of the user whose SSO identity was unlinked |

### Payload Version

1.0

Inherit SSO from another domain

**Event type:**`setEmailDomainSsoPiggybacking`

An email domain was configured to inherit SSO from another domain in the same enterprise account.

`object`

|     |     |
| --- | --- |
| <br>`emailDomain` | `string`<br><br>The email domain that was reassigned to inherit SSO from another |
| <br>`parentEmailDomain` | `string`<br><br>The owning email domain of the inherited SSO identity provider |

### Payload Version

1.0

Stop inheriting SSO from another domain

**Event type:**`clearEmailDomainSsoPiggybacking`

An email domain stopped inheriting SSO from another domain.

`object`

|     |     |
| --- | --- |
| <br>`emailDomain` | `string`<br><br>The email domain that stopped inheriting SSO |
| <br>`previousParentEmailDomain` | `string`<br><br>The owning email domain of the previously inherited SSO identity provider |

### Payload Version

1.0

Create managed app

**Event type:**`createManagedApp`

A new managed app was created.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the created managed app. |

### Payload Version

1.0

Create component

**Event type:**`createComponent`

A new component was created.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the created component. |

### Payload Version

1.0

Delete managed app

**Event type:**`deleteManagedApp`

A managed app was deleted.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the deleted managed app. |

### Payload Version

1.0

Delete component

**Event type:**`deleteComponent`

A component was deleted.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the deleted component. |

### Payload Version

1.0

Publish managed app

**Event type:**`publishManagedApp`

A managed app was published.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the published managed app. |

### Payload Version

1.0

Publish component

**Event type:**`publishComponent`

A component was published.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the published component. |

### Payload Version

1.0

Rename managed app

**Event type:**`updateManagedAppName`

A managed app was renamed.

`object`

`previous`

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the managed app prior to being renamed. |

`current`

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The new name of the managed app. |

### Payload Version

1.0

Rename component

**Event type:**`updateComponentName`

A component was renamed.

`object`

`previous`

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the component prior to being renamed. |

`current`

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The new name of the component. |

### Payload Version

1.0

Add managed app audience member

**Event type:**`addManagedAppAudienceMember`

An audience member was added to a managed app.

`any of the below objects`

`type`

`"user"`

The type of audience member added to the audience.

`name`

`string`

The name of the managed app to whose audience this user was added.

`user`

`object`

The user added as an audience member.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`email` | `string` |

`type`

`"group"`

The type of audience member added to the audience.

`name`

`string`

The name of the managed app to which this group was added.

`group`

`object`

The group added as an audience member.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Add component audience member

**Event type:**`addComponentAudienceMember`

An audience member was added to a component.

`any of the below objects`

`type`

`"user"`

The type of audience member added to the audience.

`name`

`string`

The name of the component to to whose audience this user was added.

`user`

`object`

The user added as an audience member.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`email` | `string` |

`type`

`"group"`

The type of audience member added to the audience.

`name`

`string`

The name of the component to which this group was added.

`group`

`object`

The group added as an audience member.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Remove managed app audience member

**Event type:**`removeManagedAppAudienceMember`

An audience member was removed from a managed app.

`any of the below objects`

`type`

`"user"`

The type of audience member removed from the audience.

`name`

`string`

The name of the managed app from whose audience this user was removed

`user`

`object`

The user removed from the audience.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`email` | `string` |

`type`

`"group"`

The type of audience member removed from the audience.

`name`

`string`

The name of the managed app from whose audience this group was removed

`group`

`object`

The group removed from the audience.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Remove component audience member

**Event type:**`removeComponentAudienceMember`

An audience member was removed from a component.

`any of the below objects`

`type`

`"user"`

The type of audience member removed from the audience

`name`

`string`

The name of the component from whose audience this user was removed

`user`

`object`

The user removed from the audience.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`email` | `string` |

`type`

`"group"`

The type of audience member removed from the audience

`name`

`string`

The name of the component from whose audience this group was removed

`group`

`object`

The group removed from the audience.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Add managed app collaborator

**Event type:**`addManagedAppCollaborator`

A collaborator was added to a managed app.

`any of the below objects`

`type`

`"user"`

The type of collaborator added to the managed app.

`name`

`string`

The name of the managed app to which this user was added.

`user`

`object`

The user added as a collaborator.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "create" \| "owner"`<br><br>The permission level at which the user was added as a collaborator. |
| <br>`name` | `string` |
| <br>`email` | `string` |

`type`

`"group"`

The type of collaborator added to the managed app.

`name`

`string`

The name of the managed app to which this group was added.

`group`

`object`

The group added as a collaborator.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "create" \| "owner"`<br><br>The permission level at which the group was added as a collaborator. |
| <br>`name` | `string` |

### Payload Version

1.0

Add component collaborator

**Event type:**`addComponentCollaborator`

A collaborator was added to a component.

`any of the below objects`

`type`

`"user"`

The type of collaborator added to the component.

`name`

`string`

The name of the component to which this user was added.

`user`

`object`

The user added as a collaborator.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "create" \| "owner"`<br><br>The permission level at which the user was added as a collaborator. |
| <br>`name` | `string` |
| <br>`email` | `string` |

`type`

`"group"`

The type of collaborator added to the component

`name`

`string`

The name of the component to which this group was added.

`group`

`object`

The group added as a collaborator.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "create" \| "owner"`<br><br>The permission level at which the group was added as a collaborator. |
| <br>`name` | `string` |

### Payload Version

1.0

Change managed app collaborator permission

**Event type:**`changeManagedAppCollaboratorPermission`

The direct permission of a collaborator on a managed app was changed.

`any of the below objects`

`type`

`"user"`

The type of collaborator whose permission on the managed app was changed.

`name`

`string`

The name of the managed app on which this user's permission was changed.

`user`

`object`

The user whose direct permission on the managed app was changed.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`email` | `string` |

`previous`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "create" \| "owner"`<br><br>The direct managed app permission level of the user prior to this change. |

`current`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "create" \| "owner"`<br><br>The new direct managed app permission level of the user. |

`type`

`"group"`

The type of collaborator whose permission on the managed app was changed.

`name`

`string`

The name of the managed app on which this group's permission was changed.

`group`

`object`

The group whose direct permission on the managed app was changed.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`previous`

`object`

`group`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "create" \| "owner"`<br><br>The direct managed app permission level of the group prior to this change. |

`current`

`object`

`group`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "create" \| "owner"`<br><br>The new direct managed app permission level of the group. |

### Payload Version

1.0

Change component collaborator permission

**Event type:**`changeComponentCollaboratorPermission`

The direct permission of a collaborator on a component was changed.

`any of the below objects`

`type`

`"user"`

The type of collaborator whose permission on the component was changed.

`name`

`string`

The name of the component on which this user's permission was changed.

`user`

`object`

The user whose direct permission on the component was changed.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`email` | `string` |

`previous`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "create" \| "owner"`<br><br>The direct component permission level of the user prior to this change. |

`current`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "create" \| "owner"`<br><br>The new direct component permission level of the user. |

`type`

`"group"`

The type of collaborator whose permission on the component was changed.

`name`

`string`

The name of the component on which this group's permission was changed.

`group`

`object`

The group whose direct permission on the component was changed.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`previous`

`object`

`group`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "create" \| "owner"`<br><br>The direct component permission level of the group prior to this change. |

`current`

`object`

`group`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "create" \| "owner"`<br><br>The new direct component permission level of the group. |

### Payload Version

1.0

Remove managed app collaborator

**Event type:**`removeManagedAppCollaborator`

A collaborator was removed from a managed app.

`any of the below objects`

`type`

`"user"`

The type of collaborator removed from the managed app.

`name`

`string`

The name of the managed app from which this user was removed.

`user`

`object`

The user removed from the managed app.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "create" \| "owner"`<br><br>The permission level of the user when removed from the managed app. |
| <br>`name` | `string` |
| <br>`email` | `string` |

`type`

`"group"`

The type of collaborator removed from the managed app.

`name`

`string`

The name of the managed app from which this group was removed.

`group`

`object`

The group removed from the managed app.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "create" \| "owner"`<br><br>The permission level of the group when removed from the managed app. |
| <br>`name` | `string` |

### Payload Version

1.0

Remove component collaborator

**Event type:**`removeComponentCollaborator`

A collaborator was removed from a component.

`any of the below objects`

`type`

`"user"`

The type of collaborator removed from the component.

`name`

`string`

The name of the component from which this user was removed.

`user`

`object`

The user removed from the component.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "create" \| "owner"`<br><br>The permission level of the user when removed from the component. |
| <br>`name` | `string` |
| <br>`email` | `string` |

`type`

`"group"`

The type of collaborator removed from the component.

`name`

`string`

The name of the component from which this group was removed.

`group`

`object`

The group removed from the component.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "create" \| "owner"`<br><br>The permission level of the group when removed from the component. |
| <br>`name` | `string` |

### Payload Version

1.0

Publish data set

**Event type:**`createPublishedDataset`

Creates a new published data set.

`object`

`publishedDataset`

`object`

The created published data set.

`name`

`string`

`owner`

`the below object`

`type`

`"user"`

The type of data set owner.

`user`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create" \| "owner" \| "none"`<br><br>The permission level of the data set owner. |
| <br>`name` | `string` |
| <br>`email` | `string` |

`audience`

`object`

|     |     |
| --- | --- |
| <br>`type` | `"orgUnitWide" \| "gridWide" \| "specificUserGroups" \| "unselected"`<br><br>The audience type of the data set. |

### Payload Version

1.0

Change data set name

**Event type:**`changePublishedDatasetName`

The name of a published data set was changed.

`object`

`current`

`object`

`publishedDataset`

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The new name of the data set. |

`previous`

`object`

`publishedDataset`

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The previous name of the data set. |

### Payload Version

2.0

Unpublish a data set

**Event type:**`deletePublishedDataset`

Deletes a published data set.

`object`

`publishedDataset`

`object`

The deleted published data set.

|     |     |
| --- | --- |
| <br>`name` | `string` |

### Payload Version

2.0

Update published data set owner

**Event type:**`updatePublishedDatasetOwner`

The owner of a published data set was updated.

`object`

`name`

`string`

The name of the data set in which the owner was updated.

`current`

`the below object`

`type`

`"user"`

The type of the new data set owner.

`user`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create" \| "owner" \| "none"`<br><br>The permission level of the new data set owner. |
| <br>`name` | `string` |
| <br>`email` | `string` |

`previous`

`the below object`

`type`

`"user"`

The type of the previous data set owner.

`user`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create" \| "owner" \| "none"`<br><br>The permission level of the previous data set owner. |
| <br>`name` | `string` |
| <br>`email` | `string` |

### Payload Version

2.0

Update published data set audiences

**Event type:**`updatePublishedDatasetAudiences`

The audiences of a published data set were updated.

`object`

`name`

`string`

The name of the data set in which the audiences were updated.

`originatingUserId`

`string`

Id of the user that performed the audiences update.

`current`

`object`

|     |     |
| --- | --- |
| <br>`type` | `"orgUnitWide" \| "gridWide" \| "specificUserGroups" \| "unselected"`<br><br>The updated audience type of the data set. |
| <br>`audienceIds` | `array of strings` |

`previous`

`object`

|     |     |
| --- | --- |
| <br>`type` | `"orgUnitWide" \| "gridWide" \| "specificUserGroups" \| "unselected"`<br><br>The original audience type of the data set. |
| <br>`audienceIds` | `array of strings` |

### Payload Version

2.0

Update published data set verification status

**Event type:**`updatePublishedDatasetVerificationStatus`

Published data set verification status was updated

`object`

`name`

`string`

The name of the data set in which the verification status was updated.

`previous`

`object`

|     |     |
| --- | --- |
| <br>`verificationStatus` | `"unverified" \| "verified"` |

`current`

`object`

|     |     |
| --- | --- |
| <br>`verificationStatus` | `"unverified" \| "verified"` |

### Payload Version

2.0

Deactivate published data set

**Event type:**`deactivatePublishedDataset`

A published data set was made inactive due to changes in share or sync settings

`object`

`deactivationReason`

`"shareNotEnabled" | "parentSyncTurnedOff" | "shareHasPassword" | "shareEmailDomainRestricted" | "shareTwoWaySyncEnabled" | "dataTableDeleted" | "dataTableBackedDatasetMadeInactive"`

`publishedDataset`

`object`

The deactivated dataset

|     |     |
| --- | --- |
| <br>`name` | `string` |

### Payload Version

1.0

Reactivate published data set

**Event type:**`reactivatePublishedDataset`

A published data set was made active after deactivation

`object`

`publishedDataset`

`object`

The reactivated dataset

|     |     |
| --- | --- |
| <br>`name` | `string` |

### Payload Version

2.0

Create HyperDB table

**Event type:**`createDataTable`

Creates a new HyperDB table.

`object`

`dataTable`

`any of the below objects`

|     |     |
| --- | --- |
| <br>`sourceType` | `"csv"`<br><br>The type of the new source. |
| <br>`name` | `string`<br><br>The name of the HyperDB table. |
| <br>`sourceFilename` | `string`<br><br>The source filename of the HyperDB table. |
| <br>`description` | `optional<``string``>`<br><br>The description of the HyperDB table. |

|     |     |
| --- | --- |
| <br>`sourceType` | `"snowflake"`<br><br>The type of the new source. |
| <br>`name` | `string`<br><br>The name of the HyperDB table. |
| <br>`warehouse` | `string`<br><br>The snowflake warehouse name. |
| <br>`database` | `string`<br><br>The snowflake database name. |
| <br>`schema` | `string`<br><br>The snowflake schema name. |
| <br>`model` | `string`<br><br>The snowflake model name. |
| <br>`description` | `optional<``string``>`<br><br>The description of the HyperDB table. |

|     |     |
| --- | --- |
| <br>`sourceType` | `"salesforce" \| "databricks" \| "googleDrive"`<br><br>The type of the new source. |
| <br>`name` | `string`<br><br>The name of the HyperDB table. |
| <br>`sourceReference` | `string`<br><br>The source reference of the HyperDB table. |
| <br>`description` | `optional<``string``>`<br><br>The description of the HyperDB table. |

### Payload Version

3.1

Update HyperDB table single select column choices

**Event type:**`updateDataTableSingleSelectColumnChoices`

Updates choices of a HyperDB table single select column.

`object`

`dataTableId`

`string`

The HyperDB table.

`columnId`

`integer`

The single select column

`choices`

`array of the below object`

The updated choices

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`color` | `"blue" \| "cyan" \| "teal" \| "green" \| "yellow" \| "orange" \| "red" \| "pink" \| "purple" \| "gray" \| "blueMedium" \| "cyanMedium" \| "tealMedium" \| "greenMedium" \| "yellowMedium" \| "orangeMedium" \| "redMedium" \| "pinkMedium" \| "purpleMedium" \| "grayMedium" \| "blueDark" \| "cyanDark" \| "tealDark" \| "greenDark" \| "yellowDark" \| "orangeDark" \| "redDark" \| "pinkDark" \| "purpleDark" \| "grayDark" \| "blueDarker" \| "cyanDarker" \| "tealDarker" \| "greenDarker" \| "yellowDarker" \| "orangeDarker" \| "redDarker" \| "pinkDarker" \| "purpleDarker" \| "grayDarker"` |
| <br>`fractionalIndex` | `string` |

### Payload Version

1.0

Update HyperDB table source

**Event type:**`updateDataTableSource`

Updates a HyperDB table from a new source file.

`object`

`newSourceInfo`

`object`

The new source information for the HyperDB table.

|     |     |
| --- | --- |
| <br>`sourceType` | `"csv"`<br><br>The type of the new source. |
| <br>`filename` | `optional<``string``>`<br><br>The filename of the new source. |

### Payload Version

1.0

Delete HyperDB table

**Event type:**`deleteDataTable`

Deletes a HyperDB table.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the deleted HyperDB table. |

### Payload Version

1.0

Publish data set

**Event type:**`createPublishedDatasetFromDataTable`

Creates a new published data set.

`object`

`publishedDataset`

`object`

The created published data set.

`name`

`string`

`owner`

`the below object`

`type`

`"user"`

The type of data set owner.

`user`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`email` | `string` |

`audience`

`object`

|     |     |
| --- | --- |
| <br>`type` | `"orgUnitWide" \| "gridWide" \| "specificUserGroups" \| "unselected"`<br><br>The audience type of the data set. |

### Payload Version

1.0

Abort HyperDB table import

**Event type:**`abortDataTableImportInProgress`

Cancel the existing import of a HyperDB table.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the HyperDB table. |

### Payload Version

1.0

Update a HyperDB table published data set

**Event type:**`updateDataTablePublishedDataSet`

Updates a data set backed by a HyperDB table.

`object`

`current`

`object`

The current published data set.

`name`

`string`

`owner`

`the below object`

`type`

`"user"`

The type of data set owner.

`user`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`email` | `string` |

`audience`

`object`

|     |     |
| --- | --- |
| <br>`type` | `"orgUnitWide" \| "gridWide" \| "specificUserGroups" \| "unselected"`<br><br>The audience type of the data set. |

`previous`

`object`

The previous published data set.

`name`

`string`

`owner`

`the below object`

`type`

`"user"`

The type of data set owner.

`user`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`email` | `string` |

`audience`

`object`

|     |     |
| --- | --- |
| <br>`type` | `"orgUnitWide" \| "gridWide" \| "specificUserGroups" \| "unselected"`<br><br>The audience type of the data set. |

### Payload Version

1.0

Update the status of a data set from a HyperDB table

**Event type:**`updateDataTablePublishedDataSetStatus`

Updates the status of a data set that was published from a HyperDB table.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the HyperDB table. |
| <br>`current` | `"active" \| "inactive" \| "activeNotInLibrary"`<br><br>The current status of the data set. |
| <br>`previous` | `"active" \| "inactive" \| "activeNotInLibrary"`<br><br>The current status of the data set. |

### Payload Version

1.0

Move HyperDb table to new owner

**Event type:**`moveDataTable`

Moves the HyperDB the HyperDB table to a new enterprise

`object`

`name`

`string`

The name of the moved HyperDB Table

`previous`

`object`

The previous billing plan and enterprise account

`enterpriseAccount`

`object`

The enterprise account from which the HyperDB table was moved.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`current`

`object`

The current billing plan and enterprise account

`enterpriseAccount`

`object`

The enterprise account into which the HyperDB table was moved.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Create workspace

**Event type:**`createWorkspace`

A new workspace was created.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the created workspace |

### Payload Version

1.0

Delete workspace

**Event type:**`deleteWorkspace`

A workspace was deleted.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the deleted workspace |

### Payload Version

1.0

Restore workspace from trash

**Event type:**`restoreWorkspaceFromTrash`

A workspace was restored from the trash.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the restored workspace |

### Payload Version

1.0

Rename workspace

**Event type:**`updateWorkspaceName`

A workspace was renamed.

`object`

`previous`

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the workspace prior to being renamed |

`current`

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The new name of the workspace |

### Payload Version

1.0

Move workspace

**Event type:**`moveWorkspace`

A workspace was moved between accounts.

`object`

`name`

`string`

The name of the moved workspace

`previous`

`object`

The previous billing plan and enterprise account

`billingPlan`

`object`

The workspace's previous billing plan

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`type` | `"free" \| "plus" \| "starter" \| "pro" \| "enterprise"` |

`enterpriseAccount`

`optional<``object``>`

The enterprise account from which the workspace was moved. If blank, the workspace was moved from a non-enterprise account

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`current`

`object`

The current billing plan and enterprise account

`billingPlan`

`object`

The workspace's current billing plan

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`type` | `"free" \| "plus" \| "starter" \| "pro" \| "enterprise"` |

`enterpriseAccount`

`optional<``object``>`

The enterprise account into which the workspace was moved. If blank, the workspace was moved into a non-enterprise account

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Change workspace sharing restrictions

**Event type:**`changeWorkspaceSharingRestrictions`

The sharing restrictions for a workspace were changed.

`object`

`name`

`string`

The name of the workspace

`inviteCreationRestriction`

`optional<``"unrestricted" | "onlyOwners"``>`

Whether only owners can add collaborators or create invites to this workspace, its bases, and its interfaces

`shareCreationRestriction`

`optional<``"unrestricted" | "onlyOwners"``>`

Whether only owners can create new share links to this workspace, its bases, and its interfaces

`previous`

`object`

The sharing restrictions for a workspace before being changed

|     |     |
| --- | --- |
| <br>`inviteCreationRestriction` | `optional<``"unrestricted" \| "onlyOwners"``>`<br><br>Whether only owners can add collaborators or create invites to this workspace, its bases, and its interfaces |
| <br>`shareCreationRestriction` | `optional<``"unrestricted" \| "onlyOwners"``>`<br><br>Whether only owners can create new share links to this workspace, its bases, and its interfaces |

`current`

`object`

The sharing restrictions for a workspace after being changed

|     |     |
| --- | --- |
| <br>`inviteCreationRestriction` | `optional<``"unrestricted" \| "onlyOwners"``>`<br><br>Whether only owners can add collaborators or create invites to this workspace, its bases, and its interfaces |
| <br>`shareCreationRestriction` | `optional<``"unrestricted" \| "onlyOwners"``>`<br><br>Whether only owners can create new share links to this workspace, its bases, and its interfaces |

### Payload Version

1.0

Create workspace invite link

**Event type:**`addWorkspaceInviteLink`

An invite link was created for a workspace.

`object`

`url`

`string`

The URL of the invite link

`permissionLevel`

`"read" | "comment" | "edit" | "create" | "owner"`

The permission level a user would be granted when accepting this invite

`restrictedToEmailDomains`

`array of strings`

The email domain restrictions assigned to the invite link. When `null`, no domain restrictions are assigned to the invite link, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand invite link accessibility.

`effectiveEmailDomainAllowList`

`array of strings`

The email domains effectively allowed to access this invite link. This factors in the invite link's email domain restrictions and all enterprise-wide invite link restrictions. A viewer must have an account associated with an email domain included in the allow list to accept this invite link. When `null`, any email domain may accept the invite link. If the list is empty, the invite link cannot be used by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide invite restrictions).

`workspace`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the workspace at time of invite link creation |

### Payload Version

1.0

Configure workspace invite link

**Event type:**`configureWorkspaceInviteLink`

An workspace invite link's configuration was changed.

`object`

`url`

`string`

The URL of the invite link

`permissionLevel`

`optional<``"read" | "comment" | "edit" | "create" | "owner"``>`

The permission level a user would be granted when accepting this invite

`previous`

`object`

The properties of the invite link configuration before these changes were applied

|     |     |
| --- | --- |
| <br>`url` | `optional<``string``>` |
| <br>`permissionLevel` | `optional<``"read" \| "comment" \| "edit" \| "create" \| "owner"``>` |
| <br>`emailDomain` | `optional<``string``>` |
| <br>`restrictedToEmailDomains` | `optional<``array of strings``>` |
| <br>`effectiveEmailDomainAllowList` | `optional<``array of strings``>` |

`current`

`object`

The properties of the invite link configuration after these changes were applied

|     |     |
| --- | --- |
| <br>`url` | `optional<``string``>` |
| <br>`permissionLevel` | `optional<``"read" \| "comment" \| "edit" \| "create" \| "owner"``>` |
| <br>`emailDomain` | `optional<``string``>` |
| <br>`restrictedToEmailDomains` | `optional<``array of strings``>` |
| <br>`effectiveEmailDomainAllowList` | `optional<``array of strings``>` |

`restrictedToEmailDomains`

`optional<``array of strings``>`

The email domain restrictions assigned to the invite link. When `null`, no domain restrictions are assigned to the invite link, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand invite link accessibility.

`effectiveEmailDomainAllowList`

`optional<``array of strings``>`

The email domains effectively allowed to access this invite link. This factors in the invite link's email domain restrictions and all enterprise-wide invite link restrictions. A viewer must have an account associated with an email domain included in the allow list to accept this invite link. When `null`, any email domain may accept the invite link. If the list is empty, the invite link cannot be used by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide invite restrictions).

`workspace`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the workspace at time of invite link modification |

### Payload Version

1.0

Remove workspace invite link

**Event type:**`removeWorkspaceInviteLink`

An invite link was removed from a workspace.

`object`

`url`

`string`

The URL of the invite link

`permissionLevel`

`"read" | "comment" | "edit" | "create" | "owner"`

The permission level a user would be granted when accepting this invite

`restrictedToEmailDomains`

`array of strings`

The email domain restrictions assigned to the invite link. When `null`, no domain restrictions are assigned to the invite link, but higher level ones may affect it. We recommend using effectiveEmailDomainAllowList to understand invite link accessibility.

`effectiveEmailDomainAllowList`

`array of strings`

The email domains effectively allowed to access this invite link. This factors in the invite link's email domain restrictions and all enterprise-wide invite link restrictions. A viewer must have an account associated with an email domain included in the allow list to accept this invite link. When `null`, any email domain may accept the invite link. If the list is empty, the invite link cannot be used by anyone due to restrictions, (e.g. no member of restrictEmailDomainTo is allowed by enterprise-wide invite restrictions).

`workspace`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the workspace at time of invite link removal |

### Payload Version

1.0

Change workspace AI permissions

**Event type:**`changeWorkspaceAiPermissions`

The AI permissions for a workspace were changed.

`object`

`name`

`string`

The name of the workspace

`previous`

`object`

The AI permissions for a workspace before being changed

|     |     |
| --- | --- |
| <br>`enableAiFeatures` | `optional<``"allBases" \| "noBases"``>`<br><br>Whether AI features are enabled for bases in this workspace |

`current`

`object`

The AI permissions for a workspace after being changed

|     |     |
| --- | --- |
| <br>`enableAiFeatures` | `optional<``"allBases" \| "noBases"``>`<br><br>Whether AI features are enabled for bases in this workspace |

### Payload Version

1.0

Invite workspace collaborator

**Event type:**`inviteWorkspaceCollaborator`

A user was invited to collaborate on a workspace.

`object`

`name`

`string`

The name of the workspace to which this user was invited

`user`

`object`

The user invited as a collaborator.

|     |     |
| --- | --- |
| <br>`id` | `optional<``string``>`<br><br>Present when the invited user is already an Airtable user |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create" \| "owner"`<br><br>The permission level at which the user was invited as a collaborator. |
| <br>`name` | `optional<``string``>`<br><br>Present when the invited user is already an Airtable user |
| <br>`email` | `string` |

### Payload Version

1.0

Add workspace collaborator

**Event type:**`addWorkspaceCollaborator`

A collaborator was added to a workspace.

`any of the below objects`

`type`

`"user"`

The type of collaborator added to the workspace

`name`

`string`

The name of the workspace to which this user was added

`user`

`object`

The user added as a collaborator.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create" \| "owner"`<br><br>The permission level at which the user was added as a collaborator. |
| <br>`name` | `string` |
| <br>`email` | `string` |

`type`

`"group"`

The type of collaborator added to the workspace

`name`

`string`

The name of the workspace to which this group was added

`group`

`object`

The group added as a collaborator.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create" \| "owner"`<br><br>The permission level at which the group was added as a collaborator. |
| <br>`name` | `string` |

### Payload Version

1.0

Change workspace collaborator permission

**Event type:**`changeWorkspaceCollaboratorPermission`

The direct permission of a collaborator on a workspace was changed.

`any of the below objects`

`type`

`"user"`

The type of collaborator whose permission on the workspace was changed.

`name`

`string`

The name of the workspace on which this user's permission was changed.

`user`

`object`

The user whose direct permission on the workspace was changed.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`email` | `string` |

`previous`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create" \| "owner"`<br><br>The direct workspace permission level of the user prior to this change. |

`current`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create" \| "owner"`<br><br>The new direct workspace permission level of the user. |

`type`

`"group"`

The type of collaborator whose permission on the workspace was changed.

`name`

`string`

The name of the workspace on which this group's permission was changed.

`group`

`object`

The group whose direct permission on the workspace was changed.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`previous`

`object`

`group`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create" \| "owner"`<br><br>The direct workspace permission level of the group prior to this change. |

`current`

`object`

`group`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create" \| "owner"`<br><br>The new direct workspace permission level of the group. |

### Payload Version

1.0

Change workspace invite permission

**Event type:**`changeWorkspaceInvitePermission`

The permission a user will receive on a workspace when they accept the associated invite was changed.

`object`

`name`

`string`

The name of the workspace on which this invite's permission was changed.

`user`

`object`

The user whose invited permission on the workspace was changed.

|     |     |
| --- | --- |
| <br>`id` | `optional<``string``>`<br><br>Present when the invited user is already an Airtable user |
| <br>`name` | `optional<``string``>`<br><br>Present when the invited user is already an Airtable user |
| <br>`email` | `string` |

`previous`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create" \| "owner"`<br><br>The direct permission level the invited user would have received on accepting the workspace invite prior to this change. |

`current`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create" \| "owner"`<br><br>The new direct permission level the invited user will receive on accepting the workspace invite. |

### Payload Version

1.0

Uninvite workspace collaborator

**Event type:**`uninviteWorkspaceCollaborator`

A user was uninvited from a workspace.

`object`

`name`

`string`

The name of the workspace from which this user was uninvited

`user`

`object`

The user uninvited from the workspace.

|     |     |
| --- | --- |
| <br>`id` | `optional<``string``>`<br><br>Present when the uninvited user is already an Airtable user |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create" \| "owner"`<br><br>The permission level of the user when uninvited from the workspace. |
| <br>`name` | `optional<``string``>`<br><br>Present when the uninvited user is already an Airtable user |
| <br>`email` | `string` |

### Payload Version

1.0

Remove workspace collaborator

**Event type:**`removeWorkspaceCollaborator`

A collaborator was removed from a workspace.

`any of the below objects`

`type`

`"user"`

The type of collaborator removed from the workspace

`name`

`string`

The name of the workspace from which this user was removed

`user`

`object`

The user removed from the workspace.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create" \| "owner"`<br><br>The permission level of the user when removed from the workspace. |
| <br>`name` | `string` |
| <br>`email` | `string` |

`type`

`"group"`

The type of collaborator removed from the workspace

`name`

`string`

The name of the workspace from which this group was removed

`group`

`object`

The group removed from the workspace.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit" \| "create" \| "owner"`<br><br>The permission level of the group when removed from the workspace. |
| <br>`name` | `string` |

### Payload Version

1.0

Resend workspace invite

**Event type:**`resendWorkspaceInvite`

An invitation to join a workspace was resent.

`object`

`email`

`string`

The recipient email of the resent invite.

`originatingUser`

`object`

The user who resent the invite.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `string` |

`referrerUser`

`object`

The user who originally sent the invite.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Create interface

**Event type:**`createInterface`

An interface was created

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the created interface |

### Payload Version

1.0

Delete interface

**Event type:**`deleteInterface`

An interface was deleted.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the deleted interface |

### Payload Version

1.0

Restore interface from trash

**Event type:**`restoreInterfaceFromTrash`

An interface was restored from the trash.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the restored interface |

### Payload Version

1.0

Duplicate Interface

**Event type:**`duplicateInterface`

An interface was duplicated.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the newly duplicated interface |

### Payload Version

1.0

View interface

**Event type:**`viewInterface`

An interface was viewed. This event is emitted at most once every 5 minutes per user/interface combination.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the viewed interface |

### Payload Version

1.0

Rename interface

**Event type:**`updateInterfaceName`

An interface was renamed

`object`

`previous`

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the interface prior to being renamed |

`current`

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The new name of the interface |

### Payload Version

1.0

Publish interface

**Event type:**`publishInterface`

An interface was published

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the published interface |

### Payload Version

1.0

Unpublish interface

**Event type:**`unpublishInterface`

An interface was unpublished.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the unpublished interface |

### Payload Version

1.0

Open record details from interface

**Event type:**`openRecordDetailsFromInterface`

A record details page was opened from an interface.

`object`

`recordId`

`string`

The ID of the viewed record.

`interfaceViewMode`

`"view" | "edit" | "preview"`

The mode the interface was in when the record was viewed. For example, "edit" and "preview" correspond to the record being viewed while the interface is being actively edited or is in preview mode.

`interface`

`object`

The interface from which the record was viewed.

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>The ID of the interface from which the record was viewed. |
| <br>`name` | `string`<br><br>The name of the interface from which the record was viewed. |

`entryPage`

`object`

The interface page where the record was viewed.

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>The ID of the interface page where the record was viewed. |
| <br>`name` | `string`<br><br>The name of the interface page where the record was viewed. |

`table`

`object`

The table the viewed record belongs to.

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>The ID of the table the viewed record belongs to |
| <br>`name` | `string`<br><br>The name of the table the viewed record belongs to |

### Payload Version

1.0

View form

**Event type:**`viewForm`

A form was viewed. This event is emitted at most once every 5 minutes per user/form combination.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the viewed form |

### Payload Version

1.0

Publish form

**Event type:**`publishForm`

A form was published

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the published form |

### Payload Version

1.0

Unpublish form

**Event type:**`unpublishForm`

A form was unpublished.

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the unpublished form |

### Payload Version

1.0

Configure form sharing settings

**Event type:**`configureFormSharingSettings`

A form's sharing settings were configured.

`object`

`name`

`string`

The name of the unpublished form

`isPublic`

`optional<``boolean``>`

Whether this form is accessible to anyone, including logged-out users

`isPasswordProtected`

`optional<``boolean``>`

Whether access to this form is password protected

`previous`

`object`

The properties of the page configuration before these changes were applied

|     |     |
| --- | --- |
| <br>`isPublic` | `optional<``boolean``>`<br><br>Whether this form is accessible to anyone, including logged-out users |
| <br>`isPasswordProtected` | `optional<``boolean``>`<br><br>Whether access to this form is password protected |
| <br>`effectiveEmailDomainAllowList` | `optional<``array of strings``>`<br><br>The email domains effectively allowed to access this form. This factors in the form's email domain restrictions and all enterprise-wide sharing restrictions. A viewer must have an account associated with an email domain included in the allow list to access this form. |

`current`

`object`

The properties of the page configuration after these changes were applied

|     |     |
| --- | --- |
| <br>`isPublic` | `optional<``boolean``>`<br><br>Whether this form is accessible to anyone, including logged-out users |
| <br>`isPasswordProtected` | `optional<``boolean``>`<br><br>Whether access to this form is password protected |
| <br>`effectiveEmailDomainAllowList` | `optional<``array of strings``>`<br><br>The email domains effectively allowed to access this form. This factors in the form's email domain restrictions and all enterprise-wide sharing restrictions. A viewer must have an account associated with an email domain included in the allow list to access this form. |

`effectiveEmailDomainAllowList`

`optional<``array of strings``>`

The email domains effectively allowed to access this form. This factors in the form's email domain restrictions and all enterprise-wide sharing restrictions. A viewer must have an account associated with an email domain included in the allow list to access this form.

### Payload Version

1.0

Invite interface collaborator

**Event type:**`inviteInterfaceCollaborator`

A user was invited to collaborate on an interface.

`object`

`name`

`string`

The name of the interface to which this user was invited

`user`

`object`

The user invited as a collaborator.

|     |     |
| --- | --- |
| <br>`id` | `optional<``string``>`<br><br>Present when the invited user is already an Airtable user |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"`<br><br>The permission level at which the user was invited as a collaborator. |
| <br>`name` | `optional<``string``>`<br><br>Present when the invited user is already an Airtable user |
| <br>`email` | `string` |

### Payload Version

1.0

Add interface collaborator

**Event type:**`addInterfaceCollaborator`

A collaborator was added to an interface.

`any of the below objects`

`type`

`"user"`

The type of collaborator added to the interface

`name`

`string`

The name of the interface to which this user was added

`user`

`object`

The user added as a collaborator.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"`<br><br>The permission level at which the user was added as a collaborator. |
| <br>`name` | `string` |
| <br>`email` | `string` |

`type`

`"group"`

The type of collaborator added to the interface

`name`

`string`

The name of the interface to which this group was added

`group`

`object`

The group added as a collaborator.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"`<br><br>The permission level at which the group was added as a collaborator. |
| <br>`name` | `string` |

### Payload Version

1.0

Change interface collaborator permission

**Event type:**`changeInterfaceCollaboratorPermission`

The direct permission of a collaborator on an interface was changed.

`any of the below objects`

`type`

`"user"`

The type of collaborator whose permission on the interface was changed.

`name`

`string`

The name of the interface on which this user's permission was changed.

`user`

`object`

The user whose direct permission on the interface was changed.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`email` | `string` |

`previous`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"`<br><br>The direct interface permission level of the user prior to this change. |

`current`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"`<br><br>The new direct interface permission level of the user. |

`type`

`"group"`

The type of collaborator whose permission on the interface was changed.

`name`

`string`

The name of the interface on which this group's permission was changed.

`group`

`object`

The group whose direct permission on the interface was changed.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`previous`

`object`

`group`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"`<br><br>The direct interface permission level of the group prior to this change. |

`current`

`object`

`group`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"`<br><br>The new direct interface permission level of the group. |

### Payload Version

1.0

Change interface invite permission

**Event type:**`changeInterfaceInvitePermission`

The permission a user will receive on an interface when they accept the associated invite was changed.

`object`

`name`

`string`

The name of the interface on which this invite's permission was changed.

`user`

`object`

The user whose invited permission on the interface was changed.

|     |     |
| --- | --- |
| <br>`id` | `optional<``string``>`<br><br>Present when the invited user is already an Airtable user |
| <br>`name` | `optional<``string``>`<br><br>Present when the invited user is already an Airtable user |
| <br>`email` | `string` |

`previous`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"`<br><br>The direct permission level the invited user would have received on accepting the interface invite prior to this change. |

`current`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"`<br><br>The new direct permission level the invited user will receive on accepting the interface invite. |

### Payload Version

1.0

Uninvite interface collaborator

**Event type:**`uninviteInterfaceCollaborator`

A user was uninvited from an interface.

`object`

`name`

`string`

The name of the interface from which this user was uninvited

`user`

`object`

The user uninvited from the interface.

|     |     |
| --- | --- |
| <br>`id` | `optional<``string``>`<br><br>Present when the uninvited user is already an Airtable user |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"`<br><br>The permission level of the user when uninvited from the interface. |
| <br>`name` | `optional<``string``>`<br><br>Present when the uninvited user is already an Airtable user |
| <br>`email` | `string` |

### Payload Version

1.0

Remove interface collaborator

**Event type:**`removeInterfaceCollaborator`

A collaborator was removed from an interface.

`any of the below objects`

`type`

`"user"`

The type of collaborator removed from the interface

`name`

`string`

The name of the interface from which this user was removed

`user`

`object`

The user removed from the interface.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"`<br><br>The permission level of the user when removed from the interface. |
| <br>`name` | `string` |
| <br>`email` | `string` |

`type`

`"group"`

The type of collaborator removed from the interface

`name`

`string`

The name of the interface from which this group was removed

`group`

`object`

The group removed from the interface.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"`<br><br>The permission level of the group when removed from the interface. |
| <br>`name` | `string` |

### Payload Version

1.0

Resend interface invite

**Event type:**`resendInterfaceInvite`

An invitation to join an interface was resent.

`object`

`email`

`string`

The recipient email of the resent invite.

`originatingUser`

`object`

The user who resent the invite.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `string` |

`referrerUser`

`object`

The user who originally sent the invite.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `string` |

### Payload Version

1.0

Change interface organization-wide sharing permission

**Event type:**`configureInterfaceOrgWideSharing`

An interface's organization-wide sharing permission was updated.

`object`

`name`

`string`

The name of the interface which was updated with a new permission for organization-wide sharing.

`audience`

`object`

The audience with the updated interface organization-wide sharing permission

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`enterpriseAccountId` | `string` |

`previous`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"edit" \| "read" \| "comment" \| "none"`<br><br>The interface permission level for organization-wide sharing prior to this change. |

`current`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"edit" \| "read" \| "comment" \| "none"`<br><br>The new interface organization-wide sharing permission level post this change. |

### Payload Version

1.1

Create portal

**Event type:**`createPortal`

A portal was created

`object`

|     |     |
| --- | --- |
| <br>`portalId` | `string`<br><br>The ID of the created portal. |
| <br>`parentApplicationId` | `string`<br><br>The application ID associated with the newly created portal. |

### Payload Version

1.0

Delete portal

**Event type:**`deletePortal`

Deletes a portal.

`object`

|     |     |
| --- | --- |
| <br>`portalId` | `string`<br><br>The ID of the deleted portal. |
| <br>`parentApplicationId` | `string`<br><br>The application ID associated with the deleted portal. |

### Payload Version

1.0

Invite interface guest user

**Event type:**`invitePortalCollaborator`

An interface guest user was invited to collaborate on a portal interface.

`object`

`name`

`string`

The name of the interface to which this guest user was invited

`user`

`object`

The invited guest user.

|     |     |
| --- | --- |
| <br>`id` | `optional<``string``>`<br><br>Present when the invited guest user is already an Airtable user |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"`<br><br>The permission level at which the guest user was invited. |
| <br>`name` | `optional<``string``>`<br><br>Present when the invited guest user is already an Airtable user |
| <br>`email` | `string` |

### Payload Version

1.0

Add interface guest user

**Event type:**`addPortalCollaborator`

An interface guest user was added to a portal interface.

`object`

`type`

`"user"`

The type of guest user added to the interface

`name`

`string`

The name of the interface to which this guest user was added

`user`

`object`

The added guest user.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"`<br><br>The permission level at which the guest user was added. |
| <br>`name` | `string` |
| <br>`email` | `string` |

### Payload Version

1.0

Uninvite interface guest user

**Event type:**`uninvitePortalCollaborator`

An interface guest user was uninvited from a portal interface.

`object`

`name`

`string`

The name of the interface from which this guest user was uninvited

`user`

`object`

The guest user uninvited from the interface.

|     |     |
| --- | --- |
| <br>`id` | `optional<``string``>`<br><br>Present when the uninvited guest user is already an Airtable user |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"`<br><br>The permission level of the guest user when uninvited from the interface. |
| <br>`name` | `optional<``string``>`<br><br>Present when the uninvited guest user is already an Airtable user |
| <br>`email` | `string` |

### Payload Version

1.0

Change interface guest user permission

**Event type:**`changePortalCollaboratorPermission`

The direct permission of an interface guest user on a portal interface was changed.

`object`

`type`

`"user"`

The type of guest user whose permission on the interface was changed.

`name`

`string`

The name of the interface on which this guest user's permission was changed.

`user`

`object`

The guest user whose direct permission on the interface was changed.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |
| <br>`email` | `string` |

`previous`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"`<br><br>The direct interface permission level of the guest user prior to this change. |

`current`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"`<br><br>The new direct interface permission level of the guest user. |

### Payload Version

1.0

Change portal interface invite permission

**Event type:**`changePortalInvitePermission`

The permission an interface guest user will receive on an interface when they accept the associated invite was changed.

`object`

`name`

`string`

The name of the interface on which this invite's permission was changed.

`user`

`object`

The guest user whose invited permission on the interface was changed.

|     |     |
| --- | --- |
| <br>`id` | `optional<``string``>`<br><br>Present when the invited guest user is already an Airtable user |
| <br>`name` | `optional<``string``>`<br><br>Present when the invited guest user is already an Airtable user |
| <br>`email` | `string` |

`previous`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"`<br><br>The direct permission level the invited guest user would have received on accepting the interface invite prior to this change. |

`current`

`object`

`user`

`object`

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"`<br><br>The new direct permission level the invited guest user will receive on accepting the interface invite. |

### Payload Version

1.0

Remove interface guest user

**Event type:**`removePortalCollaborator`

An interface guest user was removed from a portal interface.

`object`

`type`

`"user"`

The type of guest user removed from the interface

`name`

`string`

The name of the interface from which this guest user was removed

`user`

`object`

The guest user removed from the interface.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"`<br><br>The permission level of the guest user when removed from the interface. |
| <br>`name` | `string` |
| <br>`email` | `string` |

### Payload Version

1.0

Download CSV

**Event type:**`downloadCSV`

A CSV document was downloaded from a view or interface page element.

`any of the below objects`

`csvDownloadOrigin`

`optional<``"sharedViewEmbed" | "viewMenuPopover"``>`

Origin of the CSV download

`view`

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the view |

`table`

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the table. The table name is null if the view is a public shared view |

`csvDownloadOrigin`

`optional<``"queryContainerCta" | "dashboardDrilldownOrExpansion"``>`

Origin of the CSV download

`page`

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the page from which the data was downloaded. |

`pageElement`

`object`

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name of the page element that triggered the download. |

### Payload Version

2.0

Moderate AI content

**Event type:**`moderateAiContent`

AI content violated an AI provider’s moderation policy and returned an error.

`object`

`aiModelProvider`

`"openAi" | "anthropic" | "amazonBedrock" | "ibmWatsonx" | "selfHosted" | "google"`

The AI model provider that flagged the content

`surface`

`string`

The AI surface where the content was moderated

`categories`

`array of strings`

The moderation categories that were flagged

`field`

`optional<``object``>`

Field that produced the content that was moderated.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string` |

`record`

`optional<``object``>`

Record that produced the content that was moderated.

|     |     |
| --- | --- |
| <br>`id` | `string` |

`automation`

`optional<``object``>`

Automation that produced the content that was moderated.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `optional<``string``>` |

`base`

`optional<``object``>`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the base in which the moderation occured. |

`workspace`

`optional<``object``>`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`name` | `string`<br><br>The name of the workspace in which the moderation occured. |

### Payload Version

2.0

Update Automation Subscribers

**Event type:**`updateAutomationSubscribers`

User updated the list of subscribers receiving automation notifications.

`object`

`previous`

`array of the below object`

The list of subscribers before the update.

A user subscribed to the automation.

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>The ID of the user subscribed to the automation. |
| <br>`email` | `string`<br><br>The email address of the user subscribed to the automation. |
| <br>`displayName` | `string`<br><br>The display name of the user subscribed to the automation. |

`current`

`array of the below object`

The list of subscribers after the update.

A user subscribed to the automation.

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>The ID of the user subscribed to the automation. |
| <br>`email` | `string`<br><br>The email address of the user subscribed to the automation. |
| <br>`displayName` | `string`<br><br>The display name of the user subscribed to the automation. |

### Payload Version

1.0

!!
