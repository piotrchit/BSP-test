Feature: Choose partner
    Background: Open Partner Lists and choose Partner

    Scenario: 1. Enter Partner Adres Menu
    Then <panelSettings> is visible
        When I click on the <panelSettings>
#  And I wait for <vievPartnerAdress> to be enable
        And I click on the <vievPartnerAdress>
        Then <adressTitle> is visible

    # Scenario Outline: 2. Choose Partner
    #     When I click on the <partnerList>
    #     And I click on the <choosePartnerValue>
    #     Then <companyFullName> should be equal <partnerNameValue>

    #     Examples:
    #         | choosePartnerValue | partnerNameValue          |
    #         | <sunSPartner>      | "Sunrise System Wrocław" |
    #         # | <heisePartner>      | "Heise Media Service GmbH & Co. KG" |
    #         # | <grupaRMFPartner>  | "FCR Media Limited"                 |
    #         # | <testPartner>      | "Test Partner White Label"          |
    #         | <bauerPartner>     | "Bauer Client"            |

