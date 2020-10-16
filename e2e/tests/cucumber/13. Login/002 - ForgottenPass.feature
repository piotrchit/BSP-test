
Feature: Forgotten Pass
  Background: Open Page and load content

  Scenario: 0. Loging and load content
   Given I open the Partner 1 TEST page 

  Scenario: 1. Login using wrong pass
    When I provide "bsp.ext.test1@spis-firm.biz" in the <loginInput>
    And I click on the <nextPageButton>
    And I provide "1Ib7xI;1BML^" in the <passInput>
    And I click on the <loginButton>

    # ^ Poprawić wyswietlanie komunikatów
    # Then <wrongPassMess> is visible

  Scenario: 2. Button Forgotten Pass
    When I click on the <forgottenPassword>
    Then <forgottenPasswordPopUp> is visible

    # ^ Poprawić wyswietlanie komunikatów 
    # And <forPassPopUpTitle> should be equal "Zapomniałeś/aś hasła? Nic prostszego, potwierdź akcję zielonym przyciskiem aby otrzymać instrukcję dalszego postępowania na adres e-mail podany w poprzednim kroku."
    # And <forPassPopUpContent> should be equal "Potwierdź wysłanie wiadomości przypominającej hasło na wprowadzony adres email."
    
    # ^ Poprawić namierzanie cancel
    # When I click on the <cancelSending>
    # Then <passInput> is visible
    # And I click on the <forgottenPassword>

    # poprawic namierzanie send
    And <forgottenPasswordPopUp> is visible
    When I click on the <sendPassButton>
    Then <passSendMess> is visible
# And <sendResetPasswordMessage> should be equal "Na Twój adres e-mail została wysłana wiadomość umożliwiająca ustawienie nowego hasła"

