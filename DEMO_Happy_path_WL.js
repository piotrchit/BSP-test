describe('Happy Path Sale Admin', function () {
  it('1. Login', function () {
    browser.get('https://test.bauerseo.pl/login');
element(by.css('img')).click();element(by.css('h6>span')).click();
element(by.css('h6>span')).click();
element(by.css('input[ng-model="vm.username"]')).click().sendKeys('bsp.ext.test4@spis-firm.biz');
element(by.css('button')).click();
element(by.css('img')).click();
var login_text = element(by.css('h6>span')).click();
expect(login_text.getText()).toEqual('Zaloguj');
element(by.css('input[ng-model="vm.password"]')).click();
element(by.css('input[ng-model="vm.password"]')).clear().sendKeys('1Ib7yI;1BML^');
element(by.css('button:nth-of-type(2)')).click();
element(by.css('nav>div:nth-of-type(1)>div:nth-of-type(1)>ul>li:nth-of-type(2)>a:nth-of-type(1)>img')).click();

}); }); 

describe('Happy Path Sale Admin', function () {
  it('Create Lead - obligo', function () {
    var sales = element(by.css('html > body > app-private-root > div > app-menu > div > div > ul > li:nth-of-type(2) > a > span'));
    var lead = element(by.css('html > body > app-private-root > div > app-menu > div > div > ul > li:nth-of-type(2) > ul > li > a'));
    var save = element(by.className('btn btn-success'));
    sales.click();
    lead.click();
    // create lead 
    var add_lead = element(by.className('btn btn-primary btn-sm'));
    add_lead.click();
    var www = element(by.css("dynamic-field[field='www'] > .form-control"));
    www.click();
    www.sendKeys('alfaelektro.pl');
    save.click();
  });
  it('Create offer', function () {
    browser.sleep('5000')
    var create_offer = element(by.className('fa fa-plus text-success'));
    create_offer.click();
    var partner = element(by.css("dynamic-field[field='partner'] .dropdown"));
    partner.click();
    var offer_domain = element(by.css("[required][ng-model='vm.ngModel'"));
    offer_domain.click();
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
    browser.sleep('5000');
  });
  it('Get Price', function () {
    var get_price = element(by.className('btn btn-info mr-auto'));
    get_price.click();
    browser.sleep('5000');
    var cloud_price = element(by.className("form-group input-group col col-auto"));
    cloud_price.click();
  });

  it('save offer', function () {
    var save_offer = element(by.className('btn btn-success'));
    save_offer.click();
  });

  it('Menu Accounts - ENTER', function () {
    var menu_clients = element(by.css('[ui-sref="clients"]'));
    menu_clients.click();
  });

  it('Add new Client', function () {
    let add_client = element(by.className('btn btn-primary btn-sm'));
    add_client.click();
  });

  it('select Germany', function () {
    var country = element(by.id('company-country'));
    country.click();
    country_GER = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    country_GER
  });
  it('fill vat id ', function () {
    var vat = element(by.className('form-control ng-pristine ng-untouched ng-empty ng-valid-validate-nip ng-invalid ng-invalid-required'))
    vat.sendKeys('TEST AUTOMATYCZNY 00');
  });
  it('language ENG', function () {
    var language = element(by.id('company-locale'));
    language.click();
    language_ENG = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    language_ENG;

  });
  it('currency EURO', function () {
    var currency = element(by.css('#company-currency'));
    currency.click();
    var currency_euro = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();

  });

  it('Timezone', function () {
    var timezone = element(by.id('company-timezone'));
    timezone.click();
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
  });

  it('Company name', function () {
    var name = element(by.id('company-name'));
    name.click();
    name.sendKeys('TEST AUTOMATYCZNY 00');
  });

  it('save client', function () {
    var save = element(by.className('btn btn-success'));
    save.click();
  });

  // TEST AUTOMATYCZNY 00 Zmienić type na wiekszy
  it('Enter client card', function () {
    var enter_client = element(By.css("tbody > tr:nth-of-type(7) > td:nth-of-type(1)"));
    enter_client.click();

  });
  it('enter client adress section', function () {
    var add_adress = element(by.css("html > body > app-private-root > div > div > div > ui-view > client-view > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div > dl > dd:nth-of-type(4) > a"));
    add_adress.click();
  });

  it('Company full name', function () {
    var full_name = element(by.model('vm.address.fullName'));
    full_name.click();
    full_name.sendKeys('TEST AUTOMATYCZNY 00');
  });

  it('enter Country Germany', function () {
    var main_country = element(by.model('vm.address.country'));
    main_country.click();
    var Germany = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    Germany;
  });

  it('enter Region Berlin', function () {
    var main_region = element(by.model('vm.address.region'));
    main_region.click();
    main_region_berlin = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    main_region_berlin;
  });

  it('enter street', function () {
    var main_street = element(by.model('vm.address.street'));
    main_street.click();
    main_street.sendKeys('Test Strasse');

  });
  it(' Number', function () {
    var main_number = element(by.model('vm.address.streetNo'));
    main_number.click();
    main_number.sendKeys('123');
  });

  it('Zip code', function () {
    var main_zip = element(by.model('vm.address.postCode'));
    main_zip.click();
    main_zip.sendKeys('123-456');
  });

  it('enter City', function () {
    var main_city = element(by.model('vm.address.city'));
    main_city.click();
    main_city.sendKeys('Berlin');
  });
  it('enter info', function () {
    var main_info = element(by.model('vm.address.info'));
    main_info.click();
    main_info.sendKeys('Iñtërnâtiônàlizætiøn☃💪');
  });

  it('save clients main adress ', function () {
    var save_main = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(1) button:nth-of-type(1)'));
    save_main.click();
  });
  it('Contact adress - Company full name', function () {
    var contact_full_name = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) company-addresses-form:nth-of-type(1) > div:nth-of-type(1) input:nth-of-type(1)'));
    contact_full_name.click();
    contact_full_name.sendKeys('Test Client Contact');
  });

  it('Contact adress - enter Country Germany', function () {
    var contact_country = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(2) > select:nth-of-type(1)'));
    contact_country.click();
    var Germany = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    Germany;

  });
  it('Contact adress - enter Region hamburg', function () {
    var contact_region = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(2) > select:nth-of-type(1)'));
    contact_region.click();
    contact_region_hamburg = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    contact_region_hamburg;
  });

  it('Contact adress - enter street', function () {
    var contact_street = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(2) > div:nth-of-type(1) > input:nth-of-type(1)'));
    contact_street.click();
    contact_street.sendKeys('Test Strasse');

  });
  it(' Contact adress - Number', function () {
    var contact_number = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(2) > input:nth-of-type(1)'));
    contact_number.click();
    contact_number.sendKeys('123');
  });
  it('Contact adress - Zip code', function () {
    var contact_zip = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(3) > input:nth-of-type(1)'));
    contact_zip.click();
    contact_zip.sendKeys('123-456');
  });

  it('Contact adress - enter City', function () {
    var contact_city = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(4) > input:nth-of-type(1)'));
    contact_city.click();
    contact_city.sendKeys('Berlin');
  });
  it('Contact adress - enter info', function () {
    var contact_info = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) textarea:nth-of-type(1)'));
    contact_info.click();
    contact_info.sendKeys('Iñtërnâtiônàlizætiøn☃💪');
  });

  it('Contact adress - save clients adress ', function () {
    var save = element(by.className('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) button:nth-of-type(1)'));
    save.click();

  });

  it(' back to the clients card ', function () {
    var back = element(by.css('[ui-sref="clients.view({ cid: vm.client.data.id })"]'));
    back.click();
  });
  it(' enter contact', function () {
    var enter_contact = element(by.css("a[ui-sref='clients.view.contacts({ cid: vm.client.data.id })'] .card-title"));
    enter_contact.click();
  });

  it(' add new contact', function () {
    var back = element(by.className('btn btn-primary btn-sm'));
    back.click();
  });
  it(' fill name ', function () {
    var contact_name = element(by.className('form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-maxlength'));
    contact_name.sendKeys('Test Contact')
    contact_name.click();
  });
  it(' fill email ', function () {
    var contact_mail = element(by.className('form-control ng-pristine ng-untouched ng-empty ng-valid-email ng-invalid ng-invalid-required ng-valid-maxlength'));
    contact_mail.sendKeys('bsp.ext.test19@spis-firm.biz');
  });

  it(' fill phone ', function () {
    var contact_phone = element(by.className('form-control ng-pristine ng-untouched ng-valid ng-empty ng-valid-minlength ng-valid-maxlength'));
    contact_phone.sendKeys('123456789');
  });

  it(' fill info ', function () {
    var contact_info = element(by.className('class="form-control ng-pristine ng-valid ng-empty ng-valid-maxlength ng-touched"'));
    contact_info.sendKeys('Contact test info');
  });

  it(' fill type ', function () {
    var type_marketing = element(by.css("html > body > app-private-root > div > div > div > ui-view > client-contacts > div > div:nth-of-type(2) > div > form > div > div:nth-of-type(2) > company-contacts-form > div > div > label"));
    type_marketing.click();
  });
  it(' save contact ', function () {
    var save = element(by.className('btn btn-success'));
    save.click();
  });

  it('enter offer menu ', function () {
    var sales = element(by.css('html > body > app-private-root > div > app-menu > div > div > ul > li:nth-of-type(2) > a > span'));
    sales.click();
    var offer = element(by.css('[ui-sref="leads.offers"]')).click();
    offer.click();
  });

  it(' create contract from offer ', function () {
    var create_contract = element(by.className('fa fa-plus text-success'));
    create_contract.click();
    browser.sleep('5000')
  });

  it('contract lenght', function () {
    var lenght = element(by.css("dynamic-field[field='contract_length'] > .custom-select"));
    lenght.click();
    browser.sleep('3000')
    var lenght_24 = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    lenght_24;
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
  });

  it('calender 01-01-2020', function () {
    var open_calender = element(by.className('btn btn-outline-secondary'));
    var january = element(by.css('th[ng-click="ctrl.displayAction(\'prev\')"]'));
    var first = element(by.css('tbody[ng-switch="ctrl.displayMode"] > tr:nth-of-type(1) > td:nth-of-type(3)'));
    open_calender.click();
    january.click().click().click().click().click().click().click();
    browser.sleep('3000');
    first.click();
  });

  it('choose client', function () {
    var choose_client = element(by.css("dynamic-field[field='client'] .dropdown"));
    choose_client.click();
    browser.actions().sendKeys('1st client').perform();
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
  });

  it('save contract', function () {
    var save_contract = element(by.className('btn btn-success'));
    save_contract.click()

  });
  it('activate contract', function () {
    browser.sleep('17000')
    var activate_contract = element(by.css('tbody > tr:nth-of-type(1) .fa-check'));
    activate_contract.click();
    browser.sleep('3000')
  });
  it('end test', function () {
    element(by.css('a.dropdown-user-link > span')).click();
    element(by.css("a[ng-click='vm.root.logout()']")).click();
    element(by.model('vm.username')).sendKeys('HAPPY PATH DEMO Zakończony Powodzeniem');
    browser.sleep('5000');
    browser.reset();
  });
});














