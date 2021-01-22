Feature: Elements menu Lead
  Background:

  Scenario: 1.1 Checking Menu Sales
    When I click on the <menuSales>
    Then <salesLead> is visible
    And  <salesOffer> is visible
    And <salesContract> is visible
    And <salesAudit> is visible
    When I click on the <menuSales>
    And <salesLead> is not visible
    And <salesOffer> is not visible
    And <salesContract> is not visible
    And <salesAudit> is not visible

  Scenario: 1.2. Enter Lead
    When I click on the <menuSales>
    And I click on the <salesLead>
    Then <addLeadButton> is visible

  # Scenario: 1.3 Checking visibility of table elements
  #   Then <addLeadButton> is visible
  #   And <ID> is visible
  #   And  <domain> is visible
  #   And <language> is visible
  #   And  <documentType> is visible
  #   And <documentState> is visible
  #   And <author> is visible
  #   And <dataCreated> is visible

  # Scenario: 1.4. Cancel Lead with data
  #   When I click on the <addLeadButton>
  #   And I provide "wsdfghjaddLeadButtonklcfvgbhnm" in the <wwwInput>
  #   And I click on the <cancelButton>
  #   Then <KeepEditing> is visible
  #   And <Do_you_really_want_to_abandon_all_changes> is visible
  #   And <The_changes_you_made_will_be_lost> is visible
  #   When I choose <keepEditingButton>
  #   Then <wwwInput> is visible
  #   When I click on the <cancelButton>
  #   And I choose <discardChanges>
  #   Then <leadsTitle> is visible

  # Scenario: 1.5 Cancel Lead with no data and pop-up
  #   When I click on the <addLeadButton>
  #   And I click on the <cancelButton>
  #   Then <leadsTitle> is visible

  # Scenario: 1.6. Test X button
  #   When I click on the <addLeadButton>
  #   And I provide "wsdfghjaddLeadButtonklcfvgbhnm" in the <wwwInput>
  #   And I click on the <closeX>
  #   Then <KeepEditing> is visible
  #   And <Do_you_really_want_to_abandon_all_changes> is visible
  #   And <The_changes_you_made_will_be_lost> is visible
  #   And I choose <keepEditingButton>
  #   Then <wwwInput> is visible
  #   And I click on the <cancelButton>
  #   And I choose <discardChanges>
  #   Then <leadsTitle> is visible


