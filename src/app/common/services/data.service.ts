import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataStatus } from './datastatus';

@Injectable()
export class DataService {

  private statusSource = new BehaviorSubject<DataStatus>(new DataStatus("", ""));
  currentStatus = this.statusSource.asObservable();

  constructor() { }

  changeStatus(newStatus: DataStatus) {
    this.statusSource.next(newStatus);
  }

}