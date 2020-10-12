import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutes} from './dashboard.routing';

@NgModule({
  imports: [SharedModule, DashboardRoutes],
  declarations: [DashboardComponent],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
