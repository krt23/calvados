import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {AuthGuard} from './core/guards/auth.guard';
import {InitGuard} from './core/guards/init.guard';
import {GuestGuard} from './core/guards/guest.guard';


const routes: Routes = [
  {
    path: '', component: SidebarComponent, children: [
      {
        path: '',
      // canActivate: [GuestGuard],
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        pathMatch: 'full'
      },
      {
        path: 'login',
        canActivate: [GuestGuard],
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
      },
      {
        path: 'projects',
        canActivate: [AuthGuard],
        loadChildren: () => import('./projects/project.module').then(m => m.ProjectModule),
      },
      {
        path: 'calendar',
        canActivate: [AuthGuard],
        loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule),
        pathMatch: 'full'
      },
      {
        path: 'employees',
        canActivate: [AuthGuard],
        loadChildren: () => import('./employees/employee.module').then(m => m.EmployeeModule)
      },
      {
        path: 'secret-santa',
        canActivate: [AuthGuard],
        loadChildren: () => import('./secret-santa/secret-santa.module').then(m => m.SecretSantaModule),
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
