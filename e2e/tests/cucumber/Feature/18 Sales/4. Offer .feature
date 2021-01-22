Feature: Create Offer
    Background:

    Scenario Outline: 4.1. Create offer
        When I click on the <createFirstOffer>
        And I provide "<offerDomainValue>" in the <offerDomain>
        And I click on the <saveOffer>
        Then <savedMessage> is visible
        And <procesingState> is visible
        And <waitingForProcessing> is visible
        And <createPdf> is visible
        And <createdState> is visible
        When I move to <showOfferButton>
        Then <createFirstContract> is active
        And <editFirstOffer> is active
        And <sendOfferByEmail> is active
        And <downloadFirstOffer> is active

        Examples:
            | offerDomainValue |
            | sunrisesystem.pl |