  Feature: Add new user
    Background: 

  Scenario: Enter Users menu
    When I click on the <panelSettings>
    # And I wait for <advancedSettings> to be enable
     Then <panelSettingsTitle> is visible
    When I click on the <advancedSettings>
       And I click on the <partnerUsers>
    Then <addNewUser> is visible


  # Scenario Outline: fill in Add user popup 
  #   When I click on the <addNewUser>
  #   And I provide "<emailValue>" in the <userEmail>
  #   And I provide "<nameValue>" in the <userName>
  #   And I provide "<surnameValue>" in the <userSurname>
  #   And I provide "123456789" in the <userTelephone>
  #   And I click on the <userPriviligeList>
  #   And I click on the <adminUser>
  #   And I click on the <salesUser>
  #   And I click on the <csUser>
  #   And I click on the <customId>
  #   And I provide "asd123" in the <customId>
  #   And I click on the <saveNewUser>
  #   Then <addNewUser> is visible


  #   Examples:
  #     | emailValue                  | nameValue  | surnameValue |
  #     | bsp.ext.test1@spis-firm.biz | Admin      | Test User    |
  #     | bsp.ext.test2@spis-firm.biz | Dyrektor   | Test User    |
  #     | bsp.ext.test3@spis-firm.biz | SMR Sales  | Test User    |
  #     | bsp.ext.test4@spis-firm.biz | Handlowiec | Test User    |
