Feature: Logowanie się do BSP
  Background: 

  Scenario: 3.1. Edit lead obligo
          When I move to <showActionButton>
    When I click on the <editFirstLead>
    And I provide "alfaelektro.pl" in the <wwwInput>
    And I click on the <saveLead>
     And I move to <showActionButton>
    And I wait for <createFirstOffer> to be enable
    And I wait for <editFirstLead> to be enable
    And I click on the <editFirstLead>
    Then <wwwInput> should be equal "alfaelektro.pl"

Scenario: 3.2. Edit Lead - all data
        And I move to <showActionButton>
    When I click on the <editFirstLead>
    And I provide "alfaelektro.pl" in the <wwwInput>
    And I provide "Firma testowa" in the <clientName>
    And I provide "123asd" in the <clientVat>
    And I provide "Jane" in the <contactName>
    And I provide "Smith" in the <contactLastName>
    And I provide "bsp.ext.test91@spis-firm.biz" in the <contactEmail>
    And I provide "987-654-321" in the <contactphone>
    And I provide "ônàlizætiøn☃Iñtërnâti" in the <additionalInfo>
    And I provide "12" in the <site>
    And I click on the <saveLead>
     And I move to <showActionButton>
    And I wait for <createFirstOffer> to be enable
    And I wait for <editFirstLead> to be enable
    And I click on the <editFirstLead>
    Then <wwwInput> should be equal "alfaelektro.pl"
    Then <clientName> should be equal "Firma testowa"
    Then <clientVat> should be equal "123asd"
    Then <contactName> should be equal "Jane"
    Then <contactLastName> should be equal "Smith"
    Then <contactEmail> should be equal "bsp.ext.test91@spis-firm.biz"
    Then <contactphone> should be equal "987-654-321"
    Then <additionalInfo> should be equal "ônàlizætiøn☃Iñtërnâti"
    Then <site> should be equal "12"
    When I click on the <closeX>
    Then <addLeadButton> is visible