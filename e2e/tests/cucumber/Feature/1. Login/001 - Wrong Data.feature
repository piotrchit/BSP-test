
Feature: Loging using wrong data
  Background: Open Page and load content
   Given I open the Partner 2 TEST page

  Scenario: 1.1 Visibility Elements
   Then <logo> is visible
    Then <loginTitle> is visible
    And <loginInput> is visible
    And <nextPageButton> is visible
    When I click on the <loginInput>

  Scenario Outline: 1.2 login field - checking email XX@XX validation
    When I click on the <loginInput>
    And I provide "<incorrectEmailValue>" in the <loginInput>
    And I click on the <nextPageButton>
    Then <loginValidation> is visible
    # And <loginValidation> should be equal "Podaj poprawny adres e-mail!"

    Examples:
      | incorrectEmailValue          |
      | bsp.ext.test1 @spis-firm.biz |
      | bsp.ext.test1spis-firm.biz   |
      | bsp.ext.test1@               |
      | @spis-firm.biz               |

  Scenario: 1.3 Checking Back Button
    When I click on the <loginInput>
    And I provide "bsp.ext.test1@spis-firm.biz" in the <loginInput>
    And I click on the <nextPageButton>
    Then <backButton> is visible
    When I click on the <backButton>
    Then <loginInput> is visible
  # And <loginInput> should be equal "bsp.ext.test1@spis-firm.biz"

  Scenario: 1.4 Visibility Elements
    When I provide "bsp.ext.test1@spis-firm.biz" in the <loginInput>
    And I click on the <nextPageButton>
    Then <backButton> is visible
    And <forgottenPassword> is visible
    And <passInput> is visible
    And <loginButton> is visible

  Scenario Outline: 1.5 Wrong Login Validation
    When I click on the <loginInput>
    And I provide "<loginInputValue>" in the <loginInput>
    And I click on the <nextPageButton>
    And I provide "1Ib7yI;1BML^" in the <passInput>
    And I click on the <loginButton>
    Then <wrongLoginMess> is visible
    #  And <wrongLoginMessage> should be equal "Podaj poprawny adres e-mail!"

    Examples:
      | loginInputValue              |
      | bsp.ext.test99@spis-firm.biz |
      | bsx.ext.test1@spis-firm.biz  |
      | bsp.exx.test1@spis-firm.biz  |
      | bsp.ext.test1@spix-firm.biz  |
      | bsp.ext.test1@spis-firx.biz  |
      | bsp.ext.test1@spis-firm.bix  |

  Scenario Outline: 1.6 Login with wrong password
    When I click on the <loginInput>
    And I provide "bsp.ext.test1@spis-firm.biz" in the <loginInput>
    And I click on the <nextPageButton>
    And I provide "<passValue>" in the <passInput>
    And I click on the <loginButton>
    Then <wrongPassMess> is visible
    # And <wrongPassMessage> should be equal "Adres e-mail lub hasło są niepoprawne!"

    Examples:
      | passValue    |
      | aaaaaaaaaaa  |
      | 123456789012 |
      | asdfgh123456 |

  Scenario: 1.7 Login with empty login and visibility of Validation Message: To pole jest wymagane!
    When I click on the <loginInput>
    And I click on the <nextPageButton>
    Then <loginToPoleJestWymagane> is visible
  # And <loginToPoleJestWymagane> should be equal "To pole jest wymagane!"

  Scenario: 1.8 Login with empty password and visibility of Validation Message: To pole jest wymagane!
    When I click on the <loginInput>
    And I provide "bsp.ext.test1@spis-firm.biz" in the <loginInput>
    And I click on the <nextPageButton>
    And I click on the <passInput>
    And I click on the <loginButton>
    Then <passToPoleJestWymagane> is visible
  # And <passToPoleJestWymagane> should be equal "To pole jest wymagane!"


