Feature: Logowanie się do BSP
  Background: Open Page and load content


  Scenario Outline: Login as admin
    Given I open the Partner 3 TEST page
    When I provide "<loginInputValue>" in the <loginInput>
    And I click on the <nextPageButton>
    And I provide "<passInputValue>" in the <passInput>
    And I click on the <loginButton>
    Then <logoImage> is visible

    Examples:
      | loginInputValue             | passInputValue |
      | bsp.ext.test1@spis-firm.biz | 1Ib7yI;1BML^   |

  Scenario: 1.2. Enter Offer
    When I click on the <menuSales>
    And I click on the <salesOffer>
    Then <addOfferButton> is visible