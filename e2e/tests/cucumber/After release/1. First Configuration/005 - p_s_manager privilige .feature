Feature: Add new privile and create user with it.
    Background:

    Scenario: 1. Enter adv Settings => User Group
        When I click on the <panelSettings>
        And I click on the <moreMenu>
        And I click on the <userGroup>
        Then <addUserGroup> is visible

    Scenario Outline: 3. Choose Partner and create privilage
        When I click on the <partnerList>
        And I click on the <choosePartnerValue>
        And I click on the <addUserGroup>
        Then <backToPrivGroup> is visible
        And I provide "<ID>" in the <groupID>
        And I click on the <priviligeList>
        And I provide "<privilige>" in the <privilageName>
        And I choose <choosePrivilege>
        And I click on the <saveGroup>
        # And I click on the <backToPrivGroup>

        Examples:
            | choosePartnerValue | ID                    | privilige             |
            # | <testPartner>      | PARTNER_SALES_TEST | PARTNER_SALES_MANAGER |
            # | <sunSPartner>      | PARTNER_SALES_MANAGER | PARTNER_SALES_MANAGER |
            | <bauerPartner>     | PARTNER_SALES_MANAGER | PARTNER_SALES_MANAGER |

    Scenario: 4. Back and enter privilige view
        When I move to <privilegeShowAction>
        And I click on the <viewPrvilege>

    Scenario: 5. Add Existing user to privilidge
        When I click on the <addExistingUser>
        And I want to wait <3> seconds
        And I click on the <showUserList>
        And I provide "bsp.ext.test1@spis-firm.biz" in the <addUserToPrivilidge>
        And I click on the <choosePartnerSales>
        And I click on the <saveUserPrivilidge>

    Scenario Outline: 6. Create new p_s_m user
        When I click on the <partnerList>
        And I click on the <testPartner>
        When I click on the <addNewUserToPriviledge>
        And I provide "<emailValue>" in the <userEmail>
        And I provide "<nameValue>" in the <userName>
        And I provide "<surnameValue>" in the <userSurname>
        And I provide "123456789" in the <userTelephone>
        And I click on the <customId>
        And I provide "ID" in the <customId>
        And I click on the <saveAndCreateNewuser>
        Then <savedMessage> is visible
        Then <addNewUserToPriviledge> is visible
        And <userWithP_S_MPrivilidge> is visible

        Examples:
            | emailValue                   | nameValue     | surnameValue | ID |
            | bsp.ext.test18@spis-firm.biz | Sales Manager | Test User    | 1  |
