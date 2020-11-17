import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class CoreService {
  public static baseUrl(url = '', params = {}): string {
    params = params || {};

    Object.keys(params).reduce((result, key) => {
      if (url.indexOf(':' + key) > -1) {
        url = url.replace(':' + key, params[key]);
        delete params[key];
      }
      return null;
    }, null);

    url += Object.keys(params).length > 0 ? '?' + (new URLSearchParams(params)).toString() : '';

    return environment.apiUrl + url;
  }

  public deepCopy(item) {
    return JSON.parse(JSON.stringify(item));
  }
}
