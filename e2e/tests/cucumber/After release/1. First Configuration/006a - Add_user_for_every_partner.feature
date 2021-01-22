Feature: Add new user with basic types of priviliges
  Background:

  Scenario: 1. Enter Users menu
    When I click on the <panelSettings>
    And I click on the <moreMenu>
    And I click on the <partnerUsers>
    Then <addNewUser> is visible

  Scenario Outline: 2. Choose partner and Create User
    When I click on the <partnerList>
    And I click on the <choosePartnerValue>
    Then <addNewUser> is visible
    When I click on the <addNewUser>
    And I provide "<emailValue>" in the <userEmail>
    And I provide "<nameValue>" in the <userName>
    And I provide "<surnameValue>" in the <userSurname>
    And I provide "123456789" in the <userTelephone>
    And I click on the <userPriviligeList>
    And I click on the <userPriviledgeValue>
    And I click on the <customId>
    And I provide "ID" in the <customId>
    And I click on the <saveNewUser>
    Then <addNewUser> is visible

    Examples:
      | choosePartnerValue | emailValue                  | nameValue  | surnameValue | ID      | userPriviledgeValue |
      | <heisePartner>     | bsp.ext.test1@spis-firm.biz | Admin      | Test User    | Heisee1 | <adminUser>         |
      | <heisePartner>     | bsp.ext.test2@spis-firm.biz | Dyrektor   | Test User    | Heisee2 | <p_s_m_User>        |
      | <heisePartner>     | bsp.ext.test3@spis-firm.biz | SMR Sales  | Test User    | Heisee3 | <salesUser>         |
      | <heisePartner>     | bsp.ext.test4@spis-firm.biz | Handlowiec | Test User    | Heisee4 | <csUser>            |
      | <grupaRMFPartner>  | bsp.ext.test1@spis-firm.biz | Admin      | Test User    | RMF1    | <adminUser>         |
      | <grupaRMFPartner>  | bsp.ext.test2@spis-firm.biz | Dyrektor   | Test User    | RMF2    | <p_s_m_User>        |
      | <grupaRMFPartner>  | bsp.ext.test3@spis-firm.biz | SMR Sales  | Test User    | RMF3    | <salesUser>         |
      | <grupaRMFPartner>  | bsp.ext.test4@spis-firm.biz | Handlowiec | Test User    | RMF4    | <csUser>            |
      | <testPartner>      | bsp.ext.test2@spis-firm.biz | Dyrektor   | Test User    | Test2   | <p_s_m_User>        |
      | <testPartner>      | bsp.ext.test3@spis-firm.biz | SMR Sales  | Test User    | Test3   | <salesUser>         |
      | <testPartner>      | bsp.ext.test4@spis-firm.biz | Handlowiec | Test User    | Test4   | <csUser>            |
      | <bauerPartner>     | bsp.ext.test1@spis-firm.biz | Admin      | Test User    | Bauer1  | <adminUser>         |
      | <bauerPartner>     | bsp.ext.test2@spis-firm.biz | Dyrektor   | Test User    | Bauer2  | <p_s_m_User>        |
      | <bauerPartner>     | bsp.ext.test3@spis-firm.biz | SMR Sales  | Test User    | Bauer3  | <salesUser>         |
      | <bauerPartner>     | bsp.ext.test4@spis-firm.biz | Handlowiec | Test User    | Bauer4  | <csUser>            |