//  describe('Happy Path Sale Admin', function () {
//       it('1. Login', function () {
//         browser.get('https://test.bauerseo.pl/login');
//   element(by.css('img')).click();element(by.css('h6>span')).click();
//   element(by.css('h6>span')).click();
//   element(by.css('input[ng-model="vm.username"]')).click().sendKeys('bsp.ext.test1@spis-firm.biz ');
//   element(by.css('button')).click();
//   element(by.css('img')).click();
//   var login_text = element(by.css('h6>span')).click();
//   expect(login_text.getText()).toEqual('Zaloguj');
//   element(by.css('input[ng-model="vm.password"]')).click();
//   element(by.css('input[ng-model="vm.password"]')).clear().sendKeys('1Ib7yI;1BML^');
//   element(by.css('button:nth-of-type(2)')).click();
// element(by.css('nav>div:nth-of-type(1)>div:nth-of-type(1)>ul>li:nth-of-type(2)>a:nth-of-type(1)>img')).click();

// }); 
//   it('Create Lead - obligo', function () {
//     var sales = element(by.css('html > body > app-private-root > div > app-menu > div > div > ul > li:nth-of-type(2) > a > span'));
//     var lead = element(by.css('html > body > app-private-root > div > app-menu > div > div > ul > li:nth-of-type(2) > ul > li > a'));
//     var save = element(by.className('btn btn-success'));
//     sales.click();
//     lead.click();
//     // create lead 
//     var add_lead = element(by.className('btn btn-primary btn-sm'));
//     add_lead.click();
//     var www = element(by.css("dynamic-field[field='www'] > .form-control"));
//     www.click();
//     www.sendKeys('alfaelektro.pl');
//     save.click();
//   });
//   it('Create offer', function () {
//     browser.sleep('5000')
//     var create_offer = element(by.className('fa fa-plus text-success'));
//     create_offer.click();
//     var partner = element(by.css("dynamic-field[field='partner'] .dropdown"));
//     partner.click();
//     var offer_domain = element(by.css("[required][ng-model='vm.ngModel'"));
//     offer_domain.click();
//     browser.actions().sendKeys(protractor.Key.ENTER).perform();
//     browser.sleep('5000');
//   });
//   it('Get Price', function () {
//     var get_price = element(by.className('btn btn-info mr-auto'));
//     get_price.click();
//     browser.sleep('5000');
//     var cloud_price = element(by.className("form-group input-group col col-auto"));
//     cloud_price.click();
//   });

