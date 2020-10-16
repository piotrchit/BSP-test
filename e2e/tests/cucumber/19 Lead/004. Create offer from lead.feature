Feature: Create ffer from lead
  Background: 

  Scenario Outline: 10a. Create offer from lead
    When I click on the <addLeadButton>
    And I wait for <wwwInput> to be enable
    And I click on the <wwwInput>
    And I provide "<wwwInputValue>" in the <wwwInput>
    # And I click on the <partnerList>
    # And I select "Sunrise System sp. z o.o. sp. k." from autocomplete <partnerListOpen>
    And I click on the <saveLead>
    And I wait for <createFirstOffer> to be enable
    And I wait for <editFirstLead> to be enable
    And I click on the <createFirstOffer>
    Then <offerPopUp> is visible

    Examples:
      | wwwInputValue  |
      | alfaelektro.pl |

  # # ^poprawa
  Scenario Outline: 10b. Creating offer - more than one lead
    When I click on the <addLeadButton>
    And I wait for <wwwInput> to be enable
    And I click on the <wwwInput>
    And I provide "<wwwInputValue>" in the <wwwInput>
    # And I click on the <partnerList>
    # And I select "Sunrise System sp. z o.o. sp. k." from autocomplete <partnerListOpen>
    And I click on the <saveLead>
    And I wait for <createFirstOffer> to be enable
    And I wait for <editFirstLead> to be enable
    And I click on the <createFirstOffer>
    Then <offerPopUp> is visible

    Examples:
      | wwwInputValue    |
      | sunrisesystem.pl |