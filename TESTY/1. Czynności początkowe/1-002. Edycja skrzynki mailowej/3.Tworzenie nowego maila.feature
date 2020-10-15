    # Scenario: Create new mail
    #     When I click on the <addNewMail>
    #     Then <mailboxesTitle> is visible
    #     When I provide "0F%cbac89a359f9be9c70bf9233f730f419f03c" in the <inboxPass>
    #     And I provide "0F%cbac89a359f9be9c70bf9233f730f419f03c" in the <outgoingPass>
    #     And I provide "bsp@widzialni.pl" in the <emailName>
    #     And I click on the <authType>
    #     And I click on the <authTypeLogin>
    #     And I click on the <inboxServer>
    #     And I click on the <inboxServerImap>




#      it('mail login ', function(){var Inbox_mail_login = element(by.css('#email-in-login'));
#      Inbox_mail_login.click().sendKeys('bsp@widzialni.pl');});
#      it('outgoing pass', function(){var Inbox_mail_host_name = element(by.css('#email-in-host'));
#      Inbox_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
#      it('outgoing pass', function(){ var Inbox_mail_port = element(by.css('#email-in-port'));
#      Inbox_mail_port.click().sendKeys('993');});
#      it('outgoing pass', function(){ var Encryption_type = element(by.css('#email-in-encryption'));
#      Encryption_type.click();
#      browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
#      browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
#      browser.actions().sendKeys(protractor.Key.ENTER).perform() });
#      it('outgoing pass', function(){var Outgoing_mail_login = element(by.css('#email-out-login'));
#      Outgoing_mail_login.click().sendKeys('bsp@widzialni.pl');});
#      it('outgoing pass', function(){ var  Outgoing_mail_host_name = element(by.css('#email-out-host'));
#      Outgoing_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
#      it('outgoing pass', function(){ var Outgoing_mail_port = element(by.css('#email-out-port'));
#      Outgoing_mail_port.click().sendKeys('465');});
#      it('outgoing pass', function(){ var Authorization_type1 = element(by.css('#email-out-encryption'));
#      Authorization_type1.click()
#      browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
#      browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
#      browser.actions().sendKeys(protractor.Key.ENTER).perform()
#      });
#      it('save', function(){
#          var save = element(by.className('btn btn-success'));
#          save.click();
#          browser.sleep('3000')
#  });
#  });
#     And I click on the <advancedSettings>
#     # And I wait for <partnerEmail> to be enable
#     # Then <partnerEmail> is visible
#     And I click on the <partnerEmail>
#     Then <platformMenu> is visible