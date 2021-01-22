// tslint:disable:max-line-length
import { by, element, ElementFinder } from 'protractor';
import { from } from 'rxjs';
import { Utils } from '../utils';
import { Country } from "./country";

export namespace Pages {

    //LOGIN 
    // input
    export const loginInput: ElementFinder = element(by.css("[name='email']"));
    export const passInput: ElementFinder = element(by.model('vm.password'));
    // Button   
    export const nextPageButton: ElementFinder = element(by.css(".btn")).element(by.xpath("//button[contains(text(),'Kontynuuj')]"));;
    export const forgottenPassword: ElementFinder = element(by.css('.password-alert')).element(by.xpath("//a[contains(text(),'Zapomniane hasło')]"));;
    export const backButton: ElementFinder = element(by.css('.btn-link'));
    export const loginButton: ElementFinder = element(by.css('.btn-primary')).element(by.xpath("//button[contains(text(),'Zaloguj')]"));;
    // Elemets  
    export const loginTitle: ElementFinder = element(by.css('.login-title'));
    export const logo: ElementFinder = element(by.css('img'));
    export const logoImage: ElementFinder = element(by.css('app-header>nav>div:nth-of-type(1)>div:nth-of-type(1)>ul>li:nth-of-type(2)>a:nth-of-type(1)>img'))
    // Validation Message     
    export const wrongPassMess: ElementFinder = element(by.css("html > body > app-public-root > div > div > section > div > div > div > login > div > div > div > div:nth-of-type(2) > form > div > div > div"));
    export const wrongLoginMess: ElementFinder = element(by.css("html > body > app-public-root > div > div > section > div > div > div > login > div > div > div > div:nth-of-type(2) > form > div > div > div"));
    export const loginToPoleJestWymagane: ElementFinder = element(by.className('invalid-feedback'));
    export const passToPoleJestWymagane: ElementFinder = element(by.className('invalid-feedback'));
    export const loginValidation: ElementFinder = element(by.className('invalid-feedback'));
    export const sendResetPasswordMessage: ElementFinder = element(by.xpath('//div[contains(text(), "Na Twój adres e-mail została wysłana wiadomość umożliwiająca ustawienie nowego hasła")]'));
    export const passSendMess: ElementFinder = element(by.css('.alert'));
    //Pop up elements
    export const forgottenPasswordPopUp: ElementFinder = element(by.css('confirm-modal>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2)'));
    export const cancelSending: ElementFinder = element(by.css("button[ng-click='vm.factory._modal.response(false)']"));
    export const sendPassButton: ElementFinder = element(by.css('confirm-modal>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(3)>button:nth-of-type(2)'));
    //Pass expired
    export const passExpiredTitle: ElementFinder = element(by.css('.card-title'));
    export const oldPass: ElementFinder = element(by.css('#user-old-password'));
    export const newPass: ElementFinder = element(by.css("[name='password']"));
    export const newPass2: ElementFinder = element(by.css("input[ng-model='vm[\'repeatPassword\']']"));
    export const changePass: ElementFinder = element(by.css('.btn-primary'));
    export const returnToLoginPage: ElementFinder = element(by.css('.btn-primary'));



    // Cookie bar
    export const cookieBarContent: ElementFinder = element(by.css('div.ta-bind)'));
    export const moreInfo: ElementFinder = element(by.css('.primary'));
    export const gotIt: ElementFinder = element(by.css('.btn-sm'));
    export const cookieTitle: ElementFinder = element(by.css('h5'));
    export const cookieXClose: ElementFinder = element(by.css("span[aria-hidden='true']"));
    export const cookiePopUpContent: ElementFinder = element(by.css("div[ng-if='!vm.policyLoading'] span:nth-of-type(1) > b > .NormalTextRun"));

    //  Footer
    export const cookiePolicyFooter: ElementFinder =
        element(by.css("a[ui-sref='cms.CMS_COOKIE_POLICY']"));
    export const termsAndConditionsFooter: ElementFinder =
        element(by.css("a[ui-sref='cms.CMS_TERMS']"));
    export const privacyPolicyFooter: ElementFinder =
        element(by.css("a[ui-sref='cms.CMS_PRIVACY_POLICY']"));
    export const loginFooter: ElementFinder =
        element(by.css("a[ui-sref='login']"));

    //USER MENU
    export const refreshPage: ElementFinder = element(by.css(".fa-sync"));
    export const chooseLanguage: ElementFinder = element(by.css("li.dropdown-language > .dropdown-toggle > .flag-icon"));

    export const userMenu: ElementFinder = element(by.css('a.dropdown-user-link > span'))
    export const logout: ElementFinder = element(by.css("a[ng-click='vm.logout()']"))
    //edit
    export const editUser: ElementFinder = element(by.css("a[ui-sref='user.settings.editProfile()']"))
    export const changePassMenu: ElementFinder = element(by.css("a[ui-sref='user.settings.changePassword(vm.$stateParams)']"))
    export const saveMessage: ElementFinder = element(by.css("a[ui-sref='user.settings.changePassword(vm.$stateParams)']"))
    export const savedMessage: ElementFinder = element(by.css(".toast-container"))

    // SALES MENU
    export const menuSales: ElementFinder = element(by.css("a[ui-sref='leads()']"))
    export const salesLead: ElementFinder = element(by.css("a[ui-sref='leads.leads()']"))
    export const salesOffer: ElementFinder = element(by.css(".menu-item[ui-sref='leads.offers()']"));
    export const salesContract: ElementFinder = element(by.css("a[ui-sref='leads.contracts()']"))
    export const salesAudit: ElementFinder = element(by.css("a[ui-sref='leads.audits()']"));

    //Main Menu
    export const dashboard: ElementFinder = element(by.css("a[ui-sref='home']"));
    export const communication: ElementFinder = element(by.css("a[ui-sref='mails'] > .menu-title"));
    export const orders: ElementFinder = element(by.xpath("//h4[contains(text(),'Orders')]"))
    export const service: ElementFinder = element(by.css("a[ui-sref='services'] > .menu-title"));
    export const API: ElementFinder = element(by.css("a[ui-sref='api'] > .menu-title"));
    export const contact: ElementFinder = element(by.css("a[ui-sref='cms.CMS_CONTACT'] > .menu-title"));
    export const panelSettings: ElementFinder = element(by.css("a[ui-sref='panelSettings()'] > .menu-title"));
    export const moreMenu: ElementFinder = element(by.css(".fa-chevron-right"))
    //Menu Title
    export const leadsTitle: ElementFinder = element(by.css('.card-title'));
    export const offerTitle: ElementFinder = element(by.css('.card-title'));
    export const contractTitle: ElementFinder = element(by.css('.card-title'));
    export const auditTitle: ElementFinder = element(by.css('.card-title'));
    export const accountsTitle: ElementFinder = element(by.css('.card-title'));
    export const communicationTitle: ElementFinder = element(by.css("span[ng-if='::$last']"));
    export const ordersTitle: ElementFinder = element(by.css('.card-title'));
    export const serviceTitle: ElementFinder = element(by.css('.card-title'));
    export const APITitle: ElementFinder = element(by.css('.card-title'));
    export const contactTitle: ElementFinder = element(by.css('.card-title'));
    export const NPTitle: ElementFinder = element(by.css('.card-title'));
    export const panelSettingsTitle: ElementFinder = element(by.css('menu-header'));


    //acounts
    export const accounts: ElementFinder = element(by.css("a[ui-sref='clients()'] > .menu-title"));
    export const addNewClient: ElementFinder = element(by.css("button[ng-click='vm.openClientModal()']"));
    export const newClientTitle: ElementFinder = element(by.css("form[name='vm.clientForm'] .modal-title"));
    export const clientCountry: ElementFinder = element(by.xpath("//select[@id='company-country']"))
    export const clientPL: ElementFinder = element(by.xpath("//option[.='Poland']"))
    export const clientGER: ElementFinder = element(by.xpath("//option[.='Germany']"))
    export const clientUS: ElementFinder = element(by.xpath("//option[.='United States']"))
    export const clientDEN: ElementFinder = element(by.xpath("//option[.='Denmark']"))
    export const clientIRE: ElementFinder = element(by.xpath("//option[.='Ireland']"))
    export const clientFR: ElementFinder = element(by.xpath("//option[.='France']"))
    export const clientUK: ElementFinder = element(by.xpath("//option[.='United Kingdom']"))
    export const clientFrenchGuiana: ElementFinder = element(by.xpath("//option[.='French Guiana']"))
    export const clientNewTest: ElementFinder = element(by.xpath("//option[.='Test']"))
    export const VatID: ElementFinder = element(by.css('#company-vat-id'));
    export const clientCurrency: ElementFinder = element(by.id('company-currency'));
    export const clientLanguage: ElementFinder = element(by.id('company-locale'));
    export const clientTimezone: ElementFinder = element(by.id('company-timezone'));
    export const clientCompanyName: ElementFinder = element(by.id('company-name'));
    export const saveClient: ElementFinder = element(by.css("button[type='submit']"));
    export const newCompanyOnList: ElementFinder = element(by.css("tbody > tr:nth-of-type(1) > td:nth-of-type(1)"));
    export const editNewClient: ElementFinder = element(by.xpath("//tbody[1]/tr[1]//div[@class='actions-desktop']"))
    export const newClientName: ElementFinder = element(by.xpath("//h1[.='Test Heisee']"))
    export const basicInfo: ElementFinder = element(by.xpath("//h4[.='Basic informations']"))
    export const sortByDateUp: ElementFinder = element(by.css('th:nth-of-type(5)'))
    export const sortByDateDown: ElementFinder = element(by.css('th:nth-of-type(5)'));
    export const closeXClientWindows: ElementFinder = element(by.css("div[analytics-event='vm.client.id ? \'CLIENTS_EDIT_CLIENT\' : \'CLIENTS_ADD_CLIENT\''] [aria-hidden='true']"));



