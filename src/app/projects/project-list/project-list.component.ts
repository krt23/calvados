import {Component, OnDestroy, OnInit} from '@angular/core';
import {Projects} from '../../MOCK-DATA/mock-data';
import {ProjectsInterface} from '../../core/models/project.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ProjectListComponent implements OnInit, OnDestroy {
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
