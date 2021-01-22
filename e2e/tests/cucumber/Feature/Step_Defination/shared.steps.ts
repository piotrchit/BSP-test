const { Given, When, Then, setDefaultTimeout } = require('cucumber');
const expect = require('chai').expect;

import { binding, given, then, when } from 'cucumber-tsflow';
import { browser, by, element, protractor } from 'protractor';
import { Pages } from '../../../../Pages/pages';
import { Country } from '../../../../Pages/country';
import { Utils } from '/home/piotrchit/Pulpit/BSP Testy/e2e/utils';
import { __awaiter, __decorate, __generator, __metadata } from "tslib";

Given(/^I open the BSP DEMO page$/, { timeout: 2 * 5000 }, async () => {
    await browser.get('https://demo.bauerseo.pl/');
});

Given(/^I open the BSP TEST page$/, { timeout: 2 * 5000 }, async () => {
    await browser.get('https://test.bauerseo.pl/');
});

Given(/^I open the TEST <partnerAdressSection>$/, { timeout: 2 * 5000 }, async () => {
    await browser.get('https://test.bauerseo.pl/app/panel-settings/addresses');
});

Given(/^I open the Partner 1 TEST page$/, { timeout: 2 * 5000 }, async () => {
    await browser.get('https://partner1.test.bauerseo.pl/');
});

Given(/^I open the Partner 2 TEST page$/, { timeout: 2 * 5000 }, async () => {
    await browser.get('https://partner2.test.bauerseo.pl/');
});

Given(/^I open the Partner 3 TEST page$/, { timeout: 2 * 5000 }, async () => {
    await browser.get('https://partner3.test.bauerseo.pl/');
});

Given(/^I open the Partner 1 DEMO page$/, { timeout: 2 * 5000 }, async () => {
    await browser.get('https://partner1.demo.bauerseo.pl/');
});

Given(/^I open the Partner 6 DEMO page$/, { timeout: 2 * 5000 }, async () => {
    await browser.get('https://partner6.demo.bauerseo.pl/');
});

When(/I open the TEST partnerDomain$/, { timeout: 2 * 5000 }, async () => {
    await browser.get('https://test.bauerseo.pl/app/panel-settings/config/domains');
});

When(/I open the TEST partnerDomain$/, { timeout: 2 * 5000 }, async () => {
    await browser.get('https://test.bauerseo.pl/app/panel-settings/config/domains');
});


When('I switch to the <contextUserInNewTab>', async () => { 
    return browser.getAllWindowHandles().then((allTabs) => {
        return browser.switchTo().window(allTabs[1]);
     });
     });
     


















    
When('I select from the list ', async () => {
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
});

When('I select <authTypeLogin> from the list ', async () => {
    element(by.model('vm.email.authType')).element(by.css('value="number:1"'))
    // browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform().then(function(){
    // browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
});

When('I accept from the list ', async () => {
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
});

When('I choose <contacts>', async () => {
    element(by.css('sub-menu-layout>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2)>a:nth-of-type(2)')).click();
});

When('I choose <adresses>', async () => {
    element(by.css('sub-menu-layout>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2)>a:nth-of-type(3)')).click();
});

When('I move to the <userGroup>', async () => {
    var userGroup = element(by.css('nav-tab:nth-of-type(14)'));
    browser.actions().mouseMove(userGroup).click().perform();
});
When('I move to <privilegeShowAction>', async () => {
    var privilegeShowAction = element(by.id('user-groups')).element(by.xpath("//td[contains(text(),'0')]"));
    browser.actions().mouseMove(privilegeShowAction).click().perform();
});

When('I move to <showActionButton>', async () => {
    var privilegeShowAction = element(by.css('tbody > tr:nth-of-type(1) > .text-right'))
    // .element(by.xpath("//td[contains(text(),'0')]"));
    browser.actions().mouseMove(privilegeShowAction).click().perform();
});