    //client adresess
    export const addAdress: ElementFinder = element(by.css("dd[ng-if='!vm.mainAddress'] > [ui-sref='clients.view.addresses({ companyId: vm.client.id })']"))
    export const adressesMenu: ElementFinder = element(by.css(".text-uppercase"))
    export const mainCompanyFullName: ElementFinder = element(by.css("div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(1) company-addresses-form:nth-of-type(1) > div:nth-of-type(1) input:nth-of-type(1)"))
    export const mainCompanyCountry: ElementFinder =
        element(by.css("div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(1) div:nth-of-type(1) > select:nth-of-type(1)"))
    export const mainCompanyRegion: ElementFinder = element(by.model('vm.address.region'));
    export const mainCompanyStreet: ElementFinder = element(by.css("div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(1) div:nth-of-type(3) > div:nth-of-type(1) > input:nth-of-type(1)"))
    export const mainCompanyNumber: ElementFinder = element(by.css("div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(1) div:nth-of-type(3) > div:nth-of-type(2) > input:nth-of-type(1)"))
    export const mainCompanyZipCode: ElementFinder = element(by.xpath("//form[@class='ng-invalid ng-invalid-required ng-dirty ng-valid-parse']//div[1]/input[@class='form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required']"))
    export const mainCompanyCity: ElementFinder = element(by.css("div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(1) div:nth-of-type(4) > div:nth-of-type(2) > input:nth-of-type(1)"))
    export const mainCompanyInfo: ElementFinder = element(by.css("div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(1) textarea:nth-of-type(1)"))

    export const contactCompanyFullName: ElementFinder = element(by.css("div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) company-addresses-form:nth-of-type(1) > div:nth-of-type(1) input:nth-of-type(1)"))
    export const contactCompanyStreet: ElementFinder = element(by.css("div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(3) > div:nth-of-type(1) > input:nth-of-type(1)"))
    export const contactCompanyNumber: ElementFinder = element(by.css("div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(3) > div:nth-of-type(2) > input:nth-of-type(1)"))
    export const contactCompanyZipCode: ElementFinder = element(by.css("div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(4) > div:nth-of-type(1) > input:nth-of-type(1)"))
    export const contactCompanyCity: ElementFinder = element(by.css("div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) div:nth-of-type(4) > div:nth-of-type(2) > input:nth-of-type(1)"))
    export const contactCompanyInfo: ElementFinder = element(by.css("div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) textarea:nth-of-type(1)"))
    export const backToKK: ElementFinder = element(by.css("a[ui-sref='clients.view({ companyId: vm.client.id })']"))
    export const contactMenu: ElementFinder = element(by.css("a[ui-sref='clients.view.contacts({ companyId: vm.client.id })'] .card-title"))
    export const addNewContact: ElementFinder = element(by.css(".btn-primary"))
    export const newContactName: ElementFinder = element(by.css("input[maxlength='256']"))
    export const contactMail: ElementFinder = element(by.css("input[type='email']"))
    export const contactTel: ElementFinder = element(by.css("input[minlength='9']"))
    export const contactInfo: ElementFinder = element(by.css("input[maxlength='1024']"))
    export const contactHR: ElementFinder = element(by.xpath("//label[.='HR']"))
    export const contactAccounting: ElementFinder = element(by.xpath("//label[.='Accounting']"))
    export const saveKKContact: ElementFinder = element(by.css("button[type='submit']"))


    export const PolandClientCountry: ElementFinder =
        element(by.xpath("//div[@class='clients-client-guardians']/div[@class='row']/div[1]//option[.='Poland']"))
    export const dolnoslaskieClientRegion: ElementFinder =
        element(by.xpath("//form[@class='ng-invalid ng-invalid-required ng-dirty ng-valid-parse']//option[.='dolnośląskie']"))
    export const PolandMailingCountry: ElementFinder =
        element(by.xpath("//div[@class='clients-client-guardians']/div[@class='row']/div[2]//option[.='Poland']"))
    export const dolnoslaskieMailingRegion: ElementFinder = element(by.xpath("//form[@class='ng-invalid ng-invalid-required ng-dirty ng-valid-parse']//option[.='dolnośląskie']"))


    export const contactMarketing: ElementFinder = element(by.xpath("//label[.='Marketing']"))
    //PL
    export const PolandClient: ElementFinder = element(by.xpath("//select[@class='custom-select ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched']/option[.='Poland']"))
    export const DLClient: ElementFinder = element(by.xpath("//select[@class='custom-select ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched']/option[.='dolnośląskie']"))

    export const GermanyClient: ElementFinder = element(by.xpath("//select[@class='custom-select ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched']/option[.='Germany']"))
    export const USAClient: ElementFinder = element(by.xpath("//select[@class='custom-select ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched']/option[.='United States']"))
    export const DenmarkClient: ElementFinder = element(by.xpath("//select[@class='custom-select ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched']/option[.='Denmark']"))
    export const IrelandClient: ElementFinder = element(by.xpath("//select[@class='custom-select ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched']/option[.='Ireland']"))
    export const FranceClient: ElementFinder = element(by.xpath("//select[@class='custom-select ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched']/option[.='France']"))
    export const UKClient: ElementFinder = element(by.xpath("//select[@class='custom-select ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched']/option[.='United Kingdom']"))
    export const FRGUIClient: ElementFinder = element(by.xpath("//select[@class='custom-select ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched']/option[.='French Guiana']"))
    export const TestCountryClient: ElementFinder = element(by.xpath("//select[@class='custom-select ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched']/option[.='Test']"))

    export const saveMainAdress: ElementFinder =
        element(by.css("div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(1) button:nth-of-type(1)"))
    export const saveContactAdress: ElementFinder =
        element(by.css("div.clients-client-guardians > div:nth-of-type(2) > div:nth-of-type(2) button:nth-of-type(1)"))

    //WIDGET
    //add
    export const addWidget: ElementFinder = element(by.css('button.btn-white > .fas'));
    export const note: ElementFinder = element(by.css('div.list-group > a:nth-of-type(1)'));
    export const checkList: ElementFinder = element(by.css('div.list-group > a:nth-of-type(2)'));
    export const generatedCounts: ElementFinder = element(by.css('div.list-group > a:nth-of-type(3)'));
    export const servideBudgets: ElementFinder = element(by.css('div.list-group > a:nth-of-type(4)'));
    export const services: ElementFinder = element(by.css('div.list-group > a:nth-of-type(5)'));
    export const servicesDetail: ElementFinder = element(by.css('div.list-group > a:nth-of-type(6)'));
    //Pop-up
    export const cancelWidget: ElementFinder = element(by.css('.btn-secondary'));
    export const cancelWidgetPopUp: ElementFinder = element(by.css('confirm-modal>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2)'))
    export const cancelWidgetNoButton: ElementFinder = element(by.css('.btn-danger'));
    export const cancelWidgetYesButton: ElementFinder = element(by.css('.btn-link'));
    export const saveWidget: ElementFinder = element(by.css('.btn-success'));
    //widget type
    export const checkListWidget: ElementFinder = element(by.css('div.gridster li:nth-of-type(2) .card-title'));
    export const generatedCountsWidget: ElementFinder = element(by.css('div.gridster li:nth-of-type(3) .card-title'));
    export const servideBudgetsWidget: ElementFinder = element(by.css('div.gridster li:nth-of-type(6) .card-title'));
    export const servicesWidget: ElementFinder = element(by.css('div.gridster li:nth-of-type(5) .card-title'));
    export const servicesDetailWidget: ElementFinder = element(by.css('div.gridster li:nth-of-type(6) .card-title'));
    export const noteWidget: ElementFinder = element(by.css('div.gridster li:nth-of-type(1) .card-title'));
    export const checkListWidgetDelete: ElementFinder = element(by.xpath("//div[@class='gridster gridster-desktop gridster-loaded editable']//li[6]//i[@class='fas fa-times text-danger']"));
    export const generatedCountsWidgetDelete: ElementFinder = element(by.xpath("//div[@class='gridster gridster-desktop gridster-loaded editable']//li[2]//i[@class='fas fa-times text-danger']"));
    export const servideBudgetsWidgetDelete: ElementFinder = element(by.xpath("//div[@class='gridster gridster-desktop gridster-loaded editable']//li[5]//i[@class='fas fa-times text-danger']"));
    export const servicesWidgetDelete: ElementFinder = element(by.xpath("//div[@class='gridster gridster-desktop gridster-loaded editable']//li[1]//i[@class='fas fa-times text-danger']"));
    export const servicesDetailWidgetDelete: ElementFinder = element(by.xpath("//div[@class='gridster gridster-desktop gridster-loaded editable']//li[4]//i[@class='fas fa-times text-danger']"));
    export const noteWidgetDelete: ElementFinder = element(by.xpath("//div[@class='gridster gridster-desktop gridster-loaded editable']//li[3]//i[@class='fas fa-times text-danger']"));
    export const noteColour: ElementFinder = element(by.css('home>div:nth-of-type(1)>ul>li:nth-of-type(3)>widget>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>i'))
    export const noteRed: ElementFinder = element(by.css('home>div:nth-of-type(1)>ul>li:nth-of-type(3)>widget>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(8)'))

