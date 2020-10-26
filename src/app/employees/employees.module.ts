import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {EmployeesRoutes} from './employees-routing.module';
import {EmployeesComponent} from './employees.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

@NgModule({
  imports: [SharedModule, EmployeesRoutes],
  declarations: [EmployeesComponent, NewEmployeeComponent],
  exports: [
    EmployeesComponent
  ]
})
export class EmployeesModule {
}
