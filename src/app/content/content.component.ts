import { Component, OnInit } from '@angular/core';

import {DataserviceService} from '../service/dataservice.service';
import {Data} from '../model/data.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  data:Data[];
  parentstring:string="this is from parent";
  parentStringToEmit:string;
  constructor(private dataservice:DataserviceService) { }
  loadData(){
    // Get all data
     this.dataservice.getDatas()
                       .subscribe(
                            value=>{
                              this.data=value;
                            },
                            err => {
                                // Log errors if any
                                console.log(err);
                            });
  }
  popup(){
    alert("sdfdsf");
  }
  onNotify(message:string):void {
    this.parentStringToEmit=message;
  }

  ngOnInit() {
    this.loadData();
  }

}
