Feature: Adding context to every partner
    Background:

    Scenario: 1. Enter user wiev => Context
        When I click on the <viewUserIco>
        Then <userAvatar> is visible
        When I click on the <userAccountsMenu>
        Then <addNewContext> is visible

    # Scenario: 2. Add new context Admin to Heisee
    #     When I click on the <addNewContext>
    #     And I click on the <partnerListContext>
    #     And I click on the <HeiseContext>
    #     And I provide "bsp.ext.test4@heise.pl" in the <emailContext>
    #     And I wait for <priviligesContext> to be enable
    #     Then <priviligesContext> is visible
    #     When I click on the <priviligesContext>
    #     And I click on the <adminContext>
    #     And I click on the <salesContext>
    #     And I click on the <csContext>
    #     And I click on the <typeContext>
    #     And I click on the <saveContext>
    #     Then <test4heiseMail> is visible
    #     And <contextPartnerHeise> is visible
    #     And <contextUserType> is visible
    #     And <privCS> is visible
    #     And <privSales> is visible
    #     And <privAdmin> is visible

    # Scenario: 3. Add new context Admin to RMF
    #     When I click on the <addNewContext>
    #     And I click on the <partnerListContext>
    #     And I click on the <RMFContext>
    #     And I provide "bsp.ext.test4@rmf.pl" in the <emailContext>
    #     And I wait for <priviligesContext> to be enable
    #     Then <priviligesContext> is visible
    #     When I click on the <priviligesContext>
    #     And I click on the <adminContext>
    #     And I click on the <salesContext>
    #     And I click on the <csContext>
    #     And I click on the <typeContext>
    #     And I click on the <saveContext>
    #     Then <test4rmfMail> is visible
    #     And <contextPartnerHeise> is visible
    #     And <contextUserType> is visible
    #     And <privCS> is visible
    #     And <privSales> is visible
    #     And <privAdmin> is visible

    # Scenario: 4. Add new context Admin to Bauer
    #     When I click on the <addNewContext>
    #     And I click on the <partnerListContext>
    #     And I click on the <BauerContext>
    #     And I provide "bsp.ext.test4@bauer.pl" in the <emailContext>
    #     And I wait for <priviligesContext> to be enable
    #     Then <priviligesContext> is visible
    #     When I click on the <priviligesContext>
    #     And I click on the <adminContext>
    #     And I click on the <salesContext>
    #     And I click on the <csContext>
    #     And I click on the <typeContext>
    #     And I click on the <saveContext>
    #     Then <test4bauerMail> is visible
    #     And <contextPartnerHeise> is visible
    #     And <contextUserType> is visible
    #     And <privCS> is visible
    #     And <privSales> is visible
    #     And <privAdmin> is visible

