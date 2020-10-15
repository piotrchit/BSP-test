Feature: Logowanie się do BSP
    Background: Open Page and load content

    Scenario Outline: 0. BSP Login
        Given I open the BSP TEST page
        When I provide "<loginInputValue>" in the <loginInput>
        And I click on the <nextPageButton>
        And I provide "<passInputValue>" in the <passInput>
        And I click on the <loginButton>
        Then <logoImage> is visible
        Examples:
            | loginInputValue             | passInputValue           |
            | bsp.ext.test4@spis-firm.biz | 1Ib7yI;1BML^1Ib7yI;1BML^ |

    Scenario: Enter user group menu
        When I click on the <panelSettings>
        And I want to wait <5> seconds
        And I click on the <advancedSettings>
        And I click on the <userGroup>
        Then <adduserGroup> is visible

    Scenario Outline: Add new user group
        When I click on the <addUserGroup>
        And I provide "privilegeValue" in the <groupID>
        And I click on the <priviligeList>
        And I provide "privilegeValue" in the <chooseP_S_M>
        And I click on the < p_s_maganer>
        And I click on the <saveGroup>

        Examples:
            | privilegeValue |
            | PARTNER_SALES_MANAGER|
