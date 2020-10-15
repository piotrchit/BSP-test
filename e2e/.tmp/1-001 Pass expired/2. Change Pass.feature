Feature: Change expired pass
    Background:

    Scenario Outline: 1. Save new pass
        # When I click on the <oldPass> 
        # And I provide "<oldPassValue>" in the <oldPass>
        And I provide "<newPassValue>" in the <newPass>
        And I provide "<newPassValue>" in the <newPass2>
        And I click on the <changePass>
        Then <returnToLoginPage> is visible
        When I click on the <returnToLoginPage>
        Then <loginInput> is visible

        Examples:
            | oldPassValue | newPassValue             |
            | 1Ib7yI;1BML^ | 1Ib7yI;1BML^1Ib7yI;1BML^ |
