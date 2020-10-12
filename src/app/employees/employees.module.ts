import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {EmployeesRoutes} from './employees-routing.module';
import {EmployeesComponent} from './employees.component';

@NgModule({
  imports: [SharedModule, EmployeesRoutes],
  declarations: [EmployeesComponent],
  exports: [
    EmployeesComponent
  ]
})
export class EmployeesModule {
}
