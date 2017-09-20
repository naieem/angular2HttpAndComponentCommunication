import { Component, OnInit } from '@angular/core';

import {DataserviceService} from '../service/dataservice.service';
import {Data} from '../model/data.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  /**
   * Declaration of all local variables
   */
  data:Data[];
  parentstring:string="this is from parent";
  parentStringToEmit:string;
  stringToRightSidebar:string;
  /** end of declaration of local variables */

  constructor(private dataservice:DataserviceService) { }

  /**
   * Getting data via http call
   */
  loadData(){
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
  /**
   * Function calls when notification emits from left sidebar
   * @param message 
   */
  onNotify(message:string) {
    this.parentStringToEmit=message;
    this.stringToRightSidebar=message;
  }
  /**
   * function calls after constructor
   */
  ngOnInit() {
    this.loadData();
  }

}
