import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {TasksAndProjectsRoutes} from './tasks-and-projects-routing.module';
import {TasksAndProjectsComponent} from './tasks-and-projects.component';

@NgModule({
  imports: [SharedModule, TasksAndProjectsRoutes],
  declarations: [TasksAndProjectsComponent],
  exports: [
    TasksAndProjectsComponent
  ]
})
export class TasksAndProjectsModule {
}
