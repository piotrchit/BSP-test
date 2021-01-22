Feature: Cancel offer
  Background:

  Scenario: 1. Cancel Offer with no data and pop-up
    When I click on the <addOfferButton>
    And I click on the <cancelButton>
    Then <offerTitle> is visible

  Scenario: 2. Cancel Offer with data
    When I click on the <addOfferButton>
    And I provide "wsdfghjaddOfferButtonklcfvgbhnm" in the <offerDomain>
    And I click on the <cancelButton>
    # Then <cancelButtonPopup> should be equal "Czy chcesz porzucić wszystkie zmiany?"
    And I choose <keepEditingButton>
    And I wait for <offerDomain> to be enable
    Then <offerDomain> is visible
    And I click on the <cancelButton>
    And I choose <discardChanges>
    Then <offerTitle> is visible

  Scenario: 3. Cancel using exit button
    When I click on the <addOfferButton>
    And I provide "wsdfghjaddOfferButtonklcfvgbhnm" in the <offerDomain>
    And I click on the <closeX>
    # Then <cancelButtonPopup> should be equal "Czy chcesz porzucić wszystkie zmiany?"
    And I choose <keepEditingButton>
    Then <offerDomain> is visible
    And I click on the <cancelButton>
    And I choose <discardChanges>
    Then <offerTitle> is visible
