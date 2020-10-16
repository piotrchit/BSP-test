Feature: Validations - partner, domain
  Background:

  Scenario: 8. Checking domain validation
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
    Then <wwwValidationMessage> is visible
    # And <wwwValidationMessage> should be equal "This field is required!"
    When I provide "alfaelektro.pl" in the <wwwInput>
    Then <wwwValidationMessage> is not visible
    And I wait for <createFirstOffer> to be enable
    And I wait for <editFirstLead> to be enable
    And I click on the <saveLead>
    And I wait for <createFirstOffer> to be enable
    And I wait for <editFirstLead> to be enable
    Then <editFirstLead> is visible
    And <editFirstLead> is visible

  Scenario: Bauer - Checking partner validation
    When I click on the <addLeadButton>
    And I provide "alfaelektro.pl" in the <wwwInput>
    And I provide "Firma testowa" in the <clientName>
    And I provide "123asd" in the <clientVat>
    And I provide "Jane" in the <contactName>
    And I provide "Smith" in the <contactLastName>
    And I provide "bsp.ext.test91@spis-firm.biz" in the <contactEmail>
    And I provide "987-654-321" in the <contactphone>
    And I provide "ônàlizætiøn☃Iñtërnâti" in the <additionalInfo>
    And I provide "12" in the <site>
    And I click on the <deletePartner>
    And I click on the <saveLead>
    Then <partnerValidationMessage> is visible
    # And <partnerValidationMessage> should be equal "This field is required!"
    Then <addLeadPopUp> is visible
    When I provide "alfaelektro.pl" in the <wwwInput>
    And I wait for <createFirstOffer> to be enable
    And I wait for <editFirstLead> to be enable
    And I click on the <saveLead>
    And I wait for <createFirstOffer> to be enable
    And I wait for <editFirstLead> to be enable
    Then <editFirstLead> is visible
    And <editFirstLead> is visible

  Scenario Outline: WL - Checking partner walidation
    Given I open the Partner 1 TEST page
    # Given I open the Partner 2 TEST page
    # Given I open the Partner 3 TEST page

    When I provide "<loginInputValue>" in the <loginInput>
    And I click on the <nextPageButton>
    And I provide "<passInputValue>" in the <passInput>
    And I click on the <loginButton>
    Then <logoImage> is visible
    When I click on the <menuSales>
    And I click on the <salesLead>
    Then <addLeadButton> is visible
    When I click on the <addLeadButton>
    And I wait for <wwwInput> to be enable
    And I click on the <wwwInput>
    And I provide "betaelektro.pl" in the <wwwInput>
    Then <leadPartnerList> is not visible
    And I click on the <saveLead>
    And I wait for <createFirstOffer> to be enable
    And I wait for <editFirstLead> to be enable
    And I click on the <editFirstLead>
    Then <wwwInput> should be equal "betaelektro.pl"
    Examples:
      | loginInputValue             | passInputValue |
      | bsp.ext.test1@spis-firm.biz | 1Ib7yI;1BML^   |


