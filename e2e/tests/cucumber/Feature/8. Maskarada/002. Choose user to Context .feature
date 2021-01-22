Feature: Enter Administration => users and choose test partner
    Background: Open Page and checking content

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

     