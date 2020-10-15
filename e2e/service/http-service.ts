import 'reflect-metadata';

const fetch = require('isomorphic-fetch');

export class HttpService {

  async get<T>(url: string, headers: any): Promise<T> {
    const response = await fetch(url, {method: 'GET', credentials: 'same-origin', headers: headers});
    return await response.json();
  }

  async post<T>(url: string, obj: any, headers: any): Promise<T | void> {
    return await this.doFetch<T>('POST', url, obj, headers);
  }

  async put<T>(url: string, obj: any, headers): Promise<T | void> {
    return await this.doFetch<T>('PUT', url, obj, headers);
  }

  async delete<T>(url: string, obj: any, headers: any): Promise<T | void> {
    return await this.doFetch<T>('DELETE', url, obj, headers);
  }

  private async doFetch<T>(method: string, url: string, obj: any, headers: any): Promise<T | undefined> {
    const response = await  fetch(url, {credentials: 'same-origin', method, headers: headers, body: JSON.stringify(obj)});
    const contentType = response.headers.get('content-type');

    return contentType && contentType.indexOf('application/json') !== -1
      ? await response.json
      : await response.text();
  }
}
