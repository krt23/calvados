import {Routes, RouterModule} from '@angular/router';
import {TasksAndProjectsComponent} from './tasks-and-projects.component';


const routes: Routes = [
  {path: '', component: TasksAndProjectsComponent},
];

export const TasksAndProjectsRoutes = RouterModule.forChild(routes);