//   it('save offer', function () {
//     var save_offer = element(by.className('btn btn-success'));
//     save_offer.click();
//   });

//   it('Menu Accounts - ENTER', function () {
//     var menu_clients = element(by.css('[ui-sref="clients"]'));
//     menu_clients.click();
//   });

//   it('Add new Client', function () {
//     let add_client = element(by.className('btn btn-primary btn-sm'));
//     add_client.click();
//   });

//   it('select Germany', function () {
//     var country = element(by.id('company-country'));
//     country.click();
//     country_GER = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     country_GER
//   });
//   it('fill vat id ', function () {
//     var vat = element(by.className('form-control ng-pristine ng-untouched ng-empty ng-valid-validate-nip ng-invalid ng-invalid-required'))
//     vat.sendKeys('TEST AUTOMATYCZNY 00');
//   });
//   it('language ENG', function () {
//     var language = element(by.id('company-locale'));
//     language.click();
//     language_ENG = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     language_ENG;

//   });
//   it('currency EURO', function () {
//     var currency = element(by.css('#company-currency'));
//     currency.click();
//     var currency_euro = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();

//   });

//   it('Timezone', function () {
//     var timezone = element(by.id('company-timezone'));
//     timezone.click();
//     browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//   });

//   it('Company name', function () {
//     var name = element(by.id('company-name'));
//     name.click();
//     name.sendKeys('TEST AUTOMATYCZNY 00');
//   });

//   it('save client', function () {
//     var save = element(by.className('btn btn-success'));
//     save.click();
//   });

//   // TEST AUTOMATYCZNY 00 Zmienić type na wiekszy
//   it('Enter client card', function () {
//     var enter_client = element(By.css("tbody > tr:nth-of-type(7) > td:nth-of-type(1)"));
//     enter_client.click();

//   });
//   it('enter client adress section', function () {
//     var add_adress = element(by.css("html > body > app-private-root > div > div > div > ui-view > client-view > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div > dl > dd:nth-of-type(4) > a"));
//     add_adress.click();
//   });

//   it('Company full name', function () {
//     var full_name = element(by.model('vm.address.fullName'));
//     full_name.click();
//     full_name.sendKeys('TEST AUTOMATYCZNY 00');
//   });

//   it('enter Country Germany', function () {
//     var main_country = element(by.model('vm.address.country'));
//     main_country.click();
//     var Germany = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     Germany;
//   });

//   it('enter Region Berlin', function () {
//     var main_region = element(by.model('vm.address.region'));
//     main_region.click();
//     main_region_berlin = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     main_region_berlin;
//   });

//   it('enter street', function () {
//     var main_street = element(by.model('vm.address.street'));
//     main_street.click();
//     main_street.sendKeys('Test Strasse');

//   });
//   it(' Number', function () {
//     var main_number = element(by.model('vm.address.streetNo'));
//     main_number.click();
//     main_number.sendKeys('123');
//   });

//   it('Zip code', function () {
//     var main_zip = element(by.model('vm.address.postCode'));
//     main_zip.click();
//     main_zip.sendKeys('123-456');
//   });

//   it('enter City', function () {
//     var main_city = element(by.model('vm.address.city'));
//     main_city.click();
//     main_city.sendKeys('Berlin');
//   });
//   it('enter info', function () {
//     var main_info = element(by.model('vm.address.info'));
//     main_info.click();
//     main_info.sendKeys('Iñtërnâtiônàlizætiøn☃💪');
//   });

//   it('save clients main adress ', function () {
//     var save_main = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(1) button:nth-of-type(1)'));
//     save_main.click();
//   });
//   it('Contact adress - Company full name', function () {
//     var contact_full_name = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) company-addresses-form:nth-of-type(1) > div:nth-of-type(1) input:nth-of-type(1)'));
//     contact_full_name.click();
//     contact_full_name.sendKeys('Test Client Contact');
//   });

//   it('Contact adress - enter Country Germany', function () {
//     var contact_country = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(2) > select:nth-of-type(1)'));
//     contact_country.click();
//     var Germany = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     Germany;

