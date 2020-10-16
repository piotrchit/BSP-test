Feature: Logowanie się do BSP
    Background:

    Scenario: 0. Enter Partner Adres Section
        # When I click on the <panelSettings>
        # And I click on the <vievPartnerAdress>
        Given I open the <TESTpartnerAdresSection>
        When I want to wait <7> seconds

    Scenario Outline: Fill adress
        When I click on the <partnerCompanyName>
        And I provide "<partnerNameValue>" in the <partnerCompanyName>
        And I provide "<streetNameValue>" in the <partnerStrreet>


        Examples:
            | partnerNameValue | streetNameValue |
            | Sunrise System   | jasna           |