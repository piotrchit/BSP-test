Scenario: 1. Enter Offer menu
  When I click on the <menuSales>
  And I click on the <salesOffer>
  Then <addOfferButton> is visible

    Scenario: 1 Checking visibility of table elements
    Then <addOfferButton> is visible
    And <ID> is visible
   And  <domain> is visible
   And <language> is visible
  And  <documentType> is visible
   And <documentState> is visible
   And <author> is visible
   And <dataCreated> is visible
   And <editFirstOffer> is visible
 And <createFirstContract> is visible