When('I move to <showUsersActionButton>', async () => {
    var privilegeShowAction = element(by.xpath("//td[contains(text(),'Sunrise System sp. z o.o. sp. k.')]"));
    browser.actions().mouseMove(privilegeShowAction).click().perform();
});

When('I move to <showPartnerHeiseActionButton>', async () => {
    var privilegeShowAction = element(by.xpath("//td[contains(text(),'Heise Media Service GmbH & Co. KG')]"));
    browser.actions().mouseMove(privilegeShowAction).click().perform();
});

When('I move to <showOfferButton>', async () => {
    var privilegeShowAction = element(by.css('tbody > tr:nth-of-type(1) > .text-right'))
    // .element(by.xpath("//td[contains(text(),'0')]"));
    browser.actions().mouseMove(privilegeShowAction).click().perform();
});

When('I move to <showContractButton>', async () => {
    var privilegeShowAction = element(by.css('div.vertical-layout.fixed-navbar.bsp-vertical-menu.menu-expanded.menu-hide div.app-content.content:nth-child(3) div.content-wrapper div.card:nth-child(1) div.table-responsive table.table.table-hover.table-striped tbody:nth-child(2) tr:nth-child(1) > td.text-center:nth-child(1)'))
    // .element(by.xpath("//td[contains(text(),'0')]"));
    browser.actions().mouseMove(privilegeShowAction).click().perform();
});

Then('I move to <cookieLanguageMenu>', async () => {
    var privilegeShowAction = element(by.css('.card-title'));
    browser.actions().mouseMove(privilegeShowAction).click().perform();
});

Then('I move to <backToCSVList>', async () => {
    var privilegeShowAction = element(by.css("strong"))
    browser.actions().mouseMove(privilegeShowAction).click().perform();
});


When('I choose <userGroup>', async () => {
        // element(by.css("nav-tab[ui-sref='partners.config.userGroups(vm.$stateParams)']")).click();
element(by.css('nav-tab:nth-of-type(14)')).click();
});

When('I choose <bsp.ext.test2@spis-firm.biz>', async () => {
    element(by.xpath("//extended-select-mark-result[.='Test1 User (bsp.ext.test1@spis-firm.biz)']"))
});

When('I choose <moreMenu>', async () => {
    element(by.css(".fa-chevron-right")).click();
//  element(by.css(".fa-chevron-right"))


});

When('I choose <choosePrivilege>', async () => {
    element(by.xpath("//u[.='partner_sales_manager']")).click();
});

When('I choose <pricelists>', async () => {
    element(by.css("nav-tab[ui-sref='panelSettings.view.valuationCloud(vm.$stateParams)']")).click();
});

When('I choose <partnerDomain>', async () => {
    element(by.css("nav-tab[ui-sref='panelSettings.config.domains(vm.$stateParams)']")).click();
});
Given ('I refresh page', async () => {
    browser.driver.navigate().refresh()
   });


When('I choose <partnerEmailMenu>', async () => {
    element(by.css("nav-tab[ui-sref='panelSettings.config.emails(vm.$stateParams)']")).click();

});

When('I choose <platformMenu>', async () => {
    element(by.css('card-collapse:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)')).click();
});

When('I choose <partnerDomainInput>', async () => {
    element(by.xpath('form[name="vm.domainForm0"]>fieldset:nth-of-type(1)>input[ng-model="field.name"]')).click();
});

When('I choose <partnerEmail>', async () => {
    var partnerEmail = element(by.css('sub-menu-layout>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)>a:nth-of-type(2)'));
    browser.actions().mouseMove(partnerEmail).click().perform();
});

When('I choose <administrationMenu>', async () => {
    element(by.css("a[ui-sref='admin'] > .menu-title")).click();
});

When('I choose <CMSMenu>', async () => {
    element(by.css("a[ui-sref='admin.cmsTypes']")).click();
});

When('I choose <countryMenu>', async () => {
    element(by.css("a[ui-sref='admin.countries']"))
});

