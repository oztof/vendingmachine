import { Component, OnInit } from '@angular/core';
import { DataService } from '../../common/services/data.service';

@Component({
  selector: 'app-maindisplay',
  templateUrl: './maindisplay.component.html',
  styleUrls: ['./maindisplay.component.css']
})
export class MaindisplayComponent implements OnInit {
  status = "";
  imageUrl = "";
  
  constructor(private dataService: DataService) { 
  }

  ngOnInit() {
    // when there is a change we need to update the title and imageUrl
    this.dataService.currentStatus.subscribe(newStatus => {
      this.status = newStatus.title;
      this.imageUrl = newStatus.imageUrl;
    });
  }

}
