Feature: Validations - partner, domain
  Background:
    When I click on the <salesLead>
    Then <addLeadButton> is visible

  Scenario: 5.1. Checking domain validation
    When I click on the <addLeadButton>
    And I provide "Firma testowa" in the <clientName>
    And I provide "123asd" in the <clientVat>
    And I provide "Jane" in the <contactName>
    And I provide "Smith" in the <contactLastName>
    And I provide "bsp.ext.test91@spis-firm.biz" in the <contactEmail>
    And I provide "987-654-321" in the <contactphone>
    And I provide "ônàlizætiøn☃Iñtërnâti" in the <additionalInfo>
    And I provide "12" in the <site>
    And I click on the <saveLead>
    Then <message_this_field_is_required> is active
    And <clientName> is visible
    When I provide "alfaelektro.pl" in the <wwwInput>
    Then <message_this_field_is_required> is not visible
    And I click on the <saveLead>
      And I move to <showActionButton>
    And I wait for <createFirstOffer> to be enable
    And I wait for <editFirstLead> to be enable
    Then <editFirstLead> is visible
    And <editFirstLead> is visible

 