Feature: Login as full entity user
    Background: Open Page and load content

    Scenario: 1. Enter Andministration => currency
        When I choose <administrationMenu>
        And I click on the <currenciesMenu>
        Then <addNewCurrency> is visible

    Scenario Outline: 2. Add new currency
        When I click on the <addNewCurrency>
        And I provide "<currencyNameValue>" in the <currencyName>
        And I provide "<currencyIDValue>" in the <currencyID>
        And I click on the <saveNewCurrency>
        Then  <created1stCurrency> is visible

        Examples:
            | currencyNameValue | currencyIDValue |
            | Test currency 1   | TC1             |

    Scenario Outline: 1. Checking new Test currency on price Lists
        When I click on the <panelSettings>
        And I click on the <pricelists>
        When I click on the <addPriceList>
        And I provide "<NameValue>" in the <pricelistName>
        And I provide "<startPriceList>" in the <startDate>
        And I click on the <currencyPriceList>
        And I click on the <newCurrency>
       
        Examples:
            | NameValue                 | startPriceList |
            | partner 1st new pricelist | 2020-10-22     |