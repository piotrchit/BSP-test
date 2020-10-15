Feature: Tworzenie nowego Klienta
    Background: Open Client Page
        
        Scenario: Enter Klient Menu 
        When I click on the <accounts>
        Then <addNewAccount> is visible

        Scenario Outline: Add client
        When I click on the <>
        And I provide "" in the 
        Examples:
        |  |  |