import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {Notifications} from '../../../MOCK-DATA/mock-data';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer: CdkVirtualScrollViewport;
  public countBadge: string;
  public totalNotifications: number;
  public notifications = Notifications;

  constructor() {
  }

  ngOnInit(): void {
    this.applyBadge();
  }

  public applyBadge(): void {
    this.totalNotifications = 4;
    (this.totalNotifications > 9) ? this.countBadge = '+9' : this.countBadge = this.totalNotifications.toString();
  }

  // public changeFormatDate(date) {
  //   return moment(date).fromNow();
  // }

  ngOnDestroy(): void {
  }
}

