Feature: Validations - Domain
  Background:

  Scenario Outline: 2. Checking domain validation
    When I click on the <addOfferButton>
    And I click on the <saveOffer>
    Then <domainValidationMessage> is visible
    # And <domainValidationMessage> should be equal "This field is required!"
    When I provide "<domainInputvalue>" in the <domainInput>
    Then <domainValidationMessage> is not visible
    And I wait for <createFirstContract> to be enable
    And I wait for <editFirstOffer> to be enable
    And I click on the <saveOffer>
    And I wait for <createFirstContract> to be enable
    And I wait for <editFirstOffer> to be enable
    Then <editFirstOffer> is visible
    And <editFirstOffer> is visible

    Examples:
      | domainInputvalue |
      | sunrisesystem.pl |

  Scenario: 8. Checking domain validation
    When I click on the <addOfferButton>
    And I provide "Firma testowa" in the <clientName>
    And I provide "123asd" in the <clientVat>
    And I provide "Jane" in the <contactName>
    And I provide "Smith" in the <contactLastName>
    And I provide "bsp.ext.test91@spis-firm.biz" in the <contactEmail>
    And I provide "987-654-321" in the <contactphone>
    And I provide "ônàlizætiøn☃Iñtërnâti" in the <additionalInfo>
    And I provide "12" in the <site>
    And I click on the <saveOffer>
    Then <domainValidationMessage> is visible
    # And <domainValidationMessage> should be equal "This field is required!"
    When I provide "<domainInputvalue>" in the <domainInput>
    Then <domainValidationMessage> is not visible
    And I wait for <createFirstContract> to be enable
    And I wait for <editFirstOffer> to be enable
    And I click on the <saveOffer>
    And I wait for <createFirstContract> to be enable
    And I wait for <editFirstOffer> to be enable
    Then <editFirstOffer> is visible
    And <editFirstOffer> is visible

  Scenario: 9. Checking partner validation
    When I click on the <addOfferButton>
    And  I provide "<domainInputvalue>" in the <domainInput>
    And I provide "Firma testowa" in the <clientName>
    And I provide "123asd" in the <clientVat>
    And I provide "Jane" in the <contactName>
    And I provide "Smith" in the <contactLastName>
    And I provide "bsp.ext.test91@spis-firm.biz" in the <contactEmail>
    And I provide "987-654-321" in the <contactphone>
    And I provide "ônàlizætiøn☃Iñtërnâti" in the <additionalInfo>
    And I provide "12" in the <site>
    And I click on the <deletePartner>
    And I click on the <saveOffer>
    Then <partnerValidationMessage> is visible
    # And <partnerValidationMessage> should be equal "This field is required!"
    Then <addOfferPopUp> is visible
    When I provide "<domainInputvalue>" in the <domainInput>
    And I wait for <createFirstContract> to be enable
    And I wait for <editFirstOffer> to be enable
    And I click on the <saveOffer>
    And I wait for <createFirstContract> to be enable
    And I wait for <editFirstOffer> to be enable
    Then <editFirstOffer> is visible
    And <editFirstOffer> is visible



  Scenario Outline: 5b. Checking partner validation
    logout
    login test suns
    partnerfield
    When I click on the <editFirstOffer>
    And  I provide "<domainInputvalue>" in the <domainInput>
    And I click on the <deletePartner>
    And I click on the <saveOffer>
    Then <partnerValidationMessage> is visible
    # And <partnerValidationMessage> should be equal "This field is required!"
    Then <addOfferPopUp> is visible
    When I provide "<domainInputvalue>" in the <domainInput>
    And I wait for <createFirstContract> to be enable
    And I wait for <editFirstOffer> to be enable
    And I click on the <saveOffer>
    And I wait for <createFirstContract> to be enable
    And I wait for <editFirstOffer> to be enable
    Then <editFirstOffer> is visible
    And <editFirstOffer> is visible

    Examples:
      | domainInputvalue |
      | sunrisesystem.pl |