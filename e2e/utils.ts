/* tslint:disable */
import { setDefaultTimeout } from 'cucumber';
import * as _ from 'lodash';
import { browser, by, element, ElementArrayFinder, ElementFinder, ExpectedConditions } from 'protractor';
import { GetCustomerData } from './model/get-customer-data';
import { Scenario } from './model/scenario';
import { SetCustomerData } from './model/set-customer-data';
import { HttpService } from './service/http-service';
import { LocalStorage } from './service/localStorage-service';

export namespace Utils {
    export const timeout = 30000;
    export const sleepTime = 1000;
    export const addCustomerMode = 33;
    export const authToken = null;
    export const httpService = new HttpService();
    export const localStorage: LocalStorage = new LocalStorage();
    export const defaultTimeout = 60000;

    const takeScreenshot = async () => {
        return await browser.driver.takeScreenshot();
    };

    const auth = async (login: string, passwd: string): Promise<any> => {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        if (!authToken) {
            const userNameInput = element(by.id('userNameInput'));
            const passwordInput = element(by.id('passwordInput'));
            const submitButton = element(by.id('submitButton'));

            await goTo();
            await browser.driver.wait(ExpectedConditions.urlContains('fs_test.bzwbk'), timeout);
            await browser.driver.wait(ExpectedConditions.visibilityOf(userNameInput), timeout);

            userNameInput.sendKeys(login);
            passwordInput.sendKeys(passwd);
            submitButton.click();

            await browser.driver.wait(ExpectedConditions.urlContains('app-fe20'), timeout);
            return await browser.driver.sleep(sleepTime);
        } else {
            return await goTo();
        }
    };

    const getScenario = async (): Promise<Scenario | undefined> => {
        const scenarioApiUrl = browser.params.urls.instance + 'core/scenario/';
        const bearerToken = await getAuthToken();
        const scenario = await httpService.get<Scenario>(scenarioApiUrl, {Authorization: `Bearer ${bearerToken}`});

        return !_.isEmpty(scenario) ? scenario : undefined;
    };

    const setScenario = async (scenario: Scenario): Promise<any> => {
        const scenarioApiUrl = browser.params.urls.instance + 'core/scenario/';
        const bearerToken = await getAuthToken();
        const headers = {Authorization: `Bearer ${bearerToken}`, 'Content-Type': 'application/json'};
        return await httpService.post(scenarioApiUrl, scenario, headers);
    };

    const addCustomer = async (customer: SetCustomerData): Promise<any> => {
        const customerApiUrl = browser.params.urls.instance + 'core/customers/';
        const bearerToken = await getAuthToken();
        const headers = {Authorization: `Bearer ${bearerToken}`, 'Content-Type': 'application/json'};

        return await httpService.post(customerApiUrl, customer, headers);
    };

    const getCustomer = async (): Promise<GetCustomerData> => {
        const customerApiUrl = browser.params.urls.instance + 'core/customers/';
        const bearerToken = await getAuthToken();
        return await httpService.get<GetCustomerData>(customerApiUrl, {Authorization: `Bearer ${bearerToken}`});
    };

    const clearCustomers = async (): Promise<any> => {
        const customerApiUrl = browser.params.urls.instance + 'core/customers/';
        const bearerToken = await getAuthToken();
        const headers = {Authorization: `Bearer ${bearerToken}`, 'Content-Type': 'application/json'};
        return await httpService.delete(customerApiUrl, {}, headers);
    };

    const setAppMode = async (mode: number): Promise<void> => {
        const nfkLocalMock = await localStorage.getItem('nfkLocalMock');
        const newMock = {...nfkLocalMock, mode};
        await localStorage.setItem('nfkLocalMock', newMock);

        // We want to clear customer data if we in add mode
        if (mode === addCustomerMode) {
            await clearCustomerPersonal();
        }
    };