    //CHOOSE PARTNER
    export const partnerList: ElementFinder = element(by.css('span[ng-switch-default]'));
    export const sunSPartner: ElementFinder = element(by.css("div[ng-click='$event.stopPropagation()'] > a:nth-of-type(1) > [label='o.label']"));
    export const sunSPartnerTitle: ElementFinder = element(by.xpath("//strong[.='Sunrise System sp. z o.o. sp. k.']"))
    element(by.css("div[ng-click='$event.stopPropagation()'] > a:nth-of-type(1) > [label='o.label']"));
    export const heisePartner: ElementFinder = element(by.css("div[ng-click='$event.stopPropagation()'] > a:nth-of-type(2) > [label='o.label']"));
    export const heisePartnerTitle: ElementFinder = element(by.xpath("//strong[.='Heise Media Service GmbH & Co. KG']"))
    export const grupaRMFPartner: ElementFinder = element(by.css("div[ng-click='$event.stopPropagation()'] > a:nth-of-type(5) > [label='o.label']"));
    export const grupaRMFPartnerTitle: ElementFinder = element(by.xpath("//strong[.='Grupa RMF Sp. z o.o. sp. k.']"))
    element(by.css("div[ng-click='$event.stopPropagation()'] > a:nth-of-type(5) > [label='o.label']"));
    export const testPartner: ElementFinder = element(by.css("div[ng-click='$event.stopPropagation()'] > a:nth-of-type(6) > [label='o.label']"));
    export const testPartnerTitle: ElementFinder = element(by.xpath("//strong[.='Test Partner White Label']"))
    export const bauerPartner: ElementFinder = element(by.css("div[ng-click='$event.stopPropagation()'] > a:nth-of-type(4) > [label='o.label']"));
    export const bauerPartnerTitle: ElementFinder = element(by.xpath("//strong[.='Bauer Consumer Media Ltd']"))
    export const backToPriceList: ElementFinder = element(by.xpath("//a[.='Price lists']"))
    //Partner Adress
    export const companyFullName: ElementFinder = element(by.css("input[ng-model='vm.address.fullName']"));

    //User Group

    export const userGroup: ElementFinder =
        element(by.css("nav-tab[ui-sref='panelSettings.config.userGroups(vm.$stateParams)']"))
    export const userGroupTitle: ElementFinder = element(by.css("h4.card-title"));
    export const addUserGroup: ElementFinder = element(by.css('.btn-primary'));
    export const groupID: ElementFinder = element(by.css('#userGroup_label'));
    export const priviligeList: ElementFinder = element(by.css('extended-select#userGroup_privilege > div'));
    export const privilageName: ElementFinder = element(by.css('input[ng-model="ctrl.search"]'))
    export const choosePrivilege: ElementFinder = element(by.className('dropdown-item d-flex align-items-center selected'))
    export const saveGroup: ElementFinder = element(by.css('.btn-primary'));
    export const backToPrivGroup: ElementFinder = element(by.css("button[role='button']"));
    export const viewPrvilege: ElementFinder = element(by.xpath("//tr[7]//div[@class='actions-desktop']//i[@class='fas fa-eye']"))
    //priv existing user
    export const addExistingUser: ElementFinder = element(by.className("btn btn-primary")).element(by.xpath("//button[.='Add existing user']"))
    export const showUserList: ElementFinder =
        element(by.xpath("//div[@class='user-select-avatar']/avatar[1]"))

    //  qelement(by.css('dynamic-field[ng-model="vm.existingUser.userLogin"]>relation-select[ng-model="vm.ngModel"]>extended-select[ng-model="vm.objectModel"]>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(3)'));

    export const addUserToPrivilidge: ElementFinder = element(by.css("input[placeholder='Choose an option']"))
    export const choosePartnerSales: ElementFinder = element(by.xpath("//u[contains(text(),'bsp.ext.test1@spis-firm.biz')]"));
    export const choosePartner2: ElementFinder = element(by.css(".show.dropdown-menu [label='o.label']"));
    export const saveUserPrivilidge: ElementFinder = element(by.css("form[name='vm.existingUserForm'] .btn-success"));
    export const saveNewUser: ElementFinder =
        element(by.css("button[type='submit']"))

    // priv new user
    export const addNewUserToPriviledge: ElementFinder = element(by.css("button[ng-click='vm.openNewUserModal()']"))
    export const cancelNewUser: ElementFinder = element(by.css("form[ng-submit='vm.saveNewUserForm()'] > .modal-footer > [type='button']"))
    export const pricelists: ElementFinder = element(by.css("nav-tab[ui-sref='panelSettings.view.valuationCloud(vm.$stateParams)']"));
    export const advancedSettingsTitle: ElementFinder = element(by.css("html > body > app-private-root > div > div > div > ui-view > partner-view > div > sub-menu-layout > div > div > div > div > h3 > menu-header"));
    export const partnerUsers: ElementFinder =
        element(by.css("nav-tab[ui-sref='panelSettings.config.users(vm.$stateParams)']"))
    // element(by.css("nav-tab[ui-sref='panelSettings.config.users(vm.$stateParams)']"));
    export const advConfTitle: ElementFinder = element(by.xpath("//small[.='Advanced configuration']"));
    export const vievPartnerAdress: ElementFinder =
        element(by.css("nav-tab[ui-sref='panelSettings.view.addresses(vm.$stateParams)']"));
    export const adressTitle: ElementFinder = element(by.css("partner-addresses[addresses='::$resolve.addresses'] > .row > div:nth-of-type(1) .card-title"));
    export const partnerCompanyName: ElementFinder = element(by.css("input[ng-model='vm.address.fullName']"));
    export const partnerStreet: ElementFinder = element(by.css("input[ng-model='vm.address.street']"));
    export const partnerStreetNR: ElementFinder =
        element(by.css("input[ng-model='vm.address.streetNo']"))
    export const partnerCity: ElementFinder = element(by.css("input[ng-model='vm.address.city']"));
    export const partnerZIP: ElementFinder = element(by.css("input[ng-model='vm.address.postCode']"));
    export const partnerInfo: ElementFinder = element(by.css("partner-addresses[addresses='::$resolve.addresses'] > div:nth-of-type(1) > div:nth-of-type(1) textarea:nth-of-type(1)"));
    // PARTNER COUNTRY
    export const partnerCountry: ElementFinder = element(by.css("select[ng-model='vm.address.country']"))
    export const newPartnerCountry: ElementFinder = element(by.css("select[ng-model='vm.address.country']")).element(by.xpath("//option[.='Test country 2']"));
    export const partnerRegion: ElementFinder = element(by.css("select[ng-model='vm.address.region']"));

    export const Poland: ElementFinder =
        element(by.css("select[ng-model='vm.address.country']")).element(by.xpath("//option[.='Poland']"))
    export const Germany: ElementFinder = element(by.css("select[ng-model='vm.address.country']")).element(by.xpath("//option[.='mazowieckie']"));
    export const UnitedStates: ElementFinder = element(by.css("select[ng-model='vm.address.country']")).element(by.xpath("//option[.='mazowieckie']"));
    export const Denmark: ElementFinder = element(by.css("select[ng-model='vm.address.country']")).element(by.xpath("//option[.='mazowieckie']"));
    export const Ireland: ElementFinder = element(by.css("select[ng-model='vm.address.country']")).element(by.xpath("//option[.='mazowieckie']"));
    export const France: ElementFinder = element(by.css("select[ng-model='vm.address.country']")).element(by.xpath("//option[.='mazowieckie']"));
    export const UnitedKingdom: ElementFinder = element(by.css("select[ng-model='vm.address.country']")).element(by.xpath("//option[.='mazowieckie']"));
    export const French: ElementFinder = element(by.css("select[ng-model='vm.address.country']")).element(by.xpath("//option[.='mazowieckie']"));
    // POLAND REGION

