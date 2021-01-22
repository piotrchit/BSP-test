Feature: Logowanie się do BSP
    Background: Open Page and load content

    Scenario: 7.1. Enter Sales menu
        When I click on the <menuSales>
    # And I click on the <salesContract>

    Scenario: 7.2. Activate Contract
        # When I click on the <closeAuthorFilter>
        And I move to <showContractButton>
        And I click on the <activateAndTransfer>
        Then <activatePassed> is visible

    Scenario: 7.3. Logout
        When I click on the <userMenu>
        And I click on the <logout>
        Then <loginInput> is visible
        When I provide "Pomyslnie wylogowano" in the <loginInput>
        Then <loginInput> should be equal "Pomyslnie wylogowano"
