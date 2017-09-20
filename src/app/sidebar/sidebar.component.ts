import { Component, OnInit,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  title:string;
  @Input() description:string;
  @Input() fromParent:string;
  constructor() {
    this.title="Title from sidebar";
   }

  ngOnInit() {
  }
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  
    onClick() {
      this.notify.emit('Click from nested component');
    }

}
