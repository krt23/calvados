import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './login.component';
import {LoginRoutes} from './login.routing';

@NgModule({
  imports: [SharedModule, LoginRoutes],
  declarations: [LoginComponent]
  // exports: [
  //   LoginComponent
  // ]
})
export class LoginModule {
}
