import {Component, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Employee, EmployeesInterface} from '../../core/models/employees.model';
import {EmployeeService} from '../../core/services/employee.service';
import * as fromApp from '../../core/store/app.reducer';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  public employees: Observable<{employees: Employee[]}>;
  public columnsToDisplay: string[] = ['firstName', 'middleName', 'lastName', 'birthday', 'email', 'phone', 'project', 'position', 'dateStart'];
  public expandedElement: EmployeesInterface | null;

  constructor(
    private employeeService: EmployeeService,
    private store: Store<fromApp.AppState>
  ) {
  }

  ngOnInit(): void {
    this.employees = this.store.select('employeesList');
    //  this.getEmployees();

  }

  // getEmployees(): void {
  // this.employeeService.getEmployees().pipe(first()).subscribe(employees => {
  //   this.dataSource = employees;
  // });
  // }

  ngOnDestroy(): void {

  }
}
