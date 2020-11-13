import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CoreService {
  public deepCopy(item) {
    return JSON.parse(JSON.stringify(item));
  }
}
