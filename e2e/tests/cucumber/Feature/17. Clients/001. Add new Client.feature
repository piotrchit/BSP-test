Feature: Create New Client
  Background: Login
    Given I open the Partner 1 TEST page

  Scenario: 1. Login as Admin
    When I provide "bsp.ext.test1@spis-firm.biz" in the <loginInput>
    And I click on the <nextPageButton>
    And I provide "1Ib7yI;1BML^" in the <passInput>
    And I click on the <loginButton>
    Then <logoImage> is visible

  # Add new client?
  Scenario: 2. Create new client
    When I click on the <accounts>
    Then <accountsTitle> is visible
    When I click on the <addNewClient>
    Then <newClientTitle> is visible
