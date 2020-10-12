import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdminSidebarContent, SidebarContent} from '../sidebar/navigation.model';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public user = true;
  public show = true;
  public navHeaders = SidebarContent;
  public adminNavHeaders = AdminSidebarContent;

  public adminMode = false;
  public unsubscribe$: Subject<void> = new Subject<void>();


  constructor(
    public router: Router
  ) {
  }

  ngOnInit(): void {
    if (this.router.url === '/login') {
      this.show = false;
    }
  }

  public goToProfile(): void {

  }

  public onLogout(): void {

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
