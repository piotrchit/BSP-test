Feature: Create Offer with Lead
    Background:

    Scenario: 1. Enter Lead Menu
        When I click on the <menuSales>
        And I click on the <salesLead>
        Then <addLeadButton> is visible

    Scenario Outline: Create lead and add lead to offer
        When I click on the <addLeadButton>
        And I provide "<wwwValue>" in the <wwwInput>
        And I provide "<clientNameValue>" in the <clientName>
        And I provide "<vatValue>" in the <clientVat>
        And I provide "<nameValue>" in the <contactName>
        And I provide "<lastNameValue>" in the <contactLastName>
        And I provide "<emailValue>" in the <contactEmail>
        And I provide "<phoneValue>" in the <contactphone>
        And I provide "<infoValue>" in the <additionalInfo>
        And I provide "<siteValue>" in the <site>
        And I click on the <saveLead>

    Scenario: 2. Enter Offer menu
        When I click on the <menuSales>
        And I click on the <salesOffer>
        Then <addOfferButton> is visible

    Scenario Outline: 1. Create offer and checking saving data
        When I click on the <addOfferButton>
        And I wait for <offerDomain> to be enable
        And I click on the <offerDomain>
        And I provide "<wwwValue>" in the <offerDomain>
        And I click on the <saveOffer>
        And I choose <showHiddenActionButton>
        And I wait for <createFirstContract> to be enable
        And I wait for <editFirstOffer> to be enable
        And I click on the <editFirstOffer>
        And I wait for <offerDomain> to be enable
        Then <offerDomain> should be equal "<wwwValue>"
        When I click on the <closeX>
        And I choose <discardChanges>
        # Then <cancelButtonPopup> should be equal "Czy chcesz porzucić wszystkie zmiany?"
        Then <offerTitle> is visible

        Examples:
            | wwwValue   | clientNameValue | vatValue | nameValue | lastNameValue | emailValue                   | phoneValue  | infoValue              | siteValue |
            | Alipay.com | Testowa Firma   | asd123   | John      | Doe           | bsp.ext.test19@spis-firm.biz | 123-456-789 | Iñtërnâtiônàlizætiøn☃ | 123       |