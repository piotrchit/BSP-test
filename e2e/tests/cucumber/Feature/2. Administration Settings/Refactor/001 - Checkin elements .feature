Feature: Login as full entity user
  Background: Open Page and load content

  Scenario:1 Enter Administration menu and checking elements
   When I click on the <administrationMenu>
    And I click on the <CMSMenu>
    When I choose <countryMenu>
    And I click on the <cronMenu>
    And I click on the <currencyMenu>
    And I click on the <customerServiceteamMenu>
    And I click on the <documentsMenu>
    And I click on the <numberingPatternsMenu>
    And I click on the <OAUTHMenu>
    And I click on the <privilegesMenu>
    # And I choose <privilidges>
    And I click on the <productsMenu>
    And I click on the <tasksMenu>
    And I click on the <translationsMenu>
       Then I move to <usersMenu>
        When I choose <usersMenu>
    And I click on the <usersMenu>
    And I click on the <GSCReport>
    And I click on the <dynamicFieldMenu>

