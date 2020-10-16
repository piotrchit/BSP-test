Feature: Logowanie się do BSP
  Background: Open Page and load content

  Scenario Outline: 0. BSP Login
   Given I open the Partner 1 TEST page
    When I provide "<loginInputValue>" in the <loginInput>
    And I click on the <nextPageButton>
    And I provide "<passInputValue>" in the <passInput>
    And I click on the <loginButton>
    Then <logoImage> is visible
    Examples:
      | loginInputValue             | passInputValue |
      | bsp.ext.test1@spis-firm.biz | 1Ib7yI;1BML^   |

  Scenario: 1. Checking Menu Sales
    When I click on the <menuSales>
    Then <salesLead> is visible
    And  <salesOffer> is visible
    And <salesContract> is visible
    And <salesAudit> is visible
    When I click on the <menuSales>
    And <salesLead> is not visible
    And <salesOffer> is not visible
    And <salesContract> is not visible
    And <salesAudit> is not visible

  Scenario: 0a. Enter Lead
    When I click on the <menuSales>
    And I click on the <salesLead>
    Then <addLeadButton> is visible

  Scenario: 1 Checking visibility of table elements
    Then <addLeadButton> is visible
    And <ID> is visible
    And  <domain> is visible
    And <language> is visible
    And  <documentType> is visible
    And <documentState> is visible
    And <author> is visible
    And <dataCreated> is visible

  Scenario: 1a. Cancel Lead with no data and pop-up
    When I click on the <addLeadButton>
    And I click on the <cancelButton>
    Then <leadsTitle> is visible

#   # ^poprawa namierzania nowych buttonów
# Scenario: 2. Cancel Lead with data
#   When I click on the <addLeadButton>
#   And I provide "wsdfghjaddLeadButtonklcfvgbhnm" in the <wwwInput>
#   And I click on the <cancelButton>
#   # Then <cancelButtonPopup> should be equal "Czy chcesz porzucić wszystkie zmiany?"
#   # And I click on the <noCancelLeadButton>
#   # Then <wwwInput> is visible
#   # When I click on the <cancelButton>
#   # And I click on the <yesCancelLeadButton>
#   # Then <leadsTitle> is visible

# # ^poprawa namierzania nowych buttonów
# Scenario: 3. Test X button
#   When I click on the <addLeadButton>
#   And I provide "wsdfghjaddLeadButtonklcfvgbhnm" in the <wwwInput>
#   And I click on the <closeLeadX>
# # Then <cancelButtonPopup> should be equal "Czy chcesz porzucić wszystkie zmiany?"
# And I click on the <noCancelLeadButton>
# Then <wwwInput> is visible
# And I click on the <cancelButton>
# And I click on the <yesCancelLeadButton>
# Then <leadsTitle> is visible


#

