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

Scenario: 1. Enter Offer menu
  When I click on the <menuSales>
  And I click on the <salesOffer>
  Then <addOfferButton> is visible

#     Scenario: 1 Checking visibility of table elements
#     Then <addOfferButton> is visible
#     And <ID> is visible
#    And  <domain> is visible
#    And <language> is visible
#   And  <documentType> is visible
#    And <documentState> is visible
#    And <author> is visible
#    And <dataCreated> is visible
#    And <editFirstOffer> is visible
#  And <createFirstContract> is visible

# Scenario: 2a. Cancel Offer with no data and pop-up
#   When I click on the <addOfferButton>
#   And I click on the <cancelButton>
#   Then <offerTitle> is visible

# Scenario: 2b. Cancel Offer with data
#   When I click on the <addOfferButton>
#   And I provide "wsdfghjaddOfferButtonklcfvgbhnm" in the <domainInput>
#   And I click on the <cancelButton>
#   # Then <cancelButtonPopup> should be equal "Czy chcesz porzucić wszystkie zmiany?"
#   And I click on the <noCancelButton>
#   Then <domainInput> is visible
#   And I click on the <cancelButton>
#   And I click on the <yesCancelButton>
#   Then <offerTitle> is visible

# Scenario: 2c. Test X button
#   When I click on the <addOfferButton>
#   And I provide "wsdfghjaddOfferButtonklcfvgbhnm" in the <domainInput>
#   And I click on the <closeX>
#   # Then <cancelButtonPopup> should be equal "Czy chcesz porzucić wszystkie zmiany?"
#   And I click on the <noCancelButton>
#   Then <domainInput> is visible
#   And I click on the <cancelButton>
#   And I click on the <yesCancelButton>
#    Then <offerTitle> is visible


#   Scenario Outline: 4a Create offer obligo
#     When I click on the <addOfferButton>
#     And I wait for <domainInput> to be enable
#     And I click on the <domainInput>
#      And  I provide "<domainInputvalue>" in the <domainInput>
#     # And I click on the <partnerList>
#     # And I select "Sunrise System sp. z o.o. sp. k." from autocomplete <partnerListOpen>
#     And I click on the <saveOffer>
#     And I wait for <createFirstContract> to be enable
#     And I wait for <editFirstOffer> to be enable
#     And I click on the <editFirstOffer>
#     Then <domainInput> should be equal "<domainInputvalue>"
#  And I click on the <closeX>
#   # Then <cancelButtonPopup> should be equal "Czy chcesz porzucić wszystkie zmiany?"
#   Then <offerTitle> is visible

#   Examples:
#   | domainInputvalue | 
#   | sunrisesystem.pl |

# Scenario Outline: 4b Edit offer obligo
#   When I click on the <editFirstOffer>
#    And  I provide "<domainInputvalue>" in the <domainInput>
#   And I click on the <saveOffer>
#   And I wait for <createFirstContract> to be enable
#   And I wait for <editFirstOffer> to be enable
#   And I click on the <editFirstOffer>
#   Then <domainInput> should be equal "<domainInputvalue>"
#  And I click on the <closeX>
#   # Then <cancelButtonPopup> should be equal "Czy chcesz porzucić wszystkie zmiany?"
#   Then <offerTitle> is visible

# Examples:
#   | domainInputvalue | 
#   | sunrisesystem.pl |

# Scenario Outline: 5. Checking domain validation
#   When I click on the <addOfferButton>
#   And I click on the <saveOffer>
#   Then <domainValidationMessage> is visible
#   # And <domainValidationMessage> should be equal "This field is required!"
#   When I provide "<domainInputvalue>" in the <domainInput>
#   Then <domainValidationMessage> is not visible
#   And I wait for <createFirstContract> to be enable
#   And I wait for <editFirstOffer> to be enable
#   And I click on the <saveOffer>
#   And I wait for <createFirstContract> to be enable
#   And I wait for <editFirstOffer> to be enable
#   Then <editFirstOffer> is visible
#   And <editFirstOffer> is visible

#   Examples:
#   | domainInputvalue | 
#   | sunrisesystem.pl |



Scenario Outline: 6. Create Offer - choosing lead
    When I click on the <addOfferButton>
      And I wait for <domainInput> to be enable
      And I click on the <domainInput>
      And I provide "<domainInputvalue>" in the <domainInput>
      # And I click on the <leadList>
     And I select "70 - energylandia.pl - 03/06/2020" from autocomplete <leadList>
      And I click on the <saveOffer>
      And I wait for <createFirstContract> to be enable
      And I wait for <editFirstOffer> to be enable
      And I click on the <editFirstOffer>
      Then <domainInput> should be equal "<domainInputvalue>"

Examples:
  | domainInputvalue | 
  | sunrisesystem.pl |

