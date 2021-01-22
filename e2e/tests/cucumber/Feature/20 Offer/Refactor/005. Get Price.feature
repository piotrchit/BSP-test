Feature: Checking Get Price Button
    Background:

    Scenario Outline: 1. Checking activity of GET PRICE button
        When I click on the <addOfferButton>
        And I wait for <offerDomain> to be enable
        Then <getPricesButton> is not active
        When I provide "<offerDomainvalue>" in the <offerDomain>
        Then <getPricesButton> is active
                When I click on the <closeX>
        And I choose <discardChanges>
        Then <addOfferButton> is visible

        Examples:
            | offerDomainvalue |
            | sunrisesystem.pl |

    Scenario Outline: 2. Checking GET PRICE value
        When I click on the <addOfferButton>
        And I wait for <offerDomain> to be enable
        Then <getPricesButton> is not active
        When I provide "<offerDomainvalue>" in the <offerDomain>
        Then <getPricesButton> is active
        When I click on the <getPricesButton>
         And I wait for <priceBasic> to be enable
        Then <priceBasic> is visible
        And <priceBasic> should be equal "299"
        Then <> is visible
        And <> should be equal ""
        Then <> is visible
        And <> should be equal ""

        Examples:
            | offerDomainvalue |
            | sunrisesystem.pl |

    Scenario Outline: 3. Checking GET PRICE value
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