//   });
//   it('Contact adress - enter Region hamburg', function () {
//     var contact_region = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(2) > select:nth-of-type(1)'));
//     contact_region.click();
//     contact_region_hamburg = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     contact_region_hamburg;
//   });

//   it('Contact adress - enter street', function () {
//     var contact_street = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(2) > div:nth-of-type(1) > input:nth-of-type(1)'));
//     contact_street.click();
//     contact_street.sendKeys('Test Strasse');

//   });
//   it(' Contact adress - Number', function () {
//     var contact_number = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(2) > input:nth-of-type(1)'));
//     contact_number.click();
//     contact_number.sendKeys('123');
//   });
//   it('Contact adress - Zip code', function () {
//     var contact_zip = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(3) > input:nth-of-type(1)'));
//     contact_zip.click();
//     contact_zip.sendKeys('123-456');
//   });

//   it('Contact adress - enter City', function () {
//     var contact_city = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(4) > input:nth-of-type(1)'));
//     contact_city.click();
//     contact_city.sendKeys('Berlin');
//   });
//   it('Contact adress - enter info', function () {
//     var contact_info = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) textarea:nth-of-type(1)'));
//     contact_info.click();
//     contact_info.sendKeys('Iñtërnâtiônàlizætiøn☃💪');
//   });

//   it('Contact adress - save clients adress ', function () {
//     var save = element(by.className('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) button:nth-of-type(1)'));
//     save.click();

//   });

//   it(' back to the clients card ', function () {
//     var back = element(by.css('[ui-sref="clients.view({ cid: vm.client.data.id })"]'));
//     back.click();
//   });
//   it(' enter contact', function () {
//     var enter_contact = element(by.css("a[ui-sref='clients.view.contacts({ cid: vm.client.data.id })'] .card-title"));
//     enter_contact.click();
//   });

//   it(' add new contact', function () {
//     var back = element(by.className('btn btn-primary btn-sm'));
//     back.click();
//   });
//   it(' fill name ', function () {
//     var contact_name = element(by.className('form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-maxlength'));
//     contact_name.sendKeys('Test Contact')
//     contact_name.click();
//   });
//   it(' fill email ', function () {
//     var contact_mail = element(by.className('form-control ng-pristine ng-untouched ng-empty ng-valid-email ng-invalid ng-invalid-required ng-valid-maxlength'));
//     contact_mail.sendKeys('bsp.ext.test19@spis-firm.biz');
//   });

//   it(' fill phone ', function () {
//     var contact_phone = element(by.className('form-control ng-pristine ng-untouched ng-valid ng-empty ng-valid-minlength ng-valid-maxlength'));
//     contact_phone.sendKeys('123456789');
//   });

//   it(' fill info ', function () {
//     var contact_info = element(by.className('class="form-control ng-pristine ng-valid ng-empty ng-valid-maxlength ng-touched"'));
//     contact_info.sendKeys('Contact test info');
//   });

//   it(' fill type ', function () {
//     var type_marketing = element(by.css("html > body > app-private-root > div > div > div > ui-view > client-contacts > div > div:nth-of-type(2) > div > form > div > div:nth-of-type(2) > company-contacts-form > div > div > label"));
//     type_marketing.click();
//   });
//   it(' save contact ', function () {
//     var save = element(by.className('btn btn-success'));
//     save.click();
//   });

//   it('enter offer menu ', function () {
//     var sales = element(by.css('html > body > app-private-root > div > app-menu > div > div > ul > li:nth-of-type(2) > a > span'));
//     sales.click();
//     var offer = element(by.css('[ui-sref="leads.offers"]')).click();
//     offer.click();
//   });

//   it(' create contract from offer ', function () {
//     var create_contract = element(by.className('fa fa-plus text-success'));
//     create_contract.click();
//     browser.sleep('5000')
//   });

//   it('contract lenght', function () {
//     var lenght = element(by.css("dynamic-field[field='contract_length'] > .custom-select"));
//     lenght.click();
//     browser.sleep('3000')
//     var lenght_24 = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     lenght_24;
//     browser.actions().sendKeys(protractor.Key.ENTER).perform();
//   });

//   it('calender 01-01-2020', function () {
//     var open_calender = element(by.className('btn btn-outline-secondary'));
//     var january = element(by.css('th[ng-click="ctrl.displayAction(\'prev\')"]'));
//     var first = element(by.css('tbody[ng-switch="ctrl.displayMode"] > tr:nth-of-type(1) > td:nth-of-type(3)'));
//     open_calender.click();
//     january.click().click().click().click().click().click().click();
//     browser.sleep('3000');
//     first.click();
//   });

//   it('choose client', function () {
//     var choose_client = element(by.css("dynamic-field[field='client'] .dropdown"));
//     choose_client.click();
//     browser.actions().sendKeys('1st client').perform();
//     browser.actions().sendKeys(protractor.Key.ENTER).perform();
//   });

//   it('save contract', function () {
//     var save_contract = element(by.className('btn btn-success'));
//     save_contract.click()

//   });
//   it('activate contract', function () {
//     browser.sleep('17000')
//     var activate_contract = element(by.css('tbody > tr:nth-of-type(1) .fa-check'));
//     activate_contract.click();
//     browser.sleep('3000')
//   });
//   it('end test', function () {
//     element(by.css('a.dropdown-user-link > span')).click();
//     element(by.css("a[ng-click='vm.root.logout()']")).click();
//     element(by.model('vm.username')).sendKeys('HAPPY PATH DEMO Zakończony Powodzeniem');
//     browser.sleep('5000');
//     browser.reset();
//   });
// });













