Feature: Logowanie się do BSP
    Background: Open Page and load content
      

    Scenario: 1. Enter Sales menu
        When I click on the <menuSales> 
        Then <salesLead> is visible
        When I click on the <salesLead>
        Then <leadsTitle> is visible

Scenario: 2. Create lead obligo
    When I click on the <addLeadButton>
    And I wait for <wwwInput> to be enable
    And I click on the <wwwInput>
    And I provide "betaelektro.pl" in the <wwwInput>
    And I click on the <leadPartnerList>
    And I click on the <chooseSunS>
    And I click on the <saveLead>
    And I wait for <createFirstOffer> to be enable
    And I wait for <editFirstLead> to be enable
    And I click on the <editFirstLead>
    Then <wwwInput> should be equal "betaelektro.pl"