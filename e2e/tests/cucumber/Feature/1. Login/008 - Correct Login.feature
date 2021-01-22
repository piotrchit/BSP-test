Feature: Logowanie się do BSP
    Background: Open Page and load content
      Given I open the Partner 1 TEST page
         
  Scenario: 1. Login and logout
    When I provide "bsp.ext.test1@spis-firm.biz" in the <loginInput>
    And I click on the <nextPageButton>
    And I provide "1Ib7yI;1BML^" in the <passInput>
    And I click on the <loginButton>
    Then <logoImage> is visible
    When I click on the <userMenu>
    And I click on the <logout>
    Then <loginInput> is visible
    When I provide "Pomyslnie wylogowano" in the <loginInput>
    Then <loginInput> should be equal "Pomyslnie wylogowano"