    export const dolnoslaskie: ElementFinder = element(by.css("select[ng-model='vm.address.region']")).element(by.xpath("//option[.='mazowieckie']"));
    export const kujawsko_pomorskie: ElementFinder = element(by.css("select[ng-model='vm.address.region']")).element(by.xpath("//option[.='mazowieckie']"));
    export const lubelskie: ElementFinder = element(by.css("select[ng-model='vm.address.region']")).element(by.xpath("//option[.='mazowieckie']"));
    export const lubuskie: ElementFinder = element(by.css("select[ng-model='vm.address.region']")).element(by.xpath("//option[.='mazowieckie']"));
    export const łódzkie: ElementFinder = element(by.css("select[ng-model='vm.address.region']")).element(by.xpath("//option[.='mazowieckie']"));
    export const małopolskie: ElementFinder = element(by.css("select[ng-model='vm.address.region']")).element(by.xpath("//option[.='mazowieckie']"));
    export const mazowieckie: ElementFinder = element(by.css("select[ng-model='vm.address.region']")).element(by.xpath("//option[.='mazowieckie']"));
    export const opolskie: ElementFinder = element(by.css("select[ng-model='vm.address.region']")).element(by.xpath("//option[.='mazowieckie']"));
    export const podkarpackie: ElementFinder = element(by.css("select[ng-model='vm.address.region']")).element(by.xpath("//option[.='mazowieckie']"));
    export const podlaskie: ElementFinder = element(by.css("select[ng-model='vm.address.region']")).element(by.xpath("//option[.='mazowieckie']"));
    export const pomorskie: ElementFinder = element(by.css("select[ng-model='vm.address.region']")).element(by.xpath("//option[.='mazowieckie']"));
    export const śląskie: ElementFinder = element(by.css("select[ng-model='vm.address.region']")).element(by.xpath("//option[.='mazowieckie']"));
    export const świętokrzyskie: ElementFinder = element(by.css("select[ng-model='vm.address.region']")).element(by.xpath("//option[.='mazowieckie']"));
    export const warmińsko_mazurskie: ElementFinder = element(by.css("select[ng-model='vm.address.region']")).element(by.xpath("//option[.='mazowieckie']"));
    export const wielkopolskie: ElementFinder = element(by.css("select[ng-model='vm.address.region']")).element(by.xpath("//option[.='mazowieckie']"));
    export const zachodniopomorskie: ElementFinder = element(by.css("select[ng-model='vm.address.region']")).element(by.xpath("//option[.='mazowieckie']"));
    export const savePartnerAdress: ElementFinder = element(by.css(".btn-primary"))

    // domain 
    export const partnerDomain: ElementFinder =
        element(by.css("nav-tab[ui-sref='panelSettings.config.domains(vm.$stateParams)']"))
    export const partnerDomainInput: ElementFinder = element(by.css('form[name="vm.domainForm0"]>fieldset:nth-of-type(1)>input[ng-model="field.name"]'));
    export const sslCert: ElementFinder = element(by.xpath("//input[@class='form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched']"));
    export const removeButton: ElementFinder = element(by.css('div.show .btn-link'));


    export const platformMenu: ElementFinder = element(by.xpath("//card-title[.='Platform']"));
    export const auditMenu: ElementFinder = element(by.xpath("//card-title[.='Audit']"))
    export const serviceMenu: ElementFinder = element(by.xpath("//card-title[.='Service']"))
    export const saveDomain: ElementFinder = element(by.css('div.show .btn-primary'));

    // MailBOX
    export const partnerEmail: ElementFinder = element(by.xpath("//nav-tab[.='Email accounts']"))
    export const addNewMail: ElementFinder =
        element(by.css("partner-emails[emails='::$resolve.emails'] > div:nth-of-type(3) .card-header .btn"))
    export const showMailboxButtons: ElementFinder = element(by.css('td:nth-of-type(1)'))
    export const editMailbox: ElementFinder =
        element(by.css('td:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1)>a:nth-of-type(1)>i'));
    export const deleteMailbox: ElementFinder =
        element(by.css('td[actions] .actions-desktop .far'));

    export const confirmDelete: ElementFinder = element(by.css("partner-emails[emails='::$resolve.emails'] tr:nth-of-type(2) div:nth-of-type(1) > a:nth-of-type(2) > i:nth-of-type(1)"));

    export const mailboxesTitle: ElementFinder = element(by.css('partner-emails>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>h4'));
    export const mailboxPopUpTitle: ElementFinder = element(by.xpath("//h5[.='Create email mailbox']"))
    export const inboxPass: ElementFinder = element(by.css('#email-in-password'));
    export const emailName: ElementFinder = element(by.css('#email-name'));
    export const authType: ElementFinder = element(by.css('#email-auth-type'));
    export const authTypeLogin: ElementFinder = element(by.model('vm.email.authType')).element(by.css('option[value="number:1"]'))
    export const authTypeOauth: ElementFinder = element(by.model('vm.email.authType')).element(by.css('option[value="number:2"]'))
    export const inboxServer: ElementFinder = element(by.id('email-in-type'));
    export const inboxServerImap: ElementFinder = element(by.id('email-in-type')).element(by.css('option[value="number:1"]'));
    export const inboxServerPop3: ElementFinder = element(by.id('email-in-type')).element(by.css('option[value="number:2"]'));

    export const inboxLoginName: ElementFinder = element(by.css('#email-in-login'));
    export const inboxHostName: ElementFinder = element(by.css('#email-in-host'));
    export const outboxHostName: ElementFinder = element(by.css('#email-out-host'));
    export const inboxPort: ElementFinder = element(by.css("#email-in-port"));
    export const encryptionType: ElementFinder = element(by.css("#email-in-encryption"));
    export const outgoingPass: ElementFinder = element(by.css("#email-out-password"));
    export const encTSLType: ElementFinder = element(by.css("#email-in-encryption")).element(by.css('option[value="number:1"]'));
    export const encSSLType: ElementFinder = element(by.css("#email-in-encryption")).element(by.css('option[value="number:2"]'));
    export const encNONEType: ElementFinder = element(by.css("#email-in-encryption")).element(by.css('option[value="number:3"]'));

    export const outboxLogin: ElementFinder = element(by.css("#email-out-login"));
    export const outPort: ElementFinder = element(by.css("#email-out-port"));
    export const autorizationType: ElementFinder = element(by.css("#email-out-encryption"));
    export const autTSLType: ElementFinder = element(by.css("#email-out-encryption")).element(by.css('option[value="number:1"]'));
    export const autSSLType: ElementFinder = element(by.css("#email-out-encryption")).element(by.css('option[value="number:2"]'));
    export const autNONEType: ElementFinder = element(by.css("#email-out-encryption")).element(by.css('option[value="number:3"]'));
    export const saveMailbox: ElementFinder = element(by.css("button[type='submit']"));
    export const mailboxCreated: ElementFinder =
        element(by.xpath("//td[.='bsp@widzialni.pl']"))
    export const mailboxDeleted: ElementFinder = element(by.xpath("//partner-emails[1]/div[3]//div[.='Results: 0  (Filter from: 0)']"))

    //currency
    export const addNewCurrency: ElementFinder = element(by.css("button[ng-click='vm.openModal()']"))
    export const currencyID: ElementFinder = element(by.css("#currency-code"))
    export const saveNewCurrency: ElementFinder = element(by.css("button[type='submit']"))
    export const created1stCurrency: ElementFinder = element(by.partialLinkText("Test"));
    export const currencyName: ElementFinder =
        element(by.css("#currency-name"))
    // PRICELIST 
    export const pricelistMenu: ElementFinder = element("a[ui-sref='panelSettings.view.valuationCloud(vm.$stateParams)']");
    export const pricelistTitle: ElementFinder = element(by.xpath("//h4[contains(text(),'List of price lists')]"));
    export const pricelistElements: ElementFinder = element(by.xpath("//h4[contains(text(),'Price list elements')]"));

