Feature: 3. Add new mailbox
    Background: Add new mailbox to new Partner and delete own mailbox to RMF and create new

    Scenario: 3.1. Enter Adv Settings => Email
        When I click on the <panelSettings>
        When I click on the <partnerEmail>
        # And I choose <partnerEmailMenu>
        # And I want to wait <3> seconds
        Then <addNewMail> is active

    Scenario Outline: 3.2. Choose partner and add new test mailbox
        When I click on the <partnerList>
        And I click on the <choosePartner>
        And I want to wait <3> seconds
        And I click on the <addNewMail>
        Then <emailName> is editable
        When I provide "bsp@widzialni.pl" in the <emailName>
        And I click on the <authType>
        And I click on the <authTypeLogin>
        And I click on the <inboxServer>
        And I click on the <inboxServerImap>
        And I click on the <encryptionType>
        And I click on the <encSSLType>
        And I provide "0F%cbac89a359f9be9c70bf9233f730f419f03c" in the <inboxPass>
        And I provide "zygula.nazwa.pl" in the <inboxHostName>
        And I provide "993" in the <inboxPort>
        And I provide "bsp@widzialni.pl" in the <outboxLogin>
        And I provide "0F%cbac89a359f9be9c70bf9233f730f419f03c" in the <outgoingPass>
        And I provide "zygula.nazwa.pl" in the <outboxHostName>
        And I provide "465" in the <outPort>
        And I click on the <autorizationType>
        And I click on the <autSSLType>
        And I provide "bsp@widzialni.pl" in the <inboxLoginName>
        And I click on the <saveMailbox>
        Then <mailboxCreated> is visible

        Examples:
            | choosePartner  |
            # | <heisePartner> |
    # | <bauerPartner>    |
    | <grupaRMFPartner> |
    # # | <newTestPartner>     |

    Scenario Outline: 3.3. RMF - delete and add new mailbox
        When I click on the <partnerList>
        And I click on the <choosePartner>
        And I choose <showMailboxHiddenAction>
        When I click on the <deleteMailbox>
        And I choose <confirmDelete>
        Then <addNewMail> is active
         And I refresh page
        Then <mailboxDeleted> is visible
        And I click on the <addNewMail>
        And I provide "bsp@widzialni.pl" in the <emailName>
        And I click on the <authType>
        And I click on the <authTypeLogin>
        And I click on the <inboxServer>
        And I click on the <inboxServerImap>
        And I click on the <encryptionType>
        And I click on the <encSSLType>
        And I provide "0F%cbac89a359f9be9c70bf9233f730f419f03c" in the <inboxPass>
        And I provide "zygula.nazwa.pl" in the <inboxHostName>
        And I provide "993" in the <inboxPort>
        And I provide "bsp@widzialni.pl" in the <outboxLogin>
        And I provide "0F%cbac89a359f9be9c70bf9233f730f419f03c" in the <outgoingPass>
        And I provide "zygula.nazwa.pl" in the <outboxHostName>
        And I provide "465" in the <outPort>
        And I click on the <autorizationType>
        And I click on the <autSSLType>
        And I provide "bsp@widzialni.pl" in the <inboxLoginName>
        And I click on the <saveMailbox>
        Then <savedMessage> is visible
          And I choose <showMailboxHiddenAction>
        Then <deleteMailbox> is visible
        And <editMailbox> is visible

        Examples:
            | choosePartner     |
            | <grupaRMFPartner> |
