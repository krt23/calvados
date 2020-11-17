import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {UsersInterface} from '../models/users.model';
import {CoreService} from './core.service';
import {api} from '../../../environments/api';

@Injectable({providedIn: 'root'})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UsersInterface>;
  public currentUser: Observable<UsersInterface>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UsersInterface>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UsersInterface {
    return this.currentUserSubject.value;
  }

  login(login: string, password: string) {
    const url = CoreService.baseUrl() + api.auth.login;
    console.log(url);
    return this.http.post<any>(url, { login, password })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
