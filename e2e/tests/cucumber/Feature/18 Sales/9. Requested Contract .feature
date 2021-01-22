Feature: Logowanie się do BSP
    Background: Open Page and load content

    Scenario: Enter Orders Menu
        When I click on the <orders>
        Then <ordersTitle> is visible

    Scenario Outline: Choose Test Partner
        When I click on the <partnerList>
        And I click on the <choosePartnerValue>
        # Then <companyFullName> should be equal <partnerNameValue>

        Examples:
            | choosePartnerValue |
            # | <sunSPartner>      |
            # | <heisePartner>     |
            | <grupaRMFPartner>  |
    # | <testPartner>      |
    # | <bauerPartner>     |

    Scenario: Activate Contract
        When I move to <showContractButton>
        And I click on the <acceptContract>
        Then <stateAccepted> is visible