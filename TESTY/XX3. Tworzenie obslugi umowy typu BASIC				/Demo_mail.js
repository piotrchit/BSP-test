describe('EKRAN LOGOWANIA', function(){
    it('Login and logout', function(){
    browser.get('https:test.bauerseo.pl');
    element(by.model('vm.username')).sendKeys('p.chit@sunrisesystem.pl');
    element(by.className('btn btn-primary btn-next')).click();
    element(by.className('btn btn-primary')).click();
    element(by.model('vm.password')).sendKeys('1Ib7yI;1BML^');
    element(by.className('btn btn-primary')).click();
    browser.sleep('7000')
});
});

    describe('SUNS enter email configuration', function(){
        it('enter email conf', function(){
            var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
            panelSettings.click();  
        });
            it('adv conf', function(){
            var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
            adv_conf.click();
        });
        it('enter email menu', function(){
            var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
            email_accounts. click();
        });
        it('edit mail', function(){
            var edit_email = element(by.className('fas fa-pencil-alt'));
            edit_email.click();
        });
            it('inbox pass', function(){
            var Inbox_password = element (by.css('#email-in-password'));
            Inbox_password.clear();
            Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
            it('outgoing pass', function(){
            var Outgoing_mail_password = element (by.css('#email-out-password'));
            Outgoing_mail_password.clear();
        Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
        it('save', function(){
            var save = element(by.className('btn btn-success')); 
            save.click();
            browser.sleep('3000');    
    });
    });
    describe('SUNS enter email configuration', function(){
    let times =20 
    for (let i=0; i<= times; i++  ){  
        it('enter Heisee adv option conf', function(){
      var enterHeisee = element(by.css('.custom-select'));
      enterHeisee.click()
      var mono = element(by.css(".form-control-sm"));
      mono.click();
      browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
      browser.actions().sendKeys(protractor.Key.ENTER).perform()
      browser.sleep('3000'); 
        });
        it('enter email conf', function(){
          var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
          panelSettings.click();  
      });
          it('adv conf', function(){
          var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
          adv_conf.click();
      });
      it('enter email menu', function(){
          var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
          email_accounts. click();
      });
      it('edit mail', function(){
          var edit_email = element(by.className('fas fa-pencil-alt'));
          edit_email.click();
      });
          it('inbox pass', function(){
          var Inbox_password = element (by.css('#email-in-password'));
          Inbox_password.clear();
          Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
      });
          it('outgoing pass', function(){
          var Outgoing_mail_password = element (by.css('#email-out-password'));
          Outgoing_mail_password.clear();
      Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
      });
      it('save', function(){
          var save = element(by.className('btn btn-success')); 
          save.click();
          browser.sleep('3000');    
  });
  }
  });



   describe('Heisee  enter email configuration', function(){
       it('enter Heisee adv option conf', function(){
            var enterHeisee = element(by.css('.custom-select'));
            enterHeisee.click()
            var mono = element(by.css(".form-control-sm"));
            mono.click().sendKeys('PAGINAS AMARELAS');
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.sleep('3000'); 
             });
       it('enter email conf', function(){
           var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
           panelSettings.click();  
       });
           it('adv conf', function(){
           var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
           adv_conf.click();
       });
       it('enter email menu', function(){
           var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
           email_accounts. click();
       });
        it('edit mail', function(){
            var edit_email = element(by.className('fas fa-pencil-alt'));
            edit_email.click();
        });
            it('inbox pass', function(){
            var Inbox_password = element (by.css('#email-in-password'));
            Inbox_password.clear();
            Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
            it('outgoing pass', function(){
            var Outgoing_mail_password = element (by.css('#email-out-password'));
            Outgoing_mail_password.clear();
        Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
        it('save', function(){
            var save = element(by.className('btn btn-success'));
            save.click();
            browser.sleep('3000')
    });
    });

 

    describe('bauer enter email configuration', function(){
        it('enter bauer adv option conf', function(){
            var enterHeisee = element(by.css('.angular-extended-select'));
            enterHeisee.click();
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.sleep('3000');    });
        it('enter email conf', function(){
            var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
            panelSettings.click();  
        });
            it('adv conf', function(){
            var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
            adv_conf.click();
        });
        it('enter email menu', function(){
            var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
            email_accounts. click();
        });
        it('edit mail', function(){
            var edit_email = element(by.className('fas fa-pencil-alt'));
            edit_email.click();
        });
            it('inbox pass', function(){
            var Inbox_password = element (by.css('#email-in-password'));
            Inbox_password.clear();
            Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
            it('outgoing pass', function(){
            var Outgoing_mail_password = element (by.css('#email-out-password'));
            Outgoing_mail_password.clear();
        Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
        it('save', function(){
            var save = element(by.className('btn btn-success'));
            save.click();
            browser.sleep('3000')
    });
    });

    describe('Partner fcr  enter email configuration', function(){
        it('enter Partner fcr adv option conf', function(){
            var enterHeisee = element(by.css('.angular-extended-select'));
            enterHeisee.click();
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.sleep('3000');    });
        it('enter email conf', function(){
            var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
            panelSettings.click();  
        });
            it('adv conf', function(){
            var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
            adv_conf.click();
        });
        it('enter email menu', function(){
            var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
            email_accounts. click();
        });
        it('add mail mail', function(){
            var add_email = element(by.css("partner-emails[emails='::$resolve.emails'] > div:nth-of-type(3) .card-header .btn"));
            add_email.click();
        });
            it('inbox pass', function(){
            var Inbox_password = element (by.css('#email-in-password'));
            Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
            it('outgoing pass', function(){
            var Outgoing_mail_password = element (by.css('#email-out-password'));
        Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
        it('outgoing pass', function(){
        var Email_name = element(by.css('#email-name'));
        Email_name.click().sendKeys('bsp@widzialni.pl');
    });
    it('aut type', function(){
        var Authorization_type = element(by.css('#email-auth-type')); 
        Authorization_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
    it('inbox serv type', function(){
        var Inbox_serwer_type = element(by.css('#email-in-type')); 
        Inbox_serwer_type.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
        it('mail login ', function(){var Inbox_mail_login = element(by.css('#email-in-login'));
        Inbox_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){var Inbox_mail_host_name = element(by.css('#email-in-host'));
        Inbox_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Inbox_mail_port = element(by.css('#email-in-port'));
        Inbox_mail_port.click().sendKeys('993');});
        it('outgoing pass', function(){ var Encryption_type = element(by.css('#email-in-encryption')); 
        Encryption_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform() });
        it('outgoing pass', function(){var Outgoing_mail_login = element(by.css('#email-out-login'));
        Outgoing_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){ var  Outgoing_mail_host_name = element(by.css('#email-out-host'));
        Outgoing_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Outgoing_mail_port = element(by.css('#email-out-port'));
        Outgoing_mail_port.click().sendKeys('465');});
        it('outgoing pass', function(){ var Authorization_type1 = element(by.css('#email-out-encryption'));
        Authorization_type1.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        });
        it('save', function(){
            var save = element(by.className('btn btn-success'));
            save.click();
            browser.sleep('3000')
    });
    });

    describe('test enter email configuration', function(){
        it('enter test adv option conf', function(){
            var enterHeisee = element(by.css('.angular-extended-select'));
            enterHeisee.click();
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.sleep('3000');    });
        it('enter email conf', function(){
            var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
            panelSettings.click();  
        });
            it('adv conf', function(){
            var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
            adv_conf.click();
        });
        it('enter email menu', function(){
            var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
            email_accounts. click();
        });
        it('edit mail', function(){
            var edit_email = element(by.className('fas fa-pencil-alt'));
            edit_email.click();
        });
            it('inbox pass', function(){
            var Inbox_password = element (by.css('#email-in-password'));
            Inbox_password.clear();
            Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
            it('outgoing pass', function(){
            var Outgoing_mail_password = element (by.css('#email-out-password'));
            Outgoing_mail_password.clear();
        Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
        it('save', function(){
            var save = element(by.className('btn btn-success'));
            save.click();
            browser.sleep('3000')
    });
    });

    describe('Partner paginas enter email configuration', function(){
        it('enter Partner 03 adv option conf', function(){
            var enterHeisee = element(by.css('.angular-extended-select'));
            enterHeisee.click();
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.sleep('3000');    });
        it('enter email conf', function(){
            var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
            panelSettings.click();  
        });
            it('adv conf', function(){
            var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
            adv_conf.click();
        });
        it('enter email menu', function(){
            var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
            email_accounts. click();
        });
        it('add mail mail', function(){
            var add_email = element(by.css("partner-emails[emails='::$resolve.emails'] > div:nth-of-type(3) .card-header .btn"));
            add_email.click();
        });
            it('inbox pass', function(){
            var Inbox_password = element (by.css('#email-in-password'));
            Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
            it('outgoing pass', function(){
            var Outgoing_mail_password = element (by.css('#email-out-password'));
        Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
        it('outgoing pass', function(){
        var Email_name = element(by.css('#email-name'));
        Email_name.click().sendKeys('bsp@widzialni.pl');
    });
    it('aut type', function(){
        var Authorization_type = element(by.css('#email-auth-type')); 
        Authorization_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
    it('inbox serv type', function(){
        var Inbox_serwer_type = element(by.css('#email-in-type')); 
        Inbox_serwer_type.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
        it('mail login ', function(){var Inbox_mail_login = element(by.css('#email-in-login'));
        Inbox_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){var Inbox_mail_host_name = element(by.css('#email-in-host'));
        Inbox_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Inbox_mail_port = element(by.css('#email-in-port'));
        Inbox_mail_port.click().sendKeys('993');});
        it('outgoing pass', function(){ var Encryption_type = element(by.css('#email-in-encryption')); 
        Encryption_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform() });
        it('outgoing pass', function(){var Outgoing_mail_login = element(by.css('#email-out-login'));
        Outgoing_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){ var  Outgoing_mail_host_name = element(by.css('#email-out-host'));
        Outgoing_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Outgoing_mail_port = element(by.css('#email-out-port'));
        Outgoing_mail_port.click().sendKeys('465');});
        it('outgoing pass', function(){ var Authorization_type1 = element(by.css('#email-out-encryption'));
        Authorization_type1.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
 
        });
        it('save', function(){
            var save = element(by.className('btn btn-success'));
            save.click();
            browser.sleep('3000')
    });
    });

    describe('Partner 03 enter email configuration', function(){
        it('enter Partner 03 adv option conf', function(){
            var enterHeisee = element(by.css('.angular-extended-select'));
            enterHeisee.click();
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.sleep('3000');    });
        it('enter email conf', function(){
            var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
            panelSettings.click();  
        });
            it('adv conf', function(){
            var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
            adv_conf.click();
        });
        it('enter email menu', function(){
            var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
            email_accounts. click();
        });
        it('add mail mail', function(){
            var add_email = element(by.css("partner-emails[emails='::$resolve.emails'] > div:nth-of-type(3) .card-header .btn"));
            add_email.click();
        });
            it('inbox pass', function(){
            var Inbox_password = element (by.css('#email-in-password'));
            Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
            it('outgoing pass', function(){
            var Outgoing_mail_password = element (by.css('#email-out-password'));
        Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
        it('outgoing pass', function(){
        var Email_name = element(by.css('#email-name'));
        Email_name.click().sendKeys('bsp@widzialni.pl');
    });
    it('aut type', function(){
        var Authorization_type = element(by.css('#email-auth-type')); 
        Authorization_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
    it('inbox serv type', function(){
        var Inbox_serwer_type = element(by.css('#email-in-type')); 
        Inbox_serwer_type.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
        it('mail login ', function(){var Inbox_mail_login = element(by.css('#email-in-login'));
        Inbox_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){var Inbox_mail_host_name = element(by.css('#email-in-host'));
        Inbox_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Inbox_mail_port = element(by.css('#email-in-port'));
        Inbox_mail_port.click().sendKeys('993');});
        it('outgoing pass', function(){ var Encryption_type = element(by.css('#email-in-encryption')); 
        Encryption_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform() });
        it('outgoing pass', function(){var Outgoing_mail_login = element(by.css('#email-out-login'));
        Outgoing_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){ var  Outgoing_mail_host_name = element(by.css('#email-out-host'));
        Outgoing_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Outgoing_mail_port = element(by.css('#email-out-port'));
        Outgoing_mail_port.click().sendKeys('465');});
        it('outgoing pass', function(){ var Authorization_type1 = element(by.css('#email-out-encryption'));
        Authorization_type1.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()

        });
        it('save', function(){
            var save = element(by.className('btn btn-success'));
            save.click();
            browser.sleep('3000')
    });
    });describe('Partner 04 enter email configuration', function(){
        it('enter Partner 04 adv option conf', function(){
            var enterHeisee = element(by.css('.angular-extended-select'));
            enterHeisee.click();
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.sleep('3000');    });
        it('enter email conf', function(){
            var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
            panelSettings.click();  
        });
            it('adv conf', function(){
            var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
            adv_conf.click();
        });
        it('enter email menu', function(){
            var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
            email_accounts. click();
        });
        it('add mail mail', function(){
            var add_email = element(by.css("partner-emails[emails='::$resolve.emails'] > div:nth-of-type(3) .card-header .btn"));
            add_email.click();
        });
            it('inbox pass', function(){
            var Inbox_password = element (by.css('#email-in-password'));
            Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
            it('outgoing pass', function(){
            var Outgoing_mail_password = element (by.css('#email-out-password'));
        Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
        it('outgoing pass', function(){
        var Email_name = element(by.css('#email-name'));
        Email_name.click().sendKeys('bsp@widzialni.pl');
    });
    it('aut type', function(){
        var Authorization_type = element(by.css('#email-auth-type')); 
        Authorization_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
    it('inbox serv type', function(){
        var Inbox_serwer_type = element(by.css('#email-in-type')); 
        Inbox_serwer_type.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
        it('mail login ', function(){var Inbox_mail_login = element(by.css('#email-in-login'));
        Inbox_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){var Inbox_mail_host_name = element(by.css('#email-in-host'));
        Inbox_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Inbox_mail_port = element(by.css('#email-in-port'));
        Inbox_mail_port.click().sendKeys('993');});
        it('outgoing pass', function(){ var Encryption_type = element(by.css('#email-in-encryption')); 
        Encryption_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
     });
        it('outgoing pass', function(){var Outgoing_mail_login = element(by.css('#email-out-login'));
        Outgoing_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){ var  Outgoing_mail_host_name = element(by.css('#email-out-host'));
        Outgoing_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Outgoing_mail_port = element(by.css('#email-out-port'));
        Outgoing_mail_port.click().sendKeys('465');});
        it('outgoing pass', function(){ var Authorization_type1 = element(by.css('#email-out-encryption'));
        Authorization_type1.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
 
        });
        it('save', function(){
            var save = element(by.className('btn btn-success'));
            save.click();
            browser.sleep('3000')
    });
    });describe('Partner 05 enter email configuration', function(){
        it('enter Partner 05 adv option conf', function(){
            var enterHeisee = element(by.css('.angular-extended-select'));
            enterHeisee.click();
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.sleep('3000');    });
        it('enter email conf', function(){
            var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
            panelSettings.click();  
        });
            it('adv conf', function(){
            var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
            adv_conf.click();
        });
        it('enter email menu', function(){
            var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
            email_accounts. click();
        });
        it('add mail mail', function(){
            var add_email = element(by.css("partner-emails[emails='::$resolve.emails'] > div:nth-of-type(3) .card-header .btn"));
            add_email.click();
        });
            it('inbox pass', function(){
            var Inbox_password = element (by.css('#email-in-password'));
            Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
            it('outgoing pass', function(){
            var Outgoing_mail_password = element (by.css('#email-out-password'));
        Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
        it('outgoing pass', function(){
        var Email_name = element(by.css('#email-name'));
        Email_name.click().sendKeys('bsp@widzialni.pl');
    });
    it('aut type', function(){
        var Authorization_type = element(by.css('#email-auth-type')); 
        Authorization_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
    it('inbox serv type', function(){
        var Inbox_serwer_type = element(by.css('#email-in-type')); 
        Inbox_serwer_type.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
        it('mail login ', function(){var Inbox_mail_login = element(by.css('#email-in-login'));
        Inbox_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){var Inbox_mail_host_name = element(by.css('#email-in-host'));
        Inbox_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Inbox_mail_port = element(by.css('#email-in-port'));
        Inbox_mail_port.click().sendKeys('993');});
        it('outgoing pass', function(){ var Encryption_type = element(by.css('#email-in-encryption')); 
        Encryption_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform() });
        it('outgoing pass', function(){var Outgoing_mail_login = element(by.css('#email-out-login'));
        Outgoing_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){ var  Outgoing_mail_host_name = element(by.css('#email-out-host'));
        Outgoing_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Outgoing_mail_port = element(by.css('#email-out-port'));
        Outgoing_mail_port.click().sendKeys('465');});
        it('outgoing pass', function(){ var Authorization_type1 = element(by.css('#email-out-encryption'));
        Authorization_type1.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
 
        });
        it('save', function(){
            var save = element(by.className('btn btn-success'));
            save.click();
            browser.sleep('3000')
    });
    });describe('Partner 06 enter email configuration', function(){
        it('enter Partner 06 adv option conf', function(){
            var enterHeisee = element(by.css('.angular-extended-select'));
            enterHeisee.click();
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.sleep('3000');    });
        it('enter email conf', function(){
            var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
            panelSettings.click();  
        });
            it('adv conf', function(){
            var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
            adv_conf.click();
        });
        it('enter email menu', function(){
            var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
            email_accounts. click();
        });
        it('add mail mail', function(){
            var add_email = element(by.css("partner-emails[emails='::$resolve.emails'] > div:nth-of-type(3) .card-header .btn"));
            add_email.click();
        });
            it('inbox pass', function(){
            var Inbox_password = element (by.css('#email-in-password'));
            Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
            it('outgoing pass', function(){
            var Outgoing_mail_password = element (by.css('#email-out-password'));
        Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
        it('outgoing pass', function(){
        var Email_name = element(by.css('#email-name'));
        Email_name.click().sendKeys('bsp@widzialni.pl');
    });
    it('aut type', function(){
        var Authorization_type = element(by.css('#email-auth-type')); 
        Authorization_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
    it('inbox serv type', function(){
        var Inbox_serwer_type = element(by.css('#email-in-type')); 
        Inbox_serwer_type.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
        it('mail login ', function(){var Inbox_mail_login = element(by.css('#email-in-login'));
        Inbox_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){var Inbox_mail_host_name = element(by.css('#email-in-host'));
        Inbox_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Inbox_mail_port = element(by.css('#email-in-port'));
        Inbox_mail_port.click().sendKeys('993');});
        it('outgoing pass', function(){ var Encryption_type = element(by.css('#email-in-encryption')); 
        Encryption_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform() });
        it('outgoing pass', function(){var Outgoing_mail_login = element(by.css('#email-out-login'));
        Outgoing_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){ var  Outgoing_mail_host_name = element(by.css('#email-out-host'));
        Outgoing_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Outgoing_mail_port = element(by.css('#email-out-port'));
        Outgoing_mail_port.click().sendKeys('465');});
        it('outgoing pass', function(){ var Authorization_type1 = element(by.css('#email-out-encryption'));
        Authorization_type1.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
 
        });
        it('save', function(){
            var save = element(by.className('btn btn-success'));
            save.click();
            browser.sleep('3000')
    });
    });describe('Partner 07 enter email configuration', function(){
        it('enter Partner 07 adv option conf', function(){
            var enterHeisee = element(by.css('.angular-extended-select'));
            enterHeisee.click();
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.sleep('3000');    });
        it('enter email conf', function(){
            var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
            panelSettings.click();  
        });
            it('adv conf', function(){
            var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
            adv_conf.click();
        });
        it('enter email menu', function(){
            var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
            email_accounts. click();
        });
        it('add mail mail', function(){
            var add_email = element(by.css("partner-emails[emails='::$resolve.emails'] > div:nth-of-type(3) .card-header .btn"));
            add_email.click();
        });
            it('inbox pass', function(){
            var Inbox_password = element (by.css('#email-in-password'));
            Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
            it('outgoing pass', function(){
            var Outgoing_mail_password = element (by.css('#email-out-password'));
        Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
        it('outgoing pass', function(){
        var Email_name = element(by.css('#email-name'));
        Email_name.click().sendKeys('bsp@widzialni.pl');
    });
    it('aut type', function(){
        var Authorization_type = element(by.css('#email-auth-type')); 
        Authorization_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
    it('inbox serv type', function(){
        var Inbox_serwer_type = element(by.css('#email-in-type')); 
        Inbox_serwer_type.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
        it('mail login ', function(){var Inbox_mail_login = element(by.css('#email-in-login'));
        Inbox_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){var Inbox_mail_host_name = element(by.css('#email-in-host'));
        Inbox_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Inbox_mail_port = element(by.css('#email-in-port'));
        Inbox_mail_port.click().sendKeys('993');});
        it('outgoing pass', function(){ var Encryption_type = element(by.css('#email-in-encryption')); 
        Encryption_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform() });
        it('outgoing pass', function(){var Outgoing_mail_login = element(by.css('#email-out-login'));
        Outgoing_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){ var  Outgoing_mail_host_name = element(by.css('#email-out-host'));
        Outgoing_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Outgoing_mail_port = element(by.css('#email-out-port'));
        Outgoing_mail_port.click().sendKeys('465');});
        it('outgoing pass', function(){ var Authorization_type1 = element(by.css('#email-out-encryption'));
        Authorization_type1.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
 
        });
        it('save', function(){
            var save = element(by.className('btn btn-success'));
            save.click();
            browser.sleep('3000')
    });
    });describe('Partner 08 enter email configuration', function(){
        it('enter Partner 08 adv option conf', function(){
            var enterHeisee = element(by.css('.angular-extended-select'));
            enterHeisee.click();
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.sleep('3000');    });
        it('enter email conf', function(){
            var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
            panelSettings.click();  
        });
            it('adv conf', function(){
            var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
            adv_conf.click();
        });
        it('enter email menu', function(){
            var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
            email_accounts. click();
        });
        it('add mail mail', function(){
            var add_email = element(by.css("partner-emails[emails='::$resolve.emails'] > div:nth-of-type(3) .card-header .btn"));
            add_email.click();
        });
            it('inbox pass', function(){
            var Inbox_password = element (by.css('#email-in-password'));
            Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
            it('outgoing pass', function(){
            var Outgoing_mail_password = element (by.css('#email-out-password'));
        Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
        it('outgoing pass', function(){
        var Email_name = element(by.css('#email-name'));
        Email_name.click().sendKeys('bsp@widzialni.pl');
    });
    it('aut type', function(){
        var Authorization_type = element(by.css('#email-auth-type')); 
        Authorization_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
    it('inbox serv type', function(){
        var Inbox_serwer_type = element(by.css('#email-in-type')); 
        Inbox_serwer_type.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
        it('mail login ', function(){var Inbox_mail_login = element(by.css('#email-in-login'));
        Inbox_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){var Inbox_mail_host_name = element(by.css('#email-in-host'));
        Inbox_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Inbox_mail_port = element(by.css('#email-in-port'));
        Inbox_mail_port.click().sendKeys('993');});
        it('outgoing pass', function(){ var Encryption_type = element(by.css('#email-in-encryption')); 
        Encryption_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform() });
        it('outgoing pass', function(){var Outgoing_mail_login = element(by.css('#email-out-login'));
        Outgoing_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){ var  Outgoing_mail_host_name = element(by.css('#email-out-host'));
        Outgoing_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Outgoing_mail_port = element(by.css('#email-out-port'));
        Outgoing_mail_port.click().sendKeys('465');});
        it('outgoing pass', function(){ var Authorization_type1 = element(by.css('#email-out-encryption'));
        Authorization_type1.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
 
        });
        it('save', function(){
            var save = element(by.className('btn btn-success'));
            save.click();
            browser.sleep('3000')
    });
    });describe('Partner 09 enter email configuration', function(){
        it('enter Partner 09 adv option conf', function(){
            var enterHeisee = element(by.css('.angular-extended-select'));
            enterHeisee.click();
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.sleep('3000');    });
        it('enter email conf', function(){
            var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
            panelSettings.click();  
        });
            it('adv conf', function(){
            var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
            adv_conf.click();
        });
        it('enter email menu', function(){
            var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
            email_accounts. click();
        });
        it('add mail mail', function(){
            var add_email = element(by.css("partner-emails[emails='::$resolve.emails'] > div:nth-of-type(3) .card-header .btn"));
            add_email.click();
        });
            it('inbox pass', function(){
            var Inbox_password = element (by.css('#email-in-password'));
            Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
            it('outgoing pass', function(){
            var Outgoing_mail_password = element (by.css('#email-out-password'));
        Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
        it('outgoing pass', function(){
        var Email_name = element(by.css('#email-name'));
        Email_name.click().sendKeys('bsp@widzialni.pl');
    });
    it('aut type', function(){
        var Authorization_type = element(by.css('#email-auth-type')); 
        Authorization_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
    it('inbox serv type', function(){
        var Inbox_serwer_type = element(by.css('#email-in-type')); 
        Inbox_serwer_type.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
        it('mail login ', function(){var Inbox_mail_login = element(by.css('#email-in-login'));
        Inbox_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){var Inbox_mail_host_name = element(by.css('#email-in-host'));
        Inbox_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Inbox_mail_port = element(by.css('#email-in-port'));
        Inbox_mail_port.click().sendKeys('993');});
        it('outgoing pass', function(){ var Encryption_type = element(by.css('#email-in-encryption')); 
        Encryption_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform() });
        it('outgoing pass', function(){var Outgoing_mail_login = element(by.css('#email-out-login'));
        Outgoing_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){ var  Outgoing_mail_host_name = element(by.css('#email-out-host'));
        Outgoing_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Outgoing_mail_port = element(by.css('#email-out-port'));
        Outgoing_mail_port.click().sendKeys('465');});
        it('outgoing pass', function(){ var Authorization_type1 = element(by.css('#email-out-encryption'));
        Authorization_type1.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
 
        });
        it('save', function(){
            var save = element(by.className('btn btn-success'));
            save.click();
            browser.sleep('3000')
    });
    });describe('Partner 10 enter email configuration', function(){
        it('enter Partner 10 adv option conf', function(){
            var enterHeisee = element(by.css('.angular-extended-select'));
            enterHeisee.click();
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.sleep('3000');    });
        it('enter email conf', function(){
            var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
            panelSettings.click();  
        });
            it('adv conf', function(){
            var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
            adv_conf.click();
        });
        it('enter email menu', function(){
            var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
            email_accounts. click();
        });
        it('add mail mail', function(){
            var add_email = element(by.css("partner-emails[emails='::$resolve.emails'] > div:nth-of-type(3) .card-header .btn"));
            add_email.click();
        });
            it('inbox pass', function(){
            var Inbox_password = element (by.css('#email-in-password'));
            Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
            it('outgoing pass', function(){
            var Outgoing_mail_password = element (by.css('#email-out-password'));
        Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
        it('outgoing pass', function(){
        var Email_name = element(by.css('#email-name'));
        Email_name.click().sendKeys('bsp@widzialni.pl');
    });
    it('aut type', function(){
        var Authorization_type = element(by.css('#email-auth-type')); 
        Authorization_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
    it('inbox serv type', function(){
        var Inbox_serwer_type = element(by.css('#email-in-type')); 
        Inbox_serwer_type.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
        it('mail login ', function(){var Inbox_mail_login = element(by.css('#email-in-login'));
        Inbox_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){var Inbox_mail_host_name = element(by.css('#email-in-host'));
        Inbox_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Inbox_mail_port = element(by.css('#email-in-port'));
        Inbox_mail_port.click().sendKeys('993');});
        it('outgoing pass', function(){ var Encryption_type = element(by.css('#email-in-encryption')); 
        Encryption_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform() });
        it('outgoing pass', function(){var Outgoing_mail_login = element(by.css('#email-out-login'));
        Outgoing_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){ var  Outgoing_mail_host_name = element(by.css('#email-out-host'));
        Outgoing_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Outgoing_mail_port = element(by.css('#email-out-port'));
        Outgoing_mail_port.click().sendKeys('465');});
        it('outgoing pass', function(){ var Authorization_type1 = element(by.css('#email-out-encryption'));
        Authorization_type1.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
 
        });
        it('save', function(){
            var save = element(by.className('btn btn-success'));
            save.click();
            browser.sleep('3000')
    });
    });

    describe('Partner 11 enter email configuration', function(){
        it('enter Partner 11 adv option conf', function(){
            var enterHeisee = element(by.css('.angular-extended-select'));
            enterHeisee.click();
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.sleep('3000');    });
        it('enter email conf', function(){
            var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
            panelSettings.click();  
        });
            it('adv conf', function(){
            var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
            adv_conf.click();
        });
        it('enter email menu', function(){
            var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
            email_accounts. click();
        });
        it('add mail mail', function(){
            var add_email = element(by.css("partner-emails[emails='::$resolve.emails'] > div:nth-of-type(3) .card-header .btn"));
            add_email.click();
        });
            it('inbox pass', function(){
            var Inbox_password = element (by.css('#email-in-password'));
            Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
            it('outgoing pass', function(){
            var Outgoing_mail_password = element (by.css('#email-out-password'));
        Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
        it('outgoing pass', function(){
        var Email_name = element(by.css('#email-name'));
        Email_name.click().sendKeys('bsp@widzialni.pl');
    });
    it('aut type', function(){
        var Authorization_type = element(by.css('#email-auth-type')); 
        Authorization_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
    it('inbox serv type', function(){
        var Inbox_serwer_type = element(by.css('#email-in-type')); 
        Inbox_serwer_type.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
        it('mail login ', function(){var Inbox_mail_login = element(by.css('#email-in-login'));
        Inbox_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){var Inbox_mail_host_name = element(by.css('#email-in-host'));
        Inbox_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Inbox_mail_port = element(by.css('#email-in-port'));
        Inbox_mail_port.click().sendKeys('993');});
        it('outgoing pass', function(){ var Encryption_type = element(by.css('#email-in-encryption')); 
        Encryption_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform() });
        it('outgoing pass', function(){var Outgoing_mail_login = element(by.css('#email-out-login'));
        Outgoing_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){ var  Outgoing_mail_host_name = element(by.css('#email-out-host'));
        Outgoing_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Outgoing_mail_port = element(by.css('#email-out-port'));
        Outgoing_mail_port.click().sendKeys('465');});
        it('outgoing pass', function(){ var Authorization_type1 = element(by.css('#email-out-encryption'));
        Authorization_type1.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
 
        });
        it('save', function(){
            var save = element(by.className('btn btn-success'));
            save.click();
            browser.sleep('3000')
    });
    });describe('Partner 12 enter email configuration', function(){
        it('enter Partner 12 adv option conf', function(){
            var enterHeisee = element(by.css('.angular-extended-select'));
            enterHeisee.click();
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.sleep('3000');    });
        it('enter email conf', function(){
            var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
            panelSettings.click();  
        });
            it('adv conf', function(){
            var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
            adv_conf.click();
        });
        it('enter email menu', function(){
            var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
            email_accounts. click();
        });
        it('add mail mail', function(){
            var add_email = element(by.css("partner-emails[emails='::$resolve.emails'] > div:nth-of-type(3) .card-header .btn"));
            add_email.click();
        });
            it('inbox pass', function(){
            var Inbox_password = element (by.css('#email-in-password'));
            Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
            it('outgoing pass', function(){
            var Outgoing_mail_password = element (by.css('#email-out-password'));
        Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
        it('outgoing pass', function(){
        var Email_name = element(by.css('#email-name'));
        Email_name.click().sendKeys('bsp@widzialni.pl');
    });
    it('aut type', function(){
        var Authorization_type = element(by.css('#email-auth-type')); 
        Authorization_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
    it('inbox serv type', function(){
        var Inbox_serwer_type = element(by.css('#email-in-type')); 
        Inbox_serwer_type.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
        it('mail login ', function(){var Inbox_mail_login = element(by.css('#email-in-login'));
        Inbox_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){var Inbox_mail_host_name = element(by.css('#email-in-host'));
        Inbox_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Inbox_mail_port = element(by.css('#email-in-port'));
        Inbox_mail_port.click().sendKeys('993');});
        it('outgoing pass', function(){ var Encryption_type = element(by.css('#email-in-encryption')); 
        Encryption_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform() });
        it('outgoing pass', function(){var Outgoing_mail_login = element(by.css('#email-out-login'));
        Outgoing_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){ var  Outgoing_mail_host_name = element(by.css('#email-out-host'));
        Outgoing_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Outgoing_mail_port = element(by.css('#email-out-port'));
        Outgoing_mail_port.click().sendKeys('465');});
        it('outgoing pass', function(){ var Authorization_type1 = element(by.css('#email-out-encryption'));
        Authorization_type1.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
 
        });
        it('save', function(){
            var save = element(by.className('btn btn-success'));
            save.click();
            browser.sleep('3000')
    });
    });describe('Partner 13 enter email configuration', function(){
        it('enter Partner 13 adv option conf', function(){
            var enterHeisee = element(by.css('.angular-extended-select'));
            enterHeisee.click();
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.sleep('3000');    });
        it('enter email conf', function(){
            var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
            panelSettings.click();  
        });
            it('adv conf', function(){
            var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
            adv_conf.click();
        });
        it('enter email menu', function(){
            var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
            email_accounts. click();
        });
        it('add mail mail', function(){
            var add_email = element(by.css("partner-emails[emails='::$resolve.emails'] > div:nth-of-type(3) .card-header .btn"));
            add_email.click();
        });
            it('inbox pass', function(){
            var Inbox_password = element (by.css('#email-in-password'));
            Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
            it('outgoing pass', function(){
            var Outgoing_mail_password = element (by.css('#email-out-password'));
        Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
        it('outgoing pass', function(){
        var Email_name = element(by.css('#email-name'));
        Email_name.click().sendKeys('bsp@widzialni.pl');
    });
    it('aut type', function(){
        var Authorization_type = element(by.css('#email-auth-type')); 
        Authorization_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
    it('inbox serv type', function(){
        var Inbox_serwer_type = element(by.css('#email-in-type')); 
        Inbox_serwer_type.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
        it('mail login ', function(){var Inbox_mail_login = element(by.css('#email-in-login'));
        Inbox_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){var Inbox_mail_host_name = element(by.css('#email-in-host'));
        Inbox_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Inbox_mail_port = element(by.css('#email-in-port'));
        Inbox_mail_port.click().sendKeys('993');});
        it('outgoing pass', function(){ var Encryption_type = element(by.css('#email-in-encryption')); 
        Encryption_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform() });
        it('outgoing pass', function(){var Outgoing_mail_login = element(by.css('#email-out-login'));
        Outgoing_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){ var  Outgoing_mail_host_name = element(by.css('#email-out-host'));
        Outgoing_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Outgoing_mail_port = element(by.css('#email-out-port'));
        Outgoing_mail_port.click().sendKeys('465');});
        it('outgoing pass', function(){ var Authorization_type1 = element(by.css('#email-out-encryption'));
        Authorization_type1.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
 
        });
        it('save', function(){
            var save = element(by.className('btn btn-success'));
            save.click();
            browser.sleep('3000')
    });
    });describe('Partner 14 enter email configuration', function(){
        it('enter Partner 14 adv option conf', function(){
            var enterHeisee = element(by.css('.angular-extended-select'));
            enterHeisee.click();
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.sleep('3000');    });
        it('enter email conf', function(){
            var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
            panelSettings.click();  
        });
            it('adv conf', function(){
            var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
            adv_conf.click();
        });
        it('enter email menu', function(){
            var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
            email_accounts. click();
        });
        it('add mail mail', function(){
            var add_email = element(by.css("partner-emails[emails='::$resolve.emails'] > div:nth-of-type(3) .card-header .btn"));
            add_email.click();
        });
            it('inbox pass', function(){
            var Inbox_password = element (by.css('#email-in-password'));
            Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
            it('outgoing pass', function(){
            var Outgoing_mail_password = element (by.css('#email-out-password'));
        Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
        it('outgoing pass', function(){
        var Email_name = element(by.css('#email-name'));
        Email_name.click().sendKeys('bsp@widzialni.pl');
    });
    it('aut type', function(){
        var Authorization_type = element(by.css('#email-auth-type')); 
        Authorization_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
    it('inbox serv type', function(){
        var Inbox_serwer_type = element(by.css('#email-in-type')); 
        Inbox_serwer_type.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
        it('mail login ', function(){var Inbox_mail_login = element(by.css('#email-in-login'));
        Inbox_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){var Inbox_mail_host_name = element(by.css('#email-in-host'));
        Inbox_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Inbox_mail_port = element(by.css('#email-in-port'));
        Inbox_mail_port.click().sendKeys('993');});
        it('outgoing pass', function(){ var Encryption_type = element(by.css('#email-in-encryption')); 
        Encryption_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform() });
        it('outgoing pass', function(){var Outgoing_mail_login = element(by.css('#email-out-login'));
        Outgoing_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){ var  Outgoing_mail_host_name = element(by.css('#email-out-host'));
        Outgoing_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Outgoing_mail_port = element(by.css('#email-out-port'));
        Outgoing_mail_port.click().sendKeys('465');});
        it('outgoing pass', function(){ var Authorization_type1 = element(by.css('#email-out-encryption'));
        Authorization_type1.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
 
        });
        it('save', function(){
            var save = element(by.className('btn btn-success'));
            save.click();
            browser.sleep('3000')
    });
    });describe('Partner 15 enter email configuration', function(){
        it('enter Partner 15 adv option conf', function(){
            var enterHeisee = element(by.css('.angular-extended-select'));
            enterHeisee.click();
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.sleep('3000');    });
        it('enter email conf', function(){
            var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
            panelSettings.click();  
        });
            it('adv conf', function(){
            var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
            adv_conf.click();
        });
        it('enter email menu', function(){
            var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
            email_accounts. click();
        });
        it('add mail mail', function(){
            var add_email = element(by.css("partner-emails[emails='::$resolve.emails'] > div:nth-of-type(3) .card-header .btn"));
            add_email.click();
        });
            it('inbox pass', function(){
            var Inbox_password = element (by.css('#email-in-password'));
            Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
            it('outgoing pass', function(){
            var Outgoing_mail_password = element (by.css('#email-out-password'));
        Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
        it('outgoing pass', function(){
        var Email_name = element(by.css('#email-name'));
        Email_name.click().sendKeys('bsp@widzialni.pl');
    });
    it('aut type', function(){
        var Authorization_type = element(by.css('#email-auth-type')); 
        Authorization_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
    it('inbox serv type', function(){
        var Inbox_serwer_type = element(by.css('#email-in-type')); 
        Inbox_serwer_type.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
        it('mail login ', function(){var Inbox_mail_login = element(by.css('#email-in-login'));
        Inbox_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){var Inbox_mail_host_name = element(by.css('#email-in-host'));
        Inbox_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Inbox_mail_port = element(by.css('#email-in-port'));
        Inbox_mail_port.click().sendKeys('993');});
        it('outgoing pass', function(){ var Encryption_type = element(by.css('#email-in-encryption')); 
        Encryption_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform() });
        it('outgoing pass', function(){var Outgoing_mail_login = element(by.css('#email-out-login'));
        Outgoing_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){ var  Outgoing_mail_host_name = element(by.css('#email-out-host'));
        Outgoing_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Outgoing_mail_port = element(by.css('#email-out-port'));
        Outgoing_mail_port.click().sendKeys('465');});
        it('outgoing pass', function(){ var Authorization_type1 = element(by.css('#email-out-encryption'));
        Authorization_type1.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
 
        });
        it('save', function(){
            var save = element(by.className('btn btn-success'));
            save.click();
            browser.sleep('3000')
    });
    });
    describe('Partner 15 enter email configuration', function(){
        it('enter Partner 15 adv option conf', function(){
            var enterHeisee = element(by.css('.angular-extended-select'));
            enterHeisee.click();
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.sleep('3000');    });
        it('enter email conf', function(){
            var panelSettings = element(by.className('fas fa-cog fa-fw align-top'));
            panelSettings.click();  
        });
            it('adv conf', function(){
            var adv_conf = element(by.css("a[ui-sref='panelSettings.config({id: undefined})']"));
            adv_conf.click();
        });
        it('enter email menu', function(){
            var email_accounts = element (by.css("a[ui-sref='panelSettings.config.emails']"));
            email_accounts. click();
        });
        it('add mail mail', function(){
            var add_email = element(by.css("partner-emails[emails='::$resolve.emails'] > div:nth-of-type(3) .card-header .btn"));
            add_email.click();
        });
            it('inbox pass', function(){
            var Inbox_password = element (by.css('#email-in-password'));
            Inbox_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
            it('outgoing pass', function(){
            var Outgoing_mail_password = element (by.css('#email-out-password'));
        Outgoing_mail_password.sendKeys('0F%cbac89a359f9be9c70bf9233f730f419f03c');
        });
        it('outgoing pass', function(){
        var Email_name = element(by.css('#email-name'));
        Email_name.click().sendKeys('bsp@widzialni.pl');
    });
    it('aut type', function(){
        var Authorization_type = element(by.css('#email-auth-type')); 
        Authorization_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
    it('inbox serv type', function(){
        var Inbox_serwer_type = element(by.css('#email-in-type')); 
        Inbox_serwer_type.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    });
        it('mail login ', function(){var Inbox_mail_login = element(by.css('#email-in-login'));
        Inbox_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){var Inbox_mail_host_name = element(by.css('#email-in-host'));
        Inbox_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Inbox_mail_port = element(by.css('#email-in-port'));
        Inbox_mail_port.click().sendKeys('993');});
        it('outgoing pass', function(){ var Encryption_type = element(by.css('#email-in-encryption')); 
        Encryption_type.click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform() });
        it('outgoing pass', function(){var Outgoing_mail_login = element(by.css('#email-out-login'));
        Outgoing_mail_login.click().sendKeys('bsp@widzialni.pl');});
        it('outgoing pass', function(){ var  Outgoing_mail_host_name = element(by.css('#email-out-host'));
        Outgoing_mail_host_name.click().sendKeys('zygula.nazwa.pl');});
        it('outgoing pass', function(){ var Outgoing_mail_port = element(by.css('#email-out-port'));
        Outgoing_mail_port.click().sendKeys('465');});
        it('outgoing pass', function(){ var Authorization_type1 = element(by.css('#email-out-encryption'));
        Authorization_type1.click()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
 
        });
        it('save', function(){
            var save = element(by.className('btn btn-success'));
            save.click();
            browser.sleep('3000')
    });
    });