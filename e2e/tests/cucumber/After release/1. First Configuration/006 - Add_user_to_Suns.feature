Feature: Add new user with basic types of priviliges
  Background:

  Scenario: 1. Enter Users menu
    When I click on the <panelSettings>
    And I click on the <moreMenu>
    And I click on the <partnerUsers>
    Then <addNewUser> is visible

  Scenario Outline: 2. Choose partner and Create User
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
      | emailValue                  | nameValue  | surnameValue | ID      | userPriviledgeValue |
      | bsp.ext.test1@spis-firm.biz | Admin      | Test User    | sunS1 | <adminUser>         |
      | bsp.ext.test2@spis-firm.biz | Dyrektor   | Test User    | sunS2 | <p_s_m_User>        |
      | bsp.ext.test3@spis-firm.biz | SMR Sales  | Test User    | sunS3 | <salesUser>         |
      | bsp.ext.test4@spis-firm.biz | Handlowiec | Test User    | sunS4 | <csUser>            |

  Scenario Outline: Add full entity user for BSP TEAM
    When I click on the <addNewUser>
    And I provide "<emailValue>" in the <userEmail>
    And I provide "<nameValue>" in the <userName>
    And I provide "<surnameValue>" in the <userSurname>
    And I provide "123456789" in the <userTelephone>
    And I click on the <userPriviligeList>
    And I click on the <adminUser>
    And I click on the <salesUser>
    And I click on the <fullEntity>
    And I click on the <csUser>
    And I click on the <customId>
    And I provide "ID" in the <customId>
    And I click on the <saveNewUser>
    Then <addNewUser> is visible

    Examples:
      | emailValue                  | nameValue | surnameValue | ID |
      | tomasz.landuch@artefakt.pl  | tomasz    | Landuch      | 5  |
      | m.sokal@sunrisesystem.pl    | Mariusz   | Sokal        | 6  |
      | julia.radelczyk@artefakt.pl | Julia     | radelczyk    | 7  |
      | Robert.Matuszewski@bauer.pl | Robert    | Matuszewski  | 8  |