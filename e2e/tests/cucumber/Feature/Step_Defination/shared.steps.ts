const { Given, When, Then,setDefaultTimeout } = require('cucumber');
const expect = require('chai').expect;

import { binding, given, then, when } from 'cucumber-tsflow';
import { browser, by, element, protractor } from 'protractor';
import { Pages } from '/home/piotrchit/Pulpit/cucumber/e2e/pages';
import { Utils } from '/home/piotrchit/Pulpit/cucumber/e2e/utils';
import { __awaiter, __decorate, __generator, __metadata } from "tslib";

Given(/^I open the BSP DEMO page$/, {timeout: 2 * 5000}, async () => {
    await browser.get('https://demo.bauerseo.pl/');
 });
Given(/^I open the BSP TEST page$/, {timeout: 2 * 5000}, async () => {
    await browser.get('https://test.bauerseo.pl/');
 });
 
 Given(/^I open the <TESTpartnerAdresSection>$/, {timeout: 2 * 5000}, async () => {
    await browser.get('https://test.bauerseo.pl/app/panel-settings/addresses');
 });

Given(/^I open the Partner 1 TEST page$/, {timeout: 2 * 5000}, async () => {
    await browser.get('https://partner1.test.bauerseo.pl/');
 });

Given(/^I open the Partner 1 DEMO page$/, {timeout: 2 * 5000}, async () => {
    await browser.get('https://partner1.demo.bauerseo.pl/');
 });
Given(/^I open the Partner 6 DEMO page$/, {timeout: 2 * 5000}, async () => {
    await browser.get('https://partner6.demo.bauerseo.pl/');
 });
 When(/^I open the partnerEmail$/, {timeout: 2 * 5000}, async () => {
    await browser.get('https://test.bauerseo.pl/app/panel-settings/config/emails');
 }); 
 When(/I open the partnerDomain$/, {timeout: 2 * 5000}, async () => {
    await browser.get('https://test.bauerseo.pl/app/panel-settings/config/domains');
 });

       
 When('I select from the list ', async () => {
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
});

When('I accept from the list ',   async () => {
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
});

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


// When I click on the <loginInput>
// And I provide 'bsp.ext.test1@spis-firm.biz' in the <loginInput>
// And I click on the <Next_Button> 
// Then <> is visible

// When('I wait 30 sec', async () => {
//     browser.sleep('30000');
// });

// Then('Verify the page title of Gmail page', async () => {
//     const title = await browser.driver.getTitle();
//     console.log('TITLE = ', title);
//     await expect(title).to.be.equal("Gmail - Free Storage and Email from Google");
// });

// Then('Verify the page title of Test Login page', async ()=> {
//     const title = await browser.driver.getTitle();
//     console.log('TITLE = ', title);
// });


// Then('Verify the sum of the array input', async () => {
//     const input_array = [10, 20, 30, 40, 50];
//     var sum = 0;
//     for (let i = 0; i < input_array.length; i++) {
//         sum = sum + input_array[i];
//     }
//     console.log(sum);
//     expect(sum).to.be.equal(150);
// });

// const sum60 =0;

// Given('Run unit test', function(){
// console.log("RUN A UNIT TEST");
// });

// When('Sum of 20 + 40', function(){
//     sum60 = 20 + 40;
// });

// Then('Results should be 60', function(){
//     console.log("Results should be 60 : ", sum60);
// });

