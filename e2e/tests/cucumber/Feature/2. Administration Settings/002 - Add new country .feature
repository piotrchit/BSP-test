Feature: Login as full entity user
    Background: Open Page and load content

    Scenario: 1. Enter Country and checking exising country
        When I click on the <administrationMenu>
        And I click on the <countryMenu>
        And I want to wait <5> seconds
        Then <addNewCountry> is visible
        And <searchCountry> is visible
        And <countryPoland> is visible
        And <countryGermany> is visible
        And <countryUS> is visible
        And <countryDenmark> is visible
        And <countryIreland> is visible

    # Scenario Outline: 2. Add new Country
    #     When I click on the <addNewCountry>
    #     And I provide "<countryNameValue>" in the <countryName>
    #     And I provide "<countryIDValue>" in the <countryID>
    #     And I click on the <addRegion>
    #     And I provide "<regionValue>" in the <newRegion>
    #     And I click on the <saveNewCountry>
    #     And <created1stCountry> is visible

    #     Examples:
    #         | countryNameValue | countryIDValue | regionValue |
    #         | Test country 2   | TC2            | test region |

    # Aby sprawdzic nowe kraje dodac do Pages
    # export const created2ndCountry: ElementFinder = element(by.partialLinkText("nazwa_kraju"));

    Scenario: 3. Checking new country in the Partner Adress
        When I click on the <panelSettings>
        And I click on the <vievPartnerAdress>
        And I click on the <partnerCountry>
        And I click on the <newPartnerCountry>
        Then <createdCountry> is visible

    Scenario: 4. Checking new country in the Client Adress
        When I click on the <accounts>
        Then <accountsTitle> is visible
        When I click on the <addNewClient>
        And I click on the <companyCountry>
        And I click on the <createdCountry>
        Then <createdCountry> is visible
        When I click on the <closeXClientWindows>
        And I click on the <cancelWidgetNoButton>

    Scenario: 5. Checking new country in the Partner Creations
        When I click on the <administrationMenu>
        And I click on the <partnersMenu>
        And I click on the <addNewPartner>
        And I click on the <companyCountry>
        And I click on the <newCountry>
        Then <createdCountry> is visible

