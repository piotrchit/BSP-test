Feature: Create Offer
    Background:

    Scenario: 3.1. Enter Sales menu
        When I click on the <menuSales>
        Then <salesLead> is visible
        When I click on the <salesLead>
        Then <leadsTitle> is visible

    Scenario Outline: 3.2. Create lead obligo
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
