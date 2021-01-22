# Feature: Lead
#   Background:

#   Scenario: 2.1 Create lead obligo
#     When I click on the <addLeadButton>
#     And I provide "betaelektro.pl" in the <wwwInput>
#     And I click on the <saveLead>
#     And I click on the <showActionButtons>
#     And I wait for <createFirstOffer> to be enable
#     And I wait for <editFirstLead> to be enable

#   Scenario Outline: 2.2. Create Lead - all data
#     When I click on the <addLeadButton>
#     And I provide "<wwwValue>" in the <wwwInput>
#     And I provide "<clientNameValue>" in the <clientName>
#     And I provide "<vatValue>" in the <clientVat>
#     And I provide "<nameValue>" in the <contactName>
#     And I provide "<lastNameValue>" in the <contactLastName>
#     And I provide "<emailValue>" in the <contactEmail>
#     And I provide "<phoneValue>" in the <contactphone>
#     And I provide "<infoValue>" in the <additionalInfo>
#   # RMF brak site
#    # And I provide "<siteValue>" in the <site>
#     And I click on the <saveLead>
#     And I click on the <showActionButtons>
#     And I wait for <createFirstOffer> to be enable
#     And I wait for <editFirstLead> to be enable
#     And I click on the <editFirstLead>
#     Then <wwwInput> should be equal "<wwwValue>"
#     Then <clientName> should be equal "<clientNameValue>"
#     Then <clientVat> should be equal "<vatValue>"
#     Then <contactName> should be equal "<nameValue>"
#     Then <contactLastName> should be equal "<lastNameValue>"
#     Then <contactEmail> should be equal "<emailValue>"
#     Then <contactphone> should be equal "<phoneValue>"
#     Then <additionalInfo> should be equal "<infoValue>"
#     # Then <site> should be equal "<siteValue>"

#     Examples:
#       | wwwValue       | clientNameValue | vatValue | nameValue | lastNameValue | emailValue                   | phoneValue  | infoValue              | siteValue |
#       | betaelektro.pl | Testowa Firma   | asd123   | John      | Doe           | bsp.ext.test19@spis-firm.biz | 123-456-789 | Iñtërnâtiônàlizætiøn☃ | 123       |