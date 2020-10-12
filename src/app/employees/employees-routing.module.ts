import {Routes, RouterModule} from '@angular/router';
import {EmployeesComponent} from './employees.component';


const routes: Routes = [
  {path: '', component: EmployeesComponent},
];

export const EmployeesRoutes = RouterModule.forChild(routes);
