import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdminSidebarContent, SidebarContent} from '../sidebar/navigation.model';
import {Subject} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';
import {filter, takeUntil} from 'rxjs/operators';
import {HeaderState, headerStateRoutesMatch, IRoutesMatch} from '../../core/models/header.model';
import {CoreService} from '../../core/services/core.service';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public headerState: HeaderState;
  public headerStateConfig = HeaderState;
  public user = true;
  public show = true;
  public navHeaders =  this.coreService.deepCopy(SidebarContent);
  public adminNavHeaders = AdminSidebarContent;

  public adminMode = false;
  public unsubscribe$: Subject<void> = new Subject<void>();


  constructor(
    public router: Router,
    private coreService: CoreService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.navHeaders.push(
      {
        icon: '',
        name: 'New Employee',
        link: '/employees/new'
      },
      {
        icon: '',
        name: 'New Project',
        link: '/projects/new'
      }
    );
    if (this.router.url === '/login') {
      this.show = false;
    }
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.unsubscribe$)
    ).subscribe(
      (res: NavigationEnd) => this.checkUrl(res)
    );
  }

  public goToProfile(): void {

  }

  public onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/', 'login']);
  }
  checkUrl(router) {
    this.headerState = HeaderState.other;
    const headerStateKeys = Array.from(Object.keys(headerStateRoutesMatch));
    for (const key of headerStateKeys) {
      const routeConfig: IRoutesMatch = headerStateRoutesMatch[key];
      if (routeConfig.exactMatch && router.url === routeConfig.route) {
        this.headerState = HeaderState[key];
        break;
      }
      if (!routeConfig.exactMatch && router.url.indexOf(routeConfig.route) > -1) {
        this.headerState = HeaderState[key];
        break;
      }
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
