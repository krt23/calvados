import {Component, OnDestroy, OnInit} from '@angular/core';
import {Employees} from '../MOCK-DATA/mock-data';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {EmployeesInterface} from '../core/models/employees.model';
import {EmployeesService} from '../core/services/employees.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EmployeesComponent implements OnInit, OnDestroy {
  // public dataSource = Employees;
  public dataSource: EmployeesInterface;
  public columnsToDisplay: string[] = ['name', 'birthday', 'email', 'phone', 'project', 'position', 'dateStart'];
  public expandedElement: EmployeesInterface | null;

  constructor(
    private EmployeesService: EmployeesService
  ) {
  }

  ngOnInit(): void {
    this.getData();

  }

  getData(): void {
    this.EmployeesService.getData().subscribe(data => this.dataSource = data);
  }

  ngOnDestroy(): void {

  }
}