    export const addPriceList: ElementFinder = element(by.css(".btn-primary"));
    export const pricelistName: ElementFinder = element(by.id("valuation-name"));
    export const startDate: ElementFinder = element(by.css("datepicker#valuation-valid-from .form-control"));
    export const currencyPriceList: ElementFinder = element(by.id("valuation-currency"));
    export const polishZloty: ElementFinder = element(by.id("valuation-currency")).element(by.xpath("//option[contains(text(),'Polish Zloty')]"));
    export const euro: ElementFinder = element(by.id("valuation-currency")).element(by.xpath("//option[contains(text(),'Euro')]"));
    export const pounds: ElementFinder = element(by.id("valuation-currency")).element(by.xpath("//option[contains(text(),'British Pound')]"));
    export const newCurrency: ElementFinder =
        element(by.partialLinkText('Test'));
    export const dollar: ElementFinder = element(by.id("valuation-currency")).element(by.xpath("//option[contains(text(),'US Dollar')]"));
    export const editAsCSV: ElementFinder = element(by.css("button[ng-click='vm.toggleCSV();$event.stopPropagation()']"));
    export const CSVEditor: ElementFinder = element(by.css('#valuation-items-csv'));
    export const saveCSV: ElementFinder = element(by.css("button[ng-click='vm.save()']"));
    export const savePriceList: ElementFinder = element(by.css("button[ng-click='vm.save()']"))
    //CSV MENU
    export const staticPages: ElementFinder = element(by.css("nav-tab[ui-sref='panelSettings.config.cms(vm.$stateParams)']"));
    export const cookiePolicy: ElementFinder = element(by.css("a[href='/app/panel-settings/config/cms/3']"));
    export const contactCSV: ElementFinder = element(by.css("a[href='/app/panel-settings/config/cms/4']"))
    export const privacyPolicy: ElementFinder = element(by.css("a[href='/app/panel-settings/config/cms/5']"))
    export const termsAndConditions: ElementFinder = element(by.css("a[href='/app/panel-settings/config/cms/6']"))
    export const privacyPolicyClient: ElementFinder = element(by.css("a[href='/app/panel-settings/config/cms/1']"))
    export const termsAndConditionsClient: ElementFinder = element(by.css("a[href='/app/panel-settings/config/cms/2']"))
    export const backToCSVList: ElementFinder = element(by.css(".btn-go-back"))

    //cookie
    export const cookieTitleName: ElementFinder = element(by.id('cms-name'));
    export const cookieContent: ElementFinder = element(by.model('html'))
    export const saveCookie: ElementFinder = element(by.css("button[type='submit']"));
    //Language
    export const englishLanguage: ElementFinder = element(by.className('nav-link')).element(by.xpath("//a[.='English']"));
    export const polishLanguage: ElementFinder = element(by.className('nav-link')).element(by.xpath("//a[.='Polish']"))
    export const germanLanguage: ElementFinder = element(by.className('nav-link')).element(by.xpath("//a[.='German']"));
    export const frenchLanguage: ElementFinder = element(by.className('nav-link')).element(by.xpath("//a[.='French']"));
    //contact
    export const contactTitleName: ElementFinder = element(by.id('cms-name'));
    export const contactContent: ElementFinder = element(by.model('html'))
    export const saveContact: ElementFinder = element(by.css("button[type='submit']"));
    //Privacy Policy Partner 
    export const privacyPolicyTitleName: ElementFinder = element(by.id('cms-name'));
    export const privacyPolicyContent: ElementFinder = element(by.model('html'))
    export const saveprivacyPolicy: ElementFinder = element(by.css("button[type='submit']"));
    export const GDPRPolicy: ElementFinder = element(by.css("#cms-rodo-text"));
    export const GDPRRequiredCheckbox: ElementFinder = element(by.className("custom-control-label"));
    //Privacy Policy Client 
    export const privPolicyClientName: ElementFinder = element(by.id('cms-name'));
    export const privPolicyClientContent: ElementFinder = element(by.model('html'))
    export const savePPClient: ElementFinder = element(by.css("button[type='submit']"));
    export const GDPRClientPolicy: ElementFinder = element(by.css("#cms-rodo-text"));
    export const GDPRClientRequiredCheckbox: ElementFinder = element(by.className("custom-control-label"));
    //TermsAndConditions - Partner
    export const TermsTitleName: ElementFinder = element(by.id('cms-name'));
    export const termsContent: ElementFinder = element(by.model('html'))
    export const saveTerms: ElementFinder = element(by.css("button[type='submit']"));
    export const GDPRPTerms: ElementFinder = element(by.css("#cms-rodo-text"));
    //TermsAndConditions - Client

    //USER MENU
    export const addNewUser: ElementFinder = element(by.css('button.btn-sm'));
   
    //USER POPUP
    export const userEmail: ElementFinder = element(by.css("input[type='email']"));
    export const userName: ElementFinder = element(by.css("input[ng-model='vm.userModel.firstName']"));
    export const userSurname: ElementFinder = element(by.css("input[ng-model='vm.userModel.lastName']"));
    export const userTelephone: ElementFinder = element(by.css("input[ng-model='vm.userModel.phone']"));
    export const userPriviligeList: ElementFinder = element(by.css(".flex-wrap"));
    export const adminUser: ElementFinder = element(by.css(".show.dropdown-menu > a:nth-of-type(1)"));
    export const fullEntity: ElementFinder = element(by.css(".show.dropdown-menu > a:nth-of-type(5) > [label='o.label']"));
    export const salesUser: ElementFinder = element(by.css(".show.dropdown-menu > a:nth-of-type(2) > [label='o.label']"));
    export const csUser: ElementFinder = element(by.css(".show.dropdown-menu > a:nth-of-type(3) > [label='o.label']"));
    export const p_s_m_User: ElementFinder = element(by.xpath("//div[@class='dropdown-menu show']/a[5]/extended-select-mark-result[.='PARTNER_SALES_MANAGER']"))
    export const customId: ElementFinder = element(by.css("input[ng-model='vm.userModel.customId']"));
    export const saveAndCreateNewuser: ElementFinder = element(by.css("form[ng-submit='vm.saveNewUserForm()'] .btn-success"))
    // element(by.css("button[type='submit']")).element(by.xpath("//button[contains(text(),'Save')]"));
    export const userWithP_S_MPrivilidge: ElementFinder = element(by.xpath("//td[contains(text(),'bsp.ext.test18@spis-firm.biz')]"));

    //LEAD
    export const addLeadButton: ElementFinder = element(by.css('.btn-sm'));
    export const addLeadPopUp: ElementFinder = element(by.css("form[name='vm.addDocumentForm'] .modal-title"));
    export const wwwInput: ElementFinder = element(by.css('input[required]'));
    //Cancel 
    export const cancelButton: ElementFinder = element(by.css('button.btn-link'));
    export const Do_you_really_want_to_abandon_all_changes: ElementFinder = element(by.xpath("//h4[contains(text(),'Do you really want to abandon all changes?')]"));
    export const The_changes_you_made_will_be_lost: ElementFinder = element(by.xpath("//div[contains(text(),'The changes you made will be lost.')]"));
    export const closeX: ElementFinder = element(by.xpath("//form[@name='vm.addDocumentForm']//span[.='×']"))
    export const KeepEditing: ElementFinder = element(by.xpath("//button[.='Keep editing']"))

    export const saveLead: ElementFinder = element(by.css("button[type='submit']"));
    export const cancelLeadPopUp: ElementFinder = element(by.css('confirm-modal>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2)'));
    export const leadPartnerList: ElementFinder = element(by.css("extended-select[required='required'] .text-nowrap > .text-nowrap"));
    export const chooseSunS: ElementFinder = element(by.css(".show.dropdown-menu > a:nth-of-type(1) > [label='o.label']"));
    export const showFirstLeadActions: ElementFinder = element(by.css('tbody>tr:nth-of-type(1)>td:nth-of-type(8)'));
    export const createFirstOffer: ElementFinder = element(by.css("tbody > tr:nth-of-type(1) [ui-sref='leads.offers({add: d.id})'] > .fas"));
    export const editFirstLead: ElementFinder = element(by.css('tbody > tr:nth-of-type(1) .primary > .fas'));

    // lead all 
    export const clientName: ElementFinder = element(by.css("dynamic-field[field='full_name'] > .form-control"));
    export const clientVat: ElementFinder = element(by.css("dynamic-field[field='vat_id'] > .form-control"));
    export const contactName: ElementFinder = element(by.css("dynamic-field[field='first_name'] > .form-control"));
    export const contactLastName: ElementFinder = element(by.css("dynamic-field[field='last_name'] > .form-control"));
    export const contactEmail: ElementFinder = element(by.css("dynamic-field[field='email'] > .form-control"));
    export const contactphone: ElementFinder = element(by.css("dynamic-field[field='phone'] > .form-control"));
    export const additionalInfo: ElementFinder = element(by.css("dynamic-field[field='text'] > .form-control"));
    export const site: ElementFinder = element(by.css("dynamic-field[field='site'] > .form-control"));
    export const deletePartner: ElementFinder = element(by.css(".fa-times"));
    export const message_this_field_is_required: ElementFinder =
        element(by.css('html > body > app-private-root > div > div > div > ui-view > ui-view > lead-document > div:nth-of-type(2) > div > div > form > div:nth-of-type(2) > div:nth-of-type(3) > div > document-form > dynamic-fields > div > ng-transclude > dynamic-field > div'));
    export const partnerValidationMessage: ElementFinder = element(by.css("relation-select.was-validated > .invalid-feedback"));

    // table lead 
    export const ID: ElementFinder = element(by.css('th:nth-of-type(1)'));
    export const domain: ElementFinder = element(by.css('th:nth-of-type(2)'));
    export const language: ElementFinder = element(by.css('th:nth-of-type(3)'));
    export const documentType: ElementFinder = element(by.css('th:nth-of-type(4)'));
    export const documentState: ElementFinder = element(by.css('th:nth-of-type(5)'));
    export const author: ElementFinder = element(by.css('th:nth-of-type(6)'));
    export const dataCreated: ElementFinder = element(by.css('th:nth-of-type(7)'));
    export const action: ElementFinder = element(by.css('th:nth-of-type(8)'));
    export const showActionButtons: ElementFinder =
        element(by.css('tbody > tr:nth-of-type(1) > td:nth-of-type(2)'))

