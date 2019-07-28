import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  name = ""

  @Input() inputMessage = "";

  @Output() returnName = new EventEmitter();

  constructor() { 

  }

  ngOnInit() {
  }


  fun(){
    this.returnName.emit(this.name);
  }

}
