import {Component, OnDestroy, OnInit} from '@angular/core';
import {Projects} from '../MOCK-DATA/mock-data';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ProjectsInterface} from '../core/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProjectsComponent implements OnInit, OnDestroy {
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
