Feature: Open Partner Domain Menu
  Background: Open Page and load content

  Scenario: Enter Panel Settings
   Given I open the partnerDomain
   When I want to wait <10> seconds
    Then  <advConfTitle> is visible
   When I click on the <platformMenu>
   Then <partnerDomainInput> is visible