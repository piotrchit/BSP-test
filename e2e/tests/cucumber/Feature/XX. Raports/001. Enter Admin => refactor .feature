Feature: Enter Report menu
    Background: Open Page and load content

    Scenario: 1. Enter Administration Menu
        When I click on the <administrationMenu>
        And I click on the <reportMenu>
        Then <addNewReportTemplate> is active
        And <searchReoort> is visible

    Scenario Outline: 2 Create Message Bus Log
        When I click on the <addNewReportTemplate>
        When I click on the <reportName>
        And I provide "<reportNameValue>" in the <reportName>
 When I click on the <privliageGroup>
        Examples:
            | reportNameValue |
            | Message Bus Log |

    Scenario Outline: 3 Choose Partner and privilage
        # When I click on the <privliageGroup>
        And I provide "<partnerNameValue>" in the <choosePrivliageGroup>
        And I want to wait <3> seconds
        And I click on the <choosePrivliageGroupValue>

        Examples:
            | partnerNameValue | choosePrivliageGroupValue |
            # | Full             | <privliegeSuns>           |
            | Admin            | <privilegesHeise>         |
            # | Sales            | <privilegesRMF>           |
            # | Cusomer          | <privilegesBauer>         |
            # | Owner            | <privilegesTest>          |
            # | Manager          | <privliegeSuns>           |
