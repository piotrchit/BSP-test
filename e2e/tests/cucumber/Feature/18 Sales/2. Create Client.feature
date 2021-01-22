Feature: Create Test client
  Background:


  Scenario: 2.1. Enter Accounts menu
    When I click on the <accounts>
    Then <accountsTitle> is visible
    And <sortByDateUp> is visible

  # Scenario Outline: 2.2. Create new Client
  #   When I click on the <addNewClient>
  #   Then <newClientTitle> is visible
  #   When I click on the <clientCountry>
  #   And I click on the <countryName>
  #   And I provide "<VATIDValue>" in the <VatID>
  #   Then <clientCompanyName> is visible
  #   And <clientLanguage> is visible
  #   And <clientTimezone> is visible
  #   And <clientCurrency> is visible
  #   When I provide "<companyNameValue>" in the <clientCompanyName>
  #   And <saveClient> is active
  #   And I click on the <saveClient>
  #   Then <newCompanyOnList> is visible

  #   Examples:
  #     | countryName | VATIDValue  | companyNameValue |
  #     | <clientGER> | randomValue1 | Test Company     |
  # | <clientPL>          |
  # | <clientUS>           |
  # | <clientDEN>          |
  # | <clientIRE>          |
  # | <clientFR>           |
  # | <clientUK>           |
  # | <clientFrenchGuiana> |
  # | <client FR>          |
  # | <clientNewTest>      |

  Scenario: 2.3. Enter created client
    When I click on the <sortByDateUp>
    And I click on the <sortByDateDown>
    And I click on the <newCompanyOnList>
    Then <basicInfo> is visible

  Scenario Outline: 2.4. Add Main and Contact Adress
    When I click on the <addAdress>
    Then <adressesMenu> is visible
    When I provide "<FullNameValue>" in the <mainCompanyFullName>
    And I click on the <PolandClientCountry>
    And I click on the <dolnoslaskieClientRegion>
    And I provide "<StreetValue>" in the <mainCompanyStreet>
    And I provide "<NumberValue>" in the <mainCompanyNumber>
    And I provide "<ZipCodeValue>" in the <mainCompanyZipCode>
    And I provide "<CityValue>" in the <mainCompanyCity>
    And I provide "<InfoValue>" in the <mainCompanyInfo>
    # And I click on the <saveMainAdress>
    Examples:
      | FullNameValue        | CountryValue   | RegionValue | StreetValue | NumberValue | ZipCodeValue | CityValue | InfoValue |
      | Test Client Ferduś 2 | <PolandClient> | <DLClient>  | jasna       | 7           | 55-630       | Wrocław   | INFO      |

  Scenario Outline: 2.5. Add Contact Adress
    When I provide "<FullNameValue>" in the <contactCompanyFullName>
    And I click on the <PolandMailingCountry>
    And I click on the <dolnoslaskieMailingRegion>
    And I provide "<RegionValue>" in the <contactCompanyRegion>
    And I provide "<StreetValue>" in the <contactCompanyStreet>
    And I provide "<NumberValue>" in the <contactCompanyNumber>
    And I provide "<ZipCodeValue>" in the <contactCompanyZipCode>
    And I provide "<CityValue>" in the <contactCompanyCity>
    And I provide "<InfoValue>" in the <contactCompanyInfo>
  #  And I click on the <saveContactAdress>
    Then <backToKK> is visible

    Examples:
      | FullNameValue        | CountryValue   | RegionValue | StreetValue | NumberValue | ZipCodeValue | CityValue | InfoValue |
      | Test Client Ferduś 2 | <PolandClient> | <DLClient>  | ciemna      | 1           | 57-200       | Poznań    | INFO      |

  Scenario: 2.5 Enter Contact Menu
    And I click on the <backToKK>
    When I click on the <contactMenu>

# Scenario Outline: 2.6. Add Contact
#   And I click on the <addNewContact>
#   And I provide "<name>" in the <newContactName>
#   And I provide "<mail>" in the <contactMail>
#   And I provide "<tel>" in the <contactTel>
#   And I provide "<info>" in the <contactInfo>
#   And I click on the <contactType>
#   And I click on the <saveKKContact>
#   Then <backToKK> is visible

#   Examples:
#     | name  | mail         | tel       | info     | contactType         |
#     | test  | test@test.pl | 123456789 | testInfo | <contactHR>         |
#     | tes2  | test@test.pl | 123456789 | testInfo | <contactAccounting> |
#     | test3 | test@test.pl | 123456789 | testInfo | <contactMarketing>  |

# Scenario: 2.7. Enter Client account
#  And I click on the <backToKK>

