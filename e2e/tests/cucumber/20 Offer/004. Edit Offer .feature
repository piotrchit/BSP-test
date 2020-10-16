Feature: Create Offer
    Background:

    Scenario Outline: 1 Edit offer obligo
        When I click on the <editFirstOffer>
        And  I provide "<domainInputvalue>" in the <domainInput>
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

    Scenario Outline: 7. Edit Offer - all data
        When I click on the <editFirstOffer>
        And  I provide "<domainInputvalue>" in the <domainInput>
        And I provide "Firma testowa" in the <clientName>
        And I provide "123asd" in the <clientVat>
        And I provide "Jane" in the <contactName>
        And I provide "Smith" in the <contactLastName>
        And I provide "bsp.ext.test91@spis-firm.biz" in the <contactEmail>
        And I provide "987-654-321" in the <contactphone>
        And I provide "ônàlizætiøn☃Iñtërnâti" in the <additionalInfo>
        And I provide "12" in the <site>
        And I click on the <saveOffer>
        And I wait for <createFirstContract> to be enable
        And I wait for <editFirstOffer> to be enable
        And I click on the <editFirstOffer>
        Then <domainInput> should be equal "alfaelektro.pl"
        Then <clientName> should be equal "Firma testowa"
        Then <clientVat> should be equal "123asd"
        Then <contactName> should be equal "Jane"
        Then <contactLastName> should be equal "Smith"
        Then <contactEmail> should be equal "bsp.ext.test91@spis-firm.biz"
        Then <contactphone> should be equal "987-654-321"
        Then <additionalInfo> should be equal "ônàlizætiøn☃Iñtërnâti"
        Then <site> should be equal "12"

        Examples:
            | domainInputvalue |
            | sunrisesystem.pl |