    //offer
    export const offerPopUp: ElementFinder = element(by.css("form[name='vm.addDocumentForm'] .modal-title"));
    export const offerDocumentName: ElementFinder = element(by.css("#doc-template"));
    export const deleteLead: ElementFinder = element(by.css(".show.dropdown .text-danger > .fa"));
    export const offerDomain: ElementFinder = element(by.css("dynamic-field[field='domain'] > .form-control"));
    export const getPricesButton: ElementFinder = element(by.css("button.mr-auto"));
    export const sliderChangeprice: ElementFinder = element(by.css('input[ng-model="vm.sliderValue"]'));
    export const increasingPrice: ElementFinder = element(by.css(""));
    export const priceReduction: ElementFinder = element(by.css(""));

    export const downloadDocument: ElementFinder = element(by.css(""));
    export const sendDocument: ElementFinder = element(by.css(""));
    export const cancelOfferPopUp: ElementFinder = element(by.css(""));
    export const closeOfferPopUp: ElementFinder = element(by.css(""));
    export const addOfferButton: ElementFinder = element(by.css(".btn-sm"));
    export const saveOffer: ElementFinder = element(by.css("button[type='submit']"));
    export const domainValidationMessage: ElementFinder = element(by.css("dynamic-field[field='domain'] > .invalid-feedback"));
    export const emptyLeadList: ElementFinder = element(by.css(""));
    export const chooseLead: ElementFinder = element(by.css('input[ng-model="ctrl.search"]'));
    export const showNewOfferActions: ElementFinder = element(by.css('div.vertical-layout.fixed-navbar.bsp-vertical-menu.menu-expanded.menu-hide div.app-content.content:nth-child(3) div.content-wrapper div.card:nth-child(1) div.table-responsive table.table.table-hover.table-striped tbody:nth-child(2) > tr:nth-child(31)'));
    //contract
    export const createFirstContract: ElementFinder =
        element(by.css("tbody > tr:nth-of-type(1) .actions-desktop > [ui-sref='leads.contracts({add: d.id})'] > .fas"));
    export const editFirstOffer: ElementFinder =
        element(by.css('tbody > tr:nth-of-type(1) .actions-desktop .fa-edit'));

    export const sendOfferByEmail: ElementFinder = element(by.css("tbody > tr:nth-of-type(1) .actions-desktop > .primary > .far"));
    export const downloadFirstOffer: ElementFinder = element(by.css("tbody > tr:nth-of-type(1) .actions-desktop .fa-download"));
    export const closeAuthorFilter: ElementFinder = element(by.css(".fa-times"));


    export const productList: ElementFinder = element(by.css("relation-select[target-entity='products'] .text-nowrap > .text-nowrap"))
    export const PROproduct: ElementFinder = element(by.xpath("//div[@class='dropdown-menu show']//extended-select-mark-result[.='Cloud Pro']"))
    export const PLUSproduct: ElementFinder = element(by.xpath("//div[@class='dropdown-menu show']//extended-select-mark-result[.='Cloud plus']"))
    export const BASICproduct: ElementFinder = element(by.xpath("//div[@class='dropdown-menu show']//extended-select-mark-result[.='Cloud Pro']"))
    export const contractStartDate: ElementFinder = element(by.className("form-control ng-pristine ng-valid ng-not-empty ng-valid-required ng-touched"))
    export const contractLength: ElementFinder = element(by.css("dynamic-field[field='contract_length'] .flex-grow-1"))
    export const length24: ElementFinder = element(by.xpath("//a[.='24 months']"))
    export const length12: ElementFinder = element(by.xpath("//a[.='12 months']"))
    export const saveContract: ElementFinder = element(by.css("button[type='submit']"))
    export const activateAndTransfer: ElementFinder = element(by.css("tbody > tr:nth-of-type(1) .actions-desktop .fa-check"))
    export const acceptContract: ElementFinder = element(by.css("tbody > tr:nth-of-type(1) .actions-desktop > [ng-click='vm.contractState(c, true)'] > .fas"))

    //doc state
    export const acceptedState: ElementFinder = element(by.xpath("//td[contains(text(),'Accepted')]"))
    export const createdState: ElementFinder = element(by.xpath("//tbody[1]/tr[1]/td[.='Created']"))
    export const procesingState: ElementFinder = element(by.xpath("//td[.='Processing']"))
    export const waitingForProcessing: ElementFinder = element(by.xpath("//td[.='Waiting for processing']"))
    export const createPdf: ElementFinder = element(by.xpath("//td[.='Ready to create PDF']"))
    export const waitingForReProcessing: ElementFinder = element(by.xpath("//td[.='Waiting for reprocessing']"))
    export const recreatePdf: ElementFinder = element(by.xpath("//td[.='Ready to recreate PDF']"))

    // calendar

    export const open_calender: ElementFinder = element(by.css('datepicker[required] .fa'));
    export const chooseDate: ElementFinder =        element(by.xpath("//th[contains(.,'2021')]"))
    export const pastYear: ElementFinder = element(by.xpath("//table[@class='table table-sm table-datepicker']//tr[1]/th[1]"))
    export const april2019: ElementFinder = element(by.xpath("//td[.='Apr']"))
    export const first: ElementFinder =    element(by.css("tbody[ng-switch='ctrl.displayMode'] > tr:nth-of-type(2) > td:nth-of-type(1)"));


    //TASKS Menu

    export const tasksAdministration: ElementFinder = element(by.css("a[ui-sref='admin.tasks']"));
    export const tasksSubjects: ElementFinder = element(by.css("a[ui-sref='admin.tasks.subjects']"));
    export const addSubjectGroup: ElementFinder = element(by.css(".btn-primary"));

    //Subjects pop up
    export const subjectKey: ElementFinder = element(by.css("input[ng-pattern='^TASK_SUBJECT_GROUP_[A-Z_0-9]{2,}$']"))
    export const SubjectENG: ElementFinder = element(by.css("name-translations[key='vm.subjectGroup.name'] [required='required']"));
    export const SubjectPL: ElementFinder = element(by.css("name-translations[key='vm.subjectGroup.name'] div:nth-of-type(2) .form-control"));
    export const SubjectGER: ElementFinder = element(by.css("name-translations[key='vm.subjectGroup.name'] div:nth-of-type(3) .form-control"));
    export const SubjectFR: ElementFinder = element(by.css("name-translations[key='vm.subjectGroup.name'] div:nth-of-type(4) .form-control"));
    export const chooseModule: ElementFinder = element(by.css("name-translations[key='vm.subjectGroup.name'] .custom-select"));
    export const saveSubject: ElementFinder = element(by.css("form[name='vm.subjectGroupForm'] .btn-success"));

    // ADMINISTRATION MENU

    export const administrationMenu: ElementFinder = element(by.css("a[ui-sref='admin()']"))
    export const addNewCMS: ElementFinder = element(by.css('.btn-primary'));
    export const countryMenu: ElementFinder = element(by.css("a[ui-sref='admin.countries()']"));
    export const cronMenu: ElementFinder = element(by.css("a[ui-sref='admin.cron()']"));
    export const currencyMenu: ElementFinder = element(by.css("a[ui-sref='admin.currencies()']"));
    export const customerServiceteamMenu: ElementFinder = element(by.css("a[ui-sref='admin.customerServiceTeamTypes()']"));
    export const documentsMenu: ElementFinder = element(by.css("a[ui-sref='admin.documents()']"));
    export const dynamicFieldMenu: ElementFinder = element(by.css("a[ui-sref='admin.entityFields()']"));
    export const GSCReport: ElementFinder = element(by.css("a[ui-sref='admin.searchConsoleSchedule()']"));
    export const numberingPatternsMenu: ElementFinder = element(by.css("a[ui-sref='admin.numberingPatterns()']"));
    export const OAUTHMenu: ElementFinder = element(by.css("a[ui-sref='admin.oauthServices()']"));
    export const privilegesMenu: ElementFinder = element(by.css("a[ui-sref='admin.privileges()']"));
    export const productsMenu: ElementFinder = element(by.css("a[ui-sref='admin.products()']"));
    export const tasksMenu: ElementFinder = element(by.css("a[ui-sref='admin.tasks()']"));
    export const translationsMenu: ElementFinder = element(by.css("a[ui-sref='admin.translations()']"));
    export const CMSMenu: ElementFinder = element(by.css("a[ui-sref='admin.cmsTypes()']"));

