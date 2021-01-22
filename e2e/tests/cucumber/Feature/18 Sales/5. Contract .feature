Feature: Create and activate contract
    Background: Create Contract, adding past date (GSC Report)

    Scenario Outline: 5.1. Create contract form lead
        When I click on the <createFirstContract>
        And I click on the <productList>
        And I click on the <productValue>
        And I click on the <open_calender>
        And I click on the <chooseDate>
        And I click on the <pastYear>
        And I click on the <april2019>
        And I click on the <first>
        And I click on the <contractLength>
        And I click on the <contractLengthValue>
        And I click on the <saveContract>
        And I want to wait <5> seconds
        Then <savedMessage> is active
        And <procesingState> is visible
        And <waitingForProcessing> is visible
        And <createPdf> is visible
        And <createdState> is visible

        Examples:
            | productValue  | contractLengthValue |
            | <PROproduct>  | <length24>          |
            # | <PLUSproduct> | <length12>          |
            # | <BASICproduct> | <length12>          |