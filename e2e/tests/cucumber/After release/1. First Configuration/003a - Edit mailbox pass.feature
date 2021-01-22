Feature: Create New Mailbox
    Background:

    Scenario: 1. Enter Adv Settings => Email
        When I click on the <panelSettings>
        And I want to wait <5> seconds
        And I choose <partnerEmailMenu>
        And I want to wait <3> seconds
        Then <addNewMail> is visible

    Scenario Outline: 2. Choose Partner and edit mailbox pass
        When I click on the <partnerList>
        And I click on the <choosePartnerValue>
        And I choose <showMailboxHiddenAction>
        And I click on the <editMailbox>
        Then <mailboxesTitle> is visible
        When I provide "0F%cbac89a359f9be9c70bf9233f730f419f03c" in the <inboxPass>
        And I click on the <outgoingPass>
        And I provide "0F%cbac89a359f9be9c70bf9233f730f419f03c" in the <outgoingPass>
        And I click on the <saveMailbox>
        Then <mailboxesTitle> is visible

        Examples:
            | choosePartnerValue |
            | <heisePartner>     |
            # | <newTestPartner>     |
