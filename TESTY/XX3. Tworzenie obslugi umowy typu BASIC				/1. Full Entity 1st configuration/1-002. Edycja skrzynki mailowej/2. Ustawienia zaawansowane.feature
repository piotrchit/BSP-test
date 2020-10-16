Feature: Panel Settings Menu
  Background: Open Page and load content

  Scenario: Enter Panel Settings
    When I click on the <panelSettings>
    And I click on the <advancedSettings>
    # And I click on the <partnerEmail>
    And I open the partnerEmail
    Then <platformMenu> is visible