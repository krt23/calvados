import {Routes, RouterModule} from '@angular/router';
import {NewEmployeeComponent} from './new-employee/new-employee.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: EmployeeListComponent},
  {path: 'new', component: NewEmployeeComponent},
];

export const EmployeeRoutes = RouterModule.forChild(routes);
