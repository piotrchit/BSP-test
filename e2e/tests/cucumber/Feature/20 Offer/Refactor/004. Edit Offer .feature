Feature: Create Offer
    Background:

    Scenario Outline: 1. Create offer and checking saving data
        When I click on the <addOfferButton>
        And I wait for <offerDomain> to be enable
        And I click on the <offerDomain>
        And I provide "<offerDomainValue>" in the <offerDomain>
        And I click on the <saveOffer>
        And I choose <showHiddenActionButton>
        And I wait for <createFirstContract> to be enable
        And I wait for <editFirstOffer> to be enable
        And I click on the <editFirstOffer>
        And I wait for <offerDomain> to be enable
        Then <offerDomain> should be equal "<offerDomainValue>"
        When I click on the <closeX>
        And I choose <discardChanges>
        # Then <cancelButtonPopup> should be equal "Czy chcesz porzucić wszystkie zmiany?"
        Then <offerTitle> is visible

        Examples:
            | offerDomainValue |
            | sunrisesystem.pl |


    Scenario Outline: 2. Change and check domain
        When I choose <showHiddenActionButton>
        And I want to wait <5> seconds
        And I wait for <editFirstOffer> to be enable
        And I click on the <editFirstOffer>
        And I wait for <offerDomain> to be enable
        And I provide "<newDomain>" in the <offerDomain>
        And I click on the <saveOffer>
        Then <offerTitle> is visible
        When I choose <showHiddenActionButton>
        And I wait for <editFirstOffer> to be enable
        And I click on the <editFirstOffer>
        And I wait for <offerDomain> to be enable
        Then <offerDomain> should be equal "<newDomain>"
        When I click on the <closeX>
        And I choose <discardChanges>
        # Then <cancelButtonPopup> should be equal "Czy chcesz porzucić wszystkie zmiany?"
        Then <offerTitle> is visible

        Examples:
            | newDomain          |
            | sunrisedzieciom.pl |

# # ^Lead list namierzanie
    Scenario Outline: 3. Edit Offer - change lead
           When I choose <showHiddenActionButton>
        And I want to wait <5> seconds
        And I wait for <editFirstOffer> to be enable
        And I click on the <editFirstOffer>
        And I wait for <offerDomain> to be enable
        And I click on the <chooseLead>
        And I provide "<leadValue>" in the <chooseLead>
        And I click on the <saveOffer>
        Then <offerTitle> is visible
        When I choose <showHiddenActionButton>
        And I wait for <editFirstOffer> to be enable
        And I click on the <editFirstOffer>
        And I wait for <offerDomain> to be enable
        Then <offerDomain> should be equal "<leadValue>"
        When I click on the <closeX>
        And I choose <discardChanges>
        # Then <cancelButtonPopup> should be equal "Czy chcesz porzucić wszystkie zmiany?"
        Then <offerTitle> is visible

        Examples:
            | leadValue          |
            | sunrisedzieciom.pl |

     

