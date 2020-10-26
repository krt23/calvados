import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public folderStatistic = 20;

  constructor(
  ) {
  }

  ngOnInit(): void {

  }

  redirectToWaiting() {

  }



  ngOnDestroy(): void {

  }

}
