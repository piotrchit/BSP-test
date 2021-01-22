Feature: Add new user with basic types of priviliges
  Background:

  Scenario: 1. Enter Users menu
    When I click on the <panelSettings>
    And I click on the <pricelists>
    Then <pricelistTitle> is visible

  Scenario Outline:  2. Add new Euro Pricelist
    When I click on the <partnerList>
    And I click on the <choosePartnerValue>
    And I wait for <partnerTitleValue> to be visible
    Then <partnerTitleValue> is visible
    And I click on the <addPriceList>
    And I click on the <partnerList>
    And I provide "<NameValue>" in the <pricelistName>
    And I provide "<startPriceList>" in the <startDate>
    And I click on the <chooseCurrency>
    And I click on the <editAsCSV>
    And I provide "1;2;3;199;199;199;0;" in the <CSVEditor>
    And I click on the <saveCSV>
    Then <pricelistElements> is visible
    When I click on the <savePriceList>
    And I click on the <backToPriceList>
    Then <pricelistTitle> is visible

    Examples:
      | choosePartnerValue | partnerTitleValue      | NameValue                   | startPriceList | chooseCurrency |
      # | <grupaRMFPartner>  | <grupaRMFPartnerTitle> | partner 1st ZLOTY pricelist | 2021-10-22     | <polishZloty>  |
# | <heisePartner> | <heisePartnerTitle> | partner 1st EURO pricelist | 2021-10-22     | <euro>         |
| <bauerPartner>    | <bauerPartnerTitle> | partner 1st POUNDS pricelist | 2021-10-24     | <pounds>       |
| <testPartner>     | <testPartnerTitle> | partner 1st DOLLAR pricelist | 2021-10-24     | <dollar>       |
# | <sunSPartner>     | <sunSPartnerTitle> | partner 1st DOLLAR pricelist | 2021-10-22     | <euro>       |

