# ^NOWA FUNKCJONALNOSC 2.6


Feature: 7. Cookie policy bar
    Background:

    Scenario: 0. Loging and load content
        Given I open the Partner 2 TEST page
         When I click on the <gotIt>

    Scenario: 1. Visibility of footer buttons
        Then <cookiePolicyFooter> is visible
        Then <termsAndConditionsFooter> is visible
        Then <privacyPolicyFooter> is visible
        Then <loginFooter> is visible

    Scenario: 2. Checking Cookie Footer
        When I click on the <cookiePolicyFooter>

    Scenario: 3. Checking Terms Footer
        When I click on the <termsAndConditionsFooter>

    Scenario: 4. Checking privacy Policy Footer
        When I click on the <privacyPolicyFooter>

    Scenario: 5. Checking Login Footer
        When I click on the <loginFooter>