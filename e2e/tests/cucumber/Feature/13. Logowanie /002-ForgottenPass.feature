

  Scenario: 1 Forgotten Password
    When I provide "bsp.ext.test1@spis-firm.biz" in the <loginInput>
    And I click on the <nextPageButton>
    And I click on the <forgottenPassword>
    Then <forgottenPasswordPopUp> is visible
    # And <forgottenPasswordPopUp> should be equal "Zapomniałeś/aś hasła? Nic prostszego, potwierdź akcję zielonym przyciskiem aby otrzymać instrukcję dalszego postępowania na adres e-mail podany w poprzednim kroku."
    When I click on the <noButton>
    Then <passInput> is visible
    And I click on the <forgottenPassword>
    Then <forgottenPasswordPopUp> is visible
    When I click on the <yesButton>
    Then <sendResetPasswordMessage> is visible
  # And <sendResetPasswordMessage> should be equal "Na Twój adres e-mail została wysłana wiadomość umożliwiająca ustawienie nowego hasła"

  