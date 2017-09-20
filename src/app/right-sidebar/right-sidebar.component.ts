import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent implements OnInit {
  title:string;
  @Input () fromLeftSidebar:string;
  constructor() { }
  ngOnInit() {
  }

}
