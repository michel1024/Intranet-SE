<!DOCTYPE html>
<html lang="es">

  <head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1252" />
    <meta http-equiv="X-UA-Compatible" content="IE=10" />
    <title>Intranet Sistemas Expertos</title>
    
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" /> -->

    <SharePoint:ScriptLink name="microsoftajax.js" runat="server" LoadAfterUI="true" Localizable="false"/>
    <SharePoint:ScriptLink name="init.js" runat="server" LoadAfterUI="true" Localizable="false"/>
    <SharePoint:ScriptLink name="sp.init.js" runat="server" LoadAfterUI="true" Localizable="false"/>
    <SharePoint:ScriptLink name="core.js" runat="server" LoadAfterUI="true" Localizable="false"/>
    <SharePoint:ScriptLink name="clienttemplates.js" runat="server" LoadAfterUI="true" Localizable="false"/>
    <SharePoint:ScriptLink name="clientforms.js" runat="server" LoadAfterUI="true" Localizable="false"/>
    <SharePoint:ScriptLink name="clientpeoplepicker.js" runat="server" LoadAfterUI="true" Localizable="false"/>
    <SharePoint:ScriptLink name="autofill.js" runat="server" LoadAfterUI="true" Localizable="false"/>
    <SharePoint:ScriptLink name="sp.js" runat="server" LoadAfterUI="true" Localizable="false"/>
    <SharePoint:ScriptLink name="sp.runtime.js" runat="server" LoadAfterUI="true" Localizable="false"/>
    <SharePoint:ScriptLink name="sp.core.js" runat="server" LoadAfterUI="true" Localizable="false"/>


    <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-material@latest/dist/all.css">
    </link>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
    <link rel="preconnect stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" async />
    <link rel="icon" type="image/x-icon" href="https://secol.sharepoint.com/sites/Intranet/SiteAssets/Imagenes/logo.png">
    <link rel="stylesheet" href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css" />
    <link rel="stylesheet" href="http://localhost:1234/index.css" />

  </head>

  <body>
      <SharePoint:AjaxDelta runat="server" id="suiteBarDelta" BlockElement="true"
          CssClass="ms-dialogHidden ms-fullWidth noindex">
          <SharePoint:SPSecurityTrimmedControl runat="server" AuthenticationRestrictions="AuthenticatedUsersOnly"
              EmitDiv="true"><div id="suiteMenuData" class="ms-hide"><span class="ms-siteactions-root" id="siteactiontd"><SharePoint:SiteActions runat="server" accesskey="<%$Resources:wss,tb_SiteActions_AK%>"
                          id="SiteActionsMenuMainData" PrefixHtml="" SuffixHtml=""
                          ImageUrl="/_layouts/15/images/spcommon.png?rev=40" ThemeKey="spcommon" MenuAlignment="Right"
                          LargeIconMode="false">
                          <CustomTemplate>
                              <SharePoint:Menu runat="server" Visible="false" />
                              <SharePoint:FeatureMenuTemplate runat="server" FeatureScope="Site"
                                  Location="Microsoft.SharePoint.StandardMenu" GroupId="SiteActions" UseShortId="true">
                                  <SharePoint:MenuItemTemplate runat="server" id="MenuItem_ShareThisSite"
                                      Text="<%$Resources:wss,siteactions_sharethissite%>"
                                      Description="<%$Resources:wss,siteactions_sharethissitedescription%>"
                                      MenuGroupId="100" Sequence="110" UseShortId="true" PermissionsString="ViewPages"
                                      PermissionMode="Any" />
                                  <SharePoint:MenuItemTemplate runat="server" id="MenuItem_EditPage"
                                      Text="<%$Resources:wss,siteactions_editpage15%>"
                                      Description="<%$Resources:wss,siteactions_editpagedescriptionv4%>"
                                      ImageUrl="/_layouts/15/images/ActionsEditPage.png?rev=40" MenuGroupId="200"
                                      Sequence="210" PermissionsString="EditListItems"
                                      ClientOnClickNavigateUrl="javascript:ChangeLayoutMode(false);" />
                                  <SharePoint:MenuItemTemplate runat="server" id="MenuItem_CreatePage"
                                      Text="<%$Resources:wss,siteactions_addpage15%>"
                                      Description="<%$Resources:wss,siteactions_createpagedesc%>"
                                      ImageUrl="/_layouts/15/images/NewContentPageHH.png?rev=40" MenuGroupId="200"
                                      Sequence="220" UseShortId="true"
                                      ClientOnClickScriptContainingPrefixedUrl="OpenCreateWebPageDialog('~siteLayouts/createwebpage.aspx')"
                                      PermissionsString="AddListItems, EditListItems" PermissionMode="All" />
                                  <SharePoint:MenuItemTemplate runat="server" id="MenuItem_Create"
                                      Text="<%$Resources:wss,siteactions_addapp15%>"
                                      Description="<%$Resources:wss,siteactions_createdesc%>" MenuGroupId="200"
                                      Sequence="230" UseShortId="true"
                                      ClientOnClickScriptContainingPrefixedUrl="GoToPage('~siteLayouts/addanapp.aspx')"
                                      PermissionsString="ManageLists, ManageSubwebs" PermissionMode="Any" />
                                  <SharePoint:MenuItemTemplate runat="server" id="MenuItem_ViewAllSiteContents"
                                      Text="<%$Resources:wss,quiklnch_allcontent_15%>"
                                      Description="<%$Resources:wss,siteactions_allcontentdescription%>"
                                      ImageUrl="/_layouts/15/images/allcontent32.png?rev=40" MenuGroupId="200"
                                      Sequence="240" UseShortId="true"
                                      ClientOnClickNavigateUrl="~siteLayouts/viewlsts.aspx"
                                      PermissionsString="ViewFormPages" PermissionMode="Any" />
                                  <SharePoint:MenuItemTemplate runat="server" id="MenuItem_ChangeTheLook"
                                      Text="<%$Resources:wss,siteactions_changethelook15%>"
                                      Description="<%$Resources:wss,siteactions_changethelookdesc15%>" MenuGroupId="300"
                                      Sequence="310" UseShortId="true"
                                      ClientOnClickNavigateUrl="~siteLayouts/designgallery.aspx"
                                      PermissionsString="ApplyThemeAndBorder,ApplyStyleSheets,Open,ViewPages,OpenItems,ViewListItems"
                                      PermissionMode="All" />
                                  <SharePoint:MenuItemTemplate runat="server" id="MenuItem_Settings"
                                      Text="<%$Resources:wss,siteactions_settings15%>"
                                      Description="<%$Resources:wss,siteactions_sitesettingsdescriptionv4%>"
                                      ImageUrl="/_layouts/15/images/settingsIcon.png?rev=40" MenuGroupId="300"
                                      Sequence="320" UseShortId="true"
                                      ClientOnClickScriptContainingPrefixedUrl="GoToPage('~siteLayouts/settings.aspx')"
                                      PermissionsString="EnumeratePermissions,ManageWeb,ManageSubwebs,AddAndCustomizePages,ApplyThemeAndBorder,ManageAlerts,ManageLists,ViewUsageData"
                                      PermissionMode="Any" />
                                  <SharePoint:MenuItemTemplate runat="server" id="MenuItem_SwitchToMobileView"
                                      Visible="false" Text="<%$Resources:wss,siteactions_switchtomobileview%>"
                                      Description="<%$Resources:wss,siteactions_switchtomobileviewdesc%>"
                                      MenuGroupId="300" Sequence="330" UseShortId="true"
                                      ClientOnClickScript="STSNavigate(StURLSetVar2(ajaxNavigate.get_href(), 'mobile', '1'));" />
                              </SharePoint:FeatureMenuTemplate>
                          </CustomTemplate>
                      </SharePoint:SiteActions></span></div><SharePoint:ScriptBlock runat="server">
    
    
    
                  var g_navBarHelpDefaultKey = "HelpHome";
              </SharePoint:ScriptBlock><SharePoint:DelegateControl id="ID_SuiteBarDelegate" ControlId="SuiteBarDelegate" runat="server" /></SharePoint:SPSecurityTrimmedControl>
      </SharePoint:AjaxDelta>
    
    <form id="form1" runat="server"></form>
    <div id="popupNotification"></div>
    <div id="root"></div>

    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"></script>
    <script src="http://localhost:1234/index.js"></script>

  </body>

</html>