When('I choose <cronMenu>', async () => {
    element(by.partialLinkText('Cron')).click();
});

When('I choose <correnciesMenu>', async () => {
    element(by.partialLinkText('Currenci')).click();
});

When('I choose <customerServiceteamMenu>', async () => {
    element(by.partialLinkText('Customer Service Tea')).click();
});

When('I choose <documentsMenu>', async () => {
    element(by.partialLinkText('Documen')).click();
});

When('I choose <dynamicFieldMenu>', async () => {
    element(by.partialLinkText('Dynamic Fiel')).click();
});

When('I choose <GSCReport>', async () => {
    element(by.partialLinkText('GSC Report schedu')).click();
});

When('I choose <numberingPatternsMenu>', async () => {
    element(by.css("a[ui-sref='admin.numberingPatterns']")).click();
});

When('I choose <OAUTHMenu>', async () => {
    element(by.css("a[ui-sref='admin.oauthServices']")).click();
});

When('I choose <productsMenu>', async () => {
    element(by.css("a[ui-sref='admin.products']")).click();
});

When('I choose <privilidges>', async () => {
    browser.actions().mouseMove(element(by.css("a[ui-sref='admin.privileges']"))).click().perform();
    element(by.css("a[ui-sref='admin.privileges']")).click();
});

When('I choose <tasksMenu>', async () => {
    element(by.css("a[ui-sref='admin.tasks']")).click();
});

When('I choose <leadList>', async () => {
    element(by.className('d-flex flex-row-reverse align-items-center')).click();
});

When('I choose <translationsMenu>', async () => {
    element(by.partialLinkText('Translatio')).click();
});


Then('I move to <usersMenu>', async () => {
    var privilegeShowAction =  element(by.css("li:nth-of-type(17)>a"));
    browser.actions().mouseMove(privilegeShowAction).click().perform();
});

When('I choose <usersMenu>', async () => {
    // element(by.partialLinkText('Users')).click();
    element(by.css('li:nth-of-type(17)>a'))
});

When('I choose <keepEditingButton>', async () => {
    element(by.css("button[ng-click='vm.factory._modal.response(false)']")).click();
});

When('I choose <discardChanges>', async () => {
    element(by.css('.btn-danger')).click();
});

When('I choose <confirmDelete>', async () => {
    element(by.css('.btn-danger')).click();
});

When('I choose <showHiddenActionButton>', async () => {
    browser.actions().mouseMove(element(by.css('tbody>tr:nth-of-type(1)>td:nth-of-type(9)>div:nth-of-type(1)'))).click().perform();
});

When('I choose <showMailboxHiddenAction>', async () => {
    browser.actions().mouseMove(element(by.css("td:nth-of-type(1)"))).click().perform();
});

When('I choose <viewPrvilege>', async () => {
    browser.actions().mouseMove(element(by.css('tr:nth-of-type(6)>td:nth-of-type(4)>div:nth-of-type(1)>div:nth-of-type(1)>a:nth-of-type(1)>i'))).click().perform();
});



// Then('<priceBasic> is visible', async () => {
//     element(by.partialLinkText('299')).click();
// });

Given('Start test', async () => {
    browser.restart();
})

@binding()
class SharedSteps {

    static readonly defaultTimeout = 60000;


