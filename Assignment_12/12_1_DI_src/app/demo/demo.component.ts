import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  ansAdd: number;
  ansSub: number;
  
  constructor(private arithmeticService: ArithmeticService) { }

  ngOnInit() {
    this.ansAdd = this.arithmeticService.Addition(10,20);
    this.ansSub = this.arithmeticService.Subtraction(10,20);
  }


}
