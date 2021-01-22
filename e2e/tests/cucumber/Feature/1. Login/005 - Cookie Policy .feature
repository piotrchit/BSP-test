# ^NOWA FUNKCJONALNOSC 2.6

Feature: 5. Cookie policy bar
    Background:

    Scenario: 0. Loging and load content
        Given I open the Partner 1 TEST page

    Scenario: 1. Checking Cookie bar elements
        Then <cookieBarContent> is visible
        # And <cookieBarContent> should be equal " We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies."
        And <moreInfo> is visible
        And <gotIt> is visible

    Scenario: 2. Load cookie bar content
        When I click on the <moreInfo>
        Then <cookieTitle> is visible
        # And <cookieTitle> should be equal "Cookie policy"
        And <cookiePopUpContent> is visible
        # And <cookiePopUpContent> should be equal "Policy on cookies and similar technologies of September 1, 2020."
        When I click on the <cookieXClose>
        Then <cookieBarContent> is visible

    Scenario: 3. Close Cookie bar
        When I click on the <gotIt>
        Then <gotIt> is not visible