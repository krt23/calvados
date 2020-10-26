import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ProjectsRoutes} from './projects-routing.module';
import {ProjectsComponent} from './projects.component';


@NgModule({
  imports: [SharedModule, ProjectsRoutes],
  declarations: [ProjectsComponent],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule {
}
