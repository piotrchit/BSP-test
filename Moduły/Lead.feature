Feature: Logowanie się do BSP
  Background: Open Page and load content

# Scenario Outline: 0. BSP Login
#   Given I open the Partner 1 TEST page
#   Then <loginTitle> is visible
#   When I provide "<loginInputValue>" in the <loginInput>
#   And I click on the <nextPageButton>
#   And I provide "<passInputValue>" in the <passInput>
#   And I click on the <loginButton>
#   Then <logoImage> is visible

#   Examples:
#     | loginInputValue             | passInputValue |
#     | bsp.ext.test1@spis-firm.biz | 1Ib7yI;1BML^   |

# Scenario: 1. Checking Menu Sales
#   When I click on the <menuSales>
#   Then <salesLead> is visible
#   Then <salesOffer> is visible
#   Then <salesContract> is visible
#   Then <salesAudit> is visible
#   When I click on the <menuSales>
#   Then <salesLead> is not visible
#   Then <salesOffer> is not visible
#   Then <salesContract> is not visible
#   Then <salesAudit> is not visible

# Scenario: 0a. Enter Lead
#   When I click on the <menuSales>
#   And I click on the <salesLead>
#   Then <addLeadButton> is visible

#     Scenario: 1 Checking visibility of table elements
#     Then <addLeadButton> is visible
#     And <ID> is visible
#    And  <domain> is visible
#    And <language> is visible
#   And  <documentType> is visible
#    And <documentState> is visible
#    And <author> is visible
#    And <dataCreated> is visible
#    And <editFirstLead> is visible
#  And <createFirstOffer> is visible

# Scenario: 1a. Cancel Lead with no data and pop-up
#   When I click on the <addLeadButton>
#   And I click on the <cancelButton>
#   Then <leadsTitle> is visible

# Scenario: 2. Cancel Lead with data
#   When I click on the <addLeadButton>
#   And I provide "wsdfghjaddLeadButtonklcfvgbhnm" in the <domainInput>
#   And I click on the <cancelButton>
#   # Then <cancelButtonPopup> should be equal "Czy chcesz porzucić wszystkie zmiany?"
#   And I click on the <noCancelLeadButton>
#   Then <domainInput> is visible
#   And I click on the <cancelButton>
#   And I click on the <yesCancelLeadButton>
#   Then <leadsTitle> is visible

# Scenario: 3. Test X button
#   When I click on the <addLeadButton>
#   And I provide "wsdfghjaddLeadButtonklcfvgbhnm" in the <domainInput>
#   And I click on the <closeLeadX>
#   # Then <cancelButtonPopup> should be equal "Czy chcesz porzucić wszystkie zmiany?"
#  > And I click on the <noCancelLeadButton>
#   Then <domainInput> is visible
#   And I click on the <cancelButton>
#   And I click on the <yesCancelLeadButton>
#    Then <leadsTitle> is visible

#   Scenario: 4 Create lead obligo
#     When I click on the <addLeadButton>
#     And I wait for <domainInput> to be enable
#     And I click on the <domainInput>
#     And I provide "betaelektro.pl" in the <domainInput>
#     # And I click on the <partnerList>
#     # And I select "Sunrise System sp. z o.o. sp. k." from autocomplete <partnerListOpen>
#     And I click on the <saveLead>
#     And I wait for <createFirstOffer> to be enable
#     And I wait for <editFirstLead> to be enable
#     And I click on the <editFirstLead>
#     Then <domainInput> should be equal "betaelektro.pl"

# Scenario: 5 Edit lead obligo
#   When I click on the <editFirstLead>
#   And I provide "alfaelektro.pl" in the <domainInput>
#   And I click on the <saveLead>
#   And I wait for <createFirstOffer> to be enable
#   And I wait for <editFirstLead> to be enable
#   And I click on the <editFirstLead>
#   Then <domainInput> should be equal "alfaelektro.pl"

# Scenario: 6. Create Lead - all data
#     When I click on the <addLeadButton>
#       And I wait for <domainInput> to be enable
#       And I click on the <domainInput>
#       And I provide "betaelektro.pl" in the <domainInput>
#       And I provide "Testowa Firma" in the <clientName>
#       And I provide "asd123" in the <clientVat>
#       And I provide "John" in the <contactName>
#       And I provide "Doe" in the <contactLastName>
#       And I provide "bsp.ext.test19@spis-firm.biz" in the <contactEmail>
#       And I provide "123-456-789" in the <contactphone>
#       And I provide "Iñtërnâtiônàlizætiøn☃" in the <additionalInfo>
#       And I provide "123" in the <site>
#       # And I click on the <partnerList>
#       # And I select "Sunrise System sp. z o.o. sp. k." from autocomplete <partnerListOpen>
#       And I click on the <saveLead>
#       And I wait for <createFirstOffer> to be enable
#       And I wait for <editFirstLead> to be enable
#       And I click on the <editFirstLead>
#       Then <domainInput> should be equal "betaelektro.pl"
#       Then <clientName> should be equal "Testowa Firma"
#       Then <clientVat> should be equal "asd123"
#       Then <contactName> should be equal "John"
#       Then <contactLastName> should be equal "Doe"
#       Then <contactEmail> should be equal "bsp.ext.test19@spis-firm.biz"
#       Then <contactphone> should be equal "123-456-789"
#       Then <additionalInfo> should be equal "Iñtërnâtiônàlizætiøn☃"
#       Then <site> should be equal "123"

