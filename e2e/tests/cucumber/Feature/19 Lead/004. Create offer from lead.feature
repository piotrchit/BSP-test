Feature: Create ffer from lead
  Background: 
  Given I refresh page

  Scenario Outline: 4.1. Create offer from lead
    When I click on the <addLeadButton>
    And I wait for <wwwInput> to be enable
    And I click on the <wwwInput>
    And I provide "<wwwInputValue>" in the <wwwInput>
    And I click on the <saveLead>
         And I move to <showActionButton>
    And I wait for <createFirstOffer> to be enable
    And I wait for <editFirstLead> to be enable
    And I click on the <createFirstOffer>
    Then <offerPopUp> is visible

    Examples:
      | wwwInputValue  |
      | alfaelektro.pl |

  # Scenario Outline: 4.2. Creating offer - more than one lead
  #   When I click on the <addLeadButton>
  #   And I wait for <wwwInput> to be enable
  #   And I click on the <wwwInput>
  #   And I provide "<wwwInputValue>" in the <wwwInput>
  #   And I click on the <saveLead>
  #        And I move to <showActionButton>
  #   And I wait for <createFirstOffer> to be enable
  #   And I wait for <editFirstLead> to be enable
  #   And I click on the <createFirstOffer>
  #   Then <offerPopUp> is visible

  #   Examples:
  #     | wwwInputValue    |
  #     | sunrisesystem.pl |