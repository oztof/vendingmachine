import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private statusSource = new BehaviorSubject<string>("");
  currentStatus = this.statusSource.asObservable();

  constructor() { }

  changeStatus(newStatus: string) {
    console.log("DataService.changeStatus: " + newStatus);
    this.statusSource.next(newStatus);
  }

}