import {Routes, RouterModule} from '@angular/router';
import {SecretSantaComponent} from './secret-santa.component';


const routes: Routes = [
  {path: '', component: SecretSantaComponent},
];

export const SecretSantaRoutes = RouterModule.forChild(routes);
