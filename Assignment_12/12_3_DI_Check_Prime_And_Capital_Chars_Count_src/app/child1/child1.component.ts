import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {


  num = 0;
  isPrime: boolean = false;
  message ="";

  constructor(private numberService: NumberService) { }

  ngOnInit() {

  }

  onBlur(){
    this.isPrime = this.numberService.ChkPrime(this.num);
    if ( this.isPrime){
      this.message = " is Prime number";
    }else {
      this.message = " is not Prime number";

    }
  }

}
