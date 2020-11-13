import {Component, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {EmployeesInterface} from '../../core/models/employees.model';
import {EmployeeService} from '../../core/services/employee.service';

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
  // public dataSource = Employees;
  public dataSource: EmployeesInterface;
  public columnsToDisplay: string[] = ['name', 'birthday', 'email', 'phone', 'project', 'position', 'dateStart'];
  public expandedElement: EmployeesInterface | null;

  constructor(
    private EmployeeService: EmployeeService
  ) {
  }

  ngOnInit(): void {
    this.getData();

  }

  getData(): void {
    this.EmployeeService.getData().subscribe(data => this.dataSource = data);
  }

  ngOnDestroy(): void {

  }
}
