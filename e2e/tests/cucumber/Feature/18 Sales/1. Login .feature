Feature: Logowanie się do BSP
    Background: Open Page and load content
        Given I open the Partner 3 TEST page

    Scenario Outline: 1.1 Partner 1 WL - Login as Admin
        When I provide "<loginInputValue>" in the <loginInput>
        And I click on the <nextPageButton>
        And I provide "<passInputValue>" in the <passInput>
        And I click on the <loginButton>
        Then <logoImage> is visible

        Examples:
            | loginInputValue             | passInputValue |
            | bsp.ext.test1@spis-firm.biz | 1Ib7yI;1BML^   |