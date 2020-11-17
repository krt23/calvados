import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {AuthGuard} from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: '', component: SidebarComponent, children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        // canActivate: [AuthGuard],
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
      },
      {
        // canActivate: [AuthGuard],
        path: 'projects',
        loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
        pathMatch: 'full'
      },
      {
        // canActivate: [AuthGuard],
        path: 'calendar',
        loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule),
        pathMatch: 'full'
      },
      {
        // canActivate: [AuthGuard],
        path: 'employees',
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
      },
      {
        // canActivate: [AuthGuard],
        path: 'secret-santa',
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
