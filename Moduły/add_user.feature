
  Scenario Outline: Add user
    When I click on the <addNewUser>
    And I provide "<emailValue>" in the <userEmail>
    And I provide "<nameValue>" in the <userName>
    And I provide "<surnameValue>" in the <userSurname>
    And I provide "123456789" in the <userTelephone>
    And I click on the <userPriviligeList>
    And I click on the <adminUser>
    And I click on the <salesUser>
    And I click on the <csUser>
    And I click on the <customId>
    And I provide "asd123" in the <customId>
    And I click on the <saveNewUser>
    Then <addNewUser> is visible


    Examples:
      | emailValue                  | nameValue | surnameValue |
      | bsp.ext.test15@spis-firm.biz | Admin 1   | Test User    |
      | bsp.ext.test14@spis-firm.biz | Admin 2   | Test User    |
      | bsp.ext.test13@spis-firm.biz | Admin 3   | Test User    |
      | bsp.ext.test12@spis-firm.biz | Admin 4   | Test User    |
