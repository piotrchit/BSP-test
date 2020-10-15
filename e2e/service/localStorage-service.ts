import { browser } from 'protractor';

export class LocalStorage {

  async getItem(key: string) {
    const responseJSON = (await browser.executeScript(`return window.localStorage.getItem('${key}');`)) as string;
    return JSON.parse(responseJSON);
  }

  async setItem(key: string, data: any) {
    await browser.executeScript(`return window.localStorage.setItem('${key}', '${JSON.stringify(data)}');`);
  }

  async removeItem(key: string) {
    await browser.executeScript(`return window.localStorage.removeItem('${key}');`);
  }

  async clear() {
    await browser.executeScript(`return window.localStorage.clear();`);
  }

}
