import { Component, OnInit } from '@angular/core';
import { Distributor } from '../../distributor/distributor';
import { DataService } from '../../common/services/data.service';

@Component({
  selector: 'app-menu',
  //providers: [ DataService ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  status:string = 'Menu works';
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

  updateCurrentState() : void {
    let currentStateTitle =  this.distributor.getCurrentStateTitle();
    let currentStateImageUrl = this.distributor.getCurrentStateImageUrl();
    this.dataService.changeStatus({title: currentStateTitle, imageUrl: currentStateImageUrl});
  }

  ngOnInit() {
  }

}
