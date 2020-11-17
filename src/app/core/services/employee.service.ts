import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EmployeesInterface} from '../models/employees.model';
import {CoreService} from './core.service';
import {api} from '../../../environments/api';

@Injectable({providedIn: 'root'})
export class EmployeeService {
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<EmployeesInterface> {
    const url = CoreService.baseUrl() + api.user.getEmployees;
    console.log(url);
    return this.http.get<EmployeesInterface>('http://localhost:4200:/employees');
  }

}
