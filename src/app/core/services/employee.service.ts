import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EmployeesInterface} from '../models/employees.model';

@Injectable()
export class EmployeeService {

  private postsURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getData(): Observable<EmployeesInterface> {
    return this.http.get<EmployeesInterface>(this.postsURL);
  }

}