    const clearCustomerPersonal = async () => {
        const nfkLocalMock = await localStorage.getItem('nfkLocalMock');
        const newMock = {
            ...nfkLocalMock,
            data: {
                ...nfkLocalMock.data,
                customerPersonal: {},
            },
        };
        await localStorage.setItem('nfkLocalMock', newMock);
    };

    const setCif = async (cif: string): Promise<void> => {
        const nfkLocalMock = await localStorage.getItem('nfkLocalMock');
        const newMock = {
            ...nfkLocalMock,
            data: {
                ...nfkLocalMock.data,
                customerNumber: cif,
                cif,
            },
        };
        await localStorage.setItem('nfkLocalMock', newMock);
    };

    const setPermissions = async (permissions: string): Promise<void> => {
        const permissionsArray = permissions.split(', ');
        const nfkLocalMock = await localStorage.getItem('nfkLocalMock');
        const newMock = {
            ...nfkLocalMock,
            permissions: permissionsArray,
        };
        await localStorage.setItem('nfkLocalMock', newMock);
    };

    const getAuthToken = async (): Promise<string> => {
        if (authToken != null) {
            return authToken;
        } else {
            const cookies = await browser.driver.manage().getCookies();
            return Array.from(cookies).filter(x => x.name === 'auth_token')[0].value;
        }
    };

    export const refreshPage = async () => await browser.refresh();

    export const getElementById = (id: string): ElementFinder => element(by.id(id));
    export const getInput = (id: string): ElementFinder => element(by.css(`input[id="${id}"]`));

    const hasClass = async (locator: ElementFinder, className: string): Promise<boolean> => {
        const classes = await locator.getAttribute('class');
        return classes.indexOf(className) > -1;
    };

    export const goTo = async (paramsUrl = '') => {
        const currentUrl = await browser.driver.getCurrentUrl();
        const basicUrl = browser.params.urls.instance;
        const realUrl = basicUrl + paramsUrl;

        if (realUrl && currentUrl !== realUrl) {
            return await browser.driver.get(realUrl);
        }
    };

    export const waitFor = async (locator: ElementFinder) => {
        try {
            return await browser.driver.wait(ExpectedConditions.visibilityOf(locator), timeout);
        } catch (e) {
            const screenshot = await takeScreenshot();
            console.log('Screenshot for error: ', screenshot);
            throw e;
        }
    };

    const waitForAll = async (locators: ElementArrayFinder): Promise<boolean> => {
        return browser.driver.wait(async () => {
            const actualCount = await locators.count();
            return actualCount > 0;
        }, timeout);
    };

    export const setInputValue = async (locator: ElementFinder, value: string, shouldWaitFor = true): Promise<void> => {
        if (shouldWaitFor) {
            await waitFor(locator);
        }
        await locator.clear();
        await locator.sendKeys(value);
    };

    export const getInputValue = async (locator: ElementFinder): Promise<string> => {
        await waitFor(locator);
        return await locator.getAttribute('value');
    };

    export const selectFromAutocomplete = async (locator: ElementFinder, value: string): Promise<void> => {
        await setInputValue(locator, value);
        const firstListElement = locator.element(by.xpath(`.//following-sibling::ngb-typeahead-window/button[1]`));
        await click(firstListElement);
    };

    export const click = async (locator: ElementFinder, shouldWaitFor = true): Promise<void> => {
        if (shouldWaitFor) {
            await waitFor(locator);
        }
        await locator.click();
    };

    export const isEditable = async (locator: ElementFinder): Promise<boolean> => {
        await waitFor(locator);
        return await locator.isEnabled();
    };

    export const isEqual = async (locator: ElementFinder, value: string): Promise<boolean> =>
        (await locator.getAttribute('value')).toLowerCase() === value.toLowerCase();

    export const isVisible = async (locator: ElementFinder): Promise<boolean> => await locator.isDisplayed();

    export const isValid = async (locator: ElementFinder): Promise<boolean> => await hasClass(locator, 'ngrx-forms-valid');

    export const isChecked = async (locator: ElementFinder): Promise<boolean> => await locator.isSelected();

}
