// https://stackoverflow.com/questions/30501577/how-to-communicate-between-component-in-angular

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
  public _subject = new Subject<object>();
  public event = this._subject.asObservable();

  public publish(data: any) {
    this._subject.next(data);
  }
}