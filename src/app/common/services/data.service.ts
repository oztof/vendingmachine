import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private statusSource = new BehaviorSubject<any>({title: "", imageUrl: ""});
  currentStatus = this.statusSource.asObservable();

  constructor() { }

  changeStatus(newStatus: any) {
    this.statusSource.next(newStatus);
  }

}