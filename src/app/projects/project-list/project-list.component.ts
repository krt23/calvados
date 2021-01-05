import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjectInterface} from '../../core/models/project.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../core/store/state/app.state';

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
  public projects: Observable<{ projectList: ProjectInterface[] }>;
  public columnsToDisplay: string[] = ['name', 'dateStart', 'status', 'descriptions'];
  public expandedElement: ProjectInterface | null;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.projects = this.store.select('projects');
  }

  ngOnDestroy(): void {

  }
}