//  describe('Happy Path Sale Admin', function () {
//       it('1. Login', function () {
//         browser.get('https://test.bauerseo.pl/login');
//   element(by.css('img')).click();element(by.css('h6>span')).click();
//   element(by.css('h6>span')).click();
//   element(by.css('input[ng-model="vm.username"]')).click().sendKeys('bsp.ext.test1@spis-firm.biz ');
//   element(by.css('button')).click();
//   element(by.css('img')).click();
//   var login_text = element(by.css('h6>span')).click();
//   expect(login_text.getText()).toEqual('Zaloguj');
//   element(by.css('input[ng-model="vm.password"]')).click();
//   element(by.css('input[ng-model="vm.password"]')).clear().sendKeys('1Ib7yI;1BML^');
//   element(by.css('button:nth-of-type(2)')).click();
// element(by.css('nav>div:nth-of-type(1)>div:nth-of-type(1)>ul>li:nth-of-type(2)>a:nth-of-type(1)>img')).click();

// }); 
//   it('Create Lead - obligo', function () {
//     var sales = element(by.css('html > body > app-private-root > div > app-menu > div > div > ul > li:nth-of-type(2) > a > span'));
//     var lead = element(by.css('html > body > app-private-root > div > app-menu > div > div > ul > li:nth-of-type(2) > ul > li > a'));
//     var save = element(by.className('btn btn-success'));
//     sales.click();
//     lead.click();
//     // create lead 
//     var add_lead = element(by.className('btn btn-primary btn-sm'));
//     add_lead.click();
//     var www = element(by.css("dynamic-field[field='www'] > .form-control"));
//     www.click();
//     www.sendKeys('alfaelektro.pl');
//     save.click();
//   });
//   it('Create offer', function () {
//     browser.sleep('5000')
//     var create_offer = element(by.className('fa fa-plus text-success'));
//     create_offer.click();
//     var partner = element(by.css("dynamic-field[field='partner'] .dropdown"));
//     partner.click();
//     var offer_domain = element(by.css("[required][ng-model='vm.ngModel'"));
//     offer_domain.click();
//     browser.actions().sendKeys(protractor.Key.ENTER).perform();
//     browser.sleep('5000');
//   });
//   it('Get Price', function () {
//     var get_price = element(by.className('btn btn-info mr-auto'));
//     get_price.click();
//     browser.sleep('5000');
//     var cloud_price = element(by.className("form-group input-group col col-auto"));
//     cloud_price.click();
//   });

//   it('save offer', function () {
//     var save_offer = element(by.className('btn btn-success'));
//     save_offer.click();
//   });

//   it('Menu Accounts - ENTER', function () {
//     var menu_clients = element(by.css('[ui-sref="clients"]'));
//     menu_clients.click();
//   });

//   it('Add new Client', function () {
//     let add_client = element(by.className('btn btn-primary btn-sm'));
//     add_client.click();
//   });

//   it('select Germany', function () {
//     var country = element(by.id('company-country'));
//     country.click();
//     country_GER = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     country_GER
//   });
//   it('fill vat id ', function () {
//     var vat = element(by.className('form-control ng-pristine ng-untouched ng-empty ng-valid-validate-nip ng-invalid ng-invalid-required'))
//     vat.sendKeys('TEST AUTOMATYCZNY 00');
//   });
//   it('language ENG', function () {
//     var language = element(by.id('company-locale'));
//     language.click();
//     language_ENG = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     language_ENG;

//   });
//   it('currency EURO', function () {
//     var currency = element(by.css('#company-currency'));
//     currency.click();
//     var currency_euro = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();

//   });

//   it('Timezone', function () {
//     var timezone = element(by.id('company-timezone'));
//     timezone.click();
//     browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//   });

//   it('Company name', function () {
//     var name = element(by.id('company-name'));
//     name.click();
//     name.sendKeys('TEST AUTOMATYCZNY 00');
//   });

//   it('save client', function () {
//     var save = element(by.className('btn btn-success'));
//     save.click();
//   });

//   // TEST AUTOMATYCZNY 00 Zmienić type na wiekszy
//   it('Enter client card', function () {
//     var enter_client = element(By.css("tbody > tr:nth-of-type(7) > td:nth-of-type(1)"));
//     enter_client.click();

//   });
//   it('enter client adress section', function () {
//     var add_adress = element(by.css("html > body > app-private-root > div > div > div > ui-view > client-view > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div > dl > dd:nth-of-type(4) > a"));
//     add_adress.click();
//   });

//   it('Company full name', function () {
//     var full_name = element(by.model('vm.address.fullName'));
//     full_name.click();
//     full_name.sendKeys('TEST AUTOMATYCZNY 00');
//   });

//   it('enter Country Germany', function () {
//     var main_country = element(by.model('vm.address.country'));
//     main_country.click();
//     var Germany = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     Germany;
//   });

//   it('enter Region Berlin', function () {
//     var main_region = element(by.model('vm.address.region'));
//     main_region.click();
//     main_region_berlin = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     main_region_berlin;
//   });

//   it('enter street', function () {
//     var main_street = element(by.model('vm.address.street'));
//     main_street.click();
//     main_street.sendKeys('Test Strasse');

//   });
//   it(' Number', function () {
//     var main_number = element(by.model('vm.address.streetNo'));
//     main_number.click();
//     main_number.sendKeys('123');
//   });

//   it('Zip code', function () {
//     var main_zip = element(by.model('vm.address.postCode'));
//     main_zip.click();
//     main_zip.sendKeys('123-456');
//   });

//   it('enter City', function () {
//     var main_city = element(by.model('vm.address.city'));
//     main_city.click();
//     main_city.sendKeys('Berlin');
//   });
//   it('enter info', function () {
//     var main_info = element(by.model('vm.address.info'));
//     main_info.click();
//     main_info.sendKeys('Iñtërnâtiônàlizætiøn☃💪');
//   });

//   it('save clients main adress ', function () {
//     var save_main = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(1) button:nth-of-type(1)'));
//     save_main.click();
//   });
//   it('Contact adress - Company full name', function () {
//     var contact_full_name = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) company-addresses-form:nth-of-type(1) > div:nth-of-type(1) input:nth-of-type(1)'));
//     contact_full_name.click();
//     contact_full_name.sendKeys('Test Client Contact');
//   });

//   it('Contact adress - enter Country Germany', function () {
//     var contact_country = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(2) > select:nth-of-type(1)'));
//     contact_country.click();
//     var Germany = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     Germany;

