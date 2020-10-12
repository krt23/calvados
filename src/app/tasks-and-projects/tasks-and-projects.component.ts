import {Component, OnDestroy, OnInit} from '@angular/core';
import {Employees, Projects} from '../MOCK-DATA/mock-data';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ProjectsInterface} from '../MOCK-DATA/mock-data.model';

@Component({
  selector: 'app-tasks-and-projects',
  templateUrl: './tasks-and-projects.component.html',
  styleUrls: ['./tasks-and-projects.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TasksAndProjectsComponent implements OnInit, OnDestroy {
  public dataSource = Projects;
  public columnsToDisplay: string[] = ['name', 'dateStart', 'status', 'descriptions'];
  public expandedElement: ProjectsInterface | null;
  constructor(
  ) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
}