# Scenario Outline: 7. Edit Offer - all data
#   When I click on the <editFirstOffer>
#    And  I provide "<domainInputvalue>" in the <domainInput>
#   And I provide "Firma testowa" in the <clientName>
#   And I provide "123asd" in the <clientVat>
#   And I provide "Jane" in the <contactName>
#   And I provide "Smith" in the <contactLastName>
#   And I provide "bsp.ext.test91@spis-firm.biz" in the <contactEmail>
#   And I provide "987-654-321" in the <contactphone>
#   And I provide "ônàlizætiøn☃Iñtërnâti" in the <additionalInfo>
#   And I provide "12" in the <site>
#   And I click on the <saveOffer>
#   And I wait for <createFirstContract> to be enable
#   And I wait for <editFirstOffer> to be enable
#   And I click on the <editFirstOffer>
#   Then <domainInput> should be equal "alfaelektro.pl"
#   Then <clientName> should be equal "Firma testowa"
#   Then <clientVat> should be equal "123asd"
#   Then <contactName> should be equal "Jane"
#   Then <contactLastName> should be equal "Smith"
#   Then <contactEmail> should be equal "bsp.ext.test91@spis-firm.biz"
#   Then <contactphone> should be equal "987-654-321"
#   Then <additionalInfo> should be equal "ônàlizætiøn☃Iñtërnâti"
#   Then <site> should be equal "12"

# Examples:
#   | domainInputvalue | 
#   | sunrisesystem.pl |

# Scenario: 8. Checking domain validation
#   When I click on the <addOfferButton>
#   And I provide "Firma testowa" in the <clientName>
#   And I provide "123asd" in the <clientVat>
#   And I provide "Jane" in the <contactName>
#   And I provide "Smith" in the <contactLastName>
#   And I provide "bsp.ext.test91@spis-firm.biz" in the <contactEmail>
#   And I provide "987-654-321" in the <contactphone>
#   And I provide "ônàlizætiøn☃Iñtërnâti" in the <additionalInfo>
#   And I provide "12" in the <site>
#   And I click on the <saveOffer>
#   Then <domainValidationMessage> is visible
#   # And <domainValidationMessage> should be equal "This field is required!"
#   When I provide "<domainInputvalue>" in the <domainInput>
#   Then <domainValidationMessage> is not visible
#   And I wait for <createFirstContract> to be enable
#   And I wait for <editFirstOffer> to be enable
#   And I click on the <saveOffer>
#   And I wait for <createFirstContract> to be enable
#   And I wait for <editFirstOffer> to be enable
#   Then <editFirstOffer> is visible
#   And <editFirstOffer> is visible

# Scenario: 9. Checking partner validation
#   When I click on the <addOfferButton>
#    And  I provide "<domainInputvalue>" in the <domainInput>
#   And I provide "Firma testowa" in the <clientName>
#   And I provide "123asd" in the <clientVat>
#   And I provide "Jane" in the <contactName>
#   And I provide "Smith" in the <contactLastName>
#   And I provide "bsp.ext.test91@spis-firm.biz" in the <contactEmail>
#   And I provide "987-654-321" in the <contactphone>
#   And I provide "ônàlizætiøn☃Iñtërnâti" in the <additionalInfo>
#   And I provide "12" in the <site>
#   And I click on the <deletePartner>
#   And I click on the <saveOffer>
#   Then <partnerValidationMessage> is visible
#   # And <partnerValidationMessage> should be equal "This field is required!"
#   Then <addOfferPopUp> is visible
#   When I provide "<domainInputvalue>" in the <domainInput>
#   And I wait for <createFirstContract> to be enable
#   And I wait for <editFirstOffer> to be enable
#   And I click on the <saveOffer>
#   And I wait for <createFirstContract> to be enable
#   And I wait for <editFirstOffer> to be enable
#   Then <editFirstOffer> is visible
#   And <editFirstOffer> is visible

# Scenario Outline: 10. Create contract from offer
#     When I click on the <addOfferButton>
#     And I wait for <domainInput> to be enable
#     And I click on the <domainInput>
#     And I provide "<domainInputValue>" in the <domainInput>
#     # And I click on the <partnerList>
#     # And I select "Sunrise System sp. z o.o. sp. k." from autocomplete <partnerListOpen>
#     And I click on the <saveOffer>
#     And I wait for <createFirstContract> to be enable
#     And I wait for <editFirstOffer> to be enable
#     And I click on the <createFirstContract>
#     Then <offerPopUp> is visible

#     Examples:
#       | domainInputValue |
#       | alfaelektro.pl   |
# Scenario Outline: 5b. Checking partner validation
# logout
# login test suns 
# partnerfield
#   When I click on the <editFirstOffer>
#    And  I provide "<domainInputvalue>" in the <domainInput>
#   And I click on the <deletePartner>
#   And I click on the <saveOffer>
#   Then <partnerValidationMessage> is visible
#   # And <partnerValidationMessage> should be equal "This field is required!"
#   Then <addOfferPopUp> is visible
#   When I provide "<domainInputvalue>" in the <domainInput>
#   And I wait for <createFirstContract> to be enable
#   And I wait for <editFirstOffer> to be enable
#   And I click on the <saveOffer>
#   And I wait for <createFirstContract> to be enable
#   And I wait for <editFirstOffer> to be enable
#   Then <editFirstOffer> is visible
#   And <editFirstOffer> is visible

# Examples:
#   | domainInputvalue | 
#   | sunrisesystem.pl |