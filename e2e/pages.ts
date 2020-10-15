// tslint:disable:max-line-length
import { by, element, ElementFinder } from 'protractor';
import { Utils } from './utils';

export namespace Pages {

    //LOGIN
    // Input    
    export const loginInput: ElementFinder = element(by.css("[name='email']"));
    export const passInput: ElementFinder = element(by.model('vm.password'));

    // Button   
    export const nextPageButton: ElementFinder = element(by.css(".btn"));
    export const forgottenPassword: ElementFinder = element(by.css('.password-alert'));
    export const backButton: ElementFinder = element(by.css('.btn-link'));
    export const loginButton: ElementFinder = element(by.css('.btn-primary'));

    // Elemets  
    export const loginTitle: ElementFinder = element(by.css('.login-title'));
    export const logo: ElementFinder = element(by.css('img'));

    // Validation Message     
    export const wrongPassMess: ElementFinder = element(by.xpath("[ng-if='vm.error']"));
   
    export const wrongLoginMesage: ElementFinder = element(by.css("[ng-if='vm.error']"));
    export const loginToPoleJestWymagane: ElementFinder = element(by.className('invalid-feedback'));
    export const passToPoleJestWymagane: ElementFinder = element(by.className('invalid-feedback'));
    export const loginValidation: ElementFinder = element(by.css('form[name="vm.loginForm"]>div:nth-of-type(2)>div:nth-of-type(1)>div'));
    export const sendResetPasswordMessage: ElementFinder = element(by.xpath('//div[contains(text(), "Na Twój adres e-mail została wysłana wiadomość umożliwiająca ustawienie nowego hasła")]'));

    //Pop up elements
    export const forgottenPasswordPopUp: ElementFinder = element(by.css('confirm-modal>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2)'));
    export const noButton: ElementFinder = element(by.css('.btn-danger'));
    export const yesButton: ElementFinder = element(by.css("button[ng-click='vm.factory._modal.response(true)']"));
    export const logoImage: ElementFinder = element(by.css('app-header>nav>div:nth-of-type(1)>div:nth-of-type(1)>ul>li:nth-of-type(2)>a:nth-of-type(1)>img'))

    //Pass expired
    export const passExpiredTitle: ElementFinder = element(by.css('.card-title'));
    export const oldPass: ElementFinder = element(by.css('#user-old-password'));
    export const newPass: ElementFinder = element(by.css("[name='password']"));
    export const newPass2: ElementFinder = element(by.css("input[ng-model='vm[\'repeatPassword\']']"));
    export const changePass: ElementFinder = element(by.css('.btn-primary'));
    export const returnToLoginPage: ElementFinder =element(by.css('.btn-primary'));

    //MAIN MENU                                                     
    //Buttons 
    export const userMenu: ElementFinder = element(by.css('a.dropdown-user-link > span'))
    export const logout: ElementFinder = element(by.css("a[ng-click='vm.logout()']"))
    export const editUser: ElementFinder = element(by.css("a[ui-sref='user.settings.editProfile()']"))
    export const changePassMenu: ElementFinder = element(by.css("a[ui-sref='user.settings.changePassword(vm.$stateParams)']"))
    export const saveMessage: ElementFinder = element(by.css("a[ui-sref='user.settings.changePassword(vm.$stateParams)']"))
    
    export const menuSales: ElementFinder = element(by.css("a[ui-sref='leads']"));
    export const salesLead: ElementFinder = element(by.css("a[ui-sref='leads.leads']"));
    export const salesOffer: ElementFinder = element(by.css(".menu-item[ui-sref='leads.offers']"));
    export const salesContract: ElementFinder = element(by.css("a[ui-sref='leads.contracts']"));
    export const salesAudit: ElementFinder = element(by.css("a[ui-sref='leads.audits']"));
    export const accounts: ElementFinder = element(by.css("a[ui-sref='clients'] > .menu-title"));
    export const dashboard: ElementFinder = element(by.css("a[ui-sref='home']"));
    export const communication: ElementFinder = element(by.css("a[ui-sref='mails'] > .menu-title"));
    export const orders: ElementFinder = element(by.css("a[ui-sref='contracts'] > .menu-title"));
    export const service: ElementFinder = element(by.css("a[ui-sref='services'] > .menu-title"));
    export const API: ElementFinder = element(by.css("a[ui-sref='api'] > .menu-title"));
    export const contact: ElementFinder = element(by.css("a[ui-sref='cms.CMS_CONTACT'] > .menu-title"));
    export const panelSettings: ElementFinder = element(by.css("a[ui-sref='panelSettings'] > .menu-title"));
    export const refreshPage: ElementFinder = element(by.css(".fa-sync"));
    export const chooseLanguage: ElementFinder = element(by.css("li.dropdown-language > .dropdown-toggle > .flag-icon"));

    //Elements
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
    export const panelSettingsTitle: ElementFinder = element(by.css('menu-header'));

    //add widget 
    export const addWidget: ElementFinder = element(by.css('button.btn-white > .fas'));
    export const note: ElementFinder = element(by.css('div.list-group > a:nth-of-type(1)'));
    export const checkList: ElementFinder = element(by.css('div.list-group > a:nth-of-type(2)'));
    export const generatedCounts: ElementFinder = element(by.css('div.list-group > a:nth-of-type(3)'));
    export const servideBudgets: ElementFinder = element(by.css('div.list-group > a:nth-of-type(4)'));
    export const services: ElementFinder = element(by.css('div.list-group > a:nth-of-type(5)'));
    export const servicesDetail: ElementFinder = element(by.css('div.list-group > a:nth-of-type(6)'));

    //pop up elements
    export const cancelWidget: ElementFinder = element(by.css('.btn-secondary'));
    export const cancelWidgetPopUp: ElementFinder = element(by.css('confirm-modal>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2)'))
    export const cancelWidgetNoButton: ElementFinder = element(by.css('.btn-danger'));
    export const cancelWidgetYesButton: ElementFinder = element(by.css('.btn-link'));
    export const saveWidget: ElementFinder = element(by.css('.btn-success'));

    //widget
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
    export const heisePartner: ElementFinder = element(by.css("div[ng-click='$event.stopPropagation()'] > a:nth-of-type(2) > [label='o.label']"));
    export const grupaRMFPartner: ElementFinder = element(by.css("div[ng-click='$event.stopPropagation()'] > a:nth-of-type(5) > [label='o.label']"));
    export const testPartner: ElementFinder = element(by.css("div[ng-click='$event.stopPropagation()'] > a:nth-of-type(6) > [label='o.label']"));
    export const bauerPartner: ElementFinder = element(by.css("div[ng-click='$event.stopPropagation()'] > a:nth-of-type(4) > [label='o.label']"));

    //Partner Adress
    export const companyFullName: ElementFinder = element(by.css("input[ng-model='vm.address.fullName']"));


    //User Group
    export const userGroup: ElementFinder = element(by.css("a[ui-sref='panelSettings.config.userGroups(vm.$stateParams)']"));;
    export const addUserGroup: ElementFinder = element(by.css('.btn-primary'));
    export const groupID: ElementFinder = element(by.css('#userGroup_label'));
    export const priviligeList: ElementFinder = element(by.css('.placeholder'));
    export const chooseP_S_M: ElementFinder = element(by.css("[placeholder='Choose an option']"));
    export const p_s_maganer: ElementFinder = element(by.css(".show.dropdown-menu > .d-flex"));
    export const saveGroup: ElementFinder = element(by.css('.btn-primary'));






















    

    //Panel settings 
    // export const advancedSettings: ElementFinder = element(by.css('sub-menu-layout>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1)>span'));
    export const advancedSettings: ElementFinder = element(by.xpath("//*[text()[contains(.,'Showcd')]]"));

    export const advancedSettingsTitle: ElementFinder = element(by.css("html > body > app-private-root > div > div > div > ui-view > partner-view > div > sub-menu-layout > div > div > div > div > h3 > menu-header"));
    export const partnerUsers: ElementFinder = element(by.css("a[ui-sref='panelSettings.config.users']"));
    export const partnerDomain: ElementFinder = element(by.css("a[ui-sref='panelSettings.config.domains']"));
    export const advConfTitle: ElementFinder = element(by.xpath("//small[.='Advanced configuration']"));
    export const platformMenu: ElementFinder = element(by.css('card-collapse:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>h4>card-title'));
    export const partnerDomainInput: ElementFinder = element(by.css('form[name="vm.domainForm0"]>fieldset:nth-of-type(1)>input[ng-model="field.name"]'))
    export const vievPartnerAdress: ElementFinder = element(by.xpath("//a[.='Addresses']"));
    export const adressTitle: ElementFinder = element(by.css("partner-addresses[addresses='::$resolve.addresses'] > .row > div:nth-of-type(1) .card-title"));
    export const partnerCompanyName: ElementFinder = element(by.css("input[ng-model='vm.address.fullName']"));
    export const partnerStrreet: ElementFinder = element(by.css("input[ng-model='vm.address.street']"));


    // EMAIL
    export const partnerEmail: ElementFinder = element(by.css("a[ui-sref='panelSettings.config.emails']"));
    export const addNewMail: ElementFinder = element(by.css("partner-emails[emails='::$resolve.emails'] > div:nth-of-type(3) .card-header .btn"));
    export const mailboxesTitle: ElementFinder = element(by.css("partner-emails[emails='::$resolve.emails'] > div:nth-of-type(3) .card-title"));
    export const inboxPass: ElementFinder = element(by.css('#email-in-password'));
    export const emailName: ElementFinder = element(by.css('#email-name'));
    export const authType: ElementFinder = element(by.css('#email-auth-type'));
    export const authTypeLogin: ElementFinder = element(by.css('select[ng-model="vm.email.authType"]'));
    export const inboxServer: ElementFinder = element(by.id('email-in-type'));
    export const inboxServerImap: ElementFinder = element('select option:nth-child(1)');


    // element(by.css('select[ng-model="vm.email.inType"]')).click();
    // element(by.css('select[ng-model="vm.email.inType"]')).click();
    // element(by.css('select[ng-model="vm.email.inType"]')).click();
    // element(by.css('select[ng-model="vm.email.inType"]')).click();
    // element(by.css('select[ng-model="vm.email.inType"]')).click();
    // element(by.css('')).click();


    // export const outgoingPass: ElementFinder = element(by.css(''));
    // export const outgoingPass: ElementFinder = element(by.css(''));
    // export const outgoingPass: ElementFinder = element(by.css(''));
    // export const outgoingPass: ElementFinder = element(by.css(''));
    // export const outgoingPass: ElementFinder = element(by.css(''));






    //USER MENU
    export const addNewUser: ElementFinder = element(by.css('button.btn-sm'));
    export const watchUser: ElementFinder = element(by.css(''));
    export const activateUser: ElementFinder = element(by.css(''));
    export const deactivateUser: ElementFinder = element(by.css(''));
    export const deleteUser: ElementFinder = element(by.css(''));
    export const sendUserActivationMessage: ElementFinder = element(by.css(''));

    //USER POPUP
    export const userEmail: ElementFinder = element(by.css("input[type='email']"));
    export const userName: ElementFinder = element(by.css("input[ng-model='vm.userModel.firstName']"));
    export const userSurname: ElementFinder = element(by.css("input[ng-model='vm.userModel.lastName']"));
    export const userTelephone: ElementFinder = element(by.css("input[ng-model='vm.userModel.phone']"));
    export const userPriviligeList: ElementFinder = element(by.css(".flex-wrap"));
    export const adminUser: ElementFinder = element(by.css(".show.dropdown-menu > a:nth-of-type(1)"));
    export const salesUser: ElementFinder = element(by.css(".show.dropdown-menu > a:nth-of-type(2) > [label='o.label']"));
    export const csUser: ElementFinder = element(by.css(".show.dropdown-menu > a:nth-of-type(3) > [label='o.label']"));
    export const customId: ElementFinder = element(by.css("input[ng-model='vm.userModel.customId']"));
    export const saveNewUser: ElementFinder = element(by.css("button[type='submit']"));


    // accounts
    export const addNewAccount: ElementFinder = element(by.css(""));
    export const pass: ElementFinder = element(by.css(""));
    export const zaloguj: ElementFinder = element(by.css(""));

    //LEAD
    export const addLeadButton: ElementFinder = element(by.css('.btn-sm'));
    export const addLeadPopUp: ElementFinder = element(by.css("form[name='vm.addDocumentForm'] .modal-title"));
    export const wwwInput: ElementFinder = element(by.css('input[required]'));
    export const cancelButton: ElementFinder = element(by.css('button.btn-link'));
    export const closeX: ElementFinder = element(by.css("form[name='vm.addDocumentForm'] [aria-hidden='true']"));
    export const saveLead: ElementFinder = element(by.css("button[type='submit']"));
    export const cancelLeadPopUp: ElementFinder = element(by.css('confirm-modal>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2)'));
    export const yesCancelButton: ElementFinder = element(by.css("button[ng-click='vm.factory._modal.response(true)']"));
    export const noCancelButton: ElementFinder = element(by.css('.btn-danger'));
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
    export const wwwValidationMessage: ElementFinder = element(by.css("dynamic-field[field='www'] > .invalid-feedback"));
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
    export const leadDocumentname: ElementFinder = element(by.css(""));

    //offer
    export const offerPopUp: ElementFinder = element(by.css("form[name='vm.addDocumentForm'] .modal-title"));
    export const offerDocumentName: ElementFinder = element(by.css("#doc-template"));
    export const deleteLead: ElementFinder = element(by.css(".show.dropdown .text-danger > .fa"));
    export const offerDomain: ElementFinder = element(by.css("dynamic-field[field='domain'] > .form-control"));
    export const getPricesButton: ElementFinder = element(by.css("button.mr-auto"));
    export const sliderChangeprice: ElementFinder = element(by.css('input[ng-model="vm.sliderValue"]'));
    export const increasingPrice: ElementFinder = element(by.css(""));
    export const priceReduction: ElementFinder = element(by.css(""));
    export const editFirstOffer: ElementFinder = element(by.css("tbody > tr:nth-of-type(1) .fa-edit"));
    export const createFirstContract: ElementFinder = element(by.css("tbody > tr:nth-of-type(1) [ui-sref='leads.contracts({add: d.id})'] > .fas"));
    export const downloadDocument: ElementFinder = element(by.css(""));
    export const sendDocument: ElementFinder = element(by.css(""));
    export const cancelOfferPopUp: ElementFinder = element(by.css(""));
    export const closeOfferPopUp: ElementFinder = element(by.css(""));
    export const addOfferButton: ElementFinder = element(by.css(".btn-sm"));
    export const saveOffer: ElementFinder = element(by.css("button[type='submit']"));
    export const domainValidationMessage: ElementFinder = element(by.css("dynamic-field[field='domain'] > .invalid-feedback"));
    export const emptyLeadList: ElementFinder = element(by.css(""));
    export const leadList: ElementFinder = element(by.model('vm.objectModel'));


    //TASKS Menu
    export const administrationMenu: ElementFinder = element(by.css('body > app-private-root > div > app-menu > div.main-menu.menu-fixed.menu-accordion.menu-shadow > div > ul:nth-child(2) > li.nav-item.has-sub > a'));

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
    // export const moduleTasks: ElementFinder = element(by.css(""));
    export const saveSubject: ElementFinder = element(by.css("form[name='vm.subjectGroupForm'] .btn-success"));

    // export const : ElementFinder = element(by.css(""));





    // export const countryOfResidenceInputEnabled: ElementFinder =
    //     element(by.css(`input[id="INITIAL_DATA_FORM.countryOfResidence"]:not([disabled])`));
    // export const countryOfResidenceInput: ElementFinder = Utils.getInput('INITIAL_DATA_FORM.countryOfResidence');
    // export const legalFormInput: ElementFinder = Utils.getInput('INITIAL_DATA_FORM.legalForm');
    // export const legalFormForeignCompanyInput: ElementFinder = Utils.getInput('INITIAL_DATA_FORM.legalFormForeignCompany');
    // export const initialDataRadioButtonYes: ElementFinder = element(by.xpath('//input[@id = "INITIAL_DATA_FORM.companyOnStockExchange.1"]/..'));
    // export const initialDataRadioButtonYesInput: ElementFinder = Utils.getInput('INITIAL_DATA_FORM.companyOnStockExchange.1');
    // export const initialDataRadioButtonNo: ElementFinder = element(by.xpath('//input[@id = "INITIAL_DATA_FORM.companyOnStockExchange.0"]/following-sibling::span[1]'));
    // export const initialDataRadioButtonNoInput: ElementFinder = Utils.getInput('INITIAL_DATA_FORM.companyOnStockExchange.0');
    // export const cancelProcessPopupButtonYes: ElementFinder = Utils.getElementById('dismissPopupButton');
    // export const cancelProcessPopupButtonNo: ElementFinder = Utils.getElementById('confirmPopupButton1');
    // export const countryOfSanctionPopup: ElementFinder = Utils.getElementById('confirmPopupButton2');


}
