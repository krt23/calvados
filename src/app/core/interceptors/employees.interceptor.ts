import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {Employees} from '../../MOCK-DATA/mock-data';

@Injectable()
export class EmployeesInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith('https://jsonplaceholder.typicode.com')) {
      return of(new HttpResponse({
        status: 200, body: Employees
      }));
    }
    return next.handle(req);
  }
}
