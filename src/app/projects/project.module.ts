import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ProjectRoutes} from './project-routing.module';
import {ProjectComponent} from './project.component';
import {NewProjectComponent} from './new-project/new-project.component';
import {ProjectListComponent} from './project-list/project-list.component';


@NgModule({
  imports: [SharedModule, ProjectRoutes],
  declarations: [ProjectComponent, NewProjectComponent, ProjectListComponent],
  exports: [
    ProjectComponent
  ]
})
export class ProjectModule {
}
