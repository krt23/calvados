import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {EmployeeRoutes} from './employee-routing.module';
import {EmployeeComponent} from './employee.component';
import {NewEmployeeComponent} from './new-employee/new-employee.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';

@NgModule({
  imports: [SharedModule, EmployeeRoutes],
  declarations: [EmployeeComponent, NewEmployeeComponent, EmployeeListComponent],
  exports: [
    EmployeeComponent
  ]
})
export class EmployeeModule {
}