    // REPORTS MENU
    export const reportMenu: ElementFinder =
        element(by.css("a[ui-sref='admin.reports()']"))
    export const addNewReportTemplate: ElementFinder = element(by.css("button[ui-sref='.add()']"))
    export const searchReoort: ElementFinder = element(by.css("[placeholder='Search...']"))
    export const reportName: ElementFinder = element(by.css("#report-name"))
    export const privliageGroup: ElementFinder = element(by.css(".flex-wrap"))
    export const choosePrivliageGroup: ElementFinder = element(by.xpath("//input[@class='flex-grow-1 ng-pristine ng-untouched ng-valid ng-empty']"))
    export const privliegeSuns: ElementFinder = element(by.xpath("//td[.='Sunrise System sp. z o.o. sp. k.']"))
    export const privilegesHeise: ElementFinder = element(by.xpath("//td[.='Heise']"))
    export const privilegesRMF: ElementFinder = element(by.xpath("//td[.='RMF']"))
    export const privilegesBauer: ElementFinder = element(by.xpath("//td[.='Bauer']"))
    export const privilegesTest: ElementFinder = element(by.xpath("//td[.='Test']"))

    //Users Menu
    export const usersMenu: ElementFinder = element(by.css('li:nth-of-type(17)>a'));
    export const userMenuTitle: ElementFinder = element(by.xpath("//h4[contains(text(),'Users')]"))
    export const superuser: ElementFinder = element(by.xpath("//td[contains(text(),'superuser@sunrisesystem.pl')]"));
    export const adminAddNewUser: ElementFinder = element(by.css("button.btn-sm"))
    export const searchUser: ElementFinder = element(by.css("[placeholder='Search...']"))
    export const userType: ElementFinder = element(by.css("extended-select[ng-model='vm.ngModel'] .flex-grow-1"))
    export const userTypeNormal: ElementFinder = element(by.xpath("//span[contains(text(),'Normal')]"))
    //Admin RMF
    export const fullEntityName: ElementFinder = element(by.xpath("//td[contains(text(),'Test Automation')]"));
    export const adminRMFName: ElementFinder = element(by.xpath("//td[contains(text(),'Admin RMF Test')]"));
    export const adminHEISEName: ElementFinder = element(by.xpath("//td[contains(text(),'Admin Heise Test')]"));
    export const adminBAUERame: ElementFinder = element(by.xpath("//td[contains(text(),'Admin Bauer Test')]"));
    export const fullEntityEmail: ElementFinder = element(by.xpath("//td[contains(text(),'bsp.ext.test4@spis-firm.biz')]"));
    export const adminEmail: ElementFinder = element(by.xpath("//td[contains(text(),'bsp.ext.test1@spis-firm.biz')]"));

    // colored privilages ico
    export const privAdmin: ElementFinder = element(by.xpath("//a[contains(text(),'Partner Admin')]"));
    export const privSales: ElementFinder = element(by.xpath("//a[contains(text(),'Partner Sales')]"));
    export const privCS: ElementFinder = element(by.xpath("//a[contains(text(),'Partner Customer Support')]"));
    export const privS_M: ElementFinder = element(by.xpath("//a[contains(text(),'PARTNER_SALES_MANAGER')]"));
    export const privClientOwner: ElementFinder = element(by.xpath("//a[contains(text(),'Client Owner')]"));
    export const privFullentity: ElementFinder = element(by.xpath("//a[contains(text(),'Fullentity')]"));

    //user actions button   
    export const viewUserIco: ElementFinder = element(by.xpath("//tbody[1]/tr[1]//div[@class='actions-desktop']//i[@class='fas fa-eye']"))
    export const editUserIco: ElementFinder = element(by.css('tbody > tr:nth-of-type(1) .actions-desktop .fa-pencil-alt'));
    export const deactivateUserIco: ElementFinder = element(by.css('tbody > tr:nth-of-type(1) .actions-desktop .fa-times'));
    export const refreshUserIco: ElementFinder = element(by.css('tbody > tr:nth-of-type(1) .actions-desktop .fa-sync'));
    export const masquaradeIco: ElementFinder = element(by.css('tbody > tr:nth-of-type(1) .actions-desktop .fa-sign-in-alt'));
    export const logoutUserIco: ElementFinder = element(by.css('tbody > tr:nth-of-type(1) .actions-desktop .fa-sign-out-alt'));
    //masquarade popup
    export const masqPopUpContext: ElementFinder = element(by.xpath("//h4[contains(text(),'Do you really want to login as this user?')]"));
    export const loginAsUser: ElementFinder = element(by.xpath("//button[contains(text(),'Login as')]"));
    export const cancelLogin: ElementFinder = element(by.xpath("//body/div[1]/confirm-modal[1]/div[1]/div[1]/div[1]/div[2]/button[1]"));
    export const loggedAsHeise: ElementFinder = element(by.xpath("//span[contains(text(),'Test Admin Heise')]"));
  
    //masquarade buttons
    export const viewHeiseAdminIco: ElementFinder =
        element(by.css("td[actions] .actions-desktop .fa-eye"))
    export const editHeiseAdminIco: ElementFinder =
        element(by.css("td[actions] .actions-desktop .fa-pencil-alt"))
    export const deactivateHeiseAdminIco: ElementFinder =
        element(by.css("td[actions] .actions-desktop .fa-times"))
    export const refreshHeiseAdminIco: ElementFinder =
        element(by.css("td[actions] .actions-desktop .fa-sync"))
    export const masquaradeHAIco: ElementFinder =
        element(by.css("td[actions] .actions-desktop .fa-sign-in-alt"))
    export const logoutHeiseAdminIco: ElementFinder =
        element(by.css("td[actions] .actions-desktop .fa-sign-out-alt"))

    //user View
    export const userAvatar: ElementFinder = element(by.css('.mt-5'));
    export const userAccountsMenu: ElementFinder = element(by.css("nav-tab[ui-sref='admin.users.view.contextUsers(vm.$stateParams)']"));

    //Add context
    export const addNewContext: ElementFinder = element(by.css('.btn-outline-primary'));
    export const emailContext: ElementFinder = element(by.css('#user_email'));
    export const partnerListContext: ElementFinder = element(by.css('.placeholder'));
    export const HeiseContext: ElementFinder = element(by.partialLinkText('Heise Media Service GmbH & Co. KG'));
    export const RMFContext: ElementFinder = element(by.partialLinkText('Grupa RMF Sp. z o.o. sp. k.'));
    export const BauerContext: ElementFinder = element(by.partialLinkText('Bauer Consumer Media Ltd'));
    export const TestContext: ElementFinder = element(by.partialLinkText('FR'));
    export const saveContext: ElementFinder = element(by.css("button[type='submit']"));
    export const typeNormal: ElementFinder = element(by.css('custom-radio[ng-model="vm.ngModel"]:nth-of-type(1)>div:nth-of-type(1)>label'))
    export const typeContext: ElementFinder = element(by.css('custom-radio[ng-model="vm.ngModel"]:nth-of-type(2)>div:nth-of-type(1)>label'));
    export const priviligesContext: ElementFinder = element(by.xpath("//extended-select[@class='custom-select-']/div[@class='dropdown custom-select angular-extended-select']"))
    // visible data

    //context privilige
    export const adminContext: ElementFinder = element(by.xpath("//a[.='Partner Admin']"))
    export const salesContext: ElementFinder = element(by.xpath("//a[.='Partner Sales']"))
    export const csContext: ElementFinder = element(by.xpath("//extended-select-mark-result[.='Partner Customer Support']"))
    export const fullentityContext: ElementFinder = element(by.xpath("//extended-select-mark-result[.='Fullentity']"))
    export const salesManagerContext: ElementFinder = element(by.xpath("//extended-select-mark-result[.='Sales manager']"))
    //context visibility
    export const contextUserType: ElementFinder = element(by.xpath("//span[.='Context']"))
    export const normalUserType: ElementFinder = element(by.xpath("//span[.='Normal']"))
    export const contextPartnerSunrise: ElementFinder = element(by.xpath("//td[.='Sunrise System sp. z o.o. sp. k.']"))
    export const contextHeise: ElementFinder = element(by.xpath("//td[.='Heise Media Service GmbH & Co. KG']"))
    export const contextPartnerRMF: ElementFinder = element(by.xpath("//td[.='RMF']"))
    export const contextPartnerBauer: ElementFinder = element(by.xpath("//td[.='Bauer']"))
    export const contextPartnerTest: ElementFinder = element(by.xpath("//td[.='Test']"))
    export const test4heiseMail: ElementFinder = element(by.xpath("//td[.='bsp.ext.test4@heise.pl']"))
    export const test4rmfMail: ElementFinder = element(by.xpath("//td[.='bsp.ext.test4@rmf.pl']"))
    export const test4bauerMail: ElementFinder = element(by.xpath("//td[.='bsp.ext.test4@bauer.pl']"))

