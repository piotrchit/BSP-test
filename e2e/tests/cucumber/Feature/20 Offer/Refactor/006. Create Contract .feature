Feature: Create contract from offet
    Background: 

Scenario Outline: 1. Create contract from offer
    When I click on the <addOfferButton>
    And I wait for <domainInput> to be enable
    And I click on the <domainInput>
    And I provide "<domainInputValue>" in the <domainInput>
    # And I click on the <partnerList>
    # And I select "Sunrise System sp. z o.o. sp. k." from autocomplete <partnerListOpen>
    And I click on the <saveOffer>
    And I wait for <createFirstContract> to be enable
    And I wait for <editFirstOffer> to be enable
    And I click on the <createFirstContract>
    Then <offerPopUp> is visible

    Examples:
      | domainInputValue |
      | alfaelektro.pl   |