//   });
//   it('Contact adress - enter Region hamburg', function () {
//     var contact_region = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(2) > select:nth-of-type(1)'));
//     contact_region.click();
//     contact_region_hamburg = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     contact_region_hamburg;
//   });

//   it('Contact adress - enter street', function () {
//     var contact_street = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(2) > div:nth-of-type(1) > input:nth-of-type(1)'));
//     contact_street.click();
//     contact_street.sendKeys('Test Strasse');

//   });
//   it(' Contact adress - Number', function () {
//     var contact_number = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(2) > input:nth-of-type(1)'));
//     contact_number.click();
//     contact_number.sendKeys('123');
//   });
//   it('Contact adress - Zip code', function () {
//     var contact_zip = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(3) > input:nth-of-type(1)'));
//     contact_zip.click();
//     contact_zip.sendKeys('123-456');
//   });

//   it('Contact adress - enter City', function () {
//     var contact_city = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(4) > input:nth-of-type(1)'));
//     contact_city.click();
//     contact_city.sendKeys('Berlin');
//   });
//   it('Contact adress - enter info', function () {
//     var contact_info = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) textarea:nth-of-type(1)'));
//     contact_info.click();
//     contact_info.sendKeys('Iñtërnâtiônàlizætiøn☃💪');
//   });

//   it('Contact adress - save clients adress ', function () {
//     var save = element(by.className('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) button:nth-of-type(1)'));
//     save.click();

//   });

//   it(' back to the clients card ', function () {
//     var back = element(by.css('[ui-sref="clients.view({ cid: vm.client.data.id })"]'));
//     back.click();
//   });
//   it(' enter contact', function () {
//     var enter_contact = element(by.css("a[ui-sref='clients.view.contacts({ cid: vm.client.data.id })'] .card-title"));
//     enter_contact.click();
//   });

//   it(' add new contact', function () {
//     var back = element(by.className('btn btn-primary btn-sm'));
//     back.click();
//   });
//   it(' fill name ', function () {
//     var contact_name = element(by.className('form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-maxlength'));
//     contact_name.sendKeys('Test Contact')
//     contact_name.click();
//   });
//   it(' fill email ', function () {
//     var contact_mail = element(by.className('form-control ng-pristine ng-untouched ng-empty ng-valid-email ng-invalid ng-invalid-required ng-valid-maxlength'));
//     contact_mail.sendKeys('bsp.ext.test19@spis-firm.biz');
//   });

//   it(' fill phone ', function () {
//     var contact_phone = element(by.className('form-control ng-pristine ng-untouched ng-valid ng-empty ng-valid-minlength ng-valid-maxlength'));
//     contact_phone.sendKeys('123456789');
//   });

//   it(' fill info ', function () {
//     var contact_info = element(by.className('class="form-control ng-pristine ng-valid ng-empty ng-valid-maxlength ng-touched"'));
//     contact_info.sendKeys('Contact test info');
//   });

//   it(' fill type ', function () {
//     var type_marketing = element(by.css("html > body > app-private-root > div > div > div > ui-view > client-contacts > div > div:nth-of-type(2) > div > form > div > div:nth-of-type(2) > company-contacts-form > div > div > label"));
//     type_marketing.click();
//   });
//   it(' save contact ', function () {
//     var save = element(by.className('btn btn-success'));
//     save.click();
//   });

//   it('enter offer menu ', function () {
//     var sales = element(by.css('html > body > app-private-root > div > app-menu > div > div > ul > li:nth-of-type(2) > a > span'));
//     sales.click();
//     var offer = element(by.css('[ui-sref="leads.offers"]')).click();
//     offer.click();
//   });

//   it(' create contract from offer ', function () {
//     var create_contract = element(by.className('fa fa-plus text-success'));
//     create_contract.click();
//     browser.sleep('5000')
//   });

//   it('contract lenght', function () {
//     var lenght = element(by.css("dynamic-field[field='contract_length'] > .custom-select"));
//     lenght.click();
//     browser.sleep('3000')
//     var lenght_24 = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     lenght_24;
//     browser.actions().sendKeys(protractor.Key.ENTER).perform();
//   });

//   it('calender 01-01-2020', function () {
//     var open_calender = element(by.className('btn btn-outline-secondary'));
//     var january = element(by.css('th[ng-click="ctrl.displayAction(\'prev\')"]'));
//     var first = element(by.css('tbody[ng-switch="ctrl.displayMode"] > tr:nth-of-type(1) > td:nth-of-type(3)'));
//     open_calender.click();
//     january.click().click().click().click().click().click().click();
//     browser.sleep('3000');
//     first.click();
//   });

//   it('choose client', function () {
//     var choose_client = element(by.css("dynamic-field[field='client'] .dropdown"));
//     choose_client.click();
//     browser.actions().sendKeys('1st client').perform();
//     browser.actions().sendKeys(protractor.Key.ENTER).perform();
//   });

//   it('save contract', function () {
//     var save_contract = element(by.className('btn btn-success'));
//     save_contract.click()

//   });
//   it('activate contract', function () {
//     browser.sleep('17000')
//     var activate_contract = element(by.css('tbody > tr:nth-of-type(1) .fa-check'));
//     activate_contract.click();
//     browser.sleep('3000')
//   });
//   it('end test', function () {
//     element(by.css('a.dropdown-user-link > span')).click();
//     element(by.css("a[ng-click='vm.root.logout()']")).click();
//     element(by.model('vm.username')).sendKeys('HAPPY PATH DEMO Zakończony Powodzeniem');
//     browser.sleep('5000');
//     browser.reset();
//   });
// });