    // context from menu 
    export const contestPartnerHeise: ElementFinder = element(by.xpath("//div[@class='dropdown-menu dropdown-menu-right show']//span[@class='ml-2 font-small']/span[contains(.,'Heise Media Service GmbH & Co. KG')]"))
    export const contestPartnerBauer: ElementFinder = element(by.xpath("//div[@class='dropdown-menu dropdown-menu-right show']//span[@class='ml-2 font-small']/span[contains(.,'Bauer Consumer Media Ltd')]"))
    export const contestPartnerRMF: ElementFinder = element(by.xpath("//div[@class='dropdown-menu dropdown-menu-right show']//span[@class='ml-2 font-small']/span[contains(.,'Grupa RMF Sp. z o.o. sp. k.')]"))
    export const loginAsHeise: ElementFinder = element(by.xpath("//div[@class='dropdown-menu dropdown-menu-right show']//span[.='bsp.ext.test4@heise.pl']"))
    export const loginAsBauer: ElementFinder = element(by.xpath("//div[@class='dropdown-menu dropdown-menu-right show']//span[.='bsp.ext.test4@bauer.pl']"))
    export const loginAsRMF: ElementFinder = element(by.xpath("//div[@class='dropdown-menu dropdown-menu-right show']//span[.='bsp.ext.test4@rmf.pl']"))
    export const logoutFromContext: ElementFinder = element(by.xpath("//span[.='Sunrise System sp. z o.o. sp. k.']"));
    // Panel Settings name Partner
    export const HeiseTitle: ElementFinder = element(by.xpath("//dd[.='Heise Media Service GmbH & Co. KG']"))
    export const BauerTitle: ElementFinder = element(by.xpath("//dd[contains(text(),'Bauer Consumer Media Ltd')]"))
    export const RMFTitle: ElementFinder = element(by.xpath("//dd[.='Grupa RMF Sp. z o.o. sp. k.']"))
    export const SunrieLogo: ElementFinder =element(by.xpath("//ul[@class='nav navbar-nav flex-row']//a[1]/img[@src='/public/0ab58ab91bf1e8269b8a5a1b691069bd.png']"));



    // //Country
    export const searchCountry: ElementFinder = element(by.css("[placeholder='Search...']"));
    export const countryPoland: ElementFinder =
        element(by.xpath("//td[.='Poland']"));
    export const countryGermany: ElementFinder =
        element(by.xpath("//td[.='Germany']"));
    export const countryUS: ElementFinder =
        element(by.xpath("//td[.='United States']"));
    export const countryDenmark: ElementFinder = element(by.xpath("//td[.='Denmark']"))
    export const countryIreland: ElementFinder =
        element(by.xpath("//td[.='Ireland']"));

    export const countryName: ElementFinder = element(by.css("#country-name"))
    export const addNewCountry: ElementFinder = element(by.css("button[ng-click='vm.openModal(null)']"))
    export const countryID: ElementFinder = element(by.css("#country-code"))
    export const addRegion: ElementFinder = element(by.css("button[ng-click='vm.addRegion()']"))
    export const newRegion: ElementFinder = element(by.css("input.w-100"))
    export const saveNewCountry: ElementFinder = element(by.css("button[type='submit']"))
    export const createdCountry: ElementFinder =
        element(by.partialLinkText("Test"));

    // Create partner
    export const partnersMenu: ElementFinder =
        element(by.css("a[ui-sref='partners'] > .menu-title"))
    export const addNewPartner: ElementFinder =
        element(by.css(".btn-primary"))
    export const companyCountry: ElementFinder =
        element(by.id("company-country"))
    export const newCountry: ElementFinder = element(by.id("company-country")).element(by.xpath("//option[.='Test country 2']"));

    // numbering pattern
    export const addNewNumber: ElementFinder = element(by.css("button[ng-click='vm.showNumberingPatternModal()']"))
    export const NPtype: ElementFinder = element(by.model('vm.numberingPattern.tableName'))
    export const NPtypeDocument: ElementFinder = element(by.model('vm.numberingPattern.tableName')).element(by.css("option[label='document']"))
    export const columnName: ElementFinder = element(by.id('np-column'))
    export const columnMark: ElementFinder = element(by.id('np-column')).element(by.css("option[label='mark']"))
    export const documentTemplate: ElementFinder = element(by.css("relation-select[target-entity='document_templates'] .dropdown > .d-flex"));
    export const chooseDocumentTemplate: ElementFinder = element(by.css('input[ng-model="ctrl.search"]'))

    export const NPpartner: ElementFinder = element(by.css('div.custom-select-sm .flex-grow-1'));
    export const NPSunrise: ElementFinder = element(by.partialLinkText('Sunrise System sp. z o.o. sp. k.'));
    export const NPHeise: ElementFinder = element(by.partialLinkText('Heise Media Service GmbH & Co. KG'));
    export const NPRMF: ElementFinder = element(by.partialLinkText('Grupa RMF Sp. z o.o. sp. k.'));
    export const NPBauer: ElementFinder = element(by.partialLinkText('Bauer Consumer Media Ltd'));
    export const NPPaginas: ElementFinder = element(by.partialLinkText('Paginas'));
    // export const NPNowy: ElementFinder = element(by.partialLinkText('Nowy'));
    export const NPJulia: ElementFinder = element(by.partialLinkText('Julia'));
    export const offerType: ElementFinder = element(by.partialLinkText('Offer'));
    export const leadType: ElementFinder = element(by.partialLinkText('Lead'));
    export const auditType: ElementFinder = element(by.partialLinkText('SEO audit'));
    export const contractType: ElementFinder = element(by.partialLinkText('Contract'));
    export const NPdocumentType: ElementFinder = element(by.css("relation-select[target-entity='document_types'] .text-nowrap > .text-nowrap"));
    export const NPPattern: ElementFinder = element(by.css("#np-pattern"));
    export const savePattern: ElementFinder = element(by.css("button[type='submit']"));
    //DOKUMENTY SUNRISE
    export const ofertaPL: ElementFinder = element(by.partialLinkText('SEO Cloud Oferta PL'));
    export const leadPL: ElementFinder = element(by.partialLinkText('Lead PL'));
    export const auditPL: ElementFinder = element(by.partialLinkText('SEO Rating Audit PL'));
    export const umowaPL: ElementFinder = element(by.partialLinkText('SEO Cloud Umowa PL'));
    //DOKUMENTY hEISEE
    export const offerDEHeise: ElementFinder = element(by.partialLinkText('SEO Cloud offer DE Heise'));
    export const leadDEHeise: ElementFinder = element(by.partialLinkText('SEO Cloud lead DE Heise'));
    export const AuditDE: ElementFinder = element(by.partialLinkText('SEO Rating Audit DE'));
    export const contractDEHeise: ElementFinder = element(by.partialLinkText('SEO Cloud contract DE Heise'));

    //DOKUMENTY RMF
    export const ofertaRMF: ElementFinder = element(by.partialLinkText('SEO Oferta PL RMF'));
    export const leadRMF: ElementFinder = element(by.partialLinkText('SEO Cloud lead PL RMF'));
    export const auditRMF: ElementFinder = element(by.partialLinkText('SEO Rating Audit PL RMF'));
    export const umowaRMF: ElementFinder = element(by.partialLinkText('SEO Umowa PL RMF'));
    //DOKUMENTY BAUER
    export const ofertaBAUER: ElementFinder = element(by.partialLinkText('SEO Cloud offer EN Bauer UK'));
    export const leadBAUER: ElementFinder = element(by.partialLinkText('Lead ENG'));
    export const auditBAUER: ElementFinder = element(by.partialLinkText('SEO Rating Audit EN'));
    export const umowaBAUER: ElementFinder = element(by.partialLinkText('SEO Cloud contract EN Bauer UK'));

    //         //DOKUMENTY nOWY
    //         export const ofertaPL: ElementFinder = element(by.partialLinkText('SEO Cloud Oferta PL'));
    //         export const leadPL: ElementFinder = element(by.partialLinkText('Lead PL'));
    //         export const auditPL: ElementFinder = element(by.partialLinkText('SEO Rating Audit PL'));
    //         export const umowaPL: ElementFinder = element(by.partialLinkText('SEO Cloud Umowa PL'));

    export const ofertaPaginas: ElementFinder = element(by.partialLinkText('Paginas SEO Cloud offer EN'));
    export const leadPAGINAS: ElementFinder = element(by.partialLinkText('Lead PL'));
    export const auditPAGINAS: ElementFinder = element(by.partialLinkText('SEO Rating Audit PL'));
    export const umowaPaginas: ElementFinder = element(by.partialLinkText('PAGINAS'));

    export const ofertaJULIA: ElementFinder = element(by.partialLinkText('SEO Cloud offer FR'));
    export const leadJULIA: ElementFinder = element(by.partialLinkText('Lead PL'));
    export const auditJULIA: ElementFinder = element(by.partialLinkText('SEO Rating Audit PL'));
    export const umowaJULIA: ElementFinder = element(by.partialLinkText('Julia SEO Cloud contract FR'));

    // cancel NP
    export const cancelNP: ElementFinder = element(by.css('button.btn-link'));
    export const XcloseNP: ElementFinder = element(by.css(".close[data-dismiss='modal'] > [aria-hidden='true']"));

}