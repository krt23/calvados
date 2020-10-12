import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {AdminSidebarContent, SidebarContent} from './navigation.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnDestroy, OnInit {
  public user$ = true;
  public isAdmin$ = false;

  public navbar = SidebarContent;
  public adminNavbar = AdminSidebarContent;
  public show = true;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
  }

  ngOnInit() {
    if (this.router.url === '/login') {
      this.show = false;
    }
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.cdr.detach();
  }
}
