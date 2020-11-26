import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {AdminSidebarContent, SidebarContent} from './navigation.model';
import {filter, map, mergeMap, takeUntil, tap} from 'rxjs/operators';
import {AuthService} from '../../core/services/auth.service';

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
  public adminMode;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    console.log('user');
    // console.log(this.router.events);
    // console.log(this.authService.currentUserValue);
    if (this.authService.currentUserValue) {
      this.show = true;
    } else {
      this.show = false;
    }
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd),
    //   takeUntil(this.unsubscribe$)
    // ).subscribe(
    //   (res: NavigationEnd) => this.checkUrl(res)
    // );
  }

  checkUrl(router) {
    console.log(router);
    console.log(router.url.indexOf('accept-invite/view'));
    if (this.router.url === '/login') {
      this.show = false;
    } else {
      this.show = true;
    }
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.cdr.detach();
  }
}
