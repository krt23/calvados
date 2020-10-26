import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
// import { FlatpickrModule } from 'angularx-flatpickr';
import {CalendarModule as AngularCalendarModule, DateAdapter } from 'angular-calendar';
import {CalendarComponent} from './calendar.component';
import {CalendarRoutes} from './calendar-routing.module';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';

@NgModule({
  imports: [SharedModule, CalendarRoutes,
    // FlatpickrModule.forRoot(),
    AngularCalendarModule.forRoot({
    provide: DateAdapter,
    useFactory: adapterFactory,
  })
  ],
  declarations: [CalendarComponent, CalendarHeaderComponent],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule {
}
