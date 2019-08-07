import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bug-header',
  templateUrl: './bug-header.component.html',
  styleUrls: ['./bug-header.component.css']
})
export class BugHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public batches=['Pre-Placement Activity','Logic Building','Angular','Python','Industrial Project Development'];

}
