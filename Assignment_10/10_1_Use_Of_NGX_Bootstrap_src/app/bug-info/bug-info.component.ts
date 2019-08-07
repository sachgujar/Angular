import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bug-info',
  templateUrl: './bug-info.component.html',
  styleUrls: ['./bug-info.component.css']
})
export class BugInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  arrImpact = [ "High", "Medium","Low"];

}
