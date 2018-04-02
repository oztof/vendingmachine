import { Component } from '@angular/core';
import { Distributor } from '../../distributor/distributor';
import { DataService } from '../../common/services/data.service';
import { DataStatus } from '../../common/services/datastatus';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  distributor : Distributor;

  constructor(private dataService : DataService) { 
    this.distributor = new Distributor();
    this.updateCurrentState();
  }
 
  insertCoinHandle() : void {
    this.distributor.insertCoin();
    this.updateCurrentState();
  }

  ejectCoinHandle() : void {
    this.distributor.ejectCoin();
    this.updateCurrentState();
  }

  turnButtonHandle() : void {
    this.distributor.turnButton();
    this.updateCurrentState();
  }

  pickupItemHandle() : void {
    this.distributor.pickupItem();
    this.updateCurrentState();
  }

  // a button was pressed so we trigger a status change
  updateCurrentState() : void {
    let currentStateTitle =  this.distributor.getCurrentStateTitle();
    let currentStateImageUrl = this.distributor.getCurrentStateImageUrl();
    this.dataService.changeStatus(new DataStatus(currentStateTitle, currentStateImageUrl));
  }
}