//  describe('Happy Path Sale Admin', function () {
//       it('1. Login', function () {
//         browser.get('https://partner1test.bauerseo.pl/login');
//   element(by.css('img')).click();element(by.css('h6>span')).click();
//   element(by.css('h6>span')).click();
//   element(by.css('input[ng-model="vm.username"]')).click().sendKeys('bsp.ext.test1@spis-firm.biz ');
//   element(by.css('button')).click();
//   element(by.css('img')).click();
//   var login_text = element(by.css('h6>span')).click();
//   expect(login_text.getText()).toEqual('Zaloguj');
//   element(by.css('input[ng-model="vm.password"]')).click();
//   element(by.css('input[ng-model="vm.password"]')).clear().sendKeys('1Ib7yI;1BML^');
//   element(by.css('button:nth-of-type(2)')).click();
// element(by.css('nav>div:nth-of-type(1)>div:nth-of-type(1)>ul>li:nth-of-type(2)>a:nth-of-type(1)>img')).click();

// }); 
//   it('Create Lead - obligo', function () {
//     var sales = element(by.css('html > body > app-private-root > div > app-menu > div > div > ul > li:nth-of-type(2) > a > span'));
//     var lead = element(by.css('html > body > app-private-root > div > app-menu > div > div > ul > li:nth-of-type(2) > ul > li > a'));
//     var save = element(by.className('btn btn-success'));
//     sales.click();
//     lead.click();
//     // create lead 
//     var add_lead = element(by.className('btn btn-primary btn-sm'));
//     add_lead.click();
//     var www = element(by.css("dynamic-field[field='www'] > .form-control"));
//     www.click();
//     www.sendKeys('alfaelektro.pl');
//     save.click();
//   });
//   it('Create offer', function () {
//     browser.sleep('5000')
//     var create_offer = element(by.className('fa fa-plus text-success'));
//     create_offer.click();
//     var partner = element(by.css("dynamic-field[field='partner'] .dropdown"));
//     partner.click();
//     var offer_domain = element(by.css("[required][ng-model='vm.ngModel'"));
//     offer_domain.click();
//     browser.actions().sendKeys(protractor.Key.ENTER).perform();
//     browser.sleep('5000');
//   });
//   it('Get Price', function () {
//     var get_price = element(by.className('btn btn-info mr-auto'));
//     get_price.click();
//     browser.sleep('5000');
//     var cloud_price = element(by.className("form-group input-group col col-auto"));
//     cloud_price.click();
//   });

//   it('save offer', function () {
//     var save_offer = element(by.className('btn btn-success'));
//     save_offer.click();
//   });

//   it('Menu Accounts - ENTER', function () {
//     var menu_clients = element(by.css('[ui-sref="clients"]'));
//     menu_clients.click();
//   });

//   it('Add new Client', function () {
//     let add_client = element(by.className('btn btn-primary btn-sm'));
//     add_client.click();
//   });

//   it('select Germany', function () {
//     var country = element(by.id('company-country'));
//     country.click();
//     country_GER = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     country_GER
//   });
//   it('fill vat id ', function () {
//     var vat = element(by.className('form-control ng-pristine ng-untouched ng-empty ng-valid-validate-nip ng-invalid ng-invalid-required'))
//     vat.sendKeys('TEST AUTOMATYCZNY 00');
//   });
//   it('language ENG', function () {
//     var language = element(by.id('company-locale'));
//     language.click();
//     language_ENG = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     language_ENG;

//   });
//   it('currency EURO', function () {
//     var currency = element(by.css('#company-currency'));
//     currency.click();
//     var currency_euro = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();

//   });

//   it('Timezone', function () {
//     var timezone = element(by.id('company-timezone'));
//     timezone.click();
//     browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//   });

//   it('Company name', function () {
//     var name = element(by.id('company-name'));
//     name.click();
//     name.sendKeys('TEST AUTOMATYCZNY 00');
//   });

//   it('save client', function () {
//     var save = element(by.className('btn btn-success'));
//     save.click();
//   });

//   // TEST AUTOMATYCZNY 00 Zmienić type na wiekszy
//   it('Enter client card', function () {
//     var enter_client = element(By.css("tbody > tr:nth-of-type(7) > td:nth-of-type(1)"));
//     enter_client.click();

//   });
//   it('enter client adress section', function () {
//     var add_adress = element(by.css("html > body > app-private-root > div > div > div > ui-view > client-view > div > div:nth-of-type(2) > div:nth-of-type(2) > div > div > dl > dd:nth-of-type(4) > a"));
//     add_adress.click();
//   });

//   it('Company full name', function () {
//     var full_name = element(by.model('vm.address.fullName'));
//     full_name.click();
//     full_name.sendKeys('TEST AUTOMATYCZNY 00');
//   });

//   it('enter Country Germany', function () {
//     var main_country = element(by.model('vm.address.country'));
//     main_country.click();
//     var Germany = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     Germany;
//   });

//   it('enter Region Berlin', function () {
//     var main_region = element(by.model('vm.address.region'));
//     main_region.click();
//     main_region_berlin = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     main_region_berlin;
//   });

//   it('enter street', function () {
//     var main_street = element(by.model('vm.address.street'));
//     main_street.click();
//     main_street.sendKeys('Test Strasse');

//   });
//   it(' Number', function () {
//     var main_number = element(by.model('vm.address.streetNo'));
//     main_number.click();
//     main_number.sendKeys('123');
//   });

//   it('Zip code', function () {
//     var main_zip = element(by.model('vm.address.postCode'));
//     main_zip.click();
//     main_zip.sendKeys('123-456');
//   });

//   it('enter City', function () {
//     var main_city = element(by.model('vm.address.city'));
//     main_city.click();
//     main_city.sendKeys('Berlin');
//   });
//   it('enter info', function () {
//     var main_info = element(by.model('vm.address.info'));
//     main_info.click();
//     main_info.sendKeys('Iñtërnâtiônàlizætiøn☃💪');
//   });

//   it('save clients main adress ', function () {
//     var save_main = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(1) button:nth-of-type(1)'));
//     save_main.click();
//   });
//   it('Contact adress - Company full name', function () {
//     var contact_full_name = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) company-addresses-form:nth-of-type(1) > div:nth-of-type(1) input:nth-of-type(1)'));
//     contact_full_name.click();
//     contact_full_name.sendKeys('Test Client Contact');
//   });

