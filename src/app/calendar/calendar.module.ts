import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CalendarComponent} from './calendar.component';
import {CalendarRoutes} from './calendar-routing.module';

@NgModule({
  imports: [SharedModule, CalendarRoutes],
  declarations: [CalendarComponent],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule {
}