    @given(/^I am authorised user "([^"]*)" "([^"]*)"$/, '', SharedSteps.defaultTimeout)
    async authorisedUser({ user, password }: { user: string; password: string; }) {
    }


    @given(/^"([^"]*)" has been loaded$/, '', SharedSteps.defaultTimeout)
    async GivenPageHasBeenLoaded(page: string) {
        await Utils.goTo(page);
        await Utils.refreshPage();
    }

    @when(/^I click on the <([^"]*)>$/, '', SharedSteps.defaultTimeout)
    async clickOnClickable(locatorId: string) {
        await Utils.click(Pages[locatorId]);
    }

    @when(/^I provide "([^"]*)" in the <([^"]*)>$/, '', SharedSteps.defaultTimeout)
    async provideValueIntoInput(value: string, locatorId: string) {
        await Utils.setInputValue(Pages[locatorId], value);
    }

    @when(/^I select "<([^"]*)>" from autocomplete <([^"]*)>$/, '', SharedSteps.defaultTimeout)
    async selectValueFromAutocomplete(value: string, locatorId: string) {
        await Utils.selectFromAutocomplete(Pages[locatorId], value);
    }

    @when(/^I wait for <([^"]*)> to be enable$/, '', SharedSteps.defaultTimeout)
    async waitForEnabled(locatorId: string) {
        await Utils.waitFor(Pages[locatorId]);
    }   
    @when(/^I wait for <([^"]*)> to be visible$/, '', SharedSteps.defaultTimeout)
    async waitForVisibled(locatorId: string) {
        await Utils.waitFor(Pages[locatorId]);
    }

    @when(/^I want to wait <([^"]*)> seconds$/, '', SharedSteps.defaultTimeout)
    async waitSeconds(seconds: number) {
        const msMultiplier = 1000;
        await browser.sleep(seconds * msMultiplier);
    }

    @then(/^<([^"]*)> is editable$/, '', SharedSteps.defaultTimeout)
    async isEditable(locatorId: string) {
        expect(await Utils.isEditable(Pages[locatorId])).to.equal(true);
    }

    @then(/^<([^"]*)> is active$/, '', SharedSteps.defaultTimeout)
    async isActive(locatorId: string) {
        expect(await Utils.isEditable(Pages[locatorId])).to.equal(true);
    }

    @then(/^<([^"]*)> is not editable$/, '', SharedSteps.defaultTimeout)
    async isNotEditable(locatorId: string) {
        expect(await Utils.isEditable(Pages[locatorId])).to.equal(false);
    }

    @then(/^<([^"]*)> is not active$/, '', SharedSteps.defaultTimeout)
    async isNotActive(locatorId: string) {
        expect(await Utils.isEditable(Pages[locatorId])).to.equal(false);
    }

    @then(/^<([^"]*)> is valid$/, '', SharedSteps.defaultTimeout)
    async isValid(locatorId: string) {
        expect(await Utils.isValid(Pages[locatorId])).to.equal(true);
    }

    @then(/^<([^"]*)> is not valid$/, '', SharedSteps.defaultTimeout)
    async isNotValid(locatorId: string) {
        expect(await Utils.isValid(Pages[locatorId])).to.equal(false);
    }

    @then(/^<([^"]*)> is visible$/, '', SharedSteps.defaultTimeout)
    async isVisible(locatorId: string) {
        expect(await Utils.isVisible(Pages[locatorId])).to.equal(true);
    }

    @then(/^<([^"]*)> is not visible$/, '', SharedSteps.defaultTimeout)
    async isNotVisible(locatorId: string) {
        expect(await Utils.isVisible(Pages[locatorId])).to.equal(false);
    }

    @then(/^<([^"]*)> should be equal "([^"]*)"$/, '', SharedSteps.defaultTimeout)
    async shouldBeEqual(locatorId: string, value: string) {
        expect(await Utils.isEqual(Pages[locatorId], value)).to.equal(true);
    }

    @then(/^<([^"]*)> is checked$/, '', SharedSteps.defaultTimeout)
    async isChecked(locatorId: string) {
        expect(await Utils.isChecked(Pages[locatorId])).to.equal(true);
    }

    @then(/^<([^"]*)> is not checked$/, '', SharedSteps.defaultTimeout)
    async isNotChecked(locatorId: string) {
        expect(await Utils.isChecked(Pages[locatorId])).to.equal(false);
    }

    @then(/^I can see "([^"]*)" ([^"]*)$/, '', SharedSteps.defaultTimeout)
    async canSee(numberOf: string, locatorId: string) {
    }

}
