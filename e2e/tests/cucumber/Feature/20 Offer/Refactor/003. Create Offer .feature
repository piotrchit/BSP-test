Feature: Create Offer
  Background:

  Scenario Outline: 1. Create offer and checking saving data
  When I click on the <addOfferButton>
  And I wait for <offerDomain> to be enable
  And I click on the <offerDomain>
  And I provide "<offerDomainvalue>" in the <offerDomain>
  And I click on the <saveOffer>
  And I choose <showHiddenActionButton>
  And I wait for <createFirstContract> to be enable
  And I wait for <editFirstOffer> to be enable
  And I click on the <editFirstOffer>
  And I wait for <offerDomain> to be enable
  Then <offerDomain> should be equal "<offerDomainvalue>"
  When I click on the <closeX>
  And I choose <discardChanges>
  # Then <cancelButtonPopup> should be equal "Czy chcesz porzucić wszystkie zmiany?"
  Then <offerTitle> is visible

  Examples:
    | offerDomainvalue |
    | sunrisesystem.pl |

# ^namierzanie sie na liste leadów
  Scenario Outline: 2. Add lead to new offer
    When I click on the <addOfferButton>
    And I wait for <leadList> to be enable
    And I choose <leadList>
    And I want to wait <5> seconds
    And I provide "<leadDomain>" in the <chooseLead>
    And I want to wait <5> seconds
    And I click on the <saveOffer>
    And I choose <showHiddenActionButton>
    And I wait for <createFirstContract> to be enable
    And I click on the <editFirstOffer>
    Then <offerDomain> should be equal "<offerDomainvalue>"

    Examples:
      | leadDomain |
      | sunrisesystem.pl |
  | Alipay.com          |

  