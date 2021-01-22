Feature: Checking Menu elements and widgets
    Background:
# ^ cancel
    Scenario: 1.Checking Cancel Widget Button
        When I click on the <dashboard>
        And I click on the <addWidget>
        And I click on the <servicesDetail>
        And I click on the <services>
        And I click on the <servideBudgets>
        And I click on the <generatedCounts>
        And I click on the <checkList>
        And I click on the <note>
        And I click on the <cancelWidget>
        Then <cancelWidgetPopUp> is visible
        # And <cancelWidgetPopUp> should be equal "Would you like discard all changes?"
        When I click on the <cancelWidgetNoButton>
        Then <cancelWidgetPopUp> is not visible
        And I click on the <cancelWidget>
        Then <cancelWidgetPopUp> is visible
        # And <cancelWidgetPopUp> should be equal "Would you like discard all changes?"
        And I click on the <cancelWidgetYesButton>
        Then <servicesDetail> is not visible

    Scenario: 2. Add new widget
        When I click on the <addWidget>
        And I click on the <servicesDetail>
        And I click on the <services>
        And I click on the <servideBudgets>
        And I click on the <generatedCounts>
        And I click on the <checkList>
        And I click on the <note>
        And I click on the <saveWidget>
        Then <servicesDetailWidget> is visible
        And <servicesWidget> is visible
        And <servideBudgetsWidget> is visible
        And <generatedCountsWidget> is visible
        And <checkListWidget> is visible
        And <noteWidget> is visible

    Scenario: 3. Change colour
        When I click on the <addWidget>
        And I click on the <noteColour>
        And I click on the <noteRed>
# ^delete
    Scenario: 4. Delete widget
        When I click on the <addWidget>
        And I click on the <servicesDetailDelete>
        And I click on the <servicesDelete>
        And I click on the <servideBudgetsDelete>
        And I click on the <generatedCountsDelete>
        And I click on the <checkListDelete>
        And I click on the <noteDelete>
        And I click on the <saveWidgetDelete>
        Then <servicesDetailWidget> is not visible
        And <servicesWidget> is not visible
        And <servideBudgetsWidget> is not visible
        And <generatedCountsWidget> is not visible
        And <checkListWidget> is not visible
        And <noteWidget> is not visible