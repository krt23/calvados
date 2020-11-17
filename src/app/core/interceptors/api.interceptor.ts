import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpResponse} from '@angular/common/http';
import {delay, dematerialize, materialize, mergeMap} from 'rxjs/operators';
import {Employees, Users} from '../../MOCK-DATA/mock-data';

const users = Users || [];
const employees = Employees;

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/login') && method === 'POST':
          return authenticate();
        case url.endsWith('/employees') && method === 'GET':
          return getEmployees();
        default:
          return next.handle(request);
      }
    }

    // route functions

    function authenticate() {
      const { login, password } = body;
      const user = users.find(x => x.login === login && x.password === password);
      if (!user) { return error('Username or password is incorrect'); }
      return ok({
        id: user.id,
        login: user.login,
        firstName: user.firstName,
        lastName: user.lastName,
        token: 'fake-jwt-token'
      });
    }

    function getEmployees() {
     // if (!isLoggedIn()) { return unauthorized(); }
     // return ok(employees);
      return of(new HttpResponse({status: 200, body: Employees}));
    }

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message) {
      return throwError({ error: { message } });
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
