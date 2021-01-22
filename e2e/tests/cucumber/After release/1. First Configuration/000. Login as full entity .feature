Feature: Enter Panel Settings Menu
    Background: Open Page and load content


    Scenario Outline: 0 Login as full entity
        Given I open the BSP TEST page
        When I provide "<loginInputValue>" in the <loginInput>
        And I click on the <nextPageButton>
        And I provide "<passInputValue>" in the <passInput>
        And I click on the <loginButton>
         And I click on the <gotIt>
        Then <logoImage> is visible

        Examples:
            | loginInputValue             | passInputValue |
            | bsp.ext.test4@spis-firm.biz | 1Ib7yI;1BML^   |

