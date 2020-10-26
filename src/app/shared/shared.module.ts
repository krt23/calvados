import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedMaterialModule} from './material/shared-material.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {NotificationsComponent} from './header/notifications/notifications.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    SharedMaterialModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NotificationsComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class SharedModule {
}
