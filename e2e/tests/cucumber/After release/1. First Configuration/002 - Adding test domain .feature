Feature: Create and check Partners Domain
  Background: Add domain Partner 1 to Heise, 2 to RMF and 3 to Bauer and open that domain

  Scenario: 2.1. Enter domain menu
    When I click on the <panelSettings>
    And I click on the <partnerDomain>
    Then <platformMenu> is visible
    And <auditMenu> is visible
    And <serviceMenu> is visible


  Scenario Outline: 2.2. Choose Partner and add domain
    When I click on the <partnerList>
    And I click on the <choosePartnerValue>
    And I choose <platformMenu>
    And I click on the <partnerDomainInput>
    And I provide "<partnerDomainValue>" in the <partnerDomainInput>
    And I click on the <saveDomain>
    Then <partnerDomainInput> should be equal "<partnerDomainValue>"

    Examples:
      | choosePartnerValue | partnerDomainValue        |
      | <heisePartner>     | partner1.test.bauerseo.pl |
      | <grupaRMFPartner>  | partner2.test.bauerseo.pl |
      | <bauerPartner>     | partner3.test.bauerseo.pl |

  Scenario: 2.3. Checking First Domain
    Given I open the Partner 1 TEST page
    Then <loginTitle> is visible

  Scenario: 2.4. Checking Second Domain
    Given I open the Partner 2 TEST page
    Then <loginTitle> is visible

  Scenario: 2.5. Checking Third Domain
    Given I open the Partner 3 TEST page
    Then <loginTitle> is visible

  Scenario: 2.6. Back to Main domain
    Given I open the BSP TEST page
    Then <logoImage> is visible