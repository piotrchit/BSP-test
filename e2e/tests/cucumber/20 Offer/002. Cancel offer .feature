Feature: Create Offer
  Background: 



Scenario: 2a. Cancel Offer with no data and pop-up
  When I click on the <addOfferButton>
  And I click on the <cancelButton>
  Then <offerTitle> is visible

Scenario: 2b. Cancel Offer with data
  When I click on the <addOfferButton>
  And I provide "wsdfghjaddOfferButtonklcfvgbhnm" in the <domainInput>
  And I click on the <cancelButton>
  # Then <cancelButtonPopup> should be equal "Czy chcesz porzucić wszystkie zmiany?"
  And I click on the <noCancelButton>
  Then <domainInput> is visible
  And I click on the <cancelButton>
  And I click on the <yesCancelButton>
  Then <offerTitle> is visible

Scenario: 2c. Test X button
  When I click on the <addOfferButton>
  And I provide "wsdfghjaddOfferButtonklcfvgbhnm" in the <domainInput>
  And I click on the <closeX>
  # Then <cancelButtonPopup> should be equal "Czy chcesz porzucić wszystkie zmiany?"
  And I click on the <noCancelButton>
  Then <domainInput> is visible
  And I click on the <cancelButton>
  And I click on the <yesCancelButton>
   Then <offerTitle> is visible
