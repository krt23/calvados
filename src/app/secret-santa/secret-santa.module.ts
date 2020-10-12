import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {SecretSantaRoutes} from './secret-santa-routing.module';
import {SecretSantaComponent} from './secret-santa.component';

@NgModule({
  imports: [SharedModule, SecretSantaRoutes],
  declarations: [SecretSantaComponent],
  exports: [
    SecretSantaComponent
  ]
})
export class SecretSantaModule {
}
