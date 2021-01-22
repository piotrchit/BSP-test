Feature: Choose Partner RMF Admin
    Background: Open Page and load content

    Scenario: 1. Select Partner 1 Admin Heise
        When I click on the <searchUser>
        And I provide "Admin Heise" in the <searchUser>
        Then <adminHEISEName> is visible
        And <adminEmail> is visible
        And <privAdmin> is visible
        And <privSales> is visible
        And <privCS> is visible

    Scenario: 2. Checking User's action button
        When I move to <showPartnerHeiseActionButton>
        Then <viewHeiseAdminIco> is active
        And <editHeiseAdminIco> is active
        And <deactivateHeiseAdminIco> is active
        And <refreshHeiseAdminIco> is active
        And <masquaradeHAIco> is active
        And <logoutHeiseAdminIco> is active

    Scenario: 3. Checking pop-up elements and button Cancel
        When I click on the <masquaradeHAIco>
        Then <masqPopUpContext> is visible
        And <loginAsUser> is visible
        And <cancelLogin> is visible
        When I click on the <cancelLogin>
        Then <adminHEISEName> is visible
        And <adminEmail> is visible
        And <privAdmin> is visible
        And <privSales> is visible
        And <privCS> is visible

    Scenario: 4. Login as partner
        When I move to <showPartnerHeiseActionButton>
        When I click on the <masquaradeHAIco>
        And I click on the <loginAsUser>
        And I want to wait <3> seconds
         And I switch to the <contextUserInNewTab>
        Then <loggedAsHeise> is visible
       
    # Then <logoImage> is visible

    Scenario: 5. Checking data
        When I click on the <panelSettings>
        Then <HeiseTitle> is active

