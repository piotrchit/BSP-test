Feature: Checking Menu elements and widgets
    Background: 

    Scenario: 1. Checking Menu Sales
        When I click on the <menuSales>
        Then <salesLead> is visible
        And <salesOffer> is visible
        And <salesContract> is visible
        And <salesAudit> is visible
        When I click on the <menuSales>
        Then <salesLead> is not visible
        And <salesOffer> is not visible
        And <salesContract> is not visible
        And <salesAudit> is not visible

    Scenario: 1a. Checking Lead screen
        When I click on the <menuSales>
        And I click on the <salesLead>
        Then <leadsTitle> is visible

    Scenario: 1b. Checking Offer screen
        When  I click on the <salesOffer>
        Then <offerTitle> is visible

    Scenario: 1c. Checking Contract screen
        When I click on the <salesContract>
        Then <contractTitle> is visible

    Scenario: 1d. Checking Audit screen
        When I click on the <salesAudit>
        Then <auditTitle> is visible

    Scenario: 3 Checking top menu elements
        Then <refreshPage> is visible
        And  <chooseLanguage> is visible
        And <userMenu> is visible

    Scenario: 4 Checking Side menu elements
        Then <dashboard> is visible
        And <accounts> is visible
        And <communication> is visible
        And <orders> is visible
        And <service> is visible
        And <API> is visible
        And <contact> is visible
        And <panelSettings> is visible

    Scenario: 4a. Checking accounts screen
        When I click on the <accounts>
        Then <accountsTitle> is visible

    Scenario: 4b. Checking communication screen
        When I click on the <communication>
        Then <communicationTitle> is visible

    Scenario: 4c. Checking orders screen
        When I click on the <orders>
        Then <ordersTitle> is visible

    Scenario: 4d. Checking services screen
        When I click on the <service>
        Then <serviceTitle> is visible

    Scenario: 4e. Checking Api screen
        When I click on the <API>
        Then <APITitle> is visible

    Scenario: 4f. Checking contact screen
        When I click on the <contact>
        Then <contactTitle> is visible

    Scenario: 4g. Checking PanelSettings screen
        When I click on the <panelSettings>
        Then <panelSettingsTitle> is visible

    