Feature: Logowanie się do BSP
  Background: 

Scenario: 4 Create lead obligo
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

  Scenario: 6. Create Lead - all data
    When I click on the <addLeadButton>
    And I wait for <wwwInput> to be enable
    And I click on the <wwwInput>
    And I provide "betaelektro.pl" in the <wwwInput>
    And I provide "Testowa Firma" in the <clientName>
    And I provide "asd123" in the <clientVat>
    And I provide "John" in the <contactName>
    And I provide "Doe" in the <contactLastName>
    And I provide "bsp.ext.test19@spis-firm.biz" in the <contactEmail>
    And I provide "123-456-789" in the <contactphone>
    And I provide "Iñtërnâtiônàlizætiøn☃" in the <additionalInfo>
    And I provide "123" in the <site>
    # And I click on the <partnerList>
    # And I select "Sunrise System sp. z o.o. sp. k." from autocomplete <partnerListOpen>
    And I click on the <saveLead>
    And I wait for <createFirstOffer> to be enable
    And I wait for <editFirstLead> to be enable
    And I click on the <editFirstLead>
    Then <wwwInput> should be equal "betaelektro.pl"
    Then <clientName> should be equal "Testowa Firma"
    Then <clientVat> should be equal "asd123"
    Then <contactName> should be equal "John"
    Then <contactLastName> should be equal "Doe"
    Then <contactEmail> should be equal "bsp.ext.test19@spis-firm.biz"
    Then <contactphone> should be equal "123-456-789"
    Then <additionalInfo> should be equal "Iñtërnâtiônàlizætiøn☃"
    Then <site> should be equal "123"
