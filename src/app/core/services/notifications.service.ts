import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NotificationInterface} from '../models/notification.model';

@Injectable()
export class NotificationsService {

  private postsURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getData(): Observable<NotificationInterface> {

    return this.http.get<NotificationInterface>(this.postsURL);
  }

}