//   it('Contact adress - enter Country Germany', function () {
//     var contact_country = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(2) > select:nth-of-type(1)'));
//     contact_country.click();
//     var Germany = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     Germany;

//   });
//   it('Contact adress - enter Region hamburg', function () {
//     var contact_region = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(2) > select:nth-of-type(1)'));
//     contact_region.click();
//     contact_region_hamburg = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     contact_region_hamburg;
//   });

//   it('Contact adress - enter street', function () {
//     var contact_street = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(2) > div:nth-of-type(1) > input:nth-of-type(1)'));
//     contact_street.click();
//     contact_street.sendKeys('Test Strasse');

//   });
//   it(' Contact adress - Number', function () {
//     var contact_number = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(2) > input:nth-of-type(1)'));
//     contact_number.click();
//     contact_number.sendKeys('123');
//   });
//   it('Contact adress - Zip code', function () {
//     var contact_zip = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(3) > input:nth-of-type(1)'));
//     contact_zip.click();
//     contact_zip.sendKeys('123-456');
//   });

//   it('Contact adress - enter City', function () {
//     var contact_city = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(4) > input:nth-of-type(1)'));
//     contact_city.click();
//     contact_city.sendKeys('Berlin');
//   });
//   it('Contact adress - enter info', function () {
//     var contact_info = element(by.css('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) textarea:nth-of-type(1)'));
//     contact_info.click();
//     contact_info.sendKeys('Iñtërnâtiônàlizætiøn☃💪');
//   });

//   it('Contact adress - save clients adress ', function () {
//     var save = element(by.className('div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) button:nth-of-type(1)'));
//     save.click();

//   });

//   it(' back to the clients card ', function () {
//     var back = element(by.css('[ui-sref="clients.view({ cid: vm.client.data.id })"]'));
//     back.click();
//   });
//   it(' enter contact', function () {
//     var enter_contact = element(by.css("a[ui-sref='clients.view.contacts({ cid: vm.client.data.id })'] .card-title"));
//     enter_contact.click();
//   });

//   it(' add new contact', function () {
//     var back = element(by.className('btn btn-primary btn-sm'));
//     back.click();
//   });
//   it(' fill name ', function () {
//     var contact_name = element(by.className('form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-maxlength'));
//     contact_name.sendKeys('Test Contact')
//     contact_name.click();
//   });
//   it(' fill email ', function () {
//     var contact_mail = element(by.className('form-control ng-pristine ng-untouched ng-empty ng-valid-email ng-invalid ng-invalid-required ng-valid-maxlength'));
//     contact_mail.sendKeys('bsp.ext.test19@spis-firm.biz');
//   });

//   it(' fill phone ', function () {
//     var contact_phone = element(by.className('form-control ng-pristine ng-untouched ng-valid ng-empty ng-valid-minlength ng-valid-maxlength'));
//     contact_phone.sendKeys('123456789');
//   });

//   it(' fill info ', function () {
//     var contact_info = element(by.className('class="form-control ng-pristine ng-valid ng-empty ng-valid-maxlength ng-touched"'));
//     contact_info.sendKeys('Contact test info');
//   });

//   it(' fill type ', function () {
//     var type_marketing = element(by.css("html > body > app-private-root > div > div > div > ui-view > client-contacts > div > div:nth-of-type(2) > div > form > div > div:nth-of-type(2) > company-contacts-form > div > div > label"));
//     type_marketing.click();
//   });
//   it(' save contact ', function () {
//     var save = element(by.className('btn btn-success'));
//     save.click();
//   });

//   it('enter offer menu ', function () {
//     var sales = element(by.css('html > body > app-private-root > div > app-menu > div > div > ul > li:nth-of-type(2) > a > span'));
//     sales.click();
//     var offer = element(by.css('[ui-sref="leads.offers"]')).click();
//     offer.click();
//   });

//   it(' create contract from offer ', function () {
//     var create_contract = element(by.className('fa fa-plus text-success'));
//     create_contract.click();
//     browser.sleep('5000')
//   });

//   it('contract lenght', function () {
//     var lenght = element(by.css("dynamic-field[field='contract_length'] > .custom-select"));
//     lenght.click();
//     browser.sleep('3000')
//     var lenght_24 = browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform(); browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//     lenght_24;
//     browser.actions().sendKeys(protractor.Key.ENTER).perform();
//   });

//   it('calender 01-01-2020', function () {
//     var open_calender = element(by.className('btn btn-outline-secondary'));
//     var january = element(by.css('th[ng-click="ctrl.displayAction(\'prev\')"]'));
//     var first = element(by.css('tbody[ng-switch="ctrl.displayMode"] > tr:nth-of-type(1) > td:nth-of-type(3)'));
//     open_calender.click();
//     january.click().click().click().click().click().click().click();
//     browser.sleep('3000');
//     first.click();
//   });

//   it('choose client', function () {
//     var choose_client = element(by.css("dynamic-field[field='client'] .dropdown"));
//     choose_client.click();
//     browser.actions().sendKeys('1st client').perform();
//     browser.actions().sendKeys(protractor.Key.ENTER).perform();
//   });

//   it('save contract', function () {
//     var save_contract = element(by.className('btn btn-success'));
//     save_contract.click()

//   });
//   it('activate contract', function () {
//     browser.sleep('17000')
//     var activate_contract = element(by.css('tbody > tr:nth-of-type(1) .fa-check'));
//     activate_contract.click();
//     browser.sleep('3000')
//   });
//   it('end test', function () {
//     element(by.css('a.dropdown-user-link > span')).click();
//     element(by.css("a[ng-click='vm.root.logout()']")).click();
//     element(by.model('vm.username')).sendKeys('HAPPY PATH DEMO Zakończony Powodzeniem');
//     browser.sleep('5000');
//     browser.reset();
//   });
// });