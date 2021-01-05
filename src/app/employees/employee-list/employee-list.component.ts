import {Component, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Employee, EmployeesInterface} from '../../core/models/employees.model';
import {EmployeeService} from '../../core/services/employee.service';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from '../../core/store/state/app.state';
import {GetEmployees} from '../../core/store/actions/employee.actions';
import {selectEmployeeList} from '../../core/store/selectors/employee.selector';

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
  public employees: Observable<{ employeeList: Employee[] }>;
  public columnsToDisplay: string[] = ['firstName', 'middleName', 'lastName', 'birthday', 'email', 'phone', 'project', 'position', 'dateStart'];
  public expandedElement: EmployeesInterface | null;

  constructor(
    private employeeService: EmployeeService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
   // this.store.dispatch(new GetEmployees());
    this.employees = this.store.select('employees');
    console.log(this.employees);
   // this.getEmployees();

  }

  // getEmployees(): void {
  //   this.employeeService.getEmployees().pipe(first()).subscribe(employees => {
  //     this.dataSource = employees;
  //   });
  // }

  ngOnDestroy(): void {

  }
}
