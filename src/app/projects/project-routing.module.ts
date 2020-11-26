import {Routes, RouterModule} from '@angular/router';
import {NewProjectComponent} from './new-project/new-project.component';
import {ProjectListComponent} from './project-list/project-list.component';


const routes: Routes = [
  {path: '', component: ProjectListComponent},
  {path: 'new', component: NewProjectComponent},
];

export const ProjectRoutes = RouterModule.forChild(routes);
