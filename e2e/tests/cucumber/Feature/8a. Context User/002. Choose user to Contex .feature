Feature: Enter Administration => users and choose test partner
    Background: Open Page and load content

    Scenario: 1 Enter Administration menu => Users
        When I click on the <administrationMenu>
        Then I move to <usersMenu>
        When I choose <usersMenu>
        Then I wait for <searchUser> to be enable
        And <searchUser> is visible
        And <userMenuTitle> is visible
        And <superuser> is visible
        And <adminAddNewUser> is visible
        And <searchUser> is visible
        And <userType> is visible
        And <userTypeNormal> is visible
        And <userTypeNormal> is visible

    Scenario: 2. Choose test user with context priviliges
        When I click on the <searchUser>
        And I provide "Automation" in the <searchUser>
        Then <fullEntityName> is visible
        And <fullEntityEmail> is visible
        And <privAdmin> is visible
        And <privSales> is visible
        And <privCS> is visible
        And <privFullentity> is visible

    Scenario: 2. Checking User's action buton 
        When I move to <showUsersActionButton>
        Then <viewUserIco> is active
        And <editUserIco> is active
        And <deactivateUserIco> is visible
        And <refreshUserIco> is visible
        And <masquaradeIco> is visible
        And <logoutUserIco> is visible
