Feature: Logowanie się do BSP
    Background: Open Page and load content
         
  Scenario: 6.1. Logout
    When I click on the <userMenu>
    And I click on the <logout>
    Then <loginInput> is visible
    When I provide "Pomyslnie wylogowano" in the <loginInput>
    Then <loginInput> should be equal "Pomyslnie wylogowano"
    
    Scenario Outline: 6.2. Partner 1 WL - Login as Admin
        When I provide "<loginInputValue>" in the <loginInput>
        And I click on the <nextPageButton>
        And I provide "<passInputValue>" in the <passInput>
        And I click on the <loginButton>
        Then <logoImage> is visible

        Examples:
            | loginInputValue             | passInputValue |
            | bsp.ext.test2@spis-firm.biz | 1Ib7yI;1BML^   |