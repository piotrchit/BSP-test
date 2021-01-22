Feature: Adding context to every partner
    Background:

    Scenario: Checking context user from menu
        When I click on the <userMenu>
        Then <contestPartnerHeise> is visible
        And <contestPartnerBauer> is visible
        And <contestPartnerRMF> is visible
        And <loginAsHeise> is visible
        And <loginAsBauer> is visible
        And <loginAsRMF> is visible

    Scenario: 2. Login as RMF
        When I click on the <loginAsRMF>
        And I swich to the <newContextUserTab>
        Then <logoImage> is visible
        When I click on the <panelSettings>
        Then <RMFTitle> is visible

    Scenario Outline: 3. Create Lead
        When I click on the <menuSales>
        Then <salesLead> is visible
        When I click on the <salesLead>
        Then <leadsTitle> is visible
        When I click on the <addLeadButton>
        And I wait for <wwwInput> to be enable
        And I click on the <wwwInput>
        And I provide "<wwwValue>" in the <wwwInput>
        And I click on the <saveLead>
        Then <createdState> is visible
        And I move to <showActionButton>
        And I wait for <createFirstOffer> to be enable
        Then <createFirstOffer> is visible

        Examples:
            | wwwValue       |
            | alfaelektro.pl |

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

    Scenario Outline: 5. Create contract form lead
        When I click on the <createFirstContract>
        And I click on the <productList>
        And I click on the <productValue>
        And I click on the <open_calender>
        And I click on the <chooseDate>
        And I click on the <pastYear>
        And I click on the <april2019>
        And I click on the <first>
        And I click on the <contractLength>
        And I click on the <contractLengthValue>
        And I click on the <saveContract>
        And I want to wait <5> seconds
        Then <savedMessage> is active
        And <procesingState> is visible
        And <waitingForProcessing> is visible
        And <createPdf> is visible
        And <createdState> is visible

        Examples:
            | productValue | contractLengthValue |
            | <PROproduct> | <length24>          |

    # Scenario: 6. Logout from context to Sunrise System
    # When I click on the <userMenu>
    # And I click on the <logoutFromContext>
    # Then <> is visible