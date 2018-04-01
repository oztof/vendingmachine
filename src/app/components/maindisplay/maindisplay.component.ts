import { Component, OnInit } from '@angular/core';
import { DataService } from '../../common/services/data.service';

@Component({
  selector: 'app-maindisplay',
  //providers: [ DataService ],  
  templateUrl: './maindisplay.component.html',
  styleUrls: ['./maindisplay.component.css']
})
export class MaindisplayComponent implements OnInit {
  displayText = "i am the main display";
  status = "";
  
  constructor(private dataService: DataService) { 
  }

  ngOnInit() {
    this.dataService.currentStatus.subscribe(newStatus => {
      console.log("Main" + newStatus);
      this.status = newStatus;
    });
  }

}
