Feature: Create Offer
  Background:

  Scenario Outline: 1. Create offer
    When I click on the <addOfferButton>
    And I wait for <domainInput> to be enable
    And I click on the <domainInput>
    And  I provide "<domainInputvalue>" in the <domainInput>
    # And I click on the <partnerList>
    # And I select "Sunrise System sp. z o.o. sp. k." from autocomplete <partnerListOpen>
    And I click on the <saveOffer>
    And I wait for <createFirstContract> to be enable
    And I wait for <editFirstOffer> to be enable
    And I click on the <editFirstOffer>
    Then <domainInput> should be equal "<domainInputvalue>"
    And I click on the <closeX>
    # Then <cancelButtonPopup> should be equal "Czy chcesz porzucić wszystkie zmiany?"
    Then <offerTitle> is visible

    Examples:
      | domainInputvalue |
      | sunrisesystem.pl |

  Scenario Outline: 2. Create Offer with lead
    When I click on the <addOfferButton>
    And I wait for <domainInput> to be enable
    And I click on the <domainInput>
    And I provide "<domainInputvalue>" in the <domainInput>
    # And I click on the <leadList>
    And I select "70 - energylandia.pl - 03/06/2020" from autocomplete <leadList>
    And I click on the <saveOffer>
    And I wait for <createFirstContract> to be enable
    And I wait for <editFirstOffer> to be enable
    And I click on the <editFirstOffer>
    Then <domainInput> should be equal "<domainInputvalue>"

    Examples:
      | domainInputvalue |
      | sunrisesystem.pl |