# Scenario: 7. Edit Lead - all data
#   When I click on the <editFirstLead>
#   And I provide "alfaelektro.pl" in the <domainInput>
#   And I provide "Firma testowa" in the <clientName>
#   And I provide "123asd" in the <clientVat>
#   And I provide "Jane" in the <contactName>
#   And I provide "Smith" in the <contactLastName>
#   And I provide "bsp.ext.test91@spis-firm.biz" in the <contactEmail>
#   And I provide "987-654-321" in the <contactphone>
#   And I provide "ônàlizætiøn☃Iñtërnâti" in the <additionalInfo>
#   And I provide "12" in the <site>
#   And I click on the <saveLead>
#   And I wait for <createFirstOffer> to be enable
#   And I wait for <editFirstLead> to be enable
#   And I click on the <editFirstLead>
#   Then <domainInput> should be equal "alfaelektro.pl"
#   Then <clientName> should be equal "Firma testowa"
#   Then <clientVat> should be equal "123asd"
#   Then <contactName> should be equal "Jane"
#   Then <contactLastName> should be equal "Smith"
#   Then <contactEmail> should be equal "bsp.ext.test91@spis-firm.biz"
#   Then <contactphone> should be equal "987-654-321"
#   Then <additionalInfo> should be equal "ônàlizætiøn☃Iñtërnâti"
#   Then <site> should be equal "12"

# Scenario: 8. Checking domain validation
#   When I click on the <addLeadButton>
#   And I provide "Firma testowa" in the <clientName>
#   And I provide "123asd" in the <clientVat>
#   And I provide "Jane" in the <contactName>
#   And I provide "Smith" in the <contactLastName>
#   And I provide "bsp.ext.test91@spis-firm.biz" in the <contactEmail>
#   And I provide "987-654-321" in the <contactphone>
#   And I provide "ônàlizætiøn☃Iñtërnâti" in the <additionalInfo>
#   And I provide "12" in the <site>
#   And I click on the <saveLead>
#   Then <wwwValidationMessage> is visible
#   # And <wwwValidationMessage> should be equal "This field is required!"
#   When I provide "alfaelektro.pl" in the <domainInput>
#   Then <wwwValidationMessage> is not visible
#   And I wait for <createFirstOffer> to be enable
#   And I wait for <editFirstLead> to be enable
#   And I click on the <saveLead>
#   And I wait for <createFirstOffer> to be enable
#   And I wait for <editFirstLead> to be enable
#   Then <editFirstLead> is visible
#   And <editFirstLead> is visible

# Scenario: 9. Checking partner validation
#   When I click on the <addLeadButton>
#   And I provide "alfaelektro.pl" in the <domainInput>
#   And I provide "Firma testowa" in the <clientName>
#   And I provide "123asd" in the <clientVat>
#   And I provide "Jane" in the <contactName>
#   And I provide "Smith" in the <contactLastName>
#   And I provide "bsp.ext.test91@spis-firm.biz" in the <contactEmail>
#   And I provide "987-654-321" in the <contactphone>
#   And I provide "ônàlizætiøn☃Iñtërnâti" in the <additionalInfo>
#   And I provide "12" in the <site>
#   And I click on the <deletePartner>
#   And I click on the <saveLead>
#   Then <partnerValidationMessage> is visible
#   # And <partnerValidationMessage> should be equal "This field is required!"
#   Then <addLeadPopUp> is visible
#   When I provide "alfaelektro.pl" in the <domainInput>
#   And I wait for <createFirstOffer> to be enable
#   And I wait for <editFirstLead> to be enable
#   And I click on the <saveLead>
#   And I wait for <createFirstOffer> to be enable
#   And I wait for <editFirstLead> to be enable
#   Then <editFirstLead> is visible
#   And <editFirstLead> is visible

Scenario Outline: 10a. Create offer from lead
    When I click on the <addLeadButton>
    And I wait for <domainInput> to be enable
    And I click on the <domainInput>
    And I provide "<domainInputValue>" in the <domainInput>
    # And I click on the <partnerList>
    # And I select "Sunrise System sp. z o.o. sp. k." from autocomplete <partnerListOpen>
    And I click on the <saveLead>
    And I wait for <createFirstOffer> to be enable
    And I wait for <editFirstLead> to be enable
    And I click on the <createFirstOffer>
    Then <offerPopUp> is visible

    Examples:
      | domainInputValue |
      | alfaelektro.pl   |

# # ^poprawa
Scenario: 10b. Creating offer - more than one lead
 When I click on the <addLeadButton>
    And I wait for <domainInput> to be enable
    And I click on the <domainInput>
    And I provide "<domainInputValue>" in the <domainInput>
    # And I click on the <partnerList>
    # And I select "Sunrise System sp. z o.o. sp. k." from autocomplete <partnerListOpen>
    And I click on the <saveLead>
    And I wait for <createFirstOffer> to be enable
    And I wait for <editFirstLead> to be enable
    And I click on the <createFirstOffer>
    Then <offerPopUp> is visible

    Examples:
      | domainInputValue |
      | sunrisesystem